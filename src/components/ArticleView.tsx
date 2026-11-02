import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  Check,
  Bookmark,
  BookOpen,
  ShieldCheck,
  FileText,
  CheckCircle,
  Award,
  ExternalLink,
} from 'lucide-react';
import { Article, Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { AuthorProfileModal } from './AuthorProfileModal.tsx';
import { getDocumentedSourcesForArticle } from '../data/authorDossiers.ts';

interface ArticleViewProps {
  article: Article;
  language: Language;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  allArticles?: Article[];
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  language,
  onBack,
  onSelectArticle,
  allArticles = [],
}) => {
  const articleId = article?.id || '';
  const [copied, setCopied] = useState(false);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  // Automatically scroll to top whenever article changes
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } catch {
      // fallback
    }
  }, [articleId]);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4 bg-white rounded-3xl border border-[#D4AF37]/30 shadow-md">
        <h2 className="text-xl font-bold text-[#18181B] font-serif-luxury">
          {language === 'ar' ? 'تصفح مقالات مجلة المجوهرات الملكية' : 'Explore High Jewelry Journal'}
        </h2>
        <p className="text-xs text-[#8C7A5B]">
          {language === 'ar' ? 'انقر على أي مقال لقراءة تفاصيله الشاملة والأبحاث الجيولوجية الموثقة' : 'Click any article to read comprehensive gemological research'}
        </p>
        <button
          onClick={onBack}
          className="px-6 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#B8902A] text-[#18181B] font-bold text-xs shadow-md transition-colors cursor-pointer"
        >
          {language === 'ar' ? 'العودة لكافة المقالات' : 'Back to Articles'}
        </button>
      </div>
    );
  }

  const author = {
    nameAr: article.author?.nameAr || 'خبير المجوهرات الملكية',
    nameEn: article.author?.nameEn || 'Royal Jewelry Expert',
    titleAr: article.author?.titleAr || 'مستشار الأحجار الكريمة والصياغة',
    titleEn: article.author?.titleEn || 'Gemological & Sovereign Consultant',
    credentialsAr: article.author?.credentialsAr || 'خريج معهد الأحجار الكريمة الأمريكي GIA',
    credentialsEn: article.author?.credentialsEn || 'GIA Graduate Gemologist',
    avatar: article.author?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  };

  const sections = Array.isArray(article.sections) ? article.sections : [];
  const t = TRANSLATIONS[language];
  const ArrowIcon = language === 'ar' ? ArrowRight : ArrowLeft;
  const PrevArrow = language === 'ar' ? ArrowRight : ArrowLeft;
  const NextArrow = language === 'ar' ? ArrowLeft : ArrowRight;

  const documentedSources = getDocumentedSourcesForArticle(article.id, article.categoryAr || '');

  const handleCopyLink = () => {
    try {
      const cleanUrl = `${window.location.origin}/?tab=journal&article=${article.id}`;
      navigator.clipboard.writeText(cleanUrl);
    } catch {
      // fallback
      navigator.clipboard.writeText(window.location.href);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const safeAllArticles = Array.isArray(allArticles) ? allArticles : [];
  const currentIndex = safeAllArticles.findIndex((a) => a?.id === article.id);
  const prevArticle = currentIndex > 0 ? safeAllArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex >= 0 && currentIndex < safeAllArticles.length - 1 ? safeAllArticles[currentIndex + 1] : null;

  const related = safeAllArticles.filter((a) => a?.id !== article.id).slice(0, 2);

  const navigateTo = (target: Article) => {
    onSelectArticle(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const rawToc = language === 'ar' ? article.tableOfContentsAr : article.tableOfContentsEn;
  const tableOfContents = Array.isArray(rawToc) ? rawToc : [];

  return (
    <article className="bg-white rounded-3xl shadow-xl border border-[#D4AF37]/35 p-5 sm:p-8">
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
          {safeAllArticles.length > 0 && currentIndex >= 0 && (
            <span className="text-[#8C7A5B] font-mono text-[11px] px-2 py-1 rounded bg-[#FAF8F5] border border-slate-200">
              {language === 'ar'
                ? `المقال ${currentIndex + 1} من ${safeAllArticles.length}`
                : `Article ${currentIndex + 1} of ${safeAllArticles.length}`}
            </span>
          )}

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

      {/* Article Header */}
      <header className="space-y-4 border-b border-[#D4AF37]/20 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#B8902A] tracking-wider uppercase flex-wrap">
          <span>{language === 'ar' ? (article.categoryAr || 'مجلة المجوهرات') : (article.categoryEn || 'Gemological Journal')}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-slate-500 font-normal">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.publishDate || '2026-10-01'}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-slate-500 font-normal">
            <Clock className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? (article.readTimeAr || '8 دقائق قراءة') : (article.readTimeEn || '8 min read')}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            <span>{language === 'ar' ? 'بحث بشري موثق 100%' : '100% Human Authored'}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-[#18181B] font-serif-luxury leading-tight [text-wrap:balance]">
          {language === 'ar' ? (article.titleAr || '') : (article.titleEn || '')}
        </h1>

        <p className="text-sm sm:text-base text-[#18181B]/75 leading-relaxed font-light">
          {language === 'ar' ? (article.summaryAr || '') : (article.summaryEn || '')}
        </p>

        {/* EEAT Author Card */}
        <div className="pt-4 flex items-center justify-between flex-wrap gap-4 bg-[#FAF8F5] p-4 rounded-2xl border border-[#D4AF37]/25">
          <div
            onClick={() => setIsAuthorModalOpen(true)}
            className="flex items-center gap-3 cursor-pointer group"
            title={language === 'ar' ? 'انقر لعرض السجل التعريفي والشهادات المعتمدة للكاتب' : 'Click to view verified author credentials'}
          >
            <div className="relative">
              <img
                src={author.avatar}
                alt={language === 'ar' ? author.nameAr : author.nameEn}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37] group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-[#18181B] text-[#D4AF37]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#18181B] font-serif-luxury group-hover:text-[#B8902A] transition-colors">
                  {language === 'ar' ? author.nameAr : author.nameEn}
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#D4AF37]/15 text-[#B8902A] font-semibold">
                  {language === 'ar' ? 'كاتب معتمد GIA' : 'GIA Verified'}
                </span>
              </div>
              <span className="text-xs text-[#8C7A5B] block">
                {language === 'ar' ? author.titleAr : author.titleEn}
              </span>
              <span className="text-[11px] text-[#18181B]/60 block mt-0.5">
                {language === 'ar' ? author.credentialsAr : author.credentialsEn}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setIsAuthorModalOpen(true)}
              className="px-3 py-2 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-[#FAF8F5] border border-[#D4AF37]/40 text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{language === 'ar' ? 'شهادات وبيانات الكاتب' : 'Author Credentials'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-white border border-[#D4AF37]/30 text-slate-700 hover:text-[#18181B] text-xs flex items-center gap-1.5 shadow-xs cursor-pointer"
              title="Copy article link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-slate-600" />}
              <span>{copied ? (language === 'ar' ? 'تم النسخ' : 'Copied') : t.shareArticle}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Featured Header Photo */}
      {article.featuredImage && (
        <div className="my-8 rounded-3xl overflow-hidden shadow-xl border border-[#D4AF37]/20 aspect-[16/9] bg-[#FAF8F5]">
          <img
            src={article.featuredImage}
            alt={language === 'ar' ? article.titleAr : article.titleEn}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Table of Contents */}
      {tableOfContents.length > 0 && (
        <div className="my-8 bg-[#FAF8F5] border border-[#D4AF37]/30 rounded-2xl p-6">
          <div className="flex items-center gap-2 text-sm font-bold text-[#18181B] font-serif-luxury mb-3">
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.tableOfContents}</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-[#18181B]/80 list-disc list-inside">
            {tableOfContents.map((item, index) => (
              <li key={index} className="hover:text-[#B8902A] transition-colors leading-relaxed">
                {String(item)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article Body Sections */}
      <div className="space-y-6 text-sm sm:text-base text-[#18181B]/90 leading-relaxed font-light">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-2.5">
            <h2 className="text-lg sm:text-2xl font-bold text-[#18181B] font-serif-luxury pt-2 border-t border-[#D4AF37]/15">
              {language === 'ar' ? String(section.headingAr || '') : String(section.headingEn || '')}
            </h2>
            <div className="text-justify whitespace-pre-line leading-relaxed text-[#18181B]/80">
              {language === 'ar' ? String(section.contentAr || '') : String(section.contentEn || '')}
            </div>
          </div>
        ))}
      </div>

      {/* Documented Academic & Laboratory Sources Section */}
      <div className="my-6 p-5 sm:p-6 bg-gradient-to-br from-[#FAF8F5] via-white to-amber-50/20 border-2 border-[#D4AF37]/35 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D4AF37]/20 pb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="text-sm sm:text-base font-bold text-[#18181B] font-serif-luxury">
              {language === 'ar' ? 'المراجع والأبحاث المخبرية المعتمدة بأرقام التوثيق' : 'Verified Laboratory & Academic Research (Documented Citations)'}
            </h3>
          </div>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200 inline-flex items-center gap-1 self-start sm:self-auto">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'ar' ? 'أبحاث مدققة وموثقة 100%' : '100% Peer-Verified'}</span>
          </span>
        </div>

        <div className="space-y-3">
          {documentedSources.map((source, sIdx) => (
            <div key={sIdx} className="p-3.5 rounded-xl bg-white border border-[#D4AF37]/25 space-y-1.5 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                <span className="font-bold text-[#18181B] font-serif-luxury">
                  {language === 'ar' ? source.titleAr : source.titleEn}
                </span>
                <span className="font-mono text-[11px] text-[#B8902A] px-2 py-0.5 rounded bg-[#D4AF37]/10 font-bold border border-[#D4AF37]/30">
                  {source.documentNo}
                </span>
              </div>
              <p className="text-[11px] text-[#18181B]/75 leading-relaxed font-light">
                {language === 'ar' ? source.scopeAr : source.scopeEn}
              </p>
              <div className="flex items-center justify-between text-[10px] text-[#8C7A5B] pt-1.5 border-t border-slate-100">
                <span>{language === 'ar' ? `جهة التوثيق: ${source.institutionAr}` : `Issuing Body: ${source.institutionEn}`}</span>
                <span className="font-mono">{language === 'ar' ? `سنة الإصدار: ${source.year}` : `Edition: ${source.year}`}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 100% Human-Authored & Non-Copied Editorial Charter */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-[#18181B] text-white p-4 rounded-xl border border-[#D4AF37]/40 shadow-sm">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <p className="text-[11px] text-white/90 leading-relaxed font-light">
              {language === 'ar'
                ? 'ميثاق النزاهة التحريرية: كُتب وأُعد هذا البحث بالكامل بيد خبير مجوهرات بشري معتمد، وخالٍ تماماً من التوليد الآلي غير المحقق أو النسخ، وموثق بالأرقام الجيولوجية والدمغات الرسمية.'
                : 'Integrity Charter: Authored exclusively by a credentialed human gemologist, fully original, and grounded in verifiable laboratory registry metrics.'}
            </p>
          </div>
          <button
            onClick={() => setIsAuthorModalOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#B8902A] text-[#18181B] font-bold text-xs shrink-0 transition-colors cursor-pointer"
          >
            {language === 'ar' ? 'عرض ملف الكاتب' : 'View Author Dossier'}
          </button>
        </div>
      </div>

      {/* Dedicated Next & Previous Article Navigation */}
      {safeAllArticles.length > 1 && (
        <nav aria-label="Article Pagination" className="my-6 pt-5 border-t border-[#D4AF37]/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="text-sm font-bold text-[#18181B] font-serif-luxury uppercase tracking-wider">
                {language === 'ar' ? 'التنقل بين المقالات (السابق والتالي)' : 'Article Navigation (Previous & Next)'}
              </h3>
            </div>
            {currentIndex >= 0 && (
              <span className="text-xs text-[#8C7A5B] font-mono">
                {language === 'ar'
                  ? `${currentIndex + 1} من ${safeAllArticles.length} مقالات`
                  : `${currentIndex + 1} of ${safeAllArticles.length} Articles`}
              </span>
            )}
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
                <span className="text-[11px] text-[#8C7A5B] mt-3 block">
                  {language === 'ar' ? prevArticle.readTimeAr : prevArticle.readTimeEn}
                </span>
              </div>
            ) : (
              <div className="p-5 rounded-2xl border border-dashed border-slate-200 bg-[#FAF8F5]/50 flex items-center justify-center text-xs text-slate-400">
                {language === 'ar' ? 'أنت في بداية قائمة المقالات' : 'Start of articles list'}
              </div>
            )}

            {/* المقال التالي */}
            {nextArticle ? (
              <div
                onClick={() => navigateTo(nextArticle)}
                className="p-5 rounded-2xl border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] bg-gradient-to-br from-amber-50/20 to-white hover:bg-white transition-all cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-md text-right rtl:text-right ltr:text-left"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8902A] transition-colors">
                      <span>{language === 'ar' ? 'المقال التالي' : 'Next Article'}</span>
                      <NextArrow className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#8C7A5B] font-mono font-bold">
                      {language === 'ar' ? nextArticle.categoryAr : nextArticle.categoryEn}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#18181B] font-serif-luxury group-hover:text-[#B8902A] line-clamp-2 transition-colors">
                    {language === 'ar' ? nextArticle.titleAr : nextArticle.titleEn}
                  </h4>
                </div>
                <span className="text-[11px] text-[#8C7A5B] mt-3 block">
                  {language === 'ar' ? nextArticle.readTimeAr : nextArticle.readTimeEn}
                </span>
              </div>
            ) : (
              <div className="p-5 rounded-2xl border border-dashed border-slate-200 bg-[#FAF8F5]/50 flex items-center justify-center text-xs text-slate-400">
                {language === 'ar' ? 'أنت في نهاية قائمة المقالات' : 'End of articles list'}
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Related Dissertations */}
      {related.length > 0 && (
        <div className="pt-5 border-t border-[#D4AF37]/20">
          <h3 className="text-sm font-bold text-[#18181B] font-serif-luxury uppercase tracking-wider mb-4">
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
                {item.featuredImage && (
                  <img
                    src={item.featuredImage}
                    alt={language === 'ar' ? item.titleAr : item.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 object-cover rounded-lg shrink-0"
                  />
                )}
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
      )}

      {/* Verified Author Profile & Credentials Dossier Modal */}
      <AuthorProfileModal
        isOpen={isAuthorModalOpen}
        onClose={() => setIsAuthorModalOpen(false)}
        author={article.author}
        language={language}
        allArticles={safeAllArticles}
        onSelectArticle={(art) => {
          onSelectArticle(art);
          setIsAuthorModalOpen(false);
        }}
      />
    </article>
  );
};
