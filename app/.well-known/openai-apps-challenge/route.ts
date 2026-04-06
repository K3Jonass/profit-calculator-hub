import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    "RWhp6Ap6XmMCytvXWKQKB4zXMX5Vokowqhh0ufb0lLE", // <-- TOKEN ديالك
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}