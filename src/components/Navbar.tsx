import React from 'react';
import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { cn } from '../utils';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="font-funky text-3xl tracking-tighter hover:text-brand-pink transition-colors">
              VIBESPACE
            </a>
          </div>

          {/* Search Bar - Wayfair Style */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for vibes..."
                className="w-full pl-10 pr-4 py-2 border-2 border-black focus:outline-none focus:ring-0 focus:border-brand-purple transition-colors"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-black" />
              </div>
              <button className="absolute inset-y-0 right-0 px-4 bg-black text-white font-funky text-sm hover:bg-brand-purple transition-colors">
                GO
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="p-2 hover:bg-brand-yellow transition-colors rounded-none border-2 border-transparent hover:border-black group">
              <User className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-2 hover:bg-brand-cyan transition-colors rounded-none border-2 border-transparent hover:border-black group">
              <Heart className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-2 hover:bg-brand-pink transition-colors rounded-none border-2 border-transparent hover:border-black group relative">
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-none">
                3
              </span>
            </button>
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Sub-nav Categories */}
      <div className="hidden md:block bg-black text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-8 font-display text-sm font-bold uppercase tracking-widest">
          {['Living', 'Bedroom', 'Office', 'Dining', 'Decor', 'Outdoor', 'Sale'].map((cat) => (
            <a key={cat} href={`#${cat.toLowerCase()}`} className="hover:text-brand-yellow transition-colors">
              {cat}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
