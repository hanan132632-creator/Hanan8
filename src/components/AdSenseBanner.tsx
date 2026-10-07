import React, { useEffect } from 'react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

const ADSENSE_CLIENT_ID = 'ca-pub-3298241753177072';

interface AdSenseBannerProps {
  type: 'leaderboard' | 'sidebar' | 'in_article';
  language: Language;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({ type, language }) => {
  const t = TRANSLATIONS[language];

  useEffect(() => {
    try {
      const win = window as unknown as { adsbygoogle?: unknown[] };
      win.adsbygoogle = win.adsbygoogle || [];
      win.adsbygoogle.push({});
    } catch {
      // Ignore adsbygoogle errors in development
    }
  }, []);

  if (type === 'leaderboard') {
    return (
      <div className="w-full my-8">
        <div className="max-w-4xl mx-auto border border-[#D4AF37]/25 bg-[#FAF8F5]/90 rounded-xl p-4 text-center overflow-hidden">
          <div className="text-[11px] tracking-wider uppercase text-[#8C7A5B] font-medium mb-2">
            {t.adDisclosure}
          </div>
          {/* Real Google AdSense Unit */}
          <ins
            className="adsbygoogle"
            style={{ display: 'block', minHeight: '90px' }}
            data-ad-client={ADSENSE_CLIENT_ID}
            data-ad-slot="auto"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          <div className="mt-2 text-[10px] text-[#8C7A5B]/80">
            {language === 'ar'
              ? 'مساحة إعلانية متوافقة مع Google AdSense (ca-pub-3298241753177072)'
              : 'Google AdSense Verified Placement (ca-pub-3298241753177072)'}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sidebar') {
    return (
      <div className="w-full my-6 border border-[#D4AF37]/25 bg-[#FAF8F5] rounded-xl p-4 text-center overflow-hidden">
        <div className="text-[10px] tracking-wider uppercase text-[#8C7A5B] font-medium mb-2">
          {t.adDisclosure}
        </div>
        {/* Real Google AdSense Skyscraper/Rectangle Unit */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: '250px' }}
          data-ad-client={ADSENSE_CLIENT_ID}
          data-ad-slot="auto"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <div className="mt-2 text-[10px] text-[#8C7A5B]/80">
          {language === 'ar' ? 'إعلان Google AdSense معتمد' : 'Google AdSense Verified Ad Unit'}
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 py-2">
      <div className="border border-dashed border-[#D4AF37]/35 bg-[#FAF8F5] rounded-xl p-4 text-center overflow-hidden">
        <div className="text-[10px] tracking-wider uppercase text-[#8C7A5B] font-medium mb-1.5">
          {t.adDisclosure}
        </div>
        {/* Real In-Article Google AdSense Unit */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client={ADSENSE_CLIENT_ID}
          data-ad-slot="auto"
        />
        <div className="mt-1.5 text-[10px] text-[#8C7A5B]/80">
          {language === 'ar'
            ? 'مساحة إعلانية مدمجة Google AdSense داخل المحتوى'
            : 'Google AdSense Native In-Article Placement'}
        </div>
      </div>
    </div>
  );
};
