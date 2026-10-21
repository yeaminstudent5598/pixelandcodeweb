import type { Metadata } from "next";
import { WebServiceContent } from "../components/shared/WebServiceContent";
import { PAGE_URL, SITE_URL, WEBSITE_TYPES } from "@/lib/webServiceData";

const TITLE = "Web Design & Development in Bangladesh | Pixel & Code";
const DESCRIPTION =
  "Pixel & Code builds fast, SEO-friendly websites, e-commerce stores and web apps with Next.js and React for businesses in Bangladesh. Get a free consultation.";
const OG_IMAGE = `${SITE_URL}/hero/SaaS.png`;

export const metadata: Metadata = {
  // absolute: layout er title template thakleo "| Pixel & Code" duibar hobe na
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Pixel & Code",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        alt: "Web application designed and developed by Pixel & Code",
      },
    ],
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Web Services",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Web design and development",
      serviceType: "Web design and development",
      description: DESCRIPTION,
      url: PAGE_URL,
      areaServed: { "@type": "Country", name: "Bangladesh" },
      provider: {
        "@type": "Organization",
        name: "Pixel & Code",
        url: SITE_URL,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website types",
        itemListElement: WEBSITE_TYPES.map((t) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: t.title,
            description: t.description,
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: t.fromBdt,
            priceCurrency: "BDT",
          },
        })),
      },
    },
  ],
};

export default function WebServicePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        // "<" escape kora, jate script tag bhenge na jay
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <WebServiceContent />
    </main>
  );
}