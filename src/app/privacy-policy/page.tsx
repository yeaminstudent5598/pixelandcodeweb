// src/app/privacy-policy/page.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
            <Shield className="w-3.5 h-3.5" />
            {language ? 'গোপনীয়তা নীতি' : 'Legal & Privacy'}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            {language ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}
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
                  ? 'Pixel & Code-এ আপনার গোপনীয়তা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। এই প্রাইভেসি পলিসি ডকুমেন্টটিতে আমরা কী ধরনের তথ্য সংগ্রহ করি এবং কীভাবে তা ব্যবহার করি, তার বিস্তারিত বর্ণনা দেওয়া হয়েছে।'
                  : 'At Pixel & Code, accessible from pixelandcode.agency, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Pixel & Code and how we use it.'}
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">
                  {language ? '১. আমরা যে তথ্য সংগ্রহ করি' : '1. Information We Collect'}
                </h2>
              </div>
              <p>
                {language 
                  ? 'আপনি যখন আমাদের ওয়েবসাইট ভিজিট করেন বা আমাদের সাথে যোগাযোগ করেন, তখন আমরা কিছু সাধারণ তথ্য সংগ্রহ করতে পারি। এর মধ্যে রয়েছে:'
                  : 'The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.'}
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600 dark:text-slate-400">
                {language ? (
                  <>
                    <li>আপনার নাম এবং পদবী</li>
                    <li>যোগাযোগের তথ্য (ইমেইল এড্রেস, ফোন নাম্বার)</li>
                    <li>ডেমোগ্রাফিক তথ্য (যেমন পোস্টকোড, পছন্দ এবং আগ্রহ)</li>
                    <li>অন্যান্য তথ্য যা কাস্টমার সার্ভে বা অফারের জন্য প্রাসঙ্গিক</li>
                  </>
                ) : (
                  <>
                    <li>Name and job title</li>
                    <li>Contact information including email address and phone number</li>
                    <li>Demographic information such as postcode, preferences, and interests</li>
                    <li>Other information relevant to customer surveys and/or offers</li>
                  </>
                )}
              </ul>
            </div>

            {/* 2. How We Use Information */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">
                  {language ? '২. আমরা কীভাবে তথ্য ব্যবহার করি' : '2. How We Use Your Information'}
                </h2>
              </div>
              <p>
                {language 
                  ? 'আমরা সংগৃহীত তথ্যগুলো বিভিন্নভাবে ব্যবহার করি, যার মধ্যে রয়েছে:'
                  : 'We use the information we collect in various ways, including to:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600 dark:text-slate-400">
                {language ? (
                  <>
                    <li>আমাদের ওয়েবসাইট পরিচালনা এবং মেইনটেইন করা</li>
                    <li>ওয়েবসাইটের পারফর্মেন্স উন্নত করা</li>
                    <li>নতুন প্রডাক্ট, সার্ভিস এবং ফিচার তৈরি করা</li>
                    <li>আপনার সাথে সরাসরি বা পার্টনারের মাধ্যমে যোগাযোগ করা (কাস্টমার সার্ভিস)</li>
                    <li>আপনাকে ইমেইল পাঠানো এবং জালিয়াতি প্রতিরোধ করা</li>
                  </>
                ) : (
                  <>
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service</li>
                    <li>Send you emails and find and prevent fraud</li>
                  </>
                )}
              </ul>
            </div>

            {/* 3. Security */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">
                  {language ? '৩. নিরাপত্তা (Security)' : '3. Security'}
                </h2>
              </div>
              <p>
                {language 
                  ? 'আপনার তথ্যের নিরাপত্তা নিশ্চিত করতে আমরা প্রতিশ্রুতিবদ্ধ। অননুমোদিত অ্যাক্সেস বা প্রকাশ রোধ করার জন্য আমরা উপযুক্ত শারীরিক, ইলেকট্রনিক এবং ব্যবস্থাপনা পদ্ধতি স্থাপন করেছি।'
                  : 'We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.'}
              </p>
            </div>

            {/* 4. Cookies */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {language ? 'কুকিজ (Cookies)' : 'Cookies and Web Beacons'}
              </h3>
              <p>
                {language 
                  ? 'অন্যান্য ওয়েবসাইটের মতোই Pixel & Code "কুকিজ" ব্যবহার করে। এই কুকিজগুলো ভিজিটরদের পছন্দ এবং ওয়েবসাইটের কোন পেজগুলো ভিজিট করা হয়েছে তা স্টোর করতে ব্যবহার করা হয়।'
                  : 'Like any other website, Pixel & Code uses "cookies". These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited.'}
              </p>
            </div>

            {/* 5. Contact Us */}
            <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {language ? 'আমাদের সাথে যোগাযোগ করুন' : 'Contact Us'}
              </h3>
              <p className="mb-4">
                {language 
                  ? 'এই প্রাইভেসি পলিসি সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, আমাদের সাথে যোগাযোগ করতে পারেন:'
                  : 'If you have any questions about this Privacy Policy, You can contact us:'}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <a href="mailto:pixelandcode07@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
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