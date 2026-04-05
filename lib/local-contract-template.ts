import type { RevenueShareFormValues } from "@/lib/contract-types";
import type { FreelancerFormValues } from "@/lib/contract-types";
import type { InvoiceFormValues } from "@/lib/contract-types";
import type { WelcomeDocFormValues } from "@/lib/contract-types";
import type { ClientAccessRequestValues } from "@/lib/contract-types";
import type { FeedbackRequestValues } from "@/lib/contract-types";

function section(title: string, body: string) {
  return `${title}\n${body.trim()}`;
}

export function generateLocalRevenueShareContract(
  values: RevenueShareFormValues
) {
  const today = new Date().toISOString().slice(0, 10);

  return `${values.partyAName.toUpperCase()} - ${values.partyBName.toUpperCase()}\nREVENUE SHARE AGREEMENT\nDate: ${today}\n\nThis Revenue Share Agreement ("Agreement") is entered into by and between ${values.partyAName} ("Party A") and ${values.partyBName} ("Party B") as of the date above. The parties agree as follows:\n\n${section(
    "Definitions",
    `"Net Revenue" means gross amounts actually received from the services or products listed below, less refunds, payment processor fees, taxes, and chargebacks.\n"Services" means: ${values.serviceDescription}.`
  )}\n\n${section(
    "1. Scope of Work",
    `${values.partyAName} will deliver and/or manage the Services. ${values.partyBName} will support execution as agreed between the parties. The Services covered by this Agreement are limited to: ${values.serviceDescription}.`
  )}\n\n${section(
    "2. Payment Terms",
    `${values.partyBName} will receive ${values.revenueSharePercentage}% of Net Revenue from the Services. Settlement will be made on a ${values.paymentFrequency} basis in ${values.currency}. Each payment will include a simple revenue statement showing the calculation period, gross receipts, approved deductions, and final payable amount.`
  )}\n\n${section(
    "3. Responsibilities",
    `Each party will:\n- Perform its obligations in good faith and in a commercially reasonable manner.\n- Maintain accurate records relevant to the revenue share calculation.\n- Promptly notify the other party of material issues affecting delivery or collections.`
  )}\n\n${section(
    "4. Duration & Termination",
    `This Agreement starts on the date above and continues until terminated by either party with reasonable written notice. Any earned but unpaid revenue share accrued before the termination effective date remains payable.`
  )}\n\n${section(
    "5. Confidentiality",
    `Each party will treat non-public commercial, financial, and customer information disclosed under this Agreement as confidential and will not disclose it except as required to perform obligations or by law.`
  )}\n\n${section(
    "6. Liability",
    `To the maximum extent permitted by law, neither party is liable for indirect, incidental, or consequential losses. Each party remains responsible for its own acts, omissions, and compliance obligations.`
  )}\n\n${section(
    "7. Governing Law",
    `This Agreement is governed by the laws of ${values.country}, without regard to conflict-of-law rules.`
  )}\n\n${section(
    "8. Signatures",
    `Party A: ${values.partyAName}\nSignature: ____________________________\nDate: ____________________________\n\nParty B: ${values.partyBName}\nSignature: ____________________________\nDate: ____________________________`
  )}\n\nThis document is a template and not legal advice.`;
}

export function generateLocalFreelancerContract(
  values: FreelancerFormValues
) {
  const today = new Date().toISOString().slice(0, 10);

  return `${values.clientName.toUpperCase()} - ${values.freelancerName.toUpperCase()}\nFREELANCER SERVICES AGREEMENT\nDate: ${today}\n\nThis Freelancer Services Agreement ("Agreement") is entered into by and between ${values.clientName} ("Client") and ${values.freelancerName} ("Freelancer") as of the date above.\n\n${section(
    "Definitions",
    `"Services" means: ${values.projectDescription}.\n"Deliverables" means the work product produced by the Freelancer under this Agreement.`
  )}\n\n${section(
    "1. Scope of Work",
    `Freelancer will perform the following Services for Client: ${values.projectDescription}. Work outside this scope requires written approval by both parties.`
  )}\n\n${section(
    "2. Payment Terms",
    `Client will pay ${values.paymentAmount} ${values.currency} on a ${values.paymentType} basis. Freelancer may issue invoices according to agreed milestones or schedule, and Client will pay each approved invoice by the due date stated on the invoice.`
  )}\n\n${section(
    "3. Responsibilities",
    `Freelancer responsibilities:\n- Deliver Services using reasonable professional care.\n- Communicate progress and blockers in a timely manner.\n\nClient responsibilities:\n- Provide required inputs, approvals, and access in a timely manner.\n- Review submitted work and give consolidated feedback.`
  )}\n\n${section(
    "4. Duration & Termination",
    `This Agreement starts on the date above. Target completion date: ${values.deadline || "Not specified"}. Either party may terminate with written notice. Client will pay for all approved work completed up to the termination date.`
  )}\n\n${section(
    "5. Confidentiality",
    `Each party will keep confidential information private and use it only for this engagement. This obligation survives termination of the Agreement.`
  )}\n\n${section(
    "6. Liability",
    `Freelancer acts as an independent contractor and not as an employee, agent, or partner of Client. Each party remains responsible for its own legal and tax obligations. Neither party is liable for indirect or consequential losses to the extent permitted by law.`
  )}\n\n${section(
    "7. Governing Law",
    `This Agreement is governed by the laws of ${values.country}.`
  )}\n\n${section(
    "8. Signatures",
    `Client: ${values.clientName}\nSignature: ____________________________\nDate: ____________________________\n\nFreelancer: ${values.freelancerName}\nSignature: ____________________________\nDate: ____________________________`
  )}\n\nThis document is a template and not legal advice.`;
}

