// src/app/seo/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Search, Link2, Code, TrendingUp } from "lucide-react";

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
const seoServices = [
    {
        icon: <Search className="h-10 w-10 text-blue-500" />,
        title: "কীওয়ার্ড রিসার্চ",
        description: "আপনার ব্যবসার জন্য সঠিক এবং লাভজনক কীওয়ার্ড খুঁজে বের করা যা দিয়ে কাস্টমাররা সার্চ করে।",
    },
    {
        icon: <Code className="h-10 w-10 text-green-500" />,
        title: "অন-পেইজ এসইও",
        description: "আপনার ওয়েবসাইটের কনটেন্ট, টাইটেল, এবং মেটা ট্যাগ অপটিমাইজ করে সার্চ ইঞ্জিনের জন্য সহজবোধ্য করা।",
    },
    {
        icon: <Link2 className="h-10 w-10 text-purple-500" />,
        title: "অফ-পেইজ এসইও",
        description: "অন্যান্য নির্ভরযোগ্য ওয়েবসাইট থেকে ব্যাকলিংক তৈরি করে আপনার সাইটের অথরিটি এবং র‍্যাংকিং বৃদ্ধি করা।",
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-red-500" />,
        title: "টেকনিক্যাল এসইও",
        description: "ওয়েবসাইটের স্পীড, মোবাইল-ফ্রেন্ডলিনেস এবং ইনডেক্সিং সমস্যা সমাধান করে সেরা পারফরম্যান্স নিশ্চিত করা।",
    }
];


export default function SeoPage() {
  return (
    <main className="w-full bg-white">
      <motion.section
        className="relative w-full overflow-hidden bg-green-50 py-24 md:py-32"
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
              সার্চ ইঞ্জিনে আপনার ব্যবসাকে নিয়ে আসুন শীর্ষে
            </motion.h1>
            <motion.p
              className="mb-10 text-lg text-gray-600"
              variants={itemVariants}
            >
              আমাদের প্রমাণিত এসইও স্ট্র্যাটেজির মাধ্যমে আপনার ওয়েবসাইটে নিয়ে আসুন হাজারো অর্গানিক ভিজিটর এবং আপনার ব্যবসাকে করুন আরও লাভজনক।
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                asChild
                size="lg"
                className="group w-full rounded-full bg-green-600 px-8 py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-green-700 sm:w-auto"
              >
                <Link href="/contact">
                  আপনার ওয়েবসাইট অডিট করুন
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
            className="absolute h-80 w-80 rounded-full bg-blue-100/50"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
           <motion.div
            className="absolute h-64 w-64 rounded-full bg-purple-100/50"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          ></motion.div>
          <motion.div
            className="z-10 flex h-48 w-48 items-center justify-center rounded-full bg-white shadow-2xl"
            whileHover={{ scale: 1.1 }}
          >
            <Image
            src="/seo logo.png" // আপনার ছবি
            alt="Custom Website Design"
            width={300}
            height={300}
            className="object-contain w-24 h-24"
          />
          </motion.div>
        </motion.div>
        </div>
      </motion.section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">আমাদের এসইও সার্ভিসের অন্তর্ভুক্ত</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {seoServices.map((service, index) => (
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
              <h2 className="mb-6 text-3xl font-bold text-gray-800">কেন আমাদের এসইও সার্ভিস আপনার জন্য সেরা?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">গ্যারান্টিेड র‍্যাংকিং ইমপ্রুভমেন্ট</h4>
                    <p className="text-gray-600">আমরা আপনার কীওয়ার্ডের জন্য সার্চ ইঞ্জিন র‍্যাংকিং বাড়ানোর নিশ্চয়তা দেই।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">সম্পূর্ণ অর্গানিক ট্র্যাফিক</h4>
                    <p className="text-gray-600">আমরা কোনো ধরনের স্প্যামিং বা ব্ল্যাক-হ্যাট পদ্ধতি ছাড়াই কাজ করি।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">মাসিক পারফরম্যান্স রিপোর্ট</h4>
                    <p className="text-gray-600">প্রতি মাসে আপনার ওয়েবসাইটের পারফরম্যান্স এবং উন্নতির বিস্তারিত রিপোর্ট প্রদান করা হয়।</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <Image
                src="/Seo team.png" // আপনার টিম বা অফিসের ছবি
                alt="SEO Analytics"
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
