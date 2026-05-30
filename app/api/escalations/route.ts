import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const escalations = await prisma.escalationLog.findMany({
      where: {
        resolvedAt: null,
      },

      include: {
        lead: true,

        agent: true,
      },

      orderBy: {
        escalatedAt: "asc",
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
