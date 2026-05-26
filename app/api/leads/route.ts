import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis/redis";
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;

    const page = Number(searchParams.get("page") || 1);

    const limit = Number(searchParams.get("limit") || 20);

    const status = searchParams.get("status");
    const searchInput = searchParams.get("search");
    const platform = searchParams.get("platform");
    const cacheKey = `
                      leads:

                      ${page}:

                      ${limit}:

                      ${searchInput || "none"}:

                      ${status || "all"}:

                      ${platform || "all"}
                    `;
    // Try to get cached data from Redis
    const cached = await redis.get(cacheKey);

    if (cached) {
      console.log("⚡ CACHE HIT");

      return NextResponse.json(JSON.parse(cached));
    }
    const where: any = {};
    if (searchInput) {
      where.OR = [
        {
          name: {
            contains: searchInput,

            mode: "insensitive",
          },
        },

        {
          email: {
            contains: searchInput,

            mode: "insensitive",
          },
        },

        {
          phone: {
            contains: searchInput,
          },
        },
      ];
    }
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

    const total = await prisma.lead.count({
      where,
    });
    //set cache in Redis with an expiration time of 60 seconds
    const response = {
      data: leads,

      total,

      page,

      limit,
    };
    await redis.set(
      cacheKey,

      JSON.stringify(response),

      "EX",

      60,
    );
    return NextResponse.json({
      data: leads,
      total,
      page,
      limit,
    });
  } catch (error) {
    console.error("ERROR GETTING LEADS", error);

    return NextResponse.json(
      {
        error: "Failed to fetch leads",
      },
      {
        status: 500,
      },
    );
  }
}
