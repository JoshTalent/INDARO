import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// Education Support Program data - Following Tigers data structure
const educationProgram = {
  id: "education-support",
  title: "Education Support & School Reintegration",
  icon: "📚",
  color: "from-blue-600 to-blue-800",
  image: "https://i.postimg.cc/CK8hn4K4/education.jpg",
  logo: "https://i.postimg.cc/CK8hn4K4/education.jpg",
  motto: "Every Child Deserves a Second Chance at Education",
  gallery: [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop",
  ],
  description:
    "Breaking the cycle of poverty through education, one child at a time.",
  longDescription:
    "The Education Support & School Reintegration Program at Indaro Foundation is a comprehensive initiative dedicated to ensuring every child has access to quality education. We identify children who have dropped out of school or are at risk of dropping out, and provide holistic support including school fees, learning materials, mentorship, and family support to ensure successful reintegration and academic success.",

  leader: {
    name: "Dr. Umutoniwase Jeanne",
    title: "Education Program Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
    experience: "15+ years",
    catchphrase:
      "Education is not just about books; it's about opening doors to possibilities.",
  },

  stats: {
    totalMembers: 342,
    activeStudents: 287,
    femaleStudents: 183,
    medalsWon: 8,
    partnerSchools: 24,
    yearsRunning: 8,
  },

  schedule: [
    {
      day: "Monday - Friday",
      time: "7:00 AM - 5:00 PM",
      class: "School Attendance Monitoring",
    },
    {
      day: "Saturday",
      time: "9:00 AM - 12:00 PM",
      class: "Catch-up Classes & Tutoring",
    },
    {
      day: "Saturday",
      time: "2:00 PM - 4:00 PM",
      class: "Mentorship Sessions",
    },
    {
      day: "Monthly",
      time: "Last Saturday",
      class: "Parent-Teacher Meetings",
    },
    {
      day: "Quarterly",
      time: "School Holidays",
      class: "Family Visits & Assessments",
    },
  ],

  classLevels: [
    {
      name: "Primary School Support",
      age: "Ages 6-12",
      description: "Full coverage of school fees, uniforms, books, and meals",
    },
    {
      name: "Secondary School Support",
      age: "Ages 13-18",
      description: "School fees, materials, mentorship, and exam fees",
    },
    {
      name: "University Scholarships",
      age: "Ages 18+",
      description: "Tuition, accommodation, books, and living stipend",
    },
    {
      name: "Reintegration Program",
      age: "All ages",
      description: "Catch-up classes and counseling for out-of-school children",
    },
  ],

  achievements: [
    {
      year: "2024",
      items: [
        "🎓 42 children successfully reintegrated into schools",
        "📚 94% pass rate among supported students",
        "🏆 5 students awarded national merit scholarships",
        "🤝 Partnership with 6 new schools established",
      ],
    },
    {
      year: "2023",
      items: [
        "🥇 100% primary leaving exam pass rate",
        "🎓 8 students enrolled in university",
        "📖 Distributed 2,500+ textbooks and materials",
        "👥 Expanded mentorship program to 28 mentors",
      ],
    },
    {
      year: "2022",
      items: [
        "🚀 Launched accelerated learning program",
        "🏫 Established partnerships with 18 schools",
        "💼 3 graduates employed as teachers",
      ],
    },
  ],

  membershipOptions: [
    {
      type: "primary",
      price: "150,000 RWF/year",
      duration: "annual",
    },
    {
      type: "secondary",
      price: "250,000 RWF/year",
      duration: "annual",
    },
    {
      type: "university",
      price: "600,000 RWF/year",
      duration: "annual",
    },
    {
      type: "general",
      price: "Any amount",
      duration: "oneTime",
    },
  ],

  testimonials: [
    {
      name: "Mukamana Divine",
      age: "19",
      quote: "Education gave me back my future. I want to be a doctor now.",
      achievement: "Top of her class - Senior 4",
    },
    {
      name: "Habimana Eric",
      age: "22",
      quote:
        "It's never too late to go back to school. Dreams don't have expiration dates.",
      achievement: "University Scholar",
    },
    {
      name: "Uwase Clarisse",
      age: "16",
      quote:
        "My baby gives me strength to study harder. I want to be her role model.",
      achievement: "Young Mother Successfully Reintegrated",
    },
    {
      name: "Niyonzima Peter",
      age: "45",
      quote:
        "Before Indaro, I couldn't afford school fees. Now all my children are in school.",
      achievement: "Parent of 3 students",
    },
  ],

  equipment: [
    "School uniform (provided)",
    "Backpack (provided)",
    "Books and supplies (provided)",
    "Enthusiasm to learn",
    "Parental/guardian involvement",
  ],

  faqs: [
    {
      q: "How are children selected for the program?",
      a: "Children are identified through community outreach, school referrals, and family applications. Priority is given to the most vulnerable including orphans and children from extremely poor families.",
    },
    {
      q: "What happens after a child is reintegrated?",
      a: "We provide ongoing monitoring, mentorship, and support. Our education officers check attendance and performance regularly.",
    },
    {
      q: "Can I sponsor a specific child?",
      a: "Yes! We offer individual child sponsorship where you can follow a specific child's progress and receive updates.",
    },
    {
      q: "How do you ensure children stay in school?",
      a: "We address root causes of dropout through comprehensive support including family assistance, mentoring, and academic help, maintaining a 95% retention rate.",
    },
  ],

  // Additional simplified data
  supportServices: [
    { name: "School Fees Coverage", beneficiaries: 342 },
    { name: "Learning Materials", beneficiaries: "All" },
    { name: "Family Support", beneficiaries: 156 },
    { name: "Nutrition Program", beneficiaries: 89 },
  ],

  partnerSchools: [
    { name: "G.S. Gahanga", students: 28 },
    { name: "Ecole des Sciences", students: 15 },
    { name: "University of Rwanda", students: 12 },
    { name: "G.S. Remera", students: 24 },
  ],

  urgentNeeds: [
    { item: "School Fees for 15 Students", amount: "2,250,000 RWF" },
    { item: "Textbooks & Materials", amount: "850,000 RWF" },
    { item: "School Uniforms", amount: "450,000 RWF" },
    { item: "Nutrition Support", amount: "1,200,000 RWF/month" },
  ],
};

