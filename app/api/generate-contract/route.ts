import { NextResponse } from "next/server";
import { generateRevenueShareContract } from "@/lib/ai";
import { generateLocalRevenueShareContract } from "@/lib/local-contract-template";
import type { RevenueShareFormValues } from "@/lib/contract-types";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validateRevenueSharePayload(body: unknown): {
  isValid: boolean;
  error?: string;
  values?: RevenueShareFormValues;
} {
  if (!body || typeof body !== "object") {
    return {
      isValid: false,
      error: "Invalid request body.",
    };
  }

  const data = body as Record<string, unknown>;

  const partyAName = data.partyAName;
  const partyBName = data.partyBName;
  const revenueSharePercentage = data.revenueSharePercentage;
  const paymentFrequency = data.paymentFrequency;
  const serviceDescription = data.serviceDescription;
  const country = data.country;
  const currency = data.currency;

  if (!isNonEmptyString(partyAName)) {
    return { isValid: false, error: "Party A name is required." };
  }

  if (!isNonEmptyString(partyBName)) {
    return { isValid: false, error: "Party B name is required." };
  }

  if (!isNonEmptyString(revenueSharePercentage)) {
    return {
      isValid: false,
      error: "Revenue share percentage is required.",
    };
  }

  const parsedPercentage = Number(revenueSharePercentage);

  if (Number.isNaN(parsedPercentage)) {
    return {
      isValid: false,
      error: "Revenue share percentage must be a valid number.",
    };
  }

  if (parsedPercentage <= 0 || parsedPercentage > 100) {
    return {
      isValid: false,
      error: "Revenue share percentage must be between 1 and 100.",
    };
  }

  if (
    paymentFrequency !== "weekly" &&
    paymentFrequency !== "biweekly" &&
    paymentFrequency !== "monthly" &&
    paymentFrequency !== "quarterly"
  ) {
    return { isValid: false, error: "Invalid payment frequency." };
  }

  if (!isNonEmptyString(serviceDescription)) {
    return {
      isValid: false,
      error: "Service or product description is required.",
    };
  }

  if (!isNonEmptyString(country)) {
    return {
      isValid: false,
      error: "Country or jurisdiction is required.",
    };
  }

  if (
    currency !== "USD" &&
    currency !== "EUR" &&
    currency !== "GBP" &&
    currency !== "MAD" &&
    currency !== "SAR" &&
    currency !== "AED"
  ) {
    return { isValid: false, error: "Invalid currency." };
  }

  return {
    isValid: true,
    values: {
      partyAName: partyAName.trim(),
      partyBName: partyBName.trim(),
      revenueSharePercentage: String(parsedPercentage),
      paymentFrequency,
      serviceDescription: serviceDescription.trim(),
      country: country.trim(),
      currency,
    },
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateRevenueSharePayload(body);

    if (!validation.isValid || !validation.values) {
      return NextResponse.json(
        { error: validation.error || "Invalid request." },
        { status: 400 }
      );
    }

    const values = validation.values;

    try {
      if (!process.env.OPENAI_API_KEY) {
        throw new Error("OPENAI_API_KEY missing");
      }

      const contract = await generateRevenueShareContract(values);

      return NextResponse.json({ contract }, { status: 200 });
    } catch (error) {
      console.error("AI generation failed, using local fallback:", error);

      const fallbackContract = generateLocalRevenueShareContract(values);

      return NextResponse.json(
        {
          contract: fallbackContract,
          fallback: true,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("generate-contract POST error:", error);

    const message =
      error instanceof Error ? error.message : "Failed to generate contract.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}