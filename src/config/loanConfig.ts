// Paramètres Unsplash optimisés : w=1200, q=80, format auto, crop
const IMG = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1200&q=80&auto=format&fit=crop`

export const loanConfig: any = {

  // ─────────────────────────────────────────────────────────────
  // PRÊT PERSONNEL
  // ─────────────────────────────────────────────────────────────
  personnel: {
    meta: {
      title:    "Prêt personnel",
      slug:     "pret-personnel",
      category: "personnel",
    },

    hero: {
      title:   "Prêt personnel",
      image:   IMG("1554224155-6726b3ff858f"), // couple planifiant un projet
      tagline: "Financez vos projets en toute liberté",
    },

    conditions: {
      min:      "1 000 €",
      max:      "75 000 €",
      duration: "12 à 84 mois",
      taeg:     "à partir de 3 %",
      rateType: "Fixe",
    },

    simulation: {
      defaultAmount:   15000,
      defaultDuration: 60,
    },

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
      {
        title: "Acheter une voiture",
        desc:  "Financez votre véhicule neuf ou d'occasion rapidement.",
        image: IMG("1503376780353-7e6692767b70"),
      },
      {
        title: "Faire des travaux",
        desc:  "Améliorez votre logement avec un financement flexible.",
        image: IMG("1581578731548-c64695cc6952"),
      },
      {
        title: "Financer un voyage",
        desc:  "Réalisez vos projets personnels en toute sérénité.",
        image: IMG("1507525428034-b723cf961d3e"),
      },
    ],

    cta: {
      title:  "Simulez votre prêt personnel",
      button: "Faire une simulation",
    },
  },

  // ─────────────────────────────────────────────────────────────
  // PRÊT ÉTUDIANT
  // ─────────────────────────────────────────────────────────────
  etudiant: {
    meta: {
      title:    "Prêt étudiant",
      slug:     "pret-etudiant",
      category: "etudiant",
    },

    hero: {
      title:   "Prêt étudiant",
      image:   IMG("1523240795612-9a054b0db644"), // étudiants campus
      tagline: "Financez vos études et préparez votre avenir",
    },

    conditions: {
      min:      "1 000 €",
      max:      "50 000 €",
      duration: "12 à 120 mois",
      taeg:     "à partir de 0,90 %",
      rateType: "Fixe",
    },

    simulation: {
      defaultAmount:   8000,
      defaultDuration: 60,
    },

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
      {
        title: "Financer les études",
        desc:  "Payez vos frais de scolarité et votre formation.",
        image: IMG("1541339907198-e08756dedf3f"),
      },
      {
        title: "Logement étudiant",
        desc:  "Financez votre logement pendant vos études.",
        image: IMG("1484154218962-a197022b5858"), // appartement moderne
      },
      {
        title: "Matériel informatique",
        desc:  "Achetez l'équipement nécessaire à vos études.",
        image: IMG("1519389950473-47ba0277781c"),
      },
    ],

    cta: {
      title:  "Simulez votre prêt étudiant",
      button: "Faire une simulation",
    },
  },

  // ─────────────────────────────────────────────────────────────
  // PRÊT AUTO
  // ─────────────────────────────────────────────────────────────
  auto: {
    meta: {
      title:    "Prêt auto",
      slug:     "pret-auto",
      category: "auto",
    },

    hero: {
      title:   "Prêt auto",
      image:   IMG("1503376780353-7e6692767b70"), // voiture sur route
      tagline: "Financez votre voiture neuve ou d'occasion",
    },

    conditions: {
      min:      "2 000 €",
      max:      "75 000 €",
      duration: "12 à 84 mois",
      taeg:     "à partir de 3,2 %",
      rateType: "Fixe",
    },

    simulation: {
      defaultAmount:   15000,
      defaultDuration: 60,
    },

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
      {
        title: "Voiture neuve",
        desc:  "Financez l'achat d'un véhicule neuf avec des mensualités adaptées.",
        image: IMG("1503376780353-7e6692767b70"),
      },
      {
        title: "Voiture d'occasion",
        desc:  "Achetez un véhicule d'occasion tout en maîtrisant votre budget.",
        image: IMG("1493238792000-8113da705763"),
      },
      {
        title: "Véhicule électrique",
        desc:  "Passez à la mobilité électrique avec un financement flexible.",
        image: IMG("1494976388531-d1058494cdd8"), // voiture électrique
      },
    ],

    cta: {
      title:  "Simulez votre prêt auto",
      button: "Faire une simulation",
    },
  },

  // ─────────────────────────────────────────────────────────────
  // PRÊT PROFESSIONNEL
  // ─────────────────────────────────────────────────────────────
  professionnel: {
    meta: {
      title:    "Prêt professionnel",
      slug:     "pret-professionnel",
      category: "professionnel",
    },

    hero: {
      title:   "Prêt professionnel",
      image:   IMG("1556740738-b6a63e27c4df"), // bureau moderne
      tagline: "Financez le développement de votre activité",
    },

    conditions: {
      min:      "5 000 €",
      max:      "500 000 €",
      duration: "12 à 120 mois",
      taeg:     "à partir de 3,5 %",
      rateType: "Fixe ou variable",
    },

    simulation: {
      defaultAmount:   50000,
      defaultDuration: 72,
    },

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
      {
        title: "Créer une entreprise",
        desc:  "Financez le lancement de votre activité.",
        image: IMG("1497366216548-37526070297c"), // bureau entrepreneur
      },
      {
        title: "Acheter du matériel",
        desc:  "Investissez dans l'équipement nécessaire à votre activité.",
        image: IMG("1581091226033-d5c48150dbaa"), // équipement professionnel
      },
      {
        title: "Développer votre entreprise",
        desc:  "Soutenez la croissance de votre entreprise.",
        image: IMG("1557804506-669a67965ba0"),
      },
    ],

    cta: {
      title:  "Simulez votre prêt professionnel",
      button: "Faire une simulation",
    },
  },

  // ─────────────────────────────────────────────────────────────
  // PRÊT CONSOMMATION
  // ─────────────────────────────────────────────────────────────
  conso: {
    meta: {
      title:    "Prêt à la consommation",
      slug:     "pret-consommation",
      category: "consommation",
    },

    hero: {
      title:   "Prêt à la consommation",
      image:   IMG("1607082348824-0a96f2a4b9da"), // shopping / quotidien
      tagline: "Financez vos projets du quotidien",
    },

    conditions: {
      min:      "500 €",
      max:      "75 000 €",
      duration: "6 à 84 mois",
      taeg:     "à partir de 2,5 %",
      rateType: "Fixe",
    },

    simulation: {
      defaultAmount:   5000,
      defaultDuration: 36,
    },

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
      {
        title: "Acheter des équipements",
        desc:  "Financez l'achat d'électroménager ou d'équipements pour votre maison.",
        image: IMG("1586201375761-83865001e31c"),
      },
      {
        title: "Organiser un événement",
        desc:  "Financez un mariage, une fête ou un projet personnel important.",
        image: IMG("1529636798458-92182e662485"),
      },
      {
        title: "Dépense imprévue",
        desc:  "Disposez rapidement de fonds pour gérer une situation urgente.",
        image: IMG("1554224154-22dec7ec8818"),
      },
    ],

    cta: {
      title:  "Simulez votre prêt à la consommation",
      button: "Faire une simulation",
    },
  },

  // ─────────────────────────────────────────────────────────────
  // RACHAT DE CRÉDIT
  // ─────────────────────────────────────────────────────────────
  rachat: {
    meta: {
      title:    "Rachat de crédit",
      slug:     "rachat-credit",
      category: "rachat",
    },

    hero: {
      title:   "Rachat de crédit",
      image:   IMG("1450101499163-c8848c66ca85"), // documents financiers
      tagline: "Regroupez vos crédits et allégez vos mensualités",
    },

    conditions: {
      min:      "5 000 €",
      max:      "250 000 €",
      duration: "24 à 144 mois",
      taeg:     "à partir de 3,9 %",
      rateType: "Fixe",
    },

    simulation: {
      defaultAmount:   30000,
      defaultDuration: 84,
    },

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
      {
        title: "Regrouper plusieurs crédits",
        desc:  "Fusionnez tous vos crédits en une seule mensualité.",
        image: IMG("1554224154-22dec7ec8818"),
      },
      {
        title: "Réduire les mensualités",
        desc:  "Adaptez vos remboursements à votre budget.",
        image: IMG("1560472354-b33ff0c44a43"),
      },
      {
        title: "Simplifier la gestion",
        desc:  "Un seul crédit, une seule mensualité à gérer.",
        image: IMG("1450101499163-c8848c66ca85"),
      },
    ],

    cta: {
      title:  "Simulez votre rachat de crédit",
      button: "Faire une simulation",
    },
  },
}