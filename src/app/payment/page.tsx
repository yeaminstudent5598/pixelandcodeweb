// src/app/payment/page.tsx
import { Metadata } from "next";
import { PaymentClient } from "./PaymentClient";

export const metadata: Metadata = {
  title: "Payment | Pixel & Code",
  description: "Complete your payment securely via Mobile Banking or contact us for Bank transfers.",
};

export default function PaymentPage() {
  return (
    <main className="w-full bg-gray-50 dark:bg-black py-20 sm:py-28 transition-colors duration-300">
      <PaymentClient />
    </main>
  );
}