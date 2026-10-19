import React from "react";
import { Search, TestTubes, Cpu, Handshake } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const workflowSteps = [
  {
    number: "01",
    icon: Search,
    title: "Understand The Application",
    description:
      "We determine your total daily water demand, peak flow rates (LPH), operational hours, and whether the water is for direct drinking, boiler feed, cooling, or statutory discharge.",
  },
  {
    number: "02",
    icon: TestTubes,
    title: "Review Water Quality Information",
    description:
      "We test or examine existing lab reports for TDS, pH, total hardness, dissolved iron, turbidity, and bacterial count. No system is sized on blind assumptions.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Identify Suitable Treatment Options",
    description:
      "Our engineers formulate the multi-barrier process: pre-filtration, oxidation, softening, membrane reverse osmosis, UV disinfection, or biological STP/ETP design.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Discuss The Proposed Solution",
    description:
      "We present a transparent technical proposal covering equipment sizing, footprint requirements, consumable lifespan, and ongoing preventive maintenance (AMC).",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white rounded-3xl border border-slate-200/80 p-8 sm:p-12">
      <SectionHeading
        badge="Engineering Methodology"
        title="How We Approach"
        highlight="Your Water Requirements"
        description="A disciplined, data-backed engineering approach ensuring maximum equipment efficiency, membrane longevity, and compliance."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {workflowSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md hover:border-cyan-300 transition-all duration-300 group items-center sm:items-start text-center sm:text-left"
            >
              <div className="w-full flex flex-col items-center sm:items-start">
                <div className="flex items-center justify-center sm:justify-between mb-4 w-full relative">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="absolute top-0 right-0 sm:static text-2xl font-black text-slate-200 font-mono">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-semibold text-sky-600 uppercase tracking-wider w-full text-center sm:text-left">
                Phase {idx + 1} Execution
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
