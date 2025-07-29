'use client'

import Image from 'next/image'

export default function Header({ isScrolled }) {
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="h-8 w-auto">
            <Image
              src={isScrolled ? "/logo-small-black.png" : "/logo-full-white.png"}
              alt="Mengoni Design"
              width={isScrolled ? 120 : 200}
              height={32}
              className="h-8 w-auto object-contain transition-all duration-300"
              priority
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className={`transition-colors duration-300 cursor-pointer ${
                isScrolled 
                  ? 'text-black hover:text-gray-700' 
                  : 'text-white hover:text-gray-200'
              }`}
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '13px',
                lineHeight: '1.4em',
                letterSpacing: '.3em',
                fontWeight: '400',
                textTransform: 'uppercase'
              }}
            >
              Home
            </a>
            <a 
              href="#showroom" 
              className={`transition-colors duration-300 cursor-pointer ${
                isScrolled 
                  ? 'text-black hover:text-gray-700' 
                  : 'text-white hover:text-gray-200'
              }`}
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '13px',
                lineHeight: '1.4em',
                letterSpacing: '.3em',
                fontWeight: '400',
                textTransform: 'uppercase'
              }}
            >
              Showroom
            </a>
            <a 
              href="#servizi" 
              className={`transition-colors duration-300 cursor-pointer ${
                isScrolled 
                  ? 'text-black hover:text-gray-700' 
                  : 'text-white hover:text-gray-200'
              }`}
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '13px',
                lineHeight: '1.4em',
                letterSpacing: '.3em',
                fontWeight: '400',
                textTransform: 'uppercase'
              }}
            >
              Servizi
            </a>
            <a 
              href="#contatti" 
              className={`transition-colors duration-300 cursor-pointer ${
                isScrolled 
                  ? 'text-black hover:text-gray-700' 
                  : 'text-white hover:text-gray-200'
              }`}
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '13px',
                lineHeight: '1.4em',
                letterSpacing: '.3em',
                fontWeight: '400',
                textTransform: 'uppercase'
              }}
            >
              Contatti
            </a>
          </div>
          <button className="md:hidden cursor-pointer">
            <svg className={`w-6 h-6 transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}