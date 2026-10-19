import React from "react";
import { Droplet, Factory, Building2, Headphones } from "lucide-react";

const trustItems = [
  {
    icon: Droplet,
    title: "Water Purification Solutions",
    description: "Domestic RO, UV, & UF systems engineered for health and purity.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: Building2,
    title: "Commercial RO Systems",
    description: "Skid-mounted 250–2,000 LPH plants for hotels, hospitals, & colleges.",
    color: "from-blue-600 to-sky-500",
  },
  {
    icon: Factory,
    title: "Industrial Treatment Plants",
    description: "Tailored industrial RO, STP, ETP & water softening utilities.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Headphones,
    title: "Customer-Focused Support",
    description: "Onsite testing, installation, and AMC service across Kerala.",
    color: "from-teal-500 to-emerald-500",
  },
];

export function TrustStrip() {
  return (
    <section className="relative -mt-8 sm:-mt-10 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-2xl shadow-[0_15px_40px_rgba(8,47,73,0.08)] border border-slate-100 p-4 sm:p-6">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group flex items-start gap-4 p-3 rounded-xl hover:bg-sky-50/60 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight group-hover:text-sky-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
