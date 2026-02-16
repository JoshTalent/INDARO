import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Acrobatics Program data - Following Tigers data structure
const acrobaticsProgram = {
  id: "acrobatics",
  title: "Acrobatics Program",
  icon: "🤸",
  color: "from-blue-600 to-blue-800",
  image: "https://i.postimg.cc/90mCS5Bc/acrobacy.jpg",
  logo: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&auto=format&fit=crop",
  motto: "Strength, Flexibility, Grace",
  gallery: [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545224144-b3806a7c44fe?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552196563-55cd4e45efb5?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518614364928-3678c3e73b34?w=800&auto=format&fit=crop", // Added to make 8 images
    "https://images.unsplash.com/photo-1555255589-23ea2a6f1d1b?w=800&auto=format&fit=crop", // Added to make 8 images
    "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&auto=format&fit=crop", // Added to make 8 images
  ],
  description:
    "Where young athletes learn to fly through discipline, strength, and grace.",
  longDescription:
    "The Acrobatics Program, under the Indaro Foundation, provides elite acrobatic training that combines physical excellence with artistic expression and character development.",

  leader: {
    name: "Mugisha Eric",
    title: "Head Acrobatics Coach",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop",
    experience: "12+ years",
    catchphrase: "Every fall is a lesson, every rise is a victory.",
  },

  stats: {
    totalMembers: 65,
    activeTrainees: 52,
    femaleTrainees: 38,
    medalsWon: 15,
    showsPerformed: 28,
    yearsRunning: 5,
  },

  schedule: [
    {
      day: "Monday",
      time: "4:00 PM - 5:30 PM",
      class: "Beginners (Ages 7-12)",
    },
    {
      day: "Tuesday",
      time: "4:00 PM - 5:30 PM",
      class: "Intermediate (Ages 10-16)",
    },
    {
      day: "Wednesday",
      time: "4:00 PM - 5:30 PM",
      class: "Beginners (Ages 7-12)",
    },
    {
      day: "Thursday",
      time: "4:00 PM - 5:30 PM",
      class: "Intermediate (Ages 10-16)",
    },
    {
      day: "Friday",
      time: "4:00 PM - 6:00 PM",
      class: "Advanced Training",
    },
    {
      day: "Saturday",
      time: "9:00 AM - 11:00 AM",
      class: "Performance Team",
    },
  ],

  classLevels: [
    {
      name: "Beginners",
      age: "7-12 years",
      description: "Learn basic rolls, cartwheels, and bridges",
    },
    {
      name: "Intermediate",
      age: "10-16 years",
      description: "Master handstands, backbends, and basic tumbling",
    },
    {
      name: "Advanced",
      age: "13+ years",
      description: "Perfect aerials, flips, and combinations",
    },
  ],

  achievements: [
    {
      year: "2024-2025",
      items: [
        "🥇 3 Gold Medals - National Youth Games",
        "🎪 12 performances at national events",
        "🏆 Best Acrobatics Program 2024",
      ],
    },
    {
      year: "2023",
      items: [
        "🥈 Silver at East African Youth Festival",
        "🤸 8 students in national training camps",
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
      price: "12,000 RWF",
      duration: "thirtyDays",
    },
    {
      type: "annual",
      price: "120,000 RWF",
      duration: "twelveMonths",
    },
  ],

  testimonials: [
    {
      name: "Uwase Keziah",
      age: "14",
      quote:
        "Acrobatics taught me that I'm stronger than I think. Now I can fly!",
      achievement: "National Youth Performer 2024",
    },
    {
      name: "Habimana Jean",
      age: "16",
      quote:
        "This program gave me focus and a positive path. It's my second family.",
      achievement: "Advanced Team Member",
    },
  ],

  equipment: [
    "Comfortable athletic wear",
    "Gymnastics shoes or barefoot",
    "Water bottle",
    "Positive attitude",
  ],

  faqs: [
    {
      q: "Do I need previous experience?",
      a: "No, we welcome beginners! We'll teach you from the basics.",
    },
    {
      q: "What should I wear?",
      a: "Comfortable athletic wear that allows free movement.",
    },
    {
      q: "Is it safe?",
      a: "Yes! All sessions are supervised by trained coaches with safety mats.",
    },
  ],
};

// Fixed Support CTA Component - Following Tigers pattern exactly
const FixedSupportCTA = ({ program }: { program: typeof acrobaticsProgram }) => {
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
                  <span className="text-2xl">🤸</span>
                  <h3 className="font-bold">Support Acrobatics</h3>
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
                Help provide equipment and training for young acrobats to reach
                new heights.
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Active trainees:</span>
                  <span className="font-bold">
                    {program.stats.totalMembers}+
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shows performed:</span>
                  <span className="font-bold">
                    {program.stats.showsPerformed}+
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Medals won:</span>
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
              <span className="text-2xl">🤸</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main Acrobatics Page Component - Following Tigers design exactly
const AcrobaticsDetailPage = () => {
  const program = acrobaticsProgram;

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
                  <div className="text-blue-300 text-xs">Total Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-blue-400/30">
                  <div className="text-2xl font-bold text-white">
                    {program.stats.medalsWon}
                  </div>
                  <div className="text-blue-300 text-xs">Medals Won</div>
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
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
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
                  alt={`Acrobatics ${index + 1}`}
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
                <span className="text-2xl">🤸</span>
                About the Program
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {program.longDescription}
              </p>
            </motion.section>

            {/* Head Coach - Compact */}
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
                Student Voices
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.testimonials.map((test, index) => (
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

            {/* Equipment & FAQ - Combined into one section like Tigers has extra content */}
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
            {/* Class Levels */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Class Levels
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
                {program.schedule.map((session, index) => (
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
          <h2 className="text-2xl font-bold text-center mb-6">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.totalMembers}+
              </div>
              <div className="text-xs text-blue-200">Total Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.femaleTrainees}
              </div>
              <div className="text-xs text-blue-200">Female Athletes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.medalsWon}
              </div>
              <div className="text-xs text-blue-200">Medals Won</div>
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
            Ready to Fly?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Join our acrobatics program and discover what your body can do.
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
              Free Trial
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcrobaticsDetailPage;
