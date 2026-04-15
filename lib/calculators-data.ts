import type { AppLocale } from "@/lib/i18n/config";

const englishCalculators = [
  {
    title: "Shopify Profit Calculator",
    href: "/calculators/shopify-profit",
    description: "Estimate net profit, total costs, and margin for your Shopify store.",
  },
  {
    title: "Dropshipping Profit Calculator",
    href: "/calculators/dropshipping-profit",
    description: "Check if your product is profitable before you scale your ads.",
  },
  {
    title: "SaaS MRR Calculator",
    href: "/calculators/saas-mrr",
    description: "Calculate monthly recurring revenue and annual recurring revenue.",
  },
  {
    title: "Freelance Rate Calculator",
    href: "/calculators/freelance-rate",
    description: "Set a better hourly rate based on your income target and expenses.",
  },
  {
    title: "Breakeven Calculator",
    href: "/calculators/breakeven",
    description: "Find out how many sales you need to cover your costs.",
  },
  {
  title: "Freelance Project Profit Analyzer",
  description:
    "Check whether a freelance project is actually worth taking after fees, revisions, and hidden costs.",
  href: "/calculators/freelance-project-profit",
},
{
  title: "Subscription Leak Calculator",
  description:
    "Calculate how much your subscriptions cost per month and per year, and spot where your money is leaking.",
  href: "/calculators/subscription-leak",
},
{
  title: "Revenue Share Deal Calculator",
  description:
    "Check whether a revenue share partnership is fair based on split percentage, workload, and expected earnings.",
  href: "/calculators/revenue-share",
},
{
  title: "Cost of Delay Calculator",
  description:
    "Estimate how much money you lose by delaying a launch, project, business idea, or important decision.",
  href: "/calculators/cost-of-delay",
},
{
  title: "Business Decision Score Calculator",
  description:
    "Score an idea, offer, or opportunity based on profit, time, cost, risk, and confidence.",
  href: "/calculators/decision-score",
},
];

export function getCalculators(locale: AppLocale) {
  if (locale === "en") {
    return englishCalculators;
  }

  return englishCalculators.map((item) => ({
    ...item,
    title: `[TODO ${locale}] ${item.title}`,
    description: `[TODO ${locale}] ${item.description}`,
  }));
}

export const calculators = englishCalculators;
