// src/components/home/Hero.tsx
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Play,
  Heart,
  Shield,
  Sparkles,
  Users,
  Music,
  BookOpen,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const heroSlides = [
  {
    id: 1,
    image: "https://i.postimg.cc/9FXQgTxC/youth.jpg",
    translationKey: "traditional",
    color: "from-amber-600/20",
    icon: "🎭",
    iconComponent: Music,
    statsCount: 200,
  },
  {
    id: 2,
    image: "https://i.postimg.cc/4xmNsGRH/boxing.jpg",
    translationKey: "boxing",
    color: "from-red-600/20",
    icon: "🥊",
    iconComponent: Sparkles,
    statsCount: 150,
  },
  {
    id: 3,
    image: "https://i.postimg.cc/CK8hn4K4/education.jpg",
    translationKey: "education",
    color: "from-blue-600/20",
    icon: "📚",
    iconComponent: BookOpen,
    statsCount: 300,
  },
  {
    id: 4,
    image: "https://i.postimg.cc/bJjzx2DH/drumming.png",
    translationKey: "modern",
    color: "from-purple-600/20",
    icon: "💃",
    iconComponent: Music,
    statsCount: 100,
  },
  {
    id: 5,
    image: "https://i.postimg.cc/8cpN3Qbg/all.jpg",
    translationKey: "community",
    color: "from-green-600/20",
    icon: "🌟",
    iconComponent: Users,
    statsCount: 500,
  },
];

export default function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {},
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Calculate slide width for continuous sliding
  useEffect(() => {
    if (containerRef.current) {
      setSlideWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Continuous sliding variants - creates seamless transition
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? slideWidth : -slideWidth,
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: {
          type: "tween",
          ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth continuous motion
          duration: 0.7,
        },
        opacity: {
          duration: 0.4,
          ease: "easeOut",
        },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? slideWidth : -slideWidth,
      opacity: 1,
      transition: {
        x: {
          type: "tween",
          ease: [0.25, 0.1, 0.25, 1],
          duration: 0.7,
        },
        opacity: {
          duration: 0.3,
          ease: "easeIn",
        },
      },
    }),
  };

  // Content animation with continuous feel
  const contentVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.6,
        staggerChildren: 0.07,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -90,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  // Optimized autoplay with continuous feel
  useEffect(() => {
    if (!isAutoplay || isAnimating) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Slightly reduced for better flow

    return () => clearInterval(timer);
  }, [isAutoplay, isAnimating]);

  // Preload all images for seamless transitions
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoplay(false);

    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
    setIsAutoplay(false);

    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentSlide) return;
      setIsAnimating(true);
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      setIsAutoplay(false);

      setTimeout(() => setIsAnimating(false), 700);
    },
    [currentSlide, isAnimating],
  );

  const handleImageError = (slideId: number) => {
    setImageErrors((prev) => ({ ...prev, [slideId]: true }));
  };

  const currentSlideData = heroSlides[currentSlide];
  const IconComponent = currentSlideData.iconComponent;

  // Create a seamless sliding track
  const slides = [
    heroSlides[heroSlides.length - 1],
    ...heroSlides,
    heroSlides[0],
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background gradient that persists during transitions */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

      {/* Continuous Slideshow Container */}
      <div className="relative h-full w-full">
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="popLayout" // Changed to popLayout for seamless transitions
          onExitComplete={() => setIsAnimating(false)}
        >
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
            style={{
              width: "100%",
              willChange: "transform",
            }}
          >
            {/* Background Image with Fallback */}
            <div className="relative h-full w-full">
              {!imageErrors[currentSlide] ? (
                <>
                  <img
                    src={currentSlideData.image}
                    alt={t(
                      `hero.slides.${currentSlideData.translationKey}.title`,
                    )}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => handleImageError(currentSlide)}
                    style={{
                      willChange: "transform",
                    }}
                  />
                  {/* Smooth image overlay animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {/* Advanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${currentSlideData.color} via-transparent to-transparent mix-blend-overlay`}
                    />
                  </motion.div>
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-8xl"
                  >
                    {currentSlideData.icon}
                  </motion.span>
                </div>
              )}

              {/* Continuous pattern overlay */}
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(90deg, transparent 0%, white 20%, transparent 40%, transparent 60%, white 80%, transparent 100%)`,
                  backgroundSize: "200% 100%",
                }}
              />
            </div>

            {/* Content with staggered animations */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                  <motion.div
                    key={`content-${currentSlide}`}
                    custom={direction}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                  >
                    {/* Icon */}
                    <motion.div
                      variants={iconVariants}
                      className="flex items-center gap-3 mb-4"
                    >
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-4xl">{currentSlideData.icon}</span>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.span
                      variants={itemVariants}
                      className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-semibold tracking-wider border border-white/20"
                    >
                      {t(
                        `hero.slides.${currentSlideData.translationKey}.subtitle`,
                      )}
                    </motion.span>

                    {/* Title */}
                    <motion.h1
                      variants={itemVariants}
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                      {t(
                        `hero.slides.${currentSlideData.translationKey}.title`,
                      )}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      variants={itemVariants}
                      className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed"
                    >
                      {t(
                        `hero.slides.${currentSlideData.translationKey}.description`,
                      )}
                    </motion.p>

                    {/* Stats Badge */}
                    <motion.div
                      variants={itemVariants}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10"
                    >
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="text-white/90 text-sm font-medium">
                        {t(
                          `hero.slides.${currentSlideData.translationKey}.stats`,
                          { count: currentSlideData.statsCount },
                        )}
                      </span>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-4 pt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-white/25"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <Play className="w-5 h-5" />
                          {t(
                            `hero.slides.${currentSlideData.translationKey}.cta1`,
                          )}
                        </span>
                        <motion.div
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500"
                        />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/50"
                      >
                        {t(
                          `hero.slides.${currentSlideData.translationKey}.cta2`,
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 group z-20"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        disabled={isAnimating}
      >
        <div className="relative w-14 h-14 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40">
          <ChevronLeft className="w-6 h-6 text-white" />
        </div>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 group z-20"
        aria-label="Next slide"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        disabled={isAnimating}
      >
        <div className="relative w-14 h-14 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40">
          <ChevronRight className="w-6 h-6 text-white" />
        </div>
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            disabled={isAnimating}
          >
            <motion.div
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  index === currentSlide
                    ? "bg-white"
                    : "bg-white/50 group-hover:bg-white/80"
                }
              `}
              animate={{
                width: index === currentSlide ? 48 : 8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          </motion.button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <motion.div
          key={currentSlide}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: isAutoplay ? Infinity : 0,
            repeatType: "loop",
          }}
          className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 origin-left"
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 hidden lg:block z-10">
        <motion.div
          animate={{
            x: [0, 10, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
        >
          <Shield className="w-4 h-4 text-amber-400" />
          <span className="text-white/90 text-sm">
            {t("hero.badges.nonProfit")}
          </span>
        </motion.div>
      </div>

      {/* Autoplay Control Button */}
      <motion.button
        onClick={() => setIsAutoplay(!isAutoplay)}
        className="absolute top-8 right-8 z-20 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-white/80 text-sm border border-white/20 hover:bg-black/50 transition-all duration-300"
        whileHover={{ scale: 1.05, x: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {isAutoplay
          ? `⏸ ${t("hero.badges.pause")}`
          : `▶ ${t("hero.badges.play")}`}
      </motion.button>

      {/* Continuous scroll indicator */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-white/40 text-sm flex items-center gap-3"
      >
        <ChevronLeft className="w-4 h-4" />
        <motion.span
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Continuous Slide
        </motion.span>
        <ChevronRight className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
