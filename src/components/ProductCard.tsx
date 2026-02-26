import React from 'react';
import { Product } from '../types';
import { Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white border-4 border-black hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden border-b-4 border-black">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-brand-cyan border-2 border-black px-2 py-1 font-funky text-[10px] rotate-[-5deg]">
              NEW
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-brand-yellow border-2 border-black px-2 py-1 font-funky text-[10px] rotate-[5deg]">
              BESTSELLER
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button className="p-2 bg-white border-2 border-black hover:bg-brand-pink transition-colors">
            <Heart className="h-5 w-5" />
          </button>
          <button className="p-2 bg-white border-2 border-black hover:bg-brand-cyan transition-colors">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-extrabold text-lg leading-tight group-hover:text-brand-purple transition-colors">
            {product.name}
          </h3>
          <span className="font-funky text-xl">${product.price}</span>
        </div>
        
        <p className="text-sm text-gray-600 font-medium mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {product.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 px-2 py-1 border border-black/10">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
