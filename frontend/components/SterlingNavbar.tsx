import React from 'react';

export default function SterlingNavbar() {
  return (
    <nav className="w-full bg-[#078049] text-white h-16">
      <div className="mx-auto flex h-full max-w-7xl flex-nowrap items-center px-4 sm:px-6">
        {/* Left: Brand (1/3) */}
        <div className="basis-1/3 min-w-0 flex items-center gap-3">
          {/* Logo - white rounded square with custom "S" monogram */}
          <div className="grid h-9 w-9 place-items-center rounded-md bg-white">
            <svg
              viewBox="0 0 24 24"
              aria-label="Sterling Transit Co logo"
              role="img"
              className="h-5 w-5 text-[#078049]"
              fill="currentColor"
            >
              {/* Stylized S (monoline) */}
              <path d="M17.5 6.75c0-1.52-1.23-2.75-2.75-2.75h-5.5A2.75 2.75 0 006.5 6.75c0 1.19.77 2.22 1.9 2.58l5.36 1.71c.48.15.81.59.81 1.1 0 .64-.52 1.16-1.16 1.16H8.9c-1.52 0-2.75 1.23-2.75 2.75S7.38 18.9 8.9 18.9h5.85a2.75 2.75 0 002.75-2.75c0-1.19-.77-2.22-1.9-2.58l-5.36-1.71a1.25 1.25 0 01-.81-1.18c0-.64.52-1.16 1.16-1.16h4.16c1.52 0 2.75-1.23 2.75-2.75z" />
              {/* Small sparkle to nod to "Sterling" */}
              <path d="M19 4.2l.45 1.1 1.1.45-1.1.45L19 7.3l-.45-1.1-1.1-.45 1.1-.45L19 4.2z" />
            </svg>
          </div>

          {/* Brand name + tagline (truncate on very small screens) */}
          <div className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-sm font-semibold tracking-wide uppercase leading-none">Sterling Transit Co</span>
            <span className="truncate text-xs font-medium sm:text-sm leading-none">Move anything, anywhere—easy and fast</span>
          </div>
        </div>

        {/* Middle: Nav links (1/3) - now visible at all sizes */}
        <div className="basis-1/3 flex items-center justify-center gap-6">
          <button className="group inline-flex items-center gap-1 text-sm font-medium outline-none transition-opacity hover:opacity-90">
            <span>Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <a className="text-sm font-medium transition-opacity hover:opacity-90" href="#about">About</a>
          <a className="text-sm font-medium transition-opacity hover:opacity-90" href="#blog">Blog</a>
          <button className="group inline-flex items-center gap-1 text-sm font-medium outline-none transition-opacity hover:opacity-90">
            <span>Help</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Right: CTA (1/3) */}
        <div className="basis-1/3 flex items-center justify-end gap-2">
          <a
            href="#book"
            className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book
          </a>

          {/* Mobile menu icon (visual only) */}
          <button
            aria-label="Open menu"
            className="md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
