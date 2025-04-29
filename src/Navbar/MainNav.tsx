"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/Navbar/navlinks";
import NvamiLogo from "@/images/Logo/NAVAMI 1.png";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-base">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image
              src={NvamiLogo}
              alt="Navami Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
        </motion.div>

        {/* NavLinks - Desktop */}
        <nav className="hidden md:flex gap-14">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-lg font-medium transition-colors ${
                pathname === link.path
                  ? "text-customYellow"
                  : "text-foreground hover:text-customYellow"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/contact-us"
            className="px-8 py-2 rounded-full text-white text-[15px] font-semibold"
            style={{ backgroundColor: "var(--color-customYellow)" }}
          >
            Ask Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button title="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu className="h-7 w-7 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-custom flex flex-col items-center gap-6 py-6 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-[16px] font-medium transition-colors ${
                  pathname === link.path
                    ? "text-customYellow"
                    : "text-foreground hover:text-customYellow"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-white text-[15px] font-semibold"
              style={{ backgroundColor: "var(--color-customYellow)" }}
              onClick={() => setIsOpen(false)}
            >
              Ask Us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
