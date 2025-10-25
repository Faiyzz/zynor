"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import ContactUs from ".././components/contactUs";

type HeroContactProps = {
  imageSrc?: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaText?: string;
};

function HeroContact({
  imageSrc = "/images/about.jpg",
  title = "Contact",
  highlight = "US",
  subtitle = "Have a project in mind? Reach out today to get started.",
  ctaHref,
  ctaText,
}: HeroContactProps) {
  return (
    <section className="relative isolate overflow-hidden bg-light text-dark">
      <div className="relative h-[70vh] sm:h-[72vh] md:h-[80vh] lg:h-[86vh]">
        {/* Background image */}
        <Image
          src={imageSrc}
          alt="Construction frame under a dramatic sky"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark overlay for contrast */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"
        />

        {/* Fade to page background at bottom */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[var(--color-light)]"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-light)] drop-shadow md:text-6xl">
            {title}{" "}
           {highlight}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-light)]/90 md:text-lg">
            {subtitle}
          </p>

          {ctaHref && ctaText && (
            <div className="mt-8">
              <Link
                href={ctaHref}
                className="inline-flex items-center rounded-full border border-[var(--color-accent)]/60 bg-[var(--color-light)]/90 px-5 py-2.5 text-sm font-semibold text-[var(--color-dark)] shadow-sm backdrop-blur transition hover:bg-[var(--color-accent)] hover:text-[var(--color-light)] hover:border-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/60"
              >
                {ctaText}
                <span aria-hidden className="ml-2">
                  ›
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>

      <ContactUs />
    </section>
  );
}

export default function Page() {
  return <HeroContact />;
}
