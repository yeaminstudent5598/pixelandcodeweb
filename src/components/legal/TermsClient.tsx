// src/app/components/legal/TermsClient.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Scale, CheckCircle2, AlertCircle, CreditCard } from "lucide-react";

export function TermsClient() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex p-3 rounded-2xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 mb-4">
          <Scale className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          {language ? "পরিষেবার শর্তাবলী" : "Terms of Service"}
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          {language ? "কার্যকরী তারিখ: মার্চ ২০২৬" : "Effective Date: March 2026"}
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-300">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-600" />
            {language ? "১. সেবা গ্রহণ" : "1. Acceptance of Services"}
          </h2>
          <p className="mt-3">
            {language 
              ? "আমাদের সার্ভিস অর্ডার করার মাধ্যমে আপনি স্বীকার করছেন যে আপনি আমাদের শর্তাবলী পড়েছেন এবং এতে আপনার পূর্ণ সম্মতি আছে।" 
              : "By ordering our services, you acknowledge that you have read and fully agree to our terms and conditions."}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-orange-600" />
            {language ? "২. পেমেন্ট এবং রিফান্ড" : "2. Payment & Refunds"}
          </h2>
          <p className="mt-3">
            {language 
              ? "প্রজেক্ট শুরুর আগে আপনাকে নির্দিষ্ট পরিমাণ অগ্রিম প্রদান করতে হবে। প্রজেক্ট কাজ শুরু হয়ে গেলে সাধারণত কোনো রিফান্ড প্রযোজ্য নয়, তবে বিশেষ ক্ষেত্রে আলোচনার সুযোগ থাকে।" 
              : "A specific advance payment is required before starting a project. Once work begins, refunds are generally not applicable, though special cases can be discussed."}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            {language ? "৩. প্রজেক্ট ডেলিভারি ও রিভিশন" : "3. Delivery & Revisions"}
          </h2>
          <p className="mt-3">
            {language 
              ? "আমরা প্রতিটি প্যাকেজের সাথে নির্দিষ্ট সংখ্যক রিভিশন প্রদান করি। অতিরিক্ত রিভিশনের জন্য চার্জ প্রযোজ্য হতে পারে। সঠিক সময়ে ফিডব্যাক না দিলে ডেলিভারি সময় বাড়তে পারে।" 
              : "We provide a set number of revisions with each package. Charges may apply for additional revisions. Delays in feedback may extend delivery times."}
          </p>
        </section>
      </div>
    </div>
  );
}