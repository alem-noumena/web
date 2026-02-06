import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";

export default function AISolutions() {
  // Problem cards
  const problemCards = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "State Inference Failures",
      description: "Agents guess workflow state from conversation history rather than querying authoritative sources. The result: invalid actions, duplicate work, and \"amnesia\" between turns.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Coordination Breakdown",
      description: "Multiple agents operate in silos without shared context. The result: infinite loops, agent ping-pong, and 50+ tool calls per turn with no meaningful progress.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Compliance and Audit Gaps",
      description: "No deterministic record of who did what, when, or why. The result: SOX violations, failed audits, and zero accountability.",
    },
  ];

  // Three pillars
  const pillars = [
    {
      title: "Runtime Enforcement",
      points: [
        "Protocols define valid state transitions and permissions",
        "Business rules execute at runtime, not only at design time",
        "Agents perform only the actions the protocol permits",
      ],
      example: "No PO without an approved PR. Approval required over $5,000.",
    },
    {
      title: "Multi-Party State",
      points: [
        "Single source of truth for all participating agents",
        "Agents query NPL for current state and never infer it",
        "Eliminates amnesia, loops, and coordination failures",
      ],
      example: "Shared context enables genuine multi-agent collaboration",
    },
    {
      title: "Complete Audit Trail",
      points: [
        "Every action logged with party identity and timestamp",
        "Cryptographic verification for regulatory compliance",
        "Ready for SOX, GDPR, and industry-specific audits",
      ],
      example: "Immutable record of every decision and state change",
    },
  ];

  // Separation of concerns
  const agentResponsibilities = [
    "Goals & reasoning",
    "Decision-making",
    "Exception handling",
    "Natural language processing",
    "Tool selection & orchestration",
  ];

  const nplResponsibilities = [
    "Workflow state & transitions",
    "Permission enforcement",
    "Access control & validation",
    "Business rule execution",
    "Audit logging & compliance",
  ];

  // Supported frameworks
  const frameworks = [
    { name: "Google ADK", category: "Agent Framework" },
    { name: "LangChain / LangGraph", category: "Agent Framework" },
    { name: "AutoGen", category: "Agent Framework" },
    { name: "Anthropic Claude", category: "Agent Framework" },
    { name: "CrewAI", category: "Agent Framework" },
    { name: "Custom Frameworks", category: "Agent Framework" },
  ];

  const enterpriseSystems = [
    { name: "SAP", category: "ERP" },
    { name: "Salesforce", category: "CRM" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "Custom APIs", category: "Integration" },
  ];

  // Use cases
  const useCases = [
    {
      title: "Procurement and Sourcing",
      description: "Enable multi-agent negotiation across supplier networks with enforced approval thresholds and business rules.",
      workflow: "Create PR, Source Suppliers, Send RFQ, Evaluate Quotes, Approve, Create PO",
      enforcement: "Budget limits, approval chains, vendor validation",
    },
    {
      title: "Tailored Insurance",
      description: "Automate bespoke insurance coverage, e.g. for freight. Agents on both sides follow a strict negotiation process and formalize the outcome in a binding contract.",
      workflow: "Assess Risk, Negotiate Terms, Validate Coverage, Formalize Contract, Issue Policy",
      enforcement: "Underwriting rules, coverage limits, contract formalization, regulatory compliance",
    },
    {
      title: "Trade Finance",
      description: "Agents representing importer, exporter, and issuing bank coordinate document exchange, goods verification, and payment release through strict sequential steps formalized in a letter of credit.",
      workflow: "Apply for LC, Issue LC, Ship Goods, Present Documents, Verify Compliance, Release Payment",
      enforcement: "LC terms, document requirements, UCP 600 rules, payment conditions",
    },
    {
      title: "Regulated Onboarding",
      description: "An onboarding agent guides clients through documentation submission, reviews and prepares materials per policy, requests additional information when needed, and recommends approval or decline for human review.",
      workflow: "Collect Documents, Verify Completeness, Review Per Policy, Request Clarifications, Recommend Decision, Human Review",
      enforcement: "KYC/AML rules, documentation requirements, escalation to human reviewer",
    },
  ];

  // Comparison table data
  const comparisonRows = [
    {
      capability: "Runtime Enforcement",
      bpm: "Design-time only",
      rpa: "Script-based",
      llm: "-",
      npl: "Deterministic",
    },
    {
      capability: "Judgment & Reasoning",
      bpm: "-",
      rpa: "-",
      llm: "Yes",
      npl: "Yes",
    },
    {
      capability: "Multi-Party State",
      bpm: "-",
      rpa: "-",
      llm: "-",
      npl: "Shared & queryable",
    },
    {
      capability: "Complete Audit Trail",
      bpm: "Partial",
      rpa: "-",
      llm: "-",
      npl: "Cryptographic",
    },
    {
      capability: "Dynamic Coordination",
      bpm: "-",
      rpa: "Brittle",
      llm: "Ad-hoc",
      npl: "Protocol-defined",
    },
  ];

  // Technical capabilities
  const nplCapabilities = [
    "Protocol-defined state machines",
    "Compiler-enforced permissions",
    "Transactional execution guarantees",
    "Automatic REST API generation",
    "MCP standard integration",
    "Multi-party identity management",
  ];

  const deploymentOptions = [
    "NOUMENA Cloud (managed)",
    "Hybrid (your data, our ops)",
    "On-premise (full control)",
    "Kubernetes 1.24+ or Docker",
    "PostgreSQL 14+",
  ];

  return (
    <div className="bg-white">
      <Hero
        headline="Runtime Governance for Multi-Agent AI Workflows"
        subheadline="The missing layer between AI agent frameworks and enterprise systems. Enforces business policies, manages shared state, and auditable lineage."
        primaryCTA={{ label: "Book a Technical Deep Dive", href: "/contact" }}
        secondaryCTA={{ label: "Read the Documentation", href: "https://documentation.noumenadigital.com", external: true }}
        backgroundImage="/assets/hero_background_8.svg"
      />

      {/* The Problem */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Enterprise AI Agents Fail
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI agents excel at reasoning and decision-making but struggle with enterprise coordination. Without runtime governance, multi-agent systems break down in predictable ways.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {problemCards.map((card, index) => (
                <FeatureCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Root Cause</h3>
              <p className="text-gray-700">
                Agents infer workflow and state from conversation history rather than accessing authoritative, persistent workflow state. This architectural gap causes the majority of multi-agent failures in production environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                NPL: The Runtime Layer for AI Agents
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                NPL sits between your agents and your systems, providing deterministic workflow state, enforcing business rules at runtime, and logging every action with cryptographic identity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-noumena-accent-1 hover:shadow-lg transition-all duration-200">
                  <div className="w-10 h-10 bg-noumena-accent-1 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{pillar.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {pillar.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-noumena-accent-3 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-noumena-bg-3 p-3 rounded text-sm text-gray-700 italic">
                    {pillar.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture - Separation of Concerns */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Separation of Concerns
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                NPL enforces a clean boundary between agent reasoning and workflow governance.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Agents Handle</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-noumena-accent-1">NPL Handles</th>
                  </tr>
                </thead>
                <tbody>
                  {agentResponsibilities.map((agent, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="px-6 py-4 text-gray-700 text-sm">{agent}</td>
                      <td className="px-6 py-4 text-gray-900 text-sm font-medium">{nplResponsibilities[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Framework Agnostic. Enterprise Ready.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                NPL integrates with your existing AI stack via the Model Context Protocol (MCP) standard.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Agent Frameworks */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Supported Agent Frameworks</h3>
                <div className="grid grid-cols-2 gap-3">
                  {frameworks.map((framework, index) => (
                    <div key={index} className="bg-noumena-bg-3 p-4 rounded-lg">
                      <p className="font-medium text-gray-900 text-sm">{framework.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise Systems */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Enterprise Systems</h3>
                <div className="grid grid-cols-2 gap-3">
                  {enterpriseSystems.map((system, index) => (
                    <div key={index} className="bg-noumena-bg-3 p-4 rounded-lg">
                      <p className="font-medium text-gray-900 text-sm">{system.name}</p>
                      <p className="text-xs text-gray-500">{system.category}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="text-center mb-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                The Integration Architecture
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                NPL sits between your AI agents and enterprise systems, providing governed state and enforcing business rules via the MCP standard.
              </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="max-w-3xl mx-auto flex flex-col gap-5">
                        {/* AI Agent Layer */}
                        <div className="border-2 border-[#20127C] rounded-lg p-5 bg-white shadow-sm">
                          <h3 className="text-lg font-bold uppercase tracking-wide text-[#20127C] mb-4 text-center">
                            AI Agent Layer
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="bg-noumena-bg-3 p-3 rounded text-sm font-medium text-center border border-gray-200">LangChain</div>
                            <div className="bg-noumena-bg-3 p-3 rounded text-sm font-medium text-center border border-gray-200">AutoGen</div>
                            <div className="bg-noumena-bg-3 p-3 rounded text-sm font-medium text-center border border-gray-200">ADK</div>
                            <div className="bg-noumena-bg-3 p-3 rounded text-sm font-medium text-center border border-gray-200">Custom</div>
                          </div>
                        </div>

                        {/* Connector */}
                        <div className="relative h-8 flex items-center justify-center">
                          <div className="absolute w-0.5 h-full bg-gray-300"></div>
                          <span className="relative z-10 bg-white px-3 py-1 text-xs text-gray-500 border border-gray-200 rounded-full">
                            MCP Protocol
                          </span>
                        </div>

                        {/* NPL Runtime Layer */}
                        <div className="border-2 border-noumena-accent-3 rounded-lg p-5 bg-white shadow-sm">
                          <h3 className="text-lg font-bold uppercase tracking-wide text-noumena-accent-3 mb-4 text-center">
                            NPL Runtime
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="bg-noumena-bg-3 p-3 rounded text-sm font-medium text-center border border-gray-200">State Management</div>
                            <div className="bg-noumena-bg-3 p-3 rounded text-sm font-medium text-center border border-gray-200">Rule Enforcement</div>
                            <div className="bg-noumena-bg-3 p-3 rounded text-sm font-medium text-center border border-gray-200">Audit Logging</div>
                          </div>
                        </div>

                        {/* Connector */}
                        <div className="relative h-8 flex items-center justify-center">
                          <div className="absolute w-0.5 h-full bg-gray-300"></div>
                          <span className="relative z-10 bg-white px-3 py-1 text-xs text-gray-500 border border-gray-200 rounded-full">
                            Secure APIs (REST, MCP)
                          </span>
                        </div>

                        {/* Enterprise Systems Layer */}
                        <div className="border-2 border-noumena-accent-1 rounded-lg p-5 bg-white shadow-sm">
                          <h3 className="text-lg font-bold uppercase tracking-wide text-noumena-accent-1 mb-4 text-center">
                            Enterprise Systems
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="bg-noumena-bg-3 p-3 rounded text-sm font-medium text-center border border-gray-200">SAP</div>
                            <div className="bg-noumena-bg-3 p-3 rounded text-sm font-medium text-center border border-gray-200">Salesforce</div>
                            <div className="bg-noumena-bg-3 p-3 rounded text-sm font-medium text-center border border-gray-200">ServiceNow</div>
                            <div className="bg-noumena-bg-3 p-3 rounded text-sm font-medium text-center border border-gray-200">Databases</div>
                          </div>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Where Multi-Agent Orchestration Delivers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how NPL enables reliable multi-agent coordination in enterprise workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="space-y-3">
                    <div className="bg-noumena-bg-3 p-3 rounded">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Workflow</p>
                      <p className="text-sm text-gray-700 font-mono">{useCase.workflow}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-xs text-noumena-accent-1 uppercase tracking-wider mb-1">NPL Enforces</p>
                      <p className="text-sm text-gray-700">{useCase.enforcement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes NPL Different
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                NPL fills the gap between process oriented design tools, automation and AI reasoning.
              </p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Capability</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">BPM Tools</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">RPA</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">LLM Agents</th>
                    <th className="text-center py-4 px-4 font-semibold text-noumena-accent-1 bg-noumena-accent-1/5">NPL + Agents</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-700">{row.capability}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.bpm}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.rpa}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.llm}</td>
                      <td className="py-4 px-4 text-center font-semibold text-noumena-accent-1 bg-noumena-accent-1/5">{row.npl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">The Gap NPL Fills</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-noumena-accent-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600"><strong className="text-gray-900">Runtime enforcement:</strong> Process tools define workflows at design time but fail to enforce them when code runs. NPL guarantees policy at execution time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-noumena-accent-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600"><strong className="text-gray-900">Reasoning + rules:</strong> RPA automates but can&apos;t reason. LLM agents reason but can&apos;t coordinate reliably. NPL provides the shared state that makes both work together.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-noumena-accent-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600"><strong className="text-gray-900">Auditable by default:</strong> Every state change, decision, and agent action is recorded with cryptographic identity, no extra instrumentation needed.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Why It Matters for AI</h4>
                <p className="text-gray-600 mb-4">
                  As AI agents take on more enterprise responsibility, the gap between what they can do and what they should do widens. NPL closes that gap.
                </p>
                <p className="text-gray-600 mb-4">
                  Agents stay in bounds even when their reasoning is creative or unexpected. Instead of brittle message passing, multiple agents coordinate through shared, governed state. And because every action is recorded with cryptographic identity, compliance is built in from day one rather than bolted on after deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technical Specification
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* NPL Capabilities */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">NPL Capabilities</h3>
                <ul className="space-y-3">
                  {nplCapabilities.map((cap, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-noumena-accent-3 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deployment */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Deployment Options</h3>
                <ul className="space-y-3">
                  {deploymentOptions.map((option, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-noumena-accent-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-noumena-accent-1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Multi-Agent Orchestration in Action
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start with a proof-of-concept using mock integrations. Then connect to your production systems when you are ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Book a Technical Deep Dive
            </Link>
            <a
              href="https://documentation.noumenadigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-noumena-accent-1 transition-colors duration-200"
            >
              Read the Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
