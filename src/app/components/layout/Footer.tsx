"use client"

import Link from "next/link"
import { useCursorStore } from "../../../lib/store"
import { motion, useInView, cubicBezier } from "framer-motion"
import { useRef } from "react"

export default function PremiumFooter() {
  const { setCursorHovered, unsetCursorHovered } = useCursorStore()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: cubicBezier(0.16, 1, 0.3, 1),
        duration: 0.8
      }
    }
  }

  return (
    <footer 
      ref={ref}
      className="w-full px-6 lg:px-12 py-20 bg-[#070b14] text-white relative overflow-hidden border-t border-blue-900/30"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0e1b3a] to-transparent" />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.06 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-600 blur-[120px]"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.04 } : {}}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-500 blur-[120px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Brand Signature */}
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
              className="text-5xl md:text-7xl font-bold tracking-tighter hover:text-blue-400 transition-colors duration-500 inline-block"
            >
              ZYNOR
              <span className="text-blue-400">.</span>
            </Link>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-blue-300/70 mt-4"
          >
            Engineering ideas into reality
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
        >
          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h3 className="text-blue-300 text-sm uppercase tracking-widest mb-6">Explore</h3>
            <nav className="space-y-4">
              {["Services", "Solutions", "Industries", "Work", "About", "Contact"].map((item) => (
                <motion.div 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    onMouseEnter={setCursorHovered}
                    onMouseLeave={unsetCursorHovered}
                    className="text-xl font-medium hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-blue-300 text-sm uppercase tracking-widest mb-6">Connect</h3>
            <div className="space-y-6">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:hello@zynor.com"
                onMouseEnter={setCursorHovered}
                onMouseLeave={unsetCursorHovered}
                className="block text-xl font-medium hover:text-blue-400 transition-colors duration-300"
              >
                hello@zynor.com
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="tel:+1234567890"
                onMouseEnter={setCursorHovered}
                onMouseLeave={unsetCursorHovered}
                className="block text-xl font-medium hover:text-blue-400 transition-colors duration-300"
              >
                +1 (234) 567-890
              </motion.a>
            </div>
          </motion.div>

          {/* Social & CTA */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-blue-300 text-sm uppercase tracking-widest mb-6">Follow</h3>
              <div className="flex flex-wrap gap-4">
                {["LinkedIn", "Twitter", "GitHub", "Dribbble"].map((platform) => (
                  <motion.a
                    key={platform}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://${platform.toLowerCase()}.com/zynor`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={setCursorHovered}
                    onMouseLeave={unsetCursorHovered}
                    className="px-4 py-2 bg-blue-950/30 hover:bg-blue-950/50 rounded-full text-sm transition-colors duration-300 border border-blue-900/50"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="pt-6"
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
                    transition: { repeat: Infinity, duration: 2 }
                  }}
                  className="text-blue-400 text-xl"
                >
                  →
                </motion.span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-blue-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, transition: { delay: 0.6 } } : {}}
          className="pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-blue-300/50 text-sm">© {new Date().getFullYear()} ZYNOR. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-300/50 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-300/50 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
