'use client';

import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

// ==========================================
// 📝 ব্লগ ডেটা (বাংলা ও ইংরেজি)
// ==========================================
const blogPostsBn = [
  {
    id: 1,
    imgSrc: "/Service-01.jpg",
    avatarSrc: "/Yeamin.png",
    author: "Yeamin Madbor",
    category: "Marketing",
    title: "ফেসবুক মার্কেটিং স্মার্ট ক্যাম্পেইন গাইড ২০২৫",
    excerpt: "সঠিকভাবে অ্যাড ক্যাম্পেইন করে আপনার ব্যবসাকে এগিয়ে নিতে চান? জেনে নিন আধুনিক সব ট্রিকস...",
    date: "২৫ জানুয়ারি, ২০২৫",
    readTime: "৫ মিনিট",
    link: "/blog/fb-smart-campaign",
  },
  {
    id: 2,
    imgSrc: "/Service-02.jpg",
    avatarSrc: "/Mizan.jpg",
    author: "Mizanur Rahman",
    category: "Strategy",
    title: "ডিজিটাল মার্কেটিং কেন এবং কীভাবে শুরু করবেন?",
    excerpt: "আপনি কি দীর্ঘমেয়াদী ব্যবসায়িক উন্নতির কথা ভাবছেন? ডিজিটাল মার্কেটিং হতে পারে আপনার প্রধান হাতিয়ার...",
    date: "০১ ডিসেম্বর, ২০২৩",
    readTime: "৭ মিনিট",
    link: "/blog/what-is-digital-marketing",
  },
  {
    id: 3,
    imgSrc: "/Service-03.jpg",
    avatarSrc: "/Sifat.jpg",
    author: "Sifat Hossain",
    category: "Social Media",
    title: "সোশ্যাল মিডিয়া এনগেজমেন্ট বাড়ানোর ৫টি উপায়",
    excerpt: "সময়ের সাথে সাথে সবকিছুই পরিবর্তনশীল। মার্কেটিং এর ধরণ পাল্টাচ্ছে, আপনি প্রস্তুত তো?...",
    date: "১৭ মে, ২০২৩",
    readTime: "৪ মিনিট",
    link: "/blog/how-to-do-fb-marketing",
  },
];

const blogPostsEn = [
  {
    id: 1,
    imgSrc: "/Service-01.jpg",
    avatarSrc: "/Yeamin.png",
    author: "Yeamin Madbor",
    category: "Marketing",
    title: "Facebook Marketing Smart Campaign Guide 2025",
    excerpt: "Want to grow your business with the right ad campaign? Learn all the modern tricks...",
    date: "January 25, 2025",
    readTime: "5 min read",
    link: "/blog/fb-smart-campaign",
  },
  {
    id: 2,
    imgSrc: "/Service-02.jpg",
    avatarSrc: "/Mizan.jpg",
    author: "Mizanur Rahman",
    category: "Strategy",
    title: "Why and How to Start Digital Marketing?",
    excerpt: "Are you thinking about long-term business growth? Digital marketing can be your main tool...",
    date: "December 1, 2023",
    readTime: "7 min read",
    link: "/blog/what-is-digital-marketing",
  },
  {
    id: 3,
    imgSrc: "/Service-03.jpg",
    avatarSrc: "/Sifat.jpg",
    author: "Sifat Hossain",
    category: "Social Media",
    title: "5 Ways to Increase Social Media Engagement",
    excerpt: "Everything changes with time. Marketing styles are changing, are you ready?...",
    date: "May 17, 2023",
    readTime: "4 min read",
    link: "/blog/how-to-do-fb-marketing",
  },
];

export default function BlogPage() {
  const { language } = useLanguage();
  const posts = language ? blogPostsBn : blogPostsEn;

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      
      {/* ==========================================
          HERO SECTION (Title & Intro)
      ========================================== */}
      <section className="relative pt-32 pb-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-200 dark:border-blue-800">
             <Tag className="w-3.5 h-3.5" />
             {language ? 'রিসোর্স এবং নলেজ' : 'Resources & Knowledge'}
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            {language ? (
              <>আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ব্লগ এবং নিউজ</span></>
            ) : (
              <>Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Latest Blog</span></>
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {language 
              ? 'ডিজিটাল মার্কেটিং, ওয়েব ডেভেলপমেন্ট এবং টেকনোলজি বিষয়ক সর্বশেষ টিপস, ট্রিকস এবং গাইডলাইন।' 
              : 'Latest tips, tricks, and guidelines on Digital Marketing, Web Development, and Technology.'}
          </p>
        </div>
      </section>

      {/* ==========================================
          BLOG POSTS GRID
      ========================================== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {posts.map((post) => (
              <article 
                key={post.id}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Link href={post.link} className="block w-full h-full">
                    <Image
                      src={post.imgSrc}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </Link>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold text-white bg-blue-600 rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-6">
                  
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={post.link}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer (Author & Read More) */}
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                        <Image 
                          src={post.avatarSrc} 
                          alt={post.author} 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {post.author}
                      </span>
                    </div>

                    <Link 
                      href={post.link}
                      className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all"
                    >
                      {language ? 'পড়ুন' : 'Read'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ==========================================
          NEWSLETTER SECTION (Bonus)
      ========================================== */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-blue-900 px-6 py-16 text-center shadow-2xl sm:px-12 md:px-24">
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>

            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4 relative z-10">
              {language 
                ? 'আমাদের নিউজলেটার সাবস্ক্রাইব করুন' 
                : 'Subscribe to our newsletter'}
            </h2>
            
            <p className="mx-auto mt-2 max-w-xl text-lg text-slate-300 mb-8 relative z-10">
              {language 
                ? 'নতুন ব্লগ পোস্ট এবং টেক আপডেট পেতে আপনার ইমেইল দিন।'
                : 'Get the latest blog posts and tech updates directly to your inbox.'}
            </p>
            
            <form className="mx-auto max-w-md flex gap-x-4 relative z-10">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-full border-0 bg-white/10 px-5 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 backdrop-blur-sm"
                placeholder={language ? 'আপনার ইমেইল' : 'Enter your email'}
              />
              <button
                type="submit"
                className="flex-none rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                {language ? 'সাবস্ক্রাইব' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}