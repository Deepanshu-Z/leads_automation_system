import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { redis } from "@/lib/redis/redis";
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
    const session = await getServerSession(authOptions);
    const agentId = Number(session?.user?.id);
    const { id } = await context.params;

    console.log("Taking over lead with ID:", id, "by agent:", agentId);
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
        aiEnabled: false,

        status: "HUMAN_ASSIGNED",

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
