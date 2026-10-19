import React from "react";
import { MessageSquareText, SearchCheck, SlidersHorizontal, CheckSquare2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    step: "01",
    icon: MessageSquareText,
    title: "Share Your Requirements",
    description:
      "Reach out via our enquiry form, direct phone call, or WhatsApp. Tell us about your water source (well, borewell, or municipal) and estimated daily usage.",
  },
  {
    step: "02",
    icon: SearchCheck,
    title: "Discuss & Test Water Quality",
    description:
      "We evaluate your raw water parameters (TDS, hardness, iron, turbidity) to understand the root cause of your water issues without guesswork.",
  },
  {
    step: "03",
    icon: SlidersHorizontal,
    title: "Explore Suitable Solutions",
    description:
      "Our technical engineers present tailored treatment options, explaining equipment sizing, recovery efficiency, and maintenance requirements.",
  },
  {
    step: "04",
    icon: CheckSquare2,
    title: "Install, Test & Maintain",
    description:
      "We complete seamless on-site installation, conduct post-commissioning water testing, and back you with our ongoing AMC service guarantee.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Seamless Process"
          title="How It Works — From"
          highlight="Enquiry to Pure Water"
          description="A transparent, consultative approach ensuring you get the exact water treatment equipment for your specific situation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line on large screens */}
          <div className="hidden lg:block absolute top-1/3 left-12 right-12 h-0.5 bg-gradient-to-r from-sky-200 via-cyan-300 to-teal-200 -z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-sky-300 transition-all duration-300 relative z-10 flex flex-col h-full items-center sm:items-start text-center sm:text-left"
              >
                <div className="flex items-center justify-center sm:justify-between w-full mb-4 relative">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <span className="absolute top-0 right-0 sm:static text-2xl font-black text-sky-200 font-mono">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
