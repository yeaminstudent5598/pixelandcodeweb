// src/app/packages/diamond/page.tsx
import { Metadata } from "next";
import { DiamondClient } from "./DiamondClient";

export const metadata: Metadata = {
  title: "Diamond Package | Pixel & Code",
  description: "Ultimate Diamond Pro Package for massive branding and maximum reach.",
};

export default function DiamondPackagePage() {
  return <DiamondClient />;
}