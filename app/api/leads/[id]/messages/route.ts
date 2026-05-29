import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET(
  _: Request,

  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const leadId = Number(id);

    // =====================================
    // FIND CONVERSATION
    // =====================================

    const conversation = await prisma.conversation.findFirst({
      where: {
        leadId,
      },
    });

    if (!conversation) {
      return NextResponse.json([]);
    }

    // =====================================
    // FETCH MESSAGES
    // =====================================

    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversation.id,
      },

      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch messages",
      },

      {
        status: 500,
      },
    );
  }
}
