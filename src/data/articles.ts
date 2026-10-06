import { Article } from '../types.ts';
import heroImg from '../assets/images/hero_luxury_jewelry_1791298014265.jpg';
import ringImg from '../assets/images/product_solitaire_ring_1791298025877.jpg';
import bullionImg from '../assets/images/gold_bullion_investment_1791298056029.jpg';
import pearlImg from '../assets/images/product_pearl_bracelet_1791298046092.jpg';

export const ARTICLES_DATA: Article[] = [
  {
    id: 'definitive-4cs-diamond-guide',
    slug: 'definitive-4cs-diamond-buying-guide',
    titleAr: 'دليل شراء الألماس الاسترشادي: معايير 4Cs العالمية وأسرار الفحص المخبري',
    titleEn: 'The Definitive Diamond Buying Guide: The Global 4Cs & Laboratory Appraisal Secrets',
    summaryAr: 'دليل مهني تفصيلي من كبار خبراء الأحجار الكريمة يشرح كيفية تقييم قيراط الألماس ونقائه ولونه وجودة قطعه لتفادي التلاعب وضمان أعلى قيمة استثمارية وبريق بصري.',
    summaryEn: 'A masterclass by certified gemologists breaking down Carat, Clarity, Color, and Cut to maximize visual brilliance and safeguard diamond investment value.',
    categoryAr: 'علوم الأحجار الكريمة',
    categoryEn: 'Gemological Science',
    publishDate: '2026-09-15',
    readTimeAr: '9 دقائق قراءة',
    readTimeEn: '9 min read',
    featuredImage: ringImg,
    author: {
      nameAr: 'د. كريم الهاشمي',
      nameEn: 'Dr. Karim Al-Hashemi',
      titleAr: 'خبير تقييم أول ومحاضر معهد GIA الدولي',
      titleEn: 'Senior Gemologist & GIA Graduate Appraiser',
      credentialsAr: 'خريج معهد الأحجار الكريمة الأمريكي (GIA)، 18 عاماً من الخبرة في فحص الألماس الخام والمصقول بمختبرات أنتويرب ودبي.',
      credentialsEn: 'GIA Graduate Gemologist (GG), 18 years evaluating rough and polished diamonds across Antwerp and Dubai trade hubs.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'مقدمة: ما هي فلسفة معايير 4Cs؟',
      '1. القطع (Cut): الروح الحقيقية لبريق الألماس',
      '2. النقاء والصفاء (Clarity): التدرج من FL إلى I3',
      '3. اللون (Color): سحر انعدام اللون من D إلى Z',
      '4. الوزن بالقيراط (Carat Weight): العلاقة الرياضية بالحجم والسعر',
      'مقارنة مخبرية: الفلورسنس (Fluorescence) وتأثيره الحقيقي',
      'خلاصة التوصيات للمشتري الذكي وتجنب أخطاء التقييم',
    ],
    tableOfContentsEn: [
      'Introduction: The Philosophy of the 4Cs System',
      '1. Cut Quality: The Ultimate Engine of Fire & Scintillation',
      '2. Clarity Grading: The Spectrum from Flawless to Included',
      '3. Color Grading: The Elegance of D to Z Whiteness',
      '4. Carat Weight: Exponential Pricing & Visual Geometry',
      'Laboratory Insights: UV Fluorescence Nuances',
      'Executive Summary & Prudent Buying Checklist',
    ],
    sections: [
      {
        headingAr: 'مقدمة: ما هي فلسفة معايير 4Cs التأسيسية؟',
        headingEn: 'Introduction: The Philosophy of the 4Cs System',
        contentAr: `في أواسط القرن العشرين، أحدث معهد الأحجار الكريمة الأمريكي (GIA) ثورة في تجارة المجوهرات العالمية بابتكار نظام موحد لتقييم الألماس عُرف عالمياً باسم معايير 4Cs: القطع (Cut)، النقاء (Clarity)، اللون (Color)، والوزن بالقيراط (Carat Weight). قبل اعتماد هذا المقياس المعياري، كانت المصطلحات خاضعة للتقدير الشخصي والتخمين التجاري غير المنضبط، مما كان يعرض المشترين للمبالغة في الأسعار والغموض في درجات الجودة.

اليوم، لم يعد شراء الألماس مجرد اقتناء حلي للزينة، بل يمثل في جوهره استثماراً مالياً عائلياً وقراراً عاطفياً مصيرياً يحفظ القيمة للأجيال القادمة. فهم هذه المعايير الأربعة يمكّن المشتري الواعي من توجيه ميزانيته بذكاء فائق نحو الخصائص التي تمنح الألماسة أقصى درجات الإشراق المرئي (Light Performance)، بدلاً من دفع مبالغ إضافية على خصائص مخبرية مجهرية لا يمكن للعين البشرية المجردة تمييزها.`,
        contentEn: `In the mid-20th century, the Gemological Institute of America (GIA) revolutionized the fine jewelry trade by developing the universal 4Cs benchmark: Cut, Clarity, Color, and Carat Weight. Prior to this rigorous scientific scale, diamond transactions relied on subjective merchant terms, causing significant discrepancies in retail evaluations.

Today, acquiring high jewelry is both a romantic milestone and an enduring wealth asset. Understanding the subtle interplays among the 4Cs allows discerning connoisseurs to allocate capital toward visual light performance rather than paying high premiums for microscopic grades imperceptible to the naked eye.`,
      },
      {
        headingAr: '1. جودة القطع (Cut): الروح الحقيقية لبريق الألماس ونيرانه',
        headingEn: '1. Cut Quality: The Ultimate Engine of Fire & Scintillation',
        contentAr: `يُجمع كافة علماء الأحجار الكريمة المستقلين على أن جودة القطع (Cut) هي المعيار الأكثر أهمية على الإطلاق بين الأربعة. فالقطع ليس مجرد شكل الحجر (سواء كان دائرياً أو كمثرياً أو زمردياً)، بل هو الهندسة البصرية الدقيقة وتناسب زوايا الأوجه (Facets) ونسب عمق وطاولة الحجر.

عندما تُقطع الألماسة بنسب مثالية (Ideal or Excellent Cut)، يدخل شعاع الضوء من سطح الطاولة وينكسر عبر الأوجه الجانبية الداخلية ليرتد مباشرة إلى عين الناظر ككتلة متفجرة من البريق الأبيض (Brilliance) والوميض الملون الطيفي (Fire) وتلألؤ الحركات الديناميكية (Scintillation). على العكس تماماً، إذا كان القطع ضحلاً للغاية (Shallow Cut) أو عميقاً بشكل مفرط (Deep Cut)، يتسرب الضوء من قاع الألماسة وجوانبها لتظهر مظلمة وخامدة وتفقد قيمتها البصرية مهما كانت درجة نقائها أو لونها.`,
        contentEn: `Independent gemological consensus confirms that Cut quality is undeniably the single most pivotal factor of the 4Cs. Cut does not simply denote the outline geometry (such as pear, emerald, or oval), but rather the exacting mathematical proportions, angles, depth ratios, and mirror symmetry of every polished facet.

An Ideal or Excellent cut directs incoming photons through internal internal total reflection, projecting dynamic white brilliance, prismatic rainbow fire, and rhythmic scintillation upward. Conversely, poorly proportioned shallow or deep cuts bleed light through the pavilion, leaving the gem lifeless regardless of clarity or color purity.`,
      },
      {
        headingAr: '2. النقاء والصفاء (Clarity): التدرج من FL إلى I3',
        headingEn: '2. Clarity Grading: The Spectrum from Flawless to Included',
        contentAr: `تشكل الألماس في باطن الأرض تحت ضغط وحرارة مهولين عبر ملايين السنين، ولهذا السبب فإن معظم الألماسات الطبيعية تحتوي على بصمات جيولوجية داخلية تسمى شوائب (Inclusions) أو عيوب سطحية (Blemishes).

يبدأ مقياس النقاء بدرجة الخلو المطلق من الشوائب (Flawless - FL) ونادر للغاية، ثم الشوائب المجهرية الدقيقة جداً (VVS1 و VVS2)، تليها درجة الشوائب الخفيفة جداً (VS1 و VS2)، ثم الشوائب الخفيفة (SI1 و SI2)، وأخيراً الأحجار التي تحتوي على شوائب واضحة (I1 إلى I3).
نصيحتنا الذهبية للعملاء: الألماسات في فئة (VS1 إلى VS2) توفر التوازن العبقري؛ فهي تبدو نقية تماماً للعين المجردة (Eye-Clean) وتوفر توفيراً مالياً يصل إلى 35% مقارنة بأحجار VVS دون أي تضحية بالجمال البصري الظاهر.`,
        contentEn: `Formed within the earth's mantle under staggering thermal pressures over eons, almost all natural diamonds bear microscopic geological fingerprints termed inclusions and external blemishes.

The GIA clarity grade ranges from Flawless (FL)—extraordinarily scarce—down through VVS1/VVS2 (Very, Very Slightly Included), VS1/VS2 (Very Slightly Included), SI1/SI2, and Included (I1-I3). Our seasoned buying principle advises targeting the VS1 to VS2 sweet spot: these specimens are 100% eye-clean, offering substantial value efficiency of up to 35% over Flawless grades with identical perceived radiance.`,
      },
      {
        headingAr: '3. اللون (Color): سحر انعدام اللون من D إلى Z',
        headingEn: '3. Color Grading: The Elegance of D to Z Whiteness',
        contentAr: `في عالم الألماس الأبيض الكلاسيكي، تعني القيمة الأسمى غياب اللون التام كالقطرة المائية النقية تماماً. يمتد مقياس GIA من الحرف D (عديم اللون تماماً - وهو الأندر والأغلى) وينحدر تدريجياً حتى الحرف Z الذي يبدأ فيه اللون الأصفر الخفيف أو البني بالظهور.

- الفئة عديمة اللون تماماً (Colorless): تشمل الدرجات D و E و F.
- الفئة شبه عديمة اللون (Near Colorless): تشمل الدرجات G و H و I و J.
في المجوهرات المرصعة بالذهب الأبيض أو البلاتين 950، نوصي دائماً باختيار أحجار بين D و F للحفاظ على النقاء الثلجي. أما في تصاميم الذهب الأصفر أو الوردي عيار 18k و 21k، فإن الحجر بدرجة G أو H يمتزج بروعة دافئة ويوفر تكلفة ذكية دون أي اصفرار ظاهر.`,
        contentEn: `In traditional white diamonds, supreme prestige corresponds to the total absence of structural tint. The scale benchmarks from grade D (absolutely colorless and highest value) down to grade Z (noticeable yellow/brown tint).

- Colorless tier: D, E, F.
- Near Colorless tier: G, H, I, J.
When set into platinum 950 or 18k white gold, colors D through F maintain an icy, crystalline fire. For yellow and rose gold mountings, G and H grades harmonize naturally with the metal's warm undertones, yielding an immaculate optical presentation.`,
      },
      {
        headingAr: '4. الوزن بالقيراط والشهادات المخبرية المعتمدة',
        headingEn: '4. Carat Weight & Independent Laboratory Certification',
        contentAr: `يعادل القيراط الواحد (1ct) بدقة 0.20 جرام. ترتفع أسعار الألماس تصاعدياً بشكل أسي كلما زاد القيراط، لأن العثور على بلورات ألماس خام ضخمة ونقية في الطبيعة أمر نادر للغاية. على سبيل المثال، ألماسة واحدة بوزن 2.0 قيراط تكلف أضعاف سعر ألماستين بوزن 1.0 قيراط بنفس الجودة.

التحذير الأهم لكل مقتنٍ: لا تشترِ أبداً ألماساً دون شهادة فحص مخبرية مستقلة من مؤسسة معترف بها دولياً مثل معهد GIA الأمريكي أو IGI أو HRD أنتويرب. تأكد من تطابق الرقم التسلسلي المحفور بالليزر على حافة الألماسة (Girdle) مع التقرير المخبري المسجل عبر الإنترنت، وتجنب الشهادات التقديرية الصادرة عن المتاجر الفردية التي تفتقر للاستقلالية والحياد العلمي.`,
        contentEn: `One metric carat equals precisely 0.20 grams. Diamond valuations appreciate exponentially per carat weight because extracting large, clean rough crystals from volcanic kimberlite pipes is geologically rare. A single 2.00-carat specimen will command a multiple of two individual 1.00-carat stones of equivalent grade.

The cardinal rule of high jewelry acquisition: never finalize a significant diamond purchase without an independent grading dossier from premier institutions—principally GIA, IGI, or HRD Antwerp. Verify the microscopic laser inscription on the diamond girdle against the official registry database before purchase.`,
      },
    ],
  },
  {
    id: 'authenticating-925-sterling-silver',
    slug: 'authenticating-925-sterling-silver-vs-counterfeits',
    titleAr: 'دليل التمييز المخبري والعملي بين الفضة الأصلية عيار 925 والقطع المغشوشة',
    titleEn: 'How to Authenticate Genuine 925 Sterling Silver vs Counterfeits: Laboratory & At-Home Methods',
    summaryAr: 'طرق علمية واختبارات فيزيائية دقيقة لكشف الفضة الأصلية والتأكد من نقاوتها 92.5% وحمايتك من النحاس المطلي والسبائك المقلدة المنتشرة في الأسواق.',
    summaryEn: 'Practical metallurgy guide detailing physical, acoustic, and chemical tests to identify genuine 92.5% sterling silver and avoid counterfeit coated base metals.',
    categoryAr: 'المعادن الثمينة والدمغات',
    categoryEn: 'Precious Metals & Hallmarking',
    publishDate: '2026-09-22',
    readTimeAr: '8 دقائق قراءة',
    readTimeEn: '8 min read',
    featuredImage: pearlImg,
    author: {
      nameAr: 'المهندسة نورة المنصور',
      nameEn: 'Eng. Noura Al-Mansoor',
      titleAr: 'كبيرة مهندسي المعادن وفاحصة دمغات معتمدة',
      titleEn: 'Senior Metallurgist & Certified Assay Specialist',
      credentialsAr: 'ماجستير في هندسة المعادن الثمينة، خبيرة معتمدة في تقنيات مطيافية الأشعة السينية (XRF) وفحص السبائك الخليجية والأوروبية.',
      credentialsEn: 'M.Sc. in Metallurgy, certified specialist in X-ray Fluorescence (XRF) spectrometry and precious metal assay protocols.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'ما هي الفضة الإسترلينية 925 ولماذا لا تُصاغ نقية 100%؟',
      '1. فحص الدمغة الرسمية والرموز الدولية المعترف بها',
      '2. اختبار المغناطيس النيوديميومي الفيزيائي',
      '3. اختبار الموصلية الحرارية العالية (مكعب الثلج)',
      '4. اختبار الرنين الصوتي النغمي (Acoustic Ping Test)',
      'طرق التزييف المعاصرة وكيف يكشفها جهاز XRF المخبري',
      'نصائح التخزين السليم لمنع أكسدة الفضة وتشوهها',
    ],
    tableOfContentsEn: [
      'Understanding 925 Sterling Silver: Metallurgy Foundations',
      '1. Official Hallmarks & Legal Assay Stamps',
      '2. The Neodymium Magnet Slide Test',
      '3. Thermal Conductivity Benchmark (The Ice Cube Test)',
      '4. Acoustic Resonance & Harmonic Ringing',
      'Modern Counterfeit Tactics & Laboratory XRF Spectrometry',
      'Preservation Protocol to Inhibit Surface Oxidation',
    ],
    sections: [
      {
        headingAr: 'ما هي الفضة الإسترلينية 925 ولماذا لا تُصاغ نقية 100%؟',
        headingEn: 'Understanding 925 Sterling Silver: Metallurgy Foundations',
        contentAr: `الفضة الخالصة عيار 999 (Pure Silver) هي معدن شديد الليونة في حالته الخام، مما يجعله غير مناسب تماماً لصناعة الحلي اليومية أو الخواتم أو الأساور المتينة؛ إذ تتعرض للالتواء والخدش بمجرد الضغط الخفيف بالأصابع. لهذا السبب، ابتكر الصاغة البريطانيون في القرن الثاني عشر سبيكة الفضة الإسترلينية المعيارية.

تتكون الفضة الإسترلينية 925 من 92.5% من الفضة النقية الخالصة، مضافاً إليها 7.5% من معادن تقوية أخرى (غالباً النحاس النقي أو الجرمانيوم). تمنح هذه النسبة الدقيقة القطعة صلابة هيكلية فائقة مع الاحتفاظ بالبريق الصدفي الأخاذ وقابلية الصقل المجهري التي تشتهر بها الفضة الفاخرة.`,
        contentEn: `Pure fine silver (999 purity) is exceptionally malleable and prone to rapid deformation, rendering it unsuitable for durable fine jewelry. To overcome this structural limitation, European master silversmiths engineered the sterling silver alloy standard.

Official 925 sterling silver contains exactly 92.5% pure silver bound with 7.5% hardening alloys (traditionally copper or germanium). This metallurgic ratio produces elevated tensile strength while preserving pure silver's signature luminous luster and micro-polish reflection.`,
      },
      {
        headingAr: '1. فحص الدمغة الرسمية (Hallmark) والرموز المعتمدة قانونياً',
        headingEn: '1. Official Hallmarks & Legal Assay Stamps',
        contentAr: `الخطوة الأولى والأكثر بديهية هي فحص الدمغة المحفورة في الجزء الداخلي أو قفل القطعة بواسطة عدسة تكبير صائغ (Loupe 10x). الدمغات الأصلية الشائعة هي:
- الرقم 925 أو S925 أو Sterling.
- علامات مكاتب الدمغ البريطانية الشهيرة مثل رمز رأس النمر (London Assay Office) أو رمز المرساة (Birmingham).
- دمغات وزارات التجارة الخليجية المعتمدة رسمياً.

احذر: الدمغة وحدها لا تضمن الأصالة 100%، فالعديد من الورش المقلدة تحفر 925 على سبائك من النحاس الأصفر أو الزنك المطلي بطبقة ميكرونية خفيفة من الفضة الزائفة. لذلك، يلزم إجراء الاختبارات الفيزيائية المكملة.`,
        contentEn: `The baseline evaluation involves inspecting the microscopic hallmark using a 10x jeweler's loupe. Authentic markings include 925, S925, or Sterling. Renowned assay marks also include the London Assay Leopard head or Birmingham anchor.

Crucial caution: while essential, a hallmark alone does not guarantee authenticity, as counterfeiters frequently stamp "925" on copper or zinc cores electroplated with thin flash silver. Physical verification tests are indispensable.`,
      },
      {
        headingAr: '2. الاختبارات الفيزيائية المباشرة: المغناطيس ومكعب الثلج',
        headingEn: '2. Physical Verification: Magnet & Thermal Conductivity',
        contentAr: `تمتلك الفضة خصائص فيزيائية فريدة تجعل تزييفها مهمة مستحيلة عند إجراء اختبارين بسيطين:

1. اختبار المغناطيس: الفضة معدن ديامغناطيسي (Diamagnetic)، أي أنه لا ينجذب مطلقاً للمغناطيس، بل يتنافر معه بضعف شديد. إذا قرّبت مغناطيس نيوديميوم قوي والتصقت به القطعة، فهي حتماً تحتوي على الحديد أو النيكل والصلب وهي مزيفة بالكامل.

2. اختبار مكعب الثلج (Thermal Conductivity): تمتلك الفضة أعلى موصلية حرارية بين كافة المعادن المعروفة على وجه الأرض، متفوقة حتى على النحاس والذهب. ضع مكعب ثلج صغير فوق قطعة الفضة في درجة حرارة الغرفة؛ إذا كانت أصلية، ستشاهد الثلج يذوب بسرعة خارقة ومذهلة وكأنك وضعته فوق صفيحة ساخنة، وستبرد قطعة الفضة على الفور بين أصابعك.`,
        contentEn: `Silver possesses remarkable elemental properties enabling definitive verification:

1. Diamagnetic Magnet Test: Silver is non-magnetic and weakly repels magnetic fields. Using a high-powered neodymium magnet, genuine silver exhibits zero attraction. If the item snaps to the magnet, it contains iron or nickel cores and is conclusively fraudulent.

2. Thermal Conductivity Ice Test: Silver boasts the highest thermal conductivity of any metal on Earth. Place a small ice cube directly onto the silver surface; genuine sterling silver causes the ice to melt instantaneously as if resting on a conductive stove top, while transferring immediate chill to the touch.`,
      },
      {
        headingAr: '3. الفحص المخبري بتقنية مطيافية الأشعة السينية (XRF)',
        headingEn: '3. Advanced Laboratory X-Ray Fluorescence (XRF) Testing',
        contentAr: `في بوتيك مجوهرات النخبة الملكية، تخضع كافة منتجاتنا الفضية والذهبية للفحص غير الإتلافي بواسطة أجهزة مطيافية الأشعة السينية (XRF Spectrometer). يقوم هذا الجهاز المتقدم بتسليط حزمة فوتونية على سطح القطعة وتحليل الطيف الطاقي المنبعث من ذرات المعدن، ليقدم تقريراً رقمياً فائق الدقة يوضح نسبة الفضة إلى منزلتين عشريتين (مثال: 92.58% Ag)، مع كشف أي أثر للمعادن المحظورة مثل الرصاص أو النيكل المسبب للحساسية الجلدية.`,
        contentEn: `At Royal Elite Boutique, our pieces undergo non-destructive inspection via laboratory-grade X-Ray Fluorescence (XRF) spectrometers. This technology analyzes elemental atomic emissions to output certified purity readings to two decimal places, while verifying zero trace of irritating allergens such as lead or nickel.`,
      },
    ],
  },
  {
    id: 'luxury-jewelry-care-preservation',
    slug: 'luxury-jewelry-care-gemstone-preservation-guide',
    titleAr: 'أسرار الصياغة الفاخرة والعناية بالمجوهرات والأحجار الكريمة وتلميعها في المنزل',
    titleEn: 'High Jewelry Care & Gemstone Preservation: Professional Cleaning & Home Maintenance Secrets',
    summaryAr: 'دليل شامل للحفاظ على بريق الذهب 18k و 21k، وتنظيف الألماس بأمان، ورعاية الزمرد واللؤلؤ الطبيعي الحساس للمواد الكيميائية لمنع التلف وتوريث القطع للأجيال.',
    summaryEn: 'An exhaustive preservation manual covering ultrasonic precautions, gold polishing protocols, and chemical hazards for delicate pearls and emeralds.',
    categoryAr: 'العناية بالمقتنيات وصيانتها',
    categoryEn: 'Care & Restoration',
    publishDate: '2026-09-28',
    readTimeAr: '7 دقائق قراءة',
    readTimeEn: '7 min read',
    featuredImage: heroImg,
    author: {
      nameAr: 'الأستاذ فيصل السديري',
      nameEn: 'Master Artisan Faisal Al-Sudairi',
      titleAr: 'رئيس ورشة الصياغة والترميم الملكي',
      titleEn: 'Head of Royal Restoration & Master Jeweler',
      credentialsAr: 'خبير صياغة حاصل على وسام الحرفية الذهبية، 24 عاماً في ترميم المجوهرات الملكية والقطع التراثية النادرة.',
      credentialsEn: 'Master Goldsmith & Royal Conservator with 24 years restoring sovereign jewelry and private collection heirlooms.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'القاعدة الذهبية: المجوهرات هي آخر ما ترتديه وأول ما تخلعه',
      '1. كيفية تنظيف الألماس بأمان واستعادة لمعانه الأسطوري',
      '2. تحذيرات بالغة الأهمية: الزمرد، اللؤلؤ الطبيعي، والأوبال',
      '3. أجهزة الموجات فوق الصوتية (Ultrasonic): متى تكون خطيرة؟',
      '4. الطريقة الصحيحة لتلميع الذهب والفضة دون خدش السطح',
      'إرشادات التخزين الاحترافي وصناديق الحفظ المبطنة بالمخمل',
    ],
    tableOfContentsEn: [
      'The Golden Rule: Last Thing to Put On, First to Take Off',
      '1. Safe Diamond Cleansing & Restoring Prismatic Sparkle',
      '2. Critical Warnings for Organic Pearls, Emeralds & Opals',
      '3. Ultrasonic Cleaning: When It Harms Precious Gems',
      '4. Safe Polishing of 18k/21k Gold Without Micro-Abrasions',
      'Velvet-Lined Heirloom Storage Best Practices',
    ],
    sections: [
      {
        headingAr: 'القاعدة الذهبية: المجوهرات آخر ما ترتديه وأول ما تخلعه',
        headingEn: 'The Golden Rule: Last Thing to Put On, First to Take Off',
        contentAr: `المجوهرات الراقية ليست مجرد معادن صلبة بل كائنات جمالية تتأثر بالبيئة الكيميائية المحيطة بها. القاعدة الاحترافية الأولى التي يوصي بها كبار صاغة العالم هي: "المجوهرات يجب أن تكون آخر شيء ترتديه عند الاستعداد للخروج، وأول شيء تخلعه عند العودة إلى المنزل".

العطور، ورذاذ الشعر (Hair Spray)، وكريمات الترطيب، والمطهرات الكحولية تحتوي على مركبات كيميائية متطايرة وزيوت تترسب خلف مخالب الترصيع (Prongs) وتشكل طبقة لزجة تعتّم لمعان الألماس وتؤذي أسطح الأحجار العضوية كالمرجان واللؤلؤ. تجنب أيضاً ارتداء المجوهرات أثناء ممارسة الرياضة أو السباحة في المياه المعالجة بالكلور.`,
        contentEn: `High jewelry comprises living works of metallurgical art vulnerable to modern cosmetic chemistry. The primary golden rule across global ateliers remains: fine jewelry should always be the absolute last element you put on, and the very first you take off.

Fine mists from fragrances, hair sprays, facial cosmetics, and sanitizers leave oily films beneath delicate claws, dulling refraction and permanently scorching organic gems like natural pearls. Never wear precious pieces in chlorinated pools or during intense workouts.`,
      },
      {
        headingAr: '1. تنظيف الألماس والذهب 18k و 21k المنزلي الآمن',
        headingEn: '1. Safe Diamond Cleansing & Restoring Prismatic Sparkle',
        contentAr: `لتنظيف خواتم السوليتير وأساور التنس المصاغة من الذهب الأبيض أو الأصفر والألماس:
1. املأ وعاءً صغيراً بماء فاتر وأضف قطرات قليلة من صابون الأطباق المعتدل الخالي من العطور والمواد الكيميائية القاسية.
2. انقع القطعة لمدة 15 إلى 20 دقيقة لتفكيك تراكمات الزيوت ومستحضرات التجميل.
3. استخدم فرشاة أسنان فائقة النعومة مخصصة للأطفال (Extra Soft Bristles) لتدليك أسفل الحجر وخلف الشناكل بلطف متناهٍ.
4. اشطف القطعة جيداً بماء فاتر جارٍ (مع التأكد من إغلاق سدادة الحوض تماماً منعاً لأي انزلاق طارئ).
5. جفف القطعة بمنشفة مايكروفايبر ناعمة خالية من الوبر. ستتفاجأ بعودة البريق الناري وكأنها خرجت للتو من ورشة الصياغة.`,
        contentEn: `To revive brilliant-cut solitaire rings and diamond tennis bracelets:
1. Prepare a small ceramic bowl of warm water with a few drops of mild, fragrance-free dish soap.
2. Soak the item for 15-20 minutes to dissolve cosmetic residues.
3. Gently scrub underneath the pavilion and basket setting using a dedicated extra-soft baby toothbrush.
4. Rinse thoroughly under warm running water (ensuring the drain is securely covered).
5. Pat dry with a lint-free microfiber polishing cloth. Diamond brilliance will be promptly restored.`,
      },
      {
        headingAr: '2. تحذيرات صارمة: الزمرد، اللؤلؤ الطبيعي، والأحجار المسامية',
        headingEn: '2. Critical Warnings for Organic Pearls, Emeralds & Opals',
        contentAr: `ليست كل الأحجار الكريمة تمتلك نفس صلابة الألماس (10 على مقياس موس):
- الزمرد الطبيعي (Emerald): يحتوي دائماً على شروخ طبيعية دقيقة (Jardin) تُعالج بالزيوت الطبيعية كالخشب. يحظر قطعياً تعريض الزمرد للماء الساخن أو الصابون القوي أو أجهزة البخار أو الموجات الصوتية، لأن ذلك يزيل الزيت الداخلي ويجعل الحجر باهتاً وهشاً.
- اللؤلؤ الطبيعي (Pearls): حجر عضوي ذو مسام رقيقة مغطاة بطبقة من النادر (Nacre). يُنظف فقط بمسحه بقطعة قماش ناعمة مبللة بقليل من الماء المقطر دون أي صابون أو منظفات على الإطلاق.`,
        contentEn: `Gemstones exhibit distinct chemical compositions:
- Colombian Emeralds: Emeralds feature internal fissures ("jardin") traditionally conditioned with cedarwood oil. Never expose emeralds to hot water, ultrasonic baths, or industrial steam, which strip essential internal oils.
- Natural Pearls: Organic gems composed of aragonite platelets bound by conchiolin. Clean pearls strictly by wiping with a clean microfiber cloth dampened with pure distilled water—never detergent or alcohol.`,
      },
    ],
  },
  {
    id: 'gold-bullion-sovereign-investment',
    slug: 'gold-bullion-sovereign-jewelry-investment-strategy',
    titleAr: 'الاستثمار في سبائك الذهب والمجوهرات الملكية: دليل التحوط المالي وبناء الثروة للأجيال',
    titleEn: 'Investing in Gold Bullion & Sovereign High Jewelry: Generational Wealth & Hedging Guide',
    summaryAr: 'دراسة مالية واستثمارية توضح الفارق الجوهري بين شراء السبائك الذهبية 24k للاستثمار الصافي، واقتناء المجوهرات المشغولة، وحساب تكلفة المصنعية وموازنة المحفظة.',
    summaryEn: 'An economic analysis outlining the strategic distinctions between pure 24k LBMA bullion bars and signed wearable high jewelry assets in diversified portfolios.',
    categoryAr: 'الاستثمار والاقتصاد الذهبي',
    categoryEn: 'Precious Metals & Wealth',
    publishDate: '2026-10-02',
    readTimeAr: '10 دقائق قراءة',
    readTimeEn: '10 min read',
    featuredImage: bullionImg,
    author: {
      nameAr: 'المستشار طارق الشمري',
      nameEn: 'Tariq Al-Shammari, CFA',
      titleAr: 'مستشار إدارة الثروات والسلع الثمينة',
      titleEn: 'Wealth Advisor & Precious Commodities Strategist',
      credentialsAr: 'محلل مالي معتمد (CFA)، استشاري استثمار وتداول المعادن الثمينة لعدة مكاتب عائلية وصناديق تحوط خليجية ودولية.',
      credentialsEn: 'Chartered Financial Analyst (CFA) specializing in sovereign wealth commodity hedging and heirloom allocations.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'لماذا يظل الذهب الملاذ الآمن الأول عبر آلاف السنين؟',
      '1. سبائك الذهب 24k (999.9) مقابل المجوهرات المشغولة 21k و 18k',
      '2. فهم وحساب تكلفة "المصنعية" (Craftsmanship Premium)',
      '3. اعتماد مصافي LBMA والعبوات المشفرة ضد التزييف',
      '4. توزيع الذهب كنسبة مئوية في المحفظة الاستثمارية الحديثة',
      'كيف تشتري وتخزن سبائك الذهب بأمان تام؟',
    ],
    tableOfContentsEn: [
      'The Timeless Sovereignty of Gold as Wealth Anchor',
      '1. 24k (999.9) Minted Bullion vs 21k/18k Wearable High Jewelry',
      '2. Decoding Craftsmanship Premiums & Fair Margins',
      '3. LBMA Refinery Accreditation & Tamper-Evident Security',
      '4. Prudent Portfolio Allocation Guidelines (5-15% Rule)',
      'Safe Custody: Armored Vaults vs Certified Safety Boxes',
    ],
    sections: [
      {
        headingAr: 'لماذا يظل الذهب الملاذ الآمن الأول عبر التاريخ الإنساني؟',
        headingEn: 'The Timeless Sovereignty of Gold as Wealth Anchor',
        contentAr: `على مدار أكثر من خمسة آلاف عام من الحضارة الإنسانية، شهد العالم انهيار مئات العملات الورقية وسقوط إمبراطوريات مالية، بينما احتفظ الذهب بقدرته الشرائية بصورة شبه ثابتة. الذهب ليس مجرد سلعة متداولة، بل هو العملة السيادية الوحيدة التي لا تمثل التزاماً مالياً على أي جهة أو حكومة، ولا يمكن طباعتها بقرارات سياسية أو تخفيض قيمتها بالتضخم النقدي غير المدروس.

في أوقات التوترات الجيوسياسية وتذبذب أسواق الأسهم وارتفاع معدلات التضخم العالمي، يبرز الذهب كصمام أمان يحمي المدخرات العائلية ويمنح حامله سيولة فورية مقبولة في أي بقعة من العالم على مدار الساعة.`,
        contentEn: `Across five millennia of human economic history, thousands of fiat currencies have collapsed while gold has preserved constant real purchasing power. Unlike sovereign paper notes, physical gold carries zero counterparty default risk and cannot be inflated by central bank printing presses.

During episodes of geopolitical turbulence, equity volatilities, and stubborn currency depreciation, gold serves as the consummate non-correlated anchor, offering instantaneous global liquidity across every major financial hub.`,
      },
      {
        headingAr: '1. سبائك الذهب 24k (999.9) مقابل المجوهرات المشغولة: أيهما تختار؟',
        headingEn: '1. 24k (999.9) Minted Bullion vs 21k/18k Wearable High Jewelry',
        contentAr: `يخلط الكثير من الراغبين في الادخار بين شراء المجوهرات المشغولة والسبائك الاستثمارية:

- سبائك الذهب عيار 24k بنقاء 999.9: هي الخيار المثالي والمطلق للاستثمار المالي الصافي. تأتي بهامش مصنعية منخفض للغاية (يتراوح بين 1.5% إلى 3% فقط)، وتكون معفاة من ضريبة القيمة المضافة في أغلب الدول، وتباع بسعر الذهب الصافي اللحظي في البورصة دون أي خصومات عند إعادة البيع.

- المجوهرات المشغولة (عيار 18k و 21k): تشتمل على تكلفة صياغة وفن وترصيع بالأحجار الكريمة، وتناسب من يرغب في الجمع بين متعة التزين والوجاهة الاجتماعية مع الاحتفاظ بقيمة أساسية في المعدن الثمين. عند إعادة بيع المجوهرات، يسترد المشتري قيمة وزن الذهب فقط دون تكلفة الصياغة، إلا في حالات القطع النادرة الموقعة من دور عالمية كبرى التي تحتفظ بقيمتها كتحف فنية.`,
        contentEn: `Investors must delineate between investment bullion bars and ornamental fine jewelry:

- 24k Minted Bullion Bars (999.9 Purity): The indisputable vehicle for pure capital preservation. Features negligible manufacturing markups (typically 1.5% to 3%), frequently tax-exempt, and liquidated strictly at live market spot rates without craft deductions.

- 18k/21k Finished Jewelry: Incorporates master goldsmithing, stone setting, and artistic design premiums. Best suited for individuals seeking aesthetic enjoyment alongside gold value. Upon resale, local jewelers typically appraise the net raw weight unless the piece carries signed provenance from iconic maisons.`,
      },
      {
        headingAr: '2. فهم وحساب تكلفة "المصنعية" (Craftsmanship Premium)',
        headingEn: '2. Decoding Craftsmanship Premiums & Fair Margins',
        contentAr: `المصنعية هي الأجر الذي يتقاضاه الصائغ مقابل تحويل الذهب الخام إلى تحفة قابلة للارتداء. في المجوهرات اليومية الإيطالية أو الخليجية عيار 21k، تتراوح المصنعية العادلة بين 25 إلى 60 ريالاً سعودياً للجرام، بينما ترتفع في القطع المرصعة يدوياً بألماس دقيق لتصل إلى 150 ريالاً أو أكثر للجرام بحسب درجة التعقيد.
عند شراء السبائك الكبيرة (مثل سبيكة 100 جرام أو 1 كيلوجرام)، تنخفض المصنعية إلى أدنى مستوياتها، مما يجعل السبائك الأكبر وزناً أكثر جدوى استثمارياً للمستثمر طويل الأجل مقارنة بالسبائك الصغيرة زنة جرام واحد.`,
        contentEn: `The craftsmanship premium (المصنعية) compensates the jeweler for metallurgy refinement, diamond setting, and artistic execution. In standard 21k pieces, craftsmanship ranges reasonably from 25 to 60 SAR per gram, scaling higher for intricate micro-pavé pieces.

When acquiring investment bullion, larger weights (100g to 1kg) carry drastically reduced fabrication overhead per gram compared to tiny 1g minted chips, yielding superior net yields for long-term compounders.`,
      },
      {
        headingAr: '3. اعتماد مصافي LBMA ونسبة التخصيص في المحفظة الاستثمارية',
        headingEn: '3. LBMA Refinery Accreditation & Portfolio Allocation Guidelines',
        contentAr: `احرص دائماً على أن تكون سبائك الذهب مدموغة ومعتمدة من مصافٍ مدرجة على قائمة التسليم الجيد لجمعية سوق لندن للسبائك (LBMA Good Delivery List) مثل فالكامبي (Valcambi)، بامب (PAMP)، أو المصافي الوطنية الكبرى المعتمدة. تأتي هذه السبائك في عبوات أمنية CertiPack مغلقة تحمل رقماً تسلسلياً فريداً متطابقاً مع الشهادة الورقية المشفرة.

يوصي معظم المستشارين الماليين بتخصيص ما بين 5% إلى 15% من إجمالي المحفظة الاستثمارية في الذهب الطبيعي كحاجز وقائي دائم ضد الأزمات الاقتصادية وتراجع العملات، لضمان استقرار الثروة ونقلها للأجيال القادمة بأمان تام.`,
        contentEn: `Ensure that all bullion purchases feature accreditation from the London Bullion Market Association (LBMA Good Delivery List), such as Valcambi, PAMP Suisse, or government sovereign mints. These bars are sealed inside tamper-evident CertiPack packaging featuring serialized laser security watermarks.

Premier wealth advisors consistently advise maintaining 5% to 15% of aggregate net worth allocated to physical precious metals as an irrevocable catastrophe hedge and intergenerational wealth preservation baseline.`,
      },
    ],
  },
];
