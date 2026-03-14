"use client";

import { useState } from "react";
import {
  LayoutDashboard, Package, FileText, ShoppingCart, Users, Sparkles,
  Plus, Edit, Trash2, TrendingUp, DollarSign, Eye, BarChart3,
} from "lucide-react";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";

type Tab = "dashboard" | "products" | "content" | "orders" | "users" | "ai";

const mockStats = {
  totalOrders: 1247,
  revenue: 456780,
  activeUsers: 3891,
  conversionRate: 3.2,
};

const mockOrders = [
  { id: "ORD-3001", customer: "Sarah M.", product: "Apex Ultra Pro", total: "$499", status: "Delivered", date: "2026-03-14" },
  { id: "ORD-3002", customer: "James W.", product: "Pulse Fit X", total: "$279", status: "Shipped", date: "2026-03-13" },
  { id: "ORD-3003", customer: "Emily R.", product: "Nova Series 7", total: "$399", status: "Processing", date: "2026-03-13" },
  { id: "ORD-3004", customer: "Mike T.", product: "Trail Master GPS", total: "$349", status: "Pending", date: "2026-03-12" },
  { id: "ORD-3005", customer: "Lisa P.", product: "Chrono Classic", total: "$599", status: "Delivered", date: "2026-03-12" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [aiPrompt, setAiPrompt] = useState("");

  const tabs = [
    { id: "dashboard" as Tab, label: "Dashboard", icon: LayoutDashboard },
    { id: "products" as Tab, label: "Products", icon: Package },
    { id: "content" as Tab, label: "Content", icon: FileText },
    { id: "orders" as Tab, label: "Orders", icon: ShoppingCart },
    { id: "users" as Tab, label: "Users", icon: Users },
    { id: "ai" as Tab, label: "AI Tools", icon: Sparkles },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary-dark text-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-white/60">Manage your store, content, and AI tools.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="md:w-52 shrink-0">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeTab === tab.id ? "bg-accent-blue text-white" : "text-secondary hover:bg-white"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Dashboard */}
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Total Orders", value: mockStats.totalOrders.toLocaleString(), icon: ShoppingCart, color: "text-accent-blue", bg: "bg-blue-50" },
                    { label: "Revenue", value: `$${(mockStats.revenue / 1000).toFixed(1)}K`, icon: DollarSign, color: "text-accent-green", bg: "bg-green-50" },
                    { label: "Active Users", value: mockStats.activeUsers.toLocaleString(), icon: Users, color: "text-purple-500", bg: "bg-purple-50" },
                    { label: "Conversion", value: `${mockStats.conversionRate}%`, icon: TrendingUp, color: "text-amber-500", bg: "bg-amber-50" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white p-4 border border-card-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-secondary-light">{stat.label}</span>
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${stat.bg} ${stat.color}`}>
                          <stat.icon className="h-4 w-4" />
                        </div>
                      </div>
                      <p className="font-heading text-2xl font-bold text-primary-dark">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Orders */}
                <div className="rounded-xl bg-white border border-card-border overflow-hidden">
                  <div className="p-4 border-b border-card-border flex items-center justify-between">
                    <h3 className="font-heading text-base font-semibold text-primary-dark">Recent Orders</h3>
                    <button className="text-sm text-accent-blue hover:text-accent-blue-hover">View All</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 text-xs text-secondary-light uppercase">
                          <th className="px-4 py-2 text-left">Order ID</th>
                          <th className="px-4 py-2 text-left">Customer</th>
                          <th className="px-4 py-2 text-left">Product</th>
                          <th className="px-4 py-2 text-left">Total</th>
                          <th className="px-4 py-2 text-left">Status</th>
                          <th className="px-4 py-2 text-left">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockOrders.map((order) => (
                          <tr key={order.id} className="border-t border-card-border text-sm">
                            <td className="px-4 py-3 font-ui text-primary-dark">{order.id}</td>
                            <td className="px-4 py-3 text-secondary">{order.customer}</td>
                            <td className="px-4 py-3 text-secondary">{order.product}</td>
                            <td className="px-4 py-3 font-semibold text-primary-dark">{order.total}</td>
                            <td className="px-4 py-3">
                              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                order.status === "Delivered" ? "bg-green-100 text-green-700" :
                                order.status === "Shipped" ? "bg-blue-100 text-blue-700" :
                                order.status === "Processing" ? "bg-amber-100 text-amber-700" :
                                "bg-gray-100 text-gray-700"
                              }`}>{order.status}</span>
                            </td>
                            <td className="px-4 py-3 text-secondary-light">{order.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white border border-card-border p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="h-4 w-4 text-accent-blue" />
                      <h3 className="text-sm font-semibold text-primary-dark">Top Products</h3>
                    </div>
                    <div className="space-y-2">
                      {products.slice(0, 5).map((p, i) => (
                        <div key={p.id} className="flex items-center justify-between text-sm">
                          <span className="text-secondary">{i + 1}. {p.name}</span>
                          <span className="font-ui text-xs text-secondary-light">{p.reviewCount} sold</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white border border-card-border p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="h-4 w-4 text-accent-blue" />
                      <h3 className="text-sm font-semibold text-primary-dark">AI Content Queue</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between"><span className="text-secondary">Blog drafts pending review</span><span className="font-medium text-accent-blue">3</span></div>
                      <div className="flex items-center justify-between"><span className="text-secondary">Product descriptions queued</span><span className="font-medium text-accent-blue">5</span></div>
                      <div className="flex items-center justify-between"><span className="text-secondary">Marketing emails ready</span><span className="font-medium text-accent-blue">2</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products */}
            {activeTab === "products" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-xl font-bold text-primary-dark">Product Management</h2>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-4 py-2 text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors">
                    <Plus className="h-4 w-4" /> Add Product
                  </button>
                </div>
                <div className="rounded-xl bg-white border border-card-border overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 text-xs text-secondary-light uppercase">
                        <th className="px-4 py-3 text-left">Product</th>
                        <th className="px-4 py-3 text-left">Brand</th>
                        <th className="px-4 py-3 text-left">Category</th>
                        <th className="px-4 py-3 text-left">Price</th>
                        <th className="px-4 py-3 text-left">Stock</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-t border-card-border text-sm">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-primary-dark flex items-center justify-center shrink-0">
                                <span className="text-white text-xs font-bold">{product.name.charAt(0)}</span>
                              </div>
                              <span className="font-medium text-primary-dark">{product.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-secondary">{product.brand}</td>
                          <td className="px-4 py-3 text-secondary">{product.category}</td>
                          <td className="px-4 py-3 font-semibold text-primary-dark">${product.price}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${product.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                              {product.inStock ? "In Stock" : "Out of Stock"}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <button className="text-secondary-light hover:text-accent-blue"><Eye className="h-4 w-4" /></button>
                              <button className="text-secondary-light hover:text-accent-blue"><Edit className="h-4 w-4" /></button>
                              <button className="text-secondary-light hover:text-warning"><Trash2 className="h-4 w-4" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Content */}
            {activeTab === "content" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-xl font-bold text-primary-dark">Content Management</h2>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-4 py-2 text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors">
                    <Plus className="h-4 w-4" /> New Article
                  </button>
                </div>
                <div className="space-y-3">
                  {blogPosts.map((post) => (
                    <div key={post.slug} className="rounded-xl bg-white border border-card-border p-4 flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="rounded-full bg-accent-blue/10 text-accent-blue px-2 py-0.5 text-xs font-medium">{post.category}</span>
                          <span className="flex items-center gap-1 text-xs text-accent-green"><Sparkles className="h-3 w-3" /> AI-Generated</span>
                        </div>
                        <p className="font-heading text-sm font-semibold text-primary-dark">{post.title}</p>
                        <p className="text-xs text-secondary-light mt-1">{post.author} &middot; {post.date} &middot; {post.readTime}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <button className="text-secondary-light hover:text-accent-blue"><Edit className="h-4 w-4" /></button>
                        <button className="text-secondary-light hover:text-warning"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Orders */}
            {activeTab === "orders" && (
              <div>
                <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">Order Management</h2>
                <div className="rounded-xl bg-white border border-card-border overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 text-xs text-secondary-light uppercase">
                        <th className="px-4 py-3 text-left">Order ID</th>
                        <th className="px-4 py-3 text-left">Customer</th>
                        <th className="px-4 py-3 text-left">Product</th>
                        <th className="px-4 py-3 text-left">Total</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockOrders.map((order) => (
                        <tr key={order.id} className="border-t border-card-border text-sm">
                          <td className="px-4 py-3 font-ui text-primary-dark">{order.id}</td>
                          <td className="px-4 py-3 text-secondary">{order.customer}</td>
                          <td className="px-4 py-3 text-secondary">{order.product}</td>
                          <td className="px-4 py-3 font-semibold">{order.total}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              order.status === "Delivered" ? "bg-green-100 text-green-700" :
                              order.status === "Shipped" ? "bg-blue-100 text-blue-700" :
                              order.status === "Processing" ? "bg-amber-100 text-amber-700" :
                              "bg-gray-100 text-gray-700"
                            }`}>{order.status}</span>
                          </td>
                          <td className="px-4 py-3 text-secondary-light">{order.date}</td>
                          <td className="px-4 py-3"><button className="text-sm text-accent-blue hover:text-accent-blue-hover">View</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Users */}
            {activeTab === "users" && (
              <div>
                <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">User Analytics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-xl bg-white border border-card-border p-4 text-center">
                    <p className="font-heading text-3xl font-bold text-accent-blue">3,891</p>
                    <p className="text-sm text-secondary mt-1">Total Users</p>
                  </div>
                  <div className="rounded-xl bg-white border border-card-border p-4 text-center">
                    <p className="font-heading text-3xl font-bold text-accent-green">247</p>
                    <p className="text-sm text-secondary mt-1">New This Month</p>
                  </div>
                  <div className="rounded-xl bg-white border border-card-border p-4 text-center">
                    <p className="font-heading text-3xl font-bold text-purple-500">68%</p>
                    <p className="text-sm text-secondary mt-1">Retention Rate</p>
                  </div>
                </div>
                <div className="rounded-xl bg-white border border-card-border p-6">
                  <h3 className="font-heading text-base font-semibold text-primary-dark mb-4">Recent Signups</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Alice Johnson", orders: 7 },
                      { name: "Bob Smith", orders: 3 },
                      { name: "Carol Williams", orders: 5 },
                      { name: "Dan Brown", orders: 2 },
                      { name: "Eva Martinez", orders: 9 },
                    ].map((user, i) => (
                      <div key={user.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-blue text-white text-xs font-bold">
                            {user.name.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <div>
                            <p className="font-medium text-primary-dark">{user.name}</p>
                            <p className="text-xs text-secondary-light">Joined {i + 1} day{i > 0 ? "s" : ""} ago</p>
                          </div>
                        </div>
                        <span className="text-xs text-secondary-light">{user.orders} orders</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* AI Tools */}
            {activeTab === "ai" && (
              <div>
                <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">AI Content Generation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl bg-white border border-card-border p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-accent-blue" />
                      <h3 className="font-heading text-base font-semibold text-primary-dark">Generate Product Description</h3>
                    </div>
                    <div className="space-y-3">
                      <select className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue">
                        <option value="">Select a product</option>
                        {products.map((p) => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                      <select className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue">
                        <option value="professional">Professional Tone</option>
                        <option value="casual">Casual Tone</option>
                        <option value="luxury">Luxury Tone</option>
                        <option value="sporty">Sporty Tone</option>
                      </select>
                      <button className="w-full rounded-lg bg-accent-blue py-2.5 text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors">Generate Description</button>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white border border-card-border p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-accent-blue" />
                      <h3 className="font-heading text-base font-semibold text-primary-dark">Generate Blog Article</h3>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="Enter topic (e.g., 'Best watches for runners')"
                        className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue"
                      />
                      <select className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue">
                        <option value="trends">Trends</option>
                        <option value="howto">How-to</option>
                        <option value="review">Product Review</option>
                        <option value="guide">Guide</option>
                      </select>
                      <button className="w-full rounded-lg bg-accent-blue py-2.5 text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors">Generate Article</button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-accent-blue/5 border border-accent-blue/20 p-6">
                  <h3 className="font-heading text-base font-semibold text-primary-dark mb-3">AI Integration Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-between"><span className="text-secondary">Product Descriptions</span><span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium">Active</span></div>
                    <div className="flex items-center justify-between"><span className="text-secondary">Blog Generation</span><span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium">Active</span></div>
                    <div className="flex items-center justify-between"><span className="text-secondary">Chatbot</span><span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium">Active</span></div>
                    <div className="flex items-center justify-between"><span className="text-secondary">Recommendations</span><span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium">Active</span></div>
                    <div className="flex items-center justify-between"><span className="text-secondary">Virtual Try-On (AR)</span><span className="rounded-full bg-amber-100 text-amber-700 px-2 py-0.5 text-xs font-medium">Beta</span></div>
                    <div className="flex items-center justify-between"><span className="text-secondary">Marketing Emails</span><span className="rounded-full bg-gray-100 text-gray-700 px-2 py-0.5 text-xs font-medium">Coming Soon</span></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
