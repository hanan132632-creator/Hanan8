import React from 'react';
import { ShieldCheck, Gem, Award, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface FooterProps {
  language: Language;
  onNavigate: (tab: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-[#18181B] text-[#FAF8F5] border-t border-[#D4AF37]/30 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Manifesto (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif-luxury block">
              {t.brandName}
            </span>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed font-light max-w-sm">
              {language === 'ar'
                ? 'دار المجوهرات الراقية المتخصصة في صياغة الألماس الطبيعي المعتمد دولياً، والذهب الخالص عيار 18k و 21k، والفضة الإسترلينية 925 بأعلى معايير الإتقان والأمانة.'
                : 'Sovereign maison crafting GIA certified diamonds, LBMA investment bullion, and hallmarked 925 British sterling silver for discerning royal connoisseurs.'}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#D4AF37]">
              <span className="flex items-center gap-1">
                <Gem className="w-4 h-4" />
                <span>GIA Member</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                <span>LBMA Bullion</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                <span>925 Hallmark</span>
              </span>
            </div>
          </div>

          {/* Core Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider font-serif-luxury">
              {language === 'ar' ? 'أقسام الموقع الرئيسي' : 'Main Site Sections'}
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.theStore}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'المدونة (4 مقالات معتمدة)' : 'Journal (4 Articles)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.aboutUs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.contactUs}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-[#D4AF37]/90 font-medium"
                >
                  {t.termsOfUse}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.privacyPolicy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-[#FAF8F5]/60"
                >
                  {t.navTools}
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Tools Quick Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider font-serif-luxury">
              {language === 'ar' ? 'الأدوات التفاعلية' : 'Precision Tools'}
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.ringSizerTitle}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.goldCalcTitle}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'دليل شراء الألماس 4Cs' : '4Cs Diamond Guide'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'فحص الفضة 925 الأصلية' : 'Authenticating 925 Silver'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider font-serif-luxury">
              {language === 'ar' ? 'السياسات والامتثال' : 'Legal & Compliance'}
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.privacyTitle}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {t.termsTitle}
                </button>
              </li>
              <li className="pt-2 text-[11px] text-[#FAF8F5]/60">
                <span className="block text-[#D4AF37]">{t.officialPhone}:</span>
                <span className="font-mono">+966 11 892 4400</span>
              </li>
              <li className="text-[11px] text-[#FAF8F5]/60">
                <span className="block text-[#D4AF37]">{t.officialEmail}:</span>
                <span className="font-mono">concierge@hanan.blog</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Payment / Verification Badges */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60">
          <div>
            <span>{t.allRightsReserved}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-white/50">
            <span>VISA</span>
            <span>·</span>
            <span>MASTERCARD</span>
            <span>·</span>
            <span>MADA</span>
            <span>·</span>
            <span>APPLE PAY</span>
            <span>·</span>
            <span>SWIFT WIRE</span>
            <span>·</span>
            <span className="text-[#D4AF37]">ARMORED COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
