import Hero from "@/components/Hero";
import Link from "next/link";

export default function Solutions() {
  const solutions = [
    {
      id: "stablecoins",
      title: "Regulated Stablecoins and Payments",
      problem: "Banks and fintechs want to launch compliant, scalable stablecoin infrastructure but face integration complexity, regulatory requirements, and lifecycle management challenges.",
      solution: "NOUMENA Pulse provides core lifecycle services (issuance, redemption, swaps) with built-in compliance checks. NPL models business rules, approvals, and regulatory workflows. Deploy on managed, hybrid, or on-premise infrastructure to meet your security and data residency requirements.",
      benefits: [
        "Complete lifecycle management with compliance checks",
        "Multi-banking payment integration",
        "Break-glass solutions for operational control",
        "Least-privilege authorization with fine-grained roles",
        "Engineered for MiCA, DORA, and ISO 27001 requirements",
      ],
      reference: "AllUnity regulated EUR stablecoin",
      cta: "Book a Stablecoin Deep-Dive",
    },
    {
      id: "tokenization",
      title: "Tokenization of RWAs and Funds",
      problem: "Asset managers and institutions want to tokenize real-world assets and funds but struggle with lifecycle complexity, compliance requirements, and integration into existing treasury and core banking systems.",
      solution: "NOUMENA provides reusable lifecycle building blocks (subscription, redemption, reporting) that integrate seamlessly with treasury, custody, and payment rails via Pulse. Governance and access control are modeled in NPL, ensuring compliance by design.",
      benefits: [
        "Reusable lifecycle building blocks",
        "Integration with treasury and custody solutions",
        "Multi-chain deployment options",
        "Governance and access control defined in code",
        "Regulatory compliance built in from the start",
      ],
      reference: "RWA tokenization and money market fund projects",
      cta: "Talk to Us About Tokenization",
    },
    {
      id: "backends",
      title: "Secure Event-Driven Enterprise Backends",
      problem: "Enterprises struggle with complex workflows, manual state bookkeeping, and security that gets bolted on after the fact. Reviews and rework drain effort and budget.",
      solution: "NPL's finite state machines simplify logic and workflow enforcement, eliminating manual state bookkeeping. Compiler-enforced authorization guarantees security. Automatic audit trails and observability ensure compliance without slowing innovation.",
      benefits: [
        "Deterministic workflows with finite state machines",
        "Compiler-enforced authorization",
        "Automatic audit trails",
        "Transactional execution guarantees",
        "GDPR and compliance tooling included",
      ],
      reference: "Enterprise workflow modernization projects",
      cta: "Discuss Your Backend Modernization",
    },
  ];

  return (
    <div className="bg-white">
      <Hero
        headline="Solution Patterns Built on NOUMENA"
        subheadline="Discover how NOUMENA powers secure, compliant applications across industries. From regulated stablecoins to tokenized assets to enterprise backends."
        primaryCTA={{ label: "Book a Technical Session", href: "/contact" }}
        secondaryCTA={{ label: "Explore the Platform", href: "/technology" }}
        backgroundImage="/assets/hero_background_6.svg"
      />

      {/* Solutions List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className="scroll-mt-20"
              >
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {solution.title}
                    </h2>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">The Problem</h3>
                      <p className="text-gray-700">{solution.problem}</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-noumena-accent-3 p-4 mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">How NOUMENA Helps</h3>
                      <p className="text-gray-700">{solution.solution}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg
                              className="w-6 h-6 text-noumena-accent-3 mr-3 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {solution.reference && (
                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <p className="text-sm text-gray-600">
                          <strong>Reference:</strong> {solution.reference}
                        </p>
                      </div>
                    )}
                    <Link href="/contact" className="btn-primary inline-block">
                      {solution.cta}
                    </Link>
                  </div>
                  <div className="bg-noumena-bg-3 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Architecture Overview</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">NPL & Runtime</h4>
                        <p className="text-sm text-gray-600">
                          Business logic, workflows, and authorization rules defined in NPL. Runtime executes securely with automatic persistence and audit trails.
                        </p>
                      </div>
                      {solution.id !== "backends" && (
                        <div className="bg-white p-4 rounded border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">NOUMENA Pulse</h4>
                          <p className="text-sm text-gray-600">
                            Wallet abstraction, blockchain connectors, and lifecycle services for digital assets. Integrates with custody, treasury, and payment systems.
                          </p>
                        </div>
                      )}
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Deployment</h4>
                        <p className="text-sm text-gray-600">
                          Deploy to Noumena Cloud for speed, or to your own infrastructure (hybrid or on-premise) for maximum control and data sovereignty.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-noumena-accent-1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a different use case?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            NOUMENA's platform handles a wide range of secure, compliant applications. Let us discuss your specific requirements.
          </p>
          <Link href="/contact" className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block">
            Book a Technical Architecture Session
          </Link>
        </div>
      </section>
    </div>
  );
}
