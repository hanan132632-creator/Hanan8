import React from 'react';
import { ShieldCheck, Gem, Award, Mail, Phone, MapPin, Globe, Compass, FileCode } from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { ARTICLES_DATA } from '../data/articles.ts';

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

  const handleLink = (e: React.MouseEvent, tab: string) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button === 0) {
      e.preventDefault();
      onNavigate(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

          {/* Core Navigation Direct Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider font-serif-luxury">
              {language === 'ar' ? 'أقسام الموقع الرئيسي' : 'Main Site Sections'}
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>
                <a
                  href="/?tab=home"
                  onClick={(e) => handleLink(e, 'home')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {t.navHome}
                </a>
              </li>
              <li>
                <a
                  href="/?tab=catalog"
                  onClick={(e) => handleLink(e, 'catalog')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {t.theStore}
                </a>
              </li>
              <li>
                <a
                  href="/?tab=journal"
                  onClick={(e) => handleLink(e, 'journal')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {language === 'ar'
                    ? `المدونة (${ARTICLES_DATA.length} مقالاً معتمداً)`
                    : `Journal (${ARTICLES_DATA.length} Articles)`}
                </a>
              </li>
              <li>
                <a
                  href="/?tab=sitemap"
                  onClick={(e) => handleLink(e, 'sitemap')}
                  className="text-[#D4AF37] font-semibold hover:underline transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'خريطة الموقع (روابط مباشرة)' : 'Sitemap (Direct Links)'}</span>
                </a>
              </li>
              <li>
                <a
                  href="/?tab=about"
                  onClick={(e) => handleLink(e, 'about')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {t.aboutUs}
                </a>
              </li>
              <li>
                <a
                  href="/?tab=contact"
                  onClick={(e) => handleLink(e, 'contact')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {t.contactUs}
                </a>
              </li>
              <li>
                <a
                  href="/?tab=terms"
                  onClick={(e) => handleLink(e, 'terms')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block text-[#D4AF37]/90 font-medium"
                >
                  {t.termsOfUse}
                </a>
              </li>
              <li>
                <a
                  href="/?tab=privacy"
                  onClick={(e) => handleLink(e, 'privacy')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {t.privacyPolicy}
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Tools & Popular Article Direct Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider font-serif-luxury">
              {language === 'ar' ? 'الأدوات التفاعلية والأدلة' : 'Precision Tools & Guides'}
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>
                <a
                  href="/?tab=tools"
                  onClick={(e) => handleLink(e, 'tools')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {t.ringSizerTitle}
                </a>
              </li>
              <li>
                <a
                  href="/?tab=tools"
                  onClick={(e) => handleLink(e, 'tools')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {t.goldCalcTitle}
                </a>
              </li>
              <li>
                <a
                  href="/?tab=journal&article=definitive-4cs-diamond-guide"
                  onClick={(e) => handleLink(e, 'journal')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {language === 'ar' ? 'دليل شراء الألماس 4Cs' : '4Cs Diamond Guide'}
                </a>
              </li>
              <li>
                <a
                  href="/?tab=journal&article=silver-925-authentication-guide"
                  onClick={(e) => handleLink(e, 'journal')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {language === 'ar' ? 'فحص الفضة 925 الأصلية' : 'Authenticating 925 Silver'}
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-[#D4AF37] font-mono text-[11px] transition-colors flex items-center gap-1 pt-1"
                >
                  <FileCode className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>sitemap.xml (XML Feed)</span>
                </a>
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
                <a
                  href="/?tab=privacy"
                  onClick={(e) => handleLink(e, 'privacy')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {t.privacyTitle}
                </a>
              </li>
              <li>
                <a
                  href="/?tab=terms"
                  onClick={(e) => handleLink(e, 'terms')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block"
                >
                  {t.termsTitle}
                </a>
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

        {/* Bottom Bar: Copyright and Direct Sitemap Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60">
          <div className="flex flex-wrap items-center gap-3">
            <span>{t.allRightsReserved}</span>
            <span className="text-white/30">·</span>
            <a
              href="/?tab=sitemap"
              onClick={(e) => handleLink(e, 'sitemap')}
              className="text-[#D4AF37] hover:underline font-semibold"
            >
              {language === 'ar' ? 'خريطة الموقع (روابط مباشرة)' : 'Sitemap (Direct Links)'}
            </a>
            <span className="text-white/30">·</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white font-mono text-[11px]"
            >
              sitemap.xml
            </a>
            <span className="text-white/30">·</span>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white font-mono text-[11px]"
            >
              robots.txt
            </a>
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
