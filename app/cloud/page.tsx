import Hero from "@/components/Hero";
import Link from "next/link";

export default function Cloud() {
  return (
    <div className="bg-white">
      <Hero
        headline="NOUMENA Cloud"
        subheadline="The fastest way to build and deploy secure, compliant NPL applications. Managed infrastructure with banking-grade security so you can focus on your business logic."
        primaryCTA={{ label: "Get Started Free", href: "https://portal.noumena.cloud/auth/sign-up", external: true }}
        secondaryCTA={{ label: "Learn More", href: "/technology#noumena-cloud" }}
        backgroundImage="/assets/hero_background_2.svg"
      />

      {/* How to Get Started */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              You need a free account to begin. Three steps to your first deployment.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Sign up for NOUMENA Cloud</h3>
                  <p className="text-gray-600">Create your free account at the NOUMENA Cloud portal. Every plan starts with a 30-day free trial.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Create a project</h3>
                  <p className="text-gray-600">Initialize a new NPL project from your IDE (IntelliJ, VSCode, Codespaces, or Cursor) and connect it to your Cloud workspace.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-noumena-accent-1 text-white flex items-center justify-center font-bold text-lg">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Deploy</h3>
                  <p className="text-gray-600">Push to deploy. NOUMENA Cloud handles authentication, API generation, monitoring, and scaling automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans & Pricing */}
      <section className="py-20 bg-noumena-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Plans & Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Start free, scale as you grow.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Starter */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Starter</h4>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  Ideal for individual users just starting out, this tier offers fundamental tools to explore the platform&apos;s capabilities.
                </p>
                <p className="text-sm text-noumena-accent-1 font-medium mb-1">30-day free trial</p>
                <p className="text-2xl font-bold text-gray-900 mb-1">$19/month</p>
                <p className="text-xs text-gray-500 mb-4">Cancel any time</p>
                <ul className="space-y-2 text-sm text-gray-700 border-t border-gray-100 pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> 1 Application
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> 1 GB storage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Low concurrency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Enterprise security
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> SLA 99.5%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Daily backups
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Community support
                  </li>
                </ul>
                <a
                  href="https://portal.noumena.cloud/auth/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center mt-auto"
                >
                  Start Free
                </a>
              </div>

              {/* Pro */}
              <div className="bg-white rounded-xl border-2 border-noumena-accent-1 p-6 flex flex-col relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-noumena-accent-1 text-white text-xs font-medium px-3 py-1 rounded-full">Popular</span>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Pro</h4>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  Perfect for professionals and small teams seeking to enhance operational efficiency with advanced features.
                </p>
                <p className="text-sm text-noumena-accent-1 font-medium mb-1">30-day free trial</p>
                <p className="text-2xl font-bold text-gray-900 mb-1">$99/month</p>
                <p className="text-xs text-gray-500 mb-4">Cancel any time</p>
                <ul className="space-y-2 text-sm text-gray-700 border-t border-gray-100 pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> 3 Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> 10 GB storage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Standard concurrency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Enterprise security
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> SLA 99.5%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Daily + on-demand backups
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Priority support
                  </li>
                </ul>
                <a
                  href="https://portal.noumena.cloud/auth/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center mt-auto"
                >
                  Start Free
                </a>
              </div>

              {/* Enterprise */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h4>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  Custom deployments for organizations with specific requirements around scale, compliance, and support.
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-1">Custom</p>
                <p className="text-xs text-gray-500 mb-4">Contact for pricing</p>
                <ul className="space-y-2 text-sm text-gray-700 border-t border-gray-100 pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Unlimited applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Custom storage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> High concurrency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Custom SLA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> Dedicated support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-noumena-accent-3">&#10003;</span> On-premise option
                  </li>
                </ul>
                <Link href="/contact" className="btn-primary text-center mt-auto">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
