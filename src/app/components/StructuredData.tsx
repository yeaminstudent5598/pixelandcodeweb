// File Path: D:\yeamin student\PixelandCode Web\pixelandcode\src\app\components\StructuredData.tsx
// এই file টি নতুন তৈরি করুন

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pixel & Code",
    "alternateName": "Pixel and Code Digital Agency",
    "url": "https://pixelandcode.agency",
    "logo": "https://pixelandcode.agency/logo-01.svg",
    "description": "Professional Web Design, Graphics Design, Video Editing and Meta Marketing services in Shariatpur, Bangladesh",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Shariatpur",
      "addressRegion": "Dhaka",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880-01641801705",
      "contactType": "Customer Service",
      "availableLanguage": ["Bengali", "English"]
    },
    "sameAs": [
      "https://facebook.com/pixelandcode",
      "https://instagram.com/pixelandcode",
    ],
    "founder": {
      "@type": "Person",
      "name": "Yeamin"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pixel & Code",
    "image": "https://pixelandcode.agency/og-image.jpg",
    "priceRange": "৳৳",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Shariatpur",
      "addressRegion": "Dhaka Division",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.2423,
      "longitude": 90.4348
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}