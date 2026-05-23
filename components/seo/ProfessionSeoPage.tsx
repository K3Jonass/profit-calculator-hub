import type { Metadata } from "next";
import TemplateSeoPage, { buildTemplatePageMetadata, generateTemplatePageMetadata } from "@/components/seo/TemplateSeoPage";
import type { ProfessionSeoPagePath } from "@/lib/seo-pages/profession-pages-content";
import { getProfessionPageConfig } from "@/lib/seo-pages/profession-pages-content";

export function buildProfessionPageMetadata(path: ProfessionSeoPagePath): Metadata {
  return buildTemplatePageMetadata(getProfessionPageConfig(path));
}

export async function generateProfessionPageMetadata(path: ProfessionSeoPagePath): Promise<Metadata> {
  return generateTemplatePageMetadata(getProfessionPageConfig(path));
}

export default function ProfessionSeoPage({ path }: { path: ProfessionSeoPagePath }) {
  return <TemplateSeoPage config={getProfessionPageConfig(path)} />;
}
