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

export default function AISoftwareDevelopmentSection({
  className,
  eyebrow = "Software Services",
  heading = "AI Software Development",
  subheading = `Harness the power of artificial intelligence and machine learning with Eureka's innovative engineering team. Our AI and machine learning services enable businesses to automate processes, gain deeper insights from their data, and enhance decision-making capabilities. We build intelligent applications tailored to your specific needs that drive efficiency and provide a competitive edge.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  secondaryCtaText = "Learn more",
  secondaryCtaHref = "/services/ai-software-development",
  rightIntro = `Our AI and machine learning services enable businesses to automate processes, gain deeper insights from their data, and enhance decision-making capabilities. We build intelligent applications tailored to your specific needs that drive efficiency and provide a competitive edge.`,
  blurbs = [
    {
      title: "Transform Your Business With AI",
      body:
        "Artificial Intelligence and Machine Learning are no longer just buzzwords - they're powerful tools that can revolutionize your operations. Our AI solutions team helps you identify high-impact use cases and implement cutting-edge machine-learning models tailored to your needs. From predictive analytics and natural language processing to computer vision and recommendation systems, we leverage the latest AI technologies to create intelligent applications that learn and improve over time, including unlocking insights from your data and automating complex tasks.",
    },
    {
      title: "Customized AI Solutions for Real-world Challenges",
      body:
        "Every business faces unique challenges that off-the-shelf AI products can only partially address. That's where our expertise in developing custom AI solutions comes in. We work with your team to understand your domain and objectives, then selectively design and implement bespoke machine learning models and AI-powered systems. Whether you're looking to optimize supply chains, personalize customer interactions, detect fraud, or automate image and speech recognition tasks, we'll build solutions that integrate seamlessly with your existing workflows and deliver measurable ROI.",
    },
    {
      title: "The Most Intelligent (or Semi-Intelligent) Tool for the Job",
      body:
        "While AI and machine learning offer potent capabilities, using them for every problem is akin to using a sledgehammer on nails. Our expertise extends beyond AI to include a wide range of advanced techniques for pattern recognition and intelligent software design. Whether it means statistical analysis, rule-based systems, or advanced heuristics, these methods provide robust, explainable results with lower complexity and resource requirements than full-fledged AI systems. We choose the right level of intelligence for each task - whether it's a simple algorithm or a complex neural network - to ensure you get effective, efficient solutions tailored to your exact requirements without overengineering.",
    },
  ],
  imageSrc = "/images/ai-lab.jpg",
  imageAlt = "Engineers collaborating on AI models and datasets",
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
                Artificial intelligence
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Better, faster, smarter automation
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
