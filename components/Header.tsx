"use client";

import Link from "next/link";
import { useState } from "react";
import { withBasePath } from "@/lib/basePath";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/ai", label: "AI" },
    { href: "/technology", label: "Technology" },
    { href: "/resources", label: "Developer" },
    { href: "/company", label: "Company" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center h-12 py-2">
            <img
              src={withBasePath("/logo/Logo_gradient.png")}
              alt="NOUMENA Digital"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ maxHeight: '14px' }}
              onError={(e) => {
                console.error('Logo failed to load:', e);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-noumena-accent-1 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="btn-outline text-sm"
            >
              Book a Session
            </Link>
            <Link
              href="/cloud"
              className="btn-primary text-sm"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-noumena-accent-1 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/contact"
                  className="btn-outline text-sm block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Session
                </Link>
                <Link
                  href="/cloud"
                  className="btn-primary text-sm block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start Free
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
