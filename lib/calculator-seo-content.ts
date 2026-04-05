import type { FAQItem } from "@/components/seo/FAQSection";

export type CalculatorSeoContent = {
  title: string;
  slug: string;
  shortAnswer: string;
  resultsExplanation: string;
  howToUse: string[];
  formula: string;
  formulaExplanation: string;
  faq: FAQItem[];
  relatedCalculatorHrefs: string[];
  relatedArticleHrefs: string[];
};

export const calculatorSeoContent: Record<string, CalculatorSeoContent> = {
  "shopify-profit": {
    title: "Shopify Profit Calculator",
    slug: "shopify-profit",
    shortAnswer:
      "The Shopify Profit Calculator estimates your net profit and profit margin by subtracting product, shipping, ad, and platform costs from sales revenue.",
    resultsExplanation:
      "Your net profit shows what you keep after costs, total costs show where your money goes, and margin shows the percentage of revenue you keep as profit.",
    howToUse: [
      "Enter your total Shopify revenue for the period you want to analyze.",
      "Add product cost, shipping cost, ad spend, and platform fees.",
      "Review net profit and margin to decide pricing or ad budget changes.",
    ],
    formula: "Net Profit = Revenue − (Product Cost + Shipping + Ad Spend + Fees)",
    formulaExplanation:
      "This formula isolates true operating profit from gross sales so you can avoid scaling unprofitable campaigns.",
    faq: [
      { question: "What is a good Shopify profit margin?", answer: "Many stores target at least a 15% to 30% margin, but your ideal range depends on your product category and customer acquisition cost." },
      { question: "Should ad spend be included in Shopify profit?", answer: "Yes. Advertising is a direct cost of acquiring sales and should be included to measure true profitability." },
    ],
    relatedCalculatorHrefs: ["/calculators/dropshipping-profit", "/calculators/breakeven"],
    relatedArticleHrefs: ["/blog/how-to-calculate-shopify-profit", "/blog/shopify-profit-margin-explained"],
  },
  "dropshipping-profit": {
    title: "Dropshipping Profit Calculator",
    slug: "dropshipping-profit",
    shortAnswer:
      "The Dropshipping Profit Calculator shows how much profit you keep per period after product, shipping, transaction, and marketing costs.",
    resultsExplanation:
      "Use net profit to understand your take-home amount and margin percentage to benchmark pricing and ad efficiency.",
    howToUse: ["Enter your total sales revenue.", "Add supplier cost, shipping, marketing, and transaction fees.", "Use the margin result to validate your offer before scaling."],
    formula: "Profit Margin (%) = (Net Profit ÷ Revenue) × 100",
    formulaExplanation: "Margin percentage helps compare products and channels using one consistent profitability signal.",
    faq: [
      { question: "Is dropshipping still profitable?", answer: "Yes, but profitability depends on contribution margin, repeat purchase rates, and disciplined ad spend management." },
      { question: "What margin should dropshipping stores target?", answer: "A common target is 20%+ net margin after ad spend, though winning stores often optimize higher through upsells and retention." },
    ],
    relatedCalculatorHrefs: ["/calculators/shopify-profit", "/calculators/cost-of-delay"],
    relatedArticleHrefs: ["/blog/dropshipping-profit-margin", "/blog/is-dropshipping-profitable"],
  },
  "saas-mrr": {
    title: "SaaS MRR Calculator",
    slug: "saas-mrr",
    shortAnswer:
      "The SaaS MRR Calculator estimates monthly recurring revenue and annual recurring revenue based on active subscribers and plan pricing.",
    resultsExplanation:
      "MRR reflects predictable monthly income while ARR annualizes that baseline to help with targets, hiring, and runway planning.",
    howToUse: ["Enter your active customer count and average monthly plan value.", "Add expansion or contraction if relevant.", "Track changes monthly to monitor growth quality."],
    formula: "MRR = Active Customers × Average Revenue Per Account (ARPA)",
    formulaExplanation:
      "This baseline formula gives a clean recurring revenue signal for forecasting and prioritization.",
    faq: [
      { question: "What counts as MRR?", answer: "Only predictable, subscription-based recurring revenue should be counted in MRR." },
      { question: "What is the difference between MRR and ARR?", answer: "ARR is annual recurring revenue and is usually calculated as MRR multiplied by 12." },
    ],
    relatedCalculatorHrefs: ["/calculators/subscription-leak", "/calculators/cost-of-delay"],
    relatedArticleHrefs: ["/blog/what-is-mrr", "/blog/how-to-calculate-mrr"],
  },
  "freelance-rate": {
    title: "Freelance Rate Calculator",
    slug: "freelance-rate",
    shortAnswer:
      "The Freelance Rate Calculator helps you set an hourly rate that covers expenses, taxes, non-billable time, and your target income.",
    resultsExplanation:
      "Your rate output shows what you need to charge to hit income goals while accounting for the reality of utilization and overhead.",
    howToUse: ["Set your income target and annual business expenses.", "Estimate realistic billable hours, not total work hours.", "Use the calculated rate as your minimum sustainable baseline."],
    formula: "Target Hourly Rate = (Income Goal + Expenses + Taxes) ÷ Billable Hours",
    formulaExplanation:
      "Freelancers are often underpaid because they divide by total hours instead of true billable capacity.",
    faq: [
      { question: "How many billable hours should freelancers plan for?", answer: "Many freelancers plan around 20 to 30 billable hours per week after admin, sales, and revisions." },
      { question: "Should freelancers include taxes in their rate?", answer: "Yes. Taxes are a real cost and should be built into your pricing model." },
    ],
    relatedCalculatorHrefs: ["/calculators/freelance-project-profit", "/calculators/breakeven"],
    relatedArticleHrefs: ["/blog/how-to-price-freelance-work", "/blog/freelance-income-goals"],
  },
  breakeven: {
    title: "Breakeven Calculator",
    slug: "breakeven",
    shortAnswer:
      "The Breakeven Calculator tells you how many units or sales you need to cover fixed and variable costs before generating profit.",
    resultsExplanation:
      "Your breakeven output defines your minimum viable sales volume, making pricing, inventory, and ad planning more objective.",
    howToUse: ["Enter fixed monthly costs.", "Enter selling price and variable cost per unit.", "Use the breakeven units result to set realistic sales goals."],
    formula: "Breakeven Units = Fixed Costs ÷ (Price per Unit − Variable Cost per Unit)",
    formulaExplanation: "Contribution margin per unit determines how quickly each sale contributes toward covering fixed costs.",
    faq: [
      { question: "What does breakeven mean in business?", answer: "Breakeven is the point where total revenue equals total costs, so profit is zero." },
      { question: "Why is contribution margin important for breakeven?", answer: "Contribution margin shows how much each sale contributes to fixed costs, which drives your breakeven threshold." },
    ],
    relatedCalculatorHrefs: ["/calculators/shopify-profit", "/calculators/freelance-rate"],
    relatedArticleHrefs: ["/blog/what-is-breakeven-point", "/blog/how-to-calculate-breakeven-point"],
  },
  "freelance-project-profit": {
    title: "Freelance Project Profit Analyzer",
    slug: "freelance-project-profit",
    shortAnswer:
      "The Freelance Project Profit Analyzer estimates real project profit after labor, revisions, software, and delivery overhead.",
    resultsExplanation:
      "Results show whether the project is financially healthy before you commit, renegotiate scope, or adjust pricing.",
    howToUse: ["Enter quoted project revenue.", "Add estimated hours, hourly value, and extra project costs.", "Review expected profit and margin before sending your proposal."],
    formula: "Project Profit = Project Revenue − Total Project Costs",
    formulaExplanation: "Use total project costs that include both direct labor value and hidden execution overhead.",
    faq: [
      { question: "Why can high-revenue projects still be unprofitable?", answer: "Large projects often include hidden revision time and communication overhead that erodes margin." },
      { question: "Should I use my market rate to value project hours?", answer: "Yes, valuing your time at market rate helps prevent taking low-profit projects." },
    ],
    relatedCalculatorHrefs: ["/calculators/freelance-rate", "/calculators/decision-score"],
    relatedArticleHrefs: ["/blog/freelance-project-profit-explained", "/blog/how-to-price-freelance-projects-profitably"],
  },
  "subscription-leak": {
    title: "Subscription Leak Calculator",
    slug: "subscription-leak",
    shortAnswer:
      "The Subscription Leak Calculator estimates lost recurring revenue from churn, failed renewals, and retention breakdowns.",
    resultsExplanation:
      "Use the leak estimate to prioritize retention fixes and understand the growth impact of reducing churn.",
    howToUse: ["Enter active subscribers and average subscription value.", "Add churn or failed-payment assumptions.", "Use lost MRR results to prioritize onboarding and recovery systems."],
    formula: "Subscription Leak = Lost Subscribers × Average Subscription Value",
    formulaExplanation: "Leak quantifies hidden revenue erosion so you can compare retention initiatives against clear numbers.",
    faq: [
      { question: "What causes subscription revenue leakage?", answer: "Common causes include failed payments, voluntary churn, onboarding gaps, and unclear upgrade paths." },
      { question: "How often should I measure subscription leak?", answer: "Track monthly at minimum, ideally weekly for faster diagnosis and recovery." },
    ],
    relatedCalculatorHrefs: ["/calculators/saas-mrr", "/calculators/cost-of-delay"],
    relatedArticleHrefs: ["/blog/what-is-subscription-leak", "/blog/how-to-reduce-subscription-churn"],
  },
  "revenue-share": {
    title: "Revenue Share Calculator",
    slug: "revenue-share",
    shortAnswer:
      "The Revenue Share Calculator models partnership payout splits so both sides can evaluate deal fairness before signing.",
    resultsExplanation:
      "The split results reveal expected payout by percentage so partners can align contributions, upside, and risk.",
    howToUse: ["Enter total revenue for the deal period.", "Set proposed split percentages for each party.", "Compare payout outcomes to negotiate fair terms."],
    formula: "Partner Payout = Total Revenue × Revenue Share %",
    formulaExplanation: "A transparent payout formula reduces ambiguity and improves trust in partnership negotiations.",
    faq: [
      { question: "How do I know if a revenue share split is fair?", answer: "Fairness should reflect contribution, delivery risk, and who controls performance inputs." },
      { question: "Can revenue share work for agencies and operators?", answer: "Yes, if scope, payout windows, attribution, and reporting are clearly defined." },
    ],
    relatedCalculatorHrefs: ["/calculators/decision-score", "/calculators/freelance-project-profit"],
    relatedArticleHrefs: ["/blog/what-is-a-revenue-share-agreement", "/blog/how-to-calculate-revenue-share"],
  },
  "cost-of-delay": {
    title: "Cost of Delay Calculator",
    slug: "cost-of-delay",
    shortAnswer:
      "The Cost of Delay Calculator estimates how much revenue or value you lose when launches, projects, or priorities are delayed.",
    resultsExplanation:
      "The output turns delay into financial impact so teams can prioritize high-value work with more confidence.",
    howToUse: ["Estimate weekly revenue or value at stake.", "Enter expected delay duration.", "Use estimated loss to decide sequencing and urgency."],
    formula: "Cost of Delay = Value per Time Period × Delay Duration",
    formulaExplanation: "Turning delay into dollars helps teams prioritize by economic impact rather than opinion.",
    faq: [
      { question: "When should I use cost of delay?", answer: "Use it when deciding between features, launches, or client projects with different urgency and upside." },
      { question: "Is cost of delay only for product teams?", answer: "No. Ecommerce operators, agencies, and founders can all use it to prioritize revenue-impacting work." },
    ],
    relatedCalculatorHrefs: ["/calculators/decision-score", "/calculators/saas-mrr"],
    relatedArticleHrefs: ["/blog/what-is-cost-of-delay", "/blog/how-to-calculate-cost-of-delay"],
  },
  "decision-score": {
    title: "Business Decision Score Calculator",
    slug: "decision-score",
    shortAnswer:
      "The Business Decision Score Calculator helps you compare opportunities using weighted factors like profit potential, effort, and risk.",
    resultsExplanation:
      "Scores help rank options consistently so you can prioritize high-leverage work and avoid reactive decisions.",
    howToUse: ["Define options you are comparing.", "Score each option on weighted criteria.", "Prioritize the highest combined score and revisit assumptions monthly."],
    formula: "Decision Score = Σ (Criterion Weight × Criterion Score)",
    formulaExplanation: "A weighted score creates a repeatable framework for evaluating decisions with multiple trade-offs.",
    faq: [
      { question: "What criteria should I include in a decision score?", answer: "Use criteria like expected profit, time to impact, execution complexity, strategic fit, and downside risk." },
      { question: "How often should decision weights be updated?", answer: "Update when business priorities shift, such as cash constraints or new growth targets." },
    ],
    relatedCalculatorHrefs: ["/calculators/cost-of-delay", "/calculators/revenue-share"],
    relatedArticleHrefs: ["/blog/cost-of-delay-examples", "/blog/how-to-negotiate-revenue-share-deals"],
  },
};
