'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg border-2 border-zinc-600 bg-zinc-800/80 backdrop-blur-md text-white font-bold text-lg transition-all hover:border-primary-light hover:text-primary-light"
    >
      {language === 'en' ? 'TH' : 'EN'}
    </motion.button>
  );
}
