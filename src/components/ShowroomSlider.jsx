'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default function ShowroomSlider() {
  const showroomSlides = [
    {
      image: '/slider-showroom/slide1.jpg',
      title: 'Illuminazione',
      description: 'Ambienti luminosi con design contemporaneo'
    },
    {
      image: '/slider-showroom/slide2.jpg',
      title: 'Complementi',
      description: 'Funzionalità e stile in perfetto equilibrio'
    },
    {
      image: '/slider-showroom/slide3.jpg',
      title: 'Camerette',
      description: 'Comfort e raffinatezza per il vostro riposo'
    },
    {
      image: '/slider-showroom/slide4.jpg',
      title: 'Zona notte',
      description: 'Comfort e raffinatezza per il vostro riposo'
    },
    {
      image: '/slider-showroom/slide5.jpg',
      title: 'Living',
      description: 'Comfort e raffinatezza per il vostro riposo'
    },
    {
      image: '/slider-showroom/slide6.jpg',
      title: 'Cucina',
      description: 'Comfort e raffinatezza per il vostro riposo'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p 
              className="mb-2 tracking-widest uppercase"
              style={{
                fontFamily: 'Mrs Saint Delafield, cursive',
                color: '#d7cbb7',
                fontSize: '50px',
                textTransform: 'none'
              }}
            >
              Mengoni Design
            </p>
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
              IL NOSTRO SHOWROOM
            </h2>
          </div>
          <div className="hidden md:flex space-x-4">
            <motion.button
              className="swiper-button-prev-custom w-12 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <svg 
                className="w-10 h-3 pointer-events-none" 
                xmlns="http://www.w3.org/2000/svg" 
                x="0px" 
                y="0px" 
                viewBox="0 0 38 12" 
                xmlSpace="preserve"
                fill="currentColor"
              >
                <polygon points="38,5.37 1.5,5.37 8.21,0.54 7.87,0 0,5.68 7.61,12 7.98,11.49 1.4,6.02 38,6.02" />
              </svg>
            </motion.button>
            <motion.button
              className="swiper-button-next-custom w-12 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <svg 
                className="w-10 h-3 transform rotate-180 pointer-events-none" 
                xmlns="http://www.w3.org/2000/svg" 
                x="0px" 
                y="0px" 
                viewBox="0 0 38 12" 
                xmlSpace="preserve"
                fill="currentColor"
              >
                <polygon points="38,5.37 1.5,5.37 8.21,0.54 7.87,0 0,5.68 7.61,12 7.98,11.49 1.4,6.02 38,6.02" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <div className="container mx-auto">
          <div className="pl-6 -mr-6 lg:-mr-[calc((100vw-1280px)/2)] overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView="auto"
              loop={true}
              speed={600}
              grabCursor={true}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 'auto',
                  spaceBetween: 24,
                },
              }}
              className="!overflow-visible"
            >
              {showroomSlides.map((slide, index) => (
                <SwiperSlide 
                  key={index} 
                  style={{ width: '580px' }}
                  className="!h-auto"
                >
                  <div className="group cursor-pointer relative">
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative overflow-hidden" 
                      style={{ height: '800px', width: '580px' }}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        sizes="580px"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-8">
                        <h3
                          className="transform translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                          style={{
                            fontFamily: 'Belleza, sans-serif',
                            fontWeight: '500',
                            textTransform: 'uppercase',
                            color: 'white',
                            fontSize: '25px',
                            lineHeight: '1.12em',
                            margin: '0',
                            wordWrap: 'break-word',
                            textAlign: 'left'
                          }}
                        >
                          {slide.title}
                        </h3>
                      </div>
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center mt-8 space-x-8">
          <motion.button
            className="swiper-button-prev-mobile w-12 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <svg 
              className="w-10 h-3 pointer-events-none" 
              xmlns="http://www.w3.org/2000/svg" 
              x="0px" 
              y="0px" 
              viewBox="0 0 38 12" 
              xmlSpace="preserve"
              fill="currentColor"
            >
              <polygon points="38,5.37 1.5,5.37 8.21,0.54 7.87,0 0,5.68 7.61,12 7.98,11.49 1.4,6.02 38,6.02" />
            </svg>
          </motion.button>
          <motion.button
            className="swiper-button-next-mobile w-12 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <svg 
              className="w-10 h-3 transform rotate-180 pointer-events-none" 
              xmlns="http://www.w3.org/2000/svg" 
              x="0px" 
              y="0px" 
              viewBox="0 0 38 12" 
              xmlSpace="preserve"
              fill="currentColor"
            >
              <polygon points="38,5.37 1.5,5.37 8.21,0.54 7.87,0 0,5.68 7.61,12 7.98,11.49 1.4,6.02 38,6.02" />
            </svg>
          </motion.button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-prev-mobile,
        .swiper-button-next-mobile {
          position: static !important;
        }
        
        .swiper-slide {
          width: auto !important;
        }
      `}</style>
    </section>
  )
}