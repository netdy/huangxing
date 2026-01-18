'use client';

import { motion } from 'framer-motion';
import { Film, Music, Tv } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Works() {
  const { t, language } = useLanguage();

  const filmography = [
    {
      year: '2025',
      works: [
        { title: { en: 'Love Oath', th: 'ปณิธานร้อยรัก' }, role: { en: 'Pei Ning', th: 'เพ่ยหนิง' }, platform: 'IQIYI' },
        { title: { en: 'The Tale of Jiu', th: 'ตำนานจิ่วไห่' }, role: { en: 'Han Yi', th: 'หานอี้' }, platform: 'YOUKU' },
        { title: { en: 'Dangerous Game', th: 'เกมร้ายใคร่รัก' }, role: { en: 'Hua Yong', th: 'ฮวาหย่ง' }, platform: 'MONOMAX, GAGAOOLALA' },
      ]
    },
    {
      year: '2024',
      works: [
        { title: { en: 'Tricks of Love', th: 'ร้อยเล่ห์คะนึงรัก' }, role: { en: 'Xie Jing Shu', th: 'เซี่ยจิ้งซู' }, platform: 'IQIYI' },
        { title: { en: 'NPC', th: 'อุบัติรัก NPC' }, role: { en: 'Ye Wu Ming / Xu Yi Chi', th: 'เย่อู่หมิง / สวีอี้ฉือ' }, platform: 'TrueID' },
        { title: { en: 'World is not true', th: 'โลกนี้ไม่เป็นความจริง' }, role: { en: 'He Fan', th: 'เหอฟ่าน' }, platform: 'YOUKU' },
        { title: { en: 'Fated to Love You', th: 'พรหมลิขิตนี้คือเธอ' }, role: { en: 'Nie Ling Feng', th: 'เนียหลิงเฟิง' }, platform: 'WETV' },
      ]
    },
    {
      year: '2023',
      works: [
        { title: { en: 'THE BELATED YOU', th: 'THE BELATED YOU' }, role: { en: 'Si Teng', th: 'ซือเถิง' }, platform: 'SOHU TV' },
      ]
    },
    {
      year: '2022',
      works: [
        { title: { en: 'Warm Time With You', th: 'หวานใจคุณชายกู้' }, role: { en: 'Gu Chen', th: 'กู้เฉิน' }, platform: 'WETV' },
        { title: { en: 'Love Across Time', th: 'รอยรักข้ามเวลา' }, role: { en: 'Zhou Yi Wu', th: 'โจวอี้อู่' }, platform: 'WETV' },
        { title: { en: 'Hero', th: 'ฮีโร่ผู้นิ่งใหญ่เฉินเจี้ยนซิน' }, role: { en: 'Luo Feng', th: 'ลั่วเฟิง' }, platform: 'TENCENT' },
      ]
    },
    {
      year: '2021',
      works: [
        { title: { en: 'Her is my destiny', th: 'เธอคือพรหมลิขิตของฉัน' }, role: { en: 'Hua Jing Nian', th: 'ฮั่วจิ้งเนียน' }, platform: 'WETV' },
      ]
    }
  ];

  const music = [
    '支配他', '驯服爱欲', 'TAME ME', '星空剪影', '同花顺'
  ];

  const variety = [
    { title: 'ASIA SUPER YOUNG', platform: 'TVB' }
  ];

  return (
    <section id="works" className="py-20 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-dark/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center mb-16 text-primary-light"
        >
          {t('works.title')}
        </motion.h2>

        {/* Filmography Timeline */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white border-b border-zinc-800 pb-4">
                <Film className="text-primary-light" />
                {t('works.drama')}
            </h3>
            <div className="space-y-12 border-l-2 border-zinc-800 ml-4 md:ml-0 md:pl-0">
                {filmography.map((yearGroup, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-0 md:grid md:grid-cols-[100px_1fr] md:gap-8"
                    >
                        {/* Year Marker */}
                        <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-primary-light md:relative md:left-auto md:top-auto md:w-auto md:h-auto md:bg-transparent md:text-right md:pt-1">
                             <span className="hidden md:block text-2xl font-bold text-primary-light">{yearGroup.year}</span>
                        </div>
                        <span className="md:hidden text-xl font-bold text-primary-light mb-4 block">{yearGroup.year}</span>

                        {/* Works List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {yearGroup.works.map((work, wIndex) => (
                                <div key={wIndex} className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl hover:bg-zinc-900 hover:border-primary-dark/50 transition-all group">
                                    <h4 className="font-bold text-lg text-white group-hover:text-primary-light transition-colors mb-1">
                                        {work.title[language]}
                                    </h4>
                                    <p className="text-sm text-gray-400 mb-2">{t('work.role1')}: <span className="text-gray-300">{work.role[language]}</span></p>
                                    <span className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                                        {work.platform}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Music & Variety Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                 <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white border-b border-zinc-800 pb-4">
                    <Music className="text-primary-light" />
                    {t('works.music')}
                </h3>
                <ul className="space-y-3">
                    {music.map((song, index) => (
                        <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900 transition-colors"
                        >
                            <span className="w-8 h-8 rounded-full bg-primary-dark/20 text-primary-light flex items-center justify-center text-xs font-bold">
                                {index + 1}
                            </span>
                            <span className="text-gray-200 font-medium">{song}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>

            <div>
                 <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white border-b border-zinc-800 pb-4">
                    <Tv className="text-primary-light" />
                    Variety Show
                </h3>
                 <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <Tv size={80} />
                     </div>
                     <h4 className="text-xl font-bold text-white mb-2">ASIA SUPER YOUNG</h4>
                     <p className="text-gray-400">TVB</p>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
}
