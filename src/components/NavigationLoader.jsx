'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import PageLoader from './PageLoader'

export default function NavigationLoader({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Controlla se è la prima visita
    const isFirstVisit = !sessionStorage.getItem('visited')
    
    if (isFirstVisit) {
      sessionStorage.setItem('visited', 'true')
      return // Non mostrare loader sulla prima visita
    }

    // Mostra loader per navigazioni successive
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <PageLoader 
        isLoading={isLoading}
        onComplete={() => setIsLoading(false)}
        showFullText={false}
        duration={1200}
      />
      {children}
    </>
  )
}