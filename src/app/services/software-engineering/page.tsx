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
  rightIntro?: string;
  blurbs?: Blurb[];
  imageSrc?: string;
  imageAlt?: string;
};

export default function SoftwareEngineeringSection({
  className,
  eyebrow = "Software Services",
  heading = "Software Engineering Services",
  subheading = `Our custom software engineering services deliver robust, scalable, and high-performance solutions. We leverage modern technologies and proven methodologies to build turnkey systems that meet your specific requirements—reliably and efficiently.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  rightIntro = `We excel in engineering robust, scalable, and innovative software solutions. Each project is crafted with precision and excellence from the initial concept to the final deployment.`,
  blurbs = [
    {
      title: "Robust, Scalable Software Solutions",
      body: "From start to finish, our team architects, develops, and delivers complex applications that meet the highest quality and performance standards. From monoliths to microservices and serverless, we engineer future-proof systems on modern stacks and cloud infrastructure.",
    },
    {
      title: "Innovation with Agile Software Delivery",
      body: "We apply agile practices to increase velocity and responsiveness. Short iterations, code reviews, CI, and automated testing keep quality high while letting us adapt quickly to feedback and changing market needs.",
    },
    {
      title: "Engineering Excellence as a Force Multiplier",
      body: "We embed with your staff through workshops, code pairing, and knowledge transfer. Expect best practices, measurable improvements to pipelines, and long-term maintainability.",
    },
  ],
  imageSrc = "/images/office-engineering.jpg",
  imageAlt = "Engineering team collaborating in an open office",
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

          {ctaText && (
            <Link
              href={ctaHref}
              className="mt-10 inline-flex items-center rounded-full bg-fuchsia-600 px-7 py-3.5 text-base font-medium text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            >
              {ctaText}
            </Link>
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
                Software Engineering
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Full-service engineering teams
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
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10">
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
