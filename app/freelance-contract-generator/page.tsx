import type { Metadata } from "next";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import {
  freelanceContractGeneratorFaq,
  freelanceContractGeneratorHowToSteps,
  freelanceContractGeneratorIncludeItems,
  freelanceContractGeneratorMeta,
} from "@/lib/seo-pages/freelance-contract-generator-content";
import { getSeoAeoContent } from "@/lib/seo-pages/seo-aeo-content";
import { getRequestLocale } from "@/lib/i18n/server";
import { buildPublicPageMetadata } from "@/lib/site-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return buildPublicPageMetadata({
    title: freelanceContractGeneratorMeta.title,
    description: freelanceContractGeneratorMeta.description,
    path: "/freelance-contract-generator",
    locale,
    absoluteTitle: true,
  });
}

export default function FreelanceContractGeneratorPage() {
  const aeo = getSeoAeoContent("/freelance-contract-generator");

  return (
    <SeoLandingPage
      path="/freelance-contract-generator"
      h1="Freelance Contract Generator"
      intro={[
        "A freelance contract is a written agreement between you and your client that defines the work you will deliver, how much you will be paid, and what happens if plans change. It turns verbal promises into a shared reference both sides can rely on before, during, and after the project.",
        "Profithub helps freelancers, consultants, agencies, and service providers create professional contracts online without starting from a blank document. You can add client details, scope, payment terms, deadlines, and export a clean contract you can review with your client before work begins.",
      ]}
      quickAnswer={aeo?.quickAnswer}
      definition={aeo?.definition}
      comparison={aeo?.comparison}
      sections={[
        {
          title: "What is a freelance contract?",
          paragraphs: [
            "A freelance contract is a business agreement that outlines the relationship between an independent provider and a client. Unlike a full-time employment agreement, it is usually project-based or retainer-based and focuses on deliverables, timelines, and payment rather than job benefits or company policies.",
            "The best freelance contracts are clear enough for a client to understand what they are buying and specific enough for you to protect your time. They do not need complicated legal language to be useful. They need accurate details about scope, responsibilities, approvals, and payment.",
            "Profithub is designed for operators who want a practical document quickly. You enter the project information you already know, and the generator organizes it into a structured contract format you can refine before sending.",
          ],
        },
        {
          title: "Why freelancers need contracts",
          paragraphs: [
            "Many freelancers skip contracts when a project feels small or a client seems trustworthy. That works until there is a disagreement about extra revisions, delayed payment, or who owns the final files. A contract gives both sides a written baseline and makes hard conversations easier because expectations were documented upfront.",
            "Contracts also help you look more professional. Clients often take freelancers more seriously when terms are clear from the start. That can improve approval speed, reduce scope creep, and make it easier to enforce payment if a client disappears after delivery.",
            "For agencies and small service businesses, contracts are even more important because multiple people may touch the account. A written agreement keeps sales promises, delivery plans, and billing terms aligned so your team is not rebuilding the deal from memory halfway through the project.",
          ],
        },
      ]}
      includeTitle="What to include in a freelance contract"
      includeIntro="Every project is different, but strong freelance contracts usually cover the same core building blocks. Profithub helps you include the sections clients and bookkeepers expect to see."
      includeItems={freelanceContractGeneratorIncludeItems}
      howToTitle="How to create a freelance contract"
      howToIntro="You do not need to draft a contract from scratch. Follow these five steps to create a client-ready freelance contract with Profithub."
      howToSteps={freelanceContractGeneratorHowToSteps}
      faqTitle="Freelance contract generator FAQ"
      faqItems={freelanceContractGeneratorFaq}
      ctaTitle="Create your freelance contract now"
      ctaDescription="Open the Profithub freelance contract generator, add your project details, and export a professional contract document in minutes."
      ctaLabel="Open the freelance contract generator"
      ctaHref="/contracts/freelancer"
    />
  );
}
