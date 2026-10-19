"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Eye } from "lucide-react";
import { Product } from "@/lib/types";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const whatsappUrl = getProductWhatsAppUrl(product.name);
  const bullets = product.bulletSpecs || product.features.slice(0, 3);

  return (
    <div className="group bg-white rounded-2xl border border-sky-100/90 p-4 sm:p-5 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.07)] hover:shadow-[0_16px_32px_-8px_rgba(2,132,199,0.16)] hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
      {/* Top Dual Badges Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="bg-[#E1F3FD] text-[#0284C7] font-bold text-[10px] sm:text-[11px] uppercase px-2.5 py-1.5 rounded-lg border border-[#BAE6FD]/80 tracking-wider text-center leading-tight">
          {product.badge || product.category}
        </span>
        {product.editionBadge && (
          <span className="bg-[#0088CC] text-white font-bold text-[10px] sm:text-[11px] uppercase px-3 py-1.5 rounded-lg tracking-wider text-center shadow-xs">
            {product.editionBadge}
          </span>
        )}
      </div>

      {/* Centered Product Image with Hover Overlay */}
      <Link
        href={`/products/${product.id}`}
        onClick={() => onSelect?.(product)}
        className="relative h-56 sm:h-60 w-full overflow-hidden rounded-xl bg-slate-50/80 border border-slate-100/90 flex items-center justify-center my-1 cursor-pointer p-2"
        title={`View details for ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
          />
        )}
        {product.images && product.images.length > 1 && (
          <span className="absolute top-2 right-2 bg-slate-900/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 z-10 shadow-xs">
            2 Photos
          </span>
        )}
        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-sky-600/95 backdrop-blur-xs shadow-md">
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </span>
        </div>
      </Link>

      {/* Centered Product Title */}
      <Link href={`/products/${product.id}`} onClick={() => onSelect?.(product)} className="block">
        <h3 className="text-center font-extrabold text-slate-900 text-[15px] sm:text-base leading-snug mt-2.5 mb-2 cursor-pointer group-hover:text-[#0088CC] transition-colors min-h-[3.75rem] flex items-center justify-center px-1">
          {product.name}
        </h3>
      </Link>

      {/* 3 Key Bullet Specs with Green Checkmark Badges */}
      <Link
        href={`/products/${product.id}`}
        onClick={() => onSelect?.(product)}
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
  );
}
