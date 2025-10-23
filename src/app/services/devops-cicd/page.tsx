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

export default function DevOpsCICDSection({
  className,
  eyebrow = "Software Services",
  heading = "DevOps & CI/CD Services",
  subheading = `Our DevOps and CI/CD services streamline your software development lifecycle by promoting continuous integration and delivery. Eureka's team automates and optimizes your workflows, which enhances collaboration, accelerates releases, and provides consistent, high-quality software deployments.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  rightIntro = `Bridge the gap between development and operations, automating and optimizing the deployment process. We provide faster releases, better development, and reduced downtime through continuous integration and continuous delivery pipelines.`,
  blurbs = [
    {
      title: "Minimize Overhead, Maximize Development",
      body: "At Eureka, we leverage continuous integration and continuous delivery (CI/CD) to supercharge team productivity. Our approach allows your engineers to spend more time writing code and less time managing deployments. We build automated tests, audits, and gating features directly into the pipeline to ensure new builds meet requirements without manual oversight. This creates predictability in your rapidly evolving software platform. We'll help implement the same CI/CD best practices we use internally so you can get the most out of your development team.",
    },
    {
      title: "Chaos into Consistency",
      body: "Turn deployment chaos into consistency with streamlined DevOps processes. Writing high-quality software is challenging, but deploying it reliably is another hurdle. Even the best-coded application is only as good as the environment and infrastructure it's deployed on. We'll work with you to create predictable, automated software deployment pipelines that take the risk out of releases through techniques like one-click deployments. With continuous integration/delivery, new builds can ship as frequently as new code is developed.",
    },
    {
      title: "One Less Thing to Worry About",
      body: "DevOps eliminates deployment headaches, so it's one less thing to worry about. Technology inevitably brings risks, but removing deployment variables means a more consistent user experience. Stable, scripted deployments lead to minimal downtime. We provision flexible hosting environments that dynamically scale resources based on your application's needs. Cloud infrastructure and blue/green deployment models prevent rollback issues from escalating into more serious incidents. Let us handle the DevOps so you can focus on building great products.",
    },
  ],
  imageSrc = "/images/devops-cicd.jpg",
  imageAlt = "Continuous integration and deployment pipelines visualized on screens",
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
                DevOps & CI/CD
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Streamlining Deployment
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
