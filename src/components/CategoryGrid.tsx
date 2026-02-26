import React from 'react';
import { CATEGORIES } from '../constants';
import { motion } from 'motion/react';

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-funky mb-12 text-center">SHOP BY VIBE</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {CATEGORIES.map((category, index) => (
            <motion.a
              key={category.id}
              href={`#${category.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center"
            >
              <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-black mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${category.color}`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-funky text-sm md:text-base text-center group-hover:text-brand-pink transition-colors">
                {category.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
