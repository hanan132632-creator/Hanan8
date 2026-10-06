import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import { Article, Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { ARTICLES_DATA } from '../data/articles.ts';
import { ArticleView } from './ArticleView.tsx';
import { AdSenseBanner } from './AdSenseBanner.tsx';

interface BlogSectionProps {
  language: Language;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  if (selectedArticle) {
    return (
      <ArticleView
        article={selectedArticle}
        language={language}
        onBack={() => setSelectedArticle(null)}
        onSelectArticle={(art) => setSelectedArticle(art)}
        allArticles={ARTICLES_DATA}
      />
    );
  }

  const categories = [
    { id: 'all', labelAr: 'كافة المقالات المخبرية', labelEn: 'All Dissertations' },
    { id: 'gems', labelAr: 'علوم الألماس والأحجار', labelEn: 'Diamond & Gemology' },
    { id: 'metals', labelAr: 'المعادن والدمغات 925', labelEn: 'Assaying & Silver 925' },
    { id: 'care', labelAr: 'العناية والصيانة', labelEn: 'Care & Restoration' },
    { id: 'invest', labelAr: 'الاستثمار والسبائك', labelEn: 'Bullion Investment' },
  ];

  const filteredArticles = ARTICLES_DATA.filter((a) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'gems') return a.id.includes('diamond');
    if (selectedCategory === 'metals') return a.id.includes('silver');
    if (selectedCategory === 'care') return a.id.includes('care');
    if (selectedCategory === 'invest') return a.id.includes('gold-bullion');
    return true;
  });

  const featured = ARTICLES_DATA[0];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B8902A] tracking-wider uppercase">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>{t.journalBadge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#18181B] font-serif-luxury [text-wrap:balance]">
          {t.journalTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#18181B]/70 leading-relaxed font-light">
          {t.journalSubtitle}
        </p>

        {/* Categories selector buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-[#18181B] text-[#FAF8F5] border border-[#D4AF37]'
                  : 'bg-white text-slate-700 hover:border-[#D4AF37]/40 border border-slate-200'
              }`}
            >
              {language === 'ar' ? c.labelAr : c.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Top Compliant AdSense Banner */}
      <AdSenseBanner type="leaderboard" language={language} />

      {/* Featured Lead Article */}
      {selectedCategory === 'all' && featured && (
        <div
          onClick={() => setSelectedArticle(featured)}
          className="mb-12 bg-white rounded-3xl border border-[#D4AF37]/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 group"
        >
          <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#FAF8F5]">
            <img
              src={featured.featuredImage}
              alt={language === 'ar' ? featured.titleAr : featured.titleEn}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#8C7A5B] font-medium tracking-wider uppercase">
                <span className="text-[#B8902A] font-bold">
                  {language === 'ar' ? 'المقال الاسترشادي الرئيسي' : 'Featured Treatise'}
                </span>
                <span>·</span>
                <span>{language === 'ar' ? featured.readTimeAr : featured.readTimeEn}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] group-hover:text-[#B8902A] transition-colors font-serif-luxury leading-snug">
                {language === 'ar' ? featured.titleAr : featured.titleEn}
              </h3>

              <p className="text-xs sm:text-sm text-[#18181B]/70 leading-relaxed font-light">
                {language === 'ar' ? featured.summaryAr : featured.summaryEn}
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={featured.author.avatar}
                  alt={language === 'ar' ? featured.author.nameAr : featured.author.nameEn}
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-full object-cover border border-[#D4AF37]"
                />
                <div>
                  <span className="text-xs font-bold text-[#18181B] block">
                    {language === 'ar' ? featured.author.nameAr : featured.author.nameEn}
                  </span>
                  <span className="text-[10px] text-[#8C7A5B] block">GIA Graduate Gemologist</span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8902A] group-hover:underline">
                <span>{t.readFullArticle}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Articles + Sidebar Ad Unit */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Articles List (col 8) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white rounded-2xl border border-[#D4AF37]/25 hover:border-[#D4AF37] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
                <img
                  src={article.featuredImage}
                  alt={language === 'ar' ? article.titleAr : article.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#8C7A5B]">
                    <span>{language === 'ar' ? article.categoryAr : article.categoryEn}</span>
                    <span>·</span>
                    <span>{language === 'ar' ? article.readTimeAr : article.readTimeEn}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#18181B] group-hover:text-[#B8902A] transition-colors font-serif-luxury leading-snug line-clamp-2">
                    {language === 'ar' ? article.titleAr : article.titleEn}
                  </h4>

                  <p className="text-xs text-[#18181B]/70 line-clamp-3 leading-relaxed font-light">
                    {language === 'ar' ? article.summaryAr : article.summaryEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs">
                  <span className="text-[#8C7A5B] font-medium">
                    {language === 'ar' ? article.author.nameAr : article.author.nameEn}
                  </span>
                  <span className="font-semibold text-[#B8902A] flex items-center gap-1">
                    <span>{language === 'ar' ? 'قراءة' : 'Read'}</span>
                    <ArrowIcon className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Column (col 4): AdSense unit + Gemological certification accreditation note */}
        <div className="lg:col-span-4 space-y-6">
          {/* AdSense Skyscraper Widget */}
          <AdSenseBanner type="sidebar" language={language} />

          {/* EEAT Trustworthiness Box */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#D4AF37]/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#18181B] font-serif-luxury">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>
                {language === 'ar' ? 'معايير المحتوى البشري الموثوق (EEAT)' : 'Human-Authored EEAT Standard'}
              </span>
            </div>
            <p className="text-xs text-[#18181B]/70 leading-relaxed">
              {language === 'ar'
                ? 'كافة المقالات والأدلة التحريرية في مجلة النخبة الملكية كُتبت بواسطة خبراء معتمدين وحاصلين على زمالة معهد الأحجار الكريمة الأمريكي (GIA) وجمعية سوق لندن للسبائك (LBMA)، بما يضمن دقة بنسبة 100% وخلوها من المحتوى الآلي غير المحقق.'
                : 'All editorial articles and treatises are penned exclusively by GIA Graduate Gemologists and metallurgical engineers, strictly adhering to Google AdSense unique value principles.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
