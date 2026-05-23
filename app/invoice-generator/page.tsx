import type { Metadata } from "next";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import {
  invoiceGeneratorFaq,
  invoiceGeneratorIncludeItems,
  invoiceGeneratorMeta,
} from "@/lib/seo-pages/invoice-generator-content";
import { getSeoAeoContent } from "@/lib/seo-pages/seo-aeo-content";
import { getRequestLocale } from "@/lib/i18n/server";
import { buildPublicPageMetadata } from "@/lib/site-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return buildPublicPageMetadata({
    title: invoiceGeneratorMeta.title,
    description: invoiceGeneratorMeta.description,
    path: "/invoice-generator",
    locale,
    absoluteTitle: true,
  });
}

export default function InvoiceGeneratorLandingPage() {
  const aeo = getSeoAeoContent("/invoice-generator");

  return (
    <SeoLandingPage
      path="/invoice-generator"
      h1="Online Invoice Generator"
      intro={[
        "Profithub is an online invoice generator that helps freelancers, consultants, agencies, and small service businesses create professional invoices without rebuilding the same document in a spreadsheet every month.",
        "Use this professional invoice maker to add client details, services, totals, taxes, payment terms, and export a polished invoice PDF you can send as soon as work is complete.",
      ]}
      quickAnswer={aeo?.quickAnswer}
      definition={aeo?.definition}
      comparison={aeo?.comparison}
      sections={[
        {
          title: "Create Professional Invoices Online",
          paragraphs: [
            "Sending a clear invoice is one of the fastest ways to get paid on time. An online invoice generator saves you from formatting tables, recalculating totals, and hunting for old client details every billing cycle. With Profithub, you enter the information once and generate a document that looks consistent across every project.",
            "Whether you bill hourly, by milestone, or on a fixed project fee, a professional invoice maker helps clients understand exactly what they are paying for. That matters for finance teams, repeat clients, and anyone who needs clean records for tax or bookkeeping purposes.",
            "Profithub focuses on speed and clarity. You do not need accounting software training to create a usable invoice. The generator guides you through the fields clients expect, from line items to due dates, so you can move from finished work to payment request in minutes.",
          ],
        },
      ]}
      includeTitle="What Should an Invoice Include?"
      includeIntro="A strong invoice gives your client everything needed to approve and pay without back-and-forth emails. These are the core sections Profithub helps you include in every document."
      includeItems={invoiceGeneratorIncludeItems}
      profithubWorkflowContext="invoice"
      trailingSections={[
        {
          title: "Who Can Use This Invoice Generator?",
          paragraphs: [
            "This freelance invoice generator is built for independent professionals and small teams that need reliable billing documents without enterprise software overhead. Freelancers, consultants, designers, developers, marketers, coaches, agencies, and local service businesses can all use it to invoice clients after project delivery or on a recurring schedule.",
            "If you send multiple invoices per month, a consistent online invoice generator also helps you standardize numbering, payment terms, and line-item descriptions. That makes follow-ups easier and gives your business a more polished client experience.",
          ],
        },
        {
          title: "Why Use an Online Invoice Generator?",
          paragraphs: [
            "Manual invoices break down when you are busy. Totals get copied wrong, old client addresses linger, and payment terms drift from project to project. An invoice generator keeps the structure consistent while letting you customize the details that matter for each job.",
            "Profithub also fits naturally into a broader client workflow. You can pair invoices with contracts, proposals, and welcome documents so your business paperwork feels connected instead of scattered across email threads and folders.",
            "For many operators, the biggest benefit is momentum. Instead of delaying billing because formatting feels tedious, you create the invoice immediately, export the PDF, and keep cash flow moving.",
          ],
        },
      ]}
      faqTitle="Frequently Asked Questions"
      faqItems={invoiceGeneratorFaq}
      ctaTitle="Ready to send your next invoice?"
      ctaDescription="Open the Profithub invoice generator, add your client and line items, and create a professional invoice PDF in minutes."
      ctaLabel="Create Your Invoice"
      ctaHref="/contracts/invoice"
    />
  );
}
