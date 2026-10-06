/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
import { CookieBanner } from './components/CookieBanner.tsx';
import { SiteSectionsModal } from './components/SiteSectionsModal.tsx';
import { Footer } from './components/Footer.tsx';
import { ProductCard } from './components/ProductCard.tsx';
import { PRODUCTS_DATA } from './data/products.ts';
import { ARTICLES_DATA } from './data/articles.ts';
import { TRANSLATIONS } from './data/translations.ts';
import { Language, Product, CartItem, ProductCategory } from './types.ts';
import {
  Gem,
  ShieldCheck,
  Award,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Compass,
  ShoppingBag,
  Users,
  PhoneCall,
  Scale,
  Coins,
} from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
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
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('royal_elite_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync RTL and lang attributes
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

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

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col font-sans">
      {/* Top 3-Zone Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSiteSections={() => setIsSiteSectionsOpen(true)}
        articlesCount={ARTICLES_DATA.length}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            {/* Top Royal Site Navigation Icon & Directory Bar (أول الصفحة الرئيسية) */}
            <div className="bg-[#18181B] text-[#FAF8F5] border-b-2 border-[#D4AF37]/40 py-3 px-4 sm:px-6 shadow-md">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  {/* The prominent Sections Icon button */}
                  <button
                    onClick={() => setIsSiteSectionsOpen(true)}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8902A] hover:opacity-95 text-[#18181B] font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer shrink-0"
                    title={language === 'ar' ? 'انقر لفتح دليل كافة أقسام الموقع' : 'Click to view all site sections'}
                  >
                    <Compass className="w-4 h-4 text-[#18181B]" />
                    <span>{language === 'ar' ? 'أقسام الموقع الرئيسي' : 'Site Sections'}</span>
                    <span className="bg-[#18181B] text-[#D4AF37] px-2 py-0.5 rounded-full text-[11px] font-mono font-extrabold">
                      {ARTICLES_DATA.length} {language === 'ar' ? 'مقالاً' : 'Arts'}
                    </span>
                  </button>

                  <div className="hidden sm:block text-xs text-white/80">
                    <span className="text-[#D4AF37] font-semibold">
                      {language === 'ar' ? 'ما يشمله الموقع:' : 'Includes:'}
                    </span>{' '}
                    <span className="text-white/70">
                      {language === 'ar'
                        ? `المتجر · المدونة (${ARTICLES_DATA.length} مقالاً) · من نحن · اتصل بنا · سياسة الخصوصية · شروط الاستخدام`
                        : `Store · Journal (${ARTICLES_DATA.length} Articles) · About · Contact · Privacy · Terms`}
                    </span>
                  </div>
                </div>

                {/* Direct quick navigation shortcuts */}
                <div className="flex items-center gap-1.5 flex-wrap justify-center text-[11px] font-medium text-white/90">
                  <button
                    onClick={() => {
                      setActiveTab('catalog');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer"
                  >
                    {t.theStore}
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('journal');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-2.5 py-1 rounded-lg bg-[#D4AF37]/25 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer font-bold flex items-center gap-1"
                  >
                    <span>{t.theBlog}</span>
                    <span className="font-mono text-[10px] bg-[#18181B] text-[#D4AF37] px-1 rounded font-bold">
                      {ARTICLES_DATA.length}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer"
                  >
                    {t.aboutUs}
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer"
                  >
                    {t.contactUs}
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('privacy');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer"
                  >
                    {t.privacyPolicy}
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('terms');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#18181B] transition-colors cursor-pointer"
                  >
                    {t.termsOfUse}
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <Hero
              language={language}
              onExplore={() => {
                setActiveTab('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookVip={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Comprehensive Site Sections Directory (أقسام الموقع الرئيسي) */}
            <section className="bg-white border-b border-[#D4AF37]/20 py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#18181B] font-serif-luxury">
                        {language === 'ar' ? 'أقسام ودليل الموقع الرئيسي' : 'Main Website Sections Directory'}
                      </h3>
                      <p className="text-xs text-[#8C7A5B]">
                        {language === 'ar'
                          ? `يشمل الموقع: المتجر، المدونة (${ARTICLES_DATA.length} مقالات)، من نحن، اتصل بنا، سياسة الخصوصية، وشروط الاستخدام`
                          : `Includes: Store, Journal (${ARTICLES_DATA.length} Articles), About, Contact, Privacy, and Terms`}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSiteSectionsOpen(true)}
                    className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg border border-[#D4AF37]/40 text-xs font-semibold text-[#18181B] hover:bg-[#FAF8F5] transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Compass className="w-4 h-4 text-[#B8902A]" />
                    <span>{language === 'ar' ? 'فتح فهرس الأقسام كاملاً' : 'Open Full Index Modal'}</span>
                  </button>
                </div>

                {/* Grid of the core main sections */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                  {/* 1. المتجر */}
                  <button
                    onClick={() => {
                      setActiveTab('catalog');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#D4AF37] bg-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-sm hover:shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 group-hover:border-[#D4AF37]/40 text-[#D4AF37]">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">01</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.theStore}
                    </span>
                    <span className="text-[11px] text-[#8C7A5B] block mt-0.5 truncate">
                      {language === 'ar' ? 'تشكيلات الذهب والألماس' : 'High Jewelry'}
                    </span>
                  </button>

                  {/* 2. المدونة (مع كتابة عدد المقالات: 4 مقالات) */}
                  <button
                    onClick={() => {
                      setActiveTab('journal');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded-xl border-2 border-[#D4AF37] bg-gradient-to-br from-amber-50/40 via-white to-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-sm hover:shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-[#18181B] text-[#D4AF37]">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] bg-[#18181B] text-[#D4AF37] px-1.5 py-0.5 rounded font-mono font-bold">
                        {ARTICLES_DATA.length} {language === 'ar' ? 'مقالات' : 'Arts'}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.theBlog}
                    </span>
                    <span className="text-[11px] text-[#B8902A] font-semibold block mt-0.5 truncate">
                      {language === 'ar' ? `(${ARTICLES_DATA.length} مقالات حصرية)` : `(${ARTICLES_DATA.length} Deep Guides)`}
                    </span>
                  </button>

                  {/* 3. من نحن */}
                  <button
                    onClick={() => {
                      setActiveTab('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#D4AF37] bg-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-sm hover:shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 group-hover:border-[#D4AF37]/40 text-emerald-600">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">03</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.aboutUs}
                    </span>
                    <span className="text-[11px] text-[#8C7A5B] block mt-0.5 truncate">
                      {language === 'ar' ? 'قصة التأسيس والحرفية' : 'Heritage Story'}
                    </span>
                  </button>

                  {/* 4. اتصل بنا */}
                  <button
                    onClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#D4AF37] bg-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-sm hover:shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 group-hover:border-[#D4AF37]/40 text-blue-600">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">04</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.contactUs}
                    </span>
                    <span className="text-[11px] text-[#8C7A5B] block mt-0.5 truncate">
                      {language === 'ar' ? 'حجز موعد وصالات VIP' : 'Salons & Phone'}
                    </span>
                  </button>

                  {/* 5. سياسة الخصوصية */}
                  <button
                    onClick={() => {
                      setActiveTab('privacy');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#D4AF37] bg-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-sm hover:shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 group-hover:border-[#D4AF37]/40 text-purple-600">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">05</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.privacyPolicy}
                    </span>
                    <span className="text-[11px] text-[#8C7A5B] block mt-0.5 truncate">
                      {language === 'ar' ? 'امتثال AdSense و GDPR' : 'Cookies & GDPR'}
                    </span>
                  </button>

                  {/* 6. شروط الاستخدام */}
                  <button
                    onClick={() => {
                      setActiveTab('terms');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#D4AF37] bg-[#FAF8F5] hover:bg-white transition-all text-right rtl:text-right ltr:text-left group cursor-pointer shadow-sm hover:shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 group-hover:border-[#D4AF37]/40 text-rose-600">
                        <Scale className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">06</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] block font-serif-luxury">
                      {t.termsOfUse}
                    </span>
                    <span className="text-[11px] text-[#8C7A5B] block mt-0.5 truncate">
                      {language === 'ar' ? 'الضمان والاسترجاع 14 يوم' : 'Warranty & Terms'}
                    </span>
                  </button>
                </div>
              </div>
            </section>

            {/* Quick Collections Navigation Strip */}
            <CollectionsBar
              language={language}
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                setActiveTab('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
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
                  onClick={() => {
                    setActiveTab('catalog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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
                        onClick={() => {
                          setActiveTab('about');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-6 py-3 bg-[#D4AF37] hover:bg-[#B8902A] text-[#18181B] font-bold text-xs sm:text-sm rounded-xl transition-colors"
                      >
                        {t.navAbout}
                      </button>

                      <button
                        onClick={() => {
                          setActiveTab('tools');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
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
                    onClick={() => {
                      setActiveTab('journal');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-5 rounded-2xl bg-white border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <span className="text-[11px] text-[#8C7A5B] block font-mono uppercase">
                        {language === 'ar' ? article.categoryAr : article.categoryEn} · {article.readTimeAr}
                      </span>
                      <h4 className="text-base font-bold text-[#18181B] font-serif-luxury line-clamp-2">
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
                      <span className="text-[#B8902A] font-semibold flex items-center gap-1">
                        <span>{language === 'ar' ? 'قراءة التحليل' : 'Read'}</span>
                        <ArrowIcon className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Catalog Tab */}
        {activeTab === 'catalog' && (
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
        {activeTab === 'journal' && <BlogSection language={language} />}

        {/* Interactive Tools Tab */}
        {activeTab === 'tools' && <ToolsSection language={language} />}

        {/* About Tab */}
        {activeTab === 'about' && <AboutSection language={language} />}

        {/* Contact Tab */}
        {activeTab === 'contact' && <ContactSection language={language} />}

        {/* Privacy Tab */}
        {activeTab === 'privacy' && <LegalPages language={language} initialTab="privacy" />}

        {/* Terms Tab */}
        {activeTab === 'terms' && <LegalPages language={language} initialTab="terms" />}
      </main>

      {/* Global Product Dossier Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        language={language}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenRingSizer={() => {
          setQuickViewProduct(null);
          setActiveTab('tools');
          window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Site Sections & Comprehensive Directory Modal */}
      <SiteSectionsModal
        isOpen={isSiteSectionsOpen}
        onClose={() => setIsSiteSectionsOpen(false)}
        language={language}
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* AdSense & GDPR Cookie Consent Banner */}
      <CookieBanner language={language} />

      {/* Comprehensive Footer */}
      <Footer
        language={language}
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPrivacy={() => {
          setActiveTab('privacy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenTerms={() => {
          setActiveTab('terms');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
