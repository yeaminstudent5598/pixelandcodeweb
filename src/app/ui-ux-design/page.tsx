// src/app/ui-ux-design/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Layers, Search, Users, LucideProps, PenLine } from "lucide-react";

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
const uiUxServices: {
    Icon: React.FC<LucideProps>; // টাইপ নির্দিষ্ট করা হয়েছে
    color: string;
    title: string;
    description: string;
}[] = [
    {
        Icon: Search,
        color: "text-blue-500",
        title: "ইউজার রিসার্চ",
        description: "আপনার টার্গেট অডিয়েন্সকে বুঝে তাদের চাহিদা অনুযায়ী ডিজাইন তৈরি করা।",
    },
    {
        Icon: Layers,
        color: "text-purple-500",
        title: "ওয়্যারফ্রেম ও প্রোটোটাইপ",
        description: "ডিজাইনের প্রাথমিক কাঠামো তৈরি এবং ইন্টারঅ্যাক্টিভ প্রোটোটাইপের মাধ্যমে পরীক্ষা করা।",
    },
    {
        Icon: PenLine,
        color: "text-orange-500",
        title: "ভিজ্যুয়াল (UI) ডিজাইন",
        description: "আপনার ব্র্যান্ডের সাথে মিলিয়ে আকর্ষণীয় এবং আধুনিক ইউজার ইন্টারফেস তৈরি করা।",
    },
    {
        Icon: Users,
        color: "text-green-500",
        title: "ইউজাবিলিটি টেস্টিং",
        description: "বাস্তব ব্যবহারকারীদের মাধ্যমে ডিজাইন পরীক্ষা করে ব্যবহারিক সমস্যাগুলো সমাধান করা।",
    }
];


export default function UiUxDesignPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative w-full overflow-hidden bg-blue-50 py-24 md:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
          {/* বাম কলাম: টেক্সট কনটেন্ট */}
          <motion.div className="z-10 text-center lg:text-left" variants={containerVariants}>
            <motion.h1
              className="mb-6 text-4xl font-extrabold text-gray-800 md:text-5xl"
              variants={itemVariants}
            >
              ইউজার-ফ্রেন্ডলি ডিজাইন দিয়ে আপনার গ্রাহকদের মুগ্ধ করুন
            </motion.h1>
            <motion.p
              className="mb-10 text-lg text-gray-600"
              variants={itemVariants}
            >
              আমরা ব্যবহারকারীর অভিজ্ঞতাকে সর্বোচ্চ গুরুত্ব দিয়ে ওয়েবসাইট ও অ্যাপের ডিজাইন করি, যা আপনার ব্যবসাকে সফল করতে সাহায্য করে।
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                asChild
                size="lg"
                className="group w-full rounded-full bg-blue-600 px-8 py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 sm:w-auto"
              >
                <Link href="/portfolio">
                  আমাদের ডিজাইন দেখুন
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* ডান কলাম: ছবি */}
          <motion.div
            className="relative hidden h-full min-h-[450px] items-center justify-center lg:flex"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://i.ibb.co/2Z5h6Tj/hero-laptop.png" // আপনার UI/UX সম্পর্কিত ছবি
              alt="UI/UX Design Process"
              width={500}
              height={500}
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">আমাদের ইউআই/ইউএক্স ডিজাইন সার্ভিসে যা থাকছে</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {uiUxServices.map((service, index) => {
              const Icon = service.Icon; 
              return (
                <motion.div
                  key={index}
                  className="rounded-lg border p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 inline-block rounded-full bg-gray-100 p-4">
                    <Icon className={`h-10 w-10 ${service.color}`} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">কেন আমাদের ইউআই/ইউএক্স ডিজাইন সেরা?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">ব্যবহারকারীর অভিজ্ঞতাকে অগ্রাধিকার</h4>
                    <p className="text-gray-600">আমাদের প্রতিটি ডিজাইন ব্যবহারকারীর সহজবোধ্যতা এবং সুবিধার কথা মাথায় রেখে করা হয়।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">ডেটা-ভিত্তিক সিদ্ধান্ত</h4>
                    <p className="text-gray-600">আমরা ব্যবহারকারীদের আচরণের উপর ভিত্তি করে ডিজাইন করি, যা সেরা ফলাফল নিশ্চিত করে।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">সমন্বিত ডিজাইন প্রক্রিয়া</h4>
                    <p className="text-gray-600">আমরা পুরো প্রক্রিয়া জুড়ে আপনার সাথে আলোচনা করে কাজ করি, যাতে আপনার মতামত প্রতিফলিত হয়।</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://i.ibb.co/yVp4M9F/offer-fb.jpg" // আপনার টিম বা অফিসের ছবি
                alt="UI/UX Design Team"
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
