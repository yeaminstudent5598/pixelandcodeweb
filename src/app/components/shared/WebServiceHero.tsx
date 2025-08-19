// src/app/web-service/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// 1. Banner Section Component (আপনার সাদা থিমের জন্য নতুন ডিজাইন)
export function WebServiceHero() {
  const services = ["Websites", "E-commerce Stores", "Web Apps"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000); // প্রতি ৩ সেকেন্ড পর টেক্সট পরিবর্তন হবে
    return () => clearInterval(interval);
  }, []);

  // অ্যানিমেশনের জন্য ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-white text-gray-800">
      {/* ব্যাকগ্রাউন্ড ডট প্যাটার্ন */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(circle, #E5E7EB 1px, transparent 1px)",
            backgroundSize: "2rem 2rem",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
      </div>

      <div className="container relative z-10 mx-auto grid min-h-screen grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        {/* বাম কলাম: টেক্সট কনটেন্ট */}
        <motion.div
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl"
            variants={itemVariants}
          >
            We Build Modern
            <br />
            <span className="relative inline-block h-20 text-blue-600">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {services[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-10 max-w-xl text-lg text-gray-600 lg:mx-0"
            variants={itemVariants}
          >
            আপনার আইডিয়াকে বাস্তবে রূপান্তর করুন। আমরা আপনার ব্যবসার জন্য দ্রুত, নিরাপদ এবং আকর্ষণীয় ডিজিটাল প্ল্যাটফর্ম তৈরি করি।
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-blue-600 px-8 py-6 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/30"
            >
              <Link href="/contact">
                শুরু করুন
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* ডান কলাম: অ্যানিমেটেড গ্রাফিক্স */}
        <motion.div
          className="relative hidden h-[500px] w-full items-center justify-center lg:flex"
          variants={itemVariants}
        >
          <motion.div
            className="absolute h-80 w-80 rounded-full bg-blue-100/50"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
           <motion.div
            className="absolute h-64 w-64 rounded-full bg-purple-100/50"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          ></motion.div>
          <motion.div
            className="z-10 flex h-48 w-48 items-center justify-center rounded-full bg-white shadow-2xl"
            whileHover={{ scale: 1.1 }}
          >
            <Image
            src="/logo-01.svg" // আপনার ছবি
            alt="Custom Website Design"
            width={300}
            height={300}
            className="object-contain w-24 h-24"
          />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

