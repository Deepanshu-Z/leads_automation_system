import { Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null, // Required by BullMQ
});

// Singleton pattern to prevent multiple connections in development
const globalForQueue = global as unknown as { leadQueue: Queue };

export const leadQueue =
  globalForQueue.leadQueue ||
  new Queue("lead-processing", {
    connection,
    defaultJobOptions: {
      attempts: 3,
      backoff: { type: "exponential", delay: 1000 },
      removeOnComplete: true, // Keep Redis clean
    },
  });

if (process.env.NODE_ENV !== "production") globalForQueue.leadQueue = leadQueue;
