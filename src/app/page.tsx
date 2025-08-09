import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { AchievementsSection } from "./components/shared/AchievementsSection";
import { ClientsSection } from "./components/shared/ClientsSection";
import { FaqSection } from "./components/shared/FaqSection";
import { FeaturedServicesSection } from "./components/shared/FeaturedServicesSection";
import { HeroSection } from "./components/shared/HeroSection";
import { PortfolioSection } from "./components/shared/PortfolioSection";
import { PricingSection } from "./components/shared/PricingSection";
import { TeamSection } from "./components/shared/TeamSection";
import { TechnologySection } from "./components/shared/TechnologySection";
import { TestimonialsSection } from "./components/shared/TestimonialsSection";
import { WhyChooseUsSection } from "./components/shared/WhyChooseUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection/>
      <PortfolioSection/>
      <FeaturedServicesSection/>
      <PricingSection/>
      <TechnologySection/>
      <WhyChooseUsSection/>
      <AchievementsSection/>
      <TeamSection/>
      <TestimonialsSection/>
      {/* <ClientsSection/> */}
      <FaqSection/>
      {/* অন্য content এখানে */}
    </>
  );
}
