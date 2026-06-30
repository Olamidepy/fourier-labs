"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { cn } from "@/utils/cn";
import Container from "./ui/Container";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Documentation", href: "/docs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-cyber-gray-950/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Logo size={180} className="transition-transform duration-500 group-hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors duration-300 hover:text-cyan-400 font-mono",
                    isActive ? "text-cyan-400 text-glow-cyan" : "text-gray-400"
                  )}
                >
                  {isActive && <span className="text-cyan-500 mr-1.5">&gt;</span>}
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/docs#api"
              className="inline-flex items-center gap-1.5 rounded-md border border-cyan-500/30 bg-cyan-950/20 px-3 py-1.5 font-mono text-xs font-semibold text-cyan-400 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_8px_rgba(6,182,212,0.2)]"
            >
              <Terminal className="h-3.5 w-3.5" />
              API Check
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex p-2 text-gray-400 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-b border-white/5 bg-cyber-gray-950/95 py-4 backdrop-blur-lg md:hidden">
          <Container className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-2 py-1.5 text-base font-medium font-mono tracking-wide rounded-md hover:bg-cyan-950/10 hover:text-cyan-400",
                    isActive ? "text-cyan-400 bg-cyan-950/10 border-l-2 border-cyan-400" : "text-gray-400"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/docs#api"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-cyan-500/30 bg-cyan-950/20 py-2.5 font-mono text-sm font-semibold text-cyan-400 hover:bg-cyan-950/50"
            >
              <Terminal className="h-4 w-4" />
              API Check
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
