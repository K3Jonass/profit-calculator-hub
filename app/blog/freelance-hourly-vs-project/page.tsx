import Link from "next/link";

export const metadata = {
  title: "Hourly vs Project Pricing: Which One Makes More Money?",
  description:
    "Compare hourly and project pricing to maximize freelance income.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Hourly vs Project Pricing
      </h1>

      <p className="mb-6 text-gray-700">
        Hourly limits income. Project pricing scales it.
      </p>

      <Link href="/calculators/freelance-rate" className="text-blue-700 font-semibold">
        Calculate your rate →
      </Link>
    </main>
  );
}