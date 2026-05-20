import "dotenv/config";
import { Worker } from "bullmq";
import IORedis from "ioredis";
import { prisma } from "@/lib/prisma";
import { BASE_URL } from "@/config/api";

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
    const response = await fetch(
      `${BASE_URL}/escalate`,

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          senderId,

          escalationType: "INACTIVITY",

          reason: "User inactive",
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Escalation API failed");
    }

    console.log("✅ Escalation handled by Python");

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
