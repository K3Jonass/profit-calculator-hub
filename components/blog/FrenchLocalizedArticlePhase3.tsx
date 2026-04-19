import Link from "next/link";

type Phase3Slug =
  | "shopify-profit-margin-explained"
  | "how-to-calculate-shopify-profit"
  | "why-your-shopify-store-is-not-profitable"
  | "dropshipping-profit-margin"
  | "is-dropshipping-profitable"
  | "dropshipping-profit-per-product"
  | "what-is-mrr"
  | "how-to-calculate-mrr"
  | "why-mrr-matters"
  | "how-to-price-freelance-work";

type Phase3ArticleProps = {
  slug: Phase3Slug;
  title: string;
  ctaHref: string;
  ctaText: string;
};

type Section = { h2: string; h3: string; paragraphs: string[] };

type Content = {
  intro: string;
  context: string;
  sections: Section[];
  conclusion: string;
  related: Array<{ href: string; label: string }>;
};

const PHASE3_CONTENT: Record<Phase3Slug, Content> = {
  "shopify-profit-margin-explained": {
    intro:
      "La marge Shopify est l’indicateur qui sépare une boutique qui vend d’une boutique réellement rentable. Beaucoup de marchands voient leur chiffre d’affaires progresser et pensent que leur modèle fonctionne, alors que leur profit net se contracte à cause des coûts invisibles : retours, frais de transaction, remises excessives, inflation logistique, ou dépendance publicitaire. Comprendre la marge n’est donc pas un exercice financier abstrait : c’est un outil de pilotage quotidien pour décider quoi vendre, à quel prix, et sur quels canaux investir.",
    context:
      "En e-commerce, la vitesse d’exécution est élevée, mais cette vitesse masque souvent les erreurs unitaires. Une campagne peut sembler performante, un produit peut « tourner », une période promotionnelle peut battre des records de revenu… et pourtant dégrader la profitabilité. La bonne lecture consiste à relier acquisition, structure de coûts et marge contributive. Sans cette discipline, vous risquez de faire grandir un système qui détruit de la trésorerie au lieu d’en générer.",
    sections: [
      {
        h2: "Ce que la marge Shopify doit inclure en pratique",
        h3: "Sortir de la vision simplifiée “revenu moins produit”",
        paragraphs: [
          "Une marge solide doit intégrer l’ensemble des coûts qui accompagnent la vente réelle : coût produit, livraison aller et retour, frais de paiement, commissions marketplaces, apps, SAV, remises et coût média. L’erreur fréquente est de n’inclure qu’une partie de ces variables, ce qui crée une illusion de rentabilité. Cette illusion est dangereuse, car elle pousse à augmenter les volumes sans corriger les fondamentaux économiques.",
          "Pour améliorer la qualité des décisions, vous pouvez distinguer trois niveaux : marge brute produit, marge après acquisition, marge nette après structure. Cette granularité permet de voir où se situe la fuite : pricing trop faible, CAC trop élevé, panier moyen insuffisant, ou coûts opérationnels mal négociés."
        ],
      },
      {
        h2: "Interpréter la marge par produit, pas seulement au global",
        h3: "Pourquoi les moyennes cachent les vraies décisions",
        paragraphs: [
          "Une marge moyenne de boutique peut masquer des écarts considérables entre références. Certains produits financent la croissance, d’autres consomment votre budget pub et votre trésorerie. Un pilotage par SKU permet de décider rapidement : renforcer les best-sellers rentables, retravailler les offres à faible contribution, ou sortir les produits structurellement fragiles.",
          "Ce travail est également utile pour la stratégie d’assortiment. Si votre mix produit est dominé par des articles à marge faible, vous devrez compenser par un volume élevé et un marketing ultra-efficient, ce qui augmente le risque. Un mix mieux calibré réduit la pression commerciale et stabilise la marge dans la durée."
        ],
      },
      {
        h2: "Les signaux d’alerte d’une marge en détérioration",
        h3: "Détecter tôt avant que le cash-flow se tende",
        paragraphs: [
          "Quelques indicateurs doivent être suivis chaque semaine : hausse du CAC sans amélioration du panier moyen, augmentation du taux de retour, baisse de la contribution après remises, ou explosion des coûts de fulfillment. Pris isolément, ces signaux semblent supportables ; cumulés, ils transforment une boutique active en machine à marge négative.",
          "Le bon réflexe est de lier ces signaux à des actions correctives immédiates : seuil de remise maximal, refonte des pages produits à fort retour, optimisation des bundles, renégociation logistique, et audits créatifs des campagnes ads."
        ],
      },
      {
        h2: "Plan d’amélioration marge sur 90 jours",
        h3: "De l’audit à l’exécution",
        paragraphs: [
          "Mois 1 : auditer les coûts réels et nettoyer les données de contribution par produit. Mois 2 : ajuster le positionnement prix, les offres groupées et l’architecture promotionnelle. Mois 3 : optimiser acquisition et rétention pour augmenter la valeur client sans dépendre uniquement des remises. Cette séquence simple donne des gains rapides tout en renforçant les fondations.",
          "L’enjeu n’est pas d’atteindre une marge “parfaite”, mais une marge robuste et prévisible. Quand votre marge est prévisible, votre budget média devient plus rationnel, vos prévisions sont crédibles, et vos arbitrages de croissance gagnent en qualité."
        ],
      },
    ],
    conclusion:
      "La marge Shopify est votre système de navigation, pas une statistique de fin de mois. En la suivant au niveau produit, canal et cycle client, vous protégez le profit, réduisez les erreurs de montée en volume et construisez une croissance durable. Une boutique saine n’est pas celle qui vend le plus ; c’est celle qui transforme ses ventes en résultat net reproductible.",
    related: [
      { href: "/blog/how-to-calculate-shopify-profit", label: "Calculer précisément le profit Shopify" },
      { href: "/blog/why-your-shopify-store-is-not-profitable", label: "Pourquoi une boutique vend sans être rentable" },
    ],
  },
  "how-to-calculate-shopify-profit": {
    intro:
      "Calculer le profit Shopify correctement change totalement la manière de piloter une boutique. Beaucoup d’équipes utilisent une formule trop courte qui ignore une partie des coûts réels. Résultat : elles pensent gagner de l’argent, lancent plus de campagnes, recrutent, augmentent le stock… puis découvrent un trou de trésorerie. Le calcul du profit doit donc être rigoureux, opérationnel et mis à jour fréquemment.",
    context:
      "Le bon modèle de calcul n’est pas compliqué, mais il exige de la discipline. Vous devez définir la période, consolider les revenus encaissés, intégrer les coûts variables et fixes pertinents, puis interpréter le résultat par produit et par canal. Sans ce cadre, vous prenez des décisions importantes avec des chiffres incomplets.",
    sections: [
      {
        h2: "Formule de base et périmètre de données",
        h3: "Ne pas confondre revenu facturé et revenu utile",
        paragraphs: [
          "La formule canonique est simple : Profit net = Revenu total – Coûts totaux. Mais la qualité du résultat dépend de la définition des deux blocs. Côté revenu, incluez les ventes réellement encaissées sur la période. Côté coûts, ajoutez COGS, média, frais de paiement, apps, shipping, retours et support. La précision vient du périmètre, pas de la complexité mathématique.",
          "Pour éviter les erreurs, standardisez vos catégories comptables et conservez une nomenclature stable. Si les mêmes dépenses changent régulièrement de catégorie, vos comparaisons mensuelles deviennent inutilisables."
        ],
      },
      {
        h2: "Calculer le profit par canal d’acquisition",
        h3: "Là où les arbitrages se gagnent ou se perdent",
        paragraphs: [
          "Un profit global positif peut cacher des canaux déficitaires. Analysez Meta, Google, email, organique, influence, affiliés séparément. Vous verrez immédiatement quels canaux créent de la valeur nette et lesquels gonflent le revenu sans contribution suffisante.",
          "Cette lecture aide à réallouer le budget intelligemment : couper les campagnes qui détruisent la marge, renforcer celles qui maintiennent une contribution saine, et améliorer les landing pages pour réduire le coût d’acquisition unitaire."
        ],
      },
      {
        h2: "Intégrer les retours et remboursements",
        h3: "Le point qui fausse le plus les calculs",
        paragraphs: [
          "Les retours ne sont pas un détail : ils peuvent inverser complètement la rentabilité d’une collection. Si vous ne les rattachez pas à vos produits et campagnes, vous surestimez votre profit. Ajoutez une ligne dédiée “coût net des retours” dans votre reporting.",
          "Ensuite, traitez la cause : promesse produit floue, sizing mal expliqué, qualité logistique irrégulière, ou mauvais ciblage publicitaire. Corriger la cause améliore la marge plus durablement qu’une simple baisse de budget ads."
        ],
      },
      {
        h2: "Routine mensuelle de contrôle",
        h3: "Transformer le calcul en système de gestion",
        paragraphs: [
          "Mettez en place un rituel mensuel avec trois sorties : profit net total, profit par canal, et profit par top SKU. Ajoutez un tableau des écarts vs mois précédent pour identifier rapidement ce qui dérive. Ce format favorise des décisions concrètes, pas des discussions vagues.",
          "Avec une routine stable, votre calcul de profit cesse d’être un rapport passif. Il devient une boucle d’action qui améliore pricing, campagnes, opérationnel et allocation de ressources."
        ],
      },
    ],
    conclusion:
      "Un bon calcul de profit Shopify vous donne un avantage concurrentiel discret mais décisif : la capacité de croître sans vous tromper de bataille. Quand les chiffres sont propres et comparables, les décisions deviennent plus rapides, moins émotionnelles et plus rentables.",
    related: [
      { href: "/blog/shopify-profit-margin-explained", label: "Comprendre la marge Shopify" },
      { href: "/blog/dropshipping-profit-margin", label: "Comparer avec la logique dropshipping" },
    ],
  },
  "why-your-shopify-store-is-not-profitable": {
    intro:
      "Une boutique Shopify peut générer des ventes chaque jour et rester non rentable pendant des mois. Ce paradoxe est fréquent : les métriques de surface sont positives, mais les métriques économiques profondes se dégradent. Comprendre les causes de cette non-rentabilité permet de corriger plus vite, au lieu d’accumuler du volume qui fatigue le cash-flow.",
    context:
      "La non-rentabilité ne vient presque jamais d’un seul facteur. C’est souvent une combinaison de pricing fragile, acquisition coûteuse, structure de coûts sous-estimée et faiblesse de la rétention. Le diagnostic doit donc être systémique, pas mono-canal.",
    sections: [
      {
        h2: "Cause n°1 : dépendance excessive aux ads payantes",
        h3: "Quand le CAC grimpe plus vite que la contribution",
        paragraphs: [
          "Si vos ventes reposent majoritairement sur l’achat média, la moindre hausse CPM peut compresser vos marges. Sans stratégie de conversion et de rétention solide, chaque commande devient plus chère à obtenir et moins profitable.",
          "La solution n’est pas de couper la publicité brutalement, mais de renforcer les leviers qui amortissent le CAC : email, SMS, offres de réachat, bundles, UGC mieux ciblé et pages produits plus persuasives."
        ],
      },
      {
        h2: "Cause n°2 : politique de remises mal maîtrisée",
        h3: "Le chiffre d’affaires qui coûte trop cher",
        paragraphs: [
          "Les promotions permanentes augmentent souvent le volume court terme, mais érodent la marge et habituent vos clients à ne plus acheter au prix normal. Votre business devient dépendant d’un stimulus qui détruit sa rentabilité.",
          "Passez d’une logique “discount continu” à une logique “offre structurée” : bundles, seuils de panier, avantages fidélité, et promotions ciblées sur des objectifs précis."
        ],
      },
      {
        h2: "Cause n°3 : coûts cachés non pilotés",
        h3: "Frais outils, retours, SAV et logistique",
        paragraphs: [
          "Les coûts invisibles sont souvent sous-estimés : abonnements apps redondants, frais bancaires cumulés, retours mal traités, support client sous-dimensionné, erreurs logistiques. Pris séparément, ils paraissent mineurs. Ensemble, ils peuvent annuler votre profit mensuel.",
          "Un audit trimestriel des coûts fixes et variables est indispensable. Supprimer 10 % de coût non productif peut avoir plus d’impact qu’une hausse de 20 % du budget acquisition."
        ],
      },
      {
        h2: "Cause n°4 : manque de pilotage par cohortes",
        h3: "Vous achetez des clients qui ne remboursent jamais leur acquisition",
        paragraphs: [
          "Si vous ne suivez pas la valeur vie client par cohorte, vous ne savez pas si votre acquisition est soutenable. Certaines cohortes peuvent sembler “correctes” à J7 et devenir déficitaires à J60.",
          "Le suivi cohorte permet de décider quels produits, promesses et canaux attirent des clients rentables. C’est l’un des meilleurs leviers pour sortir de la stagnation."
        ],
      },
    ],
    conclusion:
      "Votre boutique n’est pas non rentable par fatalité ; elle l’est souvent par manque de visibilité économique structurée. Une fois les causes identifiées et priorisées, la trajectoire peut changer rapidement. L’objectif n’est pas juste de vendre plus, mais de vendre mieux.",
    related: [
      { href: "/blog/how-to-calculate-shopify-profit", label: "Mettre en place le bon calcul de profit" },
      { href: "/blog/shopify-profit-margin-explained", label: "Piloter votre marge Shopify" },
    ],
  },
  "dropshipping-profit-margin": {
    intro:
      "La marge en dropshipping est souvent mal comprise, car le modèle semble “léger” en coûts fixes et facile à lancer. En réalité, la rentabilité dépend d’un équilibre fin entre prix, coût fournisseur, coût publicitaire, frais de paiement, taux de retour et qualité de livraison. Sans suivi précis de la marge, vous pouvez multiplier les commandes et perdre de l’argent sur chaque vente.",
    context:
      "Le dropshipping n’est pas rentable par défaut. Il devient rentable quand chaque étape du tunnel — offre, acquisition, conversion, logistique et SAV — est conçue pour protéger la contribution unitaire.",
    sections: [
      { h2: "Décomposer la marge par commande", h3: "La base avant toute montée en volume", paragraphs: ["Commencez par calculer la marge nette par produit : prix de vente – coût fournisseur – coût pub attribué – frais transaction – coût logistique – provision retours. Cette marge doit rester positive de façon stable, pas seulement pendant une semaine favorable.", "Ensuite, testez la robustesse : que se passe-t-il si votre CPM augmente de 20 %, si vos retours doublent, ou si le délai livraison se dégrade ? Un modèle robuste résiste à ces chocs sans basculer en perte." ] },
      { h2: "Les pièges qui écrasent la marge", h3: "Promesses agressives, offres faibles, ciblage trop large", paragraphs: ["Beaucoup de boutiques promettent trop pour compenser une offre banale. Cela augmente les retours, dégrade la satisfaction et finit par coûter plus cher que la conversion initiale. Une offre claire, un positionnement précis et des créatifs honnêtes produisent une marge plus saine.", "Le ciblage publicitaire trop large peut aussi gonfler artificiellement le volume avec des clients peu qualifiés. Mieux vaut un volume plus petit mais rentable qu’une échelle instable." ] },
      { h2: "Optimiser la marge sans casser la conversion", h3: "Prix, bundles et expérience client", paragraphs: ["L’amélioration de marge ne passe pas seulement par une hausse de prix frontale. Les bundles, les upsells pertinents, la preuve sociale et la clarté produit peuvent augmenter l’AOV tout en gardant une bonne conversion.", "Ajoutez une politique de livraison transparente et un support réactif : cela réduit les litiges et les remboursements, donc protège la marge nette." ] },
      { h2: "Suivi hebdomadaire recommandé", h3: "Le tableau de bord minimal", paragraphs: ["Suivez chaque semaine : marge nette par top produit, CAC moyen, taux de retour, coût support par commande et délai de livraison. Ce tableau suffit pour détecter les dérives avant qu’elles deviennent structurelles.", "Le pilotage hebdomadaire crée une culture d’amélioration continue. Vous corrigez vite, vous testez mieux, et vous limitez les cycles de pertes prolongées." ] },
    ],
    conclusion:
      "La marge dropshipping n’est pas un chiffre secondaire : c’est le cœur du modèle. Si vous la mesurez proprement et l’optimisez de façon disciplinée, vous passez d’un business fragile à un système qui peut réellement se développer.",
    related: [
      { href: "/blog/is-dropshipping-profitable", label: "Le dropshipping est-il encore rentable ?" },
      { href: "/blog/dropshipping-profit-per-product", label: "Calculer le profit par produit" },
    ],
  },
  "is-dropshipping-profitable": {
    intro:
      "Le dropshipping peut être rentable, mais il n’a jamais été un raccourci automatique vers le profit. En 2026, la compétition est plus mature, les coûts publicitaires plus volatils, et les clients plus exigeants. Ceux qui gagnent durablement ne se contentent pas d’un “produit tendance” : ils construisent une offre, un positionnement et une exécution opérationnelle cohérente.",
    context:
      "La vraie question n’est pas “le modèle est-il mort ?”, mais “dans quelles conditions mon modèle peut-il être rentable ?”. Cette nuance est essentielle pour éviter les décisions basées sur des promesses simplistes.",
    sections: [
      { h2: "Ce qui rend un dropshipping rentable aujourd’hui", h3: "Offre claire + économie unitaire saine", paragraphs: ["Une activité rentable repose sur des unit economics solides : marge unitaire positive après acquisition, retours maîtrisés, et valeur client suffisante pour absorber les variations de coût média. Sans ces bases, la croissance amplifie les pertes.", "La différenciation joue un rôle central : angle de marque, contenu, preuve client, service fiable. Le simple arbitrage produit-prix ne suffit plus face à des concurrents mieux structurés." ] },
      { h2: "Pourquoi beaucoup échouent malgré des ventes", h3: "Confusion entre traction et rentabilité", paragraphs: ["Une campagne virale peut générer du volume rapidement, mais si la marge réelle est faible, ce volume ne crée pas de business durable. De nombreux échecs viennent de cette confusion entre “ça vend” et “ça gagne de l’argent”.", "Le manque de process (gestion fournisseurs, support, QA créas, gestion retours) accélère également la détérioration de la profitabilité." ] },
      { h2: "Compétences clés à développer", h3: "Au-delà de la publicité", paragraphs: ["Pour rester rentable, il faut maîtriser le pilotage financier, la conversion sur site, la fidélisation CRM et la qualité logistique. Le dropshipping est un métier d’opérations autant que de marketing.", "Les meilleurs opérateurs construisent des systèmes : reporting hebdomadaire, tests cadrés, standards créatifs, procédures SAV. Cette discipline fait la différence sur 12 mois." ] },
      { h2: "Feuille de route réaliste", h3: "Tester, valider, consolider", paragraphs: ["Phase 1 : valider un produit et une promesse avec marge unitaire saine. Phase 2 : stabiliser conversion, retours et support. Phase 3 : augmenter le volume seulement après validation économique. Cette séquence évite les erreurs coûteuses de montée en charge prématurée.", "L’objectif est de construire une machine rentable, pas de courir après des pics de revenu courts et instables." ] },
    ],
    conclusion:
      "Oui, le dropshipping peut rester rentable, mais uniquement avec une exécution professionnelle. Si vous priorisez les fondamentaux économiques et la qualité opérationnelle, le modèle peut devenir un vrai business — pas seulement une expérience temporaire.",
    related: [
      { href: "/blog/dropshipping-profit-margin", label: "Comprendre la marge dropshipping" },
      { href: "/blog/dropshipping-profit-per-product", label: "Mesurer la profitabilité produit" },
    ],
  },
  "dropshipping-profit-per-product": {
    intro:
      "Calculer le profit par produit en dropshipping est l’étape la plus importante avant d’investir en acquisition. Sans ce calcul, vous risquez de promouvoir des articles qui génèrent des commandes mais détruisent la marge. Le profit par produit permet de décider quoi pousser, quoi corriger et quoi retirer.",
    context:
      "Le piège classique est de regarder uniquement le prix de vente et le coût fournisseur. Cette vision partielle ignore le coût média, les frais de paiement, les retours et le support, qui peuvent transformer un produit “gagnant” en produit déficitaire.",
    sections: [
      { h2: "Formule de profit par produit", h3: "Aller jusqu’au net", paragraphs: ["Profit unitaire net = Prix de vente – coût fournisseur – coût acquisition attribué – frais transaction – coût logistique – provision retours – coût support. Cette formule paraît longue, mais elle reflète enfin la réalité économique.", "Un produit n’est valide que si ce profit reste positif sur plusieurs cycles, y compris après variations normales des coûts marketing." ] },
      { h2: "Attribuer correctement le coût d’acquisition", h3: "Ne pas sous-estimer le CAC réel", paragraphs: ["Répartissez le coût ads en fonction des commandes réelles attribuées, pas des clics ou impressions. Une attribution floue peut surévaluer artificiellement la rentabilité d’un produit.", "En complément, suivez l’évolution du CAC par créatif et angle marketing. Certains messages vendent mieux mais attirent des clients à fort taux de retour." ] },
      { h2: "Décider avec une grille simple", h3: "Garder, améliorer, couper", paragraphs: ["Produit à profit unitaire élevé : accélérer. Produit à profit faible mais prometteur : retravailler prix/offre/ciblage. Produit à profit négatif récurrent : couper. Cette grille simple protège votre budget et votre temps.", "L’objectif n’est pas d’avoir beaucoup de produits, mais un portefeuille de références rentables et pilotables." ] },
      { h2: "Créer un avantage durable", h3: "Profit unitaire + expérience client", paragraphs: ["Un bon profit unitaire est fragile si l’expérience client est faible. Délais non tenus, promesse floue ou SAV lent augmentent les retours et érodent la marge. La profitabilité durable repose autant sur l’opérationnel que sur le marketing.", "Standardisez vos pages produit, vos scripts support et vos règles de qualification fournisseurs. Vous réduirez les coûts cachés et stabiliserez votre profit net." ] },
    ],
    conclusion:
      "Le profit par produit est votre filtre stratégique principal en dropshipping. En l’utilisant systématiquement, vous cessez de piloter au ressenti et vous concentrez vos efforts sur les références qui créent une vraie valeur économique.",
    related: [
      { href: "/blog/dropshipping-profit-margin", label: "Marge dropshipping : cadre global" },
      { href: "/blog/is-dropshipping-profitable", label: "Viabilité du modèle en 2026" },
    ],
  },
  "what-is-mrr": {
    intro:
      "Le MRR (Monthly Recurring Revenue) est le revenu récurrent mensuel d’un business SaaS. C’est l’indicateur qui permet de distinguer une croissance ponctuelle d’une croissance durable. Beaucoup d’équipes regardent encore le revenu total, mais ce chiffre mélange des éléments non récurrents et peut donner une lecture trompeuse de la trajectoire réelle.",
    context:
      "Le MRR ne sert pas seulement aux investisseurs. Il sert surtout à l’équipe opérationnelle : planification, recrutement, budget acquisition, prévision de trésorerie et qualité de la rétention. Sans MRR proprement défini, vous pilotez un modèle d’abonnement comme un business transactionnel.",
    sections: [
      { h2: "Que compte (et ne compte pas) le MRR", h3: "Définition opérationnelle", paragraphs: ["Le MRR inclut les revenus d’abonnement récurrents actifs sur le mois. Il n’inclut pas les frais d’onboarding one-shot, les services ponctuels ou les revenus exceptionnels non répétables. Cette séparation est essentielle pour éviter les faux signaux de croissance.", "Documentez cette définition dans votre équipe afin que finance, produit et marketing parlent la même langue." ] },
      { h2: "Composants du MRR à suivre", h3: "New, Expansion, Contraction, Churn", paragraphs: ["Un MRR utile se décompose : nouveau MRR acquis, expansion MRR (upsell), contraction MRR (downgrade), churn MRR perdu. Cette structure montre si la croissance vient d’une acquisition saine ou d’un remplissage temporaire.", "Un SaaS robuste réduit la part de churn et augmente la part d’expansion. C’est ce qui améliore la qualité de revenu dans le temps." ] },
      { h2: "Pourquoi le MRR influence toutes les décisions", h3: "Du produit à la finance", paragraphs: ["Le MRR relie activation produit, rétention client et budget marketing. Si le churn grimpe, votre MRR net ralentit, donc votre capacité d’investissement baisse. Cet enchaînement doit guider les priorités de roadmap et d’acquisition.", "À l’inverse, une hausse stable du MRR permet de planifier avec confiance : embauches, dépenses growth, et développement produit." ] },
      { h2: "Erreurs fréquentes de lecture", h3: "Confondre dynamique ponctuelle et solidité", paragraphs: ["Une hausse mensuelle ponctuelle n’est pas une tendance. Analysez toujours le MRR sur plusieurs mois et lissez les événements exceptionnels. Sinon, vous risquez de sur-investir sur une base instable.", "La qualité de lecture vient de la cohérence des définitions et de la régularité de suivi, pas d’un tableau de bord sophistiqué." ] },
    ],
    conclusion:
      "Le MRR est la colonne vertébrale d’un SaaS. Quand il est proprement défini et analysé, il transforme la prise de décision et permet une croissance plus saine, plus prévisible et plus durable.",
    related: [
      { href: "/blog/how-to-calculate-mrr", label: "Méthode de calcul du MRR" },
      { href: "/blog/why-mrr-matters", label: "Pourquoi le MRR est prioritaire" },
    ],
  },
  "how-to-calculate-mrr": {
    intro:
      "Calculer le MRR correctement est indispensable pour piloter un SaaS. Une formule mal appliquée peut fausser vos prévisions, vos décisions d’investissement et votre perception de la rétention. Un calcul fiable ne demande pas de complexité extrême, mais des règles claires et constantes.",
    context:
      "L’objectif du calcul MRR est de produire un indicateur comparable dans le temps. Pour cela, vous devez standardiser ce qui entre dans le calcul et ce qui reste hors périmètre.",
    sections: [
      { h2: "Formule de base du MRR", h3: "Convertir chaque abonnement en équivalent mensuel", paragraphs: ["Pour chaque client, convertissez le plan en valeur mensuelle (annuel / 12, trimestriel / 3, etc.), puis additionnez les montants actifs. Cette approche rend comparables des plans de facturation différents.", "N’intégrez pas les revenus non récurrents. Sinon, votre MRR devient un mélange difficile à interpréter." ] },
      { h2: "Gestion des changements de plan", h3: "Expansion et contraction", paragraphs: ["Lors d’un upgrade, la différence positive alimente l’expansion MRR. Lors d’un downgrade, la différence négative alimente la contraction MRR. Cette distinction permet de comprendre si votre croissance provient d’une meilleure monétisation ou d’une acquisition brute.", "Le suivi de ces mouvements aide aussi l’équipe produit à identifier les fonctionnalités qui créent le plus de valeur perçue." ] },
      { h2: "Inclure le churn proprement", h3: "Le MRR perdu n’est pas un détail", paragraphs: ["Chaque résiliation doit être soustraite explicitement du MRR. Beaucoup d’équipes suivent uniquement les nouveaux abonnés, ce qui masque une érosion de fond. Le MRR net devient alors trompeur.", "Un reporting clair new/expansion/contraction/churn permet d’orienter rapidement les priorités de rétention." ] },
      { h2: "Checklist qualité du calcul", h3: "Fiable, comparable, actionnable", paragraphs: ["Vérifiez trois points : définitions documentées, extraction de données stable, contrôle d’écarts mensuel. Si un point manque, les comparaisons perdent en fiabilité.", "Un bon calcul MRR n’est pas juste précis ; il doit aussi être utile pour agir (pricing, onboarding, support, roadmap)." ] },
    ],
    conclusion:
      "Un MRR bien calculé vous donne une lecture honnête de votre trajectoire SaaS. C’est la base pour décider vite, corriger tôt et allouer vos ressources avec plus de sécurité.",
    related: [
      { href: "/blog/what-is-mrr", label: "Définition complète du MRR" },
      { href: "/blog/why-mrr-matters", label: "Impact stratégique du MRR" },
    ],
  },
  "why-mrr-matters": {
    intro:
      "Dans un SaaS, le revenu total peut impressionner, mais il dit peu sur la solidité du modèle. Le MRR, lui, montre la capacité réelle du produit à générer un revenu récurrent stable. C’est pourquoi il compte davantage que les chiffres ponctuels de facturation.",
    context:
      "Le MRR est un indicateur de qualité de croissance. Il reflète à la fois acquisition, activation, rétention et monétisation. Ignorer ce signal conduit souvent à survaloriser la croissance court terme et à sous-estimer les fragilités structurelles.",
    sections: [
      { h2: "MRR et prévisibilité financière", h3: "La base des décisions d’investissement", paragraphs: ["Un MRR stable améliore la prévision de trésorerie et permet des décisions plus ambitieuses, mais mieux sécurisées : recrutements, expansion marché, investissements produit.", "Sans cette prévisibilité, l’entreprise oscille entre prudence excessive et prises de risque mal calibrées." ] },
      { h2: "MRR et discipline produit", h3: "Ce que les clients paient durablement", paragraphs: ["Le MRR met en lumière la valeur réellement perçue. Si votre activation est faible ou votre churn élevé, le MRR le révélera rapidement. C’est un signal direct pour améliorer l’onboarding, l’expérience cœur produit et le support.", "En ce sens, le MRR est un KPI transversal qui relie produit, relation client et revenu." ] },
      { h2: "MRR et efficacité marketing", h3: "Acquisition utile vs acquisition coûteuse", paragraphs: ["Un budget marketing n’a de sens que si les clients acquis restent et génèrent du revenu récurrent. Le MRR, couplé aux cohortes, permet de voir quels canaux attirent des clients vraiment rentables.", "Cela évite de surinvestir dans des sources de volume qui gonflent les inscriptions mais augmentent la contraction et le churn." ] },
      { h2: "MRR et valorisation long terme", h3: "Pourquoi les investisseurs y reviennent toujours", paragraphs: ["Les investisseurs évaluent la qualité du revenu : récurrence, rétention, expansion. Un MRR sain rassure sur la capacité du SaaS à croître sans dépendre d’événements ponctuels.", "Même hors levée de fonds, ce principe est utile : un business qui protège son MRR protège sa résilience." ] },
    ],
    conclusion:
      "Le MRR importe parce qu’il représente la vérité économique du SaaS. Quand vous l’améliorez durablement, vous améliorez presque tout : exécution produit, efficacité commerciale et stabilité financière.",
    related: [
      { href: "/blog/what-is-mrr", label: "Comprendre le MRR" },
      { href: "/blog/how-to-calculate-mrr", label: "Calculer le MRR correctement" },
    ],
  },
  "how-to-price-freelance-work": {
    intro:
      "Fixer ses tarifs freelance est l’une des décisions les plus structurantes de votre activité. Un tarif trop bas crée une surcharge de travail, une pression constante et une rentabilité fragile. Un tarif trop élevé sans cadrage valeur freine la conversion. La vraie compétence n’est pas de “deviner un prix”, mais de construire un système de pricing cohérent avec vos objectifs, votre positionnement et vos coûts cachés.",
    context:
      "Le pricing freelance n’est pas seulement un sujet commercial : c’est un sujet de modèle économique personnel. Il conditionne votre revenu, votre capacité à investir dans vos compétences et votre qualité de vie. Une tarification saine doit intégrer temps réel, coûts invisibles et valeur client.",
    sections: [
      { h2: "Partir de votre objectif de revenu net", h3: "L’approche inverse qui clarifie tout", paragraphs: ["Commencez par le revenu annuel net souhaité, puis ajoutez charges, congés, temps non facturable et marge de sécurité. Vous obtenez un objectif de chiffre d’affaires réaliste. Ensuite seulement, vous traduisez cet objectif en tarif horaire, journalier ou projet.", "Cette approche évite l’erreur classique de se baser sur les prix du marché sans vérifier leur compatibilité avec votre réalité financière." ] },
      { h2: "Choisir le bon modèle de tarification", h3: "Heure, forfait, valeur", paragraphs: ["La facturation horaire est simple mais plafonne souvent le revenu. Le forfait projet offre plus de levier mais exige un cadrage strict. La tarification à la valeur peut être très rentable si votre expertise influence un résultat mesurable pour le client.", "Le meilleur modèle dépend de votre maturité, de la clarté du périmètre et de la nature des résultats attendus." ] },
      { h2: "Sécuriser la marge avec le cadrage", h3: "Le prix ne suffit pas sans garde-fous", paragraphs: ["Même un bon tarif devient non rentable si le scope est flou. Définissez livrables, limites de révision, délais de validation, conditions de paiement et gestion des urgences. Ces clauses protègent votre temps et évitent les dérives qui grignotent la marge.", "Un bon contrat transforme votre pricing en système prévisible au lieu d’une négociation permanente." ] },
      { h2: "Augmenter ses tarifs sans casser la conversion", h3: "Monter en valeur perçue", paragraphs: ["Pour augmenter vos prix, améliorez la clarté de votre proposition : problème résolu, méthode, preuves, résultats passés. Les clients acceptent mieux un prix plus élevé quand ils comprennent le retour attendu.", "Vous pouvez aussi créer des offres en paliers (essentiel, standard, premium) pour faciliter la décision et mieux segmenter la demande." ] },
    ],
    conclusion:
      "Un bon pricing freelance n’est pas un chiffre fixe : c’est un cadre vivant que vous ajustez avec l’expérience, la demande et vos objectifs. Quand ce cadre est solide, vous travaillez moins dans l’urgence et davantage dans la création de valeur réelle.",
    related: [
      { href: "/blog/freelance-hourly-vs-project", label: "Comparer tarif horaire et forfait" },
      { href: "/blog/freelance-income-goals", label: "Atteindre vos objectifs de revenu" },
    ],
  },
};

export function FrenchLocalizedArticlePhase3({ slug, title, ctaHref, ctaText }: Phase3ArticleProps) {
  const content = PHASE3_CONTENT[slug];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-900">
      <h1 className="mb-6 text-4xl font-bold leading-tight">{title}</h1>
      <p className="mb-6 text-lg leading-8 text-gray-700">{content.intro}</p>
      <p className="mb-6 leading-8 text-gray-700">{content.context}</p>

      {content.sections.map((section) => (
        <section key={section.h2}>
          <h2 className="mb-4 mt-10 text-2xl font-semibold">{section.h2}</h2>
          <h3 className="mb-3 mt-6 text-xl font-semibold">{section.h3}</h3>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mb-6 leading-8 text-gray-700">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Lectures recommandées</h2>
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
          Utilisez le calculateur ProfitHub associé pour transformer ces recommandations en décisions chiffrées et priorisées.
        </p>
        <Link href={ctaHref} className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800">
          {ctaText} →
        </Link>
      </div>
    </main>
  );
}
