// src/components/shared/FaqSection.tsx
"use client";

import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// প্রশ্ন এবং উত্তরগুলোর ডেটা
const faqData = [
  {
    question: "আপনারা কি ফেসবুক Ads Campaign কি দিয়ে করে থাকেন ?",
    answer:
      "আমরা ফেসবুক Ads Campaign করার জন্য নিজস্ব ডুয়েল কারেন্সি কার্ড এবং এজেন্সি অ্যাকাউন্ট ব্যবহার করে থাকি, যা সম্পূর্ণ নিরাপদ এবং নির্ভরযোগ্য।",
  },
  {
    question: "আপনারা কি HTPOOL এর অথোরাইজড এড একাউন্ট সেল করেন ?",
    answer:
      "হ্যাঁ, আমরা HTPOOL এর একজন অথোরাইজড পার্টনার। আমাদের থেকে আপনি সম্পূর্ণ ভেরিফাইড এবং নিরাপদ এড অ্যাকাউন্ট কিনতে পারবেন।",
  },
  {
    question: "আপনাদের সাথে সরাসরি অফিসে এসে কথা বলতে চাচ্ছি।",
    answer:
      "অবশ্যই! আপনি আমাদের অফিসে এসে সরাসরি কথা বলতে পারেন। আমাদের অফিসের ঠিকানা আমাদের ওয়েবসাইটের কন্টাক্ট পেইজে দেওয়া আছে। আসার আগে ফোন দিয়ে আসলে আপনার জন্য সুবিধা হবে।",
  },
  {
    question: "আপনাদের ডলার রেট কত ? মিনিমাম কত ডলারের কাজ করানো যাবে ?",
    answer:
      "ডলারের রেট আন্তর্জাতিক বাজারের উপর নির্ভর করে পরিবর্তনশীল। বর্তমান রেট এবং মিনিমাম বাজেট সম্পর্কে জানতে অনুগ্রহ করে আমাদের সাথে সরাসরি যোগাযোগ করুন।",
  },
];

export function FaqSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* বাম কলাম: ছবি */}
          <div className="relative hidden h-full min-h-[500px] items-center justify-center lg:flex">
            <Image
              src="https://i.ibb.co/6rC0d2Z/uts-de.png" // ❗️ আপনার নিজের ছবি দিন
              alt="Profile of Uts De"
              width={450}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>

          {/* ডান কলাম: প্রশ্ন এবং উত্তর */}
          <div className="flex flex-col">
            <div className="mb-4 inline-block self-start rounded-full border border-red-200 bg-red-50 px-6 py-2 text-sm font-medium text-red-600 shadow-sm">
              প্রশ্ন ও উত্তর
            </div>
            <h2 className="mb-8 text-3xl font-extrabold text-gray-800 md:text-4xl">
              সচরাচর জিজ্ঞাসিত প্রশ্নের উত্তর!
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
