import React, { useState } from 'react';
import { X, ShieldCheck, Gem, Award, Truck, ShoppingBag, Ruler, Check } from 'lucide-react';
import { Product, Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface ProductDetailModalProps {
  product: Product | null;
  language: Language;
  onClose: () => void;
  onAddToCart: (product: Product, ringSize?: string, giftWrap?: boolean, certificate?: boolean) => void;
  onOpenRingSizer: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  language,
  onClose,
  onAddToCart,
  onOpenRingSizer,
}) => {
  if (!product) return null;

  const t = TRANSLATIONS[language];
  const [selectedSize, setSelectedSize] = useState<string>('US 7 / EU 54');
  const [giftWrap, setGiftWrap] = useState<boolean>(true);
  const [certRequested, setCertRequested] = useState<boolean>(true);
  const [added, setAdded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const ringSizes = [
    'US 5 / EU 49',
    'US 6 / EU 51',
    'US 7 / EU 54',
    'US 8 / EU 57',
    'US 9 / EU 59',
  ];

  const handleBuy = () => {
    onAddToCart(product, selectedSize, giftWrap, certRequested);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const formattedPriceSAR = new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US', {
    style: 'currency',
    currency: 'SAR',
    maximumFractionDigits: 0,
  }).format(product.priceSAR);

  const formattedPriceUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(product.priceUSD);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#D4AF37]/30 overflow-hidden my-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#18181B] shadow-md transition-colors"
          aria-label={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery Column */}
          <div className="relative bg-[#F9F7F2] p-6 sm:p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r md:border-[#D4AF37]/15">
            <div
              onClick={() => setIsZoomed(!isZoomed)}
              className={`relative overflow-hidden rounded-2xl cursor-zoom-in transition-all duration-300 w-full aspect-square flex items-center justify-center bg-white shadow-inner border border-[#D4AF37]/20 ${
                isZoomed ? 'scale-125 z-10' : ''
              }`}
            >
              <img
                src={product.image}
                alt={language === 'ar' ? product.nameAr : product.nameEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute bottom-3 right-3 text-[10px] bg-black/60 text-white px-2 py-1 rounded backdrop-blur-sm">
                {language === 'ar' ? 'انقر للتكبير والتفاصيل' : 'Click to Zoom'}
              </span>
            </div>

            {/* Quick authenticity badges under photo */}
            <div className="mt-6 flex items-center gap-4 text-xs text-[#8C7A5B]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>{product.specifications.certificationAgency}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>{product.specifications.hallmarkStamp}</span>
              </span>
            </div>
          </div>

          {/* Details & Purchase Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Hallmark unboxed row */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8902A]">
                <span>{language === 'ar' ? product.metalLabelAr : product.metalLabelEn}</span>
                <span>·</span>
                <span>{product.purityHallmark}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#18181B] font-serif-luxury mt-1.5 leading-snug">
                {language === 'ar' ? product.nameAr : product.nameEn}
              </h2>

              <p className="text-xs sm:text-sm text-[#18181B]/70 mt-2 leading-relaxed">
                {language === 'ar' ? product.descriptionAr : product.descriptionEn}
              </p>

              {/* Price Display */}
              <div className="mt-4 pb-4 border-b border-[#D4AF37]/20 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-[#18181B] font-mono tabular-nums">
                  {formattedPriceSAR}
                </span>
                <span className="text-xs text-[#8C7A5B] font-mono tabular-nums">
                  ≈ {formattedPriceUSD}
                </span>
              </div>

              {/* Specs Dossier */}
              <div className="mt-4 space-y-2.5 text-xs text-[#18181B]/80 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#D4AF37]/15">
                <div className="font-semibold text-xs text-[#18181B] mb-1 font-serif-luxury">
                  {t.specsTitle}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[#8C7A5B] block">{t.weightLabel}:</span>
                    <span className="font-medium font-mono">{product.weightGrams} grams</span>
                  </div>
                  {product.diamondCarat && (
                    <div>
                      <span className="text-[#8C7A5B] block">{t.caratLabel}:</span>
                      <span className="font-medium font-mono">{product.diamondCarat} ct</span>
                    </div>
                  )}
                  {product.diamondClarity && (
                    <div>
                      <span className="text-[#8C7A5B] block">{t.clarityLabel}:</span>
                      <span className="font-medium">{product.diamondClarity}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-[#8C7A5B] block">{t.originLabel}:</span>
                    <span className="font-medium">{product.specifications.origin}</span>
                  </div>
                </div>
              </div>

              {/* Ring Size Option if category is solitaire or bridal */}
              {(product.category === 'solitaire' || product.category === 'bridal') && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1.5 text-xs">
                    <span className="font-semibold text-[#18181B]">{t.selectSize}</span>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenRingSizer();
                      }}
                      className="text-[#B8902A] hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <Ruler className="w-3 h-3" />
                      <span>{t.sizeGuideLink}</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ringSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
                          selectedSize === size
                            ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#18181B] font-bold'
                            : 'border-slate-200 text-slate-700 hover:border-[#D4AF37]/40'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Bespoke Packaging & Certificate check options */}
              <div className="mt-4 space-y-2 text-xs">
                <label className="flex items-start gap-2 cursor-pointer text-[#18181B]/80">
                  <input
                    type="checkbox"
                    checked={giftWrap}
                    onChange={(e) => setGiftWrap(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#D4AF37]"
                  />
                  <span>{t.giftBoxOption}</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer text-[#18181B]/80">
                  <input
                    type="checkbox"
                    checked={certRequested}
                    onChange={(e) => setCertRequested(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#D4AF37]"
                  />
                  <span>{t.certificateOption} ({product.specifications.certificationAgency})</span>
                </label>
              </div>
            </div>

            {/* Contiguous Purchase Button */}
            <div className="pt-4 border-t border-[#D4AF37]/20">
              <button
                onClick={handleBuy}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                  added
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#18181B] hover:bg-[#27272A] text-[#FAF8F5] border border-[#D4AF37]/50 hover:border-[#D4AF37]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>{language === 'ar' ? 'تمت الإضافة للحقيبة الملكية!' : 'Added to Royal Bag!'}</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                    <span>{t.addToCart}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
