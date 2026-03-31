// src/app/components/legal/PrivacyClient.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export function PrivacyClient() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 mb-4">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          {language ? "প্রাইভেসি পলিসি" : "Privacy Policy"}
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          {language ? "সর্বশেষ আপডেট: মার্চ ২০২৬" : "Last Updated: March 2026"}
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-300">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-600" />
            {language ? "১. তথ্য সংগ্রহ" : "1. Information Collection"}
          </h2>
          <p className="mt-3">
            {language 
              ? "আমরা যখন আপনার প্রজেক্ট নিয়ে কাজ করি, তখন আপনার নাম, ইমেইল, ফোন নম্বর এবং ব্যবসার প্রয়োজনীয় তথ্য সংগ্রহ করি। আমরা কোনো অপ্রয়োজনীয় তথ্য সংগ্রহ করি না।" 
              : "When we work on your project, we collect information such as your name, email, phone number, and necessary business details. We do not collect unnecessary data."}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-600" />
            {language ? "২. তথ্যের নিরাপত্তা" : "2. Data Security"}
          </h2>
          <p className="mt-3">
            {language 
              ? "আপনার দেওয়া সকল তথ্য আমাদের কাছে আমানত। আমরা আপনার প্রোজেক্ট ফাইল এবং ব্যক্তিগত তথ্য সুরক্ষিত রাখতে আধুনিক এনক্রিপশন এবং সিকিউরিটি মেজারস ব্যবহার করি।" 
              : "All information provided by you is a trust. We use modern encryption and security measures to keep your project files and personal data secure."}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            {language ? "৩. তৃতীয় পক্ষের কাছে তথ্য শেয়ার" : "3. Third-party Sharing"}
          </h2>
          <p className="mt-3">
            {language 
              ? "পিক্সেল অ্যান্ড কোড কখনো আপনার তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি বা অনুমতি ছাড়া শেয়ার করে না। তবে আইনি প্রয়োজনে বা পেমেন্ট ভেরিফিকেশনের জন্য প্রয়োজনীয় ডাটা শেয়ার করা হতে পারে।" 
              : "Pixel & Code never sells or shares your information with third parties without permission, except as required by law or for payment verification purposes."}
          </p>
        </section>
      </div>
    </div>
  );
}