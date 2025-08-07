// src/components/shared/TestimonialsSection.tsx
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

// টেস্টিমোনিয়াল ডেটা
const testimonials = [
  {
    quote:
      "One of the best agency I have ever work with . My business increase almost 2 times more than before after working with them . My best wishes for them . Specially thanks to uthso 🙂",
    name: "Tasnim Rahman",
    role: "প্রতিষ্ঠাতা, KAZI TECH HUB",
    imgSrc: "https://i.ibb.co/6rC0d2Z/uts-de.png", // ❗️ আপনার ক্লায়েন্টের ছবি দিন
  },
  // আপনি চাইলে এখানে আরও টেস্টিমোনিয়াল যুক্ত করতে পারেন
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-gradient-to-br from-white via-blue-50 to-purple-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* বাম কলাম: টেক্সট কনটেন্ট */}
          <div className="flex flex-col">
            <div className="mb-4 inline-block rounded-full border border-red-200 bg-white px-6 py-2 text-sm font-medium text-red-500 shadow-sm">
              কাস্টমার ফিডব্যাক
            </div>
            <h2 className="mb-6 text-3xl font-extrabold text-gray-800 md:text-4xl">
              আমাদের #১ সেবায় যারা সন্তুষ্টি প্রকাশ করেছেন তাদের মন্তব্য!
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg">
              আমরা দীর্ঘ ৭ বছর যাবত সুনামের সহিত ময়মনসিংহ এবং সারাদেশব্যাপী ডিজিটাল
              সার্ভিস রিলেটেড সকল চাহিদা পূরণ করে আসছি। আমাদের রয়েছে ৪০০ এরও
              অধিক ব্র্যান্ডের সাথে কাজ করার অভিজ্ঞতা।
            </p>
            <Button
              asChild
              variant="link"
              className="group p-0 text-lg font-semibold text-orange-600 hover:text-orange-700"
            >
              <Link href="/testimonials" className="flex items-center gap-2">
                <span>আরও ফিডব্যাক দেখুন</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* ডান কলাম: টেস্টিমোনিয়াল কার্ড */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    src={testimonials[0].imgSrc}
                    alt={`Photo of ${testimonials[0].name}`}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <Quote className="absolute left-6 top-6 h-10 w-10 text-gray-200" />
              <p className="mt-10 text-center text-lg italic text-gray-700">
                "{testimonials[0].quote}"
              </p>
              <div className="mt-6 text-center">
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[0].name}
                </h4>
                <p className="text-sm text-gray-500">{testimonials[0].role}</p>
              </div>
            </div>
            {/* নেভিগেশন ডট */}
            <div className="mt-8 flex justify-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-orange-500"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
