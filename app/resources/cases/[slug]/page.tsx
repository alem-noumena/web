import Link from "next/link";
import { notFound } from "next/navigation";

interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  category: string;
  highlights: string[];
  fullDescription?: string;
  scope?: string[];
  whyNPL?: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "allunity-stablecoin",
    title: "AllUnity Regulated EUR Stablecoin",
    description: "Europe's peremier MiCA-compliant EUR stablecoin, built on NOUMENA's trust-native platform. From concept to launch, AllUnity delivered a fully regulated digital euro that meets the highest standards of security, compliance, and operational excellence.",
    category: "Regulated Stablecoin",
    highlights: [
      "Europe's premier MiCA-compliant EUR stablecoin",
      "75 granular user rights across 8 distinct roles",
      "Enterprise-grade break-glass controls",
      "Seamless multi-banking payment integration",
    ],
    fullDescription: "When AllUnity set out to launch Europe's peremier MiCA-compliant EUR stablecoin, they needed more than technology. They needed a platform that could navigate the complex regulatory landscape while maintaining operational flexibility. NOUMENA delivered exactly that: a comprehensive solution that handles the entire stablecoin lifecycle, from onboarding authorized participants to managing issuance, redemption, and swap processes, all while maintaining complete regulatory compliance and audit trails.",
    scope: [
      "Streamlined onboarding of Authorized Participants with multi-eye approval workflows and flexible payment route configuration",
      "End-to-end stablecoin lifecycle management: issuance, redemption, and swap processes with built-in compliance checks at every step",
      "Centralized operational control: manage accounts, wallets, and gas tanks across multiple banks and blockchain networks from a single platform",
      "Enterprise-grade break-glass capabilities: instant operational controls at wallet, smart contract, or participant level when needed",
      "Granular access control: 75 distinct user rights organized into 8 role-based groups, ensuring users access only the data they need",
    ],
    whyNPL: "Regulatory requirements evolved constantly during development. NPL's flexibility allowed AllUnity to adapt to these changes seamlessly without disrupting business operations or compromising security. By leveraging NPL's state and event handling capabilities, AllUnity integrated all external systems while maintaining complete state and process integrity. The result: a platform that is both compliant and agile.",
  },
  {
    slug: "bricksdock-tokenization",
    title: "Bricksdock Real Estate Tokenization",
    description: "Transforming real estate investment through institutional-grade tokenization. Bricksdock's platform brings security, compliance, and scalability to real estate assets, setting a new industry standard.",
    category: "RWA Tokenization",
    highlights: [
      "Institutional-grade investment platform",
      "Complete crypto securities lifecycle",
      "Future-proof, scalable architecture",
      "Bank-level security and compliance",
    ],
    fullDescription: "Bricksdock recognized that real estate tokenization needed a new approach, one that could meet institutional investor expectations while navigating complex regulatory requirements. By building on NOUMENA's platform, Bricksdock created a solution that does more than tokenize assets. It reimagines how real estate investments are structured, managed, and distributed. Every transaction is secure, compliant, and auditable from day one, giving investors the confidence they need in this emerging asset class.",
    scope: [
      "Complete investment offering workflow: create, review, subscribe, and distribute crypto securities for primary issuance",
      "End-to-end subscription management: from initial order through fulfillment, with full lifecycle tracking",
      "Streamlined partner ecosystem: onboard partners, create investor profiles, and manage whitelisting processes seamlessly",
      "Intelligent notification system: rights-based and process-driven alerts keep all stakeholders informed at the right time",
      "Role-based access control: granular permissions ensure partners and investors see only the data they are authorized to access",
    ],
    whyNPL: "Real estate tokenization requires managing complex state across multiple systems: blockchain networks, crypto registrars like Nyala, and traditional financial infrastructure. NPL excels as a state keeper, maintaining consistency across all these integrations. What makes it powerful is how it models complex business logic and state transitions in clear, understandable protocols. For Bricksdock, this meant faster development, fewer bugs, and a platform that their team could easily maintain and extend.",
  },
  {
    slug: "ckw-energy",
    title: "CKW Energy Business Platform",
    description: "A complete digital transformation of energy management. CKW's platform combines digital twin technology, smart analytics, and integrated billing to revolutionize how energy and water costs are managed and allocated.",
    category: "Enterprise Backend",
    highlights: [
      "Rapid MVP to production deployment",
      "Critical first-mover market advantage",
      "Seamless SAP and IoT integration",
      "Real-time consumption analytics",
    ],
    fullDescription: "When CKW set out to modernize energy and water cost allocation (ZEV and VEWA), speed to market was critical. NOUMENA's platform enabled CKW to move from concept to production faster than traditional development approaches would allow, securing a crucial first-mover advantage. But speed was not the only benefit: the platform's robust architecture ensures that complex energy calculations, tenant billing, and regulatory compliance all work together seamlessly, even as requirements evolve.",
    scope: [
      "Comprehensive energy management platform: end-to-end solution for ZEV and VEWA (consumption-based energy and water cost allocation)",
      "Digital twin infrastructure: complete digital representation of physical topologies, from entire areas down to individual meters, buildings, floors, and rental units",
      "Advanced consumption analytics: granular insights from individual and aggregated smart meter data, enabling behavioral optimization and energy efficiency",
      "Integrated billing engine: automated service and tenant billing with support for custom energy pricing models and complex allocation rules",
      "Intelligent price calculator: empowers tenants to determine fair energy prices by factoring in local DSO tariffs and regulatory requirements",
      "Enterprise system integration: seamless connectivity with SAP IS-U S/4HANA Utilities and IoT data platforms",
    ],
    whyNPL: "Energy management requires orchestrating data flows between SAP systems, IoT platforms, billing engines, and regulatory databases, all while maintaining perfect state consistency and data access control. NPL's state and event handling capabilities made this complex integration straightforward. CKW could connect all external systems with confidence, knowing that state integrity and process accuracy were guaranteed, and that data access was precisely controlled at every level.",
  },
  {
    slug: "swiss-stablecoin",
    title: "Swiss Stablecoin",
    description: "Building the future of Swiss digital currency. Swiss Stablecoin chose NOUMENA to power their stablecoin infrastructure, creating a robust platform that seamlessly orchestrates complex blockchain operations while maintaining the highest security and compliance standards.",
    category: "Regulated Stablecoin",
    highlights: [
      "Technology platform for the Swiss digital currency",
      "Advanced blockchain orchestration",
      "Enterprise-grade security infrastructure",
      "Scalable layer-2 architecture",
    ],
    fullDescription: "Swiss Stablecoin needed a technology partner that could deliver more than a stablecoin. They needed a foundational platform that could grow with their vision. NOUMENA's advanced protocol technology became the core of their solution, providing a robust, secure, and compliant foundation that exceeded expectations. The platform seamlessly orchestrates complex interactions between coin issuer, financial institutions, and blockchain networks, all while maintaining the strictest security and compliance standards.",
    scope: [
      "Unified backend and WebApp: orchestrates complete user journeys and blockchain transactions for core stablecoin operations (minting and burning) between coin issuers and financial institutions",
      "Built-in AML and compliance: automated management of on-chain allow-lists and transaction limits, ensuring regulatory compliance at every step",
      "Scalable blockchain architecture: manages layer-2 solutions with asset bridging from layer-1 Ethereum, delivering the scalability needed for real-world stablecoin adoption",
      "Enterprise security infrastructure: advanced key governance and key management, including integration with Hardware Security Modules (HSM) for maximum protection",
      "Financial system integration: seamless connectivity with payment and treasury systems for comprehensive stablecoin collateral management",
    ],
    whyNPL: "Swiss Stablecoin needed a platform that could serve as the true foundation for their digital currency vision, not a temporary solution. NOUMENA's technology proved to be exactly that: a robust, scalable foundation built on the NOUMENA technology. The platform's ability to handle complex state management, ensure process integrity, and maintain security across multiple blockchain layers made it the clear choice for a mission-critical financial infrastructure.",
  },
];

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/resources"
          className="text-noumena-accent-1 hover:underline mb-8 inline-block"
        >
          ← Back to Resources
        </Link>

        <div className="mb-6">
          <span className="inline-block bg-noumena-accent-1 text-white text-sm font-semibold px-4 py-2 rounded-full">
            {caseStudy.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {caseStudy.title}
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          {caseStudy.description}
        </p>

        {caseStudy.fullDescription && (
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {caseStudy.fullDescription}
            </p>
          </div>
        )}

        <div className="bg-noumena-bg-3 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Highlights</h2>
          <ul className="space-y-3">
            {caseStudy.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start">
                <svg
                  className="w-6 h-6 text-noumena-accent-3 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {caseStudy.scope && caseStudy.scope.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Scope</h2>
            <ul className="space-y-3">
              {caseStudy.scope.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-noumena-accent-1 mr-3 flex-shrink-0 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {caseStudy.whyNPL && (
          <div className="bg-gradient-to-r from-blue-50 to-noumena-bg-3 border-l-4 border-noumena-accent-1 rounded-lg p-6 mb-8">
            <div className="flex items-start mb-3">
              <svg className="w-6 h-6 text-noumena-accent-1 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h2 className="text-2xl font-semibold text-gray-900">Why NPL was the Right Choice</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.whyNPL}</p>
          </div>
        )}

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interested in Learning More?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to discuss how NOUMENA can help with your project.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
