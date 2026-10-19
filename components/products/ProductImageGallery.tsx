"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

interface ProductImageGalleryProps {
  images: string[];
  name: string;
}

export function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Fallback if images array is empty
  const imageList = images && images.length > 0 ? images : ["/images/products/domestic-ro.jpg"];
  const currentImage = imageList[activeIdx] || imageList[0];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display Box */}
      <div className="relative aspect-[4/3] sm:h-[450px] w-full overflow-hidden rounded-2xl bg-slate-50/90 border border-slate-200/80 p-4 flex items-center justify-center shadow-inner group">
        <Image
          src={currentImage}
          alt={`${name} - View ${activeIdx + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-2 transition-all duration-300"
        />

        {/* Multi-image Navigation Controls */}
        {imageList.length > 1 && (
          <>
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Counter Badge */}
            <div className="absolute bottom-3 right-3 bg-slate-900/75 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <Camera className="w-3.5 h-3.5 text-sky-400" />
              <span>
                {activeIdx + 1} / {imageList.length}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Thumbnails Row if multiple images */}
      {imageList.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1 pt-1">
          {imageList.map((img, idx) => {
            const isSelected = idx === activeIdx;
            const label = idx === 0 ? "Product View" : idx === 1 ? "Site Installation" : `Photo ${idx + 1}`;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative flex items-center gap-2 p-1.5 rounded-xl border transition-all duration-200 text-left shrink-0 ${
                  isSelected
                    ? "bg-white border-sky-600 ring-2 ring-sky-500/30 shadow-sm"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 opacity-75 hover:opacity-100"
                }`}
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white border border-slate-100 shrink-0">
                  <Image
                    src={img}
                    alt={`${name} thumbnail ${idx + 1}`}
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                  />
                </div>
                <div className="pr-2">
                  <div className={`text-xs font-bold leading-tight ${isSelected ? "text-sky-700" : "text-slate-700"}`}>
                    {label}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {idx === 0 ? "Studio / Specification" : "Actual Amra Unit"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
