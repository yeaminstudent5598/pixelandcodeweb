// src/app/portfolio/page.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// পোর্টফোলিও আইটেমগুলোর ডেটা
const portfolioItems = [
  {
    category: "Web Design",
    title: "ই-কমার্স ওয়েবসাইট",
    imgSrc: "/web design.jpg",
    link: "https://ready-fish-farm.netlify.app",
  },
  {
    category: "Graphics",
    title: "সোশ্যাল মিডিয়া পোস্ট",
    imgSrc: "/social design 01.jpeg",
    link: "#",
  },
  {
    category: "Web Design",
    title: "কর্পোরেট ওয়েবসাইট",
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

        {/* ফিল্টার বাটন */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          {filterCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={cn(
                "rounded-full px-6 py-2 text-base font-semibold",
                activeFilter === category && "bg-blue-600 text-white"
              )}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
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
                <Card className="group overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <div className="relative h-60 w-full">
                      <Image
                      src={item.imgSrc}
                      alt={item.title}
                      fill // 'layout="fill"' এর পরিবর্তে 'fill' ব্যবহার করা এখনকার স্ট্যান্ডার্ড
                      style={{ objectFit: "contain" }} // <-- এখানে 'contain' ব্যবহার করুন
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2 text-xl font-bold">
                      {item.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-blue-600">
                      {item.category}
                    </p>
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
