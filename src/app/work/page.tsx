"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// =====================================
// Types
// =====================================

type Category = "Portal" | "Website" | "Mobile App";

type ProjectImage = {
  src: string; // /public path
  alt: string;
};

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  category: Category;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  tags: string[];
  cover: string;
  images: ProjectImage[];
  timeline?: string;
  role?: string;
  link?: { label: string; href: string }[];
};

// =====================================
// Data — replace images/links with your real assets
// Put images under /public/work/*
// =====================================

const PROJECTS: Project[] = [
  {
    id: "crm-portal",
    title: "Customer CRM Portal",
    subtitle: "Accounts, Packages & Additional Modules",
    category: "Portal",
    summary:
      "A role‑based CRM that centralizes leads, clients, packages, tasks, and reporting with granular permissions.",
    problem:
      "Client teams were scattered across spreadsheets and chat threads with no single source of truth for progress or SLAs.",
    solution:
      "We built a modular CRM portal with organization hierarchies, package items, progress tracking, task notes/logs, and audit trails. Multi‑tenant support and SSO ready.",
    impact:
      "Cut weekly status time by 68%, reduced turnaround for approvals from days to hours, and enabled scalable onboarding.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
      "Node API",
      "Framer Motion",
    ],
    tags: ["Multi‑tenant", "RBAC", "Audit Trail"],
    cover: "/work/crm/cover.jpg",
    images: [
      { src: "/work/crm/dashboard.jpg", alt: "CRM Dashboard" },
      { src: "/work/crm/clients.jpg", alt: "Clients List" },
      { src: "/work/crm/tasks.jpg", alt: "Tasks & Logs" },
    ],
    timeline: "2024 → 2025",
    role: "Product, Full‑stack, DevOps",
  },
  {
    id: "contract-agency-ops",
    title: "Contract Agency Operations Portal",
    subtitle: "Workforce, Contracts & Timesheets",
    category: "Portal",
    summary:
      "End‑to‑end portal for contract staffing: onboarding, assignment management, timesheets, and invoicing.",
    problem:
      "Manual timesheet collection and scattered contracts caused billing delays and compliance risk.",
    solution:
      "Role‑based portal with digital contracts, geo‑tagged timesheets, approval flows, and invoice generation.",
    impact:
      "Payment cycle reduced from 21 to 7 days; 0 compliance misses in the first quarter after launch.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "S3/MinIO", "Tailwind"],
    tags: ["Approvals", "E‑sign", "Invoices"],
    cover: "/work/agency/cover.jpg",
    images: [
      { src: "/work/agency/contracts.jpg", alt: "Digital Contracts" },
      { src: "/work/agency/timesheets.jpg", alt: "Timesheets" },
      { src: "/work/agency/invoices.jpg", alt: "Invoices" },
    ],
    timeline: "2025",
    role: "Architecture, Backend, Frontend",
  },
  {
    id: "student-visa-portal",
    title: "Student Visa Consultancy Portal",
    subtitle: "Applications, Visa Status & Documents",
    category: "Portal",
    summary:
      "Portal for students and staff to manage study applications, visa workflows, checklists, and documents.",
    problem:
      "Applicants lacked visibility; staff handled updates manually across emails and spreadsheets.",
    solution:
      "Unified pipeline with profile completion tracking, program requests, approvals, and visa application stages.",
    impact:
      "40% fewer support tickets; processing throughput up by 2.1× with clear status visibility.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "ShadCN", "Framer Motion"],
    tags: ["Workflows", "Docs", "Status"],
    cover: "/work/visa/cover.jpg",
    images: [
      { src: "/work/visa/students.jpg", alt: "Student List" },
      { src: "/work/visa/requests.jpg", alt: "Program Requests" },
      { src: "/work/visa/visa.jpg", alt: "Visa Status" },
    ],
    timeline: "2024 → 2025",
    role: "Full‑stack",
  },
  {
    id: "hosting-agency-suite",
    title: "Hosting Agency Management Suite",
    subtitle: "Billing, DNS, Uptime & Client Portals",
    category: "Portal",
    summary:
      "A unified suite to manage hosting clients: subscriptions, renewals, DNS records, uptime monitors, and alerts.",
    problem:
      "Renewals were missed and DNS changes lacked auditability; uptime incidents weren’t centralized.",
    solution:
      "Multi‑provider integrations for DNS, status webhooks, automated renewal reminders, and client self‑service.",
    impact:
      "Renewal lapses cut to ~0%; incident MTTR reduced by 54% with consolidated alerts.",
    tech: ["Next.js", "tRPC", "Stripe", "PlanetScale/MySQL", "Tailwind"],
    tags: ["Stripe", "DNS", "Monitoring"],
    cover: "/work/hosting/cover.jpg",
    images: [
      { src: "/work/hosting/billing.jpg", alt: "Billing" },
      { src: "/work/hosting/dns.jpg", alt: "DNS Manager" },
      { src: "/work/hosting/status.jpg", alt: "Uptime" },
    ],
    timeline: "2023 → 2025",
    role: "Engineering, Integrations",
  },
  {
    id: "marketing-site",
    title: "High‑End Marketing Website",
    subtitle: "Conversion‑first, blazing performance",
    category: "Website",
    summary:
      "Premium website with cinematic hero, sticky sections, and CMS for case studies and blogs.",
    problem:
      "Static site with poor conversions and inconsistent visuals.",
    solution:
      "Rebuilt with a design system, SEO hygiene, and structured content. ",
    impact:
      "+62% lead submissions in 60 days; CLS < 0.05; Lighthouse 95+.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "MDX CMS"],
    tags: ["SEO", "Design System", "MDX"],
    cover: "/work/site/cover.jpg",
    images: [
      { src: "/work/site/hero.jpg", alt: "Hero" },
      { src: "/work/site/sections.jpg", alt: "Sections" },
      { src: "/work/site/blog.jpg", alt: "Blog" },
    ],
    role: "Design & Frontend",
  },
  {
    id: "field-service-mobile",
    title: "Field Service Mobile App",
    subtitle: "Jobs, checklists & offline mode",
    category: "Mobile App",
    summary:
      "Technician‑facing mobile app to receive jobs, capture media, and sync when back online.",
    problem:
      "Technicians had unreliable connectivity and inconsistent job evidence.",
    solution:
      "Offline‑first app with local queue, photo/video capture, and supervisor approvals.",
    impact:
      "Job completion accuracy up 31%; fewer re‑dispatches.",
    tech: ["React Native", "Expo", "SQLite", "Zustand"],
    tags: ["Offline", "Media", "Approvals"],
    cover: "/work/mobile/cover.jpg",
    images: [
      { src: "/work/mobile/jobs.jpg", alt: "Jobs" },
      { src: "/work/mobile/checklist.jpg", alt: "Checklist" },
      { src: "/work/mobile/review.jpg", alt: "Review" },
    ],
    role: "Mobile Lead",
  },
];

