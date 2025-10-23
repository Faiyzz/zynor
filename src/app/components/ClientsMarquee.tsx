"use client";

import Image from "next/image";
import clsx from "clsx";

type Logo = { src: string; alt: string; width?: number; height?: number };

interface Props {
  logos: Logo[];
  speed?: number;          // seconds per loop (lower = faster)
  direction?: "left" | "right";
  grayscale?: boolean;
  className?: string;
}

export default function ClientsMarquee({
  logos,
  speed = 30,
  direction = "left",
  grayscale = true,
  className,
}: Props) {
  // Duplicate logos to create a seamless loop
  const strip = [...logos, ...logos];

  return (
    <section className={clsx("relative isolate w-full", className)}>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

      <div
        className={clsx(
          "group relative mx-auto w-full overflow-hidden py-6",
          grayscale && "grayscale hover:grayscale-0 transition"
        )}
        aria-label="Trusted by leading brands"
        role="region"
      >
        <ul
          className={clsx(
            "flex items-center gap-12 will-change-transform",
            direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
          )}
          // custom property controls speed (seconds per loop)
          style={{ ["--marquee-duration" as any]: `${speed}s` }}
        >
          {strip.map((logo, i) => (
            <li
              key={`${logo.src}-${i}`}
              className="flex-shrink-0 opacity-80 transition-opacity group-hover:opacity-100"
            >
              {/* Use next/image for perf; fallback to img ok too */}
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width ?? 120}
                height={logo.height ?? 40}
                className="h-8 w-auto sm:h-10 object-contain"
                priority={i < 8}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
