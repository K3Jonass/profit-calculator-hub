import Link from "next/link";

export const metadata = {
  title: "What Is MRR? The Core Metric of Every SaaS Business",
  description:
    "Learn what MRR means, how it works, and why it’s the most important metric for SaaS growth.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        What Is MRR? The Core Metric of Every SaaS Business
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        MRR is the predictable revenue your SaaS generates every month.
      </p>

      <p className="mb-6 text-gray-700">
        It’s the foundation of valuation, growth, and decision-making.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/saas-mrr" className="font-semibold text-blue-700">
          Calculate MRR →
        </Link>
      </div>
    </main>
  );
}