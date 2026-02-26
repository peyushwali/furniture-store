import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t-4 border-brand-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="font-funky text-4xl tracking-tighter text-brand-yellow mb-6 block">
              VIBESPACE
            </a>
            <p className="font-display font-bold text-gray-400 mb-6">
              Making your space as unique as your playlist. Custom furniture for the next generation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-white/20 hover:bg-brand-pink hover:border-brand-pink transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 border border-white/20 hover:bg-brand-cyan hover:border-brand-cyan transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 border border-white/20 hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-funky text-lg mb-6 text-brand-cyan">SHOP</h4>
            <ul className="space-y-4 font-display font-bold text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Orders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-funky text-lg mb-6 text-brand-pink">HELP</h4>
            <ul className="space-y-4 font-display font-bold text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-funky text-lg mb-6 text-brand-yellow">JOIN THE FAM</h4>
            <p className="font-display font-bold text-gray-400 mb-4">Get early access to drops and exclusive vibes.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white/10 border-2 border-white/20 px-4 py-2 focus:outline-none focus:border-brand-yellow transition-colors"
              />
              <button className="bg-brand-yellow text-black font-funky px-4 py-2 hover:bg-white transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-display font-bold text-gray-500 text-sm">
            © 2026 VIBESPACE FURNITURE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 font-display font-bold text-gray-500 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
