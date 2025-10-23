"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ClientsMarquee from "./ClientsMarquee";
import { useRef } from "react";

const logos = [
  { src: "/logos/pinterest.svg", alt: "Pinterest" },
  { src: "/logos/sony.svg", alt: "Sony" },
  { src: "/logos/apple.svg", alt: "Apple" },
  { src: "/logos/yelp.svg", alt: "Yelp" },
  { src: "/logos/dropbox.svg", alt: "Dropbox" },
  { src: "/logos/yahoo.svg", alt: "Yahoo" },
  { src: "/logos/ford.svg", alt: "Ford" },
  { src: "/logos/aa.svg", alt: "American Airlines" },
  { src: "/logos/generalmills.svg", alt: "General Mills" },
  { src: "/logos/dell.svg", alt: "Dell" },
  { src: "/logos/marriott.svg", alt: "Marriott" },
  { src: "/logos/chevron.svg", alt: "Chevron" },
];

const ACCENT = "rgb(59, 130, 246)"; // blue-500

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yDesk = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityShapes = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-white min-h-screen flex flex-col"
      aria-label="Hero"
      style={{ paddingTop: "calc(96px + env(safe-area-inset-top))" }}
    >
     
    

      {/* Main content (centered, max-width) */}
      <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-8 md:px-6 lg:px-8">
        {/* Left: copy */}
        <div className="order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            The <span className="font-extrabold">right team</span> is everything
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            Austin-based, award-winning engineering studio delivering custom software and
            expert witness services. We build, modernize, and scale the products that move
            your business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition active:scale-[.98]"
              style={{ backgroundColor: ACCENT, boxShadow: "0 8px 20px rgba(59,130,246,.24)" }}
            >
              Contact us
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400"
            >
              Learn more
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Right: floating mockup */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[720px]">
            <motion.div
              style={{ y: yDesk }}
              initial={{ opacity: 0, scale: 0.98, rotate: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-x-0 bottom-0 mx-auto w-[88%] max-w-[860px] origin-bottom rounded-[22px] border border-gray-200/70 bg-white/90 shadow-[0_30px_80px_-20px_rgba(2,6,23,.25)] backdrop-blur"
            >
              <div className="relative w-full overflow-hidden rounded-[22px]">
                <Image
                  src="/images/desktophero.png"
                  alt="Product dashboard"
                  width={1440}
                  height={900}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Optional bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[88px] h-24 bg-gradient-to-b from-transparent to-white sm:bottom-[96px]" />

      {/* Bottom-of-section, full-bleed marquee */}
      <div className="w-full bg-white">
        <p className="mx-auto max-w-7xl px-4 pt-8 text-center text-[11px] tracking-[0.2em] text-gray-500 md:px-6 lg:px-8">
          HUNDREDS OF HAPPY CLIENTS
        </p>

        {/* Full width across the viewport */}
        <div className="w-full">
          <ClientsMarquee
            logos={logos}
            speed={28}
            direction="left"
            grayscale
            className="mt-4"
          />
        </div>
      </div>
    </section>
  );
}
