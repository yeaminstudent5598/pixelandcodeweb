// ==========================================
// 2️⃣ GRAPHICS DESIGN PAGE
// File: src/app/graphics-design/page.tsx
// ==========================================
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Palette,
  Image as ImageIcon,
  FileText,
  Package,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Services data - English & Bangla
const servicesEn = [
  {
    icon: <Palette className="h-10 w-10 text-blue-500" />,
    title: "Logo & Brand Identity",
    description:
      "Create a memorable brand identity with professional logo design and branding materials.",
  },
  {
    icon: <ImageIcon className="h-10 w-10 text-purple-500" />,
    title: "Social Media Graphics",
    description:
      "Eye-catching designs for Facebook, Instagram, and all social media platforms.",
  },
  {
    icon: <FileText className="h-10 w-10 text-green-500" />,
    title: "Print Materials",
    description:
      "Business cards, flyers, brochures, posters, and all print design needs.",
  },
  {
    icon: <Package className="h-10 w-10 text-orange-500" />,
    title: "Packaging Design",
    description:
      "Stand out on shelves with attractive and professional packaging design.",
  },
];

const servicesBn = [
  {
    icon: <Palette className="h-10 w-10 text-blue-500" />,
    title: "লোগো এবং ব্র্যান্ড আইডেন্টিটি",
    description:
      "প্রফেশনাল লোগো ডিজাইন এবং ব্র্যান্ডিং ম্যাটেরিয়াল দিয়ে একটি স্মরণীয় ব্র্যান্ড আইডেন্টিটি তৈরি করুন।",
  },
  {
    icon: <ImageIcon className="h-10 w-10 text-purple-500" />,
    title: "সোশ্যাল মিডিয়া গ্রাফিক্স",
    description:
      "ফেসবুক, ইন্সটাগ্রাম এবং সকল সোশ্যাল মিডিয়া প্ল্যাটফর্মের জন্য আকর্ষণীয় ডিজাইন।",
  },
  {
    icon: <FileText className="h-10 w-10 text-green-500" />,
    title: "প্রিন্ট ম্যাটেরিয়াল",
    description:
      "ব্যবসায়িক কার্ড, ফ্লায়ার, ব্রোশিওর, পোস্টার এবং সকল প্রিন্ট ডিজাইনের প্রয়োজন।",
  },
  {
    icon: <Package className="h-10 w-10 text-orange-500" />,
    title: "প্যাকেজিং ডিজাইন",
    description:
      "আকর্ষণীয় এবং প্রফেশনাল প্যাকেজিং ডিজাইন দিয়ে শেল্ফে আলাদা হয়ে উঠুন।",
  },
];

// Features
const featuresEn = [
  {
    title: "Unlimited Revisions",
    description: "We refine until you're 100% satisfied with the design.",
  },
  {
    title: "Fast Turnaround",
    description:
      "Get your designs delivered quickly without compromising quality.",
  },
  {
    title: "Print-Ready Files",
    description: "All files optimized and ready for printing or digital use.",
  },
];

const featuresBn = [
  {
    title: "আনলিমিটেড রিভিশন",
    description: "আপনি ১০০% সন্তুষ্ট না হওয়া পর্যন্ত আমরা ডিজাইন পরিমার্জন করি।",
  },
  {
    title: "দ্রুত ডেলিভারি",
    description: "গুণমান না কমিয়ে দ্রুত আপনার ডিজাইন ডেলিভার করা হয়।",
  },
  {
    title: "প্রিন্ট-রেডি ফাইল",
    description:
      "প্রিন্টিং বা ডিজিটাল ব্যবহারের জন্য সম্পূর্ণ অপটিমাইজড ফাইল।",
  },
];

// JSON-LD Schema
const graphicsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Graphic Design",
  provider: {
    "@type": "Organization",
    name: "Pixel & Code",
    url: "https://pixelandcode.agency",
  },
  areaServed: { "@type": "Country", name: "Bangladesh" },
  description:
    "Professional graphic design services including logo design, branding, social media graphics, and print materials.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://pixelandcode.agency",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Graphics Design",
      item: "https://pixelandcode.agency/graphics-design",
    },
  ],
};

export default function GraphicsDesignPage() {
  const { language } = useLanguage();
  const services = language ? servicesBn : servicesEn;
  const features = language ? featuresBn : featuresEn;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphicsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="w-full bg-white dark:bg-gray-950">
        {/* HERO SECTION */}
        <motion.section
          className="relative w-full bg-blue-50 dark:bg-gray-900 py-24 md:py-32"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
            <motion.div variants={containerVariants}>
              <motion.h1
                className="mb-6 text-4xl font-extrabold text-gray-800 dark:text-white md:text-5xl"
                variants={itemVariants}
              >
                {language
                  ? "আপনার ব্র্যান্ডকে জীবন্ত করে তুলুন প্রফেশনাল গ্রাফিক্স ডিজাইনে"
                  : "Bring Your Brand to Life with Professional Graphics Design"}
              </motion.h1>

              <motion.p
                className="mb-10 text-lg text-gray-600 dark:text-gray-300"
                variants={itemVariants}
              >
                {language
                  ? "আমাদের সৃজনশীল ডিজাইনার টিম আপনার ব্র্যান্ডের জন্য অনন্য এবং আকর্ষণীয় ভিজ্যুয়াল তৈরি করবে।"
                  : "Our creative design team will create unique and attractive visuals for your brand."}
              </motion.p>

              <motion.div variants={itemVariants}>
                <Button
                  asChild
                  size="lg"
                  className="group w-full rounded-full bg-blue-600 px-8 py-6 text-lg font-bold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
                >
                  <Link href="/contact">
                    {language ? "আমাদের সাথে যোগাযোগ করুন" : "Contact Us"}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              className="relative hidden h-[500px] w-full items-center justify-center lg:flex"
              variants={itemVariants}
            >
              <motion.div
                className="absolute h-80 w-80 rounded-full bg-purple-100/50 dark:bg-purple-900/20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div className="z-10 flex h-48 w-48 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-2xl">
                <Image
                  src="/logo-01.svg"
                  alt={language ? "গ্রাফিক্স ডিজাইন" : "Graphics Design"}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* SERVICES */}
        <section className="py-20 sm:py-28 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white">
              {language
                ? "আমাদের গ্রাফিক্স ডিজাইন সার্ভিস"
                : "Our Graphics Design Services"}
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg border dark:border-gray-800 bg-white dark:bg-gray-900 p-8 text-center shadow-sm hover:shadow-lg"
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

        {/* FEATURES */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20 sm:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
                  {language
                    ? "কেন আমাদের বেছে নিবেন?"
                    : "Why Choose Us?"}
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
                  src="/logo-01.svg"
                  alt={language ? "ডিজাইন টিম" : "Design Team"}
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
