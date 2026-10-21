"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Award, Sparkles } from "lucide-react";
import { prestigiousClients } from "@/data/clients";

export function PrestigiousClients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [touchOffset, setTouchOffset] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isTouching = useRef(false);

  const totalItems = prestigiousClients.length; // 7

  // Update visible items count based on viewport width:
  // Mobile (<640px): 2 items
  // Tablet (640px - 1023px): 3 items
  // Desktop (>=1024px): 5 items (as requested: "show 5 in row")
  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, totalItems - visibleCount);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch / Finger swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    isTouching.current = true;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setIsPaused(true);
    if (!isTouching.current || touchStartX.current === null || touchStartY.current === null) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - touchStartX.current;
    const diffY = currentY - touchStartY.current;

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

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
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

  // Percentage slide translation calculation
  const itemWidthPercent = 100 / visibleCount;
  const baseTranslate = -(currentIndex * itemWidthPercent);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200 mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              <span>Valued Partnerships</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Prestigious{" "}
              <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Clients
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Trusted by premier enterprises, hypermarkets, luxury residential projects, convention centres, and hospitality facilities across Kerala.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center justify-center md:justify-end gap-3 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous client"
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50/50 shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next client"
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50/50 shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slidable Carousel Track Container */}
        <div
          className="relative overflow-hidden select-none touch-pan-y py-4 -my-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          <div
            className="flex transition-transform ease-out"
            style={{
              transform: `translateX(calc(${baseTranslate}% + ${touchOffset}px))`,
              transitionDuration: isTouching.current ? "0ms" : "500ms",
            }}
          >
            {prestigiousClients.map((client) => (
              <div
                key={client.id}
                className="shrink-0 px-2.5 sm:px-3"
                style={{ width: `${itemWidthPercent}%` }}
              >
                <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col items-center justify-between text-center group h-52 sm:h-56">
                  {/* Logo Container */}
                  <div className="relative w-full h-28 sm:h-32 flex items-center justify-center p-2 rounded-xl bg-slate-50/60 group-hover:bg-sky-50/40 transition-colors">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Client Info */}
                  <div className="mt-3 w-full">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                      {client.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                      {client.category}
                    </p>
                    {client.location && (
                      <span className="inline-block text-[10px] text-sky-600 font-semibold mt-0.5">
                        📍 {client.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to client slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === index
                  ? "w-8 h-2 bg-gradient-to-r from-sky-600 to-cyan-500 shadow-sm"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom Trust Assurance Badge */}
        <div className="mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 text-center">
          <div className="inline-flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-700">100+ Turnkey Water Solutions Installed Across Kerala</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="text-slate-600">Custom Engineering • ISO Standards • Complete AMC Care</span>
        </div>
      </div>
    </section>
  );
}
