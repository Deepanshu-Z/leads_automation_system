// lib/queue/escalation.queue.ts
import { Queue } from "bullmq";
import { redis, bullmqConnection } from "../redis/redis"; // ← from your lib
const timeoutMinutes = Number(process.env.ESCALATION_TIMEOUT_MINUTES);
const delay = timeoutMinutes * 60 * 1000;
const ttlSeconds = timeoutMinutes * 60 + 60;
export const escalationQueue = new Queue("escalation", {
  connection: bullmqConnection, // ← BullMQ connection
  defaultJobOptions: {
    attempts: 1,
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

  type: "INACTIVITY" | "LOW_AI_CONFIDENCE" = "INACTIVITY",
) {
  // =====================================
  // TEST MODE
  // =====================================

  const timeoutMinutes = Number(process.env.ESCALATION_TIMEOUT_MINUTES);
  const delay = timeoutMinutes * 60 * 1000;

  // =====================================
  // REMOVE EXISTING JOB
  // =====================================

  const existingJobId = await redis.get(`escalation_${senderId}`);
  if (existingJobId) {
    const existingJob = await escalationQueue.getJob(existingJobId);
    if (existingJob) {
      const state = await existingJob.getState();
      // Only remove if not already executing or done
      if (state === "delayed" || state === "waiting") {
        await existingJob.remove();
        console.log(`🗑️ Old escalation removed for ${senderId} (was ${state})`);
      } else {
        console.warn(
          `⚠️ Could not remove job ${existingJobId} — state: ${state}`,
        );
      }
    }
    await redis.del(`escalation_${senderId}`); // always clean up stale key
  }

  // =====================================
  // CREATE JOB
  // =====================================

  const job = await escalationQueue.add(
    "lead-escalation",

    {
      leadId,

      senderId,

      platform,

      reason,

      type,
    },

    {
      delay,
      jobId: `escalation_${senderId}`,
    },
  );

  // =====================================
  // FAILED
  // =====================================

  if (!job.id) {
    console.error(`❌ Failed to schedule escalation for ${senderId}`);

    return;
  }

  // =====================================
  // SAVE JOB ID
  // =====================================

  await redis.set(`escalation_${senderId}`, job.id, "EX", ttlSeconds);

  console.log(`⏰ Escalation job ${job.id} scheduled`);
}

export async function cancelEscalation(senderId: string) {
  const jobId = await redis.get(`escalation_${senderId}`); // ← redis for get/set

  if (jobId) {
    const job = await escalationQueue.getJob(jobId);
    if (job) {
      await job.remove();
      console.log(`🗑️ Escalation cancelled for ${senderId}`);
    }
    await redis.del(`escalation_${senderId}`);
  }
}
