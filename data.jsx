// Bilingual content for the site
const CONTENT = {
  nav: {
    en: { about: 'About', festival: '920', art: 'Art', works: 'Works', philosophy: 'Philosophy', books: 'Books', photography: 'Photo', industry: 'Industry', contact: 'Contact' },
    zh: { about: '关于', festival: '920', art: '雕塑', works: '作品', philosophy: '哲思', books: '著作', photography: '摄影', industry: '产业', contact: '联系' }
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
        { n: '02', text: '<strong>Founder &amp; curator, <a href="https://hatsmuseum.org/" target="_blank" rel="noopener">Nantong Foremost Hats Museum</a></strong> — 2,000 m² of exhibition, 7,000 collected pieces.' },
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
        { n: '02', text: '<strong><a href="https://hatsmuseum.org/" target="_blank" rel="noopener">南通市富美帽饰博物馆</a>创办人、馆长</strong>——展陈面积 2000 m²，藏品 7000 件。' },
        { n: '03', text: '<strong>上海帽仕汇创始人</strong>（HATTERS’ HUB）。' },
        { n: '04', text: '<strong>中国服装协会帽饰研发中心主任</strong>。' },
        { n: '05', text: '<strong>「920 中国帽子节」</strong>及中国国际帽饰设计大赛发起人。' },
        { n: '06', text: '<strong>刺绣与蕾丝博物馆创始人</strong>（筹）。' }
      ]
    }
  },
  // 920 中国帽子节 —— 事实来源:
  //  · 四届(2014/2015/2018/2023)= 孙董 2023 年访谈原话「我们公司…2014、2015、2018和2023年主办了四届“中国帽子节”」;
  //    2026 年《凤凰艺术》报道亦作「主办四届」
  //  · 引言 = 《管理者文集》孙董原文
  //  · 2026 年 9 月 20 日 = 本届日期;「第五届」与「南通」= 2026-09-05 王晨锡确认。主题、场地、嘉宾以官方公布为准,站上不写
  festival: {
    en: {
      eyebrow: 'Festival',
      number: '02 / 920',
      heading: '920 <em>China Hat Festival</em>',
      dateISO: '2026-09-20',
      dateLine: 'Fifth edition · Sunday, 20 September 2026 · Nantong',
      countLabel: 'days to go', today: 'It is today.', past: 'Held on 20 September 2026',
      runin: '9 · 20.',
      lead: 'The date Jeffrey Sun set aside for hats. He initiated the first China Hat Festival in 2014 and staged it again in 2015, 2018 and 2023 — designers, makers and people who simply love wearing hats, gathered for the hat. In 2026 the fifth edition returns to Nantong.',
      quote: '“We hold the 920 Hat Festival to bring together people who love beauty and love hats — and they will bring more hat-lovers with them. A single spark can start a prairie fire.”',
      quoteBy: '— Jeffrey Sun, Collected Writings for Managers',
      histHead: 'Editions',
      hist: [
        { y: '2014', t: 'The first China Hat Festival' },
        { y: '2015', t: 'Second edition' },
        { y: '2018', t: 'Third edition' },
        { y: '2023', t: 'Fourth edition' },
        { y: '2026', t: 'Fifth edition · 20 September, Nantong · programme to be announced', now: true }
      ],
      note: 'Programme, venue and guests will be announced here and at hatsmuseum.org. Enquiries: <a href="mailto:Jeffrey@hattershub.com">Jeffrey@hattershub.com</a>',
      cta: 'Foremost Hats Museum · 920',
      ctaHref: 'https://hatsmuseum.org/festival',
      photoCap: 'The fourth China Hat Festival · 2023',
      initiator: 'Initiator · Jeffrey Sun (Hat Brother)'
    },
    zh: {
      eyebrow: '节日',
      number: '02 / 920',
      heading: '920 <em>中国帽子节</em>',
      dateISO: '2026-09-20',
      dateLine: '第五届 · 2026 年 9 月 20 日 · 周日 · 南通',
      countLabel: '天后', today: '就是今天。', past: '已于 2026 年 9 月 20 日举行',
      runin: '九 · 二〇。',
      lead: '孙建华为帽子留出的日子。2014 年他发起首届「中国帽子节」，此后于 2015、2018、2023 年再办三届——设计师、匠人和爱戴帽子的人，为一顶帽子聚在一起。2026 年，第五届在南通举行。',
      quote: '「我们举办 920 帽子节，把一批爱美爱帽的人集聚在一起，而这些人会带来更多的爱帽之人，星星之火可以燎原。」',
      quoteBy: '—— 孙建华，《管理者文集》',
      histHead: '历届',
      hist: [
        { y: '2014', t: '首届中国帽子节' },
        { y: '2015', t: '第二届' },
        { y: '2018', t: '第三届' },
        { y: '2023', t: '第四届' },
        { y: '2026', t: '第五届 · 9 月 20 日 · 南通 · 详情即将公布', now: true }
      ],
      note: '主题、场地与嘉宾将在此处与 hatsmuseum.org 公布。联络：<a href="mailto:Jeffrey@hattershub.com">Jeffrey@hattershub.com</a>',
      cta: '富美帽饰博物馆 · 920 专页',
      ctaHref: 'https://hatsmuseum.org/festival',
      photoCap: '第四届中国帽子节现场 · 2023',
      initiator: '发起人 · 孙建华（帽子哥）'
    }
  },
  feature: {
    en: {
      eyebrow: 'Featured Work',
      number: '06 / Sculpture',
      heading: 'The <em>Self</em> beneath the hats.',
      workNo: 'Public sculpture · Wulonghui Talent Park, Nantong',
      title: 'Identity <em>and the</em> Self',
      quote: '“No matter what hats are on your head, beneath them is yourself. External identities can be changed, but your inner self is eternal.”',
      meta: [
        { k: 'Year', v: '2025' },
        { k: 'Edition', v: 'Brass · H 61 × W 33 × D 14 cm · 6.75 kg' },
        { k: 'Creator', v: 'Jeffrey Sun (Hat Brother)' },
        { k: 'Note', v: 'Unveiled on 10 December at Wulonghui Talent Park, Chongchuan, Nantong, as a donated public artwork. The artist Xu Bin Jueyi described it as possibly among the largest sculptures made with AI-assisted generation.' }
      ]
    },
    zh: {
      eyebrow: '主作品',
      number: '06 / 雕塑',
      heading: '帽下，是<em>自我</em>。',
      workNo: '公共雕塑 · 南通崇川区五龙汇人才公园',
      title: '身份<em>与</em>自我',
      quote: '「无论有什么帽子，头颅之下是你自己，外在身份可以更换，内在自我才是永恒。」',
      meta: [
        { k: '创作年份', v: '2025' },
        { k: '登记版本', v: '黄铜 · H 61 × W 33 × D 14 cm · 6.75 kg' },
        { k: '创作者', v: '孙建华（帽子哥）' },
        { k: '说明', v: '12 月 10 日作为捐赠公共艺术在崇川区五龙汇人才公园揭幕；艺术家徐彬觉一评价其可能是目前全球规模最大的、融合 AI 技术生成的雕塑之一。' }
      ]
    }
  },
  works: {
    en: {
      eyebrow: 'Works',
      number: '04 / Sculpture series',
      heading: 'Opposites <em>coexisting</em>.',
      legend: 'Six works — figures, hat forms and woven textures — alongside the public sculpture Identity and the Self. Registered works of 2025 include Bright but Not Dazzling and What Remains Is Plainness, both in mirror-finished stainless steel.',
      items: [
        { n: '/01', tag: 'Figure', t: 'The Wisdom of Concealment & Revelation', src: 'assets/sculpture-concealment.webp', span: 'span-7', orient: 'landscape' },
        { n: '/02', tag: 'Figure', t: 'To Bear or Not to Bear', src: 'assets/sculpture-bear.webp', span: 'span-5', orient: 'portrait' },
        { n: '/03', tag: 'Texture', t: 'Opposites Coexisting — IV', src: 'assets/sculpture1.webp', span: 'span-5', orient: 'portrait' },
        { n: '/04', tag: 'Texture', t: 'Opposites Coexisting — V', src: 'assets/sculpture4.webp', span: 'span-7', orient: 'landscape' },
        { n: '/05', tag: 'Form', t: 'The Wisdom of Concealment', src: 'assets/sculpture2.webp', span: 'span-6', orient: 'portrait' },
        { n: '/06', tag: 'Form', t: 'To Bear or Not to Bear · Study', src: 'assets/sculpture3.webp', span: 'span-6', orient: 'portrait' }
      ]
    },
    zh: {
      eyebrow: '雕塑',
      number: '04 / 雕塑系列',
      heading: '矛盾<em>共生</em>。',
      legend: '一组六件作品——以青铜与肌理为语，讲述遮蔽与显现的智慧、粗粙作为主动的自我定义，以及我们所选择承担的重量。',
      items: [
        { n: '/01', tag: '人像', t: '藏与显的智慧', src: 'assets/sculpture-concealment.webp', span: 'span-7', orient: 'landscape' },
        { n: '/02', tag: '人像', t: '承担与否', src: 'assets/sculpture-bear.webp', span: 'span-5', orient: 'portrait' },
        { n: '/03', tag: '肌理', t: '矛盾共生 IV', src: 'assets/sculpture1.webp', span: 'span-5', orient: 'portrait' },
        { n: '/04', tag: '肌理', t: '矛盾共生 V', src: 'assets/sculpture4.webp', span: 'span-7', orient: 'landscape' },
        { n: '/05', tag: '形态', t: '藏与显的形态', src: 'assets/sculpture2.webp', span: 'span-6', orient: 'portrait' },
        { n: '/06', tag: '形态', t: '承担与否 · 习作', src: 'assets/sculpture3.webp', span: 'span-6', orient: 'portrait' }
      ]
    }
  },
  philosophy: {
    en: {
      eyebrow: 'Philosophy',
      number: '05 / Imaginative thoughts',
      heading: 'On retreat <em>as advance</em>.',
      quote: 'Dao, Virtue, Benevolence, Righteousness, Propriety — <em>five</em>, but one.',
      attr: '— from Imaginative Thoughts《随心琐语》',
      items: [
        { n: '01', t: 'Self-knowledge', p: 'He who knows others is wise. He who knows himself is enlightened.' },
        { n: '02', t: 'Discipline → freedom', p: 'Freedom is premised on self-discipline. Without self-discipline, there is no freedom.' },
        { n: '03', t: 'Live broadcast', p: 'Life has no “if” — only a live broadcast. Find methods for the next success rather than excuses for the last failure.' },
        { n: '04', t: 'Bright, not dazzling', p: 'Bright but not dazzling; leading without pressing. — Keys to Dao, ch. 58' },
        { n: '05', t: 'What remains', p: 'What remains is plainness, not the gleaming.' }
      ]
    },
    zh: {
      eyebrow: '哲思',
      number: '05 / 随心琐语',
      heading: '以退<em>为进</em>。',
      quote: '夫道、德、仁、义、礼，<em>五</em>者一体也。',
      attr: '——节自《随心琐语》',
      items: [
        { n: '01', t: '自知', p: '知人者智，自知者明。' },
        { n: '02', t: '自律即自由', p: '自由的前提是自律。没有自律，就没有自由。' },
        { n: '03', t: '生命直播', p: '生命没有如果，只有直播。不要为失败找借口，要为成功找方法。' },
        { n: '04', t: '光而不耀', p: '光而不耀，引领却不施压。——「道之钥」第五十八章' },
        { n: '05', t: '留存', p: '留存的是素朴，而非光耀。' }
      ]
    }
  },
  industry: {
    en: {
      eyebrow: 'Industry',
      number: '08 / Foremost Group',
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
      number: '08 / 富美集团',
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
      number: '09 / Contact',
      heading: 'Let us leave the world something <em>special</em>, and meaningful — <a href="mailto:Jeffrey@hattershub.com">together</a>.',
      cols: [
        { head: 'Studio', body: 'Foremost Hat Park<br/>Nantong, Jiangsu<br/>China' },
        { head: 'Email', body: '<a href="mailto:Jeffrey@hattershub.com">Jeffrey@hattershub.com</a>' },
        { head: 'Museum', body: 'Foremost Hats Museum<br/>Open daily · 09:00–18:00' },
        { head: 'Festival', body: '920 China Hat Festival<br/>September 20, annual' }
      ],
      footL: '© 2026 Jeffrey Sun · 帽子哥',
      footR: 'Designed in Shanghai'
    },
    zh: {
      eyebrow: '联系',
      number: '09 / 联系',
      heading: '愿与你<em>一起</em>，留给世界一些特别的、有意义的东西——<a href="mailto:Jeffrey@hattershub.com">来信</a>。',
      cols: [
        { head: '工作室', body: '南通帽饰文创园<br/>江苏南通<br/>中国' },
        { head: '邮箱', body: '<a href="mailto:Jeffrey@hattershub.com">Jeffrey@hattershub.com</a>' },
        { head: '博物馆', body: '富美帽饰博物馆<br/>全年无休 · 09:00–18:00' },
        { head: '节日', body: '920 中国帽子节<br/>每年 9 月 20 日' }
      ],
      footL: '© 2026 孙建华 · 帽子哥',
      footR: '设计于上海'
    }
  },
  marquee: {
    en: ['Hat Brother', 'Identity & the Self', '920 China Hat Festival', 'Foremost Group · Since 1996', 'Imaginative Thoughts', 'Letting DAO empower art'],
    zh: ['帽子哥', '身份与自我', '920 中国帽子节', '富美集团 · 1996', '随心琐语', '让道赋能艺术']
  },
  // 著作数据全部来自孙董自己的出版物:
  //  · 书目与英文名取自《顶尚风华》书内作者简介页
  //  · 「道之钥」两句取自他《道德经》译本第 33 章
  //  · 出版社/页数/装帧/章节目录原为示意性内容,已删除 —— 未核实的一律不写
  books: {
    en: {
      eyebrow: 'Published Works',
      number: '03 / Books',
      heading: 'A library of <em>headwear</em> aesthetics.',
      legend: 'Seven volumes written or edited, and two classical texts carried into English — from the highlands of Ecuador to the philosophy of the brim.',
      backLabel: 'Back',
      seriesLabel: 'Books',
      chaptersLabel: 'Contents',
      items: [
        { t: 'Unveiling Crowned Elegance', sub: '《顶尚风华》', meta: 'Edited by Jeffrey Sun', src: 'assets/books/dingshang.jpg', year: '2023',
          tagline: 'Hat marks the beginning of human civilisation.',
          body: ['“Ding Shang Feng Hua” — four characters with a deep meaning. Ding is the utmost, the highest: it means the head. Shang means lofty, important. Feng is what is current, style. Hua is splendour, what is precious. Together they say that what sits above the head must show the utmost bearing and dignity. … I know well that a hat is small, yet it sits on top — and that alone destines its high standing.',
                 'I have given nearly thirty years to headwear, and for close to twenty of them I have been collecting it. … I wish to share this collection with everyone who loves hats and the culture of fashion.'],
          source: 'From the author’s preface · first edition, September 2023 · translated' },
        { t: 'HeadWear · The Foremost', sub: '《头等大饰》', meta: 'By Jeffrey Sun', src: 'assets/books/toudeng.jpg',
          tagline: 'Isn’t it a great pleasure that the foremost item of clothing becomes a foremost pursuit of life?',
          body: ['I consider headwear the foremost item of clothing for three reasons. 1. Hats, though small, are the undisputed “head” of clothing because they are put on one’s head. 2. In ancient China, official hats were a status symbol, for which some struggled for decades and even a lifetime. For them, a small hat was the top priority of life. 3. Economic prosperity, the top priority for any country, is closely related to hat consumption, which, from my observation, is always robust in developed economies or in eras of economic prosperity.',
                 'Essentially, a limousine is not only a vehicle but a status symbol; a mansion is not only a house but a wealth symbol. Likewise, a luxury hat is far more than a hat. It also represents an attitude, lifestyle, self-orientation and taste!'],
          source: 'Preface I, in the author’s own English · Lijiang, Yunnan, 20 February 2023' },
        { t: 'Imaginative Thoughts', sub: '《随心琐语》', meta: 'By Jeffrey Sun', src: 'assets/books/suixin.jpg', year: '2021',
          tagline: 'Gathered reflections of the Hat Brother. An English edition of 101 pieces followed.',
          body: ['At university I liked reading Bacon’s essays, the sayings of famous people, and the books of Zhou Guoping; I began to enjoy a little philosophical thinking, and slowly came to like thinking things over, feeling them out, summing them up. Luckily I had formed the habit of keeping notes, and so these accumulated.',
                 'I no longer know which of these reflections belong to their original authors and which are mine — but I believe at least eighty percent are my own, because what was once other people’s has, with the settling of time, entered my blood. Whose they are does not matter. What matters is that if they are of use to you, if they strike a chord, then that is a small value of mine.'],
          source: 'From the author’s preface · 4 March 2021 · translated',
          chapters: [
            { n: '01', t: 'Enterprise', sub: '企业发展' }, { n: '02', t: 'Rules of the workplace', sub: '职场法则' },
            { n: '03', t: 'Getting along', sub: '人际交往' }, { n: '04', t: 'Fashion & poise', sub: '时尚与气质' },
            { n: '05', t: 'Notes on living', sub: '生活感悟' }, { n: '06', t: 'Love & marriage', sub: '恋爱与婚姻' },
            { n: '07', t: 'Attitude & values', sub: '态度与价值观' }
          ] },
        { t: 'Poetry in Hats', sub: '《帽饰有诗意》', meta: 'Edited by HattersHub · postscript by Jeffrey Sun', src: 'assets/books/poetry.jpg', publisher: 'The Writers Publishing House',
          tagline: '101 poems on headwear, chosen from nearly 1,500 submissions.',
          body: ['In the small world of headwear I have always wanted to do things nobody had done before. Calling for 101 poems, songs and rhapsodies about hats was one of them. A hundred people hold a hundred different Hamlets — I was curious what a hat means to different people, and how many different understandings and attachments there could be. When close to 1,500 pieces arrived, my eyes were opened: I had never imagined a small hat could be read in so many ways.',
                 'People ask why my projects and collections so often count to 101. In Chinese culture, I say, 99 feels slightly short and 100 too full; only 101 means another new beginning.'],
          source: 'From the postscript · 18 March 2023 · translated · opening ode by Xie Mian, prefaces by Zhang Guozhen and Zhao Xiaosheng' },
        { t: 'Ecuador: The Home of Panama Hats', sub: '《厄瓜多尔：巴拿马草帽的故乡》', meta: 'With Zhou Wei', src: 'assets/books/ecuador.webp', year: '2018' },
        { t: '50 Ineffective Behaviors that Deplete Performance', sub: '《偷走绩效的50个无效行为》', meta: 'By Jeffrey Sun', src: 'assets/books/touzou.jpg', year: '2018',
          tagline: '“Effectiveness is a habit — a complex built up by constant training.” — Peter Drucker, the book’s epigraph',
          body: ['In a busy working day, how much of an employee’s time is ineffective? That is a small account. Multiply it by a month, a year, and by every employee, and it becomes an account of strategic size.',
                 'Ineffective behaviour, as a phenomenon, is rooted in human nature and shaped by mechanisms. Only by thinking at the level of management and philosophy can we see its essence and find the way to effective work.'],
          source: 'From the book’s own introduction · translated' },
        { t: 'Great Ambitions, Great World', sub: '《大情怀大世界：张謇的企业家精神》', meta: 'By Jeffrey Sun', src: 'assets/books/zhangjian.jpg' },
        { t: 'SU SHU · The Book of Superlicity', sub: '《素书》', meta: 'Translated into English by Jeffrey Sun', src: 'assets/books/sushu.jpg',
          tagline: 'Chinese and English, in a small format.',
          body: ['The Su Shu is traditionally attributed to Huang Shigong, a reclusive sage of the late Qin dynasty. According to legend, on a bridge at Yishui, Huang Shigong tested Zhang Liang three times. He deliberately dropped his shoe beneath the bridge and ordered Zhang Liang to retrieve it, and repeatedly arrived late to their appointed meetings — testing his patience, humility, and sincerity.',
                 'Zhang Liang remained respectful and composed throughout. Impressed by his character, Huang Shigong finally entrusted him with the Su Shu, a text said to contain the essential principles of governance, leadership, and self-cultivation.'],
          source: 'From “The Legend of the Su Shu”, the book’s opening pages' }
      ],
      forthcoming: {
        eyebrow: 'Translation',
        kicker: 'Carried into English',
        title: 'DAO',
        subtitle: '《道德经》· Chapters 1–81, Chinese and English, with Keys to Dao',
        body: ['I never imagined that one day I would devote myself to translating Dao De Jing. I am neither an English major nor a professional translator. My journey began with nothing more than curiosity. More than a decade ago, I bought Stephen Mitchell’s English rendition of Dao De Jing. I read it casually, never imagining that this seemingly insignificant encounter would one day grow into one of the greatest challenges of my life.',
               'On the evening of May 6, 2024, I said to my wife — who is fluent in both Japanese and English — “I’ve decided to translate Dao De Jing.” She remained silent for a few seconds before asking, “How long do you think it will take?” “Five years,” I replied. That very night, I began.'],
        source: 'From the preface, “Encounter with Dao” · Chapters 1–81 with Keys to Dao',
        lines: [
          { en: 'Wisdom lies within.', zh: '智慧本自具足。' },
          { en: 'Self-awareness is the root of clarity; self-deception the seed of chaos.', zh: '自觉是澄明之根，自欺是混乱之源。' }
        ]
      }
    },
    zh: {
      eyebrow: '出版著作',
      number: '03 / 书作',
      heading: '一座「<em>帽饰</em>」的纸上博物馆。',
      legend: '著作与主编七部，另将两部古籍带入英文——从厄瓜多尔高原到帽缘的哲学。',
      backLabel: '返回',
      seriesLabel: '著作',
      chaptersLabel: '目录',
      items: [
        { t: '《顶尚风华》', sub: 'Unveiling Crowned Elegance', meta: '孙建华 编', src: 'assets/books/dingshang.jpg', year: '2023',
          tagline: '帽子是人类文明开始的标志。',
          body: ['「顶尚风华」四个字，蕴含着深远的含义。其中，「顶」指极至、最高，是头部之谓；「尚」寓意崇高、重要；「风」代表流行、风格；「华」象征华丽、珍贵。「顶尚风华」意味着在头顶之上，必然彰显着极致的风采与尊贵。……我深知，帽饰虽小，却在顶上，天然注定其崇高地位。',
                 '我对帽饰已投入近三十年的心血，同时我近二十年从事帽饰收藏……我愿将这些收藏分享给所有热爱帽饰与时尚文化的朋友们。'],
          source: '—— 前言 · 2023 年 9 月第 1 版' },
        { t: '《头等大饰》', sub: 'HeadWear · The Foremost', meta: '孙建华 著', src: 'assets/books/toudeng.jpg',
          tagline: '一旦对头等大饰的认知和追求成了人生中的头等大事，人的一生岂不美好？',
          body: ['帽子、头饰，我之所以称之为「头等大饰」理由有三：一、帽子虽小，却在头上，注定了服饰系列中天生的头等地位。二、在古代，帽饰是身份地位的象征，有的人为了这一象征地位的帽子，奋斗几十年，甚至一辈子，成了他们人生中的头等大事。三、经济繁荣，是任何国家的头等大事。而经济的繁荣偏偏与帽子的消费密切相关。',
                 '从本质上讲，豪车不是车，它是身份的象征，豪宅也不是宅子，而是财富的象征。同样，高级的帽子，也不是帽子，而是一种人生态度，一种生活方式，一种自我定位，一种品味区隔！'],
          source: '—— 序一 · 2023 年 2 月 20 日于云南丽江' },
        { t: '《随心琐语》', sub: 'Imaginative Thoughts', meta: '孙建华 著', src: 'assets/books/suixin.jpg', year: '2021',
          tagline: '帽子哥感悟集粹。后有英文版一〇一篇。',
          body: ['大学的时候比较喜欢读《培根随笔》，喜欢读一些名人金句，喜欢读周国平的书，也开始喜欢一些哲学思维，后来就慢慢喜欢去思考去感悟去总结。好在养成了记笔记的习惯，也就有了这些积累。',
                 '也不知道这里的感悟是原作者的，还是我的，但我相信至少 80% 是自己的，因为那些当初是别人的东西，经过了时间的沉淀已经融入了我的血液。谁的，并不重要，重要的是如果能对您有用，能让您产生共鸣，也算是我的一点价值。'],
          source: '—— 自序 · 2021 年 3 月 4 日',
          chapters: [
            { n: '01', t: '企业发展', sub: 'Enterprise' }, { n: '02', t: '职场法则', sub: 'Rules of the workplace' },
            { n: '03', t: '人际交往', sub: 'Getting along' }, { n: '04', t: '时尚与气质', sub: 'Fashion & poise' },
            { n: '05', t: '生活感悟', sub: 'Notes on living' }, { n: '06', t: '恋爱与婚姻', sub: 'Love & marriage' },
            { n: '07', t: '态度与价值观', sub: 'Attitude & values' }
          ] },
        { t: '《帽饰有诗意》', sub: 'Poetry in Hats', meta: '帽仕汇 编 · 后记 孙建华', src: 'assets/books/poetry.jpg', publisher: '作家出版社',
          tagline: '从近一千五百首来稿中选出的 101 首帽饰诗词歌赋。',
          body: ['在帽饰这个细分领域里，我总想做些别人没有做过的事情。征集 101 首关于帽饰的诗词歌赋便是其中之一。一百人的心中就有一百个不同的哈姆雷特，我很好奇，在不同人的心目中，帽饰又意味着什么呢？又有多少不同的理解和情感连接呢？当我收到近一千五百首诗词歌赋以后，我的眼界被打开了，没想到小小的帽子有这么多的解读！',
                 '有人问我，为什么我做的项目或收藏大多以 101 计？我说，在中国文化里 99 略显不足，100 又显得太满，只有 101 意味着又一次新的开始。'],
          source: '—— 后记 · 2023 年 3 月 18 日 · 赋辞 谢冕 · 序 张国祯 赵晓生' },
        { t: '《厄瓜多尔：巴拿马草帽的故乡》', sub: 'Ecuador: The Home of Panama Hats', meta: '与周伟 合著', src: 'assets/books/ecuador.webp', year: '2018' },
        { t: '《偷走绩效的50个无效行为》', sub: '50 Ineffective Behaviors', meta: '孙建华 著', src: 'assets/books/touzou.jpg', year: '2018',
          tagline: '「卓有成效是一种习惯，是不断训练出来的综合体。」—— 德鲁克，本书题记',
          body: ['一个员工忙碌一天，有多少时间是无效的？这是一笔「小账」。如果乘以一月、一年，乘以全体员工数，就是一笔战略级的「大账」。',
                 '现象级的无效行为，根子在人性，主体在机制，要从管理与哲学层面思考，才能看清本质，找到高效工作之道。'],
          source: '—— 本书内容简介' },
        { t: '《大情怀大世界：张謇的企业家精神》', sub: 'Great Ambitions, Great World', meta: '孙建华 著', src: 'assets/books/zhangjian.jpg' },
        { t: '《素书》', sub: 'SU SHU · The Book of Superlicity', meta: '孙建华 英译', src: 'assets/books/sushu.jpg',
          tagline: '中英对照 · 小开本',
          body: ['《素书》相传为秦末隐士黄石公所著。圯桥之上，黄石公三试张良：故意将鞋抛入桥下令他取回，又屡次相约迟到，考验其心性与诚意。',
                 '张良始终恭敬忍让，黄石公便将《素书》传授于他，书中尽载治国、驭人、修身之要。后来张良以此辅佐刘邦成就汉室基业，临终前将此书陪葬，秘不流传。'],
          source: '—— 「素书传说」 · 本书开篇' }
      ],
      forthcoming: {
        eyebrow: '译著',
        kicker: '带入英文',
        title: 'DAO',
        subtitle: '《道德经》· 一至八十一章 中英对照，附「道之钥」',
        body: ['我并非英语专业出身，也从未设想过，有一天自己会去翻译《道德经》。我对《道德经》英语版的兴趣，最初只是出于好奇。十多年前，我买过一本斯蒂芬·米切尔的英文译本，当时只是随手翻阅，从未想到，这一次微小的相遇，竟会在多年之后，发展为我生命中的一次全新挑战。',
               '2024 年 5 月 6 日晚，我对妻子说——她精通日语和英语——我决定翻译《道德经》。她沉默了几秒，问我：「你打算用多长时间？」「五年。」我回答。那天夜里，我便正式开始了。'],
        source: '—— 前言「与道相遇」 · 一至八十一章，附「道之钥」',
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
      number: '07 / Photographs',
      heading: 'Time, <em>weight</em>, water.',
      legend: 'Three photographic series by Jeffrey Sun — Fruits of Time, Gravity, Shadow on Water.',
      items: [
        {
          t: 'Fruits of Time', sub: '《时间的果实》', src: 'assets/photo-fruits.webp',
          frames: ['assets/photo-fruits.webp','assets/photo-gravity.webp','assets/photo-shadow.webp','assets/photo-fruits.webp','assets/photo-gravity.webp']
        },
        {
          t: 'Gravity', sub: '《重》', src: 'assets/photo-gravity.webp',
          frames: ['assets/photo-gravity.webp','assets/photo-fruits.webp','assets/photo-shadow.webp','assets/photo-gravity.webp','assets/photo-fruits.webp']
        },
        {
          t: 'Shadow on Water', sub: '《水影》', src: 'assets/photo-shadow.webp',
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
      number: '07 / 摄影作品',
      heading: '时间·<em>重</em>·水影。',
      legend: '孙建华的三幅摄影作品——来自工作室与旅途之间的注意力碎片。',
      items: [
        {
          t: '《时间的果实》', sub: 'Fruits of Time', src: 'assets/photo-fruits.webp',
          frames: ['assets/photo-fruits.webp','assets/photo-gravity.webp','assets/photo-shadow.webp','assets/photo-fruits.webp','assets/photo-gravity.webp']
        },
        {
          t: '《重》', sub: 'Gravity', src: 'assets/photo-gravity.webp',
          frames: ['assets/photo-gravity.webp','assets/photo-fruits.webp','assets/photo-shadow.webp','assets/photo-gravity.webp','assets/photo-fruits.webp']
        },
        {
          t: '《水影》', sub: 'Shadow on Water', src: 'assets/photo-shadow.webp',
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
