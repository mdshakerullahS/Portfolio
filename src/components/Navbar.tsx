"use client";

import { useState, useEffect, FC } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { name: string; href: string }[] = [
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-3xl font-mono font-black">S</span>
          </div>
          <div className="flex items-center gap-0.5">
            <span className="text-xl font-bold tracking-tighter">
              shakerullah
            </span>
            <div className="w-1.5 h-1.5 bg-blue-400 mt-2 rounded-full" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-blue-400 transition-colors mono text-sm tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2 ml-8 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all font-semibold text-sm"
          >
            CONNECT ME
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0c] border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold text-gray-300 hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
