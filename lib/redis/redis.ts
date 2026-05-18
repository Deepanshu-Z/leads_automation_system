// lib/redis/redis.ts
import Redis from "ioredis";

// ─── General Redis client (for get/set/del) ───────────────
export const redis = new Redis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null, // ← required for BullMQ
  enableReadyCheck: false, // ← prevents connection errors on startup
});

// ─── BullMQ connection (same config, separate instance) ───
export const bullmqConnection = new Redis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
});
