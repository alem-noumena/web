import Hero from "@/components/Hero";
import Link from "next/link";
import LogoStrip from "@/components/LogoStrip";

export default function Company() {
  const leadership = [
    {
      name: "Vincent Peikert",
      role: "Co-CEO, Founder",
      background: "AlgoSwiss (exit), Elevence (exit: Digital Asset), PhD Physics",
      image: "/team/vincent.webp",
      linkedin: "https://linkedin.com/in/dr-vincent-peikert-81079098/",
    },
    {
      name: "Juerg Kaeppeli",
      role: "Co-CEO, Co-Founder",
      background: "MD Strategy Credit Suisse, Partner McKinsey, PhD Theoretical Physics",
      image: "/team/juerg.webp",
      linkedin: "https://www.linkedin.com/in/juerg-kaeppeli/",
    },
    {
      name: "Sandra Daub",
      role: "COO",
      background: "Managing Partner Gartner, Board Member Inventx AG, Financial Times Wealth Tech Award Judge, PhD Psychology",
      image: "/team/sandra.webp",
      linkedin: "https://www.linkedin.com/in/dr-sandra-daub-44921b88/",
    },
    {
      name: "Sandy McPherson",
      role: "CTO",
      background: "Technology and product leadership, software engineering, and scaling engineering organizations.",
      image: "/team/sandy.webp",
      linkedin: "https://www.linkedin.com/in/sandymcp/",
    },
  ];

  const blockchainPartners = [
    { name: "Stellar", src: "/chains/stellar.png", alt: "Stellar" },
    { name: "Arbitrum", src: "/chains/arbitrum.png", alt: "Arbitrum" },
    { name: "Cardano", src: "/chains/cardano.png", alt: "Cardano" },
    { name: "Polkadot", src: "/chains/polkadot.png", alt: "Polkadot" },
    { name: "Avalanche", src: "/chains/avalanche.svg", alt: "Avalanche" },
    { name: "Optimism", src: "/chains/optimism.png", alt: "Optimism" },
    { name: "Polygon", src: "/chains/polygon.png", alt: "Polygon" },
    { name: "Near", src: "/chains/near.png", alt: "Near Protocol" },
    { name: "Base", src: "/chains/base.svg", alt: "Base" },
    { name: "Ethereum", src: "/chains/Ethereum.png", alt: "Ethereum" },
  ];

  const implementationPartners = [
    { name: "PwC Germany", src: "/partner/pwc.png", alt: "PwC Germany" },
    { name: "Bearingpoint", src: "/partner/BearingPoint_Symbol_Black_RGB.png", alt: "Bearingpoint" },
    { name: "NTT Data", src: "/partner/NTT-Data.png", alt: "NTT Data" },
    { name: "AWS", src: "/partner/aws.png", alt: "AWS" },
    { name: "Microsoft Azure", src: "/partner/Microsoft_Azure.png", alt: "Microsoft Azure" },
    { name: "Additiv", src: "/partner/additiv.png", alt: "Additiv" },
    { name: "Zühlke", src: "/partner/Zuehlke.jpg", alt: "Zühlke" },
    { name: "ti&m", src: "/partner/ti8m.jpg", alt: "ti&m" },
    { name: "GFT", src: "/partner/GFT.png", alt: "GFT" },
    { name: "INACTA", src: "/partner/inacta.png", alt: "INACTA" },
  ];

  return (
    <div className="bg-white">
      <Hero
        headline="Swiss Deep-Tech Transforming Enterprise Software"
        subheadline="NOUMENA Digital pioneers AI-driven software development and asset tokenization, empowering enterprises to build secure, compliant applications faster than ever."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "View Resources", href: "/resources" }}
        backgroundImage="/assets/hero_background_4.svg"
      />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              About NOUMENA Digital
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                NOUMENA Digital AG is a Swiss deep-tech company headquartered in Zug, Switzerland. We are transforming how software is designed, built, and operated by making security, compliance, and performance fundamental pillars rather than afterthoughts.
              </p>
              <p className="text-lg mb-6">
                Our platform combines NPL (Noumena Protocol Language) and Runtime for secure backend development, NOUMENA Cloud for managed deployment, and NOUMENA Pulse for regulated tokenization and digital assets.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-noumena-accent-1 mb-2">7+</div>
                  <div className="text-gray-600">Years in business</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-noumena-accent-1 mb-2">40+</div>
                  <div className="text-gray-600">Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-noumena-accent-1 mb-2">AI</div>
                  <div className="text-gray-600">Powered development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded and led by experienced entrepreneurs and technologists with deep expertise in finance, technology, and physics.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 flex gap-4 items-start"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-16 h-16  shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold text-gray-900 leading-tight">{leader.name}</h3>
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors shrink-0"
                        aria-label={`${leader.name} on LinkedIn`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-noumena-accent-1 font-medium mb-1">{leader.role}</p>
                  <p className="text-gray-600 text-xs leading-snug line-clamp-3">{leader.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reference Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how forward-thinking companies leverage NOUMENA to build secure, compliant applications and digital assets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/resources/cases/allunity-stablecoin" className="bg-noumena-bg-3 p-6 rounded-lg border border-gray-200 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200 group">
              <div className="mb-4">
                <span className="inline-block bg-noumena-accent-1 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Regulated Stablecoin
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-noumena-accent-1 transition-colors">AllUnity Regulated EUR Stablecoin</h3>
              <p className="text-gray-700 mb-4">Complete implementation of a regulated EUR stablecoin with onboarding, issuance, redemption, swap processes, and compliance review. Built to meet MiCA, DORA, and ISO 27001 requirements.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  75 user rights grouped in 8 roles
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  Least-privilege authorization
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  Break-glass solutions
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  Multi-banking payment routes
                </li>
              </ul>
            </Link>
            <Link href="/resources/cases/bricksdock-tokenization" className="bg-noumena-bg-3 p-6 rounded-lg border border-gray-200 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200 group">
              <div className="mb-4">
                <span className="inline-block bg-noumena-accent-1 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  RWA Tokenization
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-noumena-accent-1 transition-colors">Bricksdock Real Estate Tokenization</h3>
              <p className="text-gray-700 mb-4">Institutional-grade real estate investment platform with embedded security, compliance, and scalability. Setting a new standard for secure and efficient real estate investment technology.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  Institutional investor platform
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  Future-ready architecture
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  Embedded security and compliance
                </li>
              </ul>
            </Link>
            <Link href="/resources/cases/ckw-energy" className="bg-noumena-bg-3 p-6 rounded-lg border border-gray-200 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200 group">
              <div className="mb-4">
                <span className="inline-block bg-noumena-accent-1 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Enterprise Backend
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-noumena-accent-1 transition-colors">CKW Energy Sector Application</h3>
              <p className="text-gray-700 mb-4">Rapid MVP deployment proved critical to gaining first-mover advantage. NOUMENA partnered with CKW to help them stay ahead of the competition.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  Rapid MVP deployment
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  First-mover advantage
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  Technology partnership
                </li>
              </ul>
            </Link>
            <Link href="/resources/cases/swiss-stablecoin" className="bg-noumena-bg-3 p-6 rounded-lg border border-gray-200 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200 group">
              <div className="mb-4">
                <span className="inline-block bg-noumena-accent-1 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Regulated Stablecoin
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-noumena-accent-1 transition-colors">Swiss Stablecoin</h3>
              <p className="text-gray-700 mb-4">NOUMENA&apos;s technology proven as the foundational element of stablecoin application, surpassing expectations with advanced business protocol technology.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  Foundational technology
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  Advanced business protocols
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <span className="text-noumena-accent-1 mr-2">•</span>
                  Ongoing partnership
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partners & Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NOUMENA collaborates with leading blockchain networks, cloud providers, and implementation partners to deliver enterprise-grade solutions.
            </p>
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Blockchain Partners
            </h3>
            <LogoStrip logos={blockchainPartners} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Implementation & Technology Partners
            </h3>
            <LogoStrip logos={implementationPartners} />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-noumena-accent-1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Have questions about NOUMENA or want to explore a partnership? We would love to hear from you.
          </p>
          <a
            href="/contact"
            className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
