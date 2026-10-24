import type { Metadata } from "next";
import { PAGE_URL, SITE_URL } from "@/lib/videoEditingData";

const TITLE = "Video Editing Services in Bangladesh | Pixel & Code";
const DESCRIPTION =
  "Professional video editing in Bangladesh for Reels, YouTube, promos and corporate videos. Cuts, color grading, captions and motion graphics. Get a free quote.";
const OG_IMAGE = `${SITE_URL}/video_editor_team.webp`;

export const metadata: Metadata = {
  // absolute: root layout er title template thakleo duibar "| Pixel & Code" hobe na
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Pixel & Code",
    locale: "en_US",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Video editing by Pixel & Code" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function VideoEditingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}