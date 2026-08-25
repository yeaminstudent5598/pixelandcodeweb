"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HelpCircle, MessageCircle, ChevronRight } from "lucide-react";

// ============================================================
// Types
// ============================================================

type FAQItem = {
  question: string;
  answer: string;
};

// ============================================================
// Bangla FAQ Data
// ============================================================

const faqDataBn: FAQItem[] = [
  {
    question: "আপনারা কি ফেসবুক Ads Campaign কি দিয়ে করে থাকেন?",
    answer:
      "আমরা ফেসবুক Ads Campaign করার জন্য নিজস্ব ডুয়েল কারেন্সি কার্ড এবং এজেন্সি অ্যাকাউন্ট ব্যবহার করে থাকি, যা সম্পূর্ণ নিরাপদ এবং নির্ভরযোগ্য। কোনো প্রকার ভ্যাট/ট্যাক্সের ঝামেলা পোহাতে হবে না।",
  },
  {
    question: "আপনারা কি HTPOOL এর অথোরাইজড এড একাউন্ট সেল করেন?",
    answer:
      "হ্যাঁ, আমরা HTPOOL এর একজন অথোরাইজড পার্টনার। আমাদের থেকে আপনি সম্পূর্ণ ভেরিফাইড এবং নিরাপদ এড অ্যাকাউন্ট কিনতে পারবেন যা কখনো ডিজেবল হওয়ার ভয় নেই।",
  },
  {
    question: "আপনাদের সাথে সরাসরি অফিসে এসে কথা বলতে চাচ্ছি।",
    answer:
      "অবশ্যই! আপনি আমাদের অফিসে এসে সরাসরি কথা বলতে পারেন। আমাদের অফিসের ঠিকানা ওয়েবসাইটের কন্টাক্ট পেইজে দেওয়া আছে। তবে আসার আগে ফোন দিয়ে অ্যাপয়েন্টমেন্ট নিলে আপনার জন্য সুবিধা হবে।",
  },
  {
    question: "আপনাদের ডলার রেট কত? মিনিমাম কত ডলারের কাজ করানো যাবে?",
    answer:
      "ডলারের রেট আন্তর্জাতিক বাজারের উপর নির্ভর করে পরিবর্তনশীল। বর্তমান রেট এবং মিনিমাম বাজেট সম্পর্কে জানতে অনুগ্রহ করে আমাদের হোয়াটসঅ্যাপে বা সরাসরি কল করে জেনে নিন।",
  },
];

// ============================================================
// English FAQ Data
// ============================================================

const faqDataEn: FAQItem[] = [
  {
    question: "Do you run Facebook Ads Campaigns?",
    answer:
      "We use our own dual currency cards and agency accounts to run Facebook Ads Campaigns, which are completely safe and reliable. No hassle with VAT/Tax.",
  },
  {
    question: "Do you sell authorized HTPOOL ad accounts?",
    answer:
      "Yes, we are an authorized partner of HTPOOL. You can buy fully verified and secure ad accounts from us with zero risk of being disabled.",
  },
  {
    question: "I want to talk directly at your office.",
    answer:
      "Absolutely! You are welcome to visit our office. The address is on our contact page. However, we recommend calling ahead to schedule an appointment for your convenience.",
  },
  {
    question: "What is your dollar rate? What is the minimum amount?",
    answer:
      "The dollar rate varies depending on the international market. Please contact us via WhatsApp or phone call to know the current rate and minimum budget requirements.",
  },
];

// ============================================================
// FAQ Section
// ============================================================

