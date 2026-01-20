import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { MissionVisionSection } from "@/components/home/mission-vision-section"
import { ServicesSection } from "@/components/home/services-section"
import { ZonesSection } from "@/components/home/zones-section"
import { ValuePropositionSection } from "@/components/home/value-proposition-section"
import { ClientsSection } from "@/components/home/clients-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ServicesSection />
      <ZonesSection />
      <ValuePropositionSection />
      <ClientsSection />
      <CTASection />
    </main>
  )
}
