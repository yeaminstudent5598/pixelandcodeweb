"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Check, Mail, MessageCircle, Sparkles } from "lucide-react";

// Contact page er sathe same
const WHATSAPP = "8801641801705";
const EMAIL = "pixelandcode07@gmail.com";

const services = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Graphic Design",
  "Video Editing",
  "Digital Marketing",
  "SEO",
];

const BENEFITS = [
  "Free consultation",
  "A clear plan and timeline",
  "No commitment",
];

type Props = {
  open: boolean;
  onClose: () => void;
};

const emptyForm = { name: "", email: "", service: "", message: "" };

/* ─────────────────────────────────────────────
   Styles
   Layout / position / size sob ekhane (Tailwind er upor depend kore na)
───────────────────────────────────────────── */
const CSS = `
  .rdm-backdrop {
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 9999;
    display: flex;
    overflow-y: auto;
    padding: 16px;
    box-sizing: border-box;
    background: rgba(15, 23, 42, 0.55);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }

  .rdm-dialog {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 480px;
    margin: auto;
    border-radius: 24px;
    overflow: hidden;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid rgba(148, 163, 184, 0.35);
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.35);
  }
  .dark .rdm-dialog {
    background: #0a1220;
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  }

  /* ---------- Left panel (desktop only) ---------- */
  .rdm-aside {
    display: none;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    padding: 40px 36px;
    overflow: hidden;
    color: #ffffff;
    background: linear-gradient(160deg, #38bdf8 0%, #3b82f6 100%);
  }
  .rdm-aside-sheen {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    pointer-events: none;
    background: linear-gradient(135deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0) 70%);
  }
  .rdm-aside-ring {
    position: absolute;
    right: -70px; bottom: -70px;
    width: 220px; height: 220px;
    border-radius: 50%;
    border: 36px solid rgba(255, 255, 255, 0.14);
    pointer-events: none;
  }
  .rdm-aside-inner { position: relative; }
  .rdm-aside-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.45);
  }
  .rdm-aside-title {
    margin: 20px 0 0;
    font-size: 30px;
    line-height: 1.15;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
  .rdm-aside-text {
    margin: 14px 0 0;
    font-size: 14.5px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.92);
  }
  .rdm-benefits {
    margin: 24px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .rdm-benefits li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #ffffff;
  }
  .rdm-check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px; height: 20px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.5);
    flex-shrink: 0;
  }
  .rdm-contact {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 22px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }
  .rdm-contact a {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13.5px;
    color: #ffffff;
    text-decoration: none;
    word-break: break-all;
  }
  .rdm-contact a:hover { text-decoration: underline; }

  /* ---------- Right panel (form) ---------- */
  .rdm-main {
    position: relative;
    padding: 28px 24px 24px;
    box-sizing: border-box;
  }
  .rdm-close {
    position: absolute;
    top: 14px; right: 14px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px; height: 36px;
    border-radius: 50%;
    cursor: pointer;
    color: #64748b;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;
  }
  .rdm-close:hover { color: #0284c7; border-color: #38bdf8; }
  .dark .rdm-close {
    color: #cbd5e1;
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.14);
  }
  .dark .rdm-close:hover { color: #7dd3fc; border-color: rgba(56, 189, 248, 0.6); }

  .rdm-title {
    margin: 0;
    padding-right: 44px;
    font-size: 22px;
    line-height: 1.25;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: #0f172a;
  }
  .dark .rdm-title { color: #ffffff; }

  .rdm-sub {
    margin: 6px 0 0;
    font-size: 14px;
    line-height: 1.6;
    color: #64748b;
  }
  .dark .rdm-sub { color: #94a3b8; }

  .rdm-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 22px;
  }

  .rdm-label {
    display: block;
    margin-bottom: 6px;
    font-size: 13px;
    font-weight: 500;
    color: #334155;
  }
  .dark .rdm-label { color: #cbd5e1; }

  .rdm-input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 14px;
    font-size: 14px;
    font-family: inherit;
    line-height: 1.4;
    color: #0f172a;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .rdm-input::placeholder { color: #94a3b8; }
  .rdm-input:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.2);
  }
  textarea.rdm-input { resize: none; }

  .dark .rdm-input {
    color: #f1f5f9;
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.14);
  }
  .dark .rdm-input::placeholder { color: #64748b; }
  .dark .rdm-input option { color: #f1f5f9; background: #0a1220; }

  .rdm-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    margin-top: 4px;
    padding: 14px 24px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.02em;
    cursor: pointer;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    background: linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%);
    box-shadow: 0 10px 30px rgba(14, 165, 233, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);
    transition: transform 0.2s ease, filter 0.2s ease;
  }
  .rdm-submit:hover { transform: translateY(-2px); filter: brightness(1.08); }
  .rdm-submit:focus-visible { outline: none; box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.4); }

  .rdm-note {
    margin: 12px 0 0;
    text-align: center;
    font-size: 12px;
    color: #94a3b8;
  }

  /* ---------- Desktop ---------- */
  @media (min-width: 768px) {
    .rdm-backdrop { padding: 32px; }
    .rdm-dialog {
      max-width: 880px;
      grid-template-columns: 0.8fr 1.2fr;
    }
    .rdm-aside { display: flex; }
    .rdm-main { padding: 40px 40px 32px; }
    .rdm-title { font-size: 24px; }
  }
`;

