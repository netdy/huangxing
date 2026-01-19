'use client';

import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Heart, MapPin, Palette, Ruler, Sparkles, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Calendar, label: 'profile.dobLabel', value: 'profile.dob' },
    { icon: Ruler, label: 'profile.height', value: '183 CM' },
    { icon: MapPin, label: 'profile.hometownLabel', value: 'profile.hometown' },
    { icon: GraduationCap, label: 'profile.educationLabel', value: 'profile.education' },
  ];

  const facts = [
    { label: 'profile.mbti', value: 'INFP', icon: User },
    { label: 'profile.animal', value: '🦋 / 🦊', icon: Sparkles },
    { label: 'profile.fandom', value: 'profile.fandomName', icon: Heart },
    { label: 'profile.color', value: '#98c8ff', icon: Palette },
  ];

  return (
    <section className="py-20 px-4 md:px-20 bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center mb-16 text-primary-light"
        >
          {t('about.title')}
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="w-full lg:w-1/3"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-light/20 blur-2xl rounded-2xl group-hover:opacity-100 transition-opacity duration-500 opacity-50"></div>
              <img 
                src="/profile.JPG" 
                alt="HuangXing" 
                className="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[3/4] border border-white/10"
              />
            </div>
          </motion.div>
          
          {/* Profile Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="w-full lg:w-2/3 space-y-8"
          >
            {/* Name Header */}
            <div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-white mb-5 whitespace-nowrap">
                {t('profile.name')}
              </h3>
              <p className="text-xl text-gray-400 font-light">{t('profile.origname')}</p>
            </div>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-light/50 transition-colors">
                  <div className="p-3 rounded-full bg-primary-dark/20 text-primary-light">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{t(stat.label)}</p>
                    <p className="text-lg font-medium">{stat.value.startsWith('profile.') ? t(stat.value) : stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fun Facts */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white border-l-4 border-primary-light pl-4">Personal Info</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {facts.map((fact, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-primary-dark/10 to-transparent border border-white/5 text-center hover:-translate-y-1 transition-transform">
                     <fact.icon size={20} className="mx-auto mb-2 text-primary-light" />
                     <p className="text-xs text-gray-400 mb-1">{t(fact.label)}</p>
                     <p className="font-bold text-white">
                        {fact.label === 'profile.color' ? (
                          <span className="flex items-center justify-center gap-2">
                             <span className="w-4 h-4 rounded-full bg-[#98c8ff]"></span>
                             <span className="w-4 h-4 rounded-full bg-[#0b7de1]"></span>
                          </span>
                        ) : (fact.value.startsWith('profile.') ? t(fact.value) : fact.value)}
                     </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hobbies */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Palette size={100} />
               </div>
               <h4 className="text-lg font-bold text-primary-light mb-2">{t('profile.hobbies')}</h4>
               <p className="text-gray-300 text-lg relative z-10">{t('profile.hobbiesList')}</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
