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
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#18181B]/95 backdrop-blur-md border-t border-[#D4AF37]/40 shadow-2xl transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-3 py-1.5 flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0">
          <AdBanner
            slot="3334445556"
            type="sticky"
            format="horizontal"
            label={language === 'ar' ? 'إعلان مثبت سفلي' : 'Anchor Banner'}
            minHeight="60px"
            className="my-0 border-none bg-transparent shadow-none p-0"
          />
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#D4AF37] hover:text-white transition-colors cursor-pointer shrink-0"
          title={language === 'ar' ? 'إغلاق الإعلان المثبت' : 'Close sticky ad'}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
