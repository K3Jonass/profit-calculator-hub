import Link from "next/link";

type FrenchLocalizedArticleProps = {
  slug:
    | "what-is-cost-of-delay"
    | "cost-of-delay-explained"
    | "how-to-calculate-cost-of-delay"
    | "cost-of-delay-examples"
    | "what-is-a-revenue-share-agreement"
    | "how-to-calculate-revenue-share"
    | "revenue-share-vs-profit-share"
    | "what-is-subscription-leak"
    | "how-to-reduce-subscription-churn"
    | "subscription-leak-calculator-guide";
  title: string;
  ctaHref: string;
  ctaText: string;
};

type ArticleContent = {
  keyword: string;
  intro: string;
  context: string;
  h2a: string;
  h2aBody: string;
  h2b: string;
  h2bBody: string;
  h2c: string;
  h2cBody: string;
  conclusion: string;
  related: Array<{ href: string; label: string }>;
};

const articleContent: Record<FrenchLocalizedArticleProps["slug"], ArticleContent> = {
  "what-is-cost-of-delay": {
    keyword: "coût du retard",
    intro:
      "Le coût du retard correspond à la valeur économique que vous perdez quand une décision importante est reportée. Cela peut être du chiffre d’affaires non capturé, une marge qui se dégrade, des clients qui n’activent jamais, ou une fenêtre de marché ratée.",
    context:
      "Dans les équipes produit, marketing ou opérations, le retard est souvent perçu comme un inconfort organisationnel. En réalité, c’est une ligne de perte financière. Nommer ce coût permet de transformer un débat subjectif en arbitrage mesurable.",
    h2a: "Comment reconnaître un coût du retard dans votre activité",
    h2aBody:
      "Cherchez les décisions qui influencent directement conversion, rétention, prix, délai de livraison ou vitesse d’encaissement. Si repousser un sujet d’une semaine modifie un de ces leviers, vous avez probablement un coût du retard significatif.",
    h2b: "Pourquoi les entreprises sous-estiment ce coût",
    h2bBody:
      "La plupart des équipes mesurent ce qui est visible (trafic, volume, tickets), mais pas ce qui est absent (revenu qui aurait dû exister). Sans estimation hebdomadaire de valeur perdue, les priorités basculent vers l’urgent perçu plutôt que l’économique réel.",
    h2c: "Passer d’une logique de backlog à une logique économique",
    h2cBody:
      "Un cadre simple suffit : valeur hebdomadaire attendue, délai probable de livraison, coût de non-exécution. Dès que ces trois variables sont visibles, la priorisation devient plus claire et les décisions gagnent en cohérence.",
    conclusion:
      "Comprendre le coût du retard, ce n’est pas complexifier la gestion : c’est éviter de perdre silencieusement des semaines de croissance. C’est l’un des leviers les plus rapides pour améliorer la qualité de vos décisions.",
    related: [
      { href: "/blog/how-to-calculate-cost-of-delay", label: "Comment calculer le coût du retard" },
      { href: "/blog/cost-of-delay-examples", label: "Exemples concrets de coût du retard" },
    ],
  },
  "cost-of-delay-explained": {
    keyword: "coût du retard en entreprise",
    intro:
      "Quand une équipe repousse un lancement, une correction de tunnel ou une hausse de prix, elle ne « gagne pas du temps ». Elle déplace simplement la facture dans le futur. Le coût du retard en entreprise est cette facture cachée.",
    context:
      "Ce concept est utile parce qu’il relie stratégie et exécution. Il rend visible l’impact de l’attente sur la croissance, la trésorerie et la capacité d’apprentissage. Plus l’organisation tarde, plus il devient difficile de rattraper la valeur perdue.",
    h2a: "Retard tactique vs retard stratégique",
    h2aBody:
      "Tous les retards ne se valent pas. Reporter une micro-optimisation a peu d’effet ; repousser un levier d’activation, de pricing ou de rétention peut coûter des milliers d’euros. La clé est de distinguer l’inconfort opérationnel du risque économique.",
    h2b: "Ce que le coût du retard change dans la gouvernance",
    h2bBody:
      "Les discussions cessent d’être politiques : elles deviennent chiffrées. Au lieu de demander « qui veut quoi ? », vous posez « que perd-on par semaine si on attend ? ». Ce changement améliore la vitesse d’exécution et la qualité des arbitrages inter-équipes.",
    h2c: "Un indicateur à suivre chaque semaine",
    h2cBody:
      "Intégrez le coût du retard dans vos rituels de priorisation hebdomadaire, avec une estimation prudente et un niveau de confiance. Même imparfait, ce cadre réduit les erreurs de séquencement et protège mieux la marge.",
    conclusion:
      "Le coût du retard n’est pas une théorie de consultant : c’est un outil de pilotage. Quand vous le suivez régulièrement, vous accélérez les bons sujets et vous limitez les pertes silencieuses.",
    related: [
      { href: "/blog/what-is-cost-of-delay", label: "Définition du coût du retard" },
      { href: "/blog/how-to-calculate-cost-of-delay", label: "Formule de calcul" },
    ],
  },
  "how-to-calculate-cost-of-delay": {
    keyword: "calcul du coût du retard",
    intro:
      "Le calcul du coût du retard repose sur une idée simple : estimer ce que vous auriez gagné (ou évité de perdre) chaque semaine si l’initiative avait été lancée à temps.",
    context:
      "Vous n’avez pas besoin d’un modèle financier complexe. Une estimation prudente, cohérente et documentée suffit pour comparer les priorités et éviter les erreurs de séquencement.",
    h2a: "Formule minimale à utiliser",
    h2aBody:
      "Coût du retard = valeur hebdomadaire attendue × nombre de semaines de report. La valeur peut être exprimée en MRR, marge, coût évité ou revenus additionnels.",
    h2b: "Sources de données fiables",
    h2bBody:
      "Appuyez-vous sur vos données existantes : conversion, panier moyen, churn, taux de paiement, taux d’activation. Plus vos hypothèses sont reliées à des données observées, plus votre estimation est utile pour décider rapidement.",
    h2c: "Erreur classique à éviter",
    h2cBody:
      "Ne calculez pas sur le chiffre d’affaires brut uniquement. Intégrez la marge réelle et les coûts variables pour éviter de sur-prioriser des projets qui semblent gros mais rapportent peu en net.",
    conclusion:
      "Un bon calcul du coût du retard ne cherche pas la perfection. Il vise une meilleure décision aujourd’hui. C’est ce qui permet de prioriser vite sans piloter à l’aveugle.",
    related: [
      { href: "/blog/cost-of-delay-examples", label: "Voir des exemples chiffrés" },
      { href: "/blog/what-is-cost-of-delay", label: "Revoir la définition" },
    ],
  },
  "cost-of-delay-examples": {
    keyword: "exemples de coût du retard",
    intro:
      "Les exemples de coût du retard sont la meilleure façon de comprendre l’impact réel de l’attente. Ils montrent que quelques semaines de report suffisent à créer des pertes importantes.",
    context:
      "Que vous soyez en e-commerce, SaaS ou prestation de services, le mécanisme est identique : quand un levier rentable attend trop longtemps, la valeur potentielle disparaît et ne se rattrape pas toujours.",
    h2a: "Exemple e-commerce",
    h2aBody:
      "Une boutique retarde un bundle qui augmente normalement le panier moyen. Le report réduit mécaniquement la marge mensuelle, alors que le trafic continue de coûter. La performance apparente tient, mais le profit réel baisse.",
    h2b: "Exemple SaaS",
    h2bBody:
      "Un produit SaaS diffère la mise en place d’un parcours de récupération des paiements échoués. Chaque semaine de retard laisse sortir du MRR évitable. Le coût est double : revenu immédiat perdu + LTV non capturée.",
    h2c: "Exemple freelance/agence",
    h2cBody:
      "Une agence tarde à standardiser ses clauses de validation. Résultat : retards de facturation, cycles d’approbation plus longs, cash-flow instable. Le coût du retard est ici opérationnel et financier.",
    conclusion:
      "Ces exemples confirment une chose : attendre est une décision coûteuse. Mettre un chiffre sur cette attente permet de choisir plus intelligemment vos prochaines actions.",
    related: [
      { href: "/blog/how-to-calculate-cost-of-delay", label: "Méthode de calcul" },
      { href: "/blog/cost-of-delay-explained", label: "Explication complète" },
    ],
  },
  "what-is-a-revenue-share-agreement": {
    keyword: "accord de partage de revenus",
    intro:
      "Un accord de partage de revenus définit comment deux parties se répartissent les ventes générées par une activité commune. Il doit clarifier la base de calcul, la fréquence de paiement et les responsabilités opérationnelles.",
    context:
      "En pratique, la plupart des tensions ne viennent pas du pourcentage lui-même, mais des zones grises : revenus inclus/exclus, remboursements, attribution, calendrier de reporting.",
    h2a: "Les clauses indispensables",
    h2aBody:
      "Précisez la définition du revenu, les déductions autorisées, le timing de versement, l’accès aux données et les conditions de sortie. Sans ces éléments, un deal attractif devient vite source de friction.",
    h2b: "Comment rendre le modèle équitable",
    h2bBody:
      "Un partage juste reflète la contribution réelle : audience, exécution, risque assumé, coûts de support. Le bon accord protège le potentiel des deux côtés et réduit les conflits lors de la montée en volume.",
    h2c: "Pilotage mensuel conseillé",
    h2cBody:
      "Mettez en place un reporting mensuel standard (revenu brut, ajustements, net partageable, montant dû). La transparence régulière est la meilleure assurance contre les litiges.",
    conclusion:
      "Un bon accord de partage de revenus est simple à comprendre, facile à auditer et robuste en cas de croissance. C’est ce qui transforme un partenariat opportuniste en relation durable.",
    related: [
      { href: "/blog/how-to-calculate-revenue-share", label: "Calculer un split de revenus" },
      { href: "/blog/revenue-share-vs-profit-share", label: "Comparer les modèles" },
    ],
  },
  "how-to-calculate-revenue-share": {
    keyword: "calcul du partage de revenus",
    intro:
      "Le calcul du partage de revenus consiste à appliquer un pourcentage convenu à une base de revenus clairement définie. La simplicité de la formule ne doit pas masquer l’importance du cadrage contractuel.",
    context:
      "Avant de calculer, il faut verrouiller les règles : TVA incluse ou non, remboursements, remises, commissions de plateforme, timing de reconnaissance.",
    h2a: "Formule de base",
    h2aBody:
      "Montant partenaire = revenus partageables × pourcentage convenu. Cette formule fonctionne seulement si « revenus partageables » est explicitement défini dans le contrat.",
    h2b: "Cas où la formule déraille",
    h2bBody:
      "Les erreurs viennent souvent d’une base ambiguë : net de quoi ? avant ou après promo ? quel mois de référence ? Sans gouvernance claire, même un calcul simple devient contesté.",
    h2c: "Bonnes pratiques de vérification",
    h2cBody:
      "Préparez un relevé mensuel standardisé, faites valider les hypothèses au démarrage, et conservez un historique de calcul. Cette discipline augmente la confiance et accélère les paiements.",
    conclusion:
      "Calculer un partage de revenus, c’est surtout sécuriser la méthode et la transparence. Une formule claire + un reporting stable évitent la majorité des conflits.",
    related: [
      { href: "/blog/what-is-a-revenue-share-agreement", label: "Structure d’un accord" },
      { href: "/blog/revenue-share-vs-profit-share", label: "Choisir le bon modèle" },
    ],
  },
  "revenue-share-vs-profit-share": {
    keyword: "partage de revenus vs partage de profits",
    intro:
      "Le partage de revenus rémunère sur le chiffre d’affaires. Le partage de profits rémunère après déduction des coûts. Cette différence semble simple, mais elle change profondément les incitations et le niveau de confiance requis.",
    context:
      "En phase de démarrage, le partage de revenus est souvent préféré pour sa lisibilité. Le partage de profits peut être plus juste à long terme, mais exige une comptabilité solide et une transparence forte.",
    h2a: "Quand choisir le partage de revenus",
    h2aBody:
      "Choisissez-le quand vous voulez un modèle auditable rapidement, avec une base claire et moins de débats sur les coûts internes. Il convient bien aux deals créateur-opérateur ou acquisition-distribution.",
    h2b: "Quand choisir le partage de profits",
    h2bBody:
      "Choisissez-le quand les partenaires veulent aligner la rentabilité nette et partagent l’accès aux données de coûts. Ce modèle est puissant, mais plus sensible aux désaccords sur l’allocation des dépenses.",
    h2c: "Critères de décision",
    h2cBody:
      "Évaluez la maturité financière, la qualité du reporting, la confiance interpartenaire et le rythme de croissance attendu. Le bon modèle est celui que vous pouvez exécuter proprement chaque mois.",
    conclusion:
      "Il n’existe pas de modèle universellement supérieur : il existe un modèle adapté à votre contexte. Priorisez clarté, auditabilité et alignement des incitations.",
    related: [
      { href: "/blog/what-is-a-revenue-share-agreement", label: "Bases contractuelles" },
      { href: "/blog/how-to-calculate-revenue-share", label: "Formules et exemples" },
    ],
  },
  "what-is-subscription-leak": {
    keyword: "fuite d’abonnement",
    intro:
      "La fuite d’abonnement représente le MRR perdu à cause de churn évitable, d’échecs de paiement non récupérés et de parcours client trop fragiles. C’est une perte progressive, souvent invisible au quotidien.",
    context:
      "Beaucoup d’équipes suivent les nouvelles ventes, mais pas les revenus qui sortent par les « micro-fuites ». Résultat : le business croit en acquisition, puis stagne en net à cause d’une rétention insuffisante.",
    h2a: "Principales sources de fuite",
    h2aBody:
      "Onboarding faible, manque d’activation, support tardif, recouvrement des paiements incomplet, et expérience d’annulation non maîtrisée. Ces points cumulés réduisent fortement la valeur vie client.",
    h2b: "Signaux à surveiller",
    h2bBody:
      "Taux de paiement échoué, churn des 30/60 premiers jours, baisse d’usage, tickets support récurrents, et ratio expansion/contraction. Ces indicateurs révèlent la qualité réelle de votre rétention.",
    h2c: "Priorités d’action",
    h2cBody:
      "Commencez par récupérer les paiements échoués et améliorer l’activation initiale. Ce sont souvent les leviers les plus rapides pour réduire la fuite sans augmenter immédiatement le budget acquisition.",
    conclusion:
      "Mesurer la fuite d’abonnement, c’est protéger votre MRR existant. Dans un modèle récurrent, ce réflexe est aussi important que générer de nouveaux leads.",
    related: [
      { href: "/blog/how-to-reduce-subscription-churn", label: "Réduire le churn" },
      { href: "/blog/subscription-leak-calculator-guide", label: "Estimer le MRR perdu" },
    ],
  },
  "how-to-reduce-subscription-churn": {
    keyword: "réduction du churn d’abonnement",
    intro:
      "Réduire le churn d’abonnement ne dépend pas d’une seule campagne de rétention. C’est un système : activation rapide, suivi d’usage, recouvrement des paiements et interventions ciblées avant résiliation.",
    context:
      "Le churn est rarement un événement isolé ; c’est souvent la conséquence d’une promesse mal tenue dans les premières semaines. Plus vous détectez tôt le risque, plus la rétention devient rentable.",
    h2a: "Travailler les 30 premiers jours",
    h2aBody:
      "La période d’onboarding détermine une grande partie du churn futur. Clarifiez la valeur attendue, accompagnez les étapes critiques et mesurez l’activation réelle, pas seulement l’inscription.",
    h2b: "Récupérer les paiements échoués",
    h2bBody:
      "Un dispositif de relance des paiements bien configuré (relances automatiques, nouvelles tentatives, messages clairs) permet souvent de récupérer un MRR perdu sans coût d’acquisition supplémentaire.",
    h2c: "Orchestrer une rétention proactive",
    h2cBody:
      "Définissez des signaux de risque (baisse d’usage, tickets récurrents, absence d’activation) puis activez des séquences de prévention avant la demande de résiliation.",
    conclusion:
      "La réduction du churn est un avantage structurel : elle améliore le cash-flow, diminue la pression commerciale et augmente la valeur vie client.",
    related: [
      { href: "/blog/what-is-subscription-leak", label: "Comprendre la fuite d’abonnement" },
      { href: "/blog/subscription-leak-calculator-guide", label: "Quantifier les pertes" },
    ],
  },
  "subscription-leak-calculator-guide": {
    keyword: "calculateur de fuite d’abonnement",
    intro:
      "Un calculateur de fuite d’abonnement aide à transformer un problème diffus en indicateur concret : combien de MRR quitte votre système chaque mois, et quelles actions offrent le meilleur retour.",
    context:
      "Sans chiffrage, les équipes traitent la rétention comme un sujet qualitatif. Avec un calculateur, vous comparez des scénarios et vous priorisez les leviers selon leur impact financier attendu.",
    h2a: "Données à renseigner",
    h2aBody:
      "MRR actuel, churn mensuel, paiements échoués, taux de récupération, et horizon temporel. Ces variables suffisent pour obtenir une première estimation exploitable.",
    h2b: "Interpréter les résultats",
    h2bBody:
      "Le résultat principal n’est pas seulement le MRR perdu, mais la hiérarchie d’actions : ce que vous récupérez en améliorant les relances de paiement, en réduisant le churn précoce, ou en augmentant l’activation.",
    h2c: "Transformer le calcul en plan d’action",
    h2cBody:
      "Associez chaque perte estimée à un responsable, une échéance et un indicateur de suivi. Un calculateur crée de la valeur seulement s’il débouche sur une exécution cadencée.",
    conclusion:
      "Utilisé chaque mois, un calculateur de fuite d’abonnement devient un outil de gouvernance rétention. Il permet de défendre les priorités sur des bases chiffrées et partagées.",
    related: [
      { href: "/blog/what-is-subscription-leak", label: "Définition de la fuite" },
      { href: "/blog/how-to-reduce-subscription-churn", label: "Réduire le churn durablement" },
    ],
  },
};

