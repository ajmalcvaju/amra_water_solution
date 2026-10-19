import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "default" | "dark";
}

export function Breadcrumb({ items, className = "", variant = "default" }: BreadcrumbProps) {
  const isDark = variant === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium ${
        isDark ? "text-sky-200/90" : "text-slate-500"
      } ${className}`}
    >
      <Link
        href="/"
        className={`inline-flex items-center gap-1.5 transition-colors ${
          isDark ? "text-sky-200 hover:text-white" : "text-slate-500 hover:text-sky-600"
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight
              className={`w-3.5 h-3.5 shrink-0 ${isDark ? "text-sky-300/60" : "text-slate-400"}`}
            />
            {isLast || !item.href ? (
              <span
                className={`font-semibold truncate max-w-[200px] sm:max-w-none ${
                  isDark ? "text-cyan-300" : "text-sky-700"
                }`}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`truncate max-w-[200px] sm:max-w-none transition-colors ${
                  isDark ? "text-sky-200 hover:text-white" : "text-slate-500 hover:text-sky-600"
                }`}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
