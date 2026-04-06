import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = url.origin;

  return NextResponse.json(
    {
      name: "ProfitHub Freelancer Docs MCP",
      description:
        "MCP endpoint for freelancer-focused invoice, contract, and client document generation.",
      protocol: "mcp",
      version: "0.1.0",
      endpoint: `${origin}/api/mcp`,
      authentication: process.env.MCP_SERVER_TOKEN
        ? { type: "bearer" }
        : { type: "none" },
      status: "prepared_for_chatgpt_connection",
      notes:
        "This manifest prepares ProfitHub for ChatGPT App connection and submission workflows; it does not publish the app automatically.",
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300",
      },
    }
  );
}
