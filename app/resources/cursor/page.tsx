import Hero from "@/components/Hero";
import Link from "next/link";
import CopyCodeBlock from "@/components/CopyCodeBlock";

export default function CursorPage() {
  return (
    <div className="bg-white">
      <Hero
        headline="NPL with Cursor"
        subheadline="The AI-first code editor that understands NPL. Write protocols, permissions, and business logic with intelligent autocomplete and conversational AI assistance."

        backgroundImage="/assets/hero_background_2.svg"
      />

      {/* Why Cursor + NPL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Cursor Works Great with NPL
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-noumena-bg-3 rounded-lg p-6">
                <div className="w-12 h-12 bg-noumena-accent-1 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Compiler-Verified Security</h3>
                <p className="text-sm text-gray-600">Cursor can generate NPL code freely. If it compiles, the permission model is correct. No security vulnerabilities can slip through.</p>
              </div>
              <div className="bg-noumena-bg-3 rounded-lg p-6">
                <div className="w-12 h-12 bg-noumena-accent-1 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Intelligent Autocomplete</h3>
                <p className="text-sm text-gray-600">Cursor&apos;s AI understands NPL syntax and suggests protocols, permissions, and state machines as you type.</p>
              </div>
              <div className="bg-noumena-bg-3 rounded-lg p-6">
                <div className="w-12 h-12 bg-noumena-accent-1 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Chat-Based Development</h3>
                <p className="text-sm text-gray-600">Describe what you want in plain English. Cursor generates the NPL code, and the compiler ensures it&apos;s secure.</p>
              </div>
              <div className="bg-noumena-bg-3 rounded-lg p-6">
                <div className="w-12 h-12 bg-noumena-accent-1 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Faster Iteration</h3>
                <p className="text-sm text-gray-600">NPL&apos;s clear, deterministic syntax means AI suggestions are more accurate. Less back-and-forth, more building.</p>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Install Cursor</h3>
                    <p className="text-gray-600">Download and install Cursor from <a href="https://cursor.com" target="_blank" rel="noopener noreferrer" className="text-noumena-accent-1 hover:underline">cursor.com</a></p>
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
                    <CopyCodeBlock code={`brew install NoumenaDigital/tools/npl
npl init --project-dir my-project
cd my-project`} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                    3
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Open in Cursor</h3>
                    <p className="text-gray-600">Open your project folder in Cursor and start building with AI assistance.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                    4
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Use AI to write NPL</h3>
                    <p className="text-gray-600 mb-3">Press <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">Cmd+K</code> to open the AI prompt. Describe what you want:</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-2">Example prompt:</p>
                      <code className="text-green-400 font-mono text-sm">
                        Create me a simple todo app i can share with my team mates.
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pro Tips
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-noumena-accent-1 p-4 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Add NPL docs to your context.</strong> Drag the NPL documentation into Cursor&apos;s context window to improve AI suggestions.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-noumena-accent-1 p-4 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Trust the compiler.</strong> If Cursor generates code that doesn&apos;t compile, the AI made a security mistake. Ask it to fix the compilation error.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-noumena-accent-1 p-4 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Be specific about parties.</strong> When prompting, clearly describe who the parties are and what permissions each should have.
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
            Download Cursor and start writing secure NPL applications with AI assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cursor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Cursor
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
