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
  /** Optional secondary CTA (e.g., “Learn more”) */
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  rightIntro?: string;
  blurbs?: Blurb[];
  imageSrc?: string;
  imageAlt?: string;
};

export default function WebDevelopmentSection({
  className,
  eyebrow = "Software Services",
  heading = "Top-Tier Web Development & Software",
  subheading = `Eureka specializes in creating high-performance web solutions focused on your business needs. Our team of experts leverages the latest technologies and best practices to build dynamic and responsive websites that offer seamless user experiences and robust functionality.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  secondaryCtaText = "Learn more",
  secondaryCtaHref = "/services/web-development",
  rightIntro = `We deliver results that drive your online success, whether you need a simple corporate website or a complex web application.`,
  blurbs = [
    {
      title: "Crafting Powerful, Responsive Web Experiences",
      body: "Your website is often the first point of contact between your business and potential customers. Our web development team creates stunning, high-performance websites that make a lasting impression. From sleek corporate sites to complex operational applications, we leverage cutting-edge technologies and frameworks to build responsive and robust web solutions. Our expertise spans front-end development for engaging user interfaces, back-end systems for robust functionality, and full-stack integration to deliver seamless, end-to-end experiences that drive your business goals.",
    },
    {
      title: "Scalable Solutions for Growing Businesses",
      body: "Your web presence needs to evolve as your business grows. We develop scalable, future-proof web solutions that adapt quickly to changing requirements. Whether you're a startup looking for a minimum viable product or an enterprise requiring a complex, data-driven web application, our team has the skills to deliver. We utilize modern architectures and advanced methodologies to maximize performance and scalability and minimize user friction. From start to finish, our focus is your long-term success.",
    },
    {
      title: "Done Once, Done Right",
      body: "Software is an industry where cutting corners and costs leads to expensive reworks and project delays - that's why we're unwaveringly committed to quality. Our team is 100% US-based, comprised of seasoned professionals who understand the nuances of building robust, scalable web solutions. We believe in doing things right the first time, employing rigorous coding standards and meticulous attention to detail throughout the development process. We save you time and resources in the long run by minimizing the need for extensive revisions or bug fixes post-launch. With our team, you can rest easy knowing your web project is in capable hands.",
    },
  ],
  imageSrc = "/images/web-development.jpg",
  imageAlt = "Modern web dashboards and code on multiple screens",
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
                Web Development
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Fast, responsive, and scalable
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
