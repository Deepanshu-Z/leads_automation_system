import { Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
});

// ================= TYPES =================
type Platform = "whatsapp" | "instagram" | "messenger";

export type SendMessageJob = {
  platform: Platform;
  recipientId: string;
  text: string;
};

// ================= SINGLETON =================
const globalForQueue = global as unknown as {
  leadQueue: Queue;
};

// ================= MAIN QUEUE =================
export const leadQueue =
  globalForQueue.leadQueue ||
  new Queue("lead-processing", {
    connection,
    defaultJobOptions: {
      attempts: 3,
      backoff: { type: "exponential", delay: 1000 },
      removeOnComplete: true,
    },
  });

// ================= HELPER FUNCTION =================
export async function addSendMessageJob(data: SendMessageJob) {
  return leadQueue.add("send-message", data);
}

// ================= DEV FIX =================
if (process.env.NODE_ENV !== "production") {
  globalForQueue.leadQueue = leadQueue;
}
