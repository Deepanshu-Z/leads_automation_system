import { leadQueue } from "@/lib/queue";

export async function POST(req: Request) {
  const body = await req.json();

  // ⚡ respond immediately
  const res = new Response("OK", { status: 200 });

  // async processing
  processWebhook(body).catch(console.error);

  return res;
}

export async function processWebhook(body: any) {
  const msg =
    body.entry?.[0]?.changes?.[0]?.value?.messages?.[0] ||
    body.entry?.[0]?.messaging?.[0];

  if (!msg) return;

  await leadQueue.add("incoming-message", {
    platform:
      body.object === "whatsapp_business_account" ? "whatsapp" : "messenger",
    senderId: msg.from || msg.sender?.id,
    text: msg.text?.body || msg.message?.text,
  });
}
