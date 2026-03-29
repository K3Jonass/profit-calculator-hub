import Link from "next/link";

export const metadata = {
  title: "How to Price Freelance Work: Stop Underselling Yourself",
  description:
    "Learn how to price freelance work based on value, not guesswork.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        How to Price Freelance Work
      </h1>

      <p className="mb-6 text-gray-700">
        Most freelancers underprice because they don’t calculate properly.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/freelance-rate" className="font-semibold text-blue-700">
          Calculate your rate →
        </Link>
      </div>
    </main>
  );
}