import type { SeoAeoContent } from "@/lib/seo-pages/seo-aeo-types";

export const SEO_AEO_CONTENT: Record<string, SeoAeoContent> = {
  "/freelance-contract-generator": {
    quickAnswer:
      "A freelance contract generator helps freelancers create professional agreements online by adding client details, project scope, deliverables, payment terms, deadlines, and legal clauses into a structured document.",
    definition: {
      title: "What is a freelance contract generator?",
      body: "A freelance contract generator is an online tool that turns project details into a formatted agreement. It guides you through scope, payment, timelines, and client terms so you do not start from a blank document.",
    },
    howToTitle: "How to create a freelance contract online",
    howToIntro: "Follow these steps to build a client-ready freelance contract with Profithub.",
    howToSteps: [
      "Gather client details, project scope, budget, and delivery dates.",
      "Open the Profithub freelance contract generator and enter parties, deliverables, and payment terms.",
      "Add revision limits, cancellation rules, and intellectual property notes.",
      "Review the generated contract and adjust any client-specific language.",
      "Export the document and send it for client approval before starting work.",
    ],
    comparison: {
      title: "Freelance contract generator vs manual templates",
      intro: "Compare a structured online generator with copying old Word files for each new client.",
      rows: [
        { aspect: "Setup time", alternative: "Reformat an old file and hunt for outdated terms", profithub: "Guided fields produce a structured draft in minutes" },
        { aspect: "Scope clarity", alternative: "Easy to leave vague language from past projects", profithub: "Prompts you to define deliverables and revision limits" },
        { aspect: "Consistency", alternative: "Each contract may use different section order", profithub: "Repeatable format across clients and projects" },
      ],
    },
  },
  "/invoice-generator": {
    quickAnswer:
      "An invoice generator helps freelancers and businesses create professional invoices online by adding client details, services, prices, taxes, payment terms, and totals, then exporting the invoice as a PDF ready to send.",
    definition: {
      title: "What is an invoice generator?",
      body: "An invoice generator is a web-based billing tool that formats line items, calculates totals, and produces a professional invoice document without spreadsheet layout work.",
    },
    howToTitle: "How to create an invoice online",
    howToIntro: "Use these steps to turn completed work into a payable invoice with Profithub.",
    howToSteps: [
      "Enter your business details and the client billing contact.",
      "Add each service, milestone, or hour block as a line item.",
      "Apply taxes, discounts, and verify the total amount due.",
      "Set the invoice date, due date, and payment instructions.",
      "Export the invoice as a PDF and send it to your client.",
    ],
    comparison: {
      title: "Invoice generator vs spreadsheet billing",
      intro: "See why many freelancers move from manual spreadsheets to an online invoice generator.",
      rows: [
        { aspect: "Formatting", alternative: "Manual tables break when line items change", profithub: "Clean layout generated automatically" },
        { aspect: "Totals", alternative: "Formula errors can underbill or overbill clients", profithub: "Totals calculated as you add line items" },
        { aspect: "Speed", alternative: "Rebuild the same layout every billing cycle", profithub: "Reuse structure with updated project details" },
      ],
    },
  },
  "/proposal-generator": {
    quickAnswer:
      "A proposal generator helps freelancers and agencies create client-ready project proposals with scope, pricing, timelines, deliverables, and terms so prospects can approve work faster.",
    definition: {
      title: "What is a proposal generator?",
      body: "A proposal generator organizes sales information—problem summary, recommended approach, deliverables, timeline, and pricing—into a document clients can review and approve.",
    },
    howToTitle: "How to create a client proposal online",
    howToIntro: "Build a proposal that answers scope and pricing questions before the client asks.",
    howToSteps: [
      "Summarize the client problem and desired outcome.",
      "Describe your recommended approach, deliverables, and timeline.",
      "Present pricing options or a single recommended investment.",
      "List assumptions, revision limits, and next steps after approval.",
      "Send the proposal, then follow up with a contract and invoice once accepted.",
    ],
    comparison: {
      title: "Proposal generator vs slide decks",
      intro: "Compare a focused proposal document with rebuilding pitch decks for every lead.",
      rows: [
        { aspect: "Clarity", alternative: "Decks may emphasize visuals over terms", profithub: "Structured sections for scope, price, and timeline" },
        { aspect: "Turnaround", alternative: "Slow to customize slides per prospect", profithub: "Faster edits to pricing and deliverables" },
        { aspect: "Handoff", alternative: "Approved decks still need a separate contract", profithub: "Pairs naturally with Profithub contracts and invoices" },
      ],
    },
  },
  "/freelance-contract-template": {
    quickAnswer:
      "A freelance contract template is a reusable document outline that defines scope, payment terms, revisions, deadlines, and client responsibilities so freelancers can start each project with clear written terms.",
    definition: {
      title: "Freelance contract template definition",
      body: "It is a pre-structured agreement format you customize per client while keeping consistent sections for scope, billing, and delivery.",
    },
    howToTitle: "How to use a freelance contract template",
    howToIntro: "Adapt a template to each project without rewriting the entire agreement.",
    howToSteps: [
      "Start from a proven template structure.",
      "Insert client details and project-specific scope.",
      "Set payment milestones, revision limits, and deadlines.",
      "Review ownership and cancellation clauses.",
      "Generate the final contract and send it for signature.",
    ],
    comparison: {
      title: "Template vs generator",
      intro: "Templates give structure; generators help you fill and export faster.",
      rows: [
        { aspect: "Starting point", alternative: "Static file with blank fields", profithub: "Guided workflow with labeled inputs" },
        { aspect: "Errors", alternative: "Old client names or fees may remain", profithub: "Fresh fields reduce copy-paste mistakes" },
        { aspect: "Output", alternative: "Manual formatting before sending", profithub: "Export-ready document from one workflow" },
      ],
    },
  },
  "/service-agreement-template": {
    quickAnswer:
      "A service agreement template defines ongoing services, fees, term length, client responsibilities, and delivery expectations for consultants, agencies, and service businesses.",
    definition: {
      title: "What is a service agreement template?",
      body: "It is a contract framework for recurring or phased services rather than one-time product delivery, covering scope, billing cadence, and termination rules.",
    },
    howToTitle: "How to customize a service agreement",
    howToIntro: "Turn a template into a client-ready service agreement in a few steps.",
    howToSteps: [
      "Describe the services included and excluded.",
      "Set contract term, renewal, and notice periods.",
      "Document fees, billing frequency, and payment methods.",
      "Add confidentiality and client cooperation requirements.",
      "Review with the client and finalize signatures.",
    ],
    comparison: {
      title: "Service agreement vs informal email terms",
      intro: "Written service agreements reduce disputes on retainers and multi-month engagements.",
      rows: [
        { aspect: "Scope drift", alternative: "Email threads become hard to reference", profithub: "Single document lists services and boundaries" },
        { aspect: "Renewals", alternative: "Unclear when terms change or end", profithub: "Term and renewal sections set expectations" },
        { aspect: "Finance approval", alternative: "Procurement may reject informal terms", profithub: "Professional format speeds client approval" },
      ],
    },
  },
  "/free-invoice-template": {
    quickAnswer:
      "A free invoice template is a reusable billing layout that shows client details, line items, taxes, totals, due dates, and payment instructions so businesses can invoice consistently.",
    definition: {
      title: "What is an invoice template?",
      body: "An invoice template is a standard billing format you reuse each cycle, updating project details, amounts, and dates while keeping layout consistent.",
    },
    howToTitle: "How to use an invoice template",
    howToIntro: "Move from template to sent invoice in minutes.",
    howToSteps: [
      "Copy the template or open it in your invoice generator.",
      "Update invoice number, dates, and client billing info.",
      "Enter line items for services or milestones delivered.",
      "Verify tax, discounts, and total due.",
      "Export PDF and send with payment instructions.",
    ],
    comparison: {
      title: "Invoice template vs invoice generator",
      intro: "Templates show structure; generators speed up creation and reduce math errors.",
      rows: [
        { aspect: "Line items", alternative: "Manual entry and recalculation", profithub: "Automatic totals as items are added" },
        { aspect: "Branding", alternative: "Inconsistent fonts or spacing over time", profithub: "Consistent professional output" },
        { aspect: "Records", alternative: "Scattered files across folders", profithub: "Repeatable workflow for each client" },
      ],
    },
  },
  "/invoice-number-example": {
    quickAnswer:
      "An invoice number is a unique ID on each bill—such as 1001, 2026-004, or ACME-012—so clients, bookkeepers, and freelancers can track payments without confusing duplicate records.",
    definition: {
      title: "What is an invoice number?",
      body: "It is the reference code assigned to one invoice, used for payment matching, accounting exports, and follow-up on overdue bills.",
    },
    howToTitle: "How to choose an invoice numbering system",
    howToIntro: "Pick a format you can maintain as invoice volume grows.",
    howToSteps: [
      "Decide on sequential, yearly, or client-prefixed numbers.",
      "Apply the next unused number to each new invoice.",
      "Keep numbers unique—never reuse an ID for a different bill.",
      "Match the number on PDF exports and payment reminders.",
      "Archive paid invoices by number for tax and audit records.",
    ],
    comparison: {
      title: "Invoice numbering approaches",
      intro: "Different formats suit solo freelancers, agencies, and finance teams.",
      rows: [
        { aspect: "Simple sequence", alternative: "1001, 1002—easy for solo operators", profithub: "Works well with generator exports and folders" },
        { aspect: "Year-based", alternative: "2026-001 helps separate tax years", profithub: "Useful when billing volume is high" },
        { aspect: "Client prefix", alternative: "ACME-004 helps multi-client agencies", profithub: "Pairs with client-specific invoice records" },
      ],
    },
  },
  "/invoice-generator-for-freelancers": {
    quickAnswer:
      "An invoice generator for freelancers creates professional bills with client details, project line items, rates, taxes, payment terms, and PDF export—built for solo operators billing multiple clients each month.",
    definition: {
      title: "What is a freelancer invoice generator?",
      body: "It is billing software tailored to independent workers who invoice per project, milestone, or retainer without a dedicated accounts team.",
    },
    howToTitle: "How freelancers create invoices with Profithub",
    howToIntro: "Turn approved work into a payable invoice in five steps.",
    howToSteps: [
      "Add your business name and the client billing contact.",
      "List completed deliverables or hours as separate line items.",
      "Apply taxes or discounts and confirm the total due.",
      "Set invoice date, due date, and payment instructions.",
      "Export PDF and send after the client approves the milestone.",
    ],
    comparison: {
      title: "Freelancer invoice generator vs manual billing",
      intro: "Solo freelancers often outgrow ad hoc spreadsheets as client count increases.",
      rows: [
        { aspect: "Multi-client tracking", alternative: "Separate files per client get messy", profithub: "Consistent format across every bill" },
        { aspect: "Payment speed", alternative: "Unclear totals delay client approval", profithub: "Clear line items speed finance sign-off" },
        { aspect: "Time cost", alternative: "Rebuilding layouts steals billable hours", profithub: "Faster invoicing after each delivery" },
      ],
    },
  },
  "/invoice-generator-for-consultants": {
    quickAnswer:
      "An invoice generator for consultants formats advisory work—workshops, audits, strategy sessions, and retainers—into professional invoices with scope references, fees, taxes, and payment terms.",
    definition: {
      title: "What is a consultant invoice generator?",
      body: "It produces billing documents that tie intangible consulting deliverables to clear line items finance teams can approve.",
    },
    howToTitle: "How consultants invoice advisory work",
    howToIntro: "Bill discovery, analysis, and implementation phases without vague descriptions.",
    howToSteps: [
      "Reference the engagement or statement of work on the invoice.",
      "Itemize phases, day rates, or fixed advisory packages.",
      "Include expenses if the agreement allows reimbursement.",
      "Set net terms that match your consulting agreement.",
      "Send PDF invoices aligned with milestone approvals.",
    ],
    comparison: {
      title: "Consulting invoices vs generic templates",
      intro: "Consulting work needs descriptions finance can map to approved budgets.",
      rows: [
        { aspect: "Line item clarity", alternative: "Generic labels like consulting hours", profithub: "Phase and deliverable-based descriptions" },
        { aspect: "SOW alignment", alternative: "Hard to match procurement records", profithub: "References engagement scope on each bill" },
        { aspect: "Retainer billing", alternative: "Manual monthly recalculation", profithub: "Repeatable structure for recurring fees" },
      ],
    },
  },
  "/invoice-generator-for-designers": {
    quickAnswer:
      "An invoice generator for designers bills creative work—concepts, revisions, brand assets, and production files—with clear line items, usage notes, and payment terms clients and studios expect.",
    definition: {
      title: "What is a designer invoice generator?",
      body: "It helps creative freelancers invoice by deliverable, revision round, or package so clients understand what they paid for.",
    },
    howToTitle: "How designers invoice creative projects",
    howToIntro: "Bill design work in a way that matches how clients review and approve assets.",
    howToSteps: [
      "Name the project and design phase being billed.",
      "List deliverables—concepts, final files, or additional formats.",
      "Note included revision rounds or bill extra rounds separately.",
      "Add rush fees or licensing if applicable.",
      "Export and send when the client approves the milestone.",
    ],
    comparison: {
      title: "Designer billing: flat fee vs line items",
      intro: "Clear invoices reduce disputes about extra rounds and file handoff.",
      rows: [
        { aspect: "Revision tracking", alternative: "Vague totals hide extra rounds", profithub: "Line items show what each fee covers" },
        { aspect: "Asset handoff", alternative: "Clients unsure what was delivered", profithub: "Deliverable names on the invoice" },
        { aspect: "Studio workflow", alternative: "Inconsistent PDFs across projects", profithub: "Professional format for every client" },
      ],
    },
  },
  "/invoice-generator-for-developers": {
    quickAnswer:
      "An invoice generator for developers bills sprints, milestones, hourly work, and maintenance retainers with technical scope references, rates, taxes, and payment terms suitable for client finance teams.",
    definition: {
      title: "What is a developer invoice generator?",
      body: "It formats software and engineering work into invoices that reference milestones, hours, or support periods instead of vague service labels.",
    },
    howToTitle: "How developers invoice technical work",
    howToIntro: "Match invoice line items to sprint goals, tickets, or support windows.",
    howToSteps: [
      "Reference the sprint, milestone, or support period.",
      "Bill fixed milestones or hourly blocks with transparent math.",
      "Separate maintenance retainers from new feature work.",
      "Apply agreed tax and currency settings.",
      "Send PDF invoices when acceptance criteria are met.",
    ],
    comparison: {
      title: "Developer invoicing: time logs vs milestones",
      intro: "Different billing models need different invoice structures.",
      rows: [
        { aspect: "Milestone billing", alternative: "Hard to tie payment to shipped features", profithub: "Line items name delivered functionality" },
        { aspect: "Hourly work", alternative: "Spreadsheet hours pasted into email", profithub: "Structured rate × quantity rows" },
        { aspect: "Retainers", alternative: "Monthly amounts without scope notes", profithub: "Clear support window on each bill" },
      ],
    },
  },
  "/invoice-generator-for-marketing-agencies": {
    quickAnswer:
      "An invoice generator for marketing agencies bills retainers, campaigns, media spend management, and project fees with client-ready line items, totals, and payment terms for multi-account teams.",
    definition: {
      title: "What is an agency invoice generator?",
      body: "It standardizes how agencies bill multiple clients with campaign references, retainer periods, and pass-through costs finance can reconcile.",
    },
    howToTitle: "How agencies invoice client accounts",
    howToIntro: "Keep billing consistent across retainers, campaigns, and one-off projects.",
    howToSteps: [
      "Use client and campaign references on every invoice.",
      "Separate retainer fees, project work, and reimbursable costs.",
      "Show taxes and totals in the client's expected currency.",
      "Match payment terms to the master service agreement.",
      "Export PDFs for client AP and your internal records.",
    ],
    comparison: {
      title: "Agency billing: one tool vs per-client spreadsheets",
      intro: "Agencies need repeatable invoices as account volume grows.",
      rows: [
        { aspect: "Multi-account consistency", alternative: "Each AM uses a different layout", profithub: "Shared format across accounts" },
        { aspect: "Retainer clarity", alternative: "Clients question recurring charges", profithub: "Period and scope noted on each bill" },
        { aspect: "Finance handoff", alternative: "AP teams reject unclear PDFs", profithub: "Structured totals and references" },
      ],
    },
  },
  "/contract-template-for-freelancers": {
    quickAnswer:
      "A contract template for freelancers defines project scope, payment terms, revisions, deadlines, and ownership so solo operators start each engagement with clear written terms before work begins.",
    definition: {
      title: "What is a freelancer contract template?",
      body: "It is a reusable agreement outline freelancers customize per client while keeping consistent protection for scope, billing, and deliverables.",
    },
    howToTitle: "How freelancers use contract templates",
    howToIntro: "Adapt one proven structure to each new client engagement.",
    howToSteps: [
      "Start from a freelancer-friendly contract template.",
      "Insert client details and project-specific scope.",
      "Set payment schedule, revision limits, and deadlines.",
      "Add IP transfer and cancellation terms.",
      "Send for signature before starting billable work.",
    ],
    comparison: {
      title: "Freelancer contract template vs handshake deals",
      intro: "Written terms protect solo operators when scope or payment disputes arise.",
      rows: [
        { aspect: "Scope creep", alternative: "Verbal OKs become unpaid extras", profithub: "Written deliverables set boundaries" },
        { aspect: "Payment", alternative: "Chasing payment without terms is harder", profithub: "Documented fees and due dates" },
        { aspect: "Professionalism", alternative: "Clients may delay without a contract", profithub: "Clear agreement speeds kickoff" },
      ],
    },
  },
  "/contract-template-for-consultants": {
    quickAnswer:
      "A contract template for consultants covers advisory scope, deliverables, fees, confidentiality, and client cooperation for strategy, audit, and implementation engagements.",
    definition: {
      title: "What is a consulting contract template?",
      body: "It governs intangible consulting outputs—reports, workshops, recommendations—and how the client supports discovery and decision-making.",
    },
    howToTitle: "How consultants finalize client agreements",
    howToIntro: "Align on advisory scope before interviews, analysis, or workshops start.",
    howToSteps: [
      "Define consulting phases and named deliverables.",
      "Set fees, expenses, and billing triggers.",
      "Document client access and decision authority required.",
      "Add confidentiality and IP ownership clauses.",
      "Sign before billable discovery begins.",
    ],
    comparison: {
      title: "Consulting contract vs proposal alone",
      intro: "Proposals sell the engagement; contracts govern how it runs.",
      rows: [
        { aspect: "Deliverables", alternative: "Proposal language may stay vague", profithub: "Contract names reports and sessions" },
        { aspect: "Client duties", alternative: "Missing access causes delays", profithub: "Cooperation requirements are explicit" },
        { aspect: "Change control", alternative: "Scope shifts are disputed later", profithub: "Written baseline supports change orders" },
      ],
    },
  },
  "/contract-template-for-designers": {
    quickAnswer:
      "A contract template for designers covers creative scope, revision rounds, file formats, timelines, payment, and usage rights so design projects stay clear from concept to final delivery.",
    definition: {
      title: "What is a designer contract template?",
      body: "It is an agreement framework for creative work that names deliverables, feedback cycles, and how final assets may be used.",
    },
    howToTitle: "How designers protect creative projects",
    howToIntro: "Set revision limits and ownership before the first concept is shared.",
    howToSteps: [
      "Define creative scope and excluded services.",
      "Set revision rounds and approval stages.",
      "List file formats and delivery dates.",
      "Document payment milestones tied to approvals.",
      "Clarify portfolio and licensing rights.",
    ],
    comparison: {
      title: "Design contract vs informal creative brief",
      intro: "Briefs describe vision; contracts define obligations and limits.",
      rows: [
        { aspect: "Revisions", alternative: "Unlimited feedback drains margin", profithub: "Round limits documented upfront" },
        { aspect: "File handoff", alternative: "Clients expect source files without terms", profithub: "Formats and ownership spelled out" },
        { aspect: "Kill fees", alternative: "Cancelled projects leave unpaid time", profithub: "Cancellation terms protect schedule" },
      ],
    },
  },
  "/contract-template-for-developers": {
    quickAnswer:
      "A contract template for developers defines build scope, milestones, acceptance criteria, payment, IP ownership, and support terms for software and engineering projects.",
    definition: {
      title: "What is a developer contract template?",
      body: "It is a technical services agreement that ties payment to shipped functionality, repos, environments, and maintenance boundaries.",
    },
    howToTitle: "How developers contract software work",
    howToIntro: "Document milestones and acceptance before coding begins.",
    howToSteps: [
      "Describe features, integrations, and out-of-scope items.",
      "Set milestone dates and acceptance criteria.",
      "Define payment tied to each release or sprint.",
      "Clarify code ownership and third-party licenses.",
      "Add warranty and support windows if offered.",
    ],
    comparison: {
      title: "Developer contract vs ticket-only scope",
      intro: "Ticket lists change; contracts anchor what is in the fixed fee.",
      rows: [
        { aspect: "Scope drift", alternative: "New tickets become unpaid work", profithub: "Written scope supports change requests" },
        { aspect: "Acceptance", alternative: "Clients delay sign-off indefinitely", profithub: "Criteria and review periods defined" },
        { aspect: "IP risk", alternative: "Ownership disputes after launch", profithub: "Transfer terms documented early" },
      ],
    },
  },
  "/proposal-template-for-agencies": {
    quickAnswer:
      "A proposal template for agencies presents client problems, recommended strategy, deliverables, timeline, team roles, and pricing so prospects can approve multi-service engagements faster.",
    definition: {
      title: "What is an agency proposal template?",
      body: "It is a sales document framework that packages positioning, scope, and commercial terms for marketing and creative agency pitches.",
    },
    howToTitle: "How agencies build winning proposals",
    howToIntro: "Structure pitches so decision-makers see strategy, scope, and price in one flow.",
    howToSteps: [
      "Open with the client challenge and success metrics.",
      "Present recommended channels, deliverables, and timeline.",
      "Show team roles and client responsibilities.",
      "Offer pricing tiers or a recommended package.",
      "Close with next steps after approval.",
    ],
    comparison: {
      title: "Agency proposal template vs custom deck every time",
      intro: "Templates speed turnaround while keeping strategic sections consistent.",
      rows: [
        { aspect: "Speed to send", alternative: "Rebuild slides for each RFP", profithub: "Reuse structure with new client details" },
        { aspect: "Scope clarity", alternative: "Pretty decks hide weak scope", profithub: "Deliverables and timeline upfront" },
        { aspect: "Close rate", alternative: "Prospects ask basic pricing questions", profithub: "Clear investment speeds decisions" },
      ],
    },
  },
  "/consulting-agreement-template": {
    quickAnswer:
      "A consulting agreement template defines advisory scope, deliverables, fees, confidentiality, and client cooperation for consulting engagements before discovery or implementation work begins.",
    definition: {
      title: "What is a consulting agreement template?",
      body: "It is a written framework for consulting work that names outputs—audits, workshops, roadmaps—and how the client and consultant share responsibilities.",
    },
    howToTitle: "How to finalize a consulting agreement",
    howToIntro: "Use a template to align on intangible deliverables and commercial terms.",
    howToSteps: [
      "Define consulting phases and deliverables.",
      "Set fees, expenses, and billing triggers.",
      "Document client access and decision authority needed.",
      "Add confidentiality and IP ownership language.",
      "Sign before interviews, workshops, or analysis begin.",
    ],
    comparison: {
      title: "Consulting agreement vs proposal only",
      intro: "Proposals sell the work; consulting agreements govern how it runs.",
      rows: [
        { aspect: "Purpose", alternative: "Proposal explains value and price", profithub: "Agreement locks operational and legal terms" },
        { aspect: "Deliverables", alternative: "Proposal may stay high level", profithub: "Agreement names reports, sessions, and deadlines" },
        { aspect: "Risk", alternative: "Verbal scope changes are harder to enforce", profithub: "Written terms support change requests" },
      ],
    },
  },
};

export function getSeoAeoContent(path: string): SeoAeoContent | undefined {
  return SEO_AEO_CONTENT[path];
}

export function mergeSeoAeoContent(path: string, partial?: Partial<SeoAeoContent>): SeoAeoContent | undefined {
  const base = SEO_AEO_CONTENT[path];
  if (!base && !partial?.quickAnswer) return undefined;
  return { ...base, ...partial } as SeoAeoContent;
}
