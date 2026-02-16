// ProjectsPage.tsx (with UI-only translations)
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Heart,
  Calendar,
  MapPin,
  Users,
  Target,
  TrendingUp,
  Clock,
  Award,
  DollarSign,
  ChevronRight,
  X,
  Share2,
  Download,
  Globe,
  BookOpen,
  Music,
  Home,
  Filter,
  Briefcase,
  CheckCircle,
  BarChart3,
  PieChart,
  ArrowRight,
  Gift,
  HeartHandshake,
  HandHeart,
  PlusCircle,
} from "lucide-react";

// Project data (unchanged - no translations needed)
const projects = [
  {
    id: 1,
    title: "Umurimo Youth Arts Center",
    category: "infrastructure",
    status: "ongoing",
    progress: 65,
    goal: 50000,
    raised: 32500,
    startDate: "2024-01-15",
    endDate: "2024-12-30",
    location: "Kigali, Rwanda",
    beneficiaries: 450,
    image:
      "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3",
    gallery: [
      "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3",
    ],
    description:
      "A state-of-the-art creative space for youth to develop artistic talents through dance, music, and visual arts programs.",
    longDescription:
      "The Umurimo Youth Arts Center will serve as a hub for creativity and cultural expression. With dedicated spaces for dance rehearsals, music practice rooms, art studios, and a small performance venue, this center will provide young artists with the resources they need to develop their talents and showcase their work to the community.",
    impact:
      "Upon completion, the center will serve 450+ youth annually, provide 20+ part-time jobs for local artists as instructors, and host monthly community performances and exhibitions.",
    milestones: [
      {
        date: "2024-01-15",
        title: "Ground Breaking Ceremony",
        completed: true,
      },
      { date: "2024-03-20", title: "Foundation Laid", completed: true },
      {
        date: "2024-06-10",
        title: "Structural Framework Complete",
        completed: true,
      },
      {
        date: "2024-08-15",
        title: "Roofing and Exterior Finish",
        completed: false,
      },
      { date: "2024-10-01", title: "Interior Fittings", completed: false },
      { date: "2024-12-15", title: "Grand Opening", completed: false },
    ],
    team: [
      {
        name: "Jean Claude Uwimana",
        role: "Project Manager",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
      },
      {
        name: "Marie Claire",
        role: "Arts Director",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
      },
    ],
    partners: [
      "Rwanda Arts Council",
      "Local Business Network",
      "Ministry of Youth",
    ],
  },
  {
    id: 2,
    title: "Education for All Initiative",
    category: "education",
    status: "ongoing",
    progress: 45,
    goal: 35000,
    raised: 15750,
    startDate: "2024-02-01",
    endDate: "2024-11-30",
    location: "Multiple Districts",
    beneficiaries: 300,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3",
    gallery: [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3",
    ],
    description:
      "Comprehensive education support including school fees, materials, and tutoring for underprivileged students.",
    longDescription:
      "The Education for All Initiative addresses the barriers that keep children out of school. We provide holistic support including school fees, uniforms, learning materials, nutritious meals, and after-school tutoring. Our goal is to ensure that every child, regardless of their background, has access to quality education and the support they need to succeed academically.",
    impact:
      "This initiative will support 300 students through the academic year, achieve 95% retention rate, and provide 50 hours of tutoring per student.",
    milestones: [
      { date: "2024-02-01", title: "Program Launch", completed: true },
      {
        date: "2024-02-15",
        title: "Student Enrollment Complete",
        completed: true,
      },
      { date: "2024-03-01", title: "First Term Support", completed: true },
      { date: "2024-06-15", title: "Mid-Year Assessments", completed: false },
      { date: "2024-09-01", title: "Second Term Support", completed: false },
      {
        date: "2024-11-30",
        title: "End of Year Celebration",
        completed: false,
      },
    ],
    team: [
      {
        name: "Alice Mukamana",
        role: "Education Coordinator",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
      },
    ],
    partners: ["Ministry of Education", "Local Schools", "UNICEF Rwanda"],
  },
  {
    id: 3,
    title: "Traditional Arts Preservation",
    category: "culture",
    status: "ongoing",
    progress: 80,
    goal: 25000,
    raised: 20000,
    startDate: "2023-09-01",
    endDate: "2024-08-31",
    location: "Eastern Province",
    beneficiaries: 200,
    image:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3",
    gallery: [
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?ixlib=rb-4.0.3",
    ],
    description:
      "Documenting and teaching traditional Rwandan dance, drumming, and crafts to young generations.",
    longDescription:
      "The Traditional Arts Preservation project works with master artists to document and transmit endangered cultural practices. Through intensive workshops, youth learn traditional Intore dance, Umutagara drumming, and ancient craft techniques. The project also creates digital archives and learning materials to ensure these traditions continue for generations.",
    impact:
      "The project has documented 15 traditional dances, trained 50 youth instructors, and reached 200 young people through workshops.",
    milestones: [
      { date: "2023-09-01", title: "Project Launch", completed: true },
      {
        date: "2023-10-15",
        title: "Master Artists Recruitment",
        completed: true,
      },
      { date: "2023-12-10", title: "First Workshop Series", completed: true },
      {
        date: "2024-03-20",
        title: "Digital Archive Creation",
        completed: true,
      },
      {
        date: "2024-06-01",
        title: "Youth Instructor Training",
        completed: false,
      },
      { date: "2024-08-31", title: "Community Showcase", completed: false },
    ],
    team: [
      {
        name: "Emmanuel Dushime",
        role: "Cultural Director",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      },
    ],
    partners: ["Rwanda Cultural Heritage Academy", "Local Elders Council"],
  },
  {
    id: 4,
    title: "Youth Sports Development",
    category: "sports",
    status: "ongoing",
    progress: 35,
    goal: 40000,
    raised: 14000,
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    location: "Gasabo District",
    beneficiaries: 500,
    image:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3",
    gallery: [
      "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1526238988034-552eec6fd59f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1524593166157-1c29ec749b64?ixlib=rb-4.0.3",
    ],
    description:
      "Building sports facilities and programs for boxing, skating, and athletics to promote physical fitness and discipline.",
    longDescription:
      "The Youth Sports Development project creates safe spaces for physical activity and athletic training. We're constructing a multi-purpose sports facility with a boxing ring, skating rink, and training areas. The project includes equipment, coaching, and regular competitions to keep youth engaged and developing their skills.",
    impact:
      "The facility will serve 500 youth annually, provide training for 20 coaches, and host 4 major competitions per year.",
    milestones: [
      { date: "2024-03-01", title: "Site Selection", completed: true },
      { date: "2024-04-15", title: "Construction Begins", completed: true },
      { date: "2024-06-30", title: "Foundation Complete", completed: false },
      { date: "2024-09-15", title: "Main Structure", completed: false },
      { date: "2024-11-30", title: "Equipment Installation", completed: false },
      { date: "2025-01-15", title: "Grand Opening", completed: false },
    ],
    team: [
      {
        name: "Patrick Nsengimana",
        role: "Sports Director",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
      },
    ],
    partners: ["National Sports Council", "Local Boxing Federation"],
  },
  {
    id: 5,
    title: "Girls Empowerment Program",
    category: "social",
    status: "ongoing",
    progress: 60,
    goal: 30000,
    raised: 18000,
    startDate: "2024-01-10",
    endDate: "2024-12-20",
    location: "Rwamagana",
    beneficiaries: 150,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3",
    gallery: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1524062431328-9f4fe202ad35?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3",
    ],
    description:
      "Comprehensive support for girls including mentorship, life skills training, and educational support.",
    longDescription:
      "The Girls Empowerment Program provides a safe space for girls to learn, grow, and develop leadership skills. Through weekly mentorship sessions, life skills workshops, academic support, and health education, we help girls build confidence and make informed decisions about their futures.",
    impact:
      "150 girls are receiving regular mentorship, with 95% showing improved confidence and academic performance.",
    milestones: [
      { date: "2024-01-10", title: "Program Launch", completed: true },
      { date: "2024-02-01", title: "Mentor Training", completed: true },
      { date: "2024-03-15", title: "First Workshop Series", completed: true },
      { date: "2024-05-20", title: "Health Education Module", completed: true },
      { date: "2024-08-01", title: "Leadership Camp", completed: false },
      { date: "2024-11-15", title: "Graduation Ceremony", completed: false },
    ],
    team: [
      {
        name: "Diane Uwase",
        role: "Program Coordinator",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      },
    ],
    partners: ["Girl Up Rwanda", "Ministry of Gender", "Local Health Centers"],
  },
  {
    id: 6,
    title: "Vocational Training Center",
    category: "education",
    status: "planned",
    progress: 15,
    goal: 75000,
    raised: 11250,
    startDate: "2024-07-01",
    endDate: "2025-06-30",
    location: "Huye District",
    beneficiaries: 600,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3",
    gallery: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1485968571000-87d1f00f3626?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3",
    ],
    description:
      "A center offering practical skills training in fashion design, ICT, and entrepreneurship.",
    longDescription:
      "The Vocational Training Center will equip youth with marketable skills for employment and entrepreneurship. Programs include fashion design and tailoring, information technology, business management, and artisan crafts. The center will also provide business incubation support for graduates starting their own enterprises.",
    impact:
      "Annually train 200 youth in vocational skills, with 70% job placement or business startup rate within 6 months of graduation.",
    milestones: [
      { date: "2024-07-01", title: "Land Acquisition", completed: false },
      { date: "2024-08-15", title: "Architectural Design", completed: false },
      { date: "2024-10-01", title: "Construction Start", completed: false },
      { date: "2025-02-01", title: "Building Complete", completed: false },
      { date: "2025-04-01", title: "Equipment Installation", completed: false },
      { date: "2025-06-01", title: "Inauguration", completed: false },
    ],
    team: [
      {
        name: "Peter Mugisha",
        role: "Project Lead",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      },
    ],
    partners: ["TVET Board", "Private Sector Federation", "Local Banks"],
  },
];

