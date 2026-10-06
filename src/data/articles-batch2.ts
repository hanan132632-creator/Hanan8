import { Article } from '../types.ts';
import heroImg from '../assets/images/hero_luxury_jewelry_1791298014265.jpg';
import ringImg from '../assets/images/product_solitaire_ring_1791298025877.jpg';
import emeraldImg from '../assets/images/product_emerald_set_1791298035679.jpg';
import pearlImg from '../assets/images/product_pearl_bracelet_1791298046092.jpg';
import bullionImg from '../assets/images/gold_bullion_investment_1791298056029.jpg';

export const ARTICLES_BATCH_2: Article[] = [
  // 11. الياقوت الأزرق الملكي والياقوت الأحمر (عائلة الكوروندوم)
  {
    id: 'sapphire-ruby-corundum-guide',
    slug: 'sapphire-ruby-corundum-gemological-guide',
    titleAr: 'الياقوت الأزرق والأحمر الملكي: أسرار عائلة الكوروندوم، حرارة المعالجة، وشهادات المنشأ السيلاني والبورمي',
    titleEn: 'Royal Sapphires & Rubies: Corundum Gemology, Thermal Treatments, and Ceylon/Burma Provenance',
    summaryAr: 'دليل جيولوجي استثماري يشرح الفروق بين الياقوت الطبيعي غير المعالج حرارياً (Unheated) والياقوت المعالج، وكيف تؤثر شوائب التيتانيوم والكروم على اللون الملكي وقيمة الميراث.',
    summaryEn: 'A masterclass on corundum mineralogy: differentiating untreated crystalline rubies and sapphires from heat-treated stones, analyzing pigeon blood hues, and Ceylon royal blue.',
    categoryAr: 'علوم الأحجار الكريمة',
    categoryEn: 'Gemological Science',
    publishDate: '2026-10-06',
    readTimeAr: '8 دقائق قراءة',
    readTimeEn: '8 min read',
    featuredImage: emeraldImg,
    author: {
      nameAr: 'د. ليلى البواردي',
      nameEn: 'Dr. Layla Al-Bawardi',
      titleAr: 'كبيرة باحثي المعادن والأحجار الملونة',
      titleEn: 'Lead Mineralogist & Colored Gemstones Specialist',
      credentialsAr: 'دكتوراه في الجيولوجيا التطبيقية من جامعة لندن، زميلة الرابطة البريطانية للأحجار الكريمة (FGA) مع 16 عاماً في تقييم مناجم سريلانكا ومدغشقر.',
      credentialsEn: 'Ph.D. in Applied Geology, Fellow of Gem-A (FGA), 16 years inspecting unheated corundum across Sri Lankan and Madagascar deposits.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'مقدمة: ما هو معدن الكوروندوم ولماذا يتمتع بصلادة 9 على مقياس موهس؟',
      '1. الياقوت الأحمر (Ruby) ولون دم الحمام (Pigeon Blood)',
      '2. الياقوت الأزرق الملكي (Royal Blue) والمنشأ السيلاني',
      '3. فحص المعالجة الحرارية: الفرق بين الطبيعي الخام والمعالج',
      '4. نصائح الشراء وفحص الشهادات المخبرية المعتمدة (SSEF وGübelin)',
    ],
    tableOfContentsEn: [
      'Introduction: Corundum Mineralogy & Mohs Hardness 9 Durability',
      '1. Natural Rubies & The Coveted Pigeon Blood Saturation',
      '2. Royal Blue Sapphires & Historical Ceylon Geographic Provenance',
      '3. Thermal Heating Diagnostics: Natural Untreated vs. Purity Enhancements',
      '4. Buying Protocol & Premier Gem Lab Certificates (SSEF & Gübelin)',
    ],
    sections: [
      {
        headingAr: 'مقدمة: معدن الكوروندوم وصلابته الاستثنائية',
        headingEn: 'Introduction: The Unyielding Structure of Corundum',
        contentAr: `ينتمي الياقوت الأزرق (Sapphire) والياقوت الأحمر (Ruby) إلى عائلة معدنية واحدة تُعرف علمياً باسم "الكوروندوم" (Corundum)، وهي أكسيد الألمنيوم المتبلور (Al2O3). يتميز الكوروندوم بصلابة استثنائية تحتل المرتبة التاسعة على مقياس موهس، ولا يسبقه في الصلابة الطبيعية سوى الألماس الذي يتربع على المرتبة العاشرة. هذا الثبات الفيزيائي يمنح قطع الياقوت قدرة فائقة على مقاومة الخدوش والاهتراء اليومي، مما يجعله الخيار التاريخي المفضل لتيجان وأطقم الملوك والأميرات على مر العصور.

عندما يكون أكسيد الألمنيوم نقياً تماماً، يكون الحجر شفافاً عديم اللون، ولكن عند تداخل ذرات الكروم المجهرية يتحول إلى اللون الأحمر القاني ليولد "الياقوت الأحمر"، بينما يؤدي اتحاد ذرات الحديد والتيتانيوم إلى تدرجات الأزرق المخملي الفاخر.`,
        contentEn: `Both sapphires and rubies belong to the identical mineral species known as corundum, a crystalline form of aluminum oxide (Al2O3). Ranking 9 on the Mohs scale of mineral hardness, corundum is surpassed only by diamond, granting it extraordinary resilience against daily abrasion and mechanical erosion. This makes it an ideal cornerstone for heirloom tiaras and bespoke engagement suites across centuries.

Pure corundum is completely colorless. Trace substitutions of chromium ions impart the fiery scarlet spectrum that defines ruby, whereas the coupled charge transfer between iron and titanium atoms creates the deep celestial blues of fine sapphire.`,
      },
      {
        headingAr: 'الياقوت الطبيعي غير المعالج (Unheated) مقابل المعالج حرارياً',
        headingEn: 'Thermal Enhancement vs. Untreated Geological Integrity',
        contentAr: `في سوق المجوهرات الدولية، يخضع أكثر من 95% من الياقوت المعروض للمعالجة الحرارية التقليدية (Heat Treatment) بهدف إذابة شوائب الروتايل وتحسين الإشراق اللوني. ورغم أن التسخين البسيط يعد ممارسة مقبولة تجارياً، إلا أن الياقوت الطبيعي الذي خرج من باطن الأرض بلونه الساحر ونقائه العالي دون أي تدخل حراري يمثل جوهرة نادرة تستحق أسعاراً استثنائية.

الياقوت غير المعالج (Certified Unheated) يحافظ على قيمته المالية والتاريخية ويتضاعف سعره في المزادات العالمية، ويتم إثبات ذلك عبر فحص المجهر الجيولوجي للكشف عن سلامة شوائب الروتايل الإبرية (Silk) التي تذوب عند تعرض الحجر لدرجات حرارة تفوق 1200 درجة مئوية.`,
        contentEn: `Over 95% of commercial corundum undergoes traditional heat treatment to dissolve microscopic rutile inclusions and optimize color hue. While simple heating is an accepted trade practice, completely untreated specimens discovered with virgin saturation command tremendous capital premiums.

Certified unheated corundum represents the supreme collector tier. Independent laboratories verify untreated status by examining intact rutile needles ('silk') under polarized magnification; high temperatures melt or distort these microscopic crystal needles, irreversibly altering the internal mineral architecture.`,
      },
    ],
  },

  // 12. البلاتين 950 مقابل الذهب الأبيض 18k
  {
    id: 'platinum-vs-white-gold',
    slug: 'platinum-950-vs-18k-white-gold-comparison-guide',
    titleAr: 'البلاتين 950 مقابل الذهب الأبيض 18k: الفروق الجوهرية في الكثافة، المتانة، وطبقة الروديوم',
    titleEn: 'Platinum 950 vs. 18k White Gold: Density, Durability, Patina, and Rhodium Plating Compared',
    summaryAr: 'مقارنة فنية مفصلة من ورش الصياغة الملكية تكشف أسرار اختيار المعدن الأبيض الأنسب لخواتم الخطوبة والأطقم الفاخرة بين نقاء البلاتين 95% وبريق الذهب الأبيض المطلي بالروديوم.',
    summaryEn: 'A master metallurgist breakdown between 95% pure Platinum and 18-karat alloyed White Gold, examining weight displacement, hypoallergenicity, prongs security, and maintenance lifecycles.',
    categoryAr: 'المعادن والدمغات 925',
    categoryEn: 'Assaying & Metallurgy',
    publishDate: '2026-10-06',
    readTimeAr: '6 دقائق قراءة',
    readTimeEn: '6 min read',
    featuredImage: ringImg,
    author: {
      nameAr: 'المهندس سليم القاضي',
      nameEn: 'Eng. Salim Al-Qadi',
      titleAr: 'رئيس وحدة المعادن الثمينة وسبائك الصياغة',
      titleEn: 'Senior Precious Metals & Metallurgy Metallurgist',
      credentialsAr: 'ماجستير في هندسة الفلزات وعلوم المواد، معتمد من هيئة المقاييس والمعايرة، 14 عاماً في تطوير سبائك الذهب عيار 18 والبلاتينوم المعالج.',
      credentialsEn: 'M.Sc. in Materials Science & Metallurgy, certified assay inspector with 14 years specializing in noble precious metal alloys and platinum casting.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'مقدمة: لغز المعدن الأبيض الأكثر فخامة في صالونات المجوهرات',
      '1. التركيب الكيميائي والنقاء: 95% بلاتين مقابل 75% ذهب خالص',
      '2. الكثافة والوزن النوعي: لماذا يبدو البلاتين أثقل في اليد؟',
      '3. السلوك الميكانيكي: متانة الشوكات في تثبيت الألماس الكبير',
      '4. طبقة الروديوم (Rhodium Plating) وظاهرة الباتينا الطبيعية',
      'الخلاصة: متى تختار البلاتين ومتى تفضل الذهب الأبيض 18k؟',
    ],
    tableOfContentsEn: [
      'Introduction: The Duel of Noble White Metals in Fine Jewelry',
      '1. Alloy Composition & Purity: 95% Platinum vs. 75% Fine Gold',
      '2. Volumetric Density: Why Platinum Carries Remarkable Heft',
      '3. Mechanical Displacement: Prong Tensile Security for Large Diamonds',
      '4. Rhodium Electroplating Maintenance vs. Natural Platinum Patina',
      'Verdict: When to Invest in Platinum and When White Gold Wins',
    ],
    sections: [
      {
        headingAr: 'التركيب الكيميائي والنقاء بين البلاتين 950 والذهب الأبيض 18k',
        headingEn: 'Alloy Composition & Inherent Purity Benchmarks',
        contentAr: `البلاتين المستخدم في صياغة المجوهرات الفاخرة هو معدن أبيض نقي بطبيعته الجيولوجية، ويكون مدموغاً برمز Pt950، مما يعني أن 95% من وزن القطعة بلاتين خالص غير مخلوط، مع 5% فقط من معادن مجموعة البلاتين المقوية مثل الإيريديوم أو الروثينيوم. هذه النسبة العالية تجعل البلاتين معدناً مضاداً للحساسية الجلدية تماماً (Hypoallergenic)، وهو مثالي لمن يعانون من حساسية المعادن.

على الجانب الآخر، الذهب بطبيعته معدن أصفر دافئ؛ ولصناعة الذهب الأبيض عيار 18k يتم خلط 75% من الذهب الخالص مع 25% من معادن التبييض مثل الفضة والبلاديوم والنحاس. ولإعطاء الذهب الأبيض لمعانه الثلجي المشرق، يُطلى كهربائياً بطبقة ميكرونية من معدن الروديوم الثمين.`,
        contentEn: `Fine platinum jewelry carries a Pt950 hallmark, indicating that 950 parts per thousand (95%) is pure elemental platinum, compounded with 5% noble ruthenium or iridium for tensile rigidity. Because of this extreme purity, platinum is entirely hypoallergenic and non-reactive with skin chemistry.

Conversely, fine gold is naturally warm yellow. To formulate 18k white gold, 75% pure gold is melted alongside 25% white alloying metals such as silver, palladium, and copper. To attain a mirror-like icy luster, it is electroplated with a microscopic coat of rare rhodium.`,
      },
      {
        headingAr: 'المتانة الميكانيكية وتأمين الأحجار الماسية الكبيرة',
        headingEn: 'Tensile Retention & Large Solitaire Security',
        contentAr: `أهم فارق جوهري للمشتري يكمن في طريقة تآكل المعدن بمرور الزمن. عندما يتعرض الذهب الأبيض للخدش، تفقد القطعة جزيئات مجهرية من المعدن. بينما يتمتع البلاتين ببنية جزيئية لزجة وشديدة الكثافة؛ فعند تعرضه للصدمات، يتحرك المعدن جانبياً دون أن يُفقد وزنه، مما يمنحه مظهراً كلاسيكياً يسمى "الباتينا" (Patina).

هذه الخصيصة تجعل شوكات البلاتين (Prongs) الأكثر أماناً على الإطلاق لتثبيت أحجار الألماس السوليتير الكبيرة التي تتجاوز قيمتها مئات الآلاف، حيث لا تنكسر الشوكات بل تنحني بمرونة تحت الضغط، مانعة سقوط الحجر.`,
        contentEn: `A crucial distinction lies in metal displacement physics. When white gold is scratched, microscopic particles of metal are sheared away. In contrast, platinum has an exceptionally dense molecular matrix: when struck, metal simply shifts along crystal planes without loss of material, forming an illustrious antique satin finish known as patina.

This behavioral trait renders platinum prongs remarkably safer for securing high-value solitaire diamonds; rather than snapping under sudden impact, platinum prongs flex slightly, holding valuable center diamonds securely.`,
      },
    ],
  },

  // 13. دليل شراء أساور التنس الماسية (Diamond Tennis Bracelet)
  {
    id: 'tennis-bracelet-buyers-guide',
    slug: 'diamond-tennis-bracelet-connoisseur-buying-guide',
    titleAr: 'دليل شراء أساور التنس الماسية (Tennis Bracelet): أسرار ترصيع الشوكات الأربع واختيار القفل المزدوج الآمن',
    titleEn: 'The Essential Diamond Tennis Bracelet Guide: Four-Prong Artistry, Flexibility, and Dual Safety Clasps',
    summaryAr: 'دليل تفصيلي يشرح معايير تناغم الألماس في السوار المتصل، اختبار مرونة المفصلات على المعصم، وأنظمة الأقفال المزدوجة لحماية السوار من السقوط العرضي.',
    summaryEn: 'An exhaustive connoisseur manual for acquiring the classic diamond tennis bracelet: evaluating continuous diamond color harmony, hinge fluidity, and dual-latch box locks.',
    categoryAr: 'الصياغة اليدوية والتصميم',
    categoryEn: 'Bespoke Haute Joaillerie',
    publishDate: '2026-10-06',
    readTimeAr: '7 دقائق قراءة',
    readTimeEn: '7 min read',
    featuredImage: pearlImg,
    author: {
      nameAr: 'الأستاذة مها التميمي',
      nameEn: 'Maha Al-Tamimi',
      titleAr: 'مستشارة تنسيق المجوهرات الفاخرة والأعراس',
      titleEn: 'Haute Joaillerie Bridal & Stylist Consultant',
      credentialsAr: 'خبرة 15 عاماً في تنسيق أطقم المجوهرات الملكية، ومؤلفة دليل إتيكيت المجوهرات المعاصرة بالشرق الأوسط.',
      credentialsEn: '15 years consulting royal brides and private collectors across the Gulf, recognized stylist in modern high jewelry curation.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'القصة التاريخية: كيف أطلق كريس إيفرت اسم "سوار التنس" عام 1987؟',
      '1. تناغم الألماس: لماذا يعتبر تطابق اللون والنقاء أهم من الوزن الإجمالي؟',
      '2. أنماط الترصيع: المقارنة بين الشوكات الأربع والترصيع الإطار المفرغ',
      '3. مرونة المفصلات: اختبار الاستلقاء السلس على المعصم',
      '4. آليات الأمان: القفل الصندوقي الداخلي مع خطافي الأمان الجانبيين',
    ],
    tableOfContentsEn: [
      'Historical Origin: How Chris Evert Coined the Tennis Bracelet in 1987',
      '1. Diamond Uniformity: Why Color Matching Trumps Total Carat Weight',
      '2. Setting Geometries: Four-Prong Classical vs. Bezel Setting Channels',
      '3. Articulation & Flexibility: The Wrist Drape Test',
      '4. Safety Systems: Integrated Box Mechanism with Twin Figure-8 Safety Clips',
    ],
    sections: [
      {
        headingAr: 'تناسق أحجار الألماس: سحر التناغم اللوني في الخط المتصل',
        headingEn: 'Diamond Uniformity: Harmonizing Fifty Stones in One Line',
        contentAr: `سوار التنس الكلاسيكي يتألف من سلسلة متصلة تضم ما بين 45 إلى 55 ألماسة مصقولة بعناية فائقة. التحدي الأكبر الذي يفصل بين دور المجوهرات الملكية والورش التجارية هو دقة تطابق الأحجار؛ فإذا وُضعت ألماسة واحدة بلون I بجوار ألماسات بلون F، فإن العين المجردة ستلاحظ فوراً النشاز اللوني، مما يفسد الانسيابية البصرية للقطعة بأكملها.

في بوتيك النخبة الملكية، يتم فرز مئات القراريط من الألماس المستورد لفحص كل حجر تحت مصابيح نور النهار المعيارية، لضمان أن كل ألماسة على السوار تتطابق بنسبة 100% في درجة اللون ودرجة النقاء وزوايا القطع المتناسقة.`,
        contentEn: `A classic tennis bracelet features a fluid line of 45 to 55 perfectly cut diamonds. The hallmark of elite jewelers lies in color and clarity matching; if a single lower-grade stone is nestled alongside colorless gems, human eyes immediately detect the warm tint break, disrupting the river-of-light effect.

Our atelier sorts through hundreds of loose carats under calibrated daylight lamps, ensuring each diamond along the bracelet matches within single sub-grades of color, clarity, and facet proportion symmetry.`,
      },
      {
        headingAr: 'قفل الأمان الصندوقي المزدوج: درع الحماية ضد الفقدان',
        headingEn: 'The Integrated Box Clasp & Double Safety Latches',
        contentAr: `نظراً لأن سوار التنس يُرتدى على المعصم في المناسبات الحافلة بالحركة، فإن آلية القفل تمثل صمام الأمان الحقيقي لاستثمارك. السوار الفاخر يجب ألا يعتمد على قفل بسيط، بل يُجهز بقفل صندوقي مخفي (Concealed Box Clasp) يندمج كلياً داخل مسار الألماس دون أن ينقطع البريق.

علاوة على ذلك، يُزود القفل بـ "خطافي أمان جانبيين" (Double Figure-Eight Safety Catches). حتى لو تعرض القفل الرئيسي للضغط المفاجئ، فإن الخطافين الجانبيين يمنعان السوار من السقوط من على اليد، مما يوفر راحة بال مطلقة لمالكة السوار.`,
        contentEn: `Because tennis bracelets endure dynamic wrist movement, clasp engineering is vital. Premium bracelets employ an invisible box clasp integrated seamlessly into the diamond line without disturbing the visual stream.

Crucially, this mechanism is reinforced with dual exterior figure-eight safety catches. Even if the primary release tongue experiences accidental tension, the dual lateral latches keep the bracelet anchored to the wrist.`,
      },
    ],
  },

  // 14. تاريخ صياغة المجوهرات العربية والإسلامية
  {
    id: 'heritage-islamic-arabic-jewelry',
    slug: 'heritage-arabic-islamic-fine-jewelry-history-craftsmanship',
    titleAr: 'تاريخ صياغة المجوهرات العربية والإسلامية: فنون الفيليجري والتحبيب والمينا الملونة عبر العصور',
    titleEn: 'Heritage Arabic & Islamic High Jewelry: The Master Arts of Filigree, Granulation, and Champlevé Enamel',
    summaryAr: 'رحلة تاريخية توثيقية في روائع الصياغة التراثية بالجزيرة العربية والأندلس، وكيف تلهم هذه الفنون الهندسية تصاميم دور المجوهرات الملكية المعاصرة.',
    summaryEn: 'An authoritative study tracing golden granulation and openwork filigree across Arabian Peninsula royal courts and Moorish Andalusia, shaping contemporary royal collections.',
    categoryAr: 'تاريخ الخواتم والصياغة',
    categoryEn: 'Jewelry History & Heritage',
    publishDate: '2026-10-06',
    readTimeAr: '9 دقائق قراءة',
    readTimeEn: '9 min read',
    featuredImage: heroImg,
    author: {
      nameAr: 'د. طارق المنصور',
      nameEn: 'Dr. Tariq Al-Mansoor',
      titleAr: 'مؤرخ الفنون الإسلامية والتراث الحليفي',
      titleEn: 'Historian of Islamic Decorative Arts & Metalwork',
      credentialsAr: 'أستاذ الآثار وتاريخ الفنون الإسلامية، باحث سابق في متحف اللوفر والمتحف الوطني، مؤلف دراسات توثيقية لصياغة الذهب التراثية.',
      credentialsEn: 'Professor of Islamic Metalwork & Archaeology, former researcher at Louvre Islamic Arts division, author of definitive texts on Arabian gold heritage.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'مقدمة: المكانة الروحية والجمالية للذهب في الثقافة العربية',
      '1. فن الفيليجري (السلك المفرغ أو المخرمات اليدوية الدقيقة)',
      '2. تقنية التحبيب (Granulation): كرات الذهب المجهرية بدون لحام ظاهر',
      '3. النقوش الهندسية والمقرنصات المستوحاة من العمارة الإسلامية',
      '4. إحياء التراث في تصاميم بوتيك النخبة الملكية المعاصرة',
    ],
    tableOfContentsEn: [
      'Introduction: Cultural & Artistic Significance of Gold in the Arab World',
      '1. The Art of Filigree: Micro-Twisted Golden Openwork Lace',
      '2. Ancient Granulation: Molecular Gold Spheres Fused without Visible Solder',
      '3. Muqarnas & Sacred Geometry: Architectural Motifs in High Jewelry',
      '4. Contemporary Rebirth: Royal Elite Modern Masterpieces',
    ],
    sections: [
      {
        headingAr: 'فنون الفيليجري والتحبيب: معجزات اليد الصانعة',
        headingEn: 'Filigree & Granulation: Wonders of Medieval Artisanship',
        contentAr: `شهدت الحضارة العربية والإسلامية ذروة لا تضاهى في صياغة الذهب الخالص عبر تقنيتين تاريخيتين شكلتا أساس المجوهرات الملكية لقرون طويلة:
أولاهما "فن الفيليجري" (Filigree) أو السلك المخرم، حيث يقوم الصائغ بسحب أسلاك الذهب عيار 21k حتى تصبح أدق من شعرة الإنسان، ثم يقوم ببرمها ولحمها يدوياً لتشكل زخارف نباتية وهندسية تشبه الدانتيل الذهبي المعلق في الهواء.

أما التقنية الثانية فهي "التحبيب" (Granulation)، وتعتمد على صهر حبيبات دقيقة جداً من الذهب وتثبيتها بجوار بعضها البعض على سطح السوار أو العقد عبر تقنية اندماج جزيئي معقدة دون استخدام لحام خارجي يطمس تفاصيلها الدقيقة.`,
        contentEn: `Islamic metallurgy attained historical zeniths in gold manipulation through two foundational techniques:
First is filigree openwork, where 21k or 22k gold wires were drawn thinner than silk threads, intricately twisted, and soldered into ethereal vegetal lace motifs that float like gold lacework.

Second is granulation, an ancient art involving microscopic spherical gold granules placed adjacent to each other upon sheets of gold and bonded using solid-state chemical diffusion without visible solder flow, preserving crisp sculptural relief.`,
      },
      {
        headingAr: 'استلهام الزخارف الهندسية والمقرنصات في الصياغة الحديثة',
        headingEn: 'Translating Geometric Muqarnas into Haute Joaillerie',
        contentAr: `تعتمد فلسفة تصميم المجوهرات الراقية في دارنا على المزج بين الدقة الأكاديمية للتراث العربي القديم والتقنيات المعاصرة للترصيع الماسي المجهري. الزخارف ثمانية الأضلاع، والخطوط المتشابكة المستوحاة من تيجان القصور وقباب المساجد التاريخية، يُعاد تجسيدها في أطقم الأعراس باستخدام الذهب الخالص والألماس الطبيعي المعتمد، لتتحول كل قطعة إلى شاهد حي على عمق الهوية الثقافية العربية الأصيلة.`,
        contentEn: `Our atelier bridges historical Islamic aesthetic canons and high-precision diamond setting. Octagonal rosettes, interlaced arabesques, and tiered muqarnas facets are re-engineered using 3D CAD and calibrated diamonds, creating heirlooms that celebrate cultural lineage while meeting highest global luxury standards.`,
      },
    ],
  },

  // 15. الألماس الطبيعي مقابل الألماس المصنع مخبرياً (Lab-Grown)
  {
    id: 'certified-lab-grown-vs-natural-diamonds',
    slug: 'natural-diamonds-vs-lab-grown-investment-clarity-guide',
    titleAr: 'الألماس الطبيعي مقابل المصنع مخبرياً (Lab-Grown): الفروق الجوهرية، فحص HPHT/CVD، والقيمة الاستثمارية',
    titleEn: 'Natural vs. Lab-Grown Diamonds: Physical Signatures, HPHT/CVD Diagnostics, and Resale Longevity',
    summaryAr: 'تحليل مالي ومخبري شفاف يشرح كيف تميز مختبرات GIA بين الألماس المستخرج من باطن الأرض والألماس المخبري، مع استعراض مسار الأسعار والقيمة المتبقية عند إعادة البيع.',
    summaryEn: 'An objective gemological appraisal dissecting natural subterranean carbon against HPHT/CVD reactor syntheses, charting long-term capital preservation and secondary market resale.',
    categoryAr: 'علوم الأحجار الكريمة',
    categoryEn: 'Gemological Science',
    publishDate: '2026-10-06',
    readTimeAr: '8 دقائق قراءة',
    readTimeEn: '8 min read',
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
      'مقدمة: الثورة التكنولوجية في زراعة بلورات الكربون',
      '1. طرق التصنيع: تقنية الضغط العالي (HPHT) وترسيب البخار الكيميائي (CVD)',
      '2. التشابه الفيزيائي: لماذا يعطي قلم فحص الألماس العادي نتيجة إيجابية؟',
      '3. الفحص المخبري المتقدم: التحليل الطيفي والنمو البلوري بمختبر GIA',
      '4. الحقيقة الاستثمارية: منحنى انهيار أسعار الألماس المخبري مقابل ثبات الطبيعي',
    ],
    tableOfContentsEn: [
      'Introduction: Technological Strides in Carbon Crystal Synthesis',
      '1. Synthesis Modalities: High Pressure High Temperature (HPHT) vs. CVD',
      '2. Physical Identity: Why Basic Thermal Testers Cannot Distinguish Lab Diamonds',
      '3. Laboratory Spectroscopy: Photoluminescence & GIA Detection Instruments',
      '4. Investment Realities: The Commoditization Curve of Synthetic vs. Rare Natural Stones',
    ],
    sections: [
      {
        headingAr: 'التشابه الفيزيائي والفحص المخبري الدقيق',
        headingEn: 'Identical Physical Properties & Advanced Spectroscopy',
        contentAr: `من الناحية الكيميائية والفيزيائية، يتطابق الألماس المصنع مخبرياً مع الألماس الطبيعي في الصلابة (10 موهس) ومعامل الانكسار الضوئي (2.417)، مما يعني أن أجهزة الفحص السريعة المحمولة لدى صغار التجار لا يمكنها التمييز بينهما على الإطلاق.

لكن الألماس الطبيعي تشكل في باطن الأرض عبر مليارات السنين تحت ظروف جيولوجية عشوائية تترك بصمات نمو فريدة. بينما ينمو الألماس المخبري في مفاعلات خلال بضعة أسابيع فقط بتقنية CVD أو HPHT، مما يترك شوائب معدنية نادرة من النيكل أو الحديد أو خطوط نمو خطية يكتشفها جهاز GIA iD100 وأجهزة التحليل الطيفي الفلوريسنتي المتقدمة في ثوانٍ معدودة.`,
        contentEn: `Chemically and optically, synthetic diamonds mirror natural diamonds with identical refractive index (2.417) and 10 Mohs hardness. Handheld thermal/electrical pens yield identical positive readings for both.

However, natural diamonds crystallized across 1 to 3 billion years deep within Earth's mantle, leaving natural lattice signatures. Lab-grown diamonds grow in CVD reactors or HPHT presses within weeks, displaying distinct cellular growth strains and metal flux traces detectable instantly by specialized GIA spectroscopic instruments.`,
      },
      {
        headingAr: 'القيمة الاستثمارية وإعادة البيع: الفارق الجوهري',
        headingEn: 'Secondary Market Dynamics & Long-Term Resale Value',
        contentAr: `هنا يكمن الفارق الحاسم لأي مشتري: الألماس الطبيعي يمتلك ندرة جيولوجية محدودة تتناقص مع إغلاق المناجم الكبرى، مما يجعله مخزناً للقيمة عبر الأجيال ومقبولاً للرهن وإعادة البيع في كافة أسواق العالم.

أما الألماس المخبري، فهو منتج صناعي غير محدود قابل للمضاعفة بتكلفة تنخفض كل عام مع تطور التكنولوجيا؛ حيث انخفضت أسعار الألماس المخبري بأكثر من 85% خلال السنوات الخمس الماضية، وترفض معظم دور المجوهرات الكبرى إعادة شرائه، مما يجعله خياراً للزينة اللحظية وليس أصلاً استثمارياً عائلياً.`,
        contentEn: `Here lies the crucial economic reality. Natural diamonds possess finite geological scarcity that diminishes as legacy mines exhaust their pipes, sustaining generational liquidity across auction houses and secondary markets.

In contrast, lab-grown diamonds are industrial goods whose production capacity expands indefinitely. Over the past five years, synthetic diamond wholesale prices declined by more than 85%. Secondary pawnshops and high jewelers offer minimal trade-in for synthetic stones, marking them as fashion expenditures rather than generational wealth assets.`,
      },
    ],
  },

  // 16. دليل اقتناء المجوهرات التراثية والأنتيك (Vintage & Estate Jewelry)
  {
    id: 'estate-vintage-jewelry-collecting',
    slug: 'vintage-estate-antique-jewelry-collecting-provenance-guide',
    titleAr: 'دليل اقتناء المجوهرات التراثية والأنتيك: تقييم مجوهرات حقبة الآرت ديكو وفيكتوريا وتوثيق المزادات',
    titleEn: 'Vintage & Estate Jewelry Collecting: Evaluating Art Deco, Victorian Heirlooms, and Auction Provenance',
    summaryAr: 'دليل شامل لجامعي التحف والمجوهرات القديمة يوضح كيفية التحقق من أصالة القطع التاريخية، قراءة الدمغات الأثرية، وتقييم قيمة التوثيق والنسب الملكي (Provenance).',
    summaryEn: 'An essential connoisseur manual for historic jewelry acquisitions: deciphering antique European hallmarks, authenticating Art Deco geometric platinum, and verifying royal provenance.',
    categoryAr: 'تاريخ الخواتم والصياغة',
    categoryEn: 'Jewelry History & Heritage',
    publishDate: '2026-10-06',
    readTimeAr: '8 دقائق قراءة',
    readTimeEn: '8 min read',
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
      'مقدمة: لماذا تشهد المجوهرات القديمة إقبالاً تاريخياً في المزادات؟',
      '1. حقبة الآرت ديكو (Art Deco 1920-1935): قمة الهندسة والبلاتين',
      '2. الحقبة الفيكتورية والإدواردية: سحر الذهب الأصفر والدانتيل الماسي',
      '3. فحص التعديلات والترميم السابق: كيف تتأكد أن القطعة أصلية بالكامل؟',
      '4. أهمية وثائق المصدر (Provenance) في مضاعفة القيمة السوقية',
    ],
    tableOfContentsEn: [
      'Introduction: The Historic Renaissance of Estate Jewelry at Global Auctions',
      '1. The Art Deco Era (1920–1935): Pinnacle of Platinum & Geometry',
      '2. Victorian & Edwardian Eras: Floral Romanticism and Platinum-on-Gold',
      '3. Restoration Diagnostics: Identifying Re-Cut Diamonds and Composite Repairs',
      '4. Royal Provenance Documentation as a Direct Valuation Multiplier',
    ],
    sections: [
      {
        headingAr: 'سحر حقبة الآرت ديكو وهندستها الخالدة',
        headingEn: 'The Architectural Majesty of Art Deco (1920–1935)',
        contentAr: `تعتبر مجوهرات حقبة الآرت ديكو (Art Deco) العصر الذهبي لاقتناء القطع التراثية النادرة. تميزت هذه الحقبة بالخطوط الهندسية الجريئة، والتناغم المذهل بين أحجار الألماس الأبيض مع أحجار العقيق اليماني الأسود (Onyx) والزمرد والياقوت المقطوع بأسلوب الكاليبريه (Calibré Cut).

الأهم من ذلك، أن هذه الحقبة شهدت أول استخدام واسع النطاق للبلاتين في الصياغة الدقيقة، حيث أتاح المعدن الصلب لصاغة تلك الفترة ابتكار حواف مخرومة بالغة الرقة (Millegrain) لا يمكن لأي آلة حديثة مضاهاة روحها اليدوية الأصيلة.`,
        contentEn: `The Art Deco period represents the holy grail of antique jewelry collection. Defined by daring geometric lines and high-contrast combinations—colorless diamonds framed by black onyx, calibrated emeralds, and baguette rubies—these pieces exude architectural grandeur.

Crucially, Art Deco pioneered precision platinum openwork, enabling jewelers to craft delicate lace settings lined with minute hand-applied milgrain borders that modern casting cannot replicate.`,
      },
      {
        headingAr: 'أهمية التوثيق وسلسلة الملكية (Provenance)',
        headingEn: 'The Decisive Impact of Verified Provenance',
        contentAr: `في عالم المجوهرات التراثية، القطعة وحدها لا تكفي؛ بل إن وثائق الميراث والفواتير الأصلية من دور المزادات مثل كريستيز وسوذبيز وصور ملاكها الأصليين من العائلات الأرستقراطية ترفع قيمة القطعة بنسبة تفوق 300%.

عند شراء قطعة أنتيك، يجب فحص دمغات الصائغ الأصلية بعناية بواسطة عدسة مكبرة 10x، والتأكد من عدم استبدال الحجر الرئيسي بأحجار حديثة أثناء عمليات الترميم السابقة، وهو ما يقدمه خبراؤنا عبر شهادات فحص مخبري تفصيلية.`,
        contentEn: `In high estate collecting, the artifact is only half the asset; verified lineage documents—original royal salon ledgers, auction invoices, and archival photographs—frequently multiply market value by over 300%.

When curating vintage pieces, master appraisers inspect maker marks under 10x magnification, verifying that original old European cut diamonds were not substituted with modern round brilliants during past repairs.`,
      },
    ],
  },

  // 17. دليل السفر والتنقل بالمجوهرات الثمينة
  {
    id: 'travel-safe-jewelry-guide',
    slug: 'high-jewelry-travel-safety-customs-insurance-guide',
    titleAr: 'دليل السفر والتنقل بالمجوهرات الثمينة: وثائق التأمين، الإفصاح الجمركي، وحقائب الحفظ المصفحة',
    titleEn: 'Safe Travel with High Jewelry: Worldwide Insurance Riders, Customs ATA Carnet, and Portable Vaults',
    summaryAr: 'دليل بروتوكولي للأثرياء ورجال الأعمال يوضح القواعد القانونية للإفصاح الجمركي في المطارات، أفضل حقائب الحفظ اليدوية، وكيف تحمي مجوهراتك أثناء الرحلات الدولية.',
    summaryEn: 'An elite travel security protocol: navigating international airport customs declarations, ATA Carnet papers, discreet portable vaults, and bespoke insurance riders.',
    categoryAr: 'العناية والصيانة',
    categoryEn: 'Care & Restoration',
    publishDate: '2026-10-06',
    readTimeAr: '6 دقائق قراءة',
    readTimeEn: '6 min read',
    featuredImage: pearlImg,
    author: {
      nameAr: 'الأستاذة نورة الشمري',
      nameEn: 'Noura Al-Shammari',
      titleAr: 'مديرة خدمات الكونسيرج والتأمين الملكي',
      titleEn: 'VIP Concierge & Royal Insurance Liaison Director',
      credentialsAr: 'خبرة 12 عاماً في إدارة مقتنيات الشخصيات الدبلوماسية وكبار العملاء وتنسيق التغطيات التأمينية مع لويدز لندن.',
      credentialsEn: '12 years orchestrating high-value asset transit for diplomatic families and coordinating global specie insurance with Lloyd\'s of London.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'مقدمة: مخاطر السفر بالمقتنيات الثمينة وكيف تتفاداها باحترافية',
      '1. القاعدة الذهبية: حقيبة اليد المحمولة (Never Check In)',
      '2. الإفصاح الجمركي ووثائق التملك المسبق لتجنب الغرامات والرسوم',
      '3. وثائق التأمين الشامل الدولي (Worldwide Floater Insurance)',
      '4. بروتوكول الخزائن في الفنادق الفاخرة وسيناريوهات الطوارئ',
    ],
    tableOfContentsEn: [
      'Introduction: Navigating High-Value Travel Risks with Royal Discretion',
      '1. The Golden Rule: Hand Luggage Exclusivity (Never Checked Baggage)',
      '2. Airport Customs Clearance & Pre-Registered Export Declarations',
      '3. Worldwide Specie Insurance Riders & Agreed-Value Policies',
      '4. Five-Star Hotel Vault Protocols & Discreet Storage Best Practices',
    ],
    sections: [
      {
        headingAr: 'القواعد الأمنية الأساسية أثناء التنقل الجوي',
        headingEn: 'Core Aviation Security Rules for High Jewelry',
        contentAr: `القاعدة الأولى والأهم التي لا تقبل أي استثناء: إياكِ ووضع أي قطعة مجوهرات ثمينة في حقائب السفر المشحونة في بطن الطائرة (Checked Luggage). الحقائب المشحونة تتعرض للضياع والسرقة والضغط والتلف؛ والمجوهرات يجب أن تبقى دوماً داخل حقيبة يدكِ الشخصية المحمولة معكِ في المقصورة.

يُفضل استخدام حقائب سفر جلدية مبطنة بالمخمل ومزودة بقفل بيومتري ببصمة الإصبع، مع فصل كل قطعة داخل جراب مخملي منفصل لمنع احتكاك الألماس بالذهب أو خدش الأحجار الناعمة مثل اللؤلؤ والزمرد.`,
        contentEn: `The cardinal rule of high jewelry transit is absolute: never consign valuable jewelry to checked luggage in the aircraft hold. Checked baggage faces handling hazards, theft exposure, and temperature variances. High jewelry must remain exclusively within carry-on baggage.

Employ discrete velvet-lined travel pouches equipped with biometric locking mechanisms. Each jewelry item must reside in its dedicated compartment to avert diamond facets from scratching adjacent gold or softer gems like emeralds and natural pearls.`,
      },
      {
        headingAr: 'الإفصاح الجمركي والتأمين الدولي الشامل',
        headingEn: 'Customs Pre-Registration & Global Insurance Coverage',
        contentAr: `لتجنب فرض ضريبة القيمة المضافة أو الجمارك عند العودة، يجب التقاط صور واضحة لقطعكِ قبل السفر والاحتفاظ بفواتير الشراء الرسمية أو شهادات التقييم المخبرية على هاتفك. إذا كانت المجوهرات مخصصة لمناسبة زفاف خارج البلاد، يُنصح بتسجيل بيان جمركي مسبق يثبت تملكها داخل الدولة.

كذلك، تأكدي من أن بوليصة التأمين الخاصة بمجوهراتك تتضمن بند "Worldwide All-Risk Coverage" الذي يغطي الفقدان العرضي والسرقة في أي مكان حول العالم دون اشتراط وقوع الحادث داخل منزلك فقط.`,
        contentEn: `To avoid unexpected customs duties upon re-entry, photograph your jewels prior to departure and maintain digital appraisal certificates and purchase invoices. For international gala events, lodge a temporary customs declaration to verify domestic ownership before departure.

Furthermore, verify that your private insurance policy incorporates a 'Worldwide Specie All-Risk' rider, ensuring full agreed-value reimbursement against accidental loss, theft, and damage worldwide.`,
      },
    ],
  },

  // 18. أحجار البخت والأشهر الاثني عشر
  {
    id: 'birthstones-gemological-guide',
    slug: 'birthstones-gemological-symbolism-twelve-months-guide',
    titleAr: 'أحجار البخت والأشهر الاثني عشر: الدليل الجيولوجي والرمزي الشامل للأحجار الكريمة الطبيعية',
    titleEn: 'The Ultimate Geological & Symbolic Guide to Natural Monthly Birthstones',
    summaryAr: 'دليل شامل يربط بين تاريخ أحجار البخت ومواصفاتها الجيولوجية: العقيق، الجمشت، الأكوامارين، الألماس، الزمرد، اللؤلؤ، الياقوت، الزبرجد، والزفير.',
    summaryEn: 'An exquisite gemological and symbolic compendium detailing the historical and mineral properties of the twelve official natural birthstones from Garnet to Blue Zircon.',
    categoryAr: 'علوم الأحجار الكريمة',
    categoryEn: 'Gemological Science',
    publishDate: '2026-10-06',
    readTimeAr: '8 دقائق قراءة',
    readTimeEn: '8 min read',
    featuredImage: emeraldImg,
    author: {
      nameAr: 'د. ليلى البواردي',
      nameEn: 'Dr. Layla Al-Bawardi',
      titleAr: 'كبيرة باحثي المعادن والأحجار الملونة',
      titleEn: 'Lead Mineralogist & Colored Gemstones Specialist',
      credentialsAr: 'دكتوراه في الجيولوجيا التطبيقية من جامعة لندن، زميلة الرابطة البريطانية للأحجار الكريمة (FGA) مع 16 عاماً في تقييم مناجم سريلانكا ومدغشقر.',
      credentialsEn: 'Ph.D. in Applied Geology, Fellow of Gem-A (FGA), 16 years inspecting unheated corundum across Sri Lankan and Madagascar deposits.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'مقدمة: تاريخ قائمة أحجار البخت الرسمية الصادرة عام 1912',
      '1. الربع الأول (يناير - مارس): العقيق الأحمر، الجمشت، والأكوامارين',
      '2. الربع الثاني (أبريل - يونيو): الألماس النقي، الزمرد، واللؤلؤ الطبيعي',
      '3. الربع الثالث (يوليو - سبتمبر): الياقوت الأحمر، الزبرجد، والزفير الأزرق',
      '4. الربع الرابع (أكتوبر - ديسمبر): الأوبال، التوباز الأصفر، والتنزانيت الملكي',
    ],
    tableOfContentsEn: [
      'Introduction: History of the Official 1912 American Gem Society Birthstone Registry',
      '1. Quarter I (Jan–Mar): Royal Garnet, Amethyst Quartz, and Marine Aquamarine',
      '2. Quarter II (Apr–Jun): Pure Carbon Diamond, Muzo Emerald, and Natural Pearl',
      '3. Quarter III (Jul–Sep): Pigeon Blood Ruby, Peridot Olivine, and Royal Sapphire',
      '4. Quarter IV (Oct–Dec): Precious Opal, Imperial Topaz, and Kilimanjaro Tanzanite',
    ],
    sections: [
      {
        headingAr: 'الرمزية التاريخية والاعتماد العلمي لأحجار البخت',
        headingEn: 'Historical Heritage & Mineralogical Standards',
        contentAr: `تعود جذور تخصيص حجر كريم لكل شهر ميلادي إلى أصول تاريخية قديمة، ولكن القائمة العلمية الموحدة التي تعتمدها كبرى معاهد المجوهرات العالمية (مثل معهد GIA ورابطة صاغة أمريكا Jewelers of America) اعتُمدت رسمياً في عام 1912 لتجمع بين الرمزية التراثية والخصائص الجيولوجية الملموسة.

اقتناء قطعة مجوهرات مرصعة بحجر الشهر الخاص بكِ أو بأحجار أفراد عائلتك يمثل هدية عاطفية عميقة تتجاوز القيمة المادية، لتتحول إلى تميمة عائلية تخلد تواريخ الميلاد والمناسبات الفارقة في حياة الأسرة.`,
        contentEn: `The custom of wearing gemstones aligned with birth months traces back millennia, but the modern gemological standard was officially canonized in 1912 by the American National Retail Jewelers Association (now Jewelers of America and GIA).

Commissioning a high jewelry suite set with birthstones of loved ones creates an intimate, generational talisman celebrating personal milestones with enduring mineral authenticity.`,
      },
      {
        headingAr: 'أبريل ومايو ويوليو: قمة الأحجار الكريمة الكبرى',
        headingEn: 'April, May & July: The Holy Trinity of High Jewelry',
        contentAr: `تحظى أشهر معينة بأعلى مكانة استثمارية وتاريخية في جدول أحجار البخت؛ فشهر أبريل يتوجه "الألماس" رمز الصلابة والنقاء الأبدي. ويليه شهر مايو الذي يحمل رايته "الزمرد الأخضر"، حجر الملوك المفضل منذ عهد كليوباترا وصولاً إلى أسرار مناجم موزو الكولومبية.

ثم يأتي شهر يوليو متوجاً بـ "الياقوت الأحمر" (Ruby)، ملك الأحجار الذي يرمز للشجاعة والشغف الملكي. في بوتيك النخبة، نوفر تشكيلات مخصصة تجمع هذه الأحجار النادرة مع شهادات مخبرية تفصيلية تثبت المنشأ والوزن والخصائص الطبيعية.`,
        contentEn: `Certain months command the pinnacle of luxury valuation: April is heralded by Diamond, the eternal symbol of unyielding carbon brilliance. May belongs to Muzo Emerald, adored by royalty since Cleopatra.

July is crowned by Ruby, ancient monarch of gems symbolizing noble vitality. At our boutique, patrons commission custom signet rings and pendants set with certified natural birthstones reflecting their bespoke lineage.`,
      },
    ],
  },

  // 19. الفلورسنس في الألماس: ميزة أم عيب؟
  {
    id: 'diamond-fluorescence-guide',
    slug: 'diamond-uv-fluorescence-guide-blue-glow-effects',
    titleAr: 'الفلورسنس في الألماس: ميزة أم عيب؟ كيف يؤثر التوهج الأزرق تحت الأشعة فوق البنفسجية على السعر والبريق',
    titleEn: 'Diamond UV Fluorescence: Asset or Defect? How Blue Emission Influences Market Price and Visual Fire',
    summaryAr: 'دليل مخبري يشرح ظاهرة الفلورسنس في الألماس الطبيعي: لماذا يجعل الألماس ذا الدرجات اللونية المنخفضة يبدو أكثر بياضاً، ومتى يؤدي إلى تأثير ضبابي دهني (Milky/Hazy).',
    summaryEn: 'An objective gemological inquiry into diamond fluorescence: analyzing blue emission under ultraviolet light, price discounts across D-to-F tiers, and optical brightening in I-to-K colors.',
    categoryAr: 'علوم الأحجار الكريمة',
    categoryEn: 'Gemological Science',
    publishDate: '2026-10-06',
    readTimeAr: '6 دقائق قراءة',
    readTimeEn: '6 min read',
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
      'مقدمة: ما هي ظاهرة الفلورسنس (Fluorescence) في الألماس؟',
      '1. تصنيفات معهد GIA: من None إلى Very Strong Blue',
      '2. الميزة الذكية: كيف يحسن الفلورسنس مظهر ألوان الألماس I وJ وK؟',
      '3. الخطر المحتمل: ظاهرة الضبابية الدهنية (Milky/Oily Effect)',
      '4. تأثير الفلورسنس على سعر الشراء وحساب الخصم التجاري',
    ],
    tableOfContentsEn: [
      'Introduction: What Causes Ultraviolet Fluorescence in Natural Diamonds?',
      '1. GIA Grading Scale: None, Faint, Medium, Strong, and Very Strong Blue',
      '2. The Visual Benefit: How Blue Emission Neutralizes Yellow Tint in I-to-K Diamonds',
      '3. The Potential Pitfall: The Oily, Hazy, or Milky Optical Phenomenon',
      '4. Commercial Pricing Dynamics: Market Discounts and Savvy Buying Tactics',
    ],
    sections: [
      {
        headingAr: 'الفيزياء وراء توهج الألماس الأزرق تحت الأشعة فوق البنفسجية',
        headingEn: 'The Sub-Atomic Physics of Sub-Surface Blue Glow',
        contentAr: `تظهر ظاهرة الفلورسنس (Fluorescence) في حوالي 25% إلى 35% من الألماس الطبيعي المستخرج من الأرض. عندما يتعرض هذا الألماس للأشعة فوق البنفسجية (مثل ضوء الشمس المباشر أو مصابيح UV في المختبرات)، تتفاعل ذرات النيتروجين الدقيقة داخل الشبكة البلورية لتبعث ضوءاً أزرق مرئياً ناعماً.

يقسم معهد GIA الفلورسنس إلى خمس درجات محددة: None (منعدم)، Faint (خافت)، Medium (متوسط)، Strong (قوي)، وVery Strong (قوي جداً). في الغالبية الساحقة من الحالات (أكثر من 98%)، لا يمكن للعين المجردة ملاحظة أي أثر سلبي للفلورسنس في الإضاءة الداخلية العادية.`,
        contentEn: `Approximately 25% to 35% of natural diamonds exhibit fluorescence. When stimulated by ultraviolet radiation—such as natural sunlight or blacklight lamps—sub-microscopic nitrogen clusters within the crystal lattice emit visible light, predominantly an ethereal blue hue.

GIA grades fluorescence across five standardized intensities: None, Faint, Medium, Strong, and Very Strong. In over 98% of cases, fluorescence is completely imperceptible under standard interior incandescent or LED illumination.`,
      },
      {
        headingAr: 'متى يكون الفلورسنس ميزة استثمارية ذكية؟',
        headingEn: 'When Fluorescence Serves as an Intelligent Asset Advantage',
        contentAr: `في ألوان الألماس عديم اللون تماماً (D وE وF)، يفضل جامعو المجوهرات الكلاسيكية اختيار ألماس خالٍ تماماً من الفلورسنس (None)، ويفرض السوق خصماً بنسبة تتراوح بين 5% إلى 15% على الألماس الذي يحمل فلورسنس قوي في هذه الدرجات العالية خوفاً من ظهور لمحة ضبابية (Hazy).

ولكن بالنسبة للمشتري الذكي الباحث عن أعلى قيمة بصرية مقابل المال، فإن اختيار ألماسة بلون I أو J مع فلورسنس أزرق متوسط أو قوي (Medium Blue) يعتبر صفقة استثنائية؛ لأن اللون الأزرق المكمل يعادل اللون الأصفر الدافئ الخفيف في الحجر، مما يجعل الألماسة تبدو ناصعة البياض مثل درجات H أو G وتحت سعر أقل بكثير!`,
        contentEn: `In top-tier colorless diamonds (D, E, F), connoisseurs favor 'None' fluorescence, and markets discount stones exhibiting Strong Blue by 5% to 15% due to rare risks of milky haze.

However, for shrewd patrons seeking maximum visual brilliance per dollar, pairing near-colorless stones (grades I or J) with Medium or Strong Blue fluorescence represents an exceptional trade secret. Because blue and yellow are complementary colors on the optical spectrum, the blue fluorescence neutralizes warmth, making the diamond appear visually whiter—akin to a G-grade stone—at a considerably lower acquisition cost!`,
      },
    ],
  },

  // 20. كيف تُحسب مصنعية الذهب والضريبة؟
  {
    id: 'gold-craftsmanship-tax-calculation',
    slug: 'gold-craftsmanship-fee-vat-calculation-fair-price-guide',
    titleAr: 'كيف تُحسب مصنعية الذهب والضريبة؟ أسرار التفاوض مع الصاغة لحساب السعر العادل للجرام',
    titleEn: 'Demystifying Gold Craftsmanship Fees & VAT: How to Calculate Fair Price Per Gram at the Counter',
    summaryAr: 'دليل مالي تفصيلي يشرح المعادلة الرياضية الدقيقة لتسعير المشغولات الذهبية: سعر الذهب الخام البورصي، هامش المصنعية حسب نوع الصياغة، وحساب ضريبة القيمة المضافة 15%.',
    summaryEn: 'A master consumer financial guide breaking down the exact mathematical pricing equation for fine gold jewelry: raw spot price, workmanship tiers, and VAT computation.',
    categoryAr: 'الاستثمار والسبائك',
    categoryEn: 'Bullion & Investment',
    publishDate: '2026-10-06',
    readTimeAr: '7 دقائق قراءة',
    readTimeEn: '7 min read',
    featuredImage: bullionImg,
    author: {
      nameAr: 'المهندس سليم القاضي',
      nameEn: 'Eng. Salim Al-Qadi',
      titleAr: 'رئيس وحدة المعادن الثمينة وسبائك الصياغة',
      titleEn: 'Senior Precious Metals & Metallurgy Metallurgist',
      credentialsAr: 'ماجستير في هندسة الفلزات وعلوم المواد، معتمد من هيئة المقاييس والمعايرة، 14 عاماً في تطوير سبائك الذهب عيار 18 والبلاتينوم المعالج.',
      credentialsEn: 'M.Sc. in Materials Science & Metallurgy, certified assay inspector with 14 years specializing in noble precious metal alloys and platinum casting.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'مقدمة: لماذا تختلف أسعار القطع المتساوية في الوزن بين متجر وآخر؟',
      '1. المعادلة الذهبية لحساب سعر الجرام الإجمالي',
      '2. مستويات المصنعية: صب الآلات مقابل الصياغة الإيطالية واليدوية الملكية',
      '3. كيف تُحسب ضريبة القيمة المضافة (VAT 15%) في فواتير الصاغة الرسمية؟',
      '4. نصائح ذهبية قبل التوقيع والدفع لتفادي المبالغة في التسعير',
    ],
    tableOfContentsEn: [
      'Introduction: Why Identical-Weight Pieces Differ in Price Across Counters',
      '1. The Master Mathematical Pricing Equation for Retail Gold',
      '2. Workmanship Tiers: Machine Casting vs. Handcrafted Royal Atelier Craft',
      '3. How Value Added Tax (15% VAT) is Applied According to Ministry Guidelines',
      '4. Crucial Counter-Side Verification Checklist Before Final Invoicing',
    ],
    sections: [
      {
        headingAr: 'المعادلة الرياضية الرسمية لتسعير جرام الذهب',
        headingEn: 'The Exact Mathematical Retail Pricing Formula',
        contentAr: `لتكون مشترياً واعياً لا يمكن التلاعب به، يجب أن تحفظ المعادلة الأساسية لتسعير أي قطعة ذهبية في أي متجر:
السعر الإجمالي للقطعة = [ (سعر جرام الذهب الخام للعيار في البورصة + قيمة المصنعية للجرام) × وزن القطعة بالجرام ] + قيمة ضريبة القيمة المضافة (15%).

سعر جرام الذهب الخام هو سعر معلن عالمياً ومحلياً ويتغير بالدقيقة بناءً على بورصة المعادن. أما المتغير الوحيد الذي يحدده البوتيك فهو "المصنعية" (Craftsmanship Fee)، والتي تعكس تكلفة التصميم والصب وتثبيت الأحجار واللمسات الفنية اليدوية.`,
        contentEn: `To negotiate confidently at any fine jewelry salon, patrons must master the universal pricing formula:
Total Retail Price = [ (Spot Pure Gold Price per Karat + Workmanship Fee per Gram) × Total Gram Weight ] + 15% VAT.

The raw gold price per gram is indexed to global commodity exchanges and updates live. The sole retailer discretion lies in the 'Workmanship Fee', reflecting design intellectual property, casting technology, microscopic setting, and brand warranty.`,
      },
      {
        headingAr: 'الفروق بين أنواع المصنعية وضريبة القيمة المضافة',
        headingEn: 'Craftsmanship Categories & Official VAT Transparency',
        contentAr: `تتفاوت المصنعية بحسب نوع القطعة: فالسبائك الاستثمارية تتمتع بأقل مصنعية ممكنة (تبدأ من 5 إلى 15 ريالاً للجرام فقط). بينما المشغولات الإيطالية الدقيقة وأطقم الليزر المعقدة تتراوح مصنعيتها بين 40 إلى 90 ريالاً للجرام، في حين ترتفع مصنعية القطع الملكية المرصعة بالأحجار الكريمة لتشمل أجور خبير الترصيع المجهري.

تأكدي دوماً من أن الفاتورة تفصل بوضوح سعر الذهب الخام عن قيمة المصنعية، مع إظهار الرقم الضريبي الرسمي للبوتيك لضمان كامل حقوقك النظامية في الاستبدال أو إعادة البيع مستقبلاً.`,
        contentEn: `Workmanship costs diverge based on artisanal execution: investment bullion bears minimal fabrication fees (typically 5 to 15 SAR per gram). Machine-stamped chains carry modest fees, whereas intricate Italian mesh or hand-carved bridal gala suites range from 50 to over 120 SAR per gram.

Ensure that your electronic tax invoice cleanly itemizes pure gold metal value separately from craftsmanship margins, displaying the official ministry tax identification number.`,
      },
    ],
  },

  // 21. التنزانيت والأحجار الكريمة النادرة
  {
    id: 'tanzanite-and-rare-exotic-gems',
    slug: 'tanzanite-mount-kilimanjaro-pleochroism-gem-guide',
    titleAr: 'التنزانيت والأحجار الكريمة النادرة: أسرار حجر جبل كليمنجارو وظاهرة تعدد الألوان (Pleochroism)',
    titleEn: 'Tanzanite & Rare Exotic Gems: Mount Kilimanjaro Miracle and Trichroic Optical Splendor',
    summaryAr: 'دليل استكشافي لحجر التنزانيت الأزرق البنفسجي الأسطوري: لماذا يعتبر أندر بألف مرة من الألماس، وكيف تظهر زوايا الضوء ألوانه الثلاثية الساحرة.',
    summaryEn: 'A deep dive into Tanzanite: its singular geological origin at the foot of Mount Kilimanjaro, trichroic optical axis physics, and investment rarity forecast.',
    categoryAr: 'علوم الأحجار الكريمة',
    categoryEn: 'Gemological Science',
    publishDate: '2026-10-06',
    readTimeAr: '7 دقائق قراءة',
    readTimeEn: '7 min read',
    featuredImage: emeraldImg,
    author: {
      nameAr: 'د. ليلى البواردي',
      nameEn: 'Dr. Layla Al-Bawardi',
      titleAr: 'كبيرة باحثي المعادن والأحجار الملونة',
      titleEn: 'Lead Mineralogist & Colored Gemstones Specialist',
      credentialsAr: 'دكتوراه في الجيولوجيا التطبيقية من جامعة لندن، زميلة الرابطة البريطانية للأحجار الكريمة (FGA) مع 16 عاماً في تقييم مناجم سريلانكا ومدغشقر.',
      credentialsEn: 'Ph.D. in Applied Geology, Fellow of Gem-A (FGA), 16 years inspecting unheated corundum across Sri Lankan and Madagascar deposits.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'مقدمة: حجر الألفية الوحيد المكتشف في سفوح كليمنجارو',
      '1. الندرة الجيولوجية: لماذا يُتوقع نفاد مناجم التنزانيت خلال عقود قليلة؟',
      '2. ظاهرة تعدد الألوان (Trichroism): الأزرق المخملي، البنفسجي، والأحمر الداكن',
      '3. معايير التقييم: درجات التشبع اللوني وحجم القيراط',
      '4. إرشادات العناية بحجر التنزانيت وصلادته على مقياس موهس (6.5 - 7)',
    ],
    tableOfContentsEn: [
      'Introduction: The 20th Century Miracle Discovered Beneath Kilimanjaro',
      '1. Geological Scarcity: A Single Finite Mining Strip on Earth',
      '2. The Trichroic Optical Marvel: Velvet Blue, Deep Violet, and Burgundy',
      '3. Grading Paradigms: Color Saturation Index and Carat Weight Premiums',
      '4. Protective Care Protocols: Navigating 6.5-7 Mohs Hardness in Fine Jewelry',
    ],
    sections: [
      {
        headingAr: 'المنشأ الجيولوجي الفريد وظاهرة تعدد الألوان ثلاثية المحاور',
        headingEn: 'Singular Geological Provenance & Trichroic Physics',
        contentAr: `لا يوجد على وجه الكرة الأرضية سوى مكان واحد فقط يُستخرج منه التنزانيت الطبيعي: قطاع صخري ضيق لا يتجاوز طوله 4 كيلومترات عند سفوح جبل كليمنجارو في تنزانيا. هذا الحصر الجغرافي الفريد يجعل التنزانيت أندر بألف مرة من الألماس، حيث تشير التقارير الجيولوجية إلى احتمال نضوب هذه المناجم بالكامل خلال العقود القليلة القادمة.

ما يجعل التنزانيت ساحراً في عيون المصممين هو ظاهرة "تعدد الألوان ثلاثية المحاور" (Trichroism)؛ حيث يُظهر الحجر ثلاثة ألوان مختلفة عند النظر إليه من زوايا متباينة: الأزرق الياقوتي المخملي، البنفسجي الملكي، والبرغندي الدافئ.`,
        contentEn: `Natural tanzanite originates from a solitary geological deposit on Earth: a 4-kilometer strip of land in the Merelani Hills beneath Mount Kilimanjaro, Tanzania. This singular occurrence renders tanzanite approximately one thousand times rarer than diamond, with geological forecasts projecting mine exhaustion within coming decades.

What captivates high jewelry connoisseurs is trichroism—the optical phenomenon wherein crystals exhibit three distinct colors along different crystallographic axes: deep sapphire blue, royal violet, and rich burgundy flashes.`,
      },
      {
        headingAr: 'تقييم الجودة والعناية بالحجر في الأطقم الفاخرة',
        headingEn: 'Quality Grading Spectrum & Daily Preservation Protocols',
        contentAr: `يقيم التنزانيت بناءً على عمق تشبعه اللوني؛ فالأحجار التي تجمع بين الأزرق الصافي المكثف مع ومضات البنفسج الملكي بوزن يتجاوز 5 قراريط تمثل قمة الهرم الاستثماري.

ونظراً لأن صلادة التنزانيت تبلغ 6.5 إلى 7 على مقياس موهس (أقل صلادة من الألماس والياقوت)، فإننا في بوتيك النخبة نوصي بترصيعه في العقود الفاخرة والأقراط المتدلية حيث يكون محمياً من الصدمات المباشرة، مع تجنب أجهزة التنظيف بالموجات فوق الصوتية (Ultrasonic) للحفاظ على بنيته البلورية السليمة.`,
        contentEn: `Tanzanite is appraised primarily by color saturation. Specimens displaying intense, velvety royal blue with vivid violet highlights exceeding 5 carats occupy top-tier collector status.

Possessing a 6.5 to 7 rating on the Mohs hardness scale, tanzanite requires thoughtful mounting. Our master artisans recommend setting tanzanite in heirloom pendants, collar necklaces, and drop earrings protected from mechanical shocks, avoiding ultrasonic baths to safeguard crystal planes.`,
      },
    ],
  },

  // 22. طرق الحفظ الآمن للمجوهرات والمقتنيات الثمينة في الخزائن
  {
    id: 'safe-jewelry-storage-vaults',
    slug: 'fine-jewelry-home-safe-bank-vault-storage-guide',
    titleAr: 'طرق الحفظ الآمن للمجوهرات والمقتنيات الثمينة في الخزائن: معايير الرطوبة ومقاومة الحريق والسرقة',
    titleEn: 'High-Security Vault Storage for Fine Jewelry: Humidity Control, Fire Ratings, and Modular Safes',
    summaryAr: 'دليل أمني وفيزيائي تفصيلي يوضح كيفية اختيار خزائن المجوهرات المنزلية المعتمدة ضد السطو والحريق، وضبط درجات الرطوبة المثالية لحماية اللؤلؤ والأحجار العضوية.',
    summaryEn: 'An authoritative security and archival protocol for high jewelry conservation: selecting UL-rated home vaults, controlling micro-humidity for organic pearls, and vault logistics.',
    categoryAr: 'العناية والصيانة',
    categoryEn: 'Care & Restoration',
    publishDate: '2026-10-06',
    readTimeAr: '7 دقائق قراءة',
    readTimeEn: '7 min read',
    featuredImage: pearlImg,
    author: {
      nameAr: 'الأستاذة نورة الشمري',
      nameEn: 'Noura Al-Shammari',
      titleAr: 'مديرة خدمات الكونسيرج والتأمين الملكي',
      titleEn: 'VIP Concierge & Royal Insurance Liaison Director',
      credentialsAr: 'خبرة 12 عاماً في إدارة مقتنيات الشخصيات الدبلوماسية وكبار العملاء وتنسيق التغطيات التأمينية مع لويدز لندن.',
      credentialsEn: '12 years orchestrating high-value asset transit for diplomatic families and coordinating global specie insurance with Lloyd\'s of London.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    tableOfContentsAr: [
      'مقدمة: إدارة مخاطر حفظ الثروات العائلية والمجوهرات النادرة',
      '1. تصنيفات الخزائن العالمية: معايير UL الأمريكية ومقاومة السطو (TL-15 وTL-30)',
      '2. الحماية من الحريق: الفرق بين خزائن الأوراق وخزائن المعادن والمجوهرات',
      '3. البيئة الداخلية المثالية: التحكم في الرطوبة لمنع جفاف اللؤلؤ والأوبال',
      '4. توزيع المخاطر بين الخزينة المنزلية المصفحة وخزائن البنوك الآمنة',
    ],
    tableOfContentsEn: [
      'Introduction: Strategic Risk Management for Multi-Generational Jewelry Portfolios',
      '1. Security Ratings: Underwriters Laboratories (UL) Standards (TL-15 & TL-30)',
      '2. Thermal Fire Ratings: Paper Safes vs. Precious Metal & Gemstone Vaults',
      '3. Internal Micro-Climate: Humidity Management for Pearls & Opals',
      '4. Diversification Protocol: Dual-Layered Home Vaults vs. Bank Safe Deposit Boxes',
    ],
    sections: [
      {
        headingAr: 'المعايير الأمنية لخزائن المجوهرات المعتمدة ضد السطو والحريق',
        headingEn: 'Physical Security Ratings for Residential High-Value Vaults',
        contentAr: `شراء خزينة تجارية عادية من متاجر التجزئة لا يوفر أي حماية حقيقية لمجموعات المجوهرات الفاخرة التي تتجاوز قيمتها مئات الآلاف؛ فهذه الخزائن يمكن فتحها بأدوات كهربائية بسيطة في دقائق معدودة.

الخزينة الاحترافية لحفظ المجوهرات يجب أن تكون حاصلة على تصنيف أمني دولي مثل معيار مختبرات التأمين الأمريكية (UL TL-15 أو TL-30)، وهو ما يعني أن الخزينة قادرة على مقاومة هجمات اللحام والمثاقب والمشاعل الحرارية لمدة 30 دقيقة مستمرة من قبل متخصصين. كما يجب أن تكون الخزينة مثبتة بمسامير فولاذية في الخرسانة المسلحة وتزن أكثر من 300 كجم لمنع نقلها.`,
        contentEn: `Standard retail hardware safes offer negligible defense for high-jewelry collections valued in six figures; an experienced burglar can penetrate light gauge steel safes within minutes using portable power tools.

A bona fide jewelry safe must hold certified Underwriters Laboratories ratings—specifically UL TL-15 or TL-30—signifying tested resistance against carbide drills, high-speed saws, and thermal torches for at least 15 to 30 net minutes of direct assault. Furthermore, the safe must be bolted into structural reinforced concrete and weigh upward of 300 kg to prevent removal.`,
      },
      {
        headingAr: 'التحكم في الرطوبة والبيئة الداخلية للأحجار العضوية',
        headingEn: 'Microclimate Stabilization for Organic & Sensitive Gems',
        contentAr: `الخطر الصامت على المجوهرات داخل الخزائن المغلقة ليس السرقة فقط، بل البيئة الكيميائية الجافة؛ فاللؤلؤ الطبيعي والأوبال والزمرد تحتوي على نسب مجهرية من الماء والزيوت الطبيعية في بنيتها. إذا حُفظت هذه الأحجار لشهور طويلة في خزينة جافة شديدة الحرارة مع أكياس سيليكا مفرطة الامتصاص، فإن اللؤلؤ سيتشقق ويفقد بريقه اللؤلؤي إلى الأبد.

الحل الاحترافي هو تبطين أدراج الخزينة بالمخمل الخالي من الأحماض الكيميائية (Acid-Free Felt)، ووضع مقياس رطوبة رقمي صغير يحافظ على نسبة رطوبة نسبية بين 45% إلى 55%، مع تهوية الخزينة وارتداء القطع بصورة دورية لتتنفس رطوبة الهواء الطبيعية.`,
        contentEn: `A silent hazard within sealed vaults is catastrophic environmental dehydration. Organic gems—natural marine pearls, precious opals, and emeralds—contain minute moisture within their structures. Confining them for extended periods in hyper-arid vaults with aggressive desiccant packs causes micro-fissuring and irreversible loss of pearl luster.

Vault drawers should be lined with archival acid-free velvet. Install a compact digital hygrometer maintaining ambient relative humidity between 45% and 55%, ensuring pearls are ventilated periodically and worn so ambient atmospheric contact preserves their natural luster.`,
      },
    ],
  },
];
