// donateTranslations.ts
// Translation keys for Donate Page

const donateTranslations = {
  en: {
    // Page metadata
    meta: {
      title: "Donate - Indaro Foundation",
      description:
        "Support Indaro Foundation's mission to transform lives through education, talent development, and safe homes for vulnerable youth in Rwanda.",
    },

    // Hero section
    hero: {
      badge: "Support Our Mission",
      title: "Make a Donation,",
      titleHighlight: "Transform a Life",
      description:
        "Your generosity helps us provide education, talent development, and safe homes for vulnerable youth in Rwanda.",
      buttons: {
        donateNow: "Donate Now",
        sponsorChild: "Sponsor a Child",
      },
    },

    // Donation form
    donationForm: {
      title: "Complete Your Donation",
      frequency: {
        oneTime: "One-Time",
        monthly: "Monthly",
      },
      amount: {
        select: "Select Amount",
        custom: "Custom Amount",
        currency: "$",
      },
      paymentMethod: {
        title: "Payment Method",
        card: {
          title: "Credit / Debit Card",
          description: "Secure online payment via Stripe",
          form: {
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email Address",
            cardNumber: "Card Number",
            expiry: "MM/YY",
            cvc: "CVC",
            message: "Leave a message (optional)",
            button: "Donate {{amount}} {{frequency}}",
            processing: "Processing...",
            secure: "Secure SSL Encryption",
          },
        },
        bank: {
          title: "Bank Transfer",
          description: "Direct transfer to our bank account",
          details: {
            bankName: "Bank Name",
            accountName: "Account Name",
            accountNumber: "Account Number",
            reference: "Please use your name as reference when making the transfer to help us identify your donation.",
          },
          buttons: {
            copyAll: "Copy All Details",
            copied: "Copied!",
          },
        },
        mobile: {
          title: "Mobile Money",
          description: "MTN or Airtel Money",
          available: "Available 24/7",
          phoneNumber: "Phone Number",
          nameOnAccount: "Name on account:",
          confirmation: "After sending money via Mobile Money, please SMS us the transaction ID for confirmation.",
        },
      },
    },

    // Bank details
    bankDetails: {
      bankName: "Bank of Kigali (BK)",
      accountName: "Indaro Organization",
      accountNumber: "00042-0696969-23",
    },

    // Mobile money details
    mobileMoney: {
      mtn: {
        name: "MTN Mobile Money",
        phone: "(+250) 783 202 042",
      },
      airtel: {
        name: "Airtel Money",
        phone: "(+250) 781 329 895",
      },
      accountName: "CYUBAHIRO Eric",
    },

    // Tax information
    taxInfo: {
      label: "Tax Deductible",
      description: "Indaro Foundation is a registered nonprofit. All donations are tax-deductible to the extent allowed by law.",
    },

    // Impact section (right column)
    impactSection: {
      monthlyGoal: {
        title: "Monthly Donation Goal",
        achieved: "{{percentage}}% of monthly goal achieved",
        thisMonth: "This month",
        donors: "donors",
        average: "Average donation",
      },
      yourImpact: {
        title: "Your Impact",
        stories: [
          {
            title: "Education for Marie",
            description: "$50 provides school fees and materials for one student for a full term.",
          },
          {
            title: "Dance Training for Jean",
            description: "$100 supports a young dancer with training, costumes, and performance opportunities.",
          },
          {
            title: "Safe Home for Grace",
            description: "$250 provides one month of safe accommodation, meals, and care.",
          },
        ],
      },
      recentDonors: {
        title: "Recent Donors",
        timeAgo: {
          minutes: "{{count}} min ago",
          minutes_plural: "{{count}} min ago",
        },
      },
      whyDonate: {
        title: "Why Donate to Indaro?",
        reasons: [
          "100% of donations go directly to programs",
          "Registered 501(c)(3) nonprofit",
          "Annual financial reports available",
          "Regular impact updates sent to donors",
        ],
      },
      help: {
        title: "Need Help Donating?",
      },
    },

    // Other ways to support
    otherWays: {
      title: "Other Ways to Support",
      description: "Not ready to donate? There are many other ways you can make a difference.",
      volunteer: {
        title: "Volunteer",
        description: "Share your time and skills with our programs.",
        link: "Learn More",
      },
      corporate: {
        title: "Corporate Sponsorship",
        description: "Partner with us for greater impact.",
        link: "Learn More",
      },
      inKind: {
        title: "In-Kind Donations",
        description: "Donate supplies, equipment, or services.",
        link: "Learn More",
      },
    },

    // Success modal
    successModal: {
      title: "Thank You!",
      message: "Your donation of ${{amount}} has been processed.",
      receipt: "A receipt has been sent to your email. Your support helps us transform more lives.",
      button: "Continue",
      downloadReceipt: "Download Receipt",
    },

    // Trust badges
    trustBadges: {
      secure: "Secure SSL Encryption",
    },

    // Copy buttons
    copy: {
      copy: "Copy",
      copied: "Copied!",
    },
  },

  rw: {
    // Page metadata
    meta: {
      title: "Tanga Impano - Indaro Foundation",
      description:
        "Fasha Indaro Foundation mu nshingano zayo zo guhindura ubuzima binyuze mu burezi, guteza imbere impano, n'uburaro ku rubyiruko rukene mu Rwanda.",
    },

    // Hero section
    hero: {
      badge: "Dufashe mu Nshingano Zacu",
      title: "Tanga Impano,",
      titleHighlight: "Hindura Ubuzima",
      description:
        "Ubuntu bwawe budufasha gutanga uburezi, guteza imbere impano, n'uburaro ku rubyiruko rukene mu Rwanda.",
      buttons: {
        donateNow: "Tanga Ubu",
        sponsorChild: "Fasha Umwana",
      },
    },

    // Donation form
    donationForm: {
      title: "Sohoza Impano Yawe",
      frequency: {
        oneTime: "Insange",
        monthly: "Buri Kwezi",
      },
      amount: {
        select: "Hitamo Amafaranga",
        custom: "Amafaranga Ushaka",
        currency: "$",
      },
      paymentMethod: {
        title: "Uburyo bwo Kwishyura",
        card: {
          title: "Karita y'Inguzanyo / Banki",
          description: "Kwishyura byizewe kuri interineti binyuze kuri Stripe",
          form: {
            firstName: "Izina rya Mbere",
            lastName: "Izina rya Nyuma",
            email: "Aderesi ya Imeli",
            cardNumber: "Nomero ya Karita",
            expiry: "UKWEZI/UMWAKA",
            cvc: "CVC",
            message: "Siga ubutumwa (bishatse)",
            button: "Tanga ${{amount}} {{frequency}}",
            processing: "Iri gutunganywa...",
            secure: "Umutekano wa SSL",
          },
        },
        bank: {
          title: "Yohereza kuri Banki",
          description: "Yohereza amafaranga mu konti yacu ya banki",
          details: {
            bankName: "Izina rya Banki",
            accountName: "Izina rya Konti",
            accountNumber: "Nomero ya Konti",
            reference: "Nyamuneka koresha izina ryawe nk'ikimenyetso mugihe wohereje amafaranga kugira ngo udufashe kumenya impano yawe.",
          },
          buttons: {
            copyAll: "Kwandukura Ibisobanuro Byose",
            copied: "Byandukuwe!",
          },
        },
        mobile: {
          title: "Mobile Money",
          description: "MTN cyangwa Airtel Money",
          available: "Biboneka 24/7",
          phoneNumber: "Nomero ya Telefoni",
          nameOnAccount: "Izina kuri konti:",
          confirmation: "Nyuma yo kohereza amafaranga hifashishijwe Mobile Money, nyamuneka twoherereze SMS ID y'ikoranabuhanga kugira ngo twemeze.",
        },
      },
    },

    // Bank details
    bankDetails: {
      bankName: "Banki ya Kigali (BK)",
      accountName: "Indaro Organization",
      accountNumber: "00042-0696969-23",
    },

    // Mobile money details
    mobileMoney: {
      mtn: {
        name: "MTN Mobile Money",
        phone: "(+250) 783 202 042",
      },
      airtel: {
        name: "Airtel Money",
        phone: "(+250) 781 329 895",
      },
      accountName: "CYUBAHIRO Eric",
    },

    // Tax information
    taxInfo: {
      label: "Gabanuka mu Misondezo",
      description: "Indaro Foundation ni umuryango wemewe utari iya leta. Impano zose zigabanywa mu misondezo nk'uko amategeko abivuga.",
    },

    // Impact section (right column)
    impactSection: {
      monthlyGoal: {
        title: "Intego y'Impano buri Kwezi",
        achieved: "{{percentage}}% by'intego buri kwezi byagezweho",
        thisMonth: "Uku kwezi",
        donors: "abatanga impano",
        average: "Impano igereranyije",
      },
      yourImpact: {
        title: "Ingaruka Zawe",
        stories: [
          {
            title: "Uburezi kuri Marie",
            description: "$50 biha amafaranga y'ishuri nibikoresho by'umunyeshuri umwe mu gihembwe cyose.",
          },
          {
            title: "Amahugurwa y'Imbyino kuri Jean",
            description: "$100 ashyigikira umubyinyi ukiri muto mu mahugurwa, imyenda, n'amahirwe yo kwerekanwa.",
          },
          {
            title: "Uburaro ku mutekano kuri Grace",
            description: "$250 biha amezi abiri y'uburaro butekanye, ibiryo, n'ubwitabire.",
          },
        ],
      },
      recentDonors: {
        title: "Abatangiye Gutanga",
        timeAgo: {
          minutes: "{{count}} min ishize",
          minutes_plural: "{{count}} min ishize",
        },
      },
      whyDonate: {
        title: "Kuki Ugombye Gutanga kuri Indaro?",
        reasons: [
          "100% by'impano bijya mu gahunda z'ibanze",
          "Umuryango wemewe utari iwa leta",
          "Raporo y' imari buri mwaka iraboneka",
          "Amakuru mashya y'ingaruka yoherezwa abatanga",
        ],
      },
      help: {
        title: "Ukeneye Ubufasha mu Gutanga?",
      },
    },

    // Other ways to support
    otherWays: {
      title: "Ubundi buryo bwo Gudufasha",
      description: "Ntiwiteguye gutanga? Hari ubundi buryo bwinshi bwo guhindura ubuzima.",
      volunteer: {
        title: "Korera ubukorerabushake",
        description: "Sangiza igihe n'ubumenyi bwawe muri gahunda zacu.",
        link: "Menya Byinshi",
      },
      corporate: {
        title: "Ubusabane n'Ibisosiyete",
        description: "Fatanya natwe kugira ngo tugire ingaruka nini.",
        link: "Menya Byinshi",
      },
      inKind: {
        title: "Impano z'Ibikoresho",
        description: "Tanga ibikoresho, ibikoresho by'imikino, cyangwa serivisi.",
        link: "Menya Byinshi",
      },
    },

    // Success modal
    successModal: {
      title: "Urakoze!",
      message: "Impano yawe ya ${{amount}} yatunganyijwe.",
      receipt: "Risiti yoherejwe kuri imeli yawe. Ubufasha bwawe budufasha guhindura ubuzima bwinshi.",
      button: "Komeza",
      downloadReceipt: "Kura Risiti",
    },

    // Trust badges
    trustBadges: {
      secure: "Umutekano wa SSL",
    },

    // Copy buttons
    copy: {
      copy: "Kwandukura",
      copied: "Byandukuwe!",
    },
  },

  fr: {
    // Page metadata
    meta: {
      title: "Faire un Don - Fondation Indaro",
      description:
        "Soutenez la mission de la Fondation Indaro pour transformer des vies par l'éducation, le développement des talents et des foyers sûrs pour les jeunes vulnérables au Rwanda.",
    },

    // Hero section
    hero: {
      badge: "Soutenez Notre Mission",
      title: "Faites un Don,",
      titleHighlight: "Transformez une Vie",
      description:
        "Votre générosité nous aide à fournir éducation, développement des talents et foyers sûrs aux jeunes vulnérables au Rwanda.",
      buttons: {
        donateNow: "Faire un Don",
        sponsorChild: "Parrainer un Enfant",
      },
    },

    // Donation form
    donationForm: {
      title: "Complétez Votre Don",
      frequency: {
        oneTime: "Unique",
        monthly: "Mensuel",
      },
      amount: {
        select: "Sélectionnez le Montant",
        custom: "Montant Personnalisé",
        currency: "$",
      },
      paymentMethod: {
        title: "Méthode de Paiement",
        card: {
          title: "Carte de Crédit / Débit",
          description: "Paiement en ligne sécurisé via Stripe",
          form: {
            firstName: "Prénom",
            lastName: "Nom",
            email: "Adresse Email",
            cardNumber: "Numéro de Carte",
            expiry: "MM/AA",
            cvc: "CVC",
            message: "Laissez un message (optionnel)",
            button: "Donner ${{amount}} {{frequency}}",
            processing: "Traitement en cours...",
            secure: "Cryptage SSL Sécurisé",
          },
        },
        bank: {
          title: "Virement Bancaire",
          description: "Transfert direct vers notre compte bancaire",
          details: {
            bankName: "Nom de la Banque",
            accountName: "Nom du Compte",
            accountNumber: "Numéro de Compte",
            reference: "Veuillez utiliser votre nom comme référence lors du transfert pour nous aider à identifier votre don.",
          },
          buttons: {
            copyAll: "Copier Tous les Détails",
            copied: "Copié!",
          },
        },
        mobile: {
          title: "Mobile Money",
          description: "MTN ou Airtel Money",
          available: "Disponible 24/7",
          phoneNumber: "Numéro de Téléphone",
          nameOnAccount: "Nom sur le compte:",
          confirmation: "Après avoir envoyé de l'argent via Mobile Money, veuillez nous envoyer par SMS l'ID de transaction pour confirmation.",
        },
      },
    },

    // Bank details
    bankDetails: {
      bankName: "Banque de Kigali (BK)",
      accountName: "Indaro Organization",
      accountNumber: "00042-0696969-23",
    },

    // Mobile money details
    mobileMoney: {
      mtn: {
        name: "MTN Mobile Money",
        phone: "(+250) 783 202 042",
      },
      airtel: {
        name: "Airtel Money",
        phone: "(+250) 781 329 895",
      },
      accountName: "CYUBAHIRO Eric",
    },

    // Tax information
    taxInfo: {
      label: "Déductible d'Impôt",
      description: "La Fondation Indaro est une organisation à but non lucratif enregistrée. Tous les dons sont déductibles d'impôt dans la limite permise par la loi.",
    },

    // Impact section (right column)
    impactSection: {
      monthlyGoal: {
        title: "Objectif de Don Mensuel",
        achieved: "{{percentage}}% de l'objectif mensuel atteint",
        thisMonth: "Ce mois",
        donors: "donateurs",
        average: "Don moyen",
      },
      yourImpact: {
        title: "Votre Impact",
        stories: [
          {
            title: "Éducation pour Marie",
            description: "$50 fournit les frais scolaires et le matériel pour un étudiant pour un trimestre complet.",
          },
          {
            title: "Formation de Danse pour Jean",
            description: "$100 soutient un jeune danseur avec formation, costumes et opportunités de performance.",
          },
          {
            title: "Foyer Sûr pour Grace",
            description: "$250 fournit un mois d'hébergement sûr, de repas et de soins.",
          },
        ],
      },
      recentDonors: {
        title: "Donateurs Récents",
        timeAgo: {
          minutes: "il y a {{count}} min",
          minutes_plural: "il y a {{count}} min",
        },
      },
      whyDonate: {
        title: "Pourquoi Donner à Indaro?",
        reasons: [
          "100% des dons vont directement aux programmes",
          "Organisation à but non lucratif enregistrée 501(c)(3)",
          "Rapports financiers annuels disponibles",
          "Mises à jour régulières sur l'impact envoyées aux donateurs",
        ],
      },
      help: {
        title: "Besoin d'Aide pour Donner?",
      },
    },

    // Other ways to support
    otherWays: {
      title: "Autres Façons de Soutenir",
      description: "Pas prêt à donner? Il existe de nombreuses autres façons de faire la différence.",
      volunteer: {
        title: "Bénévolat",
        description: "Partagez votre temps et vos compétences avec nos programmes.",
        link: "En Savoir Plus",
      },
      corporate: {
        title: "Parrainage d'Entreprise",
        description: "Partenariat avec nous pour un plus grand impact.",
        link: "En Savoir Plus",
      },
      inKind: {
        title: "Dons en Nature",
        description: "Donnez du matériel, de l'équipement ou des services.",
        link: "En Savoir Plus",
      },
    },

    // Success modal
    successModal: {
      title: "Merci!",
      message: "Votre don de ${{amount}} a été traité.",
      receipt: "Un reçu a été envoyé à votre email. Votre soutien nous aide à transformer plus de vies.",
      button: "Continuer",
      downloadReceipt: "Télécharger le Reçu",
    },

    // Trust badges
    trustBadges: {
      secure: "Cryptage SSL Sécurisé",
    },

    // Copy buttons
    copy: {
      copy: "Copier",
      copied: "Copié!",
    },
  },
};

export default donateTranslations;