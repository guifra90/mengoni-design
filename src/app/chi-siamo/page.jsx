'use client'

import Image from 'next/image'
import BrandsGridSection from '@/components/BrandsGridSection'
import ContattaciMappaSection from '@/components/ContattaciMappaSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="tracking-wider"
                style={{
                  fontFamily: 'Belleza, sans-serif',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  color: '#000',
                  fontSize: 'clamp(32px, 6vw, 64px)',
                  lineHeight: '1.1',
                  letterSpacing: '0.1em'
                }}
              >
                CHI SIAMO
              </h1>
            </div>
          </div>
        </section>

        {/* Hero Image Section - Banner orizzontale */}
        <section className="relative w-full">
          <div className="relative h-[30vh] sm:h-[35vh] lg:h-[40vh] w-full overflow-hidden">
            <Image
              src="/banner-chi-siamo.jpg"
              alt="Mengoni Design Interior"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </section>

        {/* Story Section - Full width */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 w-full">
          <div className="w-full">
            <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
              <p
                className="mb-6 tracking-wide"
                style={{
                  fontFamily: 'Mrs Saint Delafield, cursive',
                  color: '#d7cbb7',
                  fontSize: 'clamp(28px, 5vw, 42px)'
                }}
              >
                La nostra passione
              </p>

              <h2
                className="leading-tight mb-8"
                style={{
                  fontFamily: 'Belleza, sans-serif',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  color: '#000',
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  lineHeight: '1.1'
                }}
              >
                UNA STORIA DI SUCCESSO
              </h2>
            </div>

            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-1 gap-12 sm:gap-16 lg:gap-20 items-center">
                  {/* Testo */}
                  <div className="space-y-6">
                    <p
                      style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 18px)',
                        lineHeight: '1.62em',
                        fontWeight: '300',
                        color: 'rgb(89, 89, 89)',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      Da oltre 40 anni, Mengoni Design rappresenta un simbolo di qualità, design e cura dei dettagli nel settore dell'arredo.
                      Fondata da Marco Mengoni, l'azienda ha saputo evolversi con il tempo, diventando un punto di riferimento per chi cerca
                      soluzioni d'arredo eleganti, funzionali e su misura, sia nel Mugello che oltre.
                    </p>

                    <p
                      style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 18px)',
                        lineHeight: '1.62em',
                        fontWeight: '300',
                        color: 'rgb(89, 89, 89)',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      La nostra missione è quella di proseguire il percorso di successo tracciato da Marco, restando fedeli ai valori di
                      passione, competenza e innovazione che da sempre ci guidano. Guardiamo al futuro con l'ambizione di continuare a essere
                      una realtà di riferimento nel mondo del design e dell'arredamento.
                    </p>

                    <p
                      style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 18px)',
                        lineHeight: '1.62em',
                        fontWeight: '300',
                        color: 'rgb(89, 89, 89)',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      Rimanendo costantemente attenti alle tendenze e alle nuove sfide del mercato, crediamo profondamente nella casa
                      debba essere il perfetto equilibrio tra funzionalità e impegniamo ogni giorno a creare ambienti che migliorano
                      la qualità della vita dei nostri clienti.
                    </p>
                  </div>

                  {/* Immagine laterale 
                  <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/showroom-interior.jpg"
                      alt="Showroom Mengoni Design"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <BrandsGridSection />

        {/* Contact Section */}
        <ContattaciMappaSection />

      </main>

      <Footer />
    </div>
  )
}