import type { Metadata } from "next";

// ==========================================
// 🎯 SEO METADATA - GRAPHICS DESIGN PAGE
// ==========================================
export const metadata: Metadata = {
  title: "Professional Graphics Design Services in Bangladesh | Pixel & Code",
  description:
    "Logo design, branding, social media graphics, print materials, packaging design — all professional graphics design services in Bangladesh.",
  keywords: [
    "graphic design bangladesh",
    "logo design",
    "branding",
    "social media post design",
    "brochure design",
    "flyer design",
    "poster design",
    "packaging design",
    "pixelandcode",
    "graphics design service",
    "graphic designer bd",
    "pro graphics design",
    "ডিজাইন সার্ভিস বাংলাদেশ",
    "লোগো ডিজাইন",
    "ব্র্যান্ড আইডেন্টিটি",
    "সোশ্যাল মিডিয়া গ্রাফিক্স",
  ],

  openGraph: {
    title: "Graphics Design Services | Pixel & Code",
    description:
      "Expert graphics design service for branding, logo, social media, and print materials.",
    url: "https://pixelandcode.agency/graphics-design",
    type: "website",
    images: [
      {
        url: "https://pixelandcode.agency/og-graphics.jpg",
        width: 1200,
        height: 630,
        alt: "Pixel & Code Graphics Design Services",
        type: "image/jpeg",
      },
    ],
    siteName: "Pixel & Code",
  },

  twitter: {
    card: "summary_large_image",
    title: "Graphics Design Services | Pixel & Code",
    description:
      "Professional graphics design services including branding, print, and digital designs.",
    images: ["https://pixelandcode.agency/og-graphics.jpg"],
  },

  alternates: {
    canonical: "https://pixelandcode.agency/graphics-design",
    languages: {
      "bn-BD": "https://pixelandcode.agency/bn/graphics-design",
      "en-US": "https://pixelandcode.agency/en/graphics-design",
    },
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Technology",
};

// ==========================================
// 🏗️ LAYOUT COMPONENT
// ==========================================
export default function GraphicsDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
