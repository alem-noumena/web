import Hero from "@/components/Hero";
import Link from "next/link";

export default function ClaudeCodePage() {
  return (
    <div className="bg-white">
      <Hero
        headline="NPL with Claude Code"
        subheadline="Build NPL applications through natural conversation in your terminal. Describe what you want, and Claude Code writes secure, compliant protocols."
        backgroundImage="/assets/hero_background_2.svg"
      />

      {/* Why Claude Code + NPL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Claude Code Works Great with NPL
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-noumena-bg-3 rounded-lg p-6">
                <div className="w-12 h-12 bg-noumena-accent-1 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Terminal-Native Workflow</h3>
                <p className="text-sm text-gray-600">Stay in your terminal. Claude Code reads, writes, and edits files while you focus on describing what you need.</p>
              </div>
              <div className="bg-noumena-bg-3 rounded-lg p-6">
                <div className="w-12 h-12 bg-noumena-accent-1 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Compiler-Verified Output</h3>
                <p className="text-sm text-gray-600">Claude Code generates NPL code, and the compiler verifies security. If it compiles, the permission model is correct.</p>
              </div>
              <div className="bg-noumena-bg-3 rounded-lg p-6">
                <div className="w-12 h-12 bg-noumena-accent-1 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Conversational Development</h3>
                <p className="text-sm text-gray-600">Build through natural dialogue. Refine protocols iteratively by describing changes in plain English.</p>
              </div>
              <div className="bg-noumena-bg-3 rounded-lg p-6">
                <div className="w-12 h-12 bg-noumena-accent-1 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Full Project Context</h3>
                <p className="text-sm text-gray-600">Claude Code understands your entire project. It can read existing protocols and generate code that integrates seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Getting Started
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                    1
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Install Claude Code</h3>
                    <p className="text-gray-600 mb-3">Install Claude Code CLI globally.</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-sm text-green-400 font-mono">
npm install -g @anthropic-ai/claude-code
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                    2
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Set up your NPL project</h3>
                    <p className="text-gray-600 mb-3">Install the NPL CLI and create a new project.</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-sm text-green-400 font-mono">
{`brew install NoumenaDigital/tools/npl
npl init --project-dir my-project
cd my-project`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                    3
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Start Claude Code</h3>
                    <p className="text-gray-600 mb-3">Launch Claude Code in your project directory.</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-sm text-green-400 font-mono">
claude
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                    4
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Describe what you want</h3>
                    <p className="text-gray-600 mb-3">Tell Claude Code what to build in plain English:</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-2">Example conversation:</p>
                      <div className="space-y-2">
                        <p className="text-green-400 font-mono text-sm">
                          &gt; Create an application for a simple escrow where a buyer deposits funds, a seller delivers goods, and either party can dispute
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Example Workflow
            </h2>
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono leading-relaxed">
{`$ claude

> Create an NPL protocol for a subscription service with monthly billing.
  The service provider can create subscriptions, and subscribers can
  cancel at any time.

Creating subscription.npl...

> Add a permission for the provider to pause a subscription temporarily

Updating subscription.npl...

> Now run the compiler to check if the permissions are correct

Running: npl build
✓ Build successful. No permission errors.

> Deploy to NOUMENA Cloud

Running: npl deploy --tenant my-tenant --app my-app
✓ Deployed successfully`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pro Tips
            </h2>
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-noumena-accent-1 p-4 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Ask Claude to compile.</strong> After generating code, ask Claude Code to run <code className="bg-gray-100 px-1 rounded">npl build</code> to verify the security model.
                </p>
              </div>
              <div className="bg-white border-l-4 border-noumena-accent-1 p-4 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Iterate through conversation.</strong> Start simple and add complexity. &quot;Add a timeout&quot; or &quot;What if the buyer disputes?&quot;
                </p>
              </div>
              <div className="bg-white border-l-4 border-noumena-accent-1 p-4 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Let Claude read existing code.</strong> Ask Claude Code to read your existing protocols before adding new ones. It will maintain consistency.
                </p>
              </div>
              <div className="bg-white border-l-4 border-noumena-accent-1 p-4 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Use /help for NPL-specific commands.</strong> Claude Code can explain NPL concepts, show examples, and help debug compilation errors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-noumena-accent-1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Install Claude Code and start building secure NPL applications through conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://claude.ai/code"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Claude Code
            </a>
            <Link
              href="/cloud"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-noumena-accent-1 transition-colors duration-200"
            >
              Set Up NOUMENA Cloud
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
