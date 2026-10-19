"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { getWhatsAppUrl, getCallUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/siteConfig";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getWhatsAppUrl();
  const callUrl = getCallUrl();

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-50 flex items-end gap-3 select-none"
    >
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div
          role="status"
          aria-live="polite"
          className="hidden sm:flex flex-col bg-white text-slate-800 p-3.5 rounded-2xl shadow-xl border border-sky-100 max-w-xs animate-in fade-in slide-in-from-bottom-3 duration-300 relative mb-1"
        >
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
            aria-label="Dismiss contact popup"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1 pr-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-sky-900">Expert Water Consultation</span>
          </div>
          <p className="text-xs text-slate-600 leading-snug">
            Need advice on RO, STP, ETP or Water Softening? Connect instantly via Phone or WhatsApp.
          </p>
          <div className="mt-2 text-[10px] text-slate-400 font-medium">
            Direct: {siteConfig.phones.primary} / {siteConfig.phones.office}
          </div>
        </div>
      )}

      {/* Floating Action Buttons Column (Call + WhatsApp) */}
      <div className="flex flex-col items-center gap-3">
        {/* Click to Call Button */}
        <a
          href={callUrl}
          aria-label={`Call Amra Water Solution at ${siteConfig.phones.primary}`}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0088CC] hover:bg-[#0077b5] text-white shadow-[0_8px_20px_rgba(0,136,204,0.35)] hover:shadow-[0_12px_28px_rgba(0,136,204,0.55)] hover:scale-108 active:scale-95 transition-all duration-300"
          title={`Call Us: ${siteConfig.phones.primary}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110 text-white fill-current"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.27 1.11z" />
          </svg>
          {/* Tooltip on hover for desktop */}
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 text-white text-xs font-semibold px-2.5 py-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:inline-block">
            Call: {siteConfig.phones.primary}
          </span>
        </a>

        {/* WhatsApp Direct Chat Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Amra Water Solution on WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_14px_32px_rgba(37,211,102,0.6)] hover:scale-108 active:scale-95 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          {/* Radar ping ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white group-hover:scale-110 transition-transform duration-300" />
          {/* Tooltip on hover for desktop */}
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 text-white text-xs font-semibold px-2.5 py-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:inline-block">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </aside>
  );
}
