"use client";

import { usePathname } from "next/navigation";
import { contractGenerators } from "@/lib/contracts-generators";

const toolFaq = [
  {
    question: "Are these contract and deal templates legal advice?",
    answer:
      "No. ProfitHub tools generate practical draft documents based on your inputs, but they do not replace legal review for your jurisdiction or deal complexity.",
  },
  {
    question: "How should I use generated templates safely?",
    answer:
      "Use the generated draft as an operating baseline, then review payment terms, liability limits, intellectual property, and termination clauses before signing.",
  },
];

export default function ContractsSeoEnhancer() {
  const pathname = usePathname();
  const currentTool = contractGenerators.find((item) => item.href === pathname);

  if (!pathname.startsWith("/contracts")) {
    return null;
  }

  const pageUrl = `https://profithub.cloud${pathname}`;
  const pageName = currentTool?.title ?? "Contract Generators";
  const pageDescription =
    currentTool?.description ??
    "Generate practical contract and deal templates for freelancer work, revenue share, invoicing, onboarding, and client operations.";

  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://profithub.cloud/" },
    { "@type": "ListItem", position: 2, name: "Contracts", item: "https://profithub.cloud/contracts" },
  ];

  if (pathname !== "/contracts") {
    breadcrumbItems.push({ "@type": "ListItem", position: 3, name: pageName, item: pageUrl });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": currentTool ? "SoftwareApplication" : "WebPage",
    name: pageName,
    description: pageDescription,
    url: pageUrl,
    applicationCategory: currentTool ? "BusinessApplication" : undefined,
    isAccessibleForFree: currentTool ? true : undefined,
  };

  const showToolFaq = Boolean(currentTool);
  const faqSchema = showToolFaq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: toolFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      {faqSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /> : null}

      {showToolFaq ? (
        <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="surface-card rounded-2xl p-6">
            <h2 className="ui-heading text-2xl font-bold tracking-tight">Contract tool FAQ</h2>
            {toolFaq.map((item) => (
              <details key={item.question} className="mt-3 rounded-xl border border-slate-200 p-4 first:mt-4 dark:border-slate-700/80">
                <summary className="cursor-pointer font-semibold text-slate-900 dark:text-slate-100">{item.question}</summary>
                <p className="ui-text mt-2 text-sm leading-7">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
