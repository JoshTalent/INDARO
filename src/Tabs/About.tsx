// src/pages/About.tsx
"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Shield,
  Users,
  Target,
  Eye,
  History,
  Medal,
  HandHeart,
  Globe,
  Calendar,
  Mail,
  Award,
  Sparkles,
  Quote,
  Play,
  Linkedin,
  Twitter,
  ArrowRight,
  CheckCircle,
  Briefcase,
  Music,
  BookHeart,
  Trophy,
  Palette,
  ChevronDown,
  Clock,
  ExternalLink,
  TrendingUp,
  Layers,
} from "lucide-react";

// Import images (adjust paths based on your assets)
import AboutHero from "../assets/youth.jpeg";
import FounderImage from "../assets/acrobacy.jpg";
import Team1 from "../assets/acrobacy.jpg";
import Team2 from "../assets/acrobacy.jpg";
import Team3 from "../assets/acrobacy.jpg";
import Team4 from "../assets/acrobacy.jpg";
import Volunteer1 from "../assets/acrobacy.jpg";
import Volunteer2 from "../assets/acrobacy.jpg";
import Volunteer3 from "../assets/acrobacy.jpg";
import Volunteer4 from "../assets/acrobacy.jpg";
import Partner1 from "../assets/acrobacy.jpg";
import Partner2 from "../assets/acrobacy.jpg";
import Partner3 from "../assets/acrobacy.jpg";

// Type definitions
interface ValueProps {
  icon: any;
  title: string;
  description: string;
  longDescription: string;
  color: string;
  bgColor: string;
  iconColor: string;
  stats: string;
  achievements: string[];
  metric: string;
  metricLabel: string;
}

interface TimelineProps {
  year: string;
  title: string;
  description: string;
  details: string;
  icon: any;
  impact: string;
  color: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  fullBio: string;
  specialty: string;
  experience: string;
  social: { linkedin: string; twitter: string; email: string };
  expertise: string[];
}

