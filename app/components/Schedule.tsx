'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const scheduleData = [
  { 
    date: { en: '18 MAR', th: '18 มี.ค.' }, 
    time: '10:25',
    event: { en: 'Teaser Poster Release [THE WHOO]', th: 'ปล่อยภาพโปสเตอร์ทีเซอร์ THE WHOO' }, 
    location: 'Weibo : THE_WHOO' 
  },
  { 
    date: { en: '18 MAR', th: '18 มี.ค.' }, 
    time: '16:00',
    event: { en: 'Desire4 Acting Camp Ep.8 Teaser', th: 'ตัวอย่างรายการ Desire4 Acting Camp Ep.8' }, 
    location: 'Weibo : \n@ ABODesire_Official' 
  },
  { 
    date: { en: '19 MAR', th: '19 มี.ค.' }, 
    time: '10:25',
    event: { en: 'Teaser Poster Release [THE WHOO]', th: 'ปล่อยภาพโปสเตอร์ทีเซอร์ THE WHOO' }, 
    location: 'Weibo : THE_WHOO' 
  },
  { 
    date: { en: '20 MAR', th: '20 มี.ค.' }, 
    time: '09:00',
    event: { en: 'Official Promo & Presale [THE WHOO]', th: 'ประกาศเปิดตัวภาพโปรโมทหลัก & พรีเซลล์ THE WHOO' }, 
    location: 'Weibo : THE_WHOO' 
  },
  { 
    date: { en: '20 MAR', th: '20 มี.ค.' }, 
    time: '09:30',
    event: { en: 'Post Ad Video [THE WHOO]', th: 'ศิลปินโพสต์คลิปวิดีโอโฆษณา THE WHOO' }, 
    location: 'Weibo : THE_WHOO' 
  },
  { 
    date: { en: '20 MAR', th: '20 มี.ค.' }, 
    time: '10:25',
    event: { en: 'Activity Guidelines [THE WHOO]', th: 'แจกไกด์ไลน์กิจกรรม THE WHOO' }, 
    location: 'Weibo : THE_WHOO' 
  },
  { 
    date: { en: '21 MAR', th: '21 มี.ค.' }, 
    time: '19:00',
    event: { en: 'Desire4 Acting Camp Ep.8', th: 'รายการ Desire4 Acting Camp Ep.8' }, 
    location: 'Weibo : \n@ ABODesire_Official' 
  },
  { 
    date: { en: '22 MAR', th: '22 มี.ค.' }, 
    time: '10:25',
    event: { en: 'Behind The Scenes [THE WHOO]', th: 'ปล่อยคลิปเบื้องหลังการถ่ายทำ THE WHOO' }, 
    location: 'Weibo : THE_WHOO' 
  },
  { 
    date: { en: '25 MAR', th: '25 มี.ค.' }, 
    time: '16:00',
    event: { en: 'Desire4 Acting Camp Ep.9 Teaser', th: 'ตัวอย่างรายการ Desire4 Acting Camp Ep.9' }, 
    location: 'Weibo : \n@ ABODesire_Official' 
  },
  { 
    date: { en: '25 MAR', th: '25 มี.ค.' }, 
    time: 'tba',
    event: { en: 'Transformation Video [THE WHOO]', th: 'ศิลปินโพสต์คลิปวิดีโอเปลี่ยนลุค THE WHOO' }, 
    location: 'Douyin' 
  },
  { 
    date: { en: '26 MAR', th: '26 มี.ค.' }, 
    time: '10:25',
    event: { en: 'Behind The Scenes [THE WHOO]', th: 'ปล่อยคลิปเบื้องหลังการถ่ายทำ THE WHOO' }, 
    location: 'THE WHOO' 
  },
  { 
    date: { en: '28 MAR', th: '28 มี.ค.' }, 
    time: '19:00',
    event: { en: 'Desire4 Acting Camp Ep.9', th: 'รายการ Desire4 Acting Camp Ep.9' }, 
    location: 'Weibo : \n@ ABODesire_Official' 
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
