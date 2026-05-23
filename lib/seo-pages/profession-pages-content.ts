import type { TemplateSeoPageConfig } from "@/components/seo/TemplateSeoPage";

export type ProfessionSeoPageConfig = TemplateSeoPageConfig;

export const PROFESSION_SEO_PAGE_PATHS = [
  "/invoice-generator-for-freelancers",
  "/invoice-generator-for-consultants",
  "/invoice-generator-for-designers",
  "/invoice-generator-for-developers",
  "/invoice-generator-for-marketing-agencies",
  "/contract-template-for-freelancers",
  "/contract-template-for-consultants",
  "/contract-template-for-designers",
  "/contract-template-for-developers",
  "/proposal-template-for-agencies",
] as const;

export type ProfessionSeoPagePath = (typeof PROFESSION_SEO_PAGE_PATHS)[number];

const invoiceIncludeItems = (profession: string) => [
  {
    title: "Client and project reference",
    body: `Name the client, project, and billing period so ${profession} can tie each invoice to approved scope and delivery dates.`,
  },
  {
    title: "Service line items",
    body: `Break work into clear line items—hours, milestones, retainers, or packages—so finance teams understand what they are paying for.`,
  },
  {
    title: "Rates and quantities",
    body: "Show hourly rates, fixed fees, unit counts, or milestone amounts. Transparent math reduces payment delays and revision requests.",
  },
  {
    title: "Taxes and totals",
    body: "Display subtotal, applicable tax, discounts, and the final amount due in one easy-to-scan summary.",
  },
  {
    title: "Payment terms",
    body: "Include due date, accepted payment methods, currency, and late-payment rules that match your contract or proposal.",
  },
];

const contractIncludeItems = (profession: string) => [
  {
    title: "Scope of services",
    body: `Define what ${profession} will deliver and what is excluded so extra requests do not become unpaid work.`,
  },
  {
    title: "Deliverables and timeline",
    body: "List outputs, review stages, and milestone dates that both sides can use to track progress.",
  },
  {
    title: "Payment structure",
    body: "Document deposits, milestone billing, hourly caps, or retainer fees before work begins.",
  },
  {
    title: "Revisions and approvals",
    body: "Set revision limits and approval steps so feedback stays manageable for creative and technical projects.",
  },
  {
    title: "Ownership and confidentiality",
    body: "Clarify intellectual property transfer, portfolio rights, and how sensitive client information is handled.",
  },
];

