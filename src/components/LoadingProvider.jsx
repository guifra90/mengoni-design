'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

// Context
const LoadingContext = createContext()

export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider')
  }
  return context
}

// PageLoader integrato
const PageLoader = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete?.()
          }, 300)
          return 100
        }
        const increment = Math.random() * 8 + 3
        return Math.min(prev + increment, 100)
      })
    }, 150)

    return () => clearInterval(interval)
  }, [isLoading, onComplete])

  // Blocca lo scroll quando il loader è attivo - RIMOSSO dal PageLoader
  // Ora è gestito centralmente nel Provider

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      filter: "blur(20px)",
      scale: 1.1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const letterVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        duration: 1.2
      }
    }
  }

  if (!isLoading) return null

  return (
    <motion.div 
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-white loader-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="loader"
    >
      {/* Container atomico centrale */}
      <div className="relative">
        
        {/* Logo centrale PNG */}
        <motion.div 
          className="relative z-20 flex items-center justify-center"
          variants={letterVariants}
          initial="hidden"
          animate="visible"
        >
          <img 
            src="/logo-loader.png" 
            alt="Mengoni Design Logo"
            className="w-12 h-16 sm:w-16 sm:h-20 lg:w-20 lg:h-24 object-contain"
          />
        </motion.div>

        {/* Orbita 1 - Particelle piccole */}
        <motion.div 
          className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          animate={{ rotate: 360 }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity
          }}
        >
          <motion.div 
            className="absolute top-0 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full transform -translate-x-1/2 translate-y-1"
            animate={{
              scale: [1, 0.6, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1.25
            }}
          />
          <motion.div 
            className="absolute right-0 top-1/2 w-1 h-1 bg-gray-400 rounded-full transform translate-x-1 -translate-y-1/2"
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.625
            }}
          />
          <motion.div 
            className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-x-1 -translate-y-1/2"
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1.875
            }}
          />
        </motion.div>

        {/* Orbita 2 - Quadrati */}
        <motion.div 
          className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          animate={{ rotate: -360 }}
          transition={{
            duration: 7,
            ease: "linear",
            repeat: Infinity
          }}
        >
          <motion.div 
            className="absolute top-0 left-1/2 w-3 h-3 bg-black transform -translate-x-1/2 -translate-y-1.5 rotate-45"
            animate={{
              rotate: [45, 90, 45],
              scale: [0.8, 1.1, 0.8],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/2 w-2 h-2 bg-gray-700 transform -translate-x-1/2 translate-y-1 rotate-45"
            animate={{
              rotate: [45, 135, 45],
              scale: [1, 0.7, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1.75
            }}
          />
          <motion.div 
            className="absolute right-0 top-1/2 w-2.5 h-2.5 bg-gray-500 transform translate-x-1.5 -translate-y-1/2 rotate-45"
            animate={{
              rotate: [45, 180, 45],
              scale: [0.9, 1.2, 0.9],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.875
            }}
          />
        </motion.div>

        {/* Orbita 3 - Particelle esterne */}
        <motion.div 
          className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          animate={{ rotate: 360 }}
          transition={{
            duration: 9,
            ease: "linear",
            repeat: Infinity
          }}
        >
          <motion.div 
            className="absolute top-0 left-1/2 w-1 h-1 bg-gray-300 rounded-full transform -translate-x-1/2 -translate-y-0.5"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full transform -translate-x-1/2 translate-y-0.5"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.3, 0.8]
            }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 2.25
            }}
          />
          <motion.div 
            className="absolute right-0 top-1/2 w-2 h-2 bg-gray-600 transform translate-x-1 -translate-y-1/2 rotate-45"
            animate={{
              rotate: [45, 225, 45],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1.125
            }}
          />
          <motion.div 
            className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black transform -translate-x-1 -translate-y-1/2 rotate-45"
            animate={{
              rotate: [45, 315, 45],
              opacity: [0.6, 1, 0.6],
              scale: [0.7, 1.1, 0.7]
            }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 3.375
            }}
          />
        </motion.div>

        {/* Tracce orbitali sottili più smooth */}
        <motion.div 
          className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border border-gray-100 rounded-full opacity-30"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border border-gray-100 rounded-full opacity-20"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border border-gray-100 rounded-full opacity-10"
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
    </motion.div>
  )
}

