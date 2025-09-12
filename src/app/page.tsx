import { Header } from '@/components/Header'
import { HeroCarousel } from '@/components/HeroCarousel'
import { GenerateSection } from '@/components/GenerateSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col w-full max-w-[1600px] mx-auto">
      <Header />
      
      <main className="flex-1 w-full">
        {/* Full width carousel section */}
        <div className="w-full">
          <HeroCarousel />
        </div>
        
        {/* Full width generate section */}
        <div className="w-full">
          <GenerateSection />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}