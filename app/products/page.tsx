import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { Droplet, ShieldCheck, PhoneCall } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { getCallUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Water Purifiers & Treatment Products Catalog",
  description:
    "Browse our complete catalog of Domestic RO Purifiers, UV Purifiers, Commercial & Industrial RO Plants, Water Softeners, Iron Filters, and Genuine Spares in Kerala.",
};

export default function ProductsPage() {
  return (
    <>
      {/* 1. Products Page Hero Header */}
      <section className="relative py-10 sm:py-12 lg:py-14 bg-[#082F49] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-water-pour.jpg"
            alt="Amra Water Purification & Treatment Systems"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#082F49]/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-3">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                <Droplet className="w-3.5 h-3.5 text-cyan-300" />
                Product Catalog
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-tight">
              Engineered Water Purification &{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                Treatment Systems
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Discover dependable, technologically superior systems for homes, commercial complexes, and manufacturing facilities across Kerala. Filter by category, search by application, or enquire directly via WhatsApp.
            </p>

            {/* Quick Consultation Badge Centered */}
            <div className="pt-1.5">
              <a
                href={getCallUrl(false)}
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xs px-4 py-2 rounded-xl transition-all shadow-md group"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-400/30">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-left">
                  <span className="text-slate-300 font-medium">Need sizing advice? </span>
                  <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Call {siteConfig.phones.primary}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Catalog Body */}
      <div className="bg-slate-50 min-h-screen py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Interactive Product Catalog (Filters, Search, Grid, Accessible Modal) */}
        <ProductCatalog />

        {/* Bottom Reassurance Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 text-center space-y-4 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tested & Customized to Your Source Water</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Don&apos;t See the Exact Capacity You Need?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We build custom-engineered water treatment skids, multi-media filtration units, and large-scale industrial reverse osmosis plants according to your exact site requirements.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?subject=Custom+Engineered+Water+System"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-600 to-cyan-600 text-white hover:from-sky-500 hover:to-cyan-500 shadow-md transition-all"
            >
              <span>Request Custom Engineering Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);
}
