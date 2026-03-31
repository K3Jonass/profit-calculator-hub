import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      contract:
        "REVENUE SHARE AGREEMENT\n\nThis is a temporary placeholder contract preview.\n\nThe full AI-powered contract generation endpoint will be connected next.\n\nThis document is a template and not legal advice.",
    },
    { status: 200 }
  );
}