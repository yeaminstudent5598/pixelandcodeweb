// src/app/video-editing/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Clapperboard, Film, Scissors, Wand2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// অ্যানিমেশনের জন্য ভ্যারিয়েন্ট
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// সার্ভিসগুলোর ডেটা - English & Bangla
const videoServicesEn = [
    {
        icon: <Film className="h-10 w-10 text-red-500" />,
        title: "Social Media Videos",
        description: "Engaging and fast-paced video editing for Facebook Reels, YouTube Shorts, and Instagram.",
    },
    {
        icon: <Clapperboard className="h-10 w-10 text-blue-500" />,
        title: "Promotional Videos",
        description: "Advertisements for your products or services that capture customer attention.",
    },
    {
        icon: <Wand2 className="h-10 w-10 text-purple-500" />,
        title: "Motion Graphics",
        description: "Add animated text, logos, and graphics to make your videos more attractive.",
    },
    {
        icon: <Scissors className="h-10 w-10 text-green-500" />,
        title: "Corporate Videos",
        description: "Professional video editing for interviews, tutorials, or internal company use.",
    }
];

const videoServicesBn = [
    {
        icon: <Film className="h-10 w-10 text-red-500" />,
        title: "সোশ্যাল মিডিয়া ভিডিও",
        description: "ফেসবুক রিলস, ইউটিউব শর্টস এবং ইন্সটাগ্রামের জন্য আকর্ষণীয় এবং দ্রুতগতির ভিডিও এডিটিং।",
    },
    {
        icon: <Clapperboard className="h-10 w-10 text-blue-500" />,
        title: "প্রোমোশনাল ভিডিও",
        description: "আপনার পণ্য বা সার্ভিসের জন্য বিজ্ঞাপন যা কাস্টমারের দৃষ্টি আকর্ষণ করবে।",
    },
    {
        icon: <Wand2 className="h-10 w-10 text-purple-500" />,
        title: "মোশন গ্রাফিক্স",
        description: "আপনার ভিডিওতে অ্যানিমেটেড টেক্সট, লোগো এবং গ্রাফিক্স যুক্ত করে আরও আকর্ষণীয় করে তুলুন।",
    },
    {
        icon: <Scissors className="h-10 w-10 text-green-500" />,
        title: "কর্পোরেট ভিডিও",
        description: "ইন্টারভিউ, টিউটোরিয়াল বা কোম্পানির অভ্যন্তরীণ ব্যবহারের জন্য প্রফেশনাল ভিডিও এডিটিং।",
    }
];

// Features data
const featuresEn = [
  {
    title: "Fast Delivery",
    description: "We value your precious time and deliver work in the fastest time possible.",
  },
  {
    title: "Copyright-Free Resources",
    description: "All music and footage used in your videos will be completely copyright-free.",
  },
  {
    title: "High-Quality Output",
    description: "We provide high-quality video output up to 4K resolution.",
  },
];

const featuresBn = [
  {
    title: "দ্রুত ডেলিভারি",
    description: "আমরা আপনার মূল্যবান সময়কে গুরুত্ব দেই এবং দ্রুততম সময়ে কাজ ডেলিভারি করি।",
  },
  {
    title: "কপিরাইট-ফ্রি রিসোর্স",
    description: "আপনার ভিডিওতে ব্যবহৃত সকল মিউজিক এবং ফুটেজ হবে সম্পূর্ণ কপিরাইট-মুক্ত।",
  },
  {
    title: "হাই-কোয়ালিটি আউটপুট",
    description: "আমরা 4K রেজোলিউশন পর্যন্ত হাই-কোয়ালিটি ভিডিও আউটপুট প্রদান করি।",
  },
];

