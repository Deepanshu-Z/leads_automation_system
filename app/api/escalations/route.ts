import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const escalations = await prisma.lead.findMany({
      where: {
        status: "ESCALATED",
      },

      include: {
        agent: true,
        escalations: {
          orderBy: {
            escalatedAt: "desc",
          },
          take: 1,
        },
      },

      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json({
      escalations,
    });
  } catch (error) {
    console.error("GET ESCALATIONS ERROR", error);

    return NextResponse.json(
      {
        error: "Failed to fetch escalations",
      },
      {
        status: 500,
      },
    );
  }
}
