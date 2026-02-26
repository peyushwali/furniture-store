import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-yellow border-b-4 border-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-funky leading-none mb-6">
              NO CAP <br />
              <span className="text-brand-purple">FURNITURE</span>
            </h1>
            <p className="text-xl md:text-2xl font-display font-bold mb-8 max-w-md">
              Custom pieces that match your energy. Upgrade your space, upgrade your life.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="funky-button bg-brand-pink text-white">
                SHOP THE DROP
              </button>
              <button className="funky-button bg-white">
                CUSTOMIZE IT
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="funky-border bg-brand-cyan p-4 rotate-3">
              <img
                src="https://picsum.photos/seed/hero-couch/800/600"
                alt="Cool Couch"
                className="w-full h-auto grayscale-0 hover:grayscale transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-pink rounded-full flex items-center justify-center font-funky text-white text-center text-sm rotate-12 border-4 border-black animate-bounce">
              NEW <br /> DROP
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-green border-4 border-black flex items-center justify-center font-funky text-black text-center text-sm -rotate-12">
              UP TO <br /> 40% OFF
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-black rounded-full" />
        <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-black rotate-45" />
        <div className="absolute top-1/2 left-1/3 w-10 h-10 bg-black rounded-full" />
      </div>
    </section>
  );
}
