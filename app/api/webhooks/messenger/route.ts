import { leadQueue } from "@/lib/queue/queue";
import { isNewMessage } from "@/lib/redis/dedepulication";
import { prisma } from "@/lib/prisma";

// ─── GET: Meta Webhook Verification ───
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.META_VERIFY_TOKEN) {
    console.log("✅ WEBHOOK_VERIFIED");
    return new Response(challenge, { status: 200 });
  }

  console.log("❌ Webhook verification failed");
  return new Response("Verification failed", { status: 403 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("📩 Incoming Webhook:", JSON.stringify(body, null, 2));

    const entry = body?.entry?.[0];
    const changes = entry?.changes?.[0];
    const value = changes?.value;

    // Handle async message statuses (like delivery failure updates)
    const statusObj = value?.statuses?.[0];
    if (statusObj) {
      const error = statusObj.errors?.[0];
      if (statusObj.status === "failed" && error?.code === 131047) {
        const recipientPhone = statusObj.recipient_id;
        console.warn(
          `[Webhook] WhatsApp 24h window expired for phone: ${recipientPhone}. Escalating.`,
        );

        const lead = await prisma.lead.findUnique({
          where: { sourceId: recipientPhone },
        });

        if (lead) {
          await prisma.$transaction([
            prisma.lead.update({
              where: { id: lead.id },
              data: {
                aiEnabled: false,
                status: "ESCALATED",
              },
            }),
            prisma.escalationLog.create({
              data: {
                leadId: lead.id,
                reason: "WhatsApp 24-hour communication window expired (reported by webhook status).",
              },
            }),
          ]);
        }
      }
      return new Response("OK", { status: 200 });
    }

    const messages = value?.messages;
    const platform = detectPlatform(value);

    if (!messages || messages.length === 0) {
      console.log("ℹ️ No messages in webhook (status update or receipt)");
      return new Response("OK", { status: 200 });
    }

    for (const message of messages) {
      const messageId = message.id;
      const senderId = message.from;
      const text = message.text?.body;
      const messageType = message.type;

      console.log(`📨 Message ID: ${messageId}`);
      console.log(`👤 From: ${senderId}`);
      console.log(`💬 Text: ${text}`);
      console.log(`📱 Platform: ${platform}`);

      if (messageType !== "text") {
        console.log(`⚠️ Skipping non-text message type: ${messageType}`);
        continue;
      }

      const isNew = await isNewMessage(messageId);

      if (!isNew) {
        console.log(`⚠️ Duplicate message skipped: ${messageId}`);
        continue;
      }

      console.log(`✅ New message — adding to queue: ${messageId}`);

      await leadQueue.add("incoming-message", {
        messageId,
        platform,
        senderId,
        text,
        timestamp: message.timestamp,
        phoneNumberId: value?.metadata?.phone_number_id, // ← pass the receiving number
        raw: message,
      });
    }

    return new Response("OK", { status: 200 });
  } catch (err: any) {
    console.error("❌ Webhook error:", err.message);

    return new Response("OK", { status: 200 });
  }
}

function detectPlatform(value: any): "whatsapp" | "instagram" | "messenger" {
  if (value?.messaging_product === "whatsapp") return "whatsapp";
  if (value?.instagram_business_account) return "instagram";
  return "messenger";
}
