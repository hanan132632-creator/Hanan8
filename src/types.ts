export type Language = 'ar' | 'en';

export type MetalType = 'gold_18k' | 'gold_21k' | 'gold_24k' | 'white_gold_18k' | 'silver_925' | 'platinum_950';

export type GemstoneType = 'diamond' | 'emerald' | 'sapphire' | 'ruby' | 'pearl' | 'pure_gold';

export type ProductCategory = 'bridal' | 'solitaire' | 'bracelets' | 'necklaces' | 'investment' | 'daily';

export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  subtitleAr: string;
  subtitleEn: string;
  category: ProductCategory;
  metal: MetalType;
  metalLabelAr: string;
  metalLabelEn: string;
  gemstone: GemstoneType;
  gemstoneLabelAr: string;
  gemstoneLabelEn: string;
  purityHallmark: string; // e.g. "Au 750 (18k)" or "Ag 925" or "Au 999.9"
  weightGrams: number;
  diamondCarat?: number;
  diamondClarity?: string; // e.g. "VVS1" | "VS2"
  diamondCut?: string; // e.g. "Excellent / Ideal"
  priceSAR: number;
  priceUSD: number;
  image: string;
  additionalImages?: string[];
  inStock: boolean;
  featured: boolean;
  descriptionAr: string;
  descriptionEn: string;
  specifications: {
    hallmarkStamp: string;
    origin: string;
    certificationAgency: string; // "GIA", "IGI", "HRD", "Saudi Ministry Hallmark"
    warrantyYears: number;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedRingSize?: string;
  giftWrapping: boolean;
  certificateRequested: boolean;
}

export interface Author {
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  credentialsAr: string;
  credentialsEn: string;
  avatar: string;
}

export interface Article {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  categoryAr: string;
  categoryEn: string;
  publishDate: string;
  readTimeAr: string;
  readTimeEn: string;
  viewsCount?: number;
  likesCount?: number;
  author: Author;
  featuredImage: string;
  tableOfContentsAr: string[];
  tableOfContentsEn: string[];
  sections: {
    headingAr: string;
    headingEn: string;
    contentAr: string;
    contentEn: string;
  }[];
}

export interface BoutiqueLocation {
  cityAr: string;
  cityEn: string;
  addressAr: string;
  addressEn: string;
  phone: string;
  email: string;
  hoursAr: string;
  hoursEn: string;
  coordinates: { lat: number; lng: number };
}
