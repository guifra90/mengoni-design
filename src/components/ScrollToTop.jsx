'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Mostra il pulsante dopo aver scrollato almeno 300px
      setIsVisible(scrollPosition > 300)
    }

    // Aggiungi listener per lo scroll
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    })
  }

  // Non renderizzare nulla se non è visibile
  if (!isVisible) return null

  return (
    <>
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 w-10 h-10 bg-black hover:bg-gray-800 border border-gray-600 text-white rounded transition-all duration-300 flex items-center justify-center z-50 animate-fade-in cursor-pointer"
        aria-label="Torna su"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      
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
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
      `}</style>
    </>
  )
}