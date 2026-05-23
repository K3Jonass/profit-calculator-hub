import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ContextualSeoLinks from "@/components/seo/ContextualSeoLinks";
import FAQSection from "@/components/seo/FAQSection";
import JsonLdScript from "@/components/seo/JsonLdScript";
import ProfithubWorkflowSection from "@/components/seo/ProfithubWorkflowSection";
import type { FaqItem } from "@/lib/structured-data";
import type { ComparisonSection, DefinitionBlock } from "@/lib/seo-pages/seo-aeo-types";
import type { ProfithubWorkflowContext } from "@/lib/seo-pages/profithub-workflow";
import {
  PROFITHUB_WORKFLOW_TITLE,
  getProfithubWorkflowIntro,
  getProfithubWorkflowSchemaSteps,
} from "@/lib/seo-pages/profithub-workflow";
import { SITE_URL, buildBreadcrumbSchema, buildFaqPageSchema, buildHowToSchema } from "@/lib/structured-data";
import { getContextualSeoLinks, getRelatedSeoPageLinks } from "@/lib/seo-internal-links";

type ContentSection = {
  title: string;
  paragraphs: string[];
};

type IncludeItem = {
  title: string;
  body: string;
};

type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

type SeoLandingPageProps = {
  path: string;
  h1: string;
  intro: string[];
  quickAnswer?: string;
  definition?: DefinitionBlock;
  comparison?: ComparisonSection;
  sections: ContentSection[];
  includeTitle: string;
  includeIntro: string;
  includeItems: IncludeItem[];
  howToTitle?: string;
  howToIntro?: string;
  howToSteps?: string[];
  profithubWorkflowContext?: ProfithubWorkflowContext;
  profithubWorkflowIntro?: string;
  trailingSections?: ContentSection[];
  relatedTitle?: string;
  relatedLinks?: RelatedLink[];
  faqTitle: string;
  faqItems: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function SeoLandingPage({
  path,
  h1,
  intro,
  quickAnswer,
  definition,
  comparison,
  sections,
  includeTitle,
  includeIntro,
  includeItems,
  howToTitle,
  howToIntro,
  howToSteps = [],
  profithubWorkflowContext,
  profithubWorkflowIntro,
  trailingSections = [],
  relatedTitle = "Related guides and tools",
  relatedLinks,
  faqTitle,
  faqItems,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaHref,
}: SeoLandingPageProps) {
  const pageUrl = `${SITE_URL}${path}`;
  const resolvedRelatedLinks =
    relatedLinks ??
    getRelatedSeoPageLinks(path).map((link) => ({
      href: link.href,
      title: link.label,
      description: link.description,
    }));
  const introContextualLinks = getContextualSeoLinks(path, 3);
  const sectionContextualLinks = getRelatedSeoPageLinks(path).slice(3, 6);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: `${SITE_URL}/` },
    { name: h1, item: pageUrl },
  ]);
  const workflowIntro = profithubWorkflowIntro ?? (profithubWorkflowContext ? getProfithubWorkflowIntro(profithubWorkflowContext) : undefined);
  const workflowSchema =
    profithubWorkflowContext
      ? buildHowToSchema({
          name: PROFITHUB_WORKFLOW_TITLE,
          description: workflowIntro ?? quickAnswer ?? intro[0] ?? h1,
          url: pageUrl,
          steps: getProfithubWorkflowSchemaSteps(profithubWorkflowContext),
        })
      : null;
  const howToSchema =
    howToSteps.length > 0 && howToTitle
      ? buildHowToSchema({
          name: howToTitle,
          description: howToIntro ?? quickAnswer ?? intro[0] ?? h1,
          url: pageUrl,
          steps: howToSteps,
        })
      : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-14">
      <JsonLdScript data={breadcrumbSchema} />
      <JsonLdScript data={buildFaqPageSchema(faqItems)} />
      {workflowSchema ? <JsonLdScript data={workflowSchema} /> : null}
      {howToSchema ? <JsonLdScript data={howToSchema} /> : null}

      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: h1 }]} />

      <header className="surface-card rounded-[2rem] p-8 md:p-10">
        <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-200">
          Profithub document tools
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">{h1}</h1>
        <div className="mt-6 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        <ContextualSeoLinks links={introContextualLinks} />
      </header>

      {quickAnswer ? (
        <section className="mt-8 surface-card rounded-2xl border-l-4 border-blue-600 p-6 md:p-8 dark:border-blue-500">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-2xl">Quick Answer</h2>
          <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-200">{quickAnswer}</p>
        </section>
      ) : null}

      {definition ? (
        <section className="mt-8 surface-card rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-2xl">{definition.title}</h2>
          <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{definition.body}</p>
        </section>
      ) : null}

      {profithubWorkflowContext ? (
        <ProfithubWorkflowSection context={profithubWorkflowContext} intro={profithubWorkflowIntro} />
      ) : null}

      {sections.map((section) => (
        <section key={section.title} className="mt-10 surface-card rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl">{section.title}</h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-10 surface-card rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl">{includeTitle}</h2>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{includeIntro}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {includeItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 dark:border-slate-700/80 dark:bg-slate-900/50">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
        {sectionContextualLinks.length > 0 ? (
          <ContextualSeoLinks links={sectionContextualLinks} prefix="Helpful next steps:" />
        ) : null}
      </section>

      {howToSteps.length > 0 ? (
        <section className="mt-10 surface-card rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl">{howToTitle}</h2>
          {howToIntro ? <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{howToIntro}</p> : null}
          <ol className="mt-6 list-decimal space-y-3 pl-6 text-base leading-7 text-slate-600 dark:text-slate-300">
            {howToSteps.map((step) => (
              <li key={step.slice(0, 48)}>{step}</li>
            ))}
          </ol>
        </section>
      ) : null}

      {comparison ? (
        <section className="mt-10 surface-card rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl">{comparison.title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{comparison.intro}</p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th scope="col" className="py-3 pr-4 font-semibold text-slate-900 dark:text-slate-100">
                    Aspect
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold text-slate-900 dark:text-slate-100">
                    Manual approach
                  </th>
                  <th scope="col" className="py-3 font-semibold text-slate-900 dark:text-slate-100">
                    With Profithub
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.aspect} className="border-b border-slate-100 dark:border-slate-800">
                    <th scope="row" className="py-4 pr-4 align-top font-semibold text-slate-900 dark:text-slate-100">
                      {row.aspect}
                    </th>
                    <td className="py-4 pr-4 align-top leading-6 text-slate-600 dark:text-slate-300">{row.alternative}</td>
                    <td className="py-4 align-top leading-6 text-slate-600 dark:text-slate-300">{row.profithub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {trailingSections.map((section) => (
        <section key={section.title} className="mt-10 surface-card rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl">{section.title}</h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl">{relatedTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {resolvedRelatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="surface-card hover-lift rounded-2xl p-5 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{link.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <FAQSection title={faqTitle} items={faqItems} />

      <section className="surface-subtle relative mt-14 overflow-hidden rounded-[2rem] p-8 shadow-soft backdrop-blur-sm">
        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-300/20 blur-2xl dark:bg-blue-700/20" />
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl">{ctaTitle}</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">{ctaDescription}</p>
        <Link
          href={ctaHref}
          className="mt-6 inline-flex rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500"
        >
          {ctaLabel}
        </Link>
      </section>
    </div>
  );
}
