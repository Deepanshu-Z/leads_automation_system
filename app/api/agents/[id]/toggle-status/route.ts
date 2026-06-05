import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,

  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  },
) {
  const { id } = await params;

  const agent = await prisma.agent.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!agent) {
    return NextResponse.json(
      {
        error: "Agent not found",
      },
      {
        status: 404,
      },
    );
  }

  const updated = await prisma.agent.update({
    where: {
      id: agent.id,
    },

    data: {
      isOnline: !agent.isOnline,
    },
  });

  return NextResponse.json(updated);
}
