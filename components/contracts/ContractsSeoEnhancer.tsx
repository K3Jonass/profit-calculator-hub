"use client";

import { usePathname } from "next/navigation";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { stripLocaleFromPathname } from "@/lib/i18n/config";
import { contractGenerators } from "@/lib/contracts-generators";
import {
  CONTRACT_TOOL_HOW_TO_STEPS,
  SITE_URL,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildHowToSchema,
  buildSoftwareApplicationSchema,
} from "@/lib/structured-data";

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
  const pathname = stripLocaleFromPathname(usePathname() || "/");
  const currentTool = contractGenerators.find((item) => item.href === pathname);

  if (!pathname.startsWith("/contracts")) {
    return null;
  }

  const pageUrl = `${SITE_URL}${pathname}`;
  const pageName = currentTool?.title ?? "Contract Generators";
  const pageDescription =
    currentTool?.description ??
    "Generate practical contract and deal templates for freelancer work, revenue share, invoicing, onboarding, and client operations.";

  const breadcrumbItems = [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Contracts", item: `${SITE_URL}/contracts` },
  ];

  if (pathname !== "/contracts") {
    breadcrumbItems.push({ name: pageName, item: pageUrl });
  }

  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

  const pageSchema = currentTool
    ? buildSoftwareApplicationSchema({
        name: pageName,
        description: pageDescription,
        url: pageUrl,
      })
    : {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: pageName,
        description: pageDescription,
        url: pageUrl,
      };

  const showToolFaq = Boolean(currentTool);
  const faqSchema = showToolFaq ? buildFaqPageSchema(toolFaq) : null;
  const howToSchema = currentTool
    ? buildHowToSchema({
        name: `How to create a ${pageName.replace(/ Generator$/i, "")}`,
        description: pageDescription,
        url: pageUrl,
        steps: CONTRACT_TOOL_HOW_TO_STEPS,
      })
    : null;

  return (
    <>
      <JsonLdScript data={breadcrumbSchema} />
      <JsonLdScript data={pageSchema} />
      {howToSchema ? <JsonLdScript data={howToSchema} /> : null}
      {faqSchema ? <JsonLdScript data={faqSchema} /> : null}

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
