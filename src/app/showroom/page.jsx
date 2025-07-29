'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'

export default function About() {
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
          <h1 
            className="text-4xl font-bold mb-8"
            style={{ fontFamily: 'Belleza, sans-serif' }}
          >
            CHI SIAMO
          </h1>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Mengoni Design è un Concept Store di piccole dimensioni, 
              uno spazio vivo, in continuo fluire...
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, voluptates illo veniam placeat molestiae nulla quam voluptatum cumque. Id fugiat quasi esse ipsam nihil similique libero nemo eum voluptatum pariatur?<br />
            </p>
            {/* Resto del contenuto */}
          </div>
        </div>
      </main>
    </div>
  )
}