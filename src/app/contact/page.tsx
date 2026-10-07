// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { Mail, MessageCircle, Facebook, MapPin, Send } from "lucide-react";

const WHATSAPP = "8801641801705";

const contactCards = [
  {
    title: "Email Us",
    text: "pixelandcode07@gmail.com",
    href: "mailto:pixelandcode07@gmail.com",
    icon: <Mail className="h-6 w-6" />,
    from: "#38bdf8",
    to: "#3b82f6",
  },
  {
    title: "WhatsApp Us",
    text: "+8801641801705",
    href: `https://wa.me/${WHATSAPP}`,
    icon: <MessageCircle className="h-6 w-6" />,
    from: "#22d3ee",
    to: "#0ea5e9",
  },
  {
    title: "Facebook Page",
    text: "Message Pixel & Code",
    href: "https://facebook.com",
    icon: <Facebook className="h-6 w-6" />,
    from: "#0ea5e9",
    to: "#2563eb",
  },
  {
    title: "Visit Our Office",
    text: "Shariatpur Sadar, Shariatpur - 8000",
    href: "#map",
    icon: <MapPin className="h-6 w-6" />,
    from: "#60a5fa",
    to: "#6366f1",
  },
];

const services = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Graphic Design",
  "Video Editing",
  "Digital Marketing",
  "SEO",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the message in WhatsApp. Replace with a server action (lib/actions.ts) if you prefer email.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`;
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const field =
    "w-full rounded-xl border border-white/70 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-3 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)] backdrop-blur-md outline-none transition focus:border-sky-400 focus:bg-white/80 dark:focus:bg-white/10 focus:ring-4 focus:ring-sky-400/20";

  const glass =
    "border border-white/70 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(56,130,246,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]";

  return (
    <main className="pc-bg relative w-full overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 transition-colors duration-300">
      <style>{`
        @keyframes pc-rise { from { opacity:0; transform: translateY(24px);} to { opacity:1; transform: translateY(0);} }
        @keyframes pc-float { 0%,100% { transform: translate(0,0) scale(1);} 50% { transform: translate(40px,-30px) scale(1.15);} }
        @keyframes pc-shift { 0% { background-position: 0% 50%;} 50% { background-position: 100% 50%;} 100% { background-position: 0% 50%;} }
        @keyframes pc-shine { from { transform: translateX(-120%) skewX(-20deg);} to { transform: translateX(260%) skewX(-20deg);} }
        .pc-bg { background: linear-gradient(180deg, #bae6fd 0%, #e0f2fe 25%, #f0f9ff 60%, #ffffff 100%); }
        .dark .pc-bg { background: linear-gradient(180deg, #0c1a33 0%, #0b1426 40%, #020617 100%); }
        .pc-rise { opacity:0; animation: pc-rise .7s cubic-bezier(.22,1,.36,1) forwards; }
        .pc-float { animation: pc-float 10s ease-in-out infinite; }
        .pc-btn { background-size: 200% 200%; animation: pc-shift 5s ease infinite; }
        .pc-btn:hover .pc-shine { animation: pc-shine .9s ease; }
        @media (prefers-reduced-motion: reduce) {
          .pc-rise, .pc-float, .pc-btn, .pc-btn:hover .pc-shine { animation: none; opacity: 1; }
        }
      `}</style>

      {/* Page-wide blobs behind the glass so the blur shows */}
      <div
        className="pc-float pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "rgba(56,189,248,0.45)" }}
      />
      <div
        className="pc-float pointer-events-none absolute -right-20 top-1/3 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "rgba(99,102,241,0.28)", animationDelay: "-4s" }}
      />
      <div
        className="pc-float pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "rgba(34,211,238,0.30)", animationDelay: "-7s" }}
      />

      {/* Same horizontal padding/width as the navbar */}
      <section className="relative mx-auto w-full max-w-[1400px] px-6">
        {/* Heading */}
        <div className="relative text-center">
          <span
            className={`pc-rise inline-block rounded-full px-5 py-1.5 text-sm font-medium text-sky-700 dark:text-sky-300 ${glass}`}
          >
            Contact Us
          </span>
          <h1
            className="pc-rise mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Have a Project? Let&apos;s Talk
          </h1>
          <p
            className="pc-rise mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300 sm:text-base"
            style={{ animationDelay: "160ms" }}
          >
            Tell us about your project. We will get back with a clear plan.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {contactCards.map((c, i) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`pc-rise group flex items-center justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 dark:hover:bg-white/10 hover:shadow-[0_16px_40px_rgba(14,165,233,0.25)] ${glass}`}
                style={{ animationDelay: `${240 + i * 100}ms` }}
              >
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {c.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">
                    {c.text}
                  </p>
                </div>
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-lg ring-1 ring-white/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: `linear-gradient(135deg, ${c.from}, ${c.to})`,
                  }}
                >
                  {c.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className={`pc-rise rounded-2xl p-6 sm:p-8 ${glass}`}
            style={{ animationDelay: "320ms" }}
          >
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Full Name
                </label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="John Doe"
                  className={field}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="john48@gmail.com"
                  className={field}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Interested In
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={onChange}
                  className={field}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={onChange}
                  placeholder="I would like to know more about your service"
                  className={`${field} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="pc-btn group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/50 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/40"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #22d3ee, #0ea5e9, #2563eb, #0ea5e9)",
                  boxShadow:
                    "0 10px 30px rgba(14,165,233,0.4), inset 0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                <span className="pc-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md -translate-x-full" />
                Send Message
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map */}
      <div
        id="map"
        className="relative mx-auto mt-10 w-full max-w-[1400px] px-6"
      >
        <div className="overflow-hidden rounded-3xl border border-white/70 p-2 shadow-[0_8px_32px_rgba(56,130,246,0.15)] backdrop-blur-xl bg-white/40 dark:border-white/10 dark:bg-white/5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58622.23211111111!2d90.30123456789012!3d23.24567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755684070a02931%3A0x8c274903c73d286a!2sShariatpur!5e0!3m2!1sen!2sbd!4v1723135515082!5m2!1sen!2sbd"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pixel & Code office map"
          className="rounded-2xl dark:grayscale-[20%]"
        ></iframe>
        </div>
      </div>
    </main>
  );
}