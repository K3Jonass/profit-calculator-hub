"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { calculators } from "@/lib/calculators-data";

const featuredPosts = [
  {
    title: "What Is Cost of Delay? The Hidden Revenue Loss Behind Slow Decisions",
    description:
      "Learn how delayed launches and slow decisions quietly destroy revenue and momentum.",
    href: "/blog/what-is-cost-of-delay",
    category: "Business Decision",
  },
  {
    title: "What Is Subscription Leak? The Quiet Revenue Loss Most Businesses Ignore",
    description:
      "See how failed payments, weak retention, and churn silently drain recurring revenue.",
    href: "/blog/what-is-subscription-leak",
    category: "Subscriptions",
  },
  {
    title: "What Is a Breakeven Point? The Number Every Business Should Know",
    description:
      "Understand the number that defines when your business stops losing money.",
    href: "/blog/what-is-breakeven-point",
    category: "Business Finance",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
};

export default function HomePageClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ProfitHub",
    url: "https://profithub.cloud",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://profithub.cloud/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ProfitHub Calculators",
    itemListElement: calculators.slice(0, 10).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `https://profithub.cloud${item.href}`,
    })),
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-14 text-white shadow-sm md:px-10 md:py-20">
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            x: [0, -12, 0],
            y: [0, 8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 h-64 w-64 rounded-full bg-slate-400/10 blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.45, 0.2],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.18),transparent_28%)]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-slate-200 backdrop-blur"
            >
              Free tools for operators, founders, freelancers, and ecommerce sellers
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <motion.div
                whileHover={{ rotate: -4, scale: 1.05 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold text-slate-950 shadow-sm"
              >
                PH
              </motion.div>

              <div>
                <p className="text-lg font-bold tracking-tight">ProfitHub</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  profithub.cloud
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl md:leading-[1.02]"
            >
              Free Profit Calculators for Smarter Business Decisions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.7 }}
              className="mt-6 max-w-3xl text-lg leading-8 text-slate-300"
            >
              ProfitHub helps you calculate margins, MRR, breakeven points,
              subscription leakage, project profitability, revenue splits, and
              cost of delay with fast tools built for real business decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/calculators/shopify-profit"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Start with a Calculator
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#calculators"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore All Tools
                </a>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Read the Blog
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerParent}
              initial="hidden"
              animate="show"
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {[
                { label: "Focus", value: "Profitability" },
                { label: "Built for", value: "Ecommerce, SaaS, Freelance" },
                { label: "Cost", value: "Free to use" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={staggerItem}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.7, ease: "easeOut" }}
            className="grid gap-4"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-300">
                  Operator Snapshot
                </p>
                <motion.span
                  animate={{ opacity: [0.65, 1, 0.65] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300"
                >
                  Live Thinking
                </motion.span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    label: "Margin Pressure",
                    value: "Visible",
                    text: "Understand if revenue is translating into real profit.",
                  },
                  {
                    label: "Revenue Leakage",
                    value: "Traceable",
                    text: "Spot churn, pricing gaps, and delayed decisions faster.",
                  },
                  {
                    label: "Breakeven Clarity",
                    value: "Actionable",
                    text: "Know the minimum sales volume your model needs.",
                  },
                  {
                    label: "Pricing Logic",
                    value: "Sharper",
                    text: "Make decisions with numbers instead of assumptions.",
                  },
                ].map((card, index) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28 + index * 0.08, duration: 0.45 }}
                    whileHover={{ y: -4, scale: 1.015 }}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                  >
                    <p className="text-sm text-slate-400">{card.label}</p>
                    <p className="mt-2 text-2xl font-bold text-white">{card.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{card.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-sm font-medium text-slate-300">
                Built for decisions that affect money
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Profit Margins",
                  "MRR",
                  "Breakeven",
                  "Revenue Share",
                  "Subscription Leak",
                  "Cost of Delay",
                  "Freelance Pricing",
                ].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32 + index * 0.04, duration: 0.35 }}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        {...fadeUp}
        className="mt-16 grid gap-6 md:grid-cols-3"
      >
        {[
          {
            label: "What ProfitHub does",
            title: "Turn numbers into decisions",
            text: "ProfitHub is not just a calculator site. It is a practical decision layer for pricing, margins, retention, launch timing, and business tradeoffs.",
          },
          {
            label: "Why it matters",
            title: "Revenue can hide weak economics",
            text: "Founders often scale traffic or sales before understanding margin quality, revenue leakage, or breakeven pressure. That creates fake momentum.",
          },
          {
            label: "How to use it",
            title: "Pick a calculator. Stress-test a decision.",
            text: "Whether you run a Shopify store, a SaaS product, or freelance projects, start with the calculator tied to your most important financial question.",
          },
        ].map((card) => (
          <motion.div
            key={card.title}
            whileHover={{ y: -6 }}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">{card.label}</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              {card.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        id="calculators"
        {...fadeUp}
        className="mt-16"
      >
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Explore ProfitHub Calculators
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Free calculators built for ecommerce profitability, SaaS metrics,
              freelance pricing, partnership math, and smarter business calls.
            </p>
          </div>

          <Link
            href="/blog"
            className="text-sm font-semibold text-slate-900 transition hover:text-slate-700"
          >
            Explore guides and insights →
          </Link>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {calculators.map((item) => (
            <motion.div key={item.href} variants={staggerItem}>
              <Link
                href={item.href}
                className="group block rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full"
                >
                  <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    Free Tool
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mb-5 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <span className="text-sm font-semibold text-slate-900">
                    Open calculator →
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="mt-16 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm md:p-10"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-600"
          >
            Built for real-world business use
          </motion.div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Why use ProfitHub for your online business?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Understanding your numbers is the difference between scaling a
            profitable business and growing a machine that leaks money.
            ProfitHub helps ecommerce sellers, SaaS founders, and freelancers
            calculate margins, costs, pricing, recurring revenue, and breakeven
            pressure faster.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Whether you are launching products, buying traffic, setting prices,
            or evaluating partnership terms, these calculators help you move
            with more clarity and less financial blind spot.
          </p>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="mt-16">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Featured Insights
            </h2>
            <p className="mt-2 text-slate-600">
              Read practical articles connected to ProfitHub calculators and
              real business decisions.
            </p>
          </div>

          <Link
            href="/blog"
            className="text-sm font-semibold text-slate-900 transition hover:text-slate-700"
          >
            Visit the full blog →
          </Link>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {featuredPosts.map((post) => (
            <motion.div key={post.href} variants={staggerItem}>
              <Link
                href={post.href}
                className="group block rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <motion.div whileHover={{ y: -6 }}>
                  <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {post.category}
                  </div>

                  <h3 className="text-2xl font-semibold leading-snug text-slate-900">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {post.description}
                  </p>

                  <span className="mt-5 inline-flex text-sm font-semibold text-slate-900">
                    Read article →
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-900 px-6 py-12 text-white shadow-sm md:px-10"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Final CTA
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Start with one decision that affects money
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Open a calculator, run the numbers, and turn a vague business
              question into something measurable.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/calculators/breakeven"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Calculate Breakeven
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/calculators/saas-mrr"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Calculate MRR
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}