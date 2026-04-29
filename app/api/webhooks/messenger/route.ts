import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.META_VERIFY_TOKEN) {
    console.log("WEBHOOK_VERIFIED");

    return new Response(challenge, { status: 200 });
  }

  return new Response("Verification failed", { status: 403 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Incoming Message:", JSON.stringify(body, null, 2));

    return new Response("OK", { status: 200 }); // ✅ important
  } catch (err) {
    console.error(err);
    return new Response("Error", { status: 500 });
  }
}
