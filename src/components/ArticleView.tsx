import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Check, Bookmark, BookOpen, ShieldCheck } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const related = allArticles.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back button */}
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-[#8C7A5B] hover:text-[#18181B] transition-colors"
      >
        <ArrowIcon className="w-4 h-4" />
        <span>{t.backToArticles}</span>
      </button>

      {/* Top Compliant AdSense Banner (Leaderboard) */}
      <AdSenseBanner type="leaderboard" language={language} />

      {/* Article Header */}
      <header className="space-y-4 border-b border-[#D4AF37]/20 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#B8902A] tracking-wider uppercase">
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

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-white border border-[#D4AF37]/30 text-slate-700 hover:text-[#18181B] text-xs flex items-center gap-1.5 shadow-sm"
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

      {/* Bottom AdSense Banner Slot */}
      <AdSenseBanner type="leaderboard" language={language} />

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
