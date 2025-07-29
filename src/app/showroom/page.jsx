'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import PageLoader from '@/components/PageLoader'
import Header from '@/components/Header'

export default function Showroom() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Controlla se è una navigazione interna
    const hasNavigated = sessionStorage.getItem('hasNavigated')
    
    if (hasNavigated) {
      setIsLoading(true)
    }
    
    // Segna che l'utente ha navigato
    sessionStorage.setItem('hasNavigated', 'true')
  }, [pathname])

  return (
    <>
      {/* Loader per navigazione */}
      <PageLoader 
        isLoading={isLoading}
        onComplete={() => setIsLoading(false)}
        duration={2000}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <h1 
              className="text-4xl font-bold mb-8"
              style={{ fontFamily: 'Belleza, sans-serif' }}
            >
              CHI SIAMO
            </h1>
            <div className="max-w-4xl">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Mengoni Design è un Concept Store di piccole dimensioni, 
                uno spazio vivo, in continuo fluire sempre attento ai dettagli...
              </p>
              {/* Altro contenuto */}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}