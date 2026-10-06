import React from 'react';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { Product, Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface ProductCardProps {
  product: Product;
  language: Language;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  language,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
}) => {
  const t = TRANSLATIONS[language];
  const [justAdded, setJustAdded] = React.useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
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
    <div
      onClick={() => onQuickView(product)}
      className="group bg-white rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col justify-between"
    >
      {/* Visual Image container (takes ~70% focus) */}
      <div className="relative aspect-square w-full bg-[#F5F2EB]/60 overflow-hidden flex items-center justify-center p-3">
        <img
          src={product.image}
          alt={language === 'ar' ? product.nameAr : product.nameEn}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Quiet top status / hallmark indicator (single unboxed tag) */}
        <div className="absolute top-3 right-3 text-[11px] font-mono font-medium text-[#18181B] bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded border border-[#D4AF37]/30">
          {product.purityHallmark}
        </div>

        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className="absolute top-3 left-3 p-2 rounded-full bg-white/90 backdrop-blur-sm text-[#18181B]/70 hover:text-[#B8902A] transition-colors shadow-sm"
          title={t.wishlist}
          aria-label={t.wishlist}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-[#D4AF37] text-[#D4AF37]' : ''
            }`}
          />
        </button>

        {/* Quick View overlay button */}
        <div className="absolute inset-x-4 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2 bg-[#18181B]/90 hover:bg-[#18181B] text-[#FAF8F5] text-xs font-medium rounded-lg backdrop-blur-sm flex items-center justify-center gap-1.5 transition-colors shadow-md"
          >
            <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.viewDetails}</span>
          </button>
        </div>
      </div>

      {/* Card Body & Technical Metadata */}
      <div className="p-5 flex flex-col justify-between flex-1 gap-3">
        <div>
          {/* Unboxed Metadata with typographic separators */}
          <div className="flex items-center gap-1.5 text-[11px] text-[#8C7A5B] font-medium tracking-wider uppercase mb-1">
            <span>{language === 'ar' ? product.metalLabelAr : product.metalLabelEn}</span>
            <span aria-hidden="true">·</span>
            <span>{product.weightGrams}g</span>
            {product.diamondCarat && (
              <>
                <span aria-hidden="true">·</span>
                <span>{product.diamondCarat}ct</span>
              </>
            )}
          </div>

          <h3 className="text-sm sm:text-base font-semibold text-[#18181B] group-hover:text-[#B8902A] transition-colors font-serif-luxury line-clamp-1">
            {language === 'ar' ? product.nameAr : product.nameEn}
          </h3>

          <p className="text-xs text-[#18181B]/60 line-clamp-1 mt-0.5">
            {language === 'ar' ? product.subtitleAr : product.subtitleEn}
          </p>
        </div>

        {/* Price & Add to Bag footer */}
        <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between gap-2">
          <div>
            <div className="text-sm sm:text-base font-bold text-[#18181B] font-mono tabular-nums">
              {formattedPriceSAR}
            </div>
            <div className="text-[11px] text-[#8C7A5B] font-mono tabular-nums">
              ≈ {formattedPriceUSD}
            </div>
          </div>

          <button
            onClick={handleAdd}
            className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              justAdded
                ? 'bg-emerald-700 text-white'
                : 'bg-[#18181B] hover:bg-[#27272A] text-[#FAF8F5] border border-[#D4AF37]/30 hover:border-[#D4AF37]'
            }`}
            aria-label="Add to cart"
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{language === 'ar' ? 'تمت الإضافة' : 'Added'}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="hidden sm:inline">{t.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
