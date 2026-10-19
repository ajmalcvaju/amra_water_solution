"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Eye } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { productsData } from "@/data/products";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/MotionWrapper";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

const FEATURED_PRODUCT_IDS = [
  "zerob-hydrolife-alkaline-ionizer",
  "flonix-100-ltr-commercial-ro",
  "ss-150150-gnc-water-cooler",
  "sewage-treatment-plant",
];

export function FeaturedProducts() {
  const featured = FEATURED_PRODUCT_IDS.map((id) =>
    productsData.find((p) => p.id === id)
  ).filter((p): p is (typeof productsData)[0] => Boolean(p));

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="featured-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineered Solutions"
          title="Explore Our"
          highlight="Water Solutions"
          description="High-performance purification systems, water softeners, and treatment plants designed for reliability, water conservation, and long-lasting performance."
        />

        <StaggerContainer
          staggerChildren={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {featured.map((product) => {
            const whatsappUrl = getProductWhatsAppUrl(product.name);
            const bullets = product.bulletSpecs || product.features.slice(0, 3);

            return (
              <StaggerItem key={product.id}>
                <div className="group bg-white rounded-2xl border border-sky-100/90 p-4 sm:p-5 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.07)] hover:shadow-[0_16px_32px_-8px_rgba(2,132,199,0.16)] hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                  {/* Top Dual Badges Header */}
                  <div className="flex items-center justify-between gap-1.5 mb-3 flex-wrap sm:flex-nowrap">
                    <span className="bg-[#E1F3FD] text-[#0284C7] font-bold text-[10px] uppercase px-2 py-1.5 rounded-lg border border-[#BAE6FD]/80 tracking-wider text-center leading-tight truncate">
                      {product.badge || product.category}
                    </span>
                    {product.editionBadge && (
                      <span className="bg-[#0088CC] text-white font-bold text-[10px] uppercase px-2.5 py-1.5 rounded-lg tracking-wider text-center shadow-xs shrink-0">
                        {product.editionBadge}
                      </span>
                    )}
                  </div>

                  {/* Centered Product Image with Hover Overlay */}
                  <Link
                    href={`/products/${product.id}`}
                    className="relative h-52 sm:h-56 w-full overflow-hidden rounded-xl bg-slate-50/80 border border-slate-100/90 flex items-center justify-center my-1 cursor-pointer p-2"
                    title={`View details for ${product.name}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={`object-contain p-1 transition-all duration-500 ease-out ${
                        product.images && product.images.length > 1
                          ? "group-hover:opacity-0"
                          : "group-hover:scale-105"
                      }`}
                    />
                    {product.images && product.images.length > 1 && (
                      <Image
                        src={product.images[1]}
                        alt={`${product.name} installation view`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                      />
                    )}
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-sky-600/90 backdrop-blur-xs shadow-md">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </span>
                    </div>
                  </Link>

                  {/* Centered Product Title */}
                  <Link href={`/products/${product.id}`} className="block">
                    <h3 className="text-center font-extrabold text-slate-900 text-[15px] sm:text-base leading-snug mt-2.5 mb-2 group-hover:text-[#0088CC] transition-colors min-h-[3.75rem] flex items-center justify-center px-1 cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>

                  {/* 3 Key Bullet Specs with Green Checkmark Badges */}
                  <Link
                    href={`/products/${product.id}`}
                    className="space-y-2.5 my-2 flex-1 flex flex-col justify-center cursor-pointer"
                    title={`View full specifications for ${product.name}`}
                  >
                    {bullets.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-600">
                        <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/80">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span className="leading-snug font-medium truncate">{spec}</span>
                      </div>
                    ))}
                  </Link>

                  {/* Divider Line */}
                  <div className="border-t border-slate-100 my-3.5" />

                  {/* Footer Action: Full-Width Inquire Button */}
                  <div className="pt-0.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl text-sm font-bold text-white bg-[#0088CC] hover:bg-[#0077b5] active:scale-[0.98] shadow-sm hover:shadow-md hover:shadow-sky-500/20 transition-all duration-200"
                      aria-label={`Inquire about ${product.name} on WhatsApp`}
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                      <span>Inquire Now</span>
                    </a>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View All Products CTA */}
        <FadeIn direction="up" delay={0.2} className="mt-14 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 shadow-lg shadow-sky-600/25 hover:shadow-cyan-500/40 hover:scale-102 transition-all"
          >
            <span>Explore Complete Product Catalog</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
