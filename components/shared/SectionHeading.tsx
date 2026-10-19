import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const alignClasses =
    align === "center"
      ? "text-center mx-auto items-center"
      : align === "right"
      ? "text-right ml-auto items-end"
      : "text-left mr-auto items-start";

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border transition-colors ${
            isDark
              ? "bg-sky-950/70 text-cyan-300 border-cyan-800/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              : "bg-sky-50 text-sky-700 border-sky-200 shadow-sm"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </span>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