export const professionSeoPages: Record<ProfessionSeoPagePath, ProfessionSeoPageConfig> = {
  "/invoice-generator-for-freelancers": {
    path: "/invoice-generator-for-freelancers",
    meta: {
      title: "Invoice Generator for Freelancers | Profithub",
      description:
        "Create professional freelancer invoices with line items, payment terms, and PDF export. Built for solo operators billing project and retainer clients.",
    },
    h1: "Invoice Generator for Freelancers",
    intro: [
      "Freelancers juggle multiple clients, billing models, and delivery schedules—often without a finance team to clean up messy paperwork. A dedicated invoice generator keeps billing consistent while you focus on client work.",
      "Profithub helps freelancers create polished invoices with client details, service line items, totals, and payment terms you can export and send the same day a milestone is approved.",
    ],
    explanation: {
      title: "Why freelancers need a dedicated invoice workflow",
      paragraphs: [
        "General invoicing tools often assume inventory, retail, or large accounting teams. Freelancers usually bill for time, creative deliverables, strategy sessions, or project milestones that need clear descriptions on every invoice.",
        "When you send vague invoices, clients delay payment while they ask finance to clarify line items. A freelancer-focused invoice generator prompts you for the fields solo operators actually use: project name, deliverable summary, rate type, and due date.",
        "Profithub fits the way independent professionals work—quick to fill out, easy to repeat for repeat clients, and professional enough for corporate accounts payable teams.",
      ],
    },
    whenToUse: {
      title: "Freelancer invoice use cases",
      paragraphs: [
        "Use Profithub when you finish a fixed-price website, brand package, audit, or campaign and need to bill the final milestone. Line items can reference the approved scope so payment feels expected, not surprising.",
        "Freelancers on retainers can invoice monthly blocks with hours used, strategy calls delivered, or content pieces published. Consultants billing discovery phases can separate research fees from implementation work on the same client account.",
        "If you subcontract specialists, clear invoices also help you document pass-through costs and maintain margin visibility across parallel client projects.",
      ],
    },
    includeTitle: "What to include on a freelancer invoice",
    includeIntro: "These fields help solo freelancers get paid faster and keep tax records organized.",
    includeItems: invoiceIncludeItems("freelancers"),
    mistakes: {
      title: "Common freelancer invoicing mistakes",
      paragraphs: [
        "Billing without referencing the approved scope is a common issue. Tie each line item to a deliverable or milestone the client already signed off on.",
        "Another mistake is waiting until month-end to invoice small milestones. Sending invoices promptly improves cash flow and reduces disputes about what was delivered weeks ago.",
        "Do not forget to match invoice due dates to your contract terms. If net-15 was agreed, the invoice should say so explicitly.",
      ],
    },
    faqTitle: "Freelancer invoice FAQ",
    faqItems: [
      { question: "Can freelancers create PDF invoices with Profithub?", answer: "Yes. Profithub lets freelancers generate invoices online and export a clean PDF for client payment." },
      { question: "Should freelancers invoice by hour or by project?", answer: "Both models work. Use line items that match how you priced the engagement—hourly blocks, fixed milestones, or hybrid structures." },
      { question: "Do I need accounting software as a freelancer?", answer: "Not necessarily. Many freelancers start with a simple invoice generator and export PDFs for bookkeeping and tax records." },
      { question: "When should I send my first invoice?", answer: "Send deposits before work starts when agreed, then invoice milestones or final delivery as soon as each phase is approved." },
    ],
    ctaTitle: "Invoice your next freelance project",
    ctaDescription: "Open the Profithub invoice generator, add your client and line items, and send a professional freelancer invoice in minutes.",
    ctaLabel: "Create freelancer invoice",
    ctaHref: "/contracts/invoice",
  },

  "/invoice-generator-for-consultants": {
    path: "/invoice-generator-for-consultants",
    meta: {
      title: "Invoice Generator for Consultants | Profithub",
      description:
        "Bill consulting engagements with clear line items for discovery, workshops, retainers, and implementation support. Create consultant invoices online with Profithub.",
    },
    h1: "Invoice Generator for Consultants",
    intro: [
      "Consultants often sell intangible outcomes—analysis, recommendations, workshops, and implementation guidance—that finance teams want documented clearly on every invoice.",
      "Profithub gives consultants a fast way to bill discovery phases, advisory retainers, and project-based engagements with professional line items and payment terms.",
    ],
    explanation: {
      title: "How consulting invoices differ from generic billing",
      paragraphs: [
        "Consulting work rarely looks like a product SKU. Clients expect invoices to explain what advisory time or deliverables they received: stakeholder interviews, roadmap documents, training sessions, or oversight during rollout.",
        "Corporate clients especially need invoices that map to purchase orders, cost centers, or approved statements of work. A consultant invoice generator helps you mirror contract language on every bill.",
        "Profithub keeps that structure repeatable so you spend less time reformatting spreadsheets and more time delivering client outcomes.",
      ],
    },
    whenToUse: {
      title: "Consultant billing scenarios",
      paragraphs: [
        "Invoice after a discovery sprint when interviews, audits, and findings decks are delivered. Separate workshops from written recommendations if they were priced differently.",
        "Retainer consultants can bill monthly advisory blocks with notes on sessions held, decisions supported, and documents produced during the period.",
        "Implementation consultants often bill phase-by-phase—design, build, training, hypercare—so each invoice aligns with a signed milestone rather than one lump sum at the end.",
      ],
    },
    includeTitle: "What consultants should put on each invoice",
    includeIntro: "Clear consulting invoices reduce approval delays from procurement and finance teams.",
    includeItems: invoiceIncludeItems("consultants"),
    mistakes: {
      title: "Consulting invoice mistakes to avoid",
      paragraphs: [
        "Using generic labels like 'consulting services' slows approval. Describe the phase, session type, or deliverable bundle instead.",
        "Do not mix unapproved scope into a milestone invoice. Extra work should be quoted and approved before it appears on a bill.",
        "Avoid inconsistent billing cadences. If you agreed to monthly retainers, invoice on the same schedule each cycle.",
      ],
    },
    faqTitle: "Consultant invoice FAQ",
    faqItems: [
      { question: "How do consultants invoice retainer clients?", answer: "Bill the recurring fee with a summary of advisory sessions, outputs, or support hours included in that period." },
      { question: "Can I invoice expenses separately?", answer: "Yes. Add approved travel, software, or pass-through costs as separate line items with brief descriptions." },
      { question: "Should consulting invoices reference SOW numbers?", answer: "If your client uses purchase orders or SOW IDs, include them in the invoice header or reference field." },
      { question: "Does Profithub support milestone billing?", answer: "Yes. Add one line item per milestone or phase so clients can match invoices to signed project plans." },
    ],
    ctaTitle: "Bill your consulting engagement",
    ctaDescription: "Generate a consultant invoice with Profithub—line items, totals, and payment terms ready for client finance teams.",
    ctaLabel: "Create consulting invoice",
    ctaHref: "/contracts/invoice",
  },

  "/invoice-generator-for-designers": {
    path: "/invoice-generator-for-designers",
    meta: {
      title: "Invoice Generator for Designers | Profithub",
      description:
        "Invoice brand, web, and product design projects with clear deliverable line items. Profithub helps designers bill milestones, revisions, and retainers professionally.",
    },
    h1: "Invoice Generator for Designers",
    intro: [
      "Designers deliver visual work in stages—concepts, revisions, final files, and handoff packages—that clients need spelled out clearly when it is time to pay.",
      "Profithub helps designers create invoices that describe creative deliverables, milestone approvals, and add-on requests without awkward payment conversations.",
    ],
    explanation: {
      title: "Why designers benefit from structured invoicing",
      paragraphs: [
        "Design projects often include multiple approval rounds. Invoices should reflect what was delivered in each phase: mood boards, UI screens, brand systems, or export-ready asset packages.",
        "When invoices lack detail, clients may confuse included revision rounds with new scope. Line items tied to deliverables help everyone remember what was approved.",
        "Profithub gives designers a professional billing format that matches the polish of their creative output.",
      ],
    },
    whenToUse: {
      title: "Designer invoice use cases",
      paragraphs: [
        "Bill a 50% deposit before concept work begins, then invoice the balance when final files are delivered and approved.",
        "Brand designers can invoice separately for discovery, identity design, guidelines, and social template packs if each was priced as its own milestone.",
        "Product and UX designers on retainers can invoice monthly for design support hours, prototype iterations, and developer handoff sessions.",
      ],
    },
    includeTitle: "What designers should include on invoices",
    includeIntro: "Detailed creative line items help clients approve payment without confusion about what was delivered.",
    includeItems: invoiceIncludeItems("designers"),
    mistakes: {
      title: "Designer invoicing mistakes",
      paragraphs: [
        "Invoicing 'design work' without naming deliverables makes finance teams pause. Specify assets, formats, and approval stage.",
        "Do not bill extra revision rounds as standard delivery unless your contract allows it. Call out add-ons clearly.",
        "Avoid sending invoices before file handoff if payment was tied to final delivery. Match billing triggers to your agreement.",
      ],
    },
    faqTitle: "Designer invoice FAQ",
    faqItems: [
      { question: "Should designers invoice before handing off files?", answer: "Follow your contract. Many designers require final payment before source files or editable assets are released." },
      { question: "Can I bill rush fees on an invoice?", answer: "Yes, if rush delivery was agreed in writing. Add a separate line item with the expedite fee." },
      { question: "How do I invoice partial brand projects?", answer: "Use one line item per phase—discovery, concepts, revisions, final brand kit—matching your proposal or contract." },
      { question: "Does Profithub work for agency design teams?", answer: "Yes. Individual designers and agency producers can generate client-ready invoices with consistent formatting." },
    ],
    ctaTitle: "Send your design invoice",
    ctaDescription: "Use Profithub to invoice brand, web, or product design milestones with clear creative deliverable descriptions.",
    ctaLabel: "Create design invoice",
    ctaHref: "/contracts/invoice",
  },

  "/invoice-generator-for-developers": {
    path: "/invoice-generator-for-developers",
    meta: {
      title: "Invoice Generator for Developers | Profithub",
      description:
        "Invoice software builds, integrations, and maintenance work with milestone-based line items. Profithub helps developers bill clients professionally online.",
    },
    h1: "Invoice Generator for Developers",
    intro: [
      "Developers deliver technical outcomes—features, integrations, deployments, and maintenance windows—that clients want mapped to invoices with precise milestone language.",
      "Profithub helps freelance and agency developers bill sprints, fixed builds, and support retainers with line items finance and engineering stakeholders can both understand.",
    ],
    explanation: {
      title: "Technical billing needs clear milestone language",
      paragraphs: [
        "Development invoices should describe shipped value: authentication module, payment integration, admin dashboard, API deployment, or monthly bug-fix allocation.",
        "Clients often have engineering managers approve invoices while finance processes payment. Both groups need line items that map to the statement of work.",
        "Profithub makes it easy to repeat a billing structure across sprints or maintenance cycles without rebuilding documents manually.",
      ],
    },
    whenToUse: {
      title: "Developer invoice scenarios",
      paragraphs: [
        "Invoice at the end of each sprint when story points or features were accepted in staging or production.",
        "Fixed-bid projects can bill per phase: discovery, MVP launch, hardening, and documentation handoff.",
        "Developers on support retainers invoice monthly for incident response hours, dependency updates, and monitoring coverage.",
      ],
    },
    includeTitle: "What developers should include on invoices",
    includeIntro: "Technical line items should describe shipped functionality, not internal task jargon alone.",
    includeItems: invoiceIncludeItems("developers"),
    mistakes: {
      title: "Developer invoicing mistakes",
      paragraphs: [
        "Using internal ticket numbers without plain-language descriptions confuses client approvers. Summarize the business outcome.",
        "Do not invoice undeployed work unless your contract bills for time and materials regardless of release timing.",
        "Avoid mixing warranty fixes with new feature work on the same line item. Separate maintenance from scope changes.",
      ],
    },
    faqTitle: "Developer invoice FAQ",
    faqItems: [
      { question: "Should developers invoice hourly or per milestone?", answer: "Use the model in your contract. Profithub supports hourly blocks, sprint fees, and fixed milestone amounts." },
      { question: "Can I bill for staging and production releases separately?", answer: "Yes. Split line items by environment or release phase if that matches your agreement." },
      { question: "How do I invoice bug fixes?", answer: "Warranty fixes are often included; post-warranty fixes can be billed as maintenance or change requests with separate lines." },
      { question: "Does Profithub support retainer invoices?", answer: "Yes. Bill monthly development support with hours included and optional overage lines." },
    ],
    ctaTitle: "Invoice your development work",
    ctaDescription: "Create developer invoices with milestone line items, totals, and payment terms using Profithub.",
    ctaLabel: "Create developer invoice",
    ctaHref: "/contracts/invoice",
  },

  "/invoice-generator-for-marketing-agencies": {
    path: "/invoice-generator-for-marketing-agencies",
    meta: {
      title: "Invoice Generator for Marketing Agencies | Profithub",
      description:
        "Invoice campaigns, retainers, media management, and creative production for agency clients. Profithub helps marketing teams bill with clear line items and PDF export.",
    },
    h1: "Invoice Generator for Marketing Agencies",
    intro: [
      "Marketing agencies bill diverse work—strategy, creative production, media buying, reporting, and retainers—often across multiple client stakeholders and approval layers.",
      "Profithub helps agency account and finance teams generate consistent client invoices with campaign references, service breakdowns, and payment terms.",
    ],
    explanation: {
      title: "Agency invoicing needs campaign-level clarity",
      paragraphs: [
        "Agency clients expect invoices to reflect the services in their scope of work: channel management, content batches, ad spend management fees, creative development, or analytics reporting.",
        "When invoices are vague, brand and finance contacts push back before payment is released. Structured line items speed up approvals and reduce write-offs.",
        "Profithub supports repeatable agency billing formats so producers spend less time fixing spreadsheet templates before month-end close.",
      ],
    },
    whenToUse: {
      title: "Marketing agency billing examples",
      paragraphs: [
        "Invoice monthly retainers with separate lines for strategy, content production, community management, and paid media oversight.",
        "Campaign projects can bill in phases: strategy deck, creative assets, launch support, and performance reporting.",
        "Pass-through ad spend should appear separately from management fees so clients reconcile media budgets accurately.",
      ],
    },
    includeTitle: "What agency invoices should include",
    includeIntro: "Agency finance teams need campaign context, service breakdowns, and clear totals on every bill.",
    includeItems: invoiceIncludeItems("marketing agencies"),
    mistakes: {
      title: "Agency invoicing mistakes",
      paragraphs: [
        "Bundling strategy, production, and media fees into one opaque line creates approval friction. Break services out.",
        "Do not invoice media spend without the reporting period or platform reference clients expect.",
        "Avoid inconsistent invoice layouts across accounts. Standard formats help clients process bills faster.",
      ],
    },
    faqTitle: "Marketing agency invoice FAQ",
    faqItems: [
      { question: "Can agencies invoice pass-through ad spend?", answer: "Yes. List media spend separately from management or creative fees with the billing period noted." },
      { question: "How should retainers appear on invoices?", answer: "Use a recurring line for the retainer plus optional lines for overages or add-on campaigns." },
      { question: "Can multiple campaigns share one invoice?", answer: "Yes, but separate line items by campaign or channel so client teams can allocate costs internally." },
      { question: "Does Profithub support PDF export for clients?", answer: "Yes. Generate and export professional agency invoices ready for client accounts payable." },
    ],
    ctaTitle: "Bill your agency clients",
    ctaDescription: "Create marketing agency invoices with campaign line items, totals, and payment instructions in Profithub.",
    ctaLabel: "Create agency invoice",
    ctaHref: "/contracts/invoice",
  },

  "/contract-template-for-freelancers": {
    path: "/contract-template-for-freelancers",
    meta: {
      title: "Contract Template for Freelancers | Profithub",
      description:
        "Use a freelancer contract template to define scope, payment terms, revisions, and deadlines. Generate client-ready contracts online with Profithub.",
    },
    h1: "Contract Template for Freelancers",
    intro: [
      "A freelancer contract template turns verbal agreements into a written baseline for scope, payment, revisions, and project boundaries.",
      "Profithub helps independent professionals customize contract templates for each client without drafting every agreement from a blank page.",
    ],
    explanation: {
      title: "What a freelancer contract template covers",
      paragraphs: [
        "Freelancers work across industries, but strong contracts consistently address deliverables, timelines, payment triggers, revision limits, and ownership of final work.",
        "Templates save time because you reuse the structure while updating project-specific details—client name, fee, milestones, and communication expectations.",
        "Profithub guides you through those fields so your contract reads professional before you send it for signature.",
      ],
    },
    whenToUse: {
      title: "When freelancers should use a contract",
      paragraphs: [
        "Use a contract before starting paid work, even on small projects. Written terms prevent disputes about extra revisions or delayed payment.",
        "Freelancers switching from referrals to cold leads benefit especially—contracts signal professionalism and set boundaries early.",
        "If you bill deposits or milestone payments, the contract should define when each payment is due and what triggers it.",
      ],
    },
    includeTitle: "Freelancer contract essentials",
    includeIntro: "Include these clauses in your freelancer contract template before work begins.",
    includeItems: contractIncludeItems("freelancers"),
    mistakes: {
      title: "Freelancer contract mistakes",
      paragraphs: [
        "Skipping revision limits invites unlimited feedback. Define included rounds and how extra revisions are billed.",
        "Do not rely on email threads as your only agreement. Consolidate terms in one signed document.",
        "Avoid vague deliverables like 'website updates.' Name outputs, formats, and approval criteria.",
      ],
    },
    faqTitle: "Freelancer contract FAQ",
    faqItems: [
      { question: "Do freelancers need contracts for small jobs?", answer: "Written contracts are recommended for any paid work because they clarify scope and payment expectations." },
      { question: "Can I reuse one freelancer contract template?", answer: "Reuse the structure, but customize scope, fees, and deadlines for each client." },
      { question: "Should deposits be in the contract?", answer: "Yes. State deposit amount, due date, and whether it is refundable if the project stops early." },
      { question: "Does Profithub generate freelancer contracts?", answer: "Yes. Use the freelance contract generator to create a draft based on your project inputs." },
    ],
    ctaTitle: "Generate your freelancer contract",
    ctaDescription: "Create a freelancer contract with scope, payment terms, and deadlines using Profithub.",
    ctaLabel: "Use contract generator",
    ctaHref: "/contracts/freelancer",
  },

  "/contract-template-for-consultants": {
    path: "/contract-template-for-consultants",
    meta: {
      title: "Contract Template for Consultants | Profithub",
      description:
        "Build consulting agreements with clear scope, fees, confidentiality, and deliverables. Profithub helps consultants create contract templates online.",
    },
    h1: "Contract Template for Consultants",
    intro: [
      "Consultants sell expertise, analysis, and guided implementation—work that needs a contract explaining advisory scope, client cooperation, and billing rules.",
      "Profithub helps consultants generate agreement templates tailored to discovery, retainer, and phased advisory engagements.",
    ],
    explanation: {
      title: "Consulting agreements define intangible deliverables",
      paragraphs: [
        "Consulting contracts should describe workshops, audits, memos, roadmaps, and oversight activities—not just hours sold. Clients need to know what they receive and when.",
        "Templates also clarify decision authority, access to stakeholders, and how confidential information is handled during engagements.",
        "Profithub structures those sections so you can focus on engagement specifics instead of document formatting.",
      ],
    },
    whenToUse: {
      title: "When consultants need a written agreement",
      paragraphs: [
        "Use a contract before discovery begins, especially when client data, leadership access, or fixed fees are involved.",
        "Retainer relationships need terms for monthly scope, response times, and what happens when priorities shift.",
        "Multi-phase consulting projects should tie payment to delivered reports, workshops, or implementation checkpoints.",
      ],
    },
    includeTitle: "Consulting contract template sections",
    includeIntro: "Strong consulting contracts align advisory scope with how clients approve and pay for work.",
    includeItems: contractIncludeItems("consultants"),
    mistakes: {
      title: "Consulting contract mistakes",
      paragraphs: [
        "Promising outcomes the client controls—such as revenue growth—creates risk. Contract for deliverables and responsibilities instead.",
        "Do not omit client cooperation requirements. Missing data or delayed interviews should have defined consequences.",
        "Avoid blending strategy and implementation fees without separate scopes. Split phases when pricing differs.",
      ],
    },
    faqTitle: "Consulting contract FAQ",
    faqItems: [
      { question: "Is a consulting agreement different from a freelance contract?", answer: "They overlap, but consulting agreements often emphasize advisory deliverables, confidentiality, and client access." },
      { question: "Should retainers be defined in the contract?", answer: "Yes. Document monthly scope, meeting cadence, and how out-of-scope requests are handled." },
      { question: "Can consultants limit liability in templates?", answer: "Many agreements include liability limits, but have qualified counsel review terms for your jurisdiction." },
      { question: "Can Profithub generate consulting contracts?", answer: "Yes. Use the contract generator to produce a draft aligned with your engagement details." },
    ],
    ctaTitle: "Create your consulting agreement",
    ctaDescription: "Build a consulting contract template with Profithub—scope, fees, and deliverables in one document.",
    ctaLabel: "Use contract generator",
    ctaHref: "/contracts/freelancer",
  },

  "/contract-template-for-designers": {
    path: "/contract-template-for-designers",
    meta: {
      title: "Contract Template for Designers | Profithub",
      description:
        "Protect creative projects with a designer contract template covering deliverables, revisions, file ownership, and payment milestones.",
    },
    h1: "Contract Template for Designers",
    intro: [
      "Design contracts protect creative work by defining deliverables, revision rounds, file ownership, and payment tied to approvals.",
      "Profithub helps designers generate contract templates for brand, web, and product projects without starting from scratch each time.",
    ],
    explanation: {
      title: "Why designers need written agreements",
      paragraphs: [
        "Creative projects change shape during feedback. Contracts define how many revision rounds are included and what counts as new scope.",
        "Designers also need clarity on when clients receive source files, who owns final assets, and whether portfolio use is allowed.",
        "A template ensures those questions are answered before concepts begin—not after tensions rise at delivery.",
      ],
    },
    whenToUse: {
      title: "Designer contract use cases",
      paragraphs: [
        "Brand identity projects should contract discovery, concepts, revisions, final guidelines, and file handoff separately.",
        "Web and product designers can tie payments to wireframes, UI approval, development handoff, and launch support.",
        "Studio work for agencies may require contracts that name approval contacts and turnaround expectations for feedback.",
      ],
    },
    includeTitle: "Designer contract must-haves",
    includeIntro: "These sections prevent scope creep and payment delays on creative engagements.",
    includeItems: contractIncludeItems("designers"),
    mistakes: {
      title: "Designer contract mistakes",
      paragraphs: [
        "Releasing source files before final payment without a contract clause is risky. Tie file delivery to agreed triggers.",
        "Do not leave 'unlimited revisions' undefined. Specify rounds and pricing for extras.",
        "Avoid missing third-party asset licensing terms. State who buys stock fonts, plugins, or images.",
      ],
    },
    faqTitle: "Designer contract FAQ",
    faqItems: [
      { question: "Who owns design files after payment?", answer: "Your contract should state when ownership transfers and whether you retain portfolio display rights." },
      { question: "How many revisions should contracts include?", answer: "Most designers include two or three structured rounds; additional rounds are billed as change requests." },
      { question: "Should deposits appear in design contracts?", answer: "Yes. Many designers require a deposit before concept work starts." },
      { question: "Can Profithub generate design contracts?", answer: "Yes. Customize a contract template with your project scope and payment terms in Profithub." },
    ],
    ctaTitle: "Protect your design project",
    ctaDescription: "Generate a designer contract with deliverables, revisions, and payment milestones in Profithub.",
    ctaLabel: "Use contract generator",
    ctaHref: "/contracts/freelancer",
  },

  "/contract-template-for-developers": {
    path: "/contract-template-for-developers",
    meta: {
      title: "Contract Template for Developers | Profithub",
      description:
        "Use a developer contract template for scope, milestones, IP ownership, and change requests. Create software development agreements with Profithub.",
    },
    h1: "Contract Template for Developers",
    intro: [
      "Developer contracts define what will be built, how changes are handled, when payments are due, and who owns the code after delivery.",
      "Profithub helps freelance and agency developers create agreement templates for fixed builds, sprints, and maintenance retainers.",
    ],
    explanation: {
      title: "Software contracts need technical scope clarity",
      paragraphs: [
        "Development agreements should describe features, integrations, environments, acceptance criteria, and warranty periods—not just hourly rates.",
        "Templates also cover change requests, deployment responsibilities, and access to repositories or client systems.",
        "Profithub helps you document those terms clearly so engineering and finance stakeholders share the same expectations.",
      ],
    },
    whenToUse: {
      title: "When developers should sign a contract first",
      paragraphs: [
        "Use a contract before writing production code or accessing client infrastructure, especially when IP ownership transfers on payment.",
        "Sprint-based engagements need terms for story acceptance, demo cadence, and payment each cycle.",
        "Maintenance retainers should define response times, included hours, and how emergencies are billed.",
      ],
    },
    includeTitle: "Developer contract template sections",
    includeIntro: "Include technical and commercial terms developers and clients both need upfront.",
    includeItems: contractIncludeItems("developers"),
    mistakes: {
      title: "Developer contract mistakes",
      paragraphs: [
        "Undefined acceptance criteria lead to endless 'almost done' debates. Document how work is approved.",
        "Do not skip ownership terms for custom code, frameworks, and third-party libraries.",
        "Avoid verbal change approvals. Require written change requests before billing extra scope.",
      ],
    },
    faqTitle: "Developer contract FAQ",
    faqItems: [
      { question: "Should developers contract hourly or fixed price?", answer: "Choose based on risk. Fixed price needs tighter scope; hourly needs budget caps and reporting cadence." },
      { question: "Who owns code after payment?", answer: "State IP transfer timing—often upon final payment—and note any pre-existing tools you retain." },
      { question: "How long should warranty periods last?", answer: "Many dev contracts include 14–30 day bug-fix windows for delivered features." },
      { question: "Can Profithub generate developer contracts?", answer: "Yes. Build a development agreement draft with scope and payment terms in Profithub." },
    ],
    ctaTitle: "Draft your development agreement",
    ctaDescription: "Use Profithub to create a developer contract with milestones, IP terms, and payment rules.",
    ctaLabel: "Use contract generator",
    ctaHref: "/contracts/freelancer",
  },

  "/proposal-template-for-agencies": {
    path: "/proposal-template-for-agencies",
    meta: {
      title: "Proposal Template for Agencies | Profithub",
      description:
        "Win agency clients with proposal templates for retainers, campaigns, and multi-service engagements. Create proposals online with Profithub.",
    },
    h1: "Proposal Template for Agencies",
    intro: [
      "Agency proposals must sell strategy, creative capacity, and measurable delivery—often across channels and stakeholder groups—in one cohesive document.",
      "Profithub helps agencies build proposal templates that present scope, timelines, pricing options, and next steps clients can approve quickly.",
    ],
    explanation: {
      title: "What an agency proposal template should accomplish",
      paragraphs: [
        "Agency prospects compare vendors on clarity, not just price. Proposals should explain the client problem, recommended approach, deliverables, team roles, timeline, and investment options.",
        "Templates let account teams respond faster to RFPs and inbound leads while keeping brand voice and section structure consistent.",
        "Profithub organizes those sections so producers spend less time formatting decks and more time tailoring strategy.",
      ],
    },
    whenToUse: {
      title: "Agency proposal scenarios",
      paragraphs: [
        "Use proposal templates for retainer pitches outlining monthly services across strategy, creative, media, and reporting.",
        "Campaign launches benefit from phased proposals—discovery, production, activation, optimization, and wrap reporting.",
        "Existing clients requesting new work should receive proposals even for add-ons so scope and budget stay documented.",
      ],
    },
    includeTitle: "Agency proposal sections to include",
    includeIntro: "Winning agency proposals answer commercial and operational questions before clients ask them.",
    includeItems: [
      { title: "Client challenge summary", body: "Show you understand the brand goal, audience, and constraints driving the request." },
      { title: "Recommended approach", body: "Explain channels, creative direction, measurement plan, and why this approach fits the client." },
      { title: "Deliverables and timeline", body: "List assets, campaigns, reports, and milestone dates with owner responsibilities." },
      { title: "Team and process", body: "Introduce roles—strategy, account, creative, media—and how communication will run." },
      { title: "Pricing options", body: "Offer clear packages or phased investments so decision-makers can compare scenarios." },
    ],
    mistakes: {
      title: "Agency proposal mistakes",
      paragraphs: [
        "Copy-pasting old proposals without updating KPIs and channel context loses client trust quickly.",
        "Do not hide assumptions about client approvals, asset access, or budget for media spend.",
        "Avoid single-option pricing when clients need budget flexibility. Tiered packages improve close rates.",
      ],
    },
    faqTitle: "Agency proposal FAQ",
    faqItems: [
      { question: "How long should agency proposals be?", answer: "Long enough to explain approach, deliverables, and pricing clearly—usually a focused document rather than a full deck for every lead." },
      { question: "Should proposals include contracts?", answer: "Proposals present terms for approval; contracts formalize them after the client says yes." },
      { question: "Can agencies reuse proposal templates?", answer: "Yes. Keep structure consistent but customize strategy, metrics, and pricing for each prospect." },
      { question: "Does Profithub help agencies create proposals?", answer: "Yes. Use the proposal generator to build client-ready agency proposals online." },
    ],
    ctaTitle: "Build your agency proposal",
    ctaDescription: "Create a proposal template for your next agency pitch with scope, pricing, and timeline sections in Profithub.",
    ctaLabel: "Create agency proposal",
    ctaHref: "/proposal-generator",
  },
};

export function getProfessionPageConfig(path: ProfessionSeoPagePath): ProfessionSeoPageConfig {
  return professionSeoPages[path];
}
