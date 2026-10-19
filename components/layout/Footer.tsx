import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { mainNavItems, solutionsNav } from "@/data/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { getWhatsAppUrl, getCallUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051E30] text-slate-300 border-t border-sky-900/60 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="white" size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Complete Water Treatment Solutions for homes, commercial complexes, and industrial plants across Kerala. 
              Engineering pure water with reverse osmosis, softening, STP, ETP, and specialized testing.
            </p>

            {/* BNI Member Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-black text-white text-xs tracking-wider shrink-0">
                BNI
              </div>
              <div>
                <div className="font-semibold text-white">Proud Member of BNI</div>
                <div className="text-[11px] text-sky-300">Growing Together For A Better Tomorrow</div>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 border border-[#25D366]/30 text-xs font-semibold transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
                <span>WhatsApp Enquiry</span>
              </a>
              <a
                href={getCallUrl(false)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 border border-sky-400/30 text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Nejumal</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-cyan-400 pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-500/70" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products & Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-cyan-400 pl-2.5">
              Key Offerings
            </h3>
            <ul className="space-y-2 text-sm">
              {solutionsNav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-500/70" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/solutions#water-testing-consultancy"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                  <span>PCB Consultancy & Lab Testing</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-cyan-400 pl-2.5">
              Branch & Contact
            </h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Main Office:</strong>
                  <span className="text-slate-400">
                    {siteConfig.branches[0].address}
                  </span>
                  <a
                    href={siteConfig.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 mt-1 font-medium transition-colors"
                  >
                    <span>View on Google Maps &rarr;</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Other Branch:</strong>
                  <span className="text-slate-400">Kozhikode, Kerala</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="text-slate-300">
                  <a href={getCallUrl(false)} className="hover:text-cyan-300 transition-colors">
                    {siteConfig.phones.primary}
                  </a>
                  {" • "}
                  <a href={getCallUrl(true)} className="hover:text-cyan-300 transition-colors">
                    {siteConfig.phones.office}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-400">{siteConfig.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 mt-8 border-t border-sky-900/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Consult • Design • Install • Maintain</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-cyan-300 transition-colors">
              Enquiry Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
