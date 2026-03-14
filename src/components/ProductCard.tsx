"use client";

import Link from "next/link";
import { Heart, Star, ShoppingCart } from "lucide-react";
import type { Product } from "@/data/products";

const gradients = [
  "watch-gradient-1",
  "watch-gradient-2",
  "watch-gradient-3",
  "watch-gradient-4",
  "watch-gradient-5",
  "watch-gradient-6",
  "watch-gradient-7",
  "watch-gradient-8",
];

function getGradient(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

export default function ProductCard({ product }: { product: Product }) {
  const gradient = getGradient(product.id);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/shop/${product.id}`} className="group block">
      <div className="rounded-2xl border border-card-border bg-white shadow-[0_8px_20px_var(--card-shadow)] overflow-hidden transition-all duration-150 hover:shadow-lg hover:scale-[1.02]">
        {/* Image */}
        <div className={`relative aspect-square ${gradient} flex items-center justify-center`}>
          <div className="text-white/80 text-center p-6">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-white/30 flex items-center justify-center mb-2">
              <span className="text-3xl font-heading font-bold">{product.name.charAt(0)}</span>
            </div>
            <p className="text-xs font-ui opacity-70">{product.brand}</p>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNew && (
              <span className="rounded-full bg-accent-green px-2.5 py-0.5 text-xs font-bold text-primary-dark">
                NEW
              </span>
            )}
            {discount > 0 && (
              <span className="rounded-full bg-warning px-2.5 py-0.5 text-xs font-bold text-white">
                -{discount}%
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-primary-dark hover:bg-accent-blue hover:text-white transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-primary-dark hover:bg-accent-blue hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs font-medium text-secondary-light uppercase tracking-wider">{product.brand}</p>
          <h3 className="mt-1 font-heading text-base font-semibold text-primary-dark line-clamp-1">{product.name}</h3>
          <p className="mt-1 text-sm text-secondary line-clamp-2">{product.shortDescription}</p>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-3.5 w-3.5 ${
                    star <= Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-secondary-light">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="mt-2 flex items-center gap-2">
            <span className="font-heading text-lg font-bold text-primary-dark">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-secondary-light line-through">${product.originalPrice}</span>
            )}
          </div>

          {/* Features Preview */}
          <div className="mt-2 flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-secondary"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
