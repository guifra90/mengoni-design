export default function ContattaciMappaSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Contenuto testuale - Colonna sinistra */}
          <div className="space-y-6 sm:space-y-8">
            {/* Sottotitolo corsivo in alto */}
            <p 
              className="tracking-wide"
              style={{
                fontFamily: 'Mrs Saint Delafield, cursive',
                color: '#d7cbb7',
                fontSize: 'clamp(32px, 6vw, 50px)'
              }}
            >
              Contattaci
            </p>
            
            {/* Titolo principale */}
            <h2 
              className="leading-tight"
              style={{
                fontFamily: 'Belleza, sans-serif',
                fontWeight: '500',
                textTransform: 'uppercase',
                color: '#000',
                fontSize: 'clamp(24px, 5vw, 46px)',
                lineHeight: '1em'
              }}
            >
              CREIAMO QUALCOSA DI UNICO<br />
              INSIEME
            </h2>
            
            {/* Descrizione */}
            <p 
              className="leading-relaxed max-w-lg"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 18px)',
                color: '#6b7280',
                lineHeight: '1.6'
              }}
            >
              Ci fa sempre piacere sentire cosa ne pensate e rispondere a tutte le vostre 
              domande o necessità. La vostra soddisfazione è importante per noi, e ogni 
              commento ci aiuta a migliorare. Siamo qui per darvi una mano e rendere 
              la vostra esperienza con noi ancora migliore. Grazie per la vostra fiducia!
            </p>
            
            {/* Informazioni di contatto */}
            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              {/* Telefono */}
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span 
                  className="text-gray-600"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                >
                  055 845 6274
                </span>
              </div>
              
              {/* Cellulari */}
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zM7 18h10M12 15h.01" />
                </svg>
                <div className="flex flex-col space-y-1">
                  <span 
                    className="text-gray-600"
                    style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                  >
                    +39 340 5043479
                  </span>
                  <span 
                    className="text-gray-600"
                    style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                  >
                    +39 349 604 4948
                  </span>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span 
                  className="text-gray-600 break-all sm:break-normal"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                >
                  info@mengonidesign.it
                </span>
              </div>
            </div>
            
            {/* Pulsante */}
            <div className="pt-4 sm:pt-6">
              <a 
                href="mailto:info@mengonidesign.it"
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
                INVIA MESSAGGIO
              </a>
            </div>
          </div>
          
          {/* Mappa Google Maps - Colonna destra */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5744.527547546132!2d11.390420412831842!3d43.953908270968775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132b031c8db47267%3A0x589cdd50079700dc!2sViale%20Generale%20Pecori%20Giraldi%2C%2024%2C%2050032%20Borgo%20San%20Lorenzo%20FI!5e0!3m2!1sit!2sit!4v1753792190255!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mengoni Design Location"
            ></iframe>
            
            {/* Overlay per stile personalizzato (opzionale) */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}