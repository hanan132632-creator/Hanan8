import React from 'react';
import { Language } from '../types.ts';

interface AdSenseBannerProps {
  type?: 'leaderboard' | 'sidebar' | 'in_article';
  language?: Language;
}

/**
 * AdSenseBanner: Render null to prevent empty ad container / low-value content flags
 * during AdSense policy compliance review.
 */
export const AdSenseBanner: React.FC<AdSenseBannerProps> = () => {
  return null;
};