export function generateLocalInvoiceContract(values: InvoiceFormValues) {
  return `${values.businessName.toUpperCase()}\nINVOICE\nDate: ${values.issueDate}\n\nThis invoice is issued by ${values.businessName} to ${values.clientName} for services and/or items described below.\n\n${section(
    "Definitions",
    `"Issuer" means ${values.businessName}.\n"Recipient" means ${values.clientName}.`
  )}\n\n${section(
    "1. Scope of Work",
    `Services / Items:\n${values.serviceDescription}`
  )}\n\n${section(
    "2. Payment Terms",
    `Invoice Number: ${values.invoiceNumber}\nIssue Date: ${values.issueDate}\nDue Date: ${values.dueDate}\nCurrency: ${values.currency}\nAmount Due: ${values.amountDue} ${values.currency}\n\nPayment is due by the due date above. Include invoice reference ${values.invoiceNumber} with payment.`
  )}\n\n${section(
    "3. Responsibilities",
    `Issuer will provide the listed services/items as agreed. Recipient is responsible for timely payment and for notifying Issuer promptly of any billing discrepancy.`
  )}\n\n${section(
    "4. Duration & Termination",
    `This invoice remains payable until settled in full, unless replaced by a corrected invoice issued in writing by ${values.businessName}.`
  )}\n\n${section(
    "5. Confidentiality",
    `Commercial terms, rates, and project details contained in this invoice should be treated as confidential unless disclosure is required by law.`
  )}\n\n${section(
    "6. Liability",
    `Late payment charges may apply where permitted by law. Liability remains limited to the unpaid amount under this invoice, except where prohibited by applicable law.`
  )}\n\n${section(
    "7. Governing Law",
    `This invoice is governed by the laws of ${values.country}.`
  )}\n\n${section(
    "8. Signatures",
    `Issuer (${values.businessName}): ____________________________\nDate: ____________________________\n\nRecipient (${values.clientName}): ____________________________\nDate: ____________________________`
  )}\n\nThis document is a template and not legal advice.`;
}

export function generateLocalWelcomeDoc(values: WelcomeDocFormValues) {
  const today = new Date().toISOString().slice(0, 10);

  return `${values.companyName.toUpperCase()}\nCLIENT WELCOME DOCUMENT\nDate: ${today}\n\nWelcome to ${values.companyName}. This document outlines how ${values.companyName} and ${values.clientName} will work together on ${values.projectName}.\n\n${section(
    "Definitions",
    `"Project" means ${values.projectName}.\n"Team" means representatives of ${values.companyName} and ${values.clientName}.`
  )}\n\n${section(
    "1. Scope of Work",
    `Services Overview:\n${values.servicesOverview}`
  )}\n\n${section(
    "2. Payment Terms",
    `Payment structure is governed by your signed proposal, service agreement, or statement of work, including invoice timing, due dates, and approved payment methods.`
  )}\n\n${section(
    "3. Responsibilities",
    `Communication Channels:\n${values.communicationChannels}\n\nBoth parties will provide timely approvals, organized feedback, and complete project inputs needed for delivery.`
  )}\n\n${section(
    "4. Duration & Termination",
    `Timeline Overview:\n${values.timelineOverview}\n\nEither party may pause or terminate work according to the governing service agreement.`
  )}\n\n${section(
    "5. Confidentiality",
    `Both parties agree to protect confidential and proprietary information shared during onboarding and project execution.`
  )}\n\n${section(
    "6. Liability",
    `Each party is responsible for its own internal processes, approvals, and compliance duties. Neither party is liable for indirect or consequential loss to the extent permitted by law.`
  )}\n\n${section(
    "7. Governing Law",
    `This welcome document is governed by the laws of ${values.country}.`
  )}\n\n${section(
    "8. Signatures",
    `Prepared by (${values.companyName}): ____________________________\nDate: ____________________________\n\nAcknowledged by (${values.clientName}): ____________________________\nDate: ____________________________\n\nKey Deliverables:\n${values.keyDeliverables}`
  )}\n\nThis document is a template and not legal advice.`;
}

