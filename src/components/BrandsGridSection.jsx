'use client'

import Image from 'next/image'

export default function BrandsGridSection() {
  const brands = [
    { name: "Alf DaFrè", logo: "/brands/alf-dafre.png" },
    { name: "Ciao Cucine", logo: "/brands/ciao-cucine.png" },
    { name: "Cesar", logo: "/brands/cesar.png" },
    { name: "Twils", logo: "/brands/twils.png" },
    
    { name: "Martinelli Luce", logo: "/brands/martinelli-luce.png" },
    { name: "Gurian", logo: "/brands/gurian.png" },
    { name: "Sangiacomo", logo: "/brands/sangiacomo.png" },
    { name: "Miniforms", logo: "/brands/miniforms.png" },
    
    { name: "Icone", logo: "/brands/icone.png" },
    { name: "Extendo", logo: "/brands/extendo.png" },
    { name: "Capodopera", logo: "/brands/capodopera.png" },
    { name: "Cubo Design", logo: "/brands/cubo-design.png" },
    
    { name: "Devina Nais", logo: "/brands/devina-nais.png" },
    { name: "Midj", logo: "/brands/midj.png" },
    { name: "Infiniti", logo: "/brands/infiniti.png" },
    { name: "Saba Italia", logo: "/brands/saba.png" }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          {/* Grid dei brand */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 gap-y-8 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 sm:h-16 md:h-20 group cursor-pointer"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={140}
                    height={60}
                    className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 140px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}