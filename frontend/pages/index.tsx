import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TruckImg from '../assets/images and logo/Sterling Transit in Lagos Streets.png';
import WorkersImg from '../assets/images and logo/workers image.png';
import BoxesImg from '../assets/images and logo/sterling boxes.png';
import DeliveryImg from '../assets/images and logo/sterling delivery.png';
import UnboxingImg from '../assets/images and logo/sterling unboxing.png';
import LocationsImg from '../assets/images and logo/sterling locations.png';

export default function Home() {
  const navTaglineRef = useRef<HTMLDivElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const featuresHeadingRef = useRef<HTMLHeadingElement>(null);
  const feature1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe elements
    if (navTaglineRef.current) observer.observe(navTaglineRef.current);
    if (heroHeadingRef.current) observer.observe(heroHeadingRef.current);
    if (featuresHeadingRef.current) observer.observe(featuresHeadingRef.current);
    if (feature1Ref.current) observer.observe(feature1Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen m-0 p-0 overflow-x-hidden">
    <nav className="w-full bg-[#078049] text-white font-sans relative z-50 overflow-visible h-[var(--nav-h)] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
  <div className="w-full md:max-w-7xl md:mx-auto relative z-50 grid grid-cols-3 items-center h-full flex-nowrap overflow-visible gap-3 sm:gap-6 md:gap-12">
          {/* Logo section */}
          <div className="flex items-center justify-start p-[10px]" style={{ gap: '2rem' }}>
            <span className="inline-flex items-center h-[var(--logo-badge)] w-[var(--logo-badge)] p-3 bg-white/10 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="var(--logo-svg)" height="var(--logo-svg)" role="img" aria-labelledby="stcWordTitle" fill="white" className="text-white">
                <title id="stcWordTitle">STERLING TRANSIT CO</title>
                <g transform="translate(0,0)">
                  <rect x="2.5" y="2.5" width="59" height="59" rx="12" ry="12" stroke="currentColor" strokeWidth="5"/>
                  <path d="M52 16c-9 0-12 8-20 8s-11-8-20-8" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                  <path d="M12 48c9 0 12-8 20-8s11 8 20 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                  <path d="M52 16c-9 0-12 8-20 8s-11-8-20-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" opacity="0.9"/>
                  <path d="M12 48c9 0 12-8 20-8s11 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" opacity="0.9"/>
                </g>
              </svg>
            </span>
            <span className="text-2xl font-bold tracking-wide text-white">STERLING TRANSIT CO</span>
          </div>
          {/* Tagline replacing Services, Blog, Help */}
          <div ref={navTaglineRef} className="flex items-center justify-center p-[5px] text-base md:text-lg lg:text-xl">
            <style jsx>{`
              @keyframes zoomOut {
                from {
                  opacity: 0;
                  transform: scale(2.5);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              .tagline-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.2rem;
              }

              .tagline-line {
                display: block;
                letter-spacing: 0.08em;
                font-weight: 500;
                opacity: 0;
                transform: scale(2.5);
              }

              .animate-in-view .line-1 {
                animation: zoomOut 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
              }

              .animate-in-view .line-2 {
                animation: zoomOut 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
              }

              .animate-in-view .line-3 {
                animation: zoomOut 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards;
              }

              .tagline-line:hover {
                transform: scale(1.05);
                text-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
              }
            `}</style>
            <span className="tagline-container text-white text-center animate-in-view">
              <span className="tagline-line line-1">Move easy.</span>
              <span className="tagline-line line-2">Move happy.</span>
              <span className="tagline-line line-3">Move now.</span>
            </span>
          </div>
          {/* Right section: Book button */}
          <div className="flex items-center justify-end p-[5px] text-lg md:text-xl">
            <Link 
              href="/contact"
              className="px-10 py-0 min-w-[var(--btn-min-w)] text-lg font-semibold bg-gradient-to-br from-white via-gray-50 to-gray-200 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:from-gray-100 hover:to-white focus:outline-none focus:ring-2 focus:ring-[#078049]/40"
              style={{ height: 'var(--btn-h)', borderRadius: 'var(--btn-radius)', textAlign: 'center', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span className="text-white">Book</span>
            </Link>
          </div>
        </div>

  </nav>
  {/* Divider under navbar */}
  <div className="w-full h-px bg-white/40" />

      {/* Hero Section */}
  <section className="w-full h-auto md:h-[var(--hero-h)] bg-[#078049] gap-4 sm:gap-6 md:gap-12 lg:gap-16 xl:gap-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12" style={{ display: 'flex', flexDirection: 'column' }}>
    <style jsx>{`
      @media (min-width: 768px) {
        section {
          flex-direction: row !important;
        }
        .truck-image-wrapper {
          margin-top: 1.75rem !important;
          margin-left: 1rem !important;
          margin-bottom: 1rem !important;
        }
        .image-container {
          margin-right: 3rem;
        }
      }
      @media (min-width: 1024px) {
        .truck-image-wrapper {
          margin-top: 2.25rem !important;
          margin-left: 1.5rem !important;
          margin-bottom: 1.5rem !important;
        }
        .image-container {
          margin-right: 4rem;
        }
      }
      @media (min-width: 1280px) {
        .truck-image-wrapper {
          margin-top: 2.75rem !important;
          margin-left: 2rem !important;
          margin-bottom: 2rem !important;
        }
        .image-container {
          margin-right: 5rem;
        }
      }

      @keyframes heroZoomOut {
        from {
          opacity: 0;
          transform: scale(2.5);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      .hero-line {
        opacity: 0;
        transform: scale(2.5);
      }

      .animate-in-view .hero-line-1 {
        animation: heroZoomOut 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
      }

      .animate-in-view .hero-line-2 {
        animation: heroZoomOut 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards;
      }

      .animate-in-view .hero-line-3 {
        animation: heroZoomOut 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s forwards;
      }
    `}</style>
  <div className="image-container flex-1 flex flex-col h-auto md:h-full justify-start">
    <div
      className="truck-image-wrapper inline-block overflow-hidden shadow-lg border border-white/20 bg-[#078049] ml-4 mb-4 mt-4 sm:ml-6 sm:mb-6 sm:mt-6 max-h-[400px] md:max-h-[calc(var(--hero-h)-48px)]"
      style={{
        borderRadius: 'var(--img-radius)'
      }}
    >
      <Image
        src={TruckImg}
        alt="Sterling Transit in Lagos Streets"
        width={(TruckImg as any).width}
        height={(TruckImg as any).height}
        className="block h-full w-full object-cover"
        style={{ borderRadius: 'inherit' }}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </div>
  </div>
  <div className="flex-1 flex items-start justify-start h-auto md:h-[var(--hero-h)]">
  <div className="w-full h-full box-border flex flex-col justify-start pb-8 text-white overflow-visible" style={{ color: '#ffffff' }}>
            <h1
              ref={heroHeadingRef}
              className="w-full flex flex-col font-sans font-bold leading-[0.9] tracking-tight text-[3.5rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[9rem] xl:text-[10.5rem] text-left drop-shadow-md md:drop-shadow-lg opacity-100 mix-blend-normal !text-white space-y-0 md:space-y-0.5 mb-0.5 md:mb-1 animate-in-view"
              style={{ color: '#ffffff' }}
            >
              <span className="hero-line hero-line-1 flex flex-col gap-0 md:gap-1">
                <span className="!text-white">Move</span>
                <span className="!text-white">easy.</span>
              </span>
              <span className="hero-line hero-line-2 flex flex-col gap-0 md:gap-1">
                <span className="!text-white">Move</span>
                <span className="!text-white">happy.</span>
              </span>
              <span className="hero-line hero-line-3 flex flex-col gap-0 md:gap-1">
                <span className="!text-white">Move</span>
                <span className="!text-white">now.</span>
              </span>
            </h1>
            {/* Supporting paragraph below heading (three lines) */}
            <p className="mt-1 sm:mt-1 md:mt-1 text-white/85 font-normal text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              <span className="block">From single sofas to full homes,</span>
              <span className="block">we handle every move with speed, care, and zero hassle—</span>
              <span className="block">across the street or across state lines.</span>
            </p>
            {/* Quick Contact */}
            <div className="mt-3 mb-1 flex items-center gap-4 text-white/90">
              <a href="mailto:info@sterlingtransit.ng" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@sterlingtransit.ng
              </a>
              <span className="text-white/60">•</span>
              <a href="tel:+2348001234567" className="text-sm hover:text-white transition-colors">
                +234 (0) 800 STERLING
              </a>
            </div>
            <div className="mt-2 sm:mt-2 md:mt-2 flex flex-nowrap items-center gap-0">
              <Link
                href="/contact"
                className="px-10 py-0 min-w-[var(--btn-min-w)] text-lg font-semibold bg-gradient-to-br from-white via-gray-50 to-gray-200 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:from-gray-100 hover:to-white focus:outline-none focus:ring-2 focus:ring-[#078049]/40"
                style={{ height: 'var(--btn-h)', borderRadius: 'var(--btn-radius)', textAlign: 'center', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '3rem' }}
              >
                <span className="text-white">Quote</span>
              </Link>
              {/* Visible vertical divider to emphasize separation */}
              <span aria-hidden="true" className="block h-[var(--btn-h)] w-px bg-white/80 mx-8 md:mx-12 shrink-0"></span>
              <button
                type="button"
                className="px-10 py-0 min-w-[var(--btn-min-w)] text-lg font-semibold border border-white/80 bg-transparent text-white transition-all duration-200 ease-in-out hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#078049]/40"
                style={{ height: 'var(--btn-h)', borderRadius: 'var(--btn-radius)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span className="text-white">Process</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom spacer to add empty space without moving hero contents */}
      <div className="w-full bg-[#078049]" style={{ height: 'var(--hero-bottom-space)' }} />

      {/* Value Proposition Section / Trust Section - Updated */}
      <section className="w-full h-auto md:h-[calc(var(--hero-h)*2)] flex flex-col">
        {/* Top Half - White Background */}
        <div className="w-full min-h-[500px] md:h-[var(--hero-h)] py-16 md:py-24 flex items-start justify-center border-t-2" style={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div className="w-full max-w-7xl" style={{ paddingLeft: '1.5rem', marginTop: '8rem' }}>
            <h2 
              className="text-[2.5rem] sm:text-[5rem] md:text-[10rem] lg:text-[12rem] xl:text-[6rem] font-bold text-left leading-tight whitespace-nowrap"
              style={{ 
                color: '#111827',
                WebkitTextStroke: '0.8px rgba(17, 24, 39, 0.2)',
                marginBottom: '0'
              }}
            >
              Moving made simple, every time
            </h2>
            <p 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left max-w-5xl leading-relaxed"
              style={{ color: '#4b5563', marginTop: '1rem' }}
            >
              <span className="block mb-3 md:mb-4">Join the businesses who trust us for fast, stress-free moves—whether it's across the street or across the state.</span>
              <span className="block">We handle the heavy lifting so you can focus on what matters.</span>
            </p>
          </div>
        </div>

        {/* Bottom Half - Light Gray Background */}
        <div className="w-full min-h-[500px] md:h-[var(--hero-h)] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12 border-t-2" style={{ backgroundColor: '#e5e7eb', borderColor: '#d1d5db' }}>
          <div className="w-full max-w-7xl mx-auto h-full flex flex-row gap-8 md:gap-12 lg:gap-16">
            {/* Left Section - 50% width with Workers Image */}
            <div className="w-1/2 flex items-center justify-center" style={{ padding: '3rem' }}>
              <div
                className="inline-block overflow-hidden shadow-lg border border-white/20"
                style={{
                  borderRadius: 'var(--img-radius)',
                  backgroundColor: '#e5e7eb',
                  maxWidth: '100%',
                  maxHeight: '600px',
                  width: 'auto',
                  height: 'auto'
                }}
              >
                <Image
                  src={WorkersImg}
                  alt="Sterling Transit Workers"
                  width={(WorkersImg as any).width}
                  height={(WorkersImg as any).height}
                  className="block object-cover"
                  style={{ borderRadius: 'inherit', maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%' }}
                  sizes="50vw"
                />
              </div>
            </div>
            
            {/* Right Section - 50% width, 3 Vertical Parts */}
            <div className="w-1/2 flex flex-col justify-center pl-6 md:pl-8 lg:pl-10" style={{ gap: '0.25rem' }}>
              {/* Top Part - Mail Icon */}
              <div className="flex items-end justify-start rounded-lg pl-6 md:pl-8" style={{ backgroundColor: '#e5e7eb', paddingBottom: '0', height: 'auto', minHeight: '80px' }}>
                <div style={{ color: '#111827' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-label="Mail services">
                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                    <path d="M3 7l9 6 9-6"/>
                  </svg>
                </div>
              </div>
              
              {/* Middle and Bottom Part Combined */}
              <div className="flex flex-col justify-center rounded-lg pl-6 md:pl-8" style={{ backgroundColor: '#e5e7eb', paddingTop: '0', paddingBottom: '1rem', paddingRight: '1rem', height: 'auto' }}>
                <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-4xl" style={{ color: '#111827', marginBottom: '0' }}>Your move, our mission</h3>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify" style={{ color: '#4b5563', marginTop: '1rem' }}>
                  Big or small, we move it all. Fast quotes, smooth service, and a team that treats your stuff like their own. Let's get you moving—no stress, just smiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section - 2 Columns × 3 Rows Grid */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16 border-t-2" style={{ backgroundColor: '#000000', borderColor: '#374151', minHeight: '1200px' }}>
        <style jsx>{`
          @keyframes featureZoomOut {
            from {
              opacity: 0;
              transform: scale(2.2);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .feature-heading-line {
            display: block;
            opacity: 0;
            transform: scale(2.2);
          }

          .animate-in-view .feature-line-1 {
            animation: featureZoomOut 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
          }

          .animate-in-view .feature-line-2 {
            animation: featureZoomOut 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
          }

          .feature-text-line {
            opacity: 0;
            transform: translateY(30px);
          }

          .animate-in-view .text-line-1 {
            animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
          }

          .animate-in-view .text-line-2 {
            animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
          }

          .animate-in-view .text-line-3 {
            animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s forwards;
          }

          .animate-in-view .text-line-4 {
            animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s forwards;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
        <div className="w-full max-w-7xl mx-auto">
          {/* Heading and Subheading */}
          <div ref={featuresHeadingRef} className="text-center" style={{ marginTop: '6rem', marginBottom: '8rem' }}>
            <p className="text-base md:text-lg lg:text-xl mb-6 uppercase tracking-wider" style={{ color: '#9ca3af', letterSpacing: '0.1em' }}>
              Effortless moves, every mile
            </p>
            <h2 className="font-bold leading-tight" style={{ color: '#ffffff', fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: '1.15' }}>
              <span className="feature-heading-line feature-line-1">Move easy. Go</span>
              <span className="feature-heading-line feature-line-2">far. Stress never.</span>
            </h2>
          </div>
          
          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: '0', minHeight: '900px' }}>
            {/* Item 1 */}
            <div ref={feature1Ref} style={{ backgroundColor: '#000000', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <p className="feature-text-line text-line-1 text-sm md:text-base uppercase tracking-wider mb-3" style={{ color: '#9ca3af', letterSpacing: '0.1em' }}>Quick & convenient</p>
                <h3 className="feature-text-line text-line-2 text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-4" style={{ color: '#ffffff' }}>Local moves, no sweat</h3>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#d1d5db' }}>
                  <span className="feature-text-line text-line-3 block">Apartments or offices, we pack, lift, and deliver fast.</span>
                  <span className="feature-text-line text-line-4 block">You relax while we handle the heavy stuff.</span>
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm md:text-base font-medium uppercase tracking-wider hover:gap-3 transition-all duration-200" style={{ color: '#078049', letterSpacing: '0.1em' }}>
                View Service
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            
            {/* Item 2 */}
            <div style={{ backgroundColor: '#000000', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div
                className="inline-block overflow-hidden shadow-lg border border-white/20"
                style={{
                  borderRadius: 'var(--img-radius)',
                  backgroundColor: '#000000',
                  maxWidth: '95%',
                  maxHeight: '280px',
                  width: 'auto',
                  height: 'auto'
                }}
              >
                <Image
                  src={BoxesImg}
                  alt="Sterling Transit Boxes"
                  width={(BoxesImg as any).width}
                  height={(BoxesImg as any).height}
                  className="block object-cover"
                  style={{ borderRadius: 'inherit', width: '100%', height: '100%' }}
                />
              </div>
            </div>
            
            {/* Item 3 */}
            <div style={{ backgroundColor: '#000000', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div
                className="inline-block overflow-hidden shadow-lg border border-white/20"
                style={{
                  borderRadius: 'var(--img-radius)',
                  backgroundColor: '#000000',
                  maxWidth: '95%',
                  maxHeight: '280px',
                  width: 'auto',
                  height: 'auto'
                }}
              >
                <Image
                  src={WorkersImg}
                  alt="Sterling Transit Workers"
                  width={(WorkersImg as any).width}
                  height={(WorkersImg as any).height}
                  className="block object-cover"
                  style={{ borderRadius: 'inherit', width: '100%', height: '100%' }}
                />
              </div>
            </div>
            
            {/* Item 4 */}
            <div style={{ backgroundColor: '#000000', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <p className="text-sm md:text-base uppercase tracking-wider mb-3" style={{ color: '#9ca3af', letterSpacing: '0.1em' }}>Distance? No problem</p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-4" style={{ color: '#ffffff' }}>State-to-state, made simple</h3>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#d1d5db' }}>Moving far? We get your things there safely, on time, and with zero drama.</p>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm md:text-base font-medium uppercase tracking-wider hover:gap-3 transition-all duration-200" style={{ color: '#078049', letterSpacing: '0.1em' }}>
                View Service
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            
            {/* Item 5 */}
            <div style={{ backgroundColor: '#000000', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <p className="text-sm md:text-base uppercase tracking-wider mb-3" style={{ color: '#9ca3af', letterSpacing: '0.1em' }}>Special care</p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-4" style={{ color: '#ffffff' }}>We move the tricky stuff</h3>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#d1d5db' }}>
                  <span className="block">From grand pianos to fine art, our pros use the right gear</span>
                  <span className="block">for your valuables. Smooth, safe, and easy.</span>
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm md:text-base font-medium uppercase tracking-wider hover:gap-3 transition-all duration-200" style={{ color: '#078049', letterSpacing: '0.1em' }}>
                View Service
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            
            {/* Item 6 */}
            <div style={{ backgroundColor: '#000000', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div
                className="inline-block overflow-hidden shadow-lg border border-white/20"
                style={{
                  borderRadius: 'var(--img-radius)',
                  backgroundColor: '#000000',
                  maxWidth: '95%',
                  maxHeight: '280px',
                  width: 'auto',
                  height: 'auto'
                }}
              >
                <Image
                  src={DeliveryImg}
                  alt="Sterling Transit Delivery"
                  width={(DeliveryImg as any).width}
                  height={(DeliveryImg as any).height}
                  className="block object-cover"
                  style={{ borderRadius: 'inherit', width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ backgroundColor: '#ffffff', minHeight: '800px', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#000000' }}>
              Choose Your Plan
            </h2>
            <p className="text-lg md:text-xl" style={{ color: '#6b7280' }}>
              Flexible pricing for every moving need
            </p>
          </div>

          {/* Pricing Grid - 3 boxes in 1 row */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem',
            alignItems: 'stretch',
            minHeight: '600px'
          }}>
            {/* Starter Plan */}
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '3rem', 
              borderRadius: '1rem', 
              border: '2px solid #e5e7eb',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '600px'
            }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>Starter</h3>
              <p className="text-sm mb-6" style={{ color: '#6b7280' }}>Perfect for occasional moves</p>
              
              <div style={{ flex: 1, marginBottom: '2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#374151' }}>1 local move monthly</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#374151' }}>Track your moving items</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#374151' }}>Standard support</span>
                  </li>
                </ul>
              </div>
              
              <button className="w-full py-3 px-6 rounded-lg font-semibold transition-colors" style={{ 
                backgroundColor: '#000000', 
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer'
              }}>
                Get Started
              </button>
            </div>

            {/* Professional Plan - Featured */}
            <div style={{ 
              backgroundColor: '#000000', 
              padding: '3rem', 
              borderRadius: '1rem', 
              border: '2px solid #000000',
              display: 'flex',
              flexDirection: 'column',
              transform: 'scale(1.05)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              minHeight: '600px'
            }}>
              <div className="mb-2" style={{ 
                backgroundColor: '#10b981', 
                color: '#ffffff', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                width: 'fit-content'
              }}>
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>Professional</h3>
              <p className="text-sm mb-6" style={{ color: '#d1d5db' }}>For frequent movers</p>
              
              <div style={{ flex: 1, marginBottom: '2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#ffffff' }}>2 moves, any size</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#ffffff' }}>Live driver tracking</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#ffffff' }}>Priority support</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#ffffff' }}>Flexible scheduling</span>
                  </li>
                </ul>
              </div>
              
              <button className="w-full py-3 px-6 rounded-lg font-semibold transition-colors" style={{ 
                backgroundColor: '#ffffff', 
                color: '#000000',
                border: 'none',
                cursor: 'pointer'
              }}>
                Upgrade
              </button>
            </div>

            {/* Enterprise Plan */}
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '3rem', 
              borderRadius: '1rem', 
              border: '2px solid #e5e7eb',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '600px'
            }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>Enterprise</h3>
              <p className="text-sm mb-6" style={{ color: '#6b7280' }}>Complete moving solution</p>
              
              <div style={{ flex: 1, marginBottom: '2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#374151' }}>Unlimited moves</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#374151' }}>Personal move manager</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#374151' }}>Full inventory tools</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#374151' }}>24/7 support</span>
                  </li>
                  <li className="mb-3 flex items-start">
                    <span style={{ color: '#10b981', marginRight: '0.75rem' }}>✓</span>
                    <span style={{ color: '#374151' }}>Custom options</span>
                  </li>
                </ul>
              </div>
              
              <button className="w-full py-3 px-6 rounded-lg font-semibold transition-colors" style={{ 
                backgroundColor: '#000000', 
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer'
              }}>
                Go Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Hero Style with Image Right */}
      <section className="w-full h-auto md:min-h-[var(--hero-h)] bg-[#078049] gap-4 sm:gap-6 md:gap-12 lg:gap-16 xl:gap-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ display: 'flex', flexDirection: 'column', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <style jsx>{`
          @media (min-width: 768px) {
            section {
              flex-direction: row !important;
            }
            .unboxing-image-wrapper {
              margin-top: 1.75rem !important;
              margin-right: 1rem !important;
              margin-bottom: 1rem !important;
            }
            .cta-text-container {
              margin-left: 3rem;
            }
          }
          @media (min-width: 1024px) {
            .unboxing-image-wrapper {
              margin-top: 2.25rem !important;
              margin-right: 1.5rem !important;
              margin-bottom: 1.5rem !important;
            }
            .cta-text-container {
              margin-left: 4rem;
            }
          }
          @media (min-width: 1280px) {
            .unboxing-image-wrapper {
              margin-top: 2.75rem !important;
              margin-right: 2rem !important;
              margin-bottom: 2rem !important;
            }
            .cta-text-container {
              margin-left: 5rem;
            }
          }
        `}</style>
        
        {/* Left Side - Text Content */}
        <div className="cta-text-container flex-1 flex items-start justify-start h-auto md:h-[var(--hero-h)]">
          <div className="w-full h-full box-border flex flex-col justify-start pb-8 text-white overflow-visible" style={{ color: '#ffffff' }}>
            <h1
              className="w-full font-sans font-bold leading-[0.9] tracking-tight text-[3.5rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[9rem] xl:text-[10.5rem] text-left drop-shadow-md md:drop-shadow-lg opacity-100 !text-white mb-0.5 md:mb-1"
              style={{ color: '#ffffff' }}
            >
              Ready, set, move<br />with ease.
            </h1>
            
            {/* Supporting paragraph */}
            <p className="mt-1 sm:mt-1 md:mt-1 text-white/85 font-normal text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Seamless moves, zero stress. Get a fast quote and let our team handle the rest—across town or state lines.
            </p>

            {/* CTA Buttons */}
            <div className="mt-2 sm:mt-2 md:mt-2 flex flex-nowrap items-center gap-0">
              <button
                type="button"
                className="px-10 py-0 min-w-[var(--btn-min-w)] text-lg font-semibold bg-gradient-to-br from-white via-gray-50 to-gray-200 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:from-gray-100 hover:to-white focus:outline-none focus:ring-2 focus:ring-white/40"
                style={{ height: 'var(--btn-h)', borderRadius: 'var(--btn-radius)', textAlign: 'center', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span className="text-[#078049]">Book Now</span>
              </button>
              <div className="w-px bg-white/30 mx-4" style={{ height: 'var(--btn-h)' }}></div>
              <Link
                href="/contact"
                className="px-10 py-0 min-w-[var(--btn-min-w)] text-lg font-semibold transition-all duration-200 ease-in-out hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                style={{ height: 'var(--btn-h)', borderRadius: 'var(--btn-radius)', backgroundColor: 'transparent', border: '2px solid #ffffff', color: '#ffffff', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span className="text-white">Get Quote</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex flex-col h-auto md:h-full justify-start">
          <div
            className="unboxing-image-wrapper inline-block overflow-hidden shadow-lg border border-white/20 bg-[#078049] mr-4 mb-4 mt-4 sm:mr-6 sm:mb-6 sm:mt-6 max-h-[400px] md:max-h-[calc(var(--hero-h)-48px)]"
            style={{
              borderRadius: 'var(--img-radius)'
            }}
          >
            <Image
              src={UnboxingImg}
              alt="Sterling Transit Unboxing"
              width={(UnboxingImg as any).width}
              height={(UnboxingImg as any).height}
              className="block h-full w-full object-cover"
              style={{ borderRadius: 'inherit', objectPosition: 'center top' }}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={{ backgroundColor: '#000000', minHeight: '500px', padding: '6rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ position: 'relative', padding: '3rem' }}>
            {/* Opening Quote */}
            <div style={{ 
              fontSize: '4rem', 
              color: '#ffffff', 
              opacity: '0.3',
              position: 'absolute',
              top: '0',
              left: '0',
              fontFamily: 'Georgia, serif',
              lineHeight: '1'
            }}>
              "
            </div>
            
            {/* Testimonial Text */}
            <p 
              className="text-white font-normal"
              style={{ 
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                lineHeight: '1.8',
                color: '#ffffff',
                margin: '0 auto',
                maxWidth: '900px',
                padding: '0 2rem'
              }}
            >
              Absolutely seamless move! The crew was upbeat, super careful with my stuff, and kept me in the loop the whole time. I was dreading moving day, but they made it fun and totally stress-free. If you want a move that's quick, easy, and actually enjoyable, these are your people!
            </p>

            {/* Closing Quote */}
            <div style={{ 
              fontSize: '4rem', 
              color: '#ffffff', 
              opacity: '0.3',
              position: 'absolute',
              bottom: '0',
              right: '0',
              fontFamily: 'Georgia, serif',
              lineHeight: '1'
            }}>
              "
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ backgroundColor: '#ffffff', minHeight: '800px', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#000000' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl" style={{ color: '#6b7280' }}>
              Everything you need to know about our moving services
            </p>
          </div>

          {/* FAQ Grid - 2 columns */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Left Column - Header Section */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem' }}>
              {/* Subheading */}
              <p 
                className="text-sm md:text-base uppercase mb-3"
                style={{ 
                  color: '#9ca3af',
                  letterSpacing: '0.1em',
                  fontWeight: '600'
                }}
              >
                GOT QUESTIONS?
              </p>
              
              {/* Main Heading */}
              <h3 
                className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-4"
                style={{ color: '#000000' }}
              >
                WE'VE GOT ANSWERS
              </h3>
              
              {/* Description */}
              <p 
                className="text-sm md:text-base mb-6 leading-relaxed"
                style={{ color: '#d1d5db' }}
              >
                From pricing to packing tips, find everything you need to know about working with Sterling Transit Co. Still have questions? We're just a click away.
              </p>

              {/* Quote Button */}
              <div>
                <button
                  className="font-semibold rounded-lg transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: '#078049',
                    color: '#ffffff',
                    padding: '0.875rem 2.5rem',
                    border: 'none',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* FAQ 1 */}
              <div style={{ padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>
                  How much does a move cost?
                </h3>
                <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
                  Every move is unique! Pricing depends on factors like distance, size of your load, and any special items. Request a free quote online or give us a call, and we'll provide a clear, upfront estimate with no hidden fees.
                </p>
              </div>

              {/* FAQ 2 */}
              <div style={{ padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>
                  Do you handle long-distance moves?
                </h3>
                <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
                  Absolutely! We specialize in both local and state-to-state moves. Whether you're moving across town or across the country, our experienced team ensures your belongings arrive safely and on time.
                </p>
              </div>

              {/* FAQ 3 */}
              <div style={{ padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>
                  What items can you move?
                </h3>
                <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
                  From single pieces of furniture to entire homes, we move it all—sofas, pianos, fine art, office equipment, and more. Have something special or fragile? Let us know, and we'll handle it with extra care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section style={{ backgroundColor: '#f3f4f6', minHeight: '800px', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '2rem' }}>
          {/* Subheading */}
          <p 
            className="text-sm md:text-base uppercase mb-3"
            style={{ 
              color: '#9ca3af',
              letterSpacing: '0.1em',
              fontWeight: '600',
              textAlign: 'left'
            }}
          >
            GET IN TOUCH
          </p>
          
          {/* Main Heading */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: '#000000', textAlign: 'left' }}
          >
            Let's move things forward
          </h2>
          
          {/* Child Text */}
          <p 
            className="text-lg md:text-xl mb-8"
            style={{ color: '#6b7280', textAlign: 'left' }}
          >
            Drop us a line—let's chat moves
          </p>

          {/* Two Column Layout - Locations and Image */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            alignItems: 'center',
            marginTop: '4rem'
          }}>
            {/* Left Side - Locations List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Location 1 */}
              <div style={{ 
                padding: '2rem', 
                backgroundColor: '#ffffff', 
                borderRadius: '1rem', 
                border: '2px solid #e5e7eb',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#078049', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#000000' }}>
                      Lagos Headquarters
                    </h3>
                    <p className="text-base" style={{ color: '#6b7280', lineHeight: '1.6' }}>
                      15 Victoria Island Road, Lagos, Nigeria
                    </p>
                    <a href="tel:+2348001234567" className="text-sm mt-1 block hover:underline" style={{ color: '#078049', fontWeight: '600' }}>
                      +234 (0) 800 STERLING
                    </a>
                    <a href="mailto:lagos@sterlingtransit.ng" className="text-sm mt-1 block hover:underline" style={{ color: '#078049', fontWeight: '600' }}>
                      lagos@sterlingtransit.ng
                    </a>
                  </div>
                </div>
              </div>

              {/* Location 2 */}
              <div style={{ 
                padding: '2rem', 
                backgroundColor: '#ffffff', 
                borderRadius: '1rem', 
                border: '2px solid #e5e7eb',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#078049', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#000000' }}>
                      Abuja Office
                    </h3>
                    <p className="text-base" style={{ color: '#6b7280', lineHeight: '1.6' }}>
                      32 Central District Avenue, Abuja, Nigeria
                    </p>
                    <a href="tel:+2349001234567" className="text-sm mt-1 block hover:underline" style={{ color: '#078049', fontWeight: '600' }}>
                      +234 (0) 900 TRANSIT
                    </a>
                    <a href="mailto:abuja@sterlingtransit.ng" className="text-sm mt-1 block hover:underline" style={{ color: '#078049', fontWeight: '600' }}>
                      abuja@sterlingtransit.ng
                    </a>
                  </div>
                </div>
              </div>

              {/* Location 3 */}
              <div style={{ 
                padding: '2rem', 
                backgroundColor: '#ffffff', 
                borderRadius: '1rem', 
                border: '2px solid #e5e7eb',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#078049', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#000000' }}>
                      Port Harcourt Branch
                    </h3>
                    <p className="text-base" style={{ color: '#6b7280', lineHeight: '1.6' }}>
                      78 Trans Amadi Industrial Layout, Port Harcourt, Nigeria
                    </p>
                    <a href="tel:+2347001234567" className="text-sm mt-1 block hover:underline" style={{ color: '#078049', fontWeight: '600' }}>
                      +234 (0) 700 MOVING
                    </a>
                    <a href="mailto:portharcourt@sterlingtransit.ng" className="text-sm mt-1 block hover:underline" style={{ color: '#078049', fontWeight: '600' }}>
                      portharcourt@sterlingtransit.ng
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Locations Image */}
            <div style={{ 
              position: 'relative',
              width: '100%',
              height: '700px',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <Image
                src={LocationsImg}
                alt="Sterling Transit Locations"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#000000', color: '#ffffff', padding: '4rem 2rem 2rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Main Footer Content */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr', 
            gap: '4rem',
            marginBottom: '3rem',
            padding: '0 2rem'
          }}>
            {/* Left Side - Logo and Heading */}
            <div>
              {/* Logo */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="inline-flex items-center h-[80px] w-[80px] p-3 bg-white/10 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" role="img" aria-labelledby="footerLogoTitle" fill="white" className="text-white">
                    <title id="footerLogoTitle">STERLING TRANSIT CO</title>
                    <g transform="translate(0,0)">
                      <rect x="2.5" y="2.5" width="59" height="59" rx="12" ry="12" stroke="currentColor" strokeWidth="5"/>
                      <path d="M52 16c-9 0-12 8-20 8s-11-8-20-8" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                      <path d="M12 48c9 0 12-8 20-8s11 8 20 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                      <path d="M52 16c-9 0-12 8-20 8s-11-8-20-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" opacity="0.9"/>
                      <path d="M12 48c9 0 12-8 20-8s11 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" opacity="0.9"/>
                    </g>
                  </svg>
                </span>
              </div>
              
              {/* Heading Text */}
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ 
                  color: '#ffffff',
                  lineHeight: '1.4',
                  maxWidth: '400px'
                }}
              >
                MOVING MADE EASY,<br />NEAR OR FAR.
              </h3>
              
              {/* Tagline */}
              <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '350px' }}>
                Professional moving services across town and across state lines. Your trusted partner for stress-free relocations.
              </p>
            </div>

            {/* Right Side - Footer Links and Info */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '3rem'
            }}>
              {/* Services Column */}
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: '#ffffff' }}>
                  Services
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Local Moving
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Long Distance
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Office Moving
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Packing Services
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Storage
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: '#ffffff' }}>
                  Company
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <Link href="/about" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <Link href="/services" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Services
                    </Link>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Get a Quote
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support Column */}
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: '#ffffff' }}>
                  Support
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <a href="#faq" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      FAQs
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <Link href="/privacy" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <Link href="/terms" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} className="hover:text-white">
                      Insurance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
            margin: '0 2rem',
            marginBottom: '2rem'
          }}></div>

          {/* Bottom Footer - Copyright and Social Icons */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '0 2rem',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            {/* Copyright */}
            <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>
              © 2025 Sterling Transit Co. All rights reserved.
            </p>

            {/* Contact and Social Icons */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {/* Email */}
              <a href="mailto:info@sterlingtransit.ng" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }} className="hover:bg-[#078049]" title="Email us">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                  <path d="m4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white"/>
                  <polyline points="22,6 12,13 2,6" stroke="white"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }} className="hover:bg-[#078049]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a href="#" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }} className="hover:bg-[#078049]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }} className="hover:bg-[#078049]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }} className="hover:bg-[#078049]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
