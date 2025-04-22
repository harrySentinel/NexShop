import React from 'react'
import { assets } from '../assets/assets'

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col gap-4 items-center justify-center bg-white">
      <img
        src= {assets.logo} 
        alt="NexShop Logo"
        className="w-32 h-auto max-h-24 animate-pulse object-contain"
      />
      <p className="text-black font-medium tracking-wider animate-bounce">Loading 🛒...</p>
    </div>
  )
}

export default Preloader
