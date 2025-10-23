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

export default function LegacyModernizationSection({
  className,
  eyebrow = "Software Services",
  heading = "Legacy Software Modernization & Migration",
  subheading = `Breathe new life into your outdated and legacy technology with our software modernization and migration services. We provide the expertise to reimagine and retrofit your business applications without interrupting operations.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  secondaryCtaText = "Learn more",
  secondaryCtaHref = "/services/legacy-modernization",
  rightIntro = `Old and clunky technology doesn't have to stay that way - we keep what your business applications do well and reimagine what they don't. Take your operations to the next level with next-generation interfaces and APIs.`,
  blurbs = [
    {
      title: "Breathing New Life into Digital Dinosaurs",
      body:
        "Eureka revitalizes outdated legacy systems by leveraging modern technologies and architectures to their entire effect. Our team assesses and inventories legacy codebases and migrates them to cloud-native environments using containerization technologies like Docker for resiliency. Refactoring occurs in multiple ways, from breaking up monolithic applications into microservices to selective rewrites, ultimately enabling greater scalability, easier maintenance, and next-generation functionality.",
    },
    {
      title: "Bridging the Generation Gap",
      body:
        "Our modernization process is designed to preserve valuable business logic and knowledge while revolutionizing speed, utility, and user experience. We implement responsive front-end frameworks like React for web applications or React Native for mobile applications to create intuitive and mobile-friendly interfaces. Behind these UIs, our team develops APIs to integrate legacy systems seamlessly with modern applications, meaning data flow and functionality across your entire technology stack.",
    },
    {
      title: "Future-Proofing Your Digital Assets",
      body:
        "The goal is not only to bring your technology to modern standards - we aim to future-proof your systems by implementing continuous integration and continuous deployment (CI/CD) pipelines and automated QA to lay down the infrastructure for more development work. Our team utilizes tools like GitHub Actions and unit and functional testing to maintain consistent and repeatable deployments. We excel at improving code quality and reducing the risk of regressions during future updates over the application's life.",
    },
  ],
  imageSrc = "/images/legacy-modernization.jpg",
  imageAlt = "Developers modernizing a legacy system architecture",
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
                Software modernization
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Legacy software made new
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
