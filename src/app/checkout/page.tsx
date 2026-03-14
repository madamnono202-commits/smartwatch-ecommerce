"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, CreditCard, Truck, ShieldCheck, ArrowLeft } from "lucide-react";

type Step = "shipping" | "payment" | "review";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<Step>("shipping");
  const [shippingData, setShippingData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", zip: "", country: "US",
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: "", cardName: "", expiry: "", cvv: "",
  });

  const steps: { id: Step; label: string; icon: typeof Truck }[] = [
    { id: "shipping", label: "Shipping", icon: Truck },
    { id: "payment", label: "Payment", icon: CreditCard },
    { id: "review", label: "Review", icon: ShieldCheck },
  ];

  const stepIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary-dark text-white py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Cart
          </Link>
          <h1 className="font-heading text-3xl font-bold">Checkout</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Steps */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center gap-2 flex-1">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full shrink-0 ${
                i < stepIndex ? "bg-accent-green text-primary-dark" :
                i === stepIndex ? "bg-accent-blue text-white" :
                "bg-gray-200 text-secondary-light"
              }`}>
                {i < stepIndex ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
              </div>
              <span className={`text-sm font-medium hidden sm:block ${i === stepIndex ? "text-accent-blue" : "text-secondary-light"}`}>{step.label}</span>
              {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < stepIndex ? "bg-accent-green" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-card-border">
          {/* Shipping */}
          {currentStep === "shipping" && (
            <div>
              <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1">First Name</label>
                  <input type="text" value={shippingData.firstName} onChange={(e) => setShippingData({ ...shippingData, firstName: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1">Last Name</label>
                  <input type="text" value={shippingData.lastName} onChange={(e) => setShippingData({ ...shippingData, lastName: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1">Email</label>
                  <input type="email" value={shippingData.email} onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1">Phone</label>
                  <input type="tel" value={shippingData.phone} onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-primary-dark mb-1">Address</label>
                  <input type="text" value={shippingData.address} onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="123 Main St" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1">City</label>
                  <input type="text" value={shippingData.city} onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="San Francisco" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-1">State</label>
                    <input type="text" value={shippingData.state} onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="CA" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-1">ZIP</label>
                    <input type="text" value={shippingData.zip} onChange={(e) => setShippingData({ ...shippingData, zip: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="94102" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={() => setCurrentStep("payment")} className="rounded-lg bg-accent-blue px-6 py-3 font-heading text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors shadow-[0_4px_12px_var(--btn-shadow)]">Continue to Payment</button>
              </div>
            </div>
          )}

          {/* Payment */}
          {currentStep === "payment" && (
            <div>
              <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">Payment Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1">Card Number</label>
                  <input type="text" value={paymentData.cardNumber} onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm font-ui focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="4242 4242 4242 4242" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1">Cardholder Name</label>
                  <input type="text" value={paymentData.cardName} onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-1">Expiry Date</label>
                    <input type="text" value={paymentData.expiry} onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm font-ui focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-1">CVV</label>
                    <input type="text" value={paymentData.cvv} onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })} className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm font-ui focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue" placeholder="123" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button onClick={() => setCurrentStep("shipping")} className="rounded-lg border border-card-border px-6 py-3 font-heading text-sm font-semibold text-secondary hover:bg-gray-50 transition-colors">Back</button>
                <button onClick={() => setCurrentStep("review")} className="rounded-lg bg-accent-blue px-6 py-3 font-heading text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors shadow-[0_4px_12px_var(--btn-shadow)]">Review Order</button>
              </div>
            </div>
          )}

          {/* Review */}
          {currentStep === "review" && (
            <div>
              <h2 className="font-heading text-xl font-bold text-primary-dark mb-6">Review Your Order</h2>
              <div className="space-y-6">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h3 className="text-sm font-semibold text-primary-dark mb-2">Shipping Address</h3>
                  <p className="text-sm text-secondary">
                    {shippingData.firstName || "John"} {shippingData.lastName || "Doe"}<br />
                    {shippingData.address || "123 Main St"}<br />
                    {shippingData.city || "San Francisco"}, {shippingData.state || "CA"} {shippingData.zip || "94102"}
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h3 className="text-sm font-semibold text-primary-dark mb-2">Payment Method</h3>
                  <p className="text-sm text-secondary font-ui">
                    **** **** **** {(paymentData.cardNumber || "4242").slice(-4)}
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h3 className="text-sm font-semibold text-primary-dark mb-2">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-secondary">Apex Ultra Pro x 1</span><span className="font-medium">$499.00</span></div>
                    <div className="flex justify-between"><span className="text-secondary">Pulse Fit X x 1</span><span className="font-medium">$279.00</span></div>
                    <div className="border-t border-card-border pt-2 flex justify-between"><span className="text-secondary">Subtotal</span><span className="font-medium">$778.00</span></div>
                    <div className="flex justify-between"><span className="text-secondary">Shipping</span><span className="font-medium text-accent-green">Free</span></div>
                    <div className="border-t border-card-border pt-2 flex justify-between"><span className="font-heading font-semibold text-primary-dark">Total</span><span className="font-heading text-xl font-bold text-primary-dark">$778.00</span></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button onClick={() => setCurrentStep("payment")} className="rounded-lg border border-card-border px-6 py-3 font-heading text-sm font-semibold text-secondary hover:bg-gray-50 transition-colors">Back</button>
                <button
                  onClick={() => alert("Order placed successfully! Thank you for your purchase.")}
                  className="rounded-lg bg-accent-blue px-8 py-3 font-heading text-sm font-semibold text-white hover:bg-accent-blue-hover transition-colors shadow-[0_4px_12px_var(--btn-shadow)]"
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Security Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-secondary-light">
          <ShieldCheck className="h-4 w-4" />
          <span>Secure 256-bit SSL encrypted checkout</span>
        </div>
      </div>
    </div>
  );
}
