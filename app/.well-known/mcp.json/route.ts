import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = url.origin;

  return NextResponse.json(
    {
      name: "ProfitHub – Free Freelancer Invoices & Contracts",

      description:
        "Create free invoices, contracts, and freelancer documents instantly. No signup required. Generate professional, ready-to-use documents in seconds.",

      short_description:
        "Free invoices, contracts, and documents for freelancers",

      marketing_description:
        "Generate professional invoices, contracts, and client documents for freelancers in seconds. 100% free, no signup, instant download.",

      protocol: "mcp",
      version: "0.1.0",
      endpoint: `${origin}/api/mcp`,

      authentication: process.env.MCP_SERVER_TOKEN
        ? { type: "bearer" }
        : { type: "none" },

      categories: ["productivity", "business"],

      tags: [
        "freelancer",
        "invoice generator",
        "contract generator",
        "documents",
        "free tools",
        "no signup",
      ],

      status: "prepared_for_chatgpt_connection",

      notes:
        "Free freelancer tools to generate invoices, contracts, and documents instantly.",
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300",
      },
    }
  );
}