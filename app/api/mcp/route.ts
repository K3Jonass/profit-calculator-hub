import { NextResponse } from "next/server";
import {
  validateInvoicePayload,
  validateRevenueSharePayload,
  validateFreelancerPayload,
  validateWelcomeDocPayload,
  validateClientAccessRequestPayload,
  validateFeedbackRequestPayload,
  generateInvoiceDocument,
  generateRevenueShareContractDocument,
  generateFreelancerContractDocument,
  generatePrimaryDoc,
} from "@/lib/freelancer-documents";

type JsonRpcRequest = {
  jsonrpc?: string;
  id?: string | number | null;
  method?: string;
  params?: {
    name?: string;
    arguments?: unknown;
  };
};

const MCP_PROTOCOL_VERSION = "2024-11-05";

const tools = [
  {
    name: "generate_invoice",
    description:
      "Generate a freelancer-ready invoice using ProfitHub logic with AI-first output and local fallback.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: [
        "businessName",
        "clientName",
        "invoiceNumber",
        "issueDate",
        "dueDate",
        "serviceDescription",
        "amountDue",
        "country",
        "currency",
      ],
      properties: {
        businessName: { type: "string", minLength: 1 },
        clientName: { type: "string", minLength: 1 },
        invoiceNumber: { type: "string", minLength: 1 },
        issueDate: { type: "string", minLength: 1 },
        dueDate: { type: "string", minLength: 1 },
        serviceDescription: { type: "string", minLength: 1 },
        amountDue: { type: "string", minLength: 1 },
        country: { type: "string", minLength: 1 },
        currency: {
          type: "string",
          enum: ["USD", "EUR", "GBP", "MAD", "SAR", "AED"],
        },
      },
    },
  },
  {
    name: "generate_contract",
    description:
      "Generate core freelancer contracts (revenue-share or freelancer agreement) using ProfitHub generation flows.",
    inputSchema: {
      type: "object",
      additionalProperties: true,
      required: ["contractType"],
      properties: {
        contractType: {
          type: "string",
          enum: ["revenue-share", "freelancer"],
        },
      },
    },
  },
  {
    name: "generate_primary_doc",
    description:
      "Generate primary client documents (welcome doc, client access request, or feedback request).",
    inputSchema: {
      type: "object",
      additionalProperties: true,
      required: ["docType"],
      properties: {
        docType: {
          type: "string",
          enum: ["welcome-doc", "client-access-request", "feedback-request"],
        },
      },
    },
  },
] as const;

function checkMcpToken(request: Request) {
  const token = process.env.MCP_SERVER_TOKEN;

  if (!token) {
    return true;
  }

  const authorization = request.headers.get("authorization");
  return authorization === `Bearer ${token}`;
}

function buildError(
  id: JsonRpcRequest["id"],
  code: number,
  message: string,
  status = 200
) {
  return NextResponse.json(
    {
      jsonrpc: "2.0",
      id: id ?? null,
      error: { code, message },
    },
    { status }
  );
}

function buildResult(id: JsonRpcRequest["id"], result: unknown) {
  return NextResponse.json({ jsonrpc: "2.0", id: id ?? null, result }, { status: 200 });
}

async function handleToolCall(toolName: string, rawArguments: unknown) {
  if (toolName === "generate_invoice") {
    const validation = validateInvoicePayload(rawArguments);

    if (!validation.isValid || !validation.values) {
      throw new Error(validation.error || "Invalid invoice payload.");
    }

    const result = await generateInvoiceDocument(validation.values);

    return {
      type: "invoice",
      content: result.content,
      usedFallback: result.fallback,
    };
  }

  if (toolName === "generate_contract") {
    const args = rawArguments as Record<string, unknown> | null;
    const contractType = args?.contractType;

    if (contractType === "freelancer") {
      const validation = validateFreelancerPayload(rawArguments);

      if (!validation.isValid || !validation.values) {
        throw new Error(validation.error || "Invalid freelancer contract payload.");
      }

      const result = await generateFreelancerContractDocument(validation.values);

      return {
        type: "freelancer",
        content: result.content,
        usedFallback: result.fallback,
      };
    }

    const validation = validateRevenueSharePayload(rawArguments);

    if (!validation.isValid || !validation.values) {
      throw new Error(validation.error || "Invalid revenue-share contract payload.");
    }

    const result = await generateRevenueShareContractDocument(validation.values);

    return {
      type: "revenue-share",
      content: result.content,
      usedFallback: result.fallback,
    };
  }

  const args = rawArguments as Record<string, unknown> | null;
  const docType = args?.docType;

  if (
    docType !== "welcome-doc" &&
    docType !== "client-access-request" &&
    docType !== "feedback-request"
  ) {
    throw new Error("docType must be welcome-doc, client-access-request, or feedback-request.");
  }

  if (docType === "welcome-doc") {
    const validation = validateWelcomeDocPayload(rawArguments);

    if (!validation.isValid || !validation.values) {
      throw new Error(validation.error || "Invalid welcome document payload.");
    }
  }

  if (docType === "client-access-request") {
    const validation = validateClientAccessRequestPayload(rawArguments);

    if (!validation.isValid || !validation.values) {
      throw new Error(validation.error || "Invalid client access request payload.");
    }
  }

  if (docType === "feedback-request") {
    const validation = validateFeedbackRequestPayload(rawArguments);

    if (!validation.isValid || !validation.values) {
      throw new Error(validation.error || "Invalid feedback request payload.");
    }
  }

  const result = await generatePrimaryDoc(docType, rawArguments);

  return {
    type: docType,
    content: result.content,
    usedFallback: result.fallback,
  };
}

export async function POST(request: Request) {
  if (!checkMcpToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: JsonRpcRequest;

  try {
    payload = (await request.json()) as JsonRpcRequest;
  } catch {
    return buildError(null, -32700, "Parse error", 400);
  }

  const { id = null, method } = payload;

  if (!method || payload.jsonrpc !== "2.0") {
    return buildError(id, -32600, "Invalid Request");
  }

  if (method === "initialize") {
    return buildResult(id, {
      protocolVersion: MCP_PROTOCOL_VERSION,
      serverInfo: {
        name: "profithub-freelancer-mcp",
        version: "0.1.0",
      },
      capabilities: {
        tools: {},
      },
    });
  }

  if (method === "tools/list") {
    return buildResult(id, { tools });
  }

  if (method === "tools/call") {
    const toolName = payload.params?.name;
    const toolArgs = payload.params?.arguments;

    if (!toolName) {
      return buildError(id, -32602, "Tool name is required.");
    }

    if (!tools.some((tool) => tool.name === toolName)) {
      return buildError(id, -32601, `Unknown tool: ${toolName}`);
    }

    try {
      const callResult = await handleToolCall(toolName, toolArgs);

      return buildResult(id, {
        content: [
          {
            type: "text",
            text: callResult.content,
          },
        ],
        structuredContent: callResult,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to run ProfitHub tool.";

      return buildError(id, -32602, message);
    }
  }

  return buildError(id, -32601, `Method not found: ${method}`);
}