// Provider principale
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false)
      if (pathname === '/') {
        setIsLoading(true)
        document.body.classList.add('page-loading')
      }
      return
    }

    setIsLoading(true)
    document.body.classList.add('page-loading')
  }, [pathname, isInitialLoad])

  // Blocco scroll centralizzato nel Provider
  useEffect(() => {
    if (isLoading) {
      // Salva posizione scroll
      const scrollY = window.pageYOffset
      
      // Aggiungi classe CSS anche a HTML
      document.documentElement.classList.add('page-loading')
      
      // Blocca con position fixed più aggressivo
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100vw'
      document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      document.documentElement.style.height = '100vh'
      document.documentElement.style.position = 'fixed'
      
      // Magic Mouse / trackpad specifico
      let lastScrollTime = 0
      const preventDefault = (e) => {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        
        // Forza scroll alla posizione salvata (per Magic Mouse)
        const now = Date.now()
        if (now - lastScrollTime > 10) { // Throttle
          window.scrollTo(0, 0)
          lastScrollTime = now
        }
        
        return false
      }
      
      const preventKeys = (e) => {
        const keys = { 37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1 }
        if (keys[e.keyCode]) {
          preventDefault(e)
          return false
        }
      }
      
      // Eventi wheel specifici per Magic Mouse
      const preventWheel = (e) => {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        
        // Reset scroll position immediatamente
        requestAnimationFrame(() => {
          window.scrollTo(0, 0)
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
        })
        
        return false
      }
      
      // Listener multipli con tutte le opzioni
      const options = { passive: false, capture: true }
      
      // Standard events
      window.addEventListener('wheel', preventWheel, options)
      window.addEventListener('scroll', preventDefault, options)
      document.addEventListener('wheel', preventWheel, options)
      document.addEventListener('scroll', preventDefault, options)
      
      // Touch events
      window.addEventListener('touchmove', preventDefault, options)
      document.addEventListener('touchmove', preventDefault, options)
      document.addEventListener('touchstart', preventDefault, options)
      document.addEventListener('touchend', preventDefault, options)
      
      // Keyboard
      document.addEventListener('keydown', preventKeys, { capture: true })
      
      // Magic Mouse specifici (WebKit)
      document.addEventListener('mousewheel', preventWheel, options)
      document.addEventListener('DOMMouseScroll', preventWheel, options)
      
      // Forza reset continuo per Magic Mouse
      const resetInterval = setInterval(() => {
        if (window.scrollY !== 0 || document.documentElement.scrollTop !== 0) {
          window.scrollTo(0, 0)
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
        }
      }, 16) // 60fps
      
      return () => {
        clearInterval(resetInterval)
        
        const scrollY = document.body.style.top
        
        // Rimuovi classe da HTML
        document.documentElement.classList.remove('page-loading')
        
        // Rimuovi tutti i listener
        window.removeEventListener('wheel', preventWheel, options)
        window.removeEventListener('scroll', preventDefault, options)
        document.removeEventListener('wheel', preventWheel, options)
        document.removeEventListener('scroll', preventDefault, options)
        
        window.removeEventListener('touchmove', preventDefault, options)
        document.removeEventListener('touchmove', preventDefault, options)
        document.removeEventListener('touchstart', preventDefault, options)
        document.removeEventListener('touchend', preventDefault, options)
        
        document.removeEventListener('keydown', preventKeys, { capture: true })
        document.removeEventListener('mousewheel', preventWheel, options)
        document.removeEventListener('DOMMouseScroll', preventWheel, options)
        
        // Ripristina stili
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.width = ''
        document.body.style.height = ''
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
        document.documentElement.style.height = ''
        document.documentElement.style.position = ''
        
        // Ripristina scroll
        if (scrollY) {
          window.scrollTo({
            top: parseInt(scrollY || '0', 10) * -1,
            behavior: 'instant'
          })
        }
      }
    }
  }, [isLoading])

  const setLoadingState = (loading) => {
    setIsLoading(loading)
    if (loading) {
      document.body.classList.add('page-loading')
    } else {
      document.body.classList.remove('page-loading')
    }
  }

  const value = {
    isLoading,
    setLoading: setLoadingState
  }

  return (
    <LoadingContext.Provider value={value}>
      <PageLoader 
        isLoading={isLoading}
        onComplete={() => setLoadingState(false)}
      />
      <div className="page-content">
        {children}
      </div>

      <style jsx global>{`
        .page-content {
          opacity: 1;
          visibility: visible;
          transition: opacity 0.3s ease-out;
        }

        body.page-loading .page-content {
          opacity: 0;
          visibility: hidden;
        }

        /* Blocco scroll CSS aggressivo */
        body.page-loading {
          overflow: hidden !important;
          position: fixed !important;
          height: 100vh !important;
          width: 100vw !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
        }

        html.page-loading {
          overflow: hidden !important;
          height: 100vh !important;
          width: 100vw !important;
        }

        /* Blocca tutti gli elementi scrollabili */
        body.page-loading *:not(.loader-container):not(.loader-container *) {
          overflow: hidden !important;
          -webkit-overflow-scrolling: auto !important;
          overflow-scrolling: auto !important;
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          pointer-events: none !important;
        }

        /* Permetti tutto nel loader */
        body.page-loading .loader-container,
        body.page-loading .loader-container * {
          pointer-events: auto !important;
          overflow: visible !important;
        }

        /* Blocca momentum scrolling iOS */
        body.page-loading {
          -webkit-overflow-scrolling: auto !important;
          touch-action: none !important;
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          -khtml-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
        }
      `}</style>
    </LoadingContext.Provider>
  )
}