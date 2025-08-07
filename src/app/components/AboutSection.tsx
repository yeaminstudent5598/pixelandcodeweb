// src/components/shared/AboutSection.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export function AboutSection() {
  return (
    <section className="w-full bg-orange-50/50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* বাম কলাম: টেক্সট কনটেন্ট */}
          <div className="flex flex-col items-start">
            <span className="mb-4 rounded-full border border-orange-200 bg-white px-4 py-1 text-sm font-medium text-orange-600 shadow-sm">
              আমাদের পরিচিতি
            </span>
            <h2 className="mb-6 text-3xl font-extrabold text-gray-800 md:text-4xl">
              ময়মনসিংহ এর #১ ডিজিটাল সার্ভিস প্রদানকারী প্রতিষ্ঠান!
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg">
              আমরা দীর্ঘ ৭ বছর যাবত সুনামের সহিত ময়মনসিংহ এবং সারাদেশব্যাপী ডিজিটাল
              সার্ভিস রিলেটেড সকল চাহিদা পূরণ করে আসছি। আমাদের রয়েছে ৪০০ এরও
              অধিক ব্র্যান্ডের সাথে কাজ করার অভিজ্ঞতা।
            </p>
            <Button asChild variant="link" className="p-0 text-lg text-orange-600 hover:text-orange-700">
              <Link href="/about" className="flex items-center gap-2">
                <span>আরও জানুন</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* ডান কলাম: ইউটিউব ভিডিও */}
          <div className="relative h-0 w-full overflow-hidden rounded-2xl pb-[56.25%] shadow-2xl">
            {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // ❗️ এখানে আপনার ইউটিউব ভিডিওর এমবেড লিংক দিন
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
