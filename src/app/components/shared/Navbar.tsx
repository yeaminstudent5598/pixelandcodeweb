// src/app/components/shared/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
import { LogIn, Menu } from "lucide-react";

// Services data in both languages (unchanged)
const serviceComponentsBN: { title: string; href: string; description: string }[] = [
  // ... (same as original)
];

const serviceComponentsEN: { title: string; href: string; description: string }[] = [
  // ... (same as original)
];

// Logo Component with adjusted font size for mobile
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
        {/* SVG paths unchanged */}
      </svg>
      <span className="text-base font-bold sm:text-lg">
        Pixel & Code
      </span>
      {/* Changed `hidden sm:inline-block` to always show, with smaller font size on mobile */}
    </Link>
  );
}

// Main Navbar Component
export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = language
    ? {
        home: "হোম",
        services: "সার্ভিসেস",
        packages: "প্যাকেজসমূহ",
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
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                active={pathname === "/"}
                className={navigationMenuTriggerStyle()}
              >
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
              <NavigationMenuLink
                asChild
                active={pathname === "/packages"}
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/packages">{t.packages}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                active={pathname === "/portfolio"}
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/portfolio">{t.portfolio}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                active={pathname === "/about"}
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">{t.about}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                active={pathname === "/contact"}
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/contact">{t.contact}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          {/* Language Toggle for Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-sm font-medium select-none">{language ? "BN" : "EN"}</span>
            <Switch
              checked={language}
              onCheckedChange={(checked) => setLanguage(Boolean(checked))}
              aria-label="Toggle language"
            />
          </div>

          {/* Login Button */}
          <Button
            asChild
            className="bg-orange-500 text-white hover:bg-orange-600 sm:flex text-sm px-3 py-1 h-9"
          >
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" />
              <span>{t.login}</span>
            </Link>
          </Button>
          {/* Adjusted button size for mobile with `text-sm`, `px-3`, `py-1`, `h-9` */}

          {/* Mobile Menu (Hamburger Icon) */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden h-10 w-10"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[300px] sm:w-[400px] overflow-y-auto">
              {/* Added `overflow-y-auto` for scrollable content */}
              <SheetHeader className="p-6">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation menu for the website.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-6 pb-6">
                <Logo />
                <nav className="flex flex-col gap-2">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="rounded-md px-4 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.home}
                    </Link>
                  </SheetClose>
                  <p className="px-4 py-3 text-lg font-semibold">{t.services}</p>
                  {serviceComponents.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="rounded-md px-6 py-3 text-base font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link
                      href="/packages"
                      className="rounded-md px-4 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.packages}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/portfolio"
                      className="rounded-md px-4 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.portfolio}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/about"
                      className="rounded-md px-4 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.about}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className="rounded-md px-4 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.contact}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/login"
                      className="rounded-md px-4 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.login}
                    </Link>
                  </SheetClose>
                  <div className="mt-4">
                    <div className="flex items-center justify-between rounded-md border p-4">
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
  );
}

// Dropdown ListItem Component (unchanged)
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