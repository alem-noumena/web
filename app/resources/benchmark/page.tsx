import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata = {
  title: "NPL Benchmarking Study | NOUMENA",
  description: "Benchmark comparing NPL against  Java, .Net,  Node.js, Rails, and Django. See how NPL delivers 7.7x code reduction and zero security vulnerabilities.",
};

export default function BenchmarkStudy() {
  const frameworkComparison = [
    { metric: "Total Lines of Code", npl: "423", rails: "1,514", nodejs: "3,239", django: "2,242" },
    { metric: "Authorization Code", npl: "~50", rails: "~400", nodejs: "~800", django: "~330" },
    { metric: "Files Required", npl: "1", rails: "20", nodejs: "21", django: "17" },
    { metric: "Dependencies", npl: "0", rails: "12+", nodejs: "20+", django: "15+" },
    { metric: "Code Reduction vs NPL", npl: "—", rails: "3.6x more", nodejs: "7.7x more", django: "5.3x more" },
  ];

  const securityComparison = [
    { vulnerability: "Broken Access Control", description: "Unauthorized data/action access", npl: 0, rails: 4, nodejs: 4, django: 5 },
    { vulnerability: "Injection", description: "Malicious code execution via untrusted data", npl: 0, rails: 1, nodejs: 2, django: 2 },
    { vulnerability: "Insecure Design", description: "Architectural weakness", npl: 0, rails: 0, nodejs: 1, django: 1 },
    { vulnerability: "Logic Errors", description: "Exploitable application bugs", npl: 0, rails: 2, nodejs: 3, django: 2 },
    { vulnerability: "State Manipulation", description: "Illegally modifying system state", npl: 0, rails: 2, nodejs: 4, django: 2 },
    { vulnerability: "Mass Assignment", description: "Assigning values to unexposed fields", npl: 0, rails: 2, nodejs: 1, django: 3 },
  ];

  const complexityComparison = [
    { measure: "Cyclomatic Complexity (avg)", npl: "1.2", rails: "3.8", nodejs: "4.2", django: "3.5", advantage: "~3x lower" },
    { measure: "Decision Points", npl: "~15", rails: "~85", nodejs: "~120", django: "~95", advantage: "5.7-8x reduction" },
    { measure: "Coordination Points", npl: "0", rails: "~25", nodejs: "~40", django: "~30", advantage: "Eliminated" },
    { measure: "Manual Auth Checks", npl: "0", rails: "~30", nodejs: "~45", django: "~35", advantage: "Eliminated" },
    { measure: "Business Validation Rules", npl: "Unified", rails: "5 files", nodejs: "8 files", django: "6 files", advantage: "Single source" },
  ];

  return (
    <div className="bg-white">
      <Hero
        headline="NPL Benchmarking Study"
        subheadline="Independent analysis comparing NPL against Ruby on Rails, Node.js, and Django. Same requirements, same AI tooling, dramatically different results."
        primaryCTA={{ label: "Start Building with NPL", href: "/cloud" }}
        secondaryCTA={{ label: "View Source Code", href: "https://github.com/jk-nd/benchmarking-npl", external: true }}
        backgroundImage="/assets/hero_background_7.svg"
      />

      {/* Key Results Banner */}
      <section className="py-12 bg-noumena-accent-1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">7.7x</div>
              <div className="text-white/80">Less code than Node.js</div>
              <div className="text-white/60 text-sm mt-1">423 vs 3,239 lines</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3.5x</div>
              <div className="text-white/80">Lower complexity</div>
              <div className="text-white/60 text-sm mt-1">1.2 vs 4.2 cyclomatic avg</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">21x</div>
              <div className="text-white/80">Fewer files required</div>
              <div className="text-white/60 text-sm mt-1">1 vs 21 in Node.js</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-white/80">Dependencies eliminated</div>
              <div className="text-white/60 text-sm mt-1">0 vs 20+ in Node.js</div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Methodology</h2>
          <div className="bg-noumena-bg-3 rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-6">
              This benchmark uses a real-world expense approval application with non-trivial authorization and validation requirements. All implementations were generated using Claude Code with minimal human intervention.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-noumena-accent-1 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Identical Requirements</h4>
                  <p className="text-gray-600">One set of business requirements applied to all frameworks. The application handles expense submission, multi-role approvals, and compliance workflows.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-noumena-accent-1 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Production Standards</h4>
                  <p className="text-gray-600">All implementations include Docker deployment, authorization, state machines, and audit logging. No shortcuts or mocked services.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-noumena-accent-1 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">AI-Generated Code</h4>
                  <p className="text-gray-600">Claude Code generated all implementations with minimal corrections. Human review ensured functional equivalence across all frameworks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-noumena-accent-1 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Independent Analysis</h4>
                  <p className="text-gray-600">AI-based static vulnerability analysis and code complexity metrics. Lines of code exclude test code and comments for fair comparison.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Overview */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Application: Expense Approval</h2>
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <p className="text-lg text-gray-700 mb-6">
              A realistic enterprise application requiring multi-party authorization and complex state management:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">State Machine</h4>
                <div className="flex flex-col items-start gap-1 text-sm">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">draft</span>
                  <span className="text-gray-400 ml-4">↓</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">submitted</span>
                  <span className="text-gray-400 ml-4">↓</span>
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">approved</span>
                    <span className="text-gray-400">/</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">rejected</span>
                    <span className="text-gray-400">/</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">compliance_hold</span>
                  </div>
                  <span className="text-gray-400 ml-4">↓</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">paid</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Role-Based Actions</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><span className="font-medium text-gray-900">Employee:</span> create, edit, submit, withdraw</li>
                  <li><span className="font-medium text-gray-900">Manager:</span> approve/reject within limits</li>
                  <li><span className="font-medium text-gray-900">Finance:</span> process payments, validate</li>
                  <li><span className="font-medium text-gray-900">Compliance:</span> audit, flag, hold</li>
                  <li><span className="font-medium text-gray-900">VP/CFO:</span> exception overrides</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lines of Code Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Code Volume Comparison</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            NPL delivers 3.6 to 7.7 times less code than traditional frameworks for identical functionality.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Metric</th>
                  <th className="text-center py-4 px-4 font-semibold text-noumena-accent-1 bg-noumena-accent-1/5">NPL</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Ruby on Rails</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Node.js + Express</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Django + DRF</th>
                </tr>
              </thead>
              <tbody>
                {frameworkComparison.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{row.metric}</td>
                    <td className="py-4 px-4 text-center font-semibold text-noumena-accent-1 bg-noumena-accent-1/5">{row.npl}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.rails}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.nodejs}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.django}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-noumena-bg-3 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Zero-Configuration Framework</h4>
              <p className="text-gray-600 text-sm">Start building immediately from a single file. No boilerplate setup required.</p>
            </div>
            <div className="bg-noumena-bg-3 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Auto-Generated Infrastructure</h4>
              <p className="text-gray-600 text-sm">REST API, database schema, and documentation generated automatically from your protocol.</p>
            </div>
            <div className="bg-noumena-bg-3 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">No Dependencies</h4>
              <p className="text-gray-600 text-sm">Zero external dependencies means no supply chain vulnerabilities and simpler maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Comparison */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Security Vulnerability Analysis</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Static analysis reveals NPL eliminates entire classes of vulnerabilities that plague traditional frameworks.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 font-semibold">Vulnerability</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-400 text-sm">What it is</th>
                  <th className="text-center py-4 px-4 font-semibold text-green-400">NPL</th>
                  <th className="text-center py-4 px-4 font-semibold">Rails</th>
                  <th className="text-center py-4 px-4 font-semibold">Node.js</th>
                  <th className="text-center py-4 px-4 font-semibold">Django</th>
                </tr>
              </thead>
              <tbody>
                {securityComparison.map((row, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium">{row.vulnerability}</td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{row.description}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-full font-bold">{row.npl}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${row.rails > 0 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{row.rails}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${row.nodejs > 0 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{row.nodejs}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${row.django > 0 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{row.django}</span>
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gray-600">
                  <td className="py-4 px-4 font-bold" colSpan={2}>Total Vulnerabilities</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-green-500/20 text-green-400 rounded-full font-bold text-lg">0</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-red-500/20 text-red-400 rounded-full font-bold text-lg">11</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-red-500/20 text-red-400 rounded-full font-bold text-lg">15</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-red-500/20 text-red-400 rounded-full font-bold text-lg">15</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h4 className="font-semibold mb-2">Compiler-Enforced Security</h4>
              <p className="text-gray-400 text-sm">Security rules are enforced at compile time, eliminating entire vulnerability classes before code can be deployed.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h4 className="font-semibold mb-2">Unified Architecture</h4>
              <p className="text-gray-400 text-sm">Business logic, authorization, and state management live in a single Protocol, preventing security inconsistencies from scattered logic.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h4 className="font-semibold mb-2">Automatic Generation</h4>
              <p className="text-gray-400 text-sm">APIs and audit trails are autogenerated, eliminating human errors and vulnerabilities from manual implementation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Complexity Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Code Complexity Analysis</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Lower complexity means fewer bugs, easier maintenance, and faster onboarding for new team members.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Complexity Measure</th>
                  <th className="text-center py-4 px-4 font-semibold text-noumena-accent-1 bg-noumena-accent-1/5">NPL</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Rails</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Node.js</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Django</th>
                  <th className="text-center py-4 px-4 font-semibold text-noumena-accent-1">NPL Advantage</th>
                </tr>
              </thead>
              <tbody>
                {complexityComparison.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{row.measure}</td>
                    <td className="py-4 px-4 text-center font-semibold text-noumena-accent-1 bg-noumena-accent-1/5">{row.npl}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.rails}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.nodejs}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.django}</td>
                    <td className="py-4 px-4 text-center font-semibold text-noumena-accent-1">{row.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Why NPL Reduces Complexity</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-noumena-accent-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600"><strong className="text-gray-900">Fewer branches:</strong> Authorization and state encoded as single permission guards, avoiding multi-file conditional explosion</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-noumena-accent-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600"><strong className="text-gray-900">Less coordination:</strong> One protocol definition removes cross-layer synchronization and repeated validation code</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-noumena-accent-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600"><strong className="text-gray-900">Minimal boilerplate:</strong> API, state transitions, and audit are generated, eliminating hundreds of lines of plumbing code</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">The Cognitive Load Advantage</h4>
              <p className="text-gray-600 mb-4">
                A single source of truth with compile-time guarantees replaces multi-layer reasoning and reduces mental context switching.
              </p>
              <p className="text-gray-600">
                Developers working with NPL report spending more time on business logic and less time debugging authorization flows, state inconsistencies, and integration issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI + NPL Section */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why AI Coding Needs NPL</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Large language models excel at pattern matching but struggle to enforce rules. NPL provides the guardrails that make AI-generated code production-ready.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">LLMs Recreate Boilerplate</h4>
              <p className="text-gray-600 text-sm">AI happily generates thousands of lines of boilerplate. Business logic gets scattered across multiple files. Completeness remains challenging.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Security Remains Stochastic</h4>
              <p className="text-gray-600 text-sm">Authorization scattered across annotations, filters, and config. Enforcement relies on developer discipline. Access control defects remain invisible to LLMs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Non-Functionals as Afterthought</h4>
              <p className="text-gray-600 text-sm">External effects mixed into business code. Atomicity and audit are not guaranteed. Observability bolted on via libraries with diverging behavior.</p>
            </div>
          </div>
          <div className="mt-12 bg-gradient-to-r from-noumena-accent-1 to-blue-600 rounded-xl p-8 text-white">
            <h4 className="text-xl font-bold mb-4">NPL Gives AI the Guardrails It Needs</h4>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Compile-time guardrails prevent invalid authorization logic</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>AI generates production-ready code from business requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Self-documenting protocols auto-generate APIs and tests</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Streamlined testing focuses on business outcomes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Source Code CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Verify the Results Yourself</h2>
          <p className="text-xl text-gray-600 mb-8">
            All benchmark code is open source. Clone the repository, run the implementations, and see the difference firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/jk-nd/benchmarking-npl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Source on GitHub
            </a>
            <Link href="/resources" className="btn-secondary">
              Back to Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-noumena-accent-1 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Less Code and Ship Faster?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start building with NPL today. Free tier available.
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
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
