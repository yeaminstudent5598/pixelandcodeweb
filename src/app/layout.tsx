import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google"; // Roboto এর পরিবর্তে Hind_Siliguri import করা হয়েছে
import "./globals.css";
import { Navbar } from "./components/shared/Navbar";
import { Footer } from "./components/shared/Footer";

// Hind Siliguri ফন্ট কনফিগার করা হয়েছে
const hindSiliguri = Hind_Siliguri({
  weight: ["400", "700"],
  subsets: ["bengali"], // বাংলা অক্ষরের জন্য 'bengali' subset ব্যবহার করা হয়েছে
  variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
  title: "Pixel & Code - Web Agency",
  description: "We Code, We Design and We Edit",
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // নতুন ফন্ট variable টি এখানে যুক্ত করা হয়েছে
    <html lang="en" className={hindSiliguri.variable}>
      <body className="antialiased bg-background text-foreground font-sans">
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
