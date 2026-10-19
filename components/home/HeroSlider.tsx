"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Droplets, Shield, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSlide {
  id: number;
  badge: string;
  headline: string;
  highlight: string;
  supportingText: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    badge: "Clean Water for a Better Life",
    headline: "Pure Water.",
    highlight: "Better Living.",
    supportingText:
      "Discover reliable water purification solutions designed for homes, businesses, and industries. Engineered for ultimate purity and health.",
    primaryBtnText: "Explore Products",
    primaryBtnLink: "/products",
    secondaryBtnText: "Get a Free Quote",
    secondaryBtnLink: "/contact",
    image: "/images/hero/hero-water-pour.jpg",
    alt: "Crystal clear water pouring into a clean glass",
  },
  {
    id: 2,
    badge: "Advanced Water Treatment Engineering",
    headline: "Engineered for",
    highlight: "Every Drop.",
    supportingText:
      "Smart and dependable water treatment systems tailored to your water quality and operational requirements. Custom commercial & industrial skids.",
    primaryBtnText: "Explore Our Solutions",
    primaryBtnLink: "/solutions",
    secondaryBtnText: "Contact Our Team",
    secondaryBtnLink: "/contact",
    image: "/images/hero/hero-industrial-tech.jpg",
    alt: "High-tech industrial water treatment plant and piping infrastructure",
  },
  {
    id: 3,
    badge: "Commercial and Industrial Solutions",
    headline: "Powering Businesses with",
    highlight: "Better Water.",
    supportingText:
      "Explore scalable RO systems and water treatment plants for commercial, institutional, and industrial applications. From 250 LPH to 50,000+ LPH.",
    primaryBtnText: "View Products",
    primaryBtnLink: "/products",
    secondaryBtnText: "Request a Consultation",
    secondaryBtnLink: "/contact",
    image: "/images/hero/hero-commercial-plant.jpg",
    alt: "Commercial reverse osmosis filtration machinery",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchOffset, setTouchOffset] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isTouching = useRef(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay timer - paused when hovering on desktop or pressing/holding with finger on mobile
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const activeSlide = slides[currentSlide];

  // Touch & Finger Scroll Handlers:
  // - Pressing & holding continuously halts autoplay so slide stays on screen
  // - Swiping/scrolling left or right with finger changes slides
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    isTouching.current = true;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setIsPaused(true); // Keep slide stayed on screen while finger is on screen
    if (!isTouching.current || touchStartX.current === null || touchStartY.current === null) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - touchStartX.current;
    const diffY = currentY - touchStartY.current;

    // Track horizontal drag if horizontal motion is greater than vertical motion
    if (Math.abs(diffX) > Math.abs(diffY)) {
      setTouchOffset(diffX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isTouching.current || touchStartX.current === null) {
      setIsPaused(false);
      setTouchOffset(0);
      return;
    }

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = endX - touchStartX.current;
    const diffY = touchStartY.current !== null ? endY - touchStartY.current : 0;

    // Switch slide if swipe distance exceeds 35px threshold and is primarily horizontal
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    isTouching.current = false;
    setTouchOffset(0);
    setIsPaused(false);
  };

  const handleTouchCancel = () => {
    touchStartX.current = null;
    touchStartY.current = null;
    isTouching.current = false;
    setTouchOffset(0);
    setIsPaused(false);
  };

  return (
    <section
      className="relative w-full h-[660px] sm:h-[680px] lg:h-[780px] overflow-hidden bg-[#082F49] select-none touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      aria-label="Amra Water Solution Hero Carousel"
    >
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={activeSlide.image}
            alt={activeSlide.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Cinematic Multi-layered Dark Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#082F49]/95 via-[#082F49]/80 to-[#082F49]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082F49] via-transparent to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Wave Pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-20 pointer-events-none opacity-40">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
        >
          <path
            d="M0 60 C 320 120, 720 0, 1080 60 C 1260 90, 1380 90, 1440 60 L 1440 120 L 0 120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Hero Content Container */}
      <div
        className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-start transition-transform ease-out"
        style={{
          transform: touchOffset ? `translateX(${touchOffset * 0.45}px)` : undefined,
          transitionDuration: isTouching.current ? "0ms" : "250ms",
        }}
      >
        <div className="max-w-3xl pt-12 sm:pt-0 text-center sm:text-left flex flex-col items-center sm:items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                },
                exit: { opacity: 0, transition: { duration: 0.25 } },
              }}
              className="space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start"
            >
              {/* Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex justify-center sm:justify-start"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-sky-500/20 text-cyan-300 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <Droplets className="w-4 h-4 text-cyan-400 animate-pulse" />
                  {activeSlide.badge}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] text-center sm:text-left"
              >
                {activeSlide.headline}{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                  {activeSlide.highlight}
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal text-center sm:text-left mx-auto sm:mx-0"
              >
                {activeSlide.supportingText}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto"
              >
                <Link
                  href={activeSlide.primaryBtnLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_10px_25px_rgba(2,132,199,0.4)] hover:shadow-[0_12px_30px_rgba(6,182,212,0.6)] hover:scale-102 active:scale-98 transition-all"
                >
                  <span>{activeSlide.primaryBtnText}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>

                <Link
                  href={activeSlide.secondaryBtnLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all active:scale-98"
                >
                  <span>{activeSlide.secondaryBtnText}</span>
                </Link>
              </motion.div>

              {/* Micro Trust Pills */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs text-slate-300"
              >
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Custom Water Treatment Sizing</span>
                </span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Kottayam & Kozhikode Service</span>
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - Hidden in mobile view, visible on tablet & desktop */}
      <div className="hidden sm:flex absolute bottom-10 right-6 sm:right-12 z-20 items-center gap-3">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="p-3 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="p-3 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Indicators - Centered in mobile view, left-aligned on sm and up */}
      <div className="absolute bottom-7 sm:bottom-10 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-12 z-20 flex items-center gap-2.5">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-8 h-2.5 bg-gradient-to-r from-sky-400 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
