import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Pixel & Code",
  description:
    "Websites, e-commerce platforms, graphics designs and marketing campaigns delivered by Pixel & Code.",
  alternates: {
    canonical: "https://pixelandcode.agency/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}