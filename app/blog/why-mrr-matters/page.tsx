import Link from "next/link";

export const metadata = {
  title: "Why MRR Matters More Than Revenue in SaaS",
  description:
    "Understand why Monthly Recurring Revenue (MRR) is more important than total revenue for SaaS businesses.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Why MRR Matters More Than Revenue
      </h1>

      <p className="mb-6 text-gray-700">
        One-time revenue is noise. MRR is predictability.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/saas-mrr" className="font-semibold text-blue-700">
          Calculate MRR →
        </Link>
      </div>
    </main>
  );
}