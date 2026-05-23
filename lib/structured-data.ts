import { APP_BASE_URL } from "@/lib/public-urls";

export const SITE_URL = APP_BASE_URL;
export const SITE_NAME = "Profithub";

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbInput = {
  name: string;
  item?: string;
};

export const HOME_FAQ: FaqItem[] = [
  {
    question: "What is Profithub?",
    answer:
      "Profithub is an online platform that helps freelancers, consultants, agencies, and service businesses create professional contracts, invoices, and proposals. It also includes free business calculators for pricing, profitability, and smarter financial decisions.",
  },
  {
    question: "Can I create freelance contracts online?",
    answer:
      "Yes. Profithub includes a freelance contract generator that lets you define project scope, payment terms, deadlines, and client details, then generate a professional contract you can review and share.",
  },
  {
    question: "Can I create invoices as PDF?",
    answer:
      "Yes. Profithub's invoice generator lets you add line items, calculate totals, and export a clean, professional invoice as a PDF ready to send to clients.",
  },
  {
    question: "Is Profithub useful for freelancers and agencies?",
    answer:
      "Yes. Profithub is built for freelancers, consultants, agencies, developers, designers, marketers, coaches, and small service businesses that need contracts, invoices, and proposals in one simple workflow.",
  },
  {
    question: "What documents can I create with Profithub?",
    answer:
      "You can create freelance contracts, professional invoices, client proposals, welcome documents, revenue share agreements, client access requests, and feedback or testimonial request templates.",
  },
];

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Profithub helps freelancers and service businesses create contracts, invoices, proposals, and business documents online.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildHomeSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Profithub helps freelancers and service businesses create contracts, invoices, and proposals online.",
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "Free",
    },
    isAccessibleForFree: true,
  };
}

export function buildSoftwareApplicationSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "Free",
    },
    isAccessibleForFree: true,
  };
}

export function buildFaqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.item ? { item: item.item } : {}),
    })),
  };
}

export type HowToSchemaStep = {
  name: string;
  text: string;
};

export function buildHowToSchema({
  name,
  description,
  url,
  steps,
}: {
  name: string;
  description: string;
  url: string;
  steps: string[] | HowToSchemaStep[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url,
    step: steps.map((step, index) => {
      const isNamedStep = typeof step === "object";
      const text = isNamedStep ? step.text : step;
      const stepName = isNamedStep ? step.name : `Step ${index + 1}`;

      return {
        "@type": "HowToStep",
        position: index + 1,
        name: stepName,
        text,
      };
    }),
  };
}

export function isHowToGuidePath(pathname: string, title?: string) {
  return pathname.includes("how-to") || Boolean(title?.toLowerCase().startsWith("how to"));
}

export const CONTRACT_TOOL_HOW_TO_STEPS = [
  "Open the document generator and select the template you need.",
  "Enter client details, project scope, payment terms, and delivery information.",
  "Review the generated document and export it as a PDF to share with your client.",
];
