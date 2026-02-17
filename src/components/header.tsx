import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  Award,
  BookOpen,
  Newspaper,
  ArrowRight,
  Sparkles,
  FolderKanban,
  Image,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import Logo from "../assets/logo.png";

const IndaroNavbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [whatWeDoDropdownOpen, setWhatWeDoDropdownOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const whatWeDoDropdownRef = useRef<HTMLDivElement>(null);
  const whatWeDoButtonRef = useRef<HTMLButtonElement>(null);
  const moreDropdownRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close What We Do dropdown
      if (
        whatWeDoDropdownRef.current &&
        !whatWeDoDropdownRef.current.contains(event.target as Node) &&
        whatWeDoButtonRef.current &&
        !whatWeDoButtonRef.current.contains(event.target as Node)
      ) {
        setWhatWeDoDropdownOpen(false);
      }

      // Close More dropdown
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target as Node) &&
        moreButtonRef.current &&
        !moreButtonRef.current.contains(event.target as Node)
      ) {
        setMoreDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [mobileMenuOpen]);

  // Language switcher handler
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setMobileMenuOpen(false);
  };

  // Toggle What We Do dropdown
  const toggleWhatWeDoDropdown = () => {
    setWhatWeDoDropdownOpen(!whatWeDoDropdownOpen);
    // Close More dropdown if open
    if (moreDropdownOpen) setMoreDropdownOpen(false);
  };

  // Close What We Do dropdown
  const closeWhatWeDoDropdown = () => {
    setWhatWeDoDropdownOpen(false);
  };

  // Toggle More dropdown
  const toggleMoreDropdown = () => {
    setMoreDropdownOpen(!moreDropdownOpen);
    // Close What We Do dropdown if open
    if (whatWeDoDropdownOpen) setWhatWeDoDropdownOpen(false);
  };

  // Close More dropdown
  const closeMoreDropdown = () => {
    setMoreDropdownOpen(false);
  };

  // Navigation links - USING TRANSLATIONS
  const navLinks = [
    { href: "/", label: t("nav.home"), key: "home" },
    { href: "/about", label: t("nav.about"), key: "about" },
    {
      href: "/what/we/do",
      label: t("nav.whatWeDo"),
      key: "whatWeDo",
      hasDropdown: true,
    },
    {
      href: "/more",
      label: t("nav.more"),
      key: "more",
      hasDropdown: true,
    },
    { href: "/contact", label: t("nav.contact"), key: "contact" },
  ];

  // What We Do items - PROFESSIONAL - NO EMOJIS
  const whatWeDoItems = [
    { name: t("whatWeDo.acrobatics"), href: "/programs/acrobatics" },
    { name: t("whatWeDo.afroDance"), href: "/programs/dance" },
    { name: t("whatWeDo.boxing"), href: "/programs/boxing" },
    { name: t("whatWeDo.educationSupport"), href: "/programs/education" },
    { name: t("whatWeDo.fashion"), href: "/programs/fashion" },
    { name: t("whatWeDo.manners"), href: "/programs/manners" },
    { name: t("whatWeDo.skating"), href: "/programs/skating" },
    {
      name: t("whatWeDo.traditionalDance"),
      href: "/programs/traditional/dance",
    },
    { name: t("whatWeDo.drumming"), href: "/programs/drumming" },
    { name: t("whatWeDo.singing"), href: "/programs/singing" },
  ];

  // More dropdown items - PROFESSIONAL - NO EMOJIS
  const moreItems = [
    { name: t("more.impact"), icon: Award, href: "/impact" },
    { name: t("more.gallery"), icon: Image, href: "/gallery" },
    { name: t("more.projects"), icon: FolderKanban, href: "/projects" },
    { name: t("more.news"), icon: Newspaper, href: "/news" },
  ];

  const currentLang = i18n.language?.substring(0, 2) || "en";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 pb-30 ${
        isScrolled ? "bg-black/90 shadow-lg backdrop-blur-lg" : "bg-transparent"
      }`}
      style={{ isolation: "isolate" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center relative z-[101]">
        {/* ========== LOGO ========== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          <img
            src={Logo}
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border-2 border-white/20 shadow-lg"
            alt="Indaro yacu"
          />
          <span className="text-lg sm:text-xl md:text-xl font-extrabold tracking-wide uppercase">
            <span className="text-white">Indaro</span>
            <span className="text-indaro-primary">yacu</span>
          </span>
        </motion.div>

        {/* ========== DESKTOP MENU ========== */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              link.key === "whatWeDo" ? (
                // What We Do dropdown
                <div key={link.key} className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <button
                      ref={whatWeDoButtonRef}
                      onClick={toggleWhatWeDoDropdown}
                      className={`flex items-center gap-1.5 font-semibold tracking-wide transition-colors duration-300 ${
                        location.pathname.includes("/programs") ||
                        whatWeDoDropdownOpen
                          ? "text-indaro-primary"
                          : "text-white/90 hover:text-indaro-primary"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          whatWeDoDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-500 ${
                        location.pathname.includes("/programs") ||
                        whatWeDoDropdownOpen
                          ? "w-full bg-indaro-primary"
                          : "w-0 bg-indaro-primary group-hover:w-full"
                      }`}
                    />
                  </motion.div>

                  {/* What We Do DROPDOWN - PROFESSIONAL NO EMOJIS */}
                  <AnimatePresence>
                    {whatWeDoDropdownOpen && (
                      <motion.div
                        ref={whatWeDoDropdownRef}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-5 w-[800px] z-[200]"
                      >
                        <div className="bg-black/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden relative">
                          {/* X Close Button - Top Right Corner */}
                          <button
                            onClick={closeWhatWeDoDropdown}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200 group"
                            aria-label="Close menu"
                          >
                            <X
                              size={18}
                              className="text-white/60 group-hover:text-white group-hover:rotate-90 transition-all duration-300"
                            />
                          </button>

                          {/* Header with gradient */}
                          <div className="bg-gradient-to-r from-indaro-primary/20 via-indaro-primary/10 to-transparent px-6 py-5 border-b border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="p-3 bg-indaro-primary/20 rounded-xl">
                                  <BookOpen
                                    size={24}
                                    className="text-indaro-primary"
                                  />
                                </div>
                                <div>
                                  <h3 className="text-white font-bold text-xl mb-1">
                                    {t("nav.whatWeDo")}
                                  </h3>
                                  <p className="text-white/60 text-sm flex items-center gap-2">
                                    <Sparkles
                                      size={14}
                                      className="text-indaro-primary"
                                    />
                                    {t("nav.viewAllPrograms")} •{" "}
                                    {whatWeDoItems.length}{" "}
                                    {t("whatWeDo.programs") || "programs"}
                                  </p>
                                </div>
                              </div>
                              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                                <span className="text-indaro-primary font-semibold text-sm">
                                  2024 • {t("nav.new") || "New"}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* What We Do Items Grid - 2 columns - NO EMOJIS */}
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {whatWeDoItems.map((item, index) => (
                                <motion.a
                                  key={index}
                                  href={item.href}
                                  whileHover={{ x: 4 }}
                                  onClick={closeWhatWeDoDropdown}
                                  className="group/program flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                                >
                                  <span className="font-medium text-sm text-white/90 group-hover/program:text-indaro-primary transition-colors">
                                    {item.name}
                                  </span>
                                  <ArrowRight
                                    size={14}
                                    className="text-indaro-primary opacity-0 group-hover/program:opacity-100 transform translate-x-[-10px] group-hover/program:translate-x-0 transition-all duration-200"
                                  />
                                </motion.a>
                              ))}
                            </div>
                          </div>

                          {/* Footer CTA */}
                          <div className="border-t border-white/10 bg-white/5 px-6 py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Heart
                                  size={16}
                                  className="text-indaro-primary"
                                />
                                <span className="text-xs text-white/60">
                                  {t("footer.support") ||
                                    "Support our programs • Make a difference today"}
                                </span>
                              </div>
                              <motion.a
                                href="/what/we/do"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={closeWhatWeDoDropdown}
                                className="flex items-center gap-2 px-5 py-2.5 bg-indaro-primary text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-indaro-primary/30 transition-all duration-200 group"
                              >
                                <span>{t("nav.viewAllPrograms")}</span>
                                <ArrowRight
                                  size={14}
                                  className="group-hover:translate-x-1 transition-transform"
                                />
                              </motion.a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // More dropdown
                <div key={link.key} className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <button
                      ref={moreButtonRef}
                      onClick={toggleMoreDropdown}
                      className={`flex items-center gap-1.5 font-semibold tracking-wide transition-colors duration-300 ${
                        location.pathname.includes("/impact") ||
                        location.pathname.includes("/gallery") ||
                        location.pathname.includes("/projects") ||
                        location.pathname.includes("/news") ||
                        moreDropdownOpen
                          ? "text-indaro-primary"
                          : "text-white/90 hover:text-indaro-primary"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          moreDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-500 ${
                        location.pathname.includes("/impact") ||
                        location.pathname.includes("/gallery") ||
                        location.pathname.includes("/projects") ||
                        location.pathname.includes("/news") ||
                        moreDropdownOpen
                          ? "w-full bg-indaro-primary"
                          : "w-0 bg-indaro-primary group-hover:w-full"
                      }`}
                    />
                  </motion.div>

                  {/* More DROPDOWN - PROFESSIONAL */}
                  <AnimatePresence>
                    {moreDropdownOpen && (
                      <motion.div
                        ref={moreDropdownRef}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-5 w-[280px] z-[200]"
                      >
                        <div className="bg-black/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden relative">
                          {/* X Close Button - Top Right Corner */}
                          <button
                            onClick={closeMoreDropdown}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200 group"
                            aria-label="Close menu"
                          >
                            <X
                              size={18}
                              className="text-white/60 group-hover:text-white group-hover:rotate-90 transition-all duration-300"
                            />
                          </button>

                          {/* Header */}
                          <div className="bg-gradient-to-r from-indaro-primary/20 via-indaro-primary/10 to-transparent px-6 py-5 border-b border-white/10">
                            <div className="flex items-center gap-4">
                              <div className="p-3 bg-indaro-primary/20 rounded-xl">
                                <Award
                                  size={24}
                                  className="text-indaro-primary"
                                />
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-xl mb-1">
                                  {t("nav.more")}
                                </h3>
                                <p className="text-white/60 text-sm">
                                  {t("more.explore") ||
                                    "Explore our impact and stories"}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* More Items - NO EMOJIS, USING LUCIDE ICONS */}
                          <div className="p-4">
                            <div className="space-y-1">
                              {moreItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                  <motion.a
                                    key={index}
                                    href={item.href}
                                    whileHover={{ x: 4 }}
                                    onClick={closeMoreDropdown}
                                    className="group/more flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                                  >
                                    <Icon
                                      size={18}
                                      className="text-white/60 group-hover/more:text-indaro-primary transition-colors"
                                    />
                                    <div className="flex-1 flex items-center justify-between">
                                      <span className="font-medium text-sm text-white/90 group-hover/more:text-indaro-primary transition-colors">
                                        {item.name}
                                      </span>
                                      <ArrowRight
                                        size={14}
                                        className="text-indaro-primary opacity-0 group-hover/more:opacity-100 transform translate-x-[-10px] group-hover/more:translate-x-0 transition-all duration-200"
                                      />
                                    </div>
                                  </motion.a>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            ) : (
              // Regular nav links
              <motion.div
                key={link.key}
                className="relative group"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.href}
                  className={`font-semibold tracking-wide transition-colors duration-300 ${
                    location.pathname === link.href
                      ? "text-indaro-primary"
                      : "text-white/90 hover:text-indaro-primary"
                  }`}
                >
                  {link.label}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-500 ${
                    location.pathname === link.href
                      ? "w-full bg-indaro-primary"
                      : "w-0 bg-indaro-primary group-hover:w-full"
                  }`}
                />
              </motion.div>
            ),
          )}

          {/* Language Switcher */}
          <div className="flex items-center gap-1 px-3 py-2 bg-white/10 rounded-full border border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-2.5 py-1.5 rounded-full transition-all duration-200 ${
                  currentLang === "en"
                    ? "bg-indaro-primary text-white shadow-lg"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                EN
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => changeLanguage("rw")}
                className={`px-2.5 py-1.5 rounded-full transition-all duration-200 ${
                  currentLang === "rw"
                    ? "bg-indaro-primary text-white shadow-lg"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                RW
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => changeLanguage("fr")}
                className={`px-2.5 py-1.5 rounded-full transition-all duration-200 ${
                  currentLang === "fr"
                    ? "bg-indaro-primary text-white shadow-lg"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Donate Button */}
          <Link to="/donate">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(37,99,235,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-6 py-2.5 font-semibold rounded-full bg-indaro-primary text-white shadow-lg hover:bg-indaro-dark transition-all duration-300 flex items-center gap-2"
            >
              <Heart size={16} />
              {t("buttons.donate")}
            </motion.button>
          </Link>
        </div>

        {/* ========== MOBILE HAMBURGER ========== */}
        <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
          {/* Mobile Donate Button */}
          <Link to="/donate">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 font-semibold text-xs sm:text-sm rounded-full bg-indaro-primary text-white shadow-lg flex items-center gap-1 sm:gap-1.5"
            >
              <Heart size={12} className="sm:hidden" />
              <Heart size={14} className="hidden sm:block" />
              <span className="hidden xs:inline">{t("buttons.donate")}</span>
            </motion.button>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none text-white p-1.5 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ========== MOBILE MENU OVERLAY ========== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 w-full h-full bg-black/95 backdrop-blur-lg z-[200] overflow-y-auto"
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: "fixed",
              height: "100vh",
              width: "100vw",
            }}
          >
            <div className="min-h-full flex flex-col items-center pt-20 pb-8 px-4">
              {/* Mobile Menu Header */}
              <div className="w-full max-w-md mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={Logo}
                      className="h-8 w-8 rounded-full border border-white/20"
                      alt="Indaro yacu"
                    />
                    <span className="text-sm font-bold tracking-wide uppercase">
                      <span className="text-white">Indaro</span>
                      <span className="text-indaro-primary">yacu</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200"
                    aria-label="Close mobile menu"
                  >
                    <X size={20} className="text-white/60 hover:text-white" />
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="w-full max-w-md space-y-2">
                {navLinks.map((link, idx) => {
                  return link.hasDropdown ? (
                    link.key === "whatWeDo" ? (
                      // What We Do mobile dropdown
                      <div
                        key={link.key}
                        className="border-b border-white/10 pb-2"
                      >
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          onClick={() => setWhatWeDoOpen(!whatWeDoOpen)}
                          className="flex items-center justify-between w-full py-3 text-white hover:text-indaro-primary transition-colors"
                        >
                          <span className="font-semibold text-base">
                            {t("nav.whatWeDo")}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              whatWeDoOpen ? "rotate-180" : ""
                            }`}
                          />
                        </motion.button>

                        <AnimatePresence>
                          {whatWeDoOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {/* VIEW ALL PROGRAMS BUTTON - PROMINENT AT TOP */}
                              <motion.a
                                href="/what/we/do"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 }}
                                className="flex items-center justify-between px-4 py-3.5 mb-3 bg-gradient-to-r from-indaro-primary/20 to-indaro-primary/5 rounded-xl border border-indaro-primary/30 group"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="p-2 bg-indaro-primary/20 rounded-lg">
                                    <BookOpen
                                      size={18}
                                      className="text-indaro-primary"
                                    />
                                  </div>
                                  <div>
                                    <span className="font-bold text-white text-base block">
                                      {t("nav.viewAllPrograms") ||
                                        "View All Programs"}
                                    </span>
                                    <span className="text-xs text-white/60">
                                      {whatWeDoItems.length}{" "}
                                      {t("whatWeDo.programs") || "programs"}{" "}
                                      available
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <ArrowRight
                                    size={18}
                                    className="text-indaro-primary group-hover:translate-x-1 transition-transform"
                                  />
                                </div>
                              </motion.a>

                              {/* Programs Grid */}
                              <div className="grid grid-cols-1 gap-1 pb-3">
                                {whatWeDoItems.map((item, index) => (
                                  <motion.a
                                    key={index}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.03 + 0.1 }}
                                    className="flex items-center justify-between px-3 py-2.5 text-sm text-white/80 hover:text-indaro-primary hover:bg-white/5 rounded-lg transition-all group"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <span>{item.name}</span>
                                    <ArrowRight
                                      size={14}
                                      className="text-indaro-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-200"
                                    />
                                  </motion.a>
                                ))}
                              </div>

                              {/* Optional: Support footer */}
                              <div className="mt-2 pt-3 border-t border-white/10">
                                <div className="flex items-center gap-2 px-3 py-2">
                                  <Heart
                                    size={14}
                                    className="text-indaro-primary"
                                  />
                                  <span className="text-xs text-white/60">
                                    {t("footer.support") ||
                                      "Support our programs • Make a difference today"}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // More mobile dropdown
                      <div
                        key={link.key}
                        className="border-b border-white/10 pb-2"
                      >
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          onClick={() => setMoreOpen(!moreOpen)}
                          className="flex items-center justify-between w-full py-3 text-white hover:text-indaro-primary transition-colors"
                        >
                          <span className="font-semibold text-base">
                            {t("nav.more")}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              moreOpen ? "rotate-180" : ""
                            }`}
                          />
                        </motion.button>

                        <AnimatePresence>
                          {moreOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-1 gap-1 pb-3">
                                {moreItems.map((item, index) => {
                                  const Icon = item.icon;
                                  return (
                                    <motion.a
                                      key={index}
                                      href={item.href}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.03 }}
                                      className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/80 hover:text-indaro-primary hover:bg-white/5 rounded-lg transition-all"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <Icon
                                        size={16}
                                        className="text-indaro-primary"
                                      />
                                      <span>{item.name}</span>
                                    </motion.a>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  ) : (
                    // Regular nav links
                    <motion.div
                      key={link.key}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-white/10"
                    >
                      <Link
                        to={link.href}
                        className={`block py-3 font-semibold text-base transition-colors ${
                          location.pathname === link.href
                            ? "text-indaro-primary"
                            : "text-white hover:text-indaro-primary"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Language Switcher - Simplified */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full max-w-md mt-6 pt-6 border-t border-white/10"
              >
                <p className="text-xs text-white/40 mb-3">Language</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`flex-1 px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                      currentLang === "en"
                        ? "bg-indaro-primary text-white"
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("rw")}
                    className={`flex-1 px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                      currentLang === "rw"
                        ? "bg-indaro-primary text-white"
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    Kinyarwanda
                  </button>
                  <button
                    onClick={() => changeLanguage("fr")}
                    className={`flex-1 px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                      currentLang === "fr"
                        ? "bg-indaro-primary text-white"
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    Français
                  </button>
                </div>
              </motion.div>

              {/* Mobile Donate Button - Prominent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-md mt-6"
              >
                <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 font-semibold text-base rounded-xl bg-indaro-primary text-white shadow-lg hover:bg-indaro-dark transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Heart size={18} />
                    {t("buttons.donate")}
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .bg-indaro-primary {
          background-color: #2563EB;
        }
        .bg-indaro-dark {
          background-color: #1E4B8F;
        }
        .text-indaro-primary {
          color: #2563EB;
        }
        .hover\\:bg-indaro-dark:hover {
          background-color: #1E4B8F;
        }
        .hover\\:text-indaro-primary:hover {
          color: #2563EB;
        }
        .bg-black\\/90 {
          background-color: rgba(0, 0, 0, 0.9);
        }
        .bg-black\\/95 {
          background-color: rgba(0, 0, 0, 0.95);
        }
        /* Extra small devices */
        @media (max-width: 380px) {
          .xs\\:inline {
            display: inline;
          }
        }
      `}</style>
    </nav>
  );
};

export default IndaroNavbar;

