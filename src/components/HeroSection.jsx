'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: '/slider-home/slide1.jpg',
      title: 'DESIGN CONTEMPORANEO',
      subtitle: 'Eleganza moderna',
      description: 'Scopri le nostre cucine dal design raffinato, dove funzionalità e bellezza si fondono perfettamente.'
    },
    {
      image: '/slider-home/slide2.webp',
      title: 'BLACK VELVET TOUCH',
      subtitle: 'Una nuova vita',
      description: 'Linee essenziali e materiali pregiati per creare ambienti di straordinaria eleganza.'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [currentSlide]) // Dipendenza aggiunta per resettare il timer

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % heroSlides.length
      return next
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const previous = prev === 0 ? heroSlides.length - 1 : prev - 1
      return previous
    })
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-none px-6">
              <h1 
                className="tracking-wide whitespace-nowrap"
                style={{
                  fontFamily: 'Belleza, serif',
                  textTransform: 'uppercase',
                  color: 'rgb(255, 255, 255)',
                  fontWeight: '400',
                  fontSize: '100px',
                  lineHeight: '1.1'
                }}
              >
                {slide.title}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {/* Frecce di navigazione */}
      {/* Freccia sinistra */}
      <button
        onClick={prevSlide}
        className="absolute left-12 md:left-24 top-1/2 transform -translate-y-1/2 z-30 w-12 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
        aria-label="Slide precedente"
      >
        <svg 
          className="w-10 h-3 pointer-events-none" 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" 
          y="0px" 
          viewBox="0 0 38 12" 
          xmlSpace="preserve"
          fill="currentColor"
        >
          <polygon points="38,5.37 1.5,5.37 8.21,0.54 7.87,0 0,5.68 7.61,12 7.98,11.49 1.4,6.02 38,6.02" />
        </svg>
      </button>
      
      {/* Freccia destra */}
      <button
        onClick={nextSlide}
        className="absolute right-12 md:right-24 top-1/2 transform -translate-y-1/2 z-30 w-12 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
        aria-label="Slide successivo"
      >
        <svg 
          className="w-10 h-3 transform rotate-180 pointer-events-none" 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" 
          y="0px" 
          viewBox="0 0 38 12" 
          xmlSpace="preserve"
          fill="currentColor"
        >
          <polygon points="38,5.37 1.5,5.37 8.21,0.54 7.87,0 0,5.68 7.61,12 7.98,11.49 1.4,6.02 38,6.02" />
        </svg>
      </button>
    </section>
  )
}