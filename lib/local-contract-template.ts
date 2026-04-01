import type { RevenueShareFormValues } from "@/lib/contract-types";
import type { FreelancerFormValues } from "@/lib/contract-types";
import type { InvoiceFormValues } from "@/lib/contract-types";
import type { WelcomeDocFormValues } from "@/lib/contract-types";
import type { ClientAccessRequestValues } from "@/lib/contract-types";
import type { FeedbackRequestValues } from "@/lib/contract-types";

export function generateLocalRevenueShareContract(
  values: RevenueShareFormValues
) {
  return `REVENUE SHARE AGREEMENT

This Revenue Share Agreement ("Agreement") is entered into by and between ${values.partyAName} ("Party A") and ${values.partyBName} ("Party B").

1. PARTIES
Party A: ${values.partyAName}
Party B: ${values.partyBName}

2. PURPOSE / SCOPE
This Agreement governs a revenue share arrangement relating to the following service or product:
${values.serviceDescription}

3. REVENUE SHARE TERMS
Party B shall be entitled to receive ${values.revenueSharePercentage}% of the revenue generated from the applicable service, product, offer, or business activity covered by this Agreement, unless otherwise agreed in writing by both parties.

4. PAYMENT TERMS
Payments shall be calculated and paid on a ${values.paymentFrequency} basis in ${values.currency}.
Each payment should be accompanied by a reasonable summary of the revenue calculation for the relevant period.

5. DURATION
This Agreement shall begin on the effective date signed by both parties and shall continue until terminated in accordance with this Agreement.

6. TERMINATION
Either party may terminate this Agreement by providing written notice to the other party within a reasonable notice period.
Any unpaid revenue share amounts earned before the termination date shall remain payable.

7. LIABILITY AND LIMITATION OF RESPONSIBILITY
Each party remains responsible for its own business operations, decisions, and compliance obligations.
Neither party shall be liable for indirect, incidental, or consequential losses except where required by applicable law.

8. GOVERNING LAW
This Agreement shall be governed by the laws of ${values.country}.

9. GENERAL PROVISIONS
Any amendments to this Agreement should be made in writing and agreed to by both parties.
If any provision is found unenforceable, the remaining provisions shall remain in effect.

10. SIGNATURE BLOCKS

Party A: ${values.partyAName}
Signature: ______________________
Date: __________________________

Party B: ${values.partyBName}
Signature: ______________________
Date: __________________________

This document is a template and not legal advice.`;
}

export function generateLocalFreelancerContract(
  values: FreelancerFormValues
) {
  return `FREELANCER AGREEMENT

This Freelancer Agreement ("Agreement") is entered into by and between ${values.clientName} ("Client") and ${values.freelancerName} ("Freelancer").

1. PARTIES
Client: ${values.clientName}
Freelancer: ${values.freelancerName}

2. SERVICES / SCOPE
The Freelancer agrees to perform the following services:
${values.projectDescription}

3. PAYMENT TERMS
The Client agrees to pay ${values.paymentAmount} ${values.currency} as a ${values.paymentType} payment.

4. DEADLINE
The expected completion date for the services is:
${values.deadline || "Not specified"}

5. RELATIONSHIP OF PARTIES
The Freelancer is an independent contractor and not an employee of the Client.

6. CONFIDENTIALITY
Both parties agree to keep all confidential information related to the project private.

7. TERMINATION
Either party may terminate this Agreement with reasonable written notice.
Any work completed before termination must be compensated accordingly.

8. LIABILITY
Each party is responsible for its own actions and obligations under this Agreement.

9. GOVERNING LAW
This Agreement shall be governed by the laws of ${values.country}.

10. SIGNATURE BLOCKS

Client: ${values.clientName}
Signature: ______________________
Date: __________________________

Freelancer: ${values.freelancerName}
Signature: ______________________
Date: __________________________

This document is a template and not legal advice.`;
}

export function generateLocalInvoiceContract(values: InvoiceFormValues) {
  return `INVOICE

From: ${values.businessName}
To: ${values.clientName}

Invoice Number: ${values.invoiceNumber}
Issue Date: ${values.issueDate}
Due Date: ${values.dueDate}
Country: ${values.country}

1. SERVICES / ITEMS
${values.serviceDescription}

2. BILLING SUMMARY
Subtotal: ${values.amountDue} ${values.currency}
Total Amount Due: ${values.amountDue} ${values.currency}

3. PAYMENT TERMS
Payment is due by ${values.dueDate}.
Please include the invoice number (${values.invoiceNumber}) with the payment reference.
A late payment fee may apply if payment is delayed beyond the due date, where permitted by applicable law.

4. NOTES
Thank you for your business.

This document is a template and not legal advice.`;
}


export function generateLocalWelcomeDoc(values: WelcomeDocFormValues) {
  return `CLIENT WELCOME DOCUMENT

Welcome to ${values.companyName}!

Client: ${values.clientName}
Project: ${values.projectName}
Country / Jurisdiction: ${values.country}

1. WELCOME
We are excited to support ${values.clientName} on ${values.projectName}.
This document outlines how we will collaborate and what to expect throughout the engagement.

2. SERVICES OVERVIEW
${values.servicesOverview}

3. COMMUNICATION CHANNELS
${values.communicationChannels}

4. TIMELINE OVERVIEW
${values.timelineOverview}

5. KEY DELIVERABLES
${values.keyDeliverables}

6. COLLABORATION EXPECTATIONS
Both parties will communicate proactively, provide feedback in a timely manner, and keep project details organized through the agreed communication channels.

7. GOVERNING LAW
This document shall be governed by the laws of ${values.country}.

This document is a template and not legal advice.`;
}

export function generateLocalClientAccessRequest(
  values: ClientAccessRequestValues
) {
  return `CLIENT ACCESS REQUEST

Company: ${values.companyName}
Client: ${values.clientName}
Country / Jurisdiction: ${values.country}

1. REQUESTED ACCESS
${values.requestedAccess}

2. PURPOSE OF ACCESS
${values.purposeOfAccess}

3. DEADLINE / URGENCY
${values.deadlineOrUrgency}

4. NOTES / INSTRUCTIONS
${values.notesOrInstructions || "None provided."}

5. SECURITY AND CONFIDENTIALITY
Requested access should be granted using least-privilege principles where possible and only for the intended business purpose.
Any credentials or sensitive data shared during this process must be handled securely and in accordance with agreed policies.

6. APPROVAL
Requested By (${values.companyName}): ______________________
Date: ______________________

Approved By (${values.clientName}): ______________________
Date: ______________________

Governing Law: ${values.country}

This document is a template and not legal advice.`;
}

export function generateLocalFeedbackRequest(values: FeedbackRequestValues) {
  const subjectLine =
    values.tone === "formal"
      ? `Testimonial Request - ${values.businessName}`
      : `Quick favor? Feedback on our project`;

  return `FEEDBACK / TESTIMONIAL REQUEST

Subject: ${subjectLine}

Hello ${values.clientName},

I hope you're doing well. This is ${values.businessName}.

I wanted to thank you again for the opportunity to collaborate on:
${values.projectDescription}

We were glad to help deliver:
${values.resultsAchieved}

If you're open to it, I'd really appreciate a short feedback note or testimonial that we can use on ${values.platform}.

Optional prompt you can use:
"What was the challenge before we started, what changed after the project, and what result mattered most to you?"

Thank you for your time and support.

Best regards,
${values.businessName}

Country / Jurisdiction: ${values.country}

This document is a template and not legal advice.`;
}
