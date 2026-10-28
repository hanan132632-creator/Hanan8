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
  onOpenWishlist: () => void;
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
  onOpenWishlist,
  onOpenSiteSections,
  articlesCount = 4,
}) => {
  const t = TRANSLATIONS[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: t.navHome, url: '/?tab=home' },
    { id: 'catalog', label: t.theStore, url: '/?tab=catalog' },
    {
      id: 'journal',
      label: language === 'ar' ? `المدونة (${articlesCount} مقالاً)` : `Journal (${articlesCount} Articles)`,
      hasBadge: true,
      url: '/?tab=journal',
    },
    { id: 'tools', label: t.navTools, url: '/?tab=tools' },
    { id: 'sitemap', label: language === 'ar' ? 'خريطة الموقع' : 'Sitemap', url: '/?tab=sitemap' },
    { id: 'about', label: t.aboutUs, url: '/?tab=about' },
    { id: 'contact', label: t.contactUs, url: '/?tab=contact' },
    { id: 'terms', label: t.termsOfUse, url: '/?tab=terms' },
    { id: 'privacy', label: t.privacyPolicy, url: '/?tab=privacy' },
  ];

  const handleLink = (e: React.MouseEvent, id: string) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button === 0) {
      e.preventDefault();
      onTabChange(id);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
              title={language === 'ar' ? 'انقر لعرض خريطة وأقسام الموقع' : 'Open Site Sections & Sitemap'}
            >
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{language === 'ar' ? 'خريطة وأقسام الموقع' : 'Sitemap & Sections'}</span>
            </button>

            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-white/70">
              {language === 'ar'
                ? `روابط مباشرة: الرئيسية · المتجر · المدونة (${articlesCount} مقالات) · خريطة الموقع · من نحن · اتصل بنا`
                : `Direct Links: Home · Store · Journal (${articlesCount} Articles) · Sitemap · About · Contact`}
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
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-[11px] font-medium cursor-pointer"
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
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#18181B] shadow-xs hover:shadow flex items-center gap-2 transition-all cursor-pointer"
            title={language === 'ar' ? 'خريطة الموقع وأقسامه الشاملة' : 'Sitemap & Sections Directory'}
          >
            <Compass className="w-5 h-5 text-[#B8902A]" />
            <span className="hidden sm:inline text-xs font-bold text-[#18181B] font-serif-luxury leading-tight">
              {language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
            </span>
          </button>

          <a
            href="/?tab=home"
            onClick={(e) => handleLink(e, 'home')}
            className="text-left text-current group cursor-pointer focus:outline-hidden no-underline"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#18181B] font-serif-luxury group-hover:text-[#B8902A] transition-colors whitespace-nowrap">
              {t.brandName}
            </span>
          </a>
        </div>

        {/* Zone 2: Navigation direct links */}
        <nav className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-[#18181B]/80">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              onClick={(e) => handleLink(e, link.id)}
              className={`relative py-1.5 transition-colors whitespace-nowrap hover:text-[#B8902A] cursor-pointer no-underline ${
                activeTab === link.id
                  ? 'text-[#B8902A] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D4AF37]'
                  : 'text-[#18181B]/75'
              }`}
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary interactive action cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenWishlist}
            className="relative p-2.5 rounded-full hover:bg-white text-[#18181B] border border-transparent hover:border-[#D4AF37]/30 transition-all cursor-pointer"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5 text-[#18181B] hover:text-[#D4AF37] transition-colors" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#18181B] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center font-mono shadow-xs">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full hover:bg-white text-[#18181B] border border-transparent hover:border-[#D4AF37]/30 transition-all cursor-pointer"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 text-[#18181B] hover:text-[#D4AF37] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#18181B] text-[#D4AF37] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center font-mono border border-[#D4AF37] shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-[#18181B] hover:bg-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sub-bar: Core direct link shortcuts strip */}
      <div className="hidden md:block bg-white/70 border-t border-[#D4AF37]/15 py-1.5 px-4 text-xs text-[#8C7A5B]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-[#18181B] font-semibold">{t.siteSections}:</span>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="/?tab=catalog"
                onClick={(e) => handleLink(e, 'catalog')}
                className="hover:text-[#18181B] hover:underline"
              >
                {t.theStore}
              </a>
              <span>·</span>
              <a
                href="/?tab=journal"
                onClick={(e) => handleLink(e, 'journal')}
                className="text-[#B8902A] font-semibold hover:underline"
              >
                {language === 'ar' ? `المدونة (${articlesCount} مقالاً)` : `Journal (${articlesCount} Articles)`}
              </a>
              <span>·</span>
              <a
                href="/?tab=sitemap"
                onClick={(e) => handleLink(e, 'sitemap')}
                className="text-[#D4AF37] font-bold hover:underline"
              >
                {language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
              </a>
              <span>·</span>
              <a
                href="/?tab=tools"
                onClick={(e) => handleLink(e, 'tools')}
                className="hover:text-[#18181B] hover:underline"
              >
                {t.navTools}
              </a>
              <span>·</span>
              <a
                href="/?tab=about"
                onClick={(e) => handleLink(e, 'about')}
                className="hover:text-[#18181B] hover:underline"
              >
                {t.aboutUs}
              </a>
              <span>·</span>
              <a
                href="/?tab=contact"
                onClick={(e) => handleLink(e, 'contact')}
                className="hover:text-[#18181B] hover:underline"
              >
                {t.contactUs}
              </a>
              <span>·</span>
              <a
                href="/?tab=privacy"
                onClick={(e) => handleLink(e, 'privacy')}
                className="hover:text-[#18181B] hover:underline"
              >
                {t.privacyPolicy}
              </a>
              <span>·</span>
              <a
                href="/?tab=terms"
                onClick={(e) => handleLink(e, 'terms')}
                className="hover:text-[#18181B] hover:underline"
              >
                {t.termsOfUse}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/?tab=sitemap"
              onClick={(e) => handleLink(e, 'sitemap')}
              className="text-[11px] text-[#B8902A] hover:underline font-semibold flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'خريطة الموقع (روابط مباشرة) ←' : 'Direct Sitemap →'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] border-b border-[#D4AF37]/20 px-6 py-5 shadow-xl transition-all">
          <div className="pb-3 mb-3 border-b border-[#D4AF37]/20 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSiteSections();
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181B] text-[#D4AF37] text-xs font-semibold cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>{language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}</span>
              <span className="bg-[#D4AF37] text-[#18181B] px-1 rounded text-[10px]">
                {articlesCount}
              </span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWishlist();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D4AF37]/40 text-[#B8902A] text-xs font-semibold bg-white shadow-xs cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              <span>{t.wishlist}</span>
              <span className="bg-[#D4AF37] text-[#18181B] px-1.5 rounded-full text-[10px] font-mono font-bold">
                {wishlistCount}
              </span>
            </button>
          </div>

          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={(e) => handleLink(e, link.id)}
                className={`text-right rtl:text-right ltr:text-left py-2 text-sm font-medium transition-colors no-underline ${
                  activeTab === link.id
                    ? 'text-[#B8902A] font-bold border-r-2 rtl:border-r-2 ltr:border-l-2 border-[#D4AF37] pr-3 rtl:pr-3 ltr:pl-3'
                    : 'text-[#18181B]/80 hover:text-[#B8902A]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 mt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
            <button
              onClick={() => {
                onLanguageChange(language === 'ar' ? 'en' : 'ar');
                setMobileMenuOpen(false);
              }}
              className="text-xs text-[#8C7A5B] flex items-center gap-1.5 font-medium cursor-pointer"
            >
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span>{language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}</span>
            </button>
            <a
              href="/?tab=contact"
              onClick={(e) => handleLink(e, 'contact')}
              className="text-xs font-medium text-[#D4AF37] hover:underline"
            >
              {t.vipConcierge}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
