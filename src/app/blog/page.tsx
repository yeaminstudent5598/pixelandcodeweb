// src/app/blog/page.tsx
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// ব্লগ পোস্টগুলোর ডেটা
const blogPosts = [
  {
    imgSrc: "/Service-01.jpg", // আপনার ব্লগ পোস্টের ছবি
    avatarSrc: "/Yeamin.png", // লেখকের ছবি
    title: "Facebook Marketing Smart Campaign",
    excerpt: "সঠিকভাবে অ্যাড ক্যাম্পেইন করে আপনার ব্যবসাকে এগিয়ে নিন...",
    date: "January 25, 2025",
    comments: 0,
    link: "/blog/fb-smart-campaign",
  },
  {
    imgSrc: "/Service-02.jpg",
    avatarSrc: "/Mizan.jpg",
    title: "ডিজিটাল মার্কেটিং কি? ফেসবুক মার্কেটিং কেন, কিভাবে করাবেন?",
    excerpt: "আপনি কি দীর্ঘমেয়াদী ব্যবসায়ের উন্নতিতে ডিজিটাল মার্কেটিং...",
    date: "December 1, 2023",
    comments: 0,
    link: "/blog/what-is-digital-marketing",
  },
  {
    imgSrc: "/Service-03.jpg",
    avatarSrc: "/Sifat.jpg",
    title: "ফেসবুক মার্কেটিং কি? কিভাবে করাবেন ফেসবুক মার্কেটিং?",
    excerpt: "সময়ের সাথে সাথে সবকিছুই পরিবর্তনশীল। মার্কেটিং এর ধরণ...",
    date: "May 17, 2023",
    comments: 0,
    link: "/blog/how-to-do-fb-marketing",
  },
];

export default function BlogPage() {
  return (
    <main className="w-full bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
            আমাদের ব্লগ
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            ডিজিটাল মার্কেটিং এবং টেকনোলজি বিষয়ক সর্বশেষ তথ্য ও টিপস।
          </p>
        </div>

        {/* ব্লগ পোস্ট কার্ডগুলোর গ্রিড */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* ছবির অংশ */}
              <div className="relative">
                <Link href={post.link} className="block">
                  <Image
                    src={post.imgSrc}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                {/* লেখকের অ্যাভাটার */}
                <div className="absolute -bottom-8 left-8">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-white shadow-md">
                    <Image
                      src={post.avatarSrc}
                      alt="Author Avatar"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* টেক্সট অংশ */}
              <div className="flex flex-grow flex-col p-6 pt-10">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  <Link href={post.link} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-4 flex-grow text-base text-gray-600">
                  {post.excerpt}
                </p>
                <Link
                  href={post.link}
                  className="group/link mt-auto flex items-center gap-2 font-semibold text-red-500 hover:text-red-600"
                >
                  <span>আরও পড়ুন</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* মেটা তথ্য (তারিখ, কমেন্ট) */}
              <div className="border-t border-gray-100 px-6 py-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
