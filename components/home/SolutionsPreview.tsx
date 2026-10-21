import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { solutionsData } from "@/data/solutions";

const PREVIEW_SOLUTION_IDS = [
  "residential-water-purification",
  "commercial-ro-water-treatment",
  "industrial-ro-plants",
  "stp-etp-plants",
];

export function SolutionsPreview() {
  const previewSolutions = PREVIEW_SOLUTION_IDS.map((id) =>
    solutionsData.find((item) => item.id === id)
  ).filter((item): item is (typeof solutionsData)[0] => Boolean(item));

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tailored Applications"
          title="Engineering Solutions for"
          highlight="Every Water Challenge"
          description="From household borewell hardness to multi-stage industrial process utilities and statutory STP/ETP recycling plants."
        />

        <div className="space-y-16 lg:space-y-24">
          {previewSolutions.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Col (6 cols) */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent" />
                    
                    {/* Badge on image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold bg-sky-950/80 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/20">
                        {item.id === "stp-etp-plants"
                          ? "Amra Water Solution Engineering"
                          : item.targetApplications[0]}
                      </span>
                      <span className="text-cyan-300 font-medium">
                        {item.id === "stp-etp-plants"
                          ? "Custom Sizing & Water Quality Guarantee"
                          : "Tested & Engineered"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Col (6 cols) */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Application {index + 1}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {item.shortDesc}
                  </p>

                  {/* Typical challenges addressed */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Key Capabilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {item.treatmentMethods.slice(0, 2).map((method, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/solutions#${item.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-cyan-600 group transition-colors"
                    >
                      <span>Explore Technical Approach</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors"
          >
            <span>View All Water Treatment Domains</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
