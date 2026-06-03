"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Security QA Lab", href: "#network-security-projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel shadow-lg py-3"
          : "bg-gray-950/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="text-primary w-6 h-6 group-hover:animate-pulse" />
          <span className="font-mono text-lg font-bold tracking-tighter">
            {PORTFOLIO_DATA.personalInfo.name.split(" ")[0]}
            <span className="text-primary">.qa</span>
          </span>
        </a>

        {/* Desktop nav — visible from lg (1024px) up */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm hover:text-primary transition-colors hover:-translate-y-0.5 transform duration-200 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <a
            href="#contact"
            className="border border-primary text-primary px-4 py-2 rounded-md font-mono text-sm hover:bg-primary hover:text-background transition-all whitespace-nowrap"
          >
            Connect
          </a>
        </div>

        {/* Hamburger — visible below lg */}
        <button
          className="lg:hidden text-gray-200 p-2 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-panel border-t border-gray-800/50 flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-lg py-2 border-b border-gray-800/30"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-mono text-lg py-2 text-primary">
            Connect
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-2 font-mono text-lg py-2"
            >
              {theme === "dark" ? <><Sun size={18} /> Light Mode</> : <><Moon size={18} /> Dark Mode</>}
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
