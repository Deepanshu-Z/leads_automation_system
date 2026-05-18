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
    // ==========================================
    // ONLY HANDLE ESCALATION JOBS
    // ==========================================

    if (job.name !== "lead-escalation") {
      return;
    }

    const {
      leadId,

      senderId,

      platform,
    } = job.data;

    console.log(`🚨 Processing escalation for lead ${leadId}`);

    // ==========================================
    // FETCH LEAD
    // ==========================================

    const lead = await prisma.lead.findUnique({
      where: {
        id: leadId,
      },
    });

    // ==========================================
    // LEAD NOT FOUND
    // ==========================================

    if (!lead) {
      console.log("❌ Lead not found");

      return;
    }

    // ==========================================
    // STALE JOB CHECK
    // ==========================================

    const CLOSED_STATUSES = ["PAID", "CLOSED", "CONVERTED"];

    if (CLOSED_STATUSES.includes(lead.status)) {
      console.log(`⏭️ Skipping stale escalation for lead ${leadId}`);

      return;
    }

    // ==========================================
    // UPDATE LEAD STATUS
    // ==========================================

    await prisma.lead.update({
      where: {
        id: leadId,
      },

      data: {
        status: "ESCALATED",
      },
    });

    console.log(`🚨 Lead ${leadId} escalated`);

    // ==========================================
    // PAUSE AI
    // ==========================================

    await connection.set(
      `ai_paused:${leadId}`,

      "true",
    );

    console.log(`🛑 AI paused for lead ${leadId}`);

    // ==========================================
    // TODO:
    // notify human agent
    // send Slack alert
    // assign support rep
    // ==========================================
  },

  {
    connection,
  },
);

escalationWorker.on(
  "completed",

  (job) => {
    console.log(`✅ Escalation job ${job.id} completed`);
  },
);

escalationWorker.on(
  "failed",

  (job, err) => {
    console.error(
      `❌ Escalation job ${job?.id} failed:`,

      err.message,
    );
  },
);
