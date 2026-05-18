import { Queue } from "bullmq";
import { redis } from "@/lib/redis/redis";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL!);

export const escalationQueue = new Queue(
  "escalation",

  {
    connection,
  },
);

export async function scheduleEscalation(
  leadId: number,

  senderId: string,

  platform: string,
) {
  // ==========================================
  // REMOVE OLD JOB
  // ==========================================

  const existingJobId = await redis.get(`escalation:${senderId}`);

  if (existingJobId) {
    const existingJob = await escalationQueue.getJob(existingJobId);

    if (existingJob) {
      await existingJob.remove();

      console.log("🗑️ Old escalation removed");
    }
  }

  // ==========================================
  // CREATE NEW JOB
  // ==========================================

  const timeoutMinutes = Number(process.env.ESCALATION_TIMEOUT_MINUTES);

  const delay = timeoutMinutes * 60 * 1000;

  const job = await escalationQueue.add(
    "lead-escalation",

    {
      leadId,
      senderId,
      platform,
    },

    {
      delay,
    },
  );
  if (!job.id) {
    console.log("error setting up job ");
    return;
  }
  // ==========================================
  // SAVE JOB MAPPING
  // ==========================================

  await redis.set(`escalation:${senderId}`, job?.id ?? "");

  console.log(`⏰ Escalation scheduled for ${senderId}`);
}
