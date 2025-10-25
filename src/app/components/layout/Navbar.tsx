"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";

// lucide-react icons (pick + adjust as you like)
import {
  Code2,
  Database,
  Palette,
  Wrench,
  Globe,
  Smartphone,
  Brain,
  Rocket,
  RefreshCw,
  ShieldCheck,
  Repeat,
  Briefcase,
} from "lucide-react";

const ACCENT = "var(--color-accent)";

type MenuKey = "services" | "solutions" | null;

const services = [
  {
    group: "Software services",
    items: [
      {
        icon: <Code2 className="h-4 w-4 text-accent" />,
        title: "Software Engineering",
        desc: "Robust and scalable custom software development.",
        href: "/services/software-engineering",
      },
      {
        icon: <Database className="h-4 w-4 text-accent" />,
        title: "Database Development",
        desc: "Data storage and I/O that forms the backbone your technology.",
        href: "/services/database-development",
      },
      {
        icon: <Palette className="h-4 w-4 text-accent" />,
        title: "UI & UX Design",
        desc: "User experience design and product strategy.",
        href: "/services/ui-ux",
      },
      {
        icon: <Wrench className="h-4 w-4 text-accent" />,
        title: "DevOps & CI/CD",
        desc: "Streamlined ops for faster, more reliable delivery.",
        href: "/services/devops-cicd",
      },
    ],
  },
];

const solutions = [
  {
    icon: <Globe className="h-4 w-4 text-accent" />,
    title: "Web Development",
    desc: "High-performance web solutions for modern businesses.",
    href: "/solutions/web-development",
  },
  {
    icon: <Smartphone className="h-4 w-4 text-accent" />,
    title: "Mobile App Development",
    desc: "Custom mobile applications for iOS and Android platforms.",
    href: "/solutions/mobile-apps",
  },
  {
    icon: <Briefcase className="h-4 w-4 text-accent" />,
    title: "Expert Consulting",
    desc: "Expert witness and IP litigation consulting for software expertise.",
    href: "/solutions/expert-consulting",
  },
  {
    icon: <Brain className="h-4 w-4 text-accent" />,
    title: "AI & Machine Learning",
    desc: "Intelligent solutions driving innovation and automation.",
    href: "/solutions/ai-ml",
  },
  {
    icon: <Rocket className="h-4 w-4 text-accent" />,
    title: "Sprint Zero",
    desc: "Intensive pre-development research and planning phase.",
    href: "/solutions/sprint-zero",
  },
  {
    icon: <RefreshCw className="h-4 w-4 text-accent" />,
    title: "Software Modernization",
    desc: "Breathe new life into outdated and legacy software.",
    href: "/solutions/modernization",
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-accent" />,
    title: "Software Maintenance",
    desc: "Keep your software secure, up to date, and bug-free.",
    href: "/solutions/maintenance",
  },
  {
    icon: <Repeat className="h-4 w-4 text-accent" />,
    title: "Project Takeover",
    desc: "Revitalize projects with expert guidance and execution.",
    href: "/solutions/project-takeover",
  },
];

interface Props {
  transparentStart?: boolean;
}

