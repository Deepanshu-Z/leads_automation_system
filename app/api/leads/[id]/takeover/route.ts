import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { redis } from "@/lib/redis/redis";

export async function POST(
  req: NextRequest,

  context: {
    params: Promise<{
      id: string;
    }>;
  },
) {
  try {
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
    // PAUSE AI
    // =====================================

    await redis.set(
      `ai_paused:${lead.sourceId}`,

      "true",
    );

    // =====================================
    // UPDATE LEAD
    // =====================================

    await prisma.lead.update({
      where: {
        id: lead.id,
      },

      data: {
        status: "ESCALATED",

        assignedAgentId: agentId,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed",
      },

      {
        status: 500,
      },
    );
  }
}
