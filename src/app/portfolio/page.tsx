// src/app/portfolio/page.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// পোর্টফোলিও আইটেমগুলোর ডেটা (Guptodhan, PorerbazarBD সহ)
const portfolioItems = [
  {
    category: "Web Design",
    title: "Ready Fish Farm",
    imgSrc: "/web design.jpg",
    link: "https://ready-fish-farm.netlify.app",
  },
  {
    category: "Web Design",
    title: "Guptodhan (E-commerce)",
    imgSrc: "https://i.ibb.co.com/YBfJWhJw/image.png", // আপনার আসল ইমেজ পাথ দিন
    link: "guptodhan.com",
  },
  {
    category: "Web Design",
    title: "PorerbazarBD (E-commerce)",
    imgSrc: "https://i.ibb.co.com/YBfJWhJw/image.png", // আপনার আসল ইমেজ পাথ দিন
    link: "https://porerbarazbd.vercel.app/",
  },
  {
    category: "Graphics",
    title: "সোশ্যাল মিডিয়া পোস্ট",
    imgSrc: "/social design 01.jpeg",
    link: "#",
  },
  {
    category: "Web Design",
    title: "কর্পোরেট ওয়েবসাইট",
    imgSrc: "/web02.jpeg",
    link: "#",
  },
  {
    category: "Marketing",
    title: "ফেসবুক এড ক্যাম্পেইন",
    imgSrc: "/facebookadscampaign.jpeg",
    link: "#",
  },
  {
    category: "Graphics",
    title: "লোগো ডিজাইন",
    imgSrc: "/demologo.jpeg",
    link: "#",
  },
  {
    category: "Marketing",
    title: "গুগল এডস",
    imgSrc: "/google ads 01.jpeg",
    link: "#",
  },
];


const filterCategories = ["All", "Web Design", "Graphics", "Marketing"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <main className="w-full bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
            আমাদের পোর্টফোলিও
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            আমাদের করা কিছু সেরা কাজের নমুনা দেখুন।
          </p>
        </div>

        {/* ফিল্টার বাটন (মোবাইলে স্ক্রল হবে) */}
        <div className="w-full overflow-x-auto pb-4">
          <div className="mb-10 flex flex-nowrap justify-start gap-4 sm:justify-center">
            {filterCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={cn(
                  "flex-shrink-0 rounded-full px-6 py-2 text-base font-semibold",
                  activeFilter === category && "bg-blue-600 text-white"
                )}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* পোর্টফোলিও গ্রিড */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title + index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group flex h-full flex-col overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader className="relative h-50 w-full p-0">
                    <div className="relative h-50 w-full">
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        fill
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-grow flex-col justify-between p-6">
                    <div>
                      <CardTitle className="mb-2 text-xl font-bold">
                        {item.title}
                      </CardTitle>
                      <p className="text-sm font-medium text-blue-600">
                        {item.category}
                      </p>
                    </div>

                    {/* === সমাধান করা বাটন === */}
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="mt-6 w-full">
                      <Button variant="outline" className="w-full">
                        বিস্তারিত দেখুন
                      </Button>
                    </Link>
                    
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}