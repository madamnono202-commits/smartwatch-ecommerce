"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { testimonials } from "@/data/testimonials";

const heroSlides = [
  {
    title: "The Future on Your Wrist",
    subtitle: "AI-Powered Smartwatches",
    description: "Discover watches that learn your health patterns, predict your needs, and keep you connected.",
    cta: "Shop Now",
    ctaLink: "/shop",
    gradient: "from-[#0D0D0D] via-[#16213e] to-[#0f3460]",
  },
  {
    title: "Virtual Try-On",
    subtitle: "See It Before You Buy",
    description: "Use our AR technology to see how any watch looks on your wrist before making a decision.",
    cta: "Explore AR",
    ctaLink: "/shop",
    gradient: "from-[#0D0D0D] via-[#1a1a2e] to-[#0D0D0D]",
  },
  {
    title: "Compare & Choose",
    subtitle: "AI-Powered Comparison",
    description: "Let our AI analyze features, specs, and reviews to find your perfect match.",
    cta: "Compare Watches",
    ctaLink: "/compare",
    gradient: "from-[#0D0D0D] via-[#112240] to-[#1E90FF]",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter((p) => p.isFeatured);
  const featuredBlogs = blogPosts.filter((p) => p.featured).slice(0, 3);
  const slide = heroSlides[currentSlide];

  return (
    <div>
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${slide.gradient} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent-blue blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent-green blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-ui text-accent-green">
              <Sparkles className="h-3 w-3" />
              {slide.subtitle}
            </span>
            <h1 className="mt-6 font-heading text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              {slide.title}
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-lg leading-relaxed">
              {slide.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={slide.ctaLink}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 font-heading text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors shadow-[0_4px_12px_var(--btn-shadow)]"
              >
                {slide.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-heading text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Slide Navigation */}
          <div className="absolute bottom-8 right-8 flex items-center gap-3">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentSlide ? "w-8 bg-accent-blue" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* AI Recommendation Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent-blue" />
                <span className="text-sm font-ui text-accent-blue">AI-Powered</span>
              </div>
              <h2 className="mt-1 font-heading text-3xl font-bold text-primary-dark">Recommended for You</h2>
              <p className="mt-1 text-secondary">Personalized picks based on trending preferences and AI analysis.</p>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:text-accent-blue-hover transition-colors"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotions / Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "AI-Powered Insights",
                description: "Our AI analyzes your health data, activity patterns, and preferences to provide personalized recommendations.",
                color: "text-accent-blue",
                bg: "bg-blue-50",
              },
              {
                icon: Zap,
                title: "Next-Gen Technology",
                description: "From flexible OLED displays to solar charging, our watches feature cutting-edge innovations.",
                color: "text-accent-green",
                bg: "bg-green-50",
              },
              {
                icon: Shield,
                title: "Premium Quality",
                description: "Aerospace-grade titanium, sapphire crystal, and military-grade durability. Built to last.",
                color: "text-amber-500",
                bg: "bg-amber-50",
              },
            ].map((feature) => (
              <div key={feature.title} className={`rounded-2xl ${feature.bg} p-8 text-center`}>
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg} ${feature.color}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-primary-dark">{feature.title}</h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-warning/20 px-3 py-1 text-xs font-ui text-warning">
                <Zap className="h-3 w-3" /> Flash Sale
              </span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold">Up to 20% Off Selected Watches</h2>
              <p className="mt-2 text-white/60 max-w-md">Limited time offer on premium smartwatches. Don&apos;t miss out on these incredible deals.</p>
              <Link
                href="/shop"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 font-heading text-sm font-semibold hover:bg-accent-blue-hover transition-colors shadow-[0_4px_12px_var(--btn-shadow)]"
              >
                Shop Sale <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {products
                .filter((p) => p.originalPrice)
                .slice(0, 2)
                .map((product) => (
                  <Link
                    key={product.id}
                    href={`/shop/${product.id}`}
                    className="group rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors"
                  >
                    <p className="text-xs text-secondary-light">{product.brand}</p>
                    <p className="font-heading text-sm font-semibold mt-1">{product.name}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-heading font-bold text-accent-blue">${product.price}</span>
                      <span className="text-xs text-secondary-light line-through">${product.originalPrice}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary-dark">From the Blog</h2>
              <p className="mt-1 text-secondary">AI-generated insights, guides, and the latest in wearable tech.</p>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:text-accent-blue-hover"
            >
              All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogs.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="rounded-xl border border-card-border overflow-hidden shadow-[0_4px_12px_var(--card-shadow)] hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary-dark to-accent-blue/30 flex items-center justify-center p-6">
                    <h4 className="text-white font-heading text-sm font-semibold text-center">{post.title}</h4>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-secondary-light">
                      <span className="rounded-full bg-accent-blue/10 text-accent-blue px-2 py-0.5 font-medium">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-2 font-heading text-base font-semibold text-primary-dark group-hover:text-accent-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-secondary line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary-dark">What Our Customers Say</h2>
            <p className="mt-2 text-secondary">Real stories from real people who love their ChronoTech watches.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="rounded-2xl bg-white p-6 shadow-[0_4px_12px_var(--card-shadow)] border border-card-border"
              >
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= t.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-secondary leading-relaxed italic">&ldquo;{t.content}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue text-white font-heading font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-dark">{t.name}</p>
                    <p className="text-xs text-secondary-light">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
