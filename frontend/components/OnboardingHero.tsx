import React from 'react';

export default function OnboardingHero() {
  return (
    <section className="bg-[#F3FAF6]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14">
        {/* Headline */}
        <div className="max-w-3xl">
          {/* Onboarding step pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#078049] inline-block"></span>
            Step 1 of 3: Tell us what you’re moving
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Move anything, anywhere—easy and fast
          </h1>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Book trusted drivers, get instant quotes, and track your items in real time. No calls, no hassle—just tap and go.
          </p>
          {/* Linear progress bar */}
          <div className="mt-4 h-1.5 w-40 overflow-hidden rounded-full bg-white/60">
            <div className="h-full w-1/3 bg-[#078049]"></div>
          </div>
        </div>

        {/* Onboarding card */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Stepper */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-gray-800">Getting started</p>
            <ol className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#078049] text-xs font-semibold text-white">1</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Tell us what you’re moving</p>
                  <p className="text-sm text-gray-500">Boxes, furniture, appliances—anything.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#078049] text-xs font-semibold text-white">2</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Pick pickup and drop-off</p>
                  <p className="text-sm text-gray-500">We’ll show the best price and ETA.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#078049] text-xs font-semibold text-white">3</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Book and track live</p>
                  <p className="text-sm text-gray-500">Secure payment. Live driver updates.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Quote form */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:col-span-2">
            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-800">What are you moving?</label>
                <input
                  type="text"
                  placeholder="e.g., 4 boxes and a couch"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#078049] focus:outline-none focus:ring-2 focus:ring-[#078049]/20"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800">Pickup</label>
                <input
                  type="text"
                  placeholder="Address or pin"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#078049] focus:outline-none focus:ring-2 focus:ring-[#078049]/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800">Drop-off</label>
                <input
                  type="text"
                  placeholder="Address or pin"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#078049] focus:outline-none focus:ring-2 focus:ring-[#078049]/20"
                />
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  className="rounded-md bg-[#078049] px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#066b3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#078049]"
                >
                  Get instant quote
                </button>
                <button
                  type="button"
                  className="rounded-md bg-white px-5 py-2 text-sm font-medium text-gray-800 ring-1 ring-inset ring-gray-300 shadow-sm transition-colors hover:bg-gray-50"
                >
                  Talk to sales
                </button>
                <p className="text-xs text-gray-500">No credit card required</p>
              </div>
            </form>
            {/* Trust indicators */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-500">
              <div className="inline-flex items-center gap-2">
                <span className="h-4 w-4 rounded-full bg-[#078049]/10 grid place-items-center">
                  <span className="h-2 w-2 rounded-full bg-[#078049]"></span>
                </span>
                4.9/5 average rating
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-4 w-4 rounded-sm bg-[#078049]/10"></span>
                Secure payments
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-4 w-4 rounded-sm bg-[#078049]/10"></span>
                Live tracking
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
