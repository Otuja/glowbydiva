'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { src: "/img/home/image1.png", alt: "Elegant Nail Art" },
  { src: "/img/home/image2.png", alt: "Classic Manicure" },
  { src: "/img/home/image3.png", alt: "Gel Polish Application" },
  { src: "/img/home/image4.png", alt: "Pedicure Treatment" },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        {/* Header Section: Title and Link to Full Gallery */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">Recent Masterpieces</h2>
            <p className="text-gray-600">A glimpse into our portfolio of perfection.</p>
          </motion.div>
          
          {/* Desktop View Full Gallery Link */}
          <motion.a
            href="/gallery"
            className="hidden md:inline-block text-rose-500 font-medium hover:text-rose-600 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            View Full Gallery →
          </motion.a>
        </div>

        {/* 
          Image Grid 
          Displays a preview of gallery images with hover effects.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-64 md:h-80 rounded-xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Image Caption on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-lg">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View Full Gallery Link */}
        <div className="mt-8 text-center md:hidden">
          <a href="/gallery" className="text-rose-500 font-medium hover:text-rose-600 transition-colors">
            View Full Gallery →
          </a>
        </div>
      </div>
    </section>
  );
}
