import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Users,
  ChevronRight,
  Copy,
  Check,
  Navigation,
  Building,
  PhoneCall,
  MessageSquare,
  Shield,
  Briefcase,
  HelpCircle,
  HeartHandshake,
  Plus,
  Minus,
} from "lucide-react";

// Type Definitions
interface MapPlaceholderProps {
  location?: string;
}

interface ContactInfoCardProps {
  icon: React.ElementType;
  title: string;
  content: string | string[];
  subtitle?: string;
  action?: {
    type: string;
    text: string;
  };
  color?: string;
}

interface FormInputProps {
  label: string;
  type?: string;
  icon?: React.ElementType;
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  rows?: number;
}

interface SuccessModalProps {
  onClose: () => void;
}

interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// Import for map - using a placeholder since we can't use actual map
const MapPlaceholder: React.FC<MapPlaceholderProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1577086664693-894d8405334a?ixlib=rb-4.0.3"
        alt="Kigali City Map"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent" />

      {/* Map Overlay */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Location Marker */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl">
              <p className="font-bold text-gray-900">
                {t("contact.map.foundation")}
              </p>
              <p className="text-xs text-gray-600">
                {t("contact.map.location")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Distance Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-blue-400 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Map Controls Mockup */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
          <Plus className="w-4 h-4" />
        </button>
        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
          <Minus className="w-4 h-4" />
        </button>
      </div>

      {/* Map Attribution */}
      <div className="absolute bottom-4 left-4 text-xs text-white/60">
        {t("contact.map.attribution")}
      </div>
    </div>
  );
};

// Team Members (names remain untranslated as they're proper nouns)
const teamMembers: TeamMember[] = [
  {
    name: "Jean Claude Uwimana",
    role: "Executive Director",
    email: "jc.uwimana@indaro.org",
    phone: "+250 783 202 042",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
  },
  {
    name: "Marie Claire",
    role: "Programs Director",
    email: "marie.claire@indaro.org",
    phone: "+250 781 329 895",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
  },
  {
    name: "Emmanuel Dushime",
    role: "Cultural Director",
    email: "emmanuel.dushime@indaro.org",
    phone: "+250 788 123 456",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
  },
  {
    name: "Alice Mukamana",
    role: "Education Coordinator",
    email: "alice.mukamana@indaro.org",
    phone: "+250 789 456 123",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
  },
];

