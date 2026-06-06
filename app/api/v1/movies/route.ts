import { NextResponse } from "next/server";
import { db } from "@/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit") || "50"; // Default to 50 if not provided

    const movies = await db
      .collection("movies")
      .find()
      .limit(parseInt(limit))
      .sort({ released: -1 }) // Sort by release date in descending order (newest first)
      .toArray()
      .catch((error) => {
        console.log("Database query failed:", error);
        throw new Error("Failed to retrieve movies from the database");
      });

    return NextResponse.json({
      message: "Movies retrieved successfully",
      success: true,
      movies: movies,
    });
  } catch (error) {
    console.log("Error retrieving movies:", (error as Error).message);

    return NextResponse.json(
      {
        message: "Failed to retrieve movies",
        success: false,
        movies: [],
      },
      { status: 500 },
    );
  }
}
