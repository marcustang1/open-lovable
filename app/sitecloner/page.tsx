import Header from '@/components/site/Header';
import HeroSection from '@/components/site/HeroSection';
import Benefits from '@/components/site/Benefits';
import Features from '@/components/site/Features';
import Testimonials from '@/components/site/Testimonials';
import Pricing from '@/components/site/Pricing';
import Footer from '@/components/site/Footer';

export const metadata = {
  title: "Clone any website with one URL • SiteCloner AI",
  description: "Paste a URL, get production-ready React/Next.js code in seconds. No lock-in, fully editable, and mobile-first.",
  keywords: "website cloner, AI, React, Next.js, web development, code generation",
  openGraph: {
    title: "Clone any website with one URL • SiteCloner AI",
    description: "Paste a URL, get production-ready React/Next.js code in seconds. No lock-in, fully editable, and mobile-first.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clone any website with one URL • SiteCloner AI",
    description: "Paste a URL, get production-ready React/Next.js code in seconds. No lock-in, fully editable, and mobile-first.",
  },
};

export default function SiteClonerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <Benefits />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}