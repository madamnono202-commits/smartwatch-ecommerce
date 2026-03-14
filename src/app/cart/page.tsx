"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingCart, Sparkles, Tag } from "lucide-react";
import { products } from "@/data/products";

interface CartItem {
  productId: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { productId: "apex-ultra", quantity: 1 },
    { productId: "pulse-fit-x", quantity: 1 },
  ]);
  const [promoCode, setPromoCode] = useState("");

  const cartProducts = cartItems
    .map((item) => ({
      ...item,
      product: products.find((p) => p.id === item.productId),
    }))
    .filter((item) => item.product);

  const subtotal = cartProducts.reduce((sum, item) => sum + (item.product?.price || 0) * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const upsellProducts = products.filter((p) => !cartItems.some((ci) => ci.productId === p.id)).slice(0, 3);

  if (cartItems.length === 0) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="mx-auto h-16 w-16 text-secondary-light mb-4" />
          <h1 className="font-heading text-2xl font-bold text-primary-dark">Your Cart is Empty</h1>
          <p className="mt-2 text-secondary">Discover our collection and find your perfect watch.</p>
          <Link
            href="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 font-heading text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors"
          >
            Shop Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold">Shopping Cart</h1>
          <p className="mt-2 text-white/60">{cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="space-y-4">
              {cartProducts.map(({ product, quantity, productId }) => (
                <div key={productId} className="rounded-xl border border-card-border p-4 flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-primary-dark flex items-center justify-center shrink-0">
                    <span className="text-white font-heading font-bold text-2xl">{product?.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-secondary-light">{product?.brand}</p>
                    <Link href={`/shop/${productId}`} className="font-heading text-base font-semibold text-primary-dark hover:text-accent-blue transition-colors">{product?.name}</Link>
                    <p className="text-sm text-secondary line-clamp-1">{product?.shortDescription}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(productId, -1)} className="flex h-8 w-8 items-center justify-center rounded-lg border border-card-border hover:bg-gray-50"><Minus className="h-3 w-3" /></button>
                    <span className="w-8 text-center font-ui text-sm">{quantity}</span>
                    <button onClick={() => updateQuantity(productId, 1)} className="flex h-8 w-8 items-center justify-center rounded-lg border border-card-border hover:bg-gray-50"><Plus className="h-3 w-3" /></button>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-lg font-bold text-primary-dark">${((product?.price || 0) * quantity).toFixed(2)}</p>
                    {product?.originalPrice && <p className="text-xs text-secondary-light line-through">${(product.originalPrice * quantity).toFixed(2)}</p>}
                  </div>
                  <button onClick={() => removeItem(productId)} className="text-secondary-light hover:text-warning transition-colors" aria-label="Remove">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* AI Upsell */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-accent-blue" />
                <h3 className="font-heading text-lg font-semibold text-primary-dark">People Also Bought</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {upsellProducts.map((product) => (
                  <Link key={product.id} href={`/shop/${product.id}`} className="rounded-xl border border-card-border p-3 flex items-center gap-3 hover:border-accent-blue transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary-dark flex items-center justify-center shrink-0">
                      <span className="text-white font-heading font-bold">{product.name.charAt(0)}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-primary-dark line-clamp-1">{product.name}</p>
                      <p className="text-sm font-bold text-accent-blue">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 shrink-0">
            <div className="sticky top-20 rounded-2xl border border-card-border p-6">
              <h3 className="font-heading text-lg font-bold text-primary-dark mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary">Subtotal</span>
                  <span className="font-medium text-primary-dark">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Shipping</span>
                  <span className="font-medium text-primary-dark">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-accent-green">Free shipping on orders over $100!</p>
                )}
                <div className="border-t border-card-border pt-3 flex justify-between">
                  <span className="font-heading font-semibold text-primary-dark">Total</span>
                  <span className="font-heading text-xl font-bold text-primary-dark">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mt-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-secondary-light" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code"
                      className="w-full rounded-lg border border-card-border py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-accent-blue"
                    />
                  </div>
                  <button className="rounded-lg border border-accent-blue px-3 py-2 text-sm font-medium text-accent-blue hover:bg-accent-blue hover:text-white transition-colors">Apply</button>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block w-full rounded-lg bg-accent-blue py-3.5 text-center font-heading text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors shadow-[0_4px_12px_var(--btn-shadow)]"
              >
                Proceed to Checkout
              </Link>
              <Link href="/shop" className="mt-3 block text-center text-sm text-accent-blue hover:text-accent-blue-hover">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
