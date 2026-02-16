import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

// Program data with images from Unsplash (free to use)
const programs = [
  {
    id: "acrobatics",
    title: "Acrobatics",
    icon: "🤸",
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1526238988034-552eec6fd59f?w=800&auto=format&fit=crop",
    description:
      "Build strength, flexibility, and confidence through acrobatic arts.",
    longDescription:
      "Professional acrobatics training that builds physical strength, flexibility, and confidence while fostering teamwork and artistic expression.",
  },
  {
    id: "dance",
    title: "African Dance & Percussion",
    icon: "🥁",
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1585686538269-3f0eb6e72e3e?w=800&auto=format&fit=crop",
    description: "Celebrate heritage with vibrant rhythms and movements.",
    longDescription:
      "Immerse in traditional African rhythms and movements that connect youth to their cultural roots while developing coordination and musicality.",
  },

  {
    id: "boxing",
    title: "Boxing Program",
    icon: "🥊",
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&auto=format&fit=crop",
    description: "Discipline, fitness, and respect in the ring.",
    longDescription:
      "Structured boxing training that instills discipline, builds physical fitness, and teaches respect and sportsmanship in a safe environment.",
  },
  {
    id: "education",
    title: "Education Support & School Reintegration",
    icon: "📚",
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
    description: "Remove barriers to learning and stay in school.",
    longDescription:
      "Comprehensive educational support including fee payment, learning materials, tutoring, and counseling to ensure every child stays in school.",
  },
  {
    id: "fashion",
    title: "Fashion & Creative Design",
    icon: "🧵",
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1485968571000-87d1f00f3626?w=800&auto=format&fit=crop",
    description: "Unleash creativity with textiles and design.",
    longDescription:
      "Hands-on fashion design training from sketching to sewing, empowering youth with entrepreneurial skills in the creative industry.",
  },
  {
    id: "manners",
    title: "Good Manners & Diversity",
    icon: "🤝",
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop",
    description: "Values that build respectful leaders.",
    longDescription:
      "Character development program teaching respect, responsibility, leadership, and cultural appreciation through interactive workshops.",
  },
  {
    id: "skating",
    title: "Skating",
    icon: "⛸️",
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=800&auto=format&fit=crop",
    description: "Glide, balance, and have fun on wheels or ice.",
    longDescription:
      "Skating program that promotes balance, coordination, and physical fitness while building confidence and providing a fun activity.",
  },
  {
    id: "traditional/dance",
    title: "Traditional Dance Program",
    icon: "💃🏿",
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&auto=format&fit=crop",
    description: "Preserve culture through expressive movement.",
    longDescription:
      "Learn traditional Rwandan dances that preserve cultural heritage while building confidence and providing opportunities for performance.",
  },
  {
    id: "drumming",
    title: "Traditional Drumming (Umutagara)",
    icon: "🪘",
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&auto=format&fit=crop",
    description: "Rhythms that connect generations.",
    longDescription:
      "Sacred Umutagara drumming that teaches intricate rhythms, teamwork, and the spiritual significance of this traditional art form.",
  },
  {
    id: "singing",
    title: "Singing",
    icon: "🎤",
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop",
    description: "Find your voice and harmonize with others.",
    longDescription:
      "Vocal training and choir practice that develops musical skills, builds confidence, and creates opportunities for performance.",
  },
];

// Full content for detail pages
const programDetails: Record<
  string,
  { fullDescription: string; impact: string; outcomes: string[] }
