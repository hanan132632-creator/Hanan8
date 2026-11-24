import React, { useState, useEffect } from 'react';
import { ShieldCheck, Settings, X } from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface CookieBannerProps {
  language: Language;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [consentSaved, setConsentSaved] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(true);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('royal_elite_cookie_consent');
      if (saved) {
        const parsed = JSON.parse(saved);
        setMarketingConsent(parsed.marketing ?? true);
        setAnalyticsConsent(parsed.analytics ?? true);
        setConsentSaved(true);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'royal_elite_cookie_consent',
      JSON.stringify({ essential: true, marketing: true, analytics: true, timestamp: Date.now() })
    );
    setMarketingConsent(true);
    setAnalyticsConsent(true);
    setConsentSaved(true);
    setShowPreferences(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(
      'royal_elite_cookie_consent',
      JSON.stringify({ essential: true, marketing: false, analytics: false, timestamp: Date.now() })
    );
    setMarketingConsent(false);
    setAnalyticsConsent(false);
    setConsentSaved(true);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      'royal_elite_cookie_consent',
      JSON.stringify({ essential: true, marketing: marketingConsent, analytics: analyticsConsent, timestamp: Date.now() })
    );
    setConsentSaved(true);
    setShowPreferences(false);
  };

  return (
    <section
      aria-label={language === 'ar' ? 'خصوصية العميل وملفات تعريف الارتباط' : 'Client Privacy & Cookie Preferences'}
      className="w-full bg-[#121215] text-[#FAF8F5] border-t border-[#D4AF37]/25 py-2.5 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 text-[11px]">
            <div className="flex items-center gap-2 text-center md:text-start">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 hidden sm:block" />
              <p className="text-[#FAF8F5]/80 leading-snug">
                <span className="font-semibold text-[#D4AF37] me-1.5">
                  {language === 'ar' ? 'خصوصية العميل:' : 'Client Privacy:'}
                </span>
                {consentSaved
                  ? language === 'ar'
                    ? 'تم حفظ تفضيلات الخصوصية وملفات الارتباط بنجاح.'
                    : 'Your privacy and cookie preferences are saved.'
                  : t.cookieBannerText}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 shrink-0">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-2.5 py-1 text-[11px] text-[#FAF8F5]/75 hover:text-white border border-white/15 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Settings className="w-3 h-3" />
                <span>
                  {consentSaved
                    ? language === 'ar'
                      ? 'تعديل الخيارات'
                      : 'Manage'
                    : t.cookieCustomize}
                </span>
              </button>

              {!consentSaved && (
                <>
                  <button
                    onClick={handleEssentialOnly}
                    className="px-2.5 py-1 text-[11px] font-medium text-[#FAF8F5]/90 hover:text-white bg-white/10 hover:bg-white/15 rounded-md transition-colors cursor-pointer"
                  >
                    {t.cookieEssentialOnly}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-3 py-1 text-[11px] font-semibold text-[#18181B] bg-[#D4AF37] hover:bg-[#B8902A] rounded-md transition-colors cursor-pointer"
                  >
                    {t.cookieAcceptAll}
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="py-1.5 space-y-2.5">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-xs font-semibold text-[#D4AF37] font-serif-luxury">
                {language === 'ar' ? 'إعدادات خصوصية العميل وملفات الارتباط' : 'Client Privacy & Cookie Settings'}
              </span>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-white/60 hover:text-white cursor-pointer"
                aria-label={t.close}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
              <div className="p-2 rounded-md bg-white/5 border border-white/10 flex items-center justify-between gap-2">
                <span className="font-medium text-[#FAF8F5]">
                  {language === 'ar' ? 'الملفات الأساسية' : 'Essential'}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  {language === 'ar' ? 'إلزامي' : 'Required'}
                </span>
              </div>

              <label className="p-2 rounded-md bg-white/5 border border-white/10 flex items-center justify-between gap-2 cursor-pointer">
                <span className="font-medium text-[#FAF8F5]">
                  {language === 'ar' ? 'التسويق والشراكات' : 'Marketing'}
                </span>
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="w-3.5 h-3.5 accent-[#D4AF37] cursor-pointer"
                />
              </label>

              <label className="p-2 rounded-md bg-white/5 border border-white/10 flex items-center justify-between gap-2 cursor-pointer">
                <span className="font-medium text-[#FAF8F5]">
                  {language === 'ar' ? 'التحليلات والأداء' : 'Analytics'}
                </span>
                <input
                  type="checkbox"
                  checked={analyticsConsent}
                  onChange={(e) => setAnalyticsConsent(e.target.checked)}
                  className="w-3.5 h-3.5 accent-[#D4AF37] cursor-pointer"
                />
              </label>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-2.5 py-1 text-[11px] text-white/70 hover:text-white cursor-pointer"
              >
                {t.close}
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-3 py-1 text-[11px] font-semibold text-[#18181B] bg-[#D4AF37] hover:bg-[#B8902A] rounded-md cursor-pointer"
              >
                {language === 'ar' ? 'حفظ الخيارات' : 'Save'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

