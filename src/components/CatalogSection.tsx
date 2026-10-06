import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, RotateCcw, Gem, Sparkles } from 'lucide-react';
import { Product, Language, ProductCategory, MetalType, GemstoneType } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { ProductCard } from './ProductCard.tsx';

interface CatalogSectionProps {
  products: Product[];
  language: Language;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  initialCategory?: ProductCategory | 'all';
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  language,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  initialCategory = 'all',
}) => {
  const t = TRANSLATIONS[language];

  // Filter States
  const [categoryFilter, setCategoryFilter] = useState<ProductCategory | 'all'>(initialCategory);
  const [metalFilter, setMetalFilter] = useState<MetalType | 'all'>('all');
  const [gemstoneFilter, setGemstoneFilter] = useState<GemstoneType | 'all'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price_asc' | 'price_desc' | 'weight'>('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState<boolean>(false);

  const resetFilters = () => {
    setCategoryFilter('all');
    setMetalFilter('all');
    setGemstoneFilter('all');
    setSortBy('featured');
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
        if (metalFilter !== 'all' && item.metal !== metalFilter) return false;
        if (gemstoneFilter !== 'all' && item.gemstone !== gemstoneFilter) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price_asc') return a.priceSAR - b.priceSAR;
        if (sortBy === 'price_desc') return b.priceSAR - a.priceSAR;
        if (sortBy === 'weight') return b.weightGrams - a.weightGrams;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, categoryFilter, metalFilter, gemstoneFilter, sortBy]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Catalog Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-[#D4AF37]/20 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#B8902A] tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>{language === 'ar' ? 'الكتالوج الذكي المعتمد' : 'The Grand Haute Joaillerie Catalog'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#18181B] font-serif-luxury">
            {language === 'ar' ? 'مجموعة روائع النخبة الملكية' : 'Curated Royal Masterpieces'}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-[#8C7A5B] font-mono tabular-nums">
            {filteredProducts.length} {t.productCount}
          </span>
          <button
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
            className="md:hidden px-3 py-1.5 rounded-lg border border-[#D4AF37]/30 text-xs font-medium flex items-center gap-1.5 bg-white"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.filterTitle}</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div
        className={`bg-white rounded-2xl border border-[#D4AF37]/25 p-4 sm:p-5 mb-8 shadow-sm ${
          showFiltersMobile ? 'block' : 'hidden md:block'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          {/* Metal Filter */}
          <div>
            <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
              {t.filterMetal}
            </label>
            <select
              value={metalFilter}
              onChange={(e) => setMetalFilter(e.target.value as any)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
            >
              <option value="all">{t.allMetals}</option>
              <option value="gold_18k">{language === 'ar' ? 'ذهب أصفر 18k' : '18k Yellow Gold'}</option>
              <option value="white_gold_18k">{language === 'ar' ? 'ذهب أبيض 18k' : '18k White Gold'}</option>
              <option value="gold_21k">{language === 'ar' ? 'ذهب أصفر 21k' : '21k Solid Gold'}</option>
              <option value="gold_24k">{language === 'ar' ? 'ذهب خالص 24k (999.9)' : '24k Pure Gold (999.9)'}</option>
              <option value="silver_925">{language === 'ar' ? 'فضة بريطانية 925' : 'British 925 Silver'}</option>
              <option value="platinum_950">{language === 'ar' ? 'بلاتين 950 نقي' : 'Platinum 950'}</option>
            </select>
          </div>

          {/* Gemstone Filter */}
          <div>
            <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
              {t.filterGemstone}
            </label>
            <select
              value={gemstoneFilter}
              onChange={(e) => setGemstoneFilter(e.target.value as any)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
            >
              <option value="all">{t.allGemstones}</option>
              <option value="diamond">{language === 'ar' ? 'ألماس طبيعي معتمد GIA' : 'GIA Natural Diamond'}</option>
              <option value="emerald">{language === 'ar' ? 'زمرد كولومبي ملكي' : 'Royal Colombian Emerald'}</option>
              <option value="sapphire">{language === 'ar' ? 'ياقوت أزرق سيلاني' : 'Ceylon Royal Sapphire'}</option>
              <option value="pearl">{language === 'ar' ? 'لؤلؤ بحر الجنوب الطبيعي' : 'South Sea Natural Pearl'}</option>
              <option value="pure_gold">{language === 'ar' ? 'ذهب وسبائك خالصة' : 'Pure Sovereign Gold'}</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
              {t.sortBy}
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
            >
              <option value="featured">{t.sortFeatured}</option>
              <option value="price_asc">{t.sortPriceAsc}</option>
              <option value="price_desc">{t.sortPriceDesc}</option>
              <option value="weight">{t.sortWeight}</option>
            </select>
          </div>

          {/* Reset button */}
          <div>
            <button
              onClick={resetFilters}
              className="w-full py-2 px-3 text-xs font-medium text-slate-600 hover:text-[#18181B] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.clearFilters}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              language={language}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#D4AF37]/20 p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto">
            <Gem className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#18181B] font-serif-luxury">
            {t.noProductsFound}
          </h3>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-[#18181B] text-[#FAF8F5] text-xs font-semibold rounded-lg"
          >
            {t.clearFilters}
          </button>
        </div>
      )}
    </section>
  );
};
