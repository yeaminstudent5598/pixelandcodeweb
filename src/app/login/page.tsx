// src/app/login/page.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, ArrowLeft, Package } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  // অ্যানিমেশনের জন্য ভ্যারিয়েন্ট
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <main className="flex min-h-[80vh] w-full items-center justify-center bg-slate-50 p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-xl"
      >
        <Card className="overflow-hidden rounded-2xl border text-center shadow-xl">
          <CardHeader className="bg-gradient-to-br from-green-50 to-blue-50 p-8">
            <motion.div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md"
              // আইকনের জন্য পালস অ্যানিমেশন
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              variants={itemVariants}
            >
              <ShieldCheck className="h-10 w-10 text-green-500" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CardTitle className="mt-4 text-3xl font-bold text-gray-800">
                প্রবেশাধিকার সংরক্ষিত
              </CardTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <CardDescription className="mt-2 text-lg text-gray-600">
                দুঃখিত, এই পেইজটি শুধুমাত্র আমাদের প্রিমিয়াম সদস্যদের জন্য।
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent className="bg-white p-8">
            <motion.p className="mb-8 text-gray-500" variants={itemVariants}>
              আমাদের সার্ভিস গ্রহণ করে আপনিও এই বিশেষ সুবিধা পেতে পারেন। অনুগ্রহ করে আমাদের প্যাকেজগুলো দেখুন অথবা হোম পেইজে ফিরে যান।
            </motion.p>
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              variants={itemVariants}
            >
              <Button asChild variant="outline" className="group rounded-full px-6 py-5 text-base">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  হোমে ফিরে যান
                </Link>
              </Button>
              <Button asChild className="group rounded-full bg-green-600 px-6 py-5 text-base text-white hover:bg-green-700">
                <Link href="/packages">
                  <Package className="mr-2 h-4 w-4" />
                  প্যাকেজ দেখুন
                </Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
