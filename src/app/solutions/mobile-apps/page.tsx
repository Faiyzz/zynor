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

export default function MobileAppDevelopmentSection({
  className,
  eyebrow = "Software Services",
  heading = "Innovative Mobile App Development & Software",
  subheading = `At Eureka, we design and develop custom mobile applications for both iOS and Android platforms. Our mobile app development services focus on creating intuitive and feature-rich apps that meet your business goals and engage your users.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  secondaryCtaText = "Learn more",
  secondaryCtaHref = "/services/mobile-app-development",
  rightIntro = `From initial concept to final deployment, we build mobile apps to be scalable, secure, and optimized for performance.`,
  blurbs = [
    {
      title: "Crafting Exceptional Mobile Experiences Across Platforms",
      body:
        "A powerful, intuitive app is often a cornerstone of a modern digital business strategy. Our mobile app development team excels in creating high-performance, visually stunning applications for iOS, Android, and cross-platform environments. We leverage the latest technologies and best practices to build apps that meet your business goals while delighting your users. Take advantage of our conception and UX design to testing and deployment and everything in between - we'll make your app stand out in crowded app stores and deliver measurable results.",
    },
    {
      title: "Native, Hybrid, or Cross-Platform",
      body:
        "Every mobile app project has unique requirements, and we're equipped to deliver the optimal solution regardless. For maximum performance and platform-specific features, our native app development expertise ensures seamless integration with iOS and Android ecosystems. When speed-to-market and cost-efficiency are priorities, we offer cross-platform development using frameworks like React Native, allowing a single codebase to run on multiple platforms. We'll guide you through each approach to give you the power to make informed decisions and ultimately move forward with confidence.",
    },
    {
      title: "Ongoing Support and Evolution",
      body:
        "Launching your app is just the beginning. Eureka provides comprehensive post-launch services to ensure your app remains relevant, secure, and high-performing. Continuous monitoring, regular updates, and feature enhancements are a natural and necessary part of any living, breathing software application. We'll make your mobile app a dynamic asset that evolves with your business and user needs and maintains its competitive edge in the fast-paced software landscape.",
    },
  ],
  imageSrc = "/images/mobileappdev.jpg",
  imageAlt = "Team designing mobile app screens together",
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
                Mobile app development
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Intuitive, feature-rich mobile apps
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
