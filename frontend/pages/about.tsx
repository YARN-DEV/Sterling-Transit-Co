import React from 'react';
import Link from 'next/link';

export default function About() {
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

      {/* Hero Section */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#000000' }}>
            About Sterling Transit Co
          </h1>
          <p className="text-xl md:text-2xl mb-12" style={{ color: '#6b7280', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Your trusted partner in making every move seamless, stress-free, and successful.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#000000' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-lg" style={{ color: '#374151' }}>
                <p>
                  Founded in 2015, Sterling Transit Co emerged from a simple belief: moving should be easy, happy, and stress-free. What started as a small local moving company has grown into one of Nigeria's most trusted relocation services.
                </p>
                <p>
                  Our journey began when our founder experienced the frustration of unreliable moving services firsthand. Determined to create a better solution, we built Sterling Transit Co on the pillars of reliability, transparency, and exceptional customer service.
                </p>
                <p>
                  Today, we've successfully completed over 10,000 moves across Nigeria, helping families and businesses transition to their new chapters with confidence and peace of mind.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#078049' }}>10,000+</div>
                  <div className="text-sm" style={{ color: '#6b7280' }}>Successful Moves</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#078049' }}>8+</div>
                  <div className="text-sm" style={{ color: '#6b7280' }}>Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#078049' }}>3</div>
                  <div className="text-sm" style={{ color: '#6b7280' }}>Major Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#078049' }}>98%</div>
                  <div className="text-sm" style={{ color: '#6b7280' }}>Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto" style={{ color: '#078049' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Our Mission</h3>
              <p className="text-lg" style={{ color: '#6b7280' }}>
                To transform the moving experience by providing reliable, professional, and stress-free relocation services that exceed customer expectations.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto" style={{ color: '#078049' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Our Vision</h3>
              <p className="text-lg" style={{ color: '#6b7280' }}>
                To be Nigeria's leading moving and logistics company, known for innovation, reliability, and transforming how people and businesses relocate.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto" style={{ color: '#078049' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Our Values</h3>
              <p className="text-lg" style={{ color: '#6b7280' }}>
                Integrity, reliability, customer-first approach, and continuous improvement drive everything we do at Sterling Transit Co.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16" style={{ backgroundColor: '#000000' }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Why Choose Sterling Transit Co?
            </h2>
            <p className="text-xl" style={{ color: '#d1d5db', maxWidth: '600px', margin: '0 auto' }}>
              We're not just another moving company. Here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto" style={{ color: '#078049' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#ffffff' }}>Fully Insured</h3>
              <p style={{ color: '#d1d5db' }}>Complete protection for your belongings during the entire moving process.</p>
            </div>

            <div className="text-center p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto" style={{ color: '#078049' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#ffffff' }}>Expert Team</h3>
              <p style={{ color: '#d1d5db' }}>Trained professionals who handle your move with care and precision.</p>
            </div>

            <div className="text-center p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto" style={{ color: '#078049' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#ffffff' }}>On-Time Service</h3>
              <p style={{ color: '#d1d5db' }}>Punctual arrivals and efficient moves that respect your schedule.</p>
            </div>

            <div className="text-center p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto" style={{ color: '#078049' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#ffffff' }}>Guaranteed Satisfaction</h3>
              <p style={{ color: '#d1d5db' }}>100% satisfaction guarantee or we'll make it right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16" style={{ backgroundColor: '#078049' }}>
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready to Experience the Sterling Difference?
          </h2>
          <p className="text-xl mb-8" style={{ color: '#ffffff', opacity: '0.9' }}>
            Join thousands of satisfied customers who chose Sterling Transit Co for their moving needs.
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
              href="tel:+2348001234567"
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all duration-200 hover:bg-white hover:text-green-600"
              style={{ 
                backgroundColor: 'transparent',
                color: '#ffffff',
                borderColor: '#ffffff'
              }}
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}