// src/app/terms-of-service/page.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Scale, CreditCard, Copyright, AlertCircle, FileCheck, Mail } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const { language } = useLanguage();
  const lastUpdated = 'December 15, 2025';

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-300 font-sans">
      
      {/* ======================
          HEADER SECTION
      ======================= */}
      <section className="relative py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
            <Scale className="w-3.5 h-3.5" />
            {language ? 'শর্তাবলী' : 'Terms & Conditions'}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            {language ? 'ব্যবহারের শর্তাবলী' : 'Terms of Service'}
          </h1>
          
          <p className="text-slate-500 dark:text-slate-400">
            {language 
              ? `সর্বশেষ আপডেট: ${lastUpdated}` 
              : `Last Updated: ${lastUpdated}`}
          </p>
        </div>
      </section>

      {/* ======================
          CONTENT SECTION
      ======================= */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="lead text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                {language 
                  ? 'Pixel & Code-এ স্বাগতম। আমাদের ওয়েবসাইট ব্যবহার করে এবং আমাদের সার্ভিস গ্রহণ করে আপনি নিম্নলিখিত শর্তাবলী মেনে নিতে সম্মত হচ্ছেন। অনুগ্রহ করে মনোযোগ সহকারে পড়ুন।'
                  : 'Welcome to Pixel & Code. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.'}
              </p>
            </div>

            {/* 1. Service Usage */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">
                  {language ? '১. সার্ভিস ব্যবহার' : '1. Use of Services'}
                </h2>
              </div>
              <p>
                {language 
                  ? 'আমরা ওয়েব ডিজাইন, গ্রাফিক ডিজাইন, ভিডিও এডিটিং এবং ডিজিটাল মার্কেটিং সেবা প্রদান করি। আমাদের সাথে কাজ শুরু করার আগে ক্লায়েন্টকে প্রজেক্টের রিকোয়ারমেন্ট স্পষ্টভাবে জানাতে হবে।'
                  : 'We provide web design, graphic design, video editing, and digital marketing services. Clients must clearly communicate project requirements before commencing work.'}
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600 dark:text-slate-400">
                {language ? (
                  <>
                    <li>অবৈধ বা অনৈতিক কোনো কন্টেন্ট নিয়ে আমরা কাজ করি না।</li>
                    <li>প্রজেক্ট চলাকালীন সময়ে নিয়মিত যোগাযোগ রক্ষা করতে হবে।</li>
                    <li>নির্ধারিত সময়ের মধ্যে ফিডব্যাক প্রদান করতে হবে।</li>
                  </>
                ) : (
                  <>
                    <li>We do not work with illegal or unethical content.</li>
                    <li>Regular communication must be maintained during the project.</li>
                    <li>Feedback must be provided within the stipulated time.</li>
                  </>
                )}
              </ul>
            </div>

            {/* 2. Payment & Refunds */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">
                  {language ? '২. পেমেন্ট এবং রিফান্ড পলিসি' : '2. Payment & Refund Policy'}
                </h2>
              </div>
              <p>
                {language 
                  ? 'যেকোনো প্রজেক্ট শুরু করার আগে সাধারণত ৫০% অগ্রিম পেমেন্ট করতে হয়। বাকি পেমেন্ট প্রজেক্ট হ্যান্ডওভারের সময় পরিশোধ করতে হবে।'
                  : 'Generally, a 50% advance payment is required before starting any project. The remaining balance must be paid upon project handover.'}
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600 dark:text-slate-400">
                {language ? (
                  <>
                    <li>পেমেন্ট ব্যাংক ট্রান্সফার, বিকাশ, নগদ বা রকেটের মাধ্যমে করা যাবে।</li>
                    <li>কাজ শুরু করার পর যদি ক্লায়েন্ট প্রজেক্ট বাতিল করেন, তবে অগ্রিম পেমেন্ট অফেরতযোগ্য (Non-refundable)।</li>
                    <li>আমাদের পক্ষ থেকে কাজ ডেলিভারি দিতে ব্যর্থ হলে সম্পূর্ণ টাকা ফেরত দেওয়া হবে।</li>
                  </>
                ) : (
                  <>
                    <li>Payments can be made via Bank Transfer, bKash, Nagad, or Rocket.</li>
                    <li>If the client cancels the project after work has commenced, the advance payment is non-refundable.</li>
                    <li>If we fail to deliver the work, a full refund will be issued.</li>
                  </>
                )}
              </ul>
            </div>

            {/* 3. Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <Copyright className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">
                  {language ? '৩. মেধা স্বত্ব (Intellectual Property)' : '3. Intellectual Property'}
                </h2>
              </div>
              <p>
                {language 
                  ? 'সম্পূর্ণ পেমেন্ট পরিশোধ করার পর প্রজেক্টের সকল সোর্স কোড এবং ডিজাইনের মালিকানা ক্লায়েন্টকে বুঝিয়ে দেওয়া হবে। তবে, প্রজেক্টটি আমাদের পোর্টফোলিওতে প্রদর্শনের অধিকার আমরা রাখি।'
                  : 'Upon full payment, ownership of all source code and designs will be transferred to the client. However, we reserve the right to display the project in our portfolio.'}
              </p>
            </div>

            {/* 4. Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">
                  {language ? '৪. দায়বদ্ধতা সীমাবদ্ধতা' : '4. Limitation of Liability'}
                </h2>
              </div>
              <p>
                {language 
                  ? 'Pixel & Code আপনার ব্যবসার লাভ-ক্ষতি বা ওয়েবসাইটের কোনো টেকনিক্যাল সমস্যার কারণে পরোক্ষ কোনো ক্ষতির জন্য দায়ী থাকবে না। আমরা সর্বোচ্চ চেষ্টা করি নির্ভুল সার্ভিস প্রদান করতে।'
                  : 'Pixel & Code shall not be liable for any indirect damages, loss of profits, or technical issues related to your website. We strive to provide error-free services to the best of our ability.'}
              </p>
            </div>

            {/* Contact Box */}
            <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {language ? 'শর্তাবলী নিয়ে কোনো প্রশ্ন আছে?' : 'Questions about the Terms?'}
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-400">
                {language 
                  ? 'এই শর্তাবলী সম্পর্কে আপনার কোনো প্রশ্ন থাকলে বা কোনো বিষয় স্পষ্ট করার প্রয়োজন হলে আমাদের সাথে যোগাযোগ করুন:'
                  : 'If you have any questions about these Terms, please contact us:'}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <a href="mailto:pixelandcode07@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    pixelandcode07@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}