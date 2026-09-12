// src/app/terms/page.tsx
import { TermsClient } from "@/components/legal/TermsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Pixel & Code",
  description: "Read the terms and conditions of Pixel & Code agency services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black py-20">
      <TermsClient />
    </main>
  );
}