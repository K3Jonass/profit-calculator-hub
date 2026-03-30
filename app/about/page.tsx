import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ProfitHub",
  description:
    "Learn what ProfitHub is, who it's for, and how it helps freelancers, founders, and ecommerce sellers make smarter financial decisions.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      
      <section className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600">
            About ProfitHub
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Built to help you make better business decisions with numbers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            ProfitHub is a collection of simple, powerful business calculators
            designed for freelancers, founders, ecommerce sellers, and operators
            who want clarity in their pricing, margins, and decisions.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            Why ProfitHub exists
          </h2>
          <p className="text-slate-600 leading-7">
            Most people run their business on guesswork. They set prices based on
            emotions, copy competitors, or underestimate costs. ProfitHub exists
            to replace guessing with numbers.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            Who it's for
          </h2>
          <p className="text-slate-600 leading-7">
            Freelancers, SaaS founders, ecommerce sellers, and small business
            owners who want to understand their numbers and make smarter,
            data-driven decisions.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          What you can do with ProfitHub
        </h2>

        <ul className="space-y-3 text-slate-600">
          <li>• Calculate your real profit (not just revenue)</li>
          <li>• Set correct freelance pricing</li>
          <li>• Understand SaaS MRR and growth</li>
          <li>• Analyze subscription leaks and churn</li>
          <li>• Structure revenue share deals</li>
          <li>• Make smarter business decisions using real data</li>
        </ul>
      </section>
    </main>
  );
}