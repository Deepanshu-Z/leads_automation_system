import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const lead = await prisma.lead.findUnique({
    where: {
      id: Number(id),
    },

    include: {
      agent: true,

      conversations: {
        include: {
          messages: {
            orderBy: {
              createdAt: "asc",
            },
          },
        },
      },

      payments: true,
      escalations: true,
    },
  });

  if (!lead) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json(lead);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await req.json();

  const updatedLead = await prisma.lead.update({
    where: {
      id: Number(params.id),
    },

    data: {
      status: body.status,
      assignedAgentId: body.assignedAgentId,
    },
  });

  return NextResponse.json(updatedLead);
}
