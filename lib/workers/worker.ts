import "dotenv/config";
import { Queue } from "bullmq";
import IORedis from "ioredis";
function createConnection() {
  if (!process.env.REDIS_URL) {
    throw new Error("REDIS_URL is not defined in environment variables");
  }

  return new IORedis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null,
    tls: { rejectUnauthorized: false },
    enableAutoPipelining: true,
  });
}

function createQueue(name: string) {
  return new Queue(name, {
    connection: createConnection(),
    defaultJobOptions: {
      attempts: 3,
      backoff: { type: "exponential", delay: 1000 },
      removeOnComplete: true,
    },
  });
}

const globalForQueue = global as unknown as {
  leadQueue: Queue;
  escalationQueue: Queue;
};

export const leadQueue =
  globalForQueue.leadQueue || createQueue("lead-processing");

export const escalationQueue =
  globalForQueue.escalationQueue || createQueue("escalation");

if (process.env.NODE_ENV !== "production") {
  globalForQueue.leadQueue = leadQueue;
  globalForQueue.escalationQueue = escalationQueue;
}
