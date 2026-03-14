import Link from "next/link";
import { Watch, Mail, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-secondary-light">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-heading font-bold text-white">Stay in the Loop</h3>
              <p className="mt-1 text-sm">Get the latest watches, deals, and tech insights delivered to your inbox.</p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-light" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg bg-white/10 border border-white/20 py-2.5 pl-10 pr-4 text-sm text-white placeholder-secondary-light focus:outline-none focus:border-accent-blue"
                />
              </div>
              <button className="rounded-lg bg-accent-blue px-6 py-2.5 text-sm font-medium text-white hover:bg-accent-blue-hover transition-colors shadow-[0_4px_12px_var(--btn-shadow)]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Watch className="h-7 w-7 text-accent-blue" />
              <span className="font-heading text-lg font-bold text-white">
                CHRONO<span className="text-accent-blue">TECH</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Premium smartwatches powered by AI. Discover the future of wearable technology.
            </p>
            <div className="mt-4 flex gap-3">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-accent-blue transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">Shop</h4>
            <ul className="mt-4 space-y-2">
              {["All Watches", "Fitness", "Luxury", "Outdoor", "Smart", "New Arrivals", "Sale"].map((item) => (
                <li key={item}>
                  <Link href="/shop" className="text-sm hover:text-accent-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/about" },
                { label: "Press", href: "/about" },
                { label: "Partners", href: "/about" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-accent-blue transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">Support</h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Help Center", href: "/support" },
                { label: "Contact Us", href: "/support" },
                { label: "Returns", href: "/support" },
                { label: "Warranty", href: "/support" },
                { label: "Shipping Info", href: "/support" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-accent-blue transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>&copy; 2026 ChronoTech. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-blue transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent-blue transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-ui">Visa</span>
              <span className="font-ui">Mastercard</span>
              <span className="font-ui">PayPal</span>
              <span className="font-ui">Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
