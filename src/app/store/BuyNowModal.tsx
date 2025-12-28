"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingBag, Phone, MessageCircle, ShieldCheck } from "lucide-react";

interface BuyNowModalProps {
  productName: string;
  price: number;
}

export function BuyNowModal({ productName, price }: BuyNowModalProps) {
  const whatsappMessage = `Hello, I want to buy "${productName}" (Price: ${price} TK). Please guide me.`;
  const whatsappLink = `https://wa.me/8801641801705?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold h-12 shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]">
          <ShoppingBag className="mr-2 h-5 w-5" /> Buy Now
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-white dark:bg-slate-900 border-none shadow-2xl">
        <DialogHeader className="space-y-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <DialogTitle className="text-center text-2xl font-black text-slate-900 dark:text-white">
            অর্ডার কনফার্ম করুন
          </DialogTitle>
          <DialogDescription className="text-center text-slate-600 dark:text-slate-400">
            আমরা সরাসরি সাপোর্টের মাধ্যমে অর্ডার প্রসেস করি। আপনার পছন্দের মাধ্যমটি বেছে নিন।
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-6">
          <Button
            asChild
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 text-lg font-bold rounded-xl shadow-lg shadow-green-500/20"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              WhatsApp এ অর্ডার করুন
            </a>
          </Button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200 dark:border-slate-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-900 px-2 text-slate-500">
                অথবা কল করুন
              </span>
            </div>
          </div>

          <Button
            asChild
            variant="outline"
            className="w-full border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 h-14 text-lg font-bold text-slate-800 dark:text-white rounded-xl"
          >
            <a href="tel:+8801641801705">
              <Phone className="mr-2 h-5 w-5" />
              +880 1989-415813
            </a>
          </Button>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-800 dark:text-blue-300">
                <p className="font-bold mb-1">নিরাপদ পেমেন্ট ও ডেলিভারি</p>
                <p>পেমেন্ট কনফার্ম করার ১-২ ঘণ্টার মধ্যে আমরা সোর্স কোড বা অ্যাক্সেস বুঝিয়ে দিই।</p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}