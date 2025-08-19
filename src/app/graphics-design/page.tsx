// src/app/graphics-design/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Palette, PenTool, Image as ImageIcon } from "lucide-react";

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
const graphicsServices = [
    {
        icon: <Palette className="h-10 w-10 text-purple-500" />,
        title: "লোগো ডিজাইন",
        description: "আপনার ব্র্যান্ডের জন্য ইউনিক এবং স্মরণীয় লোগো তৈরি করুন যা আপনার পরিচিতি বহন করবে।",
    },
    {
        icon: <ImageIcon className="h-10 w-10 text-orange-500" />,
        title: "ব্যানার ও পোস্টার ডিজাইন",
        description: "সোশ্যাল মিডিয়া, ওয়েবসাইট বা প্রিন্টের জন্য আকর্ষণীয় ব্যানার ও পোস্টার ডিজাইন।",
    },
    {
        icon: <PenTool className="h-10 w-10 text-blue-500" />,
        title: "UI/UX ডিজাইন",
        description: "আপনার ওয়েবসাইট ও অ্যাপের জন্য ইউজার-ফ্রেন্ডলি এবং সুন্দর ইন্টারফেস ডিজাইন।",
    },
    {
        icon: <ImageIcon className="h-10 w-10 text-red-500" />, // ✅ ঠিক করা হয়েছে
        title: "ব্র্যান্ডিং মেটেরিয়াল",
        description: "আপনার কোম্পানির জন্য বিজনেস কার্ড, ফ্লায়ার, ব্রোশিউরসহ সকল ব্র্যান্ডিং মেটেরিয়াল ডিজাইন।",
    }
];


export default function GraphicsDesignPage() {
  return (
    <main className="w-full bg-white">
      <motion.section
        className="relative w-full overflow-hidden bg-purple-50 py-24 md:py-32"
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
              সৃজনশীল গ্রাফিক্স ডিজাইনের মাধ্যমে আপনার ব্র্যান্ডকে ফুটিয়ে তুলুন
            </motion.h1>
            <motion.p
              className="mb-10 text-lg text-gray-600"
              variants={itemVariants}
            >
              আমাদের অভিজ্ঞ ডিজাইনারদের হাত ধরে আপনার ব্র্যান্ডের জন্য তৈরি করুন আকর্ষণীয় এবং অর্থবহ ডিজাইন।
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                asChild
                size="lg"
                className="group w-full rounded-full bg-purple-600 px-8 py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 sm:w-auto"
              >
                <Link href="/portfolio">
                  আমাদের কাজ দেখুন
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
              src="/graphic_design.avif" // আপনার গ্রাফিক্স ডিজাইন সম্পর্কিত ছবি
              alt="Graphics Design"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">আমাদের গ্রাফিক্স ডিজাইন সার্ভিসসমূহ</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {graphicsServices.map((service, index) => (
              <motion.div
                key={index}
                className="rounded-lg border p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 inline-block rounded-full bg-gray-100 p-4">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">কেন আমাদের ডিজাইন সার্ভিস সেরা?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">সৃজনশীল এবং অভিজ্ঞ ডিজাইনার</h4>
                    <p className="text-gray-600">আমাদের টিমের প্রতিটি সদস্য তাদের নিজ নিজ ক্ষেত্রে অত্যন্ত দক্ষ।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">সময়মতো ডেলিভারি</h4>
                    <p className="text-gray-600">আমরা নির্ধারিত সময়ের মধ্যে আপনার কাজ সম্পন্ন করতে প্রতিশ্রুতিবদ্ধ।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">আনলিমিটেড রিভিশন</h4>
                    <p className="text-gray-600">আপনার সম্পূর্ণ সন্তুষ্টি না হওয়া পর্যন্ত আমরা রিভিশন দিয়ে থাকি।</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <Image
                src="/graphic team.jpg" // আপনার টিম বা অফিসের ছবি
                alt="Our Design Team"
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
