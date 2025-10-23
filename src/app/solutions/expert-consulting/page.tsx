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

export default function ExpertWitnessSection({
  className,
  eyebrow = "Expert witness",
  heading = "Expert Consulting for Software Litigation",
  subheading = `With unmatched industry knowledge and experience, our team offers expert witness testimony, detailed IP analysis, and comprehensive consulting that builds your legal strategies upon a solid foundation of technical prowess.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  secondaryCtaText = "Learn more",
  secondaryCtaHref = "/services/expert-witness",
  rightIntro = `With over three decades in the computer, software, and technology industries, Eureka offers unparalleled expertise surrounding software and computer litigation. We leverage this extensive experience for ongoing software development and expert witness consulting to bring transformative results.`,
  blurbs = [
    {
      title: "Authoritative Expertise in Complex Software Litigation",
      body: "Software-related disputes require specialized knowledge to handle effectively. Our team of seasoned software experts provides experienced consulting and expert witness services for intellectual property cases. We have decades of experience across diverse technologies and development methodologies and offer precise, comprehensive analyses that stand up to rigorous scrutiny and clarify complex technical issues.",
    },
    {
      title: "Bridging the Gap Between Technology and Law",
      body: "Software litigation often involves intricate technical concepts that are challenging to convey to non-technical peers. Our expert consultants excel at translating complex software principles into terms that judges, juries, and attorneys can readily understand. We meticulously analyze source code, software architectures, and development processes to provide objective opinions. Let Eureka be the bridge between the technical intricacies of software and the legal framework of the courts.",
    },
    {
      title: "Comprehensive Support Throughout the Litigation Lifecycle",
      body: "Our expert consulting services extend beyond just inspections and testimony. We provide end-to-end support throughout the entire litigation process. From early case assessment and discovery assistance to damages analysis and settlement negotiations, our team is your trusted partner at every stage. We leverage advanced proprietary tools and methodologies to conduct thorough code and software comparisons and answer essential questions.",
    },
  ],
  imageSrc = "/images/expert-witness.jpg",
  imageAlt = "Expert reviewing source code and legal documents side by side",
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
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                  className="inline-flex items-center rounded-full border border-fuchsia-600 px-7 py-3.5 text-base font-medium text-fuchsia-700 transition hover:bg-fuchsia-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 dark:border-fuchsia-400 dark:text-fuchsia-300 dark:hover:bg-white/5"
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
                Expert witness
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                End-to-end support and expertise
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
