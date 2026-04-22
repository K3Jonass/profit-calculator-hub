import type { AppLocale } from "@/lib/i18n/config";

const englishBlogPosts = [
  {
    title: "What Is a Breakeven Point? The Number Every Business Should Know",
    description:
      "Learn what a breakeven point is, how to calculate it, and why it matters for pricing, profitability, and business survival.",
    href: "/blog/what-is-breakeven-point",
    category: "Business Finance",
    primaryCategory: "startup-ideas",
  },
  {
    title: "How to Calculate Breakeven Point: Formula, Example, and Why It Matters",
    description:
      "Learn how to calculate your breakeven point using a simple formula and practical examples for products, services, and small businesses.",
    href: "/blog/how-to-calculate-breakeven-point",
    category: "Business Finance",
    primaryCategory: "startup-ideas",
  },
  {
    title: "Why Breakeven Analysis Matters: The Fastest Way to Test a Business Model",
    description:
      "Learn why breakeven analysis matters for pricing, planning, and profitability, and how it helps small businesses make smarter decisions.",
    href: "/blog/why-breakeven-analysis-matters",
    category: "Business Finance",
    primaryCategory: "startup-ideas",
  },
  {
    title: "What Is Cost of Delay? The Hidden Revenue Loss Behind Slow Decisions",
    description:
      "Learn what Cost of Delay means, how to calculate it, and why slow product or business decisions quietly destroy revenue.",
    href: "/blog/what-is-cost-of-delay",
    category: "Business Decision",
    primaryCategory: "startup-ideas",
  },
  {
    title: "Cost of Delay: What It Is and How It Silently Destroys Your Business Growth",
    description:
      "Learn what cost of delay is, how to estimate it, and why waiting quietly compounds lost revenue and momentum.",
    href: "/blog/cost-of-delay-explained",
    category: "Business Decision",
    primaryCategory: "startup-ideas",
  },
  {
    title: "How to Calculate Cost of Delay: A Simple Formula for Better Prioritization",
    description:
      "Learn how to calculate Cost of Delay using a simple formula, practical examples, and real business scenarios.",
    href: "/blog/how-to-calculate-cost-of-delay",
    category: "Business Decision",
    primaryCategory: "startup-ideas",
  },
  {
    title: "Cost of Delay Examples: How Ecommerce, SaaS, and Freelancers Lose Money by Waiting",
    description:
      "See real Cost of Delay examples across ecommerce, SaaS, and freelance work and learn how delayed action reduces revenue.",
    href: "/blog/cost-of-delay-examples",
    category: "Business Decision",
    primaryCategory: "startup-ideas",
  },
  {
    title: "What Is a Revenue Share Agreement? How to Structure Fair Profit Splits",
    description:
      "Learn what a revenue share agreement is, how revenue sharing works, and how to structure fair percentage splits.",
    href: "/blog/what-is-a-revenue-share-agreement",
    category: "Partnerships",
    primaryCategory: "affiliate-marketing",
  },
  {
    title: "How to Calculate Revenue Share: Formula, Examples, and Fair Split Logic",
    description:
      "Learn how to calculate revenue share with a simple formula, practical examples, and fair split logic for partnerships.",
    href: "/blog/how-to-calculate-revenue-share",
    category: "Partnerships",
    primaryCategory: "affiliate-marketing",
  },
  {
    title: "Revenue Share vs Profit Share: Which Partnership Model Makes More Sense?",
    description:
      "Compare revenue share vs profit share and learn which partnership model works best for creators, operators, and businesses.",
    href: "/blog/revenue-share-vs-profit-share",
    category: "Partnerships",
    primaryCategory: "affiliate-marketing",
  },
  {
    title: "What Is Subscription Leak? The Quiet Revenue Loss Most Businesses Ignore",
    description:
      "Learn what subscription leak is, how recurring revenue silently slips away, and why failed payments and weak retention hurt growth.",
    href: "/blog/what-is-subscription-leak",
    category: "Subscriptions",
    primaryCategory: "platforms",
  },
  {
    title: "How to Reduce Subscription Churn and Stop Recurring Revenue Leakage",
    description:
      "Learn how to reduce subscription churn with better onboarding, payment recovery, cancellation flows, and retention systems.",
    href: "/blog/how-to-reduce-subscription-churn",
    category: "Subscriptions",
    primaryCategory: "platforms",
  },
  {
    title: "Subscription Leak Calculator: How to Estimate Lost MRR from Churn and Retention Gaps",
    description:
      "Learn how a Subscription Leak Calculator helps estimate lost MRR from churn, failed payments, and retention gaps.",
    href: "/blog/subscription-leak-calculator-guide",
    category: "Subscriptions",
    primaryCategory: "platforms",
  },
  {
    title: "Shopify Profit Margin Explained: How to Know If Your Store Is Actually Making Money",
    description:
      "Learn how Shopify profit margins really work, how to calculate them, and how to know if your store is truly profitable.",
    href: "/blog/shopify-profit-margin-explained",
    category: "Ecommerce",
    primaryCategory: "ecommerce",
  },
  {
    title: "How to Calculate Shopify Profit: A Simple Formula That Actually Works",
    description:
      "Learn how to calculate Shopify profit using a simple formula and understand your real business performance.",
    href: "/blog/how-to-calculate-shopify-profit",
    category: "Ecommerce",
    primaryCategory: "ecommerce",
  },
  {
    title: "Why Your Shopify Store Is Not Profitable (Even If You're Making Sales)",
    description:
      "Discover why many Shopify stores generate revenue but fail to be profitable, and how to fix it.",
    href: "/blog/why-your-shopify-store-is-not-profitable",
    category: "Ecommerce",
    primaryCategory: "ecommerce",
  },
  {
    title: "Dropshipping Profit Margin: What You Actually Keep Per Sale",
    description:
      "Learn how dropshipping profit margins work, what costs to include, and how to know if your store is actually profitable.",
    href: "/blog/dropshipping-profit-margin",
    category: "Ecommerce",
    primaryCategory: "dropshipping",
  },
  {
    title: "Is Dropshipping Still Profitable in 2026?",
    description:
      "Discover if dropshipping is still profitable and what determines success in modern ecommerce.",
    href: "/blog/is-dropshipping-profitable",
    category: "Ecommerce",
    primaryCategory: "dropshipping",
  },
  {
    title: "Dropshipping Profit Per Product: How to Price for Real Margins",
    description:
      "Learn how to calculate profit per product in dropshipping and avoid underpricing your offers.",
    href: "/blog/dropshipping-profit-per-product",
    category: "Ecommerce",
    primaryCategory: "dropshipping",
  },
  {
    title: "What Is MRR? The Core Metric of Every SaaS Business",
    description:
      "Learn what MRR means, how it works, and why it’s the most important metric for SaaS growth.",
    href: "/blog/what-is-mrr",
    category: "SaaS",
    primaryCategory: "platforms",
  },
  {
    title: "How to Calculate MRR: Simple SaaS Formula Explained",
    description:
      "Learn how to calculate Monthly Recurring Revenue (MRR) with simple formulas and examples.",
    href: "/blog/how-to-calculate-mrr",
    category: "SaaS",
    primaryCategory: "platforms",
  },
  {
    title: "Why MRR Matters More Than Revenue in SaaS",
    description:
      "Understand why Monthly Recurring Revenue (MRR) is more important than total revenue for SaaS businesses.",
    href: "/blog/why-mrr-matters",
    category: "SaaS",
    primaryCategory: "platforms",
  },
  {
    title: "How to Price Freelance Work: Stop Underselling Yourself",
    description:
      "Learn how to price freelance work based on value, time, and income targets instead of guesswork.",
    href: "/blog/how-to-price-freelance-work",
    category: "Freelance",
    primaryCategory: "freelancing",
  },
  {
    title: "Hourly vs Project Pricing: Which One Makes More Money?",
    description:
      "Compare hourly and project pricing to understand which model helps freelancers earn more.",
    href: "/blog/freelance-hourly-vs-project",
    category: "Freelance",
    primaryCategory: "freelancing",
  },
  {
    title: "How Much Should You Charge to Hit Your Income Goals?",
    description:
      "Learn how to reverse-engineer your freelance rate based on your target monthly or yearly income.",
    href: "/blog/freelance-income-goals",
    category: "Freelance",
    primaryCategory: "freelancing",
  },
  {
    title: "Freelance Project Profit Explained: Why Revenue Is Not Enough",
    description:
      "Learn how to calculate freelance project profit, track real margins, and avoid working on projects that look good but lose money.",
    href: "/blog/freelance-project-profit-explained",
    category: "Freelance",
    primaryCategory: "freelancing",
  },
  {
    title: "How to Price Freelance Projects Profitably (Without Guessing)",
    description:
      "Learn how to price freelance projects based on profit, time, and value so you avoid underpricing and maximize income.",
    href: "/blog/how-to-price-freelance-projects-profitably",
    category: "Freelance",
    primaryCategory: "freelancing",
  },
  {
    title: "Freelance Project Profit Mistakes That Quietly Kill Your Income",
    description:
      "Avoid the most common freelance pricing and profitability mistakes that reduce your income over time.",
    href: "/blog/freelance-project-profit-mistakes",
    category: "Freelance",
    primaryCategory: "freelancing",
  },
  {
    title: "Invoice Generator for Freelancers: Build a Payment System That Gets You Paid on Time",
    description:
      "Learn how freelancers can use an invoice generator to standardize billing, protect cash flow, and reduce late payments with practical operating systems.",
    href: "/blog/invoice-generator-for-freelancers",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "How to Write an Invoice That Gets Paid Fast (Without Chasing Clients)",
    description:
      "A practical guide to writing invoices that are clear, defensible, and optimized for faster client payments.",
    href: "/blog/how-to-write-invoice-that-gets-paid-fast",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Invoice Workflow for Small Business Cash Flow: From Delivery to Collection",
    description:
      "Design an invoice workflow that protects small business cash flow with clear approvals, due dates, and escalation rules.",
    href: "/blog/invoice-workflow-for-small-business-cash-flow",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Client Welcome Doc That Prevents Scope Creep Before It Starts",
    description:
      "Use a client welcome document to lock expectations, communication rules, and delivery boundaries before project execution begins.",
    href: "/blog/client-welcome-doc-that-prevents-scope-creep",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Onboarding Welcome Document Checklist for Agencies and Freelancers",
    description:
      "A complete onboarding welcome document checklist to reduce confusion, speed execution, and improve client retention.",
    href: "/blog/onboarding-welcome-document-checklist",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "How to Automate Client Onboarding with Welcome Docs and Light SOPs",
    description:
      "Turn client onboarding into a repeatable system using welcome docs, approvals, and lightweight operating procedures.",
    href: "/blog/automate-client-onboarding-with-welcome-docs",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Client Access Request Template: Get Logins Fast Without Creating Security Risk",
    description:
      "A practical client access request process for agencies and operators who need speed without compromising security.",
    href: "/blog/client-access-request-template-security",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "How to Request Client Access Without Delays, Rework, or Awkward Follow-Ups",
    description:
      "Learn a repeatable framework for requesting client access to ad accounts, analytics, and CMS tools without bottlenecks.",
    href: "/blog/how-to-request-client-access-without-delays",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Client Access Handoff Process for Agencies: Start Fast and Exit Clean",
    description:
      "Build a client access handoff process that accelerates onboarding and protects both sides when the engagement ends.",
    href: "/blog/client-access-handoff-process-for-agencies",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "How to Ask for Testimonials That Convert into Qualified Leads",
    description:
      "A proven testimonial request workflow for freelancers and agencies that want social proof that actually sells.",
    href: "/blog/how-to-ask-for-testimonials-that-convert",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Testimonial Request System After Project Delivery: Timing, Friction, and Follow-Through",
    description:
      "Design a post-delivery testimonial request system that increases response rates and captures credible proof.",
    href: "/blog/testimonial-request-system-after-project-delivery",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Automate Feedback Requests for a Service Business Without Sounding Robotic",
    description:
      "Set up automated feedback and testimonial requests that keep a human tone while scaling client proof collection.",
    href: "/blog/automate-feedback-requests-for-service-business",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Revenue Share Contract Terms That Protect Both Sides in Real Deals",
    description:
      "The essential revenue share contract terms to define economics, reporting, payment timing, and exit conditions.",
    href: "/blog/revenue-share-contract-terms-that-protect-both-sides",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "How to Negotiate Revenue Share Deals Without Killing the Partnership",
    description:
      "A negotiation playbook for revenue share deals that balances upside, risk, and operational ownership.",
    href: "/blog/how-to-negotiate-revenue-share-deals",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Revenue Share Contract Red Flags: Clauses That Quietly Destroy Good Partnerships",
    description:
      "Spot the most dangerous red flags in revenue share contracts before signing and protect long-term upside.",
    href: "/blog/revenue-share-contract-red-flags",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Freelancer Contract Clauses You Should Never Skip If You Want Predictable Profit",
    description:
      "The core freelancer contract clauses that protect scope, payment timing, intellectual property, and margins.",
    href: "/blog/freelancer-contract-clauses-you-should-never-skip",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Freelance Contract Template for Project-Based Work: A Practical Operating Version",
    description:
      "Use a project-based freelance contract template that keeps delivery clear, revisions controlled, and payments enforceable.",
    href: "/blog/freelance-contract-template-for-project-based-work",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
  {
    title: "Freelancer Contract Negotiation Guide: Protect Margin Without Losing Great Clients",
    description:
      "A negotiation framework freelancers can use to improve contract terms while preserving trust and deal velocity.",
    href: "/blog/freelancer-contract-negotiation-guide",
    category: "Contracts",
    primaryCategory: "freelancing",
  },
];

type PostTranslation = Pick<(typeof englishBlogPosts)[number], "title" | "description" | "category">;

const frenchBlogPostTranslations: Record<string, PostTranslation> = {
  "/blog/what-is-breakeven-point": {
    title: "Point mort : le chiffre que toute entreprise doit absolument maîtriser",
    description:
      "Comprenez le point mort, son calcul concret et son impact direct sur les prix, la rentabilité et la survie d’une entreprise.",
    category: "Finance d’entreprise",
  },
  "/blog/how-to-calculate-breakeven-point": {
    title: "Comment calculer le point mort : formule simple, exemple concret et décisions clés",
    description:
      "Apprenez à calculer votre point mort avec une formule claire et des exemples pratiques pour produit, service et activité freelance.",
    category: "Finance d’entreprise",
  },
  "/blog/why-breakeven-analysis-matters": {
    title: "Pourquoi l’analyse du point mort est le test le plus rapide d’un modèle économique",
    description:
      "Découvrez pourquoi l’analyse du point mort aide les entreprises, SaaS et freelances à valider prix, coûts et profit avant d’investir.",
    category: "Finance d’entreprise",
  },
  "/blog/what-is-cost-of-delay": {
    title: "Qu’est-ce que le coût du retard ? La perte de revenus invisible derrière les décisions lentes",
    description:
      "Comprenez le coût du retard, son calcul pratique et son impact direct sur la croissance, la marge et la capacité d’exécution.",
    category: "Décision d’entreprise",
  },
  "/blog/cost-of-delay-explained": {
    title: "Coût du retard : pourquoi l’attente détruit silencieusement votre croissance",
    description:
      "Découvrez pourquoi retarder un lancement, une correction ou une décision crée une perte cumulée de revenus, de marge et d’apprentissage.",
    category: "Décision d’entreprise",
  },
  "/blog/how-to-calculate-cost-of-delay": {
    title: "Comment calculer le coût du retard : méthode simple pour mieux prioriser",
    description:
      "Apprenez à estimer rapidement le coût du retard avec une formule claire, des hypothèses réalistes et des cas concrets.",
    category: "Décision d’entreprise",
  },
  "/blog/cost-of-delay-examples": {
    title: "Exemples de coût du retard : e-commerce, SaaS et freelance en situation réelle",
    description:
      "Analysez des exemples concrets de coût du retard pour comprendre combien coûte une semaine de décision différée.",
    category: "Décision d’entreprise",
  },
  "/blog/what-is-a-revenue-share-agreement": {
    title: "Qu’est-ce qu’un accord de partage de revenus ? Guide pratique pour structurer un modèle équitable",
    description:
      "Comprenez le fonctionnement d’un accord de partage de revenus, les clauses clés et la logique d’un split soutenable pour les deux parties.",
    category: "Partenariats",
  },
  "/blog/how-to-calculate-revenue-share": {
    title: "Comment calculer un partage de revenus : formule, scénarios et logique d’équité",
    description:
      "Apprenez à calculer un partage de revenus avec une méthode claire, des hypothèses vérifiables et des scénarios de négociation réalistes.",
    category: "Partenariats",
  },
  "/blog/revenue-share-vs-profit-share": {
    title: "Partage de revenus vs partage de profits : quel modèle choisir selon votre réalité opérationnelle ?",
    description:
      "Comparez partage de revenus et partage de profits pour choisir une structure compatible avec la transparence, le risque et la vitesse d’exécution.",
    category: "Partenariats",
  },
  "/blog/what-is-subscription-leak": {
    title: "Qu’est-ce qu’une fuite d’abonnement ? La perte récurrente que beaucoup d’entreprises ignorent",
    description:
      "Identifiez les causes de fuite d’abonnement : churn, paiements échoués, annulations évitables et frictions d’onboarding.",
    category: "Abonnements",
  },
  "/blog/how-to-reduce-subscription-churn": {
    title: "Comment réduire le churn d’abonnement et protéger votre MRR durablement",
    description:
      "Mettez en place un système anti-churn avec onboarding, recouvrement des paiements, signaux de risque et boucles de rétention.",
    category: "Abonnements",
  },
  "/blog/subscription-leak-calculator-guide": {
    title: "Calculateur de fuite d’abonnement : estimer le MRR perdu et prioriser les actions de rétention",
    description:
      "Utilisez un calculateur de fuite d’abonnement pour estimer le MRR perdu, comparer les leviers et planifier un plan d’action.",
    category: "Abonnements",
  },
  "/blog/shopify-profit-margin-explained": {
    title: "Marge Shopify expliquée : comment savoir si votre boutique gagne vraiment de l’argent",
    description:
      "Comprenez comment calculer et piloter la marge Shopify réelle pour éviter de scaler un chiffre d’affaires non rentable.",
    category: "E-commerce",
  },
  "/blog/how-to-calculate-shopify-profit": {
    title: "Comment calculer le profit Shopify : méthode complète pour piloter la rentabilité",
    description:
      "Apprenez à calculer le profit Shopify avec une méthode opérationnelle qui intègre coûts réels, canaux et retours.",
    category: "E-commerce",
  },
  "/blog/why-your-shopify-store-is-not-profitable": {
    title: "Pourquoi votre boutique Shopify n’est pas rentable (même avec des ventes)",
    description:
      "Identifiez les causes structurelles d’une boutique Shopify non rentable et les leviers concrets pour restaurer la marge.",
    category: "E-commerce",
  },
  "/blog/dropshipping-profit-margin": {
    title: "Marge dropshipping : ce que vous gardez réellement par vente",
    description:
      "Maîtrisez la marge dropshipping réelle en intégrant coûts acquisition, retours, logistique et support pour décider quoi scaler.",
    category: "E-commerce",
  },
  "/blog/is-dropshipping-profitable": {
    title: "Le dropshipping est-il encore rentable en 2026 ?",
    description:
      "Analysez dans quelles conditions le dropshipping reste rentable et comment éviter les erreurs qui détruisent la marge.",
    category: "E-commerce",
  },
  "/blog/dropshipping-profit-per-product": {
    title: "Profit dropshipping par produit : comment fixer un prix vraiment rentable",
    description:
      "Calculez le profit net par produit en dropshipping pour filtrer les offres fragiles et scaler les références rentables.",
    category: "E-commerce",
  },
  "/blog/what-is-mrr": {
    title: "Qu’est-ce que le MRR ? Le KPI central de tout SaaS",
    description:
      "Comprenez le MRR, ses composants et son rôle stratégique pour piloter une croissance SaaS durable et prévisible.",
    category: "SaaS",
  },
  "/blog/how-to-calculate-mrr": {
    title: "Comment calculer le MRR : formule SaaS simple et fiable",
    description:
      "Apprenez à calculer un MRR comparable dans le temps avec une méthode claire incluant expansion, contraction et churn.",
    category: "SaaS",
  },
  "/blog/why-mrr-matters": {
    title: "Pourquoi le MRR compte plus que le revenu total en SaaS",
    description:
      "Découvrez pourquoi le MRR est l’indicateur le plus utile pour arbitrer acquisition, produit, rétention et croissance SaaS.",
    category: "SaaS",
  },
  "/blog/how-to-price-freelance-work": {
    title: "Comment fixer ses tarifs freelance sans se sous-vendre",
    description:
      "Construisez un pricing freelance rentable avec une méthode basée sur revenu cible, valeur client et protection de marge.",
    category: "Freelance",
  },
  "/blog/freelance-hourly-vs-project": {
    title: "Tarif horaire vs forfait projet : quel modèle freelance est le plus rentable ?",
    description:
      "Comparez facturation horaire et forfait projet pour choisir le modèle qui protège le mieux votre marge freelance.",
    category: "Freelance",
  },
  "/blog/freelance-income-goals": {
    title: "Objectifs de revenu freelance : méthode concrète pour les atteindre",
    description:
      "Transformez votre objectif de revenu freelance en plan d’action chiffré avec pricing, volume client et pilotage mensuel.",
    category: "Freelance",
  },
  "/blog/freelance-project-profit-explained": {
    title: "Rentabilité d’un projet freelance : ce que le chiffre d’affaires ne montre pas",
    description:
      "Apprenez à mesurer la rentabilité réelle d’un projet freelance en intégrant coûts cachés, temps réel et marge nette.",
    category: "Freelance",
  },
  "/blog/how-to-price-freelance-projects-profitably": {
    title: "Comment tarifer ses projets freelance de façon rentable",
    description:
      "Construisez une tarification projet rentable avec cadrage, logique de marge, options d’offre et garde-fous contractuels.",
    category: "Freelance",
  },
  "/blog/freelance-project-profit-mistakes": {
    title: "Erreurs de rentabilité freelance : les pièges qui réduisent votre revenu",
    description:
      "Identifiez les erreurs fréquentes qui détruisent la marge des projets freelance et mettez en place des correctifs concrets.",
    category: "Freelance",
  },
  "/blog/invoice-generator-for-freelancers": {
    title: "Générateur de facture freelance : sécuriser les paiements et la trésorerie",
    description:
      "Utilisez un générateur de facture pour standardiser vos envois, réduire les retards et protéger votre cash-flow freelance.",
    category: "Contrats",
  },
  "/blog/how-to-write-invoice-that-gets-paid-fast": {
    title: "Comment rédiger une facture payée rapidement",
    description:
      "Rédigez des factures claires et défendables pour accélérer les paiements sans multiplier les relances improductives.",
    category: "Contrats",
  },
  "/blog/invoice-workflow-for-small-business-cash-flow": {
    title: "Workflow de facturation : protéger la trésorerie d’une petite entreprise",
    description:
      "Mettez en place un workflow de facturation fiable pour raccourcir les délais d’encaissement et stabiliser votre cash-flow.",
    category: "Contrats",
  },
  "/blog/client-welcome-doc-that-prevents-scope-creep": {
    title: "Document d’accueil client : prévenir le scope creep dès le départ",
    description:
      "Créez un welcome doc client qui fixe attentes, périmètre et règles de validation pour protéger la marge projet.",
    category: "Contrats",
  },
  "/blog/onboarding-welcome-document-checklist": {
    title: "Checklist de document d’accueil onboarding pour agences et freelances",
    description:
      "Suivez une checklist d’onboarding client complète pour démarrer plus vite, éviter les blocages et améliorer la rétention.",
    category: "Contrats",
  },
  "/blog/automate-client-onboarding-with-welcome-docs": {
    title: "Automatiser l’onboarding client avec des documents d’accueil efficaces",
    description:
      "Mettez en place un onboarding client automatisé avec welcome docs et processus légers pour réduire les frictions et accélérer le démarrage.",
    category: "Contrats",
  },
  "/blog/client-access-request-template-security": {
    title: "Template de demande d’accès client : aller vite sans compromettre la sécurité",
    description:
      "Utilisez un template de demande d’accès client pour accélérer l’onboarding tout en respectant les bonnes pratiques de sécurité.",
    category: "Contrats",
  },
  "/blog/how-to-request-client-access-without-delays": {
    title: "Comment demander des accès client sans retards ni relances inutiles",
    description:
      "Adoptez une méthode claire pour demander des accès client rapidement et éviter les blocages de démarrage projet.",
    category: "Contrats",
  },
  "/blog/client-access-handoff-process-for-agencies": {
    title: "Processus de handoff des accès client en agence : démarrer vite, sortir proprement",
    description:
      "Mettez en place un handoff d’accès client fiable pour sécuriser l’onboarding et l’offboarding sans friction.",
    category: "Contrats",
  },
  "/blog/how-to-ask-for-testimonials-that-convert": {
    title: "Comment demander des témoignages clients qui convertissent vraiment",
    description:
      "Collectez des témoignages spécifiques et crédibles avec une méthode qui augmente leur impact commercial.",
    category: "Contrats",
  },
  "/blog/testimonial-request-system-after-project-delivery": {
    title: "Système de demande de témoignage après livraison : timing, friction, suivi",
    description:
      "Construisez un système post-livraison pour obtenir plus de témoignages utiles et exploitables commercialement.",
    category: "Contrats",
  },
  "/blog/automate-feedback-requests-for-service-business": {
    title: "Automatiser les demandes de feedback dans une activité de service",
    description:
      "Automatisez vos demandes de feedback client sans perdre le ton humain et transformez les retours en actif commercial.",
    category: "Contrats",
  },
  "/blog/revenue-share-contract-terms-that-protect-both-sides": {
    title: "Clauses de contrat de partage de revenus qui protègent les deux parties",
    description:
      "Définissez les clauses essentielles d’un contrat de partage de revenus pour sécuriser paiements, reporting et sortie.",
    category: "Contrats",
  },
  "/blog/how-to-negotiate-revenue-share-deals": {
    title: "Comment négocier un deal de partage de revenus sans casser le partenariat",
    description:
      "Négociez vos accords de partage de revenus avec une méthode qui équilibre risque, transparence et exécution.",
    category: "Contrats",
  },
  "/blog/revenue-share-contract-red-flags": {
    title: "Red flags d’un contrat de partage de revenus : clauses à surveiller",
    description:
      "Repérez les clauses à risque dans un contrat de partage de revenus avant signature pour protéger votre marge.",
    category: "Contrats",
  },
  "/blog/freelancer-contract-clauses-you-should-never-skip": {
    title: "Clauses de contrat freelance à ne jamais omettre",
    description:
      "Sécurisez vos missions freelance avec les clauses essentielles qui protègent périmètre, paiement, IP et marge.",
    category: "Contrats",
  },
  "/blog/freelance-contract-template-for-project-based-work": {
    title: "Template de contrat freelance pour missions au forfait projet",
    description:
      "Utilisez un template de contrat freelance opérationnel pour cadrer livrables, révisions, paiement et responsabilité.",
    category: "Contrats",
  },
  "/blog/freelancer-contract-negotiation-guide": {
    title: "Guide de négociation de contrat freelance : protéger la marge sans bloquer le deal",
    description:
      "Négociez vos contrats freelance avec une approche structurée pour sécuriser les clauses clés et préserver la relation client.",
    category: "Contrats",
  },
};

const arabicBlogPostTranslations: Record<string, PostTranslation> = {
  "/blog/what-is-breakeven-point": {
    title: "ما هي نقطة التعادل؟ الرقم الذي يجب أن يعرفه كل صاحب مشروع",
    description:
      "تعرّف على معنى نقطة التعادل وكيفية حسابها ولماذا تُعد أساسًا لتسعير الخدمات والمنتجات وتحسين الربحية في الأعمال والشركات الناشئة.",
    category: "التمويل التجاري",
  },
  "/blog/how-to-calculate-breakeven-point": {
    title: "كيفية حساب نقطة التعادل: المعادلة، مثال عملي، ولماذا تهمك فعليًا",
    description:
      "دليل عملي لحساب نقطة التعادل خطوة بخطوة باستخدام معادلة واضحة وأمثلة واقعية لمشاريع SaaS والمتاجر والخدمات الحرة.",
    category: "التمويل التجاري",
  },
  "/blog/why-breakeven-analysis-matters": {
    title: "لماذا تحليل نقطة التعادل مهم؟ أسرع طريقة لاختبار نموذج الربح قبل التوسع",
    description:
      "اكتشف كيف يساعدك تحليل نقطة التعادل على اختبار التسعير والتكاليف وخطة النمو قبل استنزاف الميزانية أو التوسع غير المربح.",
    category: "التمويل التجاري",
  },
  "/blog/what-is-cost-of-delay": {
    title: "ما هي تكلفة التأخير؟ الخسارة الصامتة التي تبتلع الإيرادات عند بطء القرار",
    description:
      "تعرّف على معنى تكلفة التأخير وكيفية قياسها عمليًا ولماذا تؤدي القرارات البطيئة إلى نزيف ربح غير مرئي في الشركات وفرق SaaS.",
    category: "قرارات الأعمال",
  },
  "/blog/cost-of-delay-explained": {
    title: "شرح تكلفة التأخير: لماذا يدمّر الانتظار نمو مشروعك بصمت",
    description:
      "فهم عملي لمفهوم Cost of Delay مع أمثلة تطبيقية تساعدك على ترتيب الأولويات بسرعة وحماية الإيراد من خسائر التأجيل المتراكمة.",
    category: "قرارات الأعمال",
  },
  "/blog/how-to-calculate-cost-of-delay": {
    title: "كيفية حساب تكلفة التأخير: معادلة عملية لترتيب الأولويات حسب الأثر المالي",
    description:
      "دليل خطوة بخطوة لحساب Cost of Delay باستخدام بيانات حقيقية حتى تتخذ قرارات أسرع مبنية على الربحية بدل التخمين.",
    category: "قرارات الأعمال",
  },
  "/blog/cost-of-delay-examples": {
    title: "أمثلة تكلفة التأخير: كيف تخسر التجارة الإلكترونية وSaaS والمستقلون المال عند الانتظار",
    description:
      "أمثلة واقعية توضح أثر Cost of Delay على المبيعات والربحية في eCommerce وSaaS والعمل الحر مع طريقة تحويل التأجيل إلى أرقام.",
    category: "قرارات الأعمال",
  },
  "/blog/what-is-a-revenue-share-agreement": {
    title: "ما هي اتفاقية تقاسم الإيرادات؟ وكيف تبني نموذجًا عادلًا للشراكة",
    description:
      "دليل عملي لفهم Revenue Share Agreement وصياغة نسبة عادلة مع تعريفات واضحة للدفع والتقارير وحماية حقوق الشركاء.",
    category: "الشراكات",
  },
  "/blog/how-to-calculate-revenue-share": {
    title: "كيفية حساب تقاسم الإيرادات: المعادلة، السيناريوهات، ومنطق النسبة العادلة",
    description:
      "تعلّم حساب Revenue Share بدقة مع أمثلة Gross وNet وكيفية بناء كشف شهري واضح يمنع النزاعات بين الشركاء.",
    category: "الشراكات",
  },
  "/blog/revenue-share-vs-profit-share": {
    title: "Revenue Share vs Profit Share: أي نموذج شراكة أنسب لربح مستدام؟",
    description:
      "مقارنة عملية بين Revenue Share وProfit Share لفهم الفروق في الشفافية والمخاطر والتدفق النقدي قبل توقيع الشراكة.",
    category: "الشراكات",
  },
  "/blog/what-is-subscription-leak": {
    title: "ما هو تسرب الاشتراكات؟ الخسارة المتكررة التي لا تراها معظم شركات SaaS",
    description:
      "شرح واضح لمعنى Subscription Leak وأبرز مصادر نزيف MRR مثل churn والمدفوعات الفاشلة وضعف الاحتفاظ.",
    category: "الاشتراكات",
  },
  "/blog/how-to-reduce-subscription-churn": {
    title: "كيف تقلل churn في الاشتراكات وتحمي MRR من التسرب المتكرر",
    description:
      "استراتيجيات عملية لتقليل Subscription Churn عبر تحسين onboarding واستعادة المدفوعات وتفعيل تدخلات احتفاظ استباقية.",
    category: "الاشتراكات",
  },
  "/blog/subscription-leak-calculator-guide": {
    title: "دليل حاسبة تسرب الاشتراكات: تقدير MRR المفقود واتخاذ قرارات احتفاظ أدق",
    description:
      "تعلّم استخدام Subscription Leak Calculator لتحويل churn إلى أرقام مالية واضحة وتحديد أولويات الإصلاح الأعلى أثرًا.",
    category: "الاشتراكات",
  },
  "/blog/shopify-profit-margin-explained": {
    title: "شرح هامش الربح في Shopify: كيف تتأكد أن متجرك يربح فعليًا",
    description:
      "تعلّم كيفية قياس Shopify Profit Margin بدقة وفهم التكاليف الحقيقية التي تحدد ربحية متجرك قبل التوسع.",
    category: "التجارة الإلكترونية",
  },
  "/blog/how-to-calculate-shopify-profit": {
    title: "كيفية حساب ربح Shopify: معادلة عملية لقياس الأداء الحقيقي للمتجر",
    description:
      "دليل عملي لحساب Shopify Profit خطوة بخطوة مع تضمين الإعلانات والرسوم والمرتجعات للوصول إلى صافي ربح واقعي.",
    category: "التجارة الإلكترونية",
  },
  "/blog/why-your-shopify-store-is-not-profitable": {
    title: "لماذا متجر Shopify لديك غير مربح رغم وجود مبيعات؟",
    description:
      "تعرف على الأسباب الأكثر شيوعًا لانخفاض ربحية متاجر Shopify وكيف تعالجها بالأرقام قبل خسارة المزيد من الهامش.",
    category: "التجارة الإلكترونية",
  },
  "/blog/dropshipping-profit-margin": {
    title: "هامش الربح في Dropshipping: ما الذي يبقى لك فعليًا من كل طلب",
    description:
      "تعلّم حساب هامش الربح الحقيقي في Dropshipping بعد الإعلانات والمرتجعات والرسوم لاتخاذ قرارات توسع أكثر أمانًا.",
    category: "التجارة الإلكترونية",
  },
  "/blog/is-dropshipping-profitable": {
    title: "هل Dropshipping ما زال مربحًا في 2026؟",
    description:
      "إطار عملي لتقييم ربحية Dropshipping بالأرقام: CAC وAOV والمرتجعات والهامش الصافي قبل قرار التوسع.",
    category: "التجارة الإلكترونية",
  },
  "/blog/dropshipping-profit-per-product": {
    title: "ربح Dropshipping لكل منتج: كيف تسعّر لهامش حقيقي",
    description:
      "احسب الربح الصافي لكل منتج في Dropshipping لتعرف ما يجب توسيعه وما يجب إيقافه قبل خسارة الهامش.",
    category: "التجارة الإلكترونية",
  },
  "/blog/what-is-mrr": {
    title: "ما هو MRR؟ المؤشر الأساسي لنمو شركات SaaS",
    description:
      "تعرّف على معنى MRR ومكوناته وكيف تستخدمه لقياس النمو المتكرر واتخاذ قرارات تشغيلية أدق في SaaS.",
    category: "برمجيات SaaS",
  },
  "/blog/how-to-calculate-mrr": {
    title: "كيفية حساب MRR: معادلة SaaS بسيطة ودقيقة",
    description:
      "دليل عملي لحساب MRR خطوة بخطوة مع معالجة الخطط السنوية والخصومات والتوسع والانكماش وchurn.",
    category: "برمجيات SaaS",
  },
  "/blog/why-mrr-matters": {
    title: "لماذا MRR أهم من الإيراد الإجمالي في SaaS",
    description:
      "افهم لماذا يعتبر MRR المؤشر الأكثر فائدة للتخطيط والنمو والاحتفاظ في شركات SaaS.",
    category: "برمجيات SaaS",
  },
  "/blog/how-to-price-freelance-work": {
    title: "كيفية تسعير العمل الحر دون أن تبيع نفسك بأقل من قيمتك",
    description:
      "منهج عملي لتسعير خدماتك كمستقل بناءً على الدخل المستهدف والقيمة المقدمة وحماية هامش الربح.",
    category: "العمل الحر",
  },
  "/blog/freelance-hourly-vs-project": {
    title: "التسعير بالساعة أم بالمشروع: أي نموذج أكثر ربحية للمستقل؟",
    description:
      "مقارنة عملية بين التسعير بالساعة والتسعير بالمشروع لاختيار النموذج الأنسب لهامش ربحك ونمو دخلك.",
    category: "العمل الحر",
  },
  "/blog/freelance-income-goals": {
    title: "أهداف دخل المستقل: طريقة عملية لتحويل الهدف المالي إلى خطة",
    description:
      "تعلم تحويل هدف دخلك كمستقل إلى خطة تنفيذية بالأرقام عبر التسعير وإدارة الوقت ومزيج الخدمات.",
    category: "العمل الحر",
  },
  "/blog/freelance-project-profit-explained": {
    title: "ربحية المشروع الحر: لماذا لا يكفي النظر إلى الإيراد فقط",
    description:
      "دليل واضح لقياس ربحية مشاريع العمل الحر عبر التكاليف الخفية والعائد الفعلي لكل ساعة.",
    category: "العمل الحر",
  },
  "/blog/how-to-price-freelance-projects-profitably": {
    title: "كيف تسعّر مشاريع العمل الحر بطريقة مربحة",
    description:
      "منهج تسعير عملي للمشاريع الحرة يوازن بين الربح والنطاق والوقت ويمنع تآكل الهامش.",
    category: "العمل الحر",
  },
  "/blog/freelance-project-profit-mistakes": {
    title: "أخطاء ربحية مشاريع العمل الحر التي تستنزف دخلك بصمت",
    description:
      "أبرز الأخطاء التشغيلية والتسعيرية التي تقلل ربح المشاريع الحرة وكيف تعالجها مبكرًا.",
    category: "العمل الحر",
  },
  "/blog/invoice-generator-for-freelancers": {
    title: "مولد فواتير للمستقلين: نظام دفع يحسّن التحصيل والتدفق النقدي",
    description:
      "استخدم مولد الفواتير لبناء عملية فوترة واضحة تقلل التأخير وتحمي Cash Flow في العمل الحر.",
    category: "الفوترة والعقود",
  },
  "/blog/how-to-write-invoice-that-gets-paid-fast": {
    title: "كيف تكتب فاتورة تُدفع بسرعة دون مطاردة العملاء",
    description:
      "خطوات عملية لكتابة فاتورة واضحة ودقيقة تُسرّع الدفع وتقلل الجدل والمتابعة اليدوية.",
    category: "الفوترة والعقود",
  },
  "/blog/invoice-workflow-for-small-business-cash-flow": {
    title: "سير عمل الفوترة للتدفق النقدي في الأعمال الصغيرة",
    description:
      "ابنِ Invoice Workflow منظمًا من الإصدار إلى التحصيل لحماية السيولة وتقليل تأخر المدفوعات.",
    category: "الفوترة والعقود",
  },
  "/blog/client-welcome-doc-that-prevents-scope-creep": {
    title: "وثيقة ترحيب العميل التي تمنع Scope Creep قبل أن يبدأ",
    description:
      "تعرف على بناء Client Welcome Doc يحدد الحدود ويمنع التوسع غير المدفوع ويحمي هامش المشروع.",
    category: "الفوترة والعقود",
  },
  "/blog/onboarding-welcome-document-checklist": {
    title: "قائمة فحص وثيقة الترحيب في Onboarding للوكالات والمستقلين",
    description:
      "Checklist onboarding عملية تقلل الالتباس في بداية المشروع وتسرع التنفيذ وتحسن تجربة العميل.",
    category: "الفوترة والعقود",
  },

  "/blog/automate-client-onboarding-with-welcome-docs": {
    title: "أتمتة Onboarding العملاء باستخدام Welcome Docs وSOPs خفيفة",
    description:
      "حوّل onboarding العملاء إلى نظام متكرر يقلل الاحتكاك ويُسرّع بدء التنفيذ.",
    category: "العقود والعمليات",
  },
  "/blog/client-access-request-template-security": {
    title: "نموذج طلب صلاحيات العميل: سرعة التنفيذ بدون مخاطر أمنية",
    description:
      "إطار عملي لطلبات صلاحيات العميل يوازن بين السرعة وضبط الأمان.",
    category: "العقود والعمليات",
  },
  "/blog/how-to-request-client-access-without-delays": {
    title: "كيف تطلب صلاحيات العميل دون تأخير أو إعادة عمل",
    description:
      "طريقة واضحة لإدارة طلبات الوصول وتقليل التعطيل في بداية المشاريع.",
    category: "العقود والعمليات",
  },
  "/blog/client-access-handoff-process-for-agencies": {
    title: "آلية تسليم صلاحيات العميل للوكالات: بدء سريع وخروج نظيف",
    description:
      "صمّم عملية handoff صلاحيات تدعم onboarding وoffboarding بدون فوضى.",
    category: "العقود والعمليات",
  },
  "/blog/how-to-ask-for-testimonials-that-convert": {
    title: "كيف تطلب شهادات عملاء تتحول إلى Leads مؤهلة",
    description:
      "Workflow منظم لطلب testimonials عالية التأثير تدعم المبيعات.",
    category: "العقود والعمليات",
  },
  "/blog/testimonial-request-system-after-project-delivery": {
    title: "نظام طلب الشهادات بعد التسليم: التوقيت والمتابعة والجودة",
    description:
      "ابنِ نظامًا متكررًا لطلب الشهادات بعد التسليم يرفع الاستجابة والجودة.",
    category: "العقود والعمليات",
  },
  "/blog/automate-feedback-requests-for-service-business": {
    title: "أتمتة طلب Feedback لخدماتك دون أن تبدو رسائلك روبوتية",
    description:
      "نفّذ أتمتة feedback بنبرة إنسانية تدعم المصداقية والنمو.",
    category: "العقود والعمليات",
  },
  "/blog/revenue-share-contract-terms-that-protect-both-sides": {
    title: "بنود عقد Revenue Share التي تحمي الطرفين فعليًا",
    description:
      "بنود أساسية لعقود revenue share تضبط الحقوق والتقارير والدفع.",
    category: "العقود والعمليات",
  },
  "/blog/how-to-negotiate-revenue-share-deals": {
    title: "كيف تتفاوض على صفقات Revenue Share دون قتل الشراكة",
    description:
      "منهج تفاوض عملي يحافظ على العلاقة ويحمي مصالح الصفقة.",
    category: "العقود والعمليات",
  },
  "/blog/revenue-share-contract-red-flags": {
    title: "إشارات الخطر في عقود Revenue Share قبل التوقيع",
    description:
      "تعرّف على البنود عالية المخاطر في عقود revenue share قبل الالتزام.",
    category: "العقود والعمليات",
  },
  "/blog/freelancer-contract-clauses-you-should-never-skip": {
    title: "بنود عقد freelancer التي لا يجب تجاهلها لحماية الربح",
    description:
      "بنود تعاقدية تحمي النطاق والمدفوعات والملكية والهامش في العمل الحر.",
    category: "العقود والعمليات",
  },
  "/blog/freelance-contract-template-for-project-based-work": {
    title: "قالب عقد freelance لمشاريع الفورفيه: نسخة تشغيلية عملية",
    description:
      "استخدم قالب عقد عملي يضبط التسليم والمراجعات والدفع بوضوح.",
    category: "العقود والعمليات",
  },
  "/blog/freelancer-contract-negotiation-guide": {
    title: "دليل تفاوض عقود freelancer: حماية الهامش دون خسارة العملاء",
    description:
      "إطار تفاوض تعاقدي يوازن بين حماية الربح وسرعة إغلاق الاتفاق.",
    category: "العقود والعمليات",
  },
};

export function getBlogPosts(locale: AppLocale) {
  if (locale === "fr") {
    return englishBlogPosts.map((post) => {
      const translation = frenchBlogPostTranslations[post.href];
      return translation ? { ...post, ...translation } : post;
    });
  }

  if (locale === "ar") {
    return englishBlogPosts.map((post) => {
      const translation = arabicBlogPostTranslations[post.href];
      return translation ? { ...post, ...translation } : post;
    });
  }

  return englishBlogPosts;
}

export const blogPosts = englishBlogPosts;
