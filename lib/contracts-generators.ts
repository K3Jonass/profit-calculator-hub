export type ContractGeneratorItem = {
  title: string;
  description: string;
  href: string;
  badge: string;
  disabled?: boolean;
};

// NOTE: When adding a new public contract generator, also ensure:
// 1) app/sitemap.ts includes it (automatically sourced from this list)
// 2) app/contracts/page.tsx presents it (this file powers the page)
// 3) IndexNow submission includes it (lib/public-urls.ts uses this list)
export const contractGenerators: ContractGeneratorItem[] = [
  {
    title: "Revenue Share Contract Generator",
    description:
      "Generate a practical revenue share agreement for founders, operators, freelancers, and business partners.",
    href: "/contracts/revenue-share",
    badge: "Free",
  },
  {
    title: "Freelancer Contract Generator",
    description:
      "Generate a professional freelancer agreement for client work, project scope, payment terms, and deadlines.",
    href: "/contracts/freelancer",
    badge: "Available",
  },
  {
    title: "Invoice Generator",
    description:
      "Generate a simple, professional invoice template with billing details, due dates, and payment terms.",
    href: "/contracts/invoice",
    badge: "Available",
  },
  {
    title: "Welcome Document Generator",
    description:
      "Generate a polished client welcome document covering services, timelines, communication channels, and deliverables.",
    href: "/contracts/welcome-doc",
    badge: "Available",
  },
  {
    title: "Client Access Request Generator",
    description:
      "Generate a structured client access request document with requested tools, purpose, urgency, and approval fields.",
    href: "/contracts/client-access-request",
    badge: "Available",
  },
  {
    title: "Feedback/Testimonial Request Generator",
    description:
      "Generate a polished feedback or testimonial request message tailored to project outcomes, tone, and platform.",
    href: "/contracts/feedback-request",
    badge: "Available",
  },
  {
    title: "More contract generators coming soon",
    description:
      "NDA, service agreement, partnership agreement, supplier agreement, and more will be added to the Deal Engine.",
    href: "#",
    badge: "Coming Soon",
    disabled: true,
  },
];
