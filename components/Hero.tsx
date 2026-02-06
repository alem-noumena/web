import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA?: { label: string; href: string; external?: boolean };
  secondaryCTA?: { label: string; href: string; external?: boolean };
  backgroundImage?: string;
}

export default function Hero({ headline, subheadline, primaryCTA, secondaryCTA, backgroundImage = '/assets/hero_background.webp' }: HeroProps) {
  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${withBasePath(backgroundImage)})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
            {subheadline}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                primaryCTA.external ? (
                  <a
                    href={primaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center"
                  >
                    {primaryCTA.label}
                  </a>
                ) : (
                  <Link href={primaryCTA.href} className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center">
                    {primaryCTA.label}
                  </Link>
                )
              )}
              {secondaryCTA && (
                secondaryCTA.external ? (
                  <a
                    href={secondaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-noumena-accent-1 transition-colors duration-200 text-center"
                  >
                    {secondaryCTA.label}
                  </a>
                ) : (
                  <Link href={secondaryCTA.href} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-noumena-accent-1 transition-colors duration-200 text-center">
                    {secondaryCTA.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