// ==========================================
// 📊 STRUCTURED DATA - JSON-LD Schema
// ==========================================
const videoEditingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Video Editing",
  "provider": {
    "@type": "Organization",
    "name": "Pixel & Code",
    "url": "https://pixelandcode.agency",
    "logo": "https://pixelandcode.agency/logo-01.svg"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Bangladesh"
  },
  "description": "Professional video editing services including social media videos, promotional videos, motion graphics, and corporate videos for businesses in Bangladesh.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "BDT",
    "lowPrice": "5000",
    "highPrice": "100000",
    "offerCount": "4"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Video Editing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Video Editing",
          "description": "Engaging videos for Facebook Reels, YouTube Shorts, and Instagram"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Promotional Video",
          "description": "Advertisement videos for products and services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Motion Graphics",
          "description": "Animated text, logos, and graphics for videos"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Video Editing",
          "description": "Professional editing for interviews, tutorials, and company videos"
        }
      }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://pixelandcode.agency"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Video Editing Services",
      "item": "https://pixelandcode.agency/video-editing"
    }
  ]
};

export default function VideoEditingPage() {
  const { language } = useLanguage();
  const videoServices = language ? videoServicesBn : videoServicesEn;
  const features = language ? featuresBn : featuresEn;

  return (
    <>
      {/* ✅ Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoEditingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="w-full bg-white dark:bg-gray-950 transition-colors duration-300">
        {/* Hero Section */}
        <motion.section
          className="relative w-full overflow-hidden bg-red-50 dark:bg-gray-900 py-24 md:py-32 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
            {/* বাম কলাম: টেক্সট কনটেন্ট */}
            <motion.div className="z-10 text-center lg:text-left" variants={containerVariants}>
              <motion.h1
                className="mb-6 text-4xl font-extrabold text-gray-800 dark:text-white md:text-5xl"
                variants={itemVariants}
              >
                {language 
                  ? "প্রফেশনাল ভিডিও এডিটিং দিয়ে আপনার গল্প বলুন"
                  : "Tell Your Story with Professional Video Editing"
                }
              </motion.h1>
              <motion.p
                className="mb-10 text-lg text-gray-600 dark:text-gray-300"
                variants={itemVariants}
              >
                {language
                  ? "আমাদের দক্ষ ভিডিও এডিটরদের মাধ্যমে আপনার সাধারণ ফুটেজকে অসাধারণ ভিডিওতে পরিণত করুন, যা আপনার দর্শকের মনে দাগ কাটবে।"
                  : "Transform your ordinary footage into extraordinary videos with our skilled video editors that will leave a lasting impression on your audience."
                }
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button
                  asChild
                  size="lg"
                  className="group w-full rounded-full bg-red-600 px-8 py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-red-700 sm:w-auto dark:bg-red-600 dark:hover:bg-red-700"
                >
                  <Link href="/contact">
                    {language ? "আমাদের প্যাকেজ দেখুন" : "View Our Packages"}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* ডান কলাম: ছবি */}
            <motion.div
              className="relative hidden h-[500px] w-full items-center justify-center lg:flex"
              variants={itemVariants}
            >
              <motion.div
                className="absolute h-80 w-80 rounded-full bg-blue-100/50 dark:bg-blue-900/20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="absolute h-64 w-64 rounded-full bg-purple-100/50 dark:bg-purple-900/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              ></motion.div>
              <motion.div
                className="z-10 flex h-48 w-48 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-2xl dark:shadow-gray-900/50"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/logo-01.svg"
                  alt={language ? "ভিডিও এডিটিং সার্ভিস" : "Video Editing Service"}
                  width={96}
                  height={96}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="py-20 sm:py-28 bg-white dark:bg-gray-950 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                {language 
                  ? "আমাদের ভিডিও এডিটিং সার্ভিসের ধরণ"
                  : "Our Video Editing Service Types"
                }
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {videoServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg border dark:border-gray-800 bg-white dark:bg-gray-900 p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 inline-block rounded-full bg-gray-100 dark:bg-gray-800 p-4">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20 sm:py-28 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
                  {language 
                    ? "কেন আমাদের ভিডিও এডিটিং সেরা?"
                    : "Why Our Video Editing is the Best?"
                  }
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/video_editor_team.webp"
                  alt={language ? "ভিডিও এডিটিং টিম" : "Video Editing Team"}
                  width={500}
                  height={400}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}