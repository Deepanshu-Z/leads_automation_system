// /api/send-message.ts (or route.ts)

import { addSendMessageJob } from "@/lib/queue/queue";

export async function POST(req: Request) {
  try {
    const { platform, recipientId, text } = await req.json();

    // basic validation
    if (!platform || !recipientId || !text) {
      return new Response("Missing fields", { status: 400 });
    }

    await addSendMessageJob({
      platform,
      recipientId,
      text,
    });

    return new Response("Queued", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Error", { status: 500 });
  }
}
