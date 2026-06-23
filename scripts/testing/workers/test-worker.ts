import { Worker } from "bullmq";
import IORedis from "ioredis";
import "dotenv/config";

const isTls = process.env.REDIS_URL?.startsWith("rediss://");
const connection = new IORedis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
  ...(isTls ? { tls: { rejectUnauthorized: false } } : {}),
  enableAutoPipelining: true,
});

const worker = new Worker(
  "lead-processing",
  async (job) => {
    console.log("Checking for jobs...");
    console.log(`Processing Job ID: ${job.id}`);
    console.log("Data received:", job.data);

    // Simulate work
    await new Promise((res) => setTimeout(res, 2000));

    return { result: "Success!" };
  },
  { connection },
);

worker.on("completed", (job) => console.log(`Job ${job.id} completed!`));
worker.on("failed", (job, err) =>
  console.error(`Job ${job?.id} failed: ${err.message}`),
);
