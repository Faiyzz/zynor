"use client"

import Link from "next/link"
import { useCursorStore } from "../../../lib/store"
import { motion, useInView, cubicBezier } from "framer-motion"
import { useRef } from "react"

const ACCENT = "rgb(108,24,152)"

const services = [
  { label: "Software Engineering", href: "/services/software-engineering" },
  { label: "Database Development", href: "/services/database-development" },
  { label: "UI & UX Design", href: "/services/ui-ux" },
  { label: "DevOps & CI/CD", href: "/services/devops-cicd" },
]

const solutions = [
  { label: "Web Development", href: "/solutions/web-development" },
  { label: "Mobile App Development", href: "/solutions/mobile-apps" },
  { label: "Expert Consulting", href: "/solutions/expert-consulting" },
  { label: "AI & Machine Learning", href: "/solutions/ai-ml" },
  { label: "Sprint Zero", href: "/solutions/sprint-zero" },
  { label: "Software Modernization", href: "/solutions/modernization" },
  { label: "Software Maintenance", href: "/solutions/maintenance" },
  { label: "Project Takeover", href: "/solutions/project-takeover" },
]

export default function PremiumFooter() {
  const { setCursorHovered, unsetCursorHovered } = useCursorStore()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { ease: cubicBezier(0.16, 1, 0.3, 1), duration: 0.8 },
    },
  }

  return (
    <footer
      ref={ref}
      className="w-full px-6 lg:px-12 py-20 bg-black text-white relative overflow-hidden "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.08 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(108,24,152,0.5) 0%, transparent 70%)`,
            filter: "blur(120px)",
          }}
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.05 } : {}}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(108,24,152,0.4) 0%, transparent 70%)`,
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Brand */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              onMouseEnter={setCursorHovered}
              onMouseLeave={unsetCursorHovered}
              className="text-5xl md:text-7xl font-bold tracking-tighter hover:text-[rgb(108,24,152)] transition-colors duration-500 inline-block"
            >
              ZYNOR<span className="text-[rgb(108,24,152)]">.</span>
            </Link>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-400 mt-4"
          >
            Engineering ideas into reality
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20"
        >
          {/* Explore */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm text-neutral-400 uppercase tracking-widest mb-6">
              Explore
            </h3>
            <nav className="space-y-4">
              {[
                { label: "Services", href: "/services" },
                { label: "Solutions", href: "/solutions" },
                { label: "Our Work", href: "/work" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.href}
                    onMouseEnter={setCursorHovered}
                    onMouseLeave={unsetCursorHovered}
                    className="text-xl font-medium hover:text-[rgb(108,24,152)] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Services quick links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm text-neutral-400 uppercase tracking-widest mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    onMouseEnter={setCursorHovered}
                    onMouseLeave={unsetCursorHovered}
                    className="text-base hover:text-[rgb(108,24,152)] transition-colors duration-300"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions quick links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm text-neutral-400 uppercase tracking-widest mb-6">
              Solutions
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {solutions.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    onMouseEnter={setCursorHovered}
                    onMouseLeave={unsetCursorHovered}
                    className="text-base hover:text-[rgb(108,24,152)] transition-colors duration-300"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-sm text-neutral-400 uppercase tracking-widest mb-6">
                Connect
              </h3>
              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:hello@zynor.com"
                  onMouseEnter={setCursorHovered}
                  onMouseLeave={unsetCursorHovered}
                  className="block text-lg font-medium hover:text-[rgb(108,24,152)] transition-colors duration-300"
                >
                  hello@zynor.com
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="tel:+1234567890"
                  onMouseEnter={setCursorHovered}
                  onMouseLeave={unsetCursorHovered}
                  className="block text-lg font-medium hover:text-[rgb(108,24,152)] transition-colors duration-300"
                >
                  +1 (234) 567-890
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-sm text-neutral-400 uppercase tracking-widest mb-4">
                Follow
              </h3>
              <div className="flex flex-wrap gap-3">
                {["LinkedIn", "Twitter", "GitHub", "Dribbble"].map(
                  (platform) => (
                    <motion.a
                      key={platform}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://${platform.toLowerCase()}.com/zynor`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={setCursorHovered}
                      onMouseLeave={unsetCursorHovered}
                      className="px-4 py-2 bg-[#111]/50 hover:bg-[#1a1a1a] rounded-full text-sm transition-colors duration-300 border border-neutral-800"
                    >
                      {platform}
                    </motion.a>
                  )
                )}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="pt-2"
            >
              <Link
                href="/contact"
                onMouseEnter={setCursorHovered}
                onMouseLeave={unsetCursorHovered}
                className="inline-flex items-center gap-3 group relative"
              >
                <span className="text-xl font-medium">Start a Project</span>
                <motion.span
                  animate={{
                    x: [0, 6, 0],
                    transition: { repeat: Infinity, duration: 2 },
                  }}
                  className="text-[rgb(108,24,152)] text-xl"
                >
                  →
                </motion.span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-[rgb(108,24,152)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            isInView ? { opacity: 1, transition: { delay: 0.6 } } : {}
          }
          className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} ZYNOR. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-neutral-500 hover:text-[rgb(108,24,152)] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-neutral-500 hover:text-[rgb(108,24,152)] text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
