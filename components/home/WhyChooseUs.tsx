import React from "react";
import { ShieldCheck, Beaker, Wrench, Layers, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const pillars = [
  {
    icon: Beaker,
    title: "Solutions Based on Water Chemistry",
    description:
      "We never guess. We analyze TDS, hardness, iron, and microbiology to recommend the exact treatment process suitable for your source water.",
  },
  {
    icon: Layers,
    title: "Residential to Industrial Scale",
    description:
      "From compact under-sink home purifiers to high-volume 50,000 LPH multi-stage industrial RO, STP, and ETP wastewater recycling plants.",
  },
  {
    icon: ShieldCheck,
    title: "Engineered for Long-Term Reliability",
    description:
      "Built with high-rejection membranes, corrosion-proof FRP vessels, SS304 skids, and precision digital automation valves.",
  },
  {
    icon: Wrench,
    title: "Local Kerala Service & AMC",
    description:
      "Fast-response technician support from our Vaikom (Kottayam) and Kozhikode branches, providing genuine spares and annual maintenance.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#082F49] text-white relative overflow-hidden">
      {/* Background glow and subtle mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="dark"
          badge="Engineering Excellence"
          title="Why Choose"
          highlight="Amra Water Solution?"
          description="A dedicated water technology partner offering scientific water testing, tailored equipment design, and dependable after-sales care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group flex flex-col justify-between items-center sm:items-start text-center sm:text-left"
              >
                <div className="flex flex-col items-center sm:items-start w-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center text-white mb-5 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center sm:justify-start gap-1.5 text-xs text-cyan-300 font-medium w-full">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Water Technology</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
