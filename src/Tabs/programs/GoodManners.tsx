import  { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// Good Manners & Diversity Program data - Following Tigers data structure
const mannersProgram = {
  id: "manners",
  title: "Good Manners & Diversity",
  icon: "🤝",
  color: "from-blue-600 to-blue-800",
  image:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop",
  logo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&auto=format&fit=crop",
  motto: "Building Character, Embracing Differences",
  gallery: [
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop",
  ],
  description:
    "Where young people learn respect, empathy, and cultural understanding to build better communities.",
  longDescription:
    "The Good Manners & Diversity Program, under the Indaro Foundation, teaches essential life skills including respect, empathy, and cultural understanding. Through interactive workshops, community activities, and leadership training, we help young people develop strong character and embrace the richness of diversity in their communities.",

  leader: {
    name: "Mukandayisenga Jeanne",
    title: "Program Coordinator",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop",
    experience: "7+ years",
    catchphrase: "Good manners are the foundation of a peaceful society.",
  },

  stats: {
    totalMembers: 350,
    activeParticipants: 320,
    femaleParticipants: 185,
    medalsWon: 5,
    workshopsHeld: 48,
    yearsRunning: 5,
  },

  schedule: [
    {
      day: "Monday",
      time: "9:00 AM - 12:00 PM",
      class: "School Visits - Primary",
    },
    {
      day: "Tuesday",
      time: "9:00 AM - 12:00 PM",
      class: "School Visits - Secondary",
    },
    {
      day: "Wednesday",
      time: "2:00 PM - 4:00 PM",
      class: "Community Workshop",
    },
    {
      day: "Thursday",
      time: "9:00 AM - 12:00 PM",
      class: "School Visits - Primary",
    },
    {
      day: "Friday",
      time: "2:00 PM - 4:00 PM",
      class: "Youth Leadership Session",
    },
    {
      day: "Saturday",
      time: "10:00 AM - 2:00 PM",
      class: "Cultural Day / Community Event",
    },
  ],

  classLevels: [
    {
      name: "Respect & Etiquette",
      age: "Ages 7-18",
      description:
        "Learn greetings, active listening, and expressing gratitude",
    },
    {
      name: "Cultural Diversity",
      age: "Ages 7-18",
      description:
        "Understand and appreciate different traditions and backgrounds",
    },
    {
      name: "Empathy & Kindness",
      age: "Ages 7-18",
      description: "Develop understanding for others and helping behaviors",
    },
    {
      name: "Leadership & Integrity",
      age: "Ages 12-18",
      description: "Build honesty, responsibility, and positive role modeling",
    },
    {
      name: "Community Service",
      age: "All ages",
      description: "Learn the value of giving back and volunteering",
    },
  ],

  achievements: [
    {
      year: "2024",
      items: [
        "🤝 Reached 350+ youth across 15 schools",
        "🌍 Promoted unity through 8 cultural exchange events",
        "💚 Recognized for community impact by Rwanda Education Board",
      ],
    },
    {
      year: "2023",
      items: [
        "🎓 Trained 45 youth peer educators",
        "🏆 Best Character Building Program Award",
        "📚 Developed curriculum used in 10 schools",
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
      price: "3,000 RWF",
      duration: "thirtyDays",
    },
    {
      type: "annual",
      price: "30,000 RWF",
      duration: "twelveMonths",
    },
  ],

  testimonials: [
    {
      name: "Ishimwe Grace",
      age: "15",
      quote:
        "This program taught me how to respect others and myself. I'm now a peer educator at my school!",
      achievement: "Youth Peer Educator",
    },
    {
      name: "Habimana Jean Paul",
      age: "16",
      quote:
        "I learned that our differences make us stronger, not divided. I've made friends from all backgrounds.",
      achievement: "Cultural Ambassador",
    },
    {
      name: "Uwase Keziah",
      age: "14",
      quote:
        "The empathy workshops changed how I see my classmates. I'm more understanding and kind now.",
      achievement: "Student Leader",
    },
    {
      name: "Niyonkuru Eric",
      age: "17",
      quote:
        "Being part of community service projects showed me that I can make a real difference.",
      achievement: "Volunteer of the Month",
    },
  ],

  equipment: [
    "Notebook and pen",
    "Open mind",
    "Respectful attitude",
    "Willingness to learn",
    "Questions and curiosity",
  ],

  faqs: [
    {
      q: "Is this program only for students?",
      a: "No! While we work with many schools, our community workshops are open to everyone regardless of age or background.",
    },
    {
      q: "How long is each module?",
      a: "Most modules run for 4-6 weeks with weekly sessions. School programs are tailored to the academic calendar.",
    },
    {
      q: "Can I become a peer educator?",
      a: "Yes! We train youth peer educators twice a year. Ask your coordinator about the next training.",
    },
  ],

  // Additional program-specific data
  modules: [
    { name: "Respect & Etiquette", topics: "Greetings, listening, gratitude" },
    { name: "Cultural Diversity", topics: "Traditions, inclusion, respect" },
    { name: "Empathy & Kindness", topics: "Understanding others, helping" },
    { name: "Leadership & Integrity", topics: "Honesty, responsibility" },
    { name: "Community Service", topics: "Giving back, volunteering" },
  ],

  activities: [
    { name: "School Visits", frequency: "Weekly", audience: "Students" },
    { name: "Community Workshops", frequency: "Monthly", audience: "All ages" },
    {
      name: "Leadership Camps",
      frequency: "Quarterly",
      audience: "Youth leaders",
    },
    { name: "Cultural Days", frequency: "Bi-monthly", audience: "Open to all" },
  ],
};

// Fixed Support CTA Component - Following Tigers pattern exactly
const FixedSupportCTA = ({ program }: { program: typeof mannersProgram }) => {
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
                  <span className="text-2xl">🤝</span>
                  <h3 className="font-bold">Support Character Building</h3>
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
                Help us teach respect, empathy, and cultural understanding to
                young people across Rwanda.
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Youth reached:</span>
                  <span className="font-bold">
                    {program.stats.totalMembers}+
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Workshops held:</span>
                  <span className="font-bold">
                    {program.stats.workshopsHeld}+
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Schools partnered:</span>
                  <span className="font-bold">15</span>
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
              <span className="text-2xl">🤝</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main Manners Program Page Component - Following Tigers design exactly
const MannersProgram = () => {
  const program = mannersProgram;

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
                  <div className="text-blue-300 text-xs">Youth Reached</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-blue-400/30">
                  <div className="text-2xl font-bold text-white">
                    {program.stats.workshopsHeld}
                  </div>
                  <div className="text-blue-300 text-xs">Workshops</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-blue-400/30">
                  <div className="text-2xl font-bold text-white">
                    {program.stats.yearsRunning}
                  </div>
                  <div className="text-blue-300 text-xs">Years Running</div>
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
                  alt={`Manners ${index + 1}`}
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
                <span className="text-2xl">🤝</span>
                About the Program
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {program.longDescription}
              </p>
            </motion.section>

            {/* Program Coordinator - Compact */}
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

            {/* Learning Modules - Quick Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                Learning Modules
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {program.modules.map((module, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3">
                    <h3 className="font-bold text-gray-900 text-sm">
                      {module.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {module.topics}
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
                Participant Stories
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
                    {program.faqs.map((faq, index) => (
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
            {/* Learning Modules as Class Levels */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Learning Modules
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
                Program Activities
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

            {/* Activities Overview */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Regular Activities
              </h2>
              <div className="space-y-2">
                {program.activities.map((activity, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-medium text-gray-900">
                      {activity.name}
                    </span>
                    <p className="text-xs text-gray-500">
                      {activity.frequency} • {activity.audience}
                    </p>
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
              <h2 className="text-lg font-bold mb-3">Participation</h2>
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
            Program Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.totalMembers}+
              </div>
              <div className="text-xs text-blue-200">Youth Reached</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.femaleParticipants}
              </div>
              <div className="text-xs text-blue-200">Girls & Young Women</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.workshopsHeld}
              </div>
              <div className="text-xs text-blue-200">Workshops</div>
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
            Build Character Today
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Join us in building a generation of respectful, empathetic, and
            culturally aware young leaders.
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
              Join a Workshop
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MannersProgram;
