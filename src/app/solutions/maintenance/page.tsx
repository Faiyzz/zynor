"use client";

import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

type Blurb = { title: string; body: string };

type Props = HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  rightIntro?: string;
  blurbs?: Blurb[];
  imageSrc?: string;
  imageAlt?: string;
};

export default function SoftwareMaintenanceSection({
  className,
  eyebrow = "Software Services",
  heading = "Software Maintenance & Support",
  subheading = `Technology is constantly changing and existing software is forced to adapt. From patching vulnerabilities to evolving with 3rd-party dependencies, we keep your software running so that your business can, too.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  secondaryCtaText = "Learn more",
  secondaryCtaHref = "/services/software-maintenance-support",
  rightIntro = `Our team keeps your technology firing on all cylinders so you don't have to. We support and maintain your software and infrastructure so you never miss a beat with maximum uptime, stability, and adaptability.`,
  blurbs = [
    {
      title: "Heroes Behind the Scenes",
      body:
        "Eureka provides top-notch software maintenance and support — we address issues quickly and efficiently to minimize downtime and keep your platforms running for your customers. Our team utilizes advanced monitoring tools and implements proactive alerting systems to identify and resolve potential problems before they cause an outage or disruption of service. We also specialize in CI/CD and testing automation to validate your code after every commit and before every live deployment.",
    },
    {
      title: "Cultivating Your Software",
      body:
        "Our maintenance services focus on keeping your software ecosystem healthy and up-to-date. We perform regular security audits, implement patches, and upgrade dependencies to protect against vulnerabilities. Our team also regularly refactors code to improve performance, reduce technical debt, and ensure your software remains scalable as your business grows.",
    },
    {
      title: "Exemplary Evolution",
      body:
        "We help your software evolve alongside your business — as your operations, offerings, and revenues grow, so will your technology needs. With that in mind, our team is designed to walk with you every step of the way. We provide forward-looking designs and architectures built with future expansions in mind. We also offer capacity planning and performance optimization services to ensure your systems can handle increased loads as your user base expands.",
    },
  ],
  imageSrc = "/images/software-support.jpg",
  imageAlt = "Engineers monitoring and maintaining production systems",
  ...rest
}: Props) {
  return (
    <section {...rest} className={className}>
      {/* ─────────────── HEADER (White) ─────────────── */}
      <div className="w-full bg-white text-neutral-900 dark:bg-white dark:text-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
            {eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl">
            {heading}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">
            {subheading}
          </p>

          {(ctaText || secondaryCtaText) && (
            <div className="mt-10 inline-flex flex-wrap items-center gap-3">
              {ctaText && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center rounded-full bg-fuchsia-600 px-7 py-3.5 text-base font-medium text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                >
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center rounded-full border border-fuchsia-300 px-7 py-3.5 text-base font-medium text-fuchsia-700 transition hover:bg-fuchsia-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-200"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ─────────────── CONTENT (Grey background) ─────────────── */}
      <div className="w-full bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          {/* Intro row */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400">
                Software support
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Well-oiled virtual machinery
              </h2>
            </div>

            <p className="max-w-prose text-lg leading-8 text-neutral-600 dark:text-white/70">
              {rightIntro}
            </p>
          </div>

          {/* Details & Image */}
          <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
            {/* Left: blurbs */}
            <div className="space-y-12">
              {blurbs.map((b, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-neutral-700 dark:text-white/70">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: image */}
            <div className="relative overflow-hidden rounded-3xl border border-black/5 shadow-lg dark:border-white/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 600px, 100vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
