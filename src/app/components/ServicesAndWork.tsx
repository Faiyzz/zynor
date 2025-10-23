"use client";

import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Service = { id: string; title: string; description: string; href?: string };
type CaseStudy = { id: string; tag: string; title: string; summary: string; imageSrc?: string; href?: string };

const ease = cubicBezier(0.2, 0.8, 0.2, 1);

// ——————————————————————————————————————————
// DATA (edit freely)
// ——————————————————————————————————————————
const services: Service[] = [
  { id: "software-engineering", title: "Software Engineering", description: "Robust, scalable software—built for speed, security, and longevity." },
  { id: "database-development", title: "Database Development", description: "High-performance data architecture powering mission-critical systems." },
  { id: "ui-ux-design", title: "UI & UX Design", description: "Interfaces that feel effortless and convert with clarity." },
  { id: "devops-cicd", title: "DevOps & CI/CD", description: "Automated pipelines and smart cloud ops for reliable delivery." },
  { id: "product-design", title: "Product Design", description: "Research, roadmaps, and rapid iteration—from concept to launch." },
  { id: "web-development", title: "Web Development", description: "Fast, maintainable web apps with clean architecture and DX." },
  { id: "mobile-apps", title: "Mobile Apps", description: "Native-quality iOS & Android with a shared core and great UX." },
  { id: "expert-consulting", title: "Expert Consulting", description: "Architecture reviews, audits, and guidance on critical bets." },
  { id: "ai-ml", title: "AI & Machine Learning", description: "From RAG to on-device inference—practical, safe, and useful." },
  { id: "software-modernization", title: "Software Modernization", description: "Revive legacy systems with incremental, low-risk upgrades." },
];

const caseStudies: CaseStudy[] = [
  { id: "att", tag: "AT&T", title: "Transforming Telecom Software for AT&T", summary: "Warehouses, reporting, and device software that elevated care.", imageSrc: "/images/case-att.png" },
  { id: "harvard", tag: "Harvard University", title: "Harvard’s E-Course Infrastructure", summary: "Cross-platform courseware with seamless compatibility.", imageSrc: "/images/case-harvard.png" },
  { id: "tektronix", tag: "Tektronix", title: "Revamping Tektronix’s UI", summary: "Customer-centric design and a scalable component system.", imageSrc: "/images/case-tek.png" },
];

// ——————————————————————————————————————————
// VISUAL PRIMITIVES
// ——————————————————————————————————————————
const section = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const gridParent = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.35, ease } }}
      className={[
        "relative rounded-3xl",
        "border border-white/8 bg-neutral-900/60",
        "backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_30px_80px_-40px_rgba(0,0,0,0.6)]",
      ].join(" ")}
    >
      {/* Soft brand glow (on hover slightly brighter) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-90"
        style={{
          background:
            "radial-gradient(50% 40% at 20% 0%, rgba(138,92,255,0.06), transparent 60%), radial-gradient(60% 50% at 90% 0%, rgba(58,196,236,0.06), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

// ——————————————————————————————————————————
// COMPONENT
// ——————————————————————————————————————————
export default function ServicesAndWorkPro() {
  return (
    <section className="w-full bg-neutral-950 text-white">
      {/* Header */}
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20%" }}
        className="mx-auto max-w-7xl px-6 pt-24 md:px-8"
      >
        <h2 className="text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl font-[350]">
          Built for big outcomes.
          <br className="hidden sm:block" />
          <span className="text-white/60"> Strategy, design, engineering, delivery.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          We ship premium software with a ruthless focus on clarity and reliability. Fewer moving parts,
          stronger results.
        </p>
      </motion.div>

      {/* Services */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 pb-24 pt-14">
        <motion.div
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div key={s.id} variants={gridItem} className="group">
              <Card>
                <div className="p-8 md:p-10">
                  <div className="mb-5 h-12 w-12 rounded-2xl border border-white/12 grid place-items-center bg-neutral-900/70">
                    <div className="h-2 w-6 rounded-full bg-white/40" />
                  </div>
                  <h3 className="text-2xl md:text-[28px] leading-tight font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base md:text-lg leading-7 text-white/70">{s.description}</p>
                  {s.href && (
                    <a
                      href={s.href}
                      className="mt-6 inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-white"
                    >
                      Explore <ArrowRight className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Featured Work */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 pb-28">
        <div className="mb-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-[350] tracking-tight">Featured work</h3>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
            Select engagements where strong product thinking and precise engineering changed the curve.
          </p>
        </div>

        <motion.div
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudies.map((c) => (
            <motion.article key={c.id} variants={gridItem} className="group">
              <Card>
                <div className="p-3">
                  <div className="relative h-[220px] w-full overflow-hidden rounded-2xl">
                    {c.imageSrc ? (
                      <Image src={c.imageSrc} alt={c.title} fill className="object-cover" sizes="(min-width: 1024px) 420px, 100vw" />
                    ) : (
                      <div
                        className="h-full w-full"
                        style={{
                          background:
                            "linear-gradient(135deg,#8A5CFF33,#3AC4EC22 30%,transparent 60%), radial-gradient(80% 60% at 20% 20%, #B18CFF1A, transparent)",
                        }}
                      />
                    )}
                  </div>

                  <div className="px-5 pb-7 pt-6">
                    <span className="text-xs font-semibold tracking-widest uppercase text-white/60">{c.tag}</span>
                    <h4 className="mt-2 text-2xl leading-tight font-semibold">{c.title}</h4>
                    <p className="mt-3 text-base leading-7 text-white/70">{c.summary}</p>
                    {c.href && (
                      <a href={c.href} className="mt-6 inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-white">
                        Read case study <ArrowRight className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
