import crypto from "crypto";

import { prisma } from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // =====================================================
    // RAW BODY
    // =====================================================

    const rawBody = await req.text();

    // =====================================================
    // SIGNATURE
    // =====================================================

    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      console.log("❌ Missing Razorpay signature");

      return NextResponse.json(
        {
          error: "Missing signature",
        },
        {
          status: 400,
        },
      );
    }

    // =====================================================
    // VERIFY HMAC
    // =====================================================

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(rawBody)
      .digest("hex");

    // =====================================================
    // INVALID SIGNATURE
    // =====================================================

    if (expectedSignature !== signature) {
      console.log("❌ Invalid Razorpay webhook signature");

      return NextResponse.json(
        {
          error: "Invalid signature",
        },
        {
          status: 400,
        },
      );
    }

    // =====================================================
    // PARSE EVENT
    // =====================================================

    const body = JSON.parse(rawBody);

    const event = body.event;

    console.log(`📩 Razorpay event: ${event}`);

    // =====================================================
    // PAYMENT LINK PAID
    // =====================================================

    if (event === "payment_link.paid") {
      const paymentEntity = body.payload.payment_link.entity;

      const razorpayLinkId = paymentEntity.id;

      const razorpayPaymentId = body.payload.payment.entity.id;

      // ===============================================
      // FIND PAYMENT
      // ===============================================

      const payment = await prisma.payment.findFirst({
        where: {
          razorpayLinkId,
        },

        include: {
          lead: true,
        },
      });

      if (!payment) {
        console.log("❌ Payment not found");

        return NextResponse.json(
          {
            error: "Payment not found",
          },
          {
            status: 404,
          },
        );
      }

      // ===============================================
      // UPDATE PAYMENT
      // ===============================================

      await prisma.payment.update({
        where: {
          id: payment.id,
        },

        data: {
          status: "PAID",

          razorpayPaymentId,

          paidAt: new Date(),
        },
      });

      // ===============================================
      // UPDATE LEAD
      // ===============================================

      await prisma.lead.update({
        where: {
          id: payment.leadId,
        },

        data: {
          status: "PAID",
        },
      });

      console.log("✅ Payment marked as PAID");
    }

    // =====================================================
    // PAYMENT FAILED
    // =====================================================

    if (event === "payment.failed") {
      const paymentEntity = body.payload.payment.entity;

      const razorpayPaymentId = paymentEntity.id;

      const payment = await prisma.payment.findFirst({
        where: {
          razorpayPaymentId,
        },

        include: {
          lead: true,
        },
      });

      if (payment) {
        await prisma.payment.update({
          where: {
            id: payment.id,
          },

          data: {
            status: "FAILED",
          },
        });

        console.log("❌ Payment marked FAILED");

        // ===========================================
        // TODO:
        // trigger WhatsApp retry message
        // ===========================================
      }
    }

    // =====================================================
    // SUCCESS
    // =====================================================

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log("❌ Razorpay webhook error:", error);

    return NextResponse.json(
      {
        error: "Webhook processing failed",
      },
      {
        status: 500,
      },
    );
  }
}
