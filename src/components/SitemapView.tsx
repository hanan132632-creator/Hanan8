import React, { useState, useMemo } from 'react';
import {
  Compass,
  Home,
  ShoppingBag,
  BookOpen,
  Users,
  PhoneCall,
  ShieldCheck,
  Scale,
  Coins,
  Ruler,
  Copy,
  Check,
  Search,
  Sparkles,
  FileCode,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Layers,
  FileText,
  Download,
  Code,
  Globe,
} from 'lucide-react';
import { Language, Article, ProductCategory } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { ARTICLES_DATA } from '../data/articles.ts';

interface SitemapViewProps {
  language: Language;
  onNavigate: (tab: string, category?: ProductCategory) => void;
  onSelectArticle: (article: Article) => void;
}

export const SitemapView: React.FC<SitemapViewProps> = ({
  language,
  onNavigate,
  onSelectArticle,
}) => {
  const t = TRANSLATIONS[language];
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'interactive' | 'xml'>('interactive');

  const baseUrl = 'https://hanan.blog';

  const copyToClipboard = (url: string, id: string) => {
    try {
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      // fallback
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent,
    tab: string,
    category?: ProductCategory,
    article?: Article
  ) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button === 0) {
      e.preventDefault();
      if (article) {
        onSelectArticle(article);
      } else {
        onNavigate(tab, category);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 1. Core Pages
  const mainPages = [
    {
      id: 'page-home',
      tab: 'home',
      url: '/?tab=home',
      fullUrl: `${baseUrl}/?tab=home`,
      titleAr: 'الصفحة الرئيسية للبوتيك الملكي',
      titleEn: 'Royal Boutique Homepage',
      descAr: 'واجهة الدار الرسمية، أحدث التشكيلات الماسية والذهبية، وشهادات الاعتماد GIA.',
      descEn: 'Official maison frontpage, featured diamond collections, and laboratory certifications.',
      icon: Home,
      badge: 'Portal',
      priority: '1.0',
    },
    {
      id: 'page-catalog',
      tab: 'catalog',
      url: '/?tab=catalog',
      fullUrl: `${baseUrl}/?tab=catalog`,
      titleAr: 'المتجر الفاخر والكتالوج المعتمد',
      titleEn: 'Fine Jewelry Store & Catalog',
      descAr: 'مقتنيات المجوهرات الفاخرة، خواتم السوليتير، أطقم الأعراس، وسبائك الذهب الخالص.',
      descEn: 'High jewelry masterpieces, solitaire rings, bridal suites, and bullion assets.',
      icon: ShoppingBag,
      badge: 'Catalog',
      priority: '0.9',
    },
    {
      id: 'page-journal',
      tab: 'journal',
      url: '/?tab=journal',
      fullUrl: `${baseUrl}/?tab=journal`,
      titleAr: `مجلة أبحاث المجوهرات EEAT (${ARTICLES_DATA.length} مقالاً)`,
      titleEn: `Gemological Journal EEAT (${ARTICLES_DATA.length} Articles)`,
      descAr: 'أدلة علوم المعادن والأحجار الكريمة، فحص 4Cs، ومعايير الاستثمار الآمن.',
      descEn: 'Expert gemology guides, 4Cs diamond grading, and precious metal asset curation.',
      icon: BookOpen,
      badge: 'Magazine',
      priority: '0.9',
    },
    {
      id: 'page-sitemap',
      tab: 'sitemap',
      url: '/sitemap.xml',
      fullUrl: `${baseUrl}/sitemap.xml`,
      titleAr: 'خريطة الموقع المباشرة (XML & HTML)',
      titleEn: 'Direct Sitemap (XML & HTML)',
      descAr: 'فهرس الروابط المباشرة الدائمة لكافة صفحات ومقالات البوتيك المعتمدة.',
      descEn: 'Permanent direct canonical index for all store pages and research articles.',
      icon: Compass,
      badge: 'Sitemap',
      priority: '0.95',
    },
    {
      id: 'page-tools',
      tab: 'tools',
      url: '/?tab=tools',
      fullUrl: `${baseUrl}/?tab=tools`,
      titleAr: 'الأدوات التفاعلية (حاسبة الذهب ومقاسات الخواتم)',
      titleEn: 'Interactive Tools (Gold & Ring Sizer)',
      descAr: 'حساب مقاسات الخواتم بالملمتر وحساب أسعار الذهب والفضة اللحظية.',
      descEn: 'Precision finger circumference sizer and live indicative gold valuation calculator.',
      icon: Coins,
      badge: 'Tools',
      priority: '0.8',
    },
    {
      id: 'page-about',
      tab: 'about',
      url: '/?tab=about',
      fullUrl: `${baseUrl}/?tab=about`,
      titleAr: 'من نحن وقصة دار النخبة الملكية',
      titleEn: 'About Us & Sovereign Heritage',
      descAr: 'تاريخ الدار منذ 1994، أسرار الصياغة اليدوية، والالتزام بنظام كيمبرلي.',
      descEn: 'Over 30 years of master goldsmithing, ethical Kimberley Process sourcing.',
      icon: Users,
      badge: 'Heritage',
      priority: '0.7',
    },
    {
      id: 'page-contact',
      tab: 'contact',
      url: '/?tab=contact',
      fullUrl: `${baseUrl}/?tab=contact`,
      titleAr: 'اتصل بنا وحجز مواعيد الصالونات VIP',
      titleEn: 'Contact Us & VIP Salon Booking',
      descAr: 'قنوات التواصل المباشر، صالونات الاستقبال في الرياض ودبي، ومستشار VIP.',
      descEn: 'Direct liaison, VIP private viewing salons in Riyadh & Dubai, and concierge.',
      icon: PhoneCall,
      badge: 'Concierge',
      priority: '0.7',
    },
    {
      id: 'page-privacy',
      tab: 'privacy',
      url: '/?tab=privacy',
      fullUrl: `${baseUrl}/?tab=privacy`,
      titleAr: 'سياسة الخصوصية وحماية البيانات (GDPR)',
      titleEn: 'Privacy Policy & Data Integrity',
      descAr: 'معايير حماية الخصوصية الرقمية، إدارة ملفات تعريف الارتباط، وتشفير البيانات.',
      descEn: 'Strict adherence to digital privacy standards, cookie policies, and data encryption.',
      icon: ShieldCheck,
      badge: 'Legal',
      priority: '0.7',
    },
    {
      id: 'page-terms',
      tab: 'terms',
      url: '/?tab=terms',
      fullUrl: `${baseUrl}/?tab=terms`,
      titleAr: 'شروط الاستخدام والضمان والاسترجاع 14 يوماً',
      titleEn: 'Terms of Use & 14-Day Warranty',
      descAr: 'وثيقة الضمان الملكي، شهادات الأصالة المعتمدة، وسياسة الاستبدال والشحن المصفح.',
      descEn: 'Authenticity certificate guarantees, 14-day exchange protocols, and armored transit.',
      icon: Scale,
      badge: 'Legal',
      priority: '0.7',
    },
  ];

  // 2. Jewelry Categories
  const categoryLinks = [
    {
      id: 'cat-bridal',
      category: 'bridal' as ProductCategory,
      url: '/?tab=catalog&category=bridal',
      fullUrl: `${baseUrl}/?tab=catalog&category=bridal`,
      titleAr: 'أطقم الأعراس والمناسبات الكبرى',
      titleEn: 'Bridal & Royal Gala Suites',
      descAr: 'أطقم التيجان والقلائد الملكية المرصعة بألماس GIA وأندر الأحجار الإمبراطورية.',
      descEn: 'Coronation tiaras, collared necklaces, and sovereign high jewelry suites.',
    },
    {
      id: 'cat-solitaire',
      category: 'solitaire' as ProductCategory,
      url: '/?tab=catalog&category=solitaire',
      fullUrl: `${baseUrl}/?tab=catalog&category=solitaire`,
      titleAr: 'خواتم السوليتير الملكية المعتمدة',
      titleEn: 'Certified Solitaire Rings',
      descAr: 'خواتم الخطوبة والألماس الفردي بقصات بريليانت وأميرالد وماركيز موثقة.',
      descEn: 'Brilliant, emerald, and marquise cut solitaires with verified GIA dossiers.',
    },
    {
      id: 'cat-bracelets',
      category: 'bracelets' as ProductCategory,
      url: '/?tab=catalog&category=bracelets',
      fullUrl: `${baseUrl}/?tab=catalog&category=bracelets`,
      titleAr: 'أساور التنس الفاخرة واللؤلؤ الطبيعي',
      titleEn: 'Diamond Tennis Bracelets & Pearls',
      descAr: 'أساور التنس المرصعة بالألماس الكامل وأساور لؤلؤ المياه الطبيعية.',
      descEn: 'Seamless diamond line tennis cuffs and luminous natural saltwater pearls.',
    },
    {
      id: 'cat-necklaces',
      category: 'necklaces' as ProductCategory,
      url: '/?tab=catalog&category=necklaces',
      fullUrl: `${baseUrl}/?tab=catalog&category=necklaces`,
      titleAr: 'القلائد والعقود والأطواق الفاخرة',
      titleEn: 'Fine Necklaces & Royal Pendants',
      descAr: 'سلاسل الذهب الخالص عيار 18k و 21k وحبات الزمرد والياقوت النادرة.',
      descEn: '18k & 21k solid gold chains, unheated sapphire and Colombian emerald pendants.',
    },
    {
      id: 'cat-investment',
      category: 'investment' as ProductCategory,
      url: '/?tab=catalog&category=investment',
      fullUrl: `${baseUrl}/?tab=catalog&category=investment`,
      titleAr: 'سبائك الذهب الخالص الاستثمارية 24k',
      titleEn: '24k Solid Gold Bullion Assets',
      descAr: 'سبائك استثمارية مختومة بأعلى درجات النقاء 999.9 معتمدة من LBMA.',
      descEn: 'LBMA hallmarked 999.9 pure gold bars for sovereign portfolio preservation.',
    },
    {
      id: 'cat-daily',
      category: 'daily' as ProductCategory,
      url: '/?tab=catalog&category=daily',
      fullUrl: `${baseUrl}/?tab=catalog&category=daily`,
      titleAr: 'حلي ومجوهرات الاستخدام اليومي الراقي',
      titleEn: 'Daily Luxury & Sterling Silver 925',
      descAr: 'خواتم وأساور فضة إسترلينية 925 بريطانية وقطع ذهبية ناعمة للاستخدام اليومي.',
      descEn: 'British hallmarked 925 sterling silver and lightweight daily fine gold jewels.',
    },
  ];

  // 3. Technical files
  const technicalFiles = [
    {
      id: 'file-sitemap-xml',
      url: '/sitemap.xml',
      fullUrl: `${baseUrl}/sitemap.xml`,
      titleAr: 'خريطة الموقع XML الرسمية (hanan.blog/sitemap.xml)',
      titleEn: 'Official XML Sitemap (hanan.blog/sitemap.xml)',
      descAr: 'ملف بروتوكول Sitemaps.org المعتمد لأرشفة جوجل (Google Search Console).',
      descEn: 'Standard XML sitemap protocol for Googlebot and search crawlers indexing.',
      icon: FileCode,
    },
    {
      id: 'file-robots-txt',
      url: '/robots.txt',
      fullUrl: `${baseUrl}/robots.txt`,
      titleAr: 'ملف توجيه الروبوتات ومحركات البحث (robots.txt)',
      titleEn: 'Crawler Directives File (robots.txt)',
      descAr: 'إرشادات زحف محركات البحث والتوجيه نحو خريطة الموقع المعتمدة.',
      descEn: 'Crawler directives, search bot permissions, and sitemap reference pointer.',
      icon: FileText,
    },
    {
      id: 'file-ads-txt',
      url: '/ads.txt',
      fullUrl: `${baseUrl}/ads.txt`,
      titleAr: 'ملف الشفافية الإعلانية المعتمد (ads.txt)',
      titleEn: 'Authorized Digital Sellers File (ads.txt)',
      descAr: 'ملف التحقق من المعلنين المعتمد وفق معايير IAB Tech Lab وGoogle AdSense.',
      descEn: 'IAB Tech Lab compliant seller verification file for programmatic transparency.',
      icon: Sparkles,
    },
  ];

  // Generate XML text preview
  const rawXmlContent = useMemo(() => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    xml += `  <url>\n    <loc>${baseUrl}/</loc>\n    <lastmod>2026-10-28</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
    xml += `  <url>\n    <loc>${baseUrl}/?tab=catalog</loc>\n    <lastmod>2026-10-28</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    xml += `  <url>\n    <loc>${baseUrl}/?tab=journal</loc>\n    <lastmod>2026-10-28</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    xml += `  <url>\n    <loc>${baseUrl}/sitemap.xml</loc>\n    <lastmod>2026-10-28</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.95</priority>\n  </url>\n`;
    
    // Articles
    ARTICLES_DATA.forEach((art) => {
      xml += `  <url>\n    <loc>${baseUrl}/?tab=journal&amp;article=${art.id}</loc>\n    <lastmod>${art.publishDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    });

    // Pages
    ['about', 'contact', 'privacy', 'terms', 'tools'].forEach((p) => {
      xml += `  <url>\n    <loc>${baseUrl}/?tab=${p}</loc>\n    <lastmod>2026-10-28</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    });

    xml += `</urlset>`;
    return xml;
  }, [baseUrl]);

  // Filter articles based on search
  const filteredArticles = ARTICLES_DATA.filter((art) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const title = (language === 'ar' ? art.titleAr : art.titleEn).toLowerCase();
    const summary = (language === 'ar' ? art.summaryAr : art.summaryEn).toLowerCase();
    const author = (language === 'ar' ? art.author.nameAr : art.author.nameEn).toLowerCase();
    const cat = (language === 'ar' ? art.categoryAr : art.categoryEn).toLowerCase();
    return (
      title.includes(q) ||
      summary.includes(q) ||
      author.includes(q) ||
      cat.includes(q) ||
      art.id.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Section */}
        <div className="bg-[#18181B] text-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-xl relative overflow-hidden">
          {/* Subtle gold flare background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 font-bold flex items-center gap-1.5 font-mono">
                <Globe className="w-3.5 h-3.5" />
                <span>hanan.blog/sitemap.xml</span>
              </span>
              <span className="text-white/40">·</span>
              <span className="text-emerald-400 font-mono font-semibold">
                {language === 'ar'
                  ? `أكثر من ${mainPages.length + categoryLinks.length + ARTICLES_DATA.length + technicalFiles.length} رابطاً مباشراً`
                  : `${mainPages.length + categoryLinks.length + ARTICLES_DATA.length + technicalFiles.length}+ Direct Indexed URLs`}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-[#D4AF37] font-mono">
                {language === 'ar' ? `المدونة: ${ARTICLES_DATA.length} مقالاً معتمداً` : `Journal: ${ARTICLES_DATA.length} Research Articles`}
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-4xl font-bold font-serif-luxury text-white tracking-tight">
                {language === 'ar'
                  ? 'خريطة الموقع وروابط الفهرسة المباشرة (hanan.blog/sitemap.xml)'
                  : 'Direct Website Sitemap & Canonical Index (hanan.blog/sitemap.xml)'}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-white/75 font-light max-w-3xl leading-relaxed">
                {language === 'ar'
                  ? 'تم تجهيز خريطة الموقع لتظهر مباشرة بروابطها الدائمة لكافة الأقسام، تصنيفات المتجر، الأدوات الحسابية، وجميع المقالات التخصصية المعتمدة لتمكين الزوار ومحركات البحث من الوصول الفوري والدقيق.'
                  : 'Standard canonical indexing directory for Royal Elite High Jewelry Maison. All links on this page are direct permanent URLs allowing instant crawler indexing, browser sharing, and seamless navigation.'}
              </p>
            </div>

            {/* Direct Link Banner & View Mode Switcher */}
            <div className="pt-3 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-t border-white/10">
              {/* Direct Canonical Link Pill with Copy Button */}
              <div className="flex items-center gap-2 bg-black/40 border border-[#D4AF37]/40 px-3.5 py-2 rounded-xl text-xs font-mono text-[#D4AF37]">
                <FileCode className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-white/90 select-all truncate">https://hanan.blog/sitemap.xml</span>
                <button
                  onClick={() => copyToClipboard('https://hanan.blog/sitemap.xml', 'header-sitemap-url')}
                  className="p-1 rounded-md hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer shrink-0 ml-auto"
                  title={language === 'ar' ? 'نسخ الرابط المباشر' : 'Copy URL'}
                >
                  {copiedId === 'header-sitemap-url' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* View Mode Toggle: Interactive vs Raw XML Source */}
              <div className="flex items-center gap-2 self-start md:self-auto bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
                <button
                  onClick={() => setViewMode('interactive')}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'interactive'
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8902A] text-[#18181B] font-bold shadow-xs'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'خريطة الموقع التفاعلية' : 'Interactive View'}</span>
                </button>

                <button
                  onClick={() => setViewMode('xml')}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 font-mono ${
                    viewMode === 'xml'
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8902A] text-[#18181B] font-bold shadow-xs'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>sitemap.xml (Code)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View Mode 1: Raw XML Code Source View */}
        {viewMode === 'xml' && (
          <div className="bg-[#18181B] text-[#FAF8F5] rounded-3xl border border-[#D4AF37]/40 shadow-xl overflow-hidden animate-in fade-in duration-200">
            <div className="p-4 sm:p-6 bg-black/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-mono text-[#D4AF37]">
                <FileCode className="w-4 h-4" />
                <span className="font-bold">https://hanan.blog/sitemap.xml</span>
                <span className="text-white/40">·</span>
                <span className="text-emerald-400">Content-Type: application/xml</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(rawXmlContent, 'raw-xml-code')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors cursor-pointer"
                >
                  {copiedId === 'raw-xml-code' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{language === 'ar' ? 'تم نسخ الكود' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'نسخ كود XML' : 'Copy XML'}</span>
                    </>
                  )}
                </button>

                <a
                  href="/sitemap.xml"
                  download="sitemap.xml"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#B8902A] text-[#18181B] font-bold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'تحميل sitemap.xml' : 'Download'}</span>
                </a>
              </div>
            </div>

            <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto font-mono text-xs text-white/80 leading-relaxed bg-[#111113] selection:bg-[#D4AF37] selection:text-[#18181B]">
              <pre className="whitespace-pre-wrap break-all">
                <code>{rawXmlContent}</code>
              </pre>
            </div>
          </div>
        )}

        {/* View Mode 2: Interactive Cards View */}
        {viewMode === 'interactive' && (
          <div className="space-y-12">
            {/* Search Box */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
              <Search className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'ar'
                    ? 'ابحث في الروابط أو عناوين المقالات (مثال: ألماس، ذهب، زمرد، خواتم)...'
                    : 'Filter links or article titles (e.g., diamond, gold, rings)...'
                }
                className="w-full bg-transparent text-sm text-[#18181B] placeholder-slate-400 focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded cursor-pointer"
                >
                  {language === 'ar' ? 'مسح' : 'Clear'}
                </button>
              )}
            </div>

            {/* Section 1: Main Pages & Core Portals */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-serif-luxury text-[#18181B]">
                      {language === 'ar' ? '1. الصفحات والأقسام الرئيسية' : '1. Core Pages & Primary Portals'}
                    </h2>
                    <p className="text-xs text-[#8C7A5B]">
                      {language === 'ar'
                        ? 'الروابط المباشرة لصفحات البوتيك الأساسية ومراكز الخدمة'
                        : 'Direct canonical URLs for primary storefront, heritage, and service portals'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#18181B] px-2.5 py-1 rounded-lg">
                  {mainPages.length} {language === 'ar' ? 'صفحة' : 'Pages'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mainPages.map((page) => {
                  const Icon = page.icon;
                  return (
                    <div
                      key={page.id}
                      className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="p-2 rounded-xl bg-[#FAF8F5] text-[#D4AF37] border border-slate-100 group-hover:bg-[#18181B] group-hover:text-[#D4AF37] transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FAF8F5] text-slate-600 border border-slate-200">
                            {page.badge} · {page.priority}
                          </span>
                        </div>

                        <a
                          href={page.url}
                          onClick={(e) => handleLinkClick(e, page.tab)}
                          className="block text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] transition-colors font-serif-luxury"
                        >
                          {language === 'ar' ? page.titleAr : page.titleEn}
                        </a>

                        <p className="text-xs text-[#18181B]/70 leading-relaxed font-light">
                          {language === 'ar' ? page.descAr : page.descEn}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        {/* Direct link anchor with copy shortcut */}
                        <a
                          href={page.url}
                          onClick={(e) => handleLinkClick(e, page.tab)}
                          className="text-[11px] font-mono text-[#D4AF37] hover:underline flex items-center gap-1 truncate"
                          title={page.fullUrl}
                        >
                          <span>{page.url}</span>
                        </a>

                        <button
                          onClick={() => copyToClipboard(page.fullUrl, page.id)}
                          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-[#18181B] transition-colors cursor-pointer shrink-0"
                          title={language === 'ar' ? 'نسخ الرابط المباشر' : 'Copy direct link'}
                        >
                          {copiedId === page.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 2: Store Jewelry Categories */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-serif-luxury text-[#18181B]">
                      {language === 'ar' ? '2. تشكيلات المتجر الفاخر (روابط التصنيفات المباشرة)' : '2. Fine Jewelry Store Collections (Direct Category Links)'}
                    </h2>
                    <p className="text-xs text-[#8C7A5B]">
                      {language === 'ar'
                        ? 'روابط مباشرة لتصنيفات المجوهرات والسبائك الاستثمارية'
                        : 'Direct canonical URLs for fine jewelry suites, solitaires, tennis cuffs, and bullions'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#18181B] px-2.5 py-1 rounded-lg">
                  {categoryLinks.length} {language === 'ar' ? 'تشكيلات' : 'Collections'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryLinks.map((cat) => (
                  <div
                    key={cat.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#D4AF37] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#D4AF37]/30 font-semibold uppercase">
                          {cat.category}
                        </span>
                        <ArrowIcon className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>

                      <a
                        href={cat.url}
                        onClick={(e) => handleLinkClick(e, 'catalog', cat.category)}
                        className="block text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] transition-colors font-serif-luxury"
                      >
                        {language === 'ar' ? cat.titleAr : cat.titleEn}
                      </a>

                      <p className="text-xs text-[#18181B]/70 leading-relaxed font-light">
                        {language === 'ar' ? cat.descAr : cat.descEn}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <a
                        href={cat.url}
                        onClick={(e) => handleLinkClick(e, 'catalog', cat.category)}
                        className="text-[11px] font-mono text-[#D4AF37] hover:underline flex items-center gap-1 truncate"
                      >
                        <span>{cat.url}</span>
                      </a>

                      <button
                        onClick={() => copyToClipboard(cat.fullUrl, cat.id)}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-[#18181B] transition-colors cursor-pointer shrink-0"
                        title={language === 'ar' ? 'نسخ الرابط المباشر' : 'Copy direct link'}
                      >
                        {copiedId === cat.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Interactive Precision Calculators */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-serif-luxury text-[#18181B]">
                      {language === 'ar' ? '3. الأدوات الحسابية التفاعلية للمقتني' : '3. Precision Interactive Calculators'}
                    </h2>
                    <p className="text-xs text-[#8C7A5B]">
                      {language === 'ar'
                        ? 'روابط مباشرة لحاسبات المقاسات وأسعار الذهب والفضة'
                        : 'Direct URLs for precision finger sizing and live gold bullion calculation'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#18181B] px-2.5 py-1 rounded-lg">
                  2 {language === 'ar' ? 'أداتين' : 'Tools'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                      <Ruler className="w-4 h-4" />
                      <span>{language === 'ar' ? 'حاسبة المقاسات' : 'Ring & Bracelet Sizer'}</span>
                    </div>
                    <a
                      href="/?tab=tools"
                      onClick={(e) => handleLinkClick(e, 'tools')}
                      className="block text-base font-bold text-[#18181B] group-hover:text-[#B8902A] transition-colors font-serif-luxury"
                    >
                      {t.ringSizerTitle}
                    </a>
                    <p className="text-xs text-[#18181B]/70 leading-relaxed font-light">
                      {t.ringSizerDesc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="/?tab=tools"
                      onClick={(e) => handleLinkClick(e, 'tools')}
                      className="text-[11px] font-mono text-[#D4AF37] hover:underline"
                    >
                      /?tab=tools#ring-sizer
                    </a>
                    <button
                      onClick={() => copyToClipboard(`${baseUrl}/?tab=tools#ring-sizer`, 'tool-ring')}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-[#18181B] transition-colors cursor-pointer"
                      title={language === 'ar' ? 'نسخ الرابط' : 'Copy link'}
                    >
                      {copiedId === 'tool-ring' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                      <Coins className="w-4 h-4" />
                      <span>{language === 'ar' ? 'حاسبة أسعار الذهب' : 'Live Gold Calculator'}</span>
                    </div>
                    <a
                      href="/?tab=tools"
                      onClick={(e) => handleLinkClick(e, 'tools')}
                      className="block text-base font-bold text-[#18181B] group-hover:text-[#B8902A] transition-colors font-serif-luxury"
                    >
                      {t.goldCalcTitle}
                    </a>
                    <p className="text-xs text-[#18181B]/70 leading-relaxed font-light">
                      {t.goldCalcDesc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="/?tab=tools"
                      onClick={(e) => handleLinkClick(e, 'tools')}
                      className="text-[11px] font-mono text-[#D4AF37] hover:underline"
                    >
                      /?tab=tools#gold-calculator
                    </a>
                    <button
                      onClick={() => copyToClipboard(`${baseUrl}/?tab=tools#gold-calculator`, 'tool-gold')}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-[#18181B] transition-colors cursor-pointer"
                      title={language === 'ar' ? 'نسخ الرابط' : 'Copy link'}
                    >
                      {copiedId === 'tool-gold' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: All 29 EEAT Gemological Articles with Direct Links */}
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-[#18181B] to-[#27272A] text-[#D4AF37] shadow-sm">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-serif-luxury text-[#18181B]">
                      {language === 'ar'
                        ? `4. مجلة وبحوث المجوهرات الملكية (روابط مباشرة لـ ${ARTICLES_DATA.length} مقالاً معتمداً)`
                        : `4. Editorial Gemological Journal (Direct Links to All ${ARTICLES_DATA.length} Articles)`}
                    </h2>
                    <p className="text-xs text-[#8C7A5B]">
                      {language === 'ar'
                        ? 'كافة المقالات والأبحاث المعتمدة بروابطها المباشرة الدائمة وعناوينها الكاملة'
                        : 'All peer-verified research papers and masterclass guides with direct canonical URLs'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg font-bold">
                    {language === 'ar'
                      ? `المعروض: ${filteredArticles.length} من أصل ${ARTICLES_DATA.length}`
                      : `Showing ${filteredArticles.length} of ${ARTICLES_DATA.length}`}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredArticles.map((article, index) => {
                  const directRelativeUrl = `/?tab=journal&article=${article.id}`;
                  const directFullUrl = `${baseUrl}/?tab=journal&article=${article.id}`;

                  return (
                    <div
                      key={article.id}
                      className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2.5">
                        {/* Meta info header */}
                        <div className="flex items-center justify-between gap-2 text-[11px] text-[#8C7A5B]">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-[#D4AF37] bg-[#18181B] px-1.5 py-0.5 rounded text-[10px]">
                              #{String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="flex items-center gap-1 font-medium">
                              <Tag className="w-3 h-3 text-[#D4AF37]" />
                              <span className="truncate max-w-[150px]">
                                {language === 'ar' ? article.categoryAr : article.categoryEn}
                              </span>
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{article.publishDate}</span>
                            </span>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{language === 'ar' ? article.readTimeAr : article.readTimeEn}</span>
                            </span>
                          </div>
                        </div>

                        {/* Article Title as direct link */}
                        <a
                          href={directRelativeUrl}
                          onClick={(e) => handleLinkClick(e, 'journal', undefined, article)}
                          className="block text-sm sm:text-base font-bold text-[#18181B] group-hover:text-[#B8902A] transition-colors font-serif-luxury leading-snug"
                        >
                          {language === 'ar' ? article.titleAr : article.titleEn}
                        </a>

                        {/* Article Excerpt */}
                        <p className="text-xs text-[#18181B]/75 leading-relaxed font-light line-clamp-2">
                          {language === 'ar' ? article.summaryAr : article.summaryEn}
                        </p>

                        {/* Author badge */}
                        <div className="flex items-center gap-1.5 text-[11px] text-[#8C7A5B]">
                          <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span className="font-semibold text-slate-700">
                            {language === 'ar' ? article.author.nameAr : article.author.nameEn}
                          </span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500 truncate max-w-[200px]">
                            {language === 'ar' ? article.author.titleAr : article.author.titleEn}
                          </span>
                        </div>
                      </div>

                      {/* Direct Link Anchor & Copy shortcut */}
                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <a
                          href={directRelativeUrl}
                          onClick={(e) => handleLinkClick(e, 'journal', undefined, article)}
                          className="text-[11px] font-mono text-[#D4AF37] hover:underline flex items-center gap-1.5 truncate group-hover:text-[#B8902A]"
                          title={directFullUrl}
                        >
                          <span className="truncate">{directRelativeUrl}</span>
                          <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
                        </a>

                        <button
                          onClick={() => copyToClipboard(directFullUrl, article.id)}
                          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-[#18181B] transition-colors cursor-pointer shrink-0 flex items-center gap-1 text-[10px]"
                          title={language === 'ar' ? 'نسخ الرابط المباشر للمقال' : 'Copy direct link'}
                        >
                          {copiedId === article.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-600 font-semibold">{language === 'ar' ? 'تم النسخ' : 'Copied'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">{language === 'ar' ? 'نسخ الرابط' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 5: Technical Engine Files (sitemap.xml, robots.txt, ads.txt) */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                    <FileCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-serif-luxury text-[#18181B]">
                      {language === 'ar' ? '5. ملفات الفهرسة التقنية وملفات الروبوتات' : '5. Technical Indexing Files & Crawler Directives'}
                    </h2>
                    <p className="text-xs text-[#8C7A5B]">
                      {language === 'ar'
                        ? 'الملفات المرجعية الرسمية لمحركات البحث ومنصات التحقق الإعلاني'
                        : 'Standard root protocol files for search engine indexing and ad network verification'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#18181B] px-2.5 py-1 rounded-lg">
                  {technicalFiles.length} {language === 'ar' ? 'ملفات' : 'Files'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {technicalFiles.map((file) => {
                  const Icon = file.icon;
                  return (
                    <div
                      key={file.id}
                      className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="p-2 rounded-xl bg-[#FAF8F5] text-[#D4AF37] border border-slate-100 group-hover:bg-[#18181B] group-hover:text-[#D4AF37] transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            200 OK
                          </span>
                        </div>

                        <a
                          href={file.url}
                          className="block text-sm font-bold text-[#18181B] group-hover:text-[#B8902A] transition-colors font-serif-luxury"
                        >
                          {language === 'ar' ? file.titleAr : file.titleEn}
                        </a>

                        <p className="text-xs text-[#18181B]/70 leading-relaxed font-light">
                          {language === 'ar' ? file.descAr : file.descEn}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                        <a
                          href={file.url}
                          className="text-[11px] font-mono text-[#D4AF37] hover:underline flex items-center gap-1"
                        >
                          <span>{file.url}</span>
                        </a>

                        <button
                          onClick={() => copyToClipboard(file.fullUrl, file.id)}
                          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-[#18181B] transition-colors cursor-pointer"
                          title={language === 'ar' ? 'نسخ الرابط' : 'Copy link'}
                        >
                          {copiedId === file.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="bg-[#FAF8F5] border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A5B]">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <span>
              {language === 'ar'
                ? 'جميع الروابط المذكورة في خريطة الموقع خاضعة لبروتوكول HTTPS المشفر وتتبع أحدث توصيات محركات البحث ومفاهيم تجربة المستخدم النخبوية.'
                : 'All URLs listed in this sitemap follow encrypted HTTPS standards and comply with modern Google Search Essentials.'}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-xs text-[#D4AF37] font-semibold">https://hanan.blog/sitemap.xml</span>
          </div>
        </div>
      </div>
    </div>
  );
};
