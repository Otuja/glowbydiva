'use client';

import PageHeader from '@/components/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  { src: "/img/gallery/image1.png", alt: "Elegant Nail Art", category: "Nail Art" },
  { src: "/img/gallery/image2.png", alt: "Classic Manicure", category: "Manicure" },
  { src: "/img/gallery/image3.png", alt: "Gel Polish", category: "Gel" },
  { src: "/img/gallery/image4.png", alt: "Pedicure", category: "Pedicure" },
  { src: "/img/gallery/image5.png", alt: "Bridal Nails", category: "Bridal" },
  { src: "/img/gallery/image6.png", alt: "Summer Vibes", category: "Seasonal" },
  { src: "/img/gallery/image7.png", alt: "Minimalist Design", category: "Nail Art" },
  { src: "/img/gallery/image8.png", alt: "Luxury Pedicure", category: "Pedicure" },
  { src: "/img/gallery/image9.png", alt: "French Tip", category: "Manicure" },
];

const categories = ["All", "Nail Art", "Manicure", "Pedicure", "Gel", "Bridal"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  // Filter images based on selected category
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Our Gallery" 
        subtitle="A showcase of our finest work and creative inspirations."
      />

      <section className="py-20 container mx-auto px-4">
        {/* 
          Filter Buttons 
          Allows users to filter the gallery by category (e.g., Nail Art, Manicure).
        */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? "bg-rose-500 text-white shadow-lg scale-105" 
                  : "bg-gray-100 text-gray-600 hover:bg-rose-100 hover:text-rose-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 
          Gallery Grid 
          Displays the filtered images with animations for layout changes.
        */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.src} // Use src as key for stability during filtering
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl h-80 shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay with Category and Title */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <p className="text-rose-300 text-sm font-medium mb-1">{image.category}</p>
                    <h3 className="text-white text-xl font-serif">{image.alt}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Social Media Link */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Follow us on Instagram for daily updates</p>
          <a 
            href="#" 
            className="text-rose-500 font-medium hover:text-rose-600 transition-colors border-b-2 border-rose-200 hover:border-rose-500 pb-1"
          >
            @GlowByDiva
          </a>
        </div>
      </section>
    </div>
  );
}
