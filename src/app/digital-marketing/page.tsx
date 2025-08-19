// src/app/digital-marketing/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  Target,
  BarChart,
  Search,
  Megaphone,
  Mail,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// অ্যানিমেশনের জন্য ভ্যারিয়েন্ট
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

// সার্ভিসগুলোর ডেটা
const marketingServicesBn = [
  {
    icon: <Megaphone className="h-10 w-10 text-blue-500" />,
    title: 'সোশ্যাল মিডিয়া মার্কেটিং',
    description:
      'ফেসবুক, ইন্সটাগ্রামের মতো প্ল্যাটফর্মে আপনার ব্র্যান্ডের পরিচিতি এবং এনগেজমেন্ট বৃদ্ধি করুন।',
  },
  {
    icon: <Search className="h-10 w-10 text-green-500" />,
    title: 'সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)',
    description:
      'গুগল সার্চে আপনার ওয়েবসাইটকে প্রথম পাতায় নিয়ে এসে অর্গানিক ট্র্যাফিক বৃদ্ধি করুন।',
  },
  {
    icon: <BarChart className="h-10 w-10 text-purple-500" />,
    title: 'গুগল এডস',
    description:
      'টার্গেটেড গুগল অ্যাডের মাধ্যমে সঠিক সময়ে সঠিক কাস্টমারের কাছে আপনার পণ্য পৌঁছে দিন।',
  },
  {
    icon: <Mail className="h-10 w-10 text-red-500" />,
    title: 'ইমেইল মার্কেটিং',
    description:
      'কার্যকরী ইমেইল ক্যাম্পেইনের মাধ্যমে আপনার পুরনো কাস্টমারদের ধরে রাখুন এবং নতুন লিড তৈরি করুন।',
  },
];

const marketingServicesEn = [
  {
    icon: <Megaphone className="h-10 w-10 text-blue-500" />,
    title: 'Social Media Marketing',
    description:
      'Increase your brand visibility and engagement on platforms like Facebook and Instagram.',
  },
  {
    icon: <Search className="h-10 w-10 text-green-500" />,
    title: 'Search Engine Optimization (SEO)',
    description:
      'Boost your website’s ranking on Google search and drive more organic traffic.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-purple-500" />,
    title: 'Google Ads',
    description:
      'Reach the right customers at the right time with targeted Google Ads campaigns.',
  },
  {
    icon: <Mail className="h-10 w-10 text-red-500" />,
    title: 'Email Marketing',
    description:
      'Retain existing customers and generate new leads with effective email campaigns.',
  },
];

export default function DigitalMarketingPage() {
  const { language } = useLanguage();
  return (
    <main className="w-full bg-white">
      <motion.section
        className="relative w-full overflow-hidden bg-blue-50 py-24 md:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
          {/* বাম কলাম: টেক্সট কনটেন্ট */}
          <motion.div
            className="z-10 text-center lg:text-left"
            variants={containerVariants}>
            <motion.h1
              className="mb-6 text-4xl font-extrabold text-gray-800 md:text-5xl"
              variants={itemVariants}>
              ডিজিটাল মার্কেটিং এর মাধ্যমে আপনার ব্যবসাকে দিন নতুন গতি
            </motion.h1>
            <motion.p
              className="mb-10 text-lg text-gray-600"
              variants={itemVariants}>
              আমরা আপনার ব্র্যান্ডের জন্য সঠিক ডিজিটাল মার্কেটিং স্ট্র্যাটেজি
              তৈরি করি যা আপনার ব্যবসাকে কয়েক ধাপ এগিয়ে নিয়ে যাবে।
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                asChild
                size="lg"
                className="group w-full rounded-full bg-blue-600 px-8 py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 sm:w-auto">
                <Link href="/contact">
                  ফ্রি কনসালটেন্সি নিন
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* ডান কলাম: ছবি */}
          <motion.div
            className="relative hidden h-[500px] w-full items-center justify-center lg:flex"
            variants={itemVariants}>
            <motion.div
              className="absolute h-80 w-80 rounded-full bg-blue-100/50"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}></motion.div>
            <motion.div
              className="absolute h-64 w-64 rounded-full bg-purple-100/50"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}></motion.div>
            <motion.div
              className="z-10 flex h-48 w-48 items-center justify-center rounded-full bg-white shadow-2xl"
              whileHover={{ scale: 1.1 }}>
              <Image
                src="/digital_markteting.jpg" // আপনার ছবি
                alt="Custom Website Design"
                width={300}
                height={300}
                className="object-contain rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              আমাদের ডিজিটাল মার্কেটিং সার্ভিসসমূহ
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {(language ? marketingServicesEn : marketingServicesBn).map(
              (service, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg border p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="mb-4 inline-block rounded-full bg-gray-100 p-4">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                কেন আমাদের বেছে নিবেন?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">ডেটা-ড্রিভেন স্ট্র্যাটেজি</h4>
                    <p className="text-gray-600">
                      আমরা প্রতিটি ক্যাম্পেইন অ্যানালাইসিস করে সেরা ফলাফল
                      নিশ্চিত করি।
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">অভিজ্ঞ টিম</h4>
                    <p className="text-gray-600">
                      আমাদের রয়েছে ডিজিটাল মার্কেটিং ইন্ডাস্ট্রির অভিজ্ঞ
                      এক্সপার্ট।
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">স্বচ্ছ রিপোর্টিং</h4>
                    <p className="text-gray-600">
                      প্রতিটি ক্যাম্পেইনের শেষে আমরা বিস্তারিত রিপোর্ট প্রদান
                      করি।
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <Image
                src="/digital marketing team.jpg" // আপনার টিম বা অফিসের ছবি
                alt="Our Team"
                width={500}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
