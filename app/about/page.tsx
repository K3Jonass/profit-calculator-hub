import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ProfitHub",
  description:
    "Learn more about ProfitHub and how our free calculators help online businesses make smarter decisions.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="mb-4 text-4xl font-bold tracking-tight">About ProfitHub</h1>
      <p className="mb-6 text-slate-600">
        ProfitHub is a simple collection of free calculators built for ecommerce sellers,
        SaaS founders, and freelancers who want faster financial clarity.
      </p>
      <p className="mb-6 text-slate-600">
        Our goal is to make business numbers easier to understand. Instead of guessing profit,
        pricing, or breakeven targets, you can use practical tools to make better decisions.
      </p>
      <p className="text-slate-600">
        We plan to expand ProfitHub with more business calculators, comparison tools, and helpful
        educational content over time.
      </p>
    </div>
  );
}