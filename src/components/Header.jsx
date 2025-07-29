'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/showroom", label: "Showroom" },
    { href: "/progetti", label: "Progetti" },
    { href: "/contatti", label: "Contatti" }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={isScrolled ? "/logo-small-black.png" : "/logo-full-white.png"}
                alt="Mengoni Design"
                width={isScrolled ? 120 : 200}
                height={32}
                className="h-6 sm:h-8 w-auto object-contain transition-all duration-300 cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
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
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden cursor-pointer p-2 -mr-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100 mt-4' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 space-y-3 border-t ${
            isScrolled ? 'border-gray-200' : 'border-white/20'
          }`}>
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`block px-2 py-2 transition-colors duration-300 cursor-pointer ${
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
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}