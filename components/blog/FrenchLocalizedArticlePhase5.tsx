import Link from "next/link";

type Phase5Slug =
  | "automate-client-onboarding-with-welcome-docs"
  | "client-access-request-template-security"
  | "how-to-request-client-access-without-delays"
  | "client-access-handoff-process-for-agencies"
  | "how-to-ask-for-testimonials-that-convert"
  | "testimonial-request-system-after-project-delivery"
  | "automate-feedback-requests-for-service-business"
  | "revenue-share-contract-terms-that-protect-both-sides"
  | "how-to-negotiate-revenue-share-deals"
  | "revenue-share-contract-red-flags"
  | "freelancer-contract-clauses-you-should-never-skip"
  | "freelance-contract-template-for-project-based-work"
  | "freelancer-contract-negotiation-guide";

type Phase5Props = {
  slug: Phase5Slug;
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

const PHASE5_CONTENT: Record<Phase5Slug, Content> = {
  "automate-client-onboarding-with-welcome-docs": {
    intro:
      "Automatiser l’onboarding client ne signifie pas déshumaniser la relation. Cela signifie éliminer les frictions répétitives qui ralentissent le démarrage et dégradent la perception de professionnalisme. Quand l’accueil repose uniquement sur des échanges improvisés, les informations clés se perdent, les attentes restent floues et le projet prend du retard dès la première semaine.",
    context:
      "Un onboarding efficace repose sur un socle documentaire clair : welcome doc, checklist d’accès, règles de communication, jalons de validation et responsabilités. L’automatisation intervient pour fiabiliser cette base, pas pour remplacer l’accompagnement.",
    sections: [
      { h2: "Standardiser les étapes critiques", h3: "Ce qui doit être systématique dès la signature", paragraphs: ["Dès la confirmation, déclenchez une séquence standard : envoi du document d’accueil, collecte d’accès, présentation des interlocuteurs et calendrier de lancement. Cette standardisation réduit le temps mort entre vente et production.", "L’objectif est d’éviter la dépendance aux mémoires individuelles. Même en cas de charge élevée, chaque nouveau client reçoit un démarrage cohérent et complet." ] },
      { h2: "Automatiser les tâches à faible valeur", h3: "Formulaires, rappels, relances, validations", paragraphs: ["Les tâches répétitives — collecte d’informations, rappels de documents, confirmations de rendez-vous — peuvent être automatisées sans nuire à la qualité relationnelle. Vous libérez du temps pour les échanges stratégiques.", "Une automatisation utile est transparente pour le client : elle fluidifie le parcours au lieu de créer une sensation robotique." ] },
      { h2: "Conserver une couche humaine forte", h3: "L’automatisation ne remplace pas le cadrage", paragraphs: ["Même avec un flux automatisé, un point d’alignement humain reste essentiel pour valider objectifs, priorités et limites de périmètre. C’est ce moment qui réduit les malentendus et protège la marge.", "Le bon équilibre consiste à automatiser la logistique et personnaliser la stratégie." ] },
      { h2: "Mesurer la qualité de votre onboarding", h3: "Temps de lancement, taux de complétude, satisfaction initiale", paragraphs: ["Suivez des métriques simples : délai entre signature et démarrage, taux d’accès reçus à temps, nombre de retours de clarification, satisfaction des 14 premiers jours. Ces indicateurs montrent si votre système est réellement utile.", "Un onboarding mesuré s’améliore rapidement et devient un avantage concurrentiel durable." ] },
    ],
    conclusion:
      "Automatiser l’onboarding avec des documents d’accueil bien conçus permet de démarrer plus vite, cadrer plus proprement et préserver la qualité de la relation client. C’est un levier de productivité, mais aussi de rentabilité et de réputation.",
    related: [
      { href: "/blog/client-welcome-doc-that-prevents-scope-creep", label: "Créer un document d’accueil anti-dérive" },
      { href: "/blog/onboarding-welcome-document-checklist", label: "Utiliser une checklist d’onboarding" },
    ],
  },
  "client-access-request-template-security": {
    intro:
      "Demander des accès client est un moment critique : vous devez aller vite pour lancer le projet, sans créer de risque sécurité ni de confusion opérationnelle. Beaucoup d’équipes échouent à cet équilibre et alternent entre relances interminables et accès trop larges accordés dans l’urgence.",
    context:
      "Un bon template de demande d’accès apporte clarté, traçabilité et contrôle. Il précise qui demande quoi, pour quelle finalité, avec quel niveau de permission et pendant quelle durée.",
    sections: [
      { h2: "Les informations indispensables dans un template", h3: "Accès minimal, objectif, propriétaire", paragraphs: ["Chaque demande doit inclure l’outil concerné, le niveau d’accès nécessaire, l’usage prévu et le responsable interne côté client. Cette précision réduit les refus et accélère les validations.", "Le principe du moindre privilège doit être explicite : accès strictement nécessaire, jamais plus." ] },
      { h2: "Sécuriser sans ralentir", h3: "Processus clair et vérifiable", paragraphs: ["Prévoyez un chemin simple : demande standardisée, validation, confirmation, audit périodique. Cette structure rassure les clients et fluidifie les échanges.", "Évitez les demandes vagues du type “admin complet”. Elles créent du risque et augmentent les blocages juridiques côté client." ] },
      { h2: "Gérer les accès temporaires", h3: "Entrée rapide, sortie propre", paragraphs: ["Définissez dès le départ une durée de validité des accès et une procédure de retrait en fin de mission. Cette anticipation évite les angles morts de sécurité.", "Un processus de révocation documenté est aussi important qu’un processus d’octroi." ] },
      { h2: "Coordonner équipes techniques et business", h3: "Limiter les allers-retours", paragraphs: ["Centralisez les demandes d’accès dans un document unique partagé entre chef de projet, opérationnels et référent IT client. Vous réduisez les boucles d’email et les malentendus.", "Un modèle clair d’accès accélère l’onboarding et améliore la confiance dès le début de collaboration." ] },
    ],
    conclusion:
      "Un template de demande d’accès bien construit vous fait gagner du temps sans compromettre la sécurité. Il protège le client, professionnalise votre exécution et réduit les retards de démarrage.",
    related: [
      { href: "/blog/how-to-request-client-access-without-delays", label: "Demander des accès sans blocage" },
      { href: "/blog/client-access-handoff-process-for-agencies", label: "Organiser le handoff des accès" },
    ],
  },
  "how-to-request-client-access-without-delays": {
    intro:
      "Les retards d’accès client sont l’un des plus grands freins au démarrage projet. Sans accès aux outils clés, l’équipe ne peut pas produire, le client ne voit pas d’avancement, et la confiance s’érode dès les premiers jours. La bonne nouvelle : ces retards sont souvent évitables avec une méthode simple.",
    context:
      "Demander un accès efficacement, c’est préparer la demande avant de la formuler : niveau de droit exact, justification, interlocuteur valideur, échéance, et canal de suivi.",
    sections: [
      { h2: "Préparer une liste d’accès priorisée", h3: "Essentiel d’abord, secondaire ensuite", paragraphs: ["Classez les accès en trois niveaux : indispensables pour démarrer, utiles pour optimiser, optionnels pour plus tard. Cette hiérarchisation évite de noyer le client sous une liste massive.", "Le client comprend mieux l’urgence quand chaque accès est relié à une action concrète." ] },
      { h2: "Rédiger des demandes actionnables", h3: "Clarté, contexte, date cible", paragraphs: ["Chaque demande doit être formulée en une phrase claire : outil, permission, finalité, date souhaitée. Les formulations vagues créent des délais et des incompréhensions.", "Ajoutez une date cible réaliste et une proposition d’aide technique pour accélérer la mise en place." ] },
      { h2: "Mettre en place un suivi sans friction", h3: "Relances utiles plutôt que pression", paragraphs: ["Utilisez un tableau de suivi partagé avec statuts (demandé, en validation, reçu, bloqué). Ce format évite les relances redondantes et structure les priorités.", "Les relances doivent être courtes et factuelles, avec rappel de l’impact sur le calendrier projet." ] },
      { h2: "Anticiper les blocages fréquents", h3: "Comptes inactifs, validations IT, sécurité interne", paragraphs: ["Préparez des alternatives quand un accès tarde : export manuel temporaire, capture d’écran sécurisée, partage via référent interne. Vous maintenez l’avancement sans créer de risque.", "Cette approche proactive rassure le client et prouve votre maîtrise opérationnelle." ] },
    ],
    conclusion:
      "Demander des accès sans délais repose sur une discipline simple : prioriser, clarifier, suivre, anticiper. Avec ce cadre, vous démarrez plus vite et évitez les blocages coûteux dès l’onboarding.",
    related: [
      { href: "/blog/client-access-request-template-security", label: "Template de demande d’accès sécurisé" },
      { href: "/blog/client-access-handoff-process-for-agencies", label: "Processus de handoff des accès" },
    ],
  },
  "client-access-handoff-process-for-agencies": {
    intro:
      "Le handoff des accès client est souvent négligé alors qu’il conditionne à la fois la sécurité, la continuité de service et l’image de l’agence en fin de mission. Un handoff mal géré laisse des comptes orphelins, des droits excessifs et des frictions inutiles avec le client.",
    context:
      "Un processus de handoff propre doit couvrir les deux phases : la transmission initiale des accès au démarrage et la restitution/fermeture des droits en sortie. C’est un sujet de gouvernance, pas seulement d’IT.",
    sections: [
      { h2: "Formaliser l’inventaire des accès", h3: "Qui a accès à quoi, quand et pourquoi", paragraphs: ["Tenez un inventaire vivant des comptes, rôles, niveaux d’autorisation et propriétaires côté client. Sans inventaire, le retrait d’accès devient incomplet.", "Ce référentiel protège l’agence en cas de litige et facilite les audits sécurité." ] },
      { h2: "Encadrer le handoff de début de mission", h3: "Validation et traçabilité", paragraphs: ["Au démarrage, documentez chaque accès reçu avec date, canal, périmètre et utilisateur assigné. Cette traçabilité évite les confusions opérationnelles.", "Privilégiez les comptes nominatifs plutôt que des identifiants partagés pour renforcer la sécurité." ] },
      { h2: "Préparer la sortie dès l’entrée", h3: "Checklist de restitution et révocation", paragraphs: ["Dès la signature, prévoyez une checklist de fin de mission : export des livrables, transfert de propriété, suppression des accès, confirmation client. Cette anticipation fluidifie la sortie.", "Un offboarding bien géré protège les deux parties et renforce votre réputation professionnelle." ] },
      { h2: "Communiquer de façon transparente", h3: "Éviter les tensions de fin de contrat", paragraphs: ["La phase de handoff doit être expliquée tôt : ce qui sera transmis, ce qui sera supprimé, et à quelle date. Les malentendus naissent surtout quand ces points sont découverts trop tard.", "Une communication claire réduit le risque d’escalade émotionnelle et juridique." ] },
    ],
    conclusion:
      "Un processus de handoff d’accès bien conçu permet de commencer vite et de sortir proprement. C’est un marqueur fort de maturité opérationnelle pour toute agence.",
    related: [
      { href: "/blog/how-to-request-client-access-without-delays", label: "Accélérer les demandes d’accès" },
      { href: "/blog/client-access-request-template-security", label: "Sécuriser les demandes d’accès" },
    ],
  },
  "how-to-ask-for-testimonials-that-convert": {
    intro:
      "Demander un témoignage n’est pas difficile ; obtenir un témoignage qui convertit est une autre histoire. Beaucoup de retours clients restent vagues (“super travail”), donc peu utiles commercialement. Un bon témoignage doit être crédible, spécifique et orienté résultat pour générer de vraies opportunités.",
    context:
      "Le secret n’est pas d’insister plus, mais de cadrer mieux : bon timing, bon format, bonnes questions. Vous facilitez la réponse du client et améliorez fortement la qualité des preuves collectées.",
    sections: [
      { h2: "Choisir le bon moment", h3: "Demander quand la valeur est encore fraîche", paragraphs: ["Le meilleur moment est juste après une victoire tangible : lancement réussi, KPI amélioré, problème résolu. À ce stade, la mémoire des résultats est précise.", "Attendre trop longtemps réduit le taux de réponse et la qualité du récit." ] },
      { h2: "Poser des questions qui produisent des preuves", h3: "Avant / après / impact", paragraphs: ["Évitez la question ouverte “un avis ?”. Préférez un canevas : situation initiale, intervention, résultat observé, bénéfice business. Vous obtenez un témoignage exploitable commercialement.", "Des questions précises aident aussi les clients pressés à répondre rapidement." ] },
      { h2: "Rendre la réponse facile", h3: "Formats courts, validation simple", paragraphs: ["Proposez plusieurs formats : 3 réponses écrites, citation courte validée, mini-audio, ou appel de 10 minutes. Plus la friction est faible, plus le taux de réponse monte.", "Validez toujours la version finale avec le client pour préserver la confiance." ] },
      { h2: "Utiliser les témoignages avec méthode", h3: "Pages, propositions, séquences commerciales", paragraphs: ["Un bon témoignage doit être relié à une offre précise et placé au bon endroit : page service, proposition, email de nurturing, call de vente.", "Sans ce travail d’activation, même de bons témoignages restent sous-exploités." ] },
    ],
    conclusion:
      "Des témoignages qui convertissent se construisent avec un vrai système, pas avec une demande improvisée. En structurant timing, questions et diffusion, vous transformez la preuve client en levier commercial durable.",
    related: [
      { href: "/blog/testimonial-request-system-after-project-delivery", label: "Système de demande après livraison" },
      { href: "/blog/automate-feedback-requests-for-service-business", label: "Automatiser la collecte de feedback" },
    ],
  },
  "testimonial-request-system-after-project-delivery": {
    intro:
      "Après livraison, beaucoup de prestataires passent immédiatement au projet suivant et oublient de capitaliser sur la preuve sociale. C’est une erreur coûteuse. Un système de demande de témoignage post-livraison permet d’augmenter le taux de réponse, la qualité des retours et l’impact commercial.",
    context:
      "Le point clé est de transformer une action ponctuelle en processus reproductible : déclencheur, séquence de messages, format de réponse, validation et publication.",
    sections: [
      { h2: "Définir un déclencheur systématique", h3: "Chaque livraison doit ouvrir la séquence", paragraphs: ["Dès qu’un jalon final est validé, la demande de témoignage doit être lancée automatiquement ou semi-automatiquement. Vous évitez les oublis liés à la charge de travail.", "Le déclencheur doit être intégré à votre checklist de clôture projet." ] },
      { h2: "Construire une séquence courte", h3: "Message initial + relance utile", paragraphs: ["Une séquence simple suffit : message principal contextualisé, relance douce à J+4, relance finale à J+10. Au-delà, le rendement baisse fortement.", "Chaque message doit rappeler la valeur livrée et proposer un format de réponse facile." ] },
      { h2: "Collecter un témoignage exploitable", h3: "Spécificité avant compliment", paragraphs: ["Demandez des éléments concrets : problème initial, solution apportée, résultat observé, recommandation. Cette structure transforme un simple “avis” en preuve de performance.", "Les témoignages spécifiques renforcent la conversion bien plus que les formules générales." ] },
      { h2: "Organiser la publication", h3: "Validation, stockage, réutilisation", paragraphs: ["Créez un espace central pour stocker les témoignages validés, avec tags par offre/secteur/résultat. Vous facilitez leur réutilisation dans les pages et propositions commerciales.", "Un bon système de publication maximise la durée de vie de chaque preuve collectée." ] },
    ],
    conclusion:
      "Un système post-livraison bien conçu transforme les retours clients en actif commercial permanent. Il renforce votre crédibilité et soutient la croissance sans dépendre uniquement de la prospection froide.",
    related: [
      { href: "/blog/how-to-ask-for-testimonials-that-convert", label: "Poser les bonnes demandes de témoignage" },
      { href: "/blog/automate-feedback-requests-for-service-business", label: "Automatiser les relances feedback" },
    ],
  },
  "automate-feedback-requests-for-service-business": {
    intro:
      "Automatiser les demandes de feedback dans une activité de service peut améliorer fortement la collecte de preuves client — à condition d’éviter l’effet “message robotique”. Le défi est de combiner cadence automatisée et tonalité humaine.",
    context:
      "Un bon système d’automatisation ne remplace pas la relation client ; il garantit que les demandes pertinentes sont envoyées au bon moment, dans le bon format, avec un suivi cohérent.",
    sections: [
      { h2: "Choisir les moments d’envoi", h3: "Après valeur perçue, pas au hasard", paragraphs: ["Déclenchez les demandes après un résultat tangible (livrable validé, gain mesuré, étape clé franchie). Ces moments génèrent des réponses plus positives et plus détaillées.", "Un envoi aléatoire ou trop tôt produit des retours faibles et augmente le taux d’ignorance." ] },
      { h2: "Personnaliser les messages automatisés", h3: "Contexte, prénom, résultat", paragraphs: ["Même dans une séquence automatisée, personnalisez le contexte : mission, résultat obtenu, étape concernée. Le client doit sentir que le message lui est adressé réellement.", "Une personnalisation minimale bien pensée suffit souvent à maintenir une tonalité humaine." ] },
      { h2: "Rendre la réponse simple", h3: "Formats courts et guidés", paragraphs: ["Proposez des formats à faible effort : score + commentaire, 3 questions guidées, citation validable en un clic. Plus c’est simple, plus le taux de réponse augmente.", "Offrez ensuite une option approfondie pour les clients prêts à partager un retour détaillé." ] },
      { h2: "Boucler la boucle opérationnelle", h3: "Analyser, classer, réutiliser", paragraphs: ["Chaque feedback doit être classé (positif, neutre, critique) et relié à une action : publication, amélioration service, suivi client. Sans cette boucle, la collecte perd de sa valeur.", "L’automatisation devient puissante quand elle alimente à la fois marketing et qualité de delivery." ] },
    ],
    conclusion:
      "Automatiser les demandes de feedback est un levier de croissance si vous gardez une intention humaine et un processus clair. Vous collectez plus de preuves, plus vite, sans sacrifier la qualité relationnelle.",
    related: [
      { href: "/blog/how-to-ask-for-testimonials-that-convert", label: "Obtenir des témoignages qui convertissent" },
      { href: "/blog/testimonial-request-system-after-project-delivery", label: "Système post-livraison" },
    ],
  },
  "revenue-share-contract-terms-that-protect-both-sides": {
    intro:
      "Un contrat de partage de revenus peut créer un alignement puissant… ou devenir une source continue de conflit. Tout dépend de la qualité des clauses. Les accords fragiles laissent trop d’ambiguïtés sur la base de calcul, le calendrier de paiement et les obligations opérationnelles.",
    context:
      "Les meilleures clauses ne protègent pas une seule partie ; elles rendent la collaboration exécutable et vérifiable pour les deux côtés. C’est cette symétrie qui sécurise la relation sur la durée.",
    sections: [
      { h2: "Définir précisément la base de revenu", h3: "Ce qui est inclus, exclu, déduit", paragraphs: ["La clause centrale doit expliciter la base de calcul : revenu brut ou net, remises, remboursements, taxes, frais plateformes. Sans cette précision, les litiges sont quasi inévitables.", "Une base claire réduit les contestations et accélère les paiements." ] },
      { h2: "Encadrer reporting et audit", h3: "Transparence sans lourdeur excessive", paragraphs: ["Prévoyez une fréquence de reporting, un format standard et un droit de vérification proportionné. La transparence régulière est la meilleure prévention des conflits.", "Le but n’est pas de complexifier la gestion, mais de rendre les chiffres opposables et compréhensibles." ] },
      { h2: "Structurer les paiements", h3: "Échéances, retard, pénalités", paragraphs: ["Fixez des échéances claires, une procédure en cas de désaccord et des conséquences en cas de retard. Cette rigueur protège le cash-flow des deux parties.", "Un calendrier de paiement vague fragilise la confiance et ralentit l’exécution opérationnelle." ] },
      { h2: "Prévoir les clauses de sortie", h3: "Résiliation, transition, obligations post-contrat", paragraphs: ["Un bon contrat anticipe la fin de collaboration : conditions de résiliation, traitement des revenus en cours, transfert d’actifs et confidentialité.", "Ces clauses évitent les blocages de sortie qui détruisent la valeur créée." ] },
    ],
    conclusion:
      "Les termes contractuels de partage de revenus doivent avant tout rendre l’accord lisible, exécutable et équilibré. C’est ce qui protège durablement les deux parties et la relation commerciale.",
    related: [
      { href: "/blog/how-to-negotiate-revenue-share-deals", label: "Négocier un deal de partage de revenus" },
      { href: "/blog/revenue-share-contract-red-flags", label: "Repérer les clauses à risque" },
    ],
  },
  "how-to-negotiate-revenue-share-deals": {
    intro:
      "Négocier un deal de partage de revenus ne consiste pas à défendre un pourcentage “idéal”. La négociation efficace consiste à aligner contribution, risque, capacité d’exécution et niveau de transparence. Quand ces éléments sont ignorés, même un deal signé rapidement finit en tension.",
    context:
      "Une bonne négociation équilibre la vitesse de conclusion et la qualité contractuelle. L’objectif est de créer un accord durable, pas une victoire de court terme.",
    sections: [
      { h2: "Préparer les hypothèses avant de négocier", h3: "Contribution, coûts, scénarios", paragraphs: ["Arrivez en négociation avec des hypothèses chiffrées : potentiel de revenu, coûts d’exécution, risque de churn, efforts opérationnels. Cette préparation crédibilise vos propositions.", "Sans base chiffrée, la discussion dérive vers des positions émotionnelles." ] },
      { h2: "Négocier la structure, pas seulement le taux", h3: "Base de calcul, reporting, cadence de paiement", paragraphs: ["Le pourcentage seul ne suffit pas. Base de calcul, fréquence de reporting et calendrier de paiement ont autant d’impact sur la valeur réelle du deal.", "Les meilleurs négociateurs traitent ces dimensions comme un package cohérent." ] },
      { h2: "Gérer les objections de manière constructive", h3: "Transformer la friction en options", paragraphs: ["Face à un désaccord, proposez des options : paliers de performance, période test, clause de révision, seuils d’activation. Vous maintenez la dynamique sans céder sur les fondamentaux.", "Une négociation mature crée des alternatives plutôt qu’un rapport de force figé." ] },
      { h2: "Finaliser sans angle mort", h3: "Validation juridique et alignement opérationnel", paragraphs: ["Avant signature, vérifiez la cohérence entre contrat, process reporting, outils de suivi et responsabilités. Un bon texte sans exécution claire reste fragile.", "La qualité de clôture conditionne la qualité de la collaboration future." ] },
    ],
    conclusion:
      "Négocier un revenu partagé efficacement, c’est construire un cadre équilibré qui peut survivre à la réalité opérationnelle. Plus votre préparation est solide, plus la relation démarre sur des bases saines.",
    related: [
      { href: "/blog/revenue-share-contract-terms-that-protect-both-sides", label: "Clauses contractuelles essentielles" },
      { href: "/blog/revenue-share-contract-red-flags", label: "Signaux d’alerte contractuels" },
    ],
  },
  "revenue-share-contract-red-flags": {
    intro:
      "Les red flags dans un contrat de partage de revenus sont rarement évidents au premier regard. Ils se cachent dans les formulations floues, les exclusions implicites et les clauses asymétriques. Ignorés, ils transforment un partenariat prometteur en source de conflit permanent.",
    context:
      "Repérer ces signaux avant signature est un levier majeur de protection de marge et de relation. Le coût d’un mauvais contrat est souvent bien supérieur au coût d’une négociation plus longue.",
    sections: [
      { h2: "Red flag n°1 : base de calcul ambiguë", h3: "Le flou qui détruit la confiance", paragraphs: ["Si la définition du revenu partageable est vague, chaque paiement devient une renégociation. C’est le premier signe d’un contrat fragile.", "Exigez une définition opérationnelle précise, avec exemples de calcul." ] },
      { h2: "Red flag n°2 : absence de transparence", h3: "Pas de reporting fiable, pas de deal fiable", paragraphs: ["Sans reporting régulier ni droit de vérification, vous ne pouvez pas contrôler la bonne application du contrat. Le risque de sous-déclaration augmente.", "La transparence n’est pas une option dans un modèle de revenus partagés." ] },
      { h2: "Red flag n°3 : clauses de sortie déséquilibrées", h3: "Entrée facile, sortie impossible", paragraphs: ["Un contrat qui facilite l’entrée mais bloque la sortie expose à des conflits coûteux. Vérifiez les préavis, obligations post-contrat et conditions de transition.", "Une clause de sortie claire protège la relation même en cas d’arrêt." ] },
      { h2: "Red flag n°4 : responsabilités non définies", h3: "Qui fait quoi, quand, avec quels moyens", paragraphs: ["Si les rôles opérationnels sont implicites, chaque retard devient un débat de responsabilité. Le contrat doit préciser les engagements des deux parties.", "Un bon accord décrit autant l’exécution que l’économie." ] },
    ],
    conclusion:
      "Identifier les red flags contractuels en amont vous évite des pertes financières et relationnelles lourdes. Un contrat clair est un accélérateur de partenariat, pas un frein.",
    related: [
      { href: "/blog/revenue-share-contract-terms-that-protect-both-sides", label: "Structurer des clauses robustes" },
      { href: "/blog/how-to-negotiate-revenue-share-deals", label: "Mieux négocier vos deals" },
    ],
  },
  "freelancer-contract-clauses-you-should-never-skip": {
    intro:
      "Un contrat freelance incomplet peut annuler la rentabilité d’un projet pourtant bien vendu. Les litiges les plus coûteux naissent rarement d’un désaccord “majeur”, mais d’une clause manquante : périmètre flou, paiement mal cadré, propriété intellectuelle ambiguë, validation imprécise.",
    context:
      "Les clauses clés ne servent pas seulement à “se protéger en cas de conflit”. Elles servent d’abord à éviter les conflits en clarifiant les règles d’exécution dès le départ.",
    sections: [
      { h2: "Clause de périmètre", h3: "Définir livrables et exclusions", paragraphs: ["Le contrat doit décrire ce qui est livré, ce qui ne l’est pas et les conditions de modification du périmètre. Cette clause protège votre temps et la qualité de delivery.", "Sans exclusions explicites, la mission dérive facilement vers du travail non facturé." ] },
      { h2: "Clause de paiement", h3: "Acompte, échéances, retard", paragraphs: ["Précisez le calendrier d’encaissement, les modalités de facturation et les conséquences en cas de retard. Votre trésorerie dépend de cette rigueur.", "Une clause paiement vague est l’une des causes principales de stress financier freelance." ] },
      { h2: "Clause de propriété intellectuelle", h3: "Usage, transfert, limites", paragraphs: ["Indiquez clairement quand et comment les droits sont transférés. Le transfert conditionné au paiement complet est une pratique saine.", "Cette clause évite les ambiguïtés sur la réutilisation des livrables et la responsabilité d’usage." ] },
      { h2: "Clause de validation et révisions", h3: "Prévenir le rework infini", paragraphs: ["Définissez le nombre de révisions incluses, les délais de feedback et les conséquences d’un silence prolongé côté client. Vous réduisez les cycles interminables.", "Une validation structurée protège la marge et améliore l’expérience client." ] },
    ],
    conclusion:
      "Les clauses contractuelles essentielles ne sont pas de la lourdeur administrative : elles sont le socle de votre rentabilité et de votre sérénité. Un bon contrat clarifie, accélère et sécurise la collaboration.",
    related: [
      { href: "/blog/freelance-contract-template-for-project-based-work", label: "Template de contrat freelance" },
      { href: "/blog/freelancer-contract-negotiation-guide", label: "Négocier vos clauses sans bloquer le deal" },
    ],
  },
  "freelance-contract-template-for-project-based-work": {
    intro:
      "Un template de contrat freelance projet n’a de valeur que s’il est réellement opérationnel. Beaucoup de modèles “gratuits” sont trop vagues, trop juridiques ou déconnectés des situations terrain. Résultat : ils rassurent au départ mais laissent des zones de risque pendant l’exécution.",
    context:
      "Un bon template doit être à la fois clair pour le client et protecteur pour le prestataire. Il doit encadrer périmètre, paiement, révisions, propriété intellectuelle et sortie de mission.",
    sections: [
      { h2: "Structure minimale d’un template solide", h3: "Ce qui doit absolument figurer", paragraphs: ["Le document doit inclure : objet de la mission, livrables, calendrier, prix, modalités de paiement, révisions, propriété intellectuelle, confidentialité, responsabilité et résiliation.", "Chaque section doit être formulée de manière compréhensible, sans ambiguïté opérationnelle." ] },
      { h2: "Adapter le template à chaque projet", h3: "Standardiser sans rigidifier", paragraphs: ["Le template sert de base ; il ne remplace pas l’adaptation. Ajustez périmètre, jalons et risques selon le contexte client.", "Une adaptation maîtrisée évite de signer des clauses inadaptées par simple copier-coller." ] },
      { h2: "Éviter les clauses trompeusement “simples”", h3: "Le danger des formulations vagues", paragraphs: ["Certaines phrases courtes semblent pratiques mais ouvrent des litiges : “accompagnement complet”, “support illimité”, “révisions si nécessaire”. Préférez des formulations mesurables.", "Un contrat précis protège la relation autant que la marge." ] },
      { h2: "Transformer le contrat en outil de pilotage", h3: "Du juridique à l’opérationnel", paragraphs: ["Le contrat doit être utilisé pendant le projet : validations, changements de périmètre, facturation. Ce n’est pas un document qu’on oublie après signature.", "Intégrer le contrat dans votre workflow réduit les frictions et augmente la prévisibilité." ] },
    ],
    conclusion:
      "Un template freelance bien construit vous fait gagner du temps sans sacrifier la sécurité. C’est un standard de qualité qui améliore à la fois la conversion, la marge et la relation client.",
    related: [
      { href: "/blog/freelancer-contract-clauses-you-should-never-skip", label: "Clauses à ne jamais omettre" },
      { href: "/blog/freelancer-contract-negotiation-guide", label: "Négocier les clauses intelligemment" },
    ],
  },
  "freelancer-contract-negotiation-guide": {
    intro:
      "Négocier un contrat freelance sans perdre le client est un équilibre subtil. Beaucoup de professionnels cèdent trop vite sur les clauses critiques par peur de bloquer la vente. D’autres, à l’inverse, défendent des positions rigides qui cassent la relation avant même le démarrage.",
    context:
      "Une bonne négociation contractuelle n’oppose pas “protection” et “collaboration”. Elle cherche un accord exécutable, équilibré et compréhensible pour les deux parties.",
    sections: [
      { h2: "Préparer la négociation avant l’appel", h3: "Vos non-négociables et vos zones flexibles", paragraphs: ["Définissez à l’avance vos lignes rouges (paiement, périmètre, responsabilité, IP) et les points sur lesquels vous pouvez adapter la forme. Cette préparation réduit les concessions impulsives.", "Vous négociez mieux quand vous savez précisément ce que vous protégez et pourquoi." ] },
      { h2: "Négocier en logique de risques partagés", h3: "Expliquer l’impact business des clauses", paragraphs: ["Au lieu de défendre une clause “par principe”, rattachez-la à un risque concret : retard de paiement, dérive de charge, litige IP. Le client comprend mieux la nécessité.", "La discussion devient rationnelle et orientée solution, pas défensive." ] },
      { h2: "Utiliser des alternatives intelligentes", h3: "Options plutôt qu’ultimatums", paragraphs: ["Proposez des options : acompte plus faible contre jalons plus serrés, révisions supplémentaires contre extension délai/budget, transfert IP conditionné au paiement. Vous conservez vos protections clés.", "Les alternatives accélèrent souvent la conclusion sans affaiblir votre cadre." ] },
      { h2: "Finaliser avec clarté opérationnelle", h3: "Validation écrite et alignement d’exécution", paragraphs: ["Après accord verbal, formalisez immédiatement les points validés et faites confirmer la version finale. Cette discipline évite les retours en arrière.", "Un contrat bien négocié n’est utile que s’il est appliqué cohérentement durant la mission." ] },
    ],
    conclusion:
      "Négocier un contrat freelance efficacement, c’est protéger votre marge tout en renforçant la confiance client. Avec une approche structurée, vous signez plus sereinement et exécutez dans de meilleures conditions.",
    related: [
      { href: "/blog/freelancer-contract-clauses-you-should-never-skip", label: "Clauses contractuelles essentielles" },
      { href: "/blog/freelance-contract-template-for-project-based-work", label: "Template opérationnel de contrat" },
    ],
  },
};

export function FrenchLocalizedArticlePhase5({ slug, title, ctaHref, ctaText }: Phase5Props) {
  const content = PHASE5_CONTENT[slug];

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
          Utilisez le calculateur associé pour transformer ces recommandations en plan opérationnel concret.
        </p>
        <Link href={ctaHref} className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800">
          {ctaText} →
        </Link>
      </div>
    </main>
  );
}
