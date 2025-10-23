"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/about-bg.jpg" // 🔁 replace with your image in /public/images/
        alt="About Us Background"
        fill
        priority
        className="object-cover brightness-50"
      />

      {/* Heading */}
      <h1 className="text-white text-5xl md:text-7xl font-light z-10 tracking-wide">
        About <span className="font-semibold">Us</span>
      </h1>
    </section>
  );
}
