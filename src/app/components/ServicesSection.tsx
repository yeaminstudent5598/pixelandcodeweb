// src/components/shared/ServicesSection.tsx
import { Button } from "@/components/ui/button";
import { Code, Clapperboard, PenTool, InfinityIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

// সার্ভিসগুলোর ডেটা একটি অ্যারেতে রাখা হয়েছে
const servicesData = [
  {
    icon: <InfinityIcon className="h-12 w-12 text-blue-500" />,
    title: "মেটা মার্কেটিং",
    description: "মেটা মার্কেটিং করে পৌঁছে যান কাঙ্ক্ষিত কাস্টমারের কাছে!",
    borderColor: "border-blue-300 hover:border-blue-500",
    buttonClass: "bg-blue-500 hover:bg-blue-600",
  },
  {
    icon: <PenTool className="h-12 w-12 text-yellow-500" />,
    title: "গ্রাফিক্স ডিজাইন",
    description: "গ্রাফিক্স ডিজাইন করে আপনার পণ্যের ডিজিটাল পরিচিতি তৈরি করুন।",
    borderColor: "border-yellow-300 hover:border-yellow-500",
    buttonClass: "bg-blue-500 hover:bg-blue-600", // বাটনের রঙ একই রাখা হয়েছে
  },
  {
    icon: <Clapperboard className="h-12 w-12 text-purple-500" />,
    title: "ভিডিও এডিটিং",
    description: "ভিডিও তৈরি করে সহজেই আপনার পণ্যের পরিচিতি বিজ্ঞাপন করুন।",
    borderColor: "border-purple-300 hover:border-purple-500",
    buttonClass: "bg-blue-500 hover:bg-blue-600",
  },
  {
    icon: <Code className="h-12 w-12 text-red-500" />,
    title: "ওয়েব ডিজাইন",
    description: "ওয়েবসাইট এর মাধ্যমে আপনার ব্যবসাকে করুন আরও স্মার্ট।",
    borderColor: "border-red-300 hover:border-red-500",
    buttonClass: "bg-blue-500 hover:bg-blue-600",
  },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-orange-50/50 py-20 sm:py-28">
       {/* নিচের শিরোনাম এবং বাটন */}
        <div className="my-10 text-center">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-800 md:text-4xl">
            সকল ডিজিটাল সলিউশন এক প্লাটফর্মে!
          </h2>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-red-500 px-10 py-6 text-lg text-white shadow-md transition-transform hover:scale-105 hover:bg-red-600"
          >
            <Link href="/services">সার্ভিস সমূহ</Link>
          </Button>
        </div>
      <div className="container mx-auto px-4">
        {/* সার্ভিস কার্ডগুলোর গ্রিড */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className={`flex transform flex-col items-center rounded-2xl border-2 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${service.borderColor}`}
            >
              <div className="mb-6 flex p-4 h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                {service.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-800">
                {service.title}
              </h3>
              <p className="mb-6 min-h-[50px] text-base text-gray-600">
                {service.description}
              </p>
              <Button
                asChild
                className={`mt-auto w-full rounded-full text-white ${service.buttonClass}`}
              >
                <Link href="/services">বিস্তারিত জানুন</Link>
              </Button>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
