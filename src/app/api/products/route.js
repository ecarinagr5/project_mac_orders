import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const response = await fetch(
      "https://burgerhub00.github.io/data/products.json"
    );
    const responsFull = await response.json();
    return NextResponse.json({ data: responsFull });
  } catch (error) {
    console.error("Error fetching product data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
