import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Link from "next/link";

export default function Pulse() {
  // Market context stats
  const marketStats = [
    { value: "USD 18T+", label: "Projected tokenized assets by 2033" },
    { value: "USD 5T+", label: "Stablecoin transaction volume (2024)" },
    { value: "74%", label: "Institutional investors exploring digital assets" },
  ];

  // TradFi challenges
  const tradFiChallenges = [
    {
      title: "Incompatibility",
      description:
        "Traditional financial systems were not designed for blockchain. Ledger models, settlement cycles, and compliance frameworks do not translate directly to on-chain operations.",
    },
    {
      title: "No Integration Paths",
      description:
        "Each blockchain has its own APIs, wallet models, and transaction semantics. Building and maintaining integrations across chains is costly and error-prone.",
    },
    {
      title: "Fast Moving",
      description:
        "Regulations, standards, and blockchain technologies evolve rapidly. What works today may need complete rearchitecting tomorrow.",
    },
  ];

  // Core services
  const coreServices = [
    {
      title: "Wallet Service",
      description:
        "Abstracted wallet management across chains. Key generation, custody integration, and transaction signing through one interface.",
    },
    {
      title: "Token Service",
      description:
        "Full lifecycle management for digital assets: issuance, transfer, redemption, and burning with configurable policies.",
    },
    {
      title: "Payment Service",
      description:
        "Multi-banking payment initiation, settlement reconciliation, and treasury integration for fiat on/off ramps.",
    },
    {
      title: "Compliance Service",
      description:
        "Integration points for KYC/KYB, sanctions screening, transaction monitoring, and regulatory reporting.",
    },
    {
      title: "Notification Service",
      description:
        "Event-driven notifications for transaction status, compliance alerts, and operational monitoring.",
    },
    {
      title: "Admin Service",
      description:
        "Configuration management, access control, and operational dashboards for platform administrators.",
    },
  ];

  // Key features
  const keyFeatures = [
    {
      title: "Plug-and-Play",
      description:
        "Pre-built modules for common digital asset operations. Start with standard workflows, customize as needed.",
    },
    {
      title: "RWA, NFT & Stablecoins",
      description:
        "Purpose-built support for real-world asset tokenization, non-fungible tokens, and fiat-backed stablecoins.",
    },
    {
      title: "Policy Engine",
      description:
        "Configurable rules for transfer restrictions, holding limits, blacklists/whitelists, and regulatory constraints.",
    },
    {
      title: "Audit-Ready",
      description:
        "Every on-chain and off-chain action logged to a tamper-proof audit trail. Regulatory reporting out of the box.",
    },
  ];

  // Why Pulse reasons
  const whyPulse = [
    {
      title: "Abstracts Complexity",
      description:
        "One API for multiple blockchains. No need to learn chain-specific SDKs, wallet models, or transaction formats.",
    },
    {
      title: "No Vendor Lock-In",
      description:
        "Switch chains or add new ones without rewriting application logic. Your business rules stay independent of the underlying infrastructure.",
    },
    {
      title: "Wallet Compatible",
      description:
        "Works with institutional custody providers, MPC wallets, hardware security modules, and self-custody setups.",
    },
    {
      title: "Security & Compliance",
      description:
        "Engineered for MiCA, DORA, and ISO 27001 requirements. Permission model enforced at every layer.",
    },
    {
      title: "Expert Team",
      description:
        "Built by a team with deep expertise in financial infrastructure, blockchain technology, and regulatory compliance.",
    },
  ];

  // Open ecosystem integrations
  const ecosystemCategories = [
    {
      category: "Identity",
      examples: "SSI providers, corporate identity, digital ID systems",
    },
    {
      category: "Treasury",
      examples: "Multi-banking, cash management, reconciliation",
    },
    {
      category: "Payment",
      examples: "SEPA, SWIFT, card networks, real-time payments",
    },
    {
      category: "Custody",
      examples: "Institutional custodians, MPC wallets, HSMs",
    },
    {
      category: "Nodes",
      examples: "Managed node providers, self-hosted validators",
    },
    {
      category: "KYC / AML",
      examples: "Identity verification, sanctions screening, transaction monitoring",
    },
  ];

  // Deployment options
  const deploymentOptions = [
    {
      model: "Managed",
      subtitle: "NOUMENA Cloud",
      description:
        "Fully managed Pulse deployment. We handle infrastructure, updates, and monitoring.",
      bestFor: "Fastest time-to-market, startups, PoCs",
    },
    {
      model: "Hybrid",
      subtitle: "Best of Both",
      description:
        "Data stays on your infrastructure while NOUMENA manages the Pulse runtime and operations.",
      bestFor: "Data sovereignty requirements with managed operations",
    },
    {
      model: "On-Premise",
      subtitle: "Full Control",
      description:
        "Run Pulse entirely within your own infrastructure. Full control over data, network, and operations.",
      bestFor: "Regulated institutions requiring maximum control",
    },
  ];

  // Blockchain partners
  const blockchainPartners = [
    { name: "Stellar", src: "/chains/stellar.png", alt: "Stellar" },
    { name: "Arbitrum", src: "/chains/arbitrum.png", alt: "Arbitrum" },
    { name: "Cardano", src: "/chains/cardano.png", alt: "Cardano" },
    { name: "Polkadot", src: "/chains/polkadot.png", alt: "Polkadot" },
    { name: "Avalanche", src: "/chains/avalanche.svg", alt: "Avalanche" },
    { name: "Polygon", src: "/chains/polygon.png", alt: "Polygon" },
    { name: "Ethereum", src: "/chains/Ethereum.png", alt: "Ethereum" },
    { name: "Base", src: "/chains/base.svg", alt: "Base" },
    { name: "Optimism", src: "/chains/optimism.png", alt: "Optimism" },
    { name: "Near", src: "/chains/near.png", alt: "Near Protocol" },
  ];

  return (
    <div className="bg-white">
      <Hero
        headline="NOUMENA Pulse"
        subheadline="The blockchain adapter for regulated digital asset operations. One interface for multiple chains, with compliance built in."
        primaryCTA={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCTA={{ label: "Back to Technology", href: "/technology" }}
        backgroundImage="/assets/hero_background_3.svg"
      />

      {/* Market Context */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Digital Asset Opportunity
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Blockchain-based financial infrastructure is moving from experimentation to production. The institutions that build now will define the next era of finance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {marketStats.map((stat, index) => (
                <div key={index} className="text-center bg-noumena-bg-3 rounded-lg p-8">
                  <p className="text-3xl md:text-4xl font-bold text-noumena-accent-1 mb-2">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TradFi Challenges */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Blockchain Integration Is Hard
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Traditional financial institutions face fundamental challenges when adopting blockchain technology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {tradFiChallenges.map((challenge, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                  <p className="text-gray-600 text-sm">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introducing Pulse */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Introducing NOUMENA Pulse
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A middleware layer that connects your applications to blockchain networks, payment systems, and financial infrastructure. Pulse abstracts complexity and ensures compliance.
              </p>
            </div>

            {/* Architecture Diagram */}
            <div className="mb-12">
              <div className="flex justify-center">
                <img
                  src="/assets/NOUMENAPulse.png"
                  alt="NOUMENA Pulse Integration Architecture"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Core Services */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Core Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {coreServices.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Pulse */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why NOUMENA Pulse
              </h2>
            </div>

            <div className="space-y-4">
              {whyPulse.map((reason, index) => (
                <div key={index} className="flex items-start bg-noumena-bg-3 rounded-lg p-5">
                  <span className="text-noumena-accent-3 mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Ecosystem Integrations */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Ecosystem
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pulse integrates with your existing infrastructure and the wider financial ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ecosystemCategories.map((cat, index) => (
                <div key={index} className="bg-white rounded-lg p-5 border border-gray-200">
                  <h4 className="font-semibold text-noumena-accent-1 mb-1">{cat.category}</h4>
                  <p className="text-sm text-gray-600">{cat.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Deployment Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Run Pulse the way that fits your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {deploymentOptions.map((option, index) => (
                <div key={index} className="bg-noumena-bg-3 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{option.model}</h3>
                  <p className="text-sm text-noumena-accent-1 mb-3">{option.subtitle}</p>
                  <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                  <p className="text-xs text-gray-500">
                    <strong>Best for:</strong> {option.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Partners */}
      <LogoStrip title="Supported Blockchain Networks" logos={blockchainPartners} />

      {/* CTA */}
      <section className="py-20 bg-noumena-accent-1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to integrate blockchain into your platform?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Talk to our team about your digital asset use case. From stablecoins to RWA tokenization, Pulse handles the blockchain complexity so you can focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Discuss Your Use Case
            </Link>
            <Link
              href="/technology"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-noumena-accent-1 transition-colors duration-200"
            >
              Back to Technology Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
