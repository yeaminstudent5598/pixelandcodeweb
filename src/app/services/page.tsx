// src/app/services/page.tsx
import { Button } from "@/components/ui/button";
import {
  Code,
  Clapperboard,
  PenTool,
  InfinityIcon,
  Megaphone,
  BarChart,
  Target,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WhyChooseUsSection } from "../components/shared/WhyChooseUsSection";

// সার্ভিস কার্ডগুলোর ডেটা
const servicesData = [
  {
    icon: <InfinityIcon className="h-10 w-10 text-blue-500" />,
    title: "মেটা মার্কেটিং",
    description: "মেটা মার্কেটিং করে পৌঁছে যান কাঙ্ক্ষিত কাস্টমারের কাছে!",
    borderColor: "border-blue-200 hover:border-blue-400",
  },
  {
    icon: <PenTool className="h-10 w-10 text-yellow-500" />,
    title: "গ্রাফিক্স ডিজাইন",
    description: "গ্রাফিক্স ডিজাইন করে আপনার পণ্যের ডিজিটাল পরিচিতি তৈরি করুন।",
    borderColor: "border-yellow-200 hover:border-yellow-400",
  },
  {
    icon: <Clapperboard className="h-10 w-10 text-purple-500" />,
    title: "ভিডিও এডিটিং",
    description: "ভিডিও তৈরি করে সহজেই আপনার পণ্যের পরিচিতি বিজ্ঞাপন করুন।",
    borderColor: "border-purple-200 hover:border-purple-400",
  },
  {
    icon: <Code className="h-10 w-10 text-red-500" />,
    title: "ওয়েব ডিজাইন",
    description: "ওয়েবসাইট এর মাধ্যমে আপনার ব্যবসাকে করুন আরও স্মার্ট।",
    borderColor: "border-red-200 hover:border-red-400",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-green-500" />,
    title: "গুগল এড",
    description: "গুগল এডের মাধ্যমে আপনার ব্যবসাকে সকলের সামনে তুলে ধরুন।",
    borderColor: "border-green-200 hover:border-green-400",
  },
  {
    icon: <BarChart className="h-10 w-10 text-orange-500" />,
    title: "এস ই ও",
    description: "সার্চ ইঞ্জিন অপটিমাইজেশন করে আপনার ব্যবসাকে এগিয়ে রাখুন।",
    borderColor: "border-orange-200 hover:border-orange-400",
  },
  {
    icon: <Target className="h-10 w-10 text-indigo-500" />,
    title: "কন্টেন্ট মার্কেটিং",
    description: "সঠিক কন্টেন্টের মাধ্যমে আপনার কাস্টমারদের আকর্ষণ করুন।",
    borderColor: "border-indigo-200 hover:border-indigo-400",
  },
  {
    icon: <Mail className="h-10 w-10 text-pink-500" />,
    title: "ইমেইল মার্কেটিং",
    description: "ইমেইল মার্কেটিং এর মাধ্যমে আপনার পুরনো কাস্টমারদের ধরে রাখুন।",
    borderColor: "border-pink-200 hover:border-pink-400",
  },
];

// প্যাকেজ ব্যানারগুলোর ডেটা
const packageBanners = [
    { src: "https://i.ibb.co/L5BKTqg/silver-package.png", alt: "Silver Package" },
    { src: "https://i.ibb.co/cQx69s3/gold-package.png", alt: "Gold Package" },
    { src: "https://i.ibb.co/GvXzYmS/diamond-package.png", alt: "Diamond Package" },
]

export default function ServicesPage() {
  return (
    <main className="bg-gray-50/50">
      <div className="container mx-auto px-4 py-20 sm:py-28">
        {/* সেকশনের শিরোনাম */}
        <h1 className="mb-12 text-center text-4xl font-extrabold text-gray-800 md:text-5xl">
          সকল ডিজিটাল সল্যুশন এক প্লাটফর্মে!
        </h1>

        {/* সার্ভিস কার্ডগুলোর গ্রিড */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className={`flex transform flex-col items-center rounded-2xl border-2 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${service.borderColor}`}
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                {service.title}
              </h3>
              <p className="mb-5 flex-grow text-sm text-gray-600">
                {service.description}
              </p>
              <Button
                asChild
                className="mt-auto w-full rounded-full bg-blue-500 text-white hover:bg-blue-600"
              >
                <Link href="/services">বিস্তারিত জানুন</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* প্যাকেজ ব্যানার সেকশন */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
            {packageBanners.map((banner, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <Image 
                        src={banner.src}
                        alt={banner.alt}
                        width={600}
                        height={400}
                        className="w-full"
                    />
                </div>
            ))}
        </div>
        <WhyChooseUsSection/>
      </div>
    </main>
  );
}
