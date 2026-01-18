'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string; // Simple translation helper
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<string, Record<Language, string>> = {
  // Hero
  'hero.title': { en: 'HUANG XING', th: 'หวงซิง' },
  'hero.subtitle': { en: 'Actor • Singer • Artist', th: 'นักแสดง • นักร้อง • ศิลปิน' },
  
  // Profile / About
  'about.title': { en: 'Profile', th: 'ประวัติส่วนตัว' },
  'profile.name': { en: 'HUANGXING (Eliot)', th: 'หวงซิง (Eliot)' },
  'profile.origname': { en: 'Original Name: Huang Xin', th: 'ชื่อเดิม: หวงซิน' },
  'profile.dobLabel': { en: 'BIRTHDAY', th: 'วันเกิด' },
  'profile.dob': { en: 'Nov 25, 1999', th: '25 พ.ย. 1999' },
  'profile.hometownLabel': { en: 'HOMETOWN', th: 'บ้านเกิด' },
  'profile.hometown': { en: 'Quanzhou, Fujian', th: 'เมืองเฉวียนโจว มณฑลฟูเจี้ยน' },
  'profile.educationLabel': { en: 'EDUCATION', th: 'การศึกษา' },
  'profile.education': { en: 'Central Academy of Fine Arts', th: 'สถาบันศิลปะกลาง (CAFA)' },
  'profile.height': { en: 'HEIGHT', th: 'ส่วนสูง' },
  'profile.mbti': { en: 'MBTI', th: 'MBTI' },
  'profile.fandom': { en: 'Fandom', th: 'ชื่อแฟนคลับ' },
  'profile.fandomName': { en: 'XiaoXingGan (小星肝)', th: 'เสี่ยวซิงกาน (小星肝)' },
  'profile.color': { en: 'Official Color', th: 'สีประจำตัว' },
  'profile.hobbies': { en: 'Hobbies', th: 'งานอดิเรก' },
  'profile.hobbiesList': { en: 'Drawing, Dancing, Singing', th: 'วาดรูป, เต้น, ร้องเพลง' },
  'profile.animal': { en: 'Animal', th: 'สัตว์แทนตัว' },
  
  // Schedule
  'schedule.title': { en: 'Upcoming Schedule', th: 'ตารางงานเร็วๆ นี้' },
  'schedule.date': { en: 'Date', th: 'วันที่' },
  'schedule.time': { en: 'Time', th: 'เวลา' },
  'schedule.event': { en: 'Event', th: 'กิจกรรม' },
  'schedule.location': { en: 'Location', th: 'สถานที่' },
  'schedule.socialsLink': { en: 'Check Monthly Schedule on Social Media', th: 'ติดตามตารางงานรายเดือนได้ที่โซเชียลมีเดีย' },

  // Gallery
  'gallery.title': { en: 'Gallery', th: 'แกลเลอรี' },

  // Socials
  'socials.title': { en: 'Follow Huang Xing', th: 'ช่องทางการติดตามหวงซิง' },

  // Navigation
  'nav.schedule': { en: 'Schedule', th: 'ตารางงาน' },
  'nav.gallery': { en: 'Gallery', th: 'แกลเลอรี' },
  'nav.socials': { en: 'Socials', th: 'โซเชียลมีเดีย' },

  // Works
  'works.title': { en: 'Works', th: 'ผลงาน' },
  'works.drama': { en: 'Drama Series', th: 'ละครโทรทัศน์' },
  'works.music': { en: 'Music', th: 'ผลงานเพลง' },
  
  // Specific Works
  'work.forbidden': { en: 'The Forbidden Woman', th: 'The Forbidden Woman' },
  'work.role1': { en: 'Role', th: 'รับบท' },
  'work.amnesia': { en: "Master Gu's Amnesia Sweet Wife", th: "Master Gu's Amnesia Sweet Wife" },
  'work.desire4': { en: 'DESIRE4', th: 'DESIRE4' },
  'work.role2': { en: 'Boy Group Member', th: 'สมาชิกวงบอยกรุ๊ป' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('th'); // Default to Thai

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'th') return 'en';
      return 'th';
    });
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
