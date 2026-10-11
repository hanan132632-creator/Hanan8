import React, { useState } from 'react';
import {
  X,
  Heart,
  ShoppingBag,
  Trash2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  ShieldCheck,
  RotateCcw,
  Gem,
} from 'lucide-react';
import { Product, Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onRestoreDefaults: () => void;
  onAddAllToCart: () => void;
  language: Language;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveWishlist,
  onAddToCart,
  onQuickView,
  onRestoreDefaults,
  onAddAllToCart,
  language,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[language];
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;
  const [addedIds, setAddedIds] = useState<string[]>([]);
  const [addedAllSuccess, setAddedAllSuccess] = useState(false);

  const handleAddSingle = (product: Product) => {
    onAddToCart(product);
    setAddedIds((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product.id));
    }, 2000);
  };

  const handleAddAll = () => {
    onAddAllToCart();
    setAddedAllSuccess(true);
    setTimeout(() => {
      setAddedAllSuccess(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#18181B]/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex pl-0 rtl:pl-0 rtl:pr-0">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl border-l rtl:border-l-0 rtl:border-r border-[#D4AF37]/30 flex flex-col">
          {/* Header */}
          <div className="p-6 bg-gradient-to-b from-[#18181B] to-[#27272A] text-[#FAF8F5] border-b border-[#D4AF37]/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 flex items-center justify-center">
                  <Heart className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif-luxury text-[#FAF8F5]">
                    {language === 'ar' ? 'المفضلة الملكية' : 'Royal Wishlist'}
                  </h3>
                  <p className="text-xs text-[#D4AF37]/90">
                    {wishlistProducts.length > 0
                      ? language === 'ar'
                        ? `${wishlistProducts.length} قطع فاخرة محفوظة`
                        : `${wishlistProducts.length} curated pieces saved`
                      : language === 'ar'
                        ? 'قائمتكِ المفضلة'
                        : 'Your Wishlist'}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close Wishlist"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistProducts.length > 0 ? (
              <>
                <div className="flex items-center justify-between text-xs text-[#8C7A5B] pb-2 border-b border-[#D4AF37]/20">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>
                      {language === 'ar'
                        ? 'مقتنيات مختارة تنتظر اقتناءكِ'
                        : 'Handpicked masterworks awaiting acquisition'}
                    </span>
                  </span>
                  <button
                    onClick={handleAddAll}
                    disabled={addedAllSuccess}
                    className="text-xs text-[#B8902A] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                  >
                    {addedAllSuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">
                          {language === 'ar' ? 'أضيفت للحقيبة!' : 'Added All!'}
                        </span>
                      </>
                    ) : (
                      <span>{language === 'ar' ? 'إضافة الكل للسلة' : 'Add all to bag'}</span>
                    )}
                  </button>
                </div>

                <div className="space-y-3.5">
                  {wishlistProducts.map((product) => {
                    const isJustAdded = addedIds.includes(product.id);
                    const formattedSAR = new Intl.NumberFormat(
                      language === 'ar' ? 'ar-SA' : 'en-US',
                      {
                        style: 'currency',
                        currency: 'SAR',
                        maximumFractionDigits: 0,
                      }
                    ).format(product.priceSAR);

                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-2xl border border-[#D4AF37]/25 p-4 shadow-xs hover:border-[#D4AF37]/60 transition-all space-y-3"
                      >
                        <div className="flex items-start gap-3.5">
                          {/* Image */}
                          <div
                            onClick={() => {
                              onQuickView(product);
                              onClose();
                            }}
                            className="w-20 h-20 rounded-xl overflow-hidden bg-[#FAF8F5] border border-slate-100 shrink-0 cursor-pointer group"
                          >
                            <img
                              src={product.image}
                              alt={language === 'ar' ? product.nameAr : product.nameEn}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <h4
                              onClick={() => {
                                onQuickView(product);
                                onClose();
                              }}
                              className="text-sm font-bold text-[#18181B] font-serif-luxury truncate hover:text-[#B8902A] cursor-pointer"
                            >
                              {language === 'ar' ? product.nameAr : product.nameEn}
                            </h4>
                            <p className="text-xs text-[#8C7A5B] truncate mt-0.5">
                              {language === 'ar' ? product.subtitleAr : product.subtitleEn}
                            </p>
                            <div className="mt-1.5 flex items-center gap-2">
                              <span className="text-xs font-mono font-bold text-[#18181B]">
                                {formattedSAR}
                              </span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-[#FAF8F5] text-[#8C7A5B] border border-[#D4AF37]/20 font-mono">
                                {product.purityHallmark}
                              </span>
                            </div>
                          </div>

                          {/* Delete from Wishlist */}
                          <button
                            onClick={() => onRemoveWishlist(product)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                            title={language === 'ar' ? 'حذف من المفضلة' : 'Remove from Wishlist'}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Actions */}
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                          <button
                            onClick={() => {
                              onQuickView(product);
                              onClose();
                            }}
                            className="px-3 py-1.5 text-xs text-[#18181B] hover:text-[#B8902A] font-medium flex items-center gap-1"
                          >
                            <span>{t.viewDetails}</span>
                            <ArrowIcon className="w-3 h-3" />
                          </button>

                          <button
                            onClick={() => handleAddSingle(product)}
                            className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                              isJustAdded
                                ? 'bg-emerald-600 text-white'
                                : 'bg-[#18181B] hover:bg-[#27272A] text-[#FAF8F5]'
                            }`}
                          >
                            {isJustAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>{language === 'ar' ? 'تمت الإضافة!' : 'Added!'}</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                                <span>{language === 'ar' ? 'أضف للسلة' : 'Add to Bag'}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto shadow-inner">
                  <Heart className="w-8 h-8 text-[#D4AF37]/40" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#18181B] font-serif-luxury">
                    {language === 'ar'
                      ? 'قائمتكِ المفضلة خالية حالياً'
                      : 'Your Wishlist is Currently Empty'}
                  </h4>
                  <p className="text-xs text-[#8C7A5B] max-w-xs mx-auto leading-relaxed">
                    {language === 'ar'
                      ? 'يمكنكِ استعادة التشكيلة المقترحة من المجوهرات الأيقونية أو تصفح الكتالوج لاختيار ما يناسب ذوقكِ الرفيع.'
                      : 'You can restore the curated collection of iconic jewels or explore the catalog to save pieces.'}
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2 max-w-xs mx-auto">
                  <button
                    onClick={onRestoreDefaults}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8902A] text-[#18181B] font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 text-[#18181B]" />
                    <span>
                      {language === 'ar'
                        ? 'إعادة وضع المجوهرات المختارة في المفضلة'
                        : 'Restore Curated Favorites'}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-5 bg-white border-t border-[#D4AF37]/25 space-y-3">
            <div className="flex items-center justify-between text-xs text-[#8C7A5B]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  {language === 'ar' ? 'ضمان أصالة ومعايرة ملكية' : 'Royal Assay & Authenticity'}
                </span>
              </span>
              <span className="font-mono text-[11px] text-[#B8902A]">100% GIA / LBMA</span>
            </div>

            {wishlistProducts.length > 0 && (
              <button
                onClick={handleAddAll}
                className="w-full py-3 rounded-xl bg-[#18181B] hover:bg-[#27272A] text-[#FAF8F5] font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#D4AF37]/40 shadow-md"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  {language === 'ar'
                    ? `إضافة جميع القطع (${wishlistProducts.length}) إلى حقيبة التسوق`
                    : `Add All (${wishlistProducts.length}) to Shopping Bag`}
                </span>
              </button>
            )}

            <button
              onClick={onClose}
              className="w-full py-2 text-xs text-[#8C7A5B] hover:text-[#18181B] font-medium text-center"
            >
              {language === 'ar' ? 'متابعة التصفح' : 'Continue Browsing'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
