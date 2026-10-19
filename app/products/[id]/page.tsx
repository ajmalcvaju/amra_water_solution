import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  PhoneCall,
  ShieldCheck,
  Droplet,
  Sparkles,
  Award,
  Clock,
  ArrowRight,
  Sliders,
} from "lucide-react";
import { productsData } from "@/data/products";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { siteConfig } from "@/lib/siteConfig";
import { getProductWhatsAppUrl, getCallUrl } from "@/lib/whatsapp";
import { FadeIn } from "@/components/shared/MotionWrapper";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found | Amra Water Solution",
    };
  }

  return {
    title: `${product.name} | Amra Water Solution Kerala`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Amra Water Solution`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 675,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const whatsappUrl = getProductWhatsAppUrl(product.name);
  const bullets = product.bulletSpecs || product.features.slice(0, 3);
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);
  const fallbackRelated =
    relatedProducts.length > 0
      ? relatedProducts
      : productsData.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Main Product Hero Split Layout */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Product Image & Trust Indicators */}
            <div className="lg:col-span-6 space-y-6">
              <ProductImageGallery
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center">
                  <ShieldCheck className="w-5 h-5 text-sky-600 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-slate-800">100% Genuine</div>
                  <div className="text-[10px] text-slate-500">Certified Parts</div>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center">
                  <Award className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-slate-800">Quality Tested</div>
                  <div className="text-[10px] text-slate-500">Kerala Lab Verified</div>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center">
                  <Clock className="w-5 h-5 text-cyan-600 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-slate-800">Prompt AMC</div>
                  <div className="text-[10px] text-slate-500">Doorstep Service</div>
                </div>
              </div>
            </div>

            {/* Right Column: Product Info, Specs Highlights & Actions */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              {/* Category & Edition Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-[#E1F3FD] text-[#0284C7] font-bold text-xs uppercase px-3 py-1.5 rounded-lg border border-[#BAE6FD]/80 tracking-wider">
                  {product.badge || product.category}
                </span>
                {product.editionBadge && (
                  <span className="bg-[#0088CC] text-white font-bold text-xs uppercase px-3.5 py-1.5 rounded-lg tracking-wider shadow-xs">
                    {product.editionBadge}
                  </span>
                )}
                <span className="text-xs text-slate-400 font-medium ml-auto">
                  Model Ref: {product.id.toUpperCase()}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="mt-2 text-sm sm:text-base font-semibold text-sky-600">
                  {product.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.fullDescription || product.description}
              </p>

              {/* Key Bullet Highlights */}
              <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-4 sm:p-5 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-900 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>Key Engineering Highlights</span>
                </div>
                <div className="space-y-2">
                  {bullets.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span className="font-medium leading-snug">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm sm:text-base font-bold text-white bg-[#0088CC] hover:bg-[#0077b5] active:scale-98 shadow-md shadow-sky-600/20 hover:shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href={getCallUrl(false)}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm sm:text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 active:scale-98 transition-colors border border-slate-200"
                >
                  <PhoneCall className="w-4 h-4 text-sky-600" />
                  <span>Call {siteConfig.phones.primary}</span>
                </a>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-2 pt-1">
                <Droplet className="w-3.5 h-3.5 text-sky-600" />
                <span>Custom sizing, water testing & installation available across Kerala.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Technical Specifications & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Specifications Table */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <Sliders className="w-5 h-5 text-sky-600" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Technical Specifications
              </h2>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
              {Object.entries(product.specifications).map(([key, value], idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:px-5 ${
                    idx % 2 === 0 ? "bg-slate-50/70" : "bg-white"
                  }`}
                >
                  <span className="font-semibold text-slate-800">{key}</span>
                  <span className="sm:col-span-2 text-slate-600 mt-0.5 sm:mt-0 font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 italic">
              * Note: Operating parameters, membrane sizing, and dosing systems can be customized to match your local laboratory water analysis.
            </p>
          </div>

          {/* Ideal Applications & Features Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Ideal Applications */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Recommended Applications</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {product.idealFor.map((app, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Engineered Advantages</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products Carousel / Grid */}
        <div className="pt-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Explore Related Water Solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Engineered systems tailored for similar water treatment demands.
              </p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800 transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fallbackRelated.map((rel) => {
              const relWhatsapp = getProductWhatsAppUrl(rel.name);
              const relBullets = rel.bulletSpecs || rel.features.slice(0, 3);

              return (
                <div
                  key={rel.id}
                  className="group bg-white rounded-2xl border border-sky-100/90 p-4 sm:p-5 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.07)] hover:shadow-[0_16px_32px_-8px_rgba(2,132,199,0.16)] hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-[#E1F3FD] text-[#0284C7] font-bold text-[10px] sm:text-[11px] uppercase px-2.5 py-1.5 rounded-lg border border-[#BAE6FD]/80 tracking-wider text-center leading-tight">
                      {rel.badge || rel.category}
                    </span>
                    {rel.editionBadge && (
                      <span className="bg-[#0088CC] text-white font-bold text-[10px] sm:text-[11px] uppercase px-3 py-1.5 rounded-lg tracking-wider text-center shadow-xs">
                        {rel.editionBadge}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/products/${rel.id}`}
                    className="relative h-56 w-full overflow-hidden rounded-xl bg-slate-50/80 border border-slate-100/90 flex items-center justify-center my-1 p-2"
                  >
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-contain p-1 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </Link>

                  <Link href={`/products/${rel.id}`}>
                    <h3 className="text-center font-extrabold text-slate-900 text-base leading-snug mt-2.5 mb-2 group-hover:text-[#0088CC] transition-colors line-clamp-2 h-[2.85rem] flex items-center justify-center px-1">
                      {rel.name}
                    </h3>
                  </Link>

                  <div className="space-y-2 my-2 flex-1 flex flex-col justify-center">
                    {relBullets.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/80">
                          <Check className="w-2 h-2 stroke-[3]" />
                        </span>
                        <span className="leading-snug font-medium truncate">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 my-3.5" />

                  <div className="pt-0.5">
                    <Link
                      href={`/products/${rel.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white bg-[#0088CC] hover:bg-[#0077b5] active:scale-[0.98] shadow-sm hover:shadow-md transition-all"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <FadeIn direction="up" delay={0.2} className="mt-12 text-center bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Need Expert Sizing or On-Site Water Testing?
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Our engineers inspect your raw water TDS, iron, and hardness levels to customize the exact reverse osmosis, softener, or filtration unit for guaranteed results.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0088CC] hover:bg-[#0077b5] transition-all shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>Inquire on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
