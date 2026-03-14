"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2, Sparkles, Facebook, Twitter } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { products } from "@/data/products";

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-primary-dark">Article not found</h1>
          <Link href="/blog" className="mt-4 inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue-hover">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const relatedProducts = products.slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-dark to-accent-blue/20 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="rounded-full bg-accent-blue px-3 py-1 text-xs font-medium">{post.category}</span>
            <span className="flex items-center gap-1 text-xs text-white/60">
              <Sparkles className="h-3 w-3" /> AI-Generated
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          {/* Main Content */}
          <article className="flex-1 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return <h2 key={i} className="font-heading text-2xl font-bold text-primary-dark mt-8 mb-4">{paragraph.replace("## ", "")}</h2>;
                }
                if (paragraph.startsWith("### ")) {
                  return <h3 key={i} className="font-heading text-xl font-semibold text-primary-dark mt-6 mb-3">{paragraph.replace("### ", "")}</h3>;
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                  return (
                    <ul key={i} className="list-disc list-inside space-y-1 my-4 text-secondary">
                      {items.map((item, j) => (
                        <li key={j} className="text-base leading-relaxed">{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d+\./)) {
                  const items = paragraph.split("\n").filter((line) => line.match(/^\d+\./));
                  return (
                    <ol key={i} className="list-decimal list-inside space-y-1 my-4 text-secondary">
                      {items.map((item, j) => (
                        <li key={j} className="text-base leading-relaxed">{item.replace(/^\d+\.\s*/, "")}</li>
                      ))}
                    </ol>
                  );
                }
                return <p key={i} className="text-base text-secondary leading-relaxed my-4">{paragraph}</p>;
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-card-border">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-primary-dark">Tags:</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-secondary">#{tag}</span>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-secondary">Share:</span>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-accent-blue hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-accent-blue hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-accent-blue hover:text-white transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Related Articles */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-accent-blue" />
                  <h3 className="font-heading text-sm font-semibold text-primary-dark">Related Articles</h3>
                </div>
                <div className="space-y-3">
                  {relatedPosts.map((rp) => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                      <p className="text-sm font-medium text-primary-dark group-hover:text-accent-blue transition-colors line-clamp-2">{rp.title}</p>
                      <p className="text-xs text-secondary-light mt-1">{rp.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Products */}
              <div>
                <h3 className="font-heading text-sm font-semibold text-primary-dark mb-3">Featured Watches</h3>
                <div className="space-y-3">
                  {relatedProducts.map((product) => (
                    <Link key={product.id} href={`/shop/${product.id}`} className="flex items-center gap-3 group">
                      <div className="w-12 h-12 rounded-lg bg-primary-dark flex items-center justify-center shrink-0">
                        <span className="text-white font-heading font-bold text-sm">{product.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-primary-dark group-hover:text-accent-blue transition-colors">{product.name}</p>
                        <p className="text-xs text-accent-blue font-bold">${product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
