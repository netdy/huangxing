'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
  'https://placehold.co/400x500/0b7de1/ffffff?text=Drama+Role',
  'https://placehold.co/400x400/98c8ff/000000?text=Stage+Performance',
  'https://placehold.co/400x600/171717/ffffff?text=Photoshoot',
  'https://placehold.co/400x450/0b7de1/ffffff?text=Behind+The+Scenes',
  'https://placehold.co/400x550/98c8ff/000000?text=Fashion',
  'https://placehold.co/400x400/171717/ffffff?text=Daily+Life',
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-10 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center mb-12 text-primary-light"
        >
          {t('gallery.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative overflow-hidden rounded-lg"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover aspect-square"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