export default function About() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">(
    "mission",
  );

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = heroRef.current.getBoundingClientRect();
        const x = (clientX / width - 0.5) * 20;
        const y = (clientY / height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Advanced scroll animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);
  const heroY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), {
    stiffness: 100,
    damping: 30,
  });

  const sectionProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const progressWidth = useMotionTemplate`${sectionProgress}%`;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  };

  // Enhanced core values with metrics
  const coreValues: ValueProps[] = [
    {
      icon: Shield,
      title: t("about.values.integrity.title"),
      description: t("about.values.integrity.description"),
      longDescription: t("about.values.integrity.longDescription"),
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      stats: t("about.values.integrity.stats"),
      achievements: t("about.values.integrity.achievements", {
        returnObjects: true,
      }) as string[],
      metric: "100%",
      metricLabel: "Transparency Score",
    },
    {
      icon: Heart,
      title: t("about.values.compassion.title"),
      description: t("about.values.compassion.description"),
      longDescription: t("about.values.compassion.longDescription"),
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      stats: t("about.values.compassion.stats"),
      achievements: t("about.values.compassion.achievements", {
        returnObjects: true,
      }) as string[],
      metric: "10K+",
      metricLabel: "Lives Touched",
    },
    {
      icon: Target,
      title: t("about.values.empowerment.title"),
      description: t("about.values.empowerment.description"),
      longDescription: t("about.values.empowerment.longDescription"),
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      stats: t("about.values.empowerment.stats"),
      achievements: t("about.values.empowerment.achievements", {
        returnObjects: true,
      }) as string[],
      metric: "85%",
      metricLabel: "Success Rate",
    },
    {
      icon: Users,
      title: t("about.values.community.title"),
      description: t("about.values.community.description"),
      longDescription: t("about.values.community.longDescription"),
      color: "from-blue-600 to-purple-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      stats: t("about.values.community.stats"),
      achievements: t("about.values.community.achievements", {
        returnObjects: true,
      }) as string[],
      metric: "500+",
      metricLabel: "Active Members",
    },
  ];

  const programs = [
    {
      icon: Music,
      title: t("about.programs.traditional.title"),
      description: t("about.programs.traditional.description"),
      participants: "80+",
      impact: "45% growth",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Palette,
      title: t("about.programs.creative.title"),
      description: t("about.programs.creative.description"),
      participants: "60+",
      impact: "30 exhibitions",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: BookHeart,
      title: t("about.programs.education.title"),
      description: t("about.programs.education.description"),
      participants: "120+",
      impact: "90% pass rate",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Trophy,
      title: t("about.programs.sports.title"),
      description: t("about.programs.sports.description"),
      participants: "90+",
      impact: "15 medals",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
  ];

  // Enhanced timeline with impact metrics
  const timeline: TimelineProps[] = [
    {
      year: "2018",
      title: t("about.history.timeline.begin.title"),
      description: t("about.history.timeline.begin.description"),
      details: t("about.history.timeline.begin.details"),
      icon: Calendar,
      impact: "Started with 15 children",
      color: "blue",
    },
    {
      year: "2019",
      title: t("about.history.timeline.milestone.title"),
      description: t("about.history.timeline.milestone.description"),
      details: t("about.history.timeline.milestone.details"),
      icon: Trophy,
      impact: "Expanded to 50 children",
      color: "blue",
    },
    {
      year: "2020",
      title: t("about.history.timeline.covid.title"),
      description: t("about.history.timeline.covid.description"),
      details: t("about.history.timeline.covid.details"),
      icon: Heart,
      impact: "100+ families supported",
      color: "blue",
    },
    {
      year: "2022",
      title: t("about.history.timeline.expansion.title"),
      description: t("about.history.timeline.expansion.description"),
      details: t("about.history.timeline.expansion.details"),
      icon: Users,
      impact: "5 new programs launched",
      color: "blue",
    },
    {
      year: "2024",
      title: t("about.history.timeline.today.title"),
      description: t("about.history.timeline.today.description"),
      details: t("about.history.timeline.today.details"),
      icon: Award,
      impact: "200+ children empowered",
      color: "blue",
    },
  ];

  const leadershipTeam: TeamMemberProps[] = [
    {
      name: t("about.leadership.team.eric.name"),
      role: t("about.leadership.team.eric.role"),
      image: Team1,
      bio: t("about.leadership.team.eric.bio"),
      fullBio: t("about.leadership.team.eric.fullBio"),
      specialty: t("about.leadership.team.eric.specialty"),
      experience: t("about.leadership.team.eric.experience"),
      social: { linkedin: "#", twitter: "#", email: "#" },
      expertise: [
        "Strategic Planning",
        "Community Building",
        "Youth Development",
      ],
    },
    {
      name: t("about.leadership.team.adeline.name"),
      role: t("about.leadership.team.adeline.role"),
      image: Team2,
      bio: t("about.leadership.team.adeline.bio"),
      fullBio: t("about.leadership.team.adeline.fullBio"),
      specialty: t("about.leadership.team.adeline.specialty"),
      experience: t("about.leadership.team.adeline.experience"),
      social: { linkedin: "#", twitter: "#", email: "#" },
      expertise: ["Education", "Program Design", "Mentoring"],
    },
    {
      name: t("about.leadership.team.hussein.name"),
      role: t("about.leadership.team.hussein.role"),
      image: Team3,
      bio: t("about.leadership.team.hussein.bio"),
      fullBio: t("about.leadership.team.hussein.fullBio"),
      specialty: t("about.leadership.team.hussein.specialty"),
      experience: t("about.leadership.team.hussein.experience"),
      social: { linkedin: "#", twitter: "#", email: "#" },
      expertise: ["Sports Management", "Team Building", "Health & Wellness"],
    },
    {
      name: t("about.leadership.team.issiac.name"),
      role: t("about.leadership.team.issiac.role"),
      image: Team4,
      bio: t("about.leadership.team.issiac.bio"),
      fullBio: t("about.leadership.team.issiac.fullBio"),
      specialty: t("about.leadership.team.issiac.specialty"),
      experience: t("about.leadership.team.issiac.experience"),
      social: { linkedin: "#", twitter: "#", email: "#" },
      expertise: ["Arts & Culture", "Creative Direction", "Community Arts"],
    },
  ];

  const volunteers = [
    {
      name: t("about.volunteers.volunteers.omar.name"),
      role: t("about.volunteers.volunteers.omar.role"),
      image: Volunteer1,
      specialty: t("about.volunteers.volunteers.omar.specialty"),
      passion: t("about.volunteers.volunteers.omar.passion"),
      years: t("about.volunteers.volunteers.omar.years"),
      contributions: "Led 20+ workshops",
    },
    {
      name: t("about.volunteers.volunteers.adolphe.name"),
      role: t("about.volunteers.volunteers.adolphe.role"),
      image: Volunteer2,
      specialty: t("about.volunteers.volunteers.adolphe.specialty"),
      passion: t("about.volunteers.volunteers.adolphe.passion"),
      years: t("about.volunteers.volunteers.adolphe.years"),
      contributions: "Mentored 30+ youth",
    },
    {
      name: t("about.volunteers.volunteers.innocent.name"),
      role: t("about.volunteers.volunteers.innocent.role"),
      image: Volunteer3,
      specialty: t("about.volunteers.volunteers.innocent.specialty"),
      passion: t("about.volunteers.volunteers.innocent.passion"),
      years: t("about.volunteers.volunteers.innocent.years"),
      contributions: "Organized 15 events",
    },
    {
      name: t("about.volunteers.volunteers.leonard.name"),
      role: t("about.volunteers.volunteers.leonard.role"),
      image: Volunteer4,
      specialty: t("about.volunteers.volunteers.leonard.specialty"),
      passion: t("about.volunteers.volunteers.leonard.passion"),
      years: t("about.volunteers.volunteers.leonard.years"),
      contributions: "100+ hours volunteered",
    },
    {
      name: t("about.volunteers.volunteers.germain.name"),
      role: t("about.volunteers.volunteers.germain.role"),
      image: Volunteer1,
      specialty: t("about.volunteers.volunteers.germain.specialty"),
      passion: t("about.volunteers.volunteers.germain.passion"),
      years: t("about.volunteers.volunteers.germain.years"),
      contributions: "Digital skills trainer",
    },
  ];

  const partners = [
    {
      name: t("about.partners.partners.giant.name"),
      logo: Partner1,
      url: "#",
      description: t("about.partners.partners.giant.description"),
      since: t("about.partners.partners.giant.since"),
      impact: t("about.partners.partners.giant.impact"),
      type: "Strategic Partner",
      collaboration: "Education Programs",
    },
    {
      name: t("about.partners.partners.goskillz.name"),
      logo: Partner2,
      url: "#",
      description: t("about.partners.partners.goskillz.description"),
      since: t("about.partners.partners.goskillz.since"),
      impact: t("about.partners.partners.goskillz.impact"),
      type: "Technical Partner",
      collaboration: "Skills Training",
    },
    {
      name: t("about.partners.partners.kigali.name"),
      logo: Partner3,
      url: "#",
      description: t("about.partners.partners.kigali.description"),
      since: t("about.partners.partners.kigali.since"),
      impact: t("about.partners.partners.kigali.impact"),
      type: "Government Partner",
      collaboration: "Community Outreach",
    },
  ];

  // Statistics for impact section
  const impactStats = [
    {
      label: "Children Supported",
      value: "200+",
      icon: Users,
      change: "+25%",
      color: "blue",
    },
    {
      label: "Programs Running",
      value: "10+",
      icon: Layers,
      change: "+40%",
      color: "blue",
    },
    {
      label: "Volunteer Hours",
      value: "5,000+",
      icon: Clock,
      change: "+60%",
      color: "blue",
    },
    {
      label: "Communities Reached",
      value: "15+",
      icon: Globe,
      change: "+35%",
      color: "blue",
    },
  ];

  return (
    <main ref={containerRef} className="bg-white relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 z-50"
        style={{ width: progressWidth }}
      />

      {/* ENHANCED HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background with parallax */}
        <motion.div
          style={{
            y: heroY,
            scale: heroScale,
            filter: `blur(${heroBlur}px)`,
          }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0">
            <img
              src={AboutHero}
              alt={t("about.hero.title")}
              className="w-full h-full object-cover"
            />

            {/* Advanced gradient overlays */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-black/60" />

            {/* Animated pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L45 15 L45 45 L15 45 L15 15 L30 30' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            {/* Animated floating orbs */}
            <motion.div
              animate={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 30 }}
              className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: -mousePosition.x * 0.5,
                y: -mousePosition.y * 0.5,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 30 }}
              className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
            />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32">
          <div className="max-w-5xl mx-auto">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20 shadow-2xl"
            >
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold uppercase tracking-wider text-white">
                {t("about.hero.badge")}
              </span>
            </motion.div>

            {/* Main title with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">{t("about.hero.title")} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">
                {t("about.hero.titleHighlight")}
              </span>
            </motion.h1>

            {/* Description with animated background */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative max-w-3xl mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent blur-3xl" />
              <p className="relative text-xl md:text-2xl text-white/95 leading-relaxed">
                {t("about.hero.description")}
              </p>
            </motion.div>

            {/* CTA Buttons with advanced hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("about.hero.cta1")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white/30 backdrop-blur-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <Link to="/impact" className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  {t("about.hero.cta2")}
                </Link>
              </motion.button>
            </motion.div>

            {/* Stats grid with hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mt-16"
            >
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
                    <stat.icon className="w-5 h-5 text-blue-300 mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                    <div className="absolute top-2 right-2 text-xs text-blue-300">
                      {stat.change}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator with animation */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision Tabs Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-gray-100 rounded-2xl">
              {["mission", "vision", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-white text-blue-600 shadow-lg"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {t(`about.${tab}.title`)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === "mission" && (
              <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <Target className="w-16 h-16 text-blue-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t("about.mission.title")}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {t("about.mission.description")}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">Impact 200+ lives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">10 active programs</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <Eye className="w-16 h-16 text-blue-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t("about.vision.title")}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {t("about.vision.description")}
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    2030 Goal
                  </h3>
                  <p className="text-blue-700">
                    Reach 1000+ children across 50 communities
                  </p>
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div className="grid md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                    <value.icon className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 group-hover:border-blue-200 transition-all duration-500">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {program.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-blue-600">
                        {program.participants} participants
                      </span>
                      <span className="text-xs text-gray-500">
                        {program.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 rounded-full mb-6 border border-blue-200">
              <History className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {t("about.history.badge")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("about.history.title")}{" "}
              <span className="text-blue-600">
                {t("about.history.titleHighlight")}
              </span>
            </h2>

            <p className="text-xl text-gray-600">
              {t("about.history.description")}
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600" />

            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={index}
                  className={`relative flex items-start gap-6 mb-12 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 border-blue-200"
                    >
                      <Icon className="w-8 h-8 text-blue-600" />
                    </motion.div>
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      {item.year}
                    </div>
                  </div>

                  <div className="flex-1 group">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-3 font-medium">
                        {item.description}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.details}
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        <TrendingUp className="w-3 h-3" />
                        {item.impact}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 rounded-full mb-6 border border-blue-200">
              <Medal className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {t("about.values.badge")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("about.values.title")}{" "}
              <span className="text-blue-600">
                {t("about.values.titleHighlight")}
              </span>
            </h2>

            <p className="text-xl text-gray-600">
              {t("about.values.description")}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              const isHovered = hoveredValue === index;

              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  onHoverStart={() => setHoveredValue(index)}
                  onHoverEnd={() => setHoveredValue(null)}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 mb-4 flex-grow">
                      {isHovered ? value.longDescription : value.description}
                    </p>

                    {/* Metric Badge */}
                    <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">
                        {value.metric}
                      </div>
                      <div className="text-xs text-gray-600">
                        {value.metricLabel}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-sm font-semibold text-blue-600">
                        {value.stats}
                      </span>
                    </div>

                    {/* Achievements */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-2">
                        {value.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-gray-600"
                          >
                            <CheckCircle className="w-3 h-3 text-blue-600" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={FounderImage}
                  alt={t("about.founder.name")}
                  className="w-full h-[600px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-blue-900/20 to-transparent" />

                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                >
                  <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                    <Quote className="w-8 h-8 text-blue-300 mb-2" />
                    <p className="text-lg italic text-white/95">
                      {t("about.founder.quote")}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 rounded-full mb-6 border border-blue-400/30 backdrop-blur-sm">
                <HandHeart className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                  {t("about.founder.badge")}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {t("about.founder.name")}
              </h2>
              <p className="text-xl text-blue-300 font-medium mb-6">
                {t("about.founder.role")}
              </p>

              <div className="space-y-6 text-white/90 text-lg mb-8">
                <p>{t("about.founder.description1")}</p>
                <p>{t("about.founder.description2")}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "10+", label: t("about.founder.yearsOfService") },
                  { value: "200+", label: t("about.founder.childrenHelped") },
                  { value: "50+", label: t("about.founder.teamMembers") },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "#", color: "bg-blue-600" },
                  { icon: Mail, href: "#", color: "bg-blue-500" },
                  { icon: Twitter, href: "#", color: "bg-blue-400" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    className={`w-12 h-12 ${social.color} text-white rounded-full flex items-center justify-center hover:shadow-xl transition-all`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 rounded-full mb-6 border border-blue-200">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {t("about.leadership.badge")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("about.leadership.title")}{" "}
              <span className="text-blue-600">
                {t("about.leadership.titleHighlight")}
              </span>
            </h2>

            <p className="text-xl text-gray-600">
              {t("about.leadership.description")}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {leadershipTeam.map((member, index) => {
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  onHoverStart={() => setHoveredValue(index)}
                  onHoverEnd={() => setHoveredValue(null)}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Expertise tags on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full border border-white/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social icons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <a
                          href={member.social.linkedin}
                          className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-blue-600 transition-all border border-white/30"
                        >
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                        <a
                          href={member.social.email}
                          className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-blue-600 transition-all border border-white/30"
                        >
                          <Mail className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">{member.bio}</p>

                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {member.specialty}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {member.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 rounded-full mb-6 border border-blue-200">
              <HandHeart className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {t("about.volunteers.badge")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("about.volunteers.title")}{" "}
              <span className="text-blue-600">
                {t("about.volunteers.titleHighlight")}
              </span>
            </h2>

            <p className="text-xl text-gray-600">
              {t("about.volunteers.description")}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
          >
            {volunteers.map((volunteer, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={volunteer.image}
                    alt={volunteer.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs text-white/90">
                      {volunteer.contributions}
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {volunteer.name}
                  </h3>
                  <p className="text-sm text-gray-600">{volunteer.role}</p>
                  <p className="text-xs text-blue-600 mt-1">
                    {volunteer.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 rounded-full mb-6 border border-blue-200">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {t("about.partners.badge")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("about.partners.title")}{" "}
              <span className="text-blue-600">
                {t("about.partners.titleHighlight")}
              </span>
            </h2>

            <p className="text-xl text-gray-600">
              {t("about.partners.description")}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {partners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.url}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-20 w-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-center">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-3">
                    {partner.description}
                  </p>

                  {/* Partner type badge */}
                  <div className="text-center mb-3">
                    <span className="inline-block text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {partner.type}
                    </span>
                  </div>

                  <div className="flex justify-center gap-4 text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {partner.since}
                    </span>
                    <span className="flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      {partner.collaboration}
                    </span>
                  </div>

                  {/* Impact badge */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs text-blue-600 font-semibold">
                      {partner.impact}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              {
                value: "2018",
                label: t("about.stats.founded"),
                icon: Calendar,
              },
              {
                value: "200+",
                label: t("about.stats.childrenSupported"),
                icon: Users,
              },
              {
                value: "10+",
                label: t("about.stats.activePrograms"),
                icon: Layers,
              },
              {
                value: "50+",
                label: t("about.stats.communityPartners"),
                icon: Globe,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center text-white group"
              >
                <div className="relative inline-block">
                  <stat.icon className="w-8 h-8 text-blue-300 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={scaleIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-blue-500/30 to-blue-400/30 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              {/* Animated background orbs */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50" />

              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                >
                  <Heart className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("about.cta.title")}
                </h2>

                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  {t("about.cta.description")}
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold overflow-hidden shadow-xl"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Link to="/donate">{t("about.cta.button1")}</Link>
                      <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </span>
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600"
                    />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Link to="/contact">{t("about.cta.button2")}</Link>
                      <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </span>
                  </motion.button>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    {t("about.cta.registered")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white backdrop-blur-lg rounded-full shadow-xl flex items-center justify-center border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 z-50 group"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform" />
      </motion.button>
    </main>
  );
}
