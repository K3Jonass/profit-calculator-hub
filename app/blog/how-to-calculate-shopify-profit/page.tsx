import Link from "next/link";

export const metadata = {
  title: "How to Calculate Shopify Profit: A Simple Formula That Actually Works",
  description:
    "Learn how to calculate Shopify profit using a simple formula and understand your real business performance.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold">
        How to Calculate Shopify Profit: A Simple Formula That Actually Works
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Shopify profit is not revenue. It’s what remains after every cost is
        accounted for.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        The real formula
      </h2>

      <div className="bg-gray-50 p-5 rounded-2xl border mb-6">
        Profit = Revenue - (Product Cost + Ads + Fees + Shipping)
      </div>

      <p className="mb-6 text-gray-700">
        If you don’t subtract everything, you’re not calculating profit.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Example
      </h2>

      <p className="mb-6 text-gray-700">
        Revenue: $5,000  
        Costs: $4,200  
        Profit: $800
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <h3 className="font-semibold mb-3">
          Stop guessing your profit
        </h3>
        <Link href="/calculators/shopify-profit" className="text-blue-700 font-semibold">
          Open Calculator →
        </Link>
      </div>
    </main>
  );
}