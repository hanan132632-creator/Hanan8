import React from 'react';
import { ProductCategory, Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface CollectionsBarProps {
  language: Language;
  selectedCategory: ProductCategory | 'all';
  onSelectCategory: (cat: ProductCategory | 'all') => void;
}

export const CollectionsBar: React.FC<CollectionsBarProps> = ({
  language,
  selectedCategory,
  onSelectCategory,
}) => {
  const t = TRANSLATIONS[language];

  const categories: { id: ProductCategory | 'all'; label: string }[] = [
    { id: 'all', label: t.catAll },
    { id: 'bridal', label: t.catBridal },
    { id: 'solitaire', label: t.catSolitaire },
    { id: 'bracelets', label: t.catBracelets },
    { id: 'necklaces', label: t.catNecklaces },
    { id: 'investment', label: t.catInvestment },
    { id: 'daily', label: t.catDaily },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] border-b border-[#D4AF37]/20 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h2 className="text-sm font-semibold tracking-wide text-[#18181B] font-serif-luxury">
            {t.collectionsTitle}
          </h2>
          <span className="text-xs text-[#8C7A5B]">
            {language === 'ar' ? 'تشكيلات معتمدة ومختارة' : 'Curated Sovereign Suites'}
          </span>
        </div>

        {/* Horizontal scrollable category pill/tab selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#18181B] text-[#FAF8F5] shadow-sm border border-[#D4AF37]/40'
                    : 'bg-white/80 text-[#18181B]/75 hover:text-[#18181B] hover:bg-white border border-[#D4AF37]/15'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
