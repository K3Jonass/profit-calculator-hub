import type { TemplateSeoPageConfig } from "@/components/seo/TemplateSeoPage";

export const freelanceContractTemplatePage: TemplateSeoPageConfig = {
  path: "/freelance-contract-template",
  meta: {
    title: "Freelance Contract Template | Profithub",
    description:
      "Use a freelance contract template to define scope, payment terms, deadlines, and client responsibilities. Learn what to include and generate a contract with Profithub.",
  },
  h1: "Freelance Contract Template",
  intro: [
    "A freelance contract template gives you a repeatable starting point for client projects so you do not rewrite the same agreement from scratch every time you start new work.",
    "Profithub helps freelancers, consultants, and agencies turn a practical template into a client-ready contract with clear scope, payment terms, and delivery expectations.",
  ],
  explanation: {
    title: "What is a freelance contract template?",
    paragraphs: [
      "A freelance contract template is a pre-structured document outline that defines the working relationship between an independent provider and a client. It typically covers who is involved, what work will be delivered, how much it costs, when it is due, and what happens if plans change.",
      "Templates are useful because most freelance projects share the same core questions even when the deliverables differ. A designer, developer, marketer, and consultant all need scope clarity, payment rules, and revision boundaries. A template captures those patterns so you can focus on project-specific details.",
      "Profithub is not a substitute for legal advice, but it helps you produce a practical draft quickly. You enter the project information you already have, and the generator formats it into a structured contract you can review with your client before work begins.",
    ],
  },
  whenToUse: {
    title: "When to use a freelance contract template",
    paragraphs: [
      "Use a freelance contract template whenever you are starting paid client work, especially for fixed-price projects, retainers, or multi-phase engagements. Written terms protect your time if scope expands, feedback slows down, or payment is delayed.",
      "Templates are especially helpful when you send multiple proposals per month. Instead of negotiating from memory, you and the client can refer to the same document for deliverables, approval steps, and billing milestones.",
      "If a client asks for a lightweight agreement before a larger statement of work, a freelance contract template is often the fastest way to establish professional boundaries without slowing down the sale.",
    ],
  },
  includeTitle: "What to include in a freelance contract template",
  includeIntro: "Strong freelance contracts are specific about expectations on both sides. Include these sections before you send any agreement for signature.",
  includeItems: [
    { title: "Parties and contact details", body: "List the freelancer or agency name and the client company or contact with email addresses used for approvals and billing." },
    { title: "Scope of work", body: "Describe the services included in the engagement and note what is explicitly out of scope to reduce unpaid extra requests." },
    { title: "Deliverables and timeline", body: "Name each output, milestone date, and dependency the client must provide such as assets, access, or feedback." },
    { title: "Payment terms", body: "State the fee, deposit rules, invoice schedule, accepted payment methods, and late-payment consequences." },
    { title: "Revisions and change requests", body: "Define how many revision rounds are included and how additional work is priced after the original scope is approved." },
    { title: "Ownership and confidentiality", body: "Clarify when intellectual property transfers, whether portfolio use is allowed, and how sensitive client information is handled." },
  ],
  mistakes: {
    title: "Common mistakes to avoid",
    paragraphs: [
      "One frequent mistake is copying an old contract without updating scope, dates, or pricing. Clients notice when deliverables no longer match the project, and outdated terms can create payment disputes later.",
      "Another mistake is leaving revision limits vague. Without clear language, a small project can turn into unlimited feedback loops that consume your margin.",
      "Finally, do not skip cancellation and termination terms. If either party needs to stop the project early, the contract should explain notice requirements, billable work completed, and whether deposits are refundable.",
    ],
  },
  faqTitle: "Freelance contract template FAQ",
  faqItems: [
    { question: "Is a freelance contract template legally binding?", answer: "A signed contract can be legally binding when it meets the requirements of your jurisdiction, but Profithub templates are practical drafts and should be reviewed for your specific situation." },
    { question: "Can I reuse the same template for every client?", answer: "You can reuse the structure, but you should customize scope, pricing, deadlines, and client details for each project." },
    { question: "What is the difference between a template and a generator?", answer: "A template is the outline. Profithub's generator helps you fill that outline with project-specific fields and export a formatted document faster." },
    { question: "Should I send the contract before or after the proposal?", answer: "Most freelancers send a proposal first, then move to a contract after the client approves scope and pricing." },
  ],
  ctaTitle: "Generate your freelance contract",
  ctaDescription: "Open the Profithub freelance contract generator, add your project details, and create a professional contract document in minutes.",
  ctaLabel: "Use the contract generator",
  ctaHref: "/contracts/freelancer",
};

