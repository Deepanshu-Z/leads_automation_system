// app/api/leads/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany();

    if (!leads || leads.length === 0) {
      return NextResponse.json({ message: "No leads found", data: [] });
    }

    return NextResponse.json(leads);
  } catch (error: any) {
    console.error("Database Error:", error.message);

    // Send a proper JSON response so the frontend doesn't throw 'Unexpected end of JSON'
    return NextResponse.json(
      { error: "Could not connect to database. Check if Supabase is paused." },
      { status: 500 },
    );
  }
}
