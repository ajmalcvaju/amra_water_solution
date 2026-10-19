"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Check, ArrowRight, Sparkles } from "lucide-react";
import { Product } from "@/lib/types";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappUrl = getProductWhatsAppUrl(product.name);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden animate-in zoom-in-95 duration-200 relative flex flex-col"
      >
        {/* Sticky close button */}
        <button
          onClick={onClose}
          aria-label="Close product details dialog"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-slate-100 text-slate-600 hover:text-slate-900 shadow-md border border-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Hero Image */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

          {/* Title on image overlay */}
          <div className="absolute bottom-6 left-6 right-16 text-white space-y-1.5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500 text-slate-950">
              {product.category}
            </span>
            <h2 id="product-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-cyan-200 font-medium">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* Overview Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Overview & Capabilities
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Specifications Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Technical Specifications (Illustrative)
            </h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
              {Object.entries(product.specifications).map(([key, value], idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 sm:grid-cols-3 p-3 sm:px-4 ${
                    idx % 2 === 0 ? "bg-slate-50/70" : "bg-white"
                  }`}
                >
                  <span className="font-semibold text-slate-800">{key}</span>
                  <span className="sm:col-span-2 text-slate-600 mt-0.5 sm:mt-0">{value}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 italic">
              * Note: Exact capacities and membrane configurations are customized to raw water TDS, pressure, and operational usage.
            </p>
          </div>

          {/* Ideal Applications & Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Ideal For */}
            <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                Ideal For:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {product.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Key Engineered Features:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Have questions about system sizing or water testing? Connect directly with our team.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#25D366] text-white hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>Enquire on WhatsApp</span>
            </a>

            <Link
              href={`/contact?subject=${encodeURIComponent(product.name)}`}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-600 to-cyan-600 text-white hover:from-sky-500 hover:to-cyan-500 shadow-md transition-all"
            >
              <span>Request Formal Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
