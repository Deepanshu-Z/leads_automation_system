import { redis } from "@/lib/redis/redis";
import { NextResponse } from "next/server";

function getToday() {
  return new Date().toISOString().split("T")[0];
}

function buildKey(metric: string) {
  return `analytics:daily:${getToday()}:${metric}`;
}

export async function GET() {
  try {
    const [newLeads, messages, payments, escalations] = await Promise.all([
      redis.get(buildKey("new_leads")),

      redis.get(buildKey("messages_sent")),

      redis.get(buildKey("payments")),

      redis.get(buildKey("escalations")),
    ]);

    return NextResponse.json({
      newLeads: Number(newLeads || 0),

      messagesSent: Number(messages || 0),

      payments: Number(payments || 0),

      escalations: Number(escalations || 0),
    });
  } catch (error) {
    return NextResponse.json({ message: "ERROR GETTING ANALYTICS", error });
  }
}
