// src/components/shared/PricingSection.tsx
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// প্যাকেজগুলোর ডেটা
const packagesData = [
  {
    planName: "সিলভার প্যাকেজ",
    imageSrc: "https://i.ibb.co/L5BKTqg/silver-package.png", // ❗️ আপনার নিজের ছবি দিন
    alt: "Silver Package Banner",
    priceUSD: 20,
    priceBDT: 3000,
    boostAmount: 3000,
    boostDescription: "৫-২০০ মেসেজ কনভারসেশন",
    link: "/package/silver",
    isPopular: false,
  },
  {
    planName: "গোল্ড প্যাকেজ",
    imageSrc: "https://i.ibb.co/cQx69s3/gold-package.png", // ❗️ আপনার নিজের ছবি দিন
    alt: "Gold Package Banner",
    priceUSD: 30,
    priceBDT: 4500,
    boostAmount: 4500,
    boostDescription: "২০০-৩০০ মেসেজ কনভারসেশন",
    link: "/package/gold",
    isPopular: true,
  },
  {
    planName: "ডায়মন্ড প্যাকেজ",
    imageSrc: "https://i.ibb.co/GvXzYmS/diamond-package.png", // ❗️ আপনার নিজের ছবি দিন
    alt: "Diamond Package Banner",
    priceUSD: 50,
    priceBDT: 7500,
    boostAmount: 10000,
    boostDescription: "৩০০-১০০০ মেসেজ কনভারসেশন",
    link: "/package/diamond",
    isPopular: false,
  },
];

export function PricingSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <h2 className="mb-12 text-center text-3xl font-extrabold text-green-700 md:text-4xl">
          অ্যাডভার্টাইজ মার্কেটিং করে পৌঁছে যান সঠিক কাস্টমারের কাছে!
        </h2>

        {/* প্যাকেজ কার্ডগুলোর গ্রিড */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packagesData.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col overflow-hidden rounded-lg border-2 bg-gray-50 shadow-lg transition-transform duration-300 ${
                item.isPopular ? "scale-105 border-green-500" : "border-transparent"
              }`}
            >
              {item.isPopular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-500 px-4 py-1 text-sm font-bold text-white">
                  জনপ্রিয়
                </div>
              )}
              
              <div className="p-4">
                <h3 className="text-center text-lg font-semibold text-gray-700">{item.planName}</h3>
                <div className="relative mt-2 h-auto w-full">
                    <Image
                        src={item.imageSrc}
                        alt={item.alt}
                        width={600}
                        height={300}
                        className="w-full rounded-md object-cover"
                    />
                </div>
              </div>
              
              {/* টেক্সট এবং বাটন অংশ */}
              <div className="flex flex-grow flex-col p-6 pt-2 text-center">
                <p className="font-bold text-gray-800">পোস্ট বুস্ট করুন {item.boostAmount.toLocaleString('bn-BD')} টাকায়!</p>
                <p className="mt-1 text-sm text-gray-500">{item.boostDescription}</p>
                
                <Button asChild className="mt-6 w-full rounded-md bg-green-600 text-white hover:bg-green-700">
                  <Link href={item.link}>ক্যাম্পেইন সেট করুন</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <Button asChild size="lg" className="rounded-full bg-green-600 px-10 py-6 text-lg text-white shadow-md transition-transform hover:scale-105 hover:bg-green-700">
                <Link href="/packages">প্যাকেজ সমূহ...</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
