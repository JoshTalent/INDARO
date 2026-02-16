// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Import program translations
import tigersBoxingTranslations from "./Tabs/programs/lang/boxing";
import impactTranslations from "./Tabs/lang/impactlang";
import galleryTranslations from "./Tabs/lang/gallery";
import projectsTranslations from "./Tabs/lang/project";
import newsTranslations from "./Tabs/lang/news";
import contactTranslations from "./Tabs/lang/contact";
import donateTranslations from "./Tabs/lang/donate";
import footerTranslations from "./components/footerLang";
// Common translations for the entire site
const commonTranslations = {
  en: {
  
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      whatWeDo: "What We Do",
      more: "More",
      impact: "Impact",
      gallery: "Gallery",
      projects: "Projects",
      donate: "Donate",
      contact: "Contact",
      viewAllPrograms: "View All Programs",
    },

    // Hero section slides
    hero: {
      slides: {
        traditional: {
          title: "Preserving Rwandan Heritage",
          subtitle: "Traditional Dance & Drumming",
          description:
            "Reconnecting youth with Rwanda's rich cultural legacy through Umutagara and African percussion.",
          stats: "{{count}}+ Young Dancers",
          cta1: "Support Our Mission",
          cta2: "Discover Programs",
        },
        boxing: {
          title: "Strength Through Sport",
          subtitle: "Boxing & Discipline",
          description:
            "Building resilience, focus, and confidence through professional boxing training.",
          stats: "{{count}}+ Athletes",
          cta1: "Support Our Mission",
          cta2: "Discover Programs",
        },
        education: {
          title: "Education for All",
          subtitle: "School Reintegration",
          description: "Breaking barriers to education, one child at a time.",
          stats: "{{count}}+ Children Supported",
          cta1: "Support Our Mission",
          cta2: "Discover Programs",
        },
        modern: {
          title: "Contemporary Expression",
          subtitle: "Afro Dance & Creative Arts",
          description:
            "Where tradition meets innovation in modern dance and fashion design.",
          stats: "{{count}}+ Performers",
          cta1: "Support Our Mission",
          cta2: "Discover Programs",
        },
        community: {
          title: "Building Character",
          subtitle: "Leadership & Values",
          description:
            "Shaping disciplined, confident, and culturally grounded young leaders.",
          stats: "{{count}}+ Youth Empowered",
          cta1: "Support Our Mission",
          cta2: "Discover Programs",
        },
      },
      badges: {
        nonProfit: "Non-Profit • Community Driven",
        pause: "Pause",
        play: "Play",
      },
    },

    // About page
    about: {
      hero: {
        badge: "Who We Are",
        title: "Building a Foundation for",
        titleHighlight: "Future Generations",
        description:
          "Indaro Organization is dedicated to creating a safe, nurturing environment where vulnerable children can thrive, learn, and dream.",
        cta1: "Discover Our Story",
        cta2: "Watch Our Impact",
        founded: "Founded",
        children: "Children",
        programs: "Programs",
      },
      mission: {
        title: "Our Mission",
        description:
          "To promote and protect the well-being of children in Rwanda—from those living on the streets to those escaping family conflict and extreme poverty—by providing shelter, education, and psychosocial support to restore their hope and dignity.",
        since: "Serving since 2018",
        impact: "Impact • 200+ children",
      },
      vision: {
        title: "Our Vision",
        description:
          'We envision a society where every child, regardless of their background, has a safe home ("Indaro"), access to quality education, and the opportunity to realize their full potential.',
        goal: "Creating lasting change",
        visionGoal: "Goal • Every child thrives",
      },
      programs: {
        traditional: {
          title: "Traditional Arts",
          description: "Dance, drumming, and cultural preservation",
          participants: "participants",
        },
        creative: {
          title: "Creative Arts",
          description: "Fashion design, painting, and crafts",
          participants: "participants",
        },
        education: {
          title: "Education Support",
          description: "School fees, materials, and tutoring",
          participants: "participants",
        },
        sports: {
          title: "Sports",
          description: "Boxing, skating, and athletics",
          participants: "participants",
        },
      },
      history: {
        badge: "Our Journey",
        title: "From a Crisis to a",
        titleHighlight: "Community",
        description:
          "The journey of Indaro Organization began on June 25, 2018, born from a desperate need to protect children living on the streets of Kigali.",
        timeline: {
          begin: {
            title: "The Beginning",
            description: "Founded with 10 children on June 25",
            details:
              "Started in a small community center with limited resources but unlimited hope.",
          },
          milestone: {
            title: "First Milestone",
            description: "Reached 50 children, opened first learning space",
            details:
              "Expanded from emergency shelter to include education programs.",
          },
          covid: {
            title: "COVID Response",
            description: "Became a lifeline during the pandemic",
            details:
              "Provided meals, remote learning, and emergency shelter when families needed it most.",
          },
          expansion: {
            title: "Expansion",
            description: "Reached 150+ beneficiaries, launched talent programs",
            details: "Added performing arts, sports, and vocational training.",
          },
          today: {
            title: "Today",
            description: "Supporting 200+ children with 10+ programs",
            details:
              "Recognized partner of local government and international organizations.",
          },
        },
        todayImpact: "Today's Impact",
        fromTo: "From 10 to 200+ children",
        totalChildren: "Total Children",
        girls: "Girls",
        boys: "Boys",
        totalPrograms: "Programs",
      },
      values: {
        badge: "Our Core Values",
        title: "Principles That Guide",
        titleHighlight: "Our Work",
        description:
          "These principles guide every decision we make and every action we take in service of our children.",
        integrity: {
          title: "Integrity",
          description:
            "We act with honesty and transparency in all our operations.",
          longDescription:
            "Every decision we make is guided by unwavering ethical standards. We believe transparency builds trust, and trust builds lasting change.",
          stats: "100% Transparency",
          achievements: ["Open Books Policy", "Annual Audits", "Donor Reports"],
        },
        compassion: {
          title: "Compassion",
          description:
            "We treat every child with kindness, empathy, and respect.",
          longDescription:
            "We see the potential in every child. Our approach is rooted in understanding their unique stories and walking alongside them.",
          stats: "200+ Children",
          achievements: [
            "Trauma-Informed Care",
            "Individual Support",
            "Family Reunification",
          ],
        },
        empowerment: {
          title: "Empowerment",
          description:
            "We equip youth with the skills to build their own futures.",
          longDescription:
            "True change comes from within. We provide tools, training, and opportunities for youth to become self-sufficient leaders.",
          stats: "120+ Talents",
          achievements: ["Skills Training", "Mentorship", "Job Placement"],
        },
        community: {
          title: "Community",
          description:
            "We believe in the power of working together for lasting change.",
          longDescription:
            "No one can do it alone. We build bridges between families, schools, and organizations to create sustainable support systems.",
          stats: "50+ Partners",
          achievements: [
            "Local Partnerships",
            "Volunteer Network",
            "Community Events",
          ],
        },
      },
      founder: {
        badge: "Meet Our Founder",
        name: "Cyubahiro Eric",
        role: "Founder & Legal Representative",
        quote:
          "When I saw children sleeping on the streets, I didn't just see their struggle; I saw my own reflection. I knew that 'Indaro'—a home—was not just a physical structure, but a fundamental human need.",
        description1:
          "Eric's journey began on the streets of Kigali, where he witnessed firsthand the struggles of vulnerable children. Today, he leads an organization that has transformed over 200 young lives.",
        description2:
          "With over a decade of experience in child protection and community development, Eric has built Indaro from a small initiative into a recognized organization partnering with local government and international allies.",
        yearsOfService: "Years of Service",
        childrenHelped: "Children Helped",
        teamMembers: "Team Members",
      },
      leadership: {
        badge: "Our Leadership",
        title: "Dedicated Team,",
        titleHighlight: "One Mission",
        description:
          "Meet the passionate individuals leading our mission to protect and empower vulnerable children.",
        team: {
          eric: {
            name: "CYUBAHIRO Eric",
            role: "Founder & President",
            bio: "Dedicated to child protection for over 10 years",
            fullBio:
              "Eric's journey began on the streets of Kigali, where he witnessed firsthand the struggles of vulnerable children. Today, he leads an organization that has transformed over 200 young lives.",
            specialty: "Child Protection & Advocacy",
            experience: "10+ years",
          },
          adeline: {
            name: "UMUGWANEZA Adeline",
            role: "Child Protection Officer",
            bio: "Clinical psychologist specializing in trauma recovery",
            fullBio:
              "With advanced training in trauma-informed care, Adeline has helped hundreds of children heal from psychological wounds and rebuild their confidence.",
            specialty: "Trauma Recovery & Counseling",
            experience: "8+ years",
          },
          hussein: {
            name: "HAKIZIMANA Hussein",
            role: "Talent Development Officer",
            bio: "Professional artist and youth mentor",
            fullBio:
              "A renowned performer himself, Hussein discovered that dance could be a powerful tool for healing and self-expression. He now trains the next generation of Rwandan artists.",
            specialty: "Performing Arts & Mentorship",
            experience: "12+ years",
          },
          issiac: {
            name: "NSENGIYUMVA Issiac",
            role: "Education Officer",
            bio: "Educator with 15+ years of experience",
            fullBio:
              "Issiac believes education is the great equalizer. He has developed innovative learning programs that have helped over 50 out-of-school children reintegrate into formal education.",
            specialty: "Educational Innovation",
            experience: "15+ years",
          },
        },
      },
      volunteers: {
        badge: "Dedicated Volunteers",
        title: "The Heartbeat of",
        titleHighlight: "Our Organization",
        description:
          "These incredible individuals dedicate their time and talents to nurture the next generation.",
        volunteers: {
          omar: {
            name: "HABINEZA Omar",
            role: "Teacher",
            specialty: "Mathematics & Sciences",
            passion: "Making math fun and accessible",
            years: "3 years",
          },
          adolphe: {
            name: "ISHIMWE Adolphe",
            role: "African Dance",
            specialty: "Traditional Choreography",
            passion: "Preserving Rwandan dance heritage",
            years: "5 years",
          },
          innocent: {
            name: "MBONIGABA Innocent",
            role: "Percussion Coach",
            specialty: "African Drums",
            passion: "Teaching rhythm as life skills",
            years: "4 years",
          },
          leonard: {
            name: "HABANABAKIZE Léonard",
            role: "Traditional Drumming",
            specialty: "Umutagara Master",
            passion: "Passing down ancestral knowledge",
            years: "7 years",
          },
          germain: {
            name: "IZERE Germain",
            role: "Teacher",
            specialty: "English & Literature",
            passion: "Opening worlds through reading",
            years: "2 years",
          },
        },
      },
      partners: {
        badge: "Our Trusted Partners",
        title: "Collaborating for",
        titleHighlight: "Greater Impact",
        description:
          "Together with our partners, we're building a brighter future for Rwanda's children.",
        partners: {
          giant: {
            name: "Giant of Africa",
            description: "Sports & Youth Development",
            since: "Since",
            impact: "50+ youth trained",
          },
          goskillz: {
            name: "GOSKILLZ",
            description: "Digital Skills Training",
            since: "Since",
            impact: "100+ youth certified",
          },
          kigali: {
            name: "Kigali City",
            description: "Government Partner",
            since: "Since",
            impact: "Policy advocacy",
          },
        },
      },
      stats: {
        founded: "Founded",
        childrenSupported: "Children Supported",
        activePrograms: "Active Programs",
        communityPartners: "Community Partners",
      },
      cta: {
        title: "Join Us in Making a Difference",
        description:
          "Be part of our journey to create safe homes and bright futures for every child in Rwanda.",
        button1: "Support Our Mission",
        button2: "Partner With Us",
        registered:
          "Registered Non-Profit Organization • Rwanda Governance Board",
      },
    },

    // Impact page
    impact: {
      title: "Our Impact in",
      titleHighlight: "Numbers",
      subtitle: "Every number represents a life changed through your support",
      stats: {
        children: {
          label: "Children Supported",
          description: "Through education, meals, and shelter",
        },
        talents: {
          label: "Talents Trained",
          description: "In dance, sports & creative arts",
        },
        students: {
          label: "Students in School",
          description: "School fees & materials covered",
        },
        programs: {
          label: "Active Programs",
          description: "From traditional arts to boxing",
        },
        years: {
          label: "Years of Impact",
          description: "Since 2021",
        },
      },
      button: "Support Our Mission",
    },

    // What We Do page
    whatWeDo: {
      acrobatics: "Acrobatics",
      africanDance: "African Dance & Percussion",
      afroDance: "Afro Dance, Breakdance & Modern Dance",
      boxing: "Boxing Program",
      educationSupport: "Education Support & School Reintegration Program",
      fashion: "Fashion & Creative Design",
      manners: "Good Manners & Diversity",
      skating: "Skating",
      traditionalDance: "Traditional Dance Program",
      drumming: "Traditional Drumming (Umutagara)",
      singing: "Singing",
    },

    // More section
    more: {
      impact: "Impact",
      gallery: "Gallery",
      projects: "Projects",
      news: "News",
    },

    // Buttons
    buttons: {
      donate: "Donate",
    },

    // Search
    search: {
      placeholder: "Search...",
    },
  },

  rw: {
    // Navigation
    nav: {
      home: "Ahabanza",
      about: "Ibitwerekeye",
      whatWeDo: "Ibyo Dukora",
      more: "Ibindi",
      impact: "Ingaruka",
      gallery: "Ibihangano",
      projects: "Imishinga",
      donate: "Tanga",
      contact: "Twandikire",
      viewAllPrograms: "Reba Gahunda Zose",
    },

    // Hero section slides
    hero: {
      slides: {
        traditional: {
          title: "Kubungabunga Umurage Ny'arwanda",
          subtitle: "Imbyino n'Ingoma Gakondo",
          description:
            "Gusubiza urubyiruko mu murage w'u Rwanda ukungahaye binyuze mu mutagara n'ingoma z'afurika.",
          stats: "Urubyiruko {{count}}+",
          cta1: "Dufashe mu Nshingano Zacu",
          cta2: "Reba Gahunda",
        },
        boxing: {
          title: "Imbaraga Binyuze mu Mikino",
          subtitle: "Iteramakofe n'Imyitwarire",
          description:
            "Kubaka ubushobozi, kwitonda, no kwizera binyuze mu myitozo y'iteramakofe y'abigize umwuga.",
          stats: "Abakinnyi {{count}}+",
          cta1: "Dufashe mu Nshingano Zacu",
          cta2: "Reba Gahunda",
        },
        education: {
          title: "Uburezi ku Bantu Bonse",
          subtitle: "Kongera Gusubiza mu Ishuri",
          description: "Gukuramo inzitizi mu burezi, umwana ku wundi.",
          stats: "Abana Bafashwe {{count}}+",
          cta1: "Dufashe mu Nshingano Zacu",
          cta2: "Reba Gahunda",
        },
        modern: {
          title: "Imyiyerekano Ya Kijyambere",
          subtitle: "Afro Dance n'Ubuhanzi",
          description:
            "Aho gakondo ihura n'ibishya mu mbyino za kijyambere no mu buryo bwo kudoda imideli.",
          stats: "Abakinnyi {{count}}+",
          cta1: "Dufashe mu Nshingano Zacu",
          cta2: "Reba Gahunda",
        },
        community: {
          title: "Kubaka Imyifatanye",
          subtitle: "Ubuyobozi n'Indangagaciro",
          description:
            "Kubaka urubyiruko rufite imyitwarire, kwizera, no gushinga imizi mu muco w'u Rwanda.",
          stats: "Urubyiruko {{count}}+",
          cta1: "Dufashe mu Nshingano Zacu",
          cta2: "Reba Gahunda",
        },
      },
      badges: {
        nonProfit: "Nta Nyungu • Iyobowe n'Abaturage",
        pause: "Hagarara",
        play: "Kina",
      },
    },

    // About page
    about: {
      hero: {
        badge: "Turinde",
        title: "Kubaka Urufatiro rwa",
        titleHighlight: "Ibisekuru Bizaza",
        description:
          "Indaro Organization yiyeguriye gukora ahantu hatekanye, aho abana bakene bashobora gutera imbere, kwiga, kandi kurota.",
        cta1: "Menya Inkuru Yacu",
        cta2: "Reba Ingaruka Zacu",
        founded: "Twashinzwe",
        children: "Abana",
        programs: "Gahunda",
      },
      mission: {
        title: "Intego Yacu",
        description:
          "Guteza imbere no kurinda umutekano w'abana mu Rwanda—kuva ku bana baba mu muhanda kugeza ku bahunze amakimbirane mu muryango n'ubukene bukabije—batanga uburezi, ubufasha, no kuganiriza mu mutwe kugira ngo bagarure ibyiringiro n'icyubahiro cyabo.",
        since: "Dukorera kuva 2018",
        impact: "Ingaruka • Abana 200+",
      },
      vision: {
        title: "Icyerekezo Cyacu",
        description:
          'Dukesha igihugu aho buri mwana, utitaye ku mibereho ye, agira urugo rutekanye ("Indaro"), uburezi bwiza, n\'amahirwe yo kugera ku nshingano ze.',
        goal: "Guhindura ubuzima burambye",
        visionGoal: "Intego • Buri mwana aratera imbere",
      },
      programs: {
        traditional: {
          title: "Umuco Gakondo",
          description: "Imbyino, ingoma, no kubungabunga umurage",
          participants: "abayitabira",
        },
        creative: {
          title: "Ubuhanzi",
          description: "Imideli, gucuruza, n'ibikorwa by'ubugeni",
          participants: "abayitabira",
        },
        education: {
          title: "Uburezi",
          description: "Amafaranga y'ishuri, ibikoresho, n'igisha",
          participants: "abayitabira",
        },
        sports: {
          title: "Imikino",
          description: "Iteramakofe, skating, na siporo",
          participants: "abayitabira",
        },
      },
      history: {
        badge: "Ingendo Yacu",
        title: "Kuva mu Ngorane Kugeza",
        titleHighlight: "Umuryango",
        description:
          "Ingendo ya Indaro Organization yatangiye ku ya 25 Kamena 2018, ivuka mu bukene bw'ibikorwa byo kurinda abana babaga mu muhanda wa Kigali.",
        timeline: {
          begin: {
            title: "Intangiriro",
            description: "Yashinzwe ifite abana 10 ku ya 25 Kamena",
            details:
              "Yatangiye mu kigo gito cy'abaturage ifite ibikoresho bike ariko ibyiringiro byinshi.",
          },
          milestone: {
            title: "Intambwe ya Mbere",
            description: "Yageze ku bana 50, yafunguye ahantu ho kwigira",
            details:
              "Yagutse kuva mu buhurire bw'ibyago kugeza mu gushyiraho gahunda z'uburezi.",
          },
          covid: {
            title: "Igisubizo cya COVID",
            description: "Yabaye inkomezabuzima mu gihe cy'icyorezo",
            details:
              "Yatanze ibiryo, amashuri ya kure, n'uburaro bw'ikiza igihe imiryango yari ibikeneye cyane.",
          },
          expansion: {
            title: "Kwaguka",
            description: "Yageze ku bana 150+, yatangije gahunda z'impano",
            details: "Yongeyeho imbyino, imikino, n'amahugurwa y'umwuga.",
          },
          today: {
            title: "Uyu Munsi",
            description: "Yubashye abana 200+ hamwe na gahunda 10+",
            details:
              "Yamenyekanye nk'ufatanya n'ubuyobozi bw'ibanze n'imiryango mpuzamahanga.",
          },
        },
        todayImpact: "Ingaruka za Uyu Munsi",
        fromTo: "Kuva ku bana 10 kugeza kuri 200+",
        totalChildren: "Abana Bose",
        girls: "Abakobwa",
        boys: "Abahungu",
        totalPrograms: "Gahunda",
      },
      values: {
        badge: "Indangagaciro Zacu",
        title: "Amahame Atuyobora",
        titleHighlight: "Mu Kazi Kacu",
        description:
          "Aya mahame atuyobora mu byemezo byose dufata no mu bikorwa byose dukora mu gufasha abana bacu.",
        integrity: {
          title: "Kunyurwa",
          description: "Dukora mu kuri no mu kwegukira mu bikorwa byacu byose.",
          longDescription:
            "Burcyemezo dufata kiyobowe n'amahame y'imyitwarire adahinduka. Twizera ko kwegukira bwubaka icyizere, kandi icyizere gishyiraho impinduka zirambye.",
          stats: "Kwegukira 100%",
          achievements: [
            "Politiki y'ibitabo bishingiye ku kuri",
            "Isuzuma rya buri mwaka",
            "Raporo z'abaterankunga",
          ],
        },
        compassion: {
          title: "Impuhwe",
          description: "Tugenzeka buri mwana neza, tumwumva, kandi tumwubaha.",
          longDescription:
            "Tubona ubushobozi muri buri mwana. Inzira yacu ishingiye ku gusobanukirwa inkuru zabo kugiti cyabo no kugendana na bo.",
          stats: "Abana 200+",
          achievements: [
            "Ubufasha bw'abahuye n'ihungabana",
            "Ubufasha bwihariye",
            "Guhuza imiryango",
          ],
        },
        empowerment: {
          title: "Gushoboza",
          description: "Duha urubyiruko ubumenyi bwo kubaka ejo hazabo bwite.",
          longDescription:
            "Impinduka nyakuri ituruka imbere. Duha ibikoresho, amahugurwa, n'amahirwe kugira ngo urubyiruko rubashe kugenzura ejo hazabo.",
          stats: "Impano 120+",
          achievements: [
            "Amahugurwa y'Ubumenyi",
            "Ubuyobozi",
            "Gushyira mu kazi",
          ],
        },
        community: {
          title: "Umuryango",
          description:
            "Twizera imbaraga zo gukorera hamwe mu guhindura ubuzima burambye.",
          longDescription:
            "Ntawe wabishobora wenyine. Dubaka umusaruro hagati y'imiryango, amashuri, n'imiryango kugira ngo dushyireho uburyo bwo gufasha burambye.",
          stats: "50+ Abafatanyabikorwa",
          achievements: [
            "Ubusabane n'abafatanyabikorwa",
            "Uruhare rw'abakorerabushake",
            "Ibikorwa by'umuryango",
          ],
        },
      },
      founder: {
        badge: "Menya Uwashinze",
        name: "Cyubahiro Eric",
        role: "Uwashinze & Uhagarariye Byemewe n'Itegeko",
        quote:
          "Iyo nabonaga abana baryamye mu muhanda, ntabwo nabonaga gusa ibibazo byabo; nabonaga ishusho yanjye. Nari nzi ko 'Indaro'—urugo—itari gusa inyubako, ahubwo ari ikennyero cy'ibanze cy'umuntu.",
        description1:
          "Ingendo ya Eric yatangiye mu muhanda wa Kigali, aho yiboneye ibibazo by'abana bakene. Uyu munsi, ayobora umuryango wahinduye ubuzima bw'abana barenga 200.",
        description2:
          "Afite uburambe burenze imyaka icumi mu kurinda abana no guteza imbere abaturage, Eric yubatse Indaro kuva ari igikorwa gito kugeza ikaba umuryango uzwi ufatanya n'ubuyobozi bw'ibanze n'inshuti mpuzamahanga.",
        yearsOfService: "Imyaka Y'ubukorerabushake",
        childrenHelped: "Abana Bafashwe",
        teamMembers: "Abakozi",
      },
      leadership: {
        badge: "Ubuyobozi Bwacu",
        title: "Itsinda Ryiyemeje,",
        titleHighlight: "Intego Imwe",
        description:
          "Menya abantu bakanguye bayobora inshingano yacu yo kurinda no gushoboza abana bakene.",
        team: {
          eric: {
            name: "CYUBAHIRO Eric",
            role: "Uwashinze na Perezida",
            bio: "Yiyemeje kurinda abana kuva imyaka 10+",
            fullBio:
              "Ingendo ya Eric yatangiye mu muhanda wa Kigali, aho yiboneye ibibazo by'abana bakene. Uyu munsi, ayobora umuryango wahinduye ubuzima bw'abana barenga 200.",
            specialty: "Kurinda Abana no Kubatabara",
            experience: "10+ imyaka",
          },
          adeline: {
            name: "UMUGWANEZA Adeline",
            role: "Ushinzwe Kurinda Abana",
            bio: "Umuhanga mu bya psychologist wiga kuvura ihungabana",
            fullBio:
              "Afite ubumenyi bw'ibanze mu kuvura abahuye n'ihungabana, Adeline yafashye amagana y'abana gukira mu mutwe no kongera kwizera.",
            specialty: "Kuvura Ihungabana no Kuganiriza",
            experience: "8+ imyaka",
          },
          hussein: {
            name: "HAKIZIMANA Hussein",
            role: "Ushinzwe Guteza Imbere Impano",
            bio: "Umuhanzi w'umwuga n'umutoza w'urubyiruko",
            fullBio:
              "Umwe mu bahanzi bazwi, Hussein yavumbuye ko imbyino zishobora kuba igikoresho gikomeye cyo gukiza no kwigaragaza. Ubu atoza urubyiruko rukurikira mu Rwanda.",
            specialty: "Ubuhanzi n'Ubuyobozi",
            experience: "12+ imyaka",
          },
          issiac: {
            name: "NSENGIYUMVA Issiac",
            role: "Ushinzwe Uburezi",
            bio: "Umwarimu ufite uburambe bw'imyaka 15+",
            fullBio:
              "Issiac yizera ko uburezi ariwo mwanzi w'ubusumbane. Yateje imbere gahunda z'uburezi zifasha abana barenga 50 bari baretse ishuri kongera kwiga.",
            specialty: "Ubuhanga mu Burezi",
            experience: "15+ imyaka",
          },
        },
      },
      volunteers: {
        badge: "Abakorerabushake Biyemeje",
        title: "Umutima w'",
        titleHighlight: "Umuryango Wacu",
        description:
          "Aba bantu bakomeye batanga igihe n'impano zabo kugira ngo bateze imbere urubyiruko rukurikira.",
        volunteers: {
          omar: {
            name: "HABINEZA Omar",
            role: "Umwarimu",
            specialty: "Imibare na Siyanse",
            passion: "Gutuma imibare ishishikaza kandi yumvikana",
            years: "imyaka 3",
          },
          adolphe: {
            name: "ISHIMWE Adolphe",
            role: "Imbyino Nyafurika",
            specialty: "Kororanya Gakondo",
            passion: "Kubungabunga umurage w'imbyino nyarwanda",
            years: "imyaka 5",
          },
          innocent: {
            name: "MBONIGABA Innocent",
            role: "Umutoza w'Ingoma",
            specialty: "Ingoma Nyafurika",
            passion: "Kwiga ingendo nk'ubumenyi bw'ubuzima",
            years: "imyaka 4",
          },
          leonard: {
            name: "HABANABAKIZE Léonard",
            role: "Umutoza w'Ingoma Gakondo",
            specialty: "Umutagara",
            passion: "Guhabura ubumenyi bw'abakurambere",
            years: "imyaka 7",
          },
          germain: {
            name: "IZERE Germain",
            role: "Umwarimu",
            specialty: "Icyongereza n'Ubuvanganzo",
            passion: "Gufungura isi binyuze mu gusoma",
            years: "imyaka 2",
          },
        },
      },
      partners: {
        badge: "Abafatanyabikorwa Bacu",
        title: "Dukorera Hamwe",
        titleHighlight: "Ingaruka Nini",
        description:
          "Hamwe n'abafatanyabikorwa bacu, tubaka ejo hazaza heza kubana b'u Rwanda.",
        partners: {
          giant: {
            name: "Giant of Africa",
            description: "Imikino n'Iterambere ry'Urubyiruko",
            since: "Kuva",
            impact: "Urubyiruko 50+ rwahuguwe",
          },
          goskillz: {
            name: "GOSKILLZ",
            description: "Amahugurwa y'Ubumenyi bwa Digitali",
            since: "Kuva",
            impact: "Urubyiruko 100+ rwabonye impamyabumenyi",
          },
          kigali: {
            name: "Umujyi wa Kigali",
            description: "Ufatanyabikorwa na Guverinoma",
            since: "Kuva",
            impact: "Kunganira politiki",
          },
        },
      },
      stats: {
        founded: "Twashinzwe",
        childrenSupported: "Abana Bafashwe",
        activePrograms: "Gahunda Zikorwa",
        communityPartners: "Abafatanyabikorwa",
      },
      cta: {
        title: "Ingira Uruhare mu Guhindura Ubuzima",
        description:
          "Ujye mu rugendo rwacu rwo gukora amazu atekanye n'ejo hazaza heza kuri buri mwana w'u Rwanda.",
        button1: "Dufashe mu Nshingano Zacu",
        button2: "Fatanya Natwe",
        registered: "Umuryango Utari Uwa Leta • Rwanda Governance Board",
      },
    },

    // Impact page
    impact: {
      title: "Ingaruka Zacu mu",
      titleHighlight: "Mibare",
      subtitle: "Buri mibare igaragaza ubuzima bwahinduwe n'ubufasha bwanyu",
      stats: {
        children: {
          label: "Abana Bafashwe",
          description: "Binyuze mu burezi, ibiryo n'uburaro",
        },
        talents: {
          label: "Impano Zatojwe",
          description: "Mu mbyino, imikino n'ubuhanzi",
        },
        students: {
          label: "Abanyeshuri bari mu Ishuri",
          description: "Amafaranga y'ishuri n'ibikoresho",
        },
        programs: {
          label: "Gahunda Zikorwa",
          description: "Kuva mu mbyino gakondo kugeza kuri boxing",
        },
        years: {
          label: "Imyaka Tumaze",
          description: "Kuva 2021",
        },
      },
      button: "Dufashe mu Nshingano Zacu",
    },

    // What We Do page
    whatWeDo: {
      acrobatics: "Akrobatike",
      africanDance: "Imbyino n'Ingoma",
      afroDance: "Afro Dance, Breakdance n'Imbyino Za Kijyambere",
      boxing: "Umukino W'iteramakofe",
      educationSupport: "Ubufasha mu Burezi no Gusubiza mu Ishuri",
      fashion: "Imideli n'Ibihimbano",
      manners: "Imyifatanye n'Ubwumvikane",
      skating: "Gutwara Siketi",
      traditionalDance: "Imbyino Gakondo",
      drumming: "Kubita Ingoma (Umutagara)",
      singing: "Kuririmba",
    },

    // More section
    more: {
      impact: "Ingaruka",
      gallery: "Ibihangano",
      projects: "Imishinga",
      news: "Amakuru",
    },

    // Buttons
    buttons: {
      donate: "Impano",
    },

    // Search
    search: {
      placeholder: "Shakisha...",
    },
  },

  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      whatWeDo: "Ce Que Nous Faisons",
      more: "Plus",
      impact: "Impact",
      gallery: "Galerie",
      projects: "Projets",
      donate: "Faire un don",
      contact: "Contact",
      viewAllPrograms: "Voir Tous les Programmes",
    },

    // Hero section slides
    hero: {
      slides: {
        traditional: {
          title: "Préserver le Patrimoine Rwandais",
          subtitle: "Danse Traditionnelle et Tambour",
          description:
            "Reconnecter les jeunes avec le riche héritage culturel du Rwanda à travers l'Umutagara et les percussions africaines.",
          stats: "{{count}}+ Jeunes Danseurs",
          cta1: "Soutenir Notre Mission",
          cta2: "Découvrir les Programmes",
        },
        boxing: {
          title: "La Force par le Sport",
          subtitle: "Boxe et Discipline",
          description:
            "Développer la résilience, la concentration et la confiance grâce à un entraînement professionnel de boxe.",
          stats: "{{count}}+ Athlètes",
          cta1: "Soutenir Notre Mission",
          cta2: "Découvrir les Programmes",
        },
        education: {
          title: "L'Éducation pour Tous",
          subtitle: "Réinsertion Scolaire",
          description:
            "Éliminer les barrières à l'éducation, un enfant à la fois.",
          stats: "{{count}}+ Enfants Soutenus",
          cta1: "Soutenir Notre Mission",
          cta2: "Découvrir les Programmes",
        },
        modern: {
          title: "Expression Contemporaine",
          subtitle: "Afro Dance et Arts Créatifs",
          description:
            "Là où la tradition rencontre l'innovation dans la danse moderne et le design de mode.",
          stats: "{{count}}+ Artistes",
          cta1: "Soutenir Notre Mission",
          cta2: "Découvrir les Programmes",
        },
        community: {
          title: "Développement du Caractère",
          subtitle: "Leadership et Valeurs",
          description:
            "Former des jeunes leaders disciplinés, confiants et ancrés dans leur culture.",
          stats: "{{count}}+ Jeunes Autonomisés",
          cta1: "Soutenir Notre Mission",
          cta2: "Découvrir les Programmes",
        },
      },
      badges: {
        nonProfit: "Organisme à But Non Lucratif • Axé sur la Communauté",
        pause: "Pause",
        play: "Lecture",
      },
    },

    // About page
    about: {
      hero: {
        badge: "Qui Nous Sommes",
        title: "Bâtir une Fondation pour",
        titleHighlight: "Les Générations Futures",
        description:
          "Indaro Organization est dédiée à créer un environnement sûr et nourricier où les enfants vulnérables peuvent s'épanouir, apprendre et rêver.",
        cta1: "Découvrir Notre Histoire",
        cta2: "Voir Notre Impact",
        founded: "Fondé",
        children: "Enfants",
        programs: "Programmes",
      },
      mission: {
        title: "Notre Mission",
        description:
          "Promouvoir et protéger le bien-être des enfants au Rwanda—de ceux vivant dans la rue à ceux fuyant les conflits familiaux et l'extrême pauvreté—en fournissant un abri, une éducation et un soutien psychosocial pour restaurer leur espoir et leur dignité.",
        since: "Servir depuis 2018",
        impact: "Impact • 200+ enfants",
      },
      vision: {
        title: "Notre Vision",
        description:
          'Nous envisionnons une société où chaque enfant, quel que soit son origine, a un foyer sûr ("Indaro"), un accès à une éducation de qualité, et l\'opportunité de réaliser son plein potentiel.',
        goal: "Créer un changement durable",
        visionGoal: "Objectif • Chaque enfant s'épanouit",
      },
      programs: {
        traditional: {
          title: "Arts Traditionnels",
          description: "Danse, tambour et préservation culturelle",
          participants: "participants",
        },
        creative: {
          title: "Arts Créatifs",
          description: "Mode, peinture et artisanat",
          participants: "participants",
        },
        education: {
          title: "Soutien Scolaire",
          description: "Frais scolaires, matériel et tutorat",
          participants: "participants",
        },
        sports: {
          title: "Sports",
          description: "Boxe, patinage et athlétisme",
          participants: "participants",
        },
      },
      history: {
        badge: "Notre Parcours",
        title: "D'une Crise à une",
        titleHighlight: "Communauté",
        description:
          "Le parcours d'Indaro Organization a commencé le 25 juin 2018, né d'un besoin désespéré de protéger les enfants vivant dans les rues de Kigali.",
        timeline: {
          begin: {
            title: "Le Commencement",
            description: "Fondé avec 10 enfants le 25 juin",
            details:
              "A commencé dans un petit centre communautaire avec des ressources limitées mais un espoir illimité.",
          },
          milestone: {
            title: "Premier Jalon",
            description:
              "Atteint 50 enfants, ouvert le premier espace d'apprentissage",
            details:
              "Élargi de l'abri d'urgence à l'inclusion de programmes éducatifs.",
          },
          covid: {
            title: "Réponse COVID",
            description: "Devenu une bouée de sauvetage pendant la pandémie",
            details:
              "A fourni des repas, l'apprentissage à distance et un abri d'urgence lorsque les familles en avaient le plus besoin.",
          },
          expansion: {
            title: "Expansion",
            description:
              "Atteint 150+ bénéficiaires, lancé des programmes de talents",
            details:
              "Ajouté les arts du spectacle, les sports et la formation professionnelle.",
          },
          today: {
            title: "Aujourd'hui",
            description: "Soutient 200+ enfants avec 10+ programmes",
            details:
              "Partenaire reconnu du gouvernement local et des organisations internationales.",
          },
        },
        todayImpact: "Impact Aujourd'hui",
        fromTo: "De 10 à 200+ enfants",
        totalChildren: "Total Enfants",
        girls: "Filles",
        boys: "Garçons",
        totalPrograms: "Programmes",
      },
      values: {
        badge: "Nos Valeurs Fondamentales",
        title: "Principes Qui Guident",
        titleHighlight: "Notre Travail",
        description:
          "Ces principes guident chaque décision que nous prenons et chaque action que nous entreprenons au service de nos enfants.",
        integrity: {
          title: "Intégrité",
          description:
            "Nous agissons avec honnêteté et transparence dans toutes nos opérations.",
          longDescription:
            "Chaque décision que nous prenons est guidée par des normes éthiques inébranlables. Nous croyons que la transparence construit la confiance, et la confiance construit un changement durable.",
          stats: "100% Transparence",
          achievements: [
            "Politique de Livres Ouverts",
            "Audits Annuels",
            "Rapports aux Donateurs",
          ],
        },
        compassion: {
          title: "Compassion",
          description:
            "Nous traitons chaque enfant avec bienveillance, empathie et respect.",
          longDescription:
            "Nous voyons le potentiel de chaque enfant. Notre approche est ancrée dans la compréhension de leurs histoires uniques et dans l'accompagnement.",
          stats: "200+ Enfants",
          achievements: [
            "Soins Sensibles aux Traumatismes",
            "Soutien Individuel",
            "Réunification Familiale",
          ],
        },
        empowerment: {
          title: "Autonomisation",
          description:
            "Nous équipons les jeunes des compétences nécessaires pour construire leur propre avenir.",
          longDescription:
            "Le vrai changement vient de l'intérieur. Nous fournissons des outils, des formations et des opportunités pour que les jeunes deviennent des leaders autonomes.",
          stats: "120+ Talents",
          achievements: [
            "Formation aux Compétences",
            "Mentorat",
            "Placement Professionnel",
          ],
        },
        community: {
          title: "Communauté",
          description:
            "Nous croyons au pouvoir de travailler ensemble pour un changement durable.",
          longDescription:
            "Personne ne peut le faire seul. Nous construisons des ponts entre les familles, les écoles et les organisations pour créer des systèmes de soutien durables.",
          stats: "50+ Partenaires",
          achievements: [
            "Partenariats Locaux",
            "Réseau de Bénévoles",
            "Événements Communautaires",
          ],
        },
      },
      founder: {
        badge: "Rencontrez Notre Fondateur",
        name: "Cyubahiro Eric",
        role: "Fondateur & Représentant Légal",
        quote:
          "Quand j'ai vu des enfants dormir dans la rue, je n'ai pas seulement vu leur lutte ; j'ai vu mon propre reflet. Je savais qu' 'Indaro' — un foyer — n'était pas seulement une structure physique, mais un besoin humain fondamental.",
        description1:
          "Le parcours d'Eric a commencé dans les rues de Kigali, où il a été témoin direct des difficultés des enfants vulnérables. Aujourd'hui, il dirige une organisation qui a transformé la vie de plus de 200 jeunes.",
        description2:
          "Avec plus d'une décennie d'expérience dans la protection de l'enfance et le développement communautaire, Eric a construit Indaro depuis une petite initiative jusqu'à une organisation reconnue partenant avec le gouvernement local et des alliés internationaux.",
        yearsOfService: "Années de Service",
        childrenHelped: "Enfants Aidés",
        teamMembers: "Membres de l'Équipe",
      },
      leadership: {
        badge: "Notre Leadership",
        title: "Équipe Dévouée,",
        titleHighlight: "Une Mission",
        description:
          "Rencontrez les personnes passionnées qui dirigent notre mission de protéger et d'autonomiser les enfants vulnérables.",
        team: {
          eric: {
            name: "CYUBAHIRO Eric",
            role: "Fondateur & Président",
            bio: "Dévoué à la protection de l'enfance depuis plus de 10 ans",
            fullBio:
              "Le parcours d'Eric a commencé dans les rues de Kigali, où il a été témoin direct des difficultés des enfants vulnérables. Aujourd'hui, il dirige une organisation qui a transformé la vie de plus de 200 jeunes.",
            specialty: "Protection de l'Enfance & Plaidoyer",
            experience: "10+ ans",
          },
          adeline: {
            name: "UMUGWANEZA Adeline",
            role: "Responsable de la Protection de l'Enfance",
            bio: "Psychologue clinicienne spécialisée dans le rétablissement des traumatismes",
            fullBio:
              "Avec une formation avancée en soins tenant compte des traumatismes, Adeline a aidé des centaines d'enfants à guérir de blessures psychologiques et à retrouver confiance.",
            specialty: "Rétablissement des Traumatismes & Counseling",
            experience: "8+ ans",
          },
          hussein: {
            name: "HAKIZIMANA Hussein",
            role: "Responsable du Développement des Talents",
            bio: "Artiste professionnel et mentor de jeunes",
            fullBio:
              "Artiste renommé lui-même, Hussein a découvert que la danse pouvait être un outil puissant de guérison et d'expression de soi. Il forme maintenant la prochaine génération d'artistes rwandais.",
            specialty: "Arts du Spectacle & Mentorat",
            experience: "12+ ans",
          },
          issiac: {
            name: "NSENGIYUMVA Issiac",
            role: "Responsable de l'Éducation",
            bio: "Éducateur avec plus de 15 ans d'expérience",
            fullBio:
              "Issiac croit que l'éducation est le grand égalisateur. Il a développé des programmes d'apprentissage innovants qui ont aidé plus de 50 enfants déscolarisés à se réintégrer dans l'éducation formelle.",
            specialty: "Innovation Éducative",
            experience: "15+ ans",
          },
        },
      },
      volunteers: {
        badge: "Bénévoles Dévoués",
        title: "Le Cœur de",
        titleHighlight: "Notre Organisation",
        description:
          "Ces personnes incroyables consacrent leur temps et leurs talents à nourrir la prochaine génération.",
        volunteers: {
          omar: {
            name: "HABINEZA Omar",
            role: "Enseignant",
            specialty: "Mathématiques & Sciences",
            passion: "Rendre les mathématiques amusantes et accessibles",
            years: "3 ans",
          },
          adolphe: {
            name: "ISHIMWE Adolphe",
            role: "Danse Africaine",
            specialty: "Chorégraphie Traditionnelle",
            passion: "Préserver le patrimoine de la danse rwandaise",
            years: "5 ans",
          },
          innocent: {
            name: "MBONIGABA Innocent",
            role: "Coach de Percussion",
            specialty: "Tambours Africains",
            passion: "Enseigner le rythme comme compétence de vie",
            years: "4 ans",
          },
          leonard: {
            name: "HABANABAKIZE Léonard",
            role: "Tambour Traditionnel",
            specialty: "Maître Umutagara",
            passion: "Transmettre les connaissances ancestrales",
            years: "7 ans",
          },
          germain: {
            name: "IZERE Germain",
            role: "Enseignant",
            specialty: "Anglais & Littérature",
            passion: "Ouvrir des mondes par la lecture",
            years: "2 ans",
          },
        },
      },
      partners: {
        badge: "Nos Partenaires de Confiance",
        title: "Collaborer pour",
        titleHighlight: "Un Plus Grand Impact",
        description:
          "Avec nos partenaires, nous construisons un avenir meilleur pour les enfants du Rwanda.",
        partners: {
          giant: {
            name: "Giant of Africa",
            description: "Sports & Développement des Jeunes",
            since: "Depuis",
            impact: "50+ jeunes formés",
          },
          goskillz: {
            name: "GOSKILLZ",
            description: "Formation aux Compétences Numériques",
            since: "Depuis",
            impact: "100+ jeunes certifiés",
          },
          kigali: {
            name: "Ville de Kigali",
            description: "Partenaire Gouvernemental",
            since: "Depuis",
            impact: "Plaidoyer politique",
          },
        },
      },
      stats: {
        founded: "Fondé",
        childrenSupported: "Enfants Soutenus",
        activePrograms: "Programmes Actifs",
        communityPartners: "Partenaires Communautaires",
      },
      cta: {
        title: "Rejoignez-Nous pour Faire la Différence",
        description:
          "Faites partie de notre voyage pour créer des foyers sûrs et un avenir brillant pour chaque enfant au Rwanda.",
        button1: "Soutenir Notre Mission",
        button2: "Partenariat Avec Nous",
        registered:
          "Organisme à But Non Lucratif Enregistré • Rwanda Governance Board",
      },
    },

    // Impact page
    impact: {
      title: "Notre Impact en",
      titleHighlight: "Chiffres",
      subtitle:
        "Chaque chiffre représente une vie transformée grâce à votre soutien",
      stats: {
        children: {
          label: "Enfants Soutenus",
          description: "À travers l'éducation, les repas et l'hébergement",
        },
        talents: {
          label: "Talents Formés",
          description: "En danse, sports et arts créatifs",
        },
        students: {
          label: "Étudiants à l'École",
          description: "Frais scolaires et matériel couverts",
        },
        programs: {
          label: "Programmes Actifs",
          description: "Des arts traditionnels à la boxe",
        },
        years: {
          label: "Années d'Impact",
          description: "Depuis 2021",
        },
      },
      button: "Soutenir Notre Mission",
    },

    // What We Do page
    whatWeDo: {
      acrobatics: "Acrobatie",
      africanDance: "Danse Africaine et Percussion",
      afroDance: "Afro Dance, Breakdance et Danse Moderne",
      boxing: "Programme de Boxe",
      educationSupport: "Soutien Scolaire et Réinsertion Scolaire",
      fashion: "Mode et Design Créatif",
      manners: "Bonnes Manières et Diversité",
      skating: "Patinage",
      traditionalDance: "Programme de Danse Traditionnelle",
      drumming: "Tambour Traditionnel (Umutagara)",
      singing: "Chant",
    },

    // More section
    more: {
      impact: "Impact",
      gallery: "Galerie",
      projects: "Projets",
      news: "Actualités",
    },

    // Buttons
    buttons: {
      donate: "Faire un don",
    },

    // Search
    search: {
      placeholder: "Rechercher...",
    },
  },
};

