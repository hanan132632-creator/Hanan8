import React from 'react';
import { Award, ShieldCheck, Gem, Truck, ArrowLeft, ArrowRight, Sparkles, Home } from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { HERO_IMAGE } from '../data/products.ts';

interface HeroProps {
  language: Language;
  onExplore: () => void;
  onBookVip: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onExplore, onBookVip }) => {
  const t = TRANSLATIONS[language];
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-[#18181B] text-[#FAF8F5] border-b border-[#D4AF37]/30">
      {/* Background imagery with measured luxury scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Royal Elite High Jewelry Collection"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18181B]/90 via-[#18181B]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl space-y-6">
          {/* Explicit Home Page Identifier and Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/60 text-[#D4AF37] text-xs font-bold font-serif-luxury shadow-xs">
              <Home className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'الرئيسية (الصفحة الرئيسية)' : 'Home (Main Page)'}</span>
            </span>
            <span className="text-[#FAF8F5]/30">·</span>
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FAF8F5]/80 tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.heroBadge}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] font-serif-luxury [text-wrap:balance]">
            {t.heroTitle}
          </h1>

          <p className="text-base sm:text-lg text-[#FAF8F5]/85 leading-relaxed max-w-2xl font-light">
            {t.heroDescription}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onExplore}
              className="px-6 py-3.5 text-sm font-semibold text-[#18181B] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8902A] hover:opacity-95 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>{t.heroCtaExplore}</span>
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onBookVip}
              className="px-6 py-3.5 text-sm font-medium text-white hover:text-[#D4AF37] bg-white/5 hover:bg-white/10 border border-[#D4AF37]/40 rounded-xl transition-all cursor-pointer backdrop-blur-sm"
            >
              {t.heroCtaVip}
            </button>
          </div>
        </div>

        {/* 4 Certified Guarantee & Trust Badges */}
        <div className="mt-16 pt-8 border-t border-[#D4AF37]/20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-semibold text-white font-serif-luxury">
                {t.heroGuarantee1}
              </h2>
              <span className="text-[11px] text-white/60">GIA Report & Laser Inscription</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-semibold text-white font-serif-luxury">
                {t.heroGuarantee2}
              </h2>
              <span className="text-[11px] text-white/60">Hallmark 925 & Rhodium Plated</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-semibold text-white font-serif-luxury">
                {t.heroGuarantee3}
              </h2>
              <span className="text-[11px] text-white/60">Au 750 / Au 875 / LBMA 999.9</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-semibold text-white font-serif-luxury">
                {t.heroGuarantee4}
              </h2>
              <span className="text-[11px] text-white/60">Armored Transit & Full Insurance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
