'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type Language = 'en' | 'th' | 'cn';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string; // Simple translation helper
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<string, Record<Language, string>> = {
  // Hero
  'hero.title': { en: 'HUANG XING', th: 'หวง ซิง', cn: '黄 兴' },
  'hero.subtitle': { en: 'Actor • Singer • Artist', th: 'นักแสดง • นักร้อง • ศิลปิน', cn: '演员 • 歌手 • 艺术家' },
  
  // Profile / About
  'about.title': { en: 'Profile', th: 'ประวัติส่วนตัว', cn: '个人资料' },
  'profile.name': { en: 'Huang Xing (Eliott)', th: 'หวง ซิง (Eliott)', cn: '黄星 (Eliott)' },
  'profile.origname': { en: 'Original Name: Huang Xin', th: 'ชื่อเดิม: หวงซิน', cn: '原名: 黄鑫' },
  'profile.dob': { en: 'Nov 25, 1999', th: '25 พ.ย. 1999', cn: '1999年11月25日' },
  'profile.hometown': { en: 'Quanzhou, Fujian', th: 'เมืองเฉวียนโจว มณฑลฟูเจี้ยน', cn: '福建泉州' },
  'profile.education': { en: 'Central Academy of Fine Arts', th: 'สถาบันศิลปะกลาง (CAFA)', cn: '中央美术学院' },
  'profile.height': { en: 'Height', th: 'ส่วนสูง', cn: '身高' },
  'profile.mbti': { en: 'MBTI', th: 'MBTI', cn: 'MBTI' },
  'profile.fandom': { en: 'Fandom', th: 'ชื่อแฟนคลับ', cn: '粉丝名' },
  'profile.fandomName': { en: 'Xiao Xing Gan', th: 'เสี่ยวซิงกาน (小星肝)', cn: '小星肝' },
  'profile.color': { en: 'Official Color', th: 'สีประจำตัว', cn: '应援色' },
  'profile.hobbies': { en: 'Hobbies', th: 'งานอดิเรก', cn: '爱好' },
  'profile.hobbiesList': { en: 'Drawing, Dancing, Singing', th: 'วาดรูป, เต้น, ร้องเพลง', cn: '绘画, 跳舞, 唱歌' },
  'profile.animal': { en: 'Animal', th: 'สัตว์แทนตัว', cn: '代表动物' },
  
  // Schedule
  'schedule.title': { en: 'Upcoming Schedule', th: 'ตารางงานเร็วๆ นี้', cn: '近期行程' },
  'schedule.date': { en: 'Date', th: 'วันที่', cn: '日期' },
  'schedule.time': { en: 'Time', th: 'เวลา', cn: '时间' },
  'schedule.event': { en: 'Event', th: 'กิจกรรม', cn: '活动' },
  'schedule.location': { en: 'Location', th: 'สถานที่', cn: '地点' },
  'schedule.socialsLink': { en: 'Check Monthly Schedule on Social Media', th: 'ติดตามตารางงานรายเดือนได้ที่โซเชียลมีเดีย', cn: '在社交媒体上查看每月日程' },

  // Gallery
  'gallery.title': { en: 'Gallery', th: 'แกลเลอรี', cn: '画廊' },

  // Socials
  'socials.title': { en: 'Follow Huang Xing', th: 'ติดตาม หวง ซิง', cn: '关注 黄兴' },

  // Navigation
  'nav.schedule': { en: 'Schedule', th: 'ตารางงาน', cn: '行程' },
  'nav.gallery': { en: 'Gallery', th: 'แกลเลอรี', cn: '画廊' },
  'nav.socials': { en: 'Socials', th: 'โซเชียลมีเดีย', cn: '社交媒体' },

  // Works
  'works.title': { en: 'Selected Works', th: 'ผลงานเด่น', cn: '代表作品' },
  'works.drama': { en: 'Drama Series', th: 'ละครโทรทัศน์', cn: '电视剧' },
  'works.music': { en: 'Music', th: 'ผลงานเพลง', cn: '音乐作品' },
  
  // Specific Works
  'work.forbidden': { en: 'The Forbidden Woman', th: 'The Forbidden Woman', cn: 'The Forbidden Woman' },
  'work.role1': { en: 'Main Role', th: 'นักแสดงนำ', cn: '主演' },
  'work.amnesia': { en: "Master Gu's Amnesia Sweet Wife", th: "Master Gu's Amnesia Sweet Wife", cn: "Master Gu's Amnesia Sweet Wife" },
  'work.desire4': { en: 'DESIRE4', th: 'DESIRE4', cn: 'DESIRE4' },
  'work.role2': { en: 'Boy Group Member', th: 'สมาชิกวงบอยกรุ๊ป', cn: '男团成员' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'th') return 'en';
      if (prev === 'en') return 'cn';
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
