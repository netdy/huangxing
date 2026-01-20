'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
  '/gallery/gallery1.jpg',
  '/gallery/gallery2.jpg',
  '/gallery/gallery3.jpg',
  '/gallery/gallery4.jpg',
  '/gallery/gallery5.jpg',
  '/gallery/gallery6.jpg',
  '/gallery/gallery7.jpg',
  '/gallery/gallery8.jpg',
  '/gallery/gallery9.jpg',
  '/gallery/gallery10.jpg',
  '/gallery/gallery11.jpg',
  '/gallery/gallery12.jpg',
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900"
        >
          {t('gallery.title')}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
