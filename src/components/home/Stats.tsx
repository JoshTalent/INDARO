// src/components/home/ImpactCounter.tsx
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

export default function ImpactCounter() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const impactStats = [
    {
      id: 1,
      value: 350,
      label: t("impact.stats.children.label"),
      description: t("impact.stats.children.description"),
      icon: Heart,
      color: "text-rose-600",
      bgColor: "bg-rose-100",
    },
    {
      id: 2,
      value: 280,
      label: t("impact.stats.talents.label"),
      description: t("impact.stats.talents.description"),
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      value: 350,
      label: t("impact.stats.students.label"),
      description: t("impact.stats.students.description"),
      icon: GraduationCap,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      id: 4,
      value: 15,
      label: t("impact.stats.programs.label"),
      description: t("impact.stats.programs.description"),
      icon: Activity,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      id: 5,
      value: 8 ,
      label: t("impact.stats.years.label"),
      description: t("impact.stats.years.description"),
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
            {t("impact.title")}{" "}
            <span className="text-[#2563eb]">{t("impact.titleHighlight")}</span>
          </h2>
          <p className="text-gray-600">{t("impact.subtitle")}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {impactStats.map((stat, index) => {
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
            {t("impact.button")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
