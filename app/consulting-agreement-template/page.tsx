import TemplateSeoPage, { generateTemplatePageMetadata } from "@/components/seo/TemplateSeoPage";
import { consultingAgreementTemplatePage } from "@/lib/seo-pages/template-pages-content";

export async function generateMetadata() {
  return generateTemplatePageMetadata(consultingAgreementTemplatePage);
}

export default function ConsultingAgreementTemplatePage() {
  return <TemplateSeoPage config={consultingAgreementTemplatePage} />;
}
