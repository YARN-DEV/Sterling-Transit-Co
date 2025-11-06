import React from 'react';
import Link from 'next/link';

export default function Terms() {
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
            Terms of Service
          </h1>
          <p className="text-xl" style={{ color: '#6b7280' }}>
            Last updated: November 6, 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-16">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                1. Agreement to Terms
              </h2>
              <p className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                By using Sterling Transit Co's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                2. Service Description
              </h2>
              <p className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                Sterling Transit Co provides professional moving and relocation services including but not limited to residential moves, commercial relocations, packing services, and storage solutions within Nigeria.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                3. Booking and Payment Terms
              </h2>
              <ul className="mb-6 pl-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                <li className="mb-2">• All bookings require a deposit to secure your moving date</li>
                <li className="mb-2">• Final payment is due upon completion of services</li>
                <li className="mb-2">• We accept cash, bank transfers, and card payments</li>
                <li className="mb-2">• Cancellations must be made at least 48 hours in advance</li>
                <li className="mb-2">• Additional charges may apply for changes made within 24 hours of your move</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                4. Customer Responsibilities
              </h2>
              <ul className="mb-6 pl-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                <li className="mb-2">• Provide accurate information about items to be moved</li>
                <li className="mb-2">• Ensure safe access to both pickup and delivery locations</li>
                <li className="mb-2">• Be present or have an authorized representative during the move</li>
                <li className="mb-2">• Declare valuable or fragile items that require special handling</li>
                <li className="mb-2">• Remove or secure hazardous materials before our arrival</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                5. Liability and Insurance
              </h2>
              <p className="mb-4" style={{ color: '#374151', lineHeight: '1.6' }}>
                Sterling Transit Co carries comprehensive liability insurance to protect your belongings during the moving process. Our liability includes:
              </p>
              <ul className="mb-6 pl-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                <li className="mb-2">• Full replacement value for damaged items when packed by our team</li>
                <li className="mb-2">• Limited liability for customer-packed items</li>
                <li className="mb-2">• No liability for items of extraordinary value unless declared and insured separately</li>
                <li className="mb-2">• Claims must be reported within 48 hours of delivery</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                6. Force Majeure
              </h2>
              <p className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                Sterling Transit Co shall not be liable for delays or failures in performance resulting from acts beyond our reasonable control, including but not limited to natural disasters, government actions, strikes, or traffic conditions.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                7. Dispute Resolution
              </h2>
              <p className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                Any disputes arising from our services shall be resolved through good faith negotiation. If resolution cannot be reached, disputes will be handled according to Nigerian law and jurisdiction.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                8. Changes to Terms
              </h2>
              <p className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                Sterling Transit Co reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
              </p>

              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                9. Contact Information
              </h2>
              <p className="mb-2" style={{ color: '#374151', lineHeight: '1.6' }}>
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mb-6" style={{ color: '#374151', lineHeight: '1.6' }}>
                <p><strong>Email:</strong> legal@sterlingtransit.ng</p>
                <p><strong>Phone:</strong> +234 (0) 800 STERLING</p>
                <p><strong>Address:</strong> 15 Victoria Island Road, Lagos, Nigeria</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16" style={{ backgroundColor: '#078049' }}>
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready to Get Started?
          </h2>
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