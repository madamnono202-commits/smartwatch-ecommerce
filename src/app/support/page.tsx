"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Send, Phone, Mail, MapPin, Clock } from "lucide-react";

const faqs = [
  {
    question: "What is the warranty period for ChronoTech watches?",
    answer: "All ChronoTech watches come with a standard 2-year manufacturer warranty covering defects in materials and workmanship. Extended warranty plans of up to 5 years are available for purchase.",
  },
  {
    question: "How do I set up my new smartwatch?",
    answer: "Download the ChronoTech app from the App Store or Google Play, turn on your watch, and follow the on-screen pairing instructions. The app will guide you through the complete setup process including health tracking configuration.",
  },
  {
    question: "Can I return or exchange my watch?",
    answer: "Yes! We offer a 30-day hassle-free return policy. If you're not completely satisfied, you can return your watch in its original packaging for a full refund or exchange. Watches must be in unused condition with all accessories.",
  },
  {
    question: "Is my watch water resistant?",
    answer: "Water resistance varies by model. Most of our watches are rated at 5 ATM (50m), suitable for swimming. The Apex Ultra Pro and Trail Master GPS are rated at 10 ATM (100m). Check the product specifications for your specific model.",
  },
  {
    question: "How does the AI recommendation system work?",
    answer: "Our AI analyzes your browsing history, preferences, health goals, and activity patterns to suggest the most suitable watches. The more you interact with our platform, the more personalized your recommendations become.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and offer financing options through our partner for purchases over $200.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) is available for an additional fee. Free standard shipping is offered on all orders over $100.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. International shipping times vary by destination, typically 7-14 business days. Customs duties and taxes may apply depending on your country.",
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-primary-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold">Support Center</h1>
          <p className="mt-2 text-white/60">We&apos;re here to help. Find answers or get in touch with our team.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Phone, title: "Call Us", info: "+1 (800) 555-0199", sub: "Mon-Fri, 9am-6pm EST" },
            { icon: Mail, title: "Email", info: "support@chronotech.com", sub: "Response within 24 hours" },
            { icon: MapPin, title: "Visit Us", info: "123 Tech Avenue", sub: "San Francisco, CA 94102" },
            { icon: Clock, title: "Business Hours", info: "Mon-Fri: 9am-6pm", sub: "Sat: 10am-4pm EST" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-card-border p-5 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue mb-3">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-primary-dark">{item.title}</h3>
              <p className="mt-1 text-sm text-primary-dark font-medium">{item.info}</p>
              <p className="text-xs text-secondary-light">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-card-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-primary-dark pr-4">{faq.question}</span>
                    {openFaq === i ? (
                      <ChevronUp className="h-4 w-4 text-accent-blue shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-secondary-light shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-secondary leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-6">Contact Us</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for your message! We will get back to you within 24 hours.");
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="return">Return / Exchange</option>
                  <option value="warranty">Warranty Claim</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 font-heading text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors shadow-[0_4px_12px_var(--btn-shadow)]"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Warranty & Returns */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="font-heading text-xl font-bold text-primary-dark mb-4">Warranty Information</h3>
            <ul className="space-y-3 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                2-year standard warranty on all watches
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                Covers manufacturing defects and hardware malfunctions
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                Extended warranty available up to 5 years
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                Free repairs or replacements during warranty period
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="font-heading text-xl font-bold text-primary-dark mb-4">Return Policy</h3>
            <ul className="space-y-3 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green mt-1.5 shrink-0" />
                30-day hassle-free returns
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green mt-1.5 shrink-0" />
                Full refund on unused items in original packaging
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green mt-1.5 shrink-0" />
                Free return shipping label provided
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green mt-1.5 shrink-0" />
                Exchange for different model or color available
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
