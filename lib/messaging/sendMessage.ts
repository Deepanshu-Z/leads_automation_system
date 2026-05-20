type Platform = "whatsapp" | "instagram" | "messenger";

const GRAPH_API = "https://graph.facebook.com/v18.0";

const ACCESS_TOKEN = process.env.META_APP_SECRET!;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID!;

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

/**
 * MAIN FUNCTION
 */
export async function sendMessage(
  platform: Platform,
  recipientId: string,
  text: string,
) {
  switch (platform) {
    case "whatsapp":
      return sendWhatsApp(recipientId, text);

    case "instagram":
      return sendInstagram(recipientId, text);

    case "messenger":
      return sendMessenger(recipientId, text);

    default:
      throw new Error("Unsupported platform");
  }
}

//
// ================= WHATSAPP =================
//
async function sendWhatsApp(to: string, text: string) {
  return retry(async () => {
    const res = await fetch(`${GRAPH_API}/${PHONE_NUMBER_ID}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: text },
      }),
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
