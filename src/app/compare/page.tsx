"use client";

import { useState } from "react";
import { Plus, X, Sparkles, Check, Minus } from "lucide-react";
import { products } from "@/data/products";
import type { Product } from "@/data/products";

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showSelector, setShowSelector] = useState(false);

  const selectedProducts = selectedIds.map((id) => products.find((p) => p.id === id)).filter(Boolean) as Product[];

  const addProduct = (id: string) => {
    if (selectedIds.length < 4 && !selectedIds.includes(id)) {
      setSelectedIds((prev) => [...prev, id]);
    }
    setShowSelector(false);
  };

  const removeProduct = (id: string) => {
    setSelectedIds((prev) => prev.filter((pid) => pid !== id));
  };

  const specKeys = ["display", "battery", "waterResistance", "sensors", "os", "connectivity", "weight"] as const;

  const aiRecommendations = selectedProducts.length >= 2
    ? [
        { label: "Best for Fitness", product: selectedProducts.reduce((a, b) => (a.features.filter((f) => f.toLowerCase().includes("gps") || f.toLowerCase().includes("heart") || f.toLowerCase().includes("sport")).length > b.features.filter((f) => f.toLowerCase().includes("gps") || f.toLowerCase().includes("heart") || f.toLowerCase().includes("sport")).length ? a : b)) },
        { label: "Best Value", product: selectedProducts.reduce((a, b) => (a.price < b.price ? a : b)) },
        { label: "Best Battery Life", product: selectedProducts.reduce((a, b) => (a.specs.battery > b.specs.battery ? a : b)) },
      ]
    : [];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-primary-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-accent-blue" />
            <span className="text-sm font-ui text-accent-blue">AI-Powered</span>
          </div>
          <h1 className="font-heading text-4xl font-bold">Compare Watches</h1>
          <p className="mt-2 text-white/60">Select 2-4 watches for an AI-powered side-by-side comparison.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Selection Area */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {selectedProducts.map((product) => (
            <div key={product.id} className="relative rounded-xl border border-card-border p-4 bg-gray-50">
              <button
                onClick={() => removeProduct(product.id)}
                className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-warning text-white text-xs hover:bg-red-600"
              >
                <X className="h-3 w-3" />
              </button>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-dark flex items-center justify-center mb-2">
                  <span className="text-2xl font-heading font-bold text-white">{product.name.charAt(0)}</span>
                </div>
                <p className="text-xs text-secondary-light">{product.brand}</p>
                <p className="text-sm font-heading font-semibold text-primary-dark">{product.name}</p>
                <p className="text-sm font-bold text-accent-blue mt-1">${product.price}</p>
              </div>
            </div>
          ))}

          {selectedIds.length < 4 && (
            <button
              onClick={() => setShowSelector(true)}
              className="rounded-xl border-2 border-dashed border-card-border p-4 flex flex-col items-center justify-center gap-2 text-secondary-light hover:border-accent-blue hover:text-accent-blue transition-colors min-h-[160px]"
            >
              <Plus className="h-8 w-8" />
              <span className="text-sm font-medium">Add Watch</span>
            </button>
          )}
        </div>

        {/* Product Selector Modal */}
        {showSelector && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-lg font-semibold">Select a Watch</h3>
                <button onClick={() => setShowSelector(false)} className="text-secondary-light hover:text-primary-dark">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-2">
                {products
                  .filter((p) => !selectedIds.includes(p.id))
                  .map((product) => (
                    <button
                      key={product.id}
                      onClick={() => addProduct(product.id)}
                      className="w-full flex items-center gap-4 rounded-lg border border-card-border p-3 hover:bg-gray-50 hover:border-accent-blue transition-colors text-left"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center shrink-0">
                        <span className="text-sm font-heading font-bold text-white">{product.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-secondary-light">{product.brand}</p>
                        <p className="text-sm font-semibold text-primary-dark">{product.name}</p>
                      </div>
                      <span className="font-heading font-bold text-accent-blue">${product.price}</span>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* AI Recommendations */}
        {aiRecommendations.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-accent-blue" />
              <h2 className="font-heading text-xl font-bold text-primary-dark">AI Recommendations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aiRecommendations.map((rec) => (
                <div key={rec.label} className="rounded-xl bg-accent-blue/5 border border-accent-blue/20 p-4">
                  <span className="text-xs font-ui text-accent-blue">{rec.label}</span>
                  <p className="mt-1 font-heading text-base font-semibold text-primary-dark">{rec.product.name}</p>
                  <p className="text-xs text-secondary mt-1">{rec.product.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {selectedProducts.length >= 2 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-gray-50 rounded-tl-lg font-heading text-sm font-semibold text-primary-dark w-40">Feature</th>
                  {selectedProducts.map((p) => (
                    <th key={p.id} className="p-3 bg-gray-50 text-center font-heading text-sm font-semibold text-primary-dark">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-card-border">
                  <td className="p-3 text-sm font-medium text-primary-dark">Price</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center">
                      <span className="font-heading font-bold text-accent-blue">${p.price}</span>
                      {p.originalPrice && <span className="text-xs text-secondary-light line-through ml-1">${p.originalPrice}</span>}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-card-border bg-gray-50/50">
                  <td className="p-3 text-sm font-medium text-primary-dark">Rating</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center text-sm">
                      {p.rating} / 5 ({p.reviewCount})
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-card-border">
                  <td className="p-3 text-sm font-medium text-primary-dark">Category</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center text-sm text-secondary">{p.category}</td>
                  ))}
                </tr>
                {specKeys.map((key, i) => (
                  <tr key={key} className={`border-b border-card-border ${i % 2 === 0 ? "bg-gray-50/50" : ""}`}>
                    <td className="p-3 text-sm font-medium text-primary-dark capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</td>
                    {selectedProducts.map((p) => (
                      <td key={p.id} className="p-3 text-center text-sm text-secondary">{p.specs[key]}</td>
                    ))}
                  </tr>
                ))}
                <tr className="border-b border-card-border">
                  <td className="p-3 text-sm font-medium text-primary-dark">Key Features</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="p-3 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {p.features.map((f) => {
                          const otherHave = selectedProducts.filter((op) => op.id !== p.id).some((op) => op.features.includes(f));
                          return (
                            <span key={f} className={`inline-flex items-center gap-1 text-xs ${otherHave ? "text-secondary" : "text-accent-green font-medium"}`}>
                              {otherHave ? <Check className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
                              {f}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {selectedProducts.length < 2 && (
          <div className="text-center py-16">
            <p className="text-lg text-secondary">Select at least 2 watches to start comparing.</p>
            <p className="mt-2 text-sm text-secondary-light">Click &ldquo;Add Watch&rdquo; above to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}
