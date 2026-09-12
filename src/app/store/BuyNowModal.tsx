"use client";

<<<<<<< HEAD
import {
  Dialog, DialogContent, DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingBag, Phone, MessageCircle, ShieldCheck, X, Zap } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/* ─── Styles ─────────────────────────────────────────────────────── */
const MODAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  .bnm-root    { font-family:'DM Sans',sans-serif; }
  .bnm-display { font-family:'Syne',sans-serif !important; }
  @keyframes bnm-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(249,115,22,.5)} 50%{box-shadow:0 0 0 8px rgba(249,115,22,0)} }
  @keyframes bnm-gradX { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  .bnm-grad-text {
    background:linear-gradient(135deg,#f97316 0%,#ef4444 50%,#f59e0b 100%);
    background-size:200% 200%;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text; animation:bnm-gradX 4s ease infinite;
  }
`;
=======
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingBag, Phone, MessageCircle } from "lucide-react";
>>>>>>> origin/development

interface BuyNowModalProps {
  productName: string;
  price: number;
}

export function BuyNowModal({ productName, price }: BuyNowModalProps) {
<<<<<<< HEAD
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  const waMsg  = `Hello, I want to buy "${productName}" (Price: $${price}). Please guide me.`;
  const waLink = `https://wa.me/8801641801705?text=${encodeURIComponent(waMsg)}`;

  return (
    <>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: MODAL_STYLES }} />

      <Dialog open={open} onOpenChange={setOpen}>
        {/* Trigger */}
        <DialogTrigger asChild>
          <button
            className="bnm-display"
            style={{
              width: '100%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: 10,
              padding: '14px 24px', borderRadius: 12,
              background: 'linear-gradient(135deg,#ea580c 0%,#f97316 100%)',
              color: '#fff', fontSize: 15, fontWeight: 800,
              letterSpacing: '.04em', border: 'none', cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(249,115,22,.35)',
              transition: 'all .25s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 40px rgba(249,115,22,.55)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(249,115,22,.35)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
            }}
          >
            <ShoppingBag style={{ width: 18, height: 18 }} />
            {language ? 'এখনই কিনুন' : 'Buy Now'}
          </button>
        </DialogTrigger>

        {/* Modal */}
        <DialogContent
          className="bnm-root p-0 overflow-hidden"
          style={{
            maxWidth: 460,
            background: '#0e0e0e',
            border: '1px solid rgba(249,115,22,.20)',
            borderRadius: 20,
            boxShadow: '0 40px 80px rgba(0,0,0,.7), 0 0 0 1px rgba(249,115,22,.06) inset',
          }}
        >
          {/* Top orange line */}
          <div style={{
            height: 2, width: '100%',
            background: 'linear-gradient(to right, transparent, #f97316 40%, #ef4444 60%, transparent)',
          }} />

          {/* Header */}
          <div style={{ padding: '28px 28px 20px', textAlign: 'center', position: 'relative' }}>
            {/* Glow orb */}
            <div style={{
              position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)',
              width: 200, height: 120,
              background: 'radial-gradient(ellipse, rgba(249,115,22,.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Icon badge */}
            <div style={{
              width: 52, height: 52, borderRadius: 14, margin: '0 auto 16px',
              background: 'rgba(249,115,22,.10)',
              border: '1px solid rgba(249,115,22,.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              animation: 'bnm-pulse 2.5s ease-in-out infinite',
            }}>
              <ShoppingBag style={{ width: 22, height: 22, color: '#f97316' }} />
            </div>

            <h2 className="bnm-display" style={{
              fontSize: 22, fontWeight: 900, color: '#fff',
              lineHeight: 1.1, marginBottom: 8,
            }}>
              {language ? 'অর্ডার কনফার্ম করুন' : 'Confirm Your Order'}
            </h2>

            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.42)', lineHeight: 1.6 }}>
              {language
                ? 'সরাসরি সাপোর্টের মাধ্যমে অর্ডার করুন — দ্রুত ও নিরাপদ।'
                : 'Order directly via support — fast and secure delivery.'}
            </p>
          </div>

          {/* Product info pill */}
          <div style={{ padding: '0 28px 20px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px', borderRadius: 12,
              background: 'rgba(255,255,255,.03)',
              border: '1px solid rgba(255,255,255,.07)',
            }}>
              <div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.30)', marginBottom: 3, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  {language ? 'পণ্য' : 'Product'}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', maxWidth: 220 }}
                  className="bnm-display line-clamp-1">
                  {productName}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.30)', marginBottom: 3, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  {language ? 'মূল্য' : 'Price'}
                </div>
                <div className="bnm-display" style={{ fontSize: 20, fontWeight: 900, color: '#f97316' }}>
                  ${price.toLocaleString()}
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,.30)', fontWeight: 500, marginLeft: 2 }}>USD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ padding: '0 28px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>

            {/* WhatsApp */}
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '14px', borderRadius: 12,
                background: 'linear-gradient(135deg,#16a34a 0%,#22c55e 100%)',
                color: '#fff', fontSize: 14, fontWeight: 800,
                letterSpacing: '.03em', textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(34,197,94,.30)',
                transition: 'box-shadow .25s, transform .2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 32px rgba(34,197,94,.45)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(34,197,94,.30)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              <MessageCircle style={{ width: 20, height: 20 }} />
              {language ? 'WhatsApp-এ অর্ডার করুন' : 'Order via WhatsApp'}
            </a>

            {/* Divider */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '4px 0',
            }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.07)' }} />
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,.20)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
                {language ? 'অথবা কল করুন' : 'or call us'}
              </span>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.07)' }} />
            </div>

            {/* Phone */}
            <a href="tel:+8801989415813"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '13px', borderRadius: 12,
                background: 'rgba(255,255,255,.04)',
                border: '1px solid rgba(255,255,255,.09)',
                color: 'rgba(255,255,255,.75)', fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
                transition: 'all .25s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = 'rgba(249,115,22,.35)';
                el.style.color = '#fb923c';
                el.style.background = 'rgba(249,115,22,.06)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = 'rgba(255,255,255,.09)';
                el.style.color = 'rgba(255,255,255,.75)';
                el.style.background = 'rgba(255,255,255,.04)';
              }}
            >
              <Phone style={{ width: 17, height: 17 }} />
              +880 1989-415813
            </a>
          </div>

          {/* Security badge */}
          <div style={{
            margin: '0 28px 28px',
            display: 'flex', alignItems: 'flex-start', gap: 12,
            padding: '14px 16px', borderRadius: 12,
            background: 'rgba(249,115,22,.06)',
            border: '1px solid rgba(249,115,22,.14)',
          }}>
            <ShieldCheck style={{ width: 18, height: 18, color: '#f97316', flexShrink: 0, marginTop: 1 }} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#f97316', marginBottom: 3 }}>
                {language ? 'নিরাপদ পেমেন্ট ও ডেলিভারি' : 'Secure Payment & Delivery'}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.38)', lineHeight: 1.6 }}>
                {language
                  ? 'পেমেন্ট নিশ্চিত হওয়ার ১–২ ঘণ্টার মধ্যে সোর্স কোড বা অ্যাক্সেস প্রদান করা হয়।'
                  : 'Source code or access is delivered within 1–2 hours after payment confirmation.'}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