export function FaqSection() {
  const { language } = useLanguage();

  const shouldReduceMotion = useReducedMotion();

  // First FAQ is open by default.
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = language ? faqDataBn : faqDataEn;

  // ==========================================================
  // Toggle FAQ
  // ==========================================================

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  // ==========================================================
  // Animation settings
  // ==========================================================

  const sectionAnimation = shouldReduceMotion
    ? {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
      }
    : {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="faq"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#060606]
        py-20
        md:py-28
        lg:py-32
      "
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(249,115,22,.03) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(249,115,22,.03) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "56px 56px",
        borderTop: "1px solid rgba(255,255,255,.05)",
      }}
    >
      {/* ======================================================
          Background Glow
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-orange-600/10
          blur-[120px]
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          left-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-red-600/10
          blur-[120px]
        "
        aria-hidden="true"
      />

      {/* Extra center glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-500/[0.025]
          blur-[100px]
        "
        aria-hidden="true"
      />

      {/* ======================================================
          Main Container
      ======================================================= */}

      <div
        className="
          container
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* ==================================================
              LEFT COLUMN
          =================================================== */}

          <div className="relative order-2 lg:order-1">
            {/* =================================================
                Image Container
            ================================================== */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.96 }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                ease: "easeOut",
              }}
              className="
                relative
                h-[380px]
                w-full
                overflow-hidden
                rounded-[2rem]
                border
                border-orange-500/20
                shadow-[0_25px_60px_rgba(0,0,0,0.8)]
                sm:h-[450px]
                md:h-[500px]
                lg:rounded-[2.5rem]
              "
            >
              {/* Orange overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-10
                  bg-gradient-to-tr
                  from-orange-500/30
                  via-transparent
                  to-red-500/10
                  mix-blend-overlay
                "
              />

              {/* Image */}

              <Image
                src="/question.avif"
                alt={
                  language
                    ? "সচরাচর জিজ্ঞাসিত প্রশ্নের জন্য সাপোর্ট"
                    : "FAQ support illustration"
                }
                fill
                sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1024px) 90vw,
                  50vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-105
                "
                priority={false}
              />

              {/* Bottom dark gradient */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-10
                  bg-gradient-to-t
                  from-[#060606]
                  via-[#060606]/40
                  to-transparent
                "
              />

              {/* Image bottom label */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  z-20
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  px-4
                  py-2
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-orange-500
                  "
                />

                <span
                  className="
                    text-xs
                    font-semibold
                    text-white/80
                  "
                >
                  {language
                    ? "আমরা সাহায্য করতে প্রস্তুত"
                    : "We're here to help"}
                </span>
              </div>
            </motion.div>

            {/* =================================================
                Floating Contact Card
            ================================================== */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -10, 0],
                    }
              }
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-7
                right-2
                z-30
                w-[calc(100%-2rem)]
                max-w-[280px]
                rounded-3xl
                border
                border-orange-500/30
                bg-[#111111]/95
                p-5
                shadow-[0_20px_40px_-15px_rgba(249,115,22,0.4)]
                backdrop-blur-2xl
                sm:right-4
                md:-right-6
                md:p-6
              "
            >
              {/* Card Header */}

              <div className="mb-3 flex items-center gap-4">
                {/* Icon */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-orange-500
                    to-red-500
                    text-white
                    shadow-lg
                    shadow-orange-500/40
                  "
                >
                  <MessageCircle
                    className="
                      h-6
                      w-6
                      animate-pulse
                    "
                  />
                </div>

                {/* Text */}

                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-orange-400
                    "
                  >
                    {language ? "আরও প্রশ্ন?" : "More Questions?"}
                  </p>

                  <p
                    className="
                      text-sm
                      font-extrabold
                      text-white
                    "
                  >
                    {language ? "চ্যাট করুন" : "Chat With Us"}
                  </p>
                </div>
              </div>

              <p
                className="
                  text-xs
                  font-medium
                  leading-relaxed
                  text-gray-400
                "
              >
                {language
                  ? "আমাদের সাপোর্ট টিম সর্বদা আপনার জন্য প্রস্তুত।"
                  : "Our support team is always ready for you."}
              </p>
            </motion.div>
          </div>

          {/* ==================================================
              RIGHT COLUMN
          =================================================== */}

          <div className="order-1 lg:order-2">
            {/* =================================================
                Heading
            ================================================== */}

            <motion.div
              {...sectionAnimation}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
              }}
            >
              {/* Badge */}

              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-orange-500/30
                  bg-orange-500/10
                  px-4
                  py-1.5
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-orange-400
                  shadow-[0_0_15px_rgba(249,115,22,0.15)]
                "
              >
                <HelpCircle className="h-3.5 w-3.5" />

                {language ? "প্রশ্ন ও উত্তর" : "FAQ"}
              </div>

              {/* Heading */}

              <h2
                className="
                  mb-6
                  text-4xl
                  font-black
                  leading-[1.1]
                  tracking-tight
                  text-white
                  sm:text-5xl
                  lg:mb-8
                  lg:text-6xl
                "
              >
                {language ? (
                  <>
                    সচরাচর জিজ্ঞাসিত
                    <br />
                    <span
                      className="
                        bg-gradient-to-r
                        from-orange-500
                        to-red-500
                        bg-clip-text
                        text-transparent
                        drop-shadow-md
                      "
                    >
                      প্রশ্নের উত্তর
                    </span>
                  </>
                ) : (
                  <>
                    Frequently Asked
                    <br />
                    <span
                      className="
                        bg-gradient-to-r
                        from-orange-500
                        to-red-500
                        bg-clip-text
                        text-transparent
                        drop-shadow-md
                      "
                    >
                      Questions
                    </span>
                  </>
                )}
              </h2>

              {/* Small intro */}

              <p
                className="
                  mb-8
                  max-w-2xl
                  text-sm
                  font-medium
                  leading-relaxed
                  text-gray-500
                  md:text-base
                "
              >
                {language
                  ? "আমাদের সার্ভিস, পেমেন্ট, অ্যাড ক্যাম্পেইন এবং অন্যান্য বিষয় সম্পর্কে সাধারণ প্রশ্নগুলোর উত্তর এখানে পেয়ে যাবেন।"
                  : "Find answers to common questions about our services, payments, advertising campaigns, and other important topics."}
              </p>
            </motion.div>

            {/* =================================================
                FAQ List
            ================================================== */}

            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={`${faq.question}-${index}`}
                    initial={
                      shouldReduceMotion
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {
                            opacity: 0,
                            x: 20,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                    }}
                    className={`
                      overflow-hidden
                      rounded-2xl
                      border
                      backdrop-blur-md
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? `
                            translate-x-0
                            border-orange-500/60
                            bg-gradient-to-r
                            from-[#1a110a]
                            to-[#121212]
                            shadow-[0_10px_30px_rgba(249,115,22,0.18)]
                          `
                          : `
                            border-[#222222]
                            bg-[#111111]/70
                            hover:border-[#333333]
                          `
                      }
                    `}
                  >
                    {/* =================================================
                        FAQ Button
                    ================================================== */}

                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isActive}
                      aria-controls={`faq-answer-${index}`}
                      className="
                        flex
                        w-full
                        cursor-pointer
                        items-center
                        justify-between
                        gap-4
                        p-5
                        text-left
                        outline-none
                        focus-visible:ring-2
                        focus-visible:ring-orange-500
                        focus-visible:ring-inset
                        sm:p-6
                      "
                    >
                      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                        {/* Number */}

                        <span
                          className={`
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            text-xs
                            font-black
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? `
                                  bg-gradient-to-br
                                  from-orange-500
                                  to-red-500
                                  text-white
                                  shadow-md
                                  shadow-orange-500/40
                                  scale-105
                                `
                                : `
                                  bg-[#222222]
                                  text-gray-400
                                `
                            }
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Question */}

                        <span
                          className={`
                            text-base
                            font-bold
                            leading-snug
                            transition-colors
                            duration-300
                            sm:text-lg
                            md:text-xl
                            ${isActive ? "text-orange-400" : "text-gray-200"}
                          `}
                        >
                          {faq.question}
                        </span>
                      </div>

                      {/* Arrow */}

                      <span
                        className={`
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? `
                                rotate-90
                                bg-orange-500/20
                                text-orange-400
                              `
                              : "text-gray-500"
                          }
                        `}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </button>

                    {/* =================================================
                        Answer
                    ================================================== */}

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.3,
                            ease: "easeInOut",
                          }}
                          style={{
                            overflow: "hidden",
                          }}
                        >
                          <div
                            className="
                              mx-5
                              border-t
                              border-dashed
                              border-orange-500/20
                              pb-5
                              pt-4
                              sm:mx-6
                              sm:pb-6
                            "
                          >
                            <p
                              className="
                                pl-12
                                text-sm
                                font-medium
                                leading-relaxed
                                text-gray-400
                                sm:text-base
                              "
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                Bottom helper
            ================================================== */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 15 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
              className="
                mt-8
                flex
                items-center
                gap-3
                text-sm
                text-gray-500
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-orange-500
                "
              />

              <span>
                {language
                  ? "আপনার প্রশ্নের উত্তর না পেলে আমাদের সাথে যোগাযোগ করুন।"
                  : "Can't find your answer? Feel free to contact us."}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
