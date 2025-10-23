"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ACCENT = "rgb(59,130,246)"; // blue-500
const GRADIENT = "linear-gradient(135deg,#8A5CFF 0%,#B18CFF 45%,#3AC4EC 100%)";

export default function ServicesShowcase() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 lg:px-8">
      {/* Row 1 */}
      <FeatureRow
        image={{
          src: "/images/sections/analytics-laptop.png", // replace with your asset
          alt: "Analytics dashboard on laptop",
          width: 1200,
          height: 840,
          className: "w-full max-w-[660px] h-auto",
        }}
        eyebrow=""
        title="Software design and engineering"
        desc="We’ve designed, developed, and supported outstanding software for decades. From greenfield builds to complex modernization—our teams ship fast and scale safely."
        href="/services/software-engineering"
        direction="image-left"
      />

      {/* Row 2 */}
      <FeatureRow
        image={{
          src: "/images/sections/expert-portrait.jpg", // replace with your asset
          alt: "Expert witness headshot",
          width: 900,
          height: 1200,
          className: "w-[360px] h-auto rounded-2xl object-cover",
        }}
        eyebrow=""
        title="Expert witness & IP litigation consulting"
        desc="500+ hours testifying on behalf of clients. Source-code analysis, claim charts, trade secrets, and litigation-grade reporting backed by decades of engineering."
        href="/solutions/expert-consulting"
        direction="image-right"
      />
    </section>
  );
}

/* --------------------------------- parts --------------------------------- */

type FeatureRowProps = {
  image: { src: string; alt: string; width: number; height: number; className?: string };
  eyebrow?: string;
  title: string;
  desc: string;
  href: string;
  direction?: "image-left" | "image-right";
};

function FeatureRow({ image, eyebrow, title, desc, href, direction = "image-left" }: FeatureRowProps) {
  const isImageLeft = direction === "image-left";

  return (
    <div
      className={[
        "grid items-center gap-10 py-10 sm:py-14",
        "md:grid-cols-2",
        isImageLeft ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1",
      ].join(" ")}
    >
      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* gradient triangle shape behind image */}
        <TriangleShape side={isImageLeft ? "right" : "left"} />
        <div className="relative z-10">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={image.className}
            priority
          />
        </div>
      </motion.div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        className="max-w-xl"
      >
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-gray-400">{eyebrow}</p>
        ) : null}
        <h3 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h3>
        <p className="mt-3 text-gray-600">
          {desc}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center text-[15px] font-semibold text-blue-600 hover:text-blue-700"
          aria-label={`${title} — Learn more`}
        >
          Learn more
          <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}

function TriangleShape({ side = "right" as "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute -z-10",
        side === "right" ? "left-1/2 -translate-x-10" : "right-1/2 translate-x-10",
        "top-1/2 -translate-y-1/2",
      ].join(" ")}
    >
      <svg width="320" height="320" viewBox="0 0 320 320" className="opacity-70">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8A5CFF" />
            <stop offset="50%" stopColor="#B18CFF" />
            <stop offset="100%" stopColor="#3AC4EC" />
          </linearGradient>
        </defs>
        {/* hollow triangle */}
        <path
          d="M160 20 L300 280 L20 280 Z"
          fill="none"
          stroke="url(#g)"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
