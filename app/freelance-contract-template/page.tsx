import TemplateSeoPage, { generateTemplatePageMetadata } from "@/components/seo/TemplateSeoPage";
import { freelanceContractTemplatePage } from "@/lib/seo-pages/template-pages-content";

export async function generateMetadata() {
  return generateTemplatePageMetadata(freelanceContractTemplatePage);
}

export default function FreelanceContractTemplatePage() {
  return <TemplateSeoPage config={freelanceContractTemplatePage} />;
}
