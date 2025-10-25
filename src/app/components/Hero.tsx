"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
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

  const yDesk = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityShapes = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <section
      ref={ref}
      aria-label="Hero"
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-light text-dark"
      style={{ paddingTop: "calc(96px + env(safe-area-inset-top))" }}
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col-reverse items-center gap-10 px-4 md:grid md:grid-cols-2 md:items-center md:gap-10 md:px-6 lg:gap-16 lg:px-8">
        {/* LEFT / TEXT */}
        <div className="w-full md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center justify-center md:justify-start rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-[var(--color-accent)]"
          >
            CUSTOM SOFTWARE • EXPERT DELIVERY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="mx-auto max-w-xl md:mx-0 font-bold leading-[1.05] tracking-tight text-dark text-[2.5rem] sm:text-[2.8rem] lg:text-6xl xl:text-[4rem]"
          >
            The{" "}
            <span className="relative font-extrabold text-[var(--color-accent)]">
              <span
                className="relative z-[2]"
                style={{ WebkitTextStroke: "0.5px var(--color-accent)" }}
              >
                right team
              </span>

              <span
                aria-hidden
                className="absolute left-0 top-full block h-[6px] w-full rounded-full bg-[var(--color-accent)]/30 blur-[6px]"
              />
              <span
                aria-hidden
                className="absolute left-0 top-full block h-[2px] w-full rounded-full bg-[var(--color-accent)]"
              />
            </span>{" "}
            ships what matters.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            className="mt-5 mx-auto md:mx-0 max-w-xl text-base sm:text-lg leading-relaxed font-medium text-dark/70"
          >
            Austin-based, award-winning engineering studio delivering custom
            software and expert witness services. We build, modernize, and scale
            the products that move your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row md:justify-start"
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_24px_48px_-8px_rgba(108,24,152,0.55)] transition active:scale-[.98] hover:shadow-[0_32px_64px_-8px_rgba(108,24,152,0.6)]"
            >
              Contact us
            </Link>

            <Link
              href="/about"
              className="group inline-flex items-center rounded-xl border border-[var(--color-accent)]/40 bg-white/80 px-5 py-3 text-sm font-semibold text-dark/80 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] active:scale-[.98]"
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

        {/* RIGHT / MOCKUP (PNG-friendly) */}
        <div className="relative hidden w-full md:order-2 md:block">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[820px] lg:max-w-[880px]">
            {/* Accent glow behind the object */}
            <motion.div
              style={{ opacity: opacityShapes, y: yDesk, scale: scaleImg }}
              className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/20 blur-[120px]"
            />
            
            {/* PNG itself */}
            <motion.div
              style={{ y: yDesk, opacity: opacityShapes, scale: scaleImg }}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src="/images/heroo.png"
                alt="Product mockup"
                width={1600}
                height={1000}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_40px_70px_rgba(108,24,152,0.35)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* soft fade bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[88px] h-24 bg-gradient-to-b from-transparent to-[var(--color-light)] sm:bottom-[96px]" />

      <div className="w-full bg-light">
      {/*   <p className="mx-auto max-w-7xl px-4 pt-10 text-center text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-dark/40 md:px-6 lg:px-8">
          HUNDREDS OF HAPPY CLIENTS
        </p>
             If you bring this back, it's already on-brand */}
       
       {/*  <div className="w-full overflow-hidden pb-12 pt-4">
          <ClientsMarquee
            logos={logos}
            speed={28}
            direction="left"
            grayscale
            className="mt-4"
          />
        </div>
        */}
      </div>
    </section>
  );
}
