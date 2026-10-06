import React from 'react';
import {
  X,
  Compass,
  Home,
  ShoppingBag,
  BookOpen,
  Users,
  PhoneCall,
  ShieldCheck,
  Scale,
  Ruler,
  Coins,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  FileText,
} from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { ARTICLES_DATA } from '../data/articles.ts';

interface SiteSectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onNavigate: (tab: string, category?: string) => void;
}

export const SiteSectionsModal: React.FC<SiteSectionsModalProps> = ({
  isOpen,
  onClose,
  language,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[language];
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;
  const articlesCount = ARTICLES_DATA.length; // dynamic count

  const sectionsList = [
    {
      id: 'home',
      title: t.navHome,
      badge: language === 'ar' ? 'الصفحة الرئيسية' : 'Home Frontpage',
      badgeHighlight: true,
      description:
        language === 'ar'
          ? 'واجهة البوتيك الملكية الرسمية: عروض تشكيلات الألماس والذهب الأكثر طلباً، شهادات الضمان المعتمدة GIA، وضمان الأصالة والشحن المؤمن.'
          : 'Official royal boutique frontpage: fine jewelry hero collection, GIA certification guarantees, and brand heritage.',
      icon: Home,
      color: 'text-[#D4AF37]',
      bg: 'bg-[#D4AF37]/15',
      actionTab: 'home',
    },
    {
      id: 'catalog',
      title: t.theStore,
      badge: language === 'ar' ? 'تشكيلات معتمدة' : 'Fine Jewelry',
      description:
        language === 'ar'
          ? 'استكشف أطقم الأعراس الملكية، خواتم السوليتير المعتمدة GIA، أساور التنس واللؤلؤ، وسبائك الذهب 24k.'
          : 'Browse bridal gala suites, certified solitaire rings, tennis bracelets, natural pearls, and 24k gold bullions.',
      icon: ShoppingBag,
      color: 'text-[#D4AF37]',
      bg: 'bg-[#D4AF37]/10',
      actionTab: 'catalog',
    },
    {
      id: 'journal',
      title: t.theBlog,
      badge: language === 'ar' ? `${articlesCount} مقالات حصرية متخصصة` : `${articlesCount} Verified Articles`,
      badgeHighlight: true,
      description:
        language === 'ar'
          ? `مجلة المجوهرات وأبحاث EEAT: تضم (${articlesCount} مقالات متقدمة) بأقلام خبراء معتمدين في فحص الألماس 4Cs، تمييز الفضة 925، العناية بالمجوهرات، والاستثمار في الذهب.`
          : `Editorial Gemological Journal featuring (${articlesCount} in-depth research articles) on 4Cs diamond buying, authenticating 925 silver, fine jewelry restoration, and bullion asset hedging.`,
      icon: BookOpen,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      actionTab: 'journal',
      subItems: ARTICLES_DATA.map((art) => ({
        id: art.id,
        title: language === 'ar' ? art.titleAr : art.titleEn,
      })),
    },
    {
      id: 'about',
      title: t.aboutUs,
      badge: language === 'ar' ? 'تاريخ الدار والحرفية' : 'Heritage & Atelier',
      description:
        language === 'ar'
          ? 'قصة تأسيس البوتيك منذ 1994، أسرار الصياغة اليدوية، والالتزام الأخلاقي بنظام كيمبرلي للاستخراج النزيه.'
          : 'Our 30-year heritage, master goldsmithing atelier, Kimberley Process conflict-free standards, and laboratory accreditations.',
      icon: Users,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      actionTab: 'about',
    },
    {
      id: 'contact',
      title: t.contactUs,
      badge: language === 'ar' ? 'صالات العرض وخدمة VIP' : 'Salons & Concierge',
      description:
        language === 'ar'
          ? 'قنوات التواصل المباشر، حجز مواعيد الصالونات الخاصة، ومستشار خدمة عملاء VIP عبر واتساب على مدار الساعة.'
          : 'Direct concierge channels, private salon viewing appointments in Riyadh & Dubai, and VIP WhatsApp liaison.',
      icon: PhoneCall,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      actionTab: 'contact',
    },
    {
      id: 'privacy',
      title: t.privacyPolicy,
      badge: language === 'ar' ? 'AdSense & GDPR' : 'Compliance & Cookies',
      description:
        language === 'ar'
          ? 'الامتثال الصارم لسياسات Google AdSense وملفات تعريف الارتباط DART ومعايير حماية البيانات العامة للمستخدمين.'
          : 'Full compliance with Google AdSense privacy terms, DoubleClick DART cookies, and GDPR/CCPA data integrity guidelines.',
      icon: ShieldCheck,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      actionTab: 'privacy',
    },
    {
      id: 'terms',
      title: t.termsOfUse,
      badge: language === 'ar' ? 'الضمان والاسترجاع 14 يوماً' : 'Warranty & Returns',
      description:
        language === 'ar'
          ? 'شروط الاستخدام الرسمية، شهادات ضمان الأصالة، سياسة الاسترجاع والاستبدال خلال 14 يوماً، والشحن المصفح والمؤمن.'
          : 'Official terms of service, laboratory authenticity certificate guarantee, 14-day exchange protocol, and armored insured transit.',
      icon: Scale,
      color: 'text-rose-500',
      bg: 'bg-rose-500/10',
      actionTab: 'terms',
    },
    {
      id: 'tools',
      title: t.interactiveTools,
      badge: language === 'ar' ? 'حاسبة الذهب والمقاسات' : 'Gold & Ring Sizer',
      description:
        language === 'ar'
          ? 'حاسبة مقاسات الخواتم والأساور الذكية بالملمتر، وحاسبة أسعار الذهب والفضة اللحظية الاسترشادية حسب العيار والوزن والمصنعية.'
          : 'Precision ring and bracelet size calculator plus live indicative gold & silver price valuation engine.',
      icon: Coins,
      color: 'text-[#D4AF37]',
      bg: 'bg-[#D4AF37]/10',
      actionTab: 'tools',
    },
  ];

  const handleSelect = (tab: string) => {
    onNavigate(tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden my-6">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#18181B] text-[#FAF8F5] border-b border-[#D4AF37]/30 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.siteSections}</span>
              <span className="text-white/40">·</span>
              <span className="text-emerald-400 font-mono font-bold">
                {language === 'ar' ? `المدونة تحتوي على ${articlesCount} مقالات` : `${articlesCount} Articles Published`}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
              {language === 'ar' ? 'دليل وأقسام الموقع الرئيسي الشامل' : 'Comprehensive Main Site Directory'}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl font-light">
              {t.siteSectionsDesc}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sections Grid */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectionsList.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  onClick={() => handleSelect(section.actionTab)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-0.5 hover:shadow-lg ${
                    section.badgeHighlight
                      ? 'border-[#D4AF37] bg-gradient-to-br from-[#FAF8F5] via-amber-50/30 to-white shadow-sm'
                      : 'border-slate-200 bg-[#FAF8F5]/50 hover:border-[#D4AF37]/50 hover:bg-white'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${section.bg} ${section.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-[#18181B] font-serif-luxury group-hover:text-[#B8902A] transition-colors">
                          {section.title}
                        </h3>
                      </div>

                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${
                          section.badgeHighlight
                            ? 'bg-[#18181B] text-[#D4AF37] border-[#D4AF37]'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        {section.badge}
                      </span>
                    </div>

                    <p className="text-xs text-[#18181B]/75 leading-relaxed font-light">
                      {section.description}
                    </p>

                    {/* If it's the Blog, display the list of articles with scroll */}
                    {section.subItems && (
                      <div className="pt-2 border-t border-[#D4AF37]/15 space-y-1">
                        <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#8C7A5B]">
                          <span>{language === 'ar' ? `المقالات المنشورة (${articlesCount} مقالاً):` : `Published Articles (${articlesCount}):`}</span>
                          <span className="font-mono text-[#D4AF37] font-semibold">{language === 'ar' ? 'قابلة للقراءة' : 'EEAT'}</span>
                        </div>
                        <ul className="text-[11px] text-[#18181B]/80 space-y-1 max-h-44 overflow-y-auto pr-1 scrollbar-thin">
                          {section.subItems.map((item, idx) => (
                            <li key={item.id} className="flex items-center gap-1.5 truncate hover:text-[#B8902A] transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                              <span className="text-[10px] text-[#8C7A5B] font-mono shrink-0">{idx + 1}.</span>
                              <span className="truncate">{item.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#B8902A] font-semibold group-hover:translate-x-1 transition-transform">
                    <span>
                      {language === 'ar' ? 'الدخول لهذا القسم' : 'Open Section'}
                    </span>
                    <ArrowIcon className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C7A5B]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>
              {language === 'ar'
                ? 'كافة أقسام الموقع مستوفية لسياسات Google AdSense وشروط تجارة المجوهرات المعتمدة.'
                : 'All sections comply 100% with Google AdSense publishing standards & jewelry assay rules.'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#18181B] text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
