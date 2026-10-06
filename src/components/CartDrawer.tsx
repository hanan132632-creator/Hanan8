import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShieldCheck, Truck, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { CartItem, Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  language: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  language,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[language];
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  // Form state
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'mada' | 'wire' | 'cod'>('mada');

  const subtotalSAR = items.reduce((acc, item) => acc + item.product.priceSAR * item.quantity, 0);
  const subtotalUSD = items.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);

  const formattedSubtotalSAR = new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US', {
    style: 'currency',
    currency: 'SAR',
    maximumFractionDigits: 0,
  }).format(subtotalSAR);

  const formattedSubtotalUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(subtotalUSD);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `RE-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(generatedRef);
    setOrderConfirmed(true);
  };

  const handleFinish = () => {
    onClearCart();
    setCheckoutOpen(false);
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#D4AF37]/30">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#18181B] font-serif-luxury">
                {t.cartTitle}
              </span>
              <span className="text-xs text-[#8C7A5B] font-mono tabular-nums">
                ({items.reduce((sum, item) => sum + item.quantity, 0)})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#18181B]/70 hover:text-[#18181B] rounded-lg transition-colors"
              aria-label={t.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#18181B]/60 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <p className="text-sm">{t.cartEmpty}</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="p-4 rounded-xl border border-[#D4AF37]/20 bg-[#FAF8F5] flex gap-3.5 relative"
                >
                  <img
                    src={item.product.image}
                    alt={language === 'ar' ? item.product.nameAr : item.product.nameEn}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 object-cover rounded-lg bg-white border border-[#D4AF37]/20 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-[#18181B] font-serif-luxury truncate">
                      {language === 'ar' ? item.product.nameAr : item.product.nameEn}
                    </h4>
                    <div className="text-[11px] text-[#8C7A5B] mt-0.5">
                      <span>{item.product.purityHallmark}</span>
                      {item.selectedRingSize && (
                        <span> · {item.selectedRingSize}</span>
                      )}
                    </div>

                    <div className="mt-2 text-xs font-bold text-[#18181B] font-mono tabular-nums">
                      {new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US', {
                        style: 'currency',
                        currency: 'SAR',
                        maximumFractionDigits: 0,
                      }).format(item.product.priceSAR * item.quantity)}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#D4AF37]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-mono font-semibold tabular-nums w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#D4AF37]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Trigger */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#D4AF37]/20 bg-[#FAF8F5] space-y-3">
              <div className="flex items-center justify-between text-xs text-[#8C7A5B]">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t.insuredShipping}</span>
                </span>
                <span className="text-emerald-700 font-medium">{t.complimentary}</span>
              </div>

              <div className="flex items-baseline justify-between pt-1 border-t border-[#D4AF37]/15">
                <span className="text-sm font-bold text-[#18181B] font-serif-luxury">
                  {t.totalAmount}
                </span>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#18181B] font-mono tabular-nums">
                    {formattedSubtotalSAR}
                  </div>
                  <div className="text-[11px] text-[#8C7A5B] font-mono tabular-nums">
                    ≈ {formattedSubtotalUSD}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCheckoutOpen(true)}
                className="w-full py-3.5 bg-[#18181B] hover:bg-[#27272A] text-[#FAF8F5] rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg border border-[#D4AF37]/40"
              >
                <span>{t.proceedCheckout}</span>
                <ArrowIcon className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Luxury Checkout Dialog Modal */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-60 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl relative">
            <button
              onClick={() => setCheckoutOpen(false)}
              className="absolute top-4 left-4 p-2 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            {!orderConfirmed ? (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="text-center pb-2 border-b border-[#D4AF37]/20">
                  <h3 className="text-xl font-bold text-[#18181B] font-serif-luxury">
                    {t.checkoutTitle}
                  </h3>
                  <p className="text-xs text-[#8C7A5B] mt-1">
                    {language === 'ar'
                      ? 'حجز مصفح ومؤمن لدى صالة كبار العملاء'
                      : 'Secured Armored Delivery Reservation with Royal Concierge'}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    {t.clientName}
                  </label>
                  <input
                    required
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder={language === 'ar' ? 'سعادة / سمو...' : 'e.g. Lady Katherine Vance'}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#18181B] mb-1">
                      {t.clientPhone}
                    </label>
                    <input
                      required
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+966 50 123 4567"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#18181B] mb-1">
                      {t.clientEmail}
                    </label>
                    <input
                      required
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="client@royal.com"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    {t.shippingAddress}
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={language === 'ar' ? 'المدينة، الحي، اسم القصر / البرج...' : 'City, District, Palace / Villa No...'}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                    {t.paymentMethod}
                  </label>
                  <div className="space-y-2 text-xs">
                    <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#D4AF37]/30 bg-[#FAF8F5] cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'mada'}
                        onChange={() => setPaymentMethod('mada')}
                        className="accent-[#D4AF37]"
                      />
                      <span className="font-medium text-[#18181B]">{t.payMada}</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#D4AF37]/30 bg-[#FAF8F5] cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'wire'}
                        onChange={() => setPaymentMethod('wire')}
                        className="accent-[#D4AF37]"
                      />
                      <span className="font-medium text-[#18181B]">{t.payWire}</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#D4AF37]/30 bg-[#FAF8F5] cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="accent-[#D4AF37]"
                      />
                      <span className="font-medium text-[#18181B]">{t.payVipCod}</span>
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8902A] text-[#18181B] font-bold text-sm rounded-xl shadow-lg transition-all"
                  >
                    {t.confirmOrderBtn} ({formattedSubtotalSAR})
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-bold text-[#18181B] font-serif-luxury">
                  {t.orderSuccessTitle}
                </h3>

                <p className="text-xs sm:text-sm text-[#18181B]/70 leading-relaxed max-w-sm mx-auto">
                  {t.orderSuccessMsg}
                </p>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/30 max-w-xs mx-auto">
                  <span className="text-xs text-[#8C7A5B] block">{t.orderRefNumber}:</span>
                  <span className="text-lg font-mono font-bold text-[#18181B] tracking-wider">
                    {orderRef}
                  </span>
                </div>

                <button
                  onClick={handleFinish}
                  className="px-6 py-2.5 bg-[#18181B] text-[#FAF8F5] rounded-xl text-xs font-semibold"
                >
                  {language === 'ar' ? 'العودة للكتالوج' : 'Return to Boutique'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
