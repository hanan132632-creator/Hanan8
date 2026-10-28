import React, { useEffect, useRef, useState } from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  layoutKey?: string;
  className?: string;
  label?: string;
  minHeight?: string;
  type?: 'display' | 'in-article' | 'in-feed' | 'sticky';
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slot = '1234567890',
  format = 'auto',
  layoutKey,
  className = '',
  label = 'إعلان رعاية',
  minHeight = '100px',
  type = 'display',
}) => {
  const adRef = useRef<HTMLModElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    try {
      if (window.adsbygoogle && adRef.current) {
        // Push ad request safely
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        if (isMounted) setAdLoaded(true);
      }
    } catch (err) {
      console.warn('AdSense push error or blocked:', err);
      if (isMounted) setAdError(true);
    }
    return () => {
      isMounted = false;
    };
  }, [slot]);

  return (
    <div
      className={`relative my-6 mx-auto w-full max-w-5xl rounded-2xl border border-[#D4AF37]/20 bg-[#FAF8F5]/60 p-3 sm:p-4 text-center transition-all overflow-hidden shadow-xs ${className}`}
      style={{ minHeight }}
    >
      {/* Top Ad Badge Label */}
      <div className="flex items-center justify-between gap-2 border-b border-[#D4AF37]/15 pb-2 mb-2 text-[10px] text-[#8C7A5B] font-mono tracking-wider uppercase">
        <span className="flex items-center gap-1.5 font-bold">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          <span>{label}</span>
        </span>
        <span className="text-slate-400">Google AdSense</span>
      </div>

      {/* Google AdSense Unit Container */}
      <div className="flex items-center justify-center min-h-[90px]">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: 'block',
            width: '100%',
            minHeight: '90px',
          }}
          data-ad-client="ca-pub-8161307018337815"
          data-ad-slot={slot}
          data-ad-format={format}
          {...(type === 'in-article' ? { 'data-ad-layout': 'in-article' } : {})}
          {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
          data-full-width-responsive="true"
        />

        {/* Fallback layout box when running in preview/sandbox mode or when ad hasn't filled yet */}
        {!adLoaded && !adError && (
          <div className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#FAF8F5] via-amber-50/30 to-[#FAF8F5] border border-dashed border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-right rtl:text-right">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 text-[#B8902A] flex items-center justify-center font-bold text-xs shrink-0">
                AD
              </div>
              <div>
                <span className="text-xs font-bold text-[#18181B] block font-serif-luxury">
                  مساحة إعلانية محسّنة عالية الأداء (AdSense Unit)
                </span>
                <span className="text-[11px] text-[#8C7A5B] block">
                  موقع الإعلان مهيأ بأعلى معايير الرؤية والـ CTR وحماية تجربة المستخدم
                </span>
              </div>
            </div>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#18181B] text-[#D4AF37] font-mono font-bold shrink-0">
              ca-pub-8161307018337815
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
