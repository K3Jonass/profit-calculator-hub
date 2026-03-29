import Link from "next/link";

export const metadata = {
  title: "How to Calculate Cost of Delay: A Simple Formula for Better Prioritization",
  description:
    "Learn how to calculate Cost of Delay using a simple formula, practical examples, and real business scenarios. Quantify urgency and prioritize work that protects revenue.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        How to Calculate Cost of Delay: A Simple Formula for Better Prioritization
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        To calculate Cost of Delay, estimate how much value your business loses
        per week if a project is not completed, then multiply that by the number
        of weeks the work is delayed. It is one of the fastest ways to bring
        financial logic into prioritization.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Most teams overcomplicate this. They wait for perfect models, detailed
        forecasts, or executive certainty. Meanwhile, decisions stay stuck.
        Cost of Delay is useful precisely because it lets you make strong
        decisions with imperfect but relevant numbers.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        The basic Cost of Delay formula
      </h2>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">
          Cost of Delay = Value lost per time period × delay duration
        </p>
      </div>

      <p className="mb-6 leading-8 text-gray-700">
        Most businesses use weeks as the time period because weekly planning
        matches how product, operations, and growth decisions usually move.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Step 1: estimate value lost per week
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Ask what measurable value is being blocked while this task remains
        unfinished. That may include:
      </p>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Additional sales that are not happening yet</li>
        <li>Revenue lost to churn or failed retention</li>
        <li>Margin lost through pricing or cost inefficiency</li>
        <li>Lead flow lost due to missing traffic or poor conversion</li>
        <li>Strategic advantage lost from missing a time-sensitive window</li>
      </ul>

      <h3 className="mb-4 mt-8 text-xl font-semibold">
        Example: ecommerce discount logic
      </h3>

      <p className="mb-6 leading-8 text-gray-700">
        A store believes fixing shipping threshold logic will improve conversion
        enough to add $700 per week in extra gross profit. That $700 becomes the
        weekly Cost of Delay.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Step 2: estimate the delay duration
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Next, estimate how long the task will be delayed if it is not prioritized
        now. Be honest. “We will get to it later” often means 4 to 12 weeks in
        real teams.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        If the same shipping fix is delayed by 6 weeks, the total Cost of Delay
        becomes:
      </p>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">$700 × 6 = $4,200</p>
      </div>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Step 3: compare projects using the same logic
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Cost of Delay becomes powerful when you compare multiple opportunities.
        Instead of debating importance in abstract terms, you ask which delay
        destroys more value.
      </p>

      <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-900">
            <tr>
              <th className="px-4 py-3 font-semibold">Project</th>
              <th className="px-4 py-3 font-semibold">Value Lost / Week</th>
              <th className="px-4 py-3 font-semibold">Delay</th>
              <th className="px-4 py-3 font-semibold">Cost of Delay</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700">
            <tr className="border-t">
              <td className="px-4 py-3">Pricing page rewrite</td>
              <td className="px-4 py-3">$500</td>
              <td className="px-4 py-3">4 weeks</td>
              <td className="px-4 py-3">$2,000</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3">Retention email flow</td>
              <td className="px-4 py-3">$900</td>
              <td className="px-4 py-3">4 weeks</td>
              <td className="px-4 py-3">$3,600</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3">New analytics dashboard</td>
              <td className="px-4 py-3">$150</td>
              <td className="px-4 py-3">4 weeks</td>
              <td className="px-4 py-3">$600</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-6 leading-8 text-gray-700">
        With that lens, the retention flow deserves priority before the
        dashboard, even if the dashboard feels more exciting.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Common mistakes when calculating delay cost
      </h2>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Using zero because the number is not exact</li>
        <li>Ignoring indirect value like churn reduction or time savings</li>
        <li>Assuming delay will only last one sprint</li>
        <li>Prioritizing effort alone instead of economics</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Use a calculator instead of rough mental math
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Once you start comparing several decisions at once, manual math gets
        messy. A calculator helps you standardize estimates and make faster
        calls.
      </p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">
          Quantify your next decision
        </h3>
        <p className="mb-4 leading-8 text-gray-700">
          Use the ProfitHub Cost of Delay Calculator to estimate value lost per
          week, compare opportunities, and prioritize work based on financial
          impact.
        </p>
        <Link
          href="/calculators/cost-of-delay"
          className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800"
        >
          Open Cost of Delay Calculator →
        </Link>
      </div>
    </main>
  );
}