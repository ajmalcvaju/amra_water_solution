import React from "react";
import Link from "next/link";
import { Phone, MapPin, ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { getCallUrl, getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

export function BniTrustBanner() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-[#082F49] to-[#034066] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left col: BNI & Brand Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white">
                  BNI Proud Member
                </span>
                <span className="text-xs text-sky-200 font-medium">
                  Vadakkenada, Udhayanapuram, Vaikom, Kottayam & Kozhikode
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Complete Water Treatment Solutions Across Kerala
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Consult • Design • Install • Maintain. We provide turnkey STP, ETP, RO Plants, Water Testing, and PCB Consultancy Work for residential, commercial, industrial, and institutional clients.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>STP & ETP Plants</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Commercial & Industrial RO</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>PCB Consultancy Work</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Water Testing Lab</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Water Softener Systems</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Annual Maintenance (AMC)</span>
                </div>
              </div>
            </div>

            {/* Right col: Contact box (5 cols) */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <div className="text-xs text-sky-300 font-medium">Direct Engineering Contact</div>
                  <div className="text-lg font-bold text-white">{siteConfig.contactPerson}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-600/30 border border-red-500/50 flex items-center justify-center text-red-300 font-black text-xs">
                  BNI
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href={getCallUrl(false)} className="hover:text-cyan-300 font-semibold text-sm">
                    {siteConfig.phones.primary}
                  </a>
                  <span>(Mobile)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href={getCallUrl(true)} className="hover:text-cyan-300 font-semibold text-sm">
                    {siteConfig.phones.office}
                  </a>
                  <span>(Office & WhatsApp)</span>
                </div>
                <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Main Office: Amar water Solution building, Vadakkenada, Udhayanapuram, Vaikom | Branch: Kozhikode</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-md"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
