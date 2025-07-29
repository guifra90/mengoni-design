'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const PageLoader = ({ 
  isLoading, 
  onComplete, 
  duration = 2500,
  className = "" 
}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          // Exit più smooth con blur
          setTimeout(() => {
            onComplete?.()
          }, 300)
          return 100
        }
        // Caricamento più smooth e graduale
        const increment = Math.random() * 8 + 3
        return Math.min(prev + increment, 100)
      })
    }, 150)

    return () => clearInterval(interval)
  }, [isLoading, onComplete])

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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Container atomico centrale */}
      <div className="relative">
        
        {/* Lettera M centrale */}
        <motion.div 
          className="relative z-20 flex items-center justify-center"
          variants={letterVariants}
          initial="hidden"
          animate="visible"
        >
          <span 
            className="text-6xl sm:text-7xl lg:text-8xl font-medium text-black select-none"
            style={{ 
              fontFamily: 'Belleza, sans-serif',
              fontWeight: '500'
            }}
          >
            M
          </span>
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
          {/* Particella 1 */}
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
          {/* Particella 2 */}
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
          {/* Particella 3 */}
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
          {/* Particella 4 */}
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
          {/* Quadrato 1 */}
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
          {/* Quadrato 2 */}
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
          {/* Quadrato 3 */}
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
          {/* Particella esterna 1 */}
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
          {/* Particella esterna 2 */}
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
          {/* Quadrato esterno */}
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
          {/* Quadrato esterno 2 */}
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

export default PageLoader