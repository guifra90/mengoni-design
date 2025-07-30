'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ZonaNotte() {

    const cucineImages = [
        {
            src: '/zona-notte/zona-notte-1.jpg',
            alt: 'Foto zona notte'
        },
        {
            src: '/zona-notte/zona-notte-2.jpg',
            alt: 'Foto zona notte'
        },
        {
            src: '/zona-notte/zona-notte-3.jpg',
            alt: 'Foto zona notte'
        },
        {
            src: '/zona-notte/zona-notte-4.jpg',
            alt: 'Foto zona notte'
        },
        {
            src: '/zona-notte/zona-notte-5.jpg',
            alt: 'Foto zona notte'
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
                                        Zona Notte
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
                                            Eleganza, comfort e intimità: la camera da letto, che sia moderna o classica, deve rappresentare il 
                                            perfetto equilibrio tra estetica e funzionalità. La scelta dello stile è solo il primo passo, ma è 
                                            l’attenzione ai dettagli e all’organizzazione degli spazi che rende una camera davvero accogliente e funzionale.                                        
                                        </p>
                                        
                                        <p>
                                            Immaginate una zona notte dove ogni elemento contribuisce a creare un’atmosfera di relax e serenità, dove l’armonia 
                                            tra mobili, tessuti e illuminazione favorisce il riposo. Da Mengoni Design, progettiamo soluzioni per ottimizzare gli spazi, 
                                            che includono letti confortevoli, armadi capienti e accessori studiati per garantire ordine e tranquillità. Ogni ambiente è 
                                            pensato per riflettere il vostro stile personale, senza compromettere il comfort.
                                        </p>
                                        
                                        <p>
                                            Le nostre proposte per la zona notte comprendono letti dalle linee eleganti, materassi di alta qualità per un riposo rigenerante 
                                            e armadi su misura che ottimizzano lo spazio, mantenendo la vostra camera sempre in ordine. Grazie alla nostra esperienza, possiamo 
                                            creare ambienti in cui il design si sposa con la funzionalità, soddisfacendo le esigenze di chi desidera una camera da letto che sia 
                                            un vero e proprio rifugio.
                                        </p>
                                        
                                        <p>
                                            Che preferiate uno stile classico, con tessuti raffinati e mobili dalle finiture pregiate, o uno moderno, caratterizzato da linee pulite 
                                            e materiali innovativi, vi accompagneremo nella scelta degli elementi giusti per la vostra zona notte. Ogni camera da letto che progettiamo 
                                            è unica, pensata per adattarsi alle vostre necessità, garantendo un riposo rigenerante e un’estetica in armonia con il resto della casa.
                                        </p>
                                        
                                        <p>
                                            In sintesi, la camera da letto perfetta unisce eleganza, comfort e intimità, rendendo ogni notte un momento di vero relax. Da Mengoni Design, 
                                            ci impegniamo a creare questo equilibrio per i nostri clienti, realizzando una zona notte che sia accogliente, funzionale e sempre in sintonia 
                                            con il vostro stile di vita.
                                        </p>
                                    </div>

                                    <div
                                        className="mt-10 fade-in-up"
                                        style={{
                                            animationDelay: '400ms'
                                        }}
                                    >
                                        <button
                                            className="cursor-pointer w-full sm:w-auto"
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
                                        </button>

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