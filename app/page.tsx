"use client";

import HeroSection from "@/components/hero-section";
import Features from "@/components/features-4";
import ContentSection from "@/components/content-2";
import ProductGridContainer from "@/components/product-grid-container";
import CTASection from "@/components/CTASection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <ContentSection />
      <ProductGridContainer />
      <CTASection />
    </div>
  );
}
