import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-16">
          {/* Left - Brand */}
          <div className="w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">RAWBLOX</h2>
            <p className="text-gray-500 text-sm mb-4 max-w-xs">
              STREETWEAR FOR THE BOLD, BUILT FOR THE MOVEMENT.
            </p>
            <p className="text-gray-500 text-sm mb-8 max-w-sm">
              Inspired by the raw energy of the streets, we create statement pieces that blend style, attitude, and individuality.
            </p>
            <p className="text-gray-500 text-xs">© 2025 Copyright</p>
          </div>

          {/* Middle - Menu */}
          <div className="w-1/3">
            <h3 className="text-gray-300 font-bold mb-6">MENU</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
              <li>Story</li>
            </ul>
          </div>

          {/* Middle Right - Shop */}
          <div className="w-1/3">
            <h3 className="text-gray-300 font-bold mb-6">SHOP</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Collections</li>
              <li>New arrival</li>
              <li>Men collections</li>
              <li>Women collections</li>
              <li>Accessories</li>
              <li>Category</li>
            </ul>
          </div>

          {/* Right - Social */}
          <div className="w-1/3">
            <h3 className="text-gray-300 font-bold mb-6">SOCIAL</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Tiktok</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Large Text */}
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-800/50 leading-none">
            SMOKEWEARS
          </h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
