import type { Metadata } from "next";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import {
  proposalGeneratorFaq,
  proposalGeneratorIncludeItems,
  proposalGeneratorMeta,
} from "@/lib/seo-pages/proposal-generator-content";
import { getSeoAeoContent } from "@/lib/seo-pages/seo-aeo-content";
import { getRequestLocale } from "@/lib/i18n/server";
import { buildPublicPageMetadata } from "@/lib/site-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return buildPublicPageMetadata({
    title: proposalGeneratorMeta.title,
    description: proposalGeneratorMeta.description,
    path: "/proposal-generator",
    locale,
    absoluteTitle: true,
  });
}

export default function ProposalGeneratorLandingPage() {
  const aeo = getSeoAeoContent("/proposal-generator");

  return (
    <SeoLandingPage
      path="/proposal-generator"
      h1="Proposal Generator for Freelancers and Agencies"
      intro={[
        "Profithub is a proposal generator that helps freelancers, consultants, and agencies create client-ready project proposals without rebuilding the same document for every new lead.",
        "Use this client proposal builder to outline scope, pricing, deliverables, and next steps for design, development, marketing, consulting, and other service engagements.",
      ]}
      quickAnswer={aeo?.quickAnswer}
      definition={aeo?.definition}
      comparison={aeo?.comparison}
      sections={[
        {
          title: "Create Client-Ready Proposals Faster",
          paragraphs: [
            "Winning work often depends on how quickly and clearly you respond to a client request. A proposal generator helps you move from discovery notes to a polished project proposal template in less time, so you can send something professional while the opportunity is still warm.",
            "Instead of copying old slides or messy docs, Profithub gives you a structured workflow for the details clients care about: what you will deliver, when they will receive it, and what it will cost. That makes your business look organized before the project even starts.",
            "Whether you are pitching a one-off build, a monthly retainer, or a multi-phase agency engagement, a consistent proposal format helps clients compare options and approve faster.",
          ],
        },
      ]}
      includeTitle="What to Include in a Freelance Proposal"
      includeIntro="Strong proposals answer client questions before they ask them. These sections help your project proposal template feel complete, credible, and easy to approve."
      includeItems={proposalGeneratorIncludeItems}
      profithubWorkflowContext="proposal"
      trailingSections={[
        {
          title: "Proposal Generator for Agencies and Consultants",
          paragraphs: [
            "Agencies and consultants often juggle multiple prospects at once. A business proposal generator keeps your team aligned on scope language, pricing structure, and delivery assumptions so every pitch reflects the same quality standard.",
            "Consulting proposals benefit from clarity around discovery, recommendations, implementation, and ongoing support. Development and design proposals need explicit deliverables, revision limits, and handoff details. Profithub supports each format by helping you organize the content clients expect before they sign.",
            "For agency owners, the real value is repeatability. You can respond to new leads faster, reduce internal back-and-forth, and give account managers a reliable project proposal template they can adapt without starting from zero.",
          ],
        },
        {
          title: "From Proposal to Contract and Invoice",
          paragraphs: [
            "A proposal is usually the first yes. After a client approves, the next step is documenting terms in a contract and billing through a professional invoice. Profithub supports that full workflow so your documents stay connected.",
            "Start with the proposal generator to win the project, then use the freelance contract generator to formalize scope, payment terms, and deadlines. When work is complete, create an invoice with the same client details and line-item structure.",
            "That sequence—proposal, contract, invoice—helps freelancers and agencies look more established and reduces friction when projects move from sales to delivery to payment.",
          ],
        },
      ]}
      faqTitle="Frequently Asked Questions"
      faqItems={proposalGeneratorFaq}
      ctaTitle="Ready to send your next proposal?"
      ctaDescription="Open Profithub, build a client-ready proposal with clear scope and pricing, and move your project from pitch to approval faster."
      ctaLabel="Create Your Proposal"
      ctaHref="/contracts"
    />
  );
}
