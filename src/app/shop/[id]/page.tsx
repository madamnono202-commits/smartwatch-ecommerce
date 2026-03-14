"use client";

export const runtime = "edge";

import { use, useState } from "react";
import Link from "next/link";
import { Star, Heart, ShoppingCart, ArrowLeft, Check, Sparkles, RotateCw, Smartphone } from "lucide-react";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";
import ProductCard from "@/components/ProductCard";

const gradients = [
  "watch-gradient-1", "watch-gradient-2", "watch-gradient-3", "watch-gradient-4",
  "watch-gradient-5", "watch-gradient-6", "watch-gradient-7", "watch-gradient-8",
];

function getGradient(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const [activeTab, setActiveTab] = useState<"reviews" | "specs" | "qa">("specs");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-primary-dark">Product not found</h1>
          <Link href="/shop" className="mt-4 inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue-hover">
            <ArrowLeft className="h-4 w-4" /> Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const productReviews = reviews.filter((r) => r.productId === product.id);
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const gradient = getGradient(product.id);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-secondary-light">
          <Link href="/" className="hover:text-accent-blue">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-accent-blue">Shop</Link>
          <span>/</span>
          <span className="text-primary-dark">{product.name}</span>
        </nav>
      </div>

      {/* Product Main */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Images */}
          <div>
            <div className={`${gradient} rounded-2xl aspect-square flex items-center justify-center relative`}>
              <div className="text-white/80 text-center p-8">
                <div className="w-40 h-40 mx-auto rounded-full border-4 border-white/30 flex items-center justify-center mb-4">
                  <span className="text-6xl font-heading font-bold">{product.name.charAt(0)}</span>
                </div>
                <p className="text-lg font-heading">{product.name}</p>
                <p className="text-sm font-ui opacity-70">{product.brand}</p>
              </div>
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="rounded-full bg-accent-green px-3 py-1 text-xs font-bold text-primary-dark">NEW</span>
                )}
                {discount > 0 && (
                  <span className="rounded-full bg-warning px-3 py-1 text-xs font-bold text-white">-{discount}%</span>
                )}
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-primary-dark hover:bg-white transition-colors">
                  <RotateCw className="h-3.5 w-3.5" /> 360&deg;
                </button>
                <button className="flex items-center gap-1.5 rounded-full bg-accent-blue px-3 py-1.5 text-xs font-medium text-white hover:bg-accent-blue-hover transition-colors">
                  <Smartphone className="h-3.5 w-3.5" /> AR Try-On
                </button>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  className={`w-20 h-20 rounded-lg ${gradient} opacity-60 flex items-center justify-center transition-all ${
                    i === selectedImageIndex ? "ring-2 ring-accent-blue opacity-100" : "hover:opacity-80"
                  }`}
                >
                  <span className="text-white text-xs font-ui">View {i + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-ui text-secondary-light uppercase tracking-wider">{product.brand}</span>
              {product.isNew && (
                <span className="rounded-full bg-accent-green/10 text-accent-green px-2 py-0.5 text-xs font-bold">New</span>
              )}
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`h-5 w-5 ${star <= Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                ))}
              </div>
              <span className="text-sm text-secondary">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="font-heading text-3xl font-bold text-primary-dark">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-secondary-light line-through">${product.originalPrice}</span>
                  <span className="rounded-full bg-warning/10 text-warning px-2 py-0.5 text-sm font-semibold">Save ${product.originalPrice - product.price}</span>
                </>
              )}
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-1.5 mb-2">
                <Sparkles className="h-4 w-4 text-accent-blue" />
                <span className="text-xs font-ui text-accent-blue">AI-Generated Description</span>
              </div>
              <p className="text-secondary leading-relaxed">{product.description}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-heading font-semibold text-primary-dark mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-green" />
                    <span className="text-sm text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 rounded-lg bg-accent-blue px-6 py-3.5 font-heading text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors shadow-[0_4px_12px_var(--btn-shadow)]">
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-card-border px-6 py-3.5 font-heading text-sm font-semibold text-primary-dark hover:border-accent-blue hover:text-accent-blue transition-colors">
                <Heart className="h-5 w-5" /> Wishlist
              </button>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${product.inStock ? "bg-accent-green" : "bg-warning"}`} />
              <span className="text-sm text-secondary">{product.inStock ? "In Stock - Ready to Ship" : "Out of Stock"}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex border-b border-card-border">
            {(["specs", "reviews", "qa"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-heading font-semibold border-b-2 transition-colors ${
                  activeTab === tab ? "border-accent-blue text-accent-blue" : "border-transparent text-secondary hover:text-primary-dark"
                }`}
              >
                {tab === "specs" ? "Specifications" : tab === "reviews" ? `Reviews (${productReviews.length})` : "Q&A"}
              </button>
            ))}
          </div>
          <div className="py-8">
            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between rounded-lg bg-gray-50 px-4 py-3">
                    <span className="text-sm font-medium text-primary-dark capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                    <span className="text-sm text-secondary">{value}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="space-y-6">
                {productReviews.length === 0 ? (
                  <p className="text-secondary">No reviews yet. Be the first to review this product!</p>
                ) : (
                  productReviews.map((review) => (
                    <div key={review.id} className="border-b border-card-border pb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-blue text-white text-xs font-bold">{review.author.charAt(0)}</div>
                          <div>
                            <p className="text-sm font-semibold text-primary-dark">{review.author}</p>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className={`h-3 w-3 ${star <= review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {review.verified && <span className="text-xs text-accent-green font-medium">Verified Purchase</span>}
                          <span className="text-xs text-secondary-light">{review.date}</span>
                        </div>
                      </div>
                      <h4 className="mt-3 font-semibold text-sm text-primary-dark">{review.title}</h4>
                      <p className="mt-1 text-sm text-secondary">{review.content}</p>
                    </div>
                  ))
                )}
              </div>
            )}
            {activeTab === "qa" && (
              <div className="text-center py-8">
                <p className="text-secondary">No questions yet. Ask a question about this product!</p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent-blue px-4 py-2 text-sm font-medium text-white hover:bg-accent-blue-hover transition-colors">Ask a Question</button>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
