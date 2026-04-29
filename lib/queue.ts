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

export const escalationQueue = new Queue("escalation", {
  connection,
  defaultJobOptions: {
    priority: 1, // You can give escalation jobs higher priority
    attempts: 1, // Usually, you don't want to retry an escalation indefinitely
  },
});

if (process.env.NODE_ENV !== "production") globalForQueue.leadQueue = leadQueue;
