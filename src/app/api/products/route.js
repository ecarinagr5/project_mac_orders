import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://burgerhub00.github.io/data/products.json"
    );
    const responsFull = await response.json();
    return NextResponse.json({
      data: responsFull,
    });
  } catch (error) {
    console.log("Error fetching post data");
    return error;
  }
}
