import { VideoEditingContent } from "../components/shared/VideoEditingContent";
import { packageData } from "@/lib/packagesData";
import { PACKAGES_URL, PAGE_URL, SITE_URL } from "@/lib/videoEditingData";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Video Editing", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Video editing",
      serviceType: "Video editing",
      description:
        "Professional video editing for Reels, YouTube, promo and corporate videos, including cuts, color grading, captions and motion graphics.",
      url: PAGE_URL,
      areaServed: { "@type": "Country", name: "Bangladesh" },
      provider: { "@type": "Organization", name: "Pixel & Code", url: SITE_URL },
      // price packagesData theke ashe, tai page er sathe ekdom mile thake
      offers: packageData.video.monthly.map((p) => ({
        "@type": "Offer",
        name: `${p.nameEn} plan`,
        description: p.featuresEn.join(", "),
        price: p.price,
        priceCurrency: "USD",
        url: PACKAGES_URL,
      })),
    },
  ],
};

export default function VideoEditingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        // "<" escape kora, jate script tag bhenge na jay
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <VideoEditingContent />
    </main>
  );
}