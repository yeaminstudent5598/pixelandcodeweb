import type { Metadata } from "next";
import { DigitalMarketingContent } from "../components/shared/DigitalMarketingContent";
import { packageData } from "@/lib/packagesData";
import { PACKAGES_URL, PAGE_URL, SITE_URL } from "@/lib/digitalMarketingData";

const TITLE = "Digital Marketing Services in Bangladesh | Pixel & Code";
const DESCRIPTION =
  "Digital marketing in Bangladesh: Facebook and Instagram ads, SEO and social media content that turn reach into customers. Get a free strategy call.";
const OG_IMAGE = `${SITE_URL}/facebookadscampaign.jpeg`;

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
    images: [{ url: OG_IMAGE, alt: "Digital marketing by Pixel & Code" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Digital Marketing", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Digital marketing",
      serviceType: "Digital marketing",
      description: DESCRIPTION,
      url: PAGE_URL,
      areaServed: { "@type": "Country", name: "Bangladesh" },
      provider: { "@type": "Organization", name: "Pixel & Code", url: SITE_URL },
      // price packagesData theke ashe, tai page er sathe ekdom mile thake
      offers: packageData.facebook.monthly.map((p) => ({
        "@type": "Offer",
        name: `Facebook Ads ${p.nameEn} plan`,
        description: p.featuresEn.join(", "),
        price: p.price,
        priceCurrency: "USD",
        url: PACKAGES_URL,
      })),
    },
  ],
};

export default function DigitalMarketingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        // "<" escape kora, jate script tag bhenge na jay
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <DigitalMarketingContent />
    </main>
  );
}