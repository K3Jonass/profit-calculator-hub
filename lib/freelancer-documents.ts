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

export type SupportedContractType = "revenue-share" | "freelancer";
export type SupportedPrimaryDocType =
  | "welcome-doc"
  | "client-access-request"
  | "feedback-request";

export type ValidationResult<T> = {
  isValid: boolean;
  error?: string;
  values?: T;
};

export type GenerationResult = {
  content: string;
  fallback: boolean;
};

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

export function validateRevenueSharePayload(
  body: unknown
): ValidationResult<RevenueShareFormValues> {
  if (!body || typeof body !== "object") {
    return { isValid: false, error: "Invalid request body." };
  }

  const data = body as Record<string, unknown>;
  const {
    partyAName,
    partyBName,
    revenueSharePercentage,
    paymentFrequency,
    serviceDescription,
    country,
    currency,
  } = data;

  if (!isNonEmptyString(partyAName)) {
    return { isValid: false, error: "Party A name is required." };
  }

  if (!isNonEmptyString(partyBName)) {
    return { isValid: false, error: "Party B name is required." };
  }

  if (!isNonEmptyString(revenueSharePercentage)) {
    return { isValid: false, error: "Revenue share percentage is required." };
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

export function validateFreelancerPayload(
  body: unknown
): ValidationResult<FreelancerFormValues> {
  if (!body || typeof body !== "object") {
    return { isValid: false, error: "Invalid request body." };
  }

  const data = body as Record<string, unknown>;
  const {
    clientName,
    freelancerName,
    projectDescription,
    paymentAmount,
    paymentType,
    deadline,
    country,
    currency,
  } = data;

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

export function validateInvoicePayload(
  body: unknown
): ValidationResult<InvoiceFormValues> {
  if (!body || typeof body !== "object") {
    return { isValid: false, error: "Invalid request body." };
  }

  const data = body as Record<string, unknown>;
  const {
    businessName,
    clientName,
    invoiceNumber,
    issueDate,
    dueDate,
    serviceDescription,
    amountDue,
    country,
    currency,
  } = data;

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

export function validateWelcomeDocPayload(
  body: unknown
): ValidationResult<WelcomeDocFormValues> {
  if (!body || typeof body !== "object") {
    return { isValid: false, error: "Invalid request body." };
  }

  const data = body as Record<string, unknown>;
  const {
    companyName,
    clientName,
    projectName,
    servicesOverview,
    communicationChannels,
    timelineOverview,
    keyDeliverables,
    country,
  } = data;

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

export function validateClientAccessRequestPayload(
  body: unknown
): ValidationResult<ClientAccessRequestValues> {
  if (!body || typeof body !== "object") {
    return { isValid: false, error: "Invalid request body." };
  }

  const data = body as Record<string, unknown>;
  const {
    companyName,
    clientName,
    requestedAccess,
    purposeOfAccess,
    deadlineOrUrgency,
    notesOrInstructions,
    country,
  } = data;

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

export function validateFeedbackRequestPayload(
  body: unknown
): ValidationResult<FeedbackRequestValues> {
  if (!body || typeof body !== "object") {
    return { isValid: false, error: "Invalid request body." };
  }

  const data = body as Record<string, unknown>;
  const {
    businessName,
    clientName,
    projectDescription,
    resultsAchieved,
    platform,
    tone,
    country,
  } = data;

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

export async function generateInvoiceDocument(
  values: InvoiceFormValues
): Promise<GenerationResult> {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY missing");
    }

    const content = await generateInvoiceContract(values);

    return { content, fallback: false };
  } catch (error) {
    console.error("AI invoice generation failed, using local fallback:", error);

    return {
      content: generateLocalInvoiceContract(values),
      fallback: true,
    };
  }
}

export async function generateFreelancerContractDocument(
  values: FreelancerFormValues
): Promise<GenerationResult> {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY missing");
    }

    const content = await generateFreelancerContract(values);

    return { content, fallback: false };
  } catch (error) {
    console.error("AI freelancer generation failed, using local fallback:", error);

    return {
      content: generateLocalFreelancerContract(values),
      fallback: true,
    };
  }
}

export async function generateRevenueShareContractDocument(
  values: RevenueShareFormValues
): Promise<GenerationResult> {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY missing");
    }

    const content = await generateRevenueShareContract(values);

    return { content, fallback: false };
  } catch (error) {
    console.error("AI revenue-share generation failed, using local fallback:", error);

    return {
      content: generateLocalRevenueShareContract(values),
      fallback: true,
    };
  }
}

export async function generatePrimaryDoc(
  docType: SupportedPrimaryDocType,
  payload: unknown
): Promise<GenerationResult> {
  if (docType === "welcome-doc") {
    const validation = validateWelcomeDocPayload(payload);

    if (!validation.isValid || !validation.values) {
      throw new Error(validation.error || "Invalid request.");
    }

    try {
      if (!process.env.OPENAI_API_KEY) {
        throw new Error("OPENAI_API_KEY missing");
      }

      const content = await generateWelcomeDoc(validation.values);

      return { content, fallback: false };
    } catch (error) {
      console.error("AI welcome-doc generation failed, using local fallback:", error);

      return {
        content: generateLocalWelcomeDoc(validation.values),
        fallback: true,
      };
    }
  }

  if (docType === "client-access-request") {
    const validation = validateClientAccessRequestPayload(payload);

    if (!validation.isValid || !validation.values) {
      throw new Error(validation.error || "Invalid request.");
    }

    try {
      if (!process.env.OPENAI_API_KEY) {
        throw new Error("OPENAI_API_KEY missing");
      }

      const content = await generateClientAccessRequest(validation.values);

      return { content, fallback: false };
    } catch (error) {
      console.error(
        "AI client-access-request generation failed, using local fallback:",
        error
      );

      return {
        content: generateLocalClientAccessRequest(validation.values),
        fallback: true,
      };
    }
  }

  const validation = validateFeedbackRequestPayload(payload);

  if (!validation.isValid || !validation.values) {
    throw new Error(validation.error || "Invalid request.");
  }

  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY missing");
    }

    const content = await generateFeedbackRequest(validation.values);

    return { content, fallback: false };
  } catch (error) {
    console.error("AI feedback-request generation failed, using local fallback:", error);

    return {
      content: generateLocalFeedbackRequest(validation.values),
      fallback: true,
    };
  }
}
