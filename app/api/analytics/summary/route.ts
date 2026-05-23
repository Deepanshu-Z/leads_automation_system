import { prisma } from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // =====================================
    // GET DATE
    // =====================================

    const dateParam = req.nextUrl.searchParams.get("date");

    const today = dateParam ? new Date(dateParam) : new Date();

    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);

    // =====================================
    // SUMMARY CARDS
    // =====================================

    const [newLeads, messagesSent, payments, escalations] = await Promise.all([
      prisma.lead.count({
        where: {
          createdAt: {
            gte: today,

            lt: tomorrow,
          },
        },
      }),

      prisma.message.count({
        where: {
          createdAt: {
            gte: today,

            lt: tomorrow,
          },
        },
      }),

      prisma.payment.count({
        where: {
          createdAt: {
            gte: today,

            lt: tomorrow,
          },
        },
      }),

      prisma.lead.count({
        where: {
          status: "ESCALATED",
        },
      }),
    ]);

    // =====================================
    // PLATFORM BAR CHART
    // =====================================

    const platformCounts = await prisma.lead.groupBy({
      by: ["platform"],

      _count: {
        platform: true,
      },

      where: {
        createdAt: {
          gte: today,

          lt: tomorrow,
        },
      },
    });

    // =====================================
    // STATUS PIE CHART
    // =====================================

    const statusCounts = await prisma.lead.groupBy({
      by: ["status"],

      _count: {
        status: true,
      },
    });

    // =====================================
    // RECENT ESCALATIONS
    // =====================================

    const recentEscalations = await prisma.lead.findMany({
      where: {
        status: "ESCALATED",
      },

      orderBy: {
        updatedAt: "desc",
      },

      take: 5,

      include: {
        agent: true,
      },
    });

    // =====================================
    // FORMAT PLATFORM DATA
    // =====================================

    const platformData = platformCounts.map((item) => ({
      platform: item.platform,

      leads: item._count.platform,
    }));

    // =====================================
    // FORMAT STATUS DATA
    // =====================================

    const statusData = statusCounts.map((item) => ({
      status: item.status,

      value: item._count.status,
    }));

    return NextResponse.json({
      newLeads,

      messagesSent,

      payments,

      escalations,

      platformData,

      statusData,

      recentEscalations,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "ERROR FETCHING ANALYTICS",
      },

      {
        status: 500,
      },
    );
  }
}
