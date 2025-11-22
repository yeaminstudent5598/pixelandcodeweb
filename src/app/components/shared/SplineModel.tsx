"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((m) => m.default),
  { ssr: false }
);

export default function SplineModel(props: any) {
  return <Spline {...props} />;
}
