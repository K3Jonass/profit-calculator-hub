import type { blogPosts } from "@/lib/blog-posts";

export type BlogPost = (typeof blogPosts)[number];

export const BLOG_HUB_CATEGORIES = [
  { key: "freelancing", label: "Freelancing" },
  { key: "dropshipping", label: "Dropshipping" },
  { key: "ecommerce", label: "Ecommerce" },
  { key: "ai", label: "AI" },
  { key: "earn-money", label: "Earn Money" },
  { key: "platforms", label: "Platforms" },
  { key: "affiliate-marketing", label: "Affiliate Marketing" },
  { key: "startup-ideas", label: "Startup Ideas" },
] as const;

export type BlogHubCategoryKey = (typeof BLOG_HUB_CATEGORIES)[number]["key"];

export const BLOG_BADGE_CLASSNAME =
  "mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200";

export const EMPTY_CATEGORY_COPY = "We’re publishing articles in this category soon.";

const UNCATEGORIZED_KEY = "uncategorized" as const;
export const UNCATEGORIZED_SECTION_LABEL = "Uncategorized";
export const UNCATEGORIZED_BADGE_CLASSNAME =
  "mb-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200";

const BLOG_HUB_CATEGORY_KEYS = new Set<BlogHubCategoryKey>(BLOG_HUB_CATEGORIES.map((category) => category.key));

type CategoryRule = {
  key: BlogHubCategoryKey;
  keywords: Array<{ term: string; weight: number }>;
  legacyCategories?: string[];
};

const CATEGORY_RULES: CategoryRule[] = [
  {
    key: "freelancing",
    legacyCategories: ["freelance", "contracts"],
    keywords: [
      { term: "freelance", weight: 8 },
      { term: "freelancer", weight: 8 },
      { term: "client", weight: 4 },
      { term: "invoice", weight: 6 },
      { term: "scope creep", weight: 6 },
      { term: "project-based", weight: 4 },
      { term: "agency", weight: 4 },
      { term: "testimonial", weight: 4 },
      { term: "onboarding", weight: 3 },
      { term: "contract", weight: 3 },
    ],
  },
  {
    key: "dropshipping",
    keywords: [
      { term: "dropshipping", weight: 22 },
      { term: "supplier", weight: 4 },
      { term: "product", weight: 2 },
      { term: "shipping", weight: 3 },
      { term: "fulfillment", weight: 3 },
    ],
  },
  {
    key: "ecommerce",
    legacyCategories: ["ecommerce"],
    keywords: [
      { term: "ecommerce", weight: 8 },
      { term: "shopify", weight: 8 },
      { term: "store", weight: 5 },
      { term: "retail", weight: 3 },
      { term: "order", weight: 2 },
      { term: "cogs", weight: 2 },
    ],
  },
  {
    key: "ai",
    keywords: [
      { term: " ai ", weight: 8 },
      { term: "artificial intelligence", weight: 10 },
      { term: "machine learning", weight: 7 },
      { term: "gpt", weight: 7 },
      { term: "llm", weight: 7 },
    ],
  },
  {
    key: "earn-money",
    keywords: [
      { term: "profit", weight: 6 },
      { term: "income", weight: 7 },
      { term: "cash flow", weight: 6 },
      { term: "pricing", weight: 4 },
      { term: "margin", weight: 4 },
      { term: "revenue", weight: 3 },
      { term: "paid", weight: 2 },
      { term: "money", weight: 3 },
    ],
  },
  {
    key: "platforms",
    legacyCategories: ["saas", "subscriptions"],
    keywords: [
      { term: "platform", weight: 6 },
      { term: "saas", weight: 9 },
      { term: "mrr", weight: 8 },
      { term: "subscription", weight: 7 },
      { term: "recurring", weight: 5 },
      { term: "churn", weight: 6 },
    ],
  },
  {
    key: "affiliate-marketing",
    legacyCategories: ["partnerships"],
    keywords: [
      { term: "affiliate", weight: 10 },
      { term: "commission", weight: 7 },
      { term: "referral", weight: 6 },
      { term: "revenue share", weight: 8 },
      { term: "profit share", weight: 7 },
      { term: "partner", weight: 3 },
    ],
  },
  {
    key: "startup-ideas",
    legacyCategories: ["business finance", "business decision"],
    keywords: [
      { term: "startup", weight: 8 },
      { term: "business model", weight: 7 },
      { term: "breakeven", weight: 8 },
      { term: "cost of delay", weight: 8 },
      { term: "validation", weight: 5 },
      { term: "launch", weight: 4 },
      { term: "prioritization", weight: 4 },
      { term: "idea", weight: 3 },
    ],
  },
];

export type CategorizedBlogPost = BlogPost & {
  hubCategory: BlogHubCategoryKey | typeof UNCATEGORIZED_KEY;
};

export type AmbiguousPost = {
  href: string;
  title: string;
  primaryCategory: BlogHubCategoryKey;
  runnerUpCategory: BlogHubCategoryKey;
  primaryScore: number;
  runnerUpScore: number;
};

function isBlogHubCategoryKey(value: string): value is BlogHubCategoryKey {
  return BLOG_HUB_CATEGORY_KEYS.has(value as BlogHubCategoryKey);
}

function scorePostForCategory(post: BlogPost, rule: CategoryRule) {
  const normalizedCategory = post.category.toLowerCase();
  const searchable = `${post.title} ${post.description} ${post.href} ${post.category}`.toLowerCase();
  let score = 0;

  if (rule.legacyCategories?.includes(normalizedCategory)) {
    score += 12;
  }

  for (const keyword of rule.keywords) {
    if (searchable.includes(keyword.term)) {
      score += keyword.weight;
    }
  }

  return score;
}

function choosePrimaryCategory(post: BlogPost) {
  if (post.primaryCategory && isBlogHubCategoryKey(post.primaryCategory)) {
    return { category: post.primaryCategory, ambiguous: null };
  }

  const scored = CATEGORY_RULES.map((rule) => ({
    key: rule.key,
    score: scorePostForCategory(post, rule),
  })).sort((a, b) => b.score - a.score);

  const [winner, runnerUp] = scored;

  if (!winner || winner.score <= 0) {
    return { category: UNCATEGORIZED_KEY, ambiguous: null };
  }

  const ambiguous =
    runnerUp && runnerUp.score > 0 && winner.score - runnerUp.score <= 2
      ? {
          href: post.href,
          title: post.title,
          primaryCategory: winner.key,
          runnerUpCategory: runnerUp.key,
          primaryScore: winner.score,
          runnerUpScore: runnerUp.score,
        }
      : null;

  return { category: winner.key, ambiguous };
}

export function categorizeBlogPosts(posts: BlogPost[]) {
  const sections = new Map<BlogHubCategoryKey | typeof UNCATEGORIZED_KEY, CategorizedBlogPost[]>();
  const ambiguousPosts: AmbiguousPost[] = [];

  for (const category of BLOG_HUB_CATEGORIES) {
    sections.set(category.key, []);
  }
  sections.set(UNCATEGORIZED_KEY, []);

  for (const post of posts) {
    const { category, ambiguous } = choosePrimaryCategory(post);
    sections.get(category)?.push({ ...post, hubCategory: category });
    if (ambiguous) {
      ambiguousPosts.push(ambiguous);
    }
  }

  return { sections, ambiguousPosts };
}
