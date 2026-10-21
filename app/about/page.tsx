import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Compass,
  Target,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Droplets,
  Microscope,
  Building,
  Factory,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PrestigiousClients } from "@/components/home/PrestigiousClients";

export const metadata: Metadata = {
  title: "About Us | Water Purification & Treatment Engineering",
  description:
    "Learn about Amra Water Solution, Kerala's trusted engineering partner for domestic, commercial, and industrial water purification, STP, ETP, and water testing.",
};

const expertiseAreas = [
  {
    icon: Droplets,
    title: "Water Purification Systems",
    desc: "Multi-stage residential and commercial RO and UV systems providing pure, wholesome drinking water.",
  },
  {
    icon: Compass,
    title: "Reverse Osmosis Technology",
    desc: "Advanced thin-film membrane engineering removing dissolved salts, heavy metals, and persistent impurities.",
  },
  {
    icon: Building,
    title: "Commercial Water Treatment",
    desc: "Skid-mounted systems engineered for restaurants, hospitals, educational campuses, and corporate facilities.",
  },
  {
    icon: Factory,
    title: "Industrial Treatment Plants",
    desc: "High-volume process water plants, STP, and ETP wastewater recycling adhering to environmental norms.",
  },
  {
    icon: ShieldCheck,
    title: "Water Softening Systems",
    desc: "High-capacity ion-exchange systems permanently eliminating hard water scaling from plumbing and boilers.",
  },
  {
    icon: Microscope,
    title: "Application-Specific Solutions",
    desc: "Custom equipment configurations tailored strictly to independent laboratory water test findings.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <section className="relative py-10 sm:py-12 lg:py-14 bg-[#082F49] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-industrial-tech.jpg"
            alt="Amra Water Solution Engineering"
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
                Company Profile
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-tight">
              Committed to{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                Better Water Solutions.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Delivering dependable, technologically sound water purification and wastewater treatment systems tailored for homes, businesses, and industrial enterprises across Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image & Flyer Preview (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/flyers/amra-services-brochure.jpg"
                  alt="Amra Water Solution Service Overview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* BNI Member Badge Overlay */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-black text-sm flex items-center justify-center">
                  BNI
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">BNI Proud Member</div>
                  <div className="text-[10px] text-slate-500">Growing Together For A Better Tomorrow</div>
                </div>
              </div>
            </div>

            {/* Right Story & Role (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-700">
                <span>Who We Are</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Engineering Clean Water & Sustainable Wastewater Treatment
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Amra Water Solution</strong> was founded with a singular purpose: to deliver dependable, scientifically validated water purification and treatment systems that protect human health, protect commercial machinery, and safeguard our local water bodies.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Headquartered in <strong>Vaikom, Kottayam</strong> with branch operations in <strong>Kozhikode</strong>, our team provides complete turnkey execution under our guiding philosophy: <strong>Consult • Design • Install • Maintain</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Testing Before Prescription</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      We formulate solutions strictly on water test parameters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Turnkey Environmental Compliance</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Expert Pollution Control Board (PCB) consultancy and documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Dedicated AMC Support</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      On-site preventative servicing and genuine replacement parts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Regional Kerala Presence</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Dual branches providing rapid response across Kerala.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Purpose"
            title="Our Guiding"
            highlight="Mission & Vision"
            description="Focused on responsible water stewardship, transparent engineering, and delivering lasting value to our customers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To provide accessible, high-performance water purification and treatment systems that solve genuine water quality challenges. We believe every home deserves safe drinking water, every commercial facility deserves scale-free operation, and every industry has the duty to recycle and discharge treated wastewater responsibly.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To become Kerala&apos;s benchmark water engineering provider, recognized for unwavering technical honesty, premium components, responsive after-sales service, and active contribution toward a cleaner, greener tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Spectrum"
            title="Our Core"
            highlight="Areas of Expertise"
            description="Comprehensive design, fabrication, and maintenance capabilities spanning residential, commercial, and industrial water systems."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:border-sky-300 hover:shadow-lg transition-all duration-300 group flex flex-col items-center sm:items-start text-center sm:text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Prestigious Clients Section */}
      <PrestigiousClients />

      {/* 6. Design & Engineering Section */}
      <section className="py-20 bg-[#082F49] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                Scientific Approach
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug">
                Evaluating Water Chemistry Before Prescribing Hardware
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Water is rarely simple. In Kerala, two borewells separated by mere meters can exhibit completely different hardness, iron concentration, and microbiological parameters. Sizing a system without laboratory testing leads to rapid membrane fouling, bad-tasting water, and wasted expense.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Comprehensive physicochemical testing: TDS, pH, Hardness, Iron, Turbidity</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Calculated stoichiometric chemical pre-treatment and anti-scalant dosing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Optimal recovery ratio balancing water conservation with membrane lifespan</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src="/images/solutions/water-testing.jpg"
                  alt="Laboratory Water Testing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Let&apos;s Find the Right Solution for Your Water Requirements
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our engineers are ready to answer your questions, conduct water testing, and recommend the most effective treatment configuration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-sky-600 text-white hover:bg-sky-500 shadow-md transition-all"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-white text-slate-800 hover:bg-slate-50 border border-slate-200 transition-all"
            >
              <span>Explore Solutions</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-sky-700 hover:underline"
            >
              <span>Contact Our Team &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