export const serviceAgreementTemplatePage: TemplateSeoPageConfig = {
  path: "/service-agreement-template",
  meta: {
    title: "Service Agreement Template | Profithub",
    description:
      "Learn what a service agreement template should include, when to use one, and how to create a professional service agreement with Profithub.",
  },
  h1: "Service Agreement Template",
  intro: [
    "A service agreement template defines how a provider will deliver services, how the client will pay, and what each party is responsible for during the engagement.",
    "Profithub helps freelancers, consultants, and agencies create structured service agreements without formatting every document manually.",
  ],
  explanation: {
    title: "What is a service agreement template?",
    paragraphs: [
      "A service agreement template is a document framework used when one party agrees to perform services for another over a defined period or project. Unlike a simple quote, it explains ongoing responsibilities, service levels, and how the relationship operates after signing.",
      "Service agreements are common in consulting, marketing retainers, technical support, implementation work, and agency engagements where delivery happens in stages rather than as a single product handoff.",
      "A good template turns recurring business patterns into consistent language. That helps clients understand what they are buying and gives your team a reliable baseline for scope, communication, and billing.",
    ],
  },
  whenToUse: {
    title: "When to use a service agreement template",
    paragraphs: [
      "Use a service agreement when work is ongoing, involves multiple deliverables, or requires both parties to maintain responsibilities over time. It is especially useful for retainers, managed services, and implementation projects.",
      "If your client needs procurement or finance approval, a service agreement gives them a formal document that matches how larger vendors contract services.",
      "You should also use one when subcontractors, account managers, or client stakeholders need a shared reference for what is included in the engagement.",
    ],
  },
  includeTitle: "What to include in a service agreement template",
  includeIntro: "These sections help service agreements stay clear for clients, finance teams, and delivery teams.",
  includeItems: [
    { title: "Services description", body: "Explain the services provided, service hours or cadence, and any service-level expectations the client can rely on." },
    { title: "Term and renewal", body: "State the start date, end date, renewal rules, and how either party can exit the agreement." },
    { title: "Fees and billing", body: "Include pricing model, billing frequency, expense rules, and how invoices should be paid." },
    { title: "Client responsibilities", body: "Document what the client must provide such as access, approvals, content, or timely feedback." },
    { title: "Confidentiality and data handling", body: "Define how sensitive information is protected, especially when tools, credentials, or customer data are involved." },
    { title: "Limitation of liability", body: "Set practical boundaries around responsibility. Have qualified counsel review this section for your jurisdiction and risk profile." },
  ],
  mistakes: {
    title: "Common mistakes to avoid",
    paragraphs: [
      "Avoid describing services too broadly. Language like 'marketing support as needed' invites scope creep because the client and provider may interpret it differently.",
      "Do not forget client dependencies. Many service delays happen because the agreement never states what happens when the client misses feedback deadlines or fails to provide access.",
      "Another mistake is mixing proposal language into the final agreement without updating terms. The service agreement should reflect the exact approved scope, not marketing copy from the sales stage.",
    ],
  },
  faqTitle: "Service agreement template FAQ",
  faqItems: [
    { question: "Is a service agreement the same as a contract?", answer: "In many cases, a service agreement is a type of contract focused on ongoing or staged services rather than a one-time product sale." },
    { question: "Do small businesses need service agreements?", answer: "Yes. Even small engagements benefit from written terms that clarify scope, payment, and responsibilities." },
    { question: "Can Profithub generate a service agreement?", answer: "Profithub helps you generate practical service-style agreements and related client documents using structured templates and project inputs." },
    { question: "Should retainers use a service agreement?", answer: "Retainers usually should, because they define recurring services, billing cadence, and how the engagement renews or ends." },
  ],
  ctaTitle: "Create your service agreement",
  ctaDescription: "Use Profithub to generate a structured service agreement with scope, billing terms, and client details ready for review.",
  ctaLabel: "Open the contract generator",
  ctaHref: "/contracts/freelancer",
};

