export type ProfithubWorkflowLink = {
  href: string;
  label: string;
};

export type ProfithubWorkflowStep = {
  title: string;
  description: string;
  links?: ProfithubWorkflowLink[];
};

export type ProfithubWorkflowContext = "home" | "contract" | "invoice" | "proposal";

export const PROFITHUB_WORKFLOW_TITLE = "How Profithub Works";

const DOCUMENT_TOOL_LINKS: ProfithubWorkflowLink[] = [
  { href: "/freelance-contract-generator", label: "Freelance contract generator" },
  { href: "/invoice-generator", label: "Invoice generator" },
  { href: "/proposal-generator", label: "Proposal generator" },
];

const CONTEXT_INTROS: Record<ProfithubWorkflowContext, string> = {
  home: "Profithub helps freelancers, consultants, and agencies create contracts, invoices, and proposals in one consistent workflow. Follow these five steps to go from blank page to client-ready PDF.",
  contract:
    "Use the same Profithub workflow to create a freelance contract, then move to invoices and proposals when the project progresses.",
  invoice:
    "The Profithub invoice workflow keeps billing consistent with your contracts and proposals so client details stay organized.",
  proposal:
    "Build a client-ready proposal with Profithub, then continue to contracts and invoices without re-entering the same details.",
};

function getChooseDocumentLinks(context: ProfithubWorkflowContext): ProfithubWorkflowLink[] {
  switch (context) {
    case "contract":
      return [
        { href: "/contracts/freelancer", label: "Open the contract generator" },
        ...DOCUMENT_TOOL_LINKS.filter((link) => link.href !== "/freelance-contract-generator"),
      ];
    case "invoice":
      return [
        { href: "/contracts/invoice", label: "Open the invoice generator" },
        ...DOCUMENT_TOOL_LINKS.filter((link) => link.href !== "/invoice-generator"),
      ];
    case "proposal":
      return [
        { href: "/contracts", label: "Open the proposal builder" },
        ...DOCUMENT_TOOL_LINKS.filter((link) => link.href !== "/proposal-generator"),
      ];
    default:
      return [{ href: "/contracts", label: "Browse all document tools" }, ...DOCUMENT_TOOL_LINKS];
  }
}

function getCustomizeLinks(context: ProfithubWorkflowContext): ProfithubWorkflowLink[] | undefined {
  switch (context) {
    case "contract":
      return [{ href: "/freelance-contract-template", label: "Freelance contract template guide" }];
    case "invoice":
      return [
        { href: "/free-invoice-template", label: "Free invoice template guide" },
        { href: "/invoice-number-example", label: "Invoice number examples" },
      ];
    case "proposal":
      return [{ href: "/proposal-template-for-agencies", label: "Proposal template for agencies" }];
    default:
      return undefined;
  }
}

function getDownloadLinks(context: ProfithubWorkflowContext): ProfithubWorkflowLink[] | undefined {
  if (context === "home") {
    return DOCUMENT_TOOL_LINKS;
  }

  return [
    { href: "/freelance-contract-generator", label: "Freelance contract generator" },
    { href: "/invoice-generator", label: "Invoice generator" },
    { href: "/proposal-generator", label: "Proposal generator" },
  ].filter((link) => {
    if (context === "contract") return link.href !== "/freelance-contract-generator";
    if (context === "invoice") return link.href !== "/invoice-generator";
    if (context === "proposal") return link.href !== "/proposal-generator";
    return true;
  });
}

export function getProfithubWorkflowIntro(context: ProfithubWorkflowContext = "home"): string {
  return CONTEXT_INTROS[context];
}

export function getProfithubWorkflowSteps(context: ProfithubWorkflowContext = "home"): ProfithubWorkflowStep[] {
  return [
    {
      title: "Choose your document",
      description:
        "Start with the document you need—a contract, invoice, proposal, or another client template. Pick the generator that matches your stage of the project.",
      links: getChooseDocumentLinks(context),
    },
    {
      title: "Add your business and client details",
      description:
        "Enter your business name, contact information, client details, and billing fields once. Profithub keeps the structure consistent across every document.",
    },
    {
      title: "Customize the content",
      description:
        "Add scope, deliverables, line items, payment terms, timelines, and any project-specific language your client expects to see.",
      links: getCustomizeLinks(context),
    },
    {
      title: "Preview the final document",
      description:
        "Review the formatted document before you send it. Check names, totals, dates, and terms so you can fix issues before the client sees the file.",
    },
    {
      title: "Download or save as PDF",
      description:
        "Export a polished PDF you can email, upload, or store for your records. Use the same workflow for the next contract, invoice, or proposal.",
      links: getDownloadLinks(context),
    },
  ];
}

export function getProfithubWorkflowSchemaSteps(context: ProfithubWorkflowContext = "home") {
  return getProfithubWorkflowSteps(context).map((step) => ({
    name: step.title,
    text: step.description,
  }));
}
