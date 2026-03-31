// src/app/packages/page.tsx
import { Metadata } from "next";
import { PackagesClient } from "./PackagesClient";

// SEO Optimization (Server Side)
export const metadata: Metadata = {
  title: "Service Packages | Pixel & Code",
  description: "Explore our web development, graphics design, video editing, and marketing packages.",
};

export default function PackagesPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-black py-20 sm:py-28 transition-colors duration-300">
      <PackagesClient />
    </main>
  );
}