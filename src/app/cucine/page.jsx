'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'


export default function Cucine() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
            <Header isScrolled={isScrolled} />
            <main className="pt-20">
                <section className="pt-6 pb-2 sm:py-12 lg:py-20 xl:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">

                            {/* Colonna Sinistra - Immagini */}
                            <div className="space-y-6 sm:space-y-8 lg:space-y-8">
                                {cucineImages.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className={`relative overflow-hidden ${index === 0 ? 'mt-0' : ''}`}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{
                                            duration: 0.8,
                                            delay: index * 0.15,
                                            ease: "easeOut"
                                        }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className="relative w-full aspect-[2/3] overflow-hidden"
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover object-center"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Colonna Destra - Contenuto */}
                            <div className="lg:pl-8 xl:pl-12">
                                <div className="lg:sticky lg:top-32">

                                    {/* Titolo */}
                                    <motion.h1
                                        className="mb-6 sm:mb-8"
                                        style={{
                                            fontFamily: 'Belleza, sans-serif',
                                            fontWeight: '500',
                                            textTransform: 'uppercase',
                                            color: '#000',
                                            fontSize: 'clamp(28px, 5vw, 48px)',
                                            lineHeight: '1em'
                                        }}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    >
                                        Cucine
                                    </motion.h1>

                                    {/* Testo Contenuto */}
                                    <motion.div
                                        className="space-y-4 sm:space-y-6"
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    >
                                        <p
                                            style={{
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '16px',
                                                lineHeight: '1.62em',
                                                fontWeight: '300',
                                                color: '#595959'
                                            }}
                                        >
                                            
                                            Stile, organizzazione e funzionalità: che sia moderna o classica, la cucina deve essere pratica e razionale. La scelta dello stile, sia esso classico o moderno, è solo il primo passo. Una cucina funzionale è fondamentale per rendere piacevole la quotidianità della famiglia. Da Mengoni Design, offriamo soluzioni per organizzare gli spazi e gli accessori in modo ottimale, garantendo che ogni angolo sia utilizzato al meglio.<br /><br />
                                            Immaginate una cucina dove ogni utensile ha il suo posto, dove i piani di lavoro sono sempre liberi e dove muoversi è semplice e intuitivo. La nostra esperienza ci permette di creare ambienti in cui la praticità si sposa con l’estetica, soddisfacendo le esigenze di chi ama cucinare e di chi vede la cucina come il cuore pulsante della casa.<br /><br />
                                            Da Mengoni Design, non solo troverete cucine eleganti e ben organizzate, ma anche una selezione di elettrodomestici delle migliori marche. Questi prodotti garantiscono efficienza, durabilità e tecnologia all’avanguardia, facilitando ogni operazione in cucina, dalla preparazione dei pasti alla pulizia.<br /><br />
                                            Che preferiate uno stile classico, con dettagli raffinati e materiali tradizionali, o uno moderno, con linee pulite e innovazioni tecnologiche, siamo qui per guidarvi nella scelta e nella configurazione ideale. Ogni cucina che progettiamo è unica, pensata per adattarsi alle esigenze specifiche di ogni famiglia.<br /><br />
                                            In conclusione, la cucina perfetta è quella che unisce stile, organizzazione e funzionalità, rendendo ogni momento trascorso al suo interno piacevole e produttivo. Da Mengoni Design, ci impegniamo a realizzare questo equilibrio per ogni cliente.<br /><br />

                                        </p>

                                    </motion.div>

                                    {/* CTA opzionale */}
                                    <motion.div
                                        className="mt-8 sm:mt-10"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                    >
                                        <motion.button
                                            className="inline-flex items-center px-8 py-3 border border-gray-300 hover:border-gray-900 transition-colors duration-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            style={{
                                                fontFamily: 'Belleza, sans-serif',
                                                fontWeight: '500',
                                                textTransform: 'uppercase',
                                                fontSize: '14px',
                                                letterSpacing: '0.05em',
                                                color: '#000'
                                            }}
                                        >
                                            Richiedi preventivo
                                        </motion.button>
                                    </motion.div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <AnimatedSection delay={100} variant="fade">
                <Footer />
            </AnimatedSection>

        </div>
    )
}