const ZynorNavbar: React.FC<Props> = ({ transparentStart = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openKey, setOpenKey] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const solid = !transparentStart || scrolled;

  const closeTimer = useRef<number | null>(null);
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenKey(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  function Portal({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return createPortal(children, document.body);
  }

  useEffect(() => {
    if (!transparentStart) return;
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentStart]);

  // ESC closes dropdowns & mobile
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenKey(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // HARD lock scroll on mobile menu (html + body), incl. iOS
  useEffect(() => {
    const html = document.documentElement;
    if (mobileOpen) {
      html.style.overflow = "hidden";
      html.style.overscrollBehavior = "contain";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      html.style.overflow = "";
      html.style.overscrollBehavior = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      html.style.overflow = "";
      html.style.overscrollBehavior = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[70] transition-colors",
        solid
          ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm"
          : "bg-transparent",
      ].join(" ")}
      role="banner"
    >
      <nav
        className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-2 px-4 py-3 md:px-6 lg:px-8"
        aria-label="Primary"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-wide text-gray-900"
        >
          <span
            className="text-xl md:text-2xl text-accent"
            style={{ letterSpacing: "0.06em" }}
          >
            ZYNOR
          </span>
        </Link>

        {/* CENTERED desktop nav 
        <div className="hidden lg:flex items-center justify-center gap-1">
          <Dropdown
            label="Services"
            active={openKey === "services"}
            onOpen={() => {
              cancelClose();
              setOpenKey("services");
            }}
            onClose={scheduleClose}
            panelClass="w-[min(100vw-2rem,560px)] p-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {services.map((group) => (
                <div key={group.group}>
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[.12em] text-gray-500">
                    {group.group}
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((it) => (
                      <li key={it.title}>
                        <Link
                          href={it.href}
                          className="group block rounded-lg p-3 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
                        >
                          <div className="flex items-start gap-2">
                            <div className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-accent)]/20">
                              {it.icon}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900 flex items-center gap-1">
                                <span>{it.title}</span>
                              </div>
                              <p className="mt-1 text-[13px] leading-5 text-gray-600">
                                {it.desc}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Dropdown>

          <Dropdown
            label="Solutions"
            active={openKey === "solutions"}
            onOpen={() => {
              cancelClose();
              setOpenKey("solutions");
            }}
            onClose={scheduleClose}
            panelClass="w-[min(100vw-2rem,560px)] p-4"
          >
            <div className="grid grid-cols-2 gap-3">
              {solutions.map((it) => (
                <Link
                  key={it.title}
                  href={it.href}
                  className="group rounded-lg p-3 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
                >
                  <div className="flex items-start gap-2">
                    <div className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-accent)]/20">
                      {it.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {it.title}
                      </div>
                      <p className="mt-1 text-[13px] leading-5 text-gray-600">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <Link
                href="/solutions"
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 bg-accent"
              >
                View all solutions
              </Link>
            </div>
          </Dropdown>

          <Link
            href="/work"
            className="px-3 py-2 text-sm text-gray-800 hover:text-gray-950"
          >
            Our work
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 text-sm text-gray-800 hover:text-gray-950"
          >
            About
          </Link>
        </div>*/}

        {/* Right: Contact + Hamburger 
        <div className="flex items-center justify-end gap-2">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 bg-accent"
          >
            Contact
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
            aria-label="Open Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>*/}
      </nav>

      {/* MOBILE OVERLAY via Portal */}
      {mobileOpen && (
        <Portal>
          <div
            className="fixed inset-0 z-[9999] bg-white"
            role="dialog"
            aria-modal="true"
          >
            {/* Keep menu scrollable while background is locked */}
            <div className="flex min-h-svh flex-col overflow-y-auto">
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <Link
                  href="/"
                  className="font-semibold tracking-wide text-gray-900"
                  onClick={() => setMobileOpen(false)}
                >
                  <span
                    className="text-xl text-accent"
                    style={{ letterSpacing: "0.06em" }}
                  >
                    ZYNOR
                  </span>
                </Link>
                <div className="flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 bg-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 6l12 12M6 18L18 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="px-4 pb-16 pt-3 max-w-5xl mx-auto w-full">
                {/* defaultOpen is now FALSE so Services won't auto-open 
                <MobileAccordion title="Services" defaultOpen={false}>
                  {services.map((g) => (
                    <div key={g.group} className="mb-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[.12em] text-gray-500">
                        {g.group}
                      </div>
                      <ul className="mt-2 space-y-2">
                        {g.items.map((it) => (
                          <li key={it.title}>
                            <Link
                              href={it.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-start gap-2 rounded-md p-2 text-sm hover:bg-gray-50"
                            >
                              <div className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-accent)]/20">
                                {it.icon}
                              </div>
                              <span className="text-gray-900">{it.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </MobileAccordion>

                <MobileAccordion title="Solutions" defaultOpen={false}>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {solutions.map((it) => (
                      <li key={it.title}>
                        <Link
                          href={it.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-2 rounded-lg p-3 hover:bg-gray-50"
                        >
                          <div className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-accent)]/20 shrink-0">
                            {it.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {it.title}
                            </div>
                            <p className="mt-1 text-[13px] leading-5 text-gray-600">
                              {it.desc}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/solutions"
                    onClick={() => setMobileOpen(false)}
                    className="mt-4 block w-full rounded-md px-4 py-2 text-center text-sm font-semibold bg-[var(--color-accent)]/10 text-accent ring-1 ring-[var(--color-accent)]/20"
                  >
                    View all solutions
                  </Link>
                </MobileAccordion>

                <div className="mt-6 space-y-3">
                  <Link
                    href="/work"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-2 py-2 text-base"
                  >
                    Our work
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-2 py-2 text-base"
                  >
                    About
                  </Link>
                </div>*/}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </header>
  );
};

export default ZynorNavbar;

/* ---------------------- helpers ---------------------- */
interface DropdownProps {
  label: string;
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
  /** extra classes applied to the panel container to control width/padding */
  panelClass?: string;
}

function Dropdown({
  label,
  active,
  onOpen,
  onClose,
  children,
  panelClass = "",
}: DropdownProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={onClose}
    >
      <button
        className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition ${
          active ? "text-accent" : "text-gray-800 hover:text-gray-950"
        } focus:outline-none`}
        aria-expanded={active}
        aria-haspopup="true"
      >
        <span>{label}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={`mt-[1px] transition ${
            active ? "rotate-180 text-accent" : "opacity-70"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </button>

      {/* dropdown panel */}
      <div
        className={`absolute left-0 top-full z-[80] pt-3 ${
          active ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!active}
      >
        {active && (
          <div
            className={`overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-xl ring-1 ring-black/5 ${panelClass}`}
            style={{
              boxShadow:
                "0px 24px 64px -8px rgba(0,0,0,0.15), 0px 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

function MobileAccordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b py-4 last:border-none">
      <button
        className="flex w-full items-center justify-between text-left text-[15px] font-semibold text-gray-900"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span>{title}</span>
          {open && (
            <span className="inline-block rounded-sm bg-[var(--color-accent)]/10 px-1.5 py-[2px] text-[10px] font-medium leading-none text-accent ring-1 ring-[var(--color-accent)]/20">
              Menu
            </span>
          )}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={`transition ${
            open ? "rotate-180 text-accent" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </button>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}
