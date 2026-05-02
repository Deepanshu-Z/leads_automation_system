import "dotenv/config";
import { Worker } from "bullmq";
import IORedis from "ioredis";
import { sendMessage } from "@/lib/messaging/sendMessage";
import { BASE_URL } from "@/config/api";

const connection = new IORedis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
});

export const messageWorker = new Worker(
  "lead-processing",
  async (job) => {
    if (job.name === "send-message") {
      // ── existing send-message logic ──
      const { platform, recipientId, text } = job.data;
      await sendMessage(platform, recipientId, text);
      console.log("✅ Message sent");
    } else if (job.name === "incoming-message") {
      const { platform, senderId, text } = job.data;

      console.log(`📨 Processing incoming message from ${senderId}`);

      // ── Call Python to process AI + save to DB ──
      const response = await fetch(`${BASE_URL}/process`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform,
          senderId,
          message: text,
        }),
      });

      if (!response.ok) {
        throw new Error(`Python API failed: ${response.status}`);
      }

      const { reply } = await response.json();

      console.log(`🤖 AI Reply: ${reply}`);

      // ── Send reply back to user via Meta ──
      await sendMessage(platform, senderId, reply);

      console.log(`✅ Reply sent to ${senderId}`);
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
