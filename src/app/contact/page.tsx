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

// যোগাযোগের তথ্যগুলোর ডেটা
const contactInfo = [
  {
    icon: <Phone className="h-8 w-8 text-white" />,
    title: "মোবাইল",
    lines: ["01922-226558", "01319-987257"],
    bgColor: "bg-orange-500",
  },
  {
    icon: <Mail className="h-8 w-8 text-white" />,
    title: "ই-মেইল",
    lines: ["support@moasbd.com", "sales@moasbd.com"],
    bgColor: "bg-red-500",
  },
  {
    icon: <MapPin className="h-8 w-8 text-white" />,
    title: "অফিস",
    lines: ["৩৮/এ আর. কে. মিশন রোড,", "ময়মনসিংহ, বাংলাদেশ"],
    bgColor: "bg-blue-500",
  },
  {
    icon: <Facebook className="h-8 w-8 text-white" />,
    title: "ফেসবুক পেইজ",
    lines: ["MOAS BD"],
    bgColor: "bg-sky-600",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-white" />,
    title: "মেসেঞ্জার",
    lines: ["MOAS BD"],
    bgColor: "bg-purple-500",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-white" />,
    title: "হোয়াটসঅ্যাপ",
    lines: ["017922-226558"],
    bgColor: "bg-green-500",
  },
];

export default function ContactPage() {
  return (
    <main className="w-full bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
            যোগাযোগ
          </h1>
        </div>

        {/* যোগাযোগের তথ্য কার্ড */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div
                className={`mr-5 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full ${item.bgColor}`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <div className="mt-1 text-base text-gray-600">
                  {item.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* গুগল ম্যাপ */}
        <div className="mt-20 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.502159892787!2d90.40523861500001!3d24.6067729841755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f4a4f4b4c4d%3A0x4d4d4d4d4d4d4d4d!2s38a%20Ram%20Krishna%20Mission%20Rd%2C%20Mymensingh%202200!5e0!3m2!1sen!2sbd!4v1678886400000!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