> = {
  acrobatics: {
    fullDescription:
      "Our Acrobatics program trains youth in gymnastics, tumbling, and balancing acts. It enhances physical fitness, coordination, and self-discipline while encouraging creative expression. Participants regularly perform at community events, building confidence and teamwork.",
    impact:
      "Over 50 youth have developed professional-level acrobatic skills, with several joining touring performance groups.",
    outcomes: [
      "Physical strength & flexibility",
      "Teamwork & collaboration",
      "Performance confidence",
      "Discipline & focus",
    ],
  },
  "african-dance-percussion": {
    fullDescription:
      "African Dance & Percussion connects young people to their cultural roots through energetic drumming and dance. Participants learn traditional techniques, the stories behind each rhythm, and perform at cultural ceremonies. The program fosters pride and keeps ancestral traditions alive.",
    impact:
      "Youngsters have formed a junior troupe that performs at national celebrations and teaches in local schools.",
    outcomes: [
      "Cultural connection",
      "Rhythm & coordination",
      "Artistic expression",
      "Community engagement",
    ],
  },
  "afro-break-modern": {
    fullDescription:
      "This program fuses Afro beats, breakdance, and modern dance. Youth develop style, rhythm, and improvisation skills while building community through movement. Professional choreographers guide them in creating original pieces that reflect their identity.",
    impact:
      "Graduates have won regional dance battles and now mentor younger students.",
    outcomes: [
      "Creative expression",
      "Urban dance skills",
      "Self-confidence",
      "Peer mentorship",
    ],
  },
  boxing: {
    fullDescription:
      "Boxing teaches focus, resilience, and sportsmanship. Our coaches emphasize technique, physical conditioning, and character building, creating well-rounded athletes. The gym is a safe space where youth channel energy positively.",
    impact:
      "Several boxers have competed at the national level, and all maintain strong academic records.",
    outcomes: [
      "Physical fitness",
      "Self-discipline",
      "Mental resilience",
      "Sportsmanship",
    ],
  },
  "education-support": {
    fullDescription:
      "We cover school fees, provide materials, and offer tutoring. The goal is to ensure every child can access quality education and reintegrate into the school system with dignity. We also work with families to address root causes of dropout.",
    impact:
      "98% of supported children remain enrolled, and 15 have advanced to university.",
    outcomes: [
      "School retention",
      "Academic success",
      "Family support",
      "Future opportunities",
    ],
  },
  "fashion-design": {
    fullDescription:
      "From sketching to sewing, youth learn the fundamentals of fashion. They explore sustainable design, cultural patterns, and entrepreneurship. The program culminates in a public fashion show where participants display their collections.",
    impact:
      "Three former participants now run small tailoring businesses in their communities.",
    outcomes: [
      "Technical skills",
      "Creative design",
      "Entrepreneurship",
      "Business development",
    ],
  },
  "good-manners": {
    fullDescription:
      "This program teaches respect, responsibility, leadership, and cultural appreciation through interactive workshops. Youth learn to navigate diversity and become ambassadors of peace in their neighborhoods.",
    impact:
      "Participants report improved relationships at home and school, and many take on leadership roles.",
    outcomes: [
      "Respect & empathy",
      "Leadership skills",
      "Cultural appreciation",
      "Conflict resolution",
    ],
  },
  skating: {
    fullDescription:
      "Skating promotes balance, coordination, and fun. Whether on wheels or ice, youth gain physical strength and resilience. The program includes safety training and opportunities to participate in local skating events.",
    impact:
      "Youth have formed a skating club that meets weekly and organizes community awareness events.",
    outcomes: [
      "Balance & coordination",
      "Physical fitness",
      "Community building",
      "Safety awareness",
    ],
  },
  "traditional-dance": {
    fullDescription:
      "Traditional dance is a living archive of Rwandan heritage. Young dancers learn precise movements, costumes, and the meaning behind each dance. They perform at national holidays and cultural gatherings, keeping traditions vibrant.",
    impact:
      "The troupe has been invited to perform at the national youth festival three years running.",
    outcomes: [
      "Cultural preservation",
      "Artistic mastery",
      "Performance skills",
      "National pride",
    ],
  },
  umutagara: {
    fullDescription:
      "Umutagara drumming is a sacred art. Participants learn intricate rhythms on traditional drums, often in ensembles. The program emphasizes discipline, teamwork, and the spiritual significance of drumming in Rwandan culture.",
    impact:
      "Drummers now lead cultural sessions in schools, teaching peers the importance of this heritage.",
    outcomes: [
      "Traditional rhythms",
      "Team coordination",
      "Cultural leadership",
      "Historical knowledge",
    ],
  },
  singing: {
    fullDescription:
      "Through vocal training and choir practice, youth discover the power of their voice. They learn harmonies, songwriting, and performance skills. The choir records music and performs at events, spreading messages of hope.",
    impact:
      "The choir released a charity single that raised funds for school supplies.",
    outcomes: [
      "Vocal technique",
      "Harmony & blending",
      "Songwriting",
      "Community impact",
    ],
  },
};

// Main What We Do page with advanced cards
function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
            >
              <circle cx="10" cy="10" r="2" fill="white" />
            </pattern>
            <rect width="100" height="100" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left md:max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              Our Programs
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              What We Do
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Discover our comprehensive programs designed to nurture talent,
              build character, and transform lives through holistic youth
              development.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2">
                  <span>Explore Programs</span>
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
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/get-involved"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Support Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Programs Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Impact Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Programs That Transform Lives
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each program is carefully designed to unlock potential and create
            opportunities for a brighter future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <span className="text-2xl">{program.icon}</span>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Program
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                  {program.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {program.longDescription || program.description}
                </p>

                {/* Key Features Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {programDetails[program.id]?.outcomes
                    ?.slice(0, 2)
                    .map((outcome, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium"
                      >
                        {outcome}
                      </span>
                    ))}
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                    +{programDetails[program.id]?.outcomes?.length - 2} more
                  </span>
                </div>

                {/* Stats Bar */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Weekly sessions
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    15-25 participants
                  </span>
                </div>

                {/* Action Button */}
                <Link
                  to={`/programs/${program.id}`}
                  className="inline-flex items-center justify-between w-full group/btn bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in empowering the next generation of leaders, artists, and
            change-makers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/volunteer"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Become a Volunteer
            </Link>
            <Link
              to="/donate"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600"
            >
              Support Our Programs
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Detailed program page
export const ProgramDetailPage = () => {
  const { programId } = useParams();
  const program = programs.find((p) => p.id === programId);
  const details = programId ? programDetails[programId] : null;

  if (!program || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Program not found
          </h2>
          <Link to="/what-we-do" className="text-blue-600 hover:underline">
            ← Back to programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80" />

        {/* Back button */}
        <Link
          to="/what-we-do"
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full font-medium flex items-center shadow-lg transition-all z-10"
        >
          <svg
            className="w-5 h-5 mr-1"
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
          All Programs
        </Link>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              {program.icon} Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {program.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-3xl mx-auto">
              {program.description}
            </p>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* About section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-blue-600 w-2 h-8 rounded-full mr-4"></span>
              About the Program
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {details.fullDescription}
            </p>

            {/* Key outcomes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {details.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-xl p-4 text-center"
                >
                  <div className="text-blue-600 font-semibold text-sm">
                    {outcome}
                  </div>
                </div>
              ))}
            </div>

            {/* Impact card */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-3">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Impact</h3>
                  <p className="text-lg opacity-90">{details.impact}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Support This Program
            </h3>
            <p className="text-gray-600 mb-6">
              Your contribution helps us reach more young people and transform
              more lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/donate"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Make a Donation
              </Link>
              <Link
                to="/volunteer"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;
