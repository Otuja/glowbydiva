'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import Image from 'next/image';

export default function Hero() {
  const { openModal } = useBooking();

  return (
    <section className="relative min-h-screen w-full bg-[#f8f7f5] flex flex-col lg:flex-row overflow-hidden">
      {/* 
        Left Side: Text Content 
        Contains the main headline, description, and call-to-action buttons.
      */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Establishment Year Badge */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-stone-400"></div>
            <span className="text-stone-500 text-sm font-medium tracking-[0.2em] uppercase">
              Est. 2020
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-[1.1] mb-8">
            The Art of <br />
            <span className="italic text-stone-800">Refinement</span>
          </h1>
          
          {/* Subtext / Description */}
          <p className="text-lg text-stone-600 max-w-md mb-12 leading-relaxed font-light">
            A sanctuary for the modern muse. We specialize in bespoke nail artistry and restorative treatments, curated for those who seek perfection in every detail.
          </p>
          
          {/* CTA Buttons: Book Appointment & Explore Menu */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={openModal}
              className="group relative px-8 py-4 bg-stone-900 text-white overflow-hidden transition-all hover:bg-stone-800"
            >
              <span className="relative z-10 flex items-center gap-3 text-sm font-medium tracking-widest uppercase">
                Book Appointment <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <Link href="/services" className="group flex items-center gap-3 px-4 py-4 text-stone-900">
              <span className="text-sm font-medium tracking-widest uppercase border-b border-stone-300 pb-1 group-hover:border-stone-900 transition-colors">
                Explore Menu
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 
        Right Side: Hero Image 
        Displays the main visual for the hero section with a floating testimonial badge.
      */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Main Hero Image */}
          <Image
            src="/img/home/home.png"
            alt="Luxury Nail Salon Aesthetic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/10" />
        </motion.div>
        
        {/* Floating Testimonial Badge (Hidden on mobile) */}
        <motion.div 
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-8 left-8 lg:bottom-16 lg:-left-16 bg-white p-6 shadow-2xl max-w-xs hidden md:block"
        >
          <p className="font-serif text-2xl text-stone-900 italic mb-2">&quot;Exquisite.&quot;</p>
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-stone-400">Vogue Magazine</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
