// src/app/about/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Target, Eye, Heart } from "lucide-react";
import { TeamSection } from "@/app/components/shared/TeamSection"; // আপনার আগের TeamSection কম্পোনেন্টটি import করা হয়েছে

// ভ্যালুগুলোর ডেটা
const coreValues = [
  {
    icon: <Heart className="h-10 w-10 text-red-500" />,
    title: "ক্লায়েন্টের সন্তুষ্টি",
    description: "আমাদের প্রতিটি কাজে ক্লায়েন্টের সন্তুষ্টিই সর্বোচ্চ অগ্রাধিকার পায়।",
  },
  {
    icon: <Target className="h-10 w-10 text-blue-500" />,
    title: "উদ্ভাবন ও সৃজনশীলতা",
    description: "আমরা সবসময় নতুন এবং সৃজনশীল সমাধান নিয়ে আসি যা আপনার ব্যবসাকে এগিয়ে রাখে।",
  },
  {
    icon: <Users className="h-10 w-10 text-green-500" />,
    title: "সমন্বিত প্রচেষ্টা",
    description: "আমাদের দক্ষ টিম একসাথে কাজ করে আপনার জন্য সেরা ফলাফল নিশ্চিত করে।",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl font-extrabold text-gray-900 md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            আমাদের গল্প
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pixel & Code এর যাত্রা শুরু হয়েছিল একটি সাধারণ লক্ষ্য নিয়ে - ব্যবসার ডিজিটাল সম্ভাবনাকে বাস্তবে রূপ দেওয়া। একদল উদ্যমী এবং সৃজনশীল মানুষের হাত ধরে আজ আমরা একটি পূর্ণাঙ্গ ডিজিটাল এজেন্সি।
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Mission */}
            <motion.div
              className="rounded-lg border p-8 text-center shadow-sm"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-block rounded-full bg-blue-100 p-4">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="mb-3 text-2xl font-bold">আমাদের মিশন</h2>
              <p className="text-gray-600">
                সর্বাধুনিক প্রযুক্তি এবং সৃজনশীলতার সমন্বয়ে প্রতিটি ব্যবসাকে তাদের নিজস্ব ডিজিটাল পরিচয় তৈরি করতে সাহায্য করা এবং তাদের সফলতার অংশীদার হওয়া।
              </p>
            </motion.div>
            {/* Vision */}
            <motion.div
              className="rounded-lg border p-8 text-center shadow-sm"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-4 inline-block rounded-full bg-purple-100 p-4">
                <Eye className="h-10 w-10 text-purple-600" />
              </div>
              <h2 className="mb-3 text-2xl font-bold">আমাদের ভিশন</h2>
              <p className="text-gray-600">
                বাংলাদেশের অন্যতম সেরা এবং নির্ভরযোগ্য ডিজিটাল সার্ভিস প্রোভাইডার হিসেবে নিজেদের প্রতিষ্ঠিত করা এবং ডিজিটাল 혁신 এর মাধ্যমে দেশের অর্থনীতিতে অবদান রাখা।
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              আমাদের মূল ভিত্তি
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-white p-8 text-center shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-4 inline-block rounded-full bg-gray-100 p-4">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </main>
  );
}
