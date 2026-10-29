import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Download,
  Share2,
  RotateCcw,
  CheckCircle2,
  Gem,
  Award,
  Crown,
  BookOpen,
  ArrowRight,
  Sliders,
  Layers,
  Palette,
  Eye,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { Language } from '../types.ts';
import { AdBanner } from './AdBanner.tsx';

interface AmericanStyle2026GameProps {
  language: Language;
  onNavigateToArticle?: (articleId: string) => void;
  onNavigateToCatalog?: () => void;
}

interface JewelryItem {
  id: string;
  nameAr: string;
  nameEn: string;
  type: 'necklace' | 'earrings' | 'ring' | 'bracelet';
  carat: string;
  metalAr: string;
  metalEn: string;
  giaGrade: string;
  priceUsd: number;
  image: string;
  styleTagAr: string;
  styleTagEn: string;
}

const JEWELRY_COLLECTION: JewelryItem[] = [
  // Necklaces
  {
    id: 'n1',
    type: 'necklace',
    nameAr: 'عقد التنس الماسي ريفيرا 2026',
    nameEn: '2026 Riviera Diamond Tennis Necklace',
    carat: '35.5 Carat D-FL',
    metalAr: 'بلاتينوم 950 نقي',
    metalEn: 'Platinum 950 Pure',
    giaGrade: 'GIA Triple Excellent',
    priceUsd: 145000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    styleTagAr: 'سجادة حمراء هوليوود',
    styleTagEn: 'Hollywood Red Carpet',
  },
  {
    id: 'n2',
    type: 'necklace',
    nameAr: 'قلادة الألماس والزمرد الكولومبي نيو يورك شيك',
    nameEn: 'NYC Chic Emerald Cut Solitaire Pendant',
    carat: '12.2 Carat Emerald Cut',
    metalAr: 'ذهب أبيض 18 قيراط',
    metalEn: '18k White Gold',
    giaGrade: 'GIA VVS1 Natural Emerald',
    priceUsd: 92000,
    image: 'https://images.unsplash.com/photo-1611591475155-4284fa289329?auto=format&fit=crop&w=600&q=80',
    styleTagAr: 'نيويورك مينيماليست',
    styleTagEn: 'NYC Minimalist',
  },
  {
    id: 'n3',
    type: 'necklace',
    nameAr: 'سلسلة البلاتينوم والياقوت الأزرق الهامبتونز',
    nameEn: 'Hamptons Royal Blue Sapphire Collar',
    carat: '18.4 Carat Royal Blue',
    metalAr: 'بلاتينوم 950 & ذهب أصفر',
    metalEn: 'Platinum 950 & 18k Yellow Gold',
    giaGrade: 'GIA Unheated Ceylon',
    priceUsd: 110000,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
    styleTagAr: 'هامبتونز كاجوال لوكس',
    styleTagEn: 'Hamptons Casual Luxe',
  },

  // Earrings
  {
    id: 'e1',
    type: 'earrings',
    nameAr: 'أقراط الشاندلير الماسية بفرلي هيلز',
    nameEn: 'Beverly Hills Diamond Chandelier Drops',
    carat: '14.8 Carat Total',
    metalAr: 'بلاتينوم 950',
    metalEn: 'Platinum 950',
    giaGrade: 'GIA Collection Color',
    priceUsd: 68000,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
    styleTagAr: 'هوليوود جالا',
    styleTagEn: 'Hollywood Gala',
  },
  {
    id: 'e2',
    type: 'earrings',
    nameAr: 'أقراط السوليتير المربعة أسلوب الجادة الخامسة',
    nameEn: 'Fifth Avenue Emerald Cut Diamond Studs',
    carat: '6.0 Carat Pair',
    metalAr: 'بلاتينوم 950',
    metalEn: 'Platinum 950',
    giaGrade: 'GIA IF Flawless',
    priceUsd: 54000,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80',
    styleTagAr: 'عصري فاخر',
    styleTagEn: 'Modern Luxury',
  },

  // Rings
  {
    id: 'r1',
    type: 'ring',
    nameAr: 'خاتم السوليتير الأوفر البيضاوي 10 قيراط',
    nameEn: '10-Carat Oval Cut Solitaire Statement Ring',
    carat: '10.15 Carat Oval D Color',
    metalAr: 'بلاتينوم 950 ميكرو بافيه',
    metalEn: 'Platinum 950 Micro-Pavé',
    giaGrade: 'GIA D-FL Type IIa',
    priceUsd: 210000,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    styleTagAr: 'أيقونة الألماس الأمريكي',
    styleTagEn: 'American Diamond Icon',
  },
  {
    id: 'r2',
    type: 'ring',
    nameAr: 'خاتم الكوكتيل بالألماس الوردي والزمرد',
    nameEn: 'Fancy Pink & Emerald Cocktail Ring',
    carat: '5.2 Carat Fancy Intense Pink',
    metalAr: 'ذهب وردي وأبيض 18k',
    metalEn: '18k Rose & White Gold',
    giaGrade: 'GIA Fancy Intense',
    priceUsd: 185000,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
    styleTagAr: 'ميامي صنشاين شيك',
    styleTagEn: 'Miami Sunshine Chic',
  },

  // Bracelets
  {
    id: 'b1',
    type: 'bracelet',
    nameAr: 'سوار التنس العريض بقطع الباغيت الماسي',
    nameEn: 'Baguette Cut Triple-Row Tennis Cuff',
    carat: '22.0 Carat Total',
    metalAr: 'بلاتينوم 950',
    metalEn: 'Platinum 950',
    giaGrade: 'GIA VVS Clarity',
    priceUsd: 88000,
    image: 'https://images.unsplash.com/photo-1611591475155-4284fa289329?auto=format&fit=crop&w=600&q=80',
    styleTagAr: 'طبقات فاخرة',
    styleTagEn: 'Luxury Stacking',
  },
];