export function generateLocalClientAccessRequest(
  values: ClientAccessRequestValues
) {
  const today = new Date().toISOString().slice(0, 10);

  return `${values.companyName.toUpperCase()}\nCLIENT ACCESS REQUEST\nDate: ${today}\n\nThis document requests access required to complete approved project work for ${values.clientName}.\n\n${section(
    "Definitions",
    `"Requested Access" means account permissions, tools, and systems listed in this request.\n"Authorized Users" means approved personnel from ${values.companyName}.`
  )}\n\n${section(
    "1. Scope of Work",
    `Requested Access:\n${values.requestedAccess}\n\nPurpose of Access:\n${values.purposeOfAccess}`
  )}\n\n${section(
    "2. Payment Terms",
    `No additional payment obligation is created by this request unless agreed separately in writing.`
  )}\n\n${section(
    "3. Responsibilities",
    `${values.companyName} responsibilities:\n- Use access strictly for approved business purposes.\n- Follow least-privilege principles and client security policies.\n- Report incidents promptly.\n\n${values.clientName} responsibilities:\n- Provision the required level of access within the agreed timeline.\n- Confirm constraints, approval flow, and revocation process.`
  )}\n\n${section(
    "4. Duration & Termination",
    `Deadline / Urgency:\n${values.deadlineOrUrgency}\n\nAccess should remain active only as long as required for approved work and may be revoked upon completion or termination of the engagement.`
  )}\n\n${section(
    "5. Confidentiality",
    `Credentials, internal systems, business data, and customer information obtained through granted access must be kept confidential and protected by appropriate safeguards.`
  )}\n\n${section(
    "6. Liability",
    `Each party remains responsible for its own system controls and administrative actions. Unauthorized use is prohibited and may result in immediate access revocation.`
  )}\n\n${section(
    "7. Governing Law",
    `This request is governed by the laws of ${values.country}.`
  )}\n\n${section(
    "8. Signatures",
    `Requested By (${values.companyName}): ____________________________\nDate: ____________________________\n\nApproved By (${values.clientName}): ____________________________\nDate: ____________________________\n\nAdditional Notes:\n${values.notesOrInstructions || "None provided."}`
  )}\n\nThis document is a template and not legal advice.`;
}

export function generateLocalFeedbackRequest(values: FeedbackRequestValues) {
  const today = new Date().toISOString().slice(0, 10);
  const toneLine =
    values.tone === "formal"
      ? "This request is presented in a formal tone."
      : "This request is presented in a friendly, conversational tone.";

  return `${values.businessName.toUpperCase()}\nCLIENT FEEDBACK & TESTIMONIAL REQUEST\nDate: ${today}\n\nThis request asks ${values.clientName} for feedback and permission to use a testimonial related to recently completed work.\n\n${section(
    "Definitions",
    `"Feedback" means private comments for service improvement.\n"Testimonial" means a public statement the client authorizes ${values.businessName} to share on ${values.platform}.`
  )}\n\n${section(
    "1. Scope of Work",
    `Project Context:\n${values.projectDescription}\n\nResults Achieved:\n${values.resultsAchieved}`
  )}\n\n${section(
    "2. Payment Terms",
    `No payment is requested through this document. This is a communication and approval request only.`
  )}\n\n${section(
    "3. Responsibilities",
    `${values.businessName} will:\n- Use any testimonial only as authorized by the client.\n- Preserve context and avoid misleading edits.\n\n${values.clientName} may:\n- Share brief written feedback on outcomes and experience.\n- Approve, decline, or revise any public testimonial language.`
  )}\n\n${section(
    "4. Duration & Termination",
    `This request remains open until the client responds or declines. Either party may withdraw from this request at any time before publication.`
  )}\n\n${section(
    "5. Confidentiality",
    `Non-public information shared while preparing feedback remains confidential unless the client explicitly approves public disclosure.`
  )}\n\n${section(
    "6. Liability",
    `Published testimonials are used for informational marketing purposes only and do not create guarantees of future performance.`
  )}\n\n${section(
    "7. Governing Law",
    `This request is governed by the laws of ${values.country}.`
  )}\n\n${section(
    "8. Signatures",
    `Requested By (${values.businessName}): ____________________________\nDate: ____________________________\n\nAcknowledged By (${values.clientName}): ____________________________\nDate: ____________________________\n\nPreferred platform: ${values.platform}\nTone guidance: ${toneLine}`
  )}\n\nSuggested client prompt:\n"What challenge did you face before we started, what changed after the project, and what result mattered most to you?"\n\nThis document is a template and not legal advice.`;
}
