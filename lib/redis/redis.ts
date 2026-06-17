// lib/redis/redis.ts
import Redis from "ioredis";

// ─── General Redis client (for get/set/del) ───────────────
export const redis = new Redis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null, // ← required for BullMQ
  enableReadyCheck: false, // ← prevents connection errors on startup
});

redis.on("error", (err) => {
  console.error("Redis connection error:", err.message);
});

// ─── BullMQ connection (same config, separate instance) ───
export const bullmqConnection = new Redis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
});

bullmqConnection.on("error", (err) => {
  console.error("BullMQ connection error:", err.message);
});

