'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Componente wrapper per animazioni con Framer Motion
 * 
 * @param {React.ReactNode} children - Contenuto da animare
 * @param {number} delay - Ritardo in millisecondi (default: 0)
 * @param {string} variant - Tipo di animazione (default, elegant, slideLeft, slideRight, fade)
 * @param {string} className - Classi CSS aggiuntive
 * @param {object} customVariants - Varianti personalizzate per override
 * @param {object} viewportOptions - Opzioni personalizzate per useInView
 */
const AnimatedSection = ({ 
  children, 
  delay = 0, 
  variant = "default",
  className = "",
  customVariants = null,
  viewportOptions = {}
}) => {
  const ref = useRef(null)
  
  // Opzioni default per useInView con possibilità di override
  const defaultViewportOptions = {
    once: true, 
    margin: "-80px 0px -80px 0px",
    amount: 0.15,
    ...viewportOptions
  }
  
  const isInView = useInView(ref, defaultViewportOptions)

  // Varianti di animazione predefinite
  const predefinedVariants = {
    default: {
      hidden: { opacity: 0, y: 60, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 1.2,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    elegant: {
      hidden: { opacity: 0, y: 80, scale: 0.92 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 1.4,
          delay: delay / 1000,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 60, rotateY: -15 },
      visible: { 
        opacity: 1, 
        x: 0, 
        rotateY: 0,
        transition: {
          duration: 1.3,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: -60, rotateY: 15 },
      visible: { 
        opacity: 1, 
        x: 0, 
        rotateY: 0,
        transition: {
          duration: 1.3,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    fade: {
      hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
      visible: { 
        opacity: 1, 
        scale: 1, 
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.8,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    slideUp: {
      hidden: { opacity: 0, y: 100 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 1.0,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    slideDown: {
      hidden: { opacity: 0, y: -100 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 1.0,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    }
  }

  // Usa varianti personalizzate se fornite, altrimenti usa quelle predefinite
  const variants = customVariants || predefinedVariants[variant] || predefinedVariants.default

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection