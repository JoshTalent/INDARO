// src/components/home/impactsCounter.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Heart, Users, GraduationCap, Activity, Calendar } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ end, duration = 2, suffix = "+" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1,
        );
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-3xl lg:text-4xl font-bold text-[#2563eb]">
      {count}
      {suffix}
    </span>
  );
};

export default function ImpactsCounter() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Debug: Log the entire translations object to see what's available
  console.log("Current language:", i18n.language);
  console.log(
    "Available keys:",
    Object.keys(i18n.getResourceBundle(i18n.language, "translation")),
  );

  // Try to access the translations
  const title = t("impacts.title", { defaultValue: "FALLBACK: impacts.title" });
  const titleHighlight = t("impacts.titleHighlight", {
    defaultValue: "FALLBACK: impacts.titleHighlight",
  });
  const subtitle = t("impacts.subtitle", {
    defaultValue: "FALLBACK: impacts.subtitle",
  });
  const button = t("impacts.button", {
    defaultValue: "FALLBACK: impacts.button",
  });

  // Log each translation to see if they're working
  console.log({
    title,
    titleHighlight,
    subtitle,
    button,
    childrenLabel: t("impacts.stats.children.label", {
      defaultValue: "FALLBACK: impacts.stats.children.label",
    }),
    childrenDesc: t("impacts.stats.children.description", {
      defaultValue: "FALLBACK: impacts.stats.children.description",
    }),
    talentsLabel: t("impacts.stats.talents.label", {
      defaultValue: "FALLBACK: impacts.stats.talents.label",
    }),
    talentsDesc: t("impacts.stats.talents.description", {
      defaultValue: "FALLBACK: impacts.stats.talents.description",
    }),
    studentsLabel: t("impacts.stats.students.label", {
      defaultValue: "FALLBACK: impacts.stats.students.label",
    }),
    studentsDesc: t("impacts.stats.students.description", {
      defaultValue: "FALLBACK: impacts.stats.students.description",
    }),
    programsLabel: t("impacts.stats.programs.label", {
      defaultValue: "FALLBACK: impacts.stats.programs.label",
    }),
    programsDesc: t("impacts.stats.programs.description", {
      defaultValue: "FALLBACK: impacts.stats.programs.description",
    }),
    yearsLabel: t("impacts.stats.years.label", {
      defaultValue: "FALLBACK: impacts.stats.years.label",
    }),
    yearsDesc: t("impacts.stats.years.description", {
      defaultValue: "FALLBACK: impacts.stats.years.description",
    }),
  });

  const impactsStats = [
    {
      id: 1,
      value: 350,
      label: t("impacts.stats.children.label", {
        defaultValue: "Children Supported",
      }),
      description: t("impacts.stats.children.description", {
        defaultValue: "Through education, meals, and shelter",
      }),
      icon: Heart,
      color: "text-rose-600",
      bgColor: "bg-rose-100",
    },
    {
      id: 2,
      value: 280,
      label: t("impacts.stats.talents.label", {
        defaultValue: "Talents Trained",
      }),
      description: t("impacts.stats.talents.description", {
        defaultValue: "In dance, sports & creative arts",
      }),
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      value: 350,
      label: t("impacts.stats.students.label", {
        defaultValue: "Students in School",
      }),
      description: t("impacts.stats.students.description", {
        defaultValue: "School fees & materials covered",
      }),
      icon: GraduationCap,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      id: 4,
      value: 15,
      label: t("impacts.stats.programs.label", {
        defaultValue: "Active Programs",
      }),
      description: t("impacts.stats.programs.description", {
        defaultValue: "From traditional arts to boxing",
      }),
      icon: Activity,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      id: 5,
      value: 8,
      label: t("impacts.stats.years.label", {
        defaultValue: "Years of Impact",
      }),
      description: t("impacts.stats.years.description", {
        defaultValue: "Since 2021",
      }),
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("impacts.title", { defaultValue: "Our Impact in" })}{" "}
            <span className="text-[#2563eb]">
              {t("impacts.titleHighlight", { defaultValue: "Numbers" })}
            </span>
          </h2>
          <p className="text-gray-600">
            {t("impacts.subtitle", {
              defaultValue:
                "Every number represents a life changed through your support",
            })}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {impactsStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${stat.color}`} />
                </div>

                {/* Counter */}
                <Counter end={stat.value} />

                {/* Label */}
                <p className="text-gray-900 font-semibold mt-2">{stat.label}</p>

                {/* Description - Hidden on mobile, visible on hover on desktop */}
                <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 bg-[#2563eb] text-white rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors shadow-md hover:shadow-lg">
            {t("impacts.button", { defaultValue: "Support Our Mission" })}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
