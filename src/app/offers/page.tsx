// src/app/offers/page.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// অফারগুলোর ডেটা (নতুন ছবি এবং ডিজাইন অনুযায়ী আপডেট করা হয়েছে)
const offersData = [
  {
    imgSrc: "/Service-01.jpg", // আপনার অফারের ছবি দিন
    title: "ফেসবুক বুস্টিং এর উপর ১০% ছাড়!",
    description: "ডিজিটাল মার্কেটিং এর মাধ্যমে আপনার ব্রান্ডের তৈরি করুন পরিচিতি।",
    link: "/offer/facebook-boost",
  },
  {
    imgSrc: "/Service-02.jpg", // আপনার অফারের ছবি দিন
    title: "পোস্টার ডিজাইন মাত্র ৩০০/- টাকায়!",
    description: "পোস্টার ডিজাইন এর মাধ্যমে আপনার ব্রান্ড ভ্যালু তৈরি করুন।",
    link: "/offer/poster-design",
  },
  {
    imgSrc: "/Service-03.jpg", // আপনার অফারের ছবি দিন
    title: "প্রফেশনাল লোগো ডিজাইন করুন",
    description: "ডিজিটাল মার্কেটিং এর মাধ্যমে আপনার ব্রান্ডের তৈরি করুন পরিচিতি।",
    link: "/offer/logo-design",
  },
];

export default function OffersPage() {
  return (
    <main className="w-full bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-red-200 bg-red-50 px-6 py-2 text-sm font-medium text-red-600 shadow-sm">
            অফারসমূহ
          </div>
          <h1 className="text-4xl font-extrabold text-blue-800 md:text-5xl">
            চলমান সকল নতুন অফার!
          </h1>
        </div>

        {/* অফার কার্ডগুলোর গ্রিড */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offersData.map((offer, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              {/* ছবির অংশ */}
              <div className="relative w-full">
                <Image
                  src={offer.imgSrc}
                  alt={offer.title}
                  width={600}
                  height={400}
                  className="w-full rounded-t-2xl object-cover"
                />
              </div>

              {/* টেক্সট এবং বাটন অংশ */}
              <div className="flex flex-grow flex-col p-6 text-center">
                <h3 className="mb-3 text-2xl font-bold text-gray-800">
                  {offer.title}
                </h3>
                <p className="mb-6 flex-grow text-base text-gray-600">
                  {offer.description}
                </p>
                <Button
                  asChild
                  className="mt-auto w-full rounded-md bg-red-500 text-white hover:bg-red-600"
                >
                  <Link href={offer.link}>বিস্তারিত দেখুন</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
