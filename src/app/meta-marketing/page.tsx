"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Target, TrendingUp, Users, BarChart3 } from "lucide-react";
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
    icon: <Target className="h-10 w-10 text-blue-500" />,
    title: "Lead Generation",
    description: "Generate quality leads for your business with targeted Facebook and Instagram ads.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-green-500" />,
    title: "Brand Awareness",
    description: "Increase your brand visibility and reach thousands of potential customers.",
  },
  {
    icon: <Users className="h-10 w-10 text-purple-500" />,
    title: "Audience Targeting",
    description: "Reach the right people with advanced audience targeting and lookalike audiences.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-orange-500" />,
    title: "Campaign Optimization",
    description: "Continuous optimization to maximize your ROI and reduce ad costs.",
  },
];

const servicesBn = [
  {
    icon: <Target className="h-10 w-10 text-blue-500" />,
    title: "লিড জেনারেশন",
    description: "টার্গেটেড ফেসবুক এবং ইন্সটাগ্রাম বিজ্ঞাপনের মাধ্যমে আপনার ব্যবসার জন্য মানসম্পন্ন লিড তৈরি করুন।",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-green-500" />,
    title: "ব্র্যান্ড সচেতনতা",
    description: "আপনার ব্র্যান্ডের দৃশ্যমানতা বৃদ্ধি করুন এবং হাজার হাজার সম্ভাব্য গ্রাহকদের কাছে পৌঁছান।",
  },
  {
    icon: <Users className="h-10 w-10 text-purple-500" />,
    title: "অডিয়েন্স টার্গেটিং",
    description: "উন্নত অডিয়েন্স টার্গেটিং এবং লুকঅ্যালাইক অডিয়েন্সের মাধ্যমে সঠিক মানুষের কাছে পৌঁছান।",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-orange-500" />,
    title: "ক্যাম্পেইন অপটিমাইজেশন",
    description: "আপনার ROI সর্বাধিক করতে এবং বিজ্ঞাপন খরচ কমাতে ক্রমাগত অপটিমাইজেশন।",
  },
];

// Features
const featuresEn = [
  { title: "Data-Driven Strategy", description: "We use analytics and data to create effective campaigns." },
  { title: "A/B Testing", description: "Test different ads to find what works best for your audience." },
  { title: "Monthly Reports", description: "Detailed reports showing your campaign performance and ROI." },
];

const featuresBn = [
  { title: "ডেটা-চালিত কৌশল", description: "কার্যকর ক্যাম্পেইন তৈরি করতে আমরা অ্যানালিটিক্স এবং ডেটা ব্যবহার করি।" },
  { title: "এ/বি টেস্টিং", description: "আপনার অডিয়েন্সের জন্য কোনটি সবচেয়ে ভাল কাজ করে তা খুঁজে বের করতে বিভিন্ন বিজ্ঞাপন পরীক্ষা করুন।" },
  { title: "মাসিক রিপোর্ট", description: "আপনার ক্যাম্পেইন পারফরম্যান্স এবং ROI দেখানো বিস্তারিত রিপোর্ট।" },
];

// JSON-LD Schema
const metaMarketingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing",
  "provider": {
    "@type": "Organization",
    "name": "Pixel & Code",
    "url": "https://pixelandcode.agency"
  },
  "areaServed": { "@type": "Country", "name": "Bangladesh" },
  "description": "Professional meta marketing services including Facebook ads, Instagram ads, lead generation, and campaign management.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pixelandcode.agency" },
    { "@type": "ListItem", "position": 2, "name": "Meta Marketing", "item": "https://pixelandcode.agency/meta-marketing" }
  ]
};

export default function MetaMarketingPage() {
  const { language } = useLanguage();
  const services = language ? servicesBn : servicesEn;
  const features = language ? featuresBn : featuresEn;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(metaMarketingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="w-full bg-white dark:bg-gray-950 transition-colors duration-300">
        {/* Hero Section */}
        <motion.section
          className="relative w-full overflow-hidden bg-green-50 dark:bg-gray-900 py-24 md:py-32 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
            <motion.div className="z-10 text-center lg:text-left" variants={containerVariants}>
              <motion.h1 className="mb-6 text-4xl font-extrabold text-gray-800 dark:text-white md:text-5xl" variants={itemVariants}>
                {language 
                  ? "মেটা মার্কেটিং দিয়ে আপনার ব্যবসা বৃদ্ধি করুন" 
                  : "Grow Your Business with Meta Marketing"}
              </motion.h1>
              <motion.p className="mb-10 text-lg text-gray-600 dark:text-gray-300" variants={itemVariants}>
                {language
                  ? "ফেসবুক এবং ইন্সটাগ্রাম বিজ্ঞাপনের মাধ্যমে আপনার টার্গেট অডিয়েন্সের কাছে পৌঁছান এবং বিক্রয় বৃদ্ধি করুন।"
                  : "Reach your target audience through Facebook and Instagram ads and increase sales."}
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button asChild size="lg" className="group w-full rounded-full bg-green-600 px-8 py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-green-700 sm:w-auto">
                  <Link href="/contact">
                    {language ? "ফ্রি কনসালটেশন পান" : "Get Free Consultation"}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="relative hidden h-[500px] w-full items-center justify-center lg:flex" variants={itemVariants}>
              <motion.div className="absolute h-80 w-80 rounded-full bg-green-100/50 dark:bg-green-900/20" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="z-10 flex h-48 w-48 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-2xl" whileHover={{ scale: 1.1 }}>
                <Image src="/logo-01.svg" alt={language ? "মেটা মার্কেটিং" : "Meta Marketing"} width={96} height={96} className="object-contain" priority />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="py-20 sm:py-28 bg-white dark:bg-gray-950 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white">
              {language ? "আমাদের মেটা মার্কেটিং সার্ভিস" : "Our Meta Marketing Services"}
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
                  <div className="mb-4 inline-block rounded-full bg-gray-100 dark:bg-gray-800 p-4">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20 sm:py-28 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
                  {language ? "কেন আমাদের সাথে কাজ করবেন?" : "Why Work With Us?"}
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block">
                <Image src="/logo-01.svg" alt={language ? "মার্কেটিং টিম" : "Marketing Team"} width={500} height={400} className="rounded-lg object-contain" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}