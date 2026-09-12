// src/app/packages/gold/page.tsx
import { Metadata } from "next";
import { GoldClient } from "./GoldClient";

export const metadata: Metadata = {
  title: "Gold Package | Pixel & Code",
  description: "Best selling Gold Growth Package for increasing sales and branding.",
};

export default function GoldPackagePage() {
  return <GoldClient />;
}