import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { sendMessage } from "@/lib/messaging/sendMessage";

export async function POST(
  req: NextRequest,

  context: {
    params: Promise<{
      id: string;
    }>;
  },
) {
  type Platform = "whatsapp" | "instagram" | "messenger";

  try {
    const { id } = await context.params;
    const body = await req.json();

    const { text } = body;

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
    const platform: Platform = lead.platform as Platform;

    // =====================================
    // SEND MESSAGE
    // =====================================

    await sendMessage(
      platform,

      lead.sourceId,

      text,
    );

    // =====================================
    // SAVE MESSAGE
    // =====================================

    await prisma.message.create({
      data: {
        conversationId: 1, // FIX later

        role: "AGENT",

        content: text,
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
