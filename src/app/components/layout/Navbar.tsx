"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ACCENT = "rgb(59, 130, 246)"; // Tailwind blue-500

type MenuKey = "services" | "solutions" | "industries" | null;

const services = [
  {
    group: "Software services",
    items: [
      { title: "Software Engineering", desc: "Robust and scalable custom software development.", href: "/services/software-engineering" },
      { title: "Database Development", desc: "Data storage and I/O that forms the backbone your technology.", href: "/services/database-development" },
      { title: "UI & UX Design", desc: "User experience design and product strategy.", href: "/services/ui-ux" },
      { title: "DevOps & CI/CD", desc: "Streamlined ops for faster, more reliable delivery.", href: "/services/devops-cicd" },
    ],
  },
  {
    group: "Expert witness services",
    items: [
      { title: "Trade Secret Expert", desc: "Software trade secret deciphering and misappropriation.", href: "/expertise/trade-secret" },
      { title: "Patent Expert", desc: "Software patent review, claim charts, and expert reports.", href: "/expertise/patent" },
      { title: "Source Code Expert", desc: "Source code analysis for complex litigation cases.", href: "/expertise/source-code" },
      { title: "Copyright & CMI Expert", desc: "Expert analysis on copyright issues and CMI in software.", href: "/expertise/copyright-cmi" },
    ],
  },
];

const solutions = [
  { title: "Web Development", desc: "High-performance web solutions for modern businesses.", href: "/solutions/web-development" },
  { title: "Mobile App Development", desc: "Custom mobile applications for iOS and Android platforms.", href: "/solutions/mobile-apps" },
  { title: "Expert Consulting", desc: "Expert witness and IP litigation consulting for software expertise.", href: "/solutions/expert-consulting" },
  { title: "AI & Machine Learning", desc: "Intelligent solutions driving innovation and automation.", href: "/solutions/ai-ml" },
  { title: "Sprint Zero", desc: "Intensive pre-development research and planning phase.", href: "/solutions/sprint-zero" },
  { title: "Software Modernization", desc: "Breathe new life into outdated and legacy software.", href: "/solutions/modernization" },
  { title: "Software Maintenance", desc: "Keep your software secure, up to date, and bug-free.", href: "/solutions/maintenance" },
  { title: "Project Takeover", desc: "Revitalize projects with expert guidance and execution.", href: "/solutions/project-takeover" },
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
        solid ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm" : "bg-transparent",
      ].join(" ")}
      role="banner"
    >
      <nav
        className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-2 px-4 py-3 md:px-6 lg:px-8"
        aria-label="Primary"
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide text-gray-900">
          <span className="text-xl md:text-2xl" style={{ letterSpacing: "0.06em" }}>ZYNOR</span>
        </Link>

        {/* CENTERED desktop nav */}
        <div className="hidden lg:flex items-center justify-center gap-1">
          <Dropdown
            label="Services"
            active={openKey === "services"}
            onOpen={() => { cancelClose(); setOpenKey("services"); }}
            onClose={scheduleClose}
            panelClass="w-[min(100vw-2rem,640px)] p-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {services.map((group) => (
                <div key={group.group}>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">{group.group}</div>
                  <ul className="space-y-2">
                    {group.items.map((it) => (
                      <li key={it.title}>
                        <Link
                          href={it.href}
                          className="group block rounded-md p-2 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        >
                          <div className="text-sm font-medium text-gray-900">{it.title}</div>
                          <p className="mt-1 text-[13px] leading-5 text-gray-600">{it.desc}</p>
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
            onOpen={() => { cancelClose(); setOpenKey("solutions"); }}
            onClose={scheduleClose}
            panelClass="w-[min(100vw-2rem,640px)] p-4"
          >
            <div className="grid grid-cols-2 gap-3">
              {solutions.map((it) => (
                <Link
                  key={it.title}
                  href={it.href}
                  className="group rounded-md p-2 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                >
                  <div className="text-sm font-medium text-gray-900">{it.title}</div>
                  <p className="mt-1 text-[13px] leading-5 text-gray-600">{it.desc}</p>
                </Link>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <Link
                href="/solutions"
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white"
                style={{ backgroundColor: ACCENT }}
              >
                View all solutions
              </Link>
            </div>
          </Dropdown>

       

          <Link href="/work" className="px-3 py-2 text-sm text-gray-800 hover:text-gray-950">Our work</Link>
          <Link href="/about" className="px-3 py-2 text-sm text-gray-800 hover:text-gray-950">About</Link>
        </div>

        {/* Right: Contact + Hamburger */}
        <div className="flex items-center justify-end gap-2">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            style={{ backgroundColor: ACCENT }}
          >
            Contact
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
            aria-label="Open Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN, OPAQUE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-white"
          role="dialog"
          aria-modal="true"
        >
          {/* Make contents scrollable while the background is locked */}
          <div className="flex h-[100svh] flex-col overflow-y-auto">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <Link href="/" className="font-semibold tracking-wide text-gray-900">
                <span className="text-xl" style={{ letterSpacing: "0.06em" }}>ZYNOR</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                  style={{ backgroundColor: ACCENT }}
                >
                  Contact
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M6 18L18 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-4 pb-16 pt-3 max-w-5xl mx-auto w-full">
              <MobileAccordion title="Services">
                {services.map((g) => (
                  <div key={g.group} className="mb-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">{g.group}</div>
                    <ul className="mt-2 space-y-2">
                      {g.items.map((it) => (
                        <li key={it.title}>
                          <Link href={it.href} onClick={() => setMobileOpen(false)} className="block rounded-md p-2 text-sm hover:bg-gray-50">
                            {it.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </MobileAccordion>

              <MobileAccordion title="Solutions" defaultOpen>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {solutions.map((it) => (
                    <li key={it.title}>
                      <Link href={it.href} onClick={() => setMobileOpen(false)} className="block rounded-lg p-3 hover:bg-gray-50">
                        <div className="text-sm font-medium text-gray-900">{it.title}</div>
                        <p className="mt-1 text-[13px] leading-5 text-gray-600">{it.desc}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 block w-full rounded-md px-4 py-2 text-center text-sm font-medium"
                  style={{ backgroundColor: "rgba(59,130,246,0.12)", color: ACCENT }}
                >
                  View all solutions
                </Link>
              </MobileAccordion>

              <MobileAccordion title="Industries">
                <ul className="space-y-2">
                  {industries.map((it) => (
                    <li key={it.title}>
                      <Link href={it.href} onClick={() => setMobileOpen(false)} className="block rounded-md p-2 text-sm hover:bg-gray-50">
                        {it.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileAccordion>

              <div className="mt-6 space-y-3">
                <Link href="/work" onClick={() => setMobileOpen(false)} className="block rounded-md px-2 py-2 text-base">Our work</Link>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block rounded-md px-2 py-2 text-base">About</Link>
              </div>
            </div>
          </div>
        </div>
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

function Dropdown({ label, active, onOpen, onClose, children, panelClass = "" }: DropdownProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={onClose}
    >
      <button
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-gray-800 hover:text-gray-950 focus:outline-none"
        aria-expanded={active}
        aria-haspopup="true"
      >
        {label}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mt-[1px] opacity-70">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      {/* Note: removed `w-max` so panels respect our controlled widths */}
      <div
        className={`absolute left-0 top-full z-[80] pt-2 ${active ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!active}
      >
        {active && (
          <div className={`overflow-hidden rounded-xl border bg-white text-left shadow-xl ring-1 ring-black/5 ${panelClass}`}>
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
        {title}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`transition ${open ? "rotate-180" : "rotate-0"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}
