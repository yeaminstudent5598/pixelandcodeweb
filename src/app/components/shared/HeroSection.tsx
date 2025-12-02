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
          priority // এটা সবচেয়ে গুরুত্বপূর্ণ image
          quality={75} // Quality কমিয়ে দিন (default 75-80 best)
          placeholder="blur" // blur effect দিবে
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCgAA//2Q=="
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}