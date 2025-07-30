'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Illuminazione() {

    const cucineImages = [
        {
            src: '/illuminazione/illuminazione-1.jpg',
            alt: 'Foto illuminazione'
        },
        {
            src: '/illuminazione/illuminazione-2.jpg',
            alt: 'Foto illuminazione'
        },
        {
            src: '/illuminazione/illuminazione-3.jpg',
            alt: 'Foto illuminazione'
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-20">
                <section className="py-12 lg:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            
                            {/* Colonna Immagini */}
                            <div className="space-y-6">
                                {cucineImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative overflow-hidden fade-in-up"
                                        style={{
                                            animationDelay: `${index * 150}ms`
                                        }}
                                    >
                                        <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-100 hover:scale-[1.02] transition-transform duration-300">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Colonna Contenuto */}
                            <div className="lg:pl-8">
                                <div className="lg:sticky lg:top-32">
                                    
                                    <h1
                                        className="mb-8 font-belleza fade-in-left"
                                        style={{
                                            fontFamily: 'var(--font-belleza), Belleza, serif',
                                            fontWeight: '500',
                                            textTransform: 'uppercase',
                                            color: '#000',
                                            fontSize: 'clamp(28px, 5vw, 48px)',
                                            lineHeight: '1em'
                                        }}
                                    >
                                        Illuminazione
                                    </h1>

                                    <div
                                        className="space-y-6 font-roboto fade-in-left"
                                        style={{
                                            fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                                            fontSize: '16px',
                                            lineHeight: '1.62em',
                                            fontWeight: '300',
                                            color: '#595959',
                                            animationDelay: '200ms'
                                        }}
                                    >
                                        <p>
                                            Lasciatevi guidare dai toni caldi e freddi che accompagneranno le vostre giornate. I complementi di arredo giocano 
                                            un ruolo fondamentale nel trasformare uno spazio, e l’illuminazione è senza dubbio la regina dell’interior design. 
                                            La luce, con le sue intensità e colori, è in grado di alterare la percezione degli spazi, rendendoli più accoglienti e funzionali.                                        
                                        </p>
                                        
                                        <p>
                                            Una corretta illuminazione sarà la vostra più cara alleata sia negli ambienti di lavoro che in quelli di relax. In una zona giorno, 
                                            ad esempio, una combinazione di luci calde e fredde può creare un’atmosfera versatile, perfetta per ogni occasione. 
                                            Le lampade da tavolo e le piantane aggiungono punti luce mirati, mentre i faretti e le luci a soffitto garantiscono 
                                            un’illuminazione diffusa e uniforme.                                        
                                        </p>
                                        
                                        <p>
                                            Da Mengoni Interni, offriamo una vasta gamma di soluzioni per l’illuminazione, pensate per soddisfare ogni esigenza. 
                                            I nostri esperti vi guideranno nella scelta delle lampade giuste per ogni ambiente, tenendo conto delle vostre preferenze estetiche 
                                            e delle necessità pratiche. Ogni dettaglio è studiato per armonizzarsi con il resto dell’arredo, creando un equilibrio perfetto tra 
                                            stile e funzionalità.
                                        </p>
                                        
                                        <p>
                                            Oltre all’illuminazione, anche i complementi di arredo come cuscini, tappeti e oggetti decorativi possono influenzare l’atmosfera di una stanza. 
                                            I toni caldi, come il rosso e l’arancione, aggiungono energia e vitalità, mentre i toni freddi, come il blu e il verde, infondono calma e serenità. 
                                            La scelta dei colori giusti può trasformare completamente la percezione di uno spazio, rendendolo più accogliente e personale.
                                        </p>                                        
                                    </div>

                                    <div
                                        className="mt-10 fade-in-up"
                                        style={{
                                            animationDelay: '400ms'
                                        }}
                                    >
                                        <Link
                                            href="/chi-siamo#contattaci"
                                            className="inline-block cursor-pointer w-full sm:w-auto text-center"
                                            style={{
                                                color: '#b59175',
                                                backgroundColor: 'transparent',
                                                border: '1px solid #b59175',
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: 'clamp(11px, 2vw, 13px)',
                                                lineHeight: '30px',
                                                fontWeight: '400',
                                                textDecoration: 'none',
                                                textTransform: 'uppercase',
                                                borderRadius: '0',
                                                outline: '0',
                                                transition: 'color .2s ease-out, background-color .2s ease-out, border-color .2s ease-out',
                                                padding: '10px 40px'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = '#fff';
                                                e.target.style.backgroundColor = '#b59175';
                                                e.target.style.borderColor = '#b59175';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = '#b59175';
                                                e.target.style.backgroundColor = 'transparent';
                                                e.target.style.borderColor = '#b59175';
                                            }}
                                        >
                                            Richiedi preventivo
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>            
            <Footer />
        </div>
    )
}