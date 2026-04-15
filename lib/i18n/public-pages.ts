import type { AppLocale } from "@/lib/i18n/config";

type Meta = { title: string; description: string };

type PublicPageMessages = {
  home: {
    meta: Meta;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    explore: string;
    shopify: string;
    guides: string;
    popular: string;
    latest: string;
    useCases: string;
  };
  simpleMeta: {
    calculators: Meta;
    blog: Meta;
    about: Meta;
    contact: Meta;
    contracts: Meta;
    privacy: Meta;
    terms: Meta;
  };
};

export const publicPageMessages: Record<AppLocale, PublicPageMessages> = {
  en: {
    home: {
      meta: { title: "Free Profit Calculators for Online Businesses | ProfitHub", description: "ProfitHub.cloud offers free online calculators for ecommerce, SaaS, freelance work, subscriptions, revenue sharing, breakeven analysis, and smarter business decisions." },
      heroBadge: "ProfitHub Calculator Platform",
      heroTitle: "Free business calculators built like an AI-era operating console",
      heroDescription: "Use ProfitHub to calculate profit margins, MRR, breakeven targets, subscription leakage, revenue share payouts, and decision impact with practical tools designed for operators.",
      explore: "Explore all business calculators",
      shopify: "Start with Shopify Profit",
      guides: "Read practical guides",
      popular: "Popular calculators",
      latest: "Latest blog guides",
      useCases: "Common use cases",
    },
    simpleMeta: {
      calculators: { title: "Business Calculators Hub | ProfitHub", description: "Browse ProfitHub business calculators for ecommerce, SaaS, pricing, freelancing, breakeven planning, and decision scoring." },
      blog: { title: "ProfitHub Blog", description: "Read practical articles about business calculators, pricing, profitability, ecommerce, SaaS, freelance work, subscriptions, and smarter money decisions." },
      about: { title: "About ProfitHub", description: "Learn what ProfitHub is, who it's for, and how it helps freelancers, founders, and ecommerce sellers make smarter financial decisions." },
      contact: { title: "Contact ProfitHub", description: "Contact ProfitHub for calculator support, tool ideas, partnerships, and bug reports." },
      contracts: { title: "Free Contract Generators for Freelancers and Teams | ProfitHub", description: "Generate practical contract templates for revenue share deals, freelance work, invoices, welcome docs, and client access workflows." },
      privacy: { title: "Privacy Policy | ProfitHub", description: "Read the ProfitHub Privacy Policy covering analytics, cookies, and privacy questions." },
      terms: { title: "Terms of Service | ProfitHub", description: "Read ProfitHub Terms of Service for calculator usage, contracts/templates disclaimers, and legal limitations." },
    },
  },
  ar: {
    home: { meta: { title: "حاسبات أرباح مجانية للأعمال عبر الإنترنت | ProfitHub", description: "يوفر ProfitHub أدوات مجانية لحساب الأرباح للتجارة الإلكترونية وSaaS والعمل الحر واتخاذ قرارات الأعمال." }, heroBadge: "منصة حاسبات ProfitHub", heroTitle: "حاسبات أعمال مجانية مصممة لعصر الذكاء الاصطناعي", heroDescription: "استخدم ProfitHub لحساب هامش الربح وMRR ونقطة التعادل وتسرب الاشتراك وتقسيم الإيرادات وتأثير القرارات.", explore: "استكشف كل الحاسبات", shopify: "ابدأ بحاسبة Shopify", guides: "اقرأ الأدلة العملية", popular: "الحاسبات الأكثر استخدامًا", latest: "أحدث أدلة المدونة", useCases: "حالات استخدام شائعة" },
    simpleMeta: {
      calculators: { title: "مركز حاسبات الأعمال | ProfitHub", description: "تصفح حاسبات ProfitHub للأرباح والتسعير ونقطة التعادل وقرارات الأعمال." },
      blog: { title: "مدونة ProfitHub", description: "مقالات عملية حول التسعير والربحية والتجارة الإلكترونية وSaaS." },
      about: { title: "حول ProfitHub", description: "تعرف على ProfitHub ولمن صُمم وكيف يساعد على اتخاذ قرارات مالية أذكى." },
      contact: { title: "تواصل مع ProfitHub", description: "تواصل مع فريق ProfitHub للدعم والاقتراحات والشراكات." },
      contracts: { title: "مولدات عقود مجانية للمستقلين والفرق | ProfitHub", description: "أنشئ قوالب عقود عملية لمشاركة الإيرادات والعمل الحر والفواتير." },
      privacy: { title: "سياسة الخصوصية | ProfitHub", description: "اطّلع على سياسة الخصوصية الخاصة بـ ProfitHub." },
      terms: { title: "شروط الخدمة | ProfitHub", description: "اقرأ شروط خدمة ProfitHub واستخدام الأدوات والمحتوى." },
    },
  },
  fr: {
    home: { meta: { title: "Calculateurs de profit gratuits pour entreprises en ligne | ProfitHub", description: "ProfitHub propose des calculateurs gratuits pour e-commerce, SaaS, freelances et décisions business." }, heroBadge: "Plateforme de calculateurs ProfitHub", heroTitle: "Des calculateurs business gratuits pensés pour l’ère IA", heroDescription: "Calculez marges, MRR, seuil de rentabilité, pertes d’abonnement, partage de revenus et impact des décisions.", explore: "Explorer tous les calculateurs", shopify: "Commencer par Shopify Profit", guides: "Lire les guides pratiques", popular: "Calculateurs populaires", latest: "Derniers guides du blog", useCases: "Cas d’usage fréquents" },
    simpleMeta: {
      calculators: { title: "Hub des calculateurs business | ProfitHub", description: "Parcourez les calculateurs ProfitHub pour e-commerce, SaaS, pricing et décisions." },
      blog: { title: "Blog ProfitHub", description: "Articles pratiques sur la rentabilité, le pricing, le SaaS et l’e-commerce." },
      about: { title: "À propos de ProfitHub", description: "Découvrez ProfitHub, son public cible et sa valeur pour la prise de décision financière." },
      contact: { title: "Contacter ProfitHub", description: "Contactez ProfitHub pour support, idées d’outils et partenariats." },
      contracts: { title: "Générateurs de contrats gratuits | ProfitHub", description: "Générez des modèles de contrats pour freelance, factures et partage de revenus." },
      privacy: { title: "Politique de confidentialité | ProfitHub", description: "Consultez la politique de confidentialité de ProfitHub." },
      terms: { title: "Conditions d’utilisation | ProfitHub", description: "Consultez les conditions d’utilisation de ProfitHub." },
    },
  },
  es: {
    home: { meta: { title: "Calculadoras de beneficio gratis para negocios online | ProfitHub", description: "ProfitHub ofrece calculadoras gratis para ecommerce, SaaS, freelancers y decisiones de negocio." }, heroBadge: "Plataforma de calculadoras ProfitHub", heroTitle: "Calculadoras de negocio gratis para la era de la IA", heroDescription: "Calcula márgenes, MRR, punto de equilibrio, fuga de suscripciones, reparto de ingresos e impacto de decisiones.", explore: "Explorar todas las calculadoras", shopify: "Empezar con Shopify Profit", guides: "Leer guías prácticas", popular: "Calculadoras populares", latest: "Últimas guías del blog", useCases: "Casos de uso comunes" },
    simpleMeta: {
      calculators: { title: "Hub de calculadoras de negocio | ProfitHub", description: "Explora calculadoras de ProfitHub para ecommerce, SaaS, precios y decisiones." },
      blog: { title: "Blog de ProfitHub", description: "Artículos prácticos sobre rentabilidad, precios, ecommerce y SaaS." },
      about: { title: "Acerca de ProfitHub", description: "Conoce qué es ProfitHub y cómo ayuda a tomar mejores decisiones financieras." },
      contact: { title: "Contacto ProfitHub", description: "Contacta con ProfitHub para soporte, ideas de herramientas y alianzas." },
      contracts: { title: "Generadores de contratos gratis | ProfitHub", description: "Genera plantillas de contratos para reparto de ingresos, freelance y facturación." },
      privacy: { title: "Política de privacidad | ProfitHub", description: "Lee la política de privacidad de ProfitHub." },
      terms: { title: "Términos del servicio | ProfitHub", description: "Lee los términos de servicio de ProfitHub." },
    },
  },
  ru: {
    home: { meta: { title: "Бесплатные калькуляторы прибыли для онлайн-бизнеса | ProfitHub", description: "ProfitHub предлагает бесплатные калькуляторы для e-commerce, SaaS, фриланса и бизнес-решений." }, heroBadge: "Платформа калькуляторов ProfitHub", heroTitle: "Бесплатные бизнес-калькуляторы для эпохи ИИ", heroDescription: "Считайте маржу, MRR, точку безубыточности, утечки подписки, revenue share и эффект решений.", explore: "Открыть все калькуляторы", shopify: "Начать с Shopify Profit", guides: "Читать практические гайды", popular: "Популярные калькуляторы", latest: "Последние статьи блога", useCases: "Частые сценарии" },
    simpleMeta: {
      calculators: { title: "Хаб бизнес-калькуляторов | ProfitHub", description: "Изучайте калькуляторы ProfitHub для e-commerce, SaaS, ценообразования и решений." },
      blog: { title: "Блог ProfitHub", description: "Практические статьи о прибыльности, ценах, SaaS и e-commerce." },
      about: { title: "О ProfitHub", description: "Узнайте, что такое ProfitHub и как он помогает принимать финансовые решения." },
      contact: { title: "Контакты ProfitHub", description: "Свяжитесь с ProfitHub по вопросам поддержки, идей и партнерства." },
      contracts: { title: "Бесплатные генераторы контрактов | ProfitHub", description: "Создавайте шаблоны контрактов для фриланса, счетов и revenue share." },
      privacy: { title: "Политика конфиденциальности | ProfitHub", description: "Ознакомьтесь с политикой конфиденциальности ProfitHub." },
      terms: { title: "Условия использования | ProfitHub", description: "Ознакомьтесь с условиями использования ProfitHub." },
    },
  },
};

export function getPublicPageMessages(locale: AppLocale) {
  return publicPageMessages[locale];
}
