import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";

const enMeta = {
  title: "How to Calculate Breakeven Point: Formula, Example, and Why It Matters",
  description:
    "Learn how to calculate your breakeven point using a simple formula and practical examples for products, services, and small businesses.",
};

const frMeta = {
  title: "Comment calculer le point mort : formule simple, exemple concret et décisions clés",
  description:
    "Apprenez à calculer votre point mort avec une formule claire et des exemples pratiques pour produit, service et activité freelance.",
};

const arMeta = {
  title: "كيفية حساب نقطة التعادل: المعادلة، مثال عملي، ولماذا تهمك فعليًا",
  description:
    "دليل عملي لحساب نقطة التعادل خطوة بخطوة باستخدام معادلة واضحة وأمثلة واقعية لمشاريع SaaS والمتاجر والخدمات الحرة.",
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
          كيفية حساب نقطة التعادل: المعادلة، مثال عملي، ولماذا تهمك فعليًا
        </h1>

        <p className="mb-6 text-lg leading-8 text-gray-700">
          حساب نقطة التعادل هو أسرع طريقة لتحويل إدارة مشروعك من الانطباعات إلى الأرقام. عندما تعرف نقطة التعادل بدقة، فأنت تعرف الحد الأدنى
          للمبيعات الذي يضمن بقاء النشاط دون خسارة، وتعرف كذلك المساحة الحقيقية التي يمكنك من خلالها بناء الربح. كثير من المشاريع تنمو في عدد
          العملاء لكنها تتعثر ماليًا لأنها لا تقيس هذا الرقم بانتظام.
        </p>

        <p className="mb-6 leading-8 text-gray-700">
          الفكرة الأساسية بسيطة: قسّم التكاليف الثابتة على هامش المساهمة لكل وحدة أو لكل صفقة. لكن التنفيذ العملي يحتاج دقة في تعريف التكاليف
          واختيار السعر الفعلي وتقدير المصروفات المتغيرة. في هذا الدليل ستتبع خطوات واضحة لحساب نقطة التعادل بشكل قابل للتطبيق في SaaS والتجارة
          الإلكترونية والعمل الحر والخدمات المهنية.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">الخطوة الأولى: احصر التكاليف الثابتة الحقيقية</h2>
        <p className="mb-6 leading-8 text-gray-700">
          التكاليف الثابتة هي المصاريف التي لا تتغير مباشرة مع حجم المبيعات: الرواتب الأساسية، الإيجار، اشتراكات البرمجيات، المحاسبة، الأدوات
          الإدارية، والتأمين. لكي يكون الحساب موثوقًا، لا تكتفِ بالبنود الشهرية الواضحة فقط؛ وزّع التكاليف السنوية والربع سنوية على أساس شهري.
          مثال: إذا كنت تدفع اشتراكًا سنويًا في أداة تحليل بقيمة 3600 ريال، فإن التكلفة الشهرية الفعلية هي 300 ريال يجب إدخالها ضمن التكاليف
          الثابتة.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          في شركات SaaS غالبًا ما ينسى الفريق إدخال تكاليف البنية الأساسية الثابتة أو تراخيص الخدمات الأساسية. وفي الوكالات قد تُهمل تكلفة إدارة
          المشروع أو أدوات التواصل الداخلية. هذه التفاصيل الصغيرة تغيّر المعادلة بشكل ملحوظ، خصوصًا عندما يكون هامش الربح محدودًا.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">الخطوة الثانية: احسب سعر البيع الفعلي لا النظري</h2>
        <p className="mb-6 leading-8 text-gray-700">
          السعر الفعلي هو متوسط ما تقبضه بعد الخصومات، العروض، الكوبونات، والعمولات. إذا استخدمت سعرًا تسويقيًا مثاليًا فلن تحصل على نقطة تعادل
          واقعية. متجر يبيع منتجًا بسعر 250 ريالًا لكنه يقدم خصمًا دائمًا 20% ويخسر 3% رسوم دفع، لا يمكنه الحساب على 250 ريالًا. الأفضل هو
          احتساب متوسط صافي الإيراد لكل عملية بيع خلال آخر 60 أو 90 يومًا.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold">نصيحة عملية</h3>
        <p className="mb-6 leading-8 text-gray-700">
          إذا كان لديك أكثر من باقة أو منتج، احسب نقطة تعادل لكل عرض على حدة، ثم احسب نسخة مجمعة بمتوسط مرجح حسب حجم المبيعات. هذا مهم جدًا في
          الأعمال التي تجمع بين خطط اشتراك SaaS، خدمات تنفيذ، أو مبيعات منتجات رقمية ومادية معًا.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">الخطوة الثالثة: حدّد التكلفة المتغيرة لكل وحدة بدقة</h2>
        <p className="mb-6 leading-8 text-gray-700">
          التكلفة المتغيرة تشمل أي مصروف يرتبط مباشرة بكل عملية بيع: تكلفة المنتج، التغليف، الشحن، رسوم المعاملات، عمولة المنصة، الدعم الإضافي،
          أو وقت التنفيذ المباشر في الخدمات. في العمل الحر، قد تشمل ساعات مساعد مستقل أو أدوات ذكاء اصطناعي تدفع حسب الاستخدام. لا تفترض رقمًا
          واحدًا ثابتًا طوال العام؛ راقب التغيرات الموسمية في الشحن أو الرسوم أو نسب الإرجاع.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">الخطوة الرابعة: طبّق المعادلة الأساسية</h2>
        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-lg font-semibold text-gray-900">
            نقطة التعادل = التكاليف الثابتة ÷ هامش المساهمة للوحدة
          </p>
        </div>
        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-lg font-semibold text-gray-900">
            هامش المساهمة للوحدة = سعر البيع الفعلي − التكلفة المتغيرة للوحدة
          </p>
        </div>
        <p className="mb-6 leading-8 text-gray-700">
          الناتج يخبرك بعدد الوحدات أو الصفقات المطلوبة شهريًا للوصول إلى الصفر التشغيلي (لا ربح ولا خسارة). بعد هذا المستوى يبدأ الربح الفعلي.
          هذا الرقم هو أساس أي هدف مبيعات عقلاني.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">مثال كامل: نشاط خدمة رقمية</h2>
        <p className="mb-6 leading-8 text-gray-700">
          لنفترض شركة تقدم باقة إدارة حملات إعلانية للشركات الصغيرة. التكاليف الثابتة الشهرية 42,000 ريال (رواتب، أدوات، إدارة). متوسط سعر
          الباقة الفعلي بعد الخصومات 2,400 ريال. التكلفة المتغيرة لكل عميل 900 ريال (تنفيذ، دعم، عمولات دفع). إذًا هامش المساهمة لكل عميل:
          1,500 ريال.
        </p>
        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-lg font-semibold text-gray-900">42,000 ÷ 1,500 = 28 عميلًا</p>
        </div>
        <p className="mb-6 leading-8 text-gray-700">
          هذا يعني أن نقطة التعادل تساوي 28 عميلًا نشطًا شهريًا. إذا كان هدفك الربحي 30,000 ريال، فأنت تحتاج هامش مساهمة إضافيًا فوق التعادل
          بقيمة 30,000 ريال، أي 20 عميلًا إضافيًا تقريبًا. الآن أصبحت أهداف المبيعات مرتبطة مباشرة بالربح لا بعدد الصفقات فقط.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">نسخة الإيراد من نقطة التعادل (لمن يبيع بأسعار مختلفة)</h2>
        <p className="mb-6 leading-8 text-gray-700">
          عندما تختلف الأسعار من صفقة لأخرى، يفضل بعض المدراء استخدام نقطة التعادل بالإيراد بدل الوحدات. في هذه الحالة نستخدم معدل هامش المساهمة
          كنسبة مئوية من الإيراد.
        </p>
        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-lg font-semibold text-gray-900">
            نقطة التعادل بالإيراد = التكاليف الثابتة ÷ نسبة هامش المساهمة
          </p>
        </div>
        <p className="mb-6 leading-8 text-gray-700">
          هذه الطريقة مفيدة جدًا للوكالات متعددة الخدمات والمتاجر التي تبيع منتجات مختلفة الهوامش، لأنها تمنحك رقم إيراد أدنى يجب تحقيقه قبل
          الحديث عن التوسع أو زيادة المصروفات.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">أخطاء شائعة عند حساب نقطة التعادل</h2>
        <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
          <li>استخدام الإيراد الإجمالي بدل هامش المساهمة.</li>
          <li>نسيان رسوم الدفع والاسترجاع وتكلفة الدعم.</li>
          <li>الاعتماد على سعر بيع غير واقعي أو غير محدث.</li>
          <li>إدخال مصروفات متغيرة ضمن التكاليف الثابتة أو العكس.</li>
          <li>عدم إعادة الحساب بعد أي تغيير في التسعير أو النموذج التشغيلي.</li>
        </ul>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">كيف تحول النتيجة إلى خطة تنفيذ؟</h2>
        <h3 className="mb-3 mt-6 text-xl font-semibold">1) اربطها بقمع المبيعات</h3>
        <p className="mb-6 leading-8 text-gray-700">
          إذا كانت نقطة التعادل 28 عميلًا ومعدل التحويل من عميل محتمل إلى عميل مدفوع هو 14%، فأنت تحتاج تقريبًا 200 فرصة مبيعات شهرية للوصول إلى
          التعادل. بهذه الطريقة يصبح فريق التسويق مسؤولًا عن هدف واضح قابل للقياس.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold">2) اربطها بالتدفق النقدي</h3>
        <p className="mb-6 leading-8 text-gray-700">
          حتى لو حققت نقطة التعادل محاسبيًا، قد تواجه ضغطًا نقديًا إذا كانت دورة التحصيل طويلة. لذلك راقب زمن التحصيل وتاريخ الفوترة بجانب نقطة
          التعادل، خصوصًا في الأعمال B2B والخدمات الاستشارية.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold">3) حدّث الحساب شهريًا</h3>
        <p className="mb-6 leading-8 text-gray-700">
          التكاليف تتغير، والسوق يتغير، وسلوك العملاء يتغير. لهذا لا يكفي حساب نقطة التعادل مرة واحدة. اجعلها جزءًا من تقرير الأداء الشهري مع
          مقارنة بين التوقع والواقع، وستكتشف مبكرًا أي انحراف يهدد الربحية.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">مؤشرات يجب مراقبتها مع نقطة التعادل</h2>
        <p className="mb-6 leading-8 text-gray-700">
          حتى يكون حسابك عمليًا في الإدارة اليومية، اربط نقطة التعادل بثلاثة مؤشرات: متوسط هامش المساهمة، تكلفة اكتساب العميل، ومعدل الاحتفاظ.
          إذا تحسن أحدها سينخفض زمن الوصول إلى التعادل، وإذا تراجع أحدها سترتفع المخاطر حتى لو استمر الإيراد في النمو. هذا الربط يخلق لوحة قيادة
          واضحة تساعد فرق التسويق والمبيعات والعمليات على العمل بلغة واحدة.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          في مشاريع SaaS مثلًا، قد تتغير نقطة التعادل ليس بسبب السعر فقط، بل بسبب churn المبكر الذي يضعف صافي الإيراد المتكرر. وفي الخدمات
          المهنية قد يتغير الرقم بسبب زيادة ساعات التنفيذ غير المفوترة. لذلك من الأفضل مراجعة افتراضاتك شهريًا وتثبيت نسخة محدثة من النموذج بدل
          الاعتماد على حساب قديم لا يعكس الواقع الحالي.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">الخلاصة</h2>
        <p className="mb-6 leading-8 text-gray-700">
          حساب نقطة التعادل ليس تمرينًا نظريًا؛ إنه أداة تشغيلية تحمي مشروعك من القرارات المكلفة. عندما تتقن حسابها، ستعرف بدقة الحد الأدنى
          المطلوب للبقاء، والمستوى المطلوب للنمو، والهامش المتاح للاستثمار. هذه الرؤية تمنحك أفضلية حقيقية في إدارة التسعير، التوسع، وربحية
          العمل—سواء كنت تدير SaaS، متجرًا إلكترونيًا، أو خدمات مستقلة.
        </p>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">ابدأ بالحساب الآن</h3>
          <p className="mb-4 leading-8 text-gray-700">
            استخدم حاسبة ProfitHub لنقطة التعادل لحساب الحد الأدنى للمبيعات واختبار أثر التسعير والتكاليف على ربحك الشهري.
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
          How to Calculate Breakeven Point: Formula, Example, and Why It Matters
        </h1>

        <p className="mb-6 text-lg leading-8 text-gray-700">
          To calculate breakeven point, divide your fixed costs by your
          contribution margin per unit. The result tells you how many units you
          need to sell before your business stops losing money.
        </p>

        <p className="mb-6 leading-8 text-gray-700">
          This is not just accounting theory. It is operational intelligence. A
          business that does not know its breakeven point is making pricing and
          growth decisions without understanding its survival threshold.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          The formula
        </h2>

        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-lg font-semibold text-gray-900">
            Breakeven Point = Fixed Costs ÷ Contribution Margin Per Unit
          </p>
        </div>

        <p className="mb-6 leading-8 text-gray-700">
          Contribution margin per unit means:
        </p>

        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-lg font-semibold text-gray-900">
            Selling Price Per Unit - Variable Cost Per Unit
          </p>
        </div>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          Example calculation
        </h2>

        <p className="mb-6 leading-8 text-gray-700">
          Let’s say your business has:
        </p>

        <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
          <li>Fixed costs: $5,000</li>
          <li>Selling price per unit: $80</li>
          <li>Variable cost per unit: $30</li>
        </ul>

        <p className="mb-6 leading-8 text-gray-700">
          Contribution margin is $50. Now divide fixed costs by that number:
        </p>

        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-lg font-semibold text-gray-900">
            $5,000 ÷ $50 = 100 units
          </p>
        </div>

        <p className="mb-6 leading-8 text-gray-700">
          Your breakeven point is 100 units.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          Why businesses miscalculate breakeven
        </h2>

        <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
          <li>They forget small recurring fixed costs</li>
          <li>They use gross revenue instead of contribution margin</li>
          <li>They underestimate variable costs like shipping or fees</li>
          <li>They ignore discounts, returns, or fulfillment leakage</li>
        </ul>

        <p className="mb-6 leading-8 text-gray-700">
          A wrong breakeven estimate creates false confidence. That can lead to
          underpricing, weak forecasts, and poor cash planning.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          Use breakeven before you set targets
        </h2>

        <p className="mb-6 leading-8 text-gray-700">
          Breakeven should sit under your pricing model, your sales plan, and your
          growth projections. It is one of the fastest ways to stress-test whether
          your business model can support itself.
        </p>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">
            Run the numbers properly
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Use the ProfitHub Breakeven Calculator to estimate your break-even
            sales volume and see whether your pricing supports profitability.
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
        Comment calculer le point mort : formule simple, exemple concret et décisions clés
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        Calculer le point mort est l’un des gestes les plus importants pour piloter un business rentable. Que vous soyez dirigeant d’une PME, fondateur d’un SaaS, e-commerçant ou freelance, ce calcul vous indique le volume minimum à vendre pour couvrir tous vos coûts. Tant que vous êtes en dessous, vous financez votre activité à perte. Dès que vous passez au-dessus, vous commencez enfin à créer du profit.
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        La bonne nouvelle, c’est que la méthode est simple. La mauvaise, c’est que beaucoup d’entreprises la font mal : coûts oubliés, marges surestimées, prix non réalistes. Résultat : elles pensent être rentables alors qu’elles s’approchent d’une tension de trésorerie. Dans cet article, vous allez apprendre une méthode claire, reproductible et orientée décision pour calculer votre point mort de façon fiable.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Étape 1 : clarifier les coûts fixes</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Les coûts fixes sont les charges qui existent même sans ventes. Exemples : loyers, salaires permanents, abonnements logiciels, assurance, comptabilité, hébergement web, outils marketing mensuels. En SaaS, vous pouvez inclure l’infrastructure de base, les licences produit et la masse salariale non variable. En freelance, ce sont les outils, charges administratives et frais de structure.
      </p>
      <p className="mb-6 leading-8 text-gray-700">
        Pour un calcul utile, faites le total mensuel réel, pas une estimation “au doigt mouillé”. Ajoutez aussi les dépenses trimestrielles et annuelles au prorata mensuel. C’est souvent là que le point mort est sous-estimé.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Étape 2 : déterminer le prix de vente unitaire réel</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Votre prix unitaire doit refléter la réalité des ventes : remises, offres promotionnelles, bundles, commissions éventuelles. Si vous utilisez un prix catalogue trop optimiste, votre point mort sera artificiellement bas. En e-commerce, mieux vaut calculer un prix moyen réellement encaissé. En prestation, utilisez le prix moyen facturé après négociation.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Étape 3 : calculer le coût variable unitaire</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Le coût variable unitaire correspond à ce que vous dépensez à chaque vente : fabrication, logistique, commission plateforme, frais de paiement, support additionnel, sous-traitance, etc. Plus ce coût est précis, plus votre pilotage est fiable. C’est un élément central pour un business SaaS (coûts API, service client), un commerce en ligne (fulfillment, retours) ou un freelance (temps externalisé, outils facturés au client).
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Étape 4 : appliquer la formule</h2>
      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">
          Point mort (unités) = Coûts fixes ÷ (Prix de vente unitaire − Coût variable unitaire)
        </p>
      </div>
      <p className="mb-6 leading-8 text-gray-700">
        La partie « Prix − Coût variable » est votre marge de contribution par unité. Cette marge sert d’abord à absorber les coûts fixes. Une fois ces coûts couverts, chaque vente supplémentaire augmente le profit.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Exemple complet</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Prenons un business digital qui vend un service à 150 €. Les coûts fixes mensuels sont de 6 000 € (équipe, outils, marketing de base). Le coût variable moyen est de 45 € par vente (paiement, support, opérations). La marge de contribution est donc de 105 €.
      </p>
      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">6 000 € ÷ 105 € = 57,14</p>
      </div>
      <p className="mb-6 leading-8 text-gray-700">
        Le point mort est de 58 ventes mensuelles. Ce chiffre devient votre seuil de sécurité. Il peut être traduit en objectifs marketing : nombre de leads requis, conversion minimale, budget d’acquisition admissible et capacité opérationnelle nécessaire.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Version chiffre d’affaires du point mort</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Vous pouvez aussi calculer un point mort en euros de chiffre d’affaires, utile quand les ventes ont des paniers variables. On utilise alors le taux de marge sur coût variable. Cette approche est pratique pour les business multi-offres ou les agences.
      </p>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Formule simplifiée</h3>
      <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-lg font-semibold text-gray-900">
          Point mort (CA) = Coûts fixes ÷ Taux de marge sur coût variable
        </p>
      </div>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Les erreurs qui faussent le calcul</h2>
      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Confondre marge brute et marge de contribution.</li>
        <li>Exclure les frais de paiement, retours, commissions ou SAV.</li>
        <li>Utiliser un prix théorique au lieu du prix moyen réellement encaissé.</li>
        <li>Ne pas actualiser le calcul après une hausse de coûts ou un changement d’offre.</li>
        <li>Ignorer la saisonnalité dans le plan mensuel.</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Comment utiliser le point mort pour mieux décider</h2>
      <h3 className="mb-3 mt-6 text-xl font-semibold">Pricing</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Avant toute promotion, mesurez son impact sur le point mort. Une réduction peut augmenter les ventes mais dégrader le profit si la marge unitaire chute trop.
      </p>
      <h3 className="mb-3 mt-6 text-xl font-semibold">Acquisition client</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Votre coût d’acquisition doit rester cohérent avec la marge de contribution. Sinon vous vendez plus… pour gagner moins.
      </p>
      <h3 className="mb-3 mt-6 text-xl font-semibold">Capacité opérationnelle</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Si le point mort exige un volume supérieur à votre capacité de production ou d’exécution, ce n’est pas un problème marketing : c’est un problème de modèle économique.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Conclusion</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Calculer le point mort n’est pas une option, c’est un standard de gestion. C’est la base pour fixer des objectifs réalistes, sécuriser la trésorerie et construire une croissance saine. Plus votre business grandit, plus ce calcul doit être révisé régulièrement. Avec une méthode claire, vous prenez des décisions de prix, de recrutement et d’investissement avec une logique financière solide, au lieu de piloter à l’intuition.
      </p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">Passez au calcul concret</h3>
        <p className="mb-4 leading-8 text-gray-700">
          Utilisez le calculateur ProfitHub pour estimer votre point mort en quelques minutes et ajuster votre stratégie de profit.
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
