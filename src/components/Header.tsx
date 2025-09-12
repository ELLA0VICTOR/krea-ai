'use client'

import { ChevronDown } from 'lucide-react' // keeping Chevron from Lucide since it's nice
import {
  AiFillHome,
  AiOutlinePicture,
  AiOutlineVideoCamera,
  AiOutlineFontColors,
  AiFillFolder,
  AiOutlineBell,
  AiOutlineUser
} from 'react-icons/ai'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { FaHeadset } from 'react-icons/fa'            // headset for Support
import { MdOutlineRadar } from 'react-icons/md'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 w-full">
        {/* Left section - Logo and brand name */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/krea-logo2.svg"
            alt="Krea AI"
            width={28}
            height={28}
            className="object-contain w-7 h-7"
          />

          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full border border-blue-200/60" />
            <span className="font-normal text-foreground text-sm">benovalentcontentual</span>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
        </div>

        {/* Center section - Toolbar Icons */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-gray-50/90 dark:bg-black/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full px-2 py-1 shadow-sm">
            <button
              className="w-7 p-1.5 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300/30"
              aria-label="Home"
            >
              <AiFillHome className="h-3.5 w-3.5 text-black dark:text-gray-300" />
            </button>

            <button
              className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300/30"
              aria-label="Image"
            >
              <AiOutlinePicture className="h-3.5 w-3.5 text-black dark:text-gray-300" />
            </button>

            <button
              className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300/30"
              aria-label="Video"
            >
              <AiOutlineVideoCamera className="h-3.5 w-3.5 text-black dark:text-gray-300" />
            </button>

            <button
              className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300/30"
              aria-label="Enhancer"
            >
              <FaWandMagicSparkles className="h-3.5 w-3.5 text-black dark:text-gray-300" />
            </button>

            <button
              className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300/30"
              aria-label="Realtime"
            >
              <MdOutlineRadar className="h-3.5 w-3.5 text-black dark:text-gray-300" />
            </button>

            <button
              className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300/30"
              aria-label="Edit"
            >
              <AiOutlineFontColors className="h-3.5 w-3.5 text-black dark:text-gray-300" />
            </button>

            <button
              className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300/30"
              aria-label="Folder"
            >
              <AiFillFolder className="h-3.5 w-3.5 text-black dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Right section - Controls and profile */}
        <div className="flex items-center space-x-4">
          {/* Gallery and Support links */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-foreground">
            <button
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300/30"
              aria-label="Gallery"
            >
              <AiOutlinePicture className="h-4 w-4 text-black dark:text-white" />
              <span className="font-normal">Gallery</span>
            </button>

            {/* Support now uses FaHeadset and same grey hover effect */}
            <button
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300/30"
              aria-label="Support"
            >
              <FaHeadset className="h-4 w-4 text-black dark:text-white" />
              <span className="font-normal">Support</span>
            </button>
          </div>

          {/* Notification bell */}
          <button
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300/30"
            aria-label="Notifications"
          >
            <AiOutlineBell className="h-5 w-5 text-black dark:text-white" />
          </button>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Profile avatar */}
          <button
            className='w-6 h-6 bg-gradient-to-br from-blue-200 to-purple-400 rounded-full border border-blue-200'
            aria-label="Profile"
          >
            <AiOutlineUser className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
