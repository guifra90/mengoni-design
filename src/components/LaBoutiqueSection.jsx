import Image from 'next/image'

export default function LaBoutiqueSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenuto testuale */}
          <div className="space-y-8">
            {/* Testo corsivo in alto */}
            <p 
              className="tracking-wide"
              style={{
                fontFamily: 'Mrs Saint Delafield, cursive',
                color: '#d7cbb7',
                fontSize: '50px'
              }}
            >
              La Boutique
            </p>
            
            {/* Titolo principale */}
            <h2 
              className="tracking-wide"
              style={{
                fontFamily: 'Belleza, sans-serif',
                fontWeight: '500',
                textTransform: 'uppercase',
                color: '#000',
                fontSize: '46px',
                lineHeight: '1em'
              }}
            >
              MENGONI DESIGN
            </h2>
            
            {/* Descrizione */}
            <p 
              className="max-w-lg"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '16px',
                lineHeight: '1.62em',
                fontWeight: '300',
                color: '#595959',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              La tua Boutique di Design nel cuore del Mugello, dove la raffinatezza 
              incontra l'innovazione. Offriamo una selezione esclusiva di prodotti, 
              combinando icone classiche e tendenze contemporanee. Con la nostra 
              esperienza, trasformiamo i vostri spazi in ambienti unici e senza tempo, 
              riflettendo stile e personalità.
            </p>
            
            {/* Pulsante */}
            <div className="pt-4">
              <button 
                className="cursor-pointer"
                style={{
                  color: '#b59175',
                  backgroundColor: 'transparent',
                  border: '1px solid #b59175',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '13px',
                  lineHeight: '30px',
                  fontWeight: '400',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  borderRadius: '0',
                  outline: '0',
                  transition: 'color .2s ease-out, background-color .2s ease-out, border-color .2s ease-out',
                  padding: '10px 57px'
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
                CHI SIAMO
              </button>
            </div>
          </div>
          
          {/* Immagine */}
          <div className="relative">
            <div className="relative overflow-hidden" style={{ height: '900px', width: '600px', maxWidth: '100%' }}>
              <Image
                src="/chi-siamo.jpg"
                alt="Designer al lavoro con cataloghi e materiali"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}