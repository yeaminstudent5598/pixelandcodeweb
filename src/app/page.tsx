// File Path: D:\yeamin student\PixelandCode Web\pixelandcode\src\app\page.tsx
// এই file টি replace করুন

import dynamic from 'next/dynamic';
import { HeroSection } from "./components/shared/HeroSection";
import { Hero } from "./components/shared/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";

// Dynamic import করা হয়েছে যেগুলো below the fold (scroll করলে দেখা যায়)
// ssr: false remove করা হয়েছে - Server Components এ allow নেই
const PortfolioSection = dynamic(
  () => import('./components/shared/PortfolioSection').then(mod => ({ default: mod.PortfolioSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const FeaturedServicesSection = dynamic(
  () => import('./components/shared/FeaturedServicesSection').then(mod => ({ default: mod.FeaturedServicesSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const PricingSection = dynamic(
  () => import('./components/shared/PricingSection').then(mod => ({ default: mod.PricingSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const TechnologySection = dynamic(
  () => import('./components/shared/TechnologySection').then(mod => ({ default: mod.TechnologySection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const WhyChooseUsSection = dynamic(
  () => import('./components/shared/WhyChooseUsSection').then(mod => ({ default: mod.WhyChooseUsSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const AchievementsSection = dynamic(
  () => import('./components/shared/AchievementsSection').then(mod => ({ default: mod.AchievementsSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const TeamSection = dynamic(
  () => import('./components/shared/TeamSection').then(mod => ({ default: mod.TeamSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const TestimonialsSection = dynamic(
  () => import('./components/shared/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const FaqSection = dynamic(
  () => import('./components/shared/FaqSection').then(mod => ({ default: mod.FaqSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

export default function HomePage() {
  return (
    <>
      {/* Above the fold - immediately loaded */}
      <HeroSection/>
      <Hero />
      <ServicesSection />
      <AboutSection/>
      
      {/* Below the fold - lazy loaded */}
      <PortfolioSection/>
      <FeaturedServicesSection/>
      <PricingSection/>
      <TechnologySection/>
      <WhyChooseUsSection/>
      <AchievementsSection/>
      <TeamSection/>
      <TestimonialsSection/>
      <FaqSection/>
    </>
  );
}