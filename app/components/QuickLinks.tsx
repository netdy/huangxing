'use client';

import { motion } from 'framer-motion';
import { Calendar, Crown, Film, Globe, Image, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function QuickLinks() {
  const { t } = useLanguage();

  const links = [
    { id: 'about', icon: User, label: 'about.title', href: '#about' },
    { id: 'works', icon: Film, label: 'works.title', href: '#works' },
    { id: 'brands', icon: Crown, label: 'brands.title', href: '#brands' },
    { id: 'schedule', icon: Calendar, label: 'nav.schedule', href: '#schedule' },
    { id: 'gallery', icon: Image, label: 'nav.gallery', href: '#gallery' },
    { id: 'socials', icon: Globe, label: 'nav.socials', href: '#socials' },
  ];

  return (
    <section className="py-10 md:py-20 relative overflow-hidden border-t border-b border-zinc-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="/quicklink.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-70 blur-sm"
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-4">
          {links.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex items-center gap-6 px-8 py-4 rounded-full bg-white/80 border border-gray-200 text-gray-700 hover:text-primary-dark hover:border-primary-light hover:bg-white transition-all duration-300 group w-full max-w-md justify-between backdrop-blur-sm shadow-sm"
            >
              <div className="flex items-center gap-4">
                <link.icon className="w-6 h-6 group-hover:text-primary-dark transition-colors" />
                <span className="text-xl font-medium tracking-wide">{t(link.label)}</span>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
