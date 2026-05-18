// workers/escalation.worker.ts
import "dotenv/config";
import { Worker } from "bullmq";
import IORedis from "ioredis";
import { prisma } from "@/lib/prisma";

const connection = new IORedis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
});

export const escalationWorker = new Worker(
  "escalation",

  async (job) => {
    if (job.name !== "lead-escalation") return;

    const { leadId, senderId, platform } = job.data;

    console.log(`🚨 Processing escalation for lead ${leadId}`);

    // ─── Fetch lead ───────────────────────────────────
    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
    });

    if (!lead) {
      console.log("❌ Lead not found");
      return;
    }

    // ─── Already escalated — just ensure AI is paused ─
    if (lead.status === "ESCALATED") {
      console.log(`⚠️ Lead ${leadId} already ESCALATED — ensuring AI paused`);

      await connection.set(
        `ai_paused:${senderId}`,
        "true",
        "EX",
        86400, // 24hr TTL
      );

      console.log(`🛑 AI pause confirmed for sender: ${senderId}`);
      return;
    }

    // ─── Fresh escalation ─────────────────────────────
    await prisma.lead.update({
      where: { id: leadId },
      data: { status: "ESCALATED" },
    });

    await connection.set(`ai_paused:${senderId}`, "true", "EX", 86400);

    await prisma.escalationLog.create({
      data: {
        leadId,
        reason: job.data.reason || "Low confidence AI response",
        escalatedAt: new Date(),
      },
    });

    console.log(`🚨 Lead ${leadId} escalated`);
    console.log(`🛑 AI paused for sender: ${senderId}`);

    // TODO: notify human agent / Slack alert / assign rep
  },

  { connection },
);

escalationWorker.on("completed", (job) =>
  console.log(`✅ Escalation job ${job.id} completed`),
);

escalationWorker.on("failed", (job, err) =>
  console.error(`❌ Escalation job ${job?.id} failed:`, err.message),
);
