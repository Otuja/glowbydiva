'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const serviceCategories = [
  {
    title: "Hands",
    items: [
      { name: "Classic Manicure", price: "₦15,000", desc: "Nail shaping, cuticle care, massage, and polish." },
      { name: "Gel Manicure", price: "₦25,000", desc: "Long-lasting gel polish with zero dry time." },
      { name: "Spa Manicure", price: "₦35,000", desc: "Includes exfoliation, mask, and extended massage." },
      { name: "Dip Powder", price: "₦40,000", desc: "Durable and lightweight alternative to acrylics." },
    ]
  },
  {
    title: "Feet",
    items: [
      { name: "Classic Pedicure", price: "₦20,000", desc: "Soak, shaping, cuticle care, scrub, massage, and polish." },
      { name: "Spa Pedicure", price: "₦45,000", desc: "Premium treatment with callus removal, mask, and hot towels." },
      { name: "Jelly Pedicure", price: "₦55,000", desc: "Unique jelly soak for ultimate hydration and relaxation." },
    ]
  },
  {
    title: "Nail Art & Extras",
    items: [
      { name: "French Tip", price: "+₦5,000", desc: "Classic white or colored tips." },
      { name: "Custom Nail Art", price: "₦3,000+", desc: "Per finger, depending on complexity." },
      { name: "Gel Removal", price: "₦5,000", desc: "Safe removal of gel polish." },
      { name: "Paraffin Wax", price: "₦10,000", desc: "Deep moisturizing treatment for hands or feet." },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Services" 
        subtitle="Indulge in a wide range of treatments designed to pamper and perfect."
      />

      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {serviceCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-8 border-b border-rose-200 pb-2 inline-block">
                {category.title}
              </h2>
              
              <div className="grid gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-xl hover:bg-rose-50 transition-colors duration-300 border border-gray-100 hover:border-rose-100">
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <Check className="w-4 h-4 text-rose-400 mr-2" />
                        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                      </div>
                      <p className="text-gray-500 text-sm ml-6">{item.desc}</p>
                    </div>
                    <div className="mt-4 md:mt-0 ml-0 md:ml-4">
                      <span className="text-2xl font-medium text-rose-500">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div 
            className="bg-gray-900 text-white p-10 rounded-2xl text-center mt-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif mb-4">Ready to Book?</h3>
            <p className="text-gray-300 mb-8">
              Appointments fill up fast. Reserve your spot today for the ultimate pampering experience.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-rose-500 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-600 transition-colors shadow-lg hover:shadow-rose-500/30"
            >
              Book Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
