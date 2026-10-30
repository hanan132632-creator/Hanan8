import React, { useState } from 'react';
import { Ruler, Coins, Sparkles } from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { RingSizeCalculator } from './RingSizeCalculator.tsx';
import { GoldPriceCalculator } from './GoldPriceCalculator.tsx';
import { AdBanner } from './AdBanner.tsx';

interface ToolsSectionProps {
  language: Language;
  onNavigateToArticle?: (articleId: string) => void;
  onNavigateToCatalog?: () => void;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({
  language,
}) => {
  const t = TRANSLATIONS[language];
  const [activeTool, setActiveTool] = useState<'ring' | 'gold'>('ring');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B8902A] tracking-wider uppercase">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>{t.toolsSectionTitle}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#18181B] font-serif-luxury">
          {language === 'ar' ? 'أدوات القياس وحساب أسعار الذهب والدقة' : 'Precision Measurement & Precious Metals Calculators'}
        </h2>
        <p className="text-xs sm:text-sm text-[#18181B]/70 leading-relaxed font-light">
          {t.toolsSectionSubtitle}
        </p>

        {/* Segmented Control */}
        <div className="inline-flex p-1.5 bg-white rounded-2xl border border-[#D4AF37]/30 shadow-md mt-4 flex-wrap justify-center gap-1">
          <button
            onClick={() => setActiveTool('ring')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTool === 'ring'
                ? 'bg-[#18181B] text-[#D4AF37] shadow-md border border-[#D4AF37]/50'
                : 'text-[#18181B]/70 hover:text-[#18181B]'
            }`}
          >
            <Ruler className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.ringSizerTitle}</span>
          </button>

          <button
            onClick={() => setActiveTool('gold')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTool === 'gold'
                ? 'bg-[#18181B] text-[#D4AF37] shadow-md border border-[#D4AF37]/50'
                : 'text-[#18181B]/70 hover:text-[#18181B]'
            }`}
          >
            <Coins className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.goldCalcTitle}</span>
          </button>
        </div>
      </div>

      {activeTool === 'ring' ? (
        <RingSizeCalculator language={language} />
      ) : (
        <GoldPriceCalculator language={language} />
      )}

      {/* Contextual Tools Page Ad Banner */}
      <AdBanner
        slot="8877665544"
        type="display"
        className="mt-12"
      />
    </section>
  );
};

