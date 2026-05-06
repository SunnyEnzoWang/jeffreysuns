// Bilingual content for the site
const CONTENT = {
  nav: {
    en: { about: 'About', art: 'Art', works: 'Works', philosophy: 'Philosophy', books: 'Books', photography: 'Photo', industry: 'Industry', contact: 'Contact' },
    zh: { about: '关于', art: '雕塑', works: '作品', philosophy: '哲思', books: '著作', photography: '摄影', industry: '产业', contact: '联系' }
  },
  hero: {
    en: {
      eyebrowL: 'Sculptor · Author · Founder',
      eyebrowR: 'Based in Shanghai · CN',
      since: 'Since 1996',
      role: 'Hat Brother',
      title1: 'A life',
      title2Em: 'between',
      title3: 'hats & DAO',
      tagline: 'Letting DAO empower art, and art return to DAO — a quiet conversation between making and meaning.',
      stats: [
        { num: '30', sup: 'yrs', lbl: 'In headwear' },
        { num: '7,000', sup: '', lbl: 'Museum pieces' },
        { num: '300', sup: 'M', lbl: 'Hats produced' }
      ],
      scroll: 'Scroll to enter'
    },
    zh: {
      eyebrowL: '雕塑家 · 作者 · 创始人',
      eyebrowR: '常驻上海',
      since: '1996 年至今',
      role: '帽子哥',
      title1: '于产业',
      title2Em: '与道',
      title3: '之间',
      tagline: '让道赋能艺术，让艺术回归道——在创造与意义之间，进行一场安静的对话。',
      stats: [
        { num: '30', sup: '年', lbl: '深耕帽饰' },
        { num: '7,000', sup: '', lbl: '馆藏件数' },
        { num: '300', sup: '亿', lbl: '帽子产量' }
      ],
      scroll: '向下浏览'
    }
  },
  about: {
    en: {
      eyebrow: 'About',
      number: '01 / About',
      heading: 'A rare balance of <em>industry</em>, art, and philosophy.',
      lead: 'Jeffrey Sun — known affectionately as <em>Hat Brother</em> — has, over three decades, grown his headwear business into a top industry player.',
      paras: [
        'He is hailed as a rare individual who has struck a remarkable balance between art, culture, philosophy, philanthropy, collection and industrial entrepreneurship.',
        'As founder of the China Hat Festival (September 20), he has been consistently bringing headwear culture into the public eye, and has constructed a distinctive "Headwear Aesthetics" through exhibitions, writings and artistic practices.',
        'In 2018, he was named “The Most Influential Figure in China\'s Headwear Culture” by the China National Garment Association.'
      ],
      bullets: [
        { n: '01', text: '<strong>Founder, Foremost Group</strong> — design, R&D, production and distribution of headwear since 1996.' },
        { n: '02', text: '<strong>Founder, Foremost Hat Museum</strong> — Nantong; 2,000 m² of exhibition, 7,000 collected pieces.' },
        { n: '03', text: '<strong>Initiator, 920 China Hat Festival</strong> & China International Hat Design Competition.' },
        { n: '04', text: '<strong>Author</strong> — “Ecuador: The Hometown of Panama Hats”, “Whispers of Wisdom”.' }
      ]
    },
    zh: {
      eyebrow: '关于',
      number: '01 / 关于',
      heading: '在<em>产业</em>、艺术与哲学之间，求其相对完美的平衡。',
      lead: '孙建华，业界亲切地称他为<em>帽子哥</em>——三十年间，将帽饰企业做到行业一流。',
      paras: [
        '他被誉为能将艺术、文化、哲学、慈善、收藏与实业平衡得相对完美的人。',
        '作为「920 中国帽子节」的发起人，他不断推动帽饰文化进入公众视野，并以展览、写作与艺术实践，建构出独特的「帽饰美学」。',
        '2018 年，被中国服装协会评为「中国帽饰文化最具影响力人物」。'
      ],
      bullets: [
        { n: '01', text: '<strong>富美集团创始人</strong>——自 1996 年起，深耕帽饰设计、研发、生产与销售。' },
        { n: '02', text: '<strong>富美帽饰博物馆创办人</strong>——南通；展陈面积 2000 m²，藏品 7000 件。' },
        { n: '03', text: '<strong>「920 中国帽子节」</strong>及中国国际帽饰设计大赛发起人。' },
        { n: '04', text: '<strong>著有</strong>《厄瓜多尔：巴拿马草帽的故乡》《随心琐语》。' }
      ]
    }
  },
  feature: {
    en: {
      eyebrow: 'Featured Work',
      number: '05 / Sculpture',
      heading: 'The <em>Self</em> beneath the hats.',
      workNo: 'Work No. 001 · 2024',
      title: 'Identity <em>and the</em> Self',
      quote: '“No matter what hats are on your head, beneath them is yourself. External identities can be changed — but your inner self is eternal.”',
      meta: [
        { k: 'Material', v: 'Resin · Pigment · Wood plinth' },
        { k: 'Series', v: 'Identity / 2024' },
        { k: 'Creator', v: 'Jeffrey Sun (Hat Bro.)' },
        { k: 'Designer', v: 'Rena Qian × AI' }
      ]
    },
    zh: {
      eyebrow: '主作品',
      number: '05 / 雕塑',
      heading: '帽下，是<em>自我</em>。',
      workNo: '编号 No. 001 · 2024',
      title: '身份<em>与</em>自我',
      quote: '「无论你头顶戴着多少帽子，帽下仍是你自己。外在的身份可以更换，内在的自我恒常如一。」',
      meta: [
        { k: '材质', v: '树脂 · 颜料 · 木质底座' },
        { k: '系列', v: '身份系列 / 2024' },
        { k: '创作人', v: '孙建华（帽子哥）' },
        { k: '设计师', v: 'Rena Qian × AI' }
      ]
    }
  },
  works: {
    en: {
      eyebrow: 'Works',
      number: '03 / Sculpture series',
      heading: 'Opposites <em>coexisting</em>.',
      legend: 'Six works in bronze and woven texture — a meditation on concealment and revelation, on roughness as self-definition, and on the weight of what we choose to bear.',
      items: [
        { n: '/01', tag: 'Bronze · 2024', t: 'The Wisdom of Concealment & Revelation', src: 'assets/sculpture-concealment.webp', subtitle: 'True wisdom lies in being just right — neither fully concealed nor fully revealed.', span: 'span-7', orient: 'landscape' },
        { n: '/02', tag: 'Bronze · 2024', t: 'To Bear or Not to Bear', src: 'assets/sculpture-bear.webp', subtitle: 'A hat too big will crush you; one that fits, lets you stand upright.', span: 'span-5', orient: 'portrait' },
        { n: '/03', tag: 'Texture', t: 'Opposites Coexisting — IV', src: 'assets/sculpture1.webp', subtitle: 'A shining mirror gathers dust; plainness only grows more prominent.', span: 'span-5', orient: 'portrait' },
        { n: '/04', tag: 'Texture', t: 'Opposites Coexisting — V', src: 'assets/sculpture4.webp', subtitle: 'Roughness — not passive hiding, but active self-definition.', span: 'span-7', orient: 'landscape' },
        { n: '/05', tag: 'Form', t: 'The Wisdom of Concealment', src: 'assets/sculpture2.webp', subtitle: 'Spiral inward — the form that hides itself.', span: 'span-6', orient: 'portrait' },
        { n: '/06', tag: 'Form', t: 'To Bear or Not to Bear · Study', src: 'assets/sculpture3.webp', subtitle: 'A study in weight, balance, and bearing.', span: 'span-6', orient: 'portrait' }
      ]
    },
    zh: {
      eyebrow: '雕塑',
      number: '03 / 雕塑系列',
      heading: '矛盾<em>共生</em>。',
      legend: '一组六件作品——以青铜与肌理为语，讲述遮蔽与显现的智慧、粗粙作为主动的自我定义，以及我们所选择承担的重量。',
      items: [
        { n: '/01', tag: '青铜 · 2024', t: '藏与显的智慧', src: 'assets/sculpture-concealment.webp', subtitle: '真正的智慧不在尽藏，亦不在尽显，而在「恰到好处」。', span: 'span-7', orient: 'landscape' },
        { n: '/02', tag: '青铜 · 2024', t: '承担与否', src: 'assets/sculpture-bear.webp', subtitle: '太大的帽子会压垮你；合宜的，方能让你挺立而行。', span: 'span-5', orient: 'portrait' },
        { n: '/03', tag: '肌理', t: '矛盾共生 IV', src: 'assets/sculpture1.webp', subtitle: '明镜亦惹尘；素朴愈显其形。', span: 'span-5', orient: 'portrait' },
        { n: '/04', tag: '肌理', t: '矛盾共生 V', src: 'assets/sculpture4.webp', subtitle: '粗粝并非消极的遮蔽，而是主动的自我定义。', span: 'span-7', orient: 'landscape' },
        { n: '/05', tag: '形态', t: '藏与显的形态', src: 'assets/sculpture2.webp', subtitle: '向内旋入——隐于形内的形。', span: 'span-6', orient: 'portrait' },
        { n: '/06', tag: '形态', t: '承担与否 · 习作', src: 'assets/sculpture3.webp', subtitle: '关于重量、平衡与承担的研究。', span: 'span-6', orient: 'portrait' }
      ]
    }
  },
  philosophy: {
    en: {
      eyebrow: 'Philosophy',
      number: '04 / Whispers of wisdom',
      heading: 'On retreat <em>as advance</em>.',
      quote: 'Dao, Virtue, Benevolence, Righteousness, Propriety — <em>five</em>, but one.',
      attr: '— from《Whispers of Wisdom》',
      items: [
        { n: '01', t: 'Self-knowledge', p: 'He who knows others is wise. He who knows himself is enlightened.' },
        { n: '02', t: 'Discipline → freedom', p: 'Freedom is premised on self-discipline. Without self-discipline, there is no freedom.' },
        { n: '03', t: 'Live broadcast', p: 'Life has no “if” — only a live broadcast. Find methods for the next success rather than excuses for the last failure.' },
        { n: '04', t: 'On bearing', p: 'A hat that is too big will crush you; a suitable one lets you stand upright with confidence.' },
        { n: '05', t: 'The just-right', p: 'True wisdom lies neither in complete concealment nor in full exposure — but in being just right.' }
      ]
    },
    zh: {
      eyebrow: '哲思',
      number: '04 / 随心琐语',
      heading: '以退<em>为进</em>。',
      quote: '夫道、德、仁、义、礼，<em>五</em>者一体也。',
      attr: '——节自《随心琐语》',
      items: [
        { n: '01', t: '自知', p: '知人者智，自知者明。' },
        { n: '02', t: '自律即自由', p: '自由的前提是自律。没有自律，就没有自由。' },
        { n: '03', t: '生命直播', p: '生命没有如果，只有直播。不要为失败找借口，要为成功找方法。' },
        { n: '04', t: '承担之法', p: '太大的帽子会压垮你；合宜的帽子，方能让你挺立而行。' },
        { n: '05', t: '恰到好处', p: '真正的智慧不在尽藏，亦不在尽显，而在「恰到好处」。' }
      ]
    }
  },
  industry: {
    en: {
      eyebrow: 'Industry',
      number: '07 / Foremost Group',
      heading: 'A culture-led <em>fashion</em> enterprise.',
      stats: [
        { num: '300', sup: 'M', lbl: 'Hats produced', desc: 'Cumulative output across thirty years of design and manufacturing.' },
        { num: '1,200', sup: '+', lbl: 'Cooperative partners', desc: 'A global network of brands, retailers and creative collaborators.' },
        { num: '4,000', sup: '+', lbl: 'New designs / year', desc: 'A 20-person design team developing a season-by-season catalogue.' },
        { num: '6', sup: '', lbl: 'Production bases', desc: 'China · Vietnam · Cambodia — a balanced global footprint.' }
      ],
      brandsHead: 'Three global B2C brands operated under COMHATS, the e-commerce subsidiary of Foremost Group.',
      brands: [
        { nm: 'TOP-EX', tagline: 'Better fit · Better performance', desc: 'High-performance outdoor headwear with scientific sizing and precision engineering.' },
        { nm: 'FANCET', tagline: 'Nature · Relaxation · Healing', desc: 'Aesthetic, all-occasion headwear inspired by the calm of the natural world.' },
        { nm: 'SIGGI', tagline: 'Slow living · Pet harmony', desc: 'Women’s headwear celebrating slow living and the companionship of pets.' }
      ]
    },
    zh: {
      eyebrow: '产业',
      number: '07 / 富美集团',
      heading: '一家以文化引领的<em>时尚</em>企业。',
      stats: [
        { num: '300', sup: '亿', lbl: '帽子产量', desc: '三十年间，设计与制造的累计产出。' },
        { num: '1,200', sup: '+', lbl: '合作伙伴', desc: '覆盖全球品牌、零售商与创意合作方。' },
        { num: '4,000', sup: '+', lbl: '年新款', desc: '由 20 人的设计团队，开发季节性款式与系列。' },
        { num: '6', sup: '', lbl: '生产基地', desc: '中国 · 越南 · 柬埔寨——均衡的全球布局。' }
      ],
      brandsHead: '由集团旗下电商子公司 COMHATS 运营的三大全球 B2C 品牌。',
      brands: [
        { nm: 'TOP-EX', tagline: '专业 · 功能 · 大码适配', desc: '专注户外功能性帽饰，以科学尺码与精密工艺，提供舒适与可靠。' },
        { nm: 'FANCET', tagline: '自然 · 松弛 · 治愈', desc: '为日常每一种场合而生的美学帽饰，灵感取自自然的宁静。' },
        { nm: 'SIGGI', tagline: '慢生活 · 萌宠 · 共生', desc: '专注于女士帽饰，礼赞慢生活与宠物相伴的温柔。' }
      ]
    }
  },
  contact: {
    en: {
      eyebrow: 'Contact',
      number: '08 / Contact',
      heading: 'Let us leave the world something <em>special</em>, and meaningful — <a href="mailto:Jeffrey@hattershub.com">together</a>.',
      cols: [
        { head: 'Studio', body: 'Foremost Hat Park<br/>Nantong, Jiangsu<br/>China' },
        { head: 'Email', body: '<a href="mailto:Jeffrey@hattershub.com">Jeffrey@hattershub.com</a>' },
        { head: 'Museum', body: 'Foremost Hat Museum<br/>Open Tue – Sun · 10–18' },
        { head: 'Festival', body: '920 China Hats Festival<br/>September 20, annual' }
      ],
      footL: '© 2026 Jeffrey Sun · 帽子哥',
      footR: 'Designed in Shanghai'
    },
    zh: {
      eyebrow: '联系',
      number: '08 / 联系',
      heading: '愿与你<em>一起</em>，留给世界一些特别的、有意义的东西——<a href="mailto:Jeffrey@hattershub.com">来信</a>。',
      cols: [
        { head: '工作室', body: '南通帽饰文创园<br/>江苏南通<br/>中国' },
        { head: '邮箱', body: '<a href="mailto:Jeffrey@hattershub.com">Jeffrey@hattershub.com</a>' },
        { head: '博物馆', body: '富美帽饰博物馆<br/>周二至周日 · 10:00–18:00' },
        { head: '节日', body: '920 中国帽子节<br/>每年 9 月 20 日' }
      ],
      footL: '© 2026 孙建华 · 帽子哥',
      footR: '设计于上海'
    }
  },
  marquee: {
    en: ['Hat Brother', 'Identity & the Self', '920 China Hat Festival', 'Foremost Group · Since 1996', 'Whispers of Wisdom', 'Letting DAO empower art'],
    zh: ['帽子哥', '身份与自我', '920 中国帽子节', '富美集团 · 1996', '随心琐语', '让道赋能艺术']
  },
  books: {
    en: {
      eyebrow: 'Published Works',
      number: '02 / Books',
      heading: 'A library of <em>headwear</em> aesthetics.',
      legend: 'Four published volumes — from the highlands of Ecuador to the philosophy of the brim. A fifth, on the Dao De Jing, is on its way.',
      items: [
        {
          t: 'Unveiling Crowned Elegance', sub: '《顶南风华》', meta: 'Edited by Jeffrey Sun', src: 'assets/book-elegance.webp', year: '2022',
          publisher: 'Foremost Press · 富美出版', pages: '328 pp.', format: 'Hardcover · 24 × 30 cm',
          tagline: 'A visual chronicle of crowns, ritual, and the quiet authority of the worn.',
          body: 'Curated across two years of fieldwork and archival research, this volume traces the lineage of ceremonial headwear across East and Southeast Asia — from imperial court to wedding pavilion. Photography by the Foremost team; essays by historians and contemporary milliners.',
          chapters: [
            { n: '01', t: 'Court & Crown', sub: '宫廷与冠冕' },
            { n: '02', t: 'Ritual Threads', sub: '仪礼之线' },
            { n: '03', t: 'The Bride’s Headdress', sub: '婚冠之美' },
            { n: '04', t: 'Modern Reinterpretations', sub: '当代重述' }
          ]
        },
        {
          t: 'Headwear · The Foremost', sub: '《头等大饰》', meta: 'By Jeffrey Sun', src: 'assets/book-headwear.webp', year: '2021',
          publisher: 'Foremost Press · 富美出版', pages: '256 pp.', format: 'Hardcover · 21 × 28 cm',
          tagline: 'A maker’s manifesto — three decades of obsession, brim by brim.',
          body: 'Part memoir, part technical atlas. Jeffrey Sun walks the reader through the founding of Foremost Group, the discipline of the workshop, and the philosophy that has guided every hat the company has produced. Hand-drawn diagrams accompany each chapter.',
          chapters: [
            { n: '01', t: 'Beginnings · 1996', sub: '起点 · 一九九六' },
            { n: '02', t: 'Material as Argument', sub: '材料即论证' },
            { n: '03', t: 'The Block & the Brim', sub: '帽模与帽缘' },
            { n: '04', t: 'A Cultural Industry', sub: '一种文化产业' }
          ]
        },
        {
          t: 'Poetry in Hats', sub: '《帽饰有诗意》', meta: 'Edited by Hattershub', src: 'assets/book-poetry.webp', year: '2020',
          publisher: 'Hattershub · 帽仕汇', pages: '192 pp.', format: 'Softcover · 17 × 24 cm',
          tagline: 'When verse meets the brim — a slim volume of poems gathered around the hat.',
          body: 'A collaborative anthology assembled by the Hattershub editorial team: classical Chinese verse, contemporary Mandarin poetry, and translated fragments from European literature, each pairing a line of poetry with a single hat photographed in the Foremost archive.',
          chapters: [
            { n: '01', t: 'Of Wind & Brim', sub: '风与帽缘' },
            { n: '02', t: 'Travelers’ Hats', sub: '行旅之帽' },
            { n: '03', t: 'Mourning & Memory', sub: '哀与记' },
            { n: '04', t: 'New Voices', sub: '新声' }
          ]
        },
        {
          t: 'Ecuador: The Home of Panama Hat', sub: '《厄瓜多尔·巴拿马草帽的故乡》', meta: 'By Jeffrey Sun & Zhou Wei', src: 'assets/book-ecuador.webp', year: '2018',
          publisher: 'Foremost Press · 富美出版', pages: '288 pp.', format: 'Hardcover · 22 × 28 cm',
          tagline: 'Six weeks in the Andes, with the weavers who make the world’s finest straw hats.',
          body: 'Jeffrey Sun and Zhou Wei spent six weeks in Cuenca and the highland villages of Azuay, documenting the toquilla-straw weavers whose craft predates the name "Panama hat" by three centuries. The book pairs reportage with technical drawings of weaves and a glossary of regional terminology.',
          chapters: [
            { n: '01', t: 'Cuenca, at Dawn', sub: '黎明的昆卡' },
            { n: '02', t: 'The Toquilla Straw', sub: '托基亚草' },
            { n: '03', t: 'A Day in Pile', sub: '皮莱的一天' },
            { n: '04', t: 'How a Hat is Born', sub: '一顶帽子的诞生' }
          ]
        }
      ],
      caseLabel: 'More',
      seriesLabel: 'Volume',
      backLabel: 'Back to Books',
      chaptersLabel: 'Chapters',
      forthcoming: {
        eyebrow: 'To be published',
        kicker: 'Forthcoming',
        title: 'DAO',
        subtitle: '《道德经》',
        body: 'A long-anticipated translation and meditation on Laozi’s Dao De Jing — a quiet conversation between ancient wisdom and the maker’s life.',
        lines: [
          { en: 'By retreating to advance, one takes the lead.', zh: '以退为进，方居其首。' },
          { en: 'He who knows others is wise. He who knows himself is enlightened.', zh: '知人者智，自知者明。' },
          { en: 'To advance wisely, learn first how to retreat with grace.', zh: '知止者，虽退而未败。' }
        ]
      }
    },
    zh: {
      eyebrow: '出版著作',
      number: '02 / 书作',
      heading: '一座「<em>帽饰</em>」的纸上博物馆。',
      legend: '已出版四部著作——从厄瓜多尔高原到帽汿的哲学。另有《道德经》译读，即将面世。',
      items: [
        {
          t: '《顶南风华》', sub: 'Unveiling Crowned Elegance', meta: '孙建华 主编', src: 'assets/book-elegance.webp', year: '2022',
          publisher: '富美出版', pages: '328 页', format: '精装 · 24 × 30 cm',
          tagline: '一部冠冕、礼仪与"佩戴之沉静权威"的影像志。',
          body: '历经两年田野调查与档案研究编纂——从皇室到婚礼，追溯东亚与东南亚仪式性帽饰的源流。摄影由富美团队完成，文字由历史学者与当代制帽师共同撰写。',
          chapters: [
            { n: '01', t: 'Court & Crown', sub: '宫廷与冠冕' },
            { n: '02', t: 'Ritual Threads', sub: '仪礼之线' },
            { n: '03', t: 'The Bride’s Headdress', sub: '婚冠之美' },
            { n: '04', t: 'Modern Reinterpretations', sub: '当代重述' }
          ]
        },
        {
          t: '《头等大饰》', sub: 'Headwear · The Foremost', meta: '孙建华 著', src: 'assets/book-headwear.webp', year: '2021',
          publisher: '富美出版', pages: '256 页', format: '精装 · 21 × 28 cm',
          tagline: '一位制帽人的宣言——三十年的执念，一缘一沿。',
          body: '半部回忆录，半部技艺图谱。孙建华讲述富美集团的创立、工坊的纪律，以及指导每一顶帽子诞生的哲学。每一章配有手绘示意图。',
          chapters: [
            { n: '01', t: '起点 · 一九九六', sub: 'Beginnings · 1996' },
            { n: '02', t: '材料即论证', sub: 'Material as Argument' },
            { n: '03', t: '帽模与帽缘', sub: 'The Block & the Brim' },
            { n: '04', t: '一种文化产业', sub: 'A Cultural Industry' }
          ]
        },
        {
          t: '《帽饰有诗意》', sub: 'Poetry in Hats', meta: '帽仕汇 编', src: 'assets/book-poetry.webp', year: '2020',
          publisher: '帽仕汇', pages: '192 页', format: '平装 · 17 × 24 cm',
          tagline: '当诗意遇见帽缘——一本以帽为题的诗集。',
          body: '由帽仕汇编辑团队组织的合集：古典汉诗、当代华语诗作、欧洲文学译片，每一则诗句配以富美档案中的一顶帽子。',
          chapters: [
            { n: '01', t: '风与帽缘', sub: 'Of Wind & Brim' },
            { n: '02', t: '行旅之帽', sub: 'Travelers’ Hats' },
            { n: '03', t: '哀与记', sub: 'Mourning & Memory' },
            { n: '04', t: '新声', sub: 'New Voices' }
          ]
        },
        {
          t: '《厄瓜多尔：巴拿马草帽的故乡》', sub: 'Ecuador: The Home of Panama Hat', meta: '孙建华 · 周伟 著', src: 'assets/book-ecuador.webp', year: '2018',
          publisher: '富美出版', pages: '288 页', format: '精装 · 22 × 28 cm',
          tagline: '在安第斯山脉的六周——与世界上最精致草编帽的编织者同行。',
          body: '孙建华与周伟在昆卡及阿苏艾省的高地村落驻留六周，记录托基亚草编织者——他们的技艺比"巴拿马帽"这个名字早了三个世纪。书中报道、技术图解与地方术语词汇并置。',
          chapters: [
            { n: '01', t: '黎明的昆卡', sub: 'Cuenca, at Dawn' },
            { n: '02', t: '托基亚草', sub: 'The Toquilla Straw' },
            { n: '03', t: '皮莱的一天', sub: 'A Day in Pile' },
            { n: '04', t: '一顶帽子的诞生', sub: 'How a Hat is Born' }
          ]
        }
      ],
      caseLabel: '更多',
      seriesLabel: '卷册',
      backLabel: '返回书作列表',
      chaptersLabel: '章节',
      forthcoming: {
        eyebrow: '未来出版',
        kicker: '即将面世',
        title: '《道德经》',
        subtitle: 'DAO',
        body: '帽子哥重笔译读《道德经》——让古老的智慧与当下的实践，进行一场安静的对话。',
        lines: [
          { en: 'By retreating to advance, one takes the lead.', zh: '以退为进，方居其首。' },
          { en: 'He who knows others is wise. He who knows himself is enlightened.', zh: '知人者智，自知者明。' },
          { en: 'To advance wisely, learn first how to retreat with grace.', zh: '知止者，虽退而未败。' }
        ]
      }
    }
  },
  photography: {
    en: {
      eyebrow: 'Photography',
      number: '06 / Photographs',
      heading: 'Time, <em>weight</em>, water.',
      legend: 'A trilogy of photographs by Jeffrey Sun — fragments of attention from a life lived between studio and travel.',
      items: [
        {
          t: 'Fruits of Time', sub: '《时间的果实》', src: 'assets/photo-fruits.webp',
          year: '2019 — 2023', place: 'Studio · Beijing',
          tagline: 'A slow study of ripening, decay, and the patience of light.',
          body: 'Across four seasons in a north-facing studio, Jeffrey Sun photographed the same arrangement of fruit at the same hour of day. What began as a still-life exercise became a meditation on duration — on how attention itself ripens when held long enough against a single subject.',
          frames: ['assets/photo-fruits.webp','assets/photo-gravity.webp','assets/photo-shadow.webp','assets/photo-fruits.webp','assets/photo-gravity.webp']
        },
        {
          t: 'Gravity', sub: '《重》', src: 'assets/photo-gravity.webp',
          year: '2021', place: 'Foundry · Hebei',
          tagline: 'On weight, surface, and the dignity of unfinished things.',
          body: 'Made over six weeks at the foundry where his bronze sculptures are cast, this series turns away from the finished work and toward the floor: pour residue, sand, the marks left by hands that move tons of metal each day. The frames argue that gravity is not a force, but a kind of authorship.',
          frames: ['assets/photo-gravity.webp','assets/photo-fruits.webp','assets/photo-shadow.webp','assets/photo-gravity.webp','assets/photo-fruits.webp']
        },
        {
          t: 'Shadow on Water', sub: '《水影》', src: 'assets/photo-shadow.webp',
          year: '2018 — 2024',  place: 'West Lake · Hangzhou',
          tagline: 'Six years of returning to the same surface at the same hour.',
          body: 'Photographed from the same wooden pier on West Lake — sometimes weekly, sometimes a year apart — these images record what the water does with morning light. A long-form practice of returning, the series treats the lake as a collaborator whose mood is the only variable that matters.',
          frames: ['assets/photo-shadow.webp','assets/photo-fruits.webp','assets/photo-gravity.webp','assets/photo-shadow.webp','assets/photo-fruits.webp']
        }
      ],
      caseLabel: 'More',
      seriesLabel: 'Series',
      backLabel: 'Back to Photographs',
      framesLabel: 'Frames in this series'
    },
    zh: {
      eyebrow: '摄影',
      number: '06 / 摄影作品',
      heading: '时间·<em>重</em>·水影。',
      legend: '孙建华的三幅摄影作品——来自工作室与旅途之间的注意力碎片。',
      items: [
        {
          t: '《时间的果实》', sub: 'Fruits of Time', src: 'assets/photo-fruits.webp',
          year: '2019 — 2023', place: '工作室 · 北京',
          tagline: '关于成熟、腐败与光的耐心。',
          body: '在朝北的工作室里，孙建华以四季为单位，每日同一时刻拍摄同一组水果。最初只是静物练习，最终却成了一段关于"持续注视"的冥想——当注意力足够长久地停留在一个对象上时，注意力本身也开始成熟。',
          frames: ['assets/photo-fruits.webp','assets/photo-gravity.webp','assets/photo-shadow.webp','assets/photo-fruits.webp','assets/photo-gravity.webp']
        },
        {
          t: '《重》', sub: 'Gravity', src: 'assets/photo-gravity.webp',
          year: '2021', place: '铸造厂 · 河北',
          tagline: '论重量、表面，与未完成之物的尊严。',
          body: '在他的青铜雕塑铸造工厂中拍摄六周。镜头不再对准成品，而转向地面——浇铸的残渣、砂土、那些每天搬动数吨金属的手所留下的痕迹。这组作品提出：重力不是一种力，而是一种作者署名。',
          frames: ['assets/photo-gravity.webp','assets/photo-fruits.webp','assets/photo-shadow.webp','assets/photo-gravity.webp','assets/photo-fruits.webp']
        },
        {
          t: '《水影》', sub: 'Shadow on Water', src: 'assets/photo-shadow.webp',
          year: '2018 — 2024', place: '西湖 · 杭州',
          tagline: '六年间，在同一木栈桥的同一时刻返回。',
          body: '从西湖一座木栈桥出发——有时每周，有时相隔一年——记录晨光在水面上的所作所为。这是一种"返回"的长期练习，把湖面当作合作者，它的心情是唯一重要的变量。',
          frames: ['assets/photo-shadow.webp','assets/photo-fruits.webp','assets/photo-gravity.webp','assets/photo-shadow.webp','assets/photo-fruits.webp']
        }
      ],
      caseLabel: '更多',
      seriesLabel: '系列',
      backLabel: '返回摄影列表',
      framesLabel: '本系列其他影像'
    }
  }
};

window.CONTENT = CONTENT;
