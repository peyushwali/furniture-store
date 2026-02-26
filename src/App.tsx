import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-yellow selection:text-black">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Marquee Section - Gen Z touch */}
        <div className="bg-brand-purple py-4 border-b-4 border-black overflow-hidden whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="inline-block"
          >
            <span className="font-funky text-white text-2xl mx-8">FREE SHIPPING ON ALL ORDERS OVER $500</span>
            <span className="font-funky text-brand-yellow text-2xl mx-8">NEW DROP LIVE NOW</span>
            <span className="font-funky text-white text-2xl mx-8">CUSTOMIZE YOUR VIBE</span>
            <span className="font-funky text-brand-cyan text-2xl mx-8">NO CAP QUALITY</span>
            <span className="font-funky text-white text-2xl mx-8">FREE SHIPPING ON ALL ORDERS OVER $500</span>
            <span className="font-funky text-brand-yellow text-2xl mx-8">NEW DROP LIVE NOW</span>
          </motion.div>
        </div>

        <CategoryGrid />
        
        {/* Special Promo Section */}
        <section className="bg-brand-pink py-16 border-y-4 border-black overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-5xl md:text-7xl font-funky text-white mb-6 leading-none">
                  DESIGN <br /> YOUR OWN <br /> REALITY
                </h2>
                <p className="text-xl font-display font-bold text-black mb-8">
                  Can't find the perfect piece? Build it. Our custom studio lets you pick colors, fabrics, and shapes that match your unique aesthetic.
                </p>
                <button className="funky-button bg-white text-black">
                  START DESIGNING
                </button>
              </div>
              <div className="relative">
                <div className="funky-border bg-white p-2 -rotate-3">
                  <img 
                    src="https://picsum.photos/seed/custom/600/400" 
                    alt="Custom Furniture" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-brand-yellow border-4 border-black p-4 font-funky text-sm rotate-12">
                  100% <br /> UNIQUE
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
        </section>

        <ProductGrid />

        {/* Newsletter / Social Proof */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-funky mb-8">DON'T MISS THE DROP</h2>
            <p className="text-xl font-display font-bold text-gray-600 mb-12">
              Join 50,000+ others getting the best furniture deals and design inspo delivered to their inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 px-6 py-4 border-4 border-black font-display font-bold focus:outline-none focus:bg-brand-yellow/10 transition-colors"
                required
              />
              <button type="submit" className="funky-button bg-black text-white">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
