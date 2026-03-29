import Link from "next/link";

export const metadata = {
  title: "Why Your Shopify Store Is Not Profitable (Even If You're Making Sales)",
  description:
    "Discover why many Shopify stores generate revenue but fail to be profitable, and how to fix it.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">
        Why Your Shopify Store Is Not Profitable (Even If You&apos;re Making Sales)
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Revenue without profit is a trap. Many Shopify stores fall into it.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Common reasons
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>Ad costs too high</li>
        <li>Low pricing</li>
        <li>Hidden fees</li>
        <li>No upsells</li>
      </ul>

      <p className="mb-6 text-gray-700">
        Fixing profitability starts with knowing your numbers.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <h3 className="font-semibold mb-3">
          Check your margins now
        </h3>
        <Link href="/calculators/shopify-profit" className="text-blue-700 font-semibold">
          Open Shopify Profit Calculator →
        </Link>
      </div>
    </main>
  );
}