'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-rose-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif text-white mb-6">Glow by Diva</h3>
            <p className="text-gray-400 mb-6">
              Elevating nail care to an art form. Experience the difference of true luxury and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-rose-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-rose-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-rose-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-rose-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-rose-400 transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-rose-400 transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-rose-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-rose-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Manicure</li>
              <li className="text-gray-400">Pedicure</li>
              <li className="text-gray-400">Gel Extensions</li>
              <li className="text-gray-400">Nail Art</li>
              <li className="text-gray-400">Bridal Packages</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                <span>123 Beauty Lane, Fashion District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span>hello@glowbydiva.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Glow by Diva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
