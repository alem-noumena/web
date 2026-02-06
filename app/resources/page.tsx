import Hero from "@/components/Hero";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";
import CopyCommand from "@/components/CopyCommand";

export default function Resources() {
  const quickstartSteps = [
    {
      step: 1,
      title: "Install NPL",
      command: "brew install NoumenaDigital/tools/npl",
      description: "Install the NPL CLI tool using Homebrew (or other package managers).",
    },
    {
      step: 2,
      title: "Initialize a Project",
      command: "npl init --project-dir my-project",
      description: "Create a new NPL project with the standard structure.",
    },
    {
      step: 3,
      title: "Start Building",
      command: "cd my-project && docker compose up",
      description: "Start the development server and begin coding your first protocol.",
    },
  ];

  const whitepapers = [
    {
      title: "Building Secure Software from the Ground Up",
      description: "Discover how NOUMENA's trust-native approach eliminates security vulnerabilities and compliance gaps from the start.",
      type: "Whitepaper",
      file: "/resources/Building secure software from the ground up.pdf",
      filename: "Building-secure-software-from-the-ground-up.pdf",
    },
    {
      title: "NOUMENA Pulse: Tokenization Platform",
      description: "Comprehensive overview of NOUMENA Pulse capabilities for regulated tokenization and stablecoins.",
      type: "Product Overview",
      file: "/resources/NOUMENA Pulse - Jan 2026 - reference cases.pdf",
      filename: "NOUMENA-Pulse-reference-cases.pdf",
    },
    {
      title: "Authorization Concept",
      description: "A technical deep dive into NOUMENA's party-based authorization system and fine-grained access control.",
      type: "Technical Guide",
      file: "/resources/NOUMENA__authorization_concept.pdf",
      filename: "NOUMENA-authorization-concept.pdf",
    },
    {
      title: "Event-Driven Architecture for Enterprise Solutions",
      description: "Learn how NOUMENA's deterministic workflows and state machines simplify enterprise application development.",
      type: "Architecture Guide",
      file: "/resources/NOUMENA_Event_Driven_Architecture_for_Enterprise_Solutions (1).pdf",
      filename: "NOUMENA-Event-Driven-Architecture.pdf",
    },
  ];

  return (
    <div className="bg-white">
      <Hero
        headline="Developer"
        subheadline="Everything you need to get started with NOUMENA. From quick start guides to AI-powered development tools, we have you covered."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "View Documentation", href: "https://documentation.noumenadigital.com", external: true }}
        backgroundImage="/assets/hero_background_3.svg"
      />

      {/* Quick Start Section */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Start
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running with NPL in three simple steps.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-8">
            {quickstartSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-noumena-accent-1 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <CopyCommand command={step.command} className="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              See other installation options and getting started guides:
            </p>
            <a
              href="https://documentation.noumenadigital.com/getting-started/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Read Getting Started Guide
            </a>
          </div>
        </div>
      </section>

      {/* AI-Powered Development Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NPL&apos;s clear syntax and compiler-enforced security make it ideal for AI-assisted development. The AI generates code; the compiler guarantees security.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tool Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Replit */}
              <Link
                href="/resources/replit"
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                    <path d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z" fill="#F26207"/>
                    <path d="M17 12H25.5C26.3284 12 27 12.6716 27 13.5V18.5C27 19.3284 26.3284 20 25.5 20H17V12Z" fill="#F26207"/>
                    <path d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z" fill="#F26207"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Replit</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Build in your browser. Import our template and let the Replit Agent handle setup and deployment.
                </p>
                <span className="text-noumena-accent-1 text-sm font-medium group-hover:underline">
                  Learn more →
                </span>
              </Link>

              {/* Cursor */}
              <Link
                href="/resources/cursor"
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <img src={withBasePath("/img/cursor.png")} alt="Cursor" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cursor</h3>
                <p className="text-gray-600 text-sm mb-4">
                  AI-first code editor. Write protocols and permissions with intelligent autocomplete and chat.
                </p>
                <span className="text-noumena-accent-1 text-sm font-medium group-hover:underline">
                  Learn more →
                </span>
              </Link>

              {/* Claude Code */}
              <Link
                href="/resources/claude-code"
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <img src={withBasePath("/img/Claude_AI_symbol.svg.png")} alt="Claude" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Claude Code</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Terminal-based AI assistant. Build NPL applications through natural conversation.
                </p>
                <span className="text-noumena-accent-1 text-sm font-medium group-hover:underline">
                  Learn more →
                </span>
              </Link>
            </div>

            {/* Why AI + NPL */}
            <div className="bg-noumena-bg-3 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Why AI Works Better with NPL</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-noumena-accent-1 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Compiler-Verified Security</h4>
                  <p className="text-sm text-gray-600">AI can&apos;t introduce permission bugs. If it compiles, the security model is correct.</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-noumena-accent-1 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Clear, Predictable Syntax</h4>
                  <p className="text-sm text-gray-600">NPL&apos;s deterministic language makes AI suggestions more accurate and reliable.</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-noumena-accent-1 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Faster Iteration</h4>
                  <p className="text-sm text-gray-600">Go from idea to production-ready code in hours, not weeks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Whitepapers & Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth technical content on NOUMENA's platform, architecture, and best practices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whitepapers.map((paper, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="mb-3">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {paper.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h3>
                <p className="text-gray-600 mb-4">{paper.description}</p>
                <a
                  href={withBasePath(encodeURI(paper.file))}
                  download={paper.filename}
                  className="inline-flex items-center text-noumena-accent-1 font-semibold hover:underline"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Developer Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build with NOUMENA.
            </p>
          </div>

          {/* Benchmark Study Highlight */}
          <div className="max-w-5xl mx-auto mb-12">
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
                    Analysis comparing NPL against Java, .Net, Node.js, Rails, and Django. See how NPL delivers 3-5x code  while eradicating security concerns.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a
              href="https://documentation.noumenadigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-noumena-bg-3 p-6 rounded-lg border border-gray-200 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="text-noumena-accent-1 mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Complete guides for NPL, Runtime, and NOUMENA Cloud. Learn syntax, concepts, and best practices.</p>
            </a>
            <a
                          href="https://documentation.noumenadigital.com/hello-world/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-noumena-bg-3 p-6 rounded-lg border border-gray-200 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200 group"
                        >
                          <div className="text-noumena-accent-1 mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Hello World Tutorial</h3>
                          <p className="text-gray-600 text-sm">Get started with your first NPL application in minutes. Follow step-by-step instructions.</p>
                        </a>
            <a
              href="https://github.com/NoumenaDigital"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-noumena-bg-3 p-6 rounded-lg border border-gray-200 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="text-noumena-accent-1 mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">GitHub</h3>
              <p className="text-gray-600 text-sm">Open source NPL tooling, examples, and community contributions. Contribute or explore the codebase.</p>
            </a>
            <a
              href="https://community.noumenadigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-noumena-bg-3 p-6 rounded-lg border border-gray-200 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="text-noumena-accent-1 mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Join the NOUMENA community forum. Ask questions, share knowledge, and connect with other developers.</p>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-noumena-accent-1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore NOUMENA?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a technical session to discuss your use case or start building in NOUMENA Cloud today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Book a Technical Session
            </Link>
            <Link
              href="/cloud"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-noumena-accent-1 transition-colors duration-200"
            >
              Start in Noumena Cloud
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
