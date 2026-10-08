import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Check, Bookmark, BookOpen, ShieldCheck, Eye, Heart } from 'lucide-react';
import { Article, Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { AdSenseBanner } from './AdSenseBanner.tsx';

interface ArticleViewProps {
  article: Article;
  language: Language;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  allArticles: Article[];
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  language,
  onBack,
  onSelectArticle,
  allArticles,
}) => {
  const t = TRANSLATIONS[language];
  const ArrowIcon = language === 'ar' ? ArrowRight : ArrowLeft;
  const PrevArrow = language === 'ar' ? ArrowRight : ArrowLeft;
  const NextArrow = language === 'ar' ? ArrowLeft : ArrowRight;
  const [copied, setCopied] = useState(false);
  const storageKey = `boutique_liked_article_${article.id}`;
  const [isLiked, setIsLiked] = useState<boolean>(() => {
    try {
      return localStorage.getItem(storageKey) === 'true';
    } catch {
      return false;
    }
  });
  const [currentLikes, setCurrentLikes] = useState<number>(() => {
    const base = article.likesCount ?? 142;
    try {
      return localStorage.getItem(storageKey) === 'true' ? base + 1 : base;
    } catch {
      return base;
    }
  });

  useEffect(() => {
    const key = `boutique_liked_article_${article.id}`;
    let liked = false;
    try {
      liked = localStorage.getItem(key) === 'true';
    } catch {
      liked = false;
    }
    setIsLiked(liked);
    const base = article.likesCount ?? 142;
    setCurrentLikes(liked ? base + 1 : base);
  }, [article.id, article.likesCount]);

  const handleToggleLike = () => {
    const key = `boutique_liked_article_${article.id}`;
    if (isLiked) {
      setIsLiked(false);
      setCurrentLikes((prev) => Math.max(0, prev - 1));
      try {
        localStorage.removeItem(key);
      } catch {
        // ignore
      }
    } else {
      setIsLiked(true);
      setCurrentLikes((prev) => prev + 1);
      try {
        localStorage.setItem(key, 'true');
      } catch {
        // ignore
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentIndex = allArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex >= 0 && currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const related = allArticles.filter((a) => a.id !== article.id).slice(0, 2);

  const navigateTo = (target: Article) => {
    onSelectArticle(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Header Navigation Bar with Back and Next/Prev quick controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#D4AF37]/20 pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C7A5B] hover:text-[#18181B] transition-colors cursor-pointer"
        >
          <ArrowIcon className="w-4 h-4" />
          <span>{t.backToArticles}</span>
        </button>

        {/* Quick Prev / Next Article Bar at top */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#8C7A5B] font-mono text-[11px] px-2 py-1 rounded bg-[#FAF8F5] border border-slate-200">
            {language === 'ar'
              ? `المقال ${currentIndex + 1} من ${allArticles.length}`
              : `Article ${currentIndex + 1} of ${allArticles.length}`}
          </span>

          {prevArticle ? (
            <button
              onClick={() => navigateTo(prevArticle)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#FAF8F5] text-[#18181B] text-[11px] font-medium transition-colors shadow-xs cursor-pointer"
              title={language === 'ar' ? prevArticle.titleAr : prevArticle.titleEn}
            >
              <PrevArrow className="w-3.5 h-3.5 text-[#B8902A]" />
              <span>{language === 'ar' ? 'المقال السابق' : 'Prev'}</span>
            </button>
          ) : (
            <span className="px-2 py-1 text-[11px] text-slate-400 cursor-not-allowed">
              {language === 'ar' ? 'أول مقال' : 'First'}
            </span>
          )}

          {nextArticle ? (
            <button
              onClick={() => navigateTo(nextArticle)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-white border border-[#D4AF37]/40 text-[11px] font-medium transition-colors shadow-xs cursor-pointer"
              title={language === 'ar' ? nextArticle.titleAr : nextArticle.titleEn}
            >
              <span>{language === 'ar' ? 'المقال التالي' : 'Next'}</span>
              <NextArrow className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          ) : (
            <span className="px-2 py-1 text-[11px] text-slate-400 cursor-not-allowed">
              {language === 'ar' ? 'آخر مقال' : 'Last'}
            </span>
          )}
        </div>
      </div>

      {/* Top Compliant AdSense Banner (Leaderboard) */}
      <AdSenseBanner type="leaderboard" language={language} />

      {/* Article Header */}
      <header className="space-y-4 border-b border-[#D4AF37]/20 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#B8902A] tracking-wider uppercase flex-wrap">
          <span>{language === 'ar' ? article.categoryAr : article.categoryEn}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-slate-500 font-normal">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.publishDate}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-slate-500 font-normal">
            <Clock className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? article.readTimeAr : article.readTimeEn}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-slate-600 font-medium">
            <Eye className="w-3.5 h-3.5 text-[#B8902A]" />
            <span>{article.viewsCount?.toLocaleString() ?? '2,340'}</span>
            <span>{t.viewsLabel}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-rose-600 font-medium">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>{currentLikes.toLocaleString()}</span>
            <span>{t.likesLabel}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-[#18181B] font-serif-luxury leading-tight [text-wrap:balance]">
          {language === 'ar' ? article.titleAr : article.titleEn}
        </h1>

        <p className="text-sm sm:text-base text-[#18181B]/75 leading-relaxed font-light">
          {language === 'ar' ? article.summaryAr : article.summaryEn}
        </p>

        {/* EEAT Author Card */}
        <div className="pt-4 flex items-center justify-between flex-wrap gap-4 bg-[#FAF8F5] p-4 rounded-2xl border border-[#D4AF37]/25">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={language === 'ar' ? article.author.nameAr : article.author.nameEn}
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#18181B] font-serif-luxury">
                  {language === 'ar' ? article.author.nameAr : article.author.nameEn}
                </span>
                <span title="Verified EEAT Author">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                </span>
              </div>
              <span className="text-xs text-[#8C7A5B] block">
                {language === 'ar' ? article.author.titleAr : article.author.titleEn}
              </span>
              <span className="text-[11px] text-[#18181B]/60 block mt-0.5">
                {language === 'ar' ? article.author.credentialsAr : article.author.credentialsEn}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleToggleLike}
              className={`p-2 px-3 rounded-lg border text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer ${
                isLiked
                  ? 'bg-rose-50 border-rose-300 text-rose-700 font-bold shadow-xs'
                  : 'bg-white border-[#D4AF37]/30 text-slate-700 hover:text-rose-600 hover:border-rose-300'
              }`}
              title={language === 'ar' ? 'إبداء الإعجاب بهذا المقال' : 'Like this article'}
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-500'}`} />
              <span>{isLiked ? t.likedArticle : t.likeArticle}</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-700 font-bold">
                {currentLikes.toLocaleString()}
              </span>
            </button>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-white border border-[#D4AF37]/30 text-slate-700 hover:text-[#18181B] text-xs flex items-center gap-1.5 shadow-xs cursor-pointer"
              title="Copy article link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? (language === 'ar' ? 'تم النسخ' : 'Copied') : t.shareArticle}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Featured Header Photo */}
      <div className="my-8 rounded-3xl overflow-hidden shadow-xl border border-[#D4AF37]/20 aspect-[16/9] bg-[#FAF8F5]">
        <img
          src={article.featuredImage}
          alt={language === 'ar' ? article.titleAr : article.titleEn}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Table of Contents */}
      <div className="my-8 bg-[#FAF8F5] border border-[#D4AF37]/30 rounded-2xl p-6">
        <div className="flex items-center gap-2 text-sm font-bold text-[#18181B] font-serif-luxury mb-3">
          <BookOpen className="w-4 h-4 text-[#D4AF37]" />
          <span>{t.tableOfContents}</span>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-[#18181B]/80 list-disc list-inside">
          {(language === 'ar' ? article.tableOfContentsAr : article.tableOfContentsEn).map(
            (item, index) => (
              <li key={index} className="hover:text-[#B8902A] transition-colors leading-relaxed">
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Article Body Sections */}
      <div className="space-y-8 text-sm sm:text-base text-[#18181B]/90 leading-relaxed font-light">
        {article.sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-bold text-[#18181B] font-serif-luxury pt-2 border-t border-[#D4AF37]/15">
              {language === 'ar' ? section.headingAr : section.headingEn}
            </h2>
            <div className="text-justify whitespace-pre-line leading-relaxed text-[#18181B]/80">
              {language === 'ar' ? section.contentAr : section.contentEn}
            </div>

            {/* In-Article AdSense Banner inserted after section 2 */}
            {idx === 1 && <AdSenseBanner type="in_article" language={language} />}
          </div>
        ))}
      </div>

      {/* Reader Engagement & Feedback Box */}
      <div className="my-10 p-6 bg-gradient-to-r from-[#FAF8F5] via-white to-[#FAF8F5] border border-[#D4AF37]/35 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-right rtl:sm:text-right ltr:sm:text-left shadow-xs">
        <div className="space-y-1">
          <h4 className="text-base font-bold text-[#18181B] font-serif-luxury">
            {language === 'ar' ? 'هل كان هذا التحليل التخصصي مفيداً ومثرياً لك؟' : 'Was this specialized gemological analysis valuable to you?'}
          </h4>
          <p className="text-xs text-[#8C7A5B]">
            {language === 'ar'
              ? `سجل تقييمك لمساعدتنا على تقديم أثرى المحتويات — انضم إلى ${currentLikes.toLocaleString()} قارئاً أبدوا إعجابهم بهذا البحث.`
              : `Share your appraisal — join ${currentLikes.toLocaleString()} connoisseurs who endorsed this research.`}
          </p>
        </div>

        <button
          onClick={handleToggleLike}
          className={`px-5 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer shrink-0 ${
            isLiked
              ? 'bg-rose-50 border-rose-400 text-rose-700 shadow-rose-100 ring-2 ring-rose-200'
              : 'bg-white border-[#D4AF37] text-[#18181B] hover:border-rose-400 hover:text-rose-600'
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-600'}`} />
          <span>{isLiked ? (language === 'ar' ? 'شكراً لك! تم تسجيل إعجابك' : 'Thank you! Liked') : (language === 'ar' ? 'أعجبني هذا المقال' : 'Helpful Analysis')}</span>
          <span className="px-2 py-0.5 rounded-full text-xs bg-slate-100 text-[#18181B] font-bold">
            {currentLikes.toLocaleString()}
          </span>
        </button>
      </div>

      {/* Bottom AdSense Banner Slot */}
      <AdSenseBanner type="leaderboard" language={language} />

      {/* Dedicated Next & Previous Article Navigation (المقال السابق والمقال التالي) */}
      <nav aria-label="Article Pagination" className="my-10 pt-8 border-t-2 border-[#D4AF37]/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="text-sm font-bold text-[#18181B] font-serif-luxury uppercase tracking-wider">
              {language === 'ar' ? 'التنقل بين المقالات (السابق والتالي)' : 'Article Navigation (Previous & Next)'}
            </h3>
          </div>
          <span className="text-xs text-[#8C7A5B] font-mono">
            {language === 'ar'
              ? `${currentIndex + 1} من ${allArticles.length} مقالات`
              : `${currentIndex + 1} of ${allArticles.length} Articles`}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* المقال السابق */}
          {prevArticle ? (
            <div
              onClick={() => navigateTo(prevArticle)}
              className="p-5 rounded-2xl border-2 border-slate-200 hover:border-[#D4AF37] bg-white hover:bg-[#FAF8F5] transition-all cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-md text-right rtl:text-right ltr:text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C7A5B] group-hover:text-[#B8902A] transition-colors">
                    <PrevArrow className="w-4 h-4 text-[#D4AF37] group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" />
                    <span>{language === 'ar' ? 'المقال السابق' : 'Previous Article'}</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                    {language === 'ar' ? prevArticle.categoryAr : prevArticle.categoryEn}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#18181B] font-serif-luxury group-hover:text-[#B8902A] line-clamp-2 transition-colors">
                  {language === 'ar' ? prevArticle.titleAr : prevArticle.titleEn}
                </h4>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#18181B]/60">
                <span>{language === 'ar' ? prevArticle.readTimeAr : prevArticle.readTimeEn}</span>
                <span className="text-[#B8902A] font-semibold">{language === 'ar' ? 'انقر للقراءة ←' : 'Read Article →'}</span>
              </div>
            </div>
          ) : (
            <div className="p-5 rounded-2xl border border-dashed border-slate-200 bg-[#FAF8F5]/50 flex items-center justify-center text-center text-xs text-slate-400">
              <span>{language === 'ar' ? 'أنت تتصفح المقال التأسيسي الأول في المجلة' : 'You are viewing the premier article'}</span>
            </div>
          )}

          {/* المقال التالي */}
          {nextArticle ? (
            <div
              onClick={() => navigateTo(nextArticle)}
              className="p-5 rounded-2xl border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] bg-gradient-to-br from-[#FAF8F5] via-white to-amber-50/20 hover:bg-white transition-all cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-md text-right rtl:text-right ltr:text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#18181B] text-[#D4AF37] font-mono">
                    {language === 'ar' ? nextArticle.categoryAr : nextArticle.categoryEn}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#18181B] group-hover:text-[#B8902A] transition-colors">
                    <span>{language === 'ar' ? 'المقال التالي' : 'Next Article'}</span>
                    <NextArrow className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#18181B] font-serif-luxury group-hover:text-[#B8902A] line-clamp-2 transition-colors">
                  {language === 'ar' ? nextArticle.titleAr : nextArticle.titleEn}
                </h4>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#18181B]/60">
                <span>{language === 'ar' ? nextArticle.readTimeAr : nextArticle.readTimeEn}</span>
                <span className="text-[#B8902A] font-semibold">{language === 'ar' ? 'انقر للانتقال للمقال التالي ←' : 'Proceed to Next →'}</span>
              </div>
            </div>
          ) : (
            <div className="p-5 rounded-2xl border border-dashed border-slate-200 bg-[#FAF8F5]/50 flex items-center justify-center text-center text-xs text-slate-400">
              <span>{language === 'ar' ? 'وصلت إلى نهاية مقالات المجوهرات المنشورة' : 'You have reached the final published article'}</span>
            </div>
          )}
        </div>
      </nav>

      {/* Related Dissertations */}
      <div className="mt-12 pt-8 border-t border-[#D4AF37]/20">
        <h3 className="text-lg font-bold text-[#18181B] font-serif-luxury mb-4">
          {language === 'ar' ? 'مقالات وأبحاث مجوهرات ذات صلة' : 'Recommended Gemological Dissertations'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {related.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onSelectArticle(item);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl border border-[#D4AF37]/20 bg-white hover:border-[#D4AF37] transition-all cursor-pointer flex gap-3 shadow-sm hover:shadow-md"
            >
              <img
                src={item.featuredImage}
                alt={language === 'ar' ? item.titleAr : item.titleEn}
                referrerPolicy="no-referrer"
                className="w-16 h-16 object-cover rounded-lg shrink-0"
              />
              <div className="min-w-0">
                <span className="text-[10px] text-[#8C7A5B] block font-mono uppercase">
                  {language === 'ar' ? item.categoryAr : item.categoryEn}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold text-[#18181B] font-serif-luxury truncate mt-0.5">
                  {language === 'ar' ? item.titleAr : item.titleEn}
                </h4>
                <span className="text-[11px] text-[#18181B]/60 block mt-1">
                  {language === 'ar' ? item.readTimeAr : item.readTimeEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
