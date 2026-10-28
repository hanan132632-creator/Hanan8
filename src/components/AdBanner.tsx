import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  layoutKey?: string;
  className?: string;
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
  type = 'display',
}) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      // AdBlock or script blocked silently
      console.debug('AdSense initialization:', err);
    }
  }, [slot]);

  return (
    <div
      className={`relative my-4 mx-auto w-full max-w-5xl text-center overflow-hidden ${className}`}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
        }}
        data-ad-client="ca-pub-8161307018337815"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(type === 'in-article' ? { 'data-ad-layout': 'in-article' } : {})}
        {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
        data-full-width-responsive="true"
      />
    </div>
  );
};
