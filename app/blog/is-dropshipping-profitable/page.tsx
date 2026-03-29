import Link from "next/link";

export const metadata = {
  title: "Is Dropshipping Still Profitable in 2026?",
  description:
    "Discover if dropshipping is still profitable and what determines success in modern ecommerce.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Is Dropshipping Still Profitable in 2026?
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Dropshipping is profitable if your numbers work. Not because of the model
        itself.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        What decides profitability
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>Cost per acquisition</li>
        <li>Product pricing</li>
        <li>Conversion rate</li>
      </ul>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/dropshipping-profit" className="font-semibold text-blue-700">
          Check your profit →
        </Link>
      </div>
    </main>
  );
}