import Link from "next/link";

export const metadata = {
  title: "Dropshipping Profit Margin: What You Actually Keep Per Sale",
  description:
    "Learn how dropshipping profit margins work, what costs to include, and how to know if your store is actually profitable.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">
        Dropshipping Profit Margin: What You Actually Keep Per Sale
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Dropshipping looks simple: sell high, buy low. But real profit margins
        are much tighter than most beginners expect.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Real costs in dropshipping
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>Product cost</li>
        <li>Ad spend</li>
        <li>Transaction fees</li>
        <li>Refunds</li>
      </ul>

      <p className="mb-6 text-gray-700">
        If you ignore one of these, your “profit” is fake.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/dropshipping-profit" className="font-semibold text-blue-700">
          Calculate Dropshipping Profit →
        </Link>
      </div>
    </main>
  );
}