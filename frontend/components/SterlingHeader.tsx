import React from 'react';

/**
 * SterlingHeader
 * React + Tailwind component that matches the mockup exactly:
 * - Full-width green header (#078049)
 * - Top navigation bar
 * - Large standalone tagline line beneath the nav
 */
export default function SterlingHeader() {
  return (
    <header className="w-full bg-[#078049] text-white sticky top-0 z-50 shadow-sm">
      {/* NAVBAR */}
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 h-16 md:h-20">
        {/* Left: Brand */}
  <div className="flex min-w-0 items-center gap-3">
          {/* Logo - place Sterling logo inside white tile for best contrast */}
          <div className="grid h-12 w-12 md:h-14 md:w-14 place-items-center rounded-lg bg-white shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              role="img"
              aria-labelledby="stcLogoTitle stcLogoDesc"
              className="h-8 w-8 md:h-9 md:w-9 text-[#078049]"
              fill="none"
            >
              <title id="stcLogoTitle">Sterling Transit Co logo</title>
              <desc id="stcLogoDesc">Rounded square containing an S-shaped road with center lane markings</desc>
              <rect x="2.5" y="2.5" width="59" height="59" rx="12" ry="12" stroke="currentColor" strokeWidth="5"></rect>
              <path d="M52 16c-9 0-12 8-20 8s-11-8-20-8" stroke="currentColor" strokeWidth="6" strokeLinecap="round"></path>
              <path d="M12 48c9 0 12-8 20-8s11 8 20 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round"></path>
              <path d="M52 16c-9 0-12 8-20 8s-11-8-20-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" opacity="0.9"></path>
              <path d="M12 48c9 0 12-8 20-8s11 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" opacity="0.9"></path>
            </svg>
          </div>
        </div>

        {/* Center: links (hidden on small) */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          <button className="inline-flex items-center gap-1 text-sm md:text-base font-medium hover:opacity-90">
            <span>Services</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <a href="#about" className="text-sm md:text-base font-medium hover:opacity-90">About</a>
          <a href="#blog" className="text-sm md:text-base font-medium hover:opacity-90">Blog</a>
          <button className="inline-flex items-center gap-1 text-sm md:text-base font-medium hover:opacity-90">
            <span>Help</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Right: Book + mobile menu */}
        <div className="flex items-center gap-4">
          <a
            href="#book"
            className="rounded-md bg-white px-6 py-2.5 md:px-7 md:py-3 text-sm md:text-base font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-100"
          >
            Book
          </a>
          <button className="md:hidden" aria-label="Open menu">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* BIG TAGLINE exactly like the mockup */}
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6">
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Move anything, anywhere—easy and fast
        </h1>
      </div>
    </header>
  );
}
