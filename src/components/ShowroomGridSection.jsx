'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function ShowroomGrid() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Set initial state
    setIsMobile(window.innerWidth < 768)
    
    // Handle resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const gridItems = [
    {
      image: '/slider-showroom/slide6.jpg',
      title: 'Cucina Moderna',
      href: '/cucine',
      //category: 'Cucine'
    },
    {
      image: '/slider-showroom/slide5.jpg',
      title: 'Living',
      href: '/living',
      //category: 'Zona Giorno'
    },
    {
      image: '/slider-showroom/slide4.jpg',
      title: 'Zona Notte',
      href: '/zona-notte',
      //category: 'Camera da Letto'
    },
    {
      image: '/slider-showroom/slide3.jpg',
      title: 'Camerette',
      href: '/camerette',
      //category: 'Camera da Letto'
    },
    {
      image: '/slider-showroom/slide2.jpg',
      title: 'Complementi',
      href: '/complementi',
      //category: 'Camera da Letto'
    },
    {
      image: '/slider-showroom/slide1.jpg',
      title: 'Illuminazione',
      href: '/illuminazione',
      //category: 'Cucine'
    }
  ]

  return (
    <section className="py-2 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-2 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-12">
          <p
            className="mb-2 tracking-widest"
            style={{
              fontFamily: 'Mrs Saint Delafield, cursive',
              color: '#d7cbb7',
              fontSize: 'clamp(32px, 6vw, 50px)',
              textTransform: 'none'
            }}
          >
            Mengoni Design
          </p>
          <h2
            style={{
              fontFamily: 'Belleza, sans-serif',
              fontWeight: '500',
              textTransform: 'uppercase',
              color: '#000',
              fontSize: 'clamp(24px, 5vw, 46px)',
              lineHeight: '1em'
            }}
          >
            I NOSTRI PROGETTI
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
          {gridItems.map((item, index) => (
            <div key={index} className="group relative">
              <Link href={item.href} className="block cursor-pointer">
                <div className="relative overflow-hidden w-full aspect-[460/800]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 460px"
                    draggable={false}
                  />

                  {/* Overlay con label - comportamento diverso per mobile e desktop */}
                  {isMobile ? (
                    // Mobile: sfumatura elegante e sottile
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-16 pb-6 px-6">
                        <h3
                          style={{
                            fontFamily: 'Belleza, sans-serif',
                            fontWeight: '500',
                            textTransform: 'uppercase',
                            color: 'white',
                            fontSize: 'clamp(16px, 3vw, 22px)',
                            lineHeight: '1.12em',
                            margin: '0',
                            wordWrap: 'break-word',
                            textAlign: 'left',
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)'
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    // Desktop: overlay completo su hover
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 sm:p-6">
                      <div className="text-white">
                        <h3
                          className="transform translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                          style={{
                            fontFamily: 'Belleza, sans-serif',
                            fontWeight: '500',
                            textTransform: 'uppercase',
                            color: 'white',
                            fontSize: 'clamp(16px, 3vw, 22px)',
                            lineHeight: '1.12em',
                            margin: '0',
                            wordWrap: 'break-word',
                            textAlign: 'left'
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}