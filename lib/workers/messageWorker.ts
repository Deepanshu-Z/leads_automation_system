import "dotenv/config";
import { Worker } from "bullmq";
import IORedis from "ioredis";
import { sendMessage } from "@/lib/messaging/sendMessage";
const connection = new IORedis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
});

export const messageWorker = new Worker(
  "lead-processing",
  async (job) => {
    if (job.name === "send-message") {
      const { platform, recipientId, text } = job.data;

      console.log("Processing job:", job.id);
      console.log("Platform:", platform);
      console.log("RecipientId:", recipientId);
      console.log(
        "META_ACCESS_TOKEN:",
        process.env.META_VERIFY_TOKEN ? "✅ loaded" : "❌ undefined",
      );
      console.log(
        "PHONE_NUMBER_ID:",
        process.env.WHATSAPP_PHONE_NUMBER_ID ? "✅ loaded" : "❌ undefined",
      );

      await sendMessage(platform, recipientId, text);

      console.log("✅ Message sent");
    }
  },
  { connection },
);

messageWorker.on("completed", (job) =>
  console.log(`✅ Job ${job.id} completed`),
);
messageWorker.on("failed", (job, err) =>
  console.error(`❌ Job ${job?.id} failed:`, err.message),
);
