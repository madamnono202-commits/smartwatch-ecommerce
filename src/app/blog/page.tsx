"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Sparkles } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = !searchQuery || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-primary-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-accent-blue" />
            <span className="text-sm font-ui text-accent-blue">AI-Generated Content</span>
          </div>
          <h1 className="font-heading text-4xl font-bold">Blog</h1>
          <p className="mt-2 text-white/60">Insights, guides, and the latest in smartwatch technology.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-light" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-lg border border-card-border py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-blue"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !selectedCategory ? "bg-accent-blue text-white" : "bg-gray-100 text-secondary hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  selectedCategory === cat ? "bg-accent-blue text-white" : "bg-gray-100 text-secondary hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-secondary">No articles found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="rounded-xl border border-card-border overflow-hidden shadow-[0_4px_12px_var(--card-shadow)] hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary-dark to-accent-blue/30 flex items-center justify-center p-6">
                    <h4 className="text-white font-heading text-sm font-semibold text-center">{post.title}</h4>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-secondary-light">
                      <span className="rounded-full bg-accent-blue/10 text-accent-blue px-2 py-0.5 font-medium">{post.category}</span>
                      <span>{post.date}</span>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-primary-dark group-hover:text-accent-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-secondary line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-blue text-white text-xs font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs text-secondary">{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
