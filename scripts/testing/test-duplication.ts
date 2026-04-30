import { isNewMessage, isProcessed } from "@/lib/redis/dedepulication";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

async function test() {
  const fakeMessageId = "wamid.test_" + Date.now();

  console.log("\n🧪 Testing Message Deduplication\n");

  // First time — should be NEW
  const first = await isNewMessage(fakeMessageId);
  console.log(`1st attempt — isNew: ${first}`); // true ✅

  // Second time — should be DUPLICATE
  const second = await isNewMessage(fakeMessageId);
  console.log(`2nd attempt — isNew: ${second}`); // false ✅

  // Third time — still DUPLICATE
  const third = await isNewMessage(fakeMessageId);
  console.log(`3rd attempt — isNew: ${third}`); // false ✅

  // Check if processed
  const processed = await isProcessed(fakeMessageId);
  console.log(`Is processed: ${processed}`); // true ✅

  console.log("\n✅ Deduplication working correctly!\n");
  process.exit(0);
}

test().catch(console.error);
