import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ChevronRight,
  Shield,
  Award,
  Clock,
  Music,
  BookOpen,
  Camera,
  Briefcase,
  Users,
  Home,
  HeartHandshake,
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Quick links data with translations
  const quickLinks = [
    {
      name: t("footer.quickLinks.links.about"),
      path: "/about",
      icon: <Users className="w-4 h-4" />,
    },
    {
      name: t("footer.quickLinks.links.whatWeDo"),
      path: "/what/we/do",
      icon: <HeartHandshake className="w-4 h-4" />,
    },
    {
      name: t("footer.quickLinks.links.projects"),
      path: "/projects",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      name: t("footer.quickLinks.links.gallery"),
      path: "/gallery",
      icon: <Camera className="w-4 h-4" />,
    },
    {
      name: t("footer.quickLinks.links.contact"),
      path: "/contact",
      icon: <Mail className="w-4 h-4" />,
    },
    {
      name: t("footer.quickLinks.links.donate"),
      path: "/donate",
      icon: <Heart className="w-4 h-4" />,
    },
  ];

  // Programs data for footer with translations
  const programs = [
    {
      name: t("footer.programs.items.dance"),
      path: "/what-we-do#dance",
      icon: <Music className="w-3 h-3" />,
    },
    {
      name: t("footer.programs.items.education"),
      path: "/what-we-do#education",
      icon: <BookOpen className="w-3 h-3" />,
    },
    {
      name: t("footer.programs.items.sports"),
      path: "/what-we-do#sports",
      icon: <Award className="w-3 h-3" />,
    },
    {
      name: t("footer.programs.items.living"),
      path: "/what-we-do#living",
      icon: <Home className="w-3 h-3" />,
    },
  ];

  // Contact information (phone numbers remain untranslated as they're data)
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+250 783 202 042",
      href: "tel:+250783202042",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+250 781 329 895",
      href: "tel:+250781329895",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "indaro.organization@gmail.com",
      href: "mailto:indaro.organization@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Kimisagara, Kigali, Rwanda",
      href: "https://maps.google.com/?q=Kimisagara+Kigali+Rwanda",
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      label: "Twitter",
      color: "hover:bg-sky-500",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "#",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "#",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="footer-pattern"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
          >
            <circle cx="10" cy="10" r="1.5" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#footer-pattern)" />
        </svg>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column - Logo & Description */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                  {t("footer.brand.name")}
                </span>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              {t("footer.brand.description")}
            </p>

            {/* Stats Mini */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-white">300+</div>
                <div className="text-xs text-gray-400">
                  {t("footer.stats.children")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">10+</div>
                <div className="text-xs text-gray-400">
                  {t("footer.stats.programs")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">5yrs</div>
                <div className="text-xs text-gray-400">
                  {t("footer.stats.service")}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links - Your Required Pages */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
              {t("footer.programs.title")}
            </h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <motion.li
                  key={program.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    to={program.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="text-green-400">{program.icon}</span>
                    <span>{program.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Trust Badge */}
            <div className="mt-6 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">
                  {t("footer.trustBadge.registered")}
                </span>
              </div>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
              {t("footer.contact.title")}
            </h3>

            {/* Contact Info */}
            <ul className="space-y-3 mb-6">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <span className="text-blue-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-sm">{item.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                {t("footer.contact.newsletter.title")}
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                {t("footer.contact.newsletter.description")}
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t("footer.contact.newsletter.placeholder")}
                  className="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors flex items-center gap-1"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>

            {/* Office Hours */}
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{t("footer.contact.hours")}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            {t("footer.bottomBar.rights", { year: currentYear })}
            <span className="mx-2">{t("footer.bottomBar.separator")}</span>
            <span className="text-gray-500">
              {t("footer.bottomBar.tagline")}
            </span>
          </p>

          <div className="flex items-center gap-4 text-xs">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("footer.bottomBar.links.privacy")}
            </Link>
            <span className="text-gray-600">
              {t("footer.bottomBar.separator")}
            </span>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("footer.bottomBar.links.terms")}
            </Link>
            <span className="text-gray-600">
              {t("footer.bottomBar.separator")}
            </span>
            <Link
              to="/faq"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("footer.bottomBar.links.faq")}
            </Link>
          </div>

          {/* Payment Methods Icons */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">
              {t("footer.bottomBar.payment.label")}
            </span>
            <div className="flex gap-1">
              <div className="w-8 h-5 bg-gray-800 rounded text-[10px] flex items-center justify-center text-gray-400">
                Visa
              </div>
              <div className="w-8 h-5 bg-gray-800 rounded text-[10px] flex items-center justify-center text-gray-400">
                MC
              </div>
              <div className="w-8 h-5 bg-gray-800 rounded text-[10px] flex items-center justify-center text-gray-400">
                MTN
              </div>
              <div className="w-8 h-5 bg-gray-800 rounded text-[10px] flex items-center justify-center text-gray-400">
                Airtel
              </div>
            </div>
          </div>
        </div>

        {/* Made with love message */}
        <div className="mt-6 text-center text-xs text-gray-600 flex items-center justify-center gap-1">
          <span>{t("footer.madeWith.text")}</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          <a href="https://josuentwari.netlify.app/">
            <span className="text-bold text-white">
              {t("footer.madeWith.in")}
            </span>
          </a>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
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
    </footer>
  );
};

export default Footer;
