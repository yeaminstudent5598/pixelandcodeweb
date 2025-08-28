// src/components/shared/HeroSection.tsx
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative h-auto w-full">
        <Image
          src="/Banner_Pixel_&_Code.jpg" 
          alt="Pixel & Code promotional banner"
          width={1920} 
          height={640}
          layout="responsive"
          priority
        />
      </div>
    </section>
  );
}
