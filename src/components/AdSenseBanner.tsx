import React from 'react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface AdSenseBannerProps {
  type: 'leaderboard' | 'sidebar' | 'in_article';
  language: Language;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({ type, language }) => {
  const t = TRANSLATIONS[language];

  if (type === 'leaderboard') {
    return (
      <div className="w-full my-8">
        <div className="max-w-4xl mx-auto border border-[#D4AF37]/25 bg-[#FAF8F5]/80 rounded-xl p-4 text-center">
          <div className="text-[11px] tracking-wider uppercase text-[#8C7A5B] font-medium mb-2">
            {t.adDisclosure}
          </div>
          <div className="h-24 sm:h-28 bg-gradient-to-r from-[#18181B]/5 via-[#D4AF37]/10 to-[#18181B]/5 rounded-lg flex flex-col items-center justify-center p-3 border border-[#D4AF37]/15">
            <span className="text-xs sm:text-sm font-medium text-[#18181B]/80 font-serif-luxury">
              {language === 'ar'
                ? 'مساحة إعلانية متوافقة مع سياسات شبكة Google AdSense الإعلانية'
                : 'Verified Google AdSense Responsive Display Banner Slot'}
            </span>
            <span className="text-[11px] text-[#8C7A5B] mt-1">
              {language === 'ar'
                ? 'إعلانات تفاعلية ملائمة لاهتمامات مقتني التحف والمجوهرات الراقية (728x90 / Responsive)'
                : 'Targeted High Jewelry & Luxury Lifestyle Contextual Placement'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sidebar') {
    return (
      <div className="w-full my-6 border border-[#D4AF37]/25 bg-[#FAF8F5] rounded-xl p-4 text-center">
        <div className="text-[10px] tracking-wider uppercase text-[#8C7A5B] font-medium mb-2">
          {t.adDisclosure}
        </div>
        <div className="h-64 bg-gradient-to-b from-[#18181B]/5 via-[#D4AF37]/10 to-[#18181B]/5 rounded-lg flex flex-col items-center justify-center p-4 border border-[#D4AF37]/15">
          <span className="text-xs font-semibold text-[#18181B]/80 font-serif-luxury">
            {language === 'ar' ? 'مساحة إعلان عمودي Google AdSense' : 'Google AdSense Skyscraper Slot'}
          </span>
          <span className="text-[11px] text-[#8C7A5B] mt-2">
            {language === 'ar' ? 'إعلانات فاخرة معتمدة (300x250)' : 'Responsive 300x250 Rectangle Unit'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 py-2">
      <div className="border border-dashed border-[#D4AF37]/35 bg-[#FAF8F5] rounded-xl p-4 text-center">
        <div className="text-[10px] tracking-wider uppercase text-[#8C7A5B] font-medium mb-1.5">
          {t.adDisclosure}
        </div>
        <div className="h-20 bg-gradient-to-r from-[#D4AF37]/5 via-[#064E3B]/5 to-[#D4AF37]/5 rounded-lg flex flex-col items-center justify-center p-2">
          <span className="text-xs text-[#18181B]/75 font-serif-luxury">
            {language === 'ar'
              ? 'مساحة إعلانية مدمجة داخل محتوى المقال (In-Article Ad Unit)'
              : 'Native In-Article Contextual Ad Placement'}
          </span>
        </div>
      </div>
    </div>
  );
};
