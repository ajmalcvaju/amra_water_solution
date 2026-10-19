"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X, Filter, RotateCcw, PackageSearch } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { productsData } from "@/data/products";
import { Product, ProductCategory } from "@/lib/types";

const categories: { label: string; value: ProductCategory }[] = [
  { label: "All Products", value: "All" },
  { label: "Water Purifiers", value: "Water Purifiers" },
  { label: "Water Dispensers", value: "Water Dispensers" },
  { label: "Water Coolers", value: "Water Coolers" },
  { label: "RO Treatment Plants", value: "RO Treatment Plants" },
  { label: "Water Treatment Plants", value: "Water Treatment Plants" },
  { label: "STP / ETP Plants", value: "STP / ETP Plants" },
  { label: "Commercial RO", value: "Commercial RO" },
  { label: "Industrial Treatment", value: "Industrial Treatment" },
  { label: "Filtration Systems", value: "Filtration" },
  { label: "Water Softening", value: "Water Softening" },
  { label: "Other Solutions", value: "Other Solutions" },
];

function ProductCatalogInner() {
  const searchParams = useSearchParams();

  // Derive initial values from URL query parameters
  const initialCategory = useMemo<ProductCategory>(() => {
    const catParam = searchParams.get("category");
    if (!catParam) return "All";
    const match = categories.find(
      (c) =>
        c.value.toLowerCase() === catParam.toLowerCase() ||
        c.label.toLowerCase() === catParam.toLowerCase() ||
        (catParam.toLowerCase().includes("stp") && c.value === "STP / ETP Plants") ||
        (catParam.toLowerCase().includes("etp") && c.value === "STP / ETP Plants") ||
        (catParam.toLowerCase().includes("cooler") && c.value === "Water Coolers") ||
        (catParam.toLowerCase().includes("dispens") && c.value === "Water Dispensers") ||
        (catParam.toLowerCase().includes("purif") && c.value === "Water Purifiers") ||
        (catParam.toLowerCase().includes("ro") && c.value === "RO Treatment Plants") ||
        (catParam.toLowerCase().includes("treatment") && c.value === "Water Treatment Plants") ||
        (catParam.toLowerCase().includes("soften") && c.value === "Water Treatment Plants") ||
        (catParam.toLowerCase().includes("filter") && c.value === "Water Treatment Plants") ||
        (catParam.toLowerCase().includes("domestic") && c.value === "Water Purifiers")
    );
    return match ? match.value : "All";
  }, [searchParams]);

  const initialProduct = useMemo<Product | null>(() => {
    const prodParam = searchParams.get("product");
    if (!prodParam) return null;
    const match = productsData.find(
      (p) =>
        p.id.toLowerCase() === prodParam.toLowerCase() ||
        p.name.toLowerCase().includes(prodParam.toLowerCase())
    );
    return match || null;
  }, [searchParams]);

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalProduct, setModalProduct] = useState<Product | null>(initialProduct);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.idealFor.some((item) => item.toLowerCase().includes(q)) ||
        product.features.some((feat) => feat.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const hasActiveFilters = selectedCategory !== "All" || searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="space-y-10">
      {/* Search Bar & Filter Controls Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Live Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name, application, technology..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all text-slate-900 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Result Count and Clear Filters */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4 text-xs sm:text-sm">
            <span className="text-slate-500 font-medium">
              Showing{" "}
              <strong className="text-slate-900 font-bold">
                {filteredProducts.length}
              </strong>{" "}
              of {productsData.length} products
            </span>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider pr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            const count =
              cat.value === "All"
                ? productsData.length
                : productsData.filter((p) => p.category === cat.value).length;

            if (count === 0) return null;

            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  isSelected
                    ? "bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-md shadow-sky-600/20"
                    : "bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isSelected ? "bg-white/25 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid / Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setModalProduct(p)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
            <PackageSearch className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            No products matched your criteria
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            We couldn&apos;t find any water solutions matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}. Try searching with another term or reset your filters.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-sky-600 text-white hover:bg-sky-500 transition-colors shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Show All Products</span>
            </button>
          </div>
        </div>
      )}

      {/* Accessible Detail Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </div>
  );
}

export function ProductCatalog() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-slate-400 animate-pulse">
          Loading product catalog...
        </div>
      }
    >
      <ProductCatalogInner />
    </Suspense>
  );
}
