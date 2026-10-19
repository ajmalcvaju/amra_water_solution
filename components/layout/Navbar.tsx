"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { mainNavItems } from "@/data/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { getCallUrl } from "@/lib/whatsapp";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      {/* Top micro contact bar */}
      <div className="hidden md:block bg-[#082F49] text-sky-100 text-[11px] sm:text-xs py-1.5 px-4 sm:px-8 border-b border-sky-900/50 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium text-sky-200">BNI Proud Member • Pure Solutions, Healthy Future</span>
            </span>
            <span className="hidden md:inline-block text-sky-400/50">|</span>
            <span className="hidden md:inline-flex items-center text-sky-300">
              Branches: Vaikom (Kottayam) & Kozhikode
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={getCallUrl(false)}
              className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>{siteConfig.phones.primary}</span>
            </a>
            <span className="text-sky-500/50 hidden sm:inline">|</span>
            <a
              href={getCallUrl(true)}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors text-sky-300"
            >
              <span>Office: {siteConfig.phones.office}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isTransparent
            ? "bg-[#082F49]/80 backdrop-blur-md border-b border-white/10 text-white"
            : "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 text-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Logo
            variant={isTransparent ? "white" : "dark"}
            size="md"
          />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                    isActive
                      ? isTransparent
                        ? "text-cyan-300 bg-white/10"
                        : "text-sky-700 bg-sky-50"
                      : isTransparent
                      ? "text-slate-200 hover:text-white hover:bg-white/5"
                      : "text-slate-600 hover:text-sky-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full ${
                        isTransparent ? "bg-cyan-400" : "bg-sky-600"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-[0_4px_14px_rgba(2,132,199,0.35)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.5)] hover:from-sky-500 hover:to-cyan-500 active:scale-98 transition-all"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-slate-700 hover:bg-slate-100"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white text-slate-800 shadow-2xl animate-in slide-in-from-top duration-250">
            <div className="px-5 pt-3 pb-6 space-y-1">
              {mainNavItems.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-sky-50 text-sky-700 font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-sky-600" />}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-md"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getCallUrl(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-sm border border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call {siteConfig.phones.primary}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
