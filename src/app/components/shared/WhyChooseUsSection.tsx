'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'Do you run Facebook Ads Campaigns?',
    answer:
      'We use our own dual currency cards and agency accounts to run Facebook Ads Campaigns, which are completely safe and reliable. No hassle with VAT/Tax.',
  },
  {
    question: 'Do you sell authorized HTPOOL ad accounts?',
    answer:
      'Yes, we are an authorized partner of HTPOOL. You can buy fully verified and secure ad accounts from us with zero risk of being disabled.',
  },
  {
    question: 'I want to talk directly at your office.',
    answer:
      'Absolutely! You are welcome to visit our office. The address is on our contact page. However, we recommend calling ahead to schedule an appointment for your convenience.',
  },
  {
    question: 'What is your dollar rate? What is the minimum amount?',
    answer:
      'The dollar rate varies depending on the international market. Please contact us via WhatsApp or phone call to know the current rate and minimum budget requirements.',
  },
];

// Brand blue (light blue gradient — no dark blue)
const BLUE_GRADIENT = 'linear-gradient(180deg, #38bdf8 0%, #3b82f6 100%)';
const BLUE_GRADIENT_H = 'linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)';

export function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-16 dark:bg-[#050b16] md:py-24">
      {/* Container — navbar / hero er sathe same width & padding */}
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* ════ LEFT: sticky heading ════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em]"
              style={{
                border: '1px solid rgba(56,189,248,0.45)',
                background: 'rgba(255,255,255,0.75)',
                color: '#0369a1',
              }}
            >
              FAQ
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-4xl">
              Frequently Asked{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: BLUE_GRADIENT_H }}
              >
                Questions
              </span>
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-7 text-slate-600 dark:text-slate-400">
              Can&apos;t find what you are looking for? Talk to our team directly
              and we will get back to you quickly.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              style={{
                background: BLUE_GRADIENT_H,
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow:
                  '0 10px 28px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.45)',
              }}
            >
              Talk to Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* ════ RIGHT: accordion list ════ */}
          <div className="border-t border-slate-200 dark:border-white/10">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              const panelId = `faq-panel-${index}`;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="border-b border-slate-200 dark:border-white/10"
                >
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    className="group flex w-full items-center gap-4 py-5 text-left focus:outline-none sm:gap-6 sm:py-6"
                  >
                    {/* number */}
                    <span
                      className={`w-8 shrink-0 text-sm font-semibold tabular-nums transition-colors duration-300 ${
                        isActive
                          ? 'text-sky-500'
                          : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* question */}
                    <span
                      className={`flex-1 text-base font-semibold leading-snug transition-colors duration-300 sm:text-lg ${
                        isActive
                          ? 'text-blue-600 dark:text-sky-300'
                          : 'text-slate-800 group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-sky-300'
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* icon */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? ''
                          : 'border border-slate-300 text-slate-500 group-hover:border-sky-400 group-hover:text-sky-500 dark:border-white/20 dark:text-slate-300'
                      }`}
                      style={
                        isActive
                          ? {
                              background: BLUE_GRADIENT,
                              boxShadow: '0 8px 20px rgba(59,130,246,0.30)',
                            }
                          : undefined
                      }
                    >
                      {isActive ? (
                        <Minus className="h-4 w-4" color="#ffffff" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pl-12 pr-4 text-[15px] leading-7 text-slate-600 dark:text-slate-400 sm:pl-14">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}