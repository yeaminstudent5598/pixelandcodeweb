// src/components/shared/FeaturedServicesSection.tsx
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// সার্ভিসগুলোর ডেটা
const servicesData = [
  {
    src: "https://i.ibb.co/6nDD4r0/product-photography.jpg", // ❗️ আপনার নিজের ছবি দিন
    alt: "Product Photography Service",
    title: "Product Photography",
    price: "মাত্র ৪৯৯ টাকা থেকে শুরু!",
    description: "ফেসবুক বুস্টিং এর উপর ১০% ছাড়! ডিজিটাল মার্কেটিং এর মাধ্যমে আপনার ব্রান্ডের তৈরি করুন।",
    link: "/services/photography",
  },
  {
    src: "https://i.ibb.co/xJ1p9bC/social-media-post.jpg", // ❗️ আপনার নিজের ছবি দিন
    alt: "Social Media Post Design",
    title: "Social Media Post Design",
    price: "মাত্র ৪৯৯ টাকা থেকে শুরু!",
    description: "পোস্টার ডিজাইন মাত্র ৩০০/- টাকায়! পোস্টার ডিজাইন এর মাধ্যমে আপনার ব্রান্ড ভ্যালু তৈরি করুন।",
    link: "/services/social-media",
  },
  {
    src: "https://i.ibb.co/yQdC5xW/logo-design.jpg", // ❗️ আপনার নিজের ছবি দিন
    alt: "Logo Design Service",
    title: "Logo Design",
    price: "মাত্র ৯৯৯ টাকা থেকে শুরু!",
    description: "প্রফেশনাল লোগো ডিজাইন করুন। ডিজিটাল মার্কেটিং এর মাধ্যমে আপনার ব্রান্ডের তৈরি করুন।",
    link: "/services/logo-design",
  },
];

export function FeaturedServicesSection() {
  return (
    <section className="w-full bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-800 md:text-4xl">
          শুরু করুন আপনার ব্যবসার ক্রিয়েটিভ যাত্রা!!
        </h2>

        {/* সার্ভিস কার্ডগুলোর গ্রিড */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              {/* ছবির অংশ */}
              <div className="relative w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                   <h3 className="text-2xl font-bold">{item.title}</h3>
                   <p className="mt-2 text-lg font-semibold">{item.price}</p>
                </div>
              </div>
              
              {/* টেক্সট এবং বাটন অংশ */}
              <div className="flex flex-grow flex-col p-6">
                <p className="flex-grow text-base text-gray-600">
                  {item.description}
                </p>
                <Button asChild className="mt-6 w-full rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  <Link href={item.link}>বিস্তারিত দেখুন</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
