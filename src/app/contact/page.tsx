'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Book your appointment or ask us anything."
      />

      <section className="py-20 container mx-auto px-4 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
          {/* Contact Info */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Whether you have a question about our services, pricing, or want to book a consultation, our team is ready to answer all your questions.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Visit Us", content: "123 Beauty Lane, Fashion District, NY 10001" },
                { icon: Phone, title: "Call Us", content: "(555) 123-4567", sub: "Mon-Sat from 9am to 6pm" },
                { icon: Mail, title: "Email Us", content: "hello@glowbydiva.com" },
                { icon: Clock, title: "Opening Hours", content: "Mon - Fri: 9:00 AM - 7:00 PM", sub: "Saturday: 10:00 AM - 6:00 PM" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-5 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-white border border-rose-100 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                    {item.sub && <p className="text-gray-500 text-sm mt-1">{item.sub}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-8">Send a Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    className="peer w-full px-0 py-3 border-b-2 border-gray-200 focus:border-rose-500 outline-none transition-colors bg-transparent placeholder-transparent"
                    placeholder="Your Name"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    className="peer w-full px-0 py-3 border-b-2 border-gray-200 focus:border-rose-500 outline-none transition-colors bg-transparent placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
              </div>
              
              <div className="relative">
                <select 
                  id="subject"
                  className="peer w-full px-0 py-3 border-b-2 border-gray-200 focus:border-rose-500 outline-none transition-colors bg-transparent text-gray-700"
                >
                  <option>General Inquiry</option>
                  <option>Booking Request</option>
                  <option>Feedback</option>
                </select>
                <label 
                  htmlFor="subject"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all"
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea 
                  id="message"
                  rows={4}
                  className="peer w-full px-0 py-3 border-b-2 border-gray-200 focus:border-rose-500 outline-none transition-colors bg-transparent placeholder-transparent resize-none"
                  placeholder="Your Message"
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Your Message
                </label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full bg-gray-900 text-white py-5 rounded-xl font-medium hover:bg-rose-500 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-rose-200"
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
