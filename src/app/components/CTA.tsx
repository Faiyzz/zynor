"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ACCENT = "rgb(59, 130, 246)"; // same accent blue

export default function CTA() {
  return (
    <section
      className="relative isolate overflow-hidden flex items-center justify-center text-center"
      aria-labelledby="cta-title"
    >
      {/* Background (same as Vision) */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(1200px 800px at 15% 20%, rgba(255,255,255,0.06), transparent 55%),
                       radial-gradient(1200px 800px at 85% 40%, rgba(255,255,255,0.06), transparent 60%),
                       linear-gradient(180deg, ${ACCENT} 0%, rgba(18,24,40,1) 100%)`,
        }}
      />
      <div className="absolute inset-0 opacity-[0.08] [background:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 md:py-32">
        <motion.h2
          id="cta-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-semibold leading-tight text-white sm:text-5xl"
        >
          Let’s build something remarkable together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-base text-white/80 sm:text-lg"
        >
          Book a quick call — we’ll plan your roadmap and bring your vision to life.
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
            className="group relative inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-gray-900 transition active:scale-[.98]"
            style={{
              background: "white",
              boxShadow: "0 8px 24px rgba(255,255,255,0.25)",
            }}
          >
            <span className="relative z-10">Let’s Get Started</span>
            <span className="absolute inset-0 rounded-xl bg-white/60 opacity-0 transition group-hover:opacity-100" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
