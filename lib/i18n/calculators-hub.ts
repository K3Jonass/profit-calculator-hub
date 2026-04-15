import type { AppLocale } from "@/lib/i18n/config";

type CalculatorCard = { title: string; href: string; description: string };
type CalculatorGroup = { heading: string; intro: string; calculators: CalculatorCard[] };

type CalculatorsHubContent = {
  badge: string;
  title: string;
  intro: string;
  open: string;
  groups: CalculatorGroup[];
};

const enGroups: CalculatorGroup[] = [
  {
    heading: "Ecommerce Calculators",
    intro:
      "Use these ecommerce calculator tools to validate offer economics, improve contribution margin, and avoid scaling low-profit campaigns.",
    calculators: [
      {
        title: "Shopify Profit Calculator",
        href: "/calculators/shopify-profit",
        description: "Estimate Shopify net profit after product cost, ad spend, shipping, and platform fees.",
      },
      {
        title: "Dropshipping Profit Calculator",
        href: "/calculators/dropshipping-profit",
        description: "Measure real dropshipping margin so you can decide whether to increase ad spend confidently.",
      },
      {
        title: "Breakeven Calculator",
        href: "/calculators/breakeven",
        description: "Find the minimum sales volume required to cover fixed and variable business costs.",
      },
    ],
  },
  {
    heading: "SaaS Calculators",
    intro:
      "Track recurring revenue quality, revenue leakage, and prioritization impact with these SaaS-focused calculators.",
    calculators: [
      {
        title: "SaaS MRR Calculator",
        href: "/calculators/saas-mrr",
        description: "Calculate Monthly Recurring Revenue and annualized ARR to monitor subscription growth.",
      },
      {
        title: "Subscription Leak Calculator",
        href: "/calculators/subscription-leak",
        description: "Estimate lost recurring revenue caused by churn, failed payments, and retention gaps.",
      },
      {
        title: "Cost of Delay Calculator",
        href: "/calculators/cost-of-delay",
        description: "Quantify revenue impact when product launches and growth initiatives are delayed.",
      },
    ],
  },
  {
    heading: "Freelancer & Deal Tools",
    intro:
      "Use these calculators to set sustainable pricing, evaluate client project economics, and negotiate fair partnership structures.",
    calculators: [
      {
        title: "Freelance Rate Calculator",
        href: "/calculators/freelance-rate",
        description: "Set a profitable hourly rate based on expenses, tax, utilization, and income goals.",
      },
      {
        title: "Freelance Project Profit Analyzer",
        href: "/calculators/freelance-project-profit",
        description: "Check client project profit after labor, revisions, and hidden delivery overhead.",
      },
      {
        title: "Revenue Share Calculator",
        href: "/calculators/revenue-share",
        description: "Model partnership payout splits and test fairness before finalizing revenue share terms.",
      },
      {
        title: "Business Decision Score Calculator",
        href: "/calculators/decision-score",
        description: "Compare opportunities with weighted scores for profit potential, effort, and strategic fit.",
      },
    ],
  },
];

