import { NextResponse } from "next/server";
import {
  generateRevenueShareContract,
  generateFreelancerContract,
  generateInvoiceContract,
  generateWelcomeDoc,
  generateClientAccessRequest,
  generateFeedbackRequest,
} from "@/lib/ai";
import {
  generateLocalRevenueShareContract,
  generateLocalFreelancerContract,
  generateLocalInvoiceContract,
  generateLocalWelcomeDoc,
  generateLocalClientAccessRequest,
  generateLocalFeedbackRequest,
} from "@/lib/local-contract-template";
import type {
  RevenueShareFormValues,
  FreelancerFormValues,
  InvoiceFormValues,
  WelcomeDocFormValues,
  ClientAccessRequestValues,
  FeedbackRequestValues,
} from "@/lib/contract-types";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isSupportedCurrency(
  value: unknown
): value is RevenueShareFormValues["currency"] {
  return (
    value === "USD" ||
    value === "EUR" ||
    value === "GBP" ||
    value === "MAD" ||
    value === "SAR" ||
    value === "AED"
  );
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

  if (!isSupportedCurrency(currency)) {
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

function validateFreelancerPayload(body: unknown): {
  isValid: boolean;
  error?: string;
  values?: FreelancerFormValues;
} {
  if (!body || typeof body !== "object") {
    return {
      isValid: false,
      error: "Invalid request body.",
    };
  }

  const data = body as Record<string, unknown>;

  const clientName = data.clientName;
  const freelancerName = data.freelancerName;
  const projectDescription = data.projectDescription;
  const paymentAmount = data.paymentAmount;
  const paymentType = data.paymentType;
  const deadline = data.deadline;
  const country = data.country;
  const currency = data.currency;

  if (!isNonEmptyString(clientName)) {
    return { isValid: false, error: "Client name is required." };
  }

  if (!isNonEmptyString(freelancerName)) {
    return { isValid: false, error: "Freelancer name is required." };
  }

  if (!isNonEmptyString(projectDescription)) {
    return { isValid: false, error: "Project description is required." };
  }

  if (!isNonEmptyString(paymentAmount)) {
    return { isValid: false, error: "Payment amount is required." };
  }

  if (paymentType !== "fixed" && paymentType !== "hourly") {
    return { isValid: false, error: "Invalid payment type." };
  }

  if (!isNonEmptyString(country)) {
    return { isValid: false, error: "Country or jurisdiction is required." };
  }

  if (!isSupportedCurrency(currency)) {
    return { isValid: false, error: "Invalid currency." };
  }

  return {
    isValid: true,
    values: {
      clientName: clientName.trim(),
      freelancerName: freelancerName.trim(),
      projectDescription: projectDescription.trim(),
      paymentAmount: paymentAmount.trim(),
      paymentType,
      deadline: isNonEmptyString(deadline) ? deadline.trim() : "",
      country: country.trim(),
      currency,
    },
  };
}

function validateInvoicePayload(body: unknown): {
  isValid: boolean;
  error?: string;
  values?: InvoiceFormValues;
} {
  if (!body || typeof body !== "object") {
    return {
      isValid: false,
      error: "Invalid request body.",
    };
  }

  const data = body as Record<string, unknown>;

  const businessName = data.businessName;
  const clientName = data.clientName;
  const invoiceNumber = data.invoiceNumber;
  const issueDate = data.issueDate;
  const dueDate = data.dueDate;
  const serviceDescription = data.serviceDescription;
  const amountDue = data.amountDue;
  const country = data.country;
  const currency = data.currency;

  if (!isNonEmptyString(businessName)) {
    return { isValid: false, error: "Business name is required." };
  }

  if (!isNonEmptyString(clientName)) {
    return { isValid: false, error: "Client name is required." };
  }

  if (!isNonEmptyString(invoiceNumber)) {
    return { isValid: false, error: "Invoice number is required." };
  }

  if (!isNonEmptyString(issueDate)) {
    return { isValid: false, error: "Issue date is required." };
  }

  if (!isNonEmptyString(dueDate)) {
    return { isValid: false, error: "Due date is required." };
  }

  if (!isNonEmptyString(serviceDescription)) {
    return { isValid: false, error: "Services or items description is required." };
  }

  if (!isNonEmptyString(amountDue)) {
    return { isValid: false, error: "Amount due is required." };
  }

  if (!isNonEmptyString(country)) {
    return { isValid: false, error: "Country is required." };
  }

  if (!isSupportedCurrency(currency)) {
    return { isValid: false, error: "Invalid currency." };
  }

  return {
    isValid: true,
    values: {
      businessName: businessName.trim(),
      clientName: clientName.trim(),
      invoiceNumber: invoiceNumber.trim(),
      issueDate: issueDate.trim(),
      dueDate: dueDate.trim(),
      serviceDescription: serviceDescription.trim(),
      amountDue: amountDue.trim(),
      country: country.trim(),
      currency,
    },
  };
}


function validateWelcomeDocPayload(body: unknown): {
  isValid: boolean;
  error?: string;
  values?: WelcomeDocFormValues;
} {
  if (!body || typeof body !== "object") {
    return {
      isValid: false,
      error: "Invalid request body.",
    };
  }

  const data = body as Record<string, unknown>;

  const companyName = data.companyName;
  const clientName = data.clientName;
  const projectName = data.projectName;
  const servicesOverview = data.servicesOverview;
  const communicationChannels = data.communicationChannels;
  const timelineOverview = data.timelineOverview;
  const keyDeliverables = data.keyDeliverables;
  const country = data.country;

  if (!isNonEmptyString(companyName)) {
    return { isValid: false, error: "Company or brand name is required." };
  }

  if (!isNonEmptyString(clientName)) {
    return { isValid: false, error: "Client name is required." };
  }

  if (!isNonEmptyString(projectName)) {
    return { isValid: false, error: "Project name is required." };
  }

  if (!isNonEmptyString(servicesOverview)) {
    return { isValid: false, error: "Services overview is required." };
  }

  if (!isNonEmptyString(communicationChannels)) {
    return { isValid: false, error: "Communication channels are required." };
  }

  if (!isNonEmptyString(timelineOverview)) {
    return { isValid: false, error: "Timeline overview is required." };
  }

  if (!isNonEmptyString(keyDeliverables)) {
    return { isValid: false, error: "Key deliverables are required." };
  }

  if (!isNonEmptyString(country)) {
    return { isValid: false, error: "Country is required." };
  }

  return {
    isValid: true,
    values: {
      companyName: companyName.trim(),
      clientName: clientName.trim(),
      projectName: projectName.trim(),
      servicesOverview: servicesOverview.trim(),
      communicationChannels: communicationChannels.trim(),
      timelineOverview: timelineOverview.trim(),
      keyDeliverables: keyDeliverables.trim(),
      country: country.trim(),
    },
  };
}

function validateClientAccessRequestPayload(body: unknown): {
  isValid: boolean;
  error?: string;
  values?: ClientAccessRequestValues;
} {
  if (!body || typeof body !== "object") {
    return {
      isValid: false,
      error: "Invalid request body.",
    };
  }

  const data = body as Record<string, unknown>;

  const companyName = data.companyName;
  const clientName = data.clientName;
  const requestedAccess = data.requestedAccess;
  const purposeOfAccess = data.purposeOfAccess;
  const deadlineOrUrgency = data.deadlineOrUrgency;
  const notesOrInstructions = data.notesOrInstructions;
  const country = data.country;

  if (!isNonEmptyString(companyName)) {
    return { isValid: false, error: "Company name is required." };
  }

  if (!isNonEmptyString(clientName)) {
    return { isValid: false, error: "Client name is required." };
  }

  if (!isNonEmptyString(requestedAccess)) {
    return { isValid: false, error: "Requested access is required." };
  }

  if (!isNonEmptyString(purposeOfAccess)) {
    return { isValid: false, error: "Purpose of access is required." };
  }

  if (!isNonEmptyString(deadlineOrUrgency)) {
    return { isValid: false, error: "Deadline or urgency is required." };
  }

  if (!isNonEmptyString(country)) {
    return { isValid: false, error: "Country is required." };
  }

  return {
    isValid: true,
    values: {
      companyName: companyName.trim(),
      clientName: clientName.trim(),
      requestedAccess: requestedAccess.trim(),
      purposeOfAccess: purposeOfAccess.trim(),
      deadlineOrUrgency: deadlineOrUrgency.trim(),
      notesOrInstructions: isNonEmptyString(notesOrInstructions)
        ? notesOrInstructions.trim()
        : "",
      country: country.trim(),
    },
  };
}

function validateFeedbackRequestPayload(body: unknown): {
  isValid: boolean;
  error?: string;
  values?: FeedbackRequestValues;
} {
  if (!body || typeof body !== "object") {
    return {
      isValid: false,
      error: "Invalid request body.",
    };
  }

  const data = body as Record<string, unknown>;

  const businessName = data.businessName;
  const clientName = data.clientName;
  const projectDescription = data.projectDescription;
  const resultsAchieved = data.resultsAchieved;
  const platform = data.platform;
  const tone = data.tone;
  const country = data.country;

  if (!isNonEmptyString(businessName)) {
    return { isValid: false, error: "Your name or business name is required." };
  }

  if (!isNonEmptyString(clientName)) {
    return { isValid: false, error: "Client name is required." };
  }

  if (!isNonEmptyString(projectDescription)) {
    return { isValid: false, error: "Project description is required." };
  }

  if (!isNonEmptyString(resultsAchieved)) {
    return { isValid: false, error: "Results achieved is required." };
  }

  if (!isNonEmptyString(platform)) {
    return { isValid: false, error: "Platform is required." };
  }

  if (tone !== "formal" && tone !== "friendly") {
    return { isValid: false, error: "Tone must be formal or friendly." };
  }

  if (!isNonEmptyString(country)) {
    return { isValid: false, error: "Country is required." };
  }

  return {
    isValid: true,
    values: {
      businessName: businessName.trim(),
      clientName: clientName.trim(),
      projectDescription: projectDescription.trim(),
      resultsAchieved: resultsAchieved.trim(),
      platform: platform.trim(),
      tone,
      country: country.trim(),
    },
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
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

      const values = validation.values;

      try {
        if (!process.env.OPENAI_API_KEY) {
          throw new Error("OPENAI_API_KEY missing");
        }

        const contract = await generateFreelancerContract(values);

        return NextResponse.json({ contract }, { status: 200 });
      } catch (error) {
        console.error("AI freelancer generation failed, using local fallback:", error);

        const fallbackContract = generateLocalFreelancerContract(values);

        return NextResponse.json(
          {
            contract: fallbackContract,
            fallback: true,
          },
          { status: 200 }
        );
      }
    }

    if (contractType === "invoice") {
      const validation = validateInvoicePayload(body);

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

        const contract = await generateInvoiceContract(values);

        return NextResponse.json({ contract }, { status: 200 });
      } catch (error) {
        console.error("AI invoice generation failed, using local fallback:", error);

        const fallbackContract = generateLocalInvoiceContract(values);

        return NextResponse.json(
          {
            contract: fallbackContract,
            fallback: true,
          },
          { status: 200 }
        );
      }
    }


    if (contractType === "welcome-doc") {
      const validation = validateWelcomeDocPayload(body);

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

        const contract = await generateWelcomeDoc(values);

        return NextResponse.json({ contract }, { status: 200 });
      } catch (error) {
        console.error("AI welcome-doc generation failed, using local fallback:", error);

        const fallbackContract = generateLocalWelcomeDoc(values);

        return NextResponse.json(
          {
            contract: fallbackContract,
            fallback: true,
          },
          { status: 200 }
        );
      }
    }

    if (contractType === "client-access-request") {
      const validation = validateClientAccessRequestPayload(body);

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

        const contract = await generateClientAccessRequest(values);

        return NextResponse.json({ contract }, { status: 200 });
      } catch (error) {
        console.error(
          "AI client-access-request generation failed, using local fallback:",
          error
        );

        const fallbackContract = generateLocalClientAccessRequest(values);

        return NextResponse.json(
          {
            contract: fallbackContract,
            fallback: true,
          },
          { status: 200 }
        );
      }
    }

    if (contractType === "feedback-request") {
      const validation = validateFeedbackRequestPayload(body);

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

        const contract = await generateFeedbackRequest(values);

        return NextResponse.json({ contract }, { status: 200 });
      } catch (error) {
        console.error(
          "AI feedback-request generation failed, using local fallback:",
          error
        );

        const fallbackContract = generateLocalFeedbackRequest(values);

        return NextResponse.json(
          {
            contract: fallbackContract,
            fallback: true,
          },
          { status: 200 }
        );
      }
    }

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
      console.error("AI revenue-share generation failed, using local fallback:", error);

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
