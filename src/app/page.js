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
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">      
      <Header isHomePage={true} />
      <HeroSection />      
      <ShowroomSlider />
      <LaBoutiqueSection />
      <ProgettiHeroSection />
      <ProcessoValoriSection />
      <BrandsGridSection />
      <ContattaciMappaSection />
      <Footer />      
    </div>
  )
}