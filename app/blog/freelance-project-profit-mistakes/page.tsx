import Link from "next/link";

export const metadata = {
  title: "Freelance Project Profit Mistakes That Quietly Kill Your Income",
  description:
    "Avoid the most common freelance pricing and profitability mistakes that reduce your income over time.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Freelance Project Profit Mistakes That Quietly Kill Your Income
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Most freelancers don’t lose money in one big mistake. They lose it slowly,
        through small decisions that compound.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Common mistakes
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>Underpricing projects</li>
        <li>Accepting unlimited revisions</li>
        <li>Ignoring time tracking</li>
        <li>Working with bad clients</li>
      </ul>

      <p className="mb-6 text-gray-700">
        Each one reduces your effective income.
      </p>

      <div className="mt-10 p-6 bg-blue-50 border rounded-2xl">
        <Link href="/calculators/freelance-project-profit" className="text-blue-700 font-semibold">
          Check your profit →
        </Link>
      </div>
    </main>
  );
}