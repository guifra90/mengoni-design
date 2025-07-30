'use client'

import Header from '@/components/Header'
import ShowroomGridSection from '@/components/ShowroomGridSection'
import Footer from '@/components/Footer'


export default function Showroom() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <ShowroomGridSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}