'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark to-black text-white">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay"
      >
        <source src="/huangxing.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-white">
            {t('hero.title')}
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 font-light tracking-widest uppercase"
        >
          {t('hero.subtitle')}
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary-light to-transparent"></div>
      </motion.div>
    </section>
  );
}
