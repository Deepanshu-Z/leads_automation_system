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
    // ENABLE AI AGAIN
    // =====================================

    await redis.del(`ai_paused:${lead.sourceId}`);

    // =====================================
    // CLOSE LEAD
    // =====================================

    await prisma.lead.update({
      where: {
        id: lead.id,
      },

      data: {
        status: "CLOSED",
      },
    });

    // =====================================
    // AUDIT LOG
    // =====================================

    await prisma.auditLog.create({
      data: {
        leadId: lead.id,

        oldStatus: lead.status,

        newStatus: "CLOSED",

        reason: "Escalation resolved",

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
        error: "Failed",
      },

      {
        status: 500,
      },
    );
  }
}
