import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Dance Program data - Following Tigers data structure
const danceProgram = {
  id: "dance",
  title: "Afro Dance, Breakdance & Modern Dance",
  icon: "🕺",
  color: "from-blue-600 to-blue-800",
  image:
    "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1200&auto=format&fit=crop",
  logo: "https://images.unsplash.com/photo-1547156979-0a1f8b44b5a1?w=400&auto=format&fit=crop",
  motto: "Move to the Rhythm, Dance to Your Beat",
  gallery: [
    "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547156979-0a1f8b44b5a1?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524591651613-13ed0e2d9c98?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531604250646-2f0e818e9e4d?w=800&auto=format&fit=crop",
  ],
  description:
    "Where urban energy meets African rhythm – a fusion of styles for the next generation of dancers.",
  longDescription:
    "The Afro Dance, Breakdance & Modern Dance program at Indaro Foundation is a vibrant fusion of contemporary urban styles and traditional African movement. We create a space where young people can express themselves creatively, build confidence, and develop technical excellence in multiple dance forms. From the infectious rhythms of Afrobeat to the acrobatic power of breakdance and the expressive freedom of modern dance, our program nurtures versatile dancers ready for any stage.",

  leader: {
    name: "Nsengimana 'B-Boy Mike' Michel",
    title: "Head Choreographer & Dance Program Director",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop",
    experience: "12+ years",
    catchphrase:
      "Dance is the language your body speaks when words aren't enough.",
  },

  stats: {
    totalMembers: 187,
    activeDancers: 165,
    femaleDancers: 98,
    medalsWon: 15,
    performances: 78,
    yearsRunning: 6,
  },

  schedule: [
    {
      day: "Monday",
      time: "4:00 PM - 5:30 PM",
      class: "Afro Dance - Beginners",
    },
    {
      day: "Monday",
      time: "5:30 PM - 7:00 PM",
      class: "Breakdance - Foundations",
    },
    {
      day: "Tuesday",
      time: "4:00 PM - 5:30 PM",
      class: "Modern Dance - All Levels",
    },
    {
      day: "Tuesday",
      time: "5:30 PM - 7:00 PM",
      class: "Afro Dance - Intermediate",
    },
    {
      day: "Wednesday",
      time: "4:00 PM - 5:30 PM",
      class: "Breakdance - Power Moves",
    },
    {
      day: "Wednesday",
      time: "5:30 PM - 7:00 PM",
      class: "Hip Hop Crew",
    },
    {
      day: "Thursday",
      time: "4:00 PM - 5:30 PM",
      class: "Afrofusion - Creative Lab",
    },
    {
      day: "Thursday",
      time: "5:30 PM - 7:00 PM",
      class: "Battle Practice",
    },
    {
      day: "Friday",
      time: "4:00 PM - 6:00 PM",
      class: "Cypher Night",
    },
    {
      day: "Saturday",
      time: "10:00 AM - 1:00 PM",
      class: "Competition Team",
    },
  ],

  classLevels: [
    {
      name: "Afro Dance",
      age: "All Levels (Ages 7+)",
      description: "Learn Afrobeat, Azonto, Kuduro and African rhythms",
    },
    {
      name: "Breakdance",
      age: "Beginner to Advanced (Ages 8+)",
      description: "Master top rock, power moves, freezes and footwork",
    },
    {
      name: "Modern Dance",
      age: "All Levels (Ages 10+)",
      description: "Express through contemporary, lyrical and improvisation",
    },
    {
      name: "Hip Hop",
      age: "All Levels (Ages 8+)",
      description: "Popping, locking, krumping and urban styles",
    },
  ],

  achievements: [
    {
      year: "2024",
      items: [
        "🥈 2nd Place - East Africa Breaking Championship",
        "🏆 1st Place - Rwanda's Got Talent (Dance Category)",
        "🎓 8 dancers selected for professional dance companies",
        "📺 Featured on 'Dance Africa' TV series",
      ],
    },
    {
      year: "2023",
      items: [
        "🥇 Gold Medal - East African Youth Dance Competition",
        "🌍 Represented Rwanda at Pan-African Dance Festival",
        "🏅 15 medals in various dance competitions",
        "🎪 Hosted Kigali Dance Battle with 200+ participants",
      ],
    },
    {
      year: "2022",
      items: [
        "🚀 Launched competition teams program",
        "🏆 Best New Dance Program - Rwanda Arts Council",
        "💃 5 dancers selected for professional training in Senegal",
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
      price: "15,000 RWF",
      duration: "thirtyDays",
    },
    {
      type: "annual",
      price: "150,000 RWF",
      duration: "twelveMonths",
    },
  ],

  testimonials: [
    {
      name: "Ishimwe 'B-Girl Kiki' Diane",
      age: "17",
      quote:
        "Breakdance saved me from the streets. Now I'm teaching other girls that they can be strong and graceful.",
      achievement: "National Youth Champion 2024",
    },
    {
      name: "Kagabo Samuel",
      age: "19",
      quote:
        "This program gave me a purpose. I went from watching dance videos to teaching my own classes.",
      achievement: "Junior Instructor",
    },
    {
      name: "Mukamana Grace",
      age: "16",
      quote:
        "Modern dance helped me express emotions I couldn't put into words. It's my therapy and my passion.",
      achievement: "Featured in youth showcase",
    },
    {
      name: "Niyonsenga Eric",
      age: "20",
      quote:
        "The energy in our crew is amazing. We push each other to be better every single day.",
      achievement: "Best Crew 2024",
    },
  ],

  equipment: [
    "Comfortable athletic wear",
    "Indoor sneakers or dance shoes",
    "Knee pads (for breakdance)",
    "Water bottle",
    "Towel",
    "Positive attitude",
  ],

  faqs: [
    {
      q: "Do I need previous dance experience?",
      a: "Not at all! We have classes for absolute beginners to advanced dancers. Our instructors will help you progress at your own pace.",
    },
    {
      q: "What should I wear to class?",
      a: "Comfortable athletic wear that you can move in. For breakdance, we recommend knee pads. Clean indoor sneakers are required.",
    },
    {
      q: "Can I try multiple styles?",
      a: "Yes! Many of our dancers train in multiple styles. Our all-access pass lets you try everything.",
    },
    {
      q: "Is there an age limit?",
      a: "We welcome dancers from age 7 to 25. We have classes grouped by age and skill level.",
    },
  ],

  // Additional dance-specific data kept for richness
  danceStyles: [
    { name: "Afro Dance", icon: "🌍" },
    { name: "Breakdance", icon: "⚡" },
    { name: "Modern Dance", icon: "🎭" },
    { name: "Hip Hop", icon: "🎧" },
  ],

  competitionTeams: [
    { name: "Indaro Breakers", style: "Breakdance", members: 12 },
    { name: "Afro Queens", style: "Afro Dance", members: 10 },
    { name: "Modern Fusion Crew", style: "Contemporary", members: 8 },
  ],

  events: [
    { name: "Friday Night Cypher", frequency: "Weekly", time: "Fridays 4PM" },
    { name: "Monthly Battle Night", frequency: "Monthly", nextDate: "June 29" },
  ],
};

// Fixed Support CTA Component - Following Tigers pattern exactly
const FixedSupportCTA = ({ program }: { program: typeof danceProgram }) => {
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
                  <span className="text-2xl">🕺</span>
                  <h3 className="font-bold">Support Our Dancers</h3>
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
                Help provide dance training, competition opportunities, and
                performance platforms for young dancers.
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
                  <span>Trophies won:</span>
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
              <span className="text-2xl">🕺</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main Dance Program Page Component - Following Tigers design exactly
const DanceProgramDetailPage = () => {
  const program = danceProgram;

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
                  alt={`Dance ${index + 1}`}
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
                <span className="text-2xl">🕺</span>
                About the Program
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {program.longDescription}
              </p>
            </motion.section>

            {/* Head Choreographer - Compact */}
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
                Dance Styles
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {program.danceStyles.map((style, idx) => (
                  <div key={idx} className="text-center">
                    <span className="text-3xl block mb-1">{style.icon}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {style.name}
                    </span>
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
            {/* Class Levels */}
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
                Class Schedule
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

            {/* Competition Teams */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Competition Teams
              </h2>
              <div className="space-y-2">
                {program.competitionTeams.map((team, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="font-medium text-gray-900">
                      {team.name}
                    </span>
                    <span className="text-xs text-blue-600">
                      {team.members} members
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Upcoming Events */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Events & Cyphers
              </h2>
              <div className="space-y-2">
                {program.events.map((event, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-medium text-gray-900">
                      {event.name}
                    </span>
                    <p className="text-xs text-gray-500">
                      {event.frequency} • {event.time || event.nextDate}
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
            Dance Program Impact
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
              <div className="text-xs text-blue-200">Years Running</div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Join the Movement
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Whether you're a beginner or an experienced dancer, there's a place
            for you in our crew.
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
              Free Trial Class
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DanceProgramDetailPage;
