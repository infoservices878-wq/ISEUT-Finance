// ─────────────────────────────────────────────────────────────────────────────
// FRANÇAIS — Source de vérité
// Couvre : Home, Navbar, Footer, et tous les composants home/
// Toute nouvelle clé doit être ajoutée ici EN PREMIER
// puis reproduite dans en.ts / de.ts / es.ts / it.ts / pt.ts
// ─────────────────────────────────────────────────────────────────────────────

export const fr = {

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    home:      "Accueil",
    loans:     "Nos Prêts",
    about:     "À Propos",
    contact:   "Contact",
    comment:   "Comment ça marche",
    simulator: "Simulateur",
    loanTypes: {
      personnel:     "Prêt Personnel",
      professionnel: "Prêt Professionnel",
      conso:         "Prêt Consommation",
      etudiant:      "Prêt Étudiant",
      auto:          "Prêt Auto",
      rachat:        "Rachat de Crédit",
    },
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    badge:        "Réponse en moins de 2 minutes",
    titleLine1:   "Financez",
    titleHighlight:"vos projets",
    titleLine2:   "simplement.",
    subtitle:     "Simulez votre prêt en quelques secondes, obtenez une réponse immédiate.",
    subtitleBold: "Transparent, rapide, sans engagement.",
    cta1:         "Simuler mon prêt",
    cta2:         "Découvrir les prêts",
    trustBadges: {
      instant:  "Réponse immédiate",
      secure:   "Données sécurisées",
      clients:  "+12 000 clients",
    },
    statsCard: {
      rateLabel:   "Taux à partir de",
      rateCompete: "Compétitif",
      rateSub:     "TAEG · Sous conditions",
      minLabel:    "Montant min.",
      maxLabel:    "Montant max.",
      secureTitle: "100% sécurisé",
      secureSub:   "Vos données protégées",
      clientsCount:"12 000+",
      clientsSub:  "clients satisfaits",
    },
  },

  // ── Hero Simulator ───────────────────────────────────────────────────────────
  heroSimulator: {
    badge:        "Simulateur de prêt",
    titleBefore:  "Financez",
    titleHighlight:"ce qui compte",
    titleAfter:   "vraiment.",
    subtitle:     "Voiture, travaux, études ou voyage — obtenez une estimation en temps réel, sans engagement.",
    projects: {
      travaux: "Travaux",
      auto:    "Auto",
      etudes:  "Études",
      voyage:  "Voyage",
      mariage: "Mariage",
      sante:   "Santé",
    },
    stats: {
      rate:    "3%",
      rateLabel:    "TAEG dès",
      unlock:  "48h",
      unlockLabel:  "Déblocage",
      online:  "100%",
      onlineLabel:  "En ligne",
    },
    card: {
      title:       "Votre simulation",
      badge:       "Gratuit · Sans engagement",
      amountLabel: "Montant souhaité",
      durationLabel:"Durée de remboursement",
      monthlyLabel: "Mensualité estimée",
      interestLabel:"Coût total intérêts",
      rateNote:    "TAEG fixe indicatif : 3% · Simulation non contractuelle",
      nofees:      "Faible frais de dossier",
      instant:     "Réponse immédiate",
      cta:         "Trouver mon crédit",
      legal:       "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.",
    },
  },

  // ── Popular Projects ─────────────────────────────────────────────────────────
  popularProjects: {
    badge:    "Vos projets de vie",
    title:    "Donnez vie à vos projets",
    subtitle: "Des solutions de financement pensées pour chaque étape de votre vie.",
    cta:      "Simuler mon prêt gratuitement",
    ctaSub:   "Sans engagement · Réponse en moins de 2 minutes",
    learnMore:"En savoir plus",
    projects: [
      {
        title:       "Acheter une voiture",
        description: "Financez votre véhicule neuf ou d'occasion avec un taux compétitif.",
        tag:         "Dès 3%",
      },
      {
        title:       "Faire des travaux",
        description: "Rénovez votre maison avec un financement flexible et rapide.",
        tag:         "Jusqu'à 75 000€",
      },
      {
        title:       "Partir en voyage",
        description: "Réalisez le voyage dont vous rêvez sans attendre.",
        tag:         "Réponse immédiate",
      },
      {
        title:       "Financer des études",
        description: "Investissez dans votre avenir avec un prêt étudiant sur mesure.",
        tag:         "Taux préférentiel",
      },
      {
        title:       "Organiser un mariage",
        description: "Préparez votre grand jour en toute sérénité.",
        tag:         "Faible frais de dossier",
      },
    ],
  },

  // ── Loan Products ────────────────────────────────────────────────────────────
  loanProducts: {
    badge:    "Nos produits",
    title:    "Nos solutions de financement",
    subtitle: "Survolez une carte pour voir une estimation instantanée de votre mensualité.",
    cta:      "Comparer toutes nos offres",
    example:  "Exemple",
    perMonth: "/ mois estimé",
    seeOffer: "Voir l'offre",
    products: [
      { title: "Prêt personnel",    description: "Financez n'importe quel projet de vie sans justificatif."        },
      { title: "Prêt professionnel",description: "Développez votre activité avec un financement flexible."         },
      { title: "Prêt conso",        description: "Réalisez vos achats avec une solution simple et rapide."         },
      { title: "Prêt étudiant",     description: "Financez vos études et investissez dans votre avenir."           },
      { title: "Prêt auto",         description: "Achetez votre véhicule neuf ou d'occasion au meilleur taux."    },
      { title: "Rachat de crédit",  description: "Regroupez vos crédits et allégez vos mensualités."              },
    ],
  },

  // ── Highlighted Project (slider) ─────────────────────────────────────────────
  highlightedProject: {
    badge: "Projets à la une",
    title: "Quel est votre prochain projet ?",
    noCommit: "Sans engagement · Gratuit",
    trustBadges: {
      rating:  "+200 000 clients",
      secure:  "100% sécurisé",
    },
    proofs: {
      rating: "Noté 4.8/5 par nos clients",
      speed:  "Réponse en 2 minutes",
      secure: "Données 100% sécurisées",
    },
    slides: [
      {
        title:       "Achetez la voiture de vos rêves",
        subtitle:    "Prêt auto",
        description: "Neuf ou d'occasion, obtenez un financement rapide avec un taux compétitif. Réponse en moins de 2 minutes.",
        cta:         "Simuler mon prêt auto",
        tag:         "Dès 3,9% TAEG",
      },
      {
        title:       "Transformez votre maison",
        subtitle:    "Travaux & rénovation",
        description: "Cuisine, salle de bain, extension… Financez vos travaux jusqu'à 75 000€ avec des mensualités adaptées.",
        cta:         "Financer mes travaux",
        tag:         "Jusqu'à 75 000€",
      },
      {
        title:       "Le monde vous appartient",
        subtitle:    "Voyage & évasion",
        description: "Bali, Islande, Japon… Ne laissez plus le budget freiner vos aventures. Partez maintenant, remboursez sereinement.",
        cta:         "Financer mon voyage",
        tag:         "Réponse immédiate",
      },
      {
        title:       "Investissez dans votre avenir",
        subtitle:    "Études & formation",
        description: "Master, école de commerce, formation pro — accédez aux meilleures formations sans contrainte financière.",
        cta:         "Financer mes études",
        tag:         "Taux préférentiel",
      },
    ],
  },

  // ── Mission Section ──────────────────────────────────────────────────────────
  mission: {
    badge:      "Fab Finance & Vous",
    title:      "Le financement qui",
    titleHighlight: "fait la différence",
    text1:      "Chez Fab Finance, nous mettons notre expertise au service de vos projets de vie. Prêt personnel, crédit consommation, prêt auto ou rachat de crédit : des solutions simples, transparentes et adaptées à chaque situation.",
    text2:      "Notre mission est de rendre le financement plus accessible grâce à des outils digitaux innovants et à un accompagnement humain à chaque étape.",
    cta:        "Découvrir notre mission",
    stats: {
      clients:     "+200 000",
      clientsLabel:"projets financés",
      rating:      "4.8",
      ratingLabel: "Avis clients",
    },
    pillars: [
      { title: "Rapidité",        text: "Réponse en moins de 2 minutes, déblocage des fonds en 48h."                    },
      { title: "Transparence",    text: "Zéro frais cachés. Chaque euro est expliqué avant signature."                   },
      { title: "Accompagnement",  text: "Des conseillers humains disponibles à chaque étape de votre projet."            },
      { title: "Inclusion",       text: "Nos solutions sont pensées pour tous les profils, sans discrimination."          },
    ],
  },

  // ── Why Choose Us ────────────────────────────────────────────────────────────
  whyChooseUs: {
    badge:    "Nos engagements",
    title:    "Pourquoi choisir",
    titleHighlight: "Fab Finance ?",
    subtitle: "Technologie et expertise humaine réunies pour une expérience de financement simple, rapide et fiable.",
    items: [
      {
        title:      "Réponse rapide",
        desc:       "Obtenez une réponse de principe en quelques minutes. Pas d'attente, pas de paperasse inutile.",
        stat:       "2 min",
        statLabel:  "réponse de principe",
      },
      {
        title:      "100% sécurisé",
        desc:       "Vos données sont chiffrées et protégées par des technologies bancaires de dernière génération.",
        stat:       "256-bit",
        statLabel:  "chiffrement SSL",
      },
      {
        title:      "Accompagnement humain",
        desc:       "Nos conseillers dédiés vous guident à chaque étape, de la simulation à la signature.",
        stat:       "7j/7",
        statLabel:  "conseillers disponibles",
      },
      {
        title:      "Taux compétitifs",
        desc:       "Des solutions transparentes adaptées à votre profil. Zéro frais cachés, zéro mauvaise surprise.",
        stat:       "3%",
        statLabel:  "TAEG à partir de",
      },
    ],
    metrics: [
      { value: "+200 000", label: "projets financés"    },
      { value: "48h",      label: "déblocage des fonds" },
      { value: "4.8/5",    label: "satisfaction client" },
      { value: "0€",       label: "frais de dossier"    },
    ],
  },

  // ── Trust Section ────────────────────────────────────────────────────────────
  trust: {
    badge:    "Preuve sociale",
    title:    "Ils nous font",
    titleHighlight: "confiance",
    subtitle: "Des milliers de clients font confiance à Fab Finance pour financer leurs projets personnels et professionnels.",
    certifiedBy: "Reconnu et certifié par",
    stats: [
      { value: "+200 000", label: "projets financés"     },
      { value: "4.8 / 5",  label: "satisfaction clients" },
      { value: "48h",      label: "délai de déblocage"   },
      { value: "100%",     label: "plateforme sécurisée" },
    ],
    reviews: [
      {
        name: "Sophie Martin",
        role: "Prêt personnel · 12 000€",
        text: "Demande ultra simple et réponse en quelques minutes. J'ai obtenu mon financement en moins de 48h. Je recommande les yeux fermés !",
      },
      {
        name: "Lucas Bernard",
        role: "Prêt auto · 18 000€",
        text: "Interface claire et transparente. La simulation m'a permis de comprendre immédiatement le coût réel de mon crédit. Aucune mauvaise surprise.",
        featured: true,
        featuredLabel: "Coup de ❤️",
      },
      {
        name: "Claire Dupont",
        role: "Travaux · 25 000€",
        text: "Service client vraiment professionnel et disponible. Ils m'ont accompagnée de A à Z pour financer ma rénovation. Merci Fab Finance !",
      },
    ],
  },

  // ── FAQ Section ──────────────────────────────────────────────────────────────
  faq: {
    badge:       "FAQ",
    title:       "Questions fréquentes",
    subtitle:    "Tout ce que vous devez savoir avant de faire votre demande.",
    notFound:    "Vous ne trouvez pas votre réponse ?",
    teamReply:   "Notre équipe répond en moins de 2h en semaine.",
    contactCta:  "Nous contacter",
    items: [
      {
        q: "Combien de temps pour obtenir une réponse ?",
        a: "Vous recevez une réponse de principe en moins de 2 minutes après votre simulation en ligne. Une fois votre dossier complet soumis, la décision définitive intervient sous 24 à 48 heures.",
      },
      {
        q: "Quels documents sont nécessaires ?",
        a: "Selon votre situation : une pièce d'identité, vos 3 derniers bulletins de salaire ou justificatifs de revenus, un justificatif de domicile récent et votre RIB. Tout se fait en ligne, sans paperasse.",
      },
      {
        q: "Puis-je rembourser mon prêt par anticipation ?",
        a: "Oui, vous pouvez rembourser partiellement ou totalement votre crédit à tout moment. Des indemnités de remboursement anticipé peuvent s'appliquer selon les conditions contractuelles.",
      },
      {
        q: "Mes données sont-elles sécurisées ?",
        a: "Absolument. Toutes vos informations sont chiffrées en SSL 256-bit et nous sommes conformes au RGPD. Vos données ne sont jamais revendues à des tiers.",
      },
      {
        q: "Y a-t-il des frais de dossier ?",
        a: "Oui. Fab Finance facture des frais de dossier qui sont très faibles.  La simulation est gratuite et sans engagement. Vous ne payez que les intérêts définis dans votre contrat.",
      },
      {
        q: "Quel est le montant maximum que je peux emprunter ?",
        a: "Selon le type de prêt, vous pouvez emprunter jusqu'à 75 000 € pour un prêt personnel, et jusqu'à 100 000 € pour un prêt professionnel. Le montant accordé dépend de votre profil et de votre capacité de remboursement.",
      },
    ],
  },

  // ── Final CTA ────────────────────────────────────────────────────────────────
  finalCta: {
    badge:       "Simulation gratuite · Sans engagement",
    title:       "Prêt à concrétiser",
    titleHighlight: "votre projet ?",
    subtitle1:   "Rejoignez",
    subtitle2:   "+200 000 clients",
    subtitle3:   "qui nous font confiance. Faites votre demande en 2 minutes et obtenez une réponse de principe immédiate.",
    cta1:        "Demander un prêt maintenant",
    cta2:        "Parler à un conseiller",
    badges: {
      speed:    "Réponse en 2 minutes",
      secure:   "100% sécurisé",
      clients:  "+200 000 clients satisfaits",
    },
    legal: "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager. Fab Finance — ORIAS n° 14 001 728.",
  },

  // ── Simulator page ───────────────────────────────────────────────────────────
  simulator: {
    hero: {
      badge:          "100% sécurisé · Sans engagement",
      title:          "Demandez votre",
      titleHighlight: "prêt",
      subtitle:       "Réponse de principe immédiate · Dossier confidentiel · Faible frais de dossier",
    },
    card: {
      title:         "Simulateur",
      amountLabel:   "Montant",
      durationLabel: "Durée",
      totalInterest: "Total des intérêts",
      debtRatio:     "Taux d'endettement",
      rateNote:      "TAEG fixe indicatif : 3%",
    },
    reassurance: [
      "Vos données sont chiffrées (SSL 256-bit)",
      "Réponse de principe en moins de 2 minutes",
      "Faible frais de dossier · Sans engagement",
    ],
    result: {
      approvedBadge: "Demande pré-approuvée",
      approvedTitle: "Félicitations ! 🎉",
      approvedText:  "Votre profil correspond à nos critères. Un conseiller va vous contacter sous 24h pour finaliser votre dossier.",
      recapTitle:    "Récapitulatif",
      recapMonthly:  "Mensualité",
      pendingBadge:  "Dossier en cours d'analyse",
      pendingTitle:  "Dossier reçu",
      pendingText:   "Votre dossier nécessite une étude approfondie. Vous recevrez une réponse par email d'ici 48h.",
      retry:         "Faire une autre simulation",
    },
    debtRatioFull:      "Taux d'endettement estimé",
    debtRatioThreshold: "Seuil recommandé : 33%",
    debtRatioWarning:   "⚠️ Votre taux dépasse les 33% recommandés. Votre dossier sera étudié au cas par cas.",
    debtRatioOk:        "✓ Votre taux d'endettement est dans la norme recommandée (< 33%).",
    steps: ["Votre projet", "Identité", "Situation", "Adresse"],
    form: {
      step1: {
        title: "Votre projet",
        desc:  "Dites-nous ce que vous souhaitez financer.",
        loanTypeLabel: "Type de crédit",
        loanTypeOptions: ["Prêt Personnel", "Prêt Professionnel", "Prêt Auto", "Prêt Étudiant", "Consommation", "Rachat de crédit"],
        amountLabel:   "Montant (€)",
        durationLabel: "Durée (mois)",
      },
      step2: {
        title: "Informations personnelles",
        desc:  "Vos informations sont 100% confidentielles et sécurisées.",
      },
      step3: {
        title: "Situation professionnelle",
        desc:  "Ces informations nous permettent d'évaluer votre dossier.",
        statusLabel:       "Situation",
        statusPlaceholder: "Sélectionner",
        statusOptions: ["Salarié(e)", "Indépendant(e) / Freelance", "Fonctionnaire", "Étudiant(e)", "Retraité(e)", "Sans emploi"],
        incomeLabel:   "Revenu mensuel net (€)",
        expensesLabel: "Charges mensuelles (€)",
      },
      step4: {
        title: "Votre adresse",
        desc:  "Dernière étape avant l'analyse de votre dossier.",
        addressLabel: "Adresse",
        cityLabel:    "Ville",
        zipLabel:     "Code postal",
        countryLabel: "Pays",
        rgpd1: "En soumettant ce formulaire, vous acceptez notre",
        rgpd2: "et le traitement de vos données conformément au RGPD.",
      },
      continue:  "Continuer",
      analyzing: "Analyse en cours…",
      submit:    "Soumettre ma demande",
      errors: {
        email:            "Email invalide",
        phone:            "Numéro invalide",
        loanType:         "Type de crédit requis",
        amountMin:        "Montant minimum 500 €",
        durationMin:      "Durée minimum 6 mois",
        income:           "Revenu invalide",
        employmentStatus: "Situation professionnelle requise",
        expenses:         "Charges invalides",
        address:          "Adresse requise",
        city:             "Ville requise",
        zipCode:          "Code postal invalide",
        country:          "Pays requis",
      },
    },
  },

  // ── How it works ─────────────────────────────────────────────────────────────
  howItWorks: {
    badge:     "Processus 100% transparent",
    title:     "Comment obtenir votre prêt ?",
    subtitle:  "De la simulation au versement des fonds, découvrez chaque étape.",
    steps:     "6 étapes simples",
    journey:   "Le parcours Fab Finance",
    guarantee: "Nos engagements",
    whyUs:     "Pourquoi choisir Fab Finance ?",
    cta:       "Démarrer ma simulation",
    ctaSub:    "Gratuit · Sans engagement · Réponse en 2 minutes",

    hero: {
      titleLine1: "Comment obtenir",
      titleLine2: "votre prêt ?",
      subtitle:   "De la simulation au versement des fonds, découvrez chaque étape de notre processus. Simple, rapide et entièrement accompagné par nos conseillers.",
      stats: [
        { value: "2 min",    label: "pour simuler"     },
        { value: "24h",      label: "réponse dossier"  },
        { value: "14 jours", label: "rétractation"     },
        { value: "Faible",   label: "frais de dossier" },
      ],
    },
    stepWord: "Étape",
    stepsList: [
      {
        title: "Simulez votre prêt", subtitle: "Moins de 2 minutes",
        desc: "Indiquez le montant souhaité, la durée de remboursement et votre projet. Notre simulateur calcule instantanément votre mensualité estimée et le coût total de votre crédit.",
        details: ["Aucun engagement à cette étape", "Résultat instantané, 100% gratuit", "Modifiez les paramètres librement"],
      },
      {
        title: "Complétez votre demande", subtitle: "5 à 10 minutes",
        desc: "Renseignez votre situation personnelle et professionnelle dans notre formulaire sécurisé. Nos conseillers ont besoin de ces informations pour étudier votre dossier au mieux.",
        details: ["Formulaire 100% en ligne et sécurisé", "Données chiffrées SSL 256-bit", "Sauvegarde automatique à chaque étape"],
      },
      {
        title: "Étude de votre dossier", subtitle: "Réponse sous 24h",
        desc: "Un conseiller Fab Finance dédié analyse votre dossier et vous contacte par téléphone ou WhatsApp pour affiner votre offre et répondre à toutes vos questions.",
        details: ["Conseiller personnel attitré", "Contact par téléphone ou WhatsApp", "Analyse humaine, pas automatisée"],
      },
      {
        title: "Recevez votre offre", subtitle: "Sous 48h",
        desc: "Vous recevez votre offre de prêt personnalisée par email avec toutes les conditions détaillées : TAEG, mensualités, durée, et coût total. Prenez le temps de lire.",
        details: ["Offre détaillée et transparente", "TAEG et conditions claires", "Délai de réflexion sans pression"],
      },
      {
        title: "Signez votre contrat", subtitle: "Signature électronique",
        desc: "Si l'offre vous convient, vous disposez d'un délai légal de rétractation de 14 jours. À l'issue de ce délai, confirmez votre acceptation par signature électronique sécurisée.",
        details: ["Délai légal de rétractation 14 jours", "Signature électronique certifiée eIDAS", "Zéro déplacement, 100% en ligne"],
      },
      {
        title: "Recevez vos fonds", subtitle: "Virement sous 24–48h",
        desc: "Une fois votre contrat signé et le délai de rétractation écoulé, les fonds sont versés directement sur votre compte bancaire. Votre projet peut démarrer !",
        details: ["Virement bancaire sécurisé", "Fonds disponibles sous 24 à 48h", "Notification par SMS et email"],
      },
    ],
    guarantees: [
      { title: "Rapidité",       desc: "Réponse de principe en 2 minutes, fonds sous 48h après signature." },
      { title: "Sécurité",       desc: "Vos données sont chiffrées SSL 256-bit et jamais revendues à des tiers." },
      { title: "Accompagnement", desc: "Un conseiller dédié vous suit de la simulation au versement des fonds." },
      { title: "Transparence",   desc: "Zéro frais cachés, faible frais de dossier. Le TAEG est affiché dès le départ." },
    ],
    reviews: {
      ratingValue: "4,8 / 5",
      ratingSub:   "Basé sur +12 000 avis clients vérifiés",
      items: [
        "Tout s'est passé exactement comme décrit. Mon conseiller était joignable à chaque étape.",
        "Du formulaire au virement, 4 jours seulement. Incroyable pour un prêt de cette taille.",
        "Enfin un organisme de crédit qui explique clairement chaque étape sans jargon.",
      ],
    },
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "Combien de temps dure le processus complet ?", a: "De la simulation au versement des fonds, le processus prend généralement entre 5 et 10 jours ouvrés, en tenant compte du délai légal de rétractation de 14 jours. En cas d'urgence, contactez-nous directement par WhatsApp." },
      { q: "Quels documents dois-je préparer ?", a: "Pièce d'identité, 3 derniers bulletins de salaire (ou justificatifs de revenus), justificatif de domicile récent et RIB. Tout se transmet en ligne, en quelques clics." },
      { q: "Ma demande engage-t-elle à quoi que ce soit ?", a: "Non. La simulation et la demande de dossier sont totalement gratuites et sans engagement. Vous n'êtes engagé qu'après avoir signé votre contrat, et vous disposez encore d'un délai de rétractation de 14 jours." },
      { q: "Puis-je suivre l'avancement de mon dossier ?", a: "Oui. Votre conseiller Fab Finance vous tient informé à chaque étape par téléphone, email ou WhatsApp. Vous pouvez le contacter directement à tout moment." },
    ],
    finalCta: {
      badge:    "Prêt à commencer ?",
      title:    "Simulez votre prêt maintenant",
      subtitle: "Gratuit, sans engagement, réponse en 2 minutes. Votre conseiller vous contacte sous 24h.",
      talkToAdvisor: "Parler à un conseiller",
      responseTime:  "Réponse en 2 min",
    },
  },

  // ── About ────────────────────────────────────────────────────────────────────
  about: {
    hero: {
      badge:          "Fondée en 2016 · Paris",
      title:          "Réinventer le crédit",
      titleHighlight: "pour tous",
      subtitle:       "Fab Finance s'est donnée pour mission de rendre le financement accessible, transparent et équitable. Fini la complexité bancaire traditionnelle.",
    },
    stats: [
      { label: "Clients satisfaits",       sub: "depuis 2016"           },
      { label: "Projets financés",         sub: "en volume cumulé"      },
      { label: "Note TrustPilot",          sub: "+12 000 avis vérifiés" },
      { label: "Délai moyen de versement", sub: "après accord"          },
    ],
    orias: {
      badge: "Agréé ORIAS",
      sub:   "Intermédiaire en crédit",
    },
    missionSection: {
      eyebrow:        "Notre mission",
      title:          "Le financement",
      titleHighlight: "autrement",
      text1: "Nous croyons que chaque projet mérite d'être financé simplement. C'est pourquoi nous avons construit une plateforme qui allie la puissance de la technologie à la chaleur de l'accompagnement humain.",
      text2: "Notre engagement : zéro frais cachés, zéro jargon bancaire, et une réponse de principe en moins de 2 minutes — 7 jours sur 7.",
      features: [
        "Simulation gratuite et sans engagement",
        "Conseillers disponibles 7j/7",
        "Déblocage des fonds en 48h",
        "Faible frais de dossier",
      ],
      cta: "Commencer ma simulation",
    },
    valuesSection: {
      eyebrow: "Ce qui nous anime",
      title:   "Nos valeurs",
      items: [
        { title: "L'Humain au centre",   text: "La technologie nous aide à être rapides, mais ce sont nos conseillers qui font la différence par leur écoute et leur disponibilité." },
        { title: "Transparence totale",  text: "Pas de jargon, pas de frais cachés. Vous savez exactement ce que vous payez dès le premier jour, sans mauvaise surprise." },
        { title: "Excellence du service",text: "Nous visons la perfection dans chaque interaction pour vous offrir la meilleure expérience de financement possible." },
        { title: "Impact positif",       text: "Nous finançons prioritairement les projets de transition énergétique et d'amélioration de l'habitat durable." },
      ],
    },
    timelineSection: {
      eyebrow: "Notre histoire",
      title:   "8 ans d'innovation",
      events: [
        "Fondation de Fab Finance à Paris avec une mission claire : démocratiser le crédit.",
        "Lancement du simulateur en ligne — réponse de principe en moins de 2 minutes.",
        "Franchissement du cap des 100 000 clients et obtention de l'agrément ORIAS.",
        "Expansion européenne et lancement des prêts professionnels et étudiants.",
        "1 million de clients satisfaits et 5 milliards d'euros de projets financés.",
      ],
    },
    finalCta: {
      title:    "Rejoignez l'aventure",
      subtitle: "Plus d'un million de clients nous font déjà confiance. À votre tour de concrétiser vos projets avec Fab Finance.",
    },
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    hero: {
      badge:    "Nous sommes là pour vous",
      title:    "Contactez",
      titleHighlight: "notre équipe",
      subtitle: "Nos experts sont disponibles 7j/7 pour répondre à toutes vos questions sur vos projets de financement.",
    },
    info: [
      { title: "Siège social" },
      { title: "Téléphone", sub: "Lun–Ven, 9h–18h · Gratuit" },
      { title: "Email",     sub: "Réponse sous 24h" },
    ],
    quickLinksTitle: "Accès rapides",
    availability: "Nos conseillers sont disponibles et répondent généralement en moins de 2 heures en semaine.",
    form: {
      title:    "Envoyez-nous un message",
      subtitle: "Tous les champs marqués sont obligatoires",
      firstName:            "Prénom",
      firstNamePlaceholder: "Jean",
      lastName:             "Nom",
      lastNamePlaceholder:  "Dupont",
      emailPlaceholder:     "jean.dupont@email.com",
      phoneOptional:        "(optionnel)",
      phonePlaceholder:     "06 12 34 56 78",
      subjectPlaceholder:   "Sélectionnez un sujet",
      subjectOptions: [
        "Demande d'information",
        "Suivi de dossier",
        "Simulation de prêt",
        "Réclamation",
        "Partenariat",
        "Autre",
      ],
      messageLabel:       "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ? Décrivez votre projet ou votre question...",
      rgpd1:     "En soumettant ce formulaire, vous acceptez notre",
      rgpdLink:  "politique de confidentialité",
      rgpd2:     ". Vos données sont traitées conformément au RGPD.",
      sending:      "Envoi en cours…",
      successTitle: "Message envoyé !",
      successDesc:  "Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais, sous 24h maximum.",
      errors: {
        firstName: "Le prénom est requis",
        lastName:  "Le nom est requis",
        email:     "Adresse email invalide",
        subject:   "Le sujet est requis",
        message:   "Le message doit contenir au moins 10 caractères",
      },
    },
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline: "FabFinance vous accompagne dans tous vos projets de vie avec des solutions de financement simples, transparentes et adaptées.",
    ctaTitle:   "Prêt à financer votre projet ?",
    ctaSub:     "Simulation gratuite · Réponse en 2 minutes · Sans engagement",
    ctaButton:  "Simuler mon prêt",
    rights:     "Tous droits réservés.",
    legal:      "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.",
    links: {
      loans:   "Nos prêts",
      company: "Entreprise",
      legal:   "Légal",
    },
    legalLinks: {
      mentions:  "Mentions légales",
      privacy:   "Politique de confidentialité",
      howItWorks:"Comment ça marche",
      cookies:   "Gestion des cookies",
    },
  },
   // ── Mentions légales ────────────────────────────────────────────────────────
  mentionsLegales: {
    pageTitle:    "Mentions légales",
    pageSubtitle: "Informations légales et réglementaires relatives à Fab Finance et à l'utilisation de ce site.",
    lastUpdate:   "Dernière mise à jour :",
    summary:      "Sommaire",
    sections: [
      {
        title: "Éditeur du site",
        rows: [
          ["Raison sociale",      "Fab Finance"],
          ["Forme juridique",     "Société par Actions Simplifiée (SAS)"],
          ["Capital social",      "50 000 €"],
          ["Siège social",        "52 RUE DU DOCTEUR SULTZER 67140 BARR"],
          ["SIREN",               "524581873"],
          ["RCS",                 "524 581 873 R.C.S. Colmar"],
          ["N° ORIAS",            "14 001 728 (www.orias.fr)"],
          ["Autorité de tutelle", "ACPR – Banque de France"],
          ["Président de SAS",    "TOWAE Fabienne"],
        ],
      },
      {
        title: "Hébergement",
        rows: [
          ["Hébergeur", "Vercel Inc."],
          ["Adresse",   "440 N Barranca Ave, Covina, CA"],
          ["Site web",  "www.vercel.com"],
        ],
      },
      {
        title: "Nous contacter",
        rows: [
          ["Email",     "contact@fab-financeaide.com"],
          ["Téléphone", "+33 753 959 516 (appel gratuit)"],
          ["Courrier",  "52 RUE DU DOCTEUR SULTZER 67140 BARR"],
          ["Horaires",  "Lun – Ven, 9h – 18h"],
        ],
      },
      {
        title: "Activité réglementée",
        paragraphs: [
          "Fab Finance SAS est immatriculée en qualité d'Intermédiaire en Opérations de Banque et en Services de Paiement (IOBSP) au registre de l'ORIAS sous le numéro 14 001 728, consultable sur www.orias.fr.",
          "En cette qualité, Fab Finance est soumise au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR), organe de supervision de la Banque de France, situé 4 Place de Budapest, CS 92459, 75436 Paris Cedex 09.",
          "Fab Finance est couverte par une assurance de responsabilité civile professionnelle et dispose d'une garantie financière conformément aux dispositions des articles L.519-1 et suivants du Code monétaire et financier.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        paragraphs: [
          "L'ensemble des éléments constituant le site Fab Finance (textes, graphismes, logiciels, photographies, images, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses) sont la propriété exclusive de Fab Finance SAS ou de ses partenaires.",
          "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Fab Finance SAS.",
          "Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.",
        ],
      },
      {
        title: "Limitation de responsabilité",
        paragraphs: [
          "Fab Finance s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Fab Finance ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.",
          "Les simulations effectuées sur ce site sont fournies à titre purement indicatif et n'ont aucune valeur contractuelle. Elles ne constituent pas une offre de crédit. Toute décision d'octroi de crédit est prise après étude complète du dossier par nos conseillers.",
          "Fab Finance décline toute responsabilité pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site.",
          "Ce site peut contenir des liens hypertextes renvoyant vers d'autres sites internet sur lesquels Fab Finance n'exerce aucun contrôle. Fab Finance décline toute responsabilité quant au contenu de ces sites.",
        ],
      },
      {
        title: "Mentions légales crédit à la consommation",
        warning: "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.",
        paragraphs: [
          "Conformément à la directive européenne 2008/48/CE relative aux contrats de crédit aux consommateurs, transposée en droit français aux articles L.312-1 et suivants du Code de la consommation, tout crédit à la consommation fait l'objet d'une information précontractuelle standardisée européenne (FISE).",
          "Le Taux Annuel Effectif Global (TAEG) mentionné sur ce site est un taux indicatif calculé sur la base d'un exemple représentatif. Le TAEG réel applicable à votre contrat sera déterminé en fonction de votre situation personnelle, du montant emprunté et de la durée de remboursement.",
          "Exemple représentatif : Pour un crédit personnel de 15 000 € sur 120 mois au TAEG fixe de 3,00% — Taux débiteur fixe 3,96% — Mensualité de 144,80 € — Montant total dû : 17 376,00 € — Coût total du crédit : 2 376,00 €. Offre réservée aux particuliers majeurs résidant en France, sous réserve d'acceptation de votre dossier.",
          "Vous disposez d'un délai de rétractation de 14 jours calendaires à compter de la signature de votre contrat de crédit, conformément à l'article L.312-19 du Code de la consommation.",
        ],
      },
      {
        title: "Cookies et traceurs",
        paragraphs: [
          "Ce site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte déposés sur votre terminal lors de votre visite.",
          "Nous utilisons des cookies strictement nécessaires au fonctionnement du site, des cookies analytiques (mesure d'audience anonymisée) et des cookies de personnalisation. Vous pouvez gérer vos préférences à tout moment via notre gestionnaire de cookies.",
          "Pour en savoir plus sur notre utilisation des cookies, consultez notre Politique de confidentialité.",
        ],
      },
      {
        title: "Droit applicable et juridiction",
        paragraphs: [
          "Le présent site et ses mentions légales sont régis par le droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français seront seuls compétents.",
          "Conformément à l'article L.612-1 du Code de la consommation, tout consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui l'oppose à un professionnel. Fab Finance adhère au service de médiation.",
          "Vous pouvez également recourir à la plateforme européenne de règlement en ligne des litiges accessible à l'adresse : https://ec.europa.eu/consumers/odr",
        ],
      },
    ],
    footerContact: "Pour toute question relative à ces mentions légales, vous pouvez nous contacter à",
  },

  // ── Politique de confidentialité ────────────────────────────────────────────
  politiqueConfidentialite: {
    badge:          "RGPD · Loi Informatique et Libertés",
    pageSubtitle:   "Comment nous collectons, utilisons et protégeons vos données personnelles.",
    rgpdBoxTitle:   "Vos données sont protégées",
    rgpdBoxText:    "Fab Finance est conforme au Règlement Général sur la Protection des Données (RGPD – UE 2016/679). Vos données ne sont jamais vendues et sont traitées avec le plus grand soin.",
    footerText:     "Pour exercer vos droits ou pour toute question relative à cette politique, contactez notre DPO à",
    modifDateLabel: "Date de la dernière mise à jour :",
    sections: [
      {
        title: "Responsable du traitement",
        paragraphs: [
          "Fab Finance SAS, immatriculée au RCS de Paris sous le numéro 524581873, dont le siège social est situé 52 RUE DU DOCTEUR SULTZER 67140 BARR, est responsable du traitement de vos données personnelles collectées via ce site.",
          "Notre Délégué à la Protection des Données (DPO) est joignable à l'adresse : dpo@fab-financeaide.com",
        ],
      },
      {
        title: "Données collectées",
        intro: "Dans le cadre de votre utilisation de nos services, nous collectons uniquement les données strictement nécessaires à l'étude de votre demande de financement.",
        rows: [
          ["Identité",       "Nom, prénom, date de naissance"],
          ["Coordonnées",    "Email, téléphone, adresse postale"],
          ["Situation pro.", "Statut professionnel, revenus mensuels, charges"],
          ["Projet",         "Type de prêt, montant souhaité, durée"],
          ["Navigation",     "Adresse IP, pages visitées, durée de session (anonymisés)"],
          ["Consentement",   "Date, heure et modalité de recueil du consentement RGPD"],
        ],
        paragraphs: [
          "Nous ne collectons aucune donnée dite « sensible » au sens de l'article 9 du RGPD (origines ethniques, opinions politiques, données de santé, etc.).",
        ],
      },
      {
        title: "Finalités et bases légales",
        rows: [
          ["Étude de votre demande",         "Exécution d'un contrat / mesures précontractuelles"],
          ["Communication sur votre dossier","Intérêt légitime / exécution du contrat"],
          ["Obligations réglementaires",     "Obligation légale (KYC, LCB-FT)"],
          ["Amélioration du service",        "Intérêt légitime (données anonymisées)"],
          ["Marketing et newsletters",       "Consentement explicite (opt-in)"],
          ["Cookies analytiques",            "Consentement explicite"],
        ],
      },
      {
        title: "Destinataires des données",
        paragraphs: [
          "Vos données sont traitées exclusivement par Fab Finance SAS et ses sous-traitants techniques, dans le strict cadre de l'exécution du service. Elles ne sont jamais vendues à des tiers.",
          "Les sous-traitants auxquels nous faisons appel sont contractuellement tenus de respecter la confidentialité et la sécurité de vos données, conformément à l'article 28 du RGPD.",
        ],
        rows: [
          ["Hébergement",    "Vercel Inc. (serveurs UE)"],
          ["Envoi d'emails", "EmailJS / Resend (chiffrement TLS)"],
          ["Analytique",     "Données anonymisées, sans transfert hors UE"],
        ],
        paragraphs2: [
          "Aucun transfert de données hors de l'Union Européenne n'est effectué sans garanties appropriées (clauses contractuelles types de la Commission européenne).",
        ],
      },
      {
        title: "Durée de conservation",
        rows: [
          ["Données de demande (non aboutie)", "3 ans à compter du dernier contact"],
          ["Données contractuelles",           "5 ans après fin du contrat (obligation légale)"],
          ["Données de navigation",            "13 mois maximum"],
          ["Données de consentement",          "3 ans à compter du recueil"],
          ["Données marketing",                "3 ans après le dernier engagement actif"],
        ],
        paragraphs: [
          "À l'issue de ces délais, vos données sont supprimées de façon sécurisée ou anonymisées de manière irréversible.",
        ],
      },
      {
        title: "Sécurité des données",
        intro: "Fab Finance met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre toute perte, destruction, altération, accès ou divulgation non autorisés.",
        rows: [
          ["Chiffrement", "SSL/TLS 256-bit sur toutes les communications"],
          ["Accès",       "Contrôle strict des accès, authentification forte"],
          ["Hébergement", "Serveurs sécurisés certifiés ISO 27001"],
          ["Tests",       "Audits de sécurité réguliers"],
        ],
        warning: "En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés, vous serez notifié dans les 72 heures conformément à l'article 34 du RGPD.",
      },
      {
        title: "Vos droits",
        intro: "Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la loi Informatique et Libertés modifiée, vous disposez des droits suivants sur vos données personnelles :",
        rows: [
          ["Droit d'accès",           "Obtenir une copie de vos données (art. 15 RGPD)"],
          ["Droit de rectification",  "Corriger des données inexactes (art. 16 RGPD)"],
          ["Droit à l'effacement",    "Demander la suppression de vos données (art. 17 RGPD)"],
          ["Droit à la limitation",   "Limiter un traitement en cours (art. 18 RGPD)"],
          ["Droit à la portabilité",  "Recevoir vos données dans un format lisible (art. 20 RGPD)"],
          ["Droit d'opposition",      "Vous opposer à un traitement (art. 21 RGPD)"],
          ["Retrait du consentement", "Retirer votre consentement à tout moment"],
        ],
        paragraphs2: [
          "Pour exercer vos droits, contactez notre DPO par email à dpo@fab-financeaide.com, en joignant une copie de votre pièce d'identité. Nous répondrons dans un délai d'un mois à compter de la réception de votre demande.",
          "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : www.cnil.fr ou 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.",
        ],
      },
      {
        title: "Cookies",
        rows: [
          ["Cookies essentiels",  "Nécessaires au fonctionnement — Pas de consentement requis"],
          ["Cookies analytiques", "Mesure d'audience anonymisée — Consentement requis"],
          ["Cookies marketing",   "Non utilisés sur ce site"],
        ],
        paragraphs: [
          "Vous pouvez à tout moment modifier vos préférences via le gestionnaire de cookies accessible en bas de page. Le refus des cookies analytiques n'affecte pas votre navigation ni votre accès aux services.",
        ],
      },
      {
        title: "Modifications de la politique",
        paragraphs: [
          "Fab Finance se réserve le droit de modifier la présente politique de confidentialité à tout moment, notamment pour se conformer à toute évolution légale, jurisprudentielle, éditoriale ou technique.",
          "En cas de modification substantielle, vous serez informé par email ou par un bandeau visible sur le site. La version en vigueur est toujours accessible depuis le pied de page du site.",
        ],
      },
    ],
  },
  // ── Page Cookies ─────────────────────────────────────────────────────────────
  cookiesPage: {
    badge:    "Conforme RGPD",
    subtitle: "Gérez vos préférences de cookies à tout moment. Votre choix est sauvegardé localement sur votre appareil.",
    statusLabel: "Statut de votre consentement",
    statusMessages: {
      pending:  "Aucun choix enregistré",
      accepted: "Tous les cookies acceptés",
      refused:  "Cookies optionnels refusés",
      custom:   "Préférences personnalisées",
    },
    statusPending: "En attente",
    statusSaved:   "Enregistré",
    reset:         "Réinitialiser",
    requiredBadge: "Requis",
    retentionLabel: "Conservation :",
    types: [
      {
        title: "Cookies essentiels",
        desc:  "Ces cookies sont indispensables au fonctionnement du site. Ils permettent la navigation, la sécurité des formulaires et la mémorisation de vos préférences de cookies. Ils ne peuvent pas être désactivés.",
        examples: ["Session de navigation", "Préférences de consentement", "Sécurité CSRF"],
        retention: "Session / 12 mois",
      },
      {
        title: "Cookies analytiques",
        desc:  "Ces cookies nous permettent de mesurer l'audience du site de façon anonyme afin d'améliorer nos services. Aucune donnée personnelle identifiable n'est collectée ni transmise à des tiers.",
        examples: ["Pages visitées (anonymisé)", "Durée de session", "Origine du trafic"],
        retention: "13 mois",
      },
      {
        title: "Cookies marketing",
        desc:  "Ces cookies permettent de personnaliser les offres et publicités qui vous sont présentées. Ils peuvent être déposés par nos partenaires publicitaires avec votre consentement.",
        examples: ["Personnalisation des offres", "Retargeting publicitaire", "Mesure conversions"],
        retention: "12 mois",
      },
    ],
    examplesLabel: "Exemples d'utilisation",
    savedMessage:  "Vos préférences ont été enregistrées.",
    saveButton:    "Enregistrer mes choix",
    acceptAll:     "Tout accepter",
    refuseAll:     "Tout refuser",
    footerNote:    "Vos préférences sont sauvegardées sur votre appareil uniquement. Aucune donnée n'est envoyée à nos serveurs.",
  },
    // ── Loan Hero (composant) ───────────────────────────────────────────────────
  loanHero: {
    badge: "Réponse immédiate · Sans engagement",
    fallbackTaglinePrefix: "La solution Fab Finance pour",
    fallbackTaglineSuffix: "transparence, rapidité et accompagnement humain pour tous vos projets.",
    trustResponseTime: "Réponse en 2 minutes",
  },
    // ── Pages Prêts (données par type, ex loanConfig) ──────────────────────────────
  loans: {
    personnel: {
      tagline: "Financez vos projets en toute liberté",
      conditions: { duration: "12 à 84 mois", taeg: "à partir de 3 %", rateType: "Fixe" },
      advantages: [
        "Aucun justificatif d'utilisation",
        "Remboursement anticipé gratuit",
        "Pause mensualité possible",
      ],
      explanation: {
        title: "Comprendre le prêt personnel",
        paragraphs: [
          "Le prêt personnel est une solution de financement flexible qui permet de financer différents projets sans avoir à fournir de justificatif d'utilisation des fonds.",
          "Que ce soit pour financer des travaux, un voyage ou faire face à une dépense imprévue, ce crédit permet de disposer rapidement d'une somme d'argent.",
          "Chez Fab Finance, vous pouvez simuler votre prêt en ligne en quelques secondes afin de connaître le montant de vos mensualités.",
          "Notre équipe vous accompagne pour vous proposer une solution claire, transparente et adaptée à votre situation financière.",
        ],
      },
      usages: [
        { title: "Acheter une voiture", desc: "Financez votre véhicule neuf ou d'occasion rapidement." },
        { title: "Faire des travaux",   desc: "Améliorez votre logement avec un financement flexible." },
        { title: "Financer un voyage",  desc: "Réalisez vos projets personnels en toute sérénité." },
      ],
    },
    etudiant: {
      tagline: "Financez vos études et préparez votre avenir",
      conditions: { duration: "12 à 120 mois", taeg: "à partir de 0,90 %", rateType: "Fixe" },
      advantages: [
        "Remboursement différé pendant les études",
        "Pas de frais de dossier",
        "Caution parentale simplifiée",
      ],
      explanation: {
        title: "Comprendre le prêt étudiant",
        paragraphs: [
          "Le prêt étudiant est un crédit spécialement conçu pour aider les étudiants à financer leurs études et les dépenses associées à leur parcours académique.",
          "Contrairement à un prêt classique, le remboursement peut être différé pendant la durée des études afin de permettre à l'étudiant de se concentrer sur sa formation.",
          "Une fois les études terminées, le remboursement du prêt commence selon les modalités définies lors de la souscription.",
          "Chez Fab Finance, nous proposons des solutions de financement simples, transparentes et adaptées à la réalité des étudiants.",
        ],
      },
      usages: [
        { title: "Financer les études",     desc: "Payez vos frais de scolarité et votre formation." },
        { title: "Logement étudiant",       desc: "Financez votre logement pendant vos études." },
        { title: "Matériel informatique",   desc: "Achetez l'équipement nécessaire à vos études." },
      ],
    },
    auto: {
      tagline: "Financez votre voiture neuve ou d'occasion",
      conditions: { duration: "12 à 84 mois", taeg: "à partir de 3,2 %", rateType: "Fixe" },
      advantages: [
        "Financement rapide de votre véhicule",
        "Taux fixe pendant toute la durée du prêt",
        "Possibilité de remboursement anticipé",
      ],
      explanation: {
        title: "Comprendre le prêt auto",
        paragraphs: [
          "Le prêt auto est un crédit dédié qui permet de financer l'achat d'un véhicule neuf ou d'occasion.",
          "Il vous permet de répartir le coût de votre voiture sur plusieurs mois ou années afin de préserver votre capacité d'épargne.",
          "Le montant des mensualités dépend du capital emprunté, de la durée du prêt et du taux d'intérêt appliqué.",
          "Chez Fab Finance, vous pouvez simuler votre prêt auto en ligne et obtenir rapidement une réponse de principe.",
        ],
      },
      usages: [
        { title: "Voiture neuve",     desc: "Financez l'achat d'un véhicule neuf avec des mensualités adaptées." },
        { title: "Voiture d'occasion",desc: "Achetez un véhicule d'occasion tout en maîtrisant votre budget." },
        { title: "Véhicule électrique",desc: "Passez à la mobilité électrique avec un financement flexible." },
      ],
    },
    professionnel: {
      tagline: "Financez le développement de votre activité",
      conditions: { duration: "12 à 120 mois", taeg: "à partir de 3,5 %", rateType: "Fixe ou variable" },
      advantages: [
        "Financement adapté aux entreprises",
        "Accompagnement par des experts",
        "Remboursement flexible",
      ],
      explanation: {
        title: "Comprendre le prêt professionnel",
        paragraphs: [
          "Le prêt professionnel permet aux entreprises et aux indépendants de financer leurs investissements et leur développement.",
          "Il peut servir à financer l'achat de matériel, l'aménagement d'un local, le recrutement de personnel ou encore le lancement d'un nouveau projet.",
          "La durée et le montant du prêt dépendent du projet, de la capacité de remboursement de l'entreprise et des garanties éventuelles.",
          "Chez Fab Finance, nous proposons des solutions de financement claires et adaptées aux besoins des professionnels.",
        ],
      },
      usages: [
        { title: "Créer une entreprise",       desc: "Financez le lancement de votre activité." },
        { title: "Acheter du matériel",        desc: "Investissez dans l'équipement nécessaire à votre activité." },
        { title: "Développer votre entreprise",desc: "Soutenez la croissance de votre entreprise." },
      ],
    },
    conso: {
      tagline: "Financez vos projets du quotidien",
      conditions: { duration: "6 à 84 mois", taeg: "à partir de 2,5 %", rateType: "Fixe" },
      advantages: [
        "Financement rapide",
        "Mensualités adaptées à votre budget",
        "Procédure simple et 100 % en ligne",
      ],
      explanation: {
        title: "Comprendre le prêt à la consommation",
        paragraphs: [
          "Le prêt à la consommation est un crédit accordé aux particuliers pour financer des biens ou des services destinés à un usage personnel.",
          "Il se distingue du prêt immobilier car il concerne généralement des montants plus faibles et des durées de remboursement plus courtes.",
          "Le remboursement se fait sous forme de mensualités fixes comprenant une partie du capital emprunté et les intérêts.",
          "Grâce aux outils de simulation en ligne de Fab Finance, il est possible de connaître rapidement le montant des mensualités adapté à son budget.",
        ],
      },
      usages: [
        { title: "Acheter des équipements", desc: "Financez l'achat d'électroménager ou d'équipements pour votre maison." },
        { title: "Organiser un événement",  desc: "Financez un mariage, une fête ou un projet personnel important." },
        { title: "Dépense imprévue",        desc: "Disposez rapidement de fonds pour gérer une situation urgente." },
      ],
    },
    rachat: {
      tagline: "Regroupez vos crédits et allégez vos mensualités",
      conditions: { duration: "24 à 144 mois", taeg: "à partir de 3,9 %", rateType: "Fixe" },
      advantages: [
        "Une seule mensualité",
        "Réduction possible des mensualités",
        "Meilleure gestion de votre budget",
      ],
      explanation: {
        title: "Comprendre le rachat de crédit",
        paragraphs: [
          "Le rachat de crédit consiste à regrouper plusieurs prêts en cours en un seul crédit avec une mensualité unique.",
          "Cette solution permet de simplifier la gestion de vos finances et d'adapter le montant des mensualités à votre capacité de remboursement.",
          "Le regroupement peut concerner différents types de crédits : prêt personnel, crédit auto ou crédit à la consommation.",
          "Chez Fab Finance, notre équipe analyse votre situation financière afin de vous proposer une solution de regroupement adaptée à votre budget.",
        ],
      },
      usages: [
        { title: "Regrouper plusieurs crédits", desc: "Fusionnez tous vos crédits en une seule mensualité." },
        { title: "Réduire les mensualités",     desc: "Adaptez vos remboursements à votre budget." },
        { title: "Simplifier la gestion",       desc: "Un seul crédit, une seule mensualité à gérer." },
      ],
    },
  },
  // ── Loan Advantages (composant) ─────────────────────────────────────────────
  loanAdvantages: {
    title:    "Pourquoi choisir ce prêt ?",
    subtitle: "Tous les avantages inclus, sans frais cachés",
    extra: ["Gestion 100% digitale", "Conseiller dédié", "Transparence totale"],
    footerPrefix: "Tous ces avantages sont inclus sans frais supplémentaires —",
    footerSuffix: ", zéro mauvaise surprise.",
  },
  // ── Loan Usage (composant) ──────────────────────────────────────────────────
  loanUsage: {
    title:    "Pour quels projets utiliser ce prêt ?",
    subtitle: "Des exemples concrets pour vous aider à vous projeter",
    cta:      "Financer mon projet",
  },
 // ── Loan Example (composant) ────────────────────────────────────────────────
  loanExample: {
    title:    "Exemple de financement",
    subtitle: "Simulation indicative · TAEG fixe 3%",
    introPart1: "Pour un emprunt de",
    introPart2: "sur une période de",
    durationNote: "/ mois · sur",
    rows: {
      taegFixe: "TAEG fixe",
      tauxDebiteur: "Taux débiteur",
    },
    capitalLabel:   "Capital remboursé",
    interestsLabel: "Coût des intérêts",
    capitalSuffix:  "capital",
    interestsSuffix:"intérêts",
    cta: "Simuler mon montant",
    detailTitle: "Détail du crédit",
    disclaimer: "Simulation non contractuelle. TAEG fixe de 3,00% sur 120 mois. Un crédit vous engage et doit être remboursé.",
  },
  // ── Loan Steps (composant) ──────────────────────────────────────────────────
  loanSteps: {
    eyebrow:  "Processus simplifié",
    title:    "Comment obtenir votre prêt ?",
    subtitle: "3 étapes simples pour financer votre projet.",
    steps: [
      { title: "Faites votre demande", desc: "Remplissez notre formulaire sécurisé en quelques minutes, depuis n'importe quel appareil.", tag: "2 min" },
      { title: "Analyse rapide",       desc: "Nos experts analysent votre dossier immédiatement et vous donnent une réponse de principe.", tag: "Immédiat" },
      { title: "Recevez les fonds",    desc: "Après validation, les fonds sont disponibles sur votre compte sous 24 à 48 heures.", tag: "24 – 48h" },
    ],
    ctaPrefix: "Prêt à commencer ?",
    ctaBold:   "Votre demande ne prend que 2 minutes.",
    ctaButton: "Faire ma demande",
  },
  // ── Loan Trust (composant) ──────────────────────────────────────────────────
  loanTrust: {
    eyebrow:  "Preuve sociale",
    title:    "Ils nous font confiance",
    subtitle: "Plus de 200 000 projets financés avec Fab Finance",
    stats: [
      { label: "projets financés" },
      { label: "note moyenne clients" },
      { label: "délai de versement" },
      { label: "plateforme sécurisée" },
    ],
    ratingSub: "Basé sur +12 000 avis vérifiés",
    reviews: [
      "Réponse ultra rapide, fonds reçus en 48h. Parfait !",
      "Transparent et sans frais cachés. Je recommande vivement.",
      "Conseiller très professionnel, accompagnement au top.",
    ],
    cta: "Rejoindre nos clients satisfaits",
  },
  // ── Loan FAQ (composant) ────────────────────────────────────────────────────
  loanFaq: {
    items: [
      { q: "Combien de temps pour obtenir une réponse ?", a: "Une réponse de principe peut être donnée immédiatement après votre demande." },
      { q: "Puis-je rembourser mon prêt plus tôt ?",       a: "Oui, le remboursement anticipé est possible sans frais supplémentaires." },
      { q: "Les démarches sont-elles sécurisées ?",        a: "Toutes les informations sont protégées et traitées de manière confidentielle." },
    ],
  },
  // ── Loan Other Loans (composant) ────────────────────────────────────────────
  loanOtherLoans: {
    sectionTitle: "Découvrez aussi nos autres solutions",
    descriptions: {
      personnel:     "Tous vos projets sans justificatif.",
      auto:          "Neuf ou occasion au meilleur taux.",
      etudiant:      "Financez vos études sereinement.",
      conso:         "Pour vos achats du quotidien.",
      professionnel: "Développez votre activité.",
      rachat:        "Allégez vos mensualités.",
    },
  },
  // ── Loan Stats (composant) ──────────────────────────────────────────────────
  loanStats: {
    rateTypeLabel: "Type de taux",
    feesLabel:     "Frais de dossier",
    feesValue:     "Faible",
  },
  // ── Cookie Banner (composant) ───────────────────────────────────────────────
  cookieBanner: {
    text: "Nous utilisons des cookies pour améliorer votre expérience. Les cookies essentiels sont toujours actifs.",
    toggleDescs: {
      necessary: "Nécessaires au fonctionnement du site.",
      analytics: "Mesure d'audience anonymisée (aucune donnée personnelle).",
      marketing: "Personnalisation des offres et publicités.",
    },
    hideOptions:  "Masquer les options",
    customize:    "Personnaliser",
  },

  // ── WhatsApp Button (composant) ─────────────────────────────────────────────
  whatsAppButton: {
    status:   "En ligne · répond en 2h",
    greeting: "Bonjour ! 👋 Comment puis-je vous aider aujourd'hui ? Choisissez un sujet ou écrivez-nous directement.",
    quickMessages: [
      { label: "Demander un prêt personnel", msg: "Bonjour Fab Finance 👋 Je souhaite obtenir un prêt personnel. Pouvez-vous m'aider ?" },
      { label: "Simuler un prêt auto",       msg: "Bonjour Fab Finance 👋 Je souhaite simuler un prêt auto. Pouvez-vous m'accompagner ?" },
      { label: "Connaître mes mensualités",  msg: "Bonjour Fab Finance 👋 J'aimerais connaître mes mensualités pour un projet de financement." },
      { label: "Suivre mon dossier",         msg: "Bonjour Fab Finance 👋 Je souhaite avoir des nouvelles de mon dossier de prêt." },
    ],
    tooltip:  "Besoin d'aide ? 👋",
    ariaLabel:"Contacter via WhatsApp",
  },
  // ── Page 404 ─────────────────────────────────────────────────────────────────
  notFound: {
    title:       "Page introuvable",
    description: "La page que vous cherchez n'existe pas ou a été déplacée. Pas d'inquiétude — votre projet de financement, lui, est bien là.",
  },

  // ── Common ───────────────────────────────────────────────────────────────────
  common: {
    simulate:  "Simuler mon prêt",
    learnMore: "En savoir plus",
    back:      "Retour",
    free:      "Gratuit",
    noFees:    "Sans frais",
    secure:    "100% sécurisé",
    instant:   "Réponse instantanée",
    noCommit:  "Sans engagement",
    monthly:   "mois",
    euros:     "€",
  },
}

export type Translation = typeof fr