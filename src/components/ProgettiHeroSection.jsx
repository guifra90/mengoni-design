import Image from 'next/image'

export default function ProgettiHeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Immagine di sfondo */}
      <div className="absolute inset-0">
        <Image
          src="/banner-progetti.jpg"
          alt="Cucina moderna con design contemporaneo"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay scuro per migliorare la leggibilità del testo */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Contenuto sovrapposto */}
      <div className="relative z-10 h-full flex items-center justify-center sm:justify-end px-4 sm:px-6 md:pr-12 lg:pr-24">
        <div className="text-left sm:text-right text-white max-w-4xl w-full sm:w-auto">
          {/* Testo "New" in corsivo */}
          <p 
            className="mb-4 sm:mb-6 opacity-90"
            style={{
              fontFamily: 'Mrs Saint Delafield, cursive',
              color: '#d7cbb7',
              fontSize: 'clamp(32px, 6vw, 50px)'
            }}
          >
            New
          </p>
          
          {/* Titolo principale */}
          <h1 
            className="mb-8 sm:mb-12 lg:mb-16 leading-tight tracking-wide"
            style={{
              fontFamily: 'Belleza, sans-serif',
              fontWeight: '500',
              textTransform: 'uppercase',
              color: '#ffffff',
              fontSize: 'clamp(28px, 6vw, 46px)',
              lineHeight: '1.1em'
            }}
          >
            GUARDA I NOSTRI<br />
            PROGETTI DI ARREDAMENTO
          </h1>
          
          {/* Pulsante allineato con il testo */}
          <div className="text-left sm:text-right">
            <button 
              className="cursor-pointer inline-block"
              style={{
                color: '#fff',
                backgroundColor: 'transparent',
                border: '1px solid #fff',
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
                e.target.style.color = '#b59175';
                e.target.style.backgroundColor = '#fff';
                e.target.style.borderColor = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#fff';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = '#fff';
              }}
            >
              SCOPRI DI PIÙ
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}