// Contact Info Card Component
const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon: Icon,
  title,
  content,
  subtitle,
  action,
  color = "blue",
}) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const colors: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-green-50 text-green-600 border-green-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100",
  };

  const getColorClass = (colorKey: string): string => {
    return colors[colorKey] || colors.blue;
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${getColorClass(color)}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          {Array.isArray(content) ? (
            content.map((line, idx) => (
              <p key={idx} className="text-gray-600 text-sm">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-600 text-sm">{content}</p>
          )}
          {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}

          {action && action.type === "copy" && (
            <button
              onClick={() => handleCopy(action.text)}
              className="mt-2 flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />{" "}
                  {t("contact.contactInfo.phone.copied")}
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />{" "}
                  {t("contact.contactInfo.phone.copy")}
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Form Input Component
const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  icon: Icon,
  required = false,
  name,
  value,
  onChange,
  placeholder,
  rows,
  ...props
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        {type === "textarea" ? (
          <textarea
            rows={rows || 4}
            className={`w-full px-4 ${Icon ? "pl-12" : "pl-4"} pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              focused ? "border-blue-500" : "border-gray-300"
            }`}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            {...props}
          />
        ) : (
          <input
            type={type}
            className={`w-full px-4 ${Icon ? "pl-12" : "pl-4"} pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              focused ? "border-blue-500" : "border-gray-300"
            }`}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            {...props}
          />
        )}
      </div>
    </div>
  );
};

// Success Modal
const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-white rounded-2xl max-w-md w-full p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">
          {t("contact.successModal.title")}
        </h3>
        <p className="text-gray-600 mb-6">
          {t("contact.successModal.description")}
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          {t("contact.successModal.button")}
        </button>
      </motion.div>
    </motion.div>
  );
};

// Main Contact Page Component
const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<string>("idle"); // idle, submitting, success
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("contact");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setShowSuccessModal(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormStatus("idle");
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Get FAQ data from translations
  const faqs = t("contact.faq.questions", { returnObjects: true }) as FAQ[];

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
              {t("contact.hero.badge")}
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("contact.hero.title")}
              <br />
              {t("contact.hero.titleHighlight")}
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              {t("contact.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contact-form"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  <span>{t("contact.hero.buttons.sendMessage")}</span>
                  <Send className="w-5 h-5" />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#map"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t("contact.hero.buttons.visitUs")}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

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

      {/* Quick Contact Bar */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600">
                  {t("contact.quickContact.emergency")}
                </span>
                <a
                  href="tel:+250783202042"
                  className="font-semibold hover:text-blue-600"
                >
                  +250 783 202 042
                </a>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-blue-600" />
                <a
                  href="mailto:indaro.organization@gmail.com"
                  className="font-semibold hover:text-blue-600"
                >
                  indaro.organization@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                {t("contact.quickContact.followUs")}
              </span>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Text */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t("contact.mainHeading.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("contact.mainHeading.description")}
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ContactInfoCard
              icon={Phone}
              title={t("contact.contactInfo.phone.title")}
              content={["(+250) 783 202 042", "(+250) 781 329 895"]}
              subtitle={t("contact.contactInfo.phone.subtitle")}
              action={{ type: "copy", text: "+250783202042" }}
              color="blue"
            />
            <ContactInfoCard
              icon={Mail}
              title={t("contact.contactInfo.email.title")}
              content="indaro.organization@gmail.com"
              subtitle={t("contact.contactInfo.email.subtitle")}
              action={{ type: "copy", text: "indaro.organization@gmail.com" }}
              color="green"
            />
            <ContactInfoCard
              icon={MapPin}
              title={t("contact.contactInfo.location.title")}
              content={t("contact.contactInfo.location.lines", {
                returnObjects: true,
              }) as string[]}
              color="purple"
            />
            <ContactInfoCard
              icon={Clock}
              title={t("contact.contactInfo.hours.title")}
              content={t("contact.contactInfo.hours.lines", {
                returnObjects: true,
              }) as string[]}
              color="orange"
            />
          </div>

          {/* Tabs for different contact methods */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-xl inline-flex">
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "contact"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                {t("contact.tabs.sendMessage")}
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "team"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Users className="w-5 h-5 inline mr-2" />
                {t("contact.tabs.meetTeam")}
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "faq"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <HelpCircle className="w-5 h-5 inline mr-2" />
                {t("contact.tabs.faq")}
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* Contact Form & Map */}
            {activeTab === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Contact Form */}
                <div
                  id="contact-form"
                  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("contact.contactForm.title")}
                    </h3>
                    <p className="text-gray-600">
                      {t("contact.contactForm.description")}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <FormInput
                      label={t("contact.contactForm.fields.name.label")}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      icon={Users}
                      required={true}
                      placeholder={t(
                        "contact.contactForm.fields.name.placeholder",
                      )}
                    />

                    <FormInput
                      label={t("contact.contactForm.fields.email.label")}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      icon={Mail}
                      required={true}
                      placeholder={t(
                        "contact.contactForm.fields.email.placeholder",
                      )}
                    />

                    <FormInput
                      label={t("contact.contactForm.fields.subject.label")}
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      icon={MessageCircle}
                      placeholder={t(
                        "contact.contactForm.fields.subject.placeholder",
                      )}
                    />

                    <FormInput
                      label={t("contact.contactForm.fields.message.label")}
                      type="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      icon={MessageSquare}
                      required={true}
                      placeholder={t(
                        "contact.contactForm.fields.message.placeholder",
                      )}
                      rows={4}
                    />

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          {t("contact.contactForm.buttons.sending")}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t("contact.contactForm.buttons.send")}
                        </>
                      )}
                    </button>
                  </form>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Shield className="w-4 h-4 text-green-500" />
                        {t("contact.contactForm.trustBadges.privacy")}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4 text-blue-500" />
                        {t("contact.contactForm.trustBadges.reply")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map & Additional Info */}
                <div id="map" className="space-y-6">
                  {/* Map */}
                  <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
                    <MapPlaceholder location="Kigali" />
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://maps.google.com/?q=Kimisagara+Kigali+Rwanda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors group"
                    >
                      <Navigation className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <p className="font-medium text-sm">
                        {t("contact.map.buttons.getDirections")}
                      </p>
                    </a>
                    <a
                      href="tel:+250783202042"
                      className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors group"
                    >
                      <PhoneCall className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <p className="font-medium text-sm">
                        {t("contact.map.buttons.callNow")}
                      </p>
                    </a>
                  </div>

                  {/* Visit Info */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Building className="w-5 h-5 text-blue-600" />
                      {t("contact.map.visitingInfo.title")}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>{t("contact.map.visitingInfo.parking")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>{t("contact.map.visitingInfo.accessible")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>{t("contact.map.visitingInfo.tours")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Team Section */}
            {activeTab === "team" && (
              <motion.div
                key="team"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3 className="text-2xl font-bold mb-6">
                  {t("contact.team.title")}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teamMembers.map((member, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-lg">{member.name}</h4>
                        <p className="text-sm text-blue-600 mb-3">
                          {member.role}
                        </p>
                        <div className="space-y-2 text-sm">
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                          >
                            <Mail className="w-4 h-4" />
                            {member.email}
                          </a>
                          <a
                            href={`tel:${member.phone}`}
                            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                          >
                            <Phone className="w-4 h-4" />
                            {member.phone}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* FAQ Section */}
            {activeTab === "faq" && (
              <motion.div
                key="faq"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-3xl mx-auto"
              >
                <h3 className="text-2xl font-bold mb-6">
                  {t("contact.faq.title")}
                </h3>
                <div className="space-y-4">
                  {Array.isArray(faqs) &&
                    faqs.map((faq, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                      >
                        <details className="group">
                          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                            <h4 className="font-semibold text-lg">
                              {faq.question}
                            </h4>
                            <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
                          </summary>
                          <div className="px-6 pb-6 text-gray-600">
                            {faq.answer}
                          </div>
                        </details>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-blue-300" />
          <h2 className="text-4xl font-bold mb-4">
            {t("contact.partnership.title")}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t("contact.partnership.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/partner"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              {t("contact.partnership.buttons.becomePartner")}
            </Link>
            <Link
              to="/volunteer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              {t("contact.partnership.buttons.volunteer")}
            </Link>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal onClose={() => setShowSuccessModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactPage;
