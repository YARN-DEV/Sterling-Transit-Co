import React from 'react';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Navbar */}
      <nav className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 border-b-2" style={{ backgroundColor: '#000000', borderColor: '#374151' }}>
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="80" height="80" rx="8" fill="#078049" stroke="#ffffff" strokeWidth="3"/>
            </svg>
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wide" style={{ color: '#ffffff' }}>
              Sterling Transit Co
            </span>
          </Link>
          <Link 
            href="/#contact"
            className="px-5 py-2.5 text-base font-medium rounded-lg transition-all duration-200 hover:opacity-90"
            style={{ 
              backgroundColor: '#078049',
              color: '#ffffff',
              border: 'none'
            }}
          >
            Book Now
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h1 className="font-bold mb-6" style={{ color: '#ffffff', fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: '1.1' }}>
            Our Services
          </h1>
          <p className="text-xl md:text-2xl" style={{ color: '#d1d5db', maxWidth: '800px', margin: '0 auto' }}>
            Comprehensive moving solutions designed to make your relocation effortless. From local moves to long-distance hauls, we've got you covered.
          </p>
        </div>
      </section>
    </div>
  );
}
