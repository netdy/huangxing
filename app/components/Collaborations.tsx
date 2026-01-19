'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Collaborations() {
  const { t } = useLanguage();

  // 7 Solo Brands (Edit names, roles, and images here)
  const soloBrands = [
    { name: '卡姿兰CARSLAN', role: 'BA Black Magnet', image: '/brand/carslan.jpg' },
    { name: '阿芙AFU', role: 'BA Honey Mask', image: '/brand/afu.jpg' },
    { name: 'SKYNFUTURE肌肤未来', role: 'BA 477 Whitening', image: '/brand/skynfuture.jpg' },
    { name: 'WINONA薇诺娜', role: 'BA 311 Barrier', image: '/brand/winona.jpg' },
    { name: 'PANDORA潘多拉珠宝', role: 'BA', image: '/brand/pandora.jpg' },
    { name: 'MENTHOLATUM', role: 'BA', image: '/brand/mentro.jpg' },
    { name: 'REDCHAMBER朱栈', role: 'BA', image: '/brand/rc.jpg' },
  ];

  // 6 Brands with QIUDINGJIE (Edit names, roles, and images here)
  const sharedBrands = [
    { name: 'EHD', role: 'BA', image: '/brand/ehd.jpg' },
    { name: 'HOMEFACIALPRO', role: 'BA', image: '/brand/hfp.jpg' },
    { name: 'SOCORSKIN', role: 'BA', image: '/brand/socorskin.jpg' },
    { name: 'MERRYCHENG', role: 'BA', image: '/brand/merrycheng.jpg' },
    { name: 'MISTINE', role: 'BA', image: '/brand/mistine.jpg' },
    { name: 'LAFANG', role: 'BA', image: '/brand/lafang.jpg' },
  ];

  const renderBrands = (brands: typeof soloBrands, titleKey: string) => (
    <div className="mb-10 last:mb-0">
      <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-primary-light pl-4">
        {t(titleKey)}
      </h3>
      <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group flex flex-col items-center gap-2 w-28"
          >
            <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center group-hover:border-primary-light transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(152,200,255,0.2)]">
              <img 
                src={brand.image} 
                alt={brand.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="text-center">
              <h4 className="text-xs font-bold text-gray-200 group-hover:text-white transition-colors truncate w-full">
                {brand.name}
              </h4>
              <p className="text-[10px] text-primary-light/80 mt-0.5 font-medium truncate w-full">
                {brand.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="brands" className="py-10 bg-zinc-950/50 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('brands.title')}
          </h2>
        </motion.div>

        {renderBrands(soloBrands, 'brands.solo')}
        {renderBrands(sharedBrands, 'brands.shared')}
      </div>
    </section>
  );
}
