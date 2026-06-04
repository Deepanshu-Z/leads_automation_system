import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const status = req.nextUrl.searchParams.get("status");

    const where = status ? { status: status as any } : {};

    const payments = await prisma.payment.findMany({
      where,

      include: {
        lead: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    const revenue = await prisma.payment.aggregate({
      where: {
        status: "PAID",
      },

      _sum: {
        amount: true,
      },
    });

    return NextResponse.json({
      payments,

      totalRevenue: revenue._sum.amount ?? 0,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch payments",
      },
      {
        status: 500,
      },
    );
  }
}
