import TemplateSeoPage, { generateTemplatePageMetadata } from "@/components/seo/TemplateSeoPage";
import { freeInvoiceTemplatePage } from "@/lib/seo-pages/template-pages-content";

export async function generateMetadata() {
  return generateTemplatePageMetadata(freeInvoiceTemplatePage);
}

export default function FreeInvoiceTemplatePage() {
  return <TemplateSeoPage config={freeInvoiceTemplatePage} />;
}
