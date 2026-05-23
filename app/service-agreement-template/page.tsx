import TemplateSeoPage, { generateTemplatePageMetadata } from "@/components/seo/TemplateSeoPage";
import { serviceAgreementTemplatePage } from "@/lib/seo-pages/template-pages-content";

export async function generateMetadata() {
  return generateTemplatePageMetadata(serviceAgreementTemplatePage);
}

export default function ServiceAgreementTemplatePage() {
  return <TemplateSeoPage config={serviceAgreementTemplatePage} />;
}
