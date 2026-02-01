'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const scheduleData = [
  { 
    date: { en: '03 FEB', th: '03 ก.พ.' }, 
    time: 'tba.',
    event: { en: 'Skiing Vlog', th: 'Vlog เล่นสกี' }, 
    location: 'Weibo : @ DESIRE4_' 
  },
  { 
    date: { en: '03 FEB', th: '03 ก.พ.' }, 
    time: '23:00',
    event: { en: '"Chun Gui Yin" (Introduction to the Return of Spring) - Spring Festival Celebration Song', th: '"Chun Gui Yin" (บทนำแห่งการหวนคืนของวสันตฤดู) บทเพลงร่วมฉลองวันเริ่มต้นฤดูใบไม้ผลิ' }, 
    location: 'QQ Music / Kugou / JOOX' 
  },
  { 
    date: { en: '04 FEB', th: '04 ก.พ.' }, 
    time: '16:00',
    event: { en: 'Desire4 Acting Camp Ep. 2 Teaser', th: 'ตัวอย่างรายการ Desire4 Acting Camp ตอนที่ 2' }, 
    location: 'Weibo : @ ABODesire_Official' 
  },
  { 
    date: { en: '07 FEB', th: '07 ก.พ.' }, 
    time: '19:00',
    event: { en: 'Desire4 Acting Camp Ep.2 (Special Extended Version)', th: 'รายการ Desire4 Acting Camp ตอนที่ 2 (เวอร์ชั่นเพิ่มตอนพิเศษ)' }, 
    location: 'Weibo : @ ABODesire_Official' 
  },
  { 
    date: { en: '08 FEB', th: '08 ก.พ.' }, 
    time: 'tba.',
    event: { en: 'Reaction Desire4 Acting Camp EP.2', th: 'รีแอคชัน Desire4 Acting Camp EP.2' }, 
    location: 'Weibo : @ ABODesire_Official' 
  },
  { 
    date: { en: '11 FEB', th: '11 ก.พ.' }, 
    time: '16:00',
    event: { en: 'Desire4 Acting Camp Ep.3 Teaser', th: 'ตัวอย่างรายการ Desire4 Acting Camp EP.3' }, 
    location: 'Weibo : @ ABODesire_Official' 
  },
  { 
    date: { en: '13 FEB', th: '13 ก.พ.' }, 
    time: '23:00',
    event: { en: 'Special Duet Song (Valentine\'s Gift)', th: 'บทเพลงคู่สุดพิเศษจากหวงซิง & ชิวติ่งเจี๋ย ของขวัญต้อนรับเทศกาลแห่งความรัก' }, 
    location: 'QQ Music / Kugou / JOOX' 
  },
  { 
    date: { en: '14 FEB', th: '14 ก.พ.' }, 
    time: '19:00',
    event: { en: 'Desire4 Acting Camp Ep.3', th: 'รายการ Desire4 Acting Camp EP.3' }, 
    location: 'Weibo : @ ABODesire_Official' 
  },
];

export default function Schedule() {
  const { t, language } = useLanguage();

  return (
    <section className="py-10 md:py-20 px-4 bg-white text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/schedule.jpg" 
          alt="Schedule Background" 
          className="w-full h-full object-cover opacity-70 blur-sm"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }} // Re-triggers animation
          className="text-4xl font-bold text-center mb-8 md:mb-12 text-primary-light"
        >
          {t('schedule.title')}
        </motion.h2>

        <div className="space-y-4">
          <div className="hidden md:flex px-6 pb-2 text-sm text-gray-500 uppercase tracking-widest font-medium">
            <div className="w-24">{t('schedule.date')}</div>
            <div className="w-24 text-center">{t('schedule.time')}</div>
            <div className="flex-grow">{t('schedule.event')}</div>
            <div className="w-32 text-right">{t('schedule.location')}</div>
          </div>

          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }} // Re-triggers animation
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-center justify-between p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:bg-gray-50 hover:border-primary-dark/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full">
                 <div className="text-xl font-bold text-primary-light min-w-[100px] text-center md:text-left">
                  {item.date[language]}
                 </div>
                 
                 <div className="text-lg font-mono text-gray-500 min-w-[80px] text-center border-l-0 md:border-l border-gray-200 md:pl-8">
                   {item.time}
                 </div>

                 <div className="flex-grow text-center md:text-left md:pl-4">
                   <h3 className="text-lg font-medium group-hover:text-primary-dark transition-colors">
                     {item.event[language]}
                   </h3>
                 </div>
                 <div className="text-sm text-gray-400 font-mono tracking-wider min-w-[100px] text-center md:text-right">
                   {item.location}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