// =====================================
// Page — Long, Kuberto-style featured case studies (one section per project)
// =====================================

export default function FeaturedWorkPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO — big, thin typography */}
      <Hero />

      {/* PROJECT SECTIONS */}
      <div className="relative">
        {PROJECTS.map((p, i) => (
          <ProjectSection key={p.id} project={p} index={i} />)
        )}
      </div>

      {/* CTA footer (optional) */}
      <footer className="max-w-6xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-gray-200 p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Have an ambitious build?</h2>
          <p className="text-gray-600 mt-4 text-lg md:text-xl">Let’s architect it with clarity, velocity, and reliability.</p>
          <a href="#contact" className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full bg-gray-900 text-white text-lg hover:opacity-90">Book a call</a>
        </motion.div>
      </footer>
    </div>
  );
}

// =====================================
// Hero
// =====================================

function Hero() {
  const wrap = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={wrap} className="relative w-full min-h-[80svh] flex items-center justify-center overflow-hidden">
      <Image src="/work/hero-bg.jpg" alt="Our Work" fill priority className="object-cover" />
      <motion.div style={{ y, opacity }} className="relative z-10 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white">
          Featured <span className="font-semibold">Work</span>
        </h1>
        <p className="mt-4 text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
          Big visuals. Deep detail. Smooth as silk. One project per section—no cards.
        </p>
      </motion.div>
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
}

// =====================================
// Project Section (full-width, alternating layout)
// =====================================

function ProjectSection({ project, index }: { project: Project; index: number }) {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start 80%", "end 20%"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const headingY = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const isEven = index % 2 === 0;

  return (
    <section ref={container} className="relative py-20 md:py-28">
      {/* subtle background wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-[400px] w-[70vw] -translate-x-1/2 rounded-[50%] bg-gray-100/60 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header Row */}
        <div className={`grid md:grid-cols-12 gap-8 md:gap-12 items-end ${isEven ? "" : "md:[&>*:first-child]{order-2}"}`}>
          <motion.div style={{ y: headingY, opacity: headingOpacity }} className="md:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs text-gray-500 mb-3">
              <span className="px-2 py-1 rounded-full border border-gray-200">{project.category}</span>
              {project.tags.slice(0, 3).map((t) => (
                <span key={t} className="px-2 py-1 rounded-full border border-gray-200">{t}</span>
              ))}
            </div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">
              {project.title} <span className="font-semibold">{project.subtitle ? "—" : ""}</span> {project.subtitle && <span className="font-semibold">{project.subtitle}</span>}
            </h2>
          </motion.div>
          <div className="md:col-span-5 md:justify-self-end text-gray-600 text-lg">
            <p>{project.summary}</p>
          </div>
        </div>

        {/* Cover (full-bleed inside container) */}
        <div className="mt-10 md:mt-14">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl border border-gray-200">
            <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0">
              <Image src={project.cover} alt={project.title} fill className="object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Details grid */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Rich copy */}
          <div className="md:col-span-8 space-y-8">
            <Reveal>
              <DetailBlock title="Problem" text={project.problem} />
            </Reveal>
            <Reveal delay={0.1}>
              <DetailBlock title="Solution" text={project.solution} />
            </Reveal>
            <Reveal delay={0.2}>
              <DetailBlock title="Impact" text={project.impact} emphasis />
            </Reveal>

            {/* Image strip gallery */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {project.images.map((img, i) => (
                <figure key={i} className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </figure>
              ))}
            </motion.div>
          </div>

          {/* Sticky meta */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-20 space-y-6">
              <InfoCard label="Timeline" value={project.timeline} />
              <InfoCard label="Role" value={project.role} />
              <TechStack tech={project.tech} />
              {project.link && project.link.length > 0 && (
                <div className="rounded-2xl border border-gray-200 p-5">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">Links</div>
                  <ul className="space-y-2">
                    {project.link.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:opacity-80">{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================================
// Bits
// =====================================

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function DetailBlock({ title, text, emphasis = false }: { title: string; text: string; emphasis?: boolean }) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">{title}</h3>
      <p className={emphasis ? "text-gray-900 text-xl leading-relaxed" : "text-gray-700 text-lg leading-relaxed"}>{text}</p>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
      <div className="mt-1 font-medium text-gray-900">{value}</div>
    </div>
  );
}

function TechStack({ tech }: { tech: string[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5 bg-white">
      <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tech</div>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1.5 rounded-full text-sm bg-gray-100 border border-gray-200">{t}</span>
        ))}
      </div>
    </div>
  );
}
