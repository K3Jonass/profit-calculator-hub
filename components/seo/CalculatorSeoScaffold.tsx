import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CalculatorIntroBlock from "@/components/seo/CalculatorIntroBlock";
import FAQSection from "@/components/seo/FAQSection";
import FormulaExplanationBlock from "@/components/seo/FormulaExplanationBlock";
import JsonLdScript from "@/components/seo/JsonLdScript";
import RelatedArticles from "@/components/seo/RelatedArticles";
import RelatedCalculators from "@/components/RelatedCalculators";
import type { CalculatorSeoContent } from "@/lib/calculator-seo-content";
import { getRequestLocale } from "@/lib/i18n/server";
import { withLocale } from "@/lib/i18n/config";
import { buildCanonicalUrl } from "@/lib/site-metadata";
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildHowToSchema,
  buildSoftwareApplicationSchema,
} from "@/lib/structured-data";

export default async function CalculatorSeoScaffold({
  content,
  children,
}: {
  content: CalculatorSeoContent;
  children: React.ReactNode;
}) {
  const locale = await getRequestLocale();
  const path = `/calculators/${content.slug}`;
  const url = buildCanonicalUrl(path, locale);

  const faqSchema = content.faq.length ? buildFaqPageSchema(content.faq) : null;

  const breadcrumbSchema = {
    ...buildBreadcrumbSchema([
      { name: "Home", item: buildCanonicalUrl("/", locale) },
      { name: "Calculators", item: buildCanonicalUrl("/calculators", locale) },
      { name: content.title, item: url },
    ]),
    "@id": `${url}#breadcrumb`,
  };

  const appSchema = buildSoftwareApplicationSchema({
    name: content.title,
    description: content.shortAnswer,
    url,
  });

  const howToSchema = buildHowToSchema({
    name: `How to use the ${content.title}`,
    description: content.shortAnswer,
    url,
    steps: content.howToUse,
  });

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.title,
    description: content.shortAnswer,
    url,
    breadcrumb: {
      "@id": `${url}#breadcrumb`,
    },
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-14">
      {faqSchema ? <JsonLdScript data={faqSchema} /> : null}
      <JsonLdScript data={breadcrumbSchema} />
      <JsonLdScript data={appSchema} />
      <JsonLdScript data={howToSchema} />
      <JsonLdScript data={pageSchema} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Calculators", href: "/calculators" },
          { name: content.title },
        ]}
      />

      <CalculatorIntroBlock title={content.title} answer={content.shortAnswer} />

      <section className="mt-10" aria-label="Calculator tool">
        {children}
      </section>

      <section className="mt-14 surface-card rounded-2xl p-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Understanding your results</h2>
        <p className="mt-3 ui-text text-sm leading-7">{content.resultsExplanation}</p>
      </section>

      <section className="mt-14 surface-card rounded-2xl p-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">How to use this calculator</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6 ui-text text-sm leading-7">
          {content.howToUse.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <FormulaExplanationBlock formula={content.formula} explanation={content.formulaExplanation} />
      <FAQSection items={content.faq} />
      <RelatedCalculators currentHref={path} calculatorHrefs={content.relatedCalculatorHrefs} locale={locale} />
      <RelatedArticles articleHrefs={content.relatedArticleHrefs} />

      <section className="mt-14 rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/40">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Run your numbers now</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          Scroll up to use the calculator, or explore more tools in our calculators hub.
        </p>
        <Link
          href={withLocale("/calculators", locale)}
          className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Browse all calculators
        </Link>
      </section>
    </div>
  );
}
