"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ACCENT = "rgb(108,24,152)";

export default function CTA() {
  return (
    <section
      className="relative isolate overflow-hidden flex items-center justify-center text-center"
      aria-labelledby="cta-title"
    >
      {/* Layer 1: soft light background up top */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(800px 400px at 50% 20%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%),
            radial-gradient(1000px 600px at 50% 10%, rgba(108,24,152,0.18) 0%, rgba(0,0,0,0) 70%),
            linear-gradient(to bottom, rgb(255,255,255) 0%, rgb(16,16,20) 80%)
          `,
        }}
      />

      {/* Layer 2: faint grid texture only visible in the light area */}
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_60%)] opacity-[0.08] [background:linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Layer 3: subtle vignette at the bottom so it blends into footer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_80%,rgba(0,0,0,0.6),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 md:py-32 text-center text-[#0d0d0d]">
        <motion.h2
          id="cta-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl
            text-[#0d0d0d]
          "
        >
          Let’s build something remarkable together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-base text-[#0d0d0d]/80 sm:text-lg"
        >
          Book a quick call — we’ll plan your roadmap and bring your vision to
          life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="/contact"
            className="
              group relative inline-flex items-center justify-center
              rounded-xl px-6 py-3 text-base font-semibold
              text-[#0d0d0d] transition active:scale-[.98]
              shadow-[0_18px_40px_rgba(0,0,0,0.2)]
              bg-white
            "
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <span className="relative z-10">Let’s Get Started</span>
            <span className="absolute inset-0 rounded-xl bg-white/60 opacity-0 transition group-hover:opacity-100" />
          </Link>
        </motion.div>
      </div>

      {/* Fade-to-footer mask: makes bottom fully dark with no visible cut */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(16,16,20,0) 0%, rgba(16,16,20,1) 70%)",
        }}
      />
    </section>
  );
}
