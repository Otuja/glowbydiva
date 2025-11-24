'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Fashion Editor",
    text: "An absolute revelation. The attention to detail is unlike anything I've experienced in the city. Truly a cut above.",
  },
  {
    name: "Elena Rodriguez",
    role: "Architect",
    text: "Minimalist perfection. They understand that less is more, and the execution is flawless every single time.",
  },
  {
    name: "Michelle Wu",
    role: "Creative Director",
    text: "My weekly escape. The ambiance is serene, the service is impeccable, and the results speak for themselves.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#f8f7f5]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="mb-20">
          <span className="text-stone-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
            Voices of <span className="italic text-stone-600">Appreciation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white p-12 shadow-sm hover:shadow-md transition-shadow duration-500"
            >
              <div className="flex justify-center mb-8">
                <Quote size={32} className="text-stone-300 fill-stone-100" />
              </div>
              <p className="text-stone-600 text-lg font-light leading-relaxed italic mb-8">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <h4 className="text-stone-900 font-serif text-xl mb-1">{testimonial.name}</h4>
                <p className="text-stone-400 text-xs font-bold tracking-widest uppercase">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
