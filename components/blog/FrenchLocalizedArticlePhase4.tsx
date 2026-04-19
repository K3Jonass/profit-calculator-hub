import Link from "next/link";

type Phase4Slug =
  | "freelance-hourly-vs-project"
  | "freelance-income-goals"
  | "freelance-project-profit-explained"
  | "how-to-price-freelance-projects-profitably"
  | "freelance-project-profit-mistakes"
  | "invoice-generator-for-freelancers"
  | "how-to-write-invoice-that-gets-paid-fast"
  | "invoice-workflow-for-small-business-cash-flow"
  | "client-welcome-doc-that-prevents-scope-creep"
  | "onboarding-welcome-document-checklist";

type Phase4ArticleProps = {
  slug: Phase4Slug;
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

const PHASE4_CONTENT: Record<Phase4Slug, Content> = {
  "freelance-hourly-vs-project": {
    intro:
      "Le débat “tarif horaire vs forfait projet” est central pour tout freelance qui veut sécuriser son revenu et éviter l’épuisement. Beaucoup choisissent un modèle par habitude ou parce que le client le demande, sans mesurer l’impact sur la marge réelle, la charge mentale et la capacité à monter en gamme. Le bon choix dépend moins d’une règle universelle que de votre niveau de cadrage, de la nature des livrables et du degré d’incertitude du mandat.",
    context:
      "Le tarif horaire rémunère le temps investi ; le forfait rémunère un résultat défini. Cette différence modifie la négociation, la relation client, et la manière de piloter les révisions. Comprendre cette mécanique vous évite de signer des missions “bien payées” en apparence mais peu rentables en pratique.",
    sections: [
      { h2: "Quand le tarif horaire est pertinent", h3: "Missions exploratoires, périmètre instable, accompagnement continu", paragraphs: ["Le modèle horaire fonctionne bien quand la mission évolue en continu : conseil, support, itérations fréquentes, ou besoins qui se précisent au fil de l’exécution. Vous gardez une flexibilité utile et limitez le risque de sous-estimer un périmètre mouvant.", "Pour rester rentable, vous devez cependant encadrer le suivi du temps, définir des plafonds hebdomadaires et poser une fréquence de validation. Sans ce cadre, le client perçoit vite l’horaire comme un coût incontrôlé." ] },
      { h2: "Quand le forfait projet est plus rentable", h3: "Livrables clairs, valeur mesurable, processus maîtrisé", paragraphs: ["Le forfait devient puissant dès que vous savez cadrer précisément : objectifs, livrables, critères d’acceptation, calendrier et limites de révision. Dans ce contexte, vous êtes rémunéré pour votre expertise et votre efficacité, pas seulement pour le temps passé.", "Le principal risque est la dérive de périmètre (scope creep). Un forfait sans garde-fous contractuels peut vite se transformer en mission ouverte. Les clauses de changement de périmètre sont donc indispensables." ] },
      { h2: "Comparer les deux modèles avec une logique économique", h3: "Marge, prévisibilité, complexité commerciale", paragraphs: ["Évaluez chaque modèle selon trois critères : marge nette attendue, prévisibilité du revenu et charge opérationnelle. L’horaire protège mieux contre l’incertitude ; le forfait offre plus de levier si votre méthode est solide.", "Une bonne stratégie consiste souvent à hybrider : cadrage initial au forfait, exécution principale au forfait, puis maintenance au temps. Vous combinez ainsi clarté commerciale et souplesse d’intervention." ] },
      { h2: "Passer d’un modèle à l’autre sans perdre des clients", h3: "Repositionnement progressif et preuve de valeur", paragraphs: ["Si vous quittez l’horaire vers le forfait, expliquez la logique client : plus de visibilité, délais clarifiés, résultats contractualisés. Appuyez-vous sur des exemples concrets et des études de cas pour réduire la friction.", "Vous pouvez aussi proposer deux options de devis (horaire vs forfait) avec une recommandation. Cette approche pédagogique améliore la conversion et renforce votre posture de conseil." ] },
    ],
    conclusion:
      "Le meilleur modèle de pricing freelance n’est pas idéologique : il est contextuel. En choisissant consciemment entre horaire, forfait ou hybride selon la mission, vous protégez votre marge, améliorez la relation client et construisez une activité plus stable.",
    related: [
      { href: "/blog/how-to-price-freelance-work", label: "Fixer ses tarifs freelance" },
      { href: "/blog/freelance-income-goals", label: "Atteindre ses objectifs de revenu" },
    ],
  },
  "freelance-income-goals": {
    intro:
      "Avoir un objectif de revenu freelance sans méthode de calcul revient à naviguer sans tableau de bord. Beaucoup de professionnels fixent un chiffre annuel motivant, mais oublient les variables qui déterminent sa faisabilité : temps non facturable, saisonnalité, fiscalité, acquisition client et marge de sécurité. Résultat : tension permanente, tarifs mal calibrés et décisions court terme.",
    context:
      "La bonne approche consiste à partir du revenu net souhaité, puis à remonter vers le chiffre d’affaires requis, le nombre de missions, la valeur moyenne par projet et le rythme commercial nécessaire. Cette logique inverse transforme un objectif abstrait en plan opérationnel concret.",
    sections: [
      { h2: "Du revenu net au chiffre d’affaires cible", h3: "Intégrer charges, congés et imprévus", paragraphs: ["Commencez par votre besoin net mensuel, ajoutez charges sociales/fiscales, puis incluez un coussin de sécurité. Vous obtenez une cible annuelle réaliste. Cette étape évite l’optimisme excessif qui pousse à accepter des projets sous-valorisés en urgence.", "Prévoyez aussi des semaines non facturables (prospection, administration, formation). Ignorer ce temps conduit presque toujours à sous-estimer le niveau de tarif nécessaire." ] },
      { h2: "Transformer l’objectif en plan commercial", h3: "Nombre de clients, panier moyen, fréquence de vente", paragraphs: ["Une fois la cible posée, répartissez-la par trimestre et par type d’offre. Définissez ensuite le nombre de missions nécessaires et le taux de conversion attendu. Vous savez alors combien de leads qualifiés générer et quelles actions commerciales prioriser.", "Cette structure vous aide à détecter rapidement les écarts : manque de volume, panier trop bas, cycle de vente trop long, ou offre mal positionnée." ] },
      { h2: "Ajuster le pricing pour atteindre l’objectif", h3: "Monter en valeur plutôt qu’en surcharge", paragraphs: ["Si le plan exige trop de volume, votre pricing est probablement sous-dimensionné. Augmenter vos tarifs sans améliorer la proposition de valeur est risqué ; l’idéal est de clarifier vos résultats, spécialiser votre offre et renforcer vos preuves.", "Le but n’est pas de travailler plus d’heures, mais d’augmenter la valeur créée par heure investie. C’est la seule trajectoire durable." ] },
      { h2: "Rituel de pilotage mensuel", h3: "Suivre l’écart et corriger tôt", paragraphs: ["Mettez en place une revue mensuelle : CA signé, CA encaissé, marge par mission, pipeline actif et temps non facturable. Comparez au plan et corrigez immédiatement les écarts.", "Ce pilotage régulier réduit le stress financier et évite les décisions paniques (discount de dernière minute, mission mal cadrée, surcharge chronique)." ] },
    ],
    conclusion:
      "Vos objectifs de revenu freelance deviennent atteignables dès qu’ils sont traduits en métriques actionnables. Avec un plan clair, vous négociez mieux, choisissez mieux vos projets et développez une activité plus rentable et plus sereine.",
    related: [
      { href: "/blog/how-to-price-freelance-work", label: "Construire un pricing rentable" },
      { href: "/blog/freelance-hourly-vs-project", label: "Choisir le bon modèle de facturation" },
    ],
  },
  "freelance-project-profit-explained": {
    intro:
      "Le profit d’un projet freelance n’est pas la différence brute entre montant facturé et quelques dépenses visibles. C’est un indicateur plus fin qui doit intégrer le temps réel, les coûts indirects, les révisions non prévues, l’administration et le risque de retard de paiement. Sans cette lecture, vous pouvez multiplier les missions “prestigieuses” tout en diminuant votre revenu net réel.",
    context:
      "La rentabilité projet est l’outil qui permet de décider ce qu’il faut accepter, renégocier ou arrêter. Elle transforme votre activité de prestations en système pilotable, plutôt qu’en suite de missions subies.",
    sections: [
      { h2: "Définir le profit projet correctement", h3: "Revenu encaissé moins coût total réel", paragraphs: ["Le bon calcul inclut les heures de production, les réunions, la gestion client, les révisions, les outils, la sous-traitance éventuelle et le temps administratif. C’est ce périmètre complet qui révèle la vraie marge.", "Un projet peut sembler rentable sur facture, mais devenir faible en net si le temps hors production explose." ] },
      { h2: "Pourquoi certains projets à fort CA sont peu rentables", h3: "Complexité cachée et dérive de périmètre", paragraphs: ["Les projets complexes attirent souvent par leur budget, mais génèrent plus d’allers-retours, de coordination et d’aléas. Sans cadrage strict, la charge grimpe plus vite que la rémunération.", "La solution passe par un meilleur découpage en phases, des critères d’acceptation explicites et des options chiffrées pour les demandes hors périmètre." ] },
      { h2: "Indicateurs de profit à suivre", h3: "Marge brute, marge nette, revenu horaire effectif", paragraphs: ["Suivez chaque projet avec trois indicateurs simples : marge brute, marge nette et revenu horaire effectif. Le troisième est souvent le plus révélateur : il montre la valeur réelle de votre temps.", "Comparer ces indicateurs entre projets permet d’identifier votre offre la plus rentable et les clients qui consomment disproportionnellement vos ressources." ] },
      { h2: "Transformer la mesure en décisions", h3: "Accepter mieux, négocier mieux, livrer mieux", paragraphs: ["Une fois les données consolidées, définissez des règles : seuil de marge minimale, limite de révisions incluses, acompte obligatoire, et conditions de paiement fermes. Vous professionnalisez votre activité.", "Le profit projet devient alors un outil stratégique, pas un chiffre observé trop tard une fois la mission terminée." ] },
    ],
    conclusion:
      "Comprendre le profit projet freelance, c’est reprendre le contrôle sur votre activité. Avec des critères nets de rentabilité, vous sécurisez votre revenu, votre temps et la qualité de vos engagements clients.",
    related: [
      { href: "/blog/freelance-project-profit-mistakes", label: "Éviter les erreurs qui tuent la marge" },
      { href: "/blog/how-to-price-freelance-projects-profitably", label: "Tarifer les projets de façon rentable" },
    ],
  },
  "how-to-price-freelance-projects-profitably": {
    intro:
      "Tarifer un projet freelance de manière rentable exige plus qu’un benchmark rapide des prix du marché. Il faut relier valeur livrée, complexité d’exécution, risque projet et objectifs de marge. Sans cette approche, le devis devient un pari, et la rentabilité dépend du hasard plutôt que d’un système.",
    context:
      "Le pricing projet rentable repose sur un principe simple : chaque devis doit protéger à la fois le client (visibilité, résultats attendus) et le freelance (marge, charge maîtrisée, paiement sécurisé).",
    sections: [
      { h2: "Étape 1 : cadrer le périmètre avant de chiffrer", h3: "Objectifs, livrables, exclusions", paragraphs: ["La précision du cadrage détermine la qualité du prix. Définissez ce qui est inclus, ce qui ne l’est pas, les livrables finaux et les jalons d’acceptation. Plus le périmètre est clair, plus le devis est défendable.", "Un devis sans exclusions explicites ouvre la porte aux demandes hors cadre et réduit mécaniquement votre marge." ] },
      { h2: "Étape 2 : construire le prix avec une logique de marge", h3: "Coût interne + risque + valeur client", paragraphs: ["Calculez d’abord votre coût interne (temps, outils, coordination), ajoutez une prime de risque selon l’incertitude, puis ajustez selon la valeur économique créée pour le client. Cette séquence évite la sous-tarification émotionnelle.", "Le prix final doit rester cohérent avec votre positionnement. Un tarif rentable mais mal argumenté peut freiner la conversion ; d’où l’importance de la proposition de valeur." ] },
      { h2: "Étape 3 : structurer le devis en options", h3: "Essentiel, standard, premium", paragraphs: ["Les options facilitent la décision et améliorent le panier moyen sans forcer une négociation binaire. Le client choisit un niveau d’engagement, et vous gardez la maîtrise de votre marge.", "Cette structure réduit aussi la tentation des remises, car la discussion porte sur le périmètre et les résultats, pas uniquement sur le prix." ] },
      { h2: "Étape 4 : sécuriser l’exécution contractuellement", h3: "Acompte, jalons, révisions, délais", paragraphs: ["Un prix rentable peut être annulé par de mauvaises conditions contractuelles. Exigez un acompte, définissez les délais de validation, limitez les révisions incluses et formalisez les changements de périmètre.", "La rentabilité projet dépend autant de la qualité du contrat que du montant affiché sur le devis." ] },
    ],
    conclusion:
      "Tarifer vos projets freelance avec méthode vous permet de sortir de la logique du “juste prix intuitif”. Vous gagnez en clarté commerciale, en prévisibilité financière et en sérénité d’exécution.",
    related: [
      { href: "/blog/freelance-project-profit-explained", label: "Comprendre la rentabilité projet" },
      { href: "/blog/freelance-project-profit-mistakes", label: "Éviter les pièges de pricing" },
    ],
  },
  "freelance-project-profit-mistakes": {
    intro:
      "Les erreurs de profitabilité en freelance sont rarement spectaculaires ; elles sont surtout répétitives et silencieuses. Une remise trop vite accordée, une révision “offerte” de plus, un cadrage imprécis, un acompte oublié… isolément, chaque détail semble acceptable. Ensemble, ils peuvent réduire fortement votre revenu annuel.",
    context:
      "Identifier ces erreurs tôt permet de protéger votre marge sans dégrader la relation client. Le sujet n’est pas d’être rigide, mais de construire des règles professionnelles cohérentes.",
    sections: [
      { h2: "Erreur n°1 : confondre chiffre d’affaires et profit", h3: "Beaucoup de missions, peu de marge", paragraphs: ["Un volume élevé de projets peut masquer une rentabilité faible si votre temps non facturable explose. Sans suivi de marge par mission, vous ne voyez la dérive qu’à la fin du trimestre.", "Le bon réflexe est de mesurer systématiquement le revenu horaire effectif et la marge nette par projet." ] },
      { h2: "Erreur n°2 : accepter un périmètre flou", h3: "Le terrain idéal de la dérive de périmètre", paragraphs: ["Un brief vague conduit à des allers-retours incessants, des attentes implicites et des négociations tardives. Vous travaillez plus pour le même montant.", "Un cadrage initial structuré, avec exclusions et process de validation, réduit drastiquement cette dérive." ] },
      { h2: "Erreur n°3 : négliger les conditions de paiement", h3: "La marge ne vaut rien sans encaissement", paragraphs: ["Un projet rentable sur papier peut dégrader votre trésorerie si le paiement est tardif ou incertain. Sans acompte et échéances claires, vous portez seul le risque financier.", "La discipline de facturation (jalons, rappels, clauses de retard) fait partie intégrante de la profitabilité." ] },
      { h2: "Erreur n°4 : sous-estimer les coûts indirects", h3: "Administration, outils, coordination", paragraphs: ["Les coûts invisibles grignotent la marge : gestion de projet, prospection, veille, comptabilité, outils SaaS. Les ignorer conduit à des tarifs trop bas.", "Intégrer ces coûts dans votre modèle de prix vous permet d’éviter l’épuisement et la course permanente aux nouvelles missions." ] },
    ],
    conclusion:
      "Corriger les erreurs de profitabilité freelance ne demande pas de révolution, mais de la constance. Quelques règles bien appliquées suffisent à transformer une activité instable en business réellement rentable.",
    related: [
      { href: "/blog/freelance-project-profit-explained", label: "Mesurer la rentabilité d’un projet" },
      { href: "/blog/how-to-price-freelance-projects-profitably", label: "Mieux tarifer ses projets" },
    ],
  },
  "invoice-generator-for-freelancers": {
    intro:
      "Un générateur de facture est souvent perçu comme un simple outil administratif. En réalité, c’est un composant clé de votre système de trésorerie freelance. Une facture claire, complète et standardisée réduit les retards de paiement, limite les contestations et améliore votre crédibilité opérationnelle.",
    context:
      "Le vrai enjeu n’est pas de produire un PDF rapidement, mais de construire un processus de facturation robuste : émission au bon moment, informations non ambiguës, suivi automatique et escalade maîtrisée.",
    sections: [
      { h2: "Pourquoi la qualité de facture impacte directement le cash", h3: "Clarté = vitesse de paiement", paragraphs: ["Les clients paient plus vite quand la facture est incontestable : intitulé précis, référence contrat, livrables, montant HT/TTC, échéance et modalités de règlement. Chaque ambiguïté retarde l’approbation interne.", "Un générateur standardisé vous aide à maintenir ce niveau de clarté sur toutes vos missions." ] },
      { h2: "Éléments indispensables à automatiser", h3: "Numérotation, conditions, rappels", paragraphs: ["Automatisez la numérotation, les mentions légales, les délais, les pénalités et les coordonnées de paiement. Vous réduisez les oublis qui créent des litiges évitables.", "Ajoutez des rappels automatiques avant et après échéance pour réduire la charge mentale et éviter les relances improvisées." ] },
      { h2: "Intégrer la facture dans votre workflow projet", h3: "De la livraison à l’encaissement", paragraphs: ["La facture doit être déclenchée par un jalon clair (livraison validée, phase terminée, date contractuelle). Cette règle évite les retards administratifs internes.", "Associez chaque facture à un statut : émise, reçue, validée, payée, relancée. Vous transformez la facturation en système pilotable." ] },
      { h2: "Professionnaliser la relation client", h3: "Moins de friction, plus de confiance", paragraphs: ["Un processus de facturation propre envoie un signal fort : vous êtes structuré, fiable et prévisible. Cela renforce la relation commerciale et facilite les renouvellements.", "La qualité opérationnelle est souvent un avantage concurrentiel sous-estimé chez les freelances et petites agences." ] },
    ],
    conclusion:
      "Un générateur de facture bien utilisé ne sert pas seulement à “faire des factures”. Il protège votre trésorerie, votre temps et votre crédibilité. C’est un levier simple mais puissant de performance freelance.",
    related: [
      { href: "/blog/how-to-write-invoice-that-gets-paid-fast", label: "Rédiger une facture qui se paie vite" },
      { href: "/blog/invoice-workflow-for-small-business-cash-flow", label: "Structurer le workflow de facturation" },
    ],
  },
  "how-to-write-invoice-that-gets-paid-fast": {
    intro:
      "Une facture “qui se paie vite” n’est pas une question de chance ni de gentillesse du client. C’est le résultat d’une rédaction précise, d’un cadre contractuel clair et d’un processus de relance cohérent. Plus la facture est lisible et défendable, moins elle passe de temps en validation et plus l’encaissement est rapide.",
    context:
      "Beaucoup de retards de paiement viennent d’erreurs évitables : objet trop vague, absence de référence projet, modalités imprécises, échéance ambiguë ou absence de suivi. Corriger ces points améliore immédiatement votre cycle de cash.",
    sections: [
      { h2: "Structurer une facture sans ambiguïté", h3: "Titre, objet, référence, détail des postes", paragraphs: ["Votre facture doit permettre à un tiers (comptabilité, direction, finance) de comprendre instantanément ce qui est facturé et pourquoi. Le détail des postes et la référence contractuelle réduisent les allers-retours.", "Évitez les formulations génériques. Une description précise des livrables sécurise l’approbation interne du client." ] },
      { h2: "Clarifier les conditions de paiement", h3: "Échéance, moyen de règlement, pénalités", paragraphs: ["Indiquez une date d’échéance explicite, les coordonnées de paiement et les conditions en cas de retard. Plus ces éléments sont visibles, moins le client peut invoquer l’incertitude.", "La clarté n’est pas agressive : elle protège les deux parties et professionnalise la relation." ] },
      { h2: "Relancer sans détériorer la relation", h3: "Séquence courte, ferme, respectueuse", paragraphs: ["Préparez une séquence standard : rappel pré-échéance, relance à J+2, relance à J+7, puis escalade contractuelle si nécessaire. L’automatisation évite l’oubli et réduit l’émotion.", "Une relance professionnelle doit rester factuelle : référence facture, montant, date, action attendue." ] },
      { h2: "Prévenir les retards avant facturation", h3: "Cadrer dès le contrat", paragraphs: ["La rapidité de paiement se joue en amont : acompte, jalons, validation formelle, interlocuteur finance identifié. Sans ces prérequis, même une bonne facture peut tarder.", "Pensez la facturation comme un système complet, pas comme une tâche finale de clôture projet." ] },
    ],
    conclusion:
      "Rédiger une facture qui se paie vite, c’est concevoir un document clair dans un processus cohérent. Ce niveau de rigueur améliore votre trésorerie et vous libère du temps pour des activités à plus forte valeur.",
    related: [
      { href: "/blog/invoice-generator-for-freelancers", label: "Mettre en place un générateur de facture" },
      { href: "/blog/invoice-workflow-for-small-business-cash-flow", label: "Créer un workflow de paiement fiable" },
    ],
  },
  "invoice-workflow-for-small-business-cash-flow": {
    intro:
      "Un bon workflow de facturation protège la trésorerie d’une petite entreprise bien plus qu’une relance ponctuelle en fin de mois. Quand la facturation est traitée comme un processus transverse — commercial, production, finance — les encaissements deviennent plus prévisibles et les tensions de cash diminuent.",
    context:
      "Le problème de nombreuses structures n’est pas le manque de clients, mais le décalage entre livraison et encaissement. Un workflow clair réduit ce décalage et améliore la capacité de pilotage.",
    sections: [
      { h2: "Étape 1 : déclencheurs de facturation", h3: "Ne jamais dépendre de la mémoire", paragraphs: ["Définissez des déclencheurs précis : signature, jalon validé, fin de période, livraison finale. Chaque déclencheur doit produire une action facturation immédiate.", "Cette logique évite les retards “administratifs” qui coûtent cher à la trésorerie sans créer de valeur." ] },
      { h2: "Étape 2 : validation interne rapide", h3: "Responsables, délais et checklists", paragraphs: ["Attribuez clairement les rôles : qui prépare, qui valide, qui envoie, qui suit. Sans responsabilités explicites, les factures restent en attente.", "Une checklist standard (montant, référence, TVA, échéance, coordonnées) réduit les erreurs et accélère l’envoi." ] },
      { h2: "Étape 3 : suivi et relance cadencés", h3: "Pilotage hebdomadaire des encours", paragraphs: ["Mettez en place un suivi hebdomadaire des encours par ancienneté. Cette vue permet d’agir tôt sur les retards et de prioriser les actions de recouvrement.", "Relances progressives, scripts standardisés et escalade mesurée créent un cadre professionnel, moins dépendant des personnes." ] },
      { h2: "Étape 4 : amélioration continue", h3: "Mesurer pour corriger", paragraphs: ["Suivez des indicateurs simples : délai moyen d’encaissement, taux de facture payée à l’échéance, taux d’erreur de facturation. Ces métriques révèlent où le workflow se bloque.", "L’objectif n’est pas la perfection administrative, mais une trésorerie plus stable et une meilleure capacité d’investissement." ] },
    ],
    conclusion:
      "Un workflow de facturation solide transforme la trésorerie en avantage opérationnel. Avec des étapes claires et un pilotage régulier, votre entreprise encaisse plus vite, anticipe mieux et décide avec plus de sérénité.",
    related: [
      { href: "/blog/how-to-write-invoice-that-gets-paid-fast", label: "Rédiger des factures plus efficaces" },
      { href: "/blog/invoice-generator-for-freelancers", label: "Standardiser l’émission de factures" },
    ],
  },
  "client-welcome-doc-that-prevents-scope-creep": {
    intro:
      "Le scope creep n’apparaît pas seulement parce qu’un client “demande trop”. Il apparaît surtout quand les attentes, responsabilités et limites ne sont pas explicites dès le départ. Un document d’accueil client bien conçu réduit cette ambiguïté et protège la rentabilité du projet sans rigidifier la relation.",
    context:
      "Ce document n’est pas un PDF décoratif. C’est un outil d’alignement opérationnel : rôles, cadence de communication, process de validation, périmètre inclus et protocole de changement. Quand ces règles sont visibles, les frictions baissent fortement.",
    sections: [
      { h2: "Ce qu’un document d’accueil doit contenir", h3: "Clarté avant exécution", paragraphs: ["Incluez l’objectif du projet, les livrables, le calendrier, les canaux de communication, les délais de réponse et les personnes décisionnaires. Cette base limite les incompréhensions.", "Ajoutez aussi une section “ce qui n’est pas inclus” pour prévenir les interprétations implicites." ] },
      { h2: "Gérer les demandes hors périmètre", h3: "Processus de changement explicite", paragraphs: ["Prévoyez une procédure simple : demande écrite, estimation d’impact délai/budget, validation formelle avant exécution. Cette règle protège la marge et évite les tensions émotionnelles.", "Le client ne perçoit pas ce cadre comme un blocage s’il est présenté comme une garantie de qualité et de prévisibilité." ] },
      { h2: "Renforcer la communication projet", h3: "Rythme, formats, décisions", paragraphs: ["Définissez une cadence (hebdo/bihebdo), un format de compte-rendu et un mode de validation des livrables. Vous réduisez les malentendus et les retours tardifs.", "Un projet bien communiqué avance plus vite et consomme moins d’énergie de coordination." ] },
      { h2: "Faire du document d’accueil un actif réutilisable", h3: "Standardiser sans déshumaniser", paragraphs: ["Créez une trame réutilisable puis adaptez-la selon le type de mission. Vous gagnez du temps tout en conservant une approche personnalisée.", "Cette standardisation améliore la qualité globale de vos phases d’onboarding et facilite la montée en volume de votre activité." ] },
    ],
    conclusion:
      "Un document d’accueil client bien structuré est l’un des meilleurs antidotes au scope creep. Il protège la marge, fluidifie la collaboration et augmente la satisfaction des deux parties.",
    related: [
      { href: "/blog/onboarding-welcome-document-checklist", label: "Checklist complète de document d’accueil" },
      { href: "/blog/how-to-price-freelance-projects-profitably", label: "Renforcer le cadrage des projets freelance" },
    ],
  },
  "onboarding-welcome-document-checklist": {
    intro:
      "Une checklist d’onboarding client bien conçue évite les oublis coûteux qui ralentissent les projets et dégradent la relation dès le démarrage. En agence comme en freelance, les premières semaines conditionnent la vitesse d’exécution, la qualité des livrables et le taux de rétention.",
    context:
      "L’objectif d’une checklist n’est pas de bureaucratiser l’accueil, mais de garantir un minimum opérationnel commun : informations clés, accès, rôles, calendrier, process de validation et règles de communication.",
    sections: [
      { h2: "Bloc 1 : alignement stratégique initial", h3: "Objectifs, priorités, indicateurs", paragraphs: ["Avant de produire quoi que ce soit, clarifiez le résultat attendu, les priorités business et les métriques de succès. Sans cet alignement, l’équipe exécute vite… mais pas forcément dans la bonne direction.", "Documentez ces éléments dans un format validé par le client pour éviter les interprétations divergentes." ] },
      { h2: "Bloc 2 : accès et responsabilités", h3: "Qui décide, qui exécute, qui valide", paragraphs: ["Listez tous les accès nécessaires (ads, analytics, CMS, CRM), les propriétaires de comptes et les niveaux d’autorisation. Cette étape évite les blocages dès la semaine 1.", "Précisez les rôles décisionnels côté client et côté prestataire. Les projets ralentissent surtout quand la chaîne de décision est floue." ] },
      { h2: "Bloc 3 : cadence opérationnelle", h3: "Rituels, formats, délais", paragraphs: ["Définissez les rituels de suivi, les formats de livrable, les délais de feedback et les règles d’escalade. Une cadence claire réduit les cycles de rework.", "Ce cadre permet également de mieux prévoir la charge et de maintenir la qualité dans la durée." ] },
      { h2: "Bloc 4 : risques et garde-fous", h3: "Prévenir plutôt que corriger", paragraphs: ["Identifiez les risques probables (retards d’accès, validations tardives, changements de priorités) et anticipez des réponses standards. La prévention est moins coûteuse que la correction.", "Une checklist vivante, mise à jour après chaque onboarding, devient un avantage opérationnel durable." ] },
    ],
    conclusion:
      "Une bonne checklist d’onboarding transforme le démarrage projet en avantage compétitif. Elle réduit le flou, accélère l’exécution et crée une collaboration plus fiable dès les premiers jours.",
    related: [
      { href: "/blog/client-welcome-doc-that-prevents-scope-creep", label: "Créer un document d’accueil anti-dérive de périmètre" },
      { href: "/blog/freelance-project-profit-mistakes", label: "Limiter les erreurs de rentabilité liées au cadrage" },
    ],
  },
};

export function FrenchLocalizedArticlePhase4({ slug, title, ctaHref, ctaText }: Phase4ArticleProps) {
  const content = PHASE4_CONTENT[slug];

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
            <p key={paragraph.slice(0, 50)} className="mb-6 leading-8 text-gray-700">
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
          Utilisez le calculateur associé pour transformer votre lecture en plan d’action chiffré et immédiatement exploitable.
        </p>
        <Link href={ctaHref} className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800">
          {ctaText} →
        </Link>
      </div>
    </main>
  );
}