=======
  // WhatsApp মেসেজ এর জন্য লিংক জেনারেট
  const whatsappMessage = `Hello Pixel & Code, I am interested in buying the "${productName}" website (Price: ${price} TK). Please let me know the process.`;
  const whatsappLink = `https://wa.me/8801989415813?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Dialog>
      {/* এই বাটনটি পেজে দেখা যাবে */}
      <DialogTrigger asChild>
        <Button size="lg" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-base font-semibold h-11 sm:h-12">
          <ShoppingBag className="mr-2 h-5 w-5" /> Buy Now
        </Button>
      </DialogTrigger>

      {/* মডাল কন্টেন্ট */}
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 border dark:border-gray-800 dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-gray-800 dark:text-white">
            Order Process
          </DialogTitle>
          <DialogDescription className="text-center pt-2 text-gray-600 dark:text-gray-400">
            এই ওয়েবসাইটটি অর্ডার করার জন্য আমাদের সাপোর্ট টিমের সাথে সরাসরি যোগাযোগ করুন। আমরা আপনাকে পেমেন্ট এবং সেটআপ এর ব্যাপারে সাহায্য করবো।
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* WhatsApp Button */}
          <Button
            asChild
            className="w-full bg-green-500 hover:bg-green-600 text-white h-14 text-lg font-semibold dark:bg-green-600 dark:hover:bg-green-700"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              WhatsApp এ মেসেজ দিন
            </a>
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                Or Call Us
              </span>
            </div>
          </div>

          {/* Call Button */}
          <Button
            asChild
            variant="outline"
            className="w-full border-2 border-blue-100 hover:bg-blue-50 dark:border-gray-700 dark:hover:bg-gray-800 h-14 text-lg font-semibold text-gray-800 dark:text-white"
          >
            <a href="tel:+8801641801705">
              <Phone className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
              +880 1641-801705
            </a>
          </Button>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
            <p>Support Time: 10:00 AM - 10:00 PM</p>
        </div>
      </DialogContent>
    </Dialog>
>>>>>>> origin/development
  );
}