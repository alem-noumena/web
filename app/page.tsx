import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Link from "next/link";

export default function Home() {
  const trustedLogos = [
    { name: "E.ON", src: "/clients/Logo_E.ON.svg.webp", alt: "E.ON" },
    { name: "Swisscom", src: "/clients/Swisscom_Logo.svg.webp", alt: "Swisscom" },
    { name: "PwC", src: "/clients/pwc.png", alt: "PwC" },
    { name: "Swiss Stablecoin", src: "/clients/SSC_logo_web.webp", alt: "Swiss Stablecoin" },
    { name: "AllUnity", src: "/clients/AllUnity-Logo-Black.png", alt: "AllUnity" },
    { name: "NTT Data", src: "/clients/NTT-Data-Logo.svg.webp", alt: "NTT Data" },
  ];

  const testimonials = [
    {
      quote: "NOUMENA's technology has proven to be the foundational element of our stablecoin application, surpassing our expectations with its advanced business protocol technology.",
      author: "André Wolke",
      role: "Head Technology",
      company: "Swiss Stablecoin",
    },
    {
      quote: "NOUMENA's 'can-do' attitude helped CKW quickly deploy our MVP, which was critical to gaining a first-mover advantage. NOUMENA is the ideal technology partner for staying ahead of the competition.",
      author: "Christoph Häne",
      role: "Head of Customer Business Applications",
      company: "CKW",
    },
    {
      quote: "NOUMENA gives Bricksdock a clear edge in the real estate investment tech space by embedding security, compliance, and scalability directly into our platform.",
      author: "Nadja Hofmann",
      role: "CEO",
      company: "Bricksdock",
    },
  ];

  const solutions = [
    {
      title: "Reliable AI Agents",
      description: "Your AI agents are intelligent. But without shared state, approval workflows, and audit trails, they fall short in production. NOUMENA bridges that gap.",
      href: "/ai",
      linkText: "Explore AI Orchestration",
    },
    {
      title: "Secure Code by Design",
      description: "AI accelerates development until security review slows everything down. With NOUMENA, AI-generated code is audit-ready from the first line.",
      href: "/technology",
      linkText: "Explore the Technology",
    },
    {
      title: "Scalable Digital Assets",
      description: "Stablecoins, tokenized funds, and real-world assets built for fast, compliant and fast go to market.",
      href: "/company",
      linkText: "View Resources",
    },
    {
      title: "Systems You Can Trust",
      description: "Mission-critical workflows demand deterministic execution. Get enforced permissions, audit trails and zero ambiguity.",
      href: "/technology",
      linkText: "Explore the Technology",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        headline="The Missing Layer for Enterprise AI"
        subheadline="Runtime guardrails that keep your AI agents reliable, compliant, and audit-ready. Built for enterprises that refuse to compromise on security."
        primaryCTA={{ label: "Talk to an Engineer", href: "/contact" }}
        secondaryCTA={{ label: "Start Free", href: "/cloud" }}
        backgroundImage="/assets/hero_background_1.svg"
      />

      {/* Trusted By Section */}
      <LogoStrip
        title="Trusted by innovators in finance, energy, and technology"
        logos={trustedLogos}
      />

      {/* What We Solve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Technology That Delivers in Production
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{solution.description}</p>
                <Link
                  href={solution.href}
                  className="text-noumena-accent-1 font-medium hover:underline inline-flex items-center"
                >
                  {solution.linkText}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmark Study */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources/benchmark"
            className="block bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 text-white hover:from-gray-800 hover:to-gray-700 transition-all duration-200 group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="inline-block bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Benchmarking Study
                </span>
                <h3 className="text-2xl font-bold mb-2">NPL vs. Traditional Frameworks</h3>
                <p className="text-gray-300">
                  Analysis comparing NPL against Node.js, Rails, and Django. See how NPL delivers 7.7x code reduction with zero security vulnerabilities.
                </p>
              </div>
              <div className="flex items-center gap-8 flex-shrink-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">7.7x</div>
                  <div className="text-xs text-gray-400">Less code</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">3.5x</div>
                  <div className="text-xs text-gray-400">Lower complexity</div>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Developer Entry */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Start Building with NPL in Minutes
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get instant access to NOUMENA Cloud. Build secure, compliant applications without the infrastructure overhead.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-8 text-left">
                <code className="text-green-400 font-mono text-sm md:text-base">
                  brew install NoumenaDigital/tools/npl && npl init --project-dir my-project
                </code>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://documentation.noumenadigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Read Documentation
                </a>
                <Link href="/resources" className="btn-secondary">
                  Developer Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              >
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-noumena-accent-1">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-noumena-accent-1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Build Something Production-Ready?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Developers */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Developers</h3>
              <div className="bg-black/20 rounded-lg p-4 mb-4 font-mono text-sm">
                brew install NoumenaDigital/tools/npl
              </div>
              <p className="text-white/80 mb-6">
                Documentation, examples, and a free cloud tier to get you building today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cloud"
                  className="bg-white text-noumena-accent-1 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Start Free
                </Link>
                <a
                  href="https://documentation.noumenadigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-noumena-accent-1 transition-colors duration-200 text-center"
                >
                  Read Docs
                </a>
              </div>
            </div>

            {/* Technical Leaders */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Technical Leaders</h3>
              <p className="text-white/80 mb-4">
                Schedule a 60-minute architecture session with our engineering team.
              </p>
              <p className="text-white/80 mb-6">
                Discover how NOUMENA integrates with your stack and meets your compliance requirements.
              </p>
              <Link
                href="/contact"
                className="bg-white text-noumena-accent-1 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block text-center"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
