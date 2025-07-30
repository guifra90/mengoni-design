'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Complementi() {

    const cucineImages = [
        {
            src: '/complementi/complementi-1.jpg',
            alt: 'Foto complementi'
        },
        {
            src: '/complementi/complementi-2.jpg',
            alt: 'Foto complementi'
        },
        {
            src: '/complementi/complementi-3.jpg',
            alt: 'Foto complementi'
        },
        {
            src: '/complementi/complementi-4.jpg',
            alt: 'Foto complementi'
        },
        {
            src: '/complementi/complementi-5.jpg',
            alt: 'Foto complementi'
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
                                        Complementi
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
                                            Sono i piccoli tocchi sapienti che definiscono lo stile di un ambiente. I complementi di arredo giocano un ruolo 
                                            fondamentale nel trasformare una stanza anonima in uno spazio accogliente e unico, riflettendo la personalità di 
                                            chi lo abita. Dettagli come cuscini, lampade, tappeti e oggetti decorativi possono fare la differenza, donando 
                                            carattere e armonia.                                        
                                        </p>
                                        
                                        <p>
                                            La scelta dei complementi di arredo deve essere fatta con cura, tenendo conto dello stile generale della casa e delle 
                                            esigenze pratiche. Un cuscino colorato può ravvivare un divano neutro, mentre una lampada di design può diventare il 
                                            punto focale di un soggiorno. Tappeti e tende aggiungono calore e texture, creando un’atmosfera accogliente e confortevole.
                                        </p>
                                        
                                        <p>
                                            Da Mengoni Interni, offriamo una vasta gamma di complementi di arredo per soddisfare ogni gusto e necessità. Ogni pezzo è 
                                            selezionato per la sua qualità e il suo design, garantendo che anche i più piccoli dettagli contribuiscano a creare ambienti 
                                            armoniosi e funzionali. I nostri esperti sono a disposizione per guidarvi nella scelta dei complementi giusti, aiutandovi a 
                                            trovare il giusto equilibrio tra estetica e praticità.
                                        </p>
                                        
                                        <p>
                                            Immaginate una camera da letto dove cuscini e coperte coordinati creano un nido accogliente, oppure un salotto dove un 
                                            tavolino elegante e una serie di vasi decorativi aggiungono un tocco di raffinatezza. Anche la cucina può beneficiare 
                                            dei giusti complementi: tovaglie, stoviglie e accessori coordinati rendono l’ambiente più invitante e funzionale.
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