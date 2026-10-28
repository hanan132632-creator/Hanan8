/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CollectionsBar } from './components/CollectionsBar.tsx';
import { CatalogSection } from './components/CatalogSection.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { ToolsSection } from './components/ToolsSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { LegalPages } from './components/LegalPages.tsx';
import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { WishlistDrawer } from './components/WishlistDrawer.tsx';
import { CookieBanner } from './components/CookieBanner.tsx';
import { SiteSectionsModal } from './components/SiteSectionsModal.tsx';
import { Footer } from './components/Footer.tsx';
import { AdBanner } from './components/AdBanner.tsx';
import { StickyAnchorAd } from './components/StickyAnchorAd.tsx';
import { ProductCard } from './components/ProductCard.tsx';
import { PRODUCTS_DATA } from './data/products.ts';
import { ARTICLES_DATA } from './data/articles.ts';
import { TRANSLATIONS } from './data/translations.ts';
import { Language, Product, CartItem, ProductCategory, Article } from './types.ts';
import {
  Gem,
  ShieldCheck,
  Award,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Compass,
  Home,
  ShoppingBag,
  Users,
  PhoneCall,
  Scale,
  Coins,
} from 'lucide-react';

import { SitemapView } from './components/SitemapView.tsx';

// Helper to look up an article safely by id, slug, or normalized string
const findArticle = (idOrSlug: string): Article | null => {
  if (!idOrSlug) return null;
  const clean = idOrSlug.trim().toLowerCase().replace(/^article-/, '');
  return (
    ARTICLES_DATA.find((a) => a.id.toLowerCase() === clean || (a.slug && a.slug.toLowerCase() === clean)) ||
    ARTICLES_DATA.find((a) => a.id.toLowerCase().includes(clean) || clean.includes(a.id.toLowerCase())) ||
    null
  );
};

const KNOWN_TABS = ['home', 'catalog', 'journal', 'tools', 'about', 'contact', 'privacy', 'terms', 'sitemap'];