// Combine all translations with program-specific translations
const resources = {
  en: {
    translation: {
      ...commonTranslations.en,
      impact: impactTranslations.en,
      gallery: galleryTranslations.en,
      projects: projectsTranslations.en,
      news: newsTranslations.en,
      contact: contactTranslations.en,
      donate: donateTranslations.en,
      footer: footerTranslations.en,
      programs: {
        boxing: tigersBoxingTranslations.en,
        // Add other program translations here as they become available
      },
    },
  },
  rw: {
    translation: {
      ...commonTranslations.rw,
      impact: impactTranslations.rw,
      gallery: galleryTranslations.rw,
      projects: projectsTranslations.rw,
      news: newsTranslations.rw,
      contact: contactTranslations.rw,
      donate: donateTranslations.rw,
      footer: footerTranslations.rw,

      programs: {
        boxing: tigersBoxingTranslations.rw,
        // Add other program translations here as they become available
      },
    },
  },
  fr: {
    translation: {
      ...commonTranslations.fr,
      impact: impactTranslations.fr,
      gallery: galleryTranslations.fr,
      projects: projectsTranslations.fr,
      news: newsTranslations.fr,
      contact: contactTranslations.fr,
      donate: donateTranslations.fr,
      footer: footerTranslations.fr,

      programs: {
        boxing: tigersBoxingTranslations.fr,
        // Add other program translations here as they become available
      },
    },
  },
};

// Initialize i18n
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: import.meta.env.MODE === "development",

    interpolation: {
      escapeValue: false, // React already safes from XSS
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    // Organization names stay in English - NEVER translated
    // This is handled automatically as we don't translate proper nouns
  });

export default i18n;
