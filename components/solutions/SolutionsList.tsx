import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, AlertCircle, Sparkles, ArrowRight } from "lucide-react";
import { solutionsData } from "@/data/solutions";
import { getSolutionWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

export function SolutionsList() {
  return (
    <div className="space-y-24">
      {solutionsData.map((solution, index) => {
        const isReversed = index % 2 === 1;
        const whatsappUrl = getSolutionWhatsAppUrl(solution.title);

        return (
          <section
            key={solution.id}
            id={solution.id}
            className="scroll-mt-28"
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section (5 cols) */}
              <div
                className={`lg:col-span-5 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative h-80 sm:h-96 lg:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-sky-900 shadow-md">
                      Domain {index + 1} of {solutionsData.length}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <div className="text-xs font-semibold text-cyan-300">
                      Amra Water Solution Engineering
                    </div>
                    <div className="text-sm font-bold text-slate-100">
                      Custom Sizing & Water Quality Guarantee
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section (7 cols) */}
              <div
                className={`lg:col-span-7 space-y-6 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Technical Overview</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {solution.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {solution.fullDesc}
                </p>

                {/* Grid of Challenges & Methods */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {/* Typical Challenges */}
                  <div className="bg-amber-50/60 border border-amber-200/60 rounded-2xl p-5 space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Typical Water Challenges:</span>
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {solution.keyChallenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engineered Methods */}
                  <div className="bg-sky-50/60 border border-sky-200/60 rounded-2xl p-5 space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-sky-900 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Treatment Technology:</span>
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {solution.treatmentMethods.map((method, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2">
                          <span className="text-sky-500 font-bold">•</span>
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Target Applications & Recommended Systems */}
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-slate-700">Recommended Systems:</span>
                    {solution.recommendedSystems.map((sys, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] text-white hover:bg-[#20ba59] shadow-sm hover:shadow transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                    <span>Enquire About {solution.title}</span>
                  </a>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(solution.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors"
                  >
                    <span>Request Site Feasibility</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
