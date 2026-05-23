import type { AppLocale } from "@/lib/i18n/config";

type Meta = { title: string; description: string };

type HomeSeoSection = {
  heading: string;
  body: string;
};

type HomeSeoContent = {
  title: string;
  sections: HomeSeoSection[];
  cta: string;
};

type PublicPageMessages = {
  home: {
    meta: Meta;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    explore: string;
    shopify: string;
    guides: string;
    categories: string;
    popular: string;
    latest: string;
    useCases: string;
    featuredTools: string;
    ctaSection: string;
    ctaSectionDescription: string;
    seo?: HomeSeoContent;
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
      meta: {
        title: "Profithub – Freelance Contract Generator, Invoice Generator & Proposal Builder",
        description:
          "Create freelance contracts, professional invoices, and client-ready proposals online with Profithub. Generate PDFs, manage client details, and build business documents faster.",
      },
      heroBadge: "Freelance Business Tools",
      heroTitle: "Create Freelance Contracts, Invoices, and Proposals in Minutes",
      heroDescription:
        "Profithub helps freelancers and agencies create contracts, invoices, and proposals online—plus free calculators for pricing, MRR, breakeven, and profitability.",
      explore: "Explore all business calculators",
      shopify: "Start with Shopify Profit",
      guides: "Read practical guides",
      categories: "Business calculators by category",
      popular: "Popular calculators",
      latest: "Latest blog guides",
      useCases: "Common use cases",
      featuredTools: "More tools to explore",
      ctaSection: "Turn insights into faster decisions",
      ctaSectionDescription:
        "Pick one calculator, run your numbers, then use linked guides to improve pricing, retention, and profitability decisions this week.",
      seo: {
        title: "Freelance business document tools",
        sections: [
          {
            heading: "Freelance Contract Generator",
            body: "Profithub helps freelancers, consultants, agencies, and service providers create professional contracts online. Define clear scope, payment terms, deadlines, and client details so every engagement starts with shared expectations—not last-minute confusion.",
          },
          {
            heading: "Online Invoice Generator",
            body: "Create clean, professional invoices without spreadsheets or manual formatting. Add services or line items, calculate totals automatically, and export a polished PDF you can send to clients as soon as work is complete.",
          },
          {
            heading: "Proposal Generator for Freelancers and Agencies",
            body: "Turn project details into client-ready proposals in minutes. Profithub supports proposals for one-off projects, retainers, consulting work, and creative services—including design, development, marketing, and other client-facing deliverables.",
          },
          {
            heading: "Who Is Profithub For?",
            body: "Profithub is built for freelancers, consultants, agencies, developers, designers, marketers, coaches, service businesses, and small business owners who need contracts, invoices, and proposals without switching between multiple tools.",
          },
          {
            heading: "Why Use Profithub?",
            body: "Profithub keeps your workflow simple: create professional documents quickly, export PDFs, keep client information organized, and manage contracts, invoices, and proposals from one place. Spend less time on admin and more time delivering work clients value.",
          },
        ],
        cta: "Start Creating Documents",
      },
    },
    simpleMeta: {
      calculators: { title: "Business Calculators Hub", description: "Browse Profithub business calculators for ecommerce, SaaS, pricing, freelancing, breakeven planning, and decision scoring." },
      blog: { title: "Profithub Blog – Pricing, Profitability & Business Guides", description: "Read practical articles about business calculators, pricing, profitability, ecommerce, SaaS, freelance work, subscriptions, and smarter money decisions." },
      about: { title: "About Profithub", description: "Learn what Profithub is, who it's for, and how it helps freelancers, founders, and ecommerce sellers make smarter financial decisions." },
      contact: { title: "Contact Profithub", description: "Contact Profithub for calculator support, tool ideas, partnerships, and bug reports." },
      contracts: { title: "Free Contract Generators for Freelancers and Teams", description: "Generate practical contract templates for revenue share deals, freelance work, invoices, welcome docs, and client access workflows." },
      privacy: { title: "Privacy Policy", description: "Read the Profithub Privacy Policy covering analytics, cookies, and privacy questions." },
      terms: { title: "Terms of Service", description: "Read Profithub Terms of Service for calculator usage, contracts/templates disclaimers, and legal limitations." },
    },
  },
  ar: {
    home: { meta: { title: "حاسبات أرباح مجانية للأعمال عبر الإنترنت | ProfitHub", description: "يوفر ProfitHub أدوات مجانية لحساب الأرباح للتجارة الإلكترونية وSaaS والعمل الحر واتخاذ قرارات الأعمال." }, heroBadge: "منصة حاسبات ProfitHub", heroTitle: "حاسبات أعمال مجانية مصممة لعصر الذكاء الاصطناعي", heroDescription: "استخدم ProfitHub لحساب هامش الربح وMRR ونقطة التعادل وتسرب الاشتراك وتقسيم الإيرادات وتأثير القرارات.", explore: "استكشف كل الحاسبات", shopify: "ابدأ بحاسبة Shopify", guides: "اقرأ الأدلة العملية", categories: "حاسبات الأعمال حسب الفئة", popular: "الحاسبات الأكثر استخدامًا", latest: "أحدث أدلة المدونة", useCases: "حالات استخدام شائعة", featuredTools: "المزيد من الأدوات", ctaSection: "حوّل الرؤى إلى قرارات أسرع", ctaSectionDescription: "اختر حاسبة واحدة، شغّل أرقامك، ثم استخدم الأدلة المرتبطة لتحسين التسعير والاحتفاظ بالعملاء والربحية هذا الأسبوع." },
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
    home: { meta: { title: "Calculateurs de profit gratuits pour entreprises en ligne | ProfitHub", description: "ProfitHub propose des calculateurs gratuits pour e-commerce, SaaS, freelances et décisions business." }, heroBadge: "Plateforme de calculateurs ProfitHub", heroTitle: "Des calculateurs business gratuits pensés pour l’ère IA", heroDescription: "Calculez marges, MRR, seuil de rentabilité, pertes d’abonnement, partage de revenus et impact des décisions.", explore: "Explorer tous les calculateurs", shopify: "Commencer par Shopify Profit", guides: "Lire les guides pratiques", categories: "Calculateurs business par catégorie", popular: "Calculateurs populaires", latest: "Derniers guides du blog", useCases: "Cas d’usage fréquents", featuredTools: "Plus d’outils à explorer", ctaSection: "Transformez vos insights en décisions plus rapides", ctaSectionDescription: "Choisissez un calculateur, lancez vos chiffres, puis utilisez les guides associés pour améliorer pricing, rétention et rentabilité cette semaine." },
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
    home: { meta: { title: "Calculadoras de beneficio gratis para negocios online | ProfitHub", description: "ProfitHub ofrece calculadoras gratis para ecommerce, SaaS, freelancers y decisiones de negocio." }, heroBadge: "Plataforma de calculadoras ProfitHub", heroTitle: "Calculadoras de negocio gratis para la era de la IA", heroDescription: "Calcula márgenes, MRR, punto de equilibrio, fuga de suscripciones, reparto de ingresos e impacto de decisiones.", explore: "Explorar todas las calculadoras", shopify: "Empezar con Shopify Profit", guides: "Leer guías prácticas", categories: "Calculadoras de negocio por categoría", popular: "Calculadoras populares", latest: "Últimas guías del blog", useCases: "Casos de uso comunes", featuredTools: "Más herramientas para explorar", ctaSection: "Convierte insights en decisiones más rápidas", ctaSectionDescription: "Elige una calculadora, ejecuta tus números y usa las guías vinculadas para mejorar precios, retención y rentabilidad esta semana." },
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
    home: { meta: { title: "Бесплатные калькуляторы прибыли для онлайн-бизнеса | ProfitHub", description: "ProfitHub предлагает бесплатные калькуляторы для e-commerce, SaaS, фриланса и бизнес-решений." }, heroBadge: "Платформа калькуляторов ProfitHub", heroTitle: "Бесплатные бизнес-калькуляторы для эпохи ИИ", heroDescription: "Считайте маржу, MRR, точку безубыточности, утечки подписки, revenue share и эффект решений.", explore: "Открыть все калькуляторы", shopify: "Начать с Shopify Profit", guides: "Читать практические гайды", categories: "Бизнес-калькуляторы по категориям", popular: "Популярные калькуляторы", latest: "Последние статьи блога", useCases: "Частые сценарии", featuredTools: "Больше инструментов", ctaSection: "Превращайте инсайты в быстрые решения", ctaSectionDescription: "Выберите калькулятор, посчитайте показатели и используйте связанные гайды, чтобы улучшить цены, удержание и прибыльность на этой неделе." },
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
