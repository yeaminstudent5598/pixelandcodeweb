// src/app/contact/page.tsx
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import React from "react";

// যোগাযোগের তথ্যগুলোর ডেটা (আপডেট করা হয়েছে)
const contactInfo = [
  {
    icon: <Phone className="h-8 w-8 text-white" />,
    title: "মোবাইল",
    lines: ["+8801641801705", "+8801641801705"],
    bgColor: "bg-orange-500",
  },
  {
    icon: <Mail className="h-8 w-8 text-white" />,
    title: "ই-মেইল",
    lines: ["pixelandcode07@gmail.com"],
    bgColor: "bg-red-500",
  },
  {
    icon: <MapPin className="h-8 w-8 text-white" />,
    title: "অফিস",
    lines: ["শরীয়তপুর সদর, শরীয়তপুর,", "বাংলাদেশ - ৮০০০"],
    bgColor: "bg-blue-500",
  },
  {
    icon: <Facebook className="h-8 w-8 text-white" />,
    title: "ফেসবুক পেইজ",
    lines: ["Pixel & Code"],
    bgColor: "bg-sky-600",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-white" />,
    title: "মেসেঞ্জার",
    lines: ["Pixel & Code"],
    bgColor: "bg-purple-500",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-white" />,
    title: "হোয়াটসঅ্যাপ",
    lines: ["+8801641801705"],
    bgColor: "bg-green-500",
  },
];

export default function ContactPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-gray-950 py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white md:text-5xl">
            যোগাযোগ
          </h1>
        </div>

        {/* যোগাযোগের তথ্য কার্ড */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-md dark:shadow-gray-900/50 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div
                className={`mr-5 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full ${item.bgColor}`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <div className="mt-1 text-base text-gray-600 dark:text-gray-300">
                  {item.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* গুগল ম্যাপ (আপডেট করা হয়েছে) */}
        <div className="mt-20 overflow-hidden rounded-lg shadow-lg dark:shadow-gray-900/50 border dark:border-gray-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58622.23211111111!2d90.30123456789012!3d23.24567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755684070a02931%3A0x8c274903c73d286a!2sShariatpur!5e0!3m2!1sen!2sbd!4v1723135515082!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0%] dark:grayscale-[20%] transition-all duration-300"
          ></iframe>
        </div>
      </div>
    </main>
  );
}