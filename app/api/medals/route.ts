import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * API route to simulate fetching medal data
 * In a real-world, this connects to a backend
 */
export async function GET() {
  try {
    // Simulate a small delay to show loading state (can remove in production)
    await new Promise((resolve) => setTimeout(resolve, 500));

    const filePath = path.join(process.cwd(), "public", "medals.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching medal data:", error);
    return NextResponse.json(
      { error: "Failed to fetch medal data" },
      { status: 500 }
    );
  }
}