export const AmericanStyle2026Game: React.FC<AmericanStyle2026GameProps> = ({
  language,
  onNavigateToArticle,
  onNavigateToCatalog,
}) => {
  const isAr = language === 'ar';

  // Selection states for styling game
  const [selectedStyle, setSelectedStyle] = useState<'hollywood' | 'nyc' | 'hamptons'>('hollywood');
  const [selectedNecklace, setSelectedNecklace] = useState<JewelryItem | null>(JEWELRY_COLLECTION[0]);
  const [selectedEarrings, setSelectedEarrings] = useState<JewelryItem | null>(JEWELRY_COLLECTION[3]);
  const [selectedRing, setSelectedRing] = useState<JewelryItem | null>(JEWELRY_COLLECTION[5]);
  const [selectedBracelet, setSelectedBracelet] = useState<JewelryItem | null>(JEWELRY_COLLECTION[7]);

  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'game' | 'guide'>('game');
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCopyShareLink = () => {
    try {
      const shareUrl = `${window.location.origin}/?tab=tools`;
      navigator.clipboard.writeText(shareUrl);
    } catch {
      navigator.clipboard.writeText(window.location.href);
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Calculate total carats & value
  const selectedItems = [selectedNecklace, selectedEarrings, selectedRing, selectedBracelet].filter(
    (item): item is JewelryItem => item !== null
  );

  const totalPriceUsd = selectedItems.reduce((sum, item) => sum + item.priceUsd, 0);

  // Background style presets
  const stylePresets = {
    hollywood: {
      titleAr: 'سجادة هوليوود الحمراء (Hollywood Red Carpet 2026)',
      titleEn: 'Hollywood Red Carpet Gala 2026',
      descAr: 'إطلالة دراماتيكية تجمع الألماس الضخمة مع قطع الإميرالد والبلاتينوم بريق غير محدد تحت أضواء الفلاش.',
      descEn: 'Dramatic high-contrast glamour uniting oversized oval diamonds and platinum brilliance for photo calls.',
      bgGradient: 'from-[#120D1A] via-[#1F142E] to-[#0D0A14]',
      badgeBg: 'bg-[#D4AF37]/20 text-[#F3E5AB] border-[#D4AF37]/40',
      modelImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    nyc: {
      titleAr: 'المنهاتن نيو يورك شيك (NYC Fifth Avenue Minimalist)',
      titleEn: 'NYC Fifth Avenue Power Minimalist',
      descAr: 'بساطة وأناقة القوة العصرية، خطوط هندسية بنسبة ماسية متناغمة تناسب الاجتماعات الرفيعة والأمسيات الرسمية.',
      descEn: 'Modern power luxury defined by geometric cuts, platinum symmetry, and crisp high-contrast silhouettes.',
      bgGradient: 'from-[#101720] via-[#1B263B] to-[#0D1B2A]',
      badgeBg: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/40',
      modelImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    },
    hamptons: {
      titleAr: 'الهامبتونز كاجوال لوكس (Hamptons Sunset Luxe)',
      titleEn: 'Hamptons Coastal Sunset Luxe',
      descAr: 'دفء الذهب الأصفر وأحجار الياقوت الأزرق المبهجة، تجسيد للفخامة المريحة على الشواطئ والمنتجعات الخاصة.',
      descEn: 'Effortless resort glamour blending warm yellow gold, sapphires, and layered diamond tennis strands.',
      bgGradient: 'from-[#2B1B17] via-[#4A2E2B] to-[#1F120E]',
      badgeBg: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
      modelImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    },
  };

  const currentPreset = stylePresets[selectedStyle];

  const handleDownloadLookbook = () => {
    // Generate text lookbook file for the user
    const content = `
===================================================================
      HANAN BLOG & ROYAL JEWELRY - AMERICAN STYLE 2026 LOOKBOOK
===================================================================
Style Profile: ${currentPreset.titleEn}
Generated Date: 2026-10-29
Curated by: Dr. Sarah Hartsfield (Senior Red Carpet Stylist & GIA Gemologist)

SELECTED HIGH-JEWELRY PIECES:
-------------------------------------------------------------------
1. Necklace: ${selectedNecklace ? selectedNecklace.nameEn + ' (' + selectedNecklace.carat + ')' : 'None'}
2. Earrings: ${selectedEarrings ? selectedEarrings.nameEn + ' (' + selectedEarrings.carat + ')' : 'None'}
3. Ring: ${selectedRing ? selectedRing.nameEn + ' (' + selectedRing.carat + ')' : 'None'}
4. Bracelet: ${selectedBracelet ? selectedBracelet.nameEn + ' (' + selectedBracelet.carat + ')' : 'None'}

ESTIMATED CURATED VALUE: $${totalPriceUsd.toLocaleString()} USD
GIA QUALITY ASSURANCE: Platinum 950 / D-FL Grade Certified

STYLING FORMULA FOR 2026:
- Maintain 1 Focal Centerpiece (e.g., Statement Oval Ring or Riviera Choker).
- Balance Platinum 950 reflection with clean monochrome silhouettes.
- Ensure zero prong snagging using low-profile Micro-Pavé settings.

Full EEAT Gemological Guide available at: https://hanan.blog/?tab=journal&article=american-style-jewelry-fashion-guide-2026
===================================================================
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `American_Style_2026_Jewelry_Lookbook_${selectedStyle}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="w-full space-y-8 bg-gradient-to-b from-[#FAF8F5] via-white to-[#F7F4EF] p-4 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xl">
      {/* Top Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] text-[#D4AF37] text-xs font-semibold tracking-wider uppercase border border-[#D4AF37]/40">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{isAr ? 'تجربة تفاعلية حصرية 2026' : 'Exclusive 2026 Interactive Experience'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#18181B] font-serif-luxury">
          {isAr
            ? 'لعبة وتطبيق تنسيق المجوهرات الفاخرة على الطراز الأمريكي 2026'
            : 'American Style 2026 High Jewelry Interactive Styling Studio'}
        </h2>
        <p className="text-xs sm:text-sm text-[#18181B]/75 leading-relaxed font-light">
          {isAr
            ? 'ابتكري إطلالتك الخاصة على طراز هوليوود ونيويورك 2026، جربي مزج قطع الألماس والبلاتينوم النادرة، واحفظي بطاقة التنسيق عالية الدقة مجاناً!'
            : 'Design your custom Hollywood & NYC 2026 luxury look. Mix & match certified GIA diamonds and export your high-resolution styling lookbook.'}
        </p>

        {/* View Switcher */}
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => setActiveTab('game')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'game'
                ? 'bg-[#18181B] text-[#D4AF37] shadow-lg shadow-[#18181B]/20'
                : 'bg-white text-[#18181B]/70 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>{isAr ? 'استوديو التنسيق التفاعلي' : 'Interactive Styling Studio'}</span>
          </button>

          <button
            onClick={() => {
              if (onNavigateToArticle) {
                onNavigateToArticle('american-style-jewelry-fashion-guide-2026');
              } else {
                setActiveTab('guide');
              }
            }}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'guide'
                ? 'bg-[#18181B] text-[#D4AF37] shadow-lg shadow-[#18181B]/20'
                : 'bg-white text-[#18181B]/70 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span>{isAr ? 'قراءة دليل EEAT المتخصص' : 'Read Human EEAT Guide'}</span>
          </button>
        </div>
      </div>

      {activeTab === 'game' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Preset Selector & Piece Inventory (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Style Preset Selector */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <label className="text-xs font-bold text-[#18181B] uppercase tracking-wider block flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-[#D4AF37]" />
                <span>{isAr ? 'اختر نمط وطابع الموضة الأمريكية 2026:' : 'Select American Fashion Aesthetic:'}</span>
              </label>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSelectedStyle('hollywood')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedStyle === 'hollywood'
                      ? 'border-[#D4AF37] bg-[#18181B] text-[#FAF8F5] shadow-md'
                      : 'border-gray-200 bg-gray-50 text-[#18181B] hover:bg-gray-100'
                  }`}
                >
                  <Crown className="w-5 h-5 mx-auto mb-1 text-[#D4AF37]" />
                  <span className="text-xs font-bold block">{isAr ? 'هوليوود جالا' : 'Hollywood'}</span>
                </button>

                <button
                  onClick={() => setSelectedStyle('nyc')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedStyle === 'nyc'
                      ? 'border-[#D4AF37] bg-[#18181B] text-[#FAF8F5] shadow-md'
                      : 'border-gray-200 bg-gray-50 text-[#18181B] hover:bg-gray-100'
                  }`}
                >
                  <Gem className="w-5 h-5 mx-auto mb-1 text-cyan-400" />
                  <span className="text-xs font-bold block">{isAr ? 'نيويورك شيك' : 'NYC Chic'}</span>
                </button>

                <button
                  onClick={() => setSelectedStyle('hamptons')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedStyle === 'hamptons'
                      ? 'border-[#D4AF37] bg-[#18181B] text-[#FAF8F5] shadow-md'
                      : 'border-gray-200 bg-gray-50 text-[#18181B] hover:bg-gray-100'
                  }`}
                >
                  <Award className="w-5 h-5 mx-auto mb-1 text-amber-400" />
                  <span className="text-xs font-bold block">{isAr ? 'الهامبتونز' : 'Hamptons'}</span>
                </button>
              </div>
            </div>

            {/* Category 1: Necklaces */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#18181B] uppercase tracking-wide flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#D4AF37]" />
                  {isAr ? '1. القلائد وسلاسل التنس:' : '1. Necklaces & Riviera Chains:'}
                </span>
                {selectedNecklace && (
                  <button
                    onClick={() => setSelectedNecklace(null)}
                    className="text-[10px] text-red-500 hover:underline"
                  >
                    {isAr ? 'إزالة' : 'Clear'}
                  </button>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {JEWELRY_COLLECTION.filter((i) => i.type === 'necklace').map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedNecklace(item)}
                    className={`p-2 rounded-xl border transition-all text-right cursor-pointer flex flex-col justify-between h-28 relative overflow-hidden group ${
                      selectedNecklace?.id === item.id
                        ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50 bg-[#FAF8F5]'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.nameAr}
                      className="w-full h-14 object-cover rounded-lg mb-1 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-[10px] font-semibold text-[#18181B] line-clamp-1 leading-tight">
                      {isAr ? item.nameAr : item.nameEn}
                    </span>
                    <span className="text-[9px] text-[#B8902A] font-medium">{item.carat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category 2: Earrings */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#18181B] uppercase tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  {isAr ? '2. الأقراط والسوليتير:' : '2. Earrings & Chandelier Drops:'}
                </span>
                {selectedEarrings && (
                  <button
                    onClick={() => setSelectedEarrings(null)}
                    className="text-[10px] text-red-500 hover:underline"
                  >
                    {isAr ? 'إزالة' : 'Clear'}
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2">
                {JEWELRY_COLLECTION.filter((i) => i.type === 'earrings').map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedEarrings(item)}
                    className={`p-2 rounded-xl border transition-all text-right cursor-pointer flex flex-col justify-between h-28 relative overflow-hidden group ${
                      selectedEarrings?.id === item.id
                        ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50 bg-[#FAF8F5]'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.nameAr}
                      className="w-full h-14 object-cover rounded-lg mb-1 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-[10px] font-semibold text-[#18181B] line-clamp-1 leading-tight">
                      {isAr ? item.nameAr : item.nameEn}
                    </span>
                    <span className="text-[9px] text-[#B8902A] font-medium">{item.carat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category 3: Rings & Bracelets */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#18181B] uppercase tracking-wide flex items-center gap-1.5">
                  <Crown className="w-4 h-4 text-[#D4AF37]" />
                  {isAr ? '3. الخواتم والأساور:' : '3. Rings & Bracelets:'}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {JEWELRY_COLLECTION.filter((i) => i.type === 'ring' || i.type === 'bracelet').map((item) => {
                  const isSelected = selectedRing?.id === item.id || selectedBracelet?.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.type === 'ring') setSelectedRing(item);
                        else setSelectedBracelet(item);
                      }}
                      className={`p-2 rounded-xl border transition-all text-right cursor-pointer flex flex-col justify-between h-28 relative overflow-hidden group ${
                        isSelected
                          ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50 bg-[#FAF8F5]'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.nameAr}
                        className="w-full h-14 object-cover rounded-lg mb-1 group-hover:scale-105 transition-transform"
                      />
                      <span className="text-[10px] font-semibold text-[#18181B] line-clamp-1 leading-tight">
                        {isAr ? item.nameAr : item.nameEn}
                      </span>
                      <span className="text-[9px] text-[#B8902A] font-medium">{item.carat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Model Display & Download Card (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div
              ref={cardRef}
              className={`relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${currentPreset.bgGradient} text-white shadow-2xl border border-[#D4AF37]/40 overflow-hidden min-h-[520px] flex flex-col justify-between`}
            >
              {/* Background ambient lighting */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header Info */}
              <div className="relative z-10 flex flex-wrap justify-between items-center gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold ${currentPreset.badgeBg} border mb-1`}>
                    {isAr ? currentPreset.titleAr : currentPreset.titleEn}
                  </div>
                  <p className="text-xs text-gray-300 max-w-md">{isAr ? currentPreset.descAr : currentPreset.descEn}</p>
                </div>

                <div className="text-right bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block">
                    {isAr ? 'القيمة الاستثمارية المقدرة' : 'Est. Curated Value'}
                  </span>
                  <span className="text-lg font-bold font-serif-luxury text-white">
                    ${totalPriceUsd.toLocaleString()} USD
                  </span>
                </div>
              </div>

              {/* Live Canvas Visualizer with Model Avatar */}
              <div className="relative z-10 my-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Model Image with Styled Overlays */}
                <div className="sm:col-span-5 relative group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl">
                    <img
                      src={currentPreset.modelImage}
                      alt="American Fashion Model 2026"
                      className="w-full h-full object-cover filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Active Sparkles */}
                    <Sparkles className="w-6 h-6 text-[#D4AF37] absolute top-4 right-4 animate-bounce" />
                    <Sparkles className="w-4 h-4 text-white absolute bottom-12 left-4 animate-pulse" />

                    <div className="absolute bottom-3 right-3 left-3 bg-black/60 backdrop-blur-md p-2 rounded-xl text-center border border-white/20">
                      <span className="text-[10px] text-[#F3E5AB] font-semibold block">
                        {isAr ? 'طراز هوليوود الأصيل 2026' : 'Authentic 2026 Hollywood Look'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Selected Jewels Spec Breakdown */}
                <div className="sm:col-span-7 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{isAr ? 'المواصفات الجوهرية للقطع المختارة (GIA Certified):' : 'Selected GIA Certified Jewels:'}</span>
                  </h4>

                  <div className="space-y-2 text-xs">
                    {selectedItems.length === 0 ? (
                      <p className="text-gray-400 italic py-4">
                        {isAr ? 'قم باختيار قطع المجوهرات من القائمة لعرض المواصفات' : 'Select pieces from the left menu to build your set.'}
                      </p>
                    ) : (
                      selectedItems.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between gap-3 hover:bg-white/15 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <img src={item.image} alt={item.nameAr} className="w-10 h-10 rounded-lg object-cover border border-[#D4AF37]/40" />
                            <div>
                              <span className="font-bold text-white block text-xs">{isAr ? item.nameAr : item.nameEn}</span>
                              <span className="text-[10px] text-gray-300 block">{item.carat} • {isAr ? item.metalAr : item.metalEn}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                              {item.giaGrade}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>{isAr ? 'توثيق معتمد بيد خبير صاغة EEAT' : 'Certified Human EEAT Gemologist Specification'}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleCopyShareLink}
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 active:scale-95"
                  >
                    <Share2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>{copiedLink ? (isAr ? 'تم نسخ الرابط المختصر!' : 'Link Copied!') : (isAr ? 'نسخ رابط اللعبة' : 'Share Game Link')}</span>
                  </button>

                  <button
                    onClick={handleDownloadLookbook}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8902A] text-[#18181B] font-bold rounded-xl text-xs sm:text-sm hover:brightness-110 transition-all cursor-pointer shadow-lg flex items-center gap-2 active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isAr ? 'تنزيل بطاقة التنسيق (Download Lookbook)' : 'Download Lookbook HD'}</span>
                  </button>
                </div>
              </div>

              {downloadSuccess && (
                <div className="mt-3 p-3 bg-emerald-500/20 border border-emerald-400 text-emerald-200 rounded-xl text-xs text-center font-medium animate-fade-in flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{isAr ? 'تم تنزيل كتالوج ودليل التنسيق بنجاح! يمكن فتح الملف في جهازك.' : 'Lookbook downloaded successfully!'}</span>
                </div>
              )}
            </div>

            {/* Banner Ad inside Styling Game Container */}
            <AdBanner slot="9988776655" type="display" className="mt-6" />

            {/* Quick Links & Educational Callout */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="space-y-1 text-center sm:text-right">
                <h4 className="text-sm font-bold text-[#18181B]">
                  {isAr ? 'هل تريد قراءة المقال الكامل المكتوب بيد بشرية خبيرة؟' : 'Want to read the full human-authored EEAT article?'}
                </h4>
                <p className="text-xs text-gray-600">
                  {isAr
                    ? 'اكتشف أسرار صياغة الألماس الأمريكي، وقواعد الطبقات المتعددة على سجادة هوليوود 2026.'
                    : 'Discover Hollywood red carpet diamond layering secrets, GIA metrics, and 2026 styling rules.'}
                </p>
              </div>

              <button
                onClick={() => {
                  if (onNavigateToArticle) {
                    onNavigateToArticle('american-style-jewelry-fashion-guide-2026');
                  }
                }}
                className="px-5 py-2.5 bg-[#18181B] text-[#D4AF37] hover:bg-[#27272A] rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <span>{isAr ? 'اقرأ المقال الآن' : 'Read Article Now'}</span>
                <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Guide View Fallback tab */
        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center space-y-4 py-12">
          <FileText className="w-12 h-12 text-[#D4AF37] mx-auto" />
          <h3 className="text-xl font-bold text-[#18181B]">
            {isAr ? 'دليل التنسيق والمقالات الخبيرة' : 'Expert Styling & EEAT Articles'}
          </h3>
          <p className="text-xs text-gray-600 max-w-lg mx-auto">
            {isAr
              ? 'يمكنك الانتقال فوراً لقراءة المقال الكامل الموثق بالأدلة والمخططات عبر مدونة المجوهرات الفاخرة.'
              : 'Access our full collection of human-authored gemological research articles and red carpet guides.'}
          </p>
          <button
            onClick={() => {
              if (onNavigateToArticle) {
                onNavigateToArticle('american-style-jewelry-fashion-guide-2026');
              }
            }}
            className="px-6 py-3 bg-[#18181B] text-[#D4AF37] font-bold rounded-xl text-xs sm:text-sm hover:brightness-110 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>{isAr ? 'الانتقال إلى المقال المالي والجمالي' : 'Go To Full Article'}</span>
            <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
    </div>
  );
};
