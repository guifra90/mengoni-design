'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
import AnimatedSection from '@/components/AnimatedSection'

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
    <motion.div 
      className="min-h-screen bg-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Header */}
      <Header isScrolled={isScrolled} isHomePage={true} />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.6, 
          delay: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <HeroSection />
      </motion.div>

      {/* Sezioni animate */}
      <AnimatedSection delay={200} variant="elegant">
        <ShowroomSlider />
      </AnimatedSection>

      <AnimatedSection delay={100} variant="slideLeft">
        <LaBoutiqueSection />
      </AnimatedSection>

      <AnimatedSection delay={300} variant="fade">
        <ProgettiHeroSection />
      </AnimatedSection>

      <AnimatedSection delay={150} variant="elegant">
        <ProcessoValoriSection />
      </AnimatedSection>
      
      <AnimatedSection delay={200} variant="slideRight">
        <BrandsGridSection />
      </AnimatedSection>

      <AnimatedSection delay={250} variant="elegant">
        <ContattaciMappaSection />
      </AnimatedSection>

      <AnimatedSection delay={100} variant="fade">
        <Footer />
      </AnimatedSection>

      {/* CSS globali per performance */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </motion.div>
  )
}