export const freeInvoiceTemplatePage: TemplateSeoPageConfig = {
  path: "/free-invoice-template",
  meta: {
    title: "Free Invoice Template | Profithub",
    description:
      "Download guidance for a free invoice template and learn what to include. Create professional invoices online with Profithub and export PDFs.",
  },
  h1: "Free Invoice Template",
  intro: [
    "A free invoice template helps you bill clients with a consistent layout for line items, totals, payment terms, and due dates.",
    "Profithub lets you create professional invoices online without spreadsheet formatting and export a clean invoice PDF when work is ready to bill.",
  ],
  explanation: {
    title: "What is a free invoice template?",
    paragraphs: [
      "An invoice template is a reusable billing format that shows what you delivered, how much the client owes, and how they should pay. Freelancers, agencies, and service businesses use templates to save time and keep records organized.",
      "A free invoice template does not need to look complicated. Clients and bookkeepers mainly want clarity: who billed, who pays, what the charge is for, when payment is due, and how totals were calculated.",
      "Profithub helps you move beyond a static blank file by guiding you through the fields that matter and generating a polished invoice document you can send immediately.",
    ],
  },
  whenToUse: {
    title: "When to use an invoice template",
    paragraphs: [
      "Use an invoice template after deliverables are approved, milestones are reached, or your billing cycle begins for retainer work. Sending invoices quickly helps maintain healthy cash flow.",
      "Templates are especially useful when you bill multiple clients each month and need every document to follow the same numbering, branding, and payment instruction format.",
      "If a client finance team requires formal billing records, a consistent invoice template makes approval and reconciliation easier.",
    ],
  },
  includeTitle: "What to include in an invoice template",
  includeIntro: "Include these details on every invoice so clients can approve and pay without extra questions.",
  includeItems: [
    { title: "Invoice number", body: "Use a unique number for each invoice so you can track payments, reminders, and accounting records." },
    { title: "Issue and due dates", body: "Show when the invoice was sent and when payment is expected based on your agreed terms." },
    { title: "Business and client details", body: "Include legal or business names, billing addresses, and contact emails for both parties." },
    { title: "Line items", body: "List each service, milestone, hour block, or product with quantity, rate, and description." },
    { title: "Taxes and totals", body: "Display subtotal, applicable tax, discounts, and the final amount due clearly." },
    { title: "Payment instructions", body: "State accepted methods, currency, bank or payment links, and any late-payment policy." },
  ],
  mistakes: {
    title: "Common mistakes to avoid",
    paragraphs: [
      "Do not reuse invoice numbers. Duplicate numbering creates accounting confusion and makes it harder to prove which payment belongs to which project.",
      "Avoid vague line items such as 'consulting work.' Specific descriptions reduce disputes and speed up client approval.",
      "Another mistake is sending an invoice before terms were agreed. Make sure payment schedule, scope, and billing triggers were documented in a proposal or contract first.",
    ],
  },
  faqTitle: "Free invoice template FAQ",
  faqItems: [
    { question: "Can I create a free invoice with Profithub?", answer: "Yes. Profithub helps you generate professional invoices online and export them as PDFs without starting from a blank spreadsheet." },
    { question: "Do I need special software for invoice templates?", answer: "No. An online invoice generator like Profithub runs in the browser and guides you through the required fields." },
    { question: "What is the best invoice format for freelancers?", answer: "A simple format with clear line items, totals, due dates, and payment instructions works best for most freelance and agency clients." },
    { question: "Should invoices match contract terms?", answer: "Yes. Invoice amounts, billing milestones, and due dates should align with the contract or proposal the client already approved." },
  ],
  ctaTitle: "Create your invoice now",
  ctaDescription: "Open the Profithub invoice generator, add your client and line items, and export a professional invoice PDF.",
  ctaLabel: "Use the invoice generator",
  ctaHref: "/contracts/invoice",
};

