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
import { ShoppingBag, Phone, MessageCircle } from "lucide-react";

interface BuyNowModalProps {
  productName: string;
  price: number;
}

export function BuyNowModal({ productName, price }: BuyNowModalProps) {
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
  );
}