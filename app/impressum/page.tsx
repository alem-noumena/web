import Link from "next/link";

export default function Impressum() {
  return (
    <div className="bg-white">
      <section className="py-12 bg-noumena-bg-3 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Impressum
          </h1>
        </div>
      </section>

      <article className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">COMPANY DETAILS</h2>
          <p className="text-gray-700 leading-relaxed mb-4 font-medium">
            NOUMENA DIGITAL AG<br />
            Bahnhofstrasse 22<br />
            CH-6300 Zug
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Telephone: +41 (0) 41 541 08 42<br />
            Email: info@noumenadigital.com<br />
            Website: noumenadigital.com
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">COMMERCIAL REGISTER</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Commercial Register Office of the Canton of Zug, CHE-289.789.695
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">VALUE-ADDED TAX NUMBER / VAT IDENTIFICATION NUMBER</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            VAT 289.789.695
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">COPYRIGHTS</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            © {new Date().getFullYear()}, NOUMENA DIGITAL AG<br />
            All rights reserved.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The content and structure of the NOUMENA website are protected by copyright. Information or data (text, image, graphic files, etc.) from the web pages may not be used or reproduced, even in extracts, without the prior written consent of NOUMENA.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">DISCLAIMER</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NOUMENA regularly reviews and updates the information on its websites. Despite careful examination of the published contents, no guarantee can be given for the accuracy of the information.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The same applies to all other websites referred to by hyperlink. These links serve only to ensure easy access to the information. NOUMENA does not review or adopt the content of these websites.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pictures: NOUMENA, shutterstock
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Implementation, administration, editorial support NOUMENA DIGITAL AG
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer mediation body.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-noumena-accent-1 font-medium hover:underline">
              ← Back to home
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
