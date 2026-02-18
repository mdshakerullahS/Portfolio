"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    { name: "Stack", href: "#stack" },
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
        paddingBlock: isScrolled ? 16 : 24,
        backgroundColor: isScrolled ? "rgba(10,10,12,0.6)" : "rgba(10,10,12,0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        borderBottomColor: isScrolled
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0)",
      }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-0 inset-x-0 z-50 border-b"
    >
      <div className="px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 bg-linear-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center"
          >
            <span className="text-3xl font-mono font-black">S</span>
          </motion.div>

          <div className="flex items-center gap-0.5">
            <span className="text-3xl font-bold tracking-tighter">
              shakerullah
            </span>
            <motion.div
              animate={{ scale: [1, 0.9, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-blue-400 mt-3.5 rounded-full"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={link.href}
                className="text-gray-400 hover:text-blue-400 transition-colors font-mono font-semibold text-sm tracking-widest uppercase relative"
              >
                {link.name}

                {/* underline animation */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-0.5 bg-blue-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="#contact"
              className="px-5 py-2 ml-8 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all font-semibold text-sm"
            >
              CONNECT ME
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          aria-label="Menu"
          className="md:hidden text-white"
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
                transition={{ duration: 0.25 }}
              >
                <X />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.25 }}
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
            className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0c] border-b border-white/10 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={mobileLinkVariants}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-gray-300 hover:text-blue-400"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={mobileLinkVariants}>
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-gray-300 hover:text-blue-400"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
