import { PROFESSION_SEO_PAGE_PATHS, professionSeoPages } from "@/lib/seo-pages/profession-pages-content";

export type SeoResourceLink = {
  href: string;
  label: string;
  description: string;
};

export const SEO_RESOURCE_FOOTER_LINKS: SeoResourceLink[] = [
  {
    href: "/freelance-contract-generator",
    label: "Freelance Contract Generator",
    description: "Create professional freelance contracts online with scope, payment terms, and deadlines.",
  },
  {
    href: "/invoice-generator",
    label: "Invoice Generator",
    description: "Build client invoices with line items, totals, and PDF export.",
  },
  {
    href: "/proposal-generator",
    label: "Proposal Generator",
    description: "Create client-ready project proposals for freelance and agency work.",
  },
  {
    href: "/freelance-contract-template",
    label: "Freelance Contract Template",
    description: "See what a freelance contract template should include before you send one.",
  },
  {
    href: "/free-invoice-template",
    label: "Free Invoice Template",
    description: "Review a practical invoice template structure for service businesses.",
  },
  {
    href: "/service-agreement-template",
    label: "Service Agreement Template",
    description: "Learn when and how to use a service agreement for client work.",
  },
  {
    href: "/consulting-agreement-template",
    label: "Consulting Agreement Template",
    description: "Define consulting scope, fees, and deliverables in a written agreement.",
  },
  {
    href: "/invoice-number-example",
    label: "Invoice Number Example",
    description: "Choose a clear invoice numbering format for bookkeeping and client payment tracking.",
  },
  {
    href: "/blog/how-to-write-invoice-that-gets-paid-fast",
    label: "How to Write an Invoice",
    description: "Practical guide to writing invoices that clients approve and pay faster.",
  },
  {
    href: "/blog/freelance-contract-template-for-project-based-work",
    label: "How to Write a Freelance Contract",
    description: "Step-by-step guidance for project-based freelance contract templates.",
  },
];

export const SEO_LANDING_PAGE_LINKS = SEO_RESOURCE_FOOTER_LINKS.filter((link) => !link.href.startsWith("/blog/"));

/** Curated related links per SEO page (minimum 3 each). */
const SEO_PAGE_RELATED: Record<string, string[]> = {
  "/freelance-contract-generator": [
    "/freelance-contract-template",
    "/proposal-generator",
    "/invoice-generator",
    "/blog/freelance-contract-template-for-project-based-work",
  ],
  "/invoice-generator": [
    "/free-invoice-template",
    "/invoice-number-example",
    "/freelance-contract-generator",
    "/blog/how-to-write-invoice-that-gets-paid-fast",
  ],
  "/proposal-generator": [
    "/freelance-contract-generator",
    "/invoice-generator",
    "/service-agreement-template",
    "/consulting-agreement-template",
  ],
  "/freelance-contract-template": [
    "/freelance-contract-generator",
    "/proposal-generator",
    "/service-agreement-template",
    "/blog/freelance-contract-template-for-project-based-work",
  ],
  "/service-agreement-template": [
    "/consulting-agreement-template",
    "/freelance-contract-generator",
    "/freelance-contract-template",
    "/proposal-generator",
  ],
  "/free-invoice-template": [
    "/invoice-generator",
    "/invoice-number-example",
    "/freelance-contract-generator",
    "/blog/how-to-write-invoice-that-gets-paid-fast",
  ],
  "/invoice-number-example": [
    "/free-invoice-template",
    "/invoice-generator",
    "/freelance-contract-generator",
    "/blog/how-to-write-invoice-that-gets-paid-fast",
  ],
  "/consulting-agreement-template": [
    "/service-agreement-template",
    "/proposal-generator",
    "/freelance-contract-generator",
    "/invoice-generator",
  ],
  "/invoice-generator-for-freelancers": [
    "/invoice-generator",
    "/contract-template-for-freelancers",
    "/free-invoice-template",
    "/invoice-generator-for-consultants",
  ],
  "/invoice-generator-for-consultants": [
    "/invoice-generator",
    "/contract-template-for-consultants",
    "/consulting-agreement-template",
    "/invoice-generator-for-freelancers",
  ],
  "/invoice-generator-for-designers": [
    "/invoice-generator",
    "/contract-template-for-designers",
    "/proposal-generator",
    "/invoice-generator-for-freelancers",
  ],
  "/invoice-generator-for-developers": [
    "/invoice-generator",
    "/contract-template-for-developers",
    "/freelance-contract-generator",
    "/invoice-generator-for-consultants",
  ],
  "/invoice-generator-for-marketing-agencies": [
    "/invoice-generator",
    "/proposal-template-for-agencies",
    "/contract-template-for-consultants",
    "/invoice-generator-for-designers",
  ],
  "/contract-template-for-freelancers": [
    "/freelance-contract-generator",
    "/freelance-contract-template",
    "/invoice-generator-for-freelancers",
    "/proposal-generator",
  ],
  "/contract-template-for-consultants": [
    "/freelance-contract-generator",
    "/consulting-agreement-template",
    "/invoice-generator-for-consultants",
    "/service-agreement-template",
  ],
  "/contract-template-for-designers": [
    "/freelance-contract-generator",
    "/freelance-contract-template",
    "/invoice-generator-for-designers",
    "/proposal-generator",
  ],
  "/contract-template-for-developers": [
    "/freelance-contract-generator",
    "/service-agreement-template",
    "/invoice-generator-for-developers",
    "/contract-template-for-freelancers",
  ],
  "/proposal-template-for-agencies": [
    "/proposal-generator",
    "/invoice-generator-for-marketing-agencies",
    "/service-agreement-template",
    "/freelance-contract-generator",
  ],
};

const PROFESSION_LINKS: SeoResourceLink[] = PROFESSION_SEO_PAGE_PATHS.map((path) => ({
  href: path,
  label: professionSeoPages[path].h1,
  description: professionSeoPages[path].meta.description,
}));

const ALL_LINKS_BY_HREF = Object.fromEntries(
  [...SEO_RESOURCE_FOOTER_LINKS, ...PROFESSION_LINKS].map((link) => [link.href, link]),
) as Record<string, SeoResourceLink>;

const DEFAULT_RELATED = [
  "/freelance-contract-generator",
  "/invoice-generator",
  "/proposal-generator",
  "/freelance-contract-template",
];

function normalizePath(path: string) {
  return path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
}

export function getSeoResourceLink(href: string) {
  return ALL_LINKS_BY_HREF[href];
}

export function getRelatedSeoPageLinks(currentPath: string) {
  const path = normalizePath(currentPath);
  const hrefs = SEO_PAGE_RELATED[path] ?? DEFAULT_RELATED;
  return hrefs
    .filter((href) => href !== path)
    .map((href) => ALL_LINKS_BY_HREF[href])
    .filter(Boolean);
}

export function getContextualSeoLinks(currentPath: string, limit = 4) {
  return getRelatedSeoPageLinks(currentPath).slice(0, limit);
}

export function getHomepageSeoLinks() {
  return SEO_LANDING_PAGE_LINKS;
}
