import type { Metadata } from "next";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import type { FaqItem } from "@/lib/structured-data";
import { getSeoAeoContent } from "@/lib/seo-pages/seo-aeo-content";
import { getRequestLocale } from "@/lib/i18n/server";
import { buildPublicPageMetadata } from "@/lib/site-metadata";

type ContentSection = {
  title: string;
  paragraphs: string[];
};

type IncludeItem = {
  title: string;
  body: string;
};

export type TemplateSeoPageConfig = {
  path: string;
  meta: {
    title: string;
    description: string;
  };
  h1: string;
  intro: string[];
  explanation: ContentSection;
  whenToUse: ContentSection;
  includeTitle: string;
  includeIntro: string;
  includeItems: IncludeItem[];
  mistakes: ContentSection;
  relatedTitle?: string;
  faqTitle: string;
  faqItems: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref: string;
};

export function buildTemplatePageMetadata(config: TemplateSeoPageConfig): Metadata {
  return buildPublicPageMetadata({
    title: config.meta.title,
    description: config.meta.description,
    path: config.path,
    locale: "en",
    absoluteTitle: true,
  });
}

export async function generateTemplatePageMetadata(config: TemplateSeoPageConfig): Promise<Metadata> {
  const locale = await getRequestLocale();

  return buildPublicPageMetadata({
    title: config.meta.title,
    description: config.meta.description,
    path: config.path,
    locale,
    absoluteTitle: true,
  });
}

export default function TemplateSeoPage({ config }: { config: TemplateSeoPageConfig }) {
  const aeo = getSeoAeoContent(config.path);

  return (
    <SeoLandingPage
      path={config.path}
      h1={config.h1}
      intro={config.intro}
      quickAnswer={aeo?.quickAnswer}
      definition={aeo?.definition}
      comparison={aeo?.comparison}
      sections={[config.explanation, config.whenToUse]}
      includeTitle={config.includeTitle}
      includeIntro={config.includeIntro}
      includeItems={config.includeItems}
      howToTitle={aeo?.howToTitle}
      howToIntro={aeo?.howToIntro}
      howToSteps={aeo?.howToSteps ?? []}
      trailingSections={[config.mistakes]}
      relatedTitle={config.relatedTitle}
      faqTitle={config.faqTitle}
      faqItems={config.faqItems}
      ctaTitle={config.ctaTitle}
      ctaDescription={config.ctaDescription}
      ctaLabel={config.ctaLabel}
      ctaHref={config.ctaHref}
    />
  );
}
