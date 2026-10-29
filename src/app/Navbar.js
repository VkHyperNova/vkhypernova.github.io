"use client"; // Required because we use state (for mobile menu or theme toggle)
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-zinc-100 dark:bg-zinc-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center">
          {/* Light theme logo (black) */}
          <Image
            src="/logo-black.svg"
            alt="VK-DEV Logo"
            width={100}
            height={28}
            className="block dark:hidden"
            priority
          />
          {/* Dark theme logo (white) */}
          <Image
            src="/logo-white.svg"
            alt="VK-DEV Logo"
            width={100}
            height={28}
            className="hidden dark:block"
            priority
          />
        </Link>

        <ThemeToggle />

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative text-black hover:text-accent dark:text-accent-light dark:text-white dark:hover:text-accent dark:text-accent-light transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 space-y-2 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}