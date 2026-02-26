import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <section className="py-16 bg-gray-50 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-5xl font-funky mb-4">TRENDING NOW</h2>
            <p className="font-display font-bold text-gray-600">The pieces everyone is obsessing over.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 border-2 border-black font-funky text-sm hover:bg-black hover:text-white transition-all">
              FILTER
            </button>
            <button className="px-6 py-2 border-2 border-black font-funky text-sm hover:bg-black hover:text-white transition-all">
              SORT
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="funky-button bg-brand-cyan">
            VIEW ALL VIBES
          </button>
        </div>
      </div>
    </section>
  );
}