export const invoiceNumberExamplePage: TemplateSeoPageConfig = {
  path: "/invoice-number-example",
  meta: {
    title: "Invoice Number Example | Profithub",
    description:
      "See invoice number examples and best practices for freelancers and agencies. Learn how to format invoice numbers and create invoices with Profithub.",
  },
  h1: "Invoice Number Example",
  intro: [
    "An invoice number is a unique identifier that helps you, your client, and your bookkeeper track billing records without confusion.",
    "Profithub helps you create professional invoices online while keeping numbering, client details, and payment terms organized.",
  ],
  explanation: {
    title: "What is an invoice number?",
    paragraphs: [
      "An invoice number is the reference code assigned to a single invoice. It allows both parties to discuss billing accurately, match payments to documents, and maintain clean financial records over time.",
      "Invoice numbers are especially important when you send multiple invoices to the same client, bill in milestones, or operate across regions and currencies. A consistent system prevents duplicate records and missed follow-ups.",
      "You can use numbers only or combine numbers with prefixes that identify the client, project, or year. The best system is one you can maintain easily as your business grows.",
    ],
  },
  whenToUse: {
    title: "When invoice numbering matters most",
    paragraphs: [
      "Invoice numbering matters whenever you send more than one bill or expect a client finance team to process payment internally. The number becomes the reference point for approval and reconciliation.",
      "It is also important at tax time, when you need to show a chronological record of issued invoices, payments received, and outstanding balances.",
      "If you use accounting software or work with a bookkeeper, consistent invoice numbers make imports and audits much smoother.",
    ],
  },
  includeTitle: "Invoice number examples and formats",
  includeIntro: "Choose a numbering format that is simple, unique, and easy to scale. These examples work well for freelancers and agencies.",
  includeItems: [
    { title: "Sequential numbers", body: "Example: 1001, 1002, 1003. This is the easiest format for solo freelancers starting with basic record keeping." },
    { title: "Year-based numbers", body: "Example: 2026-001, 2026-002. Adding the year helps separate records by billing period." },
    { title: "Client prefix format", body: "Example: ACME-001, ACME-002. Useful when you want invoice numbers to identify a specific client quickly." },
    { title: "Project prefix format", body: "Example: WEB-104, WEB-105. Helpful for agencies managing multiple active projects at once." },
    { title: "Date-based variants", body: "Example: 20260523-01. Can work for high-volume billing, but make sure the sequence still stays unique." },
    { title: "Leading zeros", body: "Example: INV-00045. Padding numbers can keep files sorted correctly in folders and accounting exports." },
  ],
  mistakes: {
    title: "Common mistakes to avoid",
    paragraphs: [
      "Never reuse an invoice number for a different bill. If a client searches for INV-1024, there should be only one document with that identifier.",
      "Avoid switching formats too often. Changing your numbering system every few months makes historical records harder to search and reconcile.",
      "Do not rely on client names alone without a numeric sequence. Names can repeat, abbreviations can clash, and finance teams prefer numeric references for payment tracking.",
    ],
  },
  faqTitle: "Invoice number FAQ",
  faqItems: [
    { question: "What is a good invoice number example for freelancers?", answer: "A simple sequential format such as 1001 or a year-based format such as 2026-001 is enough for most freelancers." },
    { question: "Are invoice numbers required?", answer: "Requirements vary by country and business setup, but unique invoice numbers are strongly recommended for clean bookkeeping and client payment tracking." },
    { question: "Can invoice numbers include letters?", answer: "Yes. Prefixes such as INV, client codes, or project codes are common as long as each full invoice number remains unique." },
    { question: "Does Profithub help with invoice creation?", answer: "Yes. Profithub's invoice generator helps you create professional invoices with organized client details, line items, and export-ready PDFs." },
  ],
  ctaTitle: "Create your next invoice",
  ctaDescription: "Use Profithub to generate a professional invoice with organized line items, totals, and payment terms.",
  ctaLabel: "Use the invoice generator",
  ctaHref: "/contracts/invoice",
};

