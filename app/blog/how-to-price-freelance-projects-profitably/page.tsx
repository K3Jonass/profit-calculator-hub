import Link from "next/link";

export const metadata = {
  title: "How to Price Freelance Projects Profitably (Without Guessing)",
  description:
    "Learn how to price freelance projects based on profit, time, and value so you avoid underpricing and maximize income.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        How to Price Freelance Projects Profitably (Without Guessing)
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Most freelancers price based on fear, not math. They pick a number that
        feels acceptable instead of calculating what makes the project profitable.
      </p>

      <p className="mb-6 text-gray-700">
        Pricing should be engineered. Not guessed. If you don’t define your cost
        structure and desired profit, you will default to underpricing.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Start with your target profit
      </h2>

      <p className="mb-6 text-gray-700">
        Instead of asking “what should I charge?”, ask:
        how much profit do I want from this project?
      </p>

      <p className="mb-6 text-gray-700">
        Then work backward by estimating time, effort, and costs.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Price based on time reality, not ideal scenarios
      </h2>

      <p className="mb-6 text-gray-700">
        Always assume projects will take longer than expected. Add buffers.
        Account for revisions. Include communication overhead.
      </p>

      <p className="mb-6 text-gray-700">
        Underestimating time is the fastest way to destroy profit.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Build pricing tiers strategically
      </h2>

      <p className="mb-6 text-gray-700">
        Offer multiple packages with clear boundaries. This helps control scope
        and improves profit consistency.
      </p>

      <p className="mb-6 text-gray-700">
        The goal is not just to sell. It’s to sell profitably.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/freelance-project-profit" className="font-semibold text-blue-700">
          Calculate your project profit →
        </Link>
      </div>
    </main>
  );
}