import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 20);
  const status = searchParams.get("status");
  const platform = searchParams.get("platform");

  const where: any = {};
  if (status) {
    where.status = status;
  }
  if (platform) {
    where.platform = platform;
  }

  const leads = await prisma.lead.findMany({
    where,

    skip: (page - 1) * limit,
    take: limit,

    orderBy: {
      updatedAt: "desc",
    },

    include: {
      agent: true,
    },
  });

  const total = await prisma.lead.count({ where });

  return NextResponse.json({
    data: leads,
    total,
    page,
    limit,
  });
}
