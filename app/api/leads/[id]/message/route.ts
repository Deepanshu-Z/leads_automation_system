import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const conversations = await prisma.conversation.findMany({
    where: {
      leadId: Number(params.id),
    },

    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  return NextResponse.json(conversations);
}
