'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  ChevronDown
} from 'lucide-react'

const generateItems = [
  {
    id: '1',
    title: 'Image',
    subtitle: 'New',
    description: 'Generate images with our...',
    iconColor: 'bg-gray-400'
  },
  {
    id: '2',
    title: 'Video',
    subtitle: '',
    description: 'Generate videos with Kling, Luma, and Flix.',
    iconColor: 'bg-orange-400'
  },
  {
    id: '3',
    title: 'Realtime',
    subtitle: '',
    description: 'Real-time rendering in a glance with canvas.',
    iconColor: 'bg-blue-400'
  },
  {
    id: '4',
    title: 'Enhancer',
    subtitle: 'New',
    description: 'Enhance and upscale your...',
    iconColor: 'bg-purple-500'
  },
  {
    id: '5',
    title: 'Edit',
    subtitle: 'New',
    description: 'Edit your photos and images with AI.',
    iconColor: 'bg-gray-700'
  },
  {
    id: '6',
    title: 'Video Lipsync',
    subtitle: 'New',
    description: 'Lip sync your videos easily.',
    iconColor: 'bg-green-400'
  },
  {
    id: '7',
    title: 'Motion Transfer',
    subtitle: 'New',
    description: 'Transfer motion patterns...',
    iconColor: 'bg-gray-800'
  },
  {
    id: '8',
    title: 'Train',
    subtitle: '',
    description: 'Train your own model to replicate your style...',
    iconColor: 'bg-blue-600'
  }
]

export function GenerateSection() {
  const [expanded, setExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Close if clicking outside (nice UX)
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return
      const target = e.target as Node | null
      if (expanded && target && !containerRef.current.contains(target)) {
        setExpanded(false)
      }
    }

    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [expanded])

  const visibleItems = expanded ? generateItems : generateItems.slice(0, 4)

  // Ensure short descriptions get an extra phrase so visually they occupy two lines
  const ensureTwoLines = (text: string) => {
    if (!text) return 'Learn more about this feature.'
    return text.length < 60 ? `${text.trim()} Explore more.` : text
  }

  // Inline style for two-line clamp (works without plugin)
  const twoLineClampStyle: React.CSSProperties = {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  }

  return (
    <section className="py-4 px-0 w-full" ref={containerRef}>
      <div className="w-full px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-normal text-foreground">Generate</h2>
          <button
            aria-expanded={expanded}
            onClick={() => setExpanded(prev => !prev)}
            className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>{expanded ? 'Show less' : 'Show all'}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>
        </div>

        {/* Compact list layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {visibleItems.map((item, index) => {
            // Custom icons based on the reference image
            const getIcon = (index: number) => {
              switch(index) {
                case 0: // Image
                  return (
                    <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  )
                case 1: // Video
                  return (
                    <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                    </svg>
                  )
                case 2: // Realtime
                  return (
                    <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                    </svg>
                  )
                case 3: // Enhancer
                  return (
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                case 4: // Edit
                  return (
                    <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                  )
                case 5: // Video Lipsync
                  return (
                    <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  )
                case 6: // Motion Transfer
                  return (
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )
                default: // Train
                  return (
                    <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )
              }
            }
            
            // build description with minimum content for two lines
            const descriptionText = ensureTwoLines(item.description)

            return (
              <div
                key={item.id}
                className="group flex items-center space-x-3 p-3 bg-card hover:bg-muted/30 rounded-xl border border-border/30 transition-all duration-200 hover:border-border cursor-pointer"
              >
                {/* Colored icon circle (slightly smaller) */}
                <div className={`w-7 h-7 ${item.iconColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  {getIcon(index)}
                </div>
                
                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-xs text-muted-foreground">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      
                      <span className="px-1 py-0.5 bg-blue-600 text-white text-[9px] font-medium rounded-full tracking-wide leading-none">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <p
                    style={twoLineClampStyle}
                    className="text-[11px] text-muted-foreground mt-0.5 leading-snug"
                  >
                    {descriptionText}
                  </p>
                </div>

                {/* "Open" button */}
                <button className="text-xs text-black dark:text-white font-normal">
                  Open
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GenerateSection
