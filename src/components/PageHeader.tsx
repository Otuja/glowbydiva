'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          // Solid Dark Background with subtle texture or overlay
          <div className="absolute inset-0 bg-[#1a1a1a]" />
        )}
        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-wide">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          )}
          
          {/* Breadcrumbs */}
          <div className="mt-8 flex justify-center space-x-2 text-sm text-gray-400 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element - Gold Line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </div>
  );
}
