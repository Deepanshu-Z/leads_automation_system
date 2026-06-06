import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const notification = await prisma.notification.update({
    where: {
      id: Number(id),
    },
    data: {
      isRead: true,
    },
  });

  return NextResponse.json(notification);
}
