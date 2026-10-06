import React, { useState, useEffect } from 'react';
import { ShieldCheck, Settings, Check, X } from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface CookieBannerProps {
  language: Language;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [adSenseConsent, setAdSenseConsent] = useState(true);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('royal_elite_cookie_consent');
    if (!consent) {
      // Delay prompt slightly for elegance
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'royal_elite_cookie_consent',
      JSON.stringify({ essential: true, adsense: true, analytics: true, timestamp: Date.now() })
    );
    setIsOpen(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(
      'royal_elite_cookie_consent',
      JSON.stringify({ essential: true, adsense: false, analytics: false, timestamp: Date.now() })
    );
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      'royal_elite_cookie_consent',
      JSON.stringify({ essential: true, adsense: adSenseConsent, analytics: analyticsConsent, timestamp: Date.now() })
    );
    setShowPreferences(false);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none">
      <div className="max-w-4xl mx-auto bg-[#18181B] text-[#FAF8F5] border border-[#D4AF37]/40 rounded-2xl p-5 shadow-2xl pointer-events-auto backdrop-blur-md">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#D4AF37] font-serif-luxury mb-1">
                  {language === 'ar' ? 'خصوصية العميل وملفات تعريف الارتباط الملكية' : 'Sovereign Privacy & Cookie Preference'}
                </h4>
                <p className="text-xs text-[#FAF8F5]/80 leading-relaxed max-w-2xl">
                  {t.cookieBannerText}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-end md:self-center shrink-0">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-3 py-1.5 text-xs text-[#FAF8F5]/70 hover:text-white transition-colors border border-white/10 rounded-lg flex items-center gap-1.5"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>{t.cookieCustomize}</span>
              </button>
              <button
                onClick={handleEssentialOnly}
                className="px-3.5 py-1.5 text-xs font-medium text-[#FAF8F5]/90 hover:text-white bg-white/10 hover:bg-white/15 rounded-lg transition-colors"
              >
                {t.cookieEssentialOnly}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-1.5 text-xs font-semibold text-[#18181B] bg-[#D4AF37] hover:bg-[#B8902A] rounded-lg transition-colors shadow-sm"
              >
                {t.cookieAcceptAll}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h4 className="text-sm font-semibold text-[#D4AF37] font-serif-luxury">
                {language === 'ar' ? 'تخصيص أذونات ملفات الارتباط وسياسة Google AdSense' : 'Manage Cookie & AdSense Permissions'}
              </h4>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-[#FAF8F5]">{language === 'ar' ? 'الملفات الأساسية' : 'Strictly Essential'}</span>
                  <span className="text-[10px] text-emerald-400 font-mono">{language === 'ar' ? 'إلزامي' : 'Mandatory'}</span>
                </div>
                <p className="text-[11px] text-white/60">
                  {language === 'ar' ? 'لحفظ حقيبة التسوق، اللغة، وأمان المعاملات.' : 'Core shopping bag, language and security tokens.'}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-[#FAF8F5]">{language === 'ar' ? 'إعلانات AdSense' : 'Google AdSense'}</span>
                  <input
                    type="checkbox"
                    checked={adSenseConsent}
                    onChange={(e) => setAdSenseConsent(e.target.checked)}
                    className="w-4 h-4 accent-[#D4AF37] cursor-pointer"
                  />
                </div>
                <p className="text-[11px] text-white/60">
                  {language === 'ar' ? 'عرض إعلانات ملائمة للاهتمامات ومصادقة AdSense.' : 'Contextual high-jewelry ad units and partner analytics.'}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-[#FAF8F5]">{language === 'ar' ? 'التحليلات والأداء' : 'Analytics & Insight'}</span>
                  <input
                    type="checkbox"
                    checked={analyticsConsent}
                    onChange={(e) => setAnalyticsConsent(e.target.checked)}
                    className="w-4 h-4 accent-[#D4AF37] cursor-pointer"
                  />
                </div>
                <p className="text-[11px] text-white/60">
                  {language === 'ar' ? 'تحسين سرعة الأدوات التفاعلية ودقة الكتالوج.' : 'Tool responsiveness, performance metrics and caching.'}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-3 py-1.5 text-xs text-white/70 hover:text-white"
              >
                {t.close}
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-1.5 text-xs font-semibold text-[#18181B] bg-[#D4AF37] hover:bg-[#B8902A] rounded-lg"
              >
                {language === 'ar' ? 'حفظ الخيارات' : 'Save Preferences'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
