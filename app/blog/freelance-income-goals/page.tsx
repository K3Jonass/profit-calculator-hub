import Link from "next/link";

export const metadata = {
  title: "How Much Should You Charge to Hit Your Income Goals?",
  description:
    "Learn how to reverse-engineer your freelance rate based on your income goals.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Freelance Income Goals
      </h1>

      <p className="mb-6 text-gray-700">
        Start from your target income, not random pricing.
      </p>

      <Link href="/calculators/freelance-rate" className="text-blue-700 font-semibold">
        Calculate →
      </Link>
    </main>
  );
}