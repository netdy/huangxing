'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const scheduleData = [
  { 
    date: { en: '1 APR', th: '1 เม.ย.' }, 
    time: '16:00',
    event: { en: 'Desire4 Acting Camp EP.10 Teaser', th: 'ตัวอย่างรายการ Desire4 Acting Camp EP.10' }, 
    location: 'Weibo : @ABODesire_Official' 
  },
  { 
    date: { en: '2 APR', th: '2 เม.ย.' }, 
    time: '10:25',
    event: { en: 'Creative Greeting Video Release [ELIOT HUANG x THE WHOO]', th: 'ปล่อยคลิปวิดีโอทักทายสุดครีเอทีฟ [ELIOT HUANG x THE WHOO]' }, 
    location: '-' 
  },
  { 
    date: { en: '4 APR', th: '4 เม.ย.' }, 
    time: '19:00',
    event: { en: 'Desire4 Acting Camp EP.10', th: 'รายการ Desire4 Acting Camp EP.10' }, 
    location: 'Weibo : @ABODesire_Official' 
  },
  { 
    date: { en: '8 APR', th: '8 เม.ย.' }, 
    time: '16:00',
    event: { en: 'Desire4 Acting Camp EP.11 Teaser', th: 'ตัวอย่างรายการ Desire4 Acting Camp EP.11' }, 
    location: 'Weibo : @ABODesire_Official' 
  },
  { 
    date: { en: '11 APR', th: '11 เม.ย.' }, 
    time: '19:00',
    event: { en: 'Desire4 Acting Camp EP.11', th: 'รายการ Desire4 Acting Camp EP.11' }, 
    location: 'Weibo : @ABODesire_Official' 
  },
  { 
    date: { en: '15 APR', th: '15 เม.ย.' }, 
    time: '16:00',
    event: { en: 'Desire4 Acting Camp EP.12 Teaser', th: 'ตัวอย่างรายการ Desire4 Acting Camp EP.12' }, 
    location: 'Weibo : @ABODesire_Official' 
  },
  { 
    date: { en: '18 APR', th: '18 เม.ย.' }, 
    time: '19:00',
    event: { en: 'Desire4 Acting Camp EP.12', th: 'รายการ Desire4 Acting Camp EP.12' }, 
    location: 'Weibo : @ABODesire_Official' 
  },
  { 
    date: { en: '22 APR', th: '22 เม.ย.' }, 
    time: 'TBA',
    event: { en: 'D-Departure / Desire4 Acting Camp (Reaction EP?) Teaser', th: 'ตัวอย่างรายการ D-Departure / Desire4 Acting Camp (Reaction EP?)' }, 
    location: 'Weibo : @ABODesire_Official' 
  },
  { 
    date: { en: '25 APR', th: '25 เม.ย.' }, 
    time: 'TBA',
    event: { en: 'WIEA International Entertainment Festival', th: 'WIEA International Entertainment Festival' }, 
    location: 'Galaxy Arena Macau' 
  },
  { 
    date: { en: '25 APR', th: '25 เม.ย.' }, 
    time: 'TBA',
    event: { en: 'D-Departure / Desire4 Acting Camp (Reaction EP?)', th: 'รายการ D-Departure / Desire4 Acting Camp (Reaction EP?)' }, 
    location: 'Weibo : @ABODesire_Official' 
  },
  { 
    date: { en: '29 APR', th: '29 เม.ย.' }, 
    time: 'TBA',
    event: { en: 'Secret Vlog Teaser', th: 'ตัวอย่าง Vlog พิเศษ (Secret Vlog)' }, 
    location: 'TBA' 
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
          viewport={{ once: true, amount: 0.8 }} // Re-triggers animation
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
              viewport={{ once: true, margin: "-100px" }} // Re-triggers animation
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
