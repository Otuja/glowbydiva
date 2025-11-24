'use client';

import { motion } from 'framer-motion';
import { Sparkles, Hand, Palette, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Manicure",
    description: "Precision shaping and cuticle care.",
    icon: Hand,
  },
  {
    title: "Pedicure",
    description: "Restorative treatments for tired feet.",
    icon: Sparkles,
  },
  {
    title: "Nail Artistry",
    description: "Bespoke designs for the modern individual.",
    icon: Palette,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-stone-200 pb-8">
          <div className="max-w-xl">
            <span className="text-stone-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              Curated Services
            </h2>
          </div>
          <Link href="/services" className="hidden md:flex items-center gap-2 text-stone-900 text-sm font-bold tracking-widest uppercase hover:text-stone-600 transition-colors group">
            View Full Menu 
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group bg-white p-12 hover:bg-stone-50 transition-colors duration-500"
            >
              <div className="mb-8 text-stone-400 group-hover:text-stone-900 transition-colors duration-500">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-500 mb-8 leading-relaxed font-light">
                {service.description}
              </p>
              <Link href="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-transparent group-hover:border-stone-900 transition-all pb-0.5">
                Details
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/services" className="inline-flex items-center gap-2 text-stone-900 font-bold tracking-widest uppercase text-sm">
            View Full Menu <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
