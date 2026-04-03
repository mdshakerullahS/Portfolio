"use client";

import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 1);
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(8px)",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1] as const,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        paddingBlock: isScrolled ? 12 : 20,
        backgroundColor: isScrolled ? "rgba(10,10,12,0.8)" : "rgba(10,10,12,0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: isScrolled
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0)",
      }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-0 inset-x-0 z-50 border-b transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo & Role */}
        <Link
          href="/"
          aria-label="Logo"
          className="flex items-center gap-3 group"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0"
          >
            <span className="text-3xl font-mono font-black text-white transition-transform duration-300 group-hover:scale-110">
              S
            </span>
          </motion.div>

          <div className="flex flex-col transition-transform group-hover:translate-x-0.5">
            <span className="text-xl font-bold tracking-tight leading-none">
              shakerullah
            </span>
            <span className="text-[10px] uppercase tracking-[0.03rem] text-blue-400 font-bold mt-1">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 border-r border-white/10 pr-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={link.href}
                  aria-label={link.name}
                  className="text-gray-400 hover:text-blue-400 transition-colors font-mono font-semibold text-[11px] tracking-widest uppercase relative"
                >
                  {link.name}
                  <motion.span
                    className="absolute left-0 -bottom-1 h-0.5 bg-blue-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/mdshakerullahS"
              aria-label="GitHub profile"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                aria-label="Contact section"
                className="px-5 py-2.5 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all font-bold text-xs uppercase tracking-wider"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          aria-label="Menu"
          className="md:hidden text-white p-2"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden absolute min-h-screen top-full left-0 w-full bg-[#0a0a0c] border-b border-white/10 p-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={mobileLinkVariants}>
                <Link
                  href={link.href}
                  aria-label={link.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-gray-300 hover:text-blue-400 block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              variants={mobileLinkVariants}
              className="pt-8 border-t border-white/5 flex flex-col items-center gap-8"
            >
              <Link
                href="https://github.com/mdshakerullahS"
                aria-label="GitHub profile"
                className="flex items-center gap-2 text-gray-400"
              >
                <Github size={20} /> GitHub Profile
              </Link>
              <Link
                href="#contact"
                aria-label="Contact section"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-blue-500 text-white rounded-xl text-center font-bold text-lg"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
