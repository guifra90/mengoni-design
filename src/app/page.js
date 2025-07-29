'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

// Componente wrapper per animazioni con Framer Motion
const AnimatedSection = ({ children, delay = 0, variant = "default" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-80px 0px -80px 0px",
    amount: 0.15 
  })

  const variants = {
    default: {
      hidden: { opacity: 0, y: 60, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 1.2,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    elegant: {
      hidden: { opacity: 0, y: 80, scale: 0.92 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 1.4,
          delay: delay / 1000,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 60, rotateY: -15 },
      visible: { 
        opacity: 1, 
        x: 0, 
        rotateY: 0,
        transition: {
          duration: 1.3,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: -60, rotateY: 15 },
      visible: { 
        opacity: 1, 
        x: 0, 
        rotateY: 0,
        transition: {
          duration: 1.3,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    fade: {
      hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
      visible: { 
        opacity: 1, 
        scale: 1, 
        filter: "blur(0px)",
        transition: {
          duration: 1.5,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

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
      <Header isScrolled={isScrolled} />

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