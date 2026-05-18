// lib/queue/escalation.queue.ts
import { Queue } from "bullmq";
import { redis, bullmqConnection } from "../redis/redis"; // ← from your lib

export const escalationQueue = new Queue("escalation", {
  connection: bullmqConnection, // ← BullMQ connection
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: "exponential", delay: 5000 },
    removeOnComplete: 100,
    removeOnFail: 50,
  },
});

export async function scheduleEscalation(
  leadId: number,
  senderId: string,
  platform: string,
  reason: string = "No response from AI",
) {
  // const timeoutMinutes = Number(process.env.ESCALATION_TIMEOUT_MINUTES) || 30;
  // const delay = timeoutMinutes * 60 * 1000;
  const timeoutMinutes = 0;
  const delay = 0;

  // ─── Remove existing job ──────────────────────────────
  const existingJobId = await redis.get(`escalation:${senderId}`); // ← redis for get/set

  if (existingJobId) {
    const existingJob = await escalationQueue.getJob(existingJobId);
    if (existingJob) {
      await existingJob.remove();
      console.log(`🗑️ Old escalation removed for ${senderId}`);
    }
  }

  // ─── Add new job ──────────────────────────────────────
  const job = await escalationQueue.add(
    "lead-escalation",
    { leadId, senderId, platform, reason },
    { delay },
  );

  if (!job.id) {
    console.error(`❌ Failed to schedule escalation for ${senderId}`);
    return;
  }

  // ─── Save job ID ──────────────────────────────────────
  await redis.set(
    // ← redis for get/set
    `escalation:${senderId}`,
    job.id,
    "EX",
    timeoutMinutes * 60 + 300,
  );

  console.log(`✅ Escalation job ${job.id} scheduled (${timeoutMinutes} mins)`);
}

export async function cancelEscalation(senderId: string) {
  const jobId = await redis.get(`escalation:${senderId}`); // ← redis for get/set

  if (jobId) {
    const job = await escalationQueue.getJob(jobId);
    if (job) {
      await job.remove();
      console.log(`🗑️ Escalation cancelled for ${senderId}`);
    }
    await redis.del(`escalation:${senderId}`);
  }
}
