'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin with a personalized assessment of your nail health and style preferences.",
  },
  {
    number: "02",
    title: "Treatment",
    description: "Relax as our artisans perform meticulous care using premium, non-toxic products.",
  },
  {
    number: "03",
    title: "Finish",
    description: "The final touch. A flawless application that leaves you feeling polished and confident.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-stone-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 block">The Experience</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              A Ritual of <br />
              <span className="italic text-stone-400">Renewal</span>
            </h2>
            <p className="text-stone-400 text-lg font-light max-w-md leading-relaxed">
              We believe that beauty is a discipline. Our process is designed to not only enhance your appearance but to provide a moment of calm in a chaotic world.
            </p>
          </div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative pl-12 border-l border-stone-800"
              >
                <span className="absolute -left-[9px] top-0 w-[18px] h-[18px] rounded-full bg-[#1a1a1a] border border-stone-600" />
                <span className="text-stone-500 font-serif text-xl mb-2 block">{step.number}</span>
                <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
