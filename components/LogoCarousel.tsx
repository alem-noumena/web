"use client";

import { withBasePath } from "@/lib/basePath";

interface LogoCarouselProps {
  title?: string;
  logos: Array<{ name: string; src: string; alt: string }>;
}

export default function LogoCarousel({ title, logos }: LogoCarouselProps) {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-white border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <p className="text-center text-sm text-gray-600 mb-8 font-medium">{title}</p>
        )}
      </div>

      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-16 w-40 mx-6 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <img
                src={withBasePath(logo.src)}
                alt={logo.alt}
                className="max-h-12 max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
