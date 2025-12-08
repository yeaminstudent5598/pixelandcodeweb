// src/components/shared/TestimonialsSection.tsx
'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'; // useState এবং useEffect ইম্পোর্ট করুন
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion'; // Framer Motion ইম্পোর্ট করুন

// টেস্টিমোনিয়াল ডেটা
const testimonials = [
  {
    quote:
      'One of the best agency I have ever work with . My business increase almost 2 times more than before after working with them . My best wishes for them . Specially thanks to uthso 🙂',
    name: 'Yeamin', // নাম পরিবর্তন করা হয়েছে
    role: 'প্রতিষ্ঠাতা, Pixel & Code',
    imgSrc: '/Yeamin.png', // আপনার ক্লায়েন্টের ছবি দিন
  },
  {
    quote:
      'Pixel & Code delivered an outstanding website for my startup. Their team is highly professional and they truly understand client needs. Highly recommended!',
    name: 'Aisha Akter',
    role: 'CEO, FreshBite Foods',
    imgSrc: '/Aisha.png', // কাল্পনিক ছবি (প্রয়োজনে পরিবর্তন করুন)
  },
  {
    quote:
      'Our social media engagement skyrocketed after Pixel & Code managed our campaigns. Their creative approach and strategic insights are truly commendable.',
    name: 'Fahim Ahmed',
    role: 'Marketing Manager, UrbanStyle',
    imgSrc: '/Fahim.png', // কাল্পনিক ছবি (প্রয়োজনে পরিবর্তন করুন)
  },
  {
    quote:
      'Working with Yeamin and his team was a pleasure. They brought our vision to life with exceptional design and functionality. A top-notch digital agency!',
    name: 'Nusrat Jahan',
    role: 'Founder, EcoCrafts',
    imgSrc: '/Nusrat.png', // কাল্পনিক ছবি (প্রয়োজনে পরিবর্তন করুন)
  },
];

export function TestimonialsSection() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0); // বর্তমান টেস্টিমোনিয়ালের ইনডেক্স

  useEffect(() => {
    // 5 সেকেন্ড পর পর স্লাইড পরিবর্তন হবে
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 সেকেন্ড

    return () => clearInterval(interval); // কম্পোনেন্ট আনমাউন্ট হলে ইন্টারভাল পরিষ্কার করুন
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* বাম কলাম: টেক্সট কনটেন্ট */}
          <div className="flex flex-col">
            <div className="mb-4 inline-block rounded-full border border-red-200 bg-white dark:bg-gray-900 dark:border-red-900 px-6 py-2 text-sm font-medium text-red-500 dark:text-red-400 shadow-sm">
              {language ? 'কাস্টমার ফিডব্যাক' : 'Customer Feedback'}
            </div>

            <h2 className="mb-6 text-3xl font-extrabold text-gray-800 dark:text-white md:text-4xl">
              {language
                ? 'আমাদের #১ সেবায় যারা সন্তুষ্টি প্রকাশ করেছেন তাদের মন্তব্য!'
                : 'Comments from Customers Who Expressed Satisfaction with Our #1 Service!'}
            </h2>

            <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
              {language
                ? 'আমরা দীর্ঘ ৭ বছর যাবত সুনামের সহিত ময়মনসিংহ এবং সারাদেশব্যাপী ডিজিটাল সার্ভিস রিলেটেড সকল চাহিদা পূরণ করে আসছি। আমাদের রয়েছে ৪০০ এরও অধিক ব্র্যান্ডের সাথে কাজ করার অভিজ্ঞতা।'
                : 'For the past 7 years, we have been providing digital services across Mymensingh and nationwide with great reputation. We have experience working with over 400 brands.'}
            </p>

            <Button
              asChild
              variant="link"
              className="group p-0 text-lg font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400"
            >
              <Link href="/testimonials" className="flex items-center gap-2">
                <span>{language ? 'আরও ফিডব্যাক দেখুন' : 'See More Feedback'}</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* ডান কলাম: টেস্টিমোনিয়াল কার্ড */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-xl dark:shadow-gray-900/50 dark:border dark:border-gray-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.name} // key পরিবর্তন হলে অ্যানিমেশন ট্রিগার হবে
                  initial={{ opacity: 0, x: 50 }} // ডান দিক থেকে আসবে
                  animate={{ opacity: 1, x: 0 }} // বর্তমান স্থানে আসবে
                  exit={{ opacity: 0, x: -50 }} // বাম দিকে যাবে
                  transition={{ duration: 0.5 }} // অ্যানিমেশনের সময়
                  className="flex flex-col items-center" // Ensure content is centered
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-md">
                      <Image
                        src={currentTestimonial.imgSrc}
                        alt={`Photo of ${currentTestimonial.name}`}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <Quote className="absolute left-6 top-6 h-10 w-10 text-gray-200 dark:text-gray-700" />
                  <p className="mt-10 text-center text-lg italic text-gray-700 dark:text-gray-300">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 text-center">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* নেভিগেশন ডট */}
            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-3 w-3 cursor-pointer rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  onClick={() => setCurrentIndex(index)} // ডটে ক্লিক করলে স্লাইড পরিবর্তন
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}