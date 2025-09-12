'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { CarouselItem } from '@/types'

const carouselData: CarouselItem[] = [
  {
    id: '1',
    title: 'WAN 2.2',
    subtitle: 'WAN 2.2 Image generation',
    description: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-high image quality.',
    backgroundImage: '/images/wan-bg.jpg',
    tag: 'FEATURED MODEL',
    tagColor: 'bg-white/20',
    textColor: 'text-white'
  },
  {
    id: '2',
    title: 'Open Sour',
    subtitle: 'FLUX1 Krea',
    description: 'Write-real is built empowered by our FLUX1 Krea model. Quick-deploy. Download it for our model weights and fine-tune Replicate Ristosci report of fun.',
    backgroundImage: '/images/opensour-bg.jpg',
    tag: 'OG MODEL',
    tagColor: 'bg-blue-600',
    textColor: 'text-white'
  },
  {
    id: '3',
    title: 'FLUX1',
    subtitle: 'Advanced Generation',
    description: 'Experience the power of FLUX1 for creating stunning visuals with precision and creativity.',
    backgroundImage: '/images/flux-bg.jpg',
    tag: 'NEW MODEL',
    tagColor: 'bg-purple-600',
    textColor: 'text-white'
  },
  {
    id: '4',
    title: 'AI Studio',
    subtitle: 'Creative Suite',
    description: 'Advanced AI-powered creative tools for professional content creation and artistic expression.',
    backgroundImage: '/images/ai-bg.jpg',
    tag: 'CREATIVE TOOLS',
    tagColor: 'bg-green-600',
    textColor: 'text-white'
  },
  {
    id: '5',
    title: 'Real-time',
    subtitle: 'Live Generation',
    description: 'Generate content in real-time with instant preview and feedback for rapid iteration.',
    backgroundImage: '/images/real-bg.jpg',
    tag: 'LIVE MODE',
    tagColor: 'bg-red-600',
    textColor: 'text-white'
  },
  {
    id: '6',
    title: 'Enhanced',
    subtitle: 'Quality Boost',
    description: 'Enhance and upscale your creations with advanced AI algorithms and quality improvements.',
    backgroundImage: '/images/robo-bg.jpg',
    tag: 'ENHANCEMENT',
    tagColor: 'bg-yellow-600',
    textColor: 'text-white'
  },
  {
    id: '7',
    title: 'StyleGAN',
    subtitle: 'Style Transfer',
    description: 'Transform images with artistic styles using advanced neural style transfer technology.',
    backgroundImage: '/images/mind-bg.jpg',
    tag: 'STYLE MODEL',
    tagColor: 'bg-pink-600',
    textColor: 'text-white'
  },
  {
    id: '8',
    title: 'DeepArt',
    subtitle: 'Artistic Creation',
    description: 'Create stunning artwork and artistic interpretations with AI-powered creative tools.',
    backgroundImage: '/images/fine-bg.jpg',
    tag: 'ART GENERATION',
    tagColor: 'bg-indigo-600',
    textColor: 'text-white'
  },
  {
    id: '9',
    title: 'ProGen',
    subtitle: 'Professional Suite',
    description: 'Professional-grade generation tools for commercial and enterprise applications.',
    backgroundImage: '/images/future-bg.jpg',
    tag: 'PRO TOOLS',
    tagColor: 'bg-gray-600',
    textColor: 'text-white'
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 1.5, spacing: 24 }
      },
      '(min-width: 1024px)': {
        slides: { perView: 1.6, spacing: 32 }
      }
    },
    slides: { perView: 1, spacing: 16 }
  })

  return (
    <section className="relative pt-16 pb-6 px-4">
      <div className="relative">
        {/* Navigation buttons (left/right over slides) */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/20 backdrop-blur border border-white/20 hover:bg-black/30 transition-colors opacity-0 hover:opacity-100 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/20 backdrop-blur border border-white/20 hover:bg-black/30 transition-colors opacity-0 hover:opacity-100 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>

        {/* Slider */}
        <div className="group">
          <div ref={sliderRef} className="keen-slider">
            {carouselData.map((item) => (
              <div key={item.id} className="keen-slider__slide">
                <div className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group/card">
                  {/* Background image with proper overlay */}
                  <div className="absolute inset-0">
                    <img 
                      src={item.backgroundImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30" />
                  </div>
                  
                  {/* Content overlay */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Top left tag */}
                    {item.tag && (
                      <div className="absolute top-6 left-6">
                        <span className="inline-block px-3 py-1.5 rounded-md text-xs font-medium uppercase tracking-wide text-white bg-white/20 backdrop-blur">
                          {item.tag}
                        </span>
                      </div>
                    )}
                    
                    {/* Center title - positioned in middle of card */}
                    <div className="flex-1 flex items-center justify-center">
                      <h2 className={`text-6xl font-bold ${item.textColor} tracking-tight text-center`}>
                        {item.title}
                      </h2>
                    </div>
                    
                    {/* Bottom content */}
                    <div className="flex justify-between items-end">
                      {/* Bottom left - description */}
                      <div className="max-w-xs">
                        <h3 className={`text-lg font-semibold mb-2 ${item.textColor}`}>
                          {item.subtitle}
                        </h3>
                        <p className={`text-sm leading-relaxed ${item.textColor}/80 mb-4`}>
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Bottom right - button */}
                      <div>
                        <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm">
                          Try {item.title}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator - 9 dots centered */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-1.5">
            {Array.from({ length: 9 }).map((_, idx) => (
              <button
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 $${ // safe guard: keep original behavior
                  idx === currentSlide 
                    ? 'bg-white w-4' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows - BOTH at right edge (< >) */}
        <div className="absolute right-4 top-full mt-2 flex space-x-1">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="p-2 mt-1 w-8 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 block translate-y-[-40px]"
            aria-label="Previous slide (small)"
          >
            <ChevronLeft className="h-4 w-4 text-black" />
          </button>
          
          <button
            onClick={() => instanceRef.current?.next()}
            className="p-2 mt-1 w-8 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 translate-y-[-40px]"
            aria-label="Next slide (small)"
          >
            <ChevronRight className="h-4 w-4 text-black" />
          </button>
        </div>
      </div>
    </section>
  )
}
