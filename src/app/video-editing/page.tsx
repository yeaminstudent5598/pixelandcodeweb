// src/app/video-editing/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Clapperboard, Film, Scissors, Wand2 } from "lucide-react";

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
const videoServices = [
    {
        icon: <Film className="h-10 w-10 text-red-500" />,
        title: "সোশ্যাল মিডিয়া ভিডিও",
        description: "ফেসবুক রিলস, ইউটিউব শর্টস এবং ইন্সটাগ্রামের জন্য আকর্ষণীয় এবং দ্রুতগতির ভিডিও এডিটিং।",
    },
    {
        icon: <Clapperboard className="h-10 w-10 text-blue-500" />,
        title: "প্রোমোশনাল ভিডিও",
        description: "আপনার পণ্য বা সার্ভিসের জন্য বিজ্ঞাপন যা কাস্টমারের দৃষ্টি আকর্ষণ করবে।",
    },
    {
        icon: <Wand2 className="h-10 w-10 text-purple-500" />,
        title: "মোশন গ্রাফিক্স",
        description: "আপনার ভিডিওতে অ্যানিমেটেড টেক্সট, লোগো এবং গ্রাফিক্স যুক্ত করে আরও আকর্ষণীয় করে তুলুন।",
    },
    {
        icon: <Scissors className="h-10 w-10 text-green-500" />,
        title: "কর্পোরেট ভিডিও",
        description: "ইন্টারভিউ, টিউটোরিয়াল বা কোম্পানির অভ্যন্তরীণ ব্যবহারের জন্য প্রফেশনাল ভিডিও এডিটিং।",
    }
];


export default function VideoEditingPage() {
  return (
    <main className="w-full bg-white">
      <motion.section
        className="relative w-full overflow-hidden bg-red-50 py-24 md:py-32"
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
              প্রফেশনাল ভিডিও এডিটিং দিয়ে আপনার গল্প বলুন
            </motion.h1>
            <motion.p
              className="mb-10 text-lg text-gray-600"
              variants={itemVariants}
            >
              আমাদের দক্ষ ভিডিও এডিটরদের মাধ্যমে আপনার সাধারণ ফুটেজকে অসাধারণ ভিডিওতে পরিণত করুন, যা আপনার দর্শকের মনে দাগ কাটবে।
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                asChild
                size="lg"
                className="group w-full rounded-full bg-red-600 px-8 py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-red-700 sm:w-auto"
              >
                <Link href="/packages">
                  আমাদের প্যাকেজ দেখুন
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
              src="https://i.ibb.co/JqKxZ0x/offer-poster.jpg" // আপনার ভিডিও এডিটিং সম্পর্কিত ছবি
              alt="Video Editing Service"
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
            <h2 className="text-3xl font-bold text-gray-800">আমাদের ভিডিও এডিটিং সার্ভিসের ধরণ</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {videoServices.map((service, index) => (
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
              <h2 className="mb-6 text-3xl font-bold text-gray-800">কেন আমাদের ভিডিও এডিটিং সেরা?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">দ্রুত ডেলিভারি</h4>
                    <p className="text-gray-600">আমরা আপনার মূল্যবান সময়কে গুরুত্ব দেই এবং দ্রুততম সময়ে কাজ ডেলিভারি করি।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">কপিরাইট-ফ্রি রিসোর্স</h4>
                    <p className="text-gray-600">আপনার ভিডিওতে ব্যবহৃত সকল মিউজিক এবং ফুটেজ হবে সম্পূর্ণ কপিরাইট-মুক্ত।</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">হাই-কোয়ালিটি আউটপুট</h4>
                    <p className="text-gray-600">আমরা 4K রেজোলিউশন পর্যন্ত হাই-কোয়ালিটি ভিডিও আউটপুট প্রদান করি।</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://i.ibb.co/yVp4M9F/offer-fb.jpg" // আপনার টিম বা অফিসের ছবি
                alt="Video Editing Team"
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
