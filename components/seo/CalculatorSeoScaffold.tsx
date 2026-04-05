import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CalculatorIntroBlock from "@/components/seo/CalculatorIntroBlock";
import FAQSection from "@/components/seo/FAQSection";
import FormulaExplanationBlock from "@/components/seo/FormulaExplanationBlock";
import RelatedArticles from "@/components/seo/RelatedArticles";
import RelatedCalculators from "@/components/RelatedCalculators";
import type { CalculatorSeoContent } from "@/lib/calculator-seo-content";

export default function CalculatorSeoScaffold({
  content,
  children,
}: {
  content: CalculatorSeoContent;
  children: React.ReactNode;
}) {
  const url = `https://profithub.cloud/calculators/${content.slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://profithub.cloud/" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://profithub.cloud/calculators" },
      { "@type": "ListItem", position: 3, name: content.title, item: url },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: content.title,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    url,
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Calculators", href: "/calculators" },
          { name: content.title },
        ]}
      />

      <CalculatorIntroBlock title={content.title} answer={content.shortAnswer} />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">Use the calculator</h2>
        {children}
      </section>

      <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Understanding your results</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">{content.resultsExplanation}</p>
      </section>

      <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">How to use this calculator</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-600">
          {content.howToUse.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <FormulaExplanationBlock formula={content.formula} explanation={content.formulaExplanation} />
      <FAQSection items={content.faq} />
      <RelatedCalculators currentHref={`/calculators/${content.slug}`} calculatorHrefs={content.relatedCalculatorHrefs} />
      <RelatedArticles articleHrefs={content.relatedArticleHrefs} />
    </main>
  );
}
