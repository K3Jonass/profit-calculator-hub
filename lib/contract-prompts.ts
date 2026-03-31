import type { RevenueShareFormValues } from "@/lib/contract-types";

export const CONTRACT_SYSTEM_PROMPT = `
You are a professional contract drafting assistant for small businesses, founders, freelancers, and ecommerce operators.

Your job is to generate a clean, professional, plain-English revenue share agreement template.

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