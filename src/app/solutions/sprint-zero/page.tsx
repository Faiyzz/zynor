"use client";

import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

type Card = { title: string; body: string };
type Step = { title: string; body: string };

type BottomLineCol = {
  title: string;
  items: string[];
};

type Props = HTMLAttributes<HTMLElement> & {
  // Hero
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;

  // Section 1
  section1Eyebrow?: string;
  section1Heading?: string;
  section1RightIntro?: string;
  mattersHeading?: string;
  mattersCards?: Card[];

  // Section 2 (process)
  processEyebrow?: string;
  processHeading?: string;
  processSteps?: Step[];
  processImageSrc?: string;
  processImageAlt?: string;

  // Alternating blocks
  block1Title?: string;
  block1Body?: string;
  block1ImageSrc?: string;
  block1ImageAlt?: string;

  block2Title?: string;
  block2Body?: string;
  block2ImageSrc?: string;
  block2ImageAlt?: string;

  // Bottom line
  bottomEyebrow?: string;
  bottomHeading?: string;
  bottomCols?: [BottomLineCol, BottomLineCol, BottomLineCol];
};

export default function SprintZeroSection({
  className,
  // Hero
  eyebrow = "Software Services",
  heading = "Sprint Zero & Application Roadmapping",
  subheading = `A few weeks and a sliver of the budget make all the difference. Eureka Software's Sprint Zero offers intensive pre-development research and planning to set a solid foundation for project success and efficacy.`,
  ctaText = "Get started",
  ctaHref = "/contact",
  secondaryCtaText = "Learn more",
  secondaryCtaHref = "/services/sprint-zero",

  // Section 1
  section1Eyebrow = "Sprint Zero",
  section1Heading = "Maximize project potential",
  section1RightIntro = `Eureka Software's Sprint Zero is an intensive pre-development phase led by our most senior engineers, designers, creatives, and managers. We conduct thorough research, strategic planning, and risk assessment to lay a robust foundation for your project and significantly enhance its chances of success and long-term efficacy.`,
  mattersHeading = "Where Sprint Zero matters",
  mattersCards = [
    {
      title: "Fuzzy MVP",
      body: "The core features are mostly clear, but the complete 1.0 launch functionality is not.",
    },
    {
      title: "Ambiguous architecture",
      body: "Questions about the product, scope, and market are already answered. We figure out the best way to build it.",
    },
    {
      title: "Large or unique project",
      body: "Numerous identified market needs without a defined scope or optimal plan to fill said needs.",
    },
  ],

  // Process
  processEyebrow = "Our process",
  processHeading = "How it works",
  processSteps = [
    {
      title: "Stakeholder discovery",
      body: "We start by documenting everything: your starting point, desired endpoints and goals, competitors, expectations, and more. This includes ideation between Eureka and your team on solutions and requirements.",
    },
    {
      title: "Market business analysis",
      body: "Our team begins a deep market analysis of users and competitors. This allows us to identify user needs and how they're qualitatively being filled, and ultimately prioritize MVP functionality for go-live and beyond.",
    },
    {
      title: "Final outputs",
      body: "We emerge with key priorities and a clear path forward for your team—MVP specs with estimated costs and core design concepts that form the backbone of your visual themes.",
    },
  ],
  processImageSrc = "/images/howitworks.avif",
  processImageAlt = "Stakeholder discovery meeting around a conference table",

  // Alternating blocks
  block1Title = "Comprehensive Project Scoping",
  block1Body = `During Sprint Zero, Eureka Software's most senior staff dive deep into your project requirements and business objectives over an intensive few weeks for a sliver of your overall budget. We conduct thorough market research, analyze competitors, and identify potential technological challenges that present opportunities and risks. This comprehensive scoping process allows us to define clear project goals by establishing realistic timelines and outlining resource requirements. As we gain a holistic understanding of your project landscape, our aim is that every subsequent development sprint is aligned with your business vision and market needs and ultimately adds incremental value.`,
  block1ImageSrc = "/images/planning.jpg",
  block1ImageAlt = "Team collaborating with laptops and documents",

  block2Title = "Risk Mitigation and Architecture Planning",
  block2Body = `Our Sprint Zero phase places a strong emphasis on risk mitigation and architectural planning. Eureka's experienced team identifies potential obstacles and develops strategies to address them proactively. We outline a robust and scalable architecture that can accommodate future growth and technological advancements. This foresight minimizes the risk of costly mid-project changes—rest easy knowing your software is built on a solid, future-proof foundation. Our meticulous planning during Sprint Zero significantly reduces uncertainties and sets the stage for smooth project execution.`,
  block2ImageSrc = "/images/risk.webp",
  block2ImageAlt = "Whiteboard showing product roadmap and architecture notes",

  // Bottom line
  bottomEyebrow = "The bottom line",
  bottomHeading = "Tangible results",
  bottomCols = [
    {
      title: "Clear project roadmap",
      items: [
        "Features prioritized for MVP and beyond",
        "Core design concepts",
        "Plans for expansions and improvements",
      ],
    },
    {
      title: "Industry-leading team",
      items: [
        "Eureka's 38+ years of expertise successfully building software",
        "Senior engineers with decades of diverse experience each",
        "Masterful product, project, and design teams",
      ],
    },
    {
      title: "Clear path forward",
      items: [
        "Build the right features",
        "Justify the spend (or don't!)",
        "Defined budget and cost",
        "Straightforward timelines",
      ],
    },
  ],
  ...rest
}: Props) {
  return (
    <section {...rest} className={className}>
      {/* ───────────── HERO ───────────── */}
      <div className="w-full bg-white text-neutral-900 dark:bg-white dark:text-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-28">
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

      {/* ───────────── SECTION: Maximize project potential ───────────── */}
      <div className="w-full bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400">
                {section1Eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                {section1Heading}
              </h2>
            </div>
            <p className="max-w-prose text-lg leading-8 text-neutral-600 dark:text-white/70">
              {section1RightIntro}
            </p>
          </div>

          {/* Cards row */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {mattersCards.map((c, i) => (
              <div
                key={i}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-white/70">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───────────── SECTION: How it works (image + steps) ───────────── */}
      <div className="w-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400">
            {processEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {processHeading}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left: image */}
            <div className="relative overflow-hidden rounded-3xl border border-black/5 shadow-lg dark:border-white/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={processImageSrc}
                  alt={processImageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 600px, 100vw"
                />
              </div>
            </div>

            {/* Right: steps */}
            <div className="space-y-8">
              {processSteps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 h-6 w-1 shrink-0 rounded-full bg-fuchsia-500/80 dark:bg-fuchsia-400/80" />
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-base leading-7 text-neutral-700 dark:text-white/70">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alternating blocks */}
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Block 1: text left, image right */}
            <div className="rounded-2xl bg-neutral-50 p-6 dark:bg-white/5">
              <h3 className="text-xl font-semibold md:text-2xl">{block1Title}</h3>
              <p className="mt-3 text-base leading-7 text-neutral-700 dark:text-white/70">
                {block1Body}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-black/5 shadow-lg dark:border-white/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={block1ImageSrc}
                  alt={block1ImageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 600px, 100vw"
                />
              </div>
            </div>

            {/* Block 2: image left, text right */}
            <div className="relative order-3 overflow-hidden rounded-3xl border border-black/5 shadow-lg dark:border-white/10 md:order-2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={block2ImageSrc}
                  alt={block2ImageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 600px, 100vw"
                />
              </div>
            </div>
            <div className="order-2 rounded-2xl bg-neutral-50 p-6 dark:bg-white/5 md:order-3">
              <h3 className="text-xl font-semibold md:text-2xl">{block2Title}</h3>
              <p className="mt-3 text-base leading-7 text-neutral-700 dark:text-white/70">
                {block2Body}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ───────────── SECTION: Bottom line ───────────── */}
      <div className="w-full bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400">
            {bottomEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {bottomHeading}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {bottomCols.map((col, i) => (
              <div
                key={i}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold">{col.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-700 dark:text-white/70">
                  {col.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-500 dark:bg-fuchsia-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
