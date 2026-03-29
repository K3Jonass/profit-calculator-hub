import Link from "next/link";

export const metadata = {
  title: "How to Calculate Breakeven Point: Formula, Example, and Why It Matters",
  description:
    "Learn how to calculate your breakeven point using a simple formula and practical examples for products, services, and small businesses.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        How to Calculate Breakeven Point: Formula, Example, and Why It Matters
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        To calculate breakeven point, divide your fixed costs by your
        contribution margin per unit. The result tells you how many units you
        need to sell before your business stops losing money.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        This is not just accounting theory. It is operational intelligence. A
        business that does not know its breakeven point is making pricing and
        growth decisions without understanding its survival threshold.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        The formula
      </h2>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">
          Breakeven Point = Fixed Costs ÷ Contribution Margin Per Unit
        </p>
      </div>

      <p className="mb-6 leading-8 text-gray-700">
        Contribution margin per unit means:
      </p>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">
          Selling Price Per Unit - Variable Cost Per Unit
        </p>
      </div>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Example calculation
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Let’s say your business has:
      </p>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Fixed costs: $5,000</li>
        <li>Selling price per unit: $80</li>
        <li>Variable cost per unit: $30</li>
      </ul>

      <p className="mb-6 leading-8 text-gray-700">
        Contribution margin is $50. Now divide fixed costs by that number:
      </p>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">
          $5,000 ÷ $50 = 100 units
        </p>
      </div>

      <p className="mb-6 leading-8 text-gray-700">
        Your breakeven point is 100 units.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Why businesses miscalculate breakeven
      </h2>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>They forget small recurring fixed costs</li>
        <li>They use gross revenue instead of contribution margin</li>
        <li>They underestimate variable costs like shipping or fees</li>
        <li>They ignore discounts, returns, or fulfillment leakage</li>
      </ul>

      <p className="mb-6 leading-8 text-gray-700">
        A wrong breakeven estimate creates false confidence. That can lead to
        underpricing, weak forecasts, and poor cash planning.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Use breakeven before you set targets
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Breakeven should sit under your pricing model, your sales plan, and your
        growth projections. It is one of the fastest ways to stress-test whether
        your business model can support itself.
      </p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">
          Run the numbers properly
        </h3>
        <p className="mb-4 leading-8 text-gray-700">
          Use the ProfitHub Breakeven Calculator to estimate your break-even
          sales volume and see whether your pricing supports profitability.
        </p>
        <Link
          href="/calculators/breakeven"
          className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800"
        >
          Open Breakeven Calculator →
        </Link>
      </div>
    </main>
  );
}