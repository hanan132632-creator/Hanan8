import React, { useState } from 'react';
import { Ruler, Info, Sparkles, Check } from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface RingSizeCalculatorProps {
  language: Language;
}

export const RingSizeCalculator: React.FC<RingSizeCalculatorProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [circumference, setCircumference] = useState<number>(54); // in mm
  const [activeMode, setActiveMode] = useState<'ring' | 'bracelet'>('ring');

  // Convert circumference to diameter: D = C / PI
  const diameter = (circumference / Math.PI).toFixed(1);

  // US Size approximation: (Circumference - 36.5) / 2.55 approx or standard formula
  // EU Size = Circumference in mm directly!
  // UK Size letter mapping
  const euSize = Math.round(circumference);
  const usSize = ((circumference - 36.5) / 2.55).toFixed(1);

  const getUkSize = (eu: number): string => {
    if (eu <= 46) return 'F - G';
    if (eu <= 49) return 'H - I';
    if (eu <= 51) return 'J - K';
    if (eu <= 53) return 'L - M';
    if (eu <= 55) return 'N - O';
    if (eu <= 57) return 'P - Q';
    if (eu <= 60) return 'R - S';
    if (eu <= 63) return 'T - U';
    return 'V - Z';
  };

  return (
    <div className="bg-white rounded-3xl border border-[#D4AF37]/30 shadow-xl overflow-hidden p-6 sm:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#D4AF37]/20 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B8902A] uppercase tracking-wider">
              <Ruler className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.ringSizerTitle}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] font-serif-luxury">
              {language === 'ar' ? 'معيار القياس المعتمد دولياً' : 'International Sizing Calibration Engine'}
            </h3>
            <p className="text-xs sm:text-sm text-[#18181B]/70 leading-relaxed max-w-xl">
              {t.ringSizerDesc}
            </p>
          </div>

          <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#D4AF37]/20 shrink-0">
            <button
              onClick={() => setActiveMode('ring')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeMode === 'ring'
                  ? 'bg-[#18181B] text-[#FAF8F5]'
                  : 'text-[#18181B]/70 hover:text-[#18181B]'
              }`}
            >
              {language === 'ar' ? 'مقاس الخاتم' : 'Ring'}
            </button>
            <button
              onClick={() => setActiveMode('bracelet')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeMode === 'bracelet'
                  ? 'bg-[#18181B] text-[#FAF8F5]'
                  : 'text-[#18181B]/70 hover:text-[#18181B]'
              }`}
            >
              {language === 'ar' ? 'مقاس السوار' : 'Bracelet'}
            </button>
          </div>
        </div>

        {activeMode === 'ring' ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Interactive Slider */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm font-semibold text-[#18181B] mb-2">
                  <span>{t.circumferenceSlider}</span>
                  <span className="text-lg font-bold text-[#B8902A] font-mono tabular-nums">
                    {circumference} mm
                  </span>
                </div>
                <input
                  type="range"
                  min="44"
                  max="70"
                  step="0.5"
                  value={circumference}
                  onChange={(e) => setCircumference(parseFloat(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
                <div className="flex justify-between text-[11px] text-[#8C7A5B] font-mono mt-1">
                  <span>44 mm (ناعم / Extra Small)</span>
                  <span>70 mm (كبير / Large)</span>
                </div>
              </div>

              {/* Conversion Output Matrix */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/25 text-center">
                  <span className="text-[11px] text-[#8C7A5B] block">{t.computedSizeUS}</span>
                  <span className="text-xl font-bold text-[#18181B] font-mono mt-0.5 block">
                    {usSize}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/25 text-center">
                  <span className="text-[11px] text-[#8C7A5B] block">{t.computedSizeEU}</span>
                  <span className="text-xl font-bold text-[#18181B] font-mono mt-0.5 block">
                    {euSize}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/25 text-center">
                  <span className="text-[11px] text-[#8C7A5B] block">{t.computedSizeUK}</span>
                  <span className="text-base font-bold text-[#18181B] font-mono mt-0.5 block">
                    {getUkSize(euSize)}
                  </span>
                </div>
              </div>

              <div className="text-xs text-[#18181B]/75 bg-[#FAF8F5] p-3 rounded-xl border border-dashed border-[#D4AF37]/30 flex items-center justify-between">
                <span>{t.innerDiameter}:</span>
                <span className="font-mono font-bold text-[#18181B]">{diameter} mm</span>
              </div>
            </div>

            {/* Right Column: Visual Ring Sizer Scale Simulation */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#D4AF37]/20 flex flex-col items-center justify-center text-center space-y-4">
              <span className="text-xs font-semibold text-[#8C7A5B] uppercase tracking-wider">
                {language === 'ar' ? 'المعاينة البصرية التقريبية لقطر الخاتم' : 'Simulated Ring Caliber'}
              </span>

              {/* Animated Ring Circle */}
              <div className="relative flex items-center justify-center w-40 h-40">
                <div
                  style={{
                    width: `${Math.min(130, Math.max(70, Number(diameter) * 5.2))}px`,
                    height: `${Math.min(130, Math.max(70, Number(diameter) * 5.2))}px`,
                  }}
                  className="rounded-full border-[6px] border-[#D4AF37] shadow-xl flex items-center justify-center transition-all duration-200 relative bg-white/40"
                >
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <span className="absolute text-[11px] font-mono font-bold text-[#18181B] mt-6">
                    {diameter} mm
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-left rtl:text-right text-[11px] text-[#8C7A5B] bg-white p-3 rounded-xl border border-[#D4AF37]/15">
                <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{t.sizerTip}</span>
              </div>
            </div>
          </div>
        ) : (
          /* Bracelet Guide */
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#D4AF37]/25 space-y-2">
                <span className="font-bold text-sm text-[#18181B] block font-serif-luxury">
                  {language === 'ar' ? 'مقاس صغير (Small)' : 'Small (S)'}
                </span>
                <span className="text-xs text-[#8C7A5B] block">15 - 16.5 cm (محيط المعصم)</span>
                <p className="text-[11px] text-[#18181B]/70">
                  {language === 'ar' ? 'مناسب للأيدي الرقيقة وموديلات التنس الملاصقة لليد.' : 'Snug fit for delicate wrists and classic tennis bracelets.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#D4AF37] space-y-2 shadow-sm">
                <span className="font-bold text-sm text-[#B8902A] block font-serif-luxury">
                  {language === 'ar' ? 'مقاس قياسي (Medium) الأكثر طلباً' : 'Medium (M) Standard'}
                </span>
                <span className="text-xs text-[#8C7A5B] block">17 - 18.5 cm (محيط المعصم)</span>
                <p className="text-[11px] text-[#18181B]/70">
                  {language === 'ar' ? 'المقاس المعتمد لأغلب أساور اللؤلؤ والأساور الصلبة (Bangles).' : 'Universally favored dimension for South Sea pearls & bangles.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#D4AF37]/25 space-y-2">
                <span className="font-bold text-sm text-[#18181B] block font-serif-luxury">
                  {language === 'ar' ? 'مقاس واسع (Large)' : 'Large (L)'}
                </span>
                <span className="text-xs text-[#8C7A5B] block">19 - 20.5 cm (محيط المعصم)</span>
                <p className="text-[11px] text-[#18181B]/70">
                  {language === 'ar' ? 'يوفر انسيابية وحركة مريحة وممتاز لأساور الفضة 925 الثقيلة.' : 'Generous drape for heavy British sterling silver cuffs.'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#D4AF37]/20 flex items-center justify-between">
              <span className="text-xs text-[#18181B]/80 font-medium">
                {language === 'ar'
                  ? 'هل ترغب في تعديل مقاس سوار أو خاتم خصيصاً لك؟'
                  : 'Require bespoke custom-fitted atelier sizing for your order?'}
              </span>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 bg-[#18181B] text-[#FAF8F5] text-xs font-semibold rounded-lg hover:bg-[#27272A]"
              >
                {t.vipConcierge}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
