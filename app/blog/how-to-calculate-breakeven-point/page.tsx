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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return locale === "fr" ? frMeta : enMeta;
}

export default async function Page() {
  const locale = await getRequestLocale();

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
