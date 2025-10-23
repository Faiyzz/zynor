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

export default function ProjectTakeoverSection({
  className,
  eyebrow = "Software Services",
  heading = "Project Takeover & Rescue",
  subheading = `Rescue stalled or struggling software projects with our expert takeover services. We provide strategic guidance, hands-on management, and development to complete your project successfully.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  secondaryCtaText = "Learn more",
  secondaryCtaHref = "/services/project-takeover",
  rightIntro = `Breathe new life into stalled software projects with our specialized takeover services. We provide the expertise and strategic oversight needed to ensure your project reaches successful completion, on time and within budget.`,
  blurbs = [
    {
      title: "Rescue Your Vision",
      body:
        "Eureka steps in to save the day when software projects go off track. Our experienced team specializes in taking over troubled projects by quickly assessing the situation and implementing effective solutions. Whether it's software development, project management, DevOps, UI/UX, or other adjacent software services, we'll take the helm and right the ship. Our approach combines technical prowess with clear communication to consistently provide you with information so you can make the best decisions toward your vision. We don't just patch up problems — we transform struggling projects into successful and scalable solutions.",
    },
    {
      title: "Seamless Transition, Rapid Results",
      body:
        "Our takeover process is designed for minimal disruption and maximum efficiency. We begin with a comprehensive discovery process of the existing codebase, documentation, and project history. This allows us to create a detailed roadmap for recovery and improvement. We then assemble a handpicked team with the specific skills needed for your project to hit the ground running on your technology stack and business requirements. Our use of agile methodology allows for quick course corrections and constant progress with regular updates to keep you informed every step of the way. Rather than simply finishing projects, we aim to exceed your original vision.",
    },
    {
      title: "Future-Proofing Your Investment",
      body:
        "Project takeovers are about setting you up for long-term success more so than fixing immediate issues. As we work on your project, we tackle technical debt as we go — that means implementing best practices in architecture, testing, and documentation. This makes future maintenance and upgrades much easier while remediating current problems. Once your software is in a stable state, we provide ongoing support and development and train your in-house team on the improved codebase and processes for a smooth handover.",
    },
  ],
  imageSrc = "/images/project-takeover.jpg",
  imageAlt = "Team collaborating on rescuing a software project",
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
                Revive & thrive
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Revitalize, save, and improve
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
