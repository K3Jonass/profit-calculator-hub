import type { Metadata } from "next";
import { contractGenerators } from "@/lib/contracts-generators";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Contract Generators for Freelancers and Teams | ProfitHub",
  description:
    "Generate practical contract templates for revenue share deals, freelance work, invoices, welcome docs, and client access workflows.",
  alternates: {
    canonical: "/contracts",
  },
};

export default function ContractsPage() {
  return (
    <main className="min-h-screen">
      <section className="motion-fade-up border-b border-slate-200/80 bg-white/70 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-200">
              ProfitHub Deal Engine
            </span>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">Contract Generators</h1>

            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Create practical business contract templates in minutes. Choose a contract type below and generate a ready-to-use document for your workflow.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
              These templates are built for operators, freelancers, founders, and small businesses. They are not legal advice.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="motion-stagger grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contractGenerators.map((item) => {
            const content = (
              <div className="hover-lift rounded-3xl border-soft surface-card p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h2>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {item.badge}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>

                <div className="mt-6">
                  <span
                    className={`inline-flex rounded-xl px-4 py-2 text-sm font-semibold ${
                      item.disabled
                        ? "cursor-not-allowed bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                        : "bg-slate-900 text-white dark:bg-blue-600"
                    }`}
                  >
                    {item.disabled ? "Coming Soon" : "Open Generator"}
                  </span>
                </div>
              </div>
            );

            if (item.disabled) {
              return <div key={item.title}>{content}</div>;
            }

            return (
              <Link key={item.title} href={item.href}>
                {content}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
