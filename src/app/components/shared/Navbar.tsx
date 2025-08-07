// src/components/shared/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LogIn, Menu, Mountain } from "lucide-react";
import Image from "next/image";

// নেভিগেশন লিংকগুলোর জন্য একটি অ্যারে তৈরি করা হয়েছে
const navLinks = [
  { href: "/", label: "হোম" },
  { href: "/services", label: "সার্ভিসেস" },
  { href: "/certificate", label: "সার্টিফিকেট" },
  { href: "/offers", label: "অফার" },
  { href: "/blog", label: "ব্লগ" },
  { href: "/placement", label: "প্লেসমেন্ট" },
  { href: "/contact", label: "যোগাযোগ" },
];

// লোগো কম্পোনেন্ট
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* ছবির মতো একটি SVG লোগো */}
      <Mountain className="h-6 w-6 text-orange-500" />

      <span className="hidden text-lg font-bold sm:inline-block">
        Pixel & Code
      </span>
    </Link>
  );
}

// মূল নেভিগেশন বার কম্পোনেন্ট
export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />

        {/* ডেক্সটপ মেনু */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-orange-500",
                pathname === link.href
                  ? "text-orange-500"
                  : "text-slate-700",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* লগ-ইন বাটন */}
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "default" }),
              "hidden bg-orange-500 text-white hover:bg-orange-600 sm:flex",
            )}
          >
            <LogIn className="mr-2 h-4 w-4" />
            <span>লগ-ইন</span>
          </Link>

          {/* মোবাইল মেনু (হ্যামবার্গার আইকন) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Logo />
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-orange-500",
                        pathname === link.href
                          ? "text-orange-500"
                          : "text-slate-700",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "w-full bg-orange-500 text-white hover:bg-orange-600",
                  )}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>লগ-ইন</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
