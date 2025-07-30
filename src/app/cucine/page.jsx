'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Cucine() {

    const cucineImages = [
        {
            src: '/cucine/cucina-1.jpg',
            alt: 'Cucina moderna con isola centrale'
        },
        {
            src: '/cucine/cucina-2.jpg',
            alt: 'Cucina minimalista bianca'
        },
        {
            src: '/cucine/cucina-3.jpg',
            alt: 'Cucina in legno naturale'
        },
        {
            src: '/cucine/cucina-4.jpg',
            alt: 'Cucina con penisola design'
        },
        {
            src: '/cucine/cucina-5.jpg',
            alt: 'Cucina open space contemporanea'
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
                                        Cucine
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
                                            Stile, organizzazione e funzionalità: che sia moderna o classica,
                                            la cucina deve essere pratica e razionale. La scelta dello stile,
                                            sia esso classico o moderno, è solo il primo passo. Una cucina funzionale
                                            è fondamentale per rendere piacevole la quotidianità della famiglia.
                                            Da Mengoni Design, offriamo soluzioni per organizzare gli spazi e gli
                                            accessori in modo ottimale, garantendo che ogni angolo sia utilizzato al meglio.
                                        </p>

                                        <p>
                                            Immaginate una cucina dove ogni utensile ha il suo posto, dove i piani di lavoro
                                            sono sempre liberi e dove muoversi è semplice e intuitivo. La nostra esperienza ci
                                            permette di creare ambienti in cui la praticità si sposa con l’estetica, soddisfacendo
                                            le esigenze di chi ama cucinare e di chi vede la cucina come il cuore pulsante della casa.
                                        </p>

                                        <p>
                                            Da Mengoni Design, non solo troverete cucine eleganti e ben organizzate, ma anche una selezione
                                            di elettrodomestici delle migliori marche. Questi prodotti garantiscono efficienza, durabilità e
                                            tecnologia all’avanguardia, facilitando ogni operazione in cucina, dalla preparazione dei pasti alla pulizia.
                                        </p>

                                        <p>
                                            Che preferiate uno stile classico, con dettagli raffinati e materiali tradizionali, o uno moderno, con
                                            linee pulite e innovazioni tecnologiche, siamo qui per guidarvi nella scelta e nella configurazione ideale.
                                            Ogni cucina che progettiamo è unica, pensata per adattarsi alle esigenze specifiche di ogni famiglia.
                                        </p>

                                        <p>
                                            In conclusione, la cucina perfetta è quella che unisce stile, organizzazione e funzionalità, rendendo ogni
                                            momento trascorso al suo interno piacevole e produttivo. Da Mengoni Design, ci impegniamo a realizzare questo
                                            equilibrio per ogni cliente.
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