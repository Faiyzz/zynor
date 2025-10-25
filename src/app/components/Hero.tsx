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

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yDesk = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityShapes = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-white flex flex-col min-h-screen"
      aria-label="Hero"
      style={{ paddingTop: "calc(96px + env(safe-area-inset-top))" }}
    >
      {/* CONTENT WRAPPER */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col-reverse items-center gap-10 px-4 md:grid md:grid-cols-2 md:items-center md:gap-8 md:px-6 lg:px-8">

        {/* LEFT / TEXT */}
        <div className="w-full md:order-1 md:text-left text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`
              font-bold leading-[1.05] tracking-tight text-gray-900
              text-[2.2rem] sm:text-5xl lg:text-6xl
              max-w-xl mx-auto md:mx-0
            `}
          >
            The{" "}
            <span
              className="font-extrabold text-[var(--color-accent)]"
              style={{
                WebkitTextStroke: "0.5px var(--color-accent)",
              }}
            >
              right team
            </span>{" "}
            is everything.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className={`
              mt-4 max-w-xl mx-auto md:mx-0
              text-base sm:text-lg text-gray-700
              leading-relaxed font-semibold
            `}
          >
            Austin-based, award-winning engineering studio delivering custom
            software and expert witness services. We build, modernize, and
            scale the products that move your business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className={`
              mt-8 flex flex-col sm:flex-row flex-wrap
              items-center justify-center md:justify-start
              gap-3
            `}
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-8px_rgba(108,24,152,0.45)] transition active:scale-[.98] bg-[var(--color-accent)]"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT / MOCKUP (hidden on mobile) */}
       {/* RIGHT / MOCKUP (hidden on mobile) */}
<div className="w-full md:order-2 md:block hidden">
  <div className="relative mx-auto aspect-[4/3] w-full max-w-[720px]">
    <motion.div
      style={{ y: yDesk, opacity: opacityShapes }}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="absolute inset-x-0 bottom-0 mx-auto w-[88%] max-w-[860px] origin-bottom
                 rounded-[22px] border-none bg-transparent backdrop-blur-0 shadow-none"
    >
      <div className="relative w-full overflow-visible rounded-[22px] ring-0">
        <Image
          src="/images/heroo.png"
          alt="Product dashboard"
          width={1440}
          height={900}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </motion.div>
  </div>
</div>

      </div>

      {/* soft fade bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[88px] h-24 bg-gradient-to-b from-transparent to-white sm:bottom-[96px]" />

      {/* CLIENT MARQUEE */}
      <div className="w-full bg-white">
        <p className="mx-auto max-w-7xl px-4 pt-8 text-center text-[10px] sm:text-[11px] tracking-[0.2em] text-gray-500 md:px-6 lg:px-8 font-semibold">
          HUNDREDS OF HAPPY CLIENTS
        </p>

       {/* <div className="w-full overflow-hidden">
          <ClientsMarquee
            logos={logos}
            speed={28}
            direction="left"
            grayscale
            className="mt-4"
          />
        </div>*/}
      </div>
    </section>
  );
}
