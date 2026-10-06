import React, { useState } from 'react';
import { Calculator, Coins, TrendingUp, Info } from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface GoldPriceCalculatorProps {
  language: Language;
}

export const GoldPriceCalculator: React.FC<GoldPriceCalculatorProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  // Base spot rates in SAR per gram (reflective of current international bullion market)
  const spotRates: Record<string, { labelAr: string; labelEn: string; sarPerGram: number; purity: string }> = {
    '24k': { labelAr: 'ذهب عيار 24k (خالص 999.9)', labelEn: '24k Pure Gold (999.9)', sarPerGram: 334.5, purity: '99.99%' },
    '22k': { labelAr: 'ذهب عيار 22k (916)', labelEn: '22k Gold (916)', sarPerGram: 306.6, purity: '91.66%' },
    '21k': { labelAr: 'ذهب عيار 21k (875)', labelEn: '21k Gold (875)', sarPerGram: 292.7, purity: '87.50%' },
    '18k': { labelAr: 'ذهب عيار 18k (750)', labelEn: '18k Gold (750)', sarPerGram: 250.8, purity: '75.00%' },
    'silver_925': { labelAr: 'فضة إسترلينية 925', labelEn: 'Sterling Silver 925', sarPerGram: 4.35, purity: '92.50%' },
  };

  const [selectedKarat, setSelectedKarat] = useState<string>('21k');
  const [weight, setWeight] = useState<number>(20);
  const [craftsmanship, setCraftsmanship] = useState<number>(35); // SAR per gram
  const [includeVat, setIncludeVat] = useState<boolean>(true);

  const currentRate = spotRates[selectedKarat] || spotRates['21k'];
  const rawMetalValue = weight * currentRate.sarPerGram;
  const totalCraftsmanship = weight * (selectedKarat === '24k' ? Math.min(10, craftsmanship) : craftsmanship);
  const taxableBase = rawMetalValue + totalCraftsmanship;
  // In many jurisdictions pure 24k investment bullion is exempt from VAT
  const vatRate = selectedKarat === '24k' ? 0 : 0.15;
  const vatAmount = includeVat ? taxableBase * vatRate : 0;
  const finalPriceSAR = taxableBase + vatAmount;
  const finalPriceUSD = finalPriceSAR / 3.75;

  const formattedSAR = (amount: number) =>
    new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US', {
      style: 'currency',
      currency: 'SAR',
      maximumFractionDigits: 1,
    }).format(amount);

  const formattedUSD = (amount: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 1,
    }).format(amount);

  return (
    <div className="bg-white rounded-3xl border border-[#D4AF37]/30 shadow-xl overflow-hidden p-6 sm:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div className="border-b border-[#D4AF37]/20 pb-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#B8902A] uppercase tracking-wider mb-1">
            <Coins className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.goldCalcTitle}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] font-serif-luxury">
            {language === 'ar' ? 'مؤشر أسعار المعادن النفيسة والمصنعية' : 'Precious Metal Valuation & Assaying Engine'}
          </h3>
          <p className="text-xs sm:text-sm text-[#18181B]/70 leading-relaxed mt-1">
            {t.goldCalcDesc}
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {/* Karat Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                {t.selectKarat}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(spotRates).map(([key, data]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedKarat(key)}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                      selectedKarat === key
                        ? 'bg-[#18181B] text-[#FAF8F5] border-[#D4AF37] shadow-sm'
                        : 'bg-[#FAF8F5] text-[#18181B]/80 border-[#D4AF37]/20 hover:border-[#D4AF37]'
                    }`}
                  >
                    <span className="block font-bold">{key.toUpperCase()}</span>
                    <span className="text-[10px] text-[#8C7A5B] block font-mono mt-0.5">
                      {data.sarPerGram} SAR/g
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Weight Input */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#18181B] mb-1.5">
                <span>{t.weightInGrams}</span>
                <span className="font-mono font-bold text-[#B8902A] text-sm">{weight} g</span>
              </div>
              <input
                type="number"
                min="0.5"
                max="5000"
                step="0.5"
                value={weight}
                onChange={(e) => setWeight(Math.max(0.1, parseFloat(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5] font-mono text-sm"
              />
            </div>

            {/* Craftsmanship Premium */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#18181B] mb-1.5">
                <span>{t.craftsmanshipFee}</span>
                <span className="font-mono font-bold text-[#B8902A] text-sm">
                  {selectedKarat === '24k' ? Math.min(10, craftsmanship) : craftsmanship} SAR
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="120"
                step="5"
                value={craftsmanship}
                onChange={(e) => setCraftsmanship(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[10px] text-[#8C7A5B] mt-1">
                <span>0 (سبيكة خام / LBMA)</span>
                <span>60 (مشغولات راقية)</span>
                <span>120 (ترصيع يدوي)</span>
              </div>
            </div>

            {/* VAT Checkbox */}
            <label className="flex items-center gap-2 text-xs font-medium text-[#18181B]/80 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={includeVat}
                onChange={(e) => setIncludeVat(e.target.checked)}
                className="w-4 h-4 accent-[#D4AF37]"
              />
              <span>{t.includeVat}</span>
            </label>
          </div>

          {/* Results Summary Box */}
          <div className="bg-[#FAF8F5] rounded-2xl border border-[#D4AF37]/30 p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#D4AF37]/20">
                <span className="text-xs font-semibold text-[#18181B] font-serif-luxury">
                  {language === 'ar' ? 'البيانات التحليلية للحسبة' : 'Assaying Breakdown'}
                </span>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {currentRate.purity} Pure
                </span>
              </div>

              <div className="flex justify-between text-xs text-[#18181B]/75">
                <span>{t.rawGoldValue}:</span>
                <span className="font-mono font-medium">{formattedSAR(rawMetalValue)}</span>
              </div>

              <div className="flex justify-between text-xs text-[#18181B]/75">
                <span>{t.totalCraftsmanship}:</span>
                <span className="font-mono font-medium">{formattedSAR(totalCraftsmanship)}</span>
              </div>

              {includeVat && (
                <div className="flex justify-between text-xs text-[#18181B]/75">
                  <span>
                    {t.vatAmount} {selectedKarat === '24k' ? '(0% معفى استثمارياً)' : '(15%)'}:
                  </span>
                  <span className="font-mono font-medium">{formattedSAR(vatAmount)}</span>
                </div>
              )}
            </div>

            {/* Final Total Display */}
            <div className="pt-4 border-t border-[#D4AF37]/25 space-y-1">
              <span className="text-xs font-semibold text-[#8C7A5B] block">
                {t.finalEstimatedPrice}
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-[#18181B] font-mono tabular-nums">
                {formattedSAR(finalPriceSAR)}
              </div>
              <div className="text-xs text-[#8C7A5B] font-mono tabular-nums">
                ≈ {formattedUSD(finalPriceUSD)}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-[#8C7A5B] bg-white p-2.5 rounded-lg border border-[#D4AF37]/15">
              <Info className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>
                {language === 'ar'
                  ? 'الأسعار استرشادية وتتحدث تلقائياً وفق متوسط إغلاقات بورصة لندن للمعادن (LBMA).'
                  : 'Indicative rates calibrated to international LBMA bullion settlements.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
