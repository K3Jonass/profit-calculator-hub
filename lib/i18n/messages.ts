import type { AppLocale } from "@/lib/i18n/config";

type NavMessage = {
  nav: { home: string; calculators: string; blog: string; contracts: string; about: string; menu: string; close: string; toggle: string };
  brandTagline: string;
  footerCtaTitle: string;
  footerCtaDescription: string;
  footerOpenCalculators: string;
  footerBrowseContracts: string;
  topCalculators: string;
  topBlogGuides: string;
  contractTools: string;
  importantPages: string;
  calculatorsHub: string;
  blogGuides: string;
  aboutProfithub: string;
  privacyPolicy: string;
  terms: string;
  rights: string;
  builtFor: string;
  switchLanguage: string;
};

export const messages: Record<AppLocale, NavMessage> = {
  en: {
    nav: { home: "Home", calculators: "Calculators", blog: "Blog", contracts: "Contracts & Deal Tools", about: "About", menu: "Menu", close: "Close", toggle: "Toggle navigation menu" },
    brandTagline: "AI-ready business OS",
    footerCtaTitle: "Use calculators, guides, and deal tools together",
    footerCtaDescription: "ProfitHub connects practical calculators with implementation guides so founders, operators, and freelancers can make better money decisions faster.",
    footerOpenCalculators: "Open the calculators hub",
    footerBrowseContracts: "Browse contract and deal tools",
    topCalculators: "Top calculators",
    topBlogGuides: "Top blog guides",
    contractTools: "Contract / deal tools",
    importantPages: "Important pages",
    calculatorsHub: "Calculators Hub",
    blogGuides: "Blog Guides",
    aboutProfithub: "About ProfitHub",
    privacyPolicy: "Privacy Policy",
    terms: "Terms of Service",
    rights: "All rights reserved.",
    builtFor: "Built for ecommerce sellers, SaaS operators, freelancers, and business decision makers.",
    switchLanguage: "Switch language",
  },
  ar: {
    nav: { home: "الرئيسية", calculators: "الآلات الحاسبة", blog: "المدونة", contracts: "العقود وأدوات الصفقات", about: "من نحن", menu: "القائمة", close: "إغلاق", toggle: "تبديل قائمة التنقل" },
    brandTagline: "نظام أعمال جاهز لعصر الذكاء الاصطناعي",
    footerCtaTitle: "استخدم الآلات الحاسبة والأدلة وأدوات الصفقات معًا",
    footerCtaDescription: "يربط ProfitHub بين الآلات الحاسبة العملية وأدلة التنفيذ لمساعدة المؤسسين والمشغّلين والمستقلين على اتخاذ قرارات مالية أفضل بسرعة.",
    footerOpenCalculators: "افتح مركز الآلات الحاسبة",
    footerBrowseContracts: "تصفح أدوات العقود والصفقات",
    topCalculators: "أفضل الآلات الحاسبة",
    topBlogGuides: "أفضل أدلة المدونة",
    contractTools: "أدوات العقود / الصفقات",
    importantPages: "صفحات مهمة",
    calculatorsHub: "مركز الآلات الحاسبة",
    blogGuides: "أدلة المدونة",
    aboutProfithub: "حول ProfitHub",
    privacyPolicy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    rights: "جميع الحقوق محفوظة.",
    builtFor: "مصمم لبائعي التجارة الإلكترونية ومشغلي SaaS والمستقلين وصناع القرار.",
    switchLanguage: "تغيير اللغة",
  },
  fr: {
    nav: { home: "Accueil", calculators: "Calculateurs", blog: "Blog", contracts: "Contrats & Outils", about: "À propos", menu: "Menu", close: "Fermer", toggle: "Basculer le menu" },
    brandTagline: "OS business prêt pour l’IA",
    footerCtaTitle: "Utilisez calculateurs, guides et outils de contrats ensemble",
    footerCtaDescription: "ProfitHub relie des calculateurs concrets à des guides d’exécution pour aider fondateurs, opérateurs et freelances à décider plus vite.",
    footerOpenCalculators: "Ouvrir le hub des calculateurs",
    footerBrowseContracts: "Parcourir les outils de contrats",
    topCalculators: "Meilleurs calculateurs",
    topBlogGuides: "Meilleurs guides",
    contractTools: "Outils contrat / deals",
    importantPages: "Pages importantes",
    calculatorsHub: "Hub des calculateurs",
    blogGuides: "Guides du blog",
    aboutProfithub: "À propos de ProfitHub",
    privacyPolicy: "Politique de confidentialité",
    terms: "Conditions d’utilisation",
    rights: "Tous droits réservés.",
    builtFor: "Conçu pour vendeurs e-commerce, équipes SaaS, freelances et décideurs business.",
    switchLanguage: "Changer de langue",
  },
  es: {
    nav: { home: "Inicio", calculators: "Calculadoras", blog: "Blog", contracts: "Contratos y Acuerdos", about: "Acerca de", menu: "Menú", close: "Cerrar", toggle: "Alternar menú de navegación" },
    brandTagline: "SO empresarial listo para IA",
    footerCtaTitle: "Usa calculadoras, guías y herramientas de acuerdos juntas",
    footerCtaDescription: "ProfitHub conecta calculadoras prácticas con guías de implementación para que fundadores, operadores y freelancers decidan mejor y más rápido.",
    footerOpenCalculators: "Abrir el hub de calculadoras",
    footerBrowseContracts: "Explorar herramientas de contratos",
    topCalculators: "Calculadoras principales",
    topBlogGuides: "Guías principales",
    contractTools: "Herramientas de contratos",
    importantPages: "Páginas importantes",
    calculatorsHub: "Hub de calculadoras",
    blogGuides: "Guías del blog",
    aboutProfithub: "Acerca de ProfitHub",
    privacyPolicy: "Política de privacidad",
    terms: "Términos del servicio",
    rights: "Todos los derechos reservados.",
    builtFor: "Creado para vendedores ecommerce, operadores SaaS, freelancers y tomadores de decisiones.",
    switchLanguage: "Cambiar idioma",
  },
  ru: {
    nav: { home: "Главная", calculators: "Калькуляторы", blog: "Блог", contracts: "Контракты и сделки", about: "О нас", menu: "Меню", close: "Закрыть", toggle: "Переключить меню" },
    brandTagline: "Бизнес-ОС для эпохи ИИ",
    footerCtaTitle: "Используйте калькуляторы, гайды и инструменты сделок вместе",
    footerCtaDescription: "ProfitHub объединяет практичные калькуляторы и инструкции, чтобы фаундеры, операторы и фрилансеры быстрее принимали финансовые решения.",
    footerOpenCalculators: "Открыть хаб калькуляторов",
    footerBrowseContracts: "Открыть инструменты контрактов",
    topCalculators: "Популярные калькуляторы",
    topBlogGuides: "Популярные статьи",
    contractTools: "Контракты / сделки",
    importantPages: "Важные страницы",
    calculatorsHub: "Хаб калькуляторов",
    blogGuides: "Гайды блога",
    aboutProfithub: "О ProfitHub",
    privacyPolicy: "Политика конфиденциальности",
    terms: "Условия использования",
    rights: "Все права защищены.",
    builtFor: "Для e-commerce продавцов, SaaS-операторов, фрилансеров и бизнес-руководителей.",
    switchLanguage: "Сменить язык",
  },
};

export function getMessages(locale: AppLocale) {
  return messages[locale];
}
