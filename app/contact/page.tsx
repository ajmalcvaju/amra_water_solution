import React, { Suspense } from "react";
import Image from "next/image";
import { Metadata } from "next";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ShieldCheck, MapPin, Building2, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us | Free Quote & Water Treatment Consultation",
  description:
    "Contact Amra Water Solution in Vaikom, Kottayam & Kozhikode. Enquire about domestic purifiers, commercial RO plants, industrial water treatment, STP, ETP, and AMC support.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Contact Page Hero Header */}
      <section className="relative py-10 sm:py-12 lg:py-14 bg-[#082F49] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-industrial-tech.jpg"
            alt="Amra Water Solution Engineering Support"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#082F49]/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-3">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                <Phone className="w-3.5 h-3.5 text-cyan-300" />
                Get in Touch
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-tight">
              Connect With Our Water{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                Treatment Engineers
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether you need a domestic drinking water purifier, a commercial 1,000 LPH RO plant, a turnkey STP/ETP, or laboratory water testing, our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Body */}
      <div className="bg-slate-50 min-h-screen py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Split Layout: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Details (5 cols) */}
          <div className="lg:col-span-5 h-full">
            <ContactInfo />
          </div>

          {/* Right Column: Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

        {/* Branch Offices & Regional Coverage Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Service & Installation Coverage Across Kerala
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Direct technician support and express spare parts dispatch from our dual hub network.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs font-bold shrink-0">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>BNI Affiliated Business</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.branches.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 font-bold text-slate-900 text-base">
                    <Building2 className="w-4 h-4 text-sky-600" />
                    {b.name}
                  </span>
                  {b.isPrimary && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                      Headquarters
                    </span>
                  )}
                </div>

                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{b.address}</span>
                </div>

                <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                  <strong className="text-slate-700">Service Coverage:</strong>{" "}
                  {b.serviceRadius}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Maps Location Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200 mb-2">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>Head Office Location</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Find Us on Google Maps
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {siteConfig.branches[0].address}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions &rarr;</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Amra Water Solution Google Maps Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);
}
