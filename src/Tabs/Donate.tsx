import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Heart,
  CreditCard,
  Landmark,
  Smartphone,
  DollarSign,
  CheckCircle,
  Copy,
  Check,
  ArrowRight,
  Shield,
  Lock,
  Gift,
  TrendingUp,
  Users,
  Calendar,
  Clock,
  Award,
  Globe,
  ChevronRight,
  X,
  AlertCircle,
  Info,
  Sparkles,
  Share2,
  Download,
  Mail,
  Phone,
  MessageCircle,
  Banknote,
  Wallet,
  QrCode,
  Camera,
  Coffee,
  BookOpen,
  Music,
  Home,
  Briefcase,
} from "lucide-react";

// Donation amounts presets
const donationAmounts = [10, 25, 50, 100, 250, 500];

// Impact stories data (will be translated via t() in the component)
const impactStories = [
  {
    key: "education",
    icon: <BookOpen className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3",
  },
  {
    key: "dance",
    icon: <Music className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3",
  },
  {
    key: "home",
    icon: <Home className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1524062431328-9f4fe202ad35?ixlib=rb-4.0.3",
  },
];

// Bank Details Component
const BankDetails = ({ onCopy }) => {
  const { t } = useTranslation();
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
    if (onCopy) onCopy();
  };

  const CopyButton = ({ text, field }) => (
    <button
      onClick={() => handleCopy(text, field)}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
    >
      {copiedField === field ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-gray-400" />
      )}
    </button>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
        <div>
          <p className="text-sm text-gray-500">
            {t("donate.bankDetails.details.bankName")}
          </p>
          <p className="font-semibold">{t("donate.bankDetails.bankName")}</p>
        </div>
        <CopyButton text={t("donate.bankDetails.bankName")} field="bank" />
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
        <div>
          <p className="text-sm text-gray-500">
            {t("donate.bankDetails.details.accountName")}
          </p>
          <p className="font-semibold">{t("donate.bankDetails.accountName")}</p>
        </div>
        <CopyButton
          text={t("donate.bankDetails.accountName")}
          field="accountName"
        />
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
        <div>
          <p className="text-sm text-gray-500">
            {t("donate.bankDetails.details.accountNumber")}
          </p>
          <p className="font-semibold font-mono text-lg">
            {t("donate.bankDetails.accountNumber")}
          </p>
        </div>
        <CopyButton
          text={t("donate.bankDetails.accountNumber")}
          field="accountNo"
        />
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-xl">
        <p className="text-sm text-blue-800 flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{t("donate.bankDetails.details.reference")}</span>
        </p>
      </div>
    </div>
  );
};