export function FrenchLocalizedArticle({ slug, title, ctaHref, ctaText }: FrenchLocalizedArticleProps) {
  const content = articleContent[slug];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">{title}</h1>

      <p className="mb-6 text-lg leading-8 text-gray-700">{content.intro}</p>
      <p className="mb-6 leading-8 text-gray-700">{content.context}</p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">{content.h2a}</h2>
      <p className="mb-6 leading-8 text-gray-700">{content.h2aBody}</p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">{content.h2b}</h2>
      <p className="mb-6 leading-8 text-gray-700">{content.h2bBody}</p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">{content.h2c}</h2>
      <p className="mb-6 leading-8 text-gray-700">{content.h2cBody}</p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Lecture complémentaire</h2>
      <ul className="mb-6 list-disc space-y-3 pl-6 leading-8 text-gray-700">
        {content.related.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-blue-700 hover:text-blue-800 underline-offset-2 hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Conclusion</h2>
      <p className="mb-6 leading-8 text-gray-700">{content.conclusion}</p>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">Passez à l’action</h3>
        <p className="mb-4 leading-8 text-gray-700">
          Utilisez le calculateur ProfitHub pour chiffrer vos scénarios et prioriser les actions qui ont le plus d’impact sur la croissance et la
          rentabilité.
        </p>
        <Link href={ctaHref} className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800">
          {ctaText} →
        </Link>
      </div>
    </main>
  );
}
