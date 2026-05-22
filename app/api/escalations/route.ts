import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      where: {
        status: "ESCALATED",
      },

      include: {
        assignedAgent: true,

        conversations: {
          include: {
            messages: {
              orderBy: {
                createdAt: "desc",
              },

              take: 1,
            },
          },
        },
      },

      orderBy: {
        updatedAt: "asc",
      },
    });

    const formatted = leads.map((lead) => ({
      id: lead.id,

      name: lead.name,

      platform: lead.platform,

      status: lead.status,

      waitTime: Date.now() - new Date(lead.updatedAt).getTime(),

      assignedAgent: lead.assignedAgent,

      lastMessage: lead.conversations?.[0]?.messages?.[0]?.content || null,
    }));

    return NextResponse.json(formatted);
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
