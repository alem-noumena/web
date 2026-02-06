import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import LogoCarousel from "@/components/LogoCarousel";
import CopyCommand from "@/components/CopyCommand";
import Img from "@/components/Img";

export default function Home() {
  const trustedLogos = [
    { name: "E.ON", src: "/clients/Logo_E.ON.svg.webp", alt: "E.ON" },
    { name: "CKW", src: "/clients/CKW_Logo.svg.webp", alt: "CKW" },
    { name: "Swisscom", src: "/clients/Swisscom_Logo.svg.webp", alt: "Swisscom" },
    { name: "Swiss Stablecoin", src: "/clients/SSC_logo_web.webp", alt: "Swiss Stablecoin" },
    { name: "AllUnity", src: "/clients/AllUnity-Logo-Black.png", alt: "AllUnity" },
    { name: "N-Ergie", src: "/clients/N-Ergie.svg.webp", alt: "N-Ergie" },
    { name: "MLP", src: "/clients/MLP-Logo.svg.webp", alt: "MLP" },
    { name: "NTT Data", src: "/clients/NTT-Data-Logo.svg.webp", alt: "NTT Data" },
    { name: "21x", src: "/clients/21x.png", alt: "21x" },
    { name: "PwC", src: "/clients/pwc.png", alt: "PwC" },
  ];

  const testimonial = {
    quote: "The Noumena Protocol Language, NPL, is a paradigm shift. I've seen no other approach as principled as this. NPL moves beyond traditional application-level authorization and embeds security directly into the compiler. This guarantees that entire categories of vulnerabilities are eliminated by design.",
    author: "Jens-Thorsten Rauer",
    role: "Group Chief Executive",
    company: "GFT Technologies SE C/W Europe",
  };

  const solutions = [
    {
      title: "Reliable AI agents",
      description: "Your AI agents are intelligent. But without shared state, approval workflows, and audit trails, they fall short in production. NOUMENA bridges that gap.",
      href: "/ai",
      linkText: "Explore AI orchestration",
    },
    {
      title: "Secure code by design",
      description: "AI accelerates development until security review slows everything down. With NOUMENA, AI-generated code is audit-ready from the first line.",
      href: "/technology",
      linkText: "Explore the technology",
    },
    {
      title: "Scalable digital assets",
      description: "Stablecoins, tokenized funds, and real-world assets built for fast, compliant and fast go to market.",
      href: "/company",
      linkText: "View resources",
    },
    {
      title: "Systems you can trust",
      description: "Mission-critical workflows demand deterministic execution. Get enforced permissions, audit trails and zero ambiguity.",
      href: "/technology",
      linkText: "Explore the technology",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HomeHero />

      {/* Trusted By Section */}
      <LogoCarousel
        title="Trusted by innovators in finance, energy, and technology"
        logos={trustedLogos}
      />

      

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
                <h3 className="text-2xl font-bold mb-2">NPL vs. traditional frameworks</h3>
                <p className="text-gray-300">
                  Analysis comparing NPL against Java, .Net,  Node.js, Rails, and Django. See how NPL delivers 3-5x code while eradicating security concerns.
                </p>
              </div>
              <div className="flex items-center gap-8 flex-shrink-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">3-5x</div>
                  <div className="text-xs text-gray-400">Less code</div>
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
                Build with your favourite AI-powered tools
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                NPL works seamlessly with the IDEs and AI assistants you already use. Start building secure applications in minutes.
              </p>

              {/* IDE Logos */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Img src="/img/cursor.png" alt="Cursor" className="w-6 h-6 object-contain" />
                  <span className="font-medium text-gray-700">Cursor</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Img src="/img/IntelliJ_IDEA_Icon.png" alt="IntelliJ IDEA" className="w-6 h-6 object-contain" />
                  <span className="font-medium text-gray-700">IntelliJ IDEA</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Img src="/img/Claude_AI_symbol.svg.png" alt="Claude Code" className="w-6 h-6 object-contain" />
                  <span className="font-medium text-gray-700">Claude Code</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Img src="/img/openai.png" alt="ChatGPT" className="w-6 h-6 object-contain" />
                  <span className="font-medium text-gray-700">ChatGPT</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Img src="/img/Replit_Logo.png" alt="Replit" className="w-6 h-6 object-contain" />
                  <span className="font-medium text-gray-700">Replit</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Img src="/img/gemini.png" alt="Gemini" className="w-6 h-6 object-contain" />
                  <span className="font-medium text-gray-700">Gemini</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Img src="/img/grok.jpg" alt="Grok" className="w-6 h-6 object-contain" />
                  <span className="font-medium text-gray-700">Grok</span>
                </div>
              </div>

              <CopyCommand command="brew install NoumenaDigital/tools/npl && npl init --project-dir my-project" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://documentation.noumenadigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Read documentation
                </a>
                <Link href="/resources" className="btn-secondary">
                  Developer hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-noumena-accent-1 mx-auto mb-6 opacity-30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
              The <strong>Noumena Protocol Language, NPL, is a paradigm shift</strong>. I've seen no other approach as principled as this. NPL moves beyond traditional application-level authorization and <strong>embeds security directly into the compiler</strong>. This guarantees that entire categories of vulnerabilities are eliminated by design.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Img
                src="/team/Rauer_Jens-Thorsten.webp"
                alt={testimonial.author}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-noumena-accent-1 font-medium">{testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-noumena-accent-1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to build something production-ready?
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
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <Link
                  href="/cloud"
                  className="bg-white text-noumena-accent-1 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center flex items-center justify-center"
                >
                  Start free
                </Link>
                <a
                  href="https://documentation.noumenadigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-noumena-accent-1 transition-colors duration-200 text-center flex items-center justify-center"
                >
                  Read docs
                </a>
              </div>
            </div>

            {/* Technical Leaders */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Technical leaders</h3>
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
                Book a session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
