// src/components/shared/Footer.tsx
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Mountain,
  Phone,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "হোম" },
  { href: "/services", label: "সার্ভিসেস" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/contact", label: "যোগাযোগ" },
  { href: "/blog", label: "ব্লগ" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

const socialLinks = [
  { href: "#", icon: <Facebook />, label: "Facebook" },
  { href: "#", icon: <Twitter />, label: "Twitter" },
  { href: "#", icon: <Instagram />, label: "Instagram" },
  { href: "#", icon: <Linkedin />, label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 text-gray-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & About */}
          <div className="flex flex-col">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Mountain className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900">
                Pixel & Code
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              আমরা আপনার ব্যবসাকে ডিজিটাল প্ল্যাটফর্মে সফলভাবে প্রতিষ্ঠিত করতে
              প্রয়োজনীয় সকল সেবা প্রদান করি।
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-full bg-gray-200 p-2 text-gray-600 transition-colors hover:bg-orange-500 hover:text-white"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              কুইক লিংকস
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-orange-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              লিগ্যাল
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-orange-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              যোগাযোগ করুন
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                <span>
                  ১২৩ মেইন রোড, ময়মনসিংহ, <br />
                  বাংলাদেশ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-orange-500" />
                <a
                  href="mailto:info@pixelandcode.com"
                  className="transition-colors hover:text-orange-500"
                >
                  info@pixelandcode.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-orange-500" />
                <a
                  href="tel:+8801234567890"
                  className="transition-colors hover:text-orange-500"
                >
                  +৮৮০ ১২৩৪-৫৬৭৮৯০
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} Pixel & Code. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
