import Hero from "@/components/Hero";
import Link from "next/link";

export default function Technology() {
  // Architecture layers data
  const architectureLayers = [
    {
      layer: "Layer 4",
      title: "NOUMENA Cloud",
      subtitle: "Managed Infrastructure",
      description: "Auth, Observability, Scaling",
      anchor: "#noumena-cloud",
    },
    {
      layer: "Layer 3",
      title: "NOUMENA Adapters",
      subtitle: "Integrating external technologies",
      description: "Blockchain Adapter, HTTP Connector, Mail Connector",
      anchor: "#noumena-adapters",
    },
    {
      layer: "Layer 2",
      title: "NPL Runtime",
      subtitle: "Execution Engine",
      description: "Transactions, Persistence, Audit, APIs",
      anchor: "#npl-runtime",
    },
    {
      layer: "Layer 1",
      title: "NPL Language",
      subtitle: "Foundation",
      description: "Protocols, Parties, Permissions, State Machines",
      anchor: "#npl-runtime",
    },
  ];

  // Core differentiators
  const differentiators = [
    {
      traditional: "Authorization scattered across services",
      noumena: "Compiler-enforced permissions: if it compiles, the permission model is correct",
    },
    {
      traditional: "Manual state management, partial updates",
      noumena: "Transactional execution: atomic operations, no inconsistent states",
    },
    {
      traditional: "Audit trails bolted on after the fact",
      noumena: "Automatic audit logging: every action captured to a tamper-proof trail",
    },
    {
      traditional: "Security reviews as archeological expeditions",
      noumena: "Security as grammar: parties and permissions are language primitives",
    },
    {
      traditional: "APIs drift from business logic",
      noumena: "Generated APIs: REST endpoints, OpenAPI specs, and TypeScript clients from your protocols",
    },
  ];

  // NPL features
  const nplFeatures = [
    {
      title: "Parties and Permissions",
      description: "Authorization is grammar, not library code. Define who can do what directly in your protocol definitions.",
    },
    {
      title: "Finite State Machines",
      description: "Model workflows as explicit states and transitions. No hidden states, no impossible transitions.",
    },
    {
      title: "Transactional Execution",
      description: "Atomic state changes. Either everything succeeds or nothing changes.",
    },
    {
      title: "Automatic Persistence",
      description: "Protocol instances stored with full version history. No ORM, no migrations required.",
    },
    {
      title: "@api to REST Endpoints",
      description: "Annotate protocols and get production-ready APIs with OpenAPI specs and TypeScript clients.",
    },
    {
      title: "Complete Audit Trail",
      description: "Every permission check, every state change, logged automatically.",
    },
  ];

  // Cloud features
  const cloudFeatures = [
    { title: "Secure Authentication", description: "Keycloak-based identity management, SSO, MFA out of the box" },
    { title: "One-Click Deployment", description: "Push to deploy from your repository" },
    { title: "Enterprise Security", description: "Encryption at rest/transit, network isolation, regular pen testing" },
    { title: "Monitoring & Ops", description: "Prometheus metrics, structured logging, health endpoints" },
    { title: "Automatic Backups", description: "Daily backups included, on-demand for Pro tier" },
    { title: "GDPR Tooling", description: "Built-in anonymization and data removal capabilities" },
  ];

  // Adapter cards
  const adapterCards = [
    {
      title: "HTTP Connector",
      description: "Connect NPL protocols to any REST API. Trigger webhooks, fetch data, and orchestrate third-party services directly from your protocol logic.",
      capabilities: [
        "Outbound REST calls from NPL actions",
        "Configurable authentication (API keys, OAuth, mTLS)",
        "Automatic retry and circuit-breaker patterns",
        "Request/response mapping to NPL types",
      ],
    },
    {
      title: "Mail Connector",
      description: "Send transactional and notification emails from NPL protocols via any SMTP server. Template-driven, audit-logged, and fully integrated with the permission model.",
      capabilities: [
        "SMTP integration with TLS support",
        "Template-based email composition",
        "Attachment support from protocol data",
        "Delivery tracking in audit trail",
      ],
    },
    {
      title: "NOUMENA Pulse",
      subtitle: "Blockchain Adapter",
      description: "Digital asset middleware connecting NPL applications to blockchain networks, payment systems, and financial infrastructure. One interface for multiple chains.",
      capabilities: [
        "Multichain support (EVM, Stellar, Polkadot, Cardano, Near)",
        "Wallet abstraction and key management",
        "Lifecycle services: issuance, redemption, transfer, settlement",
        "KYC/compliance hooks and regulatory alignment",
      ],
      href: "/technology/pulse",
    },
  ];

  // Security layers
  const securityLayers = [
    { layer: "Language", guarantee: "Compiler-enforced permissions. If it compiles, authorization is correct." },
    { layer: "Runtime", guarantee: "Permission checks on every action. Transactional isolation." },
    { layer: "Infrastructure", guarantee: "Network isolation, encryption (transit + rest), secret management." },
    { layer: "Operations", guarantee: "Tamper-proof audit logging, monitoring, alerting, incident response." },
  ];

  // Compliance capabilities
  const complianceCapabilities = [
    { requirement: "Audit Trail", solution: "Automatic, tamper-proof logging of all actions" },
    { requirement: "Access Control", solution: "Fine-grained, compiler-verified permissions" },
    { requirement: "Data Residency", solution: "On-premise and regional deployment options" },
    { requirement: "GDPR", solution: "Built-in anonymization and data removal tools" },
    { requirement: "MiCA / DORA", solution: "Regulatory alignment for digital asset operations" },
    { requirement: "ISO 27001", solution: "Security controls aligned with standard" },
  ];

  // Deployment options
  const deploymentOptions = [
    {
      model: "Managed",
      subtitle: "NOUMENA Cloud",
      dataLocation: "NOUMENA Cloud",
      operations: "NOUMENA",
      timeToLaunch: "Hours",
      bestFor: "Startups, PoCs, teams without DevOps",
    },
    {
      model: "Hybrid",
      subtitle: "Best of Both",
      dataLocation: "Your infrastructure",
      operations: "Shared",
      timeToLaunch: "Days",
      bestFor: "Data sovereignty + managed operations",
    },
    {
      model: "On-Premise",
      subtitle: "Full Control",
      dataLocation: "Your infrastructure",
      operations: "Your team",
      timeToLaunch: "Weeks",
      bestFor: "Regulated institutions, max control",
    },
  ];

  // Product configurations
  const productConfigs = [
    { useCase: "Secure enterprise software", products: "NPL & Runtime + NOUMENA Cloud" },
    { useCase: "Regulated stablecoin", products: "NPL & Runtime + NOUMENA Cloud + NOUMENA Pulse (Blockchain Adapter)" },
    { useCase: "RWA tokenization platform", products: "NPL & Runtime + NOUMENA Cloud + NOUMENA Pulse (Blockchain Adapter)" },
    { useCase: "Self-hosted secure backend", products: "NPL & Runtime (on-premise)" },
    { useCase: "Blockchain integration for existing app", products: "NOUMENA Pulse (Blockchain Adapter, standalone)" },
  ];

  // Trusted clients with logos
  const clientLogos = [
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

  // Blockchain partners with logos
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

  // Implementation partners with logos
  const implPartners = [
    { name: "PwC", src: "/partner/pwc.png", alt: "PwC" },
    { name: "BearingPoint", src: "/partner/BearingPoint_Symbol_Black_RGB.png", alt: "BearingPoint" },
    { name: "NTT Data", src: "/partner/NTT-Data.png", alt: "NTT Data" },
    { name: "Zühlke", src: "/partner/Zuehlke.jpg", alt: "Zühlke" },
    { name: "ti&m", src: "/partner/ti8m.jpg", alt: "ti&m" },
    { name: "GFT", src: "/partner/GFT.png", alt: "GFT" },
    { name: "AWS", src: "/partner/aws.png", alt: "AWS" },
    { name: "Microsoft Azure", src: "/partner/Microsoft_Azure.png", alt: "Microsoft Azure" },
  ];

  return (
    <div className="bg-white">
      <Hero
        headline="The Only Trust-Native Technology for Secure, Compliant Applications"
        subheadline="A purpose-built stack where authorization, auditability, and compliance are language primitives, not afterthoughts. From protocol definition to blockchain integration, NOUMENA eliminates the security and compliance tax from your engineering roadmap."
        primaryCTA={{ label: "Start Free in Cloud", href: "/cloud" }}
        secondaryCTA={{ label: "Book a Technical Deep Dive", href: "/contact" }}
        backgroundImage="/assets/hero_background_2.svg"
      />

      {/* Architecture Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The NOUMENA Stack
              </h2>
              <p className="text-xl text-gray-600">
                Four layers, one coherent model. Each layer builds on the guarantees of the layer below. Choose the products you need and use them together or independently.
              </p>
            </div>

            {/* Visual Stack */}
            <div className="mb-12 border border-gray-200 rounded-lg overflow-hidden">
              {architectureLayers.map((layer, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 ${index !== architectureLayers.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gray-500">{layer.layer}</span>
                      <a href={layer.anchor} className="block">
                        <h3 className="text-xl font-bold text-noumena-accent-1 hover:underline">{layer.title}</h3>
                      </a>
                      <p className="text-sm text-gray-600">{layer.subtitle}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right">{layer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Architecture - Differentiators */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why NOUMENA
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Security, compliance, and correctness. Structural guarantees, not afterthoughts.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Traditional Approach</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-noumena-accent-1">NOUMENA Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {differentiators.map((diff, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="px-6 py-4 text-gray-500 text-sm">{diff.traditional}</td>
                      <td className="px-6 py-4 text-gray-900 text-sm font-medium">{diff.noumena}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Product 1: NPL & Runtime */}
      <section id="npl-runtime" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-4">Product</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                NPL & Runtime
              </h2>
              <p className="text-xl text-gray-600">
                Deterministic language plus secure execution engine. The foundation layer.
              </p>
            </div>

            <div className="bg-noumena-bg-3 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                <strong>NPL (Noumena Protocol Language)</strong> is a deterministic, domain-specific language where parties, permissions, and protocols are first-class constructs. The Runtime executes NPL code with transactional guarantees.
              </p>
              <p className="text-gray-700">
                Authorization is not a library. It is grammar. Define who can do what directly in your protocol definitions. The compiler verifies your permission model; the runtime enforces it.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {nplFeatures.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Code Example */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Code Example</h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre
                  className="text-sm text-gray-100 font-mono leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: `<span class="text-yellow-400">@api</span>
<span class="text-purple-400">protocol</span>[<span class="text-gray-300">issuer</span>, <span class="text-gray-300">holder</span>] <span class="text-green-400">SimpleToken</span>(<span class="text-purple-400">var</span> balance: <span class="text-cyan-400">Number</span>) {

    <span class="text-purple-400">permission</span>[<span class="text-gray-300">issuer</span>] <span class="text-blue-400">mint</span>(amount: <span class="text-cyan-400">Number</span>) {
        balance = balance + amount
    }

    <span class="text-purple-400">permission</span>[<span class="text-gray-300">holder</span>] <span class="text-blue-400">transfer</span>(to: <span class="text-cyan-400">Party</span>, amount: <span class="text-cyan-400">Number</span>)
        <span class="text-purple-400">requires</span> balance &gt;= amount {
        balance = balance - amount
    }

    <span class="text-purple-400">permission</span>[<span class="text-gray-300">issuer</span>] <span class="text-blue-400">burn</span>(amount: <span class="text-cyan-400">Number</span>)
        <span class="text-purple-400">requires</span> balance &gt;= amount {
        balance = balance - amount
    }
}` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>What you get:</strong> Compile-time verification that only <code className="bg-gray-100 px-1 rounded">issuer</code> can mint/burn. Runtime enforcement of balance checks. Automatic audit trail. Generated REST API with proper authorization.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-noumena-accent-1 p-4 mb-8">
              <p className="text-gray-700">
                <strong>Best for:</strong> Complex multi-party workflows, high-stakes transactions, regulated environments requiring fine-grained access control and complete audit trails.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://documentation.noumenadigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Read NPL Documentation
              </Link>
              <Link
                href="https://github.com/NoumenaDigital"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Explore on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2: NOUMENA Cloud */}
      <section id="noumena-cloud" className="py-20 bg-noumena-bg-3 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-4">Product</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                NOUMENA Cloud
              </h2>
              <p className="text-xl text-gray-600">
                Managed infrastructure. Deploy in minutes, scale with confidence.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                A fully managed hosting environment for NPL applications. Banking-grade infrastructure without the DevOps overhead.
              </p>
              <p className="text-gray-700">
                Get instant access and use IntelliJ, VSCode, Codespaces, or Cursor to start building. The platform handles authentication, deployment, API generation, and monitoring automatically.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {cloudFeatures.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Start */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Start</h3>
              <div className="bg-gray-900 rounded-lg p-6">
                <pre
                  className="text-sm text-gray-100 font-mono leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: `<span class="text-gray-500"># Install NPL CLI</span>
<span class="text-green-400">brew</span> install NoumenaDigital/tools/npl

<span class="text-gray-500"># Initialize project</span>
<span class="text-green-400">npl</span> init <span class="text-cyan-400">--project-dir</span> my-project

<span class="text-gray-500"># Local development</span>
<span class="text-gray-500"># Edit with your favourite IDE</span>

<span class="text-gray-500"># Deploy locally</span>
<span class="text-green-400">npl</span> deploy` }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/cloud"
                className="btn-primary text-center"
              >
                See Plans & Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product 3: NOUMENA Adapters */}
      <section id="noumena-adapters" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-4">Product</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                NOUMENA Adapters
              </h2>
              <p className="text-xl text-gray-600">
                Connect NPL to external systems. HTTP APIs, email, and blockchain networks.
              </p>
            </div>

            <div className="bg-noumena-bg-3 rounded-lg p-8 mb-12">
              <p className="text-lg text-gray-700">
                Adapters extend NPL protocols beyond their own runtime. Call external REST APIs, send transactional emails, or integrate with blockchain networks and payment rails. Each adapter is fully integrated with NPL&apos;s permission model and audit trail.
              </p>
            </div>

            {/* Adapter Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {adapterCards.map((adapter, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{adapter.title}</h3>
                    {adapter.subtitle && (
                      <p className="text-sm text-noumena-accent-1 font-medium">{adapter.subtitle}</p>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{adapter.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {adapter.capabilities.map((cap, capIndex) => (
                      <li key={capIndex} className="flex items-start text-sm text-gray-700">
                        <span className="text-noumena-accent-3 mr-2 flex-shrink-0">&#10003;</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                  {adapter.href && (
                    <Link
                      href={adapter.href}
                      className="text-noumena-accent-1 font-semibold text-sm hover:underline mt-auto"
                    >
                      Learn more &rarr;
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Products Work Together */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How the Products Work Together
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the combination that fits your use case.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Use Case</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Products Needed</th>
                </tr>
              </thead>
              <tbody>
                {productConfigs.map((config, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="px-6 py-4 text-gray-900 text-sm">{config.useCase}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm font-medium">{config.products}</td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Security & Compliance Architecture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Defense in depth. Security guarantees at every layer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
            {/* Security Layers */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Defense in Depth</h3>
              <div className="space-y-3">
                {securityLayers.map((item, index) => (
                  <div key={index} className="bg-noumena-bg-3 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.layer} Level</h4>
                    <p className="text-gray-600 text-sm">{item.guarantee}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Capabilities</h3>
              <div className="space-y-3">
                {complianceCapabilities.map((item, index) => (
                  <div key={index} className="flex items-start bg-noumena-bg-3 rounded-lg p-4">
                    <span className="text-noumena-accent-1 font-semibold text-sm w-28 flex-shrink-0">{item.requirement}</span>
                    <span className="text-gray-600 text-sm">{item.solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Deployment Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the deployment model that fits your requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
            {deploymentOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{option.model}</h3>
                <p className="text-sm text-noumena-accent-1 mb-4">{option.subtitle}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Data Location</span>
                    <span className="text-gray-900 font-medium">{option.dataLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Operations</span>
                    <span className="text-gray-900 font-medium">{option.operations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time to Launch</span>
                    <span className="text-gray-900 font-medium">{option.timeToLaunch}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    <strong>Best for:</strong> {option.bestFor}
                  </p>
                </div>
              </div>
            ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                <strong>On-premise requirements:</strong> Kubernetes 1.24+ or Docker, PostgreSQL 14+, 4+ CPU cores, 8+ GB RAM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Getting Started
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
            {/* For Developers */}
            <div className="bg-noumena-bg-3 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Developers</h3>
              <p className="text-gray-600 mb-6">Get up and running in minutes.</p>
              <div className="bg-gray-900 rounded-lg p-4 mb-6">
                <pre className="text-xs text-gray-100 font-mono overflow-x-auto">
{`# Install
brew install NoumenaDigital/tools/npl

# Initialize
npl init --project-dir my-project

# Run locally
cd my-project && npl dev`}
                </pre>
              </div>
              <div className="space-y-2">
                <Link
                  href="https://documentation.noumenadigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-noumena-accent-1 hover:underline text-sm"
                >
                  → Documentation
                </Link>
                <Link
                  href="https://github.com/NoumenaDigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-noumena-accent-1 hover:underline text-sm"
                >
                  → GitHub Examples
                </Link>
                <Link
                  href="/resources"
                  className="block text-noumena-accent-1 hover:underline text-sm"
                >
                  → Resources
                </Link>
              </div>
            </div>

            {/* For Architects */}
            <div className="bg-noumena-bg-3 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Architects & Technical Leaders</h3>
              <p className="text-gray-600 mb-6">Evaluate the platform for your use case.</p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-noumena-accent-3 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm"><strong>Technical Deep Dive:</strong> 60-minute session with our engineering team</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-noumena-accent-3 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm"><strong>Guided PoC:</strong> Build a proof-of-concept with your specific use case</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-noumena-accent-3 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm"><strong>Architecture Review:</strong> Discover how NOUMENA fits your stack</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary inline-block text-center w-full">
                Book a Technical Session
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Clients */}
            <p className="text-center text-sm text-gray-600 mb-6 font-medium">Trusted by leading organizations</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center mb-12">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-12 w-full opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-10 max-w-[100px] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Blockchain Partners */}
            <p className="text-center text-sm text-gray-600 mb-6 font-medium">Blockchain partners</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center mb-12">
              {blockchainPartners.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-12 w-full opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-10 max-w-[100px] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Implementation Partners */}
            <p className="text-center text-sm text-gray-600 mb-6 font-medium">Implementation & technology partners</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              {implPartners.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-12 w-full opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-10 max-w-[100px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-noumena-accent-1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to build secure, compliant applications?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start building in NOUMENA Cloud today or talk to our team about your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cloud"
              className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Free in NOUMENA Cloud
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-noumena-accent-1 transition-colors duration-200"
            >
              Book a Technical Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
