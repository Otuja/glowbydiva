'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, Clock, User, Mail, MessageSquare } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { useState } from 'react';

export default function BookingModal() {
  const { isOpen, closeModal } = useBooking();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        closeModal();
      }, 3000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl z-[70] overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-rose-500 p-6 text-white text-center">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl font-serif font-bold">Book Appointment</h2>
              <p className="text-rose-100 text-sm mt-1">Let us pamper you</p>
            </div>

            {/* Content */}
            <div className="p-8">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                  <p className="text-gray-600">We&apos;ll confirm your appointment via email shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="Your Name"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      <input 
                        required
                        type="email" 
                        placeholder="Email Address"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <input 
                          required
                          type="date" 
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all text-gray-600"
                        />
                      </div>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all text-gray-600 appearance-none">
                          <option>Morning</option>
                          <option>Afternoon</option>
                          <option>Evening</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      <textarea 
                        rows={3}
                        placeholder="Service needed or special requests..."
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-rose-500 transition-colors shadow-lg hover:shadow-rose-200 mt-2"
                  >
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
