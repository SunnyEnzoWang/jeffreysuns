// Bilingual content for the site
const CONTENT = {
  nav: {
    en: { about: 'About', art: 'Art', works: 'Works', philosophy: 'Philosophy', books: 'Books', photography: 'Photo', industry: 'Industry', contact: 'Contact' },
    zh: { about: '关于', art: '雕塑', works: '作品', philosophy: '哲思', books: '著作', photography: '摄影', industry: '产业', contact: '联系' }
  },
  // 首屏文案全部取自孙董自己的材料:
  //  · kicker「Who is Hat Brother?」= 他印刷版个人手册第 1 页
  //  · motto「以帽立业。以道立心。」= 《道德经》译本自我介绍页;英文一句同页
  //  · bio = 手册第 3 页原文,中英均为原文,未改一字
  hero: {
    en: {
      kicker: 'Who is Hat Brother?',
      nick: '帽子哥 · Hat Brother',
      motto: '以帽立业。以道立心。',
      mottoSub: 'To harmonize industry, art, fashion, philosophy, philanthropy, and cultural collecting into one meaningful life.',
      bio: 'Passionate about fashion, art, collecting, reading, photography, and global travel, he embraces the beauty of life and treats others with integrity and sincerity. As the founder of his enterprise and the creator of the Hat Museum, he has long been deeply rooted in the world of headwear, dedicated to advancing hat culture and contributing to the global headwear industry. He believes a hat is not merely an accessory, but the beginning of style itself — and through its cultural power, the world becomes better and more beautiful.',
      place: 'Shanghai · China',
      scroll: 'Enter',
      plateCap: 'The most influential figure in Chinese hat culture',
      plateSub: 'China National Garment Association · 2018'
    },
    zh: {
      kicker: 'Who is Hat Brother?',
      nick: '帽子哥',
      motto: '以帽立业。以道立心。',
      mottoSub: '愿将产业、艺术、时尚、哲学、慈善、文化收藏，融汇于一生。',
      bio: '热爱时尚、艺术、收藏、读书、摄影与环球旅行，倾心世间一切美好。诚信待人，始终坚守初心与温度。作为企业创始人、帽饰博物馆的创立者，深耕于帽饰领域，矢志传播帽饰文化，致力打造世界一流的品牌。他坚信「帽饰是第一时尚单品」，将帽饰与艺术融合，为人们的生活增添美好。',
      place: '上海 · 中国',
      scroll: '入',
      plateCap: '中国帽饰文化最具影响力人物',
      plateSub: '中国服装协会 · 2018'
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
        { n: '02', text: '<strong>Founder &amp; curator, Nantong Foremost Hats Museum</strong> — 2,000 m² of exhibition, 7,000 collected pieces.' },
        { n: '03', text: '<strong>Founder, HATTERS’ HUB</strong> — Shanghai.' },
        { n: '04', text: '<strong>Director, Hats &amp; Accessories R&amp;D Centre</strong>, China National Garment Association.' },
        { n: '05', text: '<strong>Initiator, 920 China Hat Festival</strong> &amp; China International Hat Design Competition.' },
        { n: '06', text: '<strong>Founder, Museum of Embroidery &amp; Lace</strong> — in preparation.' }
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
        { n: '02', text: '<strong>南通市富美帽饰博物馆创办人、馆长</strong>——展陈面积 2000 m²，藏品 7000 件。' },
        { n: '03', text: '<strong>上海帽仕汇创始人</strong>（HATTERS’ HUB）。' },
        { n: '04', text: '<strong>中国服装协会帽饰研发中心主任</strong>。' },
        { n: '05', text: '<strong>「920 中国帽子节」</strong>及中国国际帽饰设计大赛发起人。' },
        { n: '06', text: '<strong>刺绣与蕾丝博物馆创始人</strong>（筹）。' }
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
        { num: '3', sup: '亿', lbl: '帽子产量', desc: '三十年间，设计与制造的累计产出。' },
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
        { head: 'Festival', body: '920 China Hat Festival<br/>September 20, annual' }
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
  // 著作数据全部来自孙董自己的出版物:
  //  · 书目与英文名取自《顶尚风华》书内作者简介页
  //  · 「道之钥」两句取自他《道德经》译本第 33 章
  //  · 出版社/页数/装帧/章节目录原为示意性内容,已删除 —— 未核实的一律不写
  books: {
    en: {
      eyebrow: 'Published Works',
      number: '02 / Books',
      heading: 'A library of <em>headwear</em> aesthetics.',
      legend: 'Seven volumes written or edited, and two classical texts carried into English — from the highlands of Ecuador to the philosophy of the brim.',
      backLabel: 'Back',
      seriesLabel: 'Books',
      chaptersLabel: 'Contents',
      items: [
        { t: 'Unveiling Crowned Elegance', sub: '《顶尚风华》', meta: 'Edited by Jeffrey Sun', src: 'assets/books/dingshang.jpg',
          tagline: 'Hat marks the beginning of human civilisation.' },
        { t: 'HeadWear · The Foremost', sub: '《头等大饰》', meta: 'By Jeffrey Sun', src: 'assets/books/toudeng.jpg' },
        { t: 'Imaginative Thoughts', sub: '《随心琐语》', meta: 'By Jeffrey Sun', src: 'assets/books/suixin.jpg',
          tagline: 'Gathered reflections of the Hat Brother. An English edition of 101 pieces followed.' },
        { t: 'Poetry in Hats', sub: '《帽饰有诗意》', meta: 'By Jeffrey Sun', src: 'assets/books/poetry.jpg' },
        { t: 'Ecuador: The Home of Panama Hats', sub: '《厄瓜多尔：巴拿马草帽的故乡》', meta: 'With Zhou Wei', src: 'assets/books/ecuador.webp', year: '2018' },
        { t: '50 Ineffective Behaviors that Deplete Performance', sub: '《偷走绩效的50个无效行为》', meta: 'By Jeffrey Sun', src: 'assets/books/touzou.jpg', year: '2018' },
        { t: 'Great Ambitions, Great World', sub: '《大情怀大世界：张謇的企业家精神》', meta: 'By Jeffrey Sun', src: 'assets/books/zhangjian.jpg' },
        { t: 'SU SHU · The Book of Superlicity', sub: '《素书》', meta: 'Translated into English by Jeffrey Sun', src: 'assets/books/sushu.jpg' }
      ],
      forthcoming: {
        eyebrow: 'Translation',
        kicker: 'Carried into English',
        title: 'DAO',
        subtitle: '《道德经》· Chapters 1–81, Chinese and English, with Keys to Dao',
        body: 'A line-by-line rendering of Laozi, each chapter followed by his own "Keys to Dao" — not commentary on the text so much as notes from a life spent making things.',
        lines: [
          { en: 'Wisdom lies within.', zh: '智慧本自具足。' },
          { en: 'Self-awareness is the root of clarity; self-deception the seed of chaos.', zh: '自觉是澄明之根，自欺是混乱之源。' }
        ]
      }
    },
    zh: {
      eyebrow: '出版著作',
      number: '02 / 书作',
      heading: '一座「<em>帽饰</em>」的纸上博物馆。',
      legend: '著作与主编七部，另将两部古籍带入英文——从厄瓜多尔高原到帽缘的哲学。',
      backLabel: '返回',
      seriesLabel: '著作',
      chaptersLabel: '目录',
      items: [
        { t: '《顶尚风华》', sub: 'Unveiling Crowned Elegance', meta: '孙建华 编', src: 'assets/books/dingshang.jpg',
          tagline: '帽子是人类文明开始的标志。' },
        { t: '《头等大饰》', sub: 'HeadWear · The Foremost', meta: '孙建华 著', src: 'assets/books/toudeng.jpg' },
        { t: '《随心琐语》', sub: 'Imaginative Thoughts', meta: '孙建华 著', src: 'assets/books/suixin.jpg',
          tagline: '帽子哥感悟集粹。后有英文版一〇一篇。' },
        { t: '《帽饰有诗意》', sub: 'Poetry in Hats', meta: '孙建华 著', src: 'assets/books/poetry.jpg' },
        { t: '《厄瓜多尔：巴拿马草帽的故乡》', sub: 'Ecuador: The Home of Panama Hats', meta: '与周伟 合著', src: 'assets/books/ecuador.webp', year: '2018' },
        { t: '《偷走绩效的50个无效行为》', sub: '50 Ineffective Behaviors', meta: '孙建华 著', src: 'assets/books/touzou.jpg', year: '2018' },
        { t: '《大情怀大世界：张謇的企业家精神》', sub: 'Great Ambitions, Great World', meta: '孙建华 著', src: 'assets/books/zhangjian.jpg' },
        { t: '《素书》', sub: 'SU SHU · The Book of Superlicity', meta: '孙建华 英译', src: 'assets/books/sushu.jpg' }
      ],
      forthcoming: {
        eyebrow: '译著',
        kicker: '带入英文',
        title: 'DAO',
        subtitle: '《道德经》· 一至八十一章 中英对照，附「道之钥」',
        body: '逐章逐句的中英对照，每章之后是他自己写的「道之钥」——与其说是解经，不如说是一个做东西的人留下的笔记。',
        lines: [
          { en: 'Wisdom lies within.', zh: '智慧本自具足。' },
          { en: 'Self-awareness is the root of clarity; self-deception the seed of chaos.', zh: '自觉是澄明之根，自欺是混乱之源。' }
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
