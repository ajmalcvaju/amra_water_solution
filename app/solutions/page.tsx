import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SolutionsList } from "@/components/solutions/SolutionsList";
import { ProcessSection } from "@/components/solutions/ProcessSection";
import { FaqAccordion } from "@/components/solutions/FaqAccordion";
import { ArrowRight, Droplets, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Water Treatment Solutions | Residential, Commercial, Industrial, STP & ETP",
  description:
    "Comprehensive water treatment solutions in Kerala: Residential Water Purification, Commercial RO, Industrial Plants, Softening, STP, ETP, and PCB Consultancy.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <section className="relative py-10 sm:py-12 lg:py-14 bg-[#082F49] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-commercial-plant.jpg"
            alt="Water Treatment Solutions Engineering"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[#082F49]/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-3">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                Comprehensive Water Engineering
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-tight">
              Water Treatment Solutions for{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                Every Application.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              From residential well water conditioning to multi-stage industrial RO plants, sewage treatment (STP), effluent treatment (ETP), and Pollution Control Board compliance.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                <span>Request Site Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#faqs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
              >
                <span>View Common Questions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Solutions Breakdown (8 detailed categories) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SolutionsList />
        </div>
      </section>

      {/* 3. Methodology & Engineering Workflow */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSection />
        </div>
      </section>

      {/* 4. Frequently Asked Questions (Accordion) */}
      <FaqAccordion />

      {/* 5. Strong Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#082F49] to-[#043354] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Consult • Design • Install • Maintain</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Ready to Solve Your Facility&apos;s Water Quality Challenges?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our engineering team in Vaikom (Kottayam) or Kozhikode. We will review your water parameters and propose an optimal, long-lasting solution.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-xl hover:shadow-cyan-500/40 hover:scale-102 transition-all"
            >
              <span>Get in Touch With an Engineer</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all"
            >
              <span>Browse Products</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
