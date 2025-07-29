'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Mostra il pulsante dopo aver scrollato almeno 300px
      setShowScrollTop(scrollPosition > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white">
      {/* Contenuto principale del footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Colonna sinistra - Logo e descrizione */}
          <div className="space-y-4 sm:space-y-6">
            <h3 
              className="tracking-wide"
              style={{
                fontFamily: 'Belleza, sans-serif',
                fontWeight: '500',
                textTransform: 'uppercase',
                color: '#ffffff',
                fontSize: 'clamp(24px, 5vw, 46px)',
                lineHeight: '1em'
              }}
            >
              MENGONI DESIGN
            </h3>
            <p 
              className="pr-0 lg:pr-8"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: '1.62em',
                fontWeight: '300',
                color: '#959595',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              Mengoni Design è un Concept Store di piccole dimensioni, uno spazio vivo, 
              in continuo fluire sempre attento ai dettagli ed alle tendenze, dove le 
              emozioni si fondono con l'esperienza per creare atmosfere uniche e dove 
              la scelta dei prodotti avviene anche con occhio attento al rispetto 
              dell'ambiente e della salute.
            </p>
          </div>
          
          {/* Colonna destra - Menu */}
          <div className="space-y-4 sm:space-y-6">
            <h4 
              className="font-medium tracking-widest uppercase text-gray-300"
              style={{ fontSize: 'clamp(10px, 1.5vw, 12px)' }}
            >
              MENU
            </h4>
            <nav className="space-y-2 sm:space-y-3">
              <a 
                href="#home" 
                className="block hover:text-white transition-colors duration-300 cursor-pointer"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: '1.62em',
                  fontWeight: '300',
                  color: '#959595',
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                Home
              </a>
              <a 
                href="#showroom" 
                className="block hover:text-white transition-colors duration-300 cursor-pointer"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: '1.62em',
                  fontWeight: '300',
                  color: '#959595',
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                Showroom
              </a>
              <a 
                href="#progetti" 
                className="block hover:text-white transition-colors duration-300 cursor-pointer"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: '1.62em',
                  fontWeight: '300',
                  color: '#959595',
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                Progetti
              </a>
              <a 
                href="#chi-siamo" 
                className="block hover:text-white transition-colors duration-300 cursor-pointer"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: '1.62em',
                  fontWeight: '300',
                  color: '#959595',
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                Chi siamo
              </a>
            </nav>
          </div>
        </div>
        
        {/* Sezione Instagram - solo icona */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8">
          <h4 
            className="font-medium tracking-widest uppercase text-gray-300 mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(10px, 1.5vw, 12px)' }}
          >
            INSTAGRAM
          </h4>
          <a 
            href="https://instagram.com/mengonidesign" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Riga copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div 
            className="text-center sm:text-left"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 'clamp(12px, 2vw, 16px)',
              lineHeight: '1.62em',
              fontWeight: '300',
              color: '#666666',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            © 2024 Mengoni Interni S.R.L. tutti i diritti riservati - Privacy e Cookie Policy - Tel e fax 055.845.6274 - E-mail: info@mengoniinterni.it - Partita IVA: 05336470488
          </div>
        </div>
      </div>
      
      {/* Pulsante scroll to top - visibile solo dopo scroll */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 w-10 h-10 bg-black hover:bg-gray-800 border border-gray-600 text-white rounded transition-all duration-300 flex items-center justify-center z-50 opacity-0 animate-fade-in"
          style={{
            animation: 'fadeIn 0.3s ease-in-out forwards'
          }}
          aria-label="Torna su"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
      
      {/* CSS per animazione fade-in */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  )
}