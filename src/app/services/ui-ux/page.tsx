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

export default function UIUXDesignSection({
  className,
  eyebrow = "Software Services",
  heading = "UI/UX Design Services",
  subheading = `Eureka offers innovative software design services that transform your ideas into intuitive, user-friendly interfaces. Our team combines aesthetics with functionality to create sleek designs and seamless user experiences that advance your business goals.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  rightIntro = `From user experience design to full-stack development, every aspect of your project is meticulously crafted to achieve optimal results.`,
  blurbs = [
    {
      title: "Intuitive, Engaging User Experiences",
      body: "Providing an exceptional user experience separates excellent software from the rest of the pack. Our UI/UX design team goes beyond making interfaces look good — we apply human-centered design principles to create experiences that are intuitive, efficient, and engaging from end to end. Through upfront user research, iterative usability testing, and close collaboration with your team, we design pixel-perfect UI layouts optimized for conversion and interfaces that delight users at every touchpoint.",
    },
    {
      title: "Consistent, Cohesive Design",
      body: "Maintaining brand and UI/UX consistency is challenging when you have a broad technological presence. Our designers take a systems-based approach. We develop comprehensive designs and architectures that unify components, patterns, and styles across your web, mobile, and product interfaces. Establishing a unified brand allows you to scale faster and present better. Your users will enjoy a seamless experience no matter how they interact with your technology.",
    },
    {
      title: "Ideas for Brilliant Results",
      body: "Do you have a rough concept for a new product, or are you looking to overhaul outdated user experiences? Our UI/UX designers can transform your initial vision into beautiful, usable designs through iterative design. Starting with a user needs analysis, we explore multiple design concepts, validate them through rapid prototyping and testing, and continually refine them post-release. You get high-fidelity, thoroughly user-vetted UI designs and functional prototypes that bring your ideas to life better than ever imagined.",
    },
  ],
  imageSrc = "/images/ui-ux-design.jpg",
  imageAlt = "UI/UX wireframes and design system components",
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
                Design & Strategy
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                The foundation of great products
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
