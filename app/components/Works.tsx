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
        { title: { en: `A Prime Minister's Disguise`, th: 'ปณิธานร้อยรัก' }, role: { en: 'Pei Ning', th: 'เพ่ยหนิง' }, platform: 'IQIYI' },
        { title: { en: 'The Legend of Zang Hai', th: 'ตำนานจิ่วไห่' }, role: { en: 'Han Yi', th: 'หานอี้' }, platform: 'YOUKU' },
        { title: { en: 'Desire The Series ', th: 'เกมร้ายใคร่รัก' }, role: { en: 'HuaYong', th: 'ฮวาหย่ง' }, platform: 'MONOMAX, GagaOOLala' },
      ]
    },
    {
      year: '2024',
      works: [
        { title: { en: 'Miss You Forever', th: 'ร้อยเล่ห์คะนึงรัก' }, role: { en: 'Xie Jing Shu', th: 'เซี่ยจิ้งซู' }, platform: 'IQIYI' },
        { title: { en: 'NPC Forbidden Love Between', th: 'อุบัติรัก NPC' }, role: { en: 'Ye Wu Ming / Xu Yi Chi', th: 'เย่อู่หมิง / สวีอี้ฉือ' }, platform: 'TrueID' },
        { title: { en: 'This World is Not Real', th: 'โลกนี้ไม่เป็นความจริง' }, role: { en: 'He Fan', th: 'เหอฟ่าน' }, platform: 'YOUKU' },
        { title: { en: 'You Are My Destiny', th: 'พรหมลิขิตนี้คือเธอ' }, role: { en: 'Nie Ling Feng', th: 'เนียหลิงเฟิง' }, platform: 'WETV' },
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
        { title: { en: `Master Gu's Amnesia Sweet Wife`, th: 'หวานใจคุณชายกู้' }, role: { en: 'Gu Chen', th: 'กู้เฉิน' }, platform: 'WETV' },
        { title: { en: 'The Forbidden Woman', th: 'รอยรักข้ามเวลา' }, role: { en: 'Zhou Yi Wu', th: 'โจวอี้อู่' }, platform: 'WETV' },
        { title: { en: 'The Man From Dao Xiang Cun', th: 'ฮีโร่ผู้ยิ่งใหญ่เฉินเจี้ยนซิน' }, role: { en: 'Luo Feng', th: 'ลั่วเฟิง' }, platform: 'TENCENT' },
      ]
    },
    {
      year: '2021',
      works: [
        { title: { en: 'You Are My Destiny', th: 'เธอคือพรหมลิขิตของฉัน' }, role: { en: 'Hua Jing Nian', th: 'ฮั่วจิ้งเนียน' }, platform: 'WETV' },
      ]
    }
  ];

  const music = [
    '支配他', '驯服爱欲', 'TAME ME', '星空剪影', '同花顺','爱情讯息','又一岁' 
  ];

  const variety = [
    { title: 'ASIA SUPER YOUNG', platform: 'TVB' }
  ];

  return (
    <section id="works" className="py-10 md:py-20 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Decor */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/dance2.mp4" type="video/mp4" />
      </video>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center mb-8 md:mb-16 text-primary-light"
        >
          {t('works.title')}
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="mb-16 relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40 blur-3xl rounded-3xl -z-10" />
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 md:p-10 rounded-3xl backdrop-blur-md flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/4 aspect-[2/3] bg-zinc-800 rounded-xl overflow-hidden relative group shadow-2xl shadow-purple-900/20 flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-zinc-600">
                <span className="font-bold text-xl">Poster</span>
              </div>
              <img 
                src="/work1.jpg" 
                alt="Desire the Series" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>

            <div className="w-full md:w-3/4 space-y-4 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold tracking-wider mb-1">
                Latest Highlights
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {language === 'en' ? 'Desire the Series' : 'เกมร้ายใคร่รัก'}
              </h3>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                 <span className="px-3 py-1 bg-zinc-800 rounded text-xs text-gray-300">2025</span>
                 <span className="px-3 py-1 bg-zinc-800 rounded text-xs text-gray-300">Drama</span>
              </div>

              <p className="text-lg text-gray-300">
                {t('work.role1')}: <span className="text-white font-bold text-xl ml-2">{language === 'en' ? 'HuaYong' : 'ฮวาหย่ง'}</span>
              </p>

              <div className="pt-5 border-t border-zinc-700/50">
                <p className="text-gray-400 text-xs mb-3 uppercase tracking-widest">Watch on</p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a 
                    href="https://www.monomax.me/title/105413-a-b-o-desire.html#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#E50914] text-white rounded font-bold text-xs hover:opacity-90 transition-opacity"
                  >
                    MONOMAX
                  </a>
                  <a 
                    href="https://www.gagaoolala.com/en/videos/5570/desire-2025" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#00A0E9] text-white rounded font-bold text-xs hover:opacity-90 transition-opacity"
                  >
                    GAGAOOLALA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filmography Timeline */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white border-b border-zinc-800 pb-3">
            <Film className="text-primary-light w-5 h-5" />
            {t('works.drama')}
          </h3>

          <div className="space-y-8 border-l border-zinc-800 ml-3 md:ml-0">
            {filmography.map((yearGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.08 }}
                className="relative pl-6 md:pl-0 md:grid md:grid-cols-[80px_1fr] md:gap-6"
              >
                {/* Year */}
                <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-primary-light md:relative md:left-auto md:top-auto md:bg-transparent md:text-right">
                  <span className="hidden md:block text-lg font-semibold text-primary-light">
                    {yearGroup.year}
                  </span>
                </div>
                <span className="md:hidden text-lg font-semibold text-primary-light mb-3 block">
                  {yearGroup.year}
                </span>

                {/* Works */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {yearGroup.works.map((work, wIndex) => (
                    <div
                      key={wIndex}
                      className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-lg hover:border-primary-dark/40 transition-colors"
                    >
                      <h4 className="font-semibold text-base text-white mb-0.5">
                        {work.title[language]}
                      </h4>
                      <p className="text-xs text-gray-400 mb-1">
                        {t('work.role1')}:{" "}
                        <span className="text-gray-300">
                          {work.role[language]}
                        </span>
                      </p>
                      <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">
                        {work.platform}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Music & Variety */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          {/* Music (2/3) */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-5 flex items-center gap-2 text-white border-b border-zinc-800 pb-3">
              <Music className="text-primary-light w-5 h-5" />
              {t('works.music')}
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {music.map((song, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.03 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800 hover:border-primary-dark/40 transition-colors"
                >
                  <span className="w-7 h-7 shrink-0 rounded-full bg-primary-dark/20 text-primary-light flex items-center justify-center text-[11px] font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-200 leading-snug">
                    {song}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Variety (1/3) */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-5 flex items-center gap-2 text-white border-b border-zinc-800 pb-3">
              <Tv className="text-primary-light w-5 h-5" />
              Variety Show
            </h3>

            <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-lg relative overflow-hidden hover:border-primary-dark/40 transition-colors">
              <div className="absolute top-0 right-0 p-3 opacity-5">
                <Tv size={64} />
              </div>

              <h4 className="text-base font-semibold text-white mb-1">
                ASIA SUPER YOUNG
              </h4>
              <p className="text-xs text-gray-400">
                TVB
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
