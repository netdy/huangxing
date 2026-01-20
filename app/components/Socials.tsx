'use client';

import { motion } from 'framer-motion';
import { BookHeart, Globe, Instagram, Music, Video } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ELIOT.HX', label: 'ELIOT.HX', color: 'hover:text-pink-500' },
  { name: 'Weibo', icon: Globe, href: 'https://weibo.com/u/2211239502', label: '黄星ELIOT', color: 'hover:text-red-500' },
  { name: 'Douyin', icon: Video, href: 'https://v.douyin.com/7Mjf1cqeQTk/', label: '黄星ELIOT', color: 'hover:text-black hover:dark:text-white' }, 
  { name: 'RedNote', icon: BookHeart, href: 'https://xhslink.com/m/9E6wRPW87lP', label: '黄星ELIOT', color: 'hover:text-red-500' },
  { name: 'TikTok', icon: Music, href: 'https://www.tiktok.com/@eliot_1125?_r=1&_t=ZS-93AeV5QV6bn', label: 'ELIOT_1125', color: 'hover:text-black hover:dark:text-white' },
];

export default function Socials() {
  const { t } = useLanguage();

  return (
    <section id="socials" className="py-10 md:py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-bold mb-8 md:mb-12 text-primary-light"
        >
          {t('socials.title')}
        </motion.h2>

        <div className="grid grid-cols-6 md:flex md:flex-wrap md:justify-center gap-x-4 gap-y-8 md:gap-16">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center gap-2 group col-span-2 ${index === 3 ? 'col-start-2' : ''}`}
            >
              <div className={`p-3 md:p-4 rounded-full bg-white border border-gray-100 shadow-sm group-hover:border-primary-light transition-colors duration-300 ${social.color}`}>
                <social.icon size={24} className="md:w-8 md:h-8 w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
              </div>
              <span className="text-sm md:text-base font-medium">{social.name}</span>
              <span className="text-[10px] md:text-xs text-gray-500 group-hover:text-primary-dark transition-colors">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
