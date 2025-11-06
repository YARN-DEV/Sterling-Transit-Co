import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    moveType: 'local',
    origin: '',
    destination: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the data - you can integrate with your backend later
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll contact you within 24 hours.');
  };

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
            href="/"
            className="px-5 py-2.5 text-base font-medium rounded-lg transition-all duration-200 hover:opacity-90"
            style={{ 
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 'none'
            }}
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12">
        <div className="w-full max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#000000' }}>
            Get Your Free Quote
          </h1>
          <p className="text-xl md:text-2xl" style={{ color: '#6b7280' }}>
            Ready to move? Fill out the form below and we'll get back to you with a customized quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-16">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                    Preferred Move Date
                  </label>
                  <input
                    type="date"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Move Details */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Type of Move *
                </label>
                <select
                  name="moveType"
                  required
                  value={formData.moveType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="local">Local Move (within 50 miles)</option>
                  <option value="long-distance">Long Distance Move (50+ miles)</option>
                  <option value="commercial">Commercial/Office Move</option>
                  <option value="specialty">Specialty Items (Piano, Art, etc.)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                    Moving From *
                  </label>
                  <input
                    type="text"
                    name="origin"
                    required
                    value={formData.origin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="City, State or full address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                    Moving To *
                  </label>
                  <input
                    type="text"
                    name="destination"
                    required
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="City, State or full address"
                  />
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Additional Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your move - number of rooms, special items, access challenges, etc."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:opacity-90 shadow-lg"
                  style={{ 
                    backgroundColor: '#078049',
                    color: '#ffffff',
                    border: 'none'
                  }}
                >
                  Get My Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16" style={{ backgroundColor: '#000000' }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Need to Talk Right Away?
            </h2>
            <p className="text-xl" style={{ color: '#d1d5db' }}>
              Call us now for immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lagos Office */}
            <div className="text-center p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto" style={{ color: '#078049' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#ffffff' }}>Lagos Office</h3>
              <p style={{ color: '#d1d5db' }}>15 Victoria Island Road</p>
              <p style={{ color: '#d1d5db' }}>Lagos, Nigeria</p>
              <a href="tel:+2348001234567" className="text-lg font-semibold mt-2 block" style={{ color: '#078049' }}>
                +234 (0) 800 STERLING
              </a>
            </div>

            {/* Abuja Office */}
            <div className="text-center p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto" style={{ color: '#078049' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#ffffff' }}>Abuja Office</h3>
              <p style={{ color: '#d1d5db' }}>Central Business District</p>
              <p style={{ color: '#d1d5db' }}>Abuja, Nigeria</p>
              <a href="tel:+2349012345678" className="text-lg font-semibold mt-2 block" style={{ color: '#078049' }}>
                +234 (0) 901 STERLING
              </a>
            </div>

            {/* Port Harcourt Office */}
            <div className="text-center p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto" style={{ color: '#078049' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#ffffff' }}>Port Harcourt Office</h3>
              <p style={{ color: '#d1d5db' }}>GRA Phase 2</p>
              <p style={{ color: '#d1d5db' }}>Port Harcourt, Nigeria</p>
              <a href="tel:+2347012345678" className="text-lg font-semibold mt-2 block" style={{ color: '#078049' }}>
                +234 (0) 701 STERLING
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}