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
  Coins,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  FileCode,
  ExternalLink,
} from 'lucide-react';
import { Language, Article } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { ARTICLES_DATA } from '../data/articles.ts';

interface SiteSectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onNavigate: (tab: string, category?: string) => void;
  onSelectArticle?: (article: Article) => void;
}

export const SiteSectionsModal: React.FC<SiteSectionsModalProps> = ({
  isOpen,
  onClose,
  language,
  onNavigate,
  onSelectArticle,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[language];
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;
  const articlesCount = ARTICLES_DATA.length;

  const sectionsList = [
    {
      id: 'sitemap',
      title: language === 'ar' ? 'خريطة الموقع الشاملة (روابط مباشرة)' : 'Comprehensive HTML Sitemap',
      badge: language === 'ar' ? 'فهرس الروابط المباشرة' : 'Direct Index',
      badgeHighlight: true,
      description:
        language === 'ar'
          ? `فهرس متكامل وروابط مباشرة دائمة لكافة الأقسام، المتجر، الأدوات، وكافة (${articlesCount} مقالاً معتمداً) بالإضافة لخريطة XML الرسمية.`
          : `Full canonical index featuring direct permanent links to all pages, store collections, calculators, ${articlesCount} articles, and official XML sitemap.`,
      icon: Compass,
      color: 'text-[#D4AF37]',
      bg: 'bg-[#D4AF37]/20',
      actionTab: 'sitemap',
      directUrl: '/?tab=sitemap',
    },
    {
      id: 'home',
      title: t.navHome,
      badge: language === 'ar' ? 'الصفحة الرئيسية' : 'Home Frontpage',
      badgeHighlight: false,
      description:
        language === 'ar'
          ? 'واجهة البوتيك الملكية الرسمية: عروض تشكيلات الألماس والذهب الأكثر طلباً، شهادات الضمان المعتمدة GIA، وضمان الأصالة والشحن المؤمن.'
          : 'Official royal boutique frontpage: fine jewelry hero collection, GIA certification guarantees, and brand heritage.',
      icon: Home,
      color: 'text-[#D4AF37]',
      bg: 'bg-[#D4AF37]/15',
      actionTab: 'home',
      directUrl: '/?tab=home',
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
      directUrl: '/?tab=catalog',
    },
    {
      id: 'journal',
      title: t.theBlog,
      badge: language === 'ar' ? `${articlesCount} مقالاً حصرياً متخصصاً` : `${articlesCount} Verified Articles`,
      badgeHighlight: true,
      description:
        language === 'ar'
          ? `مجلة المجوهرات وأبحاث EEAT: تضم (${articlesCount} مقالاً متقدماً) بأقلام خبراء معتمدين في فحص الألماس 4Cs، تمييز الفضة 925، العناية بالمجوهرات، والاستثمار في الذهب.`
          : `Editorial Gemological Journal featuring (${articlesCount} in-depth research articles) on 4Cs diamond buying, authenticating 925 silver, fine jewelry restoration, and bullion asset hedging.`,
      icon: BookOpen,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      actionTab: 'journal',
      directUrl: '/?tab=journal',
      subItems: ARTICLES_DATA.map((art) => ({
        id: art.id,
        title: language === 'ar' ? art.titleAr : art.titleEn,
        article: art,
        url: `/?tab=journal&article=${art.id}`,
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
      directUrl: '/?tab=about',
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
      directUrl: '/?tab=contact',
    },
    {
      id: 'privacy',
      title: t.privacyPolicy,
      badge: language === 'ar' ? 'الخصوصية & GDPR' : 'Privacy & Cookies',
      description:
        language === 'ar'
          ? 'الامتثال الصارم لمعايير حماية البيانات العامة والخصوصية الرقمية المعتمدة للمستخدمين.'
          : 'Full compliance with global digital privacy standards, cookie governance, and GDPR data integrity guidelines.',
      icon: ShieldCheck,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      actionTab: 'privacy',
      directUrl: '/?tab=privacy',
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
      directUrl: '/?tab=terms',
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
      directUrl: '/?tab=tools',
    },
  ];

  const handleLinkClick = (e: React.MouseEvent, tab: string) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button === 0) {
      e.preventDefault();
      onNavigate(tab);
      onClose();
    }
  };

  const handleArticleClick = (e: React.MouseEvent, article: Article) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button === 0) {
      e.preventDefault();
      if (onSelectArticle) {
        onSelectArticle(article);
      } else {
        onNavigate('journal');
      }
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden my-6">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#18181B] text-[#FAF8F5] border-b border-[#D4AF37]/30 flex items-start justify-between">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>{language === 'ar' ? 'خريطة ودليل الموقع الرئيسي' : 'Main Sitemap & Directory'}</span>
              <span className="text-white/40">·</span>
              <span className="text-emerald-400 font-mono font-bold">
                {language === 'ar' ? 'جميع الأقسام روابط مباشرة دائمية' : 'All Direct Canonical Links'}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-amber-400 font-mono font-bold">
                {language === 'ar' ? `${articlesCount} مقالاً معتمداً` : `${articlesCount} Articles`}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
              {language === 'ar' ? 'خريطة الموقع وأقسامه الشاملة (روابط مباشرة)' : 'Comprehensive Sitemap & Direct Navigation Links'}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl font-light">
              {language === 'ar'
                ? 'انقر مباشرة على أي قسم للانتقال الفوري إليه عبر رابط دائم ومباشر قابل للأرشفة والمشاركة.'
                : 'Click any section directly to navigate via permanent canonical URLs optimized for indexing and sharing.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Toolbar: HTML Sitemap & XML Sitemap direct shortcuts */}
        <div className="bg-[#FAF8F5] px-6 py-3 border-b border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#8C7A5B]">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-medium">
              {language === 'ar' ? 'تصفح خريطة الموقع الكاملة أو ملف XML لمحركات البحث:' : 'Browse complete HTML sitemap or XML feed:'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/?tab=sitemap"
              onClick={(e) => handleLinkClick(e, 'sitemap')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181B] text-[#D4AF37] font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'صفحة خريطة الموقع الكاملة' : 'Full Sitemap Page'}</span>
            </a>

            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:text-[#18181B] hover:bg-white text-xs font-mono transition-colors"
            >
              <FileCode className="w-3 h-3 text-[#D4AF37]" />
              <span>sitemap.xml</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Sections Grid with Direct Links */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectionsList.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={section.directUrl}
                  onClick={(e) => handleLinkClick(e, section.actionTab)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-0.5 hover:shadow-lg no-underline text-inherit ${
                    section.badgeHighlight
                      ? 'border-[#D4AF37] bg-gradient-to-br from-[#FAF8F5] via-amber-50/30 to-white shadow-xs'
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
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border shrink-0 ${
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

                    {/* Subitems with direct article links */}
                    {section.subItems && (
                      <div className="pt-2 border-t border-[#D4AF37]/15 space-y-1">
                        <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#8C7A5B]">
                          <span>{language === 'ar' ? `المقالات المنشورة بروابط مباشرة (${articlesCount}):` : `Direct Article Links (${articlesCount}):`}</span>
                          <span className="font-mono text-[#D4AF37] font-semibold">{language === 'ar' ? 'روابط مباشرة' : 'Direct URLs'}</span>
                        </div>
                        <ul className="text-[11px] text-[#18181B]/80 space-y-1 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                          {section.subItems.map((item, idx) => (
                            <li key={item.id}>
                              <a
                                href={item.url}
                                onClick={(e) => handleArticleClick(e, item.article)}
                                className="flex items-center gap-1.5 truncate hover:text-[#B8902A] transition-colors cursor-pointer py-1 px-1.5 rounded-lg hover:bg-white/90 text-inherit no-underline"
                                title={item.title}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                                <span className="text-[10px] text-[#8C7A5B] font-mono shrink-0">{idx + 1}.</span>
                                <span className="truncate">{item.title}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#B8902A] font-semibold group-hover:translate-x-1 transition-transform">
                    <span className="font-mono text-[11px] text-[#8C7A5B]">
                      {section.directUrl}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>{language === 'ar' ? 'انتقال مباشر' : 'Direct Link'}</span>
                      <ArrowIcon className="w-4 h-4" />
                    </span>
                  </div>
                </a>
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
                ? 'كافة الروابط مباشرة وتدعم التصفح السريع والنسخ الفوري للأرشفة والمشاركة.'
                : 'All links are permanent direct canonical URLs supporting fast navigation and instant indexing.'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#18181B] text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
