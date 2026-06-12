import { prisma } from "../prisma";

type Platform = "whatsapp" | "instagram" | "messenger";

const GRAPH_API = "https://graph.facebook.com/v18.0";

const ACCESS_TOKEN = process.env.META_APP_SECRET!;
// NOTE: Do NOT use a global PHONE_NUMBER_ID here — always pass it per-call
// so replies go out from the same number that received the inbound message.
export class WhatsAppWindowExpiredError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "WhatsAppWindowExpiredError";
  }
}
/**
 * Retry helper (3 retries, 1s delay)
 * FOR NOW WE HAVE ONLY 1 RETRY I WILL UPDATE IT LATER
 */
async function retry(fn: () => Promise<any>, retries = 1) {
  let lastError;

  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      await new Promise((res) => setTimeout(res, 1000));
    }
  }

  throw lastError;
}
async function handleExpiredWindowAsync(recipientId: string) {
  const lead = await prisma.lead.findUnique({
    where: { sourceId: recipientId },
  });
  if (!lead) return;
  console.warn(
    `[Messaging] 24h WhatsApp window expired for Lead #${lead.id}. Escalating.`,
  );
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
        reason: "WhatsApp 24-hour window expired. Escalated to agent.",
      },
    }),
  ]);
}
/**
 * MAIN FUNCTION
 */
export async function sendMessage(
  platform: Platform,
  recipientId: string,
  text: string,
  templateName?: string,
  phoneNumberId?: string, // ← which WA business number to send FROM
) {
  try {
    switch (platform) {
      case "whatsapp":
        return await sendWhatsApp(recipientId, text, templateName, phoneNumberId);
      case "instagram":
        return await sendInstagram(recipientId, text);
      case "messenger":
        return await sendMessenger(recipientId, text);
      default:
        throw new Error("Unsupported platform");
    }
  } catch (error: any) {
    // Catch Meta's 24-hour expiration error code (131047) on-the-fly
    if (platform === "whatsapp" && error.message.includes("131047")) {
      // Defer database updates so we don't block the response execution thread
      handleExpiredWindowAsync(recipientId).catch(console.error);

      throw new WhatsAppWindowExpiredError("WhatsApp 24-hour window expired.");
    }
    throw error;
  }
}

//
// ================= WHATSAPP =================
//
async function sendWhatsApp(to: string, text: string, templateName?: string, phoneNumberId?: string) {
  // Fall back to env var only for proactive/template sends that don't originate
  // from an inbound message (e.g. first-touch outreach).
  const numberId = phoneNumberId ?? process.env.WHATSAPP_PHONE_NUMBER_ID!;

  return retry(async () => {
    const payload: any = {
      messaging_product: "whatsapp",
      to,
    };

    if (templateName) {
      payload.type = "template";
      payload.template = {
        name: templateName,
        language: { code: "en" },
      };
    } else {
      payload.type = "text";
      payload.text = { body: text };
    }

    const res = await fetch(`${GRAPH_API}/${numberId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`WhatsApp Error: ${err}`);
    }

    return res.json();
  });
}

//
// ================= INSTAGRAM =================
//
async function sendInstagram(recipientId: string, text: string) {
  return retry(async () => {
    const res = await fetch(`${GRAPH_API}/me/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient: { id: recipientId },
        message: { text },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Instagram Error: ${err}`);
    }

    return res.json();
  });
}

//
// ================= MESSENGER =================
//
async function sendMessenger(recipientId: string, text: string) {
  return retry(async () => {
    const res = await fetch(`${GRAPH_API}/me/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient: { id: recipientId },
        message: { text },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Messenger Error: ${err}`);
    }

    return res.json();
  });
}
