"use client";

import HeroSection from "@/components/hero-section";
import Features from "@/components/features-4";
import ContentSection from "@/components/content-2";
import ProductGridContainer from "@/components/product-grid-container";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/about-section";
import FooterSection from "@/components/footer";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <ContentSection />
      <ProductGridContainer />
      <CTASection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
