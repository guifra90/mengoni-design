'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import ShowroomGridSection from '@/components/ShowroomGridSection'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export default function Showroom() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">         
          <ShowroomGridSection />
        </div>
      </main>
      <AnimatedSection delay={100} variant="fade">
        <Footer />
      </AnimatedSection>

    </div>
  )
}