// Mobile Money Details Component
const MobileMoneyDetails = ({ onCopy }) => {
  const { t } = useTranslation();
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
    if (onCopy) onCopy();
  };

  const CopyButton = ({ text, field }) => (
    <button
      onClick={() => handleCopy(text, field)}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
    >
      {copiedField === field ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-gray-400" />
      )}
    </button>
  );

  return (
    <div className="space-y-4">
      {/* MTN Mobile Money */}
      <div className="border border-yellow-200 rounded-xl p-4 bg-gradient-to-r from-yellow-50 to-white">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-yellow-600" />
          </div>
          <div>
            <h4 className="font-semibold">
              {t("donate.mobileMoney.mtn.name")}
            </h4>
            <p className="text-xs text-gray-500">
              {t("donate.mobileMoney.available")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="text-xs text-gray-500">
              {t("donate.mobileMoney.phoneNumber")}
            </p>
            <p className="font-semibold font-mono">
              {t("donate.mobileMoney.mtn.phone")}
            </p>
          </div>
          <CopyButton text="+250783202042" field="mtn" />
        </div>
        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
          <CheckCircle className="w-3 h-3 text-green-500" />
          {t("donate.mobileMoney.nameOnAccount")}{" "}
          {t("donate.mobileMoney.accountName")}
        </p>
      </div>

      {/* Airtel Money */}
      <div className="border border-red-200 rounded-xl p-4 bg-gradient-to-r from-red-50 to-white">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h4 className="font-semibold">
              {t("donate.mobileMoney.airtel.name")}
            </h4>
            <p className="text-xs text-gray-500">
              {t("donate.mobileMoney.available")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="text-xs text-gray-500">
              {t("donate.mobileMoney.phoneNumber")}
            </p>
            <p className="font-semibold font-mono">
              {t("donate.mobileMoney.airtel.phone")}
            </p>
          </div>
          <CopyButton text="+250781329895" field="airtel" />
        </div>
        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
          <CheckCircle className="w-3 h-3 text-green-500" />
          {t("donate.mobileMoney.nameOnAccount")}{" "}
          {t("donate.mobileMoney.accountName")}
        </p>
      </div>

      <div className="mt-4 p-4 bg-purple-50 rounded-xl">
        <p className="text-sm text-purple-800 flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{t("donate.mobileMoney.confirmation")}</span>
        </p>
      </div>
    </div>
  );
};

// Payment Method Card
const PaymentMethodCard = ({
  method,
  selected,
  onSelect,
  icon: Icon,
  title,
  description,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
        selected
          ? "border-blue-600 bg-blue-50/50 shadow-lg"
          : "border-gray-200 hover:border-blue-300 hover:shadow-md"
      }`}
      onClick={() => onSelect(method)}
    >
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-xl ${
            selected ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            {selected && <CheckCircle className="w-5 h-5 text-blue-600" />}
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-6 pt-6 border-t border-blue-200"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

// Donation Progress Component
const DonationProgress = () => {
  const { t } = useTranslation();
  const monthlyGoal = 10000;
  const currentMonthly = 7650;
  const percentage = (currentMonthly / monthlyGoal) * 100;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">
          {t("donate.impactSection.monthlyGoal.title")}
        </h3>
        <TrendingUp className="w-5 h-5" />
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-2xl font-bold">
          ${currentMonthly.toLocaleString()}
        </span>
        <span className="text-blue-200">${monthlyGoal.toLocaleString()}</span>
      </div>
      <div className="w-full bg-white/30 rounded-full h-3 mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white h-3 rounded-full"
        />
      </div>
      <p className="text-sm text-blue-100">
        {t("donate.impactSection.monthlyGoal.achieved", {
          percentage: percentage.toFixed(0),
        })}
      </p>

      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex justify-between text-sm">
          <span>{t("donate.impactSection.monthlyGoal.thisMonth")}</span>
          <span className="font-semibold">
            142 {t("donate.impactSection.monthlyGoal.donors")}
          </span>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span>{t("donate.impactSection.monthlyGoal.average")}</span>
          <span className="font-semibold">$54</span>
        </div>
      </div>
    </div>
  );
};

// Recent Donors Ticker
const RecentDonors = () => {
  const { t } = useTranslation();
  const donors = [
    { name: "John D.", amount: 100, time: "2" },
    { name: "Marie U.", amount: 50, time: "5" },
    { name: "Peter M.", amount: 25, time: "12" },
    { name: "Sarah K.", amount: 200, time: "15" },
    { name: "Jean C.", amount: 75, time: "22" },
  ];

  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <h4 className="font-semibold mb-3 flex items-center gap-2">
        <Heart className="w-4 h-4 text-red-500" />
        {t("donate.impactSection.recentDonors.title")}
      </h4>
      <div className="space-y-2">
        {donors.map((donor, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="font-medium">{donor.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600">${donor.amount}</span>
              <span className="text-xs text-gray-400">
                {t("donate.impactSection.recentDonors.timeAgo.minutes", {
                  count: parseInt(donor.time),
                })}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Success Modal
const SuccessModal = ({ amount, method, onClose }) => {
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
          {t("donate.successModal.title")}
        </h3>
        <p className="text-gray-600 mb-4">
          {t("donate.successModal.message", { amount })}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          {t("donate.successModal.receipt")}
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            {t("donate.successModal.button")}
          </button>
          <button className="text-gray-600 hover:text-gray-900 text-sm flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            {t("donate.successModal.downloadReceipt")}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Donate Page Component
const DonatePage = () => {
  const { t } = useTranslation();
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Get impact stories from translations
  const impactStoryData = t("donate.impactSection.yourImpact.stories", {
    returnObjects: true,
  });

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate payment processing
    setTimeout(() => {
      setFormStatus("success");
      setShowSuccessModal(true);
      setFormStatus("idle");
    }, 2000);
  };

  const handleCopyAll = () => {
    const bankDetails = `
Bank Transfer Details:
Bank: ${t("donate.bankDetails.bankName")}
Account Name: ${t("donate.bankDetails.accountName")}
Account Number: ${t("donate.bankDetails.accountNumber")}

Mobile Money:
MTN: ${t("donate.mobileMoney.mtn.phone")}
Airtel: ${t("donate.mobileMoney.airtel.phone")}
Name: ${t("donate.mobileMoney.accountName")}
    `;
    navigator.clipboard.writeText(bankDetails);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const donationAmount =
    selectedAmount || (customAmount ? parseFloat(customAmount) : 0);

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
              {t("donate.hero.badge")}
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("donate.hero.title")}
              <br />
              {t("donate.hero.titleHighlight")}
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              {t("donate.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#donate-form"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  <span>{t("donate.hero.buttons.donateNow")}</span>
                  <Heart className="w-5 h-5" />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/sponsor"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t("donate.hero.buttons.sponsorChild")}
                </Link>
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

      {/* Main Content */}
      <section id="donate-form" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Donation Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">
                  {t("donate.donationForm.title")}
                </h2>

                {/* Donation Type Toggle */}
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setIsMonthly(false)}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                      !isMonthly
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {t("donate.donationForm.frequency.oneTime")}
                  </button>
                  <button
                    onClick={() => setIsMonthly(true)}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                      isMonthly
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {t("donate.donationForm.frequency.monthly")}
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">
                    {t("donate.donationForm.amount.select")}
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 px-2 rounded-xl font-semibold transition-all ${
                          selectedAmount === amount
                            ? "bg-blue-600 text-white shadow-lg scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {t("donate.donationForm.amount.currency")}
                        {amount}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                      {t("donate.donationForm.amount.currency")}
                    </span>
                    <input
                      type="number"
                      placeholder={t("donate.donationForm.amount.custom")}
                      value={customAmount}
                      onChange={handleCustomAmount}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min="1"
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">
                    {t("donate.donationForm.paymentMethod.title")}
                  </h3>
                  <div className="space-y-4">
                    {/* Card Payment */}
                    <PaymentMethodCard
                      method="card"
                      selected={selectedMethod === "card"}
                      onSelect={setSelectedMethod}
                      icon={CreditCard}
                      title={t("donate.donationForm.paymentMethod.card.title")}
                      description={t(
                        "donate.donationForm.paymentMethod.card.description",
                      )}
                    >
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder={t(
                              "donate.donationForm.paymentMethod.card.form.firstName",
                            )}
                            className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <input
                            type="text"
                            placeholder={t(
                              "donate.donationForm.paymentMethod.card.form.lastName",
                            )}
                            className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <input
                          type="email"
                          placeholder={t(
                            "donate.donationForm.paymentMethod.card.form.email",
                          )}
                          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <input
                          type="text"
                          placeholder={t(
                            "donate.donationForm.paymentMethod.card.form.cardNumber",
                          )}
                          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder={t(
                              "donate.donationForm.paymentMethod.card.form.expiry",
                            )}
                            className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <input
                            type="text"
                            placeholder={t(
                              "donate.donationForm.paymentMethod.card.form.cvc",
                            )}
                            className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <textarea
                          placeholder={t(
                            "donate.donationForm.paymentMethod.card.form.message",
                          )}
                          rows={3}
                          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                          type="submit"
                          disabled={formStatus === "submitting"}
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                          {formStatus === "submitting" ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              {t(
                                "donate.donationForm.paymentMethod.card.form.processing",
                              )}
                            </>
                          ) : (
                            <>
                              <Heart className="w-5 h-5" />
                              {t(
                                "donate.donationForm.paymentMethod.card.form.button",
                                {
                                  amount: donationAmount || "...",
                                  frequency: isMonthly
                                    ? t("donate.donationForm.frequency.monthly")
                                    : t(
                                        "donate.donationForm.frequency.oneTime",
                                      ),
                                },
                              )}
                            </>
                          )}
                        </button>

                        <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
                          <Lock className="w-3 h-3" />
                          {t(
                            "donate.donationForm.paymentMethod.card.form.secure",
                          )}
                        </p>
                      </form>
                    </PaymentMethodCard>

                    {/* Bank Transfer */}
                    <PaymentMethodCard
                      method="bank"
                      selected={selectedMethod === "bank"}
                      onSelect={setSelectedMethod}
                      icon={Landmark}
                      title={t("donate.donationForm.paymentMethod.bank.title")}
                      description={t(
                        "donate.donationForm.paymentMethod.bank.description",
                      )}
                    >
                      <BankDetails onCopy={() => setCopied(false)} />

                      <div className="mt-4">
                        <button
                          onClick={handleCopyAll}
                          className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                        >
                          {copied ? (
                            <>
                              <Check className="w-5 h-5" />
                              {t("donate.bankDetails.buttons.copied")}
                            </>
                          ) : (
                            <>
                              <Copy className="w-5 h-5" />
                              {t("donate.bankDetails.buttons.copyAll")}
                            </>
                          )}
                        </button>
                      </div>
                    </PaymentMethodCard>

                    {/* Mobile Money */}
                    <PaymentMethodCard
                      method="mobile"
                      selected={selectedMethod === "mobile"}
                      onSelect={setSelectedMethod}
                      icon={Smartphone}
                      title={t(
                        "donate.donationForm.paymentMethod.mobile.title",
                      )}
                      description={t(
                        "donate.donationForm.paymentMethod.mobile.description",
                      )}
                    >
                      <MobileMoneyDetails onCopy={() => setCopied(false)} />

                      <div className="mt-4">
                        <p className="text-sm font-semibold mb-2">
                          {t("donate.mobileMoney.nameOnAccount")}
                        </p>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="font-mono">
                            {t("donate.mobileMoney.accountName")}
                          </span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(
                                t("donate.mobileMoney.accountName"),
                              );
                              setCopied(true);
                              setTimeout(() => setCopied(false), 2000);
                            }}
                            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            {copied ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                    </PaymentMethodCard>
                  </div>
                </div>

                {/* Tax Information */}
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-sm text-green-800 flex items-start gap-2">
                    <Award className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>
                      <strong>{t("donate.taxInfo.label")}:</strong>{" "}
                      {t("donate.taxInfo.description")}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Impact & Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Donation Progress */}
              <DonationProgress />

              {/* Impact Stories */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  {t("donate.impactSection.yourImpact.title")}
                </h3>
                <div className="space-y-4">
                  {Array.isArray(impactStoryData) &&
                    impactStoryData.map((story, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={impactStories[idx].image}
                            alt={story.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">
                            {story.title}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {story.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Recent Donors */}
              <RecentDonors />

              {/* Why Donate */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  {t("donate.impactSection.whyDonate.title")}
                </h3>
                <ul className="space-y-3">
                  {t("donate.impactSection.whyDonate.reasons", {
                    returnObjects: true,
                  }).map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-200 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact for Help */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold mb-3">
                  {t("donate.impactSection.help.title")}
                </h4>
                <div className="space-y-2 text-sm">
                  <a
                    href="tel:+250783202042"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <Phone className="w-4 h-4" />
                    (+250) 783 202 042
                  </a>
                  <a
                    href="mailto:indaro.organization@gmail.com"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <Mail className="w-4 h-4" />
                    indaro.organization@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t("donate.otherWays.title")}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t("donate.otherWays.description")}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("donate.otherWays.volunteer.title")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("donate.otherWays.volunteer.description")}
              </p>
              <Link
                to="/volunteer"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center justify-center gap-1"
              >
                {t("donate.otherWays.volunteer.link")}{" "}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("donate.otherWays.corporate.title")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("donate.otherWays.corporate.description")}
              </p>
              <Link
                to="/partner"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center justify-center gap-1"
              >
                {t("donate.otherWays.corporate.link")}{" "}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("donate.otherWays.inKind.title")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("donate.otherWays.inKind.description")}
              </p>
              <Link
                to="/contact"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center justify-center gap-1"
              >
                {t("donate.otherWays.inKind.link")}{" "}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img
              src="https://via.placeholder.com/120x40?text=Stripe"
              alt="Stripe"
              className="h-8"
            />
            <img
              src="https://via.placeholder.com/120x40?text=PayPal"
              alt="PayPal"
              className="h-8"
            />
            <img
              src="https://via.placeholder.com/120x40?text=MTN"
              alt="MTN"
              className="h-8"
            />
            <img
              src="https://via.placeholder.com/120x40?text=Airtel"
              alt="Airtel"
              className="h-8"
            />
            <img
              src="https://via.placeholder.com/120x40?text=Visa"
              alt="Visa"
              className="h-8"
            />
            <img
              src="https://via.placeholder.com/120x40?text=Mastercard"
              alt="Mastercard"
              className="h-8"
            />
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal
            amount={donationAmount}
            method={selectedMethod}
            onClose={() => setShowSuccessModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DonatePage;
