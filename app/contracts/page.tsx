import Link from "next/link";

const contractGenerators = [
  {
    title: "Revenue Share Contract Generator",
    description:
      "Generate a practical revenue share agreement for founders, operators, freelancers, and business partners.",
    href: "/contracts/revenue-share",
    badge: "Free",
  },
  {
    title: "Freelancer Contract Generator",
    description:
      "Generate a professional freelancer agreement for client work, project scope, payment terms, and deadlines.",
    href: "/contracts/freelancer",
    badge: "Available",
  },
  {
    title: "Invoice Generator",
    description:
      "Generate a simple, professional invoice template with billing details, due dates, and payment terms.",
    href: "/contracts/invoice",
    badge: "Available",
  },
  {
    title: "Welcome Document Generator",
    description:
      "Generate a polished client welcome document covering services, timelines, communication channels, and deliverables.",
    href: "/contracts/welcome-doc",
    badge: "Available",
  },
  {
    title: "More contract generators coming soon",
    description:
      "NDA, service agreement, partnership agreement, supplier agreement, and more will be added to the Deal Engine.",
    href: "#",
    badge: "Coming Soon",
    disabled: true,
  },
];

export default function ContractsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              ProfitHub Deal Engine
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Contract Generators
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Create practical business contract templates in minutes. Choose a
              contract type below and generate a ready-to-use document for your
              workflow.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              These templates are built for operators, freelancers, founders,
              and small businesses. They are not legal advice.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contractGenerators.map((item) => {
            const content = (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                    {item.badge}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6">
                  <span
                    className={`inline-flex rounded-xl px-4 py-2 text-sm font-semibold ${
                      item.disabled
                        ? "cursor-not-allowed bg-slate-100 text-slate-400"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    {item.disabled ? "Coming Soon" : "Open Generator"}
                  </span>
                </div>
              </div>
            );

            if (item.disabled) {
              return <div key={item.title}>{content}</div>;
            }

            return (
              <Link key={item.title} href={item.href}>
                {content}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}