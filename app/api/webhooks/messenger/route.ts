import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.MESSENGER_VERIFY_TOKEN) {
    console.log("WEBHOOK_VERIFIED");

    return new Response(challenge, { status: 200 });
  }

  return new Response("Verification failed", { status: 403 });
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Incoming Message:", JSON.stringify(body, null, 2));
  return NextResponse.json({ status: "EVENT_RECEIVED" });
}
