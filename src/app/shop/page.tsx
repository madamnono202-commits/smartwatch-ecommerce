"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, X, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, brands, categories, priceRanges } from "@/data/products";

type SortOption = "popularity" | "newest" | "price-asc" | "price-desc";

export default function ShopPage() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("popularity");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.label === selectedPriceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sortBy) {
      case "popularity":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [selectedBrands, selectedCategories, selectedPriceRange, sortBy]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedPriceRange(null);
  };

  const hasFilters = selectedBrands.length > 0 || selectedCategories.length > 0 || selectedPriceRange !== null;

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold">Shop Watches</h1>
          <p className="mt-2 text-white/60">Discover our complete collection of AI-powered smartwatches.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden inline-flex items-center gap-2 rounded-lg border border-card-border px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <p className="text-sm text-secondary">
              {filteredProducts.length} {filteredProducts.length === 1 ? "watch" : "watches"} found
            </p>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 text-xs text-accent-blue hover:text-accent-blue-hover"
              >
                <X className="h-3 w-3" /> Clear all
              </button>
            )}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="rounded-lg border border-card-border px-3 py-2 text-sm font-ui focus:outline-none focus:border-accent-blue"
          >
            <option value="popularity">Sort by Popularity</option>
            <option value="newest">Sort by Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-60 shrink-0`}>
            <div className="sticky top-20 space-y-6">
              {/* AI Recommended */}
              <div className="rounded-xl bg-accent-blue/5 border border-accent-blue/20 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-accent-blue" />
                  <span className="text-sm font-semibold text-accent-blue">AI Recommended</span>
                </div>
                <p className="text-xs text-secondary">Our AI suggests these watches based on current trends and popular choices.</p>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="text-sm font-heading font-semibold text-primary-dark mb-3">Brand</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="h-4 w-4 rounded border-gray-300 text-accent-blue focus:ring-accent-blue"
                      />
                      <span className="text-sm text-secondary">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-heading font-semibold text-primary-dark mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="h-4 w-4 rounded border-gray-300 text-accent-blue focus:ring-accent-blue"
                      />
                      <span className="text-sm text-secondary">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="text-sm font-heading font-semibold text-primary-dark mb-3">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedPriceRange === range.label}
                        onChange={() =>
                          setSelectedPriceRange(
                            selectedPriceRange === range.label ? null : range.label
                          )
                        }
                        className="h-4 w-4 border-gray-300 text-accent-blue focus:ring-accent-blue"
                      />
                      <span className="text-sm text-secondary">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-secondary">No watches match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-accent-blue hover:text-accent-blue-hover"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
