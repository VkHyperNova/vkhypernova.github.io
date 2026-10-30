"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close the mobile menu when the page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <nav
      aria-label="Main"
      className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur"
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-black.svg"
            alt="VK-DEV Logo"
            width={100}
            height={28}
            className="block dark:hidden"
            priority
          />
          <Image
            src="/logo-white.svg"
            alt="VK-DEV Logo"
            width={100}
            height={28}
            className="hidden dark:block"
            priority
          />
        </Link>

        {/* Right side: links + toggle + menu button */}
        <div className="flex items-center gap-6">
          {/* Desktop links */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-accent dark:after:bg-accent-light after:transition-all after:duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                      active
                        ? "text-accent dark:text-accent-light after:w-full"
                        : "text-black dark:text-white hover:text-accent dark:hover:text-accent-light after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 focus-visible:outline-2 focus-visible:outline-accent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul
          id="mobile-menu"
          className="md:hidden border-t border-zinc-200 dark:border-zinc-800 space-y-2 px-4 py-3"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block py-1 ${
                    active
                      ? "text-accent dark:text-accent-light font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}