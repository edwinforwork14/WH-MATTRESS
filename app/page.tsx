import HeroSection from "@/components/hero-section";
import Features from "@/components/features-4";
import ContentSection from "@/components/content-2";
import { CarouselDemo } from "@/components/carrouselDemo";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <CarouselDemo />
      <ContentSection />
    </div>
  );
}
