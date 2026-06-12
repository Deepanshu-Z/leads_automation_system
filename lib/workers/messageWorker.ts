import "dotenv/config";

import { Worker } from "bullmq";

import IORedis from "ioredis";

import { sendMessage } from "@/lib/messaging/sendMessage";

import { BASE_URL } from "@/config/api";

import { scheduleEscalation } from "../queue/escalation_queue";

const connection = new IORedis(
  process.env.REDIS_URL!,

  {
    maxRetriesPerRequest: null,
  },
);

export const messageWorker = new Worker(
  "lead-processing",

  async (job) => {
    // =====================================
    // SEND MESSAGE JOB
    // =====================================

    if (job.name === "send-message") {
      const {
        platform,

        recipientId,

        text,
      } = job.data;

      await sendMessage(
        platform,

        recipientId,

        text,
      );

      console.log("✅ Message sent");

      return;
    }

    // =====================================
    // INCOMING MESSAGE JOB
    // =====================================

    if (job.name === "incoming-message") {
      const {
        platform,

        senderId,

        text,

        phoneNumberId,
      } = job.data;

      console.log(`📨 Processing message from ${senderId}`);

      // =====================================
      // CALL PYTHON AI API
      // =====================================

      const response = await fetch(
        `${BASE_URL}/process`,

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            platform,

            senderId,

            message: text,
          }),
        },
      );

      // =====================================
      // FETCH FAILED
      // =====================================

      if (!response.ok) {
        throw new Error(`Python API failed: ${response.status}`);
      }

      // =====================================
      // PARSE JSON
      // =====================================

      const data = await response.json();

      console.log(data);

      const {
        reply,

        leadId,

        escalate,

        escalationType,
      } = data;
      if (escalate) {
        console.log("HEY WE WILL NOT PROCEED BCS OF ESCALATION!");
        if (reply)
          await sendMessage(
            platform,

            senderId,

            reply,

            undefined,

            phoneNumberId,
          );
        return;
      }
      console.log(`🤖 AI Reply: ${reply}`);

      console.log(`🆔 Lead ID: ${leadId}`);

      // =====================================
      // SEND MESSAGE TO USER
      // =====================================

      await sendMessage(
        platform,

        senderId,

        reply,

        undefined,

        phoneNumberId,
      );

      console.log(`✅ Reply sent to ${senderId}`);

      // NORMAL INACTIVITY TIMER
      // =====================================

      await scheduleEscalation(
        leadId,

        senderId,

        platform,

        "No user response",

        "INACTIVITY",

        phoneNumberId,
      );

      console.log(`⏰ Escalation timer started`);
    }
  },

  {
    connection,
  },
);

messageWorker.on(
  "completed",

  (job) => console.log(`✅ Job ${job.id} completed`),
);

messageWorker.on(
  "failed",

  (job, err) =>
    console.error(
      `❌ Job ${job?.id} failed:`,

      err.message,

      err,
    ),
);
