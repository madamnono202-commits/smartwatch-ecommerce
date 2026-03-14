"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Package, Heart, Settings, LogIn, Mail, Lock, Eye, EyeOff, Bell, Shield } from "lucide-react";
import { products } from "@/data/products";

type Tab = "signin" | "profile" | "orders" | "wishlist" | "preferences";

const mockOrders = [
  { id: "ORD-2026-001", product: "Apex Ultra Pro", date: "2026-03-10", status: "Delivered", total: "$499.00" },
  { id: "ORD-2026-002", product: "Pulse Fit X", date: "2026-02-28", status: "Shipped", total: "$279.00" },
  { id: "ORD-2026-003", product: "Zen Wellness Band", date: "2026-02-15", status: "Processing", total: "$199.00" },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>("signin");
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const wishlistProducts = products.slice(0, 3);

  const tabs = [
    { id: "profile" as Tab, label: "Profile", icon: User },
    { id: "orders" as Tab, label: "Orders", icon: Package },
    { id: "wishlist" as Tab, label: "Wishlist", icon: Heart },
    { id: "preferences" as Tab, label: "Preferences", icon: Settings },
  ];

  if (!isLoggedIn) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-card-border">
            <div className="text-center mb-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-blue text-white mb-3">
                <LogIn className="h-6 w-6" />
              </div>
              <h1 className="font-heading text-2xl font-bold text-primary-dark">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h1>
              <p className="mt-1 text-sm text-secondary">
                {isSignUp ? "Join ChronoTech for personalized recommendations." : "Sign in to access your account."}
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setActiveTab("profile"); }} className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-light" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-card-border py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-light" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-card-border py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-light" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-card-border py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-light hover:text-primary-dark"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-accent-blue py-3 font-heading text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors shadow-[0_4px_12px_var(--btn-shadow)]"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-secondary">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-accent-blue font-medium hover:text-accent-blue-hover"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold">My Account</h1>
          <p className="mt-2 text-white/60">Manage your profile, orders, and preferences.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-56 shrink-0">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-accent-blue/10 text-accent-blue"
                      : "text-secondary hover:bg-gray-50"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-warning hover:bg-red-50 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                Sign Out
              </button>
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1">
            {activeTab === "profile" && (
              <div>
                <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-1">First Name</label>
                    <input type="text" defaultValue="John" className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-1">Last Name</label>
                    <input type="text" defaultValue="Doe" className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-1">Email</label>
                    <input type="email" defaultValue="john@example.com" className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-1">Phone</label>
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue" />
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button className="rounded-lg bg-accent-blue px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors">Save Changes</button>
                </div>

                <div className="mt-8 pt-8 border-t border-card-border">
                  <h3 className="font-heading text-lg font-bold text-primary-dark mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5" /> Security
                  </h3>
                  <div className="space-y-3">
                    <button className="text-sm text-accent-blue hover:text-accent-blue-hover font-medium">Change Password</button>
                    <p className="text-sm text-secondary">Two-Factor Authentication: <span className="text-warning font-medium">Disabled</span></p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div>
                <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">Order History</h2>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="rounded-xl border border-card-border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <p className="font-ui text-sm text-primary-dark font-medium">{order.id}</p>
                        <p className="text-sm text-secondary">{order.product}</p>
                        <p className="text-xs text-secondary-light">{order.date}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                          order.status === "Delivered" ? "bg-green-100 text-green-700" :
                          order.status === "Shipped" ? "bg-blue-100 text-blue-700" :
                          "bg-amber-100 text-amber-700"
                        }`}>{order.status}</span>
                        <span className="font-heading font-bold text-primary-dark">{order.total}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div>
                <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">My Wishlist</h2>
                <div className="space-y-4">
                  {wishlistProducts.map((product) => (
                    <div key={product.id} className="rounded-xl border border-card-border p-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg bg-primary-dark flex items-center justify-center shrink-0">
                          <span className="text-white font-heading font-bold text-lg">{product.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-xs text-secondary-light">{product.brand}</p>
                          <p className="font-heading text-sm font-semibold text-primary-dark">{product.name}</p>
                          <p className="text-sm font-bold text-accent-blue">${product.price}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/shop/${product.id}`} className="rounded-lg bg-accent-blue px-4 py-2 text-xs font-medium text-white hover:bg-accent-blue-hover transition-colors">View</Link>
                        <button className="rounded-lg border border-card-border px-4 py-2 text-xs font-medium text-secondary hover:border-warning hover:text-warning transition-colors">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div>
                <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-primary-dark mb-3">
                      <Bell className="h-4 w-4" /> Notifications
                    </h3>
                    <div className="space-y-3">
                      {[
                        { label: "New product launches", defaultChecked: true },
                        { label: "Price drop alerts", defaultChecked: true },
                        { label: "Order status updates", defaultChecked: true },
                        { label: "AI personalized recommendations", defaultChecked: false },
                        { label: "Newsletter and blog updates", defaultChecked: false },
                      ].map((pref) => (
                        <label key={pref.label} className="flex items-center justify-between">
                          <span className="text-sm text-secondary">{pref.label}</span>
                          <input
                            type="checkbox"
                            defaultChecked={pref.defaultChecked}
                            className="h-4 w-4 rounded border-gray-300 text-accent-blue focus:ring-accent-blue"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                  <button className="rounded-lg bg-accent-blue px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors">Save Preferences</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
