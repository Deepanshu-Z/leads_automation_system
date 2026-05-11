import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await req.json();

  const lead = await prisma.lead.update({
    where: {
      id: Number(params.id),
    },

    data: {
      assignedAgentId: body.agentId,
    },
  });

  return NextResponse.json(lead);
}
