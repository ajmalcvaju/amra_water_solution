"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/faqs";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-what-is-ro");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-white" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Clear Answers"
          title="Frequently Asked"
          highlight="Questions"
          description="Everything you need to know about water purification, commercial RO sizing, water softening, and Kerala environmental compliance."
        />

        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-sky-300 bg-sky-50/40 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
                >
                  <span className="flex items-center gap-3 text-base sm:text-lg font-bold text-slate-900">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-sky-600" : "text-slate-400"}`} />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-sky-600 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-sky-100 animate-in fade-in slide-in-from-top-2 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