// Fixed Support CTA Component - Following Tigers pattern exactly
const FixedSupportCTA = ({ program }) => {
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
                  <span className="text-2xl">📚</span>
                  <h3 className="font-bold">Support Education</h3>
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
                Help us keep children in school. Your support provides fees,
                materials, and hope for a brighter future.
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Children supported:</span>
                  <span className="font-bold">
                    {program.stats.totalMembers}+
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Reintegrated:</span>
                  <span className="font-bold">
                    {program.stats.activeStudents}+
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Partner schools:</span>
                  <span className="font-bold">
                    {program.stats.partnerSchools}
                  </span>
                </div>
              </div>

              {/* Urgent Need Alert */}
              <div className="mb-4 bg-red-500/20 rounded-xl p-2 border border-red-300/30">
                <p className="text-xs font-semibold">
                  ⚠️ URGENT: {program.urgentNeeds[0].item}
                </p>
                <p className="text-xs text-blue-100">
                  {program.urgentNeeds[0].amount} needed
                </p>
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
                  Sponsor
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
              <span className="text-2xl">📚</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main Education Support Program Page Component - Following Tigers design exactly
const EducationSupportDetailPage = () => {
  const program = educationProgram;

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
                  <div className="text-blue-300 text-xs">
                    Children Supported
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-blue-400/30">
                  <div className="text-2xl font-bold text-white">
                    {program.stats.partnerSchools}
                  </div>
                  <div className="text-blue-300 text-xs">Partner Schools</div>
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
                  alt={`Education ${index + 1}`}
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
                <span className="text-2xl">📚</span>
                About the Program
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {program.longDescription}
              </p>
            </motion.section>

            {/* Program Director - Compact */}
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

            {/* Support Services - Quick Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Support Services
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {program.supportServices.map((service, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3">
                    <h3 className="font-bold text-gray-900 text-sm">
                      {service.name}
                    </h3>
                    <p className="text-xs text-blue-600 mt-1">
                      {service.beneficiaries} beneficiaries
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
                Stories of Hope
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
                    What We Provide
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
            {/* Education Levels */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Support Levels
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

            {/* Partner Schools */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Partner Schools
              </h2>
              <div className="space-y-2">
                {program.partnerSchools.map((school, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="font-medium text-gray-900">
                      {school.name}
                    </span>
                    <span className="text-xs text-blue-600">
                      {school.students} students
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Urgent Needs */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Urgent Needs
              </h2>
              <div className="space-y-2">
                {program.urgentNeeds.map((need, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-2">
                    <p className="font-medium text-gray-900 text-sm">
                      {need.item}
                    </p>
                    <p className="text-xs text-blue-600 font-bold">
                      {need.amount}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Membership/Sponsorship Options */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white"
            >
              <h2 className="text-lg font-bold mb-3">Sponsorship</h2>
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
            Educational Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.totalMembers}+
              </div>
              <div className="text-xs text-blue-200">Children Supported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.femaleStudents}
              </div>
              <div className="text-xs text-blue-200">Girls Supported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {program.stats.partnerSchools}
              </div>
              <div className="text-xs text-blue-200">Partner Schools</div>
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
            Help Us Educate a Child
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Every child deserves the chance to learn and build a better future.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/donate"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md text-sm"
            >
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600 text-sm"
            >
              Sponsor a Child
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationSupportDetailPage;
