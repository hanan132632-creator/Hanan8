import React, { useState } from 'react';
import {
  ShoppingBag,
  Heart,
  Globe,
  Menu,
  X,
  PhoneCall,
  Compass,
  BookOpen,
  Store,
  ShieldCheck,
  Scale,
  Users,
} from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSiteSections: () => void;
  articlesCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  activeTab,
  onTabChange,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSiteSections,
  articlesCount = 4,
}) => {
  const t = TRANSLATIONS[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: t.navHome },
    { id: 'catalog', label: t.theStore },
    {
      id: 'journal',
      label: language === 'ar' ? `المدونة (${articlesCount} مقالاً)` : `Journal (${articlesCount} Articles)`,
      hasBadge: true,
    },
    { id: 'tools', label: t.navTools },
    { id: 'about', label: t.aboutUs },
    { id: 'contact', label: t.contactUs },
    { id: 'terms', label: t.termsOfUse },
    { id: 'privacy', label: t.privacyPolicy },
  ];

  const handleNavClick = (id: string) => {
    onTabChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all">
      {/* Top micro bar with site directory quick access */}
      <div className="bg-[#18181B] text-[#FAF8F5] text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Prominent Site Sections Icon button on first of the site */}
            <button
              onClick={onOpenSiteSections}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 text-[#D4AF37] border border-[#D4AF37]/40 transition-colors font-semibold cursor-pointer"
              title={language === 'ar' ? 'انقر لعرض كافة أقسام الموقع' : 'Open Site Sections'}
            >
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.siteSections}</span>
            </button>

            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-white/70">
              {language === 'ar'
                ? `أقسام الموقع تشمل: الرئيسية · المتجر · المدونة (${articlesCount} مقالات) · من نحن · اتصل بنا · سياسة الخصوصية · شروط الاستخدام`
                : `Site includes: Home · Store · Journal (${articlesCount} Articles) · About · Contact · Privacy · Terms`}
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/80">
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3 h-3 text-[#D4AF37]" />
              <span className="hidden sm:inline">{t.vipConcierge}</span>
              <span className="sm:hidden">VIP</span>
            </a>
            <span className="text-white/40">·</span>
            <button
              onClick={() => onLanguageChange(language === 'ar' ? 'en' : 'ar')}
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-[11px] font-medium"
              aria-label="Toggle Language"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Wordmark & Sections Icon */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSiteSections}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#18181B] shadow-sm hover:shadow flex items-center gap-2 transition-all cursor-pointer"
            title={language === 'ar' ? 'فهرس وأقسام الموقع الرئيسي' : 'Site Sections & Directory'}
          >
            <Compass className="w-5 h-5 text-[#B8902A]" />
            <span className="hidden sm:inline text-xs font-bold text-[#18181B] font-serif-luxury leading-tight">
              {t.siteSections}
            </span>
          </button>

          <button
            onClick={() => handleNavClick('home')}
            className="text-left text-current group cursor-pointer focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#18181B] font-serif-luxury group-hover:text-[#B8902A] transition-colors whitespace-nowrap">
              {t.brandName}
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation links */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium text-[#18181B]/80">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative py-1.5 transition-colors whitespace-nowrap hover:text-[#B8902A] cursor-pointer ${
                activeTab === link.id
                  ? 'text-[#B8902A] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D4AF37]'
                  : 'text-[#18181B]/75'
              }`}
            >
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary interactive action cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => handleNavClick('catalog')}
            className={`p-2 sm:px-3 sm:py-2 text-xs rounded-lg transition-colors flex items-center gap-1.5 ${
              wishlistCount > 0 ? 'text-[#B8902A]' : 'text-[#18181B]/70 hover:text-[#18181B]'
            }`}
            title={t.wishlist}
          >
            <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-[#D4AF37] text-[#D4AF37]' : ''}`} />
            {wishlistCount > 0 && (
              <span className="font-mono text-xs font-semibold tabular-nums text-[#B8902A]">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            className="px-3.5 py-2 text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#18181B] hover:bg-[#27272A] rounded-lg transition-all flex items-center gap-2 shadow-sm border border-[#D4AF37]/30 hover:border-[#D4AF37]"
            aria-label="Open Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
            <span className="hidden sm:inline whitespace-nowrap">{t.cart}</span>
            <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#18181B] font-mono text-xs font-bold flex items-center justify-center tabular-nums">
              {cartCount}
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 xl:hidden text-[#18181B]/80 hover:text-[#18181B]"
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Quick Site Sections Banner Strip (Visibly showing all required sections) */}
      <div className="bg-[#FAF8F5] border-t border-[#D4AF37]/15 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#8C7A5B]">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-[#18181B] font-semibold">{t.siteSections}:</span>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => handleNavClick('catalog')}
                className="hover:text-[#18181B] hover:underline"
              >
                {t.theStore}
              </button>
              <span>·</span>
              <button
                onClick={() => handleNavClick('journal')}
                className="text-[#B8902A] font-semibold hover:underline"
              >
                {language === 'ar' ? `المدونة (${articlesCount} مقالاً)` : `Journal (${articlesCount} Articles)`}
              </button>
              <span>·</span>
              <button
                onClick={() => handleNavClick('about')}
                className="hover:text-[#18181B] hover:underline"
              >
                {t.aboutUs}
              </button>
              <span>·</span>
              <button
                onClick={() => handleNavClick('contact')}
                className="hover:text-[#18181B] hover:underline"
              >
                {t.contactUs}
              </button>
              <span>·</span>
              <button
                onClick={() => handleNavClick('privacy')}
                className="hover:text-[#18181B] hover:underline"
              >
                {t.privacyPolicy}
              </button>
              <span>·</span>
              <button
                onClick={() => handleNavClick('terms')}
                className="hover:text-[#18181B] hover:underline"
              >
                {t.termsOfUse}
              </button>
            </div>
          </div>

          <button
            onClick={onOpenSiteSections}
            className="text-[11px] text-[#B8902A] hover:underline font-semibold"
          >
            {language === 'ar' ? 'عرض الدليل الكامل ←' : 'View Full Index →'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] border-b border-[#D4AF37]/20 px-6 py-5 shadow-xl transition-all">
          <div className="pb-3 mb-3 border-b border-[#D4AF37]/20 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSiteSections();
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181B] text-[#D4AF37] text-xs font-semibold"
            >
              <Compass className="w-4 h-4" />
              <span>{t.siteSections}</span>
              <span className="bg-[#D4AF37] text-[#18181B] px-1 rounded text-[10px]">
                {articlesCount}
              </span>
            </button>
          </div>

          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-right rtl:text-right ltr:text-left py-2 text-sm font-medium transition-colors ${
                  activeTab === link.id
                    ? 'text-[#B8902A] font-bold border-r-2 rtl:border-r-2 ltr:border-l-2 border-[#D4AF37] pr-3 rtl:pr-3 ltr:pl-3'
                    : 'text-[#18181B]/80 hover:text-[#B8902A]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 mt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
            <button
              onClick={() => {
                onLanguageChange(language === 'ar' ? 'en' : 'ar');
                setMobileMenuOpen(false);
              }}
              className="text-xs text-[#8C7A5B] flex items-center gap-1.5 font-medium"
            >
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span>{language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}</span>
            </button>
            <button
              onClick={() => {
                handleNavClick('contact');
              }}
              className="text-xs font-medium text-[#D4AF37] hover:underline"
            >
              {t.vipConcierge}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

