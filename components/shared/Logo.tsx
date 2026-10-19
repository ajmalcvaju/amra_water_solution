import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "white";
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandEmblem({ size = 42, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Amra Water Solution Emblem"
    >
      <defs>
        <linearGradient id="leafGrad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="dropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="60%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </linearGradient>
        <linearGradient id="waveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#082F49" />
          <stop offset="50%" stopColor="#0369A1" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Outer circular ring with leaf accent */}
      <circle cx="50" cy="50" r="46" stroke="url(#leafGrad)" strokeWidth="4" strokeLinecap="round" strokeDasharray="210 80" />
      
      {/* Top green leaf swoosh */}
      <path
        d="M 50 8 C 65 8, 82 18, 86 34 C 76 36, 62 30, 56 22 C 54 18, 52 12, 50 8 Z"
        fill="url(#leafGrad)"
      />

      {/* Central pure water drop */}
      <path
        d="M 56 26 C 56 26, 44 42, 44 51 C 44 57.6 49.4 63 56 63 C 62.6 63, 68 57.6, 68 51 C 68 42, 56 26, 56 26 Z"
        fill="url(#dropGrad)"
        filter="drop-shadow(0 2px 4px rgba(2, 132, 199, 0.3))"
      />
      <circle cx="53" cy="46" r="2.5" fill="#FFFFFF" opacity="0.8" />

      {/* Layered fluid water waves at the base */}
      <path
        d="M 12 56 C 22 46, 36 68, 52 58 C 66 50, 78 64, 88 56 C 88 64, 82 82, 70 88 C 54 94, 28 92, 16 80 C 12 74, 11 65, 12 56 Z"
        fill="url(#waveGrad2)"
      />
      <path
        d="M 15 62 C 26 52, 40 70, 56 61 C 68 54, 78 64, 85 58 C 82 72, 74 84, 60 88 C 45 92, 26 88, 17 78 C 15 72, 14 67, 15 62 Z"
        fill="url(#waveGrad1)"
        opacity="0.9"
      />
      <path
        d="M 20 68 C 30 60, 42 74, 58 66 C 68 61, 74 68, 80 64 C 76 75, 68 83, 56 86 C 44 89, 28 85, 20 68 Z"
        fill="#38BDF8"
        opacity="0.5"
      />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  className = "",
  showTagline = true,
  size = "md",
}: LogoProps) {
  const isWhite = variant === "white";
  const emblemSize = size === "sm" ? 36 : size === "lg" ? 54 : 44;

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 ${className}`}
      aria-label="Amra Water Solution Home"
    >
      <BrandEmblem size={emblemSize} />
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-wider leading-none text-red-600 transition-colors ${
              size === "sm" ? "text-xl" : size === "lg" ? "text-3xl" : "text-2xl"
            }`}
          >
            AMRA
          </span>
          <span
            className={`text-[9px] uppercase tracking-widest font-semibold px-1 py-0.5 rounded ${
              isWhite
                ? "bg-sky-400/20 text-sky-200 border border-sky-400/30"
                : "bg-sky-100 text-sky-800 border border-sky-200"
            }`}
          >
            Water Tech
          </span>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className={`h-px w-2 ${isWhite ? "bg-sky-400/50" : "bg-sky-600/50"}`} />
          <span
            className={`font-bold tracking-widest text-[10px] uppercase ${
              isWhite ? "text-sky-100" : "text-slate-800"
            }`}
          >
            WATER SOLUTION
          </span>
          <span className={`h-px w-2 ${isWhite ? "bg-sky-400/50" : "bg-sky-600/50"}`} />
        </div>
        {showTagline && (
          <span
            className={`text-[8px] tracking-wider uppercase font-medium ${
              isWhite ? "text-sky-200/80" : "text-slate-500"
            }`}
          >
            Pure Solutions • Healthy Future
          </span>
        )}
      </div>
    </Link>
  );
}
