"use client";

import { motion } from "framer-motion";

const ACCENT = "rgb(108,24,152)";

export default function Vision() {
  return (
    <section
      className="relative isolate overflow-hidden flex items-center justify-center"
      aria-labelledby="vision-title"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(1200px 800px at 15% 20%, rgba(255,255,255,0.06), transparent 55%),
            radial-gradient(1200px 800px at 85% 40%, rgba(255,255,255,0.06), transparent 60%),
            linear-gradient(180deg, ${ACCENT} 0%, rgb(10,12,18) 100%)
          `,
        }}
      />
      <div className="absolute inset-0 opacity-[0.06] [background:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_35%_75%,rgba(0,0,0,0.4),transparent_60%)]" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-4 py-24 md:py-32 text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-white/60">
          VISION
        </p>

        <motion.h2
          id="vision-title"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-8xl text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          Building <Glow>category-defining</Glow> software for modern businesses
          through <Glow>creative acquisition</Glow> systems and{" "}
          <Glow>bulletproof operations</Glow>.
        </motion.h2>
      </div>
    </section>
  );
}

/** Simple white emphasis (bold + italic) */
function Glow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold italic text-white">
      {children}
    </span>
  );
}
