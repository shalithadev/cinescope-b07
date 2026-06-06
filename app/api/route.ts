import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from CineScope API!",
    success: true,
    createdAt: new Date().toISOString(),
  });
}
