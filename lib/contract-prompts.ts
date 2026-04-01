import type {
  RevenueShareFormValues,
  FreelancerFormValues,
  InvoiceFormValues,
  WelcomeDocFormValues,
  ClientAccessRequestValues,
  FeedbackRequestValues,
} from "@/lib/contract-types";

export const CONTRACT_SYSTEM_PROMPT = `
You are a professional contract drafting assistant for small businesses, founders, freelancers, and ecommerce operators.

Your job is to generate a clean, professional, plain-English business document template based on the requested type.

Important rules:
- Do not provide legal advice.
- Write in a professional and practical tone.
- Make the contract readable and structured.
- Use clear section headings.
- Avoid unnecessary legal jargon unless helpful.
- Keep it realistic for small business use.
- Include the exact disclaimer at the end:
"This document is a template and not legal advice."

The contract must include these sections:
1. Title
2. Parties
3. Purpose / Scope
4. Revenue Share Terms
5. Payment Terms
6. Duration
7. Termination
8. Liability and Limitation of Responsibility
9. Governing Law
10. General Provisions
11. Signature Blocks
12. Disclaimer

Return plain text only.
Do not return JSON.
Do not use markdown code fences.
`;

export function buildRevenueSharePrompt(values: RevenueShareFormValues) {
  return `
Generate a professional revenue share agreement template using the following details.

Party A Name: ${values.partyAName}
Party B Name: ${values.partyBName}
Revenue Share Percentage: ${values.revenueSharePercentage}%
Payment Frequency: ${values.paymentFrequency}
Service or Product Description: ${values.serviceDescription}
Country / Jurisdiction: ${values.country}
Currency: ${values.currency}

Instructions:
- Use the country as the governing law jurisdiction.
- Make the agreement balanced and practical.
- Clearly describe how revenue share is calculated.
- Mention when payments should be made based on the payment frequency.
- Include a reasonable duration clause.
- Include a reasonable termination clause.
- Include liability language suitable for a business template.
- Add signature lines for both parties.
- End with this exact sentence:
"This document is a template and not legal advice."
`;
}

export function buildFreelancerPrompt(values: FreelancerFormValues) {
  return `
Generate a professional freelancer agreement template using the following details.

Client Name: ${values.clientName}
Freelancer Name: ${values.freelancerName}
Project Description: ${values.projectDescription}
Payment Amount: ${values.paymentAmount}
Payment Type: ${values.paymentType}
Deadline: ${values.deadline || "Not specified"}
Country / Jurisdiction: ${values.country}
Currency: ${values.currency}

Instructions:
- Use the country as the governing law jurisdiction.
- Clearly define the scope of work based on the project description.
- Specify whether payment is fixed or hourly and how it will be paid.
- Include a reasonable deadline clause.
- Include a confidentiality clause.
- Include a termination clause that protects both parties.
- Clarify that the freelancer is an independent contractor.
- Include liability language suitable for a freelancer-client relationship.
- Add signature lines for both parties.
- End with this exact sentence:
"This document is a template and not legal advice."
`;
}

export function buildInvoicePrompt(values: InvoiceFormValues) {
  return `
Generate a professional invoice template using the following details.

Business Name: ${values.businessName}
Client Name: ${values.clientName}
Invoice Number: ${values.invoiceNumber}
Issue Date: ${values.issueDate}
Due Date: ${values.dueDate}
Services / Items Description: ${values.serviceDescription}
Amount Due: ${values.amountDue}
Currency: ${values.currency}
Country / Jurisdiction: ${values.country}

Instructions:
- Format this as a clean invoice template with clear sections.
- Include sender (business) and recipient (client) details.
- Include invoice metadata (invoice number, issue date, due date).
- Include a line item section based on the services/items description.
- Include subtotal and total amount due in the specified currency.
- Include simple payment terms and a late payment note.
- Keep the structure practical for a freelancer or small business.
- End with this exact sentence:
"This document is a template and not legal advice."
`;
}


export function buildWelcomeDocPrompt(values: WelcomeDocFormValues) {
  return `
Generate a professional client welcome document template using the following details.

Company / Brand Name: ${values.companyName}
Client Name: ${values.clientName}
Project Name: ${values.projectName}
Services Overview: ${values.servicesOverview}
Communication Channels: ${values.communicationChannels}
Timeline Overview: ${values.timelineOverview}
Key Deliverables: ${values.keyDeliverables}
Country / Jurisdiction: ${values.country}

Instructions:
- Format this as a practical onboarding welcome document for a new client.
- Include a clear introduction and document purpose section.
- Summarize services in straightforward language.
- Clarify communication channels and response expectations.
- Present timeline overview and key milestones clearly.
- List the key deliverables in a clean section.
- Include a simple collaboration expectations section.
- Include a governing law line using the country provided.
- End with this exact sentence:
"This document is a template and not legal advice."
`;
}

export function buildClientAccessRequestPrompt(
  values: ClientAccessRequestValues
) {
  return `
Generate a professional client access request document template using the following details.

Company Name: ${values.companyName}
Client Name: ${values.clientName}
Requested Access (accounts/tools): ${values.requestedAccess}
Purpose of Access: ${values.purposeOfAccess}
Deadline / Urgency: ${values.deadlineOrUrgency}
Notes / Instructions: ${values.notesOrInstructions || "None provided"}
Country / Jurisdiction: ${values.country}

Instructions:
- Format this as a practical request document that can be sent to a client or internal approver.
- Clearly list requested accounts/tools and the expected access scope.
- Explain the purpose and business context in plain language.
- Include timeline expectations based on the deadline/urgency provided.
- Include a short security and confidentiality acknowledgment section.
- Include a simple approval/sign-off section.
- Include a governing law line using the country provided.
- End with this exact sentence:
"This document is a template and not legal advice."
`;
}

export function buildFeedbackRequestPrompt(values: FeedbackRequestValues) {
  return `
Generate a professional feedback/testimonial request template using the following details.

Your Name / Business Name: ${values.businessName}
Client Name: ${values.clientName}
Project Description: ${values.projectDescription}
Results Achieved: ${values.resultsAchieved}
Preferred Platform: ${values.platform}
Tone: ${values.tone}
Country / Jurisdiction: ${values.country}

Instructions:
- Format this as a concise request message that can be sent by email or direct message.
- Include a clear greeting and personalized context.
- Reference the project and key results in practical language.
- Ask politely for feedback and a testimonial suitable for the requested platform.
- Include a short optional prompt the client can use to make replying easier.
- Match the requested tone (${values.tone}) while staying professional.
- Include a brief thank-you and close with sender details.
- Include a governing law line using the country provided.
- End with this exact sentence:
"This document is a template and not legal advice."
`;
}
