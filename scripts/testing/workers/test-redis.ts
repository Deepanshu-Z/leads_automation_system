import dotenv from "dotenv";
import IORedis from "ioredis";

// Load the .env variables manually for this script
dotenv.config({ path: ".env" });

async function testConnection() {
  console.log("Checking REDIS_URL...");

  if (!process.env.REDIS_URL) {
    console.error("❌ REDIS_URL is missing in your .env file!");
    return;
  }

  const redis = new IORedis(process.env.REDIS_URL, {
    tls: { rejectUnauthorized: false },
  });

  try {
    console.log("Attempting to connect to Upstash...");

    // 5.5: Simple set/get command
    await redis.set("test_key", "Hello from Automation System!");
    const value = await redis.get("test_key");

    if (value === "Hello from Automation System!") {
      console.log("✅ SUCCESS: Connection established!");
      console.log("✅ Data retrieved:", value);
    } else {
      console.log("❌ FAILED: Data mismatch.");
    }
  } catch (error) {
    console.error("❌ CONNECTION ERROR:", error);
  } finally {
    redis.disconnect();
    process.exit();
  }
}

testConnection();
