import { NextResponse } from "next/server";
import {
  validateRevenueSharePayload,
  validateFreelancerPayload,
  validateInvoicePayload,
  validateWelcomeDocPayload,
  validateClientAccessRequestPayload,
  validateFeedbackRequestPayload,
  generateRevenueShareContractDocument,
  generateFreelancerContractDocument,
  generateInvoiceDocument,
  generatePrimaryDoc,
} from "@/lib/freelancer-documents";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // NOTE: When adding a new generator type, also update:
    // 1) app/sitemap.ts via lib/public-urls.ts
    // 2) app/contracts/page.tsx via lib/contracts-generators.ts (if user-facing)
    // 3) IndexNow submissions (lib/public-urls.ts + /api/indexnow)
    const contractType =
      typeof body?.contractType === "string" ? body.contractType : "revenue-share";

    if (contractType === "freelancer") {
      const validation = validateFreelancerPayload(body);

      if (!validation.isValid || !validation.values) {
        return NextResponse.json(
          { error: validation.error || "Invalid request." },
          { status: 400 }
        );
      }

      const result = await generateFreelancerContractDocument(validation.values);

      return NextResponse.json(
        { contract: result.content, fallback: result.fallback },
        { status: 200 }
      );
    }

    if (contractType === "invoice") {
      const validation = validateInvoicePayload(body);

      if (!validation.isValid || !validation.values) {
        return NextResponse.json(
          { error: validation.error || "Invalid request." },
          { status: 400 }
        );
      }

      const result = await generateInvoiceDocument(validation.values);

      return NextResponse.json(
        { contract: result.content, fallback: result.fallback },
        { status: 200 }
      );
    }

    if (contractType === "welcome-doc") {
      const validation = validateWelcomeDocPayload(body);

      if (!validation.isValid || !validation.values) {
        return NextResponse.json(
          { error: validation.error || "Invalid request." },
          { status: 400 }
        );
      }

      const result = await generatePrimaryDoc("welcome-doc", validation.values);

      return NextResponse.json(
        { contract: result.content, fallback: result.fallback },
        { status: 200 }
      );
    }

    if (contractType === "client-access-request") {
      const validation = validateClientAccessRequestPayload(body);

      if (!validation.isValid || !validation.values) {
        return NextResponse.json(
          { error: validation.error || "Invalid request." },
          { status: 400 }
        );
      }

      const result = await generatePrimaryDoc(
        "client-access-request",
        validation.values
      );

      return NextResponse.json(
        { contract: result.content, fallback: result.fallback },
        { status: 200 }
      );
    }

    if (contractType === "feedback-request") {
      const validation = validateFeedbackRequestPayload(body);

      if (!validation.isValid || !validation.values) {
        return NextResponse.json(
          { error: validation.error || "Invalid request." },
          { status: 400 }
        );
      }

      const result = await generatePrimaryDoc("feedback-request", validation.values);

      return NextResponse.json(
        { contract: result.content, fallback: result.fallback },
        { status: 200 }
      );
    }

    const validation = validateRevenueSharePayload(body);

    if (!validation.isValid || !validation.values) {
      return NextResponse.json(
        { error: validation.error || "Invalid request." },
        { status: 400 }
      );
    }

    const result = await generateRevenueShareContractDocument(validation.values);

    return NextResponse.json(
      { contract: result.content, fallback: result.fallback },
      { status: 200 }
    );
  } catch (error) {
    console.error("generate-contract POST error:", error);

    const message =
      error instanceof Error ? error.message : "Failed to generate contract.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
