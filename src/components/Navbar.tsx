'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact", link: "/contact" },
];

import { useBooking } from '@/context/BookingContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <span className={`text-2xl font-serif font-bold tracking-tighter transition-colors duration-300 ${
              isOpen ? 'text-gray-900' : (scrolled ? 'text-gray-900' : 'text-gray-900')
            }`}>
              GlowBy<span className="text-rose-500">Diva</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.link}
                className="text-sm font-medium uppercase tracking-widest text-gray-600 hover:text-rose-500 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <button 
              onClick={openModal}
              className="bg-gray-900 text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-rose-500 transition-all duration-300 hover:shadow-lg hover:shadow-rose-200 transform hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-5">
              <motion.span 
                animate={{ 
                  rotate: isOpen ? 45 : 0, 
                  y: isOpen ? 8 : 0 
                }}
                className="absolute top-0 left-0 w-full h-0.5 bg-current transform origin-center transition-colors duration-300"
              />
              <motion.span 
                animate={{ 
                  opacity: isOpen ? 0 : 1 
                }}
                className="absolute top-[9px] left-0 w-full h-0.5 bg-current transition-colors duration-300"
              />
              <motion.span 
                animate={{ 
                  rotate: isOpen ? -45 : 0, 
                  y: isOpen ? -8 : 0 
                }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-center transition-colors duration-300"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link 
                    href={item.link}
                    className="text-4xl font-serif font-medium text-gray-900 hover:text-rose-500 transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="pt-8"
              >
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    openModal();
                  }}
                  className="inline-flex items-center gap-2 text-rose-500 font-medium uppercase tracking-widest text-sm border-b-2 border-rose-500 pb-1"
                >
                  Book Appointment <ArrowRight size={16} />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex justify-center space-x-8 pt-12"
              >
                <Instagram className="text-gray-400 hover:text-rose-500 cursor-pointer transition-colors" size={24} />
                <Facebook className="text-gray-400 hover:text-rose-500 cursor-pointer transition-colors" size={24} />
                <Twitter className="text-gray-400 hover:text-rose-500 cursor-pointer transition-colors" size={24} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
