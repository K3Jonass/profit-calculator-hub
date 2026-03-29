import Link from "next/link";

export const metadata = {
  title: "Dropshipping Profit Per Product: How to Price for Real Margins",
  description:
    "Learn how to calculate profit per product in dropshipping and avoid underpricing your offers.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Dropshipping Profit Per Product: How to Price for Real Margins
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Your business is built one product margin at a time.
      </p>

      <p className="mb-6 text-gray-700">
        If your product only makes $2 profit, scaling won’t save you.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/dropshipping-profit" className="font-semibold text-blue-700">
          Calculate product profit →
        </Link>
      </div>
    </main>
  );
}