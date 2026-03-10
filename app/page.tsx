"use client";

import HeroSection from "@/components/hero-section";
import Features from "@/components/features-4";
import ContentSection from "@/components/content-2";
import ProductGridContainer from "@/components/product-grid-container";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/about-section";
import FooterSection from "@/components/footer";
import WorkshopGallery from "@/components/WorkshopGallery";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";


export default function Home() {
  return (
    <div className="relative">
      <section id="hero"><HeroSection /></section>
      <section id="workshop"><WorkshopGallery /></section>
      <section id="about"><AboutSection /></section>
      <section id="products"><ProductGridContainer /></section>
      <section id="cta"><CTASection /></section>
      <section id="features"><Features /></section>
      <section id="content"><ContentSection /></section>
      <FooterSection />
      <FloatingWhatsAppButton />
    </div>
  );
}
