'use client'

import { Scale, CreditCard } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-auto w-full">
      {/* Links above the dark band */}
      <div className="w-full px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Gallery link (larger, no icon) */}
          <div className="flex items-center">
            <button className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors block translate-y-5 mb-1">
              Gallery
            </button>
          </div>

          {/* Right - Legal and Pricing with icons */}
          <div className="flex items-center space-x-2 text-sm text-foreground">
            <button className="hover:text-muted-foreground transition-colors flex items-center space-x-1">
              <Scale className="h-3 w-3 text-black dark:text-white block translate-y-3" />
              <span className="font-normal text-[10px] block translate-y-3">Legal</span>
            </button>
            <button className="hover:text-muted-foreground transition-colors flex items-center space-x-1">
              <CreditCard className="h-3 w-3 text-black dark:text-white block translate-y-3" />
              <span className="font-normal text-[10px] block translate-y-3">Pricing</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dark band at bottom - using proper dark navy color */}
      <div className="bg-[#2b2b2b] dark:bg-[#1f1f1f] w-full">
        <div className="px-4 py-4 w-full">
          <div className="flex items-center justify-between">
            {/* Left - Krea AI logo and name with proper slim font */}
            <div className="flex items-center space-x-2">
              <div className='w-6 h-6 relative'>
                <img
                 src="/images/krea-logo.svg"
                  alt="Krea AI"
                  width={40}
                  height={12}
                  className='object-contain w-15 h-6 rounded-sm'
                   />
              </div>
              <span className="  font-normal text-white text-base tracking-tight">Krea AI</span>
            </div>
            
            {/* Right - Curated by Mobbin with proper sizing */}
            <div className="flex items-center space-x-2  text-white/90">
              <span className="font-normal text-base tracking-tight mr-2">
                curated by
              </span>
              <div className="flex items-center space-x-1">
                <div className="w-10 h-10  rounded overflow-hidden flex items-center justify-center">
                  <img
                  src='/images/mobbin-logo.svg'
                  alt='Mobbin'
                  className='w-10 h-10 object-contain block translate-y-0.5'
                   />
                </div>
                <span className="font-medium text-white text-2xl tracking-tight align-middle">
                  Mobbin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}