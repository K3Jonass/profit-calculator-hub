import type {
  RevenueShareFormValues,
  FreelancerFormValues,
  InvoiceFormValues,
  WelcomeDocFormValues,
  ClientAccessRequestValues,
  FeedbackRequestValues,
} from "@/lib/contract-types";

export const CONTRACT_SYSTEM_PROMPT = `
You are a senior legal document formatter and contract drafting assistant for small businesses.

Generate premium, clear, legally styled document text using clean legal English.

Global style rules:
- No legal advice.
- Plain text only (no markdown, no code fences).
- Professional, concise, non-robotic tone.
- Avoid repetition and dense paragraphs.
- Use this structure for every document:
  1) Center-style title line in ALL CAPS (plain text only)
  2) Date line
  3) Introduction paragraph
  4) Definitions (if useful)
  5) Numbered sections:
     1. Scope of Work
     2. Payment Terms
     3. Responsibilities
     4. Duration & Termination
     5. Confidentiality
     6. Liability
     7. Governing Law
     8. Signatures
     9. Additional Terms (Optional)
- Use bullet points where helpful.
`;

export function buildRevenueSharePrompt(values: RevenueShareFormValues) {
  return `
Create a Revenue Share Agreement with the required global structure.

Party A Name: ${values.partyAName}
Party B Name: ${values.partyBName}
Revenue Share Percentage: ${values.revenueSharePercentage}%
Payment Frequency: ${values.paymentFrequency}
Service or Product Description: ${values.serviceDescription}
Country / Jurisdiction: ${values.country}
Currency: ${values.currency}

Document requirements:
- Clearly define revenue calculation basis (e.g., net revenue components).
- State settlement schedule using payment frequency.
- Keep obligations balanced for both parties.
- Include signature lines for both parties.
`;
}

export function buildFreelancerPrompt(values: FreelancerFormValues) {
  return `
Create a Freelancer Services Agreement with the required global structure.

Client Name: ${values.clientName}
Freelancer Name: ${values.freelancerName}
Project Description: ${values.projectDescription}
Payment Amount: ${values.paymentAmount}
Payment Type: ${values.paymentType}
Deadline: ${values.deadline || "Not specified"}
Country / Jurisdiction: ${values.country}
Currency: ${values.currency}

Document requirements:
- Make scope boundaries clear.
- Describe invoice/payment mechanics for ${values.paymentType} pricing.
- Clarify independent contractor relationship.
- Include confidentiality, termination, and signature lines.
`;
}

export function buildInvoicePrompt(values: InvoiceFormValues) {
  return `
Create a professional invoice document using the required global structure.

Business Name: ${values.businessName}
Client Name: ${values.clientName}
Invoice Number: ${values.invoiceNumber}
Issue Date: ${values.issueDate}
Due Date: ${values.dueDate}
Services / Items Description: ${values.serviceDescription}
Amount Due: ${values.amountDue}
Currency: ${values.currency}
Country / Jurisdiction: ${values.country}

Document requirements:
- Keep invoice metadata explicit and easy to scan.
- Include line-item/service description block.
- Include amount due and due date prominently.
- Keep legal-style headings while still reading like an invoice.
`;
}

export function buildWelcomeDocPrompt(values: WelcomeDocFormValues) {
  return `
Create a client welcome document with the required global structure.

Company / Brand Name: ${values.companyName}
Client Name: ${values.clientName}
Project Name: ${values.projectName}
Services Overview: ${values.servicesOverview}
Communication Channels: ${values.communicationChannels}
Timeline Overview: ${values.timelineOverview}
Key Deliverables: ${values.keyDeliverables}
Country / Jurisdiction: ${values.country}

Document requirements:
- Keep tone welcoming but professional and structured.
- Clarify collaboration workflow and expectations.
- Include timeline, communication, and deliverables clearly.
- Use the same section numbering format as contracts.
`;
}

export function buildClientAccessRequestPrompt(
  values: ClientAccessRequestValues
) {
  return `
Create a client access request document with the required global structure.

Company Name: ${values.companyName}
Client Name: ${values.clientName}
Requested Access (accounts/tools): ${values.requestedAccess}
Purpose of Access: ${values.purposeOfAccess}
Deadline / Urgency: ${values.deadlineOrUrgency}
Notes / Instructions: ${values.notesOrInstructions || "None provided"}
Country / Jurisdiction: ${values.country}

Document requirements:
- Keep the request operational and security-aware.
- Specify requested permissions clearly.
- Include least-privilege/security wording.
- Include sign-off lines and governing law.
`;
}

export function buildFeedbackRequestPrompt(values: FeedbackRequestValues) {
  return `
Create a feedback/testimonial request document with the required global structure.

Your Name / Business Name: ${values.businessName}
Client Name: ${values.clientName}
Project Description: ${values.projectDescription}
Results Achieved: ${values.resultsAchieved}
Preferred Platform: ${values.platform}
Tone: ${values.tone}
Country / Jurisdiction: ${values.country}

Document requirements:
- Keep wording concise and human.
- Ask for private feedback plus optional public testimonial permission.
- Add a short suggested prompt for the client response.
- Keep tone aligned to ${values.tone}.
`;
}