const calculatorsHubContent: Record<AppLocale, CalculatorsHubContent> = {
  en: {
    badge: "ProfitHub Calculators Hub",
    title: "Free business calculators for profitability, pricing, and decision-making",
    intro: "Explore every ProfitHub calculator in one place. Each tool is grouped by use case so you can move from question to answer faster.",
    open: "Open",
    groups: enGroups,
  },
  ar: {
    badge: "مركز حاسبات ProfitHub",
    title: "حاسبات أعمال مجانية للربحية والتسعير واتخاذ القرار",
    intro: "استكشف جميع حاسبات ProfitHub في مكان واحد، مع تنظيم الأدوات حسب حالة الاستخدام للوصول للإجابة أسرع.",
    open: "فتح",
    groups: [
      {
        ...enGroups[0],
        heading: "حاسبات التجارة الإلكترونية",
        intro: "استخدم هذه الحاسبات للتحقق من اقتصاديات العرض وتحسين الهامش قبل التوسع.",
        calculators: [
          { ...enGroups[0].calculators[0], title: "حاسبة ربح Shopify", description: "احسب صافي الربح بعد تكلفة المنتج والإعلانات والشحن ورسوم المنصة." },
          { ...enGroups[0].calculators[1], title: "حاسبة ربح الدروبشيبينغ", description: "قِس الهامش الحقيقي للدروبشيبينغ قبل زيادة الإنفاق الإعلاني." },
          { ...enGroups[0].calculators[2], title: "حاسبة نقطة التعادل", description: "اعرف الحد الأدنى للمبيعات اللازم لتغطية التكاليف الثابتة والمتغيرة." },
        ],
      },
      {
        ...enGroups[1],
        heading: "حاسبات SaaS",
        intro: "تابع جودة الإيرادات المتكررة وتسرب الإيرادات وتأثير الأولويات.",
        calculators: [
          { ...enGroups[1].calculators[0], title: "حاسبة SaaS MRR", description: "احسب الإيراد الشهري المتكرر MRR والإيراد السنوي ARR." },
          { ...enGroups[1].calculators[1], title: "حاسبة تسرب الاشتراكات", description: "قدّر الإيراد المفقود بسبب الإلغاء وفشل الدفع وضعف الاحتفاظ." },
          { ...enGroups[1].calculators[2], title: "حاسبة تكلفة التأخير", description: "قيّم أثر التأخير على الإيراد في الإطلاقات والمبادرات." },
        ],
      },
      {
        ...enGroups[2],
        heading: "أدوات المستقلين والصفقات",
        intro: "استخدم هذه الأدوات لتسعير مستدام وتقييم المشاريع والتفاوض على شروط عادلة.",
        calculators: [
          { ...enGroups[2].calculators[0], title: "حاسبة معدل المستقل", description: "حدّد معدلًا ربحيًا بالساعة بناءً على المصاريف والضرائب وأهداف الدخل." },
          { ...enGroups[2].calculators[1], title: "محلل ربح المشروع الحر", description: "افحص ربح المشروع بعد تكلفة العمل والتعديلات والتكاليف الخفية." },
          { ...enGroups[2].calculators[2], title: "حاسبة مشاركة الإيرادات", description: "نمذج توزيع العوائد بين الشركاء قبل تثبيت الشروط." },
          { ...enGroups[2].calculators[3], title: "حاسبة تقييم قرار الأعمال", description: "قارن الفرص بدرجات موزونة للربح والجهد والملاءمة الاستراتيجية." },
        ],
      },
    ],
  },
  fr: {
    badge: "Hub des calculateurs ProfitHub",
    title: "Calculateurs business gratuits pour rentabilité, pricing et décision",
    intro: "Explorez tous les calculateurs ProfitHub dans un seul hub, organisés par cas d'usage.",
    open: "Ouvrir",
    groups: [
      {
        ...enGroups[0],
        heading: "Calculateurs e-commerce",
        intro: "Validez l’économie de vos offres et améliorez la marge avant de scaler.",
        calculators: [
          { ...enGroups[0].calculators[0], title: "Calculateur de profit Shopify", description: "Estimez le profit net après coût produit, pub, livraison et frais plateforme." },
          { ...enGroups[0].calculators[1], title: "Calculateur de profit dropshipping", description: "Mesurez la marge réelle dropshipping avant d’augmenter vos dépenses publicitaires." },
          { ...enGroups[0].calculators[2], title: "Calculateur du seuil de rentabilité", description: "Trouvez le volume de ventes minimum pour couvrir coûts fixes et variables." },
        ],
      },
      {
        ...enGroups[1],
        heading: "Calculateurs SaaS",
        intro: "Suivez la qualité du revenu récurrent, les fuites et l’impact de priorisation.",
        calculators: [
          { ...enGroups[1].calculators[0], title: "Calculateur SaaS MRR", description: "Calculez le MRR mensuel et l’ARR annualisé pour suivre la croissance." },
          { ...enGroups[1].calculators[1], title: "Calculateur de fuite d’abonnement", description: "Estimez le revenu récurrent perdu (churn, paiements échoués, rétention)." },
          { ...enGroups[1].calculators[2], title: "Calculateur de coût du retard", description: "Quantifiez l’impact revenu des retards de lancement et d’initiative." },
        ],
      },
      {
        ...enGroups[2],
        heading: "Outils freelance & deals",
        intro: "Fixez des tarifs durables, évaluez les projets clients et négociez des accords équitables.",
        calculators: [
          { ...enGroups[2].calculators[0], title: "Calculateur de taux freelance", description: "Définissez un taux horaire rentable selon dépenses, taxes et objectif de revenu." },
          { ...enGroups[2].calculators[1], title: "Analyseur de profit de projet freelance", description: "Vérifiez la rentabilité d’un projet après charge de travail et coûts cachés." },
          { ...enGroups[2].calculators[2], title: "Calculateur de partage de revenus", description: "Modélisez la répartition des gains avant de finaliser les termes." },
          { ...enGroups[2].calculators[3], title: "Calculateur de score de décision", description: "Comparez les opportunités par score pondéré (profit, effort, fit stratégique)." },
        ],
      },
    ],
  },
  es: {
    badge: "Hub de calculadoras ProfitHub",
    title: "Calculadoras de negocio gratis para rentabilidad, precios y decisiones",
    intro: "Explora todas las calculadoras de ProfitHub en un solo lugar, organizadas por caso de uso.",
    open: "Abrir",
    groups: [
      {
        ...enGroups[0],
        heading: "Calculadoras de ecommerce",
        intro: "Valida la economía de tus ofertas y mejora el margen antes de escalar.",
        calculators: [
          { ...enGroups[0].calculators[0], title: "Calculadora de beneficio Shopify", description: "Calcula el beneficio neto tras coste de producto, anuncios, envío y comisiones." },
          { ...enGroups[0].calculators[1], title: "Calculadora de beneficio dropshipping", description: "Mide el margen real en dropshipping antes de aumentar gasto en ads." },
          { ...enGroups[0].calculators[2], title: "Calculadora de punto de equilibrio", description: "Encuentra el volumen mínimo de ventas para cubrir costes fijos y variables." },
        ],
      },
      {
        ...enGroups[1],
        heading: "Calculadoras SaaS",
        intro: "Sigue la calidad del ingreso recurrente, fugas y el impacto de priorización.",
        calculators: [
          { ...enGroups[1].calculators[0], title: "Calculadora SaaS MRR", description: "Calcula MRR mensual y ARR anualizado para monitorear el crecimiento." },
          { ...enGroups[1].calculators[1], title: "Calculadora de fuga de suscripciones", description: "Estima ingresos recurrentes perdidos por churn, fallos de pago y retención baja." },
          { ...enGroups[1].calculators[2], title: "Calculadora de costo del retraso", description: "Cuantifica el impacto en ingresos por retrasar lanzamientos e iniciativas." },
        ],
      },
      {
        ...enGroups[2],
        heading: "Herramientas freelance y acuerdos",
        intro: "Define precios sostenibles, evalúa proyectos y negocia acuerdos justos.",
        calculators: [
          { ...enGroups[2].calculators[0], title: "Calculadora de tarifa freelance", description: "Define una tarifa por hora rentable según gastos, impuestos y objetivo de ingresos." },
          { ...enGroups[2].calculators[1], title: "Analizador de beneficio de proyecto freelance", description: "Revisa la rentabilidad del proyecto tras horas, revisiones y costos ocultos." },
          { ...enGroups[2].calculators[2], title: "Calculadora de reparto de ingresos", description: "Modela el reparto entre socios antes de cerrar condiciones." },
          { ...enGroups[2].calculators[3], title: "Calculadora de puntuación de decisiones", description: "Compara oportunidades con puntuación ponderada de beneficio, esfuerzo y encaje." },
        ],
      },
    ],
  },
  ru: {
    badge: "Хаб калькуляторов ProfitHub",
    title: "Бесплатные бизнес-калькуляторы для прибыльности, цены и решений",
    intro: "Изучайте все калькуляторы ProfitHub в одном месте, сгруппированные по задачам.",
    open: "Открыть",
    groups: [
      {
        ...enGroups[0],
        heading: "E-commerce калькуляторы",
        intro: "Проверяйте экономику оффера и улучшайте маржу до масштабирования.",
        calculators: [
          { ...enGroups[0].calculators[0], title: "Калькулятор прибыли Shopify", description: "Оцените чистую прибыль после себестоимости, рекламы, доставки и комиссий." },
          { ...enGroups[0].calculators[1], title: "Калькулятор прибыли дропшиппинга", description: "Измерьте реальную маржу дропшиппинга перед ростом рекламного бюджета." },
          { ...enGroups[0].calculators[2], title: "Калькулятор точки безубыточности", description: "Найдите минимальный объем продаж для покрытия постоянных и переменных затрат." },
        ],
      },
      {
        ...enGroups[1],
        heading: "SaaS калькуляторы",
        intro: "Отслеживайте качество регулярной выручки, утечки и эффект приоритизации.",
        calculators: [
          { ...enGroups[1].calculators[0], title: "Калькулятор SaaS MRR", description: "Рассчитайте ежемесячный MRR и годовой ARR для контроля роста." },
          { ...enGroups[1].calculators[1], title: "Калькулятор утечки подписок", description: "Оцените потерянную выручку из-за оттока, неудачных платежей и слабой ретенции." },
          { ...enGroups[1].calculators[2], title: "Калькулятор стоимости задержки", description: "Оцените финансовый эффект от задержек запусков и инициатив." },
        ],
      },
      {
        ...enGroups[2],
        heading: "Инструменты фриланса и сделок",
        intro: "Устанавливайте устойчивые цены, оценивайте проекты и согласовывайте справедливые условия.",
        calculators: [
          { ...enGroups[2].calculators[0], title: "Калькулятор ставки фрилансера", description: "Определите прибыльную почасовую ставку с учетом расходов, налогов и целей дохода." },
          { ...enGroups[2].calculators[1], title: "Анализатор прибыли фриланс-проекта", description: "Проверьте прибыль проекта с учетом трудозатрат, правок и скрытых расходов." },
          { ...enGroups[2].calculators[2], title: "Калькулятор разделения выручки", description: "Смоделируйте распределение выплат между партнерами до подписания условий." },
          { ...enGroups[2].calculators[3], title: "Калькулятор оценки бизнес-решений", description: "Сравните возможности по взвешенному баллу прибыли, усилий и стратегического соответствия." },
        ],
      },
    ],
  },
};

export function getCalculatorsHubContent(locale: AppLocale) {
  return calculatorsHubContent[locale];
}