export const consultingAgreementTemplatePage: TemplateSeoPageConfig = {
  path: "/consulting-agreement-template",
  meta: {
    title: "Consulting Agreement Template | Profithub",
    description:
      "Learn what a consulting agreement template should include, when consultants need one, and how to create consulting contracts with Profithub.",
  },
  h1: "Consulting Agreement Template",
  intro: [
    "A consulting agreement template defines how a consultant will advise, deliver, or implement work for a client, including scope, fees, confidentiality, and project boundaries.",
    "Profithub helps consultants and agencies create professional agreements without rebuilding the same document for every engagement.",
  ],
  explanation: {
    title: "What is a consulting agreement template?",
    paragraphs: [
      "A consulting agreement template is a reusable document structure for engagements where an expert provides advice, strategy, audits, implementation support, or specialized professional services.",
      "Consulting work often includes discovery, recommendations, workshops, and optional implementation phases. A template helps you spell out those stages so clients understand what they are buying at each step.",
      "Because consulting can be intangible, strong agreements focus on deliverables, decision authority, communication channels, and what happens when recommendations depend on client action.",
    ],
  },
  whenToUse: {
    title: "When to use a consulting agreement template",
    paragraphs: [
      "Use a consulting agreement before starting advisory work, audits, strategy projects, or implementation support. It is especially important when fees are high, timelines are long, or multiple stakeholders are involved.",
      "If your client expects procurement review, a consulting agreement gives them a formal record of scope, fees, confidentiality, and termination terms.",
      "Templates are also useful when you offer both advisory and execution services. The agreement can separate strategy fees from implementation work so scope stays clear.",
    ],
  },
  includeTitle: "What to include in a consulting agreement template",
  includeIntro: "Consulting agreements should make intangible work tangible. Include these sections before the engagement begins.",
  includeItems: [
    { title: "Consulting scope", body: "Define whether you are providing advice, audits, workshops, documentation, or hands-on implementation." },
    { title: "Deliverables", body: "List reports, sessions, roadmaps, playbooks, or other outputs the client will receive." },
    { title: "Fees and expenses", body: "Explain fixed fees, day rates, retainer models, reimbursable expenses, and invoice timing." },
    { title: "Client cooperation", body: "State what access, data, interviews, or internal resources the consultant needs to perform the work." },
    { title: "Confidentiality", body: "Protect sensitive business information shared during discovery, interviews, and document review." },
    { title: "Independent contractor status", body: "Clarify that the consultant is not an employee and is responsible for their own taxes and benefits where applicable." },
  ],
  mistakes: {
    title: "Common mistakes to avoid",
    paragraphs: [
      "Do not promise outcomes the client controls. Consulting agreements should define deliverables and responsibilities, not guarantee business results you cannot directly execute.",
      "Avoid blending advisory and implementation scope without separate pricing. Clients may assume implementation is included when the agreement only covers strategy.",
      "Another mistake is skipping ownership language for reports, templates, or frameworks you create. Clarify whether the client receives full ownership or a license to use the work.",
    ],
  },
  faqTitle: "Consulting agreement template FAQ",
  faqItems: [
    { question: "Is a consulting agreement different from a freelance contract?", answer: "They overlap, but consulting agreements often emphasize advisory deliverables, client cooperation, and phased work rather than a single production deliverable." },
    { question: "Do consultants need written agreements for short projects?", answer: "Yes. Even short consulting engagements benefit from written scope, fees, and confidentiality terms." },
    { question: "Can Profithub help consultants create agreements?", answer: "Yes. Profithub helps consultants generate structured client agreements and related documents such as proposals and invoices." },
    { question: "Should consulting proposals come before the agreement?", answer: "Usually yes. The proposal explains the recommendation and pricing, and the consulting agreement formalizes the terms after approval." },
  ],
  ctaTitle: "Create your consulting agreement",
  ctaDescription: "Generate a consulting agreement with Profithub by adding scope, fees, deliverables, and client details in a guided workflow.",
  ctaLabel: "Use the contract generator",
  ctaHref: "/contracts/freelancer",
};

export const templateSeoPages = [
  freelanceContractTemplatePage,
  serviceAgreementTemplatePage,
  freeInvoiceTemplatePage,
  invoiceNumberExamplePage,
  consultingAgreementTemplatePage,
] as const;
