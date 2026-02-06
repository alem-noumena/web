"use client";

import Link from "next/link";
import { withBasePath } from "@/lib/basePath";
import TypewriterText from "./TypewriterText";

export default function HomeHero() {
  const animatedWords = ["Enterprise AI", "Digital Assets", "Agentic AI", "Enterprise Applications"];

  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${withBasePath("/assets/hero_background_1.svg")})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            The Ultimate Technology<br />
            <TypewriterText
              prefix="for "
              words={animatedWords}
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2500}
            />
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
            Built for enterprises that refuse to compromise on security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center"
            >
              Talk to an Engineer
            </Link>
            <Link
              href="/cloud"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-noumena-accent-1 transition-colors duration-200 text-center"
            >
              Start Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
