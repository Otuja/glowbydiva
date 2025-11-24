'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Star, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="About Us" 
        subtitle="The story behind the elegance. Passion, precision, and perfection."
      />

      {/* Our Story Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800"
              alt="Nail Salon Interior"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-rose-500 font-medium tracking-widest uppercase mb-2">Our Story</h2>
            <h3 className="text-4xl font-serif text-gray-900 mb-6">Redefining Beauty, One Nail at a Time</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, Glow by Diva began with a simple mission: to provide a sanctuary where beauty and relaxation meet. 
              We believe that nail care is not just a routine, but a form of self-expression and art.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of dedicated professionals is trained in the latest techniques and trends, ensuring that every visit 
              leaves you feeling polished and confident. We use only premium, non-toxic products to care for your natural nails 
              while creating stunning enhancements.
            </p>
            
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">5+</h4>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">2k+</h4>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">100%</h4>
                <p className="text-sm text-gray-500">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to excellence in every aspect of our service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Passion for Beauty", desc: "We love what we do, and it shows in every detail of our work." },
              { icon: Star, title: "Premium Quality", desc: "We use only the finest products to ensure long-lasting results." },
              { icon: Users, title: "Client Focused", desc: "Your comfort and satisfaction are our top priorities." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-500">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
