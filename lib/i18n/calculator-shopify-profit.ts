import type { AppLocale } from "@/lib/i18n/config";

type Field = { label: string; placeholder: string; helper: string };

type ShopifyProfitCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  fields: {
    revenue: Field;
    productCost: Field;
    adsCost: Field;
    fees: Field;
    shipping: Field;
  };
  results: {
    netProfit: string;
    totalCosts: string;
    margin: string;
    validationHint: string;
  };
  sections: {
    howItWorksTitle: string;
    howItWorksBody: string;
    whyMarginTitle: string;
    whyMarginBody: string;
  };
};

export const shopifyProfitCopy: Record<AppLocale, ShopifyProfitCopy> = {
  en: {
    metaTitle: "Shopify Profit Calculator Free | Net Profit & Margin Tool",
    metaDescription: "Calculate Shopify net profit, total costs, and profit margin in seconds with this free tool.",
    title: "Shopify Profit Calculator",
    subtitle: "Calculate your Shopify store net profit, total costs, and profit margin instantly.",
    fields: {
      revenue: { label: "Revenue ($)", placeholder: "e.g. 12000", helper: "Total sales revenue for the selected period." },
      productCost: { label: "Product Cost ($)", placeholder: "e.g. 4000", helper: "Total cost of goods sold." },
      adsCost: { label: "Ad Spend ($)", placeholder: "e.g. 3000", helper: "Paid ads and campaign spend." },
      fees: { label: "Platform Fees ($)", placeholder: "e.g. 500", helper: "Shopify, payment processing, and app fees." },
      shipping: { label: "Shipping Costs ($)", placeholder: "e.g. 1200", helper: "Shipping and fulfillment costs." },
    },
    results: {
      netProfit: "Net Profit",
      totalCosts: "Total Costs",
      margin: "Profit Margin",
      validationHint: "Enter a value greater than or equal to 0.",
    },
    sections: {
      howItWorksTitle: "How this Shopify profit calculator works",
      howItWorksBody: "This calculator estimates your real Shopify profit by subtracting product cost, ad spend, platform fees, and shipping from revenue.",
      whyMarginTitle: "Why profit margin matters",
      whyMarginBody: "Revenue alone can be misleading. True margin helps you price correctly and scale marketing with confidence.",
    },
  },
  ar: {
    metaTitle: "حاسبة ربح Shopify المجانية | صافي الربح والهامش",
    metaDescription: "احسب صافي ربح متجر Shopify والتكاليف الإجمالية وهامش الربح خلال ثوانٍ.",
    title: "حاسبة ربح Shopify",
    subtitle: "احسب صافي الربح والتكاليف الإجمالية وهامش الربح لمتجر Shopify فورًا.",
    fields: {
      revenue: { label: "الإيرادات ($)", placeholder: "مثال: 12000", helper: "إجمالي المبيعات للفترة المحددة." },
      productCost: { label: "تكلفة المنتج ($)", placeholder: "مثال: 4000", helper: "إجمالي تكلفة البضاعة المباعة." },
      adsCost: { label: "الإنفاق الإعلاني ($)", placeholder: "مثال: 3000", helper: "تكلفة الإعلانات والحملات المدفوعة." },
      fees: { label: "رسوم المنصة ($)", placeholder: "مثال: 500", helper: "رسوم Shopify والدفع والتطبيقات." },
      shipping: { label: "تكاليف الشحن ($)", placeholder: "مثال: 1200", helper: "تكاليف الشحن والتنفيذ." },
    },
    results: { netProfit: "صافي الربح", totalCosts: "إجمالي التكاليف", margin: "هامش الربح", validationHint: "أدخل قيمة أكبر من أو تساوي 0." },
    sections: {
      howItWorksTitle: "كيف تعمل حاسبة ربح Shopify",
      howItWorksBody: "تقدّر هذه الحاسبة الربح الحقيقي عبر خصم تكلفة المنتج والإعلانات ورسوم المنصة والشحن من الإيراد.",
      whyMarginTitle: "لماذا يهم هامش الربح",
      whyMarginBody: "الإيراد وحده قد يكون مضللًا. الهامش الحقيقي يساعدك على التسعير الصحيح والتوسع بثقة.",
    },
  },
  fr: {
    metaTitle: "Calculateur de profit Shopify gratuit | Profit net et marge",
    metaDescription: "Calculez le profit net Shopify, les coûts totaux et la marge en quelques secondes.",
    title: "Calculateur de profit Shopify",
    subtitle: "Calculez instantanément le profit net, les coûts totaux et la marge de votre boutique Shopify.",
    fields: {
      revenue: { label: "Revenu ($)", placeholder: "ex. 12000", helper: "Ventes totales sur la période choisie." },
      productCost: { label: "Coût produit ($)", placeholder: "ex. 4000", helper: "Coût total des marchandises vendues." },
      adsCost: { label: "Dépenses pub ($)", placeholder: "ex. 3000", helper: "Budget des campagnes publicitaires payantes." },
      fees: { label: "Frais plateforme ($)", placeholder: "ex. 500", helper: "Frais Shopify, paiement et applications." },
      shipping: { label: "Coûts de livraison ($)", placeholder: "ex. 1200", helper: "Frais d’expédition et de fulfillment." },
    },
    results: { netProfit: "Profit net", totalCosts: "Coûts totaux", margin: "Marge bénéficiaire", validationHint: "Entrez une valeur supérieure ou égale à 0." },
    sections: {
      howItWorksTitle: "Comment fonctionne ce calculateur Shopify",
      howItWorksBody: "Ce calculateur estime votre profit réel en soustrayant coût produit, pub, frais plateforme et livraison du revenu.",
      whyMarginTitle: "Pourquoi la marge est importante",
      whyMarginBody: "Le revenu seul peut tromper. La marge réelle aide à mieux fixer les prix et à scaler sans risque.",
    },
  },
  es: {
    metaTitle: "Calculadora de beneficio Shopify gratis | Beneficio neto y margen",
    metaDescription: "Calcula el beneficio neto Shopify, costos totales y margen en segundos.",
    title: "Calculadora de beneficio Shopify",
    subtitle: "Calcula al instante el beneficio neto, costos totales y margen de tu tienda Shopify.",
    fields: {
      revenue: { label: "Ingresos ($)", placeholder: "ej. 12000", helper: "Ventas totales del periodo seleccionado." },
      productCost: { label: "Costo del producto ($)", placeholder: "ej. 4000", helper: "Costo total de bienes vendidos." },
      adsCost: { label: "Gasto en anuncios ($)", placeholder: "ej. 3000", helper: "Inversión en campañas publicitarias pagadas." },
      fees: { label: "Comisiones de plataforma ($)", placeholder: "ej. 500", helper: "Comisiones de Shopify, pagos y apps." },
      shipping: { label: "Costos de envío ($)", placeholder: "ej. 1200", helper: "Costos de envío y fulfillment." },
    },
    results: { netProfit: "Beneficio neto", totalCosts: "Costos totales", margin: "Margen de beneficio", validationHint: "Introduce un valor mayor o igual a 0." },
    sections: {
      howItWorksTitle: "Cómo funciona esta calculadora Shopify",
      howItWorksBody: "Esta calculadora estima tu beneficio real restando costo del producto, anuncios, comisiones y envío de los ingresos.",
      whyMarginTitle: "Por qué importa el margen",
      whyMarginBody: "Los ingresos solos pueden engañar. El margen real ayuda a fijar precios y escalar con seguridad.",
    },
  },
  ru: {
    metaTitle: "Бесплатный калькулятор прибыли Shopify | Чистая прибыль и маржа",
    metaDescription: "Рассчитайте чистую прибыль Shopify, общие затраты и маржу за секунды.",
    title: "Калькулятор прибыли Shopify",
    subtitle: "Мгновенно рассчитайте чистую прибыль, общие затраты и маржу вашего магазина Shopify.",
    fields: {
      revenue: { label: "Выручка ($)", placeholder: "напр. 12000", helper: "Общая выручка за выбранный период." },
      productCost: { label: "Себестоимость товара ($)", placeholder: "напр. 4000", helper: "Суммарная себестоимость проданных товаров." },
      adsCost: { label: "Рекламные расходы ($)", placeholder: "напр. 3000", helper: "Бюджет на платные рекламные кампании." },
      fees: { label: "Комиссии платформы ($)", placeholder: "напр. 500", helper: "Комиссии Shopify, платежных систем и приложений." },
      shipping: { label: "Расходы на доставку ($)", placeholder: "напр. 1200", helper: "Расходы на доставку и исполнение заказов." },
    },
    results: { netProfit: "Чистая прибыль", totalCosts: "Общие затраты", margin: "Маржа прибыли", validationHint: "Введите значение больше или равно 0." },
    sections: {
      howItWorksTitle: "Как работает этот калькулятор Shopify",
      howItWorksBody: "Калькулятор оценивает реальную прибыль: из выручки вычитаются себестоимость, реклама, комиссии и доставка.",
      whyMarginTitle: "Почему важна маржа",
      whyMarginBody: "Одна выручка может вводить в заблуждение. Реальная маржа помогает правильно ценообразовать и безопасно масштабироваться.",
    },
  },
};

export function getShopifyProfitCopy(locale: AppLocale) {
  return shopifyProfitCopy[locale];
}
