import Link from "next/link";

export const metadata = {
  title: "What Is a Breakeven Point? The Number Every Business Should Know",
  description:
    "Learn what a breakeven point is, how to calculate it, and why it matters for pricing, profitability, and business survival.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        What Is a Breakeven Point? The Number Every Business Should Know
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        A breakeven point is the point where total revenue equals total costs.
        You are not making a profit yet, but you are no longer losing money.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        This is one of the most important numbers in business because it tells
        you how much you need to sell before your business becomes economically
        stable. Without it, pricing decisions, sales targets, and budgeting are
        based on hope instead of math.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Why breakeven matters
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Many founders focus on revenue, traffic, or unit sales without knowing
        how much volume is required just to cover costs. Breakeven analysis
        forces clarity. It answers a simple question: how much do we need to
        sell to stop operating at a loss?
      </p>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>It helps set realistic sales targets</li>
        <li>It shows whether your pricing model is viable</li>
        <li>It reveals how much fixed cost your business can carry</li>
        <li>It reduces bad decisions based on vanity numbers</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        What goes into breakeven calculation
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        To calculate breakeven, you need three pieces:
      </p>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Fixed costs like rent, salaries, software, or subscriptions</li>
        <li>Selling price per unit</li>
        <li>Variable cost per unit such as production or fulfillment</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        The breakeven formula
      </h2>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">
          Breakeven Units = Fixed Costs ÷ (Selling Price - Variable Cost Per Unit)
        </p>
      </div>

      <p className="mb-6 leading-8 text-gray-700">
        That formula tells you how many units you must sell before profit begins.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        A simple example
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        If your monthly fixed costs are $3,000, your product sells for $50, and
        your variable cost per unit is $20, your contribution margin is $30 per
        unit.
      </p>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">
          $3,000 ÷ $30 = 100 units
        </p>
      </div>

      <p className="mb-6 leading-8 text-gray-700">
        You need to sell 100 units to break even. Unit 101 is where real profit
        starts.
      </p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">
          Calculate your breakeven point
        </h3>
        <p className="mb-4 leading-8 text-gray-700">
          Use the ProfitHub Breakeven Calculator to estimate how many units or
          how much revenue you need to cover your costs.
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