const parseRouteFromLocation = (): { tab: string; article: Article | null; category?: ProductCategory } => {
  try {
    const rawPath = (window.location.pathname || '').toLowerCase().replace(/\/+$/, '');
    const search = new URLSearchParams(window.location.search);
    const hash = window.location.hash || '';

    // 0. Direct sitemap path
    if (rawPath === '/sitemap.xml' || rawPath === '/sitemap') {
      return { tab: 'sitemap', article: null };
    }

    // 1. Path-based article routing: /journal/article-id or /article/article-id or /blog/article-id
    const articlePathMatch = rawPath.match(/^\/(journal|article|blog|post)\/(.+)$/);
    if (articlePathMatch && articlePathMatch[2]) {
      const art = findArticle(articlePathMatch[2]);
      if (art) return { tab: 'journal', article: art };
    }

    // 2. Direct path matching for known tabs or direct article id
    const pathSegment = rawPath.replace(/^\//, '');
    if (pathSegment) {
      const directArt = findArticle(pathSegment);
      if (directArt) return { tab: 'journal', article: directArt };

      if (KNOWN_TABS.includes(pathSegment)) {
        const catParam = search.get('category') as ProductCategory | null;
        return { tab: pathSegment, article: null, category: catParam || undefined };
      }
    }

    // 3. Query param article: ?article=... or ?tab=journal&article=...
    const articleParam = search.get('article');
    if (articleParam) {
      const art = findArticle(articleParam);
      if (art) return { tab: 'journal', article: art };
    }

    const catParam = search.get('category') as ProductCategory | null;

    // 4. Query param tab: ?tab=...
    const tabParam = search.get('tab');
    if (tabParam) {
      const art = findArticle(tabParam);
      if (art) return { tab: 'journal', article: art };

      if (KNOWN_TABS.includes(tabParam)) {
        return { tab: tabParam, article: null, category: catParam || undefined };
      }
    }

    // 5. Hash routing: #article-... or #catalog
    if (hash.startsWith('#article-')) {
      const artId = hash.replace('#article-', '');
      const art = findArticle(artId);
      if (art) return { tab: 'journal', article: art };
    } else if (hash.startsWith('#')) {
      const cleanHash = hash.replace('#', '');
      const art = findArticle(cleanHash);
      if (art) return { tab: 'journal', article: art };
      if (KNOWN_TABS.includes(cleanHash)) {
        return { tab: cleanHash, article: null, category: catParam || undefined };
      }
    }
  } catch {
    // fallback
  }
  return { tab: 'home', article: null };
};

const syncBrowserUrl = (tab: string, article: Article | null) => {
  try {
    const url = new URL(window.location.href);
    if (article) {
      url.searchParams.set('tab', 'journal');
      url.searchParams.set('article', article.id);
      url.hash = `article-${article.id}`;
      window.history.replaceState({ tab: 'journal', articleId: article.id }, '', url.toString());

      // Update document title, description, and canonical tag
      const title = `${article.titleAr} | بوتيك مجوهرات النخبة الملكية`;
      document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', article.summaryAr || '');
      const canonicalEl = document.getElementById('canonical-url') || document.querySelector('link[rel="canonical"]');
      if (canonicalEl) {
        canonicalEl.setAttribute('href', `https://hanan.blog/?tab=journal&article=${article.id}`);
      }
    } else {
      if (tab === 'home') {
        url.search = '';
        url.hash = '';
        window.history.replaceState({ tab: 'home' }, '', url.pathname);
        document.title = 'بوتيك مجوهرات النخبة الملكية | Royal Elite High Jewelry Boutique';
        const canonicalEl = document.getElementById('canonical-url') || document.querySelector('link[rel="canonical"]');
        if (canonicalEl) canonicalEl.setAttribute('href', 'https://hanan.blog/');
      } else if (tab === 'sitemap') {
        const isDirectXmlPath = window.location.pathname.toLowerCase().endsWith('sitemap.xml');
        if (!isDirectXmlPath) {
          url.searchParams.set('tab', 'sitemap');
          url.searchParams.delete('article');
          url.hash = 'sitemap';
          window.history.replaceState({ tab: 'sitemap' }, '', url.toString());
        }
        document.title = 'خريطة الموقع الشاملة (روابط مباشرة) | مجوهرات النخبة الملكية';
        const canonicalEl = document.getElementById('canonical-url') || document.querySelector('link[rel="canonical"]');
        if (canonicalEl) canonicalEl.setAttribute('href', 'https://hanan.blog/sitemap.xml');
      } else {
        url.searchParams.set('tab', tab);
        url.searchParams.delete('article');
        url.hash = tab;
        window.history.replaceState({ tab }, '', url.toString());
        const canonicalEl = document.getElementById('canonical-url') || document.querySelector('link[rel="canonical"]');
        if (canonicalEl) canonicalEl.setAttribute('href', `https://hanan.blog/?tab=${tab}`);
      }
    }
  } catch {}
};

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const initialRoute = useMemo(() => parseRouteFromLocation(), []);
  const [activeTab, setActiveTab] = useState<string>(initialRoute.tab);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(initialRoute.article);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(
    initialRoute.category || 'all'
  );
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSiteSectionsOpen, setIsSiteSectionsOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('royal_elite_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const DEFAULT_WISHLIST_IDS = [
    'solitaire-crown-ring',
    'emerald-royal-suite',
    'sapphire-heritage-necklace',
    'pearl-diamond-tennis-bracelet',
  ];
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('royal_elite_wishlist');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return DEFAULT_WISHLIST_IDS;
    } catch {
      return DEFAULT_WISHLIST_IDS;
    }
  });

  // Sync RTL and lang attributes
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Sync route on mount and on popstate/hashchange
  useEffect(() => {
    syncBrowserUrl(activeTab, selectedArticle);

    const handleUrlChange = () => {
      const route = parseRouteFromLocation();
      setActiveTab(route.tab);
      setSelectedArticle(route.article);
      if (route.category) {
        setSelectedCategory(route.category);
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Persist cart
  useEffect(() => {
    localStorage.setItem('royal_elite_cart', JSON.stringify(cart));
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    localStorage.setItem('royal_elite_wishlist', JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const t = TRANSLATIONS[language];
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const wishlistProducts = PRODUCTS_DATA.filter((p) => wishlistIds.includes(p.id));

  const handleAddAllWishlistToCart = () => {
    wishlistProducts.forEach((product) => {
      handleAddToCart(product);
    });
  };

  const handleRestoreDefaultWishlist = () => {
    setWishlistIds(DEFAULT_WISHLIST_IDS);
  };

  const handleOpenArticle = (article: Article) => {
    setSelectedArticle(article);
    setActiveTab('journal');
    syncBrowserUrl('journal', article);
    try {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } catch {}
  };

  const handleTabChange = (tab: string, category?: ProductCategory | string) => {
    if (category) {
      setSelectedCategory(category as ProductCategory);
    }
    setActiveTab(tab);
    if (tab === 'journal') {
      setSelectedArticle(null);
    }
    syncBrowserUrl(tab, null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDirectLink = (e: React.MouseEvent, tab: string, category?: ProductCategory | string) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button === 0) {
      e.preventDefault();
      handleTabChange(tab, category);
    }
  };

  const handleAddToCart = (
    product: Product,
    selectedRingSize?: string,
    giftWrapping = true,
    certificateRequested = true
  ) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedRingSize === selectedRingSize
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedRingSize === selectedRingSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          selectedRingSize,
          giftWrapping,
          certificateRequested,
        },
      ];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const featuredProducts = PRODUCTS_DATA.filter((p) => p.featured);
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const effectiveTab = KNOWN_TABS.includes(activeTab)
    ? activeTab
    : selectedArticle
      ? 'journal'
      : 'home';

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col font-sans">
      {/* Top 3-Zone Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        activeTab={effectiveTab}
        onTabChange={handleTabChange}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSiteSections={() => setIsSiteSectionsOpen(true)}
        articlesCount={ARTICLES_DATA.length}
      />

      {/* High-Viewability Header Leaderboard Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#D4AF37]/15">
        <AdBanner
          slot="1122334455"
          type="display"
          label={language === 'ar' ? 'إعلان تحليلي مميز (Header Leaderboard)' : 'Featured Header Leaderboard'}
          minHeight="95px"
          className="my-2"
        />
      </div>

      {/* Main Content Router */}
      <main className="flex-1">
        {effectiveTab === 'home' && (
          <div>
            {/* Top Royal Site Navigation Icon & Directory Bar (أول الصفحة الرئيسية) */}
            <div className="bg-[#18181B] text-[#FAF8F5] border-b-2 border-[#D4AF37]/40 py-3 px-4 sm:px-6 shadow-md">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  {/* The prominent Sections Icon button */}
                  <button
                    onClick={() => setIsSiteSectionsOpen(true)}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8902A] hover:opacity-95 text-[#18181B] font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer shrink-0"
                    title={language === 'ar' ? 'دليل وخريطة أقسام الموقع المباشرة' : 'Site Sections & Sitemap'}
                  >
                    <Compass className="w-4 h-4 text-[#18181B]" />
                    <span>{language === 'ar' ? 'أقسام وخريطة الموقع' : 'Site Sections & Sitemap'}</span>
                  </button>

                  <div className="hidden sm:block text-xs text-white/80">
                    <span className="text-[#D4AF37] font-semibold">
                      {language === 'ar' ? 'روابط مباشرة تشمل:' : 'Direct Links Include:'}
                    </span>{' '}
                    <span className="text-white/70">
                      {language === 'ar'
                        ? `الرئيسية · المتجر · المدونة (${ARTICLES_DATA.length} مقالاً) · خريطة الموقع · الأدوات · من نحن · اتصل بنا`
                        : `Home · Store · Journal (${ARTICLES_DATA.length} Articles) · Sitemap · Tools · About · Contact`}
                    </span>
                  </div>
                </div>

                {/* Direct quick navigation shortcuts with real <a> tags */}
                <div className="flex items-center gap-1.5 flex-wrap justify-center text-[11px] font-medium text-white/90">
                  <a
                    href="/?tab=home"
                    onClick={(e) => handleDirectLink(e, 'home')}
                    className="px-2.5 py-1 rounded-lg bg-[#D4AF37] text-[#18181B] font-bold shadow-xs transition-colors cursor-pointer flex items-center gap-1 no-underline"
                  >
                    <Home className="w-3 h-3" />
                    <span>{t.navHome}</span>
                  </a>
                  <a
                    href="/?tab=catalog"
                    onClick={(e) => handleDirectLink(e, 'catalog')}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer no-underline text-white"
                  >
                    {t.theStore}
                  </a>
                  <a
                    href="/?tab=journal"
                    onClick={(e) => handleDirectLink(e, 'journal')}
                    className="px-2.5 py-1 rounded-lg bg-[#D4AF37]/25 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer font-bold flex items-center gap-1 no-underline"
                  >
                    <span>{t.theBlog}</span>
                    <span className="font-mono text-[10px] bg-[#18181B] text-[#D4AF37] px-1 rounded font-bold">
                      {ARTICLES_DATA.length}
                    </span>
                  </a>
                  <a
                    href="/?tab=sitemap"
                    onClick={(e) => handleDirectLink(e, 'sitemap')}
                    className="px-2.5 py-1 rounded-lg bg-[#D4AF37] text-[#18181B] hover:opacity-90 font-bold transition-colors cursor-pointer flex items-center gap-1 no-underline"
                  >
                    <Compass className="w-3 h-3" />
                    <span>{language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}</span>
                  </a>
                  <a
                    href="/?tab=tools"
                    onClick={(e) => handleDirectLink(e, 'tools')}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer no-underline text-white"
                  >
                    {t.navTools}
                  </a>
                  <a
                    href="/?tab=about"
                    onClick={(e) => handleDirectLink(e, 'about')}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer no-underline text-white"
                  >
                    {t.aboutUs}
                  </a>
                  <a
                    href="/?tab=contact"
                    onClick={(e) => handleDirectLink(e, 'contact')}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer no-underline text-white"
                  >
                    {t.contactUs}
                  </a>
                  <a
                    href="/?tab=privacy"
                    onClick={(e) => handleDirectLink(e, 'privacy')}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer no-underline text-white"
                  >
                    {t.privacyPolicy}
                  </a>
                  <a
                    href="/?tab=terms"
                    onClick={(e) => handleDirectLink(e, 'terms')}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer no-underline text-white"
                  >
                    {t.termsOfUse}
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <Hero
              language={language}
              onExplore={() => handleTabChange('catalog')}
              onBookVip={() => handleTabChange('contact')}
            />

            {/* Comprehensive Site Sections Directory (أقسام الموقع الرئيسي بروابط مباشرة) */}
            <section className="bg-white border-b border-[#D4AF37]/20 py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#18181B] font-serif-luxury">
                        {language === 'ar' ? 'خريطة وأقسام الموقع الرئيسي (روابط مباشرة)' : 'Main Website Sections Directory (Direct Links)'}
                      </h3>
                      <p className="text-xs text-[#8C7A5B]">
                        {language === 'ar'
                          ? `روابط مباشرة دائمة: الرئيسية، المتجر، المدونة (${ARTICLES_DATA.length} مقالات)، خريطة الموقع، الأدوات، من نحن، اتصل بنا، والسياسات`
                          : `Direct canonical URLs: Home, Store, Journal (${ARTICLES_DATA.length} Articles), Sitemap, Tools, About, Contact, and Policies`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="/?tab=sitemap"
                      onClick={(e) => handleDirectLink(e, 'sitemap')}
                      className="px-3.5 py-1.5 rounded-lg bg-[#18181B] text-[#D4AF37] text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-sm no-underline"
                    >
                      <Compass className="w-4 h-4 text-[#D4AF37]" />
                      <span>{language === 'ar' ? 'صفحة خريطة الموقع الكاملة' : 'Full Sitemap Page'}</span>
                    </a>

                    <button
                      onClick={() => setIsSiteSectionsOpen(true)}
                      className="px-3.5 py-1.5 rounded-lg border border-[#D4AF37]/40 text-xs font-semibold text-[#18181B] hover:bg-[#FAF8F5] transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <span>{language === 'ar' ? 'دليل الأقسام' : 'Directory Modal'}</span>
                    </button>
                  </div>
                </div>

                {/* Grid of the core main sections as direct links */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
                  {/* 1. الرئيسية */}
                  <a
                    href="/?tab=home"
                    onClick={(e) => handleDirectLink(e, 'home')}
                    className="p-3.5 rounded-xl border-2 border-[#D4AF37] bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-xs hover:shadow no-underline block"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-[#18181B] text-[#D4AF37]">
                        <Home className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-[#B8902A] font-mono font-bold">01</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.navHome}
                    </span>
                    <span className="text-[11px] text-[#8C7A5B] block mt-0.5 truncate">
                      {language === 'ar' ? 'الصفحة الرئيسية' : 'Current Page'}
                    </span>
                  </a>

                  {/* 2. المتجر */}
                  <a
                    href="/?tab=catalog"
                    onClick={(e) => handleDirectLink(e, 'catalog')}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#D4AF37] bg-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-xs hover:shadow no-underline block"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 group-hover:border-[#D4AF37]/40 text-[#D4AF37]">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">02</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.theStore}
                    </span>
                    <span className="text-[11px] text-[#8C7A5B] block mt-0.5 truncate">
                      {language === 'ar' ? 'تشكيلات الذهب والألماس' : 'High Jewelry'}
                    </span>
                  </a>

                  {/* 3. المدونة (مع كتابة عدد المقالات) */}
                  <a
                    href="/?tab=journal"
                    onClick={(e) => handleDirectLink(e, 'journal')}
                    className="p-3.5 rounded-xl border-2 border-[#D4AF37] bg-gradient-to-br from-amber-50/40 via-white to-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-xs hover:shadow no-underline block"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-[#18181B] text-[#D4AF37]">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] bg-[#18181B] text-[#D4AF37] px-1.5 py-0.5 rounded font-mono font-bold">
                        {ARTICLES_DATA.length} {language === 'ar' ? 'مقالاً' : 'Arts'}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.theBlog}
                    </span>
                    <span className="text-[11px] text-[#B8902A] font-semibold block mt-0.5 truncate">
                      {language === 'ar' ? `(${ARTICLES_DATA.length} مقالات حصرية)` : `(${ARTICLES_DATA.length} Deep Guides)`}
                    </span>
                  </a>

                  {/* 4. خريطة الموقع (روابط مباشرة) */}
                  <a
                    href="/?tab=sitemap"
                    onClick={(e) => handleDirectLink(e, 'sitemap')}
                    className="p-3.5 rounded-xl border-2 border-[#D4AF37] bg-[#18181B] text-[#FAF8F5] hover:bg-slate-800 transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-md hover:shadow-lg no-underline block"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-[#D4AF37] text-[#18181B]">
                        <Compass className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] bg-[#D4AF37] text-[#18181B] px-1.5 py-0.5 rounded font-mono font-bold">
                        Direct
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#D4AF37] group-hover:text-white block font-serif-luxury">
                      {language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
                    </span>
                    <span className="text-[11px] text-white/80 block mt-0.5 truncate">
                      {language === 'ar' ? 'فهرس الروابط المباشرة' : 'Direct Links Index'}
                    </span>
                  </a>

                  {/* 5. الأدوات التفاعلية */}
                  <a
                    href="/?tab=tools"
                    onClick={(e) => handleDirectLink(e, 'tools')}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#D4AF37] bg-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-xs hover:shadow no-underline block"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 group-hover:border-[#D4AF37]/40 text-[#D4AF37]">
                        <Coins className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">05</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.navTools}
                    </span>
                    <span className="text-[11px] text-[#8C7A5B] block mt-0.5 truncate">
                      {language === 'ar' ? 'حاسبة الذهب والمقاسات' : 'Gold & Sizer'}
                    </span>
                  </a>

                  {/* 6. من نحن */}
                  <a
                    href="/?tab=about"
                    onClick={(e) => handleDirectLink(e, 'about')}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#D4AF37] bg-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-xs hover:shadow no-underline block"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 group-hover:border-[#D4AF37]/40 text-emerald-600">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">06</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.aboutUs}
                    </span>
                    <span className="text-[11px] text-[#8C7A5B] block mt-0.5 truncate">
                      {language === 'ar' ? 'قصة التأسيس والحرفية' : 'Heritage Story'}
                    </span>
                  </a>

                  {/* 7. اتصل بنا */}
                  <a
                    href="/?tab=contact"
                    onClick={(e) => handleDirectLink(e, 'contact')}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#D4AF37] bg-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-xs hover:shadow no-underline block"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 group-hover:border-[#D4AF37]/40 text-blue-600">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">07</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.contactUs}
                    </span>
                    <span className="text-[11px] text-[#8C7A5B] block mt-0.5 truncate">
                      {language === 'ar' ? 'حجز موعد وصالات VIP' : 'Salons & Phone'}
                    </span>
                  </a>

                  {/* 8. السياسات والضمان */}
                  <a
                    href="/?tab=privacy"
                    onClick={(e) => handleDirectLink(e, 'privacy')}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#D4AF37] bg-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-xs hover:shadow no-underline block"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 group-hover:border-[#D4AF37]/40 text-purple-600">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">08</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.privacyPolicy}
                    </span>
                    <span className="text-[11px] text-[#8C7A5B] block mt-0.5 truncate">
                      {language === 'ar' ? 'الخصوصية والضمان' : 'Privacy & Terms'}
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* Quick Collections Navigation Strip */}
            <CollectionsBar
              language={language}
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                handleTabChange('catalog');
              }}
            />

            {/* Featured Masterpieces Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#B8902A] tracking-wider uppercase mb-1">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span>{language === 'ar' ? 'إبداعات استثنائية موثقة' : 'Sovereign Signatures'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold text-[#18181B] font-serif-luxury">
                    {language === 'ar' ? 'روائع الألماس والذهب الأكثر طلباً' : 'Curated High Jewelry Masterpieces'}
                  </h2>
                </div>

                <button
                  onClick={() => handleTabChange('catalog')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B8902A] hover:underline"
                >
                  <span>{language === 'ar' ? 'عرض الكتالوج كاملاً' : 'View Full Catalog'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    language={language}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onQuickView={setQuickViewProduct}
                    onAddToCart={(p) => handleAddToCart(p)}
                  />
                ))}
              </div>
            </section>

            {/* Artisanal Heritage & Craftsmanship Spotlight */}
            <section className="bg-[#18181B] text-[#FAF8F5] py-20 border-y border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{language === 'ar' ? 'حرفية لا تعرف المساومة' : 'Unwavering Integrity'}</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-luxury leading-tight [text-wrap:balance]">
                      {language === 'ar'
                        ? 'ألماس معتمد دولياً بدمغات رسمية وضمان استثمار يدوم للأجيال'
                        : 'Graded Natural Diamonds & Officially Stamped Sovereign Gold'}
                    </h2>

                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                      {language === 'ar'
                        ? 'في بوتيك مجوهرات النخبة الملكية، لا نساوم أبداً على النقاء أو الشفافية. كل حجر ألماس طبيعي يحمل رقماً تسلسلياً ليزرياً مطابقاً لسجلات معهد الأحجار الكريمة الأمريكي GIA، وكل سبيكة ذهب أو قطعة فضة إسترلينية 925 تخضع لفحص مخبري دقيق بالموجات الطيفية XRF لضمان حقك وحفظ ثروتك.'
                        : 'Every natural diamond mounted in our ateliers bears a certified laser registry inscription verified by the Gemological Institute of America (GIA), accompanied by non-destructive XRF metallurgical assaying.'}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <button
                        onClick={() => handleTabChange('about')}
                        className="px-6 py-3 bg-[#D4AF37] hover:bg-[#B8902A] text-[#18181B] font-bold text-xs sm:text-sm rounded-xl transition-colors"
                      >
                        {t.navAbout}
                      </button>

                      <button
                        onClick={() => handleTabChange('tools')}
                        className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-[#D4AF37]/40 text-xs sm:text-sm rounded-xl transition-colors"
                      >
                        {t.goldCalcTitle}
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-sm">
                      <span className="text-2xl font-bold text-[#D4AF37] font-mono">100%</span>
                      <h4 className="text-sm font-semibold font-serif-luxury">GIA & IGI Verified</h4>
                      <p className="text-xs text-white/60">
                        {language === 'ar' ? 'فحص مخبري مستقل وشهادات معتمدة.' : 'Independent third-party reports.'}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-sm">
                      <span className="text-2xl font-bold text-[#D4AF37] font-mono">92.5%</span>
                      <h4 className="text-sm font-semibold font-serif-luxury">Pure 925 Silver</h4>
                      <p className="text-xs text-white/60">
                        {language === 'ar' ? 'فضة بريطانية بطلاء الروديوم.' : 'British assay hallmarked.'}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-sm">
                      <span className="text-2xl font-bold text-[#D4AF37] font-mono">999.9</span>
                      <h4 className="text-sm font-semibold font-serif-luxury">LBMA Bullion</h4>
                      <p className="text-xs text-white/60">
                        {language === 'ar' ? 'سبائك استثمارية مشفرة.' : 'Sovereign investment bars.'}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-sm">
                      <span className="text-2xl font-bold text-[#D4AF37] font-mono">24/7</span>
                      <h4 className="text-sm font-semibold font-serif-luxury">VIP Concierge</h4>
                      <p className="text-xs text-white/60">
                        {language === 'ar' ? 'استشارات وشحن مصفح خاص.' : 'Armored secure transit.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Editorial Magazine Highlights */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#B8902A] tracking-wider uppercase mb-1">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    <span>{t.journalBadge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold text-[#18181B] font-serif-luxury">
                    {language === 'ar' ? 'أحدث أبحاث وأدلة مجلة المجوهرات' : 'Latest Gemological Dissertations'}
                  </h2>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('journal');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B8902A] hover:underline"
                >
                  <span>{language === 'ar' ? 'استعراض كافة المقالات' : 'Explore All Dissertations'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ARTICLES_DATA.slice(0, 3).map((article) => (
                  <div
                    key={article.id}
                    onClick={() => handleOpenArticle(article)}
                    className="p-5 rounded-2xl bg-white border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-2">
                      <span className="text-[11px] text-[#8C7A5B] block font-mono uppercase">
                        {language === 'ar' ? article.categoryAr : article.categoryEn} · {article.readTimeAr}
                      </span>
                      <h4 className="text-base font-bold text-[#18181B] group-hover:text-[#B8902A] transition-colors font-serif-luxury line-clamp-2">
                        {language === 'ar' ? article.titleAr : article.titleEn}
                      </h4>
                      <p className="text-xs text-[#18181B]/70 line-clamp-3 font-light leading-relaxed">
                        {language === 'ar' ? article.summaryAr : article.summaryEn}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs">
                      <span className="text-[#8C7A5B]">
                        {language === 'ar' ? article.author.nameAr : article.author.nameEn}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenArticle(article);
                        }}
                        className="text-[#B8902A] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <span>{language === 'ar' ? 'قراءة التحليل' : 'Read'}</span>
                        <ArrowIcon className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Catalog Tab */}
        {effectiveTab === 'catalog' && (
          <CatalogSection
            products={PRODUCTS_DATA}
            language={language}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={setQuickViewProduct}
            onAddToCart={(p) => handleAddToCart(p)}
            initialCategory={selectedCategory}
          />
        )}

        {/* Journal Tab */}
        {effectiveTab === 'journal' && (
          <BlogSection
            language={language}
            selectedArticle={selectedArticle}
            onSelectArticle={(art) => {
              setSelectedArticle(art);
              syncBrowserUrl('journal', art);
            }}
          />
        )}

        {/* Interactive Tools Tab */}
        {effectiveTab === 'tools' && <ToolsSection language={language} />}

        {/* About Tab */}
        {effectiveTab === 'about' && <AboutSection language={language} />}

        {/* Contact Tab */}
        {effectiveTab === 'contact' && <ContactSection language={language} />}

        {/* Privacy Tab */}
        {effectiveTab === 'privacy' && <LegalPages language={language} initialTab="privacy" />}

        {/* Terms Tab */}
        {effectiveTab === 'terms' && <LegalPages language={language} initialTab="terms" />}

        {/* Comprehensive Sitemap Tab (خريطة الموقع روابط مباشرة) */}
        {effectiveTab === 'sitemap' && (
          <SitemapView
            language={language}
            onNavigate={handleTabChange}
            onSelectArticle={handleOpenArticle}
          />
        )}
      </main>

      {/* Global Product Dossier Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        language={language}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenRingSizer={() => {
          setQuickViewProduct(null);
          handleTabChange('tools');
        }}
      />

      {/* Global Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        language={language}
      />

      {/* Global Royal Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onQuickView={(p) => setQuickViewProduct(p)}
        onRestoreDefaults={handleRestoreDefaultWishlist}
        onAddAllToCart={handleAddAllWishlistToCart}
        language={language}
      />

      {/* Site Sections & Comprehensive Directory Modal */}
      <SiteSectionsModal
        isOpen={isSiteSectionsOpen}
        onClose={() => setIsSiteSectionsOpen(false)}
        language={language}
        onNavigate={handleTabChange}
        onSelectArticle={(art) => {
          handleOpenArticle(art);
          setIsSiteSectionsOpen(false);
        }}
      />

      {/* Privacy & GDPR Cookie Consent Banner */}
      <CookieBanner language={language} />

      {/* Comprehensive Footer */}
      <Footer
        language={language}
        onNavigate={handleTabChange}
        onOpenPrivacy={() => handleTabChange('privacy')}
        onOpenTerms={() => handleTabChange('terms')}
      />

      {/* Fixed Sticky Anchor Ad Banner at viewport bottom */}
      <StickyAnchorAd language={language} />
    </div>
  );
}
