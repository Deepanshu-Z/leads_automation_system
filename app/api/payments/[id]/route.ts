import { sendMessage } from "@/lib/messaging/sendMessage";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  },
) {
  try {
    const { id } = await params;

    const payment = await prisma.payment.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        lead: true,
      },
    });

    if (!payment) {
      return NextResponse.json(
        {
          error: "Payment not found",
        },
        {
          status: 404,
        },
      );
    }

    if (payment.status !== "FAILED") {
      return NextResponse.json(
        {
          error: "Only failed payments can be resent",
        },
        {
          status: 400,
        },
      );
    }

    // =====================================
    // SEND PAYMENT LINK AGAIN
    // =====================================

    await sendMessage(
      payment.lead.platform as any,

      payment.lead.sourceId,

      `Please complete your payment:\n${payment.shortUrl}`,
    );

    // =====================================
    // UPDATE RETRY COUNT
    // =====================================

    await prisma.payment.update({
      where: {
        id: payment.id,
      },

      data: {
        retryCount: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Payment link resent",
    });
  } catch (error) {
    console.error("RESEND PAYMENT ERROR", error);

    return NextResponse.json(
      {
        error: "Failed to resend payment link",
      },
      {
        status: 500,
      },
    );
  }
}
