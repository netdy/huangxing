'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function NewCollab() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full overflow-hidden group cursor-pointer"
        >
          <img 
            src="/thewhoo.png" 
            alt="THE WHOO Collection" 
            className="w-full h-auto lg:h-[80vh] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-12">
            <h3 className="text-white text-2xl md:text-4xl font-bold font-serif">THE WHOO</h3>
            <p className="text-white/80 text-sm md:text-base">New Collaboration</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
