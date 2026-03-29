import Link from "next/link";

export const metadata = {
  title: "How to Calculate MRR: Simple SaaS Formula Explained",
  description:
    "Learn how to calculate Monthly Recurring Revenue (MRR) with simple formulas and examples.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        How to Calculate MRR
      </h1>

      <p className="mb-6 text-gray-700">
        MRR = Number of customers × monthly subscription price.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/saas-mrr" className="font-semibold text-blue-700">
          Use MRR Calculator →
        </Link>
      </div>
    </main>
  );
}