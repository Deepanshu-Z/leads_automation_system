import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

/**
 * 1. GET → Webhook verification
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.META_VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }

  return new Response("Forbidden", { status: 403 });
}

/**
 * 2. POST → Incoming events
 */
export async function POST(req: Request) {
  const rawBody = await req.text();

  // 🔐 Signature verification
  const signature = req.headers.get("x-hub-signature-256");
  if (!verifySignature(rawBody, signature)) {
    return new Response("Invalid signature", { status: 403 });
  }

  const body = JSON.parse(rawBody);

  // ⚡ ACK immediately (VERY IMPORTANT)
  const response = new Response("OK", { status: 200 });

  // Process async (non-blocking)
  handleEvent(body).catch(console.error);

  return response;
}

/**
 * 🔐 Verify signature
 */
function verifySignature(body: string, signature: string | null) {
  if (!signature) return false;

  const expected =
    "sha256=" +
    crypto
      .createHmac("sha256", process.env.META_VERIFY_TOKEN!)
      .update(body)
      .digest("hex");

  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

/**
 * 🧠 Unified handler
 */
async function handleEvent(body: any) {
  if (!body.entry) return;

  for (const entry of body.entry) {
    // ===== WhatsApp =====
    if (body.object === "whatsapp_business_account") {
      const change = entry.changes?.[0]?.value;

      // Handle async message statuses (like delivery failure updates)
      const statusObj = change?.statuses?.[0];
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
        continue;
      }

      const msg = change?.messages?.[0];
      if (!msg) continue;

      const data = {
        platform: "whatsapp",
        senderId: msg.from,
        text: msg.text?.body,
        timestamp: msg.timestamp,
      };

      console.log("WA:", data);
    }

    // ===== Messenger / Instagram =====
    if (body.object === "page") {
      const messaging = entry.messaging?.[0];
      if (!messaging) return;

      const data = {
        platform: detectPlatform(messaging),
        senderId: messaging.sender?.id,
        text: messaging.message?.text,
        timestamp: messaging.timestamp,
      };

      console.log("MSG/IG:", data);
    }
  }
}

/**
 * 🧠 Detect platform
 */
function detectPlatform(msg: any) {
  if (msg.recipient?.id && msg.sender?.id) {
    // Instagram IDs are usually longer + IG business linked
    return msg.sender.id.startsWith("IG") ? "instagram" : "messenger";
  }
  return "unknown";
}
