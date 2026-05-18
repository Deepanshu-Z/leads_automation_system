import { Worker } from "bullmq";

import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL!);

new Worker(
  "escalation",

  async (job) => {
    const {
      leadId,

      senderId,

      platform,
    } = job.data;

    console.log(`🚨 Escalating lead ${leadId}`);

    // ======================================
    // TODO:
    // send follow-up message
    // notify admin
    // mark escalated
    // ======================================
  },

  {
    connection,
  },
);
``;
