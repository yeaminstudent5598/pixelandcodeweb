// src/app/about/page.tsx
import { Metadata } from "next";
import { AboutSection } from "../components/AboutSection";

// SEO Optimization (Server Side)
export const metadata: Metadata = {
  title: "About Us | Pixel & Code",
  description: "Learn more about Pixel & Code, a leading digital agency specializing in web development, graphics design, video editing, and marketing.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-slate-50 dark:bg-black transition-colors duration-300">
      <AboutSection />
    </main>
  );
}