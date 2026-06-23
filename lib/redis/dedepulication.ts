import "dotenv/config";
import IORedis from "ioredis";

const isTls = process.env.REDIS_URL?.startsWith("rediss://");
const redis = new IORedis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
  ...(isTls ? { tls: { rejectUnauthorized: false } } : {}),
  enableAutoPipelining: true,
});

redis.on("error", (err) => {
  console.error("Deduplication Redis connection error:", err.message);
});


const TTL_24_HOURS = 60 * 60 * 24; // in seconds

export async function isNewMessage(messageId: string): Promise<boolean> {
  const key = `msg:${messageId}`;

  const result = await redis.set(key, "1", "EX", TTL_24_HOURS, "NX");

  return result === "OK";
}

export async function isProcessed(messageId: string): Promise<boolean> {
  const key = `msg:${messageId}`;
  const exists = await redis.exists(key);
  return exists === 1;
}
