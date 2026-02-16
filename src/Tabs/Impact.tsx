import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Users,
  Award,
  GraduationCap,
  Home,
  Calendar,
  Heart,
  TrendingUp,
  Download,
  MapPin,
  PieChart,
  Quote,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Music,
  Dumbbell,
  Coffee,
  Globe,
  Target,
  BarChart3,
} from "lucide-react";
import CountUp from "react-countup";
import {
  LineChart,
  Line,
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define types for the data structures
interface SuccessStory {
  name: string;
  age: string;
  before: string;
  after: string;
  quote: string;
  image?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const ImpactPage = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Sample data - replace with real data
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: 300,
      label: t("impact.stats.childrenSupported", "Children Supported"),
      suffix: "+",
    },
    {
      icon: <Music className="w-8 h-8" />,
      value: 120,
      label: t("impact.stats.talentsTrained", "Talents Trained"),
      suffix: "+",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      value: 75,
      label: t("impact.stats.studentsReintegrated", "Students Reintegrated"),
      suffix: "+",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: 10,
      label: t("impact.stats.activePrograms", "Active Programs"),
      suffix: "+",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      value: 5,
      label: t("impact.stats.yearsOfService", "Years of Service"),
      suffix: "+",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: 1000,
      label: t(
        "impact.stats.communityBeneficiaries",
        "Community Beneficiaries",
      ),
      suffix: "+",
    },
  ];

  const talentPrograms = [
    {
      name: t("impact.talentPrograms.boxing", "Boxing"),
      trainees: 40,
      competitions: 5,
      color: "blue",
    },
    {
      name: t("impact.talentPrograms.dance", "Dance"),
      trainees: 60,
      competitions: 8,
      color: "green",
    },
    {
      name: t("impact.talentPrograms.drumming", "Drumming"),
      trainees: 35,
      competitions: 4,
      color: "purple",
    },
    {
      name: t("impact.talentPrograms.singing", "Singing"),
      trainees: 25,
      competitions: 3,
      color: "orange",
    },
  ];

  const educationData = [
    { year: "2021", students: 25 },
    { year: "2022", students: 45 },
    { year: "2023", students: 68 },
    { year: "2024", students: 75 },
    { year: "2025", students: 95 },
  ];

  const livingSupport = [
    {
      category: t(
        "impact.livingSupportCategories.childrenHoused",
        "Children Housed",
      ),
      value: 45,
    },
    {
      category: t(
        "impact.livingSupportCategories.monthlyMeals",
        "Monthly Meals",
      ),
      value: 1350,
    },
    {
      category: t(
        "impact.livingSupportCategories.healthSupport",
        "Health Support",
      ),
      value: 120,
    },
    {
      category: t(
        "impact.livingSupportCategories.counselingSessions",
        "Counseling Sessions",
      ),
      value: 280,
    },
  ];

  // Safely get success stories with fallback
  const getSuccessStories = (): SuccessStory[] => {
    try {
      const stories = t("impact.successStoriesData", { returnObjects: true });
      if (Array.isArray(stories) && stories.length > 0) {
        return stories as SuccessStory[];
      }
    } catch (error) {
      console.warn("Failed to load translated success stories, using fallback");
    }

    // Fallback data
    return [
      {
        name: "Marie Uwase",
        age: "16",
        before:
          "Marie was struggling to stay in school after losing her parents. She faced food insecurity and had no support for her education.",
        after:
          "Now back in school with full sponsorship, Marie has joined our dance program and discovered a passion for traditional Rwandan dance.",
        quote:
          "Indaro gave me hope when I had none. Now I dream of becoming a professional dancer and teacher.",
      },
      {
        name: "Jean Claude",
        age: "19",
        before:
          "Jean Claude dropped out of school and was spending time on the streets, with no direction or positive influences.",
        after:
          "Through our boxing program, he found discipline and focus. He now mentors younger students and has returned to vocational training.",
        quote:
          "The boxing ring taught me more than just fighting—it taught me respect, discipline, and self-worth.",
      },
      {
        name: "Aline Mukamana",
        age: "14",
        before:
          "Aline showed musical talent but had no way to develop it. Her family could not afford instruments or lessons.",
        after:
          "Now a lead drummer in our Umutagara ensemble, Aline has performed at three community events and teaches beginners.",
        quote:
          "When I play the drum, I feel connected to my ancestors and my culture. This is who I am.",
      },
    ];
  };

  const financialData = [
    {
      name: t("impact.financialTransparency.categories.education", "Education"),
      value: 40,
    },
    {
      name: t(
        "impact.financialTransparency.categories.livingSupport",
        "Living Support",
      ),
      value: 25,
    },
    {
      name: t(
        "impact.financialTransparency.categories.talentDevelopment",
        "Talent Development",
      ),
      value: 20,
    },
    {
      name: t(
        "impact.financialTransparency.categories.trainingEquipment",
        "Training & Equipment",
      ),
      value: 10,
    },
    {
      name: t(
        "impact.financialTransparency.categories.operations",
        "Operations",
      ),
      value: 5,
    },
  ];

  const COLORS = ["#2563eb", "#10b981", "#8b5cf6", "#f59e0b", "#6b7280"];

  const timeline = [
    {
      year: "2021",
      event: t("impact.growthTimeline.events.2021", "Foundation Established"),
    },
    {
      year: "2022",
      event: t(
        "impact.growthTimeline.events.2022",
        "First Dance Program Launched",
      ),
    },
    {
      year: "2023",
      event: t(
        "impact.growthTimeline.events.2023",
        "Education Reintegration Program Started",
      ),
    },
    {
      year: "2024",
      event: t("impact.growthTimeline.events.2024", "ICT Training Introduced"),
    },
    {
      year: "2025",
      event: t(
        "impact.growthTimeline.events.2025",
        "Expanded to 200+ Beneficiaries",
      ),
    },
  ];

  // Safely get testimonials with fallback
  const getTestimonials = (): Testimonial[] => {
    try {
      const testimonials = t("impact.testimonialsData", {
        returnObjects: true,
      });
      if (Array.isArray(testimonials) && testimonials.length > 0) {
        return testimonials as Testimonial[];
      }
    } catch (error) {
      console.warn("Failed to load translated testimonials, using fallback");
    }

    // Fallback data
    return [
      {
        quote:
          "Indaro Foundation has transformed our community. Children who had no hope now have dreams and the support to achieve them.",
        author: "Mukamusoni Esperance",
        role: "Community Leader, Gasabo District",
      },
      {
        quote:
          "As a sponsor, I see exactly where my contribution goes. The transparency and dedication of this team is remarkable.",
        author: "David Nkurunziza",
        role: "Monthly Donor",
      },
      {
        quote:
          "Volunteering here showed me the power of investing in youth. These children are Rwanda's future leaders.",
        author: "Sarah Johnson",
        role: "International Volunteer",
      },
    ];
  };

  const partners = [
    { name: "Rwanda Education Board", logo: "/api/placeholder/120/60" },
    { name: "UNICEF Rwanda", logo: "/api/placeholder/120/60" },
    { name: "Local Business Network", logo: "/api/placeholder/120/60" },
    { name: "Arts Council Rwanda", logo: "/api/placeholder/120/60" },
  ];

  // Map locations
  const locations = [
    { position: [-1.9441, 30.0619], name: "Kigali", beneficiaries: 450 },
    { position: [-2.0798, 29.75], name: "Huye", beneficiaries: 220 },
    { position: [-1.5, 30.0], name: "Rwamagana", beneficiaries: 180 },
    { position: [-1.69, 29.35], name: "Rubavu", beneficiaries: 150 },
  ];

  const successStories = getSuccessStories();
  const testimonials = getTestimonials();

  return (
    <div className="bg-white font-sans">
      {/* 1️⃣ Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3)",
          }}
        >
          <div className="absolute inset-0 bg-gray-950/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t("impact.hero.title", "Real Change.")}
              <br />
              <span className="text-blue-200">
                {t("impact.hero.titleHighlight", "Measurable Results.")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-12 text-blue-50">
              {t(
                "impact.hero.description",
                "Indaro Foundation is committed to transforming lives through talent development, education support, and social empowerment.",
              )}
            </p>

            {/* Preview Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div>
                <div className="text-3xl font-bold">300+</div>
                <div className="text-blue-200">
                  {t("impact.hero.stats.children", "Children")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-blue-200">
                  {t("impact.hero.stats.programs", "Programs")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">5yrs</div>
                <div className="text-blue-200">
                  {t("impact.hero.stats.service", "Service")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Key Impact Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Impact by Category */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t("impact.impactByCategory.title", "Impact by Category")}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t(
              "impact.impactByCategory.subtitle",
              "Three pillars of transformation",
            )}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Talent Development */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 rounded-2xl p-8"
            >
              <Music className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                {t(
                  "impact.impactByCategory.talentDevelopment",
                  "Talent Development",
                )}
              </h3>
              {talentPrograms.map((program, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{program.name}</span>
                    <span className="text-gray-600">
                      {program.trainees}{" "}
                      {t("impact.impactByCategory.trainees", "trainees")}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-${program.color}-600 h-2 rounded-full`}
                      style={{ width: `${(program.trainees / 60) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {program.competitions}{" "}
                    {t("impact.impactByCategory.competitions", "competitions")}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Education Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-green-50 rounded-2xl p-8"
            >
              <BookOpen className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                {t(
                  "impact.impactByCategory.educationImpact",
                  "Education Impact",
                )}
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={educationData}>
                  <Line
                    type="monotone"
                    dataKey="students"
                    stroke="#10b981"
                    strokeWidth={3}
                  />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-6 space-y-3">
                <p className="flex justify-between">
                  <span>
                    {t(
                      "impact.impactByCategory.schoolFeesPaid",
                      "School fees paid",
                    )}
                    :
                  </span>{" "}
                  <span className="font-bold">
                    75 {t("impact.impactByCategory.students", "students")}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>
                    {t(
                      "impact.impactByCategory.materialsDistributed",
                      "Materials distributed",
                    )}
                    :
                  </span>{" "}
                  <span className="font-bold">
                    450+ {t("impact.impactByCategory.items", "items")}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>
                    {t(
                      "impact.impactByCategory.academicImprovement",
                      "Academic improvement",
                    )}
                    :
                  </span>{" "}
                  <span className="font-bold text-green-600">85%</span>
                </p>
              </div>
            </motion.div>

            {/* Living & Social Support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-orange-50 rounded-2xl p-8"
            >
              <Home className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                {t(
                  "impact.impactByCategory.livingSupport",
                  "Living & Social Support",
                )}
              </h3>
              <div className="space-y-4">
                {livingSupport.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span>{item.category}</span>
                      <span className="font-bold">{item.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${(item.value / 1350) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t("impact.successStories.title", "Success Stories")}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t(
              "impact.successStories.subtitle",
              "Real lives, real transformation",
            )}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story: SuccessStory, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={
                    story.image ||
                    `https://images.unsplash.com/photo-${index === 0 ? "1544717301-9cdcb1f5940f" : index === 1 ? "1511367461989-f85a21fda167" : "1523240795612-9a054b0db644"}?ixlib=rb-4.0.3`
                  }
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {story.name}, {story.age}
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">
                      <span className="font-bold text-red-500">
                        {t("impact.successStories.before", "Before:")}
                      </span>{" "}
                      {story.before}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      <span className="font-bold text-green-500">
                        {t("impact.successStories.after", "After:")}
                      </span>{" "}
                      {story.after}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Quote className="w-6 h-6 text-blue-300 mb-2" />
                    <p className="text-sm italic">"{story.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Geographic Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t("impact.geographicImpact.title", "Where We Work")}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t(
              "impact.geographicImpact.subtitle",
              "Reaching communities across Rwanda",
            )}
          </p>

          <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <MapContainer
              center={[-1.9403, 29.8739]}
              zoom={8}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              {locations.map((loc, idx) => (
                <Marker key={idx} position={loc.position as [number, number]}>
                  <Popup>
                    <strong>{loc.name}</strong>
                    <br />
                    {loc.beneficiaries}{" "}
                    {t(
                      "impact.geographicImpact.beneficiaries",
                      "beneficiaries",
                    )}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>

      {/* 6️⃣ Financial Transparency */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t("impact.financialTransparency.title", "Financial Transparency")}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t(
              "impact.financialTransparency.subtitle",
              "Every dollar accounted for",
            )}
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {t(
                  "impact.financialTransparency.howYourSupportIsUsed",
                  "How Your Support is Used",
                )}
              </h3>
              <div className="space-y-4">
                {financialData.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-blue-600 font-bold">
                        {item.value}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={financialData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {financialData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Annual Reports */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t("impact.annualReports.title", "Annual Reports")}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            {t("impact.annualReports.subtitle", "Download our latest reports")}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center"
            >
              <Download className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">
                {t("impact.annualReports.report2024", "Annual Report 2024")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("impact.annualReports.pdf", "PDF")}, 2.5 MB
              </p>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center"
            >
              <Download className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">
                {t(
                  "impact.annualReports.financialStatement",
                  "Financial Statement",
                )}
              </h3>
              <p className="text-sm text-gray-600">
                {t("impact.annualReports.pdf", "PDF")}, 1.8 MB
              </p>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center"
            >
              <Download className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">
                {t(
                  "impact.annualReports.activityReport",
                  "Activity Report 2024",
                )}
              </h3>
              <p className="text-sm text-gray-600">
                {t("impact.annualReports.pdf", "PDF")}, 3.1 MB
              </p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* 8️⃣ Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t("impact.partners.title", "Our Partners")}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t("impact.partners.subtitle", "Together we make a difference")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl flex justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9️⃣ Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t("impact.testimonials.title", "What People Say")}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t("impact.testimonials.subtitle", "Trusted by our community")}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1️⃣1️⃣ Call to Action */}
      <section className="relative py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3)",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              {t("impact.cta.title", "Your Support Creates Impact")}
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              {t(
                "impact.cta.description",
                "Join us in transforming lives and building a brighter future for Rwanda's youth.",
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/donate"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                {t("impact.cta.donateNow", "Donate Now")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/donate"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                {t("impact.cta.sponsorAChild", "Sponsor a Child")}
                <Heart className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                {t("impact.cta.partnerWithUs", "Partner With Us")}
                <Users className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
