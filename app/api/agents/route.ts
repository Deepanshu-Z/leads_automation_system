import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const agents = await prisma.agent.findMany({
    include: {
      escalations: {
        where: {
          resolvedAt: null,
        },
      },

      leads: true,
    },
  });

  const data = agents.map((agent) => ({
    ...agent,

    activeEscalations: agent.escalations.length,
  }));

  return NextResponse.json({
    agents: data,
  });
}

export async function POST(req: Request) {
  const body = await req.json();

  const passwordHash = await bcrypt.hash(body.password, 10);

  const agent = await prisma.agent.create({
    data: {
      name: body.name,

      email: body.email,

      role: body.role,

      passwordHash,
    },
  });

  return NextResponse.json(agent);
}
