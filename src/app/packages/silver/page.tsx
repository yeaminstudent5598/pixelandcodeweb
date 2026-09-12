// src/app/packages/silver/page.tsx
import { Metadata } from "next";
import { SilverClient } from "./SilverClient";

export const metadata: Metadata = {
  title: "Silver Package | Pixel & Code",
  description: "Start your digital journey smart and affordable with our Silver Starter Package.",
};

export default function SilverPackagePage() {
  return <SilverClient />;
}