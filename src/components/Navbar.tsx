"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAVLINKS } from "@/constants";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        totalScrollable > 0
          ? Math.min((window.scrollY / totalScrollable) * 100, 100)
          : 0,
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-100 py-5 border-b border-transparent ${isScrolled && "bg-[rgba(10,10,10,0.85)] backdrop-blur-md border-border"} transition-[border-color,background,backdrop-filter] duration-300`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1.5px] bg-accent origin-left"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      <div className="wrapper">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/"
              className="font-display font-extrabold text-[1.1rem] -tracking-[0.02em]"
            >
              shakerullah<span className="text-accent">.</span>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8 list-none">
            {NAVLINKS.map((nav, i) => (
              <motion.li
                key={nav.url}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + i * 0.07,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  whileHover={
                    nav.label !== "Hire Me" ? { y: -1 } : { scale: 1.05, y: -2 }
                  }
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Link
                    href={nav.url}
                    className={`font-mono text-[0.78rem] tracking-[0.05em] transition-colors ${nav.label === "Hire Me" ? "bg-accent hover:bg-accent-hover tracking-[0.02em] text-black hover:text-black px-4.5 py-2 rounded-sm font-medium hover:shadow-[0_8px_24px_rgba(232,255,71,0.2)] transition-[background,box-shadow]" : "text-text-muted hover:text-text"} duration-200`}
                  >
                    {nav.label}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col justify-center gap-1.25 w-9 h-9 bg-transparent border border-border rounded-md cursor-pointer p-2 z-200 shrink-0 lg:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-[1.5px] rounded-xs bg-text origin-center"
              animate={
                isMobileMenuOpen ? { y: 6.5, rotate: 45 } : { y: 0, rotate: 0 }
              }
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-[1.5px] rounded-xs bg-text origin-center"
              animate={
                isMobileMenuOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[1.5px] rounded-xs bg-text origin-center"
              animate={
                isMobileMenuOpen
                  ? { y: -6.5, rotate: -45 }
                  : { y: 0, rotate: 0 }
              }
              transition={{ duration: 0.25 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-150 flex flex-col items-center justify-center gap-2 pt-20 px-8 pb-12 bg-[rgba(10,10,10,0.97)] backdrop-blur-xl lg:hidden"
          >
            {NAVLINKS.map((nav, i) => (
              <motion.div
                key={nav.url}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <Link
                  href={nav.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-center font-display text-[2rem] font-bold -tracking-[0.02em] py-2.5 text-muted transition-colors duration-200 hover:text-accent ${nav.label === "Hire Me" && "mt-4 bg-accent text-black px-9 py-3.5 rounded-md font-mono font-semibold text-[0.9rem] tracking-[0.03em]"}`}
                >
                  {nav.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
