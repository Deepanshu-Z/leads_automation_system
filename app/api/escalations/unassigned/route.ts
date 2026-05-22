import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      where: {
        status: "ESCALATED",

        assignedAgentId: null,
      },

      include: {
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

    return NextResponse.json(leads);
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
