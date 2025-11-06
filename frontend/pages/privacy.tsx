import React from 'react';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f3f4f6' }}>
      {/* Navbar */}
      <nav className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 border-b-2" style={{ backgroundColor: '#078049', borderColor: '#374151' }}>
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="80" height="80" rx="8" fill="#ffffff" stroke="#ffffff" strokeWidth="3"/>
            </svg>
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wide" style={{ color: '#ffffff' }}>
              Sterling Transit Co
            </span>
          </Link>
          <Link 
            href="/contact"
            className="px-5 py-2.5 text-base font-medium rounded-lg transition-all duration-200 hover:opacity-90"
            style={{ 
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 'none'
            }}
          >
            Get Quote
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Privacy Policy
          </h1>
          <p className="text-xl" style={{ color: '#6b7280' }}>
            Last updated: November 6, 2025
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-16">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                1. Information We Collect
              </h2>
              <p className="mb-4" style={{ color: '#374151', lineHeight: '1.6' }}>
                Sterling Transit Co collects information to provide better moving services to our customers:
              </p>
              <ul className="mb-6 pl-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                <li className="mb-2">• <strong>Personal Information:</strong> Name, email address, phone number, and address</li>
                <li className="mb-2">• <strong>Move Details:</strong> Pickup and destination locations, move date, and inventory information</li>
                <li className="mb-2">• <strong>Payment Information:</strong> Billing address and payment method details (processed securely through third-party providers)</li>
                <li className="mb-2">• <strong>Communication Records:</strong> Call logs, emails, and chat conversations for customer service purposes</li>
                <li className="mb-2">• <strong>Website Usage:</strong> IP address, browser type, pages visited, and time spent on our website</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                2. How We Use Your Information
              </h2>
              <p className="mb-4" style={{ color: '#374151', lineHeight: '1.6' }}>
                We use the collected information for the following purposes:
              </p>
              <ul className="mb-6 pl-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                <li className="mb-2">• Provide and manage your moving services</li>
                <li className="mb-2">• Process payments and send invoices</li>
                <li className="mb-2">• Communicate about your move and service updates</li>
                <li className="mb-2">• Improve our services and customer experience</li>
                <li className="mb-2">• Send promotional materials (with your consent)</li>
                <li className="mb-2">• Comply with legal obligations and resolve disputes</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                3. Information Sharing and Disclosure
              </h2>
              <p className="mb-4" style={{ color: '#374151', lineHeight: '1.6' }}>
                Sterling Transit Co does not sell, trade, or rent your personal information. We may share information in these circumstances:
              </p>
              <ul className="mb-6 pl-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                <li className="mb-2">• <strong>Service Providers:</strong> Third-party companies that help us provide services (payment processors, insurance companies)</li>
                <li className="mb-2">• <strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li className="mb-2">• <strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our customers</li>
                <li className="mb-2">• <strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of assets</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                4. Data Security
              </h2>
              <p className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes secure servers, encryption, and access controls. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                5. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4" style={{ color: '#374151', lineHeight: '1.6' }}>
                Our website uses cookies and similar technologies to:
              </p>
              <ul className="mb-6 pl-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                <li className="mb-2">• Remember your preferences and settings</li>
                <li className="mb-2">• Analyze website usage and improve functionality</li>
                <li className="mb-2">• Provide personalized content and advertisements</li>
                <li className="mb-2">• Ensure website security and proper functioning</li>
              </ul>
              <p className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                You can control cookies through your browser settings, but some website features may not function properly if cookies are disabled.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                6. Your Privacy Rights
              </h2>
              <p className="mb-4" style={{ color: '#374151', lineHeight: '1.6' }}>
                You have the right to:
              </p>
              <ul className="mb-6 pl-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                <li className="mb-2">• Access and receive a copy of your personal information</li>
                <li className="mb-2">• Correct inaccurate or incomplete information</li>
                <li className="mb-2">• Delete your personal information (subject to legal obligations)</li>
                <li className="mb-2">• Restrict or object to certain processing of your information</li>
                <li className="mb-2">• Data portability (receive your data in a structured format)</li>
                <li className="mb-2">• Withdraw consent for marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                7. Data Retention
              </h2>
              <p className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                We retain your personal information for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our agreements. Typically, customer information is retained for 7 years after the completion of services for business and legal purposes.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                8. Children's Privacy
              </h2>
              <p className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware of such information, we will delete it promptly.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                9. Changes to This Privacy Policy
              </h2>
              <p className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                Sterling Transit Co may update this Privacy Policy periodically. We will notify you of significant changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                10. Contact Us
              </h2>
              <p className="mb-2" style={{ color: '#374151', lineHeight: '1.6' }}>
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                <p><strong>Privacy Officer:</strong> privacy@sterlingtransit.ng</p>
                <p><strong>Phone:</strong> +234 (0) 800 STERLING</p>
                <p><strong>Address:</strong> 15 Victoria Island Road, Lagos, Nigeria</p>
                <p><strong>Data Protection Officer:</strong> dpo@sterlingtransit.ng</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16" style={{ backgroundColor: '#078049' }}>
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Your Privacy Matters to Us
          </h2>
          <p className="text-lg mb-8" style={{ color: '#ffffff', opacity: '0.9' }}>
            We're committed to protecting your personal information and being transparent about our practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ 
                backgroundColor: '#ffffff',
                color: '#078049',
                border: 'none'
              }}
            >
              Get Free Quote
            </Link>
            <Link 
              href="/"
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all duration-200 hover:bg-white hover:text-green-600"
              style={{ 
                backgroundColor: 'transparent',
                color: '#ffffff',
                borderColor: '#ffffff'
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}