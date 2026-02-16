import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// Singing Program data - Following Tigers data structure
const singingProgram = {
  id: "singing",
  title: "Singing Program",
  icon: "🎤",
  color: "from-blue-600 to-blue-800",
  image:
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop",
  logo: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop",
  motto: "Find Your Voice, Share Your Story",
  gallery: [
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=800&auto=format&fit=crop",
  ],
  description:
    "Where voices are discovered, nurtured, and celebrated through the power of music.",
  longDescription:
    "The Singing Program at Indaro Foundation develops vocal talent through comprehensive training, performance opportunities, and artistic expression. From choir harmonies to solo artistry, we help young singers find their unique voice, build confidence, and share their stories through song.",

  leader: {
    name: "Mukamisha Ange",
    title: "Vocal Coach & Choir Director",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop",
    experience: "10+ years",
    catchphrase: "Every voice has a story. Let's help the world hear yours.",
  },

  stats: {
    totalMembers: 62,
    activeVocalists: 52,
    femaleVocalists: 34,
    medalsWon: 8,
    performances: 41,
    yearsRunning: 5,
  },

  schedule: [
    {
      day: "Monday",
      time: "4:00 PM - 6:00 PM",
      class: "Indaro Choir Practice",
    },
    {
      day: "Tuesday",
      time: "4:00 PM - 5:30 PM",
      class: "Vocal Technique - Beginners",
    },
    {
      day: "Wednesday",
      time: "4:00 PM - 6:00 PM",
      class: "Youth Voices Ensemble",
    },
    {
      day: "Thursday",
      time: "4:00 PM - 5:30 PM",
      class: "Vocal Technique - Intermediate",
    },
    {
      day: "Friday",
      time: "3:00 PM - 5:00 PM",
      class: "Solo Artist Training",
    },
    {
      day: "Saturday",
      time: "10:00 AM - 12:00 PM",
      class: "All Groups Combined Rehearsal",
    },
  ],

  classLevels: [
    {
      name: "Indaro Choir",
      age: "Ages 15+",
      description:
        "Mixed choir performing gospel, traditional, and contemporary music",
    },
    {
      name: "Youth Voices",
      age: "Ages 12-17",
      description: "Youth ensemble focusing on modern harmonies and afro-pop",
    },
    {
      name: "Solo Artists",
      age: "Ages 14+ (by audition)",
      description: "Individual vocal training for aspiring solo performers",
    },
    {
      name: "Vocal Foundations",
      age: "All ages",
      description: "Beginner vocal technique, breathing, and ear training",
    },
  ],

  achievements: [
    {
      year: "2024",
      items: [
        "🎤 Winners - Rwanda Youth Talent Search 2024",
        "🎵 Performed at Presidential Inauguration",
        "📀 Released 2 charity singles",
        "🏆 Best Choir Performance - National Arts Festival",
      ],
    },
    {
      year: "2023",
      items: [
        "🎓 8 vocalists selected for national music program",
        "🌟 Featured on Rwanda Broadcasting Agency",
        "🤝 Collaborated with renowned Rwandan artists",
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
      price: "8,000 RWF",
      duration: "thirtyDays",
    },
    {
      type: "annual",
      price: "80,000 RWF",
      duration: "twelveMonths",
    },
  ],

  testimonials: [
    {
      name: "Uwase Diane",
      age: "17",
      quote:
        "I was too shy to sing in public. Now I'm the lead vocalist in our choir. This program changed my life.",
      achievement: "Lead Vocalist, Youth Voices",
    },
    {
      name: "Ishimwe Jean Claude",
      age: "19",
      quote:
        "The vocal training here is amazing. I've learned techniques I never knew existed. My voice has grown so much.",
      achievement: "Solo Artist, Recording Experience",
    },
    {
      name: "Mukamana Sarah",
      age: "24",
      quote:
        "As a choir member for 3 years, I've grown not just as a singer but as a person. It's my second family.",
      achievement: "Senior Choir Member",
    },
    {
      name: "Habimana Eric",
      age: "16",
      quote:
        "From singing in the shower to performing on stage. Thank you for believing in me.",
      achievement: "Rising Star Award 2024",
    },
  ],

  equipment: [
    "Comfortable clothing",
    "Water bottle",
    "Notebook for lyrics and techniques",
    "Recording device (phone is fine)",
    "Willingness to learn",
  ],

  faqs: [
    {
      q: "Do I need to read music?",
      a: "No, we teach by ear and provide resources to learn. Reading music is helpful but not required.",
    },
    {
      q: "Can I join if I've never sung before?",
      a: "Absolutely! We welcome beginners and have foundational classes to help you start your vocal journey.",
    },
    {
      q: "Do you have performance opportunities?",
      a: "Yes! Our groups perform at events, ceremonies, and our annual concert. Soloists also get showcase opportunities.",
    },
    {
      q: "What genres do you teach?",
      a: "We cover traditional Rwandan music, gospel, afro-pop, contemporary, and more.",
    },
  ],

  // Additional simplified data
  vocalGroups: [
    { name: "Indaro Choir", members: 24, type: "Mixed Choir" },
    { name: "Youth Voices", members: 18, type: "Youth Ensemble" },
    { name: "Solo Artists", members: 10, type: "Individual Training" },
  ],

  genres: ["Traditional", "Gospel", "Afro-pop", "R&B", "Contemporary"],
};

// Fixed Support CTA Component - Following Tigers pattern exactly
const FixedSupportCTA = ({ program }: { program: typeof singingProgram }) => {
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
                  <span className="text-2xl">🎤</span>
                  <h3 className="font-bold">Support Young Voices</h3>
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
                Help nurture young vocal talent through training, performance
                opportunities, and recording experiences.
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Active vocalists:</span>
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
              <span className="text-2xl">🎤</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main Singing Program Page Component - Following Tigers design exactly
const SingingProgram = () => {
  const program = singingProgram;

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
                  <div className="text-blue-300 text-xs">Total Vocalists</div>
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
                  <div className="text-blue-300 text-xs">Years Strong</div>
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
                  alt={`Singing ${index + 1}`}
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
                <span className="text-2xl">🎤</span>
                About the Program
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {program.longDescription}
              </p>
            </motion.section>

            {/* Vocal Coach - Compact */}
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

            {/* Vocal Groups - Quick Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎵</span>
                Vocal Groups
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {program.vocalGroups.map((group, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-lg p-3 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        {group.name}
                      </h3>
                      <p className="text-xs text-gray-600">{group.type}</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {group.members} members
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Genres */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎼</span>
                Musical Genres
              </h2>
              <div className="flex flex-wrap gap-2">
                {program.genres.map((genre, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {genre}
                  </span>
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
                {program.achievements.map((year, idx) => (
                  <div key={idx}>
                    <h3 className="text-md font-bold text-blue-200 mb-2">
                      {year.year}
                    </h3>
                    <ul className="space-y-1 text-sm">
                      {year.items.map((item, i) => (
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
                Singer Stories
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
            {/* Vocal Classes */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Vocal Groups
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

            {/* Genres Quick View */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Music Genres
              </h2>
              <div className="flex flex-wrap gap-2">
                {program.genres.slice(0, 4).map((genre, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                  >
                    {genre}
                  </span>
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
            Vocal Program Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.totalMembers}+
              </div>
              <div className="text-xs text-blue-200">Total Vocalists</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.femaleVocalists}
              </div>
              <div className="text-xs text-blue-200">Female Singers</div>
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
              <div className="text-xs text-blue-200">Years Running</div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Sing?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Find your voice, join our choir, and share your story through song.
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
              Join a Choir
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingingProgram;
