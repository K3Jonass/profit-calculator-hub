import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ProfitHub",
  description:
    "Contact ProfitHub for calculator support, tool ideas, partnerships, and bug reports.",
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contactTopics = [
  {
    title: "Calculator support",
    description: "Questions about calculator inputs, outputs, or interpretation of results.",
  },
  {
    title: "Tool suggestions",
    description: "Request new calculators, use cases, or workflow improvements for ProfitHub.",
  },
  {
    title: "Bug reports",
    description: "Report incorrect calculations, UX issues, or content bugs with reproducible details.",
  },
  {
    title: "Partnership inquiries",
    description: "Explore collaborations, integrations, and distribution partnerships.",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="motion-fade-up rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600">
            Contact ProfitHub
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Talk with the ProfitHub team</h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            We build free calculators, practical business guides, and lightweight deal tools. If you need help, have a suggestion, or want to collaborate, we’d love to hear from you.
          </p>
        </div>
      </section>

      <section className="motion-fade-up mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Primary contact</h2>
        <a href="mailto:contact@profithub.cloud" className="mt-4 inline-flex text-lg font-semibold text-blue-700 animated-link">
          contact@profithub.cloud
        </a>
        <p className="mt-3 text-slate-600">Typical response time: within 1–2 business days.</p>
      </section>

      <section className="motion-fade-up mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">What you can contact us for</h2>
        <div className="motion-stagger mt-5 grid gap-4 md:grid-cols-2">
          {contactTopics.map((topic) => (
            <article key={topic.title} className="hover-lift rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">{topic.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{topic.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
