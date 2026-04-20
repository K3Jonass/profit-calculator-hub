import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";

const enMeta = {
  title: "What Is a Breakeven Point? The Number Every Business Should Know",
  description:
    "Learn what a breakeven point is, how to calculate it, and why it matters for pricing, profitability, and business survival.",
};

const frMeta = {
  title: "Point mort : le chiffre que toute entreprise doit absolument maîtriser",
  description:
    "Comprenez le point mort, son calcul concret et son impact direct sur les prix, la rentabilité et la survie d’une entreprise.",
};

const arMeta = {
  title: "ما هي نقطة التعادل؟ الرقم الذي يجب أن يعرفه كل صاحب مشروع",
  description:
    "تعرّف على معنى نقطة التعادل وكيفية حسابها ولماذا تُعد أساسًا لتسعير الخدمات والمنتجات وتحسين الربحية في الأعمال والشركات الناشئة.",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  if (locale === "fr") return frMeta;
  if (locale === "ar") return arMeta;
  return enMeta;
}

export default async function Page() {
  const locale = await getRequestLocale();

  if (locale === "ar") {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
        <h1 className="mb-6 text-4xl font-bold leading-tight">
          ما هي نقطة التعادل؟ الرقم الذي يجب أن يعرفه كل صاحب مشروع
        </h1>

        <p className="mb-6 text-lg leading-8 text-gray-700">
          نقطة التعادل ليست مصطلحًا محاسبيًا جافًا، بل هي خط الأمان الحقيقي لأي نشاط تجاري. عندما تصل إلى نقطة التعادل فهذا يعني أن إيراداتك
          أصبحت تغطي جميع التكاليف الثابتة والمتغيرة، وأنك خرجت من دائرة الخسارة التشغيلية. قبل هذه النقطة أنت تعمل لتغطية المصاريف فقط، وبعدها
          يبدأ الربح الفعلي بالظهور. لهذا السبب تعتمد عليها شركات SaaS، المتاجر الإلكترونية، الوكالات، والمستقلون عند اتخاذ قرارات التسعير،
          التوسع، والتوظيف.
        </p>

        <p className="mb-6 leading-8 text-gray-700">
          كثير من أصحاب الأعمال يركزون على المبيعات وعدد العملاء وحركة الزيارات، لكنهم لا يعرفون الإجابة عن السؤال الأهم: كم يجب أن نبيع حتى
          يتوقف المشروع عن استنزاف السيولة؟ هذا الفراغ التحليلي يؤدي غالبًا إلى قرارات خطرة مثل خفض الأسعار بهدف رفع الطلب، أو زيادة الإنفاق
          الإعلاني قبل التأكد من أن كل عملية بيع تضيف هامشًا صحيًا. نقطة التعادل تضع أساسًا رقميًا واضحًا يحول الإدارة من التخمين إلى
          التخطيط المالي المنضبط.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">لماذا تُعد نقطة التعادل مؤشرًا استراتيجيًا؟</h2>
        <p className="mb-6 leading-8 text-gray-700">
          قوة نقطة التعادل أنها تجمع بين التسويق والعمليات والتمويل في رقم واحد يسهل متابعته. مدير التسويق يحتاجها ليعرف حد الإنفاق المقبول على
          الاستحواذ، ومدير المبيعات يحتاجها لبناء أهداف واقعية، وصاحب المشروع يحتاجها لتقييم قابلية النمو دون المخاطرة بالتدفق النقدي. عندما تكون
          نقطة التعادل مرتفعة جدًا، فهذا لا يعني دائمًا ضعف الطلب، بل قد يكشف خللًا في هيكل التكاليف أو ضعفًا في تسعير القيمة.
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
          <li>تمنحك حدًا أدنى واضحًا للمبيعات الشهرية المطلوبة للبقاء.</li>
          <li>تكشف بسرعة ما إذا كان نموذج الربح لديك قابلًا للاستمرار.</li>
          <li>تساعدك على التمييز بين نمو الإيراد ونمو الربحية الفعلية.</li>
          <li>تُحسن قرارات التوظيف والتوسع بدل الاعتماد على الانطباع.</li>
        </ul>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">ما العناصر التي تدخل في حساب نقطة التعادل؟</h2>
        <h3 className="mb-3 mt-6 text-xl font-semibold">1) التكاليف الثابتة</h3>
        <p className="mb-6 leading-8 text-gray-700">
          وهي المصاريف التي تدفعها سواء بعت أم لم تبع: رواتب أساسية، إيجار، اشتراكات برمجيات، استضافة، أدوات تشغيل، تأمين، ومحاسبة. في أعمال SaaS
          قد تشمل البنية التحتية السحابية والرواتب الأساسية لفريق المنتج. وفي العمل الحر تشمل اشتراكات الأدوات، الضرائب، ومصاريف التشغيل
          الشهرية. تجاهل جزء صغير من هذه البنود قد يجعل حسابك متفائلًا بشكل مضلل.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold">2) سعر البيع الفعلي</h3>
        <p className="mb-6 leading-8 text-gray-700">
          المقصود هنا ليس السعر المكتوب في صفحة البيع فقط، بل متوسط السعر الحقيقي بعد الخصومات والعروض والعمولات. في التجارة الإلكترونية مثلًا قد
          يبدو المنتج مربحًا على السعر الأساسي، لكن الخصومات الموسمية ورسوم الدفع تخفض صافي الإيراد بشكل كبير. لذلك يجب استخدام سعر واقعي يعكس ما
          يدخل الحساب البنكي فعليًا.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold">3) التكلفة المتغيرة لكل عملية بيع</h3>
        <p className="mb-6 leading-8 text-gray-700">
          هذه التكلفة ترتفع مع كل طلب أو عميل جديد: تكلفة الإنتاج، الشحن، العمولة، رسوم بوابات الدفع، الدعم الإضافي، أو ساعات التنفيذ المرتبطة
          بالمشروع. في نموذج الخدمات الحرة قد تشمل ساعات مساعدين مستقلين أو أدوات تُحاسب حسب الاستخدام. كلما ارتفعت هذه التكلفة انخفض هامش
          المساهمة، وبالتالي ارتفعت نقطة التعادل.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">معادلة نقطة التعادل</h2>
        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-lg font-semibold text-gray-900">
            نقطة التعادل (بالوحدات) = التكاليف الثابتة ÷ (سعر البيع للوحدة − التكلفة المتغيرة للوحدة)
          </p>
        </div>
        <p className="mb-6 leading-8 text-gray-700">
          الجزء الموجود بين القوسين يسمى هامش المساهمة. هذا الهامش هو المبلغ الذي يتبقى من كل عملية بيع ليغطي التكاليف الثابتة أولًا، ثم يتحول
          بعد ذلك إلى ربح. إذا كان هامش المساهمة ضعيفًا جدًا، فإن الوصول إلى التعادل سيتطلب حجم مبيعات كبيرًا قد يكون غير واقعي.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">مثال عملي من واقع الأعمال الرقمية</h2>
        <p className="mb-6 leading-8 text-gray-700">
          لنفترض أنك تدير خدمة اشتراك شهرية للشركات الصغيرة. إجمالي تكاليفك الثابتة شهريًا 30,000 ريال، ومتوسط الاشتراك 500 ريال، بينما التكلفة
          المتغيرة لكل عميل 170 ريالًا (رسوم أدوات، دعم، بوابات دفع). هامش المساهمة هنا يساوي 330 ريالًا لكل عميل.
        </p>
        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-lg font-semibold text-gray-900">
            30,000 ÷ 330 = 90.9 عميل
          </p>
        </div>
        <p className="mb-6 leading-8 text-gray-700">
          هذا يعني أنك تحتاج إلى 91 عميلًا نشطًا تقريبًا للوصول إلى نقطة التعادل. العميل رقم 92 يبدأ بإضافة ربح تشغيلي. هذا الرقم يساعدك مباشرة
          في بناء خطة النمو: كم عدد العملاء المحتملين المطلوبين شهريًا؟ وما معدل التحويل الذي ينبغي تحقيقه؟ وهل تكلفة الاستحواذ الحالية منطقية
          مقارنة بهامش الربح؟
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">كيف تستخدم نقطة التعادل في قرارات يومية؟</h2>
        <h3 className="mb-3 mt-6 text-xl font-semibold">التسعير الذكي بدل التسعير العاطفي</h3>
        <p className="mb-6 leading-8 text-gray-700">
          عندما تفكر في تخفيض السعر لزيادة المبيعات، احسب أثر القرار على هامش المساهمة أولًا. أحيانًا يرتفع عدد الطلبات لكن الربح ينخفض لأن نقطة
          التعادل تتحرك إلى مستوى أعلى. في المقابل، رفع السعر مع تحسين قيمة العرض قد يخفض حجم الطلب قليلًا لكنه يرفع الربحية ويقوي التدفق النقدي.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold">ضبط الإنفاق التسويقي</h3>
        <p className="mb-6 leading-8 text-gray-700">
          نقطة التعادل تمنحك سقفًا واضحًا لتكلفة اكتساب العميل. إذا كانت تكلفة الاستحواذ تقترب من هامش المساهمة أو تتجاوزه، فأنت تدفع مقابل نمو
          لا يترجم إلى ربح. هنا يصبح المطلوب إما تحسين التحويل والاحتفاظ أو إعادة صياغة العرض بدل زيادة الميزانية الإعلانية بشكل أعمى.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold">إدارة التوسع والتوظيف</h3>
        <p className="mb-6 leading-8 text-gray-700">
          كل توظيف جديد يرفع التكاليف الثابتة، وبالتالي يرفع نقطة التعادل. لذلك من الأفضل أن تربط قرار التوظيف بسيناريو مالي: كم مبيعات إضافية
          نحتاجها بعد التوظيف؟ وما الفترة الزمنية الواقعية لتحقيقها؟ بهذه الطريقة تحمي مشروعك من توسع سريع يضغط الربحية.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">أخطاء شائعة تجعل الحساب غير دقيق</h2>
        <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
          <li>نسيان رسوم صغيرة متكررة مثل أدوات SaaS أو عمولات الدفع.</li>
          <li>استخدام سعر نظري لا يعكس الخصومات والاسترجاعات الفعلية.</li>
          <li>الخلط بين الإيراد الإجمالي وصافي الهامش القابل للتوسع.</li>
          <li>تجاهل أثر churn في الأعمال القائمة على الاشتراك.</li>
          <li>عدم تحديث الحساب عند تغيّر التكاليف أو نموذج الخدمة.</li>
        </ul>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">كيف تتابع نقطة التعادل بشكل شهري داخل فريقك؟</h2>
        <p className="mb-6 leading-8 text-gray-700">
          أفضل ممارسة هي تحويل نقطة التعادل إلى مؤشر تشغيلي يظهر في اجتماع الأداء الشهري بجانب الإيراد والربح الصافي. ابدأ بعرض رقم التعادل
          المستهدف، ثم اعرض الرقم الفعلي للمبيعات أو العملاء، ثم الفجوة بينهما. بعد ذلك ناقش الأسباب: هل السبب انخفاض التحويل؟ ارتفاع تكلفة
          التنفيذ؟ زيادة churn؟ بهذه الطريقة يصبح النقاش عمليًا ومبنيًا على حقائق، لا على تفسيرات عامة.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          يمكنك كذلك إعداد ثلاثة سيناريوهات ثابتة: متحفظ، واقعي، وطموح. هذا يساعد الإدارة على اتخاذ قرارات أسرع عند تغير السوق أو التكلفة. إذا
          ارتفعت نقطة التعادل فجأة، يعرف الفريق أن الأولوية يجب أن تكون لرفع الهامش أو تخفيض المصروفات قبل التفكير في التوسع. هذه المنهجية
          تمنحك مرونة أعلى وثقة أكبر عند إدارة الربحية على المدى الطويل.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">الخلاصة</h2>
        <p className="mb-6 leading-8 text-gray-700">
          إذا كنت تريد مشروعًا مستدامًا، فابدأ دائمًا من نقطة التعادل. هذا الرقم ليس غاية في ذاته، لكنه قاعدة تشغيلية تمنحك وضوحًا في التسعير،
          الثقة في التخطيط، والانضباط في إدارة الربح. سواء كنت تدير متجرًا، منصة SaaS، أو خدمة مستقلة، فإن متابعة نقطة التعادل شهريًا ستساعدك على
          اتخاذ قرارات أفضل، تجنّب المخاطر مبكرًا، وبناء نمو قابل للاستمرار بدل نمو شكلي يعتمد على الإيرادات وحدها.
        </p>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">احسب نقطة التعادل الآن</h3>
          <p className="mb-4 leading-8 text-gray-700">
            استخدم حاسبة ProfitHub لنقطة التعادل لمعرفة حجم المبيعات أو الإيرادات المطلوبة لتغطية التكاليف واتخاذ قرارات ربحية أدق.
          </p>
          <Link
            href="/calculators/breakeven"
            className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800"
          >
            افتح حاسبة نقطة التعادل →
          </Link>
        </div>
      </main>
    );
  }

  if (locale !== "fr") {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
        <h1 className="mb-6 text-4xl font-bold leading-tight">
          What Is a Breakeven Point? The Number Every Business Should Know
        </h1>

        <p className="mb-6 text-lg leading-8 text-gray-700">
          A breakeven point is the point where total revenue equals total costs.
          You are not making a profit yet, but you are no longer losing money.
        </p>

        <p className="mb-6 leading-8 text-gray-700">
          This is one of the most important numbers in business because it tells
          you how much you need to sell before your business becomes economically
          stable. Without it, pricing decisions, sales targets, and budgeting are
          based on hope instead of math.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          Why breakeven matters
        </h2>

        <p className="mb-6 leading-8 text-gray-700">
          Many founders focus on revenue, traffic, or unit sales without knowing
          how much volume is required just to cover costs. Breakeven analysis
          forces clarity. It answers a simple question: how much do we need to
          sell to stop operating at a loss?
        </p>

        <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
          <li>It helps set realistic sales targets</li>
          <li>It shows whether your pricing model is viable</li>
          <li>It reveals how much fixed cost your business can carry</li>
          <li>It reduces bad decisions based on vanity numbers</li>
        </ul>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          What goes into breakeven calculation
        </h2>

        <p className="mb-6 leading-8 text-gray-700">
          To calculate breakeven, you need three pieces:
        </p>

        <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
          <li>Fixed costs like rent, salaries, software, or subscriptions</li>
          <li>Selling price per unit</li>
          <li>Variable cost per unit such as production or fulfillment</li>
        </ul>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          The breakeven formula
        </h2>

        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-lg font-semibold text-gray-900">
            Breakeven Units = Fixed Costs ÷ (Selling Price - Variable Cost Per Unit)
          </p>
        </div>

        <p className="mb-6 leading-8 text-gray-700">
          That formula tells you how many units you must sell before profit begins.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          A simple example
        </h2>

        <p className="mb-6 leading-8 text-gray-700">
          If your monthly fixed costs are $3,000, your product sells for $50, and
          your variable cost per unit is $20, your contribution margin is $30 per
          unit.
        </p>

        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-lg font-semibold text-gray-900">
            $3,000 ÷ $30 = 100 units
          </p>
        </div>

        <p className="mb-6 leading-8 text-gray-700">
          You need to sell 100 units to break even. Unit 101 is where real profit
          starts.
        </p>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">
            Calculate your breakeven point
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Use the ProfitHub Breakeven Calculator to estimate how many units or
            how much revenue you need to cover your costs.
          </p>
          <Link
            href="/calculators/breakeven"
            className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800"
          >
            Open Breakeven Calculator →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        Point mort : le chiffre que toute entreprise doit absolument maîtriser
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        Le point mort est l’instant où votre chiffre d’affaires couvre exactement l’ensemble de vos coûts. Vous ne gagnez pas encore d’argent, mais vous ne perdez plus. En pratique, c’est la frontière entre une activité fragile et une activité viable. Pour un business SaaS, une boutique e-commerce, une agence ou un freelance, ce repère conditionne la façon de fixer les prix, de piloter la trésorerie et de décider des investissements.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Beaucoup d’entrepreneurs se concentrent sur les ventes, les likes ou la croissance du trafic, sans répondre à une question essentielle : « À partir de quel niveau d’activité mon business devient-il réellement stable ? » Sans cette réponse, on confond volume et rentabilité. Une entreprise peut vendre tous les jours et rester structurellement en danger si ses marges ne couvrent pas ses charges fixes. Comprendre le point mort permet d’éviter ce piège, de protéger le profit et de prendre des décisions basées sur des chiffres.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Pourquoi le point mort est stratégique</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Le point mort n’est pas une formule de comptable : c’est un outil de direction. Il vous aide à fixer des objectifs réalistes, à challenger votre modèle économique et à identifier les leviers qui améliorent réellement la performance. Quand vous connaissez votre seuil de rentabilité, vous savez immédiatement si une baisse de prix est soutenable, si un recrutement est possible ou si votre acquisition client est trop coûteuse.
      </p>
      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Il transforme vos objectifs de vente en cibles concrètes et actionnables.</li>
        <li>Il met en lumière les coûts invisibles qui pèsent sur votre profit.</li>
        <li>Il clarifie la différence entre croissance du chiffre d’affaires et création de marge.</li>
        <li>Il améliore la qualité de décision pour le pricing, le marketing et les opérations.</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Les 3 variables à maîtriser</h2>
      <h3 className="mb-3 mt-6 text-xl font-semibold">1) Les coûts fixes</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Les coûts fixes sont les dépenses que vous payez même si vous ne vendez rien : loyers, salaires, abonnements logiciels, assurances, outils de gestion, hébergement, etc. Dans un SaaS, ce sont par exemple l’infrastructure cloud, les salaires produit et la stack logicielle. Pour un freelance, cela inclut les logiciels, la comptabilité, les charges administratives et parfois un espace de coworking.
      </p>

      <h3 className="mb-3 mt-6 text-xl font-semibold">2) Le prix de vente</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Le prix de vente est le revenu unitaire obtenu pour chaque vente. C’est une variable centrale, car une modification même faible peut déplacer fortement votre point mort. Une hausse de prix bien justifiée par la valeur perçue peut réduire le volume nécessaire pour atteindre la rentabilité. À l’inverse, des promotions permanentes peuvent donner l’illusion d’une croissance, tout en repoussant le seuil de profit.
      </p>

      <h3 className="mb-3 mt-6 text-xl font-semibold">3) Le coût variable unitaire</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Le coût variable est la dépense associée à chaque vente : production, livraison, commissions, support additionnel, frais de paiement, etc. En e-commerce, il inclut souvent le coût produit, le packaging et la logistique. En freelance, il peut inclure la sous-traitance ou des outils payés à l’usage. Plus ce coût est élevé, plus la marge unitaire baisse et plus le point mort monte.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">La formule du point mort</h2>
      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">
          Point mort (en unités) = Coûts fixes ÷ (Prix de vente unitaire − Coût variable unitaire)
        </p>
      </div>
      <p className="mb-6 leading-8 text-gray-700">
        Le terme entre parenthèses est la marge sur coût variable (ou contribution margin). C’est la somme disponible pour absorber vos coûts fixes puis générer du profit. Tant que votre volume ne permet pas de couvrir vos coûts fixes, vous restez en zone de perte.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Exemple concret : petite activité digitale</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Imaginons une activité de formation en ligne. Vos coûts fixes mensuels sont de 4 000 €, votre offre est vendue 120 €, et le coût variable par vente est de 35 € (plateforme, frais de transaction, support client). Votre marge unitaire est donc de 85 €.
      </p>
      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">4 000 € ÷ 85 € = 47,06</p>
      </div>
      <p className="mb-6 leading-8 text-gray-700">
        Vous devez vendre 48 unités par mois pour atteindre le point mort. À partir de la 49e vente, vous commencez à générer du profit opérationnel. Cet indicateur vous permet ensuite de construire un plan d’action : combien de leads sont nécessaires, quel taux de conversion viser et quel budget d’acquisition reste cohérent avec votre marge.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Comment améliorer votre point mort</h2>
      <h3 className="mb-3 mt-6 text-xl font-semibold">Optimiser les coûts fixes sans freiner la croissance</h3>
      <p className="mb-6 leading-8 text-gray-700">
        L’objectif n’est pas de couper aveuglément les dépenses, mais d’éliminer les coûts qui ne contribuent pas à la valeur client. Faites un audit trimestriel de vos abonnements, de vos prestataires et de vos process internes. Dans beaucoup de business SaaS et d’activités freelance, des outils redondants peuvent représenter plusieurs points de marge perdus chaque mois.
      </p>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Augmenter la marge unitaire par la valeur</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Monter vos prix sans stratégie peut casser la conversion. En revanche, une proposition de valeur claire, une meilleure offre et un positionnement précis permettent souvent d’augmenter le prix moyen tout en conservant la demande. Pour un freelance, cela passe par un cadrage plus solide et une spécialisation. Pour une entreprise, cela passe par un packaging et une promesse mieux alignés sur le résultat client.
      </p>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Réduire les coûts variables de façon intelligente</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Négocier ses fournisseurs, regrouper les expéditions, améliorer les taux de paiement ou automatiser certaines tâches peut réduire significativement le coût variable par vente. Même une baisse de 2 à 5 % peut faire une vraie différence sur le point mort, surtout si votre volume est élevé.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Erreurs fréquentes à éviter</h2>
      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Calculer le point mort avec un prix moyen irréaliste (hors remises et promotions).</li>
        <li>Oublier certains coûts fixes comme les charges patronales, la fiscalité ou les frais bancaires.</li>
        <li>Mélanger revenus encaissés et revenus facturés, surtout en freelance.</li>
        <li>Ne pas mettre à jour le calcul quand le modèle, les canaux ou la structure de coûts évoluent.</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Conclusion</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Le point mort est la base d’un pilotage rentable. Il vous aide à relier marketing, ventes, opérations et finance autour d’un même objectif : atteindre puis dépasser le seuil de rentabilité avec un modèle durable. Si vous dirigez un business, un SaaS ou une activité freelance, ce calcul doit faire partie de votre routine mensuelle. C’est un outil simple, mais redoutablement puissant pour protéger votre profit et prendre des décisions plus intelligentes.
      </p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">Calculez votre point mort maintenant</h3>
        <p className="mb-4 leading-8 text-gray-700">
          Utilisez le calculateur ProfitHub pour estimer instantanément le volume ou le chiffre d’affaires nécessaire pour couvrir vos coûts.
        </p>
        <Link
          href="/calculators/breakeven"
          className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800"
        >
          Ouvrir le calculateur de point mort →
        </Link>
      </div>
    </main>
  );
}
