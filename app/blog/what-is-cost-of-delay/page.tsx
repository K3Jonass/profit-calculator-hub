import Link from "next/link";

export const metadata = {
  title: "What Is Cost of Delay? The Hidden Revenue Loss Behind Slow Decisions",
  description:
    "Learn what Cost of Delay means, how to calculate it, and why slow product or business decisions quietly destroy revenue. Use our Cost of Delay Calculator to quantify urgency.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        What Is Cost of Delay? The Hidden Revenue Loss Behind Slow Decisions
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        Cost of Delay is the amount of money, growth, or strategic advantage you
        lose every week a decision, feature, launch, or project gets pushed
        back. In plain terms: delay has a price, and most teams never calculate
        it.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        A lot of businesses think delay is neutral. It is not. When a store
        postpones a pricing fix, when a SaaS founder delays onboarding
        improvements, or when an operator sits on a distribution move, the loss
        compounds quietly. Revenue that could have been captured never arrives.
        Customers that could have converted never do. Market timing slips.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Cost of Delay definition in business terms
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Cost of Delay measures the economic impact of waiting. It helps you
        answer one question with brutal clarity:{" "}
        <strong>what is it costing us to not do this now?</strong>
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        That cost can show up in different forms:
      </p>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Lost revenue from delayed launches</li>
        <li>Lost profit from inefficient pricing or fulfillment</li>
        <li>Higher churn because retention fixes were postponed</li>
        <li>Missed seasonal demand or trend windows</li>
        <li>Slower learning cycles that delay future decisions</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Why most teams prioritize the wrong work
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        Most prioritization systems are based on volume, opinions, internal
        politics, or who speaks with the most certainty in the room. That leads
        to work being ranked by noise instead of economics.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Cost of Delay changes the conversation. It forces prioritization to move
        from “this feels important” to “this is costing us $2,000 per week if we
        wait.”
      </p>

      <h3 className="mb-4 mt-8 text-xl font-semibold">
        Examples of delayed revenue in the real world
      </h3>

      <div className="mb-6 space-y-4 leading-8 text-gray-700">
        <p>
          An ecommerce store delays a bundle offer that would increase average
          order value by $5 across 400 monthly orders. That is roughly $2,000 in
          missed monthly upside.
        </p>
        <p>
          A SaaS product delays a churn reduction flow that could save 10 users
          per month at $49 MRR each. That is not just $490 in monthly revenue.
          It is also the downstream lifetime value attached to those retained
          users.
        </p>
        <p>
          A freelance operator delays raising pricing for new projects by 15%.
          Every week of hesitation locks in underpriced work and lower margins.
        </p>
      </div>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Simple Cost of Delay formula
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        At a practical level, a simple Cost of Delay formula is:
      </p>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">
          Cost of Delay = Estimated value lost per week × number of weeks delayed
        </p>
      </div>

      <p className="mb-6 leading-8 text-gray-700">
        You do not need perfect numbers to use this. You need a grounded
        estimate. Even directional math is more useful than treating delay as
        free.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        When to use Cost of Delay
      </h2>

      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Feature prioritization in SaaS</li>
        <li>Pricing changes for products or services</li>
        <li>Marketing campaigns tied to timing</li>
        <li>Operational fixes affecting conversion or margin</li>
        <li>Hiring decisions where delayed capacity slows revenue</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Use the calculator before you delay again
      </h2>

      <p className="mb-6 leading-8 text-gray-700">
        If a decision matters, quantify the cost of waiting before you push it
        to next week. Small delays look harmless until they stack into a quarter
        of lost opportunity.
      </p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">
          Calculate the price of waiting
        </h3>
        <p className="mb-4 leading-8 text-gray-700">
          Use the ProfitHub Cost of Delay Calculator to estimate how much money a
          delayed feature, launch, or decision is really costing your business.
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