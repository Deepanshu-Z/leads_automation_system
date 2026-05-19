import { redis } from "@/lib/redis/redis";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { senderId } = body;

    if (!senderId) {
      return NextResponse.json(
        {
          error: "senderId required",
        },

        {
          status: 400,
        },
      );
    }

    const key = `ai_paused:${senderId}`;
    const currentStatus = await redis.get(key);

    if (currentStatus === "true") {
      await redis.del(key);

      return NextResponse.json({
        success: true,

        aiPaused: false,

        message: "AI resumed",
      });
    }

    await redis.set(
      key,

      "true",
    );

    return NextResponse.json({
      success: true,

      aiPaused: true,

      message: "AI paused",
    });
  } catch (error) {
    console.error("Toggle AI error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },

      {
        status: 500,
      },
    );
  }
}
