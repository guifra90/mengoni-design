'use client'

import { useState, useEffect } from 'react'

// Import dei componenti
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ShowroomSlider from '@/components/ShowroomSlider'
import LaBoutiqueSection from '@/components/LaBoutiqueSection'
import ProgettiHeroSection from '@/components/ProgettiHeroSection'
import ProcessoValoriSection from '@/components/ProcessoValoriSection'
import BrandsGridSection from '@/components/BrandsGridSection'
import ContattaciMappaSection from '@/components/ContattaciMappaSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header isScrolled={isScrolled} />

      {/* Hero Section */}
      <HeroSection />

      {/* Showroom Slider Section */}
      <ShowroomSlider />

      {/* La Boutique Section */}
      <LaBoutiqueSection />

      {/* Progetti di Arredamento Hero Section */}
      <ProgettiHeroSection />

      {/* Valori aziendali */}
      <ProcessoValoriSection />
      
      {/* Brands */}
      <BrandsGridSection />

      {/* Contatti e mappa */}
      <ContattaciMappaSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}