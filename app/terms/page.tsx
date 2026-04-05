import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | ProfitHub",
  description:
    "Read ProfitHub Terms of Service for calculator usage, contracts/templates disclaimers, and legal limitations.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "Acceptance of Terms",
    content:
      "By accessing or using ProfitHub, you agree to these Terms of Service. If you do not agree, please discontinue use of the site.",
  },
  {
    heading: "Informational Use Only",
    content:
      "ProfitHub calculators, contract tools, and templates are provided for informational and operational support purposes only. They do not constitute legal, financial, tax, or professional advice.",
  },
  {
    heading: "No Guarantees",
    content:
      "Calculator outputs are estimates based on user-provided inputs. We do not guarantee accuracy for every scenario, nor any specific business, legal, or financial outcome from use of this website.",
  },
  {
    heading: "User Responsibility",
    content:
      "You are responsible for evaluating calculator results, contract text, and operational decisions before acting. Use qualified professionals where appropriate for legal or financial decisions.",
  },
  {
    heading: "Intellectual Property and Usage",
    content:
      "Unless otherwise stated, website content, branding, and tool interfaces are owned by ProfitHub. You may use the tools for personal or internal business use, but may not copy, resell, or redistribute the site content as your own.",
  },
  {
    heading: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, ProfitHub is not liable for any direct, indirect, incidental, consequential, or special damages resulting from use of or inability to use this website or its outputs.",
  },
  {
    heading: "Updates to Terms",
    content:
      "We may update these Terms of Service from time to time. Continued use of ProfitHub after updates are published constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="motion-fade-up rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          These terms describe how ProfitHub calculators, blog content, and contract/deal tools may be used.
        </p>
      </section>

      <section className="motion-stagger mt-8 space-y-4">
        {sections.map((section) => (
          <article key={section.heading} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
            <p className="mt-3 leading-7 text-slate-600">{section.content}</p>
          </article>
        ))}
      </section>

      <section className="motion-fade-up mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-3 text-slate-600">
          Questions about these terms can be sent to <a href="mailto:contact@profithub.cloud" className="font-semibold text-blue-700 animated-link">contact@profithub.cloud</a>. You can also use our <Link href="/contact" className="font-semibold text-blue-700 animated-link">contact page</Link>.
        </p>
      </section>
    </main>
  );
}
