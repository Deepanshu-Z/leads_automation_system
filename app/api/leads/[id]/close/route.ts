import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!session || !userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const existingLead = await prisma.lead.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingLead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    const updatedLead = await prisma.lead.update({
      where: {
        id: existingLead.id,
      },

      data: {
        status: "CLOSED",
      },
    });

    return NextResponse.json({
      message: "Lead closed successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error closing lead:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
