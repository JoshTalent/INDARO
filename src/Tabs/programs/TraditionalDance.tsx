import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// Traditional Dance Program data - Following Tigers data structure
const traditionalDanceProgram = {
  id: "traditional-dance",
  title: "Traditional Dance Program",
  icon: "💃",
  color: "from-blue-600 to-blue-800",
  image: "https://i.postimg.cc/9FXQgTxC/youth.jpg",
  logo: "https://i.postimg.cc/9FXQgTxC/youth.jpg",
  motto: "Preserving Heritage, Dancing Our Stories",
  gallery: [
    "https://images.unsplash.com/photo-1547156979-0a1f8b44b5a1?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520467546806-e7d318c4c6a7?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545224144-b3806a7c44fe?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?w=800&auto=format&fit=crop",
  ],
  description:
    "Where rhythm meets tradition, and every step tells a story of our ancestors.",
  longDescription:
    "The Traditional Dance Program at Indaro Foundation is a vibrant celebration of Rwandan cultural heritage. Through the graceful movements of Intore dancers, the powerful rhythms of traditional drums, and the colorful expressions of our ancestral stories, we connect young people with their roots while building confidence, discipline, and cultural pride.",

  leader: {
    name: "Mukamana Beatrice",
    title: "Master Choreographer & Cultural Guardian",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop",
    experience: "25+ years",
    catchphrase: "In every dance move, our ancestors live on.",
  },

  stats: {
    totalMembers: 140,
    activeDancers: 124,
    femaleDancers: 82,
    medalsWon: 12,
    performances: 45,
    yearsRunning: 9,
  },

  schedule: [
    {
      day: "Monday",
      time: "4:00 PM - 5:30 PM",
      class: "Beginners - Intore Foundation",
    },
    {
      day: "Tuesday",
      time: "4:00 PM - 6:00 PM",
      class: "Intermediate - Traditional Rhythms",
    },
    {
      day: "Wednesday",
      time: "4:00 PM - 5:30 PM",
      class: "Children's Cultural Group (Ages 7-12)",
    },
    {
      day: "Thursday",
      time: "5:00 PM - 7:00 PM",
      class: "Advanced Ensemble - Performance Team",
    },
    {
      day: "Friday",
      time: "4:00 PM - 6:00 PM",
      class: "Traditional Drumming Integration",
    },
    {
      day: "Saturday",
      time: "9:00 AM - 12:00 PM",
      class: "Cultural Workshop & Rehearsal",
    },
  ],

  classLevels: [
    {
      name: "Intore Dance",
      age: "Advanced (Ages 15+)",
      description:
        "The iconic royal dance with graceful jumps and elegant movements",
    },
    {
      name: "Amaraba",
      age: "Intermediate (Ages 12+)",
      description: "Joyful harvest dance celebrating community unity",
    },
    {
      name: "Umushayayo",
      age: "Intermediate (Ages 12+)",
      description: "Graceful women's dance emphasizing beauty and poise",
    },
    {
      name: "Ikinyemera",
      age: "Advanced (Ages 15+)",
      description: "Powerful warrior dance showcasing strength and courage",
    },
  ],

  achievements: [
    {
      year: "2024",
      items: [
        "🏆 Best Cultural Preservation Program - Rwanda Arts Council",
        "🎭 12 new Intore dancers graduated to professional level",
        "🌍 Represented Rwanda at 3 international cultural festivals",
        "📚 Published traditional dance documentation book",
      ],
    },
    {
      year: "2023",
      items: [
        "🥇 Gold Medal - East African Cultural Competition",
        "🎓 5 dancers received cultural ambassador scholarships",
        "🤝 Partnership with National Museum of Rwanda",
        "📺 Featured on Rwanda Broadcasting Agency cultural series",
      ],
    },
    {
      year: "2022",
      items: [
        "🏅 Presidential Award for Cultural Preservation",
        "🎪 Established first youth cultural ensemble",
        "🌱 Trained 45 new dance instructors",
      ],
    },
  ],

  membershipOptions: [
    {
      type: "trial",
      price: "Free",
      duration: "oneSession",
    },
    {
      type: "monthly",
      price: "5,000 RWF",
      duration: "thirtyDays",
    },
    {
      type: "annual",
      price: "50,000 RWF",
      duration: "twelveMonths",
    },
  ],

  testimonials: [
    {
      name: "Uwase Clarisse",
      age: "19",
      quote:
        "Traditional dance taught me who I am. Every movement connects me to my ancestors.",
      achievement: "Professional Intore Dancer",
    },
    {
      name: "Habimana Eric",
      age: "22",
      quote:
        "Through this program, I've performed in 5 countries and shared Rwandan culture with the world.",
      achievement: "International Performer",
    },
    {
      name: "Mukandayisenga Jeanne",
      age: "35",
      quote:
        "My daughter has grown so confident. She's learning discipline, respect, and our traditions.",
      achievement: "Parent of 2 dancers",
    },
    {
      name: "Nsengimana Jean",
      age: "24",
      quote:
        "Dancing Intore makes me proud to be Rwandan. I carry our history in every step.",
      achievement: "Lead Dancer",
    },
  ],

  equipment: [
    "Comfortable practice clothing",
    "Traditional costume (provided for performances)",
    "Bare feet or soft dance shoes",
    "Water bottle",
    "Respect for cultural traditions",
  ],

  faqs: [
    {
      q: "Do I need dance experience?",
      a: "No experience needed! We welcome beginners and teach traditional techniques from the ground up.",
    },
    {
      q: "What is Intore dance?",
      a: "Intore is the royal dance of Rwanda, characterized by graceful jumps and elegant arm movements, originally performed by the king's dancers.",
    },
    {
      q: "Do you perform at events?",
      a: "Yes! Our ensembles perform at cultural events, festivals, ceremonies, and private functions throughout the year.",
    },
    {
      q: "Can adults join?",
      a: "Absolutely! We have classes for children, youth, and adults. Traditional dance is for everyone.",
    },
  ],

  // Additional simplified data
  danceStyles: [
    { name: "Intore Dance", difficulty: "Advanced" },
    { name: "Amaraba", difficulty: "Intermediate" },
    { name: "Umushayayo", difficulty: "Intermediate" },
    { name: "Ikinyemera", difficulty: "Advanced" },
  ],

  workshops: [
    { name: "Traditional Attire Making", duration: "8 weeks" },
    { name: "Drum Making & Rhythms", duration: "6 weeks" },
    { name: "Cultural History", duration: "4 weeks" },
  ],

  performances: [
    { event: "Kwita Izina 2024", venue: "Kinigi" },
    { event: "East African Festival", venue: "Arusha" },
    { event: "Umuganura 2023", venue: "Parliament" },
  ],
};

