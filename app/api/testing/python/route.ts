import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await fetch("http://localhost:8000/ai/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        platform: "whatsapp",
        senderId: "917292057858",
        message: "Hi I need help with your service",
        conversationHistory: [],
      }),
    });

    const data = await response.json();

    console.log("FastAPI Response:", data);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("❌ FastAPI call failed:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