// Categories with translation keys (UI elements only)
const categories = [
  { id: "all", icon: <Briefcase className="w-5 h-5" />, translationKey: "all" },
  {
    id: "ongoing",
    icon: <TrendingUp className="w-5 h-5" />,
    translationKey: "ongoing",
  },
  {
    id: "planned",
    icon: <Calendar className="w-5 h-5" />,
    translationKey: "planned",
  },
  {
    id: "completed",
    icon: <CheckCircle className="w-5 h-5" />,
    translationKey: "completed",
  },
  {
    id: "education",
    icon: <BookOpen className="w-5 h-5" />,
    translationKey: "education",
  },
  {
    id: "culture",
    icon: <Music className="w-5 h-5" />,
    translationKey: "culture",
  },
  {
    id: "sports",
    icon: <Award className="w-5 h-5" />,
    translationKey: "sports",
  },
  {
    id: "infrastructure",
    icon: <Home className="w-5 h-5" />,
    translationKey: "infrastructure",
  },
  {
    id: "social",
    icon: <Users className="w-5 h-5" />,
    translationKey: "social",
  },
];

// Project Card Component with i18n (UI only)
const ProjectCard = ({ project, onClick, t }) => {
  const statusColors = {
    ongoing: "bg-green-100 text-green-700 border-green-200",
    planned: "bg-blue-100 text-blue-700 border-blue-200",
    completed: "bg-purple-100 text-purple-700 border-purple-200",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${statusColors[project.status]}`}
          >
            {t(`projects.status.${project.status}`)}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 text-white text-sm">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{project.location}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">
              {t("projects.projectCard.progress")}
            </span>
            <span className="font-semibold text-blue-600">
              {project.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">
                {t("projects.projectCard.beneficiaries")}
              </p>
              <p className="font-semibold">{project.beneficiaries}+</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">
                {t("projects.projectCard.goal")}
              </p>
              <p className="font-semibold">${project.goal.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Funding Progress */}
        <div className="bg-blue-50 rounded-xl p-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-600">
                {t("projects.projectCard.raised")}
              </p>
              <p className="font-bold text-blue-600">
                ${project.raised.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600">
                {t("projects.projectCard.toGo")}
              </p>
              <p className="font-semibold">
                ${(project.goal - project.raised).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Modal Component with i18n (UI only)
const ProjectModal = ({ project, onClose, t }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) return null;

  const tabs = [
    { id: "overview", label: t("projects.modal.tabs.overview") },
    { id: "impact", label: t("projects.modal.tabs.impact") },
    { id: "milestones", label: t("projects.modal.tabs.milestones") },
    { id: "team", label: t("projects.modal.tabs.team") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Section */}
        <div className="relative h-96 bg-gray-900">
          <img
            src={project.gallery[selectedImage]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Gallery Thumbnails */}
          {project.gallery.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-blue-500 scale-110"
                      : "border-white/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                project.status === "ongoing"
                  ? "bg-green-500 text-white"
                  : project.status === "planned"
                    ? "bg-blue-500 text-white"
                    : "bg-purple-500 text-white"
              }`}
            >
              {t(`projects.status.${project.status}`)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Main Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>

              <div className="flex items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>
                    {project.beneficiaries} {t("projects.modal.beneficiaries")}
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-4 border-b mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 font-medium capitalize transition-colors relative ${
                      activeTab === tab.id
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      />
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="bg-gray-50 rounded-xl p-6 mt-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                        {t("projects.modal.projectDetails")}
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            {t("projects.modal.startDate")}
                          </p>
                          <p className="font-medium">
                            {new Date(project.startDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            {t("projects.modal.endDate")}
                          </p>
                          <p className="font-medium">
                            {new Date(project.endDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Impact Tab */}
                {activeTab === "impact" && (
                  <motion.div
                    key="impact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4">
                        {t("projects.modal.expectedImpact")}
                      </h3>
                      <p className="text-gray-700 mb-6">{project.impact}</p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 text-center">
                          <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <p className="text-2xl font-bold">
                            {project.beneficiaries}+
                          </p>
                          <p className="text-sm text-gray-600">
                            {t("projects.modal.directBeneficiaries")}
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center">
                          <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <p className="text-2xl font-bold">
                            ${project.goal.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-600">
                            {t("projects.modal.fundingGoal")}
                          </p>
                        </div>
                      </div>
                    </div>

                    {project.partners && (
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-semibold mb-4">
                          {t("projects.modal.partners")}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.partners.map((partner, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white border rounded-full text-sm"
                            >
                              {partner}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Milestones Tab */}
                {activeTab === "milestones" && (
                  <motion.div
                    key="milestones"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    {project.milestones.map((milestone, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="relative">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              milestone.completed
                                ? "border-green-500 bg-green-500"
                                : "border-gray-300 bg-white"
                            }`}
                          >
                            {milestone.completed && (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )}
                          </div>
                          {idx < project.milestones.length - 1 && (
                            <div className="absolute top-6 left-3 w-0.5 h-12 bg-gray-300" />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">
                                {milestone.title}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {new Date(milestone.date).toLocaleDateString()}
                              </p>
                            </div>
                            {milestone.completed && (
                              <span className="text-green-600 text-sm font-medium">
                                {t("projects.modal.completed")}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Team Tab */}
                {activeTab === "team" && (
                  <motion.div
                    key="team"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid gap-6"
                  >
                    {project.team.map((member, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-bold">{member.name}</h4>
                          <p className="text-gray-600">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column - Funding Info */}
            <div className="lg:w-80">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white sticky top-8">
                <h3 className="text-xl font-bold mb-4">
                  {t("projects.modal.fundingProgress")}
                </h3>

                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{t("projects.modal.raised")}</span>
                    <span className="font-bold">
                      ${project.raised.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span>{t("projects.modal.goal")}</span>
                    <span className="font-bold">
                      ${project.goal.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-3">
                    <div
                      className="bg-white h-3 rounded-full"
                      style={{
                        width: `${(project.raised / project.goal) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-right mt-1 text-sm">
                    {Math.round((project.raised / project.goal) * 100)}%{" "}
                    {t("projects.modal.complete")}
                  </p>
                </div>

                <div className="border-t border-white/20 pt-4 mb-4">
                  <p className="text-sm opacity-90 mb-2">
                    {t("projects.modal.needToReachGoal")}
                  </p>
                  <p className="text-3xl font-bold">
                    ${(project.goal - project.raised).toLocaleString()}
                  </p>
                </div>

                <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors mb-3 flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  {t("projects.modal.donateToProject")}
                </button>

                <button className="w-full border border-white/30 text-white py-3 rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  {t("projects.modal.shareProject")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Fixed Donation CTA Component with i18n (UI only)
const FixedDonationCTA = ({ t }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <motion.div
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      className="fixed bottom-6 right-6 z-40"
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
                  <HeartHandshake className="w-6 h-6" />
                  <h3 className="font-bold">
                    {t("projects.donationCTA.title")}
                  </h3>
                </div>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-white/80 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-blue-100 mb-4">
                {t("projects.donationCTA.description")}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span>{t("projects.donationCTA.activeProjects")}:</span>
                  <span className="font-bold">6</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t("projects.donationCTA.totalNeeded")}:</span>
                  <span className="font-bold">$255,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t("projects.donationCTA.beneficiaries")}:</span>
                  <span className="font-bold">2,200+</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/donate"
                  className="bg-white text-blue-600 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors text-center"
                >
                  {t("projects.donationCTA.donateNow")}
                </Link>
                <Link
                  to="/contact"
                  className="border border-white text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors text-center"
                >
                  {t("projects.donationCTA.sponsor")}
                </Link>
              </div>

              <button className="w-full mt-3 text-xs text-blue-100 hover:text-white transition-colors">
                {t("projects.donationCTA.monthlyGiving")}
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
              <HeartHandshake className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main Projects Page with i18n
const ProjectsPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  
  // Filter projects
  useEffect(() => {
    let filtered = [...projects];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.category === selectedCategory || p.status === selectedCategory,
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.location.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, searchQuery]);

  // Calculate totals
  const totalGoal = projects.reduce((sum, p) => sum + p.goal, 0);
  const totalRaised = projects.reduce((sum, p) => sum + p.raised, 0);
  const totalBeneficiaries = projects.reduce(
    (sum, p) => sum + p.beneficiaries,
    0,
  );
  const activeProjects = projects.filter((p) => p.status === "ongoing").length;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
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
              {t("projects.hero.badge")}
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("projects.hero.title")}
              <br />
              {t("projects.hero.titleLine2")}
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              {t("projects.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("projects-grid")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  <span>{t("projects.hero.exploreButton")}</span>
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
                  to="/donate"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t("projects.hero.supportButton")}
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

      {/* Stats Overview */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">
                {projects.length}
              </div>
              <div className="text-sm text-gray-600">
                {t("projects.stats.totalProjects")}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">
                {activeProjects}
              </div>
              <div className="text-sm text-gray-600">
                {t("projects.stats.activeProjects")}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">
                {totalBeneficiaries}+
              </div>
              <div className="text-sm text-gray-600">
                {t("projects.stats.beneficiaries")}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">
                ${(totalRaised / 1000).toFixed(1)}K
              </div>
              <div className="text-sm text-gray-600">
                {t("projects.stats.raised")} ${(totalGoal / 1000).toFixed(0)}K
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("projects.controls.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                <svg
                  className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-3 border rounded-xl transition-colors flex items-center gap-2 ${
                showFilters
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <Filter className="w-5 h-5" />
              <span>{t("projects.controls.filterButton")}</span>
            </button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="py-4 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                        selectedCategory === category.id
                          ? "bg-blue-600 text-white shadow-lg scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.icon}
                      {t(`projects.categories.${category.translationKey}`)}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            <span className="font-medium">
              {filteredProjects.length} {t("projects.controls.projectsFound")}
            </span>
            {selectedCategory !== "all" && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full flex items-center gap-1">
                {t(
                  `projects.categories.${categories.find((c) => c.id === selectedCategory)?.translationKey}`,
                )}
                <button onClick={() => setSelectedCategory("all")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects-grid" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                  t={t}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Briefcase className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                {t("projects.emptyState.title")}
              </h3>
              <p className="text-gray-500">
                {t("projects.emptyState.description")}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Project CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4">
            {t("projects.featuredCTA.title")}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {t("projects.featuredCTA.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              {t("projects.featuredCTA.donateNow")}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t("projects.featuredCTA.volunteer")}
            </Link>
          </div>
        </div>
      </section>

      {/* Fixed Donation CTA */}
      <FixedDonationCTA t={t} />

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            t={t}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
