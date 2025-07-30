'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Living() {

    const cucineImages = [
        {
            src: '/living/living-1.jpg',
            alt: 'Foto living'
        },
        {
            src: '/living/living-2.jpg',
            alt: 'Foto living'
        },
        {
            src: '/living/living-3.jpg',
            alt: 'Foto living'
        },
        {
            src: '/living/living-4.jpg',
            alt: 'Foto living'
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
                                        Living
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
                                            Stile, comfort e versatilità: che sia moderno o classico, il soggiorno è il luogo dove 
                                            stile e funzionalità devono coesistere armoniosamente. La scelta dello stile, sia esso 
                                            tradizionale o contemporaneo, rappresenta solo il punto di partenza. Un living ben organizzato 
                                            è essenziale per creare uno spazio accogliente e confortevole, in grado di rispondere alle esigenze 
                                            della vita quotidiana.
                                        </p>
                                        
                                        <p>
                                            Immaginate un soggiorno dove ogni elemento trova il suo giusto equilibrio, dove gli arredi invitano 
                                            al relax e dove la disposizione degli spazi facilita la convivialità. Da Mengoni Design, offriamo soluzioni 
                                            personalizzate per ottimizzare gli ambienti, assicurandoci che ogni angolo venga sfruttato al meglio, per un 
                                            living che sia tanto funzionale quanto elegante.
                                        </p>
                                        
                                        <p>
                                            Le nostre proposte spaziano da divani comodi e versatili a mobili per l’intrattenimento tecnologicamente avanzati, 
                                            passando per complementi d’arredo che esprimono il vostro gusto personale. Grazie alla nostra esperienza, siamo in 
                                            grado di creare ambienti living che combinano estetica e praticità, ideali sia per il relax quotidiano che per accogliere 
                                            ospiti in un contesto raffinato.
                                        </p>
                                        
                                        <p>
                                            Che il vostro stile prediliga il fascino del classico, con materiali pregiati e linee senza tempo, o l’essenzialità del 
                                            moderno, con arredi dalle forme minimali e soluzioni innovative, siamo qui per guidarvi nella scelta perfetta. Ogni progetto 
                                            è unico e pensato per adattarsi alle specifiche esigenze di chi vive lo spazio.
                                        </p>
                                        
                                        <p>
                                            In definitiva, il soggiorno ideale è quello che coniuga stile, comfort e versatilità, trasformando ogni momento 
                                            vissuto in casa in un’esperienza piacevole e rilassante. Da Mengoni Design, ci impegniamo a realizzare per voi un living 
                                            che rispecchi queste qualità, garantendo benessere e bellezza per ogni cliente.
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