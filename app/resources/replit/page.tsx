import Hero from "@/components/Hero";
import Link from "next/link";

export default function ReplitPage() {
  return (
    <div className="bg-white">
      <Hero
        headline="NPL on Replit"
        subheadline="Build and deploy secure applications directly in your browser. The Replit Agents understands NPL and helps you create production-ready code."
        primaryCTA={{ label: "View Template on GitHub", href: "https://github.com/NoumenaDigital/replit-template", external: true }}
        secondaryCTA={{ label: "Open Replit", href: "https://replit.com", external: true }}
        backgroundImage="/assets/hero_background_2.svg"
      />

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What You Get
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-noumena-bg-3 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-noumena-accent-1 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Setup</h3>
                <p className="text-sm text-gray-600">Import the template and start coding immediately. No local environment needed.</p>
              </div>
              <div className="bg-noumena-bg-3 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-noumena-accent-1 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI-Assisted</h3>
                <p className="text-sm text-gray-600">The Replit Agent understands NPL and helps you write secure protocols.</p>
              </div>
              <div className="bg-noumena-bg-3 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-noumena-accent-1 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">One-Click Deploy</h3>
                <p className="text-sm text-gray-600">Deploy directly to NOUMENA Cloud from your Replit workspace.</p>
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

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                    1
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Set up NOUMENA Cloud</h3>
                    <p className="text-gray-600 mb-4">Create your free account and set up a deployment target.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-noumena-accent-3 mt-0.5">&#10003;</span>
                        <span>Register at <a href="https://portal.noumena.cloud" target="_blank" rel="noopener noreferrer" className="text-noumena-accent-1 hover:underline">portal.noumena.cloud</a></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-noumena-accent-3 mt-0.5">&#10003;</span>
                        <span>Create a tenant (your deployment bucket)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-noumena-accent-3 mt-0.5">&#10003;</span>
                        <span>Select a plan (30-day free trial available)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-noumena-accent-3 mt-0.5">&#10003;</span>
                        <span>Create an application and note the tenant/app slugs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                    2
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Import the Template</h3>
                    <p className="text-gray-600 mb-4">Import our pre-configured NPL template into Replit.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-noumena-accent-3 mt-0.5">&#10003;</span>
                        <span>Go to <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="text-noumena-accent-1 hover:underline">replit.com</a></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-noumena-accent-3 mt-0.5">&#10003;</span>
                        <span>Click &quot;Import from GitHub&quot;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-noumena-accent-3 mt-0.5">&#10003;</span>
                        <span>Paste: <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">github.com/NoumenaDigital/replit-template</code></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                    3
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Run First-Time Setup</h3>
                    <p className="text-gray-600 mb-4">Let the Replit Agent configure and initialize your project. You will need to present the tenant and app slogs that you noted.</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-2">Tell the Replit Agent:</p>
                      <code className="text-green-400 font-mono text-sm">
                        Please run first-time setup for this project.
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                    4
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Building</h3>
                    <p className="text-gray-600">You&apos;re ready to write an NPL application. Describe your requriements directly in Replit and watch how your application is beeing built.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-noumena-accent-1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Import the template and build your first NPL application in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/NoumenaDigital/replit-template"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-noumena-accent-1 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Template on GitHub
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
