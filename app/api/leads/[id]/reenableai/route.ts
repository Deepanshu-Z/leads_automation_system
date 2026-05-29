import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { redis } from "@/lib/redis/redis";

import { sendMessage } from "@/lib/messaging/sendMessage";

export async function POST(
  req: NextRequest,

  context: {
    params: Promise<{
      id: string;
    }>;
  },
) {
  try {
    // =====================================
    // GET PARAMS
    // =====================================

    const { id } = await context.params;

    const body = await req.json();

    const { agentId } = body;

    // =====================================
    // FIND LEAD
    // =====================================

    const lead = await prisma.lead.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!lead) {
      return NextResponse.json(
        {
          error: "Lead not found",
        },

        {
          status: 404,
        },
      );
    }

    // =====================================
    // REMOVE AI PAUSE FLAG
    // =====================================

    await redis.del(`ai_paused:${lead.sourceId}`);

    console.log(`🤖 AI re-enabled for ${lead.sourceId}`);

    // =====================================
    // UPDATE LEAD STATUS
    // =====================================

    await prisma.lead.update({
      where: {
        id: lead.id,
      },

      data: {
        status: "ENGAGED",
        aiEnabled: true,
      },
    });

    // =====================================
    // OPTIONAL USER MESSAGE
    // =====================================

    await sendMessage(
      lead.platform as any,

      lead.sourceId,

      "You are now chatting with our AI assistant again. 😊",
    );

    // =====================================
    // AUDIT LOG
    // =====================================

    await prisma.auditLog.create({
      data: {
        leadId: lead.id,

        oldStatus: lead.status,

        newStatus: "ENGAGED",

        reason: "AI re-enabled",

        triggeredBy: "agent",
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to re-enable AI",
      },

      {
        status: 500,
      },
    );
  }
}
