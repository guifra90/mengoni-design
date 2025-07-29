import { useState, useEffect, useRef } from 'react'

export default function ProcessoValoriSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedBars, setAnimatedBars] = useState({
    brand: 0,
    originalita: 0,
    esperienza: 0,
    fiducia: 0,
    creativita: 0,
    servizi: 0
  })
  const [animatedValues, setAnimatedValues] = useState({
    brand: 0,
    originalita: 0,
    esperienza: 0,
    fiducia: 0,
    creativita: 0,
    servizi: 0
  })
  
  const sectionRef = useRef(null)
  
  const targetValues = {
    brand: 85,
    originalita: 90,
    esperienza: 90,
    fiducia: 95,
    creativita: 90,
    servizi: 90
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateAll()
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateAll = () => {
    Object.keys(targetValues).forEach((key, index) => {
      setTimeout(() => {
        const targetValue = targetValues[key]
        const duration = 2000 // 2 secondi
        const startTime = Date.now()
        
        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          
          // Easing function (ease-out)
          const easedProgress = 1 - Math.pow(1 - progress, 3)
          const currentValue = Math.round(easedProgress * targetValue)
          const currentBarWidth = easedProgress * targetValue
          
          // Aggiorna sia le barre che i numeri
          setAnimatedBars(prev => ({
            ...prev,
            [key]: currentBarWidth
          }))
          
          setAnimatedValues(prev => ({
            ...prev,
            [key]: currentValue
          }))
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        
        requestAnimationFrame(animate)
      }, index * 200)
    })
  }

  const ProgressBar = ({ label, value, barWidth }) => (
    <div className="progress-item group">
      <div className="flex justify-between items-baseline mb-4">
        <h3 
          className="tracking-[0.2em] text-gray-800 transition-colors duration-300 group-hover:text-gray-900"
          style={{
            fontFamily: 'Belleza, sans-serif',
            fontWeight: '400',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
          }}
        >
          {label}
        </h3>
        <span 
          className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800"
          style={{
            fontFamily: 'Belleza, sans-serif',
            fontWeight: '400',
            fontSize: '13px'
          }}
        >
          {value}%
        </span>
      </div>
      
      {/* Container della barra con effetto hover */}
      <div className="relative">
        {/* Barra di background */}
        <div 
          className="w-full bg-gray-100 relative overflow-hidden transition-colors duration-500 group-hover:bg-gray-150"
          style={{ height: '1px' }}
        >
          {/* Barra di progresso */}
          <div 
            className="absolute top-0 left-0 bg-gray-800 transition-colors duration-300 group-hover:bg-gray-900"
            style={{
              width: `${barWidth}%`,
              height: '1px',
              transition: 'none' // Rimuovo la transizione CSS per usare solo requestAnimationFrame
            }}
          ></div>
        </div>
      </div>
    </div>
  )

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            {/* Sottotitolo "Processo" */}
            <p 
              className="mb-3"
              style={{
                fontFamily: 'Mrs Saint Delafield, cursive',
                color: '#d7cbb7',
                fontSize: '50px'
              }}
            >
              Processo
            </p>
            
            {/* Titolo principale */}
            <h2 
              style={{
                fontFamily: 'Belleza, sans-serif',
                fontWeight: '500',
                textTransform: 'uppercase',
                color: '#000',
                fontSize: '46px',
                lineHeight: '1em'
              }}
            >
              GUIDATI DAI NOSTRI VALORI<br />
              ORIGINALI
            </h2>
          </div>
          
          {/* Grid delle barre di progresso */}
          <div className="grid lg:grid-cols-2 gap-x-32 gap-y-16">
            {/* Colonna sinistra */}
            <div className="space-y-16">
              <ProgressBar 
                label="BRAND" 
                value={animatedValues.brand} 
                barWidth={animatedBars.brand}
              />
              <ProgressBar 
                label="ORIGINALITÀ" 
                value={animatedValues.originalita} 
                barWidth={animatedBars.originalita}
              />
              <ProgressBar 
                label="ESPERIENZA" 
                value={animatedValues.esperienza} 
                barWidth={animatedBars.esperienza}
              />
            </div>
            
            {/* Colonna destra */}
            <div className="space-y-16">
              <ProgressBar 
                label="FIDUCIA" 
                value={animatedValues.fiducia} 
                barWidth={animatedBars.fiducia}
              />
              <ProgressBar 
                label="CREATIVITÀ" 
                value={animatedValues.creativita} 
                barWidth={animatedBars.creativita}
              />
              <ProgressBar 
                label="SERVIZI" 
                value={animatedValues.servizi} 
                barWidth={animatedBars.servizi}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}