import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await req.json();

  const lead = await prisma.lead.update({
    where: {
      id: Number(id),
    },

    data: {
      assignedAgentId: body.agentId,
    },
  });

  return NextResponse.json(lead);
}
