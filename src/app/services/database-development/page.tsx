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

export default function DatabaseDevelopmentSection({
  className,
  eyebrow = "Software Services",
  heading = "Database Development Services",
  subheading = `Eureka Software provides flexible and high-performing database solutions that deliver the information you need when you need it, every time.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  rightIntro = `Eureka Software provides flexible and high-performing database solutions that deliver the information you need when you need it, every time. From structured SQL to non-structured NoSQL and specialized high-throughput data structures like Redis, our database expertise lays the foundation for your software and technology that scales as you do.`,
  blurbs = [
    {
      title: "Sculpting Your Information Foundation",
      body: "Eureka designs and implements robust database solutions and data models tailored to your needs. Our team leverages both SQL and NoSQL technologies, selecting the optimal database type for your use case (or using your existing platform)—whether it's PostgreSQL, MySQL, or Oracle for complex relational data, MongoDB for flexible document storage, or even Redis for specialized high-throughput I/O. We specialize in implementing high-performance data structures that stand the test of time and leave room for your business to grow.",
    },
    {
      title: "Transforming Data into Action",
      body: "Our database development services excel at optimizing performance and scalability. From advanced indexing strategies and query optimization techniques to caching mechanisms, we provide you and your users with lightning-fast data retrieval. Our team develops scalable data warehousing solutions and implements robust ETL processes to enable powerful business intelligence and analytics capabilities. With the power of AI, using your data to unlock your business potential has never been easier.",
    },
    {
      title: "Secure, Safe, and Compliant",
      body: "We prioritize data security and compliance in all our database development projects. Our team implements best-practice security measures for storing and accessing data to protect sensitive information. We develop fine-grained access control systems and audit logging capabilities to ensure data integrity and regulatory compliance when necessary. We also engineer comprehensive backup and disaster recovery strategies to safeguard critical data and assets.",
    },
  ],
  imageSrc = "/images/database-development.jpg",
  imageAlt = "Database schemas and dashboards on screens",
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
                Database Development
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Data that scales with you
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
