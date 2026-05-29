import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { redis } from "@/lib/redis/redis";

import { sendMessage } from "@/lib/messaging/sendMessage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

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

    const session = await getServerSession(authOptions);
    const agentId = Number(session?.user?.id);
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
        assignedAgentId: null,
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
    const conversation = await prisma.conversation.findFirst({
      where: {
        leadId: lead.id,
      },
    });
    if (!conversation) {
      return NextResponse.json(
        {
          error: "Conversation not found",
        },
        {
          status: 404,
        },
      );
    }

    await prisma.message.create({
      data: {
        conversationId: conversation.id,

        content: "You are now chatting with our AI assistant again. 😊",

        role: "AI",
      },
    });
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
