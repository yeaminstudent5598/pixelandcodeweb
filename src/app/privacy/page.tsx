// src/app/privacy/page.tsx
import { PrivacyClient } from "@/components/legal/PrivacyClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pixel & Code",
  description: "Read the privacy policy of Pixel & Code agency. We ensure your data security.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black py-20">
      <PrivacyClient />
    </main>
  );
}