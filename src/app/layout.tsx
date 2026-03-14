import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "ChronoTech | Premium Smart Watches",
  description: "Discover the future of wearable technology. AI-powered smartwatch recommendations, virtual try-on, and premium collections.",
  keywords: "smartwatch, smart watch, wearable, fitness tracker, luxury watch, AI recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
