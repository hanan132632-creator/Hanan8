import React, { useState } from 'react';
import { X } from 'lucide-react';
import { AdBanner } from './AdBanner.tsx';

interface StickyAnchorAdProps {
  language: string;
}

export const StickyAnchorAd: React.FC<StickyAnchorAdProps> = ({ language }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Sponsored Anchor Ad"
      className="fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto px-2 relative pointer-events-auto">
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-3 right-3 z-50 p-1 rounded-full bg-[#18181B] text-[#D4AF37] border border-[#D4AF37]/40 shadow-md hover:bg-black text-[10px] flex items-center gap-1 px-2 cursor-pointer"
          title={language === 'ar' ? 'إغلاق الإعلان' : 'Close ad'}
        >
          <X className="w-3 h-3" />
          <span>{language === 'ar' ? 'إغلاق' : 'Close'}</span>
        </button>
        <AdBanner
          slot="3334445556"
          type="sticky"
          format="horizontal"
          className="my-0 shadow-lg bg-white/95 backdrop-blur-sm rounded-t-xl border-t border-x border-[#D4AF37]/30"
        />
      </div>
    </aside>
  );
};
