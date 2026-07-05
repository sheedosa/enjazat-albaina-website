/* ============================================================
   Enjazat Albaina — ULTRA
   Vanilla client-side app (no build step)
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- State ---------------- */
  var state = { lang: 'en', page: 'home', filter: 'all', pi: 0, menu: false };

  /* ---------------- Copy ---------------- */
  var EN = {
    navHome: 'Home', navProducts: 'Products', navAbout: 'About', navContact: 'Contact',
    ctaQuote: 'Request a Quote', ctaExplore: 'Explore Products',
    parentLine: 'A brand of Enjazat Albaina',
    heroBigA: 'Nothing', heroBigB: 'Moves.',
    heroSub: 'High-performance construction mortars and chemical adhesives — engineered for tiling, rendering and concrete repair that lasts.',
    statCert: 'Certified adhesive class', statFlex: 'Deformability classes', statStd: 'European standard', statBag: 'Standard bag size',
    parentStrip: 'ULTRA is the flagship brand of',
    catKicker: 'What we make', catTitle: 'Built for every application', catAll: 'View all products',
    catIntro: 'Three problem areas, one standard of performance. ULTRA starts with tile adhesives; rendering and concrete repair follow.',
    cat1: 'Tiling', cat2: 'Wall Rendering', cat3: 'Concrete Repair',
    cat1b: 'Tile adhesives and grouts for walls, floors, pools and facades — indoors and out.',
    cat2b: 'Plasters and renders that go on smooth and stay put on block, brick and concrete.',
    cat3b: 'Patching and structural repair mortars that restore strength to damaged concrete.',
    catLink1: 'Explore range', catLink2: 'In development', catLink3: 'In development',
    catMeta1: '6 products in range', catMeta2: 'Line in development', catMeta3: 'Line in development',
    prodKicker: 'Featured products', prodTitle: 'The ULTRA tile adhesive line', prodView: 'View details',
    whyKicker: 'Why ULTRA', whyTitle: 'Specified with confidence, applied with ease',
    appKicker: 'In the field', appTitle: 'Where ULTRA performs',
    appIntro: 'From submerged pools to high-rise facades — real conditions, tested on site.',
    app1: 'Swimming pools', app1sub: 'BLU PISCINA — submerged tiling, permanent bond',
    app2: 'Large-format tiles', app3: 'Facades & exteriors', app4: 'Underfloor heating',
    appMore: 'Have a project in mind?', appMoreLink: 'Talk to our technical team',
    ctaBandTitle: 'Ready to build with ULTRA?',
    ctaBandSub: 'Request a quote, ask for datasheets, or talk to our technical team about your project.',
    footAbout: 'Enjazat Albaina is a parent company housing specialised building-materials brands. ULTRA is its flagship line of construction mortars and chemical adhesives.',
    footLinks: 'Quick links', footCats: 'Categories', footAddr: 'Riyadh, Saudi Arabia',
    footCopy: '© 2026 Enjazat Albaina. All rights reserved.', footBrand: 'Nothing Moves',
    imgPh: 'Project photo placeholder', comingChip: 'Coming soon',
    prodPageTitle: 'Products', prodPageSub: 'The ULTRA tile adhesive line — classified to EN 12004, produced locally, always in stock.',
    fAll: 'All products', fPool: 'Pools & wet areas', fFlex: 'Flexible S1 / S2', fFiber: 'Fiber-reinforced',
    comingTitle: 'Next from ULTRA', comingSub: 'Two new lines are in development and will join the range soon.',
    comingRender: 'Wall rendering line', comingRenderSub: 'Plasters and renders for block, brick and concrete.',
    comingConcrete: 'Concrete repair line', comingConcreteSub: 'Patching and structural repair mortars.',
    back: 'All products',
    spClass: 'Classification', spDeform: 'Deformability', spOpen: 'Open time', spCov: 'Coverage', spSubst: 'Substrates', spPack: 'Packaging', spColor: 'Colour',
    dsBtn: 'Download datasheet (PDF)', dQuote: 'Request a quote for this product',
    subConcrete: 'Concrete, cement render, screed', subAll: 'Concrete, render, screed, existing tiles', colGray: 'Gray / White', colBlue: 'Pool blue',
    aboutKicker: 'The parent company', aboutTitle: 'Achievements, built on evidence.',
    aboutSub: 'Enjazat Albaina is a parent company that builds and operates specialised building-materials brands for the region.',
    storyH: 'One house, focused brands',
    story1: 'Rather than stretching one name across every product, Enjazat Albaina builds dedicated brands — each with its own focus, formulation expertise and identity. The company handles what brands share: manufacturing discipline, quality control, distribution and supply.',
    story2: 'ULTRA is the first: a line of construction mortars and chemical adhesives engineered and tested to European standards, produced for the realities of regional sites — heat, movement and demanding schedules.',
    missionQ: '“Products specified with confidence, available when the site needs them.”',
    brandsH: 'Our brands', brandUltraSub: 'Construction mortars & chemical adhesives. Six tile adhesives in market; rendering and concrete repair lines in development.',
    brandVisit: 'Explore ULTRA products',
    futureSlot: 'Room for what’s next', futureSub: 'The house is built to hold more brands as Enjazat Albaina grows.',
    conKicker: 'Contact', conTitle: 'Talk to our team',
    conSub: 'Quotes, datasheets, technical questions — we answer quickly.',
    fName: 'Full name', fEmail: 'Email', fPhone: 'Phone', fMsg: 'How can we help?', fSend: 'Send message',
    conPhoneL: 'Phone', conEmailL: 'Email', conAddrL: 'Address', waBtn: 'Chat on WhatsApp', mapPh: 'Map placeholder',
    sentOk: 'Thanks — your message has been sent. We’ll be in touch shortly.',
    siteName: 'Enjazat Albaina — ULTRA',
    metaTitle: 'Enjazat Albaina — ULTRA | Construction Mortars & Chemical Adhesives',
    metaDesc: 'ULTRA by Enjazat Albaina — high-performance construction mortars and chemical adhesives for tiling, rendering and concrete repair. Classified to EN 12004, produced locally.',
    langSwitch: 'التبديل إلى العربية',
  };

  var AR = {
    navHome: 'الرئيسية', navProducts: 'المنتجات', navAbout: 'من نحن', navContact: 'اتصل بنا',
    ctaQuote: 'اطلب عرض سعر', ctaExplore: 'استكشف المنتجات',
    parentLine: 'علامة من إنجازات البينة',
    heroBigA: 'لا شيء', heroBigB: 'يتحرك.',
    heroSub: 'مواد لاصقة كيميائية ومونة إنشائية عالية الأداء — مصممة للتبليط واللياسة وإصلاح الخرسانة بجودة تدوم.',
    statCert: 'فئة اللاصق المعتمدة', statFlex: 'فئات المرونة', statStd: 'المعيار الأوروبي', statBag: 'حجم الكيس القياسي',
    parentStrip: 'ألترا هي العلامة الرئيسية لشركة',
    catKicker: 'ماذا نصنع', catTitle: 'حلول لكل تطبيق', catAll: 'عرض كل المنتجات',
    catIntro: 'ثلاثة مجالات، ومعيار أداء واحد. تبدأ ألترا بلواصق البلاط، وتليها اللياسة وإصلاح الخرسانة.',
    cat1: 'التبليط', cat2: 'اللياسة والتلبيس', cat3: 'إصلاح الخرسانة',
    cat1b: 'لواصق بلاط وروبة للجدران والأرضيات والمسابح والواجهات — داخلياً وخارجياً.',
    cat2b: 'لياسة ومواد تلبيس تُفرد بسلاسة وتثبت على البلوك والطوب والخرسانة.',
    cat3b: 'مونة ترميم وإصلاح إنشائي تعيد القوة للخرسانة المتضررة.',
    catLink1: 'استكشف المجموعة', catLink2: 'قيد التطوير', catLink3: 'قيد التطوير',
    catMeta1: '٦ منتجات في المجموعة', catMeta2: 'الخط قيد التطوير', catMeta3: 'الخط قيد التطوير',
    prodKicker: 'منتجات مميزة', prodTitle: 'مجموعة لواصق البلاط من ألترا', prodView: 'عرض التفاصيل',
    whyKicker: 'لماذا ألترا', whyTitle: 'مواصفات موثوقة وتطبيق سهل',
    appKicker: 'في الميدان', appTitle: 'أين تتفوق ألترا',
    appIntro: 'من المسابح المغمورة إلى الواجهات الشاهقة — ظروف حقيقية، مختبرة في الموقع.',
    app1: 'المسابح', app1sub: 'بلو بيسينا — تبليط مغمور وثبات دائم',
    app2: 'البلاط كبير الحجم', app3: 'الواجهات الخارجية', app4: 'التدفئة الأرضية',
    appMore: 'لديك مشروع؟', appMoreLink: 'تحدث مع فريقنا الفني',
    ctaBandTitle: 'جاهز للبناء مع ألترا؟',
    ctaBandSub: 'اطلب عرض سعر، أو النشرات الفنية، أو تحدث مع فريقنا الفني حول مشروعك.',
    footAbout: 'إنجازات البينة شركة أم تضم علامات متخصصة في مواد البناء. ألترا هي خطها الرئيسي للمونة الإنشائية واللواصق الكيميائية.',
    footLinks: 'روابط سريعة', footCats: 'الفئات', footAddr: 'الرياض، المملكة العربية السعودية',
    footCopy: '© 2026 إنجازات البينة. جميع الحقوق محفوظة.', footBrand: 'لا شيء يتحرك',
    imgPh: 'صورة مشروع (بديل مؤقت)', comingChip: 'قريباً',
    prodPageTitle: 'المنتجات', prodPageSub: 'مجموعة لواصق البلاط من ألترا — مصنفة وفق EN 12004، إنتاج محلي وتوفر دائم.',
    fAll: 'كل المنتجات', fPool: 'المسابح والمناطق الرطبة', fFlex: 'مرن S1 / S2', fFiber: 'مقوى بالألياف',
    comingTitle: 'قادم من ألترا', comingSub: 'خطان جديدان قيد التطوير وسينضمان إلى المجموعة قريباً.',
    comingRender: 'خط اللياسة والتلبيس', comingRenderSub: 'لياسة ومواد تلبيس للبلوك والطوب والخرسانة.',
    comingConcrete: 'خط إصلاح الخرسانة', comingConcreteSub: 'مونة ترميم وإصلاح إنشائي.',
    back: 'كل المنتجات',
    spClass: 'التصنيف', spDeform: 'المرونة', spOpen: 'الزمن المفتوح', spCov: 'التغطية', spSubst: 'الأسطح', spPack: 'التعبئة', spColor: 'اللون',
    dsBtn: 'تحميل النشرة الفنية (PDF)', dQuote: 'اطلب عرض سعر لهذا المنتج',
    subConcrete: 'خرسانة، لياسة أسمنتية، أرضيات', subAll: 'خرسانة، لياسة، أرضيات، بلاط قائم', colGray: 'رمادي / أبيض', colBlue: 'أزرق المسابح',
    aboutKicker: 'الشركة الأم', aboutTitle: 'إنجازات مبنية على البينة.',
    aboutSub: 'إنجازات البينة شركة أم تبني وتدير علامات متخصصة في مواد البناء للمنطقة.',
    storyH: 'بيت واحد وعلامات متخصصة',
    story1: 'بدلاً من مد اسم واحد على كل المنتجات، تبني إنجازات البينة علامات متخصصة — لكل منها تركيزها وخبرتها في التركيبات وهويتها الخاصة. وتتولى الشركة ما تتشاركه العلامات: انضباط التصنيع، ومراقبة الجودة، والتوزيع والتوريد.',
    story2: 'ألترا هي الأولى: مجموعة مونة إنشائية ولواصق كيميائية مصممة ومختبرة وفق المعايير الأوروبية، ومنتجة لواقع مواقع المنطقة — الحرارة والحركة والجداول الصعبة.',
    missionQ: '«منتجات تُعتمد بثقة، ومتوفرة حين يحتاجها الموقع.»',
    brandsH: 'علاماتنا', brandUltraSub: 'مونة إنشائية ولواصق كيميائية. ستة لواصق بلاط في السوق؛ وخطا اللياسة وإصلاح الخرسانة قيد التطوير.',
    brandVisit: 'استكشف منتجات ألترا',
    futureSlot: 'مساحة لما هو قادم', futureSub: 'البيت مبني ليستوعب مزيداً من العلامات مع نمو إنجازات البينة.',
    conKicker: 'تواصل', conTitle: 'تحدث مع فريقنا',
    conSub: 'عروض أسعار، نشرات فنية، أسئلة تقنية — نجيب بسرعة.',
    fName: 'الاسم الكامل', fEmail: 'البريد الإلكتروني', fPhone: 'الهاتف', fMsg: 'كيف نساعدك؟', fSend: 'إرسال الرسالة',
    conPhoneL: 'الهاتف', conEmailL: 'البريد', conAddrL: 'العنوان', waBtn: 'محادثة واتساب', mapPh: 'خريطة (بديل مؤقت)',
    sentOk: 'شكراً — تم إرسال رسالتك. سنتواصل معك قريباً.',
    siteName: 'إنجازات البينة — ألترا',
    metaTitle: 'إنجازات البينة — ألترا | مونة إنشائية ولواصق كيميائية',
    metaDesc: 'ألترا من إنجازات البينة — مونة إنشائية ولواصق كيميائية عالية الأداء للتبليط واللياسة وإصلاح الخرسانة. مصنّفة وفق EN 12004 وبإنتاج محلي.',
    langSwitch: 'Switch to English',
  };

  /* ---------------- Product data ----------------
     To add / change a product image: drop the file in assets/products/ and set
     `image` to its path (e.g. 'assets/products/my-product.jpg'). Optionally set
     `iw`/`ih` to the file's pixel width/height (prevents layout shift). Leave
     `image: null` to fall back to the CSS-drawn ULTRA bag mockup.
  --------------------------------------------------------------- */
  var DESC = {
    en: {
      blu: ['Pool-grade blue tile adhesive for submerged and wet areas — permanent underwater bond.',
        'A polymer-modified cementitious adhesive in a distinctive pool blue, formulated for submerged tiling in pools, fountains and wet areas. Permanent underwater bond with high resistance to chlorine and salts.'],
      superflex: ['C2TE S2 highly-deformable adhesive for facades, large formats and high movement.',
        'The most deformable adhesive in the range. Built for exterior facades, large-format tiles and substrates with significant movement and thermal expansion.'],
      flex: ['C2TE S1 deformable adhesive for heated screeds and large ceramic formats.',
        'A dependable flexible adhesive for heated floors and large ceramic formats — the right balance of deformability and workability.'],
      fix: ['C2TE high-grab adhesive for general interior and exterior fixing.',
        'The workhorse of the range: a high-grab adhesive with extended open time for general wall and floor tiling, indoors and out.'],
      fiber1: ['C2TE S1 fiber-reinforced adhesive for extra shear strength and improved grab.',
        'An S1 formulation reinforced with micro-fibers for higher shear strength and grab — ideal for walls and applications that demand immediate hold.'],
      fiber2: ['C2TE S2 fiber-reinforced adhesive for maximum flexibility in demanding jobs.',
        'The top of the range: S2 deformability plus fiber reinforcement for the hardest jobs — tall facades, oversized tiles and high-movement substrates.'],
    },
    ar: {
      blu: ['لاصق بلاط أزرق مخصص للمسابح والمناطق المغمورة — ثبات دائم تحت الماء.',
        'لاصق أسمنتي محسّن بالبوليمر بلون أزرق مميز، مصمم للتبليط المغمور في المسابح والنوافير والمناطق الرطبة. ثبات دائم تحت الماء ومقاومة عالية للكلور والأملاح.'],
      superflex: ['لاصق C2TE S2 فائق المرونة للواجهات والبلاط كبير الحجم والحركة العالية.',
        'أعلى درجات المرونة في المجموعة. مصمم للواجهات الخارجية والبلاط كبير الحجم والأسطح المعرضة لحركة وتمدد حراري كبير.'],
      flex: ['لاصق C2TE S1 مرن للأرضيات المعرضة للحرارة والبلاط الخزفي الكبير.',
        'لاصق مرن موثوق للأرضيات ذات التدفئة والبلاط الخزفي كبير الحجم. توازن مثالي بين المرونة وسهولة التطبيق.'],
      fix: ['لاصق C2TE عالي التماسك للاستخدام العام داخلياً وخارجياً.',
        'حصان العمل في المجموعة: لاصق عالي التماسك بزمن مفتوح ممتد للتبليط العام على الجدران والأرضيات، داخلياً وخارجياً.'],
      fiber1: ['لاصق C2TE S1 مقوى بالألياف لقوة قص إضافية وتماسك محسّن.',
        'تركيبة S1 معززة بألياف دقيقة ترفع قوة القص والتماسك، مثالية للجدران والتطبيقات التي تتطلب ثباتاً فورياً.'],
      fiber2: ['لاصق C2TE S2 مقوى بالألياف لأقصى مرونة في التطبيقات الصعبة.',
        'قمة المجموعة: مرونة S2 مع تقوية بالألياف لأصعب التطبيقات — واجهات شاهقة، بلاط ضخم، وأسطح عالية الحركة.'],
    },
  };

  var RAW = [
    { key: 'blu', name: 'BLU PISCINA', cls: 'C2TE S1', image: 'assets/products/blu-piscina-hero.png', iw: 697, ih: 1200, fam: 'pool', tagKey: 'pool', tagBg: '#2360C6', deform: 'S1', openT: '≥ 30 min', cov: '3–5 kg/m²', colorKey: 'colBlue', substKey: 'subConcrete' },
    { key: 'superflex', name: 'C2TE S2 SUPER FLEX', cls: 'C2TE S2', image: 'assets/products/c2te-s2-super-flex.png', iw: 705, ih: 1200, fam: 'flex', tagKey: 'tile', tagBg: '#1F2226', deform: 'S2', openT: '≥ 30 min', cov: '2.5–5 kg/m²', colorKey: 'colGray', substKey: 'subAll' },
    { key: 'flex', name: 'C2TE S1 FLEX', cls: 'C2TE S1', image: 'assets/products/c2te-s1-flex.png', iw: 708, ih: 1200, fam: 'flex', tagKey: 'tile', tagBg: '#1F2226', deform: 'S1', openT: '≥ 30 min', cov: '2.5–5 kg/m²', colorKey: 'colGray', substKey: 'subAll' },
    { key: 'fix', name: 'C2TE FIX', cls: 'C2TE', image: 'assets/products/c2te-fix.png', iw: 698, ih: 1200, fam: 'std', tagKey: 'tile', tagBg: '#1F2226', deform: '—', openT: '≥ 30 min', cov: '2–4 kg/m²', colorKey: 'colGray', substKey: 'subConcrete' },
    { key: 'fiber1', name: 'C2TE S1 FIBER', cls: 'C2TE S1', image: 'assets/products/c2te-s1-fiber.png', iw: 695, ih: 1200, fam: 'fiber', tagKey: 'tile', tagBg: '#1F2226', deform: 'S1', openT: '≥ 30 min', cov: '2.5–5 kg/m²', colorKey: 'colGray', substKey: 'subAll' },
    { key: 'fiber2', name: 'C2TE S2 FIBER', cls: 'C2TE S2', image: 'assets/products/c2te-s2-fiber.png', iw: 692, ih: 1200, fam: 'fiber', tagKey: 'tile', tagBg: '#1F2226', deform: 'S2', openT: '≥ 30 min', cov: '2.5–5 kg/m²', colorKey: 'colGray', substKey: 'subAll' },
  ];

  /* Brand hero image (transparent cutout — also used decoratively on Home + About) */
  var HERO_IMG = 'assets/products/blu-piscina-hero.png', HERO_W = 697, HERO_H = 1200;

  /* ---------------- Helpers ---------------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* Hash target for a page (used for real hrefs → keyboard/deep-link friendly) */
  function hrefFor(page, key) {
    if (page === 'home') return '#/';
    if (page === 'product') return '#/product/' + key;
    return '#/' + page;
  }

  function productImg(p, lazy) {
    var wh = (p.iw && p.ih) ? ' width="' + p.iw + '" height="' + p.ih + '"' : '';
    return '<img src="' + p.image + '" alt="' + esc(p.name) + '"' + wh +
      (lazy ? ' loading="lazy"' : '') + ' decoding="async">';
  }

  function derive() {
    var ar = state.lang === 'ar';
    var t = ar ? AR : EN;
    var tagPool = ar ? 'مسابح' : 'Pools';
    var tagTile = ar ? 'تبليط' : 'Tiling';
    var D = ar ? DESC.ar : DESC.en;

    var products = RAW.map(function (p, i) {
      return {
        key: p.key, name: p.name, cls: p.cls, image: p.image, iw: p.iw, ih: p.ih,
        noImg: !p.image, fam: p.fam,
        tag: p.tagKey === 'pool' ? tagPool : tagTile, tagBg: p.tagBg,
        deform: p.deform, openT: p.openT, cov: p.cov,
        color: t[p.colorKey], subst: t[p.substKey],
        short: D[p.key][0], long: D[p.key][1], size: '25KG', i: i,
      };
    });

    var filter = state.filter;
    var filtered = products.filter(function (p) {
      if (filter === 'all') return true;
      if (filter === 'pool') return p.fam === 'pool';
      if (filter === 'flex') return p.deform === 'S1' || p.deform === 'S2';
      if (filter === 'fiber') return p.fam === 'fiber';
      return true;
    });

    var categories = [
      { num: '01', name: t.cat1, blurb: t.cat1b, chip: '#2360C6', link: t.catLink1, meta: t.catMeta1, glyph: '▦' },
      { num: '02', name: t.cat2, blurb: t.cat2b, chip: '#1F2226', link: t.catLink2, meta: t.catMeta2, glyph: '▤' },
      { num: '03', name: t.cat3, blurb: t.cat3b, chip: '#6B7077', link: t.catLink3, meta: t.catMeta3, glyph: '▧' },
    ];

    var whys = ar ? [
      { num: '٠١', title: 'أداء موثوق', body: 'تركيبات C2TE بقوة التصاق عالية وزمن مفتوح ممتد لظروف الموقع الحقيقية.' },
      { num: '٠٢', title: 'متانة تدوم', body: 'فئات مرونة S1 وS2 تستوعب الحركة والحرارة دون تشقق أو انفصال.' },
      { num: '٠٣', title: 'جودة معتمدة', body: 'منتجات مصنفة وفق المعيار الأوروبي EN 12004 وباختبارات جودة مستمرة.' },
      { num: '٠٤', title: 'توفر محلي', body: 'إنتاج وتوزيع محلي يضمن التوفر الدائم وسرعة التوريد للمشاريع.' },
    ] : [
      { num: '01', title: 'Performance', body: 'C2TE formulations with high bond strength and extended open time for real site conditions.' },
      { num: '02', title: 'Durability', body: 'S1 and S2 deformability classes absorb movement and heat without cracking or debonding.' },
      { num: '03', title: 'Certified quality', body: 'Classified to EN 12004 with continuous batch testing and quality control.' },
      { num: '04', title: 'Local availability', body: 'Produced and distributed locally — always in stock, fast delivery to site.' },
    ];

    var d = products[state.pi] || products[0];
    var dRows = [
      { k: t.spClass, v: d.cls + ' · EN 12004' },
      { k: t.spDeform, v: d.deform },
      { k: t.spOpen, v: d.openT },
      { k: t.spCov, v: d.cov },
      { k: t.spSubst, v: d.subst },
      { k: t.spColor, v: d.color },
      { k: t.spPack, v: '25 kg' },
    ];

    return {
      ar: ar, t: t, products: products, filtered: filtered, categories: categories,
      whys: whys, d: d, dRows: dRows,
      arrow: ar ? '←' : '→', backArrow: ar ? '→' : '←',
    };
  }

  /* ---------------- SVG snippets (decorative → aria-hidden) ---------------- */
  var WA_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.16-1.35A10 10 0 1 0 12 2zm5.4 14.1c-.23.64-1.33 1.22-1.85 1.27-.5.05-1.12.24-3.77-.79-3.19-1.25-5.2-4.5-5.36-4.71-.15-.21-1.27-1.69-1.27-3.22 0-1.53.8-2.28 1.09-2.6.28-.31.62-.39.83-.39h.6c.19 0 .45-.07.7.54.26.62.87 2.13.95 2.28.08.16.13.34.02.55-.1.21-.16.34-.31.52-.16.18-.33.41-.47.55-.16.15-.32.32-.14.63.18.31.8 1.32 1.72 2.14 1.18 1.05 2.17 1.38 2.48 1.53.31.16.49.13.67-.08.18-.21.77-.9.98-1.21.2-.31.41-.26.69-.16.28.11 1.8.85 2.11 1 .31.16.51.23.59.36.07.13.07.75-.16 1.39z"/></svg>';
  var DL_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';
  var WA_LINK = 'https://wa.me/9665XXXXXXXX';

  function bag(size) {
    return '<div class="bag bag--' + size + '" aria-hidden="true">' +
      '<div class="diag"></div><div class="cap"></div>' +
      '<div class="brand">ULTRA</div>' +
      '<div class="tagline">NOTHING MOVES</div>' +
      '<div class="kg">25 KG</div></div>';
  }

  function productCard(p) {
    var media = p.image ? productImg(p, true) : bag('sm');
    return '<a class="prod-card" href="' + hrefFor('product', p.key) + '">' +
      '<div class="figure">' + media +
      '<span class="tag" style="background:' + p.tagBg + '">' + esc(p.tag) + '</span></div>' +
      '<div class="body">' +
      '<div class="cls">' + esc(p.cls) + ' · EN 12004</div>' +
      '<div class="name">' + esc(p.name) + '</div>' +
      '<p class="short">' + esc(p.short) + '</p>' +
      '<span class="view">' + esc(V.t.prodView) + ' <span class="arrow" aria-hidden="true">' + V.arrow + '</span></span>' +
      '</div></a>';
  }

  /* ---------------- Header / Footer ---------------- */
  function header() {
    var t = V.t, dark = state.page === 'home';
    function navLink(page, label) {
      var active = (page === 'products' && (state.page === 'products' || state.page === 'detail')) || state.page === page;
      return '<a href="' + hrefFor(page) + '" class="' + (active ? 'is-active' : '') + '"' +
        (active ? ' aria-current="page"' : '') + '>' + esc(label) + '</a>';
    }
    return '<header id="hdr" class="header' + (dark ? ' header--dark' : '') + '">' +
      '<div class="header__inner">' +
      '<a class="header__logo" href="' + hrefFor('home') + '" aria-label="Enjazat Albaina — home"><img src="assets/enjazat-logo-' + (dark ? 'cream' : 'charcoal') + '.png" alt="Enjazat Albaina" width="140" height="71"></a>' +
      '<nav class="nav" aria-label="Primary">' +
      navLink('home', t.navHome) + navLink('products', t.navProducts) +
      navLink('about', t.navAbout) + navLink('contact', t.navContact) +
      '</nav>' +
      '<button type="button" class="langtoggle" data-lang-toggle aria-label="' + esc(t.langSwitch) + '">' +
      '<span class="l-en" aria-hidden="true">EN</span><span class="l-ar" aria-hidden="true">ع</span></button>' +
      '<a class="header__cta" href="' + hrefFor('contact') + '">' + esc(t.ctaQuote) + '</a>' +
      '<button type="button" class="header__burger" data-menu aria-label="Menu" aria-expanded="' + (state.menu ? 'true' : 'false') + '" aria-controls="mnav"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>' +
      '</div>' +
      '<div id="mnav" class="mnav' + (state.menu ? ' open' : '') + '">' +
      '<a href="' + hrefFor('home') + '">' + esc(t.navHome) + '</a>' +
      '<a href="' + hrefFor('products') + '">' + esc(t.navProducts) + '</a>' +
      '<a href="' + hrefFor('about') + '">' + esc(t.navAbout) + '</a>' +
      '<a href="' + hrefFor('contact') + '">' + esc(t.navContact) + '</a>' +
      '<a class="btn btn-blue m-cta" href="' + hrefFor('contact') + '">' + esc(t.ctaQuote) + '</a>' +
      '</div>' +
      '</header>';
  }

  function footer() {
    var t = V.t;
    return '<footer id="ftr" class="footer"><div class="footer__inner">' +
      '<div class="footer__cols">' +
      '<div class="footer__brand"><img src="assets/enjazat-logo-cream.png" alt="Enjazat Albaina" width="107" height="54" loading="lazy">' +
      '<p>' + esc(t.footAbout) + '</p></div>' +
      '<div class="footer__col"><div class="h">' + esc(t.footLinks) + '</div>' +
      '<a href="' + hrefFor('products') + '">' + esc(t.navProducts) + '</a>' +
      '<a href="' + hrefFor('about') + '">' + esc(t.navAbout) + '</a>' +
      '<a href="' + hrefFor('contact') + '">' + esc(t.navContact) + '</a></div>' +
      '<div class="footer__col"><div class="h">' + esc(t.footCats) + '</div>' +
      '<a href="' + hrefFor('products') + '">' + esc(t.cat1) + '</a>' +
      '<span>' + esc(t.cat2) + ' · ' + esc(t.comingChip) + '</span>' +
      '<span>' + esc(t.cat3) + ' · ' + esc(t.comingChip) + '</span></div>' +
      '<div class="footer__col footer__col--contact"><div class="h">' + esc(t.navContact) + '</div>' +
      '<span dir="ltr">+966 5X XXX XXXX</span><span>info@enjazatalbaina.com</span>' +
      '<span>' + esc(t.footAddr) + '</span></div>' +
      '</div>' +
      '<div class="footer__bottom"><span>' + esc(t.footCopy) + '</span>' +
      '<span class="brandline">ULTRA — ' + esc(t.footBrand) + '</span></div>' +
      '</div></footer>';
  }

  /* ---------------- Views ---------------- */
  function viewHome() {
    var t = V.t;
    var cats = V.categories.map(function (c) {
      return '<a class="cat-card" href="' + hrefFor('products') + '">' +
        '<div class="chip" style="background:' + c.chip + '" aria-hidden="true"></div>' +
        '<div class="body"><div class="top">' +
        '<span class="num" aria-hidden="true">' + c.num + '</span>' +
        '<span class="glyph" style="color:' + c.chip + '" aria-hidden="true">' + c.glyph + '</span></div>' +
        '<div class="name">' + esc(c.name) + '</div>' +
        '<p class="blurb">' + esc(c.blurb) + '</p>' +
        '<div class="foot"><span class="meta">' + esc(c.meta) + '</span>' +
        '<span class="link">' + esc(c.link) + ' <span class="arrow" aria-hidden="true">' + V.arrow + '</span></span></div>' +
        '</div></a>';
    }).join('');

    var prods = V.products.map(productCard).join('');

    var whys = V.whys.map(function (w) {
      return '<div class="why-item"><div class="num" aria-hidden="true">' + esc(w.num) + '</div>' +
        '<div class="title">' + esc(w.title) + '</div>' +
        '<p>' + esc(w.body) + '</p></div>';
    }).join('');

    return '<main>' +
      /* Hero */
      '<section class="hero"><div class="hero__diag" aria-hidden="true"></div>' +
      '<div class="hero__inner"><div class="hero__grid">' +
      '<div class="hero__col">' +
      '<div class="eyebrow"><span class="bar" aria-hidden="true"></span><span class="txt">' + esc(t.parentLine) + '</span></div>' +
      '<h1>' + esc(t.heroBigA) + '</h1>' +
      '<div class="hero__big2" aria-hidden="true">' + esc(t.heroBigB) + '</div>' +
      '<p class="hero__sub">' + esc(t.heroSub) + '</p>' +
      '<div class="hero__cta">' +
      '<a class="btn btn-white" href="' + hrefFor('products') + '">' + esc(t.ctaExplore) + '</a>' +
      '<a class="btn btn-ghost-light" href="' + hrefFor('contact') + '">' + esc(t.ctaQuote) + '</a>' +
      '</div></div>' +
      '<img class="hero__img" src="' + HERO_IMG + '" alt="ULTRA Blu Piscina 25kg" width="' + HERO_W + '" height="' + HERO_H + '" decoding="async" fetchpriority="high">' +
      '</div>' +
      '<div class="hero__stats">' +
      '<div><div class="num">C2TE</div><div class="lbl">' + esc(t.statCert) + '</div></div>' +
      '<div><div class="num">S1 / S2</div><div class="lbl">' + esc(t.statFlex) + '</div></div>' +
      '<div><div class="num">EN 12004</div><div class="lbl">' + esc(t.statStd) + '</div></div>' +
      '<div><div class="num">25 <small>KG</small></div><div class="lbl">' + esc(t.statBag) + '</div></div>' +
      '</div></div></section>' +
      /* Parent strip */
      '<div class="parentstrip"><div class="parentstrip__inner">' +
      '<span class="txt">' + esc(t.parentStrip) + '</span>' +
      '<img src="assets/enjazat-logo-cream.png" alt="Enjazat Albaina" width="67" height="34" loading="lazy"></div></div>' +
      /* Categories */
      '<section class="dotted section"><div class="ghostnum" aria-hidden="true" style="top:24px;inset-inline-end:-10px;font-size:230px;letter-spacing:.02em">01</div>' +
      '<div class="wrap pad-cats" style="position:relative">' +
      '<div class="section-head"><div style="max-width:560px">' +
      '<div class="kicker">01 — ' + esc(t.catKicker) + '</div>' +
      '<h2>' + esc(t.catTitle) + '</h2>' +
      '<p class="lede">' + esc(t.catIntro) + '</p></div>' +
      '<a class="link-underline" href="' + hrefFor('products') + '">' + esc(t.catAll) + ' <span class="arrow" aria-hidden="true">' + V.arrow + '</span></a></div>' +
      '<div class="cat-grid">' + cats + '</div></div></section>' +
      /* Featured products */
      '<section class="section" style="background:#EDE8DC"><div class="wrap pad-prods">' +
      '<div class="section-head"><div>' +
      '<div class="kicker">02 — ' + esc(t.prodKicker) + '</div>' +
      '<h2>' + esc(t.prodTitle) + '</h2></div>' +
      '<a class="link-underline" href="' + hrefFor('products') + '">' + esc(t.catAll) + ' <span class="arrow" aria-hidden="true">' + V.arrow + '</span></a></div>' +
      '<div class="prod-grid">' + prods + '</div></div></section>' +
      /* Why */
      '<section class="why"><div class="wrap pad-why">' +
      '<div style="max-width:680px;margin-bottom:60px">' +
      '<div class="kicker">03 — ' + esc(t.whyKicker) + '</div>' +
      '<h2 class="h2">' + esc(t.whyTitle) + '</h2></div>' +
      '<div class="why-grid">' + whys + '</div></div></section>' +
      /* Applications */
      '<section class="dotted section"><div class="ghostnum" aria-hidden="true" style="top:40px;inset-inline-start:-10px;font-size:230px">04</div>' +
      '<div class="wrap pad-apps" style="position:relative">' +
      '<div class="section-head"><div>' +
      '<div class="kicker">04 — ' + esc(t.appKicker) + '</div>' +
      '<h2>' + esc(t.appTitle) + '</h2></div>' +
      '<p class="lede" style="max-width:300px;text-align:end">' + esc(t.appIntro) + '</p></div>' +
      '<div class="app-grid">' +
      '<div class="app-tile hatch-a"><div class="ph">' + esc(t.imgPh) + '</div>' +
      '<div class="cap"><div class="t">' + esc(t.app1) + '</div><div class="s">' + esc(t.app1sub) + '</div></div></div>' +
      '<div class="app-tile hatch-b"><div class="cap"><div class="t">' + esc(t.app2) + '</div></div></div>' +
      '<div class="app-tile hatch-c"><div class="cap"><div class="t">' + esc(t.app3) + '</div></div></div>' +
      '<div class="app-tile hatch-d"><div class="cap"><div class="t">' + esc(t.app4) + '</div></div></div>' +
      '<div class="app-more"><div class="diag" aria-hidden="true"></div>' +
      '<div class="t">' + esc(t.appMore) + '</div>' +
      '<a href="' + hrefFor('contact') + '">' + esc(t.appMoreLink) + ' <span class="arrow" aria-hidden="true">' + V.arrow + '</span></a></div>' +
      '</div></div></section>' +
      /* CTA band */
      '<section class="ctaband"><div class="diag" aria-hidden="true"></div><div class="ctaband__inner">' +
      '<div style="max-width:580px"><h2>' + esc(t.ctaBandTitle) + '</h2>' +
      '<p>' + esc(t.ctaBandSub) + '</p></div>' +
      '<div class="actions">' +
      '<a class="btn btn-blue" href="' + hrefFor('contact') + '">' + esc(t.ctaQuote) + '</a>' +
      '<a class="btn btn-wa" href="' + WA_LINK + '" rel="noopener">' + WA_SVG + esc(t.waBtn) + '</a>' +
      '</div></div></section>' +
      '</main>';
  }

  function viewProducts() {
    var t = V.t;
    var chipDefs = [['all', t.fAll], ['pool', t.fPool], ['flex', t.fFlex], ['fiber', t.fFiber]];
    var chips = chipDefs.map(function (c) {
      var on = state.filter === c[0];
      return '<button type="button" class="chip-btn' + (on ? ' is-active' : '') + '" data-filter="' + c[0] + '" aria-pressed="' + (on ? 'true' : 'false') + '">' + esc(c[1]) + '</button>';
    }).join('');
    var grid = V.filtered.map(productCard).join('');

    return '<main>' +
      '<section class="dotted prodhero"><div class="ghostnum" aria-hidden="true" style="top:-30px;inset-inline-end:-10px;font-size:220px">ULTRA</div>' +
      '<div class="wrap pad-prodhero" style="position:relative">' +
      '<div class="kicker">ULTRA — ' + esc(t.prodKicker) + '</div>' +
      '<h1>' + esc(t.prodPageTitle) + '</h1>' +
      '<p class="sub">' + esc(t.prodPageSub) + '</p>' +
      '<div class="chips" id="prodchips" role="group" aria-label="' + esc(t.prodPageTitle) + '">' + chips + '</div></div></section>' +
      '<section style="background:#EDE8DC"><div class="wrap pad-prodgrid">' +
      '<div class="prod-grid" id="prodgrid">' + grid + '</div></div></section>' +
      '<section class="dotted"><div class="wrap pad-coming">' +
      '<div style="margin-bottom:36px"><div class="kicker">' + esc(t.comingChip) + '</div>' +
      '<h2 class="h2" style="font-size:36px;margin-bottom:10px">' + esc(t.comingTitle) + '</h2>' +
      '<p style="margin:0;font-size:15px;color:#5d5d56">' + esc(t.comingSub) + '</p></div>' +
      '<div class="coming-grid">' +
      '<div class="coming-card"><span class="badge">' + esc(t.comingChip) + '</span>' +
      '<div class="t">' + esc(t.comingRender) + '</div><p>' + esc(t.comingRenderSub) + '</p></div>' +
      '<div class="coming-card"><span class="badge">' + esc(t.comingChip) + '</span>' +
      '<div class="t">' + esc(t.comingConcrete) + '</div><p>' + esc(t.comingConcreteSub) + '</p></div>' +
      '</div></div></section>' +
      '</main>';
  }

  function viewDetail() {
    var t = V.t, d = V.d;
    var media = d.image ? productImg(d, true) : bag('lg');
    var rows = V.dRows.map(function (r) {
      return '<div class="spec-row"><span class="k">' + esc(r.k) + '</span><span class="v">' + esc(r.v) + '</span></div>';
    }).join('');
    return '<main class="detail"><div class="wrap pad-detail">' +
      '<a class="back-link" href="' + hrefFor('products') + '"><span class="arrow" aria-hidden="true">' + V.backArrow + '</span> ' + esc(t.back) + '</a>' +
      '<div class="detail-grid">' +
      '<div class="detail-figure">' +
      '<span class="tag" style="background:' + d.tagBg + '">' + esc(d.tag) + '</span>' + media + '</div>' +
      '<div><div class="over">ULTRA · ' + esc(d.cls) + ' · EN 12004</div>' +
      '<h1>' + esc(d.name) + '</h1>' +
      '<div class="size">' + esc(d.size) + '</div>' +
      '<p class="long">' + esc(d.long) + '</p>' +
      '<div class="spec">' + rows + '</div>' +
      '<div class="detail-actions">' +
      '<button type="button" class="btn btn-blue" data-noop>' + DL_SVG + esc(t.dsBtn) + '</button>' +
      '<a class="btn btn-outline-dark" href="' + hrefFor('contact') + '">' + esc(t.dQuote) + '</a>' +
      '</div></div></div></div></main>';
  }

  function viewAbout() {
    var t = V.t;
    return '<main>' +
      '<section class="about-hero"><div class="diag" aria-hidden="true"></div>' +
      '<div class="about-hero__inner">' +
      '<div class="kicker">' + esc(t.aboutKicker) + '</div>' +
      '<h1>' + esc(t.aboutTitle) + '</h1>' +
      '<p class="sub">' + esc(t.aboutSub) + '</p>' +
      '<img src="assets/enjazat-logo-cream.png" alt="Enjazat Albaina" width="176" height="90" loading="lazy"></div></section>' +
      '<section class="dotted"><div class="wrap pad-story story">' +
      '<h2>' + esc(t.storyH) + '</h2>' +
      '<div class="body"><p>' + esc(t.story1) + '</p><p>' + esc(t.story2) + '</p>' +
      '<div class="mission">' + esc(t.missionQ) + '</div></div></div></section>' +
      '<section class="brands"><div class="wrap pad-brands">' +
      '<h2>' + esc(t.brandsH) + '</h2>' +
      '<div class="brands-grid">' +
      '<div class="brand-ultra"><div class="diag" aria-hidden="true"></div>' +
      '<div class="content"><div class="logo">ULTRA</div>' +
      '<div class="tagline">Nothing Moves</div>' +
      '<p>' + esc(t.brandUltraSub) + '</p>' +
      '<a class="visit" href="' + hrefFor('products') + '">' + esc(t.brandVisit) + ' <span class="arrow" aria-hidden="true">' + V.arrow + '</span></a></div>' +
      '<img src="' + HERO_IMG + '" alt="ULTRA Blu Piscina" width="' + HERO_W + '" height="' + HERO_H + '" loading="lazy" decoding="async"></div>' +
      '<div class="brand-future"><div class="t">' + esc(t.futureSlot) + '</div>' +
      '<p>' + esc(t.futureSub) + '</p></div>' +
      '</div></div></section>' +
      '</main>';
  }

  function viewContact() {
    var t = V.t;
    return '<main class="dotted contact"><div class="ghostnum" aria-hidden="true" style="top:20px;inset-inline-end:-10px;font-size:210px;color:rgba(43,43,43,.04)">ع</div>' +
      '<div class="wrap pad-contact" style="position:relative">' +
      '<div class="kicker">' + esc(t.conKicker) + '</div>' +
      '<h1>' + esc(t.conTitle) + '</h1>' +
      '<p class="sub">' + esc(t.conSub) + '</p>' +
      '<div class="contact-grid">' +
      '<form class="form" data-contact-form novalidate>' +
      '<div class="row2">' +
      '<label for="f-name">' + esc(t.fName) + '<input id="f-name" type="text" name="name" autocomplete="name" required></label>' +
      '<label for="f-phone">' + esc(t.fPhone) + '<input id="f-phone" type="tel" name="phone" autocomplete="tel" dir="ltr"></label>' +
      '</div>' +
      '<label for="f-email">' + esc(t.fEmail) + '<input id="f-email" type="email" name="email" autocomplete="email" dir="ltr" required></label>' +
      '<label for="f-msg">' + esc(t.fMsg) + '<textarea id="f-msg" rows="5" name="message"></textarea></label>' +
      '<button type="submit" class="btn btn-blue submit">' + esc(t.fSend) + '</button>' +
      '<p data-form-status role="status" aria-live="polite" style="margin:0;display:none;color:#2360C6;font-weight:600;font-size:14px"></p>' +
      '</form>' +
      '<div class="contact-info">' +
      '<div class="info-row"><span class="k">' + esc(t.conPhoneL) + '</span><span class="v" dir="ltr">+966 5X XXX XXXX</span></div>' +
      '<div class="info-row"><span class="k">' + esc(t.conEmailL) + '</span><span class="v">info@enjazatalbaina.com</span></div>' +
      '<div class="info-row"><span class="k">' + esc(t.conAddrL) + '</span><span class="v">' + esc(t.footAddr) + '</span></div>' +
      '<a class="btn btn-wa" href="' + WA_LINK + '" rel="noopener">' + WA_SVG + esc(t.waBtn) + '</a>' +
      '<div class="mapph" aria-hidden="true"><span>' + esc(t.mapPh) + '</span></div>' +
      '</div></div></div></main>';
  }

  /* ---------------- Render ---------------- */
  var V; // current derived view-model
  var root = document.getElementById('app');

  function currentView() {
    switch (state.page) {
      case 'products': return viewProducts();
      case 'detail': return viewDetail();
      case 'about': return viewAbout();
      case 'contact': return viewContact();
      default: return viewHome();
    }
  }

  function renderHeader() { document.getElementById('hdr').outerHTML = header(); }
  function renderFooter() { document.getElementById('ftr').outerHTML = footer(); }
  function renderView() { document.getElementById('view').innerHTML = currentView(); }

  function setProductLd() {
    var el = document.getElementById('ld-product');
    if (state.page !== 'detail') { if (el) el.parentNode.removeChild(el); return; }
    var d = V.d;
    var data = {
      '@context': 'https://schema.org', '@type': 'Product',
      name: d.name, brand: { '@type': 'Brand', name: 'ULTRA' },
      category: 'Tile adhesive', description: d.long,
      additionalProperty: [{ '@type': 'PropertyValue', name: 'Classification', value: d.cls + ' · EN 12004' }],
    };
    if (d.image) data.image = location.origin + location.pathname.replace(/[^/]*$/, '') + d.image;
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = 'ld-product';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  function renderMeta() {
    var t = V.t, de = document.documentElement;
    de.setAttribute('dir', V.ar ? 'rtl' : 'ltr');
    de.setAttribute('lang', V.ar ? 'ar' : 'en');
    var title, desc;
    if (state.page === 'detail') { title = V.d.name + ' · ' + t.siteName; desc = V.d.short; }
    else if (state.page === 'products') { title = t.navProducts + ' · ' + t.siteName; desc = t.prodPageSub; }
    else if (state.page === 'about') { title = t.navAbout + ' · ' + t.siteName; desc = t.aboutSub; }
    else if (state.page === 'contact') { title = t.navContact + ' · ' + t.siteName; desc = t.conSub; }
    else { title = t.metaTitle; desc = t.metaDesc; }
    document.title = title;
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', desc);
    setProductLd();
  }

  /* ---------------- Routing (hash-based, deep-linkable) ---------------- */
  function parseHash() {
    var h = (location.hash || '').replace(/^#\/?/, '');
    var parts = h.split('/').filter(Boolean);
    if (!parts.length) return { page: 'home' };
    var p = parts[0];
    if (p === 'products') return { page: 'products' };
    if (p === 'about') return { page: 'about' };
    if (p === 'contact') return { page: 'contact' };
    if (p === 'product') {
      var idx = -1;
      for (var i = 0; i < RAW.length; i++) { if (RAW[i].key === parts[1]) { idx = i; break; } }
      return idx >= 0 ? { page: 'detail', pi: idx } : { page: 'products' };
    }
    return { page: 'home' };
  }

  function applyRoute() {
    var r = parseHash();
    state.page = r.page;
    if (typeof r.pi === 'number') state.pi = r.pi;
    state.menu = false;
    V = derive();
    renderHeader();
    renderView();
    renderMeta();
    window.scrollTo(0, 0);
  }

  /* ---------------- Events (delegated) ---------------- */
  document.addEventListener('click', function (e) {
    var el;

    el = e.target.closest('[data-filter]');
    if (el) {
      state.filter = el.getAttribute('data-filter');
      V = derive();
      var grid = document.getElementById('prodgrid');
      if (grid) grid.innerHTML = V.filtered.map(productCard).join('');
      var chips = document.querySelectorAll('#prodchips [data-filter]');
      for (var i = 0; i < chips.length; i++) {
        var on = chips[i].getAttribute('data-filter') === state.filter;
        chips[i].classList.toggle('is-active', on);
        chips[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      }
      return;
    }

    el = e.target.closest('[data-lang-toggle]');
    if (el) {
      state.lang = state.lang === 'en' ? 'ar' : 'en';
      try { localStorage.setItem('ea-lang', state.lang); } catch (err) {}
      V = derive();
      renderHeader();
      renderFooter();
      renderView();
      renderMeta();
      return;
    }

    el = e.target.closest('[data-menu]');
    if (el) {
      state.menu = !state.menu;
      var drawer = document.getElementById('mnav');
      if (drawer) drawer.classList.toggle('open', state.menu);
      el.setAttribute('aria-expanded', state.menu ? 'true' : 'false');
      return;
    }

    if (e.target.closest('[data-noop]')) { e.preventDefault(); return; }
  });

  document.addEventListener('submit', function (e) {
    var form = e.target.closest('[data-contact-form]');
    if (!form) return;
    e.preventDefault();
    var status = form.querySelector('[data-form-status]');
    if (status) { status.textContent = V.t.sentOk; status.style.display = 'block'; }
    form.reset();
  });

  /* ---------------- Boot ---------------- */
  function boot() {
    try { var s = localStorage.getItem('ea-lang'); if (s === 'ar' || s === 'en') state.lang = s; } catch (err) {}
    var r = parseHash();
    state.page = r.page;
    if (typeof r.pi === 'number') state.pi = r.pi;
    V = derive();
    root.innerHTML = header() + '<div id="view"></div>' + footer();
    renderView();
    renderMeta();
    window.addEventListener('hashchange', applyRoute);
    window.addEventListener('popstate', applyRoute);
  }

  boot();
})();