// Fixed Support CTA Component - Following Tigers pattern exactly
const FixedSupportCTA = ({ program }: { program: typeof traditionalDanceProgram }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <motion.div
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <AnimatePresence mode="wait">
        {!isMinimized ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl overflow-hidden w-80"
          >
            <div className="p-6 text-white">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💃</span>
                  <h3 className="font-bold">Support Traditional Dance</h3>
                </div>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-white/80 hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-sm text-blue-100 mb-4">
                Help preserve Rwanda's cultural heritage by supporting our young
                dancers with costumes, instruments, and performance
                opportunities.
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Active dancers:</span>
                  <span className="font-bold">
                    {program.stats.totalMembers}+
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Performances:</span>
                  <span className="font-bold">
                    {program.stats.performances}+
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Awards won:</span>
                  <span className="font-bold">{program.stats.medalsWon}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/donate"
                  className="bg-white text-blue-600 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors text-center"
                >
                  Donate Now
                </Link>
                <Link
                  to="/contact"
                  className="border border-white text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors text-center"
                >
                  Contact
                </Link>
              </div>

              <button className="w-full mt-3 text-xs text-blue-100 hover:text-white transition-colors">
                Become a monthly supporter →
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="minimized"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsMinimized(false)}
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <span className="text-2xl">💃</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main Traditional Dance Program Page Component - Following Tigers design exactly
const TraditionalDanceDetailPage = () => {
  const program = traditionalDanceProgram;

  return (
    <div className="min-h-screen bg-white relative">
      {/* Fixed Support CTA */}
      <FixedSupportCTA program={program} />

      {/* Hero Section with Main Image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Main Background Image */}
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay with Blue Theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-gray-900/80" />

        {/* Back Button */}
        <Link
          to="/what-we-do"
          className="absolute top-6 left-6 z-20 bg-white/95 hover:bg-white text-gray-800 px-5 py-2.5 rounded-full font-medium flex items-center shadow-xl backdrop-blur-sm transition-all group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to All Programs
        </Link>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl filter drop-shadow-lg">
                  {program.icon}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight">
                {program.title}
              </h1>

              <p className="text-xl md:text-2xl text-blue-300 font-semibold mb-4 italic">
                "{program.motto}"
              </p>

              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
                {program.description}
              </p>

              {/* Quick Stats Row - Compact */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-blue-400/30">
                  <div className="text-2xl font-bold text-white">
                    {program.stats.totalMembers}
                  </div>
                  <div className="text-blue-300 text-xs">Total Dancers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-blue-400/30">
                  <div className="text-2xl font-bold text-white">
                    {program.stats.performances}
                  </div>
                  <div className="text-blue-300 text-xs">Performances</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-blue-400/30">
                  <div className="text-2xl font-bold text-white">
                    {program.stats.yearsRunning}
                  </div>
                  <div className="text-blue-300 text-xs">Years Preserving</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black-60 to-transparent" />
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Image Gallery - 8 images */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-blue-600 w-2 h-8 rounded-full mr-4"></span>
            Program Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {program.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Traditional Dance ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Two Column Layout - Compact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section - Compact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💃</span>
                About the Program
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {program.longDescription}
              </p>
            </motion.section>

            {/* Cultural Leader - Compact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100"
            >
              <div className="flex items-center gap-4">
                <img
                  src={program.leader.image}
                  alt={program.leader.name}
                  className="w-20 h-20 rounded-full object-cover border-3 border-blue-400"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {program.leader.name}
                  </h3>
                  <p className="text-blue-600 text-sm">
                    {program.leader.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 italic">
                    "{program.leader.catchphrase}"
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Dance Styles - Quick Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💃</span>
                Traditional Dance Styles
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {program.danceStyles.map((style, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3">
                    <h3 className="font-bold text-gray-900 text-sm">
                      {style.name}
                    </h3>
                    <p className="text-xs text-blue-600 mt-1">
                      Difficulty: {style.difficulty}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Achievements - Compact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Achievements
              </h2>
              <div className="space-y-4">
                {program.achievements.slice(0, 2).map((year, idx) => (
                  <div key={idx}>
                    <h3 className="text-md font-bold text-blue-200 mb-2">
                      {year.year}
                    </h3>
                    <ul className="space-y-1 text-sm">
                      {year.items.slice(0, 3).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials - Compact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Dancer Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.testimonials.slice(0, 2).map((test, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-600 text-sm italic mb-2">
                      "{test.quote}"
                    </p>
                    <p className="font-bold text-gray-900 text-sm">
                      - {test.name}, {test.age}
                    </p>
                    <p className="text-blue-600 text-xs">{test.achievement}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Equipment & FAQ - Combined section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">
                    What to Bring
                  </h3>
                  <ul className="space-y-1">
                    {program.equipment.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">
                    Common Questions
                  </h3>
                  <div className="space-y-2">
                    {program.faqs.slice(0, 3).map((faq, index) => (
                      <div key={index} className="text-sm">
                        <p className="font-medium text-gray-900">Q: {faq.q}</p>
                        <p className="text-gray-600 text-xs ml-2">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Dance Classes */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Dance Classes
              </h2>
              <div className="space-y-3">
                {program.classLevels.map((level, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-100 pb-2 last:border-0"
                  >
                    <h3 className="font-bold text-gray-900 text-sm">
                      {level.name}
                    </h3>
                    <p className="text-xs text-blue-600">{level.age}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {level.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Schedule - Compact */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Weekly Schedule
              </h2>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {program.schedule.slice(0, 6).map((session, index) => (
                  <div
                    key={index}
                    className="text-sm border-b border-gray-100 pb-1"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">
                        {session.day}
                      </span>
                      <span className="text-xs text-gray-500">
                        {session.time}
                      </span>
                    </div>
                    <p className="text-xs text-blue-600">{session.class}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Workshops */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Cultural Workshops
              </h2>
              <div className="space-y-2">
                {program.workshops.map((workshop, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-medium text-gray-900">
                      {workshop.name}
                    </span>
                    <p className="text-xs text-gray-500">{workshop.duration}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Performances */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Major Performances
              </h2>
              <div className="space-y-2">
                {program.performances.map((perf, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-medium text-gray-900">
                      {perf.event}
                    </span>
                    <p className="text-xs text-gray-500">{perf.venue}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Membership - Compact */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white"
            >
              <h2 className="text-lg font-bold mb-3">Membership</h2>
              <div className="space-y-2">
                {program.membershipOptions.map((option, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="capitalize">{option.type}</span>
                    <span className="text-blue-200 font-bold">
                      {option.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* Impact Stats - Compact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Cultural Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.totalMembers}+
              </div>
              <div className="text-xs text-blue-200">Total Dancers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.femaleDancers}
              </div>
              <div className="text-xs text-blue-200">Female Dancers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.performances}
              </div>
              <div className="text-xs text-blue-200">Performances</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.yearsRunning}
              </div>
              <div className="text-xs text-blue-200">Years Preserving</div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Join Our Cultural Journey
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Learn traditional dance, connect with your heritage, and become part
            of Rwanda's living culture.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/visit"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md text-sm"
            >
              Visit Us
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600 text-sm"
            >
              Join a Class
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TraditionalDanceDetailPage;