export function RequestDemoModal({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Esc diye bondho + pichoner scroll lock + first field e focus
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = setTimeout(() => firstFieldRef.current?.focus(), 200);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(focusTimer);
    };
  }, [open, onClose]);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  // Contact page er moto: WhatsApp e message khole
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Demo Request\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`;

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setForm(emptyForm);
    onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="rdm-backdrop"
          className="rdm-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            // shudhu dhushor (backdrop) e click korle bondho hobe
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <style>{CSS}</style>

          <motion.div
            className="rdm-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rdm-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* ───── Left panel (desktop) ───── */}
            <aside className="rdm-aside" aria-hidden="false">
              <div className="rdm-aside-sheen" />
              <div className="rdm-aside-ring" />

              <div className="rdm-aside-inner">
                <span className="rdm-aside-badge">
                  <Sparkles size={13} color="#ffffff" />
                  Request For Demo
                </span>

                <h2 className="rdm-aside-title">
                  Let&apos;s build something great together
                </h2>

                <p className="rdm-aside-text">
                  Tell us about your project and we will get back with a clear
                  plan.
                </p>

                <ul className="rdm-benefits">
                  {BENEFITS.map((b) => (
                    <li key={b}>
                      <span className="rdm-check">
                        <Check size={12} color="#ffffff" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rdm-contact">
                <a href={`mailto:${EMAIL}`}>
                  <Mail size={16} color="#ffffff" />
                  {EMAIL}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} color="#ffffff" />
                  +{WHATSAPP}
                </a>
              </div>
            </aside>

            {/* ───── Right panel (form) ───── */}
            <div className="rdm-main">
              <button
                type="button"
                className="rdm-close"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <h3 id="rdm-title" className="rdm-title">
                Request a demo
              </h3>
              <p className="rdm-sub">
                Fill in your details and we will contact you.
              </p>

              <form onSubmit={onSubmit} className="rdm-form">
                <div>
                  <label htmlFor="rdm-name" className="rdm-label">
                    Full Name
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="rdm-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder="John Doe"
                    autoComplete="name"
                    className="rdm-input"
                  />
                </div>

                <div>
                  <label htmlFor="rdm-email" className="rdm-label">
                    Email
                  </label>
                  <input
                    id="rdm-email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="john48@gmail.com"
                    autoComplete="email"
                    className="rdm-input"
                  />
                </div>

                <div>
                  <label htmlFor="rdm-service" className="rdm-label">
                    Interested In
                  </label>
                  <select
                    id="rdm-service"
                    name="service"
                    required
                    value={form.service}
                    onChange={onChange}
                    className="rdm-input"
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
                  <label htmlFor="rdm-message" className="rdm-label">
                    Your Message
                  </label>
                  <textarea
                    id="rdm-message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={onChange}
                    placeholder="I would like to know more about your service"
                    className="rdm-input"
                  />
                </div>

                <button type="submit" className="rdm-submit">
                  Send Message
                  <Send size={16} color="#ffffff" />
                </button>
              </form>

              <p className="rdm-note">
                Your message opens in WhatsApp so you can send it to us.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default RequestDemoModal;