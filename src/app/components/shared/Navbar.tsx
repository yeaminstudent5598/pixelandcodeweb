"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/context/LanguageContext";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  LogIn,
  Menu,
  ChevronDown,
  ChevronUp,
  Search, // <-- নতুন আইকন
  Home, // <-- নতুন আইকন
  Briefcase, // <-- নতুন আইকন
  Package, // <-- নতুন আইকন
  Mail, // <-- নতুন আইকন
} from "lucide-react";

// Services data (কোনো পরিবর্তন নেই)
const serviceComponentsBN: { title: string; href: string; description: string }[] =
  [
    // ... আপনার সার্ভিস ...
  ];
const serviceComponentsEN: { title: string; href: string; description: string }[] =
  [
    // ... আপনার সার্ভিস ...
  ];

// Logo Component (কোনো পরিবর্তন নেই)
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg
        className="h-8 w-8 text-blue-600"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2047.88 1852.16"
      >
        {/* ... আপনার SVG পাথ ... */}
      </svg>
      <span className="hidden text-lg font-bold sm:inline-block">
        Pixel & Code
      </span>
    </Link>
  );
}

// *** নতুন: মোবাইল বটম নেভিগেশনের জন্য আইটেম কম্পোনেন্ট ***
function BottomNavItem({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors",
        active ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
      )}
    >
      <Icon className="h-6 w-6" />
      <span>{label}</span>
    </Link>
  );
}

// Main Navbar Component (পরিবর্তিত)
export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = language
    ? {
        home: "হোম",
        services: "সার্ভিসেস",
        packages: "প্যাকেজ", // সংক্ষিপ্ত করা হয়েছে
        portfolio: "পোর্টফোলিও",
        about: "আমাদের সম্পর্কে",
        contact: "যোগাযোগ",
        login: "লগ-ইন",
        languageLabel: "Language",
      }
    : {
        home: "Home",
        services: "Services",
        packages: "Packages",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
        login: "Login",
        languageLabel: "Language",
      };
  const serviceComponents = language ? serviceComponentsBN : serviceComponentsEN;

  return (
    <>
      {/* --- টপ নেভিগেশন বার (ডেস্কটপ এবং মোবাইল) --- */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          {/* লোগো (মোবাইলে শুধু আইকন দেখাবে) */}
          <Link href="/" className="flex items-center gap-2 lg:hidden">
            <svg
              className="h-8 w-8 text-blue-600"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2047.88 1852.16"
            >
              {/* ... আপনার SVG পাথ ... */}
            </svg>
          </Link>
          
          {/* ডেস্কটপ লোগো (পুরোটা) */}
          <div className="hidden lg:block">
            <Logo />
          </div>


          {/* ডেস্কটপ মেনু */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {/* ... আপনার ডেস্কটপ মেনু আইটেম (Home, Services, etc.) ... */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname === "/"} className={navigationMenuTriggerStyle()}>
                  <Link href="/">{t.home}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t.services}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {serviceComponents.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname === "/packages"} className={navigationMenuTriggerStyle()}>
                  <Link href="/packages">{t.packages}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname === "/portfolio"} className={navigationMenuTriggerStyle()}>
                  <Link href="/portfolio">{t.portfolio}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname === "/about"} className={navigationMenuTriggerStyle()}>
                  <Link href="/about">{t.about}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname === "/contact"} className={navigationMenuTriggerStyle()}>
                  <Link href="/contact">{t.contact}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* --- ডান পাশের আইকন গ্রুপ --- */}
          <div className="flex items-center gap-2">
            
            {/* ডেস্কটপ: ভাষা এবং লগইন */}
            <div className="hidden items-center gap-4 lg:flex">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium select-none">
                  {language ? "BN" : "EN"}
                </span>
                <Switch
                  checked={language}
                  onCheckedChange={(checked) => setLanguage(Boolean(checked))}
                  aria-label="Toggle language"
                />
              </div>
              <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>{t.login}</span>
                </Link>
              </Button>
            </div>

            {/* মোবাইল: সার্চ আইকন */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Button>

            {/* মোবাইল: হ্যামবার্গার মেনু */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="flex lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <SheetHeader className="p-6">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Main navigation menu for the website.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-6 px-6">
                  <Logo />
                  <nav className="flex flex-col gap-2">
                    {/* স্লাইড-ইন মেনুর লিঙ্কগুলো */}
                    <SheetClose asChild>
                      <Link href="/" className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100">{t.home}</Link>
                    </SheetClose>
                    
                    {/* মোবাইল স্লাইড-ইন মেনুতে সার্ভিসেস ড্রপডাউন */}
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full rounded-md px-3 py-2 text-lg font-semibold hover:bg-gray-100"
                      >
                        {t.services}
                        {servicesOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 pt-2 pb-1">
                          {serviceComponents.map((item) => (
                            <SheetClose asChild key={item.href}>
                              <Link
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100"
                              >
                                {item.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <SheetClose asChild>
                      <Link href="/packages" className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100">{t.packages}</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/portfolio" className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100">{t.portfolio}</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/about" className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100">{t.about}</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/contact" className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100">{t.contact}</Link>
                    </SheetClose>

                    {/* স্লাইড-ইন মেনুতে লগইন বাটন */}
                    <div className="mt-4 border-t pt-4">
                      <SheetClose asChild>
                        <Button asChild className="w-full bg-orange-500 text-white hover:bg-orange-600">
                          <Link href="/login">
                            <LogIn className="mr-2 h-4 w-4" />
                            <span>{t.login}</span>
                          </Link>
                        </Button>
                      </SheetClose>
                    </div>

                    {/* স্লাইড-ইন মেনুতে ভাষা পরিবর্তন */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between rounded-md border p-3">
                        <span className="text-sm font-medium">{t.languageLabel}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs select-none">{language ? "BN" : "EN"}</span>
                          <Switch
                            checked={language}
                            onCheckedChange={(checked) => setLanguage(Boolean(checked))}
                            aria-label="Toggle language"
                          />
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* --- *** নতুন: মোবাইল বটম নেভিগেশন বার *** --- */}
      <nav className="fixed bottom-0 z-50 w-full border-t bg-white shadow-[0_-2px_6px_rgba(0,0,0,0.06)] lg:hidden">
        <div className="mx-auto flex h-16 max-w-md items-center justify-around px-4">
          <BottomNavItem
            href="/"
            label={t.home}
            icon={Home}
            active={pathname === "/"}
          />
          <BottomNavItem
            href="/portfolio"
            label={t.portfolio}
            icon={Briefcase}
            active={pathname === "/portfolio"}
          />
          <BottomNavItem
            href="/packages"
            label={t.packages}
            icon={Package}
            active={pathname === "/packages"}
          />
          <BottomNavItem
            href="/contact"
            label={t.contact}
            icon={Mail}
            active={pathname === "/contact"}
          />
        </div>
      </nav>
    </>
  );
}

// Dropdown ListItem Component (কোনো পরিবর্তন নেই)
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";