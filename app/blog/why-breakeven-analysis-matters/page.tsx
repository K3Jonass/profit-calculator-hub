import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";

const enMeta = {
  title: "Why Breakeven Analysis Matters: The Fastest Way to Test a Business Model",
  description:
    "Learn why breakeven analysis matters for pricing, planning, and profitability, and how it helps small businesses make smarter decisions.",
};

const frMeta = {
  title: "Pourquoi l’analyse du point mort est le test le plus rapide d’un modèle économique",
  description:
    "Découvrez pourquoi l’analyse du point mort aide les entreprises, SaaS et freelances à valider prix, coûts et profit avant d’investir.",
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
          Why Breakeven Analysis Matters: The Fastest Way to Test a Business Model
        </h1>

        <p className="mb-6 text-lg leading-8 text-gray-700">
          Breakeven analysis matters because it reveals the minimum sales volume
          your business needs to survive. Before profit. Before scale. Before
          optimism.
        </p>

        <p className="mb-6 leading-8 text-gray-700">
          Too many businesses launch with marketing plans, revenue targets, and
          growth assumptions without knowing the basic threshold where the model
          stops burning cash. Breakeven analysis fixes that.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          It turns business ideas into measurable reality
        </h2>

        <p className="mb-6 leading-8 text-gray-700">
          A business model may sound attractive in theory, but breakeven analysis
          asks a harder question: how many units do we actually need to sell to
          cover the machine?
        </p>

        <p className="mb-6 leading-8 text-gray-700">
          That one question can expose weak pricing, bloated costs, or an
          unrealistic customer acquisition assumption before damage compounds.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          It improves pricing decisions
        </h2>

        <p className="mb-6 leading-8 text-gray-700">
          If your breakeven point is too high, you may not have a sales problem.
          You may have a pricing problem. Or a cost structure problem. Breakeven
          analysis helps you see which lever matters most.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          It creates smarter sales targets
        </h2>

        <p className="mb-6 leading-8 text-gray-700">
          Sales teams often get targets with no financial logic underneath them.
          Breakeven gives your targets a floor. It shows the minimum required
          performance just to keep the model alive.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          It helps founders avoid false momentum
        </h2>

        <p className="mb-6 leading-8 text-gray-700">
          Growth can look exciting while the business is still below breakeven.
          That is dangerous because it creates emotional confidence without
          economic proof. Breakeven analysis removes that illusion.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold">
          Use it early, not after problems show up
        </h2>

        <p className="mb-6 leading-8 text-gray-700">
          The best time to run breakeven analysis is before pricing goes live,
          before ad spend, and before you commit resources to full execution.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">
        Pourquoi l’analyse du point mort est le test le plus rapide d’un modèle économique
      </h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">
        Une idée de business peut sembler brillante sur le papier et pourtant échouer rapidement en réalité. Pourquoi ? Parce qu’entre la promesse commerciale et la rentabilité, il existe une frontière financière que beaucoup d’entrepreneurs ignorent : le point mort. L’analyse du point mort répond à une question simple et décisive : « Combien dois-je vendre pour couvrir mes coûts et arrêter de perdre de l’argent ? »
      </p>

      <p className="mb-6 leading-8 text-gray-700">
        Cette analyse est l’un des outils les plus utiles pour une entreprise, un SaaS, une activité freelance ou un commerce en ligne. Elle transforme des hypothèses floues en objectifs mesurables. Elle évite les décisions prises à l’intuition. Et surtout, elle protège votre profit en révélant très tôt si votre modèle économique est solide ou fragile.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">L’analyse du point mort valide la viabilité avant la croissance</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Beaucoup de plans de croissance commencent par la pub, le contenu, les funnels et les objectifs de chiffre d’affaires. Pourtant, si la structure économique est mauvaise, accélérer ne fait qu’amplifier les pertes. L’analyse du point mort remet l’ordre des priorités : d’abord prouver que le modèle tient, ensuite investir pour l’amplifier.
      </p>
      <p className="mb-6 leading-8 text-gray-700">
        C’est particulièrement vrai dans les business SaaS et les activités de service. Vous pouvez signer des clients, générer des revenus récurrents et malgré tout rester sous le seuil de rentabilité à cause d’un coût d’acquisition trop élevé, d’un churn important ou d’une marge unitaire insuffisante. Le point mort vous force à confronter votre stratégie à la réalité économique.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Un outil puissant pour le pricing</h2>
      <h3 className="mb-3 mt-6 text-xl font-semibold">Détecter un prix trop bas</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Si votre point mort exige un volume irréaliste, ce n’est pas toujours un problème commercial. C’est souvent un problème de prix. Un tarif trop faible peut augmenter la conversion mais tuer la rentabilité. L’analyse du point mort permet d’estimer rapidement si votre pricing supporte vos coûts fixes et vos ambitions de profit.
      </p>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Tester plusieurs scénarios de marge</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Avec le point mort, vous pouvez simuler plusieurs versions de votre offre : prix premium, offre standard, offre d’entrée. Vous voyez immédiatement l’impact sur le volume à atteindre. Ce type de simulation est précieux pour les freelances qui hésitent entre tarif journalier et forfait, ou pour les entreprises SaaS qui construisent des plans mensuels et annuels.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Un cadre clair pour les objectifs commerciaux</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Dans beaucoup d’équipes, les objectifs de vente sont définis sans logique financière claire. L’analyse du point mort crée une base rationnelle. Elle vous donne d’abord un plancher (survivre), puis un niveau cible (rentabilité), puis un niveau d’ambition (croissance). Cette hiérarchie améliore les prévisions et limite les décisions émotionnelles.
      </p>
      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Seuil 1 : couvrir les coûts fixes.</li>
        <li>Seuil 2 : atteindre un profit minimal sécurisant la trésorerie.</li>
        <li>Seuil 3 : financer les investissements (équipe, acquisition, produit).</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Pourquoi elle évite les faux signaux de succès</h2>
      <p className="mb-6 leading-8 text-gray-700">
        Le chiffre d’affaires seul peut être trompeur. Une entreprise peut annoncer une belle croissance et continuer à brûler du cash. Ce phénomène est fréquent quand les coûts variables augmentent en silence : frais de paiement, support, retours, sous-traitance, commissions. L’analyse du point mort agit comme un garde-fou : elle révèle si la croissance crée vraiment de la valeur.
      </p>
      <p className="mb-6 leading-8 text-gray-700">
        Pour un freelance, c’est pareil. Un agenda plein ne garantit pas un bon revenu. Si les projets sont mal pricés, trop longs ou consomment trop de ressources, le volume de travail peut masquer une rentabilité faible. Le point mort remet le focus sur l’essentiel : ce que vous conservez réellement après coûts.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">L’analyse du point mort améliore les décisions d’investissement</h2>
      <h3 className="mb-3 mt-6 text-xl font-semibold">Recrutement et charges fixes</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Chaque recrutement augmente les coûts fixes. Avant d’embaucher, recalculer le point mort permet de savoir combien de ventes supplémentaires sont nécessaires pour absorber ce coût. Vous évitez ainsi d’ajouter de la structure sans capacité réelle à la financer.
      </p>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Budget marketing</h3>
      <p className="mb-6 leading-8 text-gray-700">
        Injecter du budget acquisition sans analyser le point mort est risqué. Si la marge de contribution est trop faible, plus de trafic peut augmenter les pertes. En liant point mort, CAC et conversion, vous construisez un système plus robuste, orienté profit et non vanity metrics.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Quand faire l’analyse du point mort ?</h2>
      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        <li>Avant le lancement d’une nouvelle offre ou d’un nouveau service.</li>
        <li>Avant un changement de prix significatif.</li>
        <li>Avant un recrutement ou une hausse durable des coûts fixes.</li>
        <li>Avant de scaler l’acquisition payante.</li>
        <li>Après tout changement de modèle : abonnement, package, upsell, etc.</li>
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Erreurs courantes à corriger</h2>
      <p className="mb-6 leading-8 text-gray-700">
        L’analyse est simple, mais sa qualité dépend des hypothèses. Les erreurs les plus fréquentes sont : oublier certains coûts fixes, surestimer le prix moyen encaissé, négliger les coûts variables cachés et ne pas réviser le calcul quand le business évolue. Une bonne pratique consiste à mettre à jour le point mort chaque mois, puis à comparer prévision et réel.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Conclusion</h2>
      <p className="mb-6 leading-8 text-gray-700">
        L’analyse du point mort est le test de réalité le plus rapide pour un modèle économique. Elle vous dit si votre business peut survivre, puis prospérer, avec vos prix et vos coûts actuels. C’est un outil essentiel pour les entrepreneurs, les équipes SaaS et les freelances qui veulent prendre de meilleures décisions, réduire le risque et construire une croissance durable. En clair : avant d’accélérer, vérifiez le seuil de rentabilité. C’est la base d’un pilotage sérieux du profit.
      </p>
    </main>
  );
}
