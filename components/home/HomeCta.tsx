import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Droplet } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { getCallUrl } from "@/lib/whatsapp";

export function HomeCta() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden">
      {/* Decorative water ripple elements */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200 mb-6">
          <Droplet className="w-4 h-4 text-sky-600 animate-bounce" />
          <span>Professional Consultation Available</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Looking for the Right{" "}
          <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
            Water Treatment Solution?
          </span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Tell us what you need, and our engineering team can help you explore suitable options based on your water source, daily volume, and statutory requirements.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 shadow-xl shadow-sky-600/30 hover:shadow-cyan-500/40 hover:scale-102 transition-all"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
          >
            <span>Contact Us</span>
          </Link>

          <a
            href={getCallUrl(false)}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-sky-700 hover:text-sky-800 hover:underline transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {siteConfig.phones.primary}</span>
          </a>
        </div>

        {/* Reassurance points */}
        <div className="mt-10 pt-8 border-t border-slate-200/60 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            No obligation consultation
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Customized to raw water parameters
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Vaikom, Kottayam & Kozhikode branches
          </span>
        </div>
      </div>
    </section>
  );
}
