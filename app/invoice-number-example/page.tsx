import TemplateSeoPage, { generateTemplatePageMetadata } from "@/components/seo/TemplateSeoPage";
import { invoiceNumberExamplePage } from "@/lib/seo-pages/template-pages-content";

export async function generateMetadata() {
  return generateTemplatePageMetadata(invoiceNumberExamplePage);
}

export default function InvoiceNumberExamplePage() {
  return <TemplateSeoPage config={invoiceNumberExamplePage} />;
}
