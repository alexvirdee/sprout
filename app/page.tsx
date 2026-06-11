import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { PlantTracking } from "@/components/landing/plant-tracking";
import { WateringReminders } from "@/components/landing/watering-reminders";
import { GardenJournal } from "@/components/landing/garden-journal";
import { HarvestTracking } from "@/components/landing/harvest-tracking";
import { SeasonalPlanning } from "@/components/landing/seasonal-planning";
import { AppPreview } from "@/components/landing/app-preview";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Features />
        <PlantTracking />
        <WateringReminders />
        <GardenJournal />
        <HarvestTracking />
        <SeasonalPlanning />
        <AppPreview />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
