// === Section components ===

function Nav({ lang, setLang, scrolled, activeSection }) {
  const t = CONTENT.nav[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
  { k: 'about', label: t.about },
  { k: 'books', label: t.books },
  { k: 'works', label: t.works },
  { k: 'philosophy', label: t.philosophy },
  { k: 'art', label: t.art },
  { k: 'photography', label: t.photography },
  { k: 'industry', label: t.industry },
  { k: 'contact', label: t.contact }];


  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {document.body.style.overflow = '';};
  }, [menuOpen]);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);};
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  const handleNav = (k) => {setMenuOpen(false);};

  return (
    <>
      <nav className={'nav' + (scrolled ? ' scrolled' : '') + (menuOpen ? ' menu-open' : '')} style={{ height: "58px" }}>
        <a href="#top" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="mark"><em>J</em></span>
          <span className="nav-logo-text">Jeffrey Sun · 帽子哥</span>
        </a>
        <div className="nav-links">
          {links.map((l) =>
          <a key={l.k} href={'#' + l.k} className={activeSection === l.k ? 'active' : ''}>{l.label}</a>
          )}
        </div>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'zh' ? 'active' : ''} onClick={() => setLang('zh')}>中</button>
          </div>
          <a href="#contact" className="contact-pill" hidden style={{ display: 'none' }} aria-hidden="true" tabIndex={-1}>
            <span className="dot" />
            <span>{lang === 'en' ? 'Available' : '可联系'}</span>
          </a>
          <button
            className={'nav-burger' + (menuOpen ? ' open' : '')}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}>
            
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={'mobile-menu' + (menuOpen ? ' open' : '')} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <div className="mm-eyebrow">
            <span className="eyebrow">{lang === 'en' ? 'Navigation' : '导航'}</span>
            <span className="label-num">— 06</span>
          </div>
          <nav className="mm-links">
            {links.map((l, i) =>
            <a
              key={l.k}
              href={'#' + l.k}
              className={activeSection === l.k ? 'active' : ''}
              onClick={() => handleNav(l.k)}
              style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.04}s` : '0s' }}>
              
                <span className="mm-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="mm-label">{l.label}</span>
                <span className="mm-arrow">↗</span>
              </a>
            )}
          </nav>
          <div className="mm-footer">
            <div className="mm-foot-col">
              <div className="head">{lang === 'en' ? 'Email' : '邮箱'}</div>
              <a href="mailto:Jeffrey@hattershub.com">Jeffrey@hattershub.com</a>
            </div>
            <div className="mm-foot-col">
              <div className="head">{lang === 'en' ? 'Studio' : '工作室'}</div>
              <span>{lang === 'en' ? 'Nantong · Shanghai' : '南通 · 上海'}</span>
            </div>
          </div>
        </div>
      </div>
    </>);

}

function Hero({ lang }) {
  const h = CONTENT.hero[lang];
  return (
    <section id="top" className="hero">
      <span className="scroll-cue" hidden style={{ display: 'none' }}>{h.scroll} ↓</span>
      <div className="container">
        <div className="hero-top">
          <div className="hero-meta">
            <div><span>{h.eyebrowL}</span></div>
            <div><span>{h.eyebrowR}</span></div>
            <div><span>{h.since}</span></div>
          </div>
          <div className="hero-meta">
            <div><strong>{h.role}</strong></div>
          </div>
        </div>

        <div className="hero-main">
          <h1 className="hero-title">
            <span className="row">{h.title1}<span className="small"> ¹⁹⁹⁶</span></span>
            <span className="row indent"><em>{h.title2Em}</em></span>
            <span className="row">{h.title3}.</span>
          </h1>
          <div className="hero-portrait">
            <div className="hero-portrait-img">
              <img src="assets/jeffrey-portrait.webp" alt="Jeffrey Sun · 帽子哥" fetchpriority="high" />
            </div>
            <div className="hero-portrait-caption">
              <div className="name-en">Jeffrey Sun</div>
              <div className="name-zh">孙建华 · 帽子哥</div>
              <div className="title-tag">{lang === 'en' ? 'The most influential figure in Chinese hat culture' : '中国帽饰文化最具影响力人物'}</div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <p className="hero-tagline">{h.tagline}</p>
          <div className="hero-stats">
            {h.stats.map((s, i) =>
            <div className="hero-stat" key={i}>
                <div className="num">{s.num}{s.sup && <sup>{s.sup}</sup>}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            )}
          </div>
          <div className="hero-cta">
            <a href="#about" className="hero-scroll">
              <span>{lang === 'en' ? 'Begin' : '入'}</span>
              <span className="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>);

}

function About({ lang }) {
  const a = CONTENT.about[lang];
  return (
    <section id="about" data-screen-label="About">
      <div className="container">
        <SectionHead number={a.number} eyebrow={a.eyebrow} headingHtml={a.heading} />
        <div className="about">
          <div className="about-index reveal">
            <div className="about-index-row">
              <span className="k">Name</span>
              <span className="v">{lang === 'en' ? 'Jeffrey Sun' : '孙建华'}</span>
            </div>
            <div className="about-index-row">
              <span className="k">{lang === 'en' ? 'Known as' : '别号'}</span>
              <span className="v">{lang === 'en' ? 'Hat Brother · 帽子哥' : '帽子哥 · Hat Brother'}</span>
            </div>
            <div className="about-index-row">
              <span className="k">{lang === 'en' ? 'Based in' : '常驻'}</span>
              <span className="v">{lang === 'en' ? 'Shanghai · Nantong · China' : '上海 · 南通 · 中国'}</span>
            </div>
            <div className="about-index-row">
              <span className="k">{lang === 'en' ? 'Founded' : '创立'}</span>
              <span className="v">Foremost Group · 1996</span>
            </div>
            <div className="about-index-row">
              <span className="k">{lang === 'en' ? 'Founded' : '创立'}</span>
              <span className="v">Foremost Hat Museum · 南通帽饰博物馆</span>
            </div>
            <div className="about-index-row">
              <span className="k">{lang === 'en' ? 'Initiated' : '发起'}</span>
              <span className="v">920 China Hat Festival · 中国国际帽饰设计大赛</span>
            </div>
            <div className="about-index-row">
              <span className="k">{lang === 'en' ? 'Honoured' : '荣誉'}</span>
              <span className="v">{lang === 'en' ? 'Most Influential Figure in Chinese Hat Culture · 2018' : '中国帽饰文化最具影响力人物 · 2018'}</span>
            </div>
            <div className="about-index-row">
              <span className="k">{lang === 'en' ? 'Pursuits' : '志趣'}</span>
              <span className="v">{lang === 'en' ? 'Industry · Art · Philosophy · Philanthropy · Collection' : '产业 · 艺术 · 哲学 · 慈善 · 收藏'}</span>
            </div>
            <blockquote className="about-creed">
              <p className="creed-en">In any niche sector in China, if just one or two individuals or one or two enterprises are willing to stay focused, strive for ultimate excellence in products, services, or culture, and persist for ten, twenty, even thirty years, China will surely impress the world.</p>
              <p className="creed-zh">在中国任何一个细分品类里，只要有这么一两个人或一两家企业愿意沉下心，把文化、产品或服务做到极致，坚持10到20年乃至30年以后，中国一定会震撼世界！</p>
              <a className="creed-pdf" href="assets/Jeffrey-Sun-Profile.pdf" download>
                <span className="cp-arrow" aria-hidden="true">↓</span>
                <span className="cp-label">{lang === 'en' ? "Download Jeffrey's profile (PDF)" : '下载帽子哥简介 PDF'}</span>
              </a>
            </blockquote>
            <div className="about-mark">
              <img className="about-signature" src="assets/signature.webp" alt={lang === 'en' ? 'Jeffrey Sun signature' : '孙建华签名'}  loading="lazy" />
            </div>
          </div>
          <div className="about-text reveal">
            <HTML tag="p" className="lead" html={a.lead} />
            {a.paras.map((p, i) => <p key={i}>{p}</p>)}
            <div className="about-bullets">
              {a.bullets.map((b, i) =>
              <div className="about-bullet" key={i}>
                  <span className="num">{b.n}</span>
                  <HTML tag="span" className="text" html={b.text} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Feature({ lang }) {
  const f = CONTENT.feature[lang];
  return (
    <section id="art" className="feature" data-screen-label="Featured Sculpture">
      <div className="container">
        <SectionHead number={f.number} eyebrow={f.eyebrow} headingHtml={f.heading} />
        <div className="feature-body">
          <div className="feature-image-wrap reveal">
            <span className="corner tl">▲ ART · 001</span>
            <span className="corner br">RESIN · BLUE — H 88cm</span>
            <img src="assets/sculpture-main.webp" alt="Identity and the Self"  loading="lazy" />
          </div>
          <div className="feature-text reveal">
            <div className="work-num">{f.workNo}</div>
            <HTML tag="h3" html={f.title} />
            <p className="quote">{f.quote}</p>
            <div className="meta-row">
              {f.meta.map((m, i) =>
              <div key={i}>
                  <div className="k">{m.k}</div>
                  <div className="v">{m.v}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Works({ lang, onOpen }) {
  const w = CONTENT.works[lang];
  return (
    <section id="works" data-screen-label="Works">
      <div className="container">
        <SectionHead number={w.number} eyebrow={w.eyebrow} headingHtml={w.heading} />
        <div className="works-intro reveal">
          <p className="legend">{w.legend}</p>
          <span className="label-num">04 / {String(w.items.length).padStart(2, '0')}</span>
        </div>
        <div className="works-grid">
          {w.items.map((it, i) =>
          <div key={i} className={'work-card ' + it.span + ' reveal'} onClick={() => onOpen(it)}>
              <span className="corner-num">{it.n}</span>
              <span className="corner-tag">{it.tag}</span>
              <img src={it.src} alt={it.t}  loading="lazy" />
              <div className="info">
                <span className="t">{it.t}</span>
                <span className="n">{it.subtitle}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Philosophy({ lang }) {
  const p = CONTENT.philosophy[lang];
  return (
    <section id="philosophy" className="philosophy" data-screen-label="Philosophy">
      <div className="container">
        <SectionHead number={p.number} eyebrow={p.eyebrow} headingHtml={p.heading} />
        <div className="philo-grid">
          <div className="philo-quote reveal">
            <HTML tag="span" html={p.quote} />
            <span className="attr">{p.attr}</span>
          </div>
          <div className="philo-list reveal">
            {p.items.map((it, i) =>
            <div className="philo-item" key={i}>
                <span className="n">{it.n}</span>
                <div className="body">
                  <h4>{it.t}</h4>
                  <p>{it.p}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function Industry({ lang }) {
  const ind = CONTENT.industry[lang];
  return (
    <section id="industry" className="industry" data-screen-label="Industry">
      <div className="container">
        <SectionHead number={ind.number} eyebrow={ind.eyebrow} headingHtml={ind.heading} />
        <div className="industry-grid">
          {ind.stats.map((s, i) =>
          <div className="industry-stat reveal" key={i}>
              <div className="num">{s.num}{s.sup && <sup>{s.sup}</sup>}</div>
              <div className="lbl">{s.lbl}</div>
              <div className="desc">{s.desc}</div>
            </div>
          )}
        </div>
        <div className="brands-row reveal">
          <div className="head">{ind.brandsHead}</div>
          <div className="brands-list">
            {ind.brands.map((b, i) =>
            <div className="brand-card" key={i}>
                <div className="nm">{b.nm}</div>
                <div className="tagline">{b.tagline}</div>
                <div className="desc">{b.desc}</div>
              </div>
            )}
          </div>
        </div>

        <FactoryMap lang={lang} />
      </div>
    </section>);

}

function FactoryMap({ lang }) {
  const t = lang === 'en' ?
  { eyebrow: 'Global Footprint', title: 'Six production bases. One philosophy.', sub: 'A balanced manufacturing network across China, Vietnam and Cambodia — designed for proximity, resilience, and craft.', factoryHead: 'Factories', customerHead: 'Customer distribution', customers: 'North America · Europe · East Asia · ANZ · LATAM' } :
  { eyebrow: '全球布局', title: '六个生产基地 · 一种理念。', sub: '横跨中国、越南、柬埔寨的均衡制造网络——以贴近、韧性与匠心为本。', factoryHead: '工厂分布', customerHead: '客户分布', customers: '北美 · 欧洲 · 东亚 · 澳新 · 拉美' };

  // Lat/long converted to % on a roughly equirectangular world view
  // x = (lon + 180) / 360 * 100; y = (90 - lat) / 180 * 100
  const factories = [
  { id: 'F1', name: 'Shandong Jia Mei Headwears', city: 'Shandong, CN', lat: 36.6, lon: 117.0 },
  { id: 'F2', name: 'Nantong K-Max Headwears', city: 'Nantong, CN', lat: 32.0, lon: 120.9 },
  { id: 'F3', name: 'Nantong Foremost Headwears', city: 'Nantong, CN', lat: 32.0, lon: 120.86 },
  { id: 'F4', name: 'Vietnam Foremost Headwears', city: 'Vietnam', lat: 10.8, lon: 106.6 },
  { id: 'F5', name: 'Goodmate Cambodia Headwears', city: 'Cambodia', lat: 11.55, lon: 104.92 },
  { id: 'F6', name: 'Goodmate Cambodia Headwears No.2', city: 'Cambodia', lat: 11.6, lon: 104.95 }];

  const customers = [
  { id: 'C1', name: 'North America', lat: 40, lon: -100 },
  { id: 'C2', name: 'Europe', lat: 50, lon: 10 },
  { id: 'C3', name: 'East Asia', lat: 36, lon: 138 },
  { id: 'C4', name: 'ANZ', lat: -27, lon: 134 },
  { id: 'C5', name: 'LATAM', lat: -15, lon: -55 }];

  const proj = (lat, lon) => ({ x: (lon + 180) / 360 * 100, y: (90 - lat) / 180 * 100 });

  return (
    <div className="factory-map reveal">
      <div className="fm-head">
        <div className="fm-eyebrow">
          <span className="bar" />
          <span>{t.eyebrow}</span>
        </div>
        <h3 className="fm-title">{t.title}</h3>
        <p className="fm-sub">{t.sub}</p>
      </div>

      <div className="fm-canvas">
        <WorldDots />
        {/* connection arcs from Nantong (32, 120.86) to customer regions */}
        <svg className="fm-arcs" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
          {customers.map((c) => {
            const a = proj(32, 120.86);
            const b = proj(c.lat, c.lon);
            const x1 = a.x * 10,y1 = a.y * 5;
            const x2 = b.x * 10,y2 = b.y * 5;
            const cx = (x1 + x2) / 2;
            const cy = Math.min(y1, y2) - Math.abs(x2 - x1) * 0.18;
            return (
              <path key={c.id}
              d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
              fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4"
              opacity="0.5" />);

          })}
        </svg>

        {customers.map((c) => {
          const p = proj(c.lat, c.lon);
          return (
            <div key={c.id} className="fm-pin fm-pin-customer" style={{ left: p.x + '%', top: p.y + '%' }}>
              <span className="ring" />
              <span className="dot" />
              <span className="lbl">{c.name}</span>
            </div>);

        })}

        {factories.map((f) => {
          const p = proj(f.lat, f.lon);
          return (
            <div key={f.id} className="fm-pin fm-pin-factory" style={{ left: p.x + '%', top: p.y + '%' }}>
              <span className="ring" />
              <span className="dot" />
              <span className="lbl">{f.id}</span>
              <span className="tip">
                <span className="tip-id">{f.id}</span>
                <span className="tip-name">{f.name}</span>
                <span className="tip-city">{f.city}</span>
              </span>
            </div>);

        })}
      </div>

      <div className="fm-legend">
        <div className="fm-col">
          <div className="fm-col-head">
            <span className="sw factory" />
            <span>{t.factoryHead}</span>
            <span className="cnt">{factories.length}</span>
          </div>
          <ol className="fm-list">
            {factories.map((f) =>
            <li key={f.id}>
                <span className="id">{f.id}</span>
                <span className="nm">{f.name}</span>
                <span className="ct">{f.city}</span>
              </li>
            )}
          </ol>
        </div>
        <div className="fm-col">
          <div className="fm-col-head">
            <span className="sw customer" />
            <span>{t.customerHead}</span>
          </div>
          <ol className="fm-list">
            {customers.map((c) =>
            <li key={c.id}>
                <span className="id">{c.id}</span>
                <span className="nm">{c.name}</span>
              </li>
            )}
          </ol>
        </div>
      </div>
    </div>);

}

function WorldDots() {
  // Generate a stylized dot-matrix world by rendering dots only where landmasses sit
  // Using a low-res hand-curated boolean grid of approximate continents (40 cols × 20 rows).
  const grid = [
  "0000000111111111110000000011000000000000",
  "0000111111111111111110001111110000000000",
  "0000111111111111111111111111111000000000",
  "0001111111111111111111111111111100000000",
  "0001111111111111111111111111111110000000",
  "0000111111110001111111111111111110000000",
  "0000011110000000111111111111111000000000",
  "0000000110000000011111111111110000000000",
  "0000000110000000001111111111100000000000",
  "0000000111000000001111111111000000000000",
  "0000000111100000001111110011000000000000",
  "0000000011110000011111110000000000000000",
  "0000000001111000111111100000000000000000",
  "0000000001111000111111000000000000000000",
  "0000000000111000011111000000000000000000",
  "0000000000011100001111000000000000000000",
  "0000000000001110000111000000000000000000",
  "0000000000000110000011000000000000000000",
  "0000000000000010000001000000000000000000",
  "0000000000000000000000000000000000000000"];

  const cells = [];
  grid.forEach((row, r) => {
    [...row].forEach((c, i) => {
      if (c === '1') cells.push({ r, i });
    });
  });
  const cols = grid[0].length,rows = grid.length;
  return (
    <div className="fm-dots" aria-hidden="true">
      {cells.map(({ r, i }, k) =>
      <span key={k} className="fm-dot"
      style={{ left: (i + 0.5) / cols * 100 + '%', top: (r + 0.5) / rows * 100 + '%' }} />
      )}
    </div>);

}

function Books({ lang }) {
  const b = CONTENT.books[lang];
  const trackRef = React.useRef(null);
  const [active, setActive] = React.useState(null);
  const dragMovedRef = React.useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const cards = track.querySelectorAll('.book-card');
      const rect = track.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      cards.forEach((c) => {
        const cr = c.getBoundingClientRect();
        const cc = cr.left + cr.width / 2;
        const d = (cc - center) / (rect.width / 2); // -1 .. 1 across viewport width
        const clamped = Math.max(-1.4, Math.min(1.4, d));
        const ay = clamped * -22; // rotateY degrees
        const sc = 1 - Math.min(0.18, Math.abs(clamped) * 0.18);
        const tz = -Math.abs(clamped) * 90; // recede
        const op = 1 - Math.min(0.55, Math.abs(clamped) * 0.5);
        c.style.transform = `translateZ(${tz}px) rotateY(${ay}deg) scale(${sc})`;
        c.style.opacity = op.toFixed(3);
        c.style.zIndex = String(100 - Math.round(Math.abs(clamped) * 100));
      });
    };
    const onScroll = () => {if (!raf) raf = requestAnimationFrame(update);};
    update();
    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Drag-to-scroll
    let isDown = false,startX = 0,startLeft = 0;
    const down = (e) => {isDown = true;dragMovedRef.current = false;startX = e.touches ? e.touches[0].pageX : e.pageX;startLeft = track.scrollLeft;track.classList.add('dragging');};
    const move = (e) => {if (!isDown) return;const x = e.touches ? e.touches[0].pageX : e.pageX;const dx = x - startX;if (Math.abs(dx) > 4) dragMovedRef.current = true;track.scrollLeft = startLeft - dx;};
    const up = () => {isDown = false;track.classList.remove('dragging');};
    track.addEventListener('mousedown', down);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      track.removeEventListener('mousedown', down);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [lang]);

  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {if (e.key === 'Escape') setActive(null);};
    window.addEventListener('keydown', onKey);
    return () => {document.body.style.overflow = prev;window.removeEventListener('keydown', onKey);};
  }, [active]);

  const openIdx = (i) => {if (dragMovedRef.current) return;setActive(i);};
  const item = active !== null ? b.items[active] : null;

  return (
    <section id="books" className="books" data-screen-label="Books">
      <div className="container">
        <SectionHead number={b.number} eyebrow={b.eyebrow} headingHtml={b.heading} />
        <div className="works-intro reveal">
          <p className="legend">{b.legend}</p>
          <span className="label-num">{String(b.items.length).padStart(2, '0')} / {String(b.items.length + 1).padStart(2, '0')}</span>
        </div>

        <div className="dao-feature dao-feature--top reveal">
          <div className="dao-left">
            <div className="dao-eyebrow">
              <span className="dot" />
              <span>{b.forthcoming.eyebrow}</span>
            </div>
            <div className="dao-kicker">{b.forthcoming.kicker}</div>
            <h3 className="dao-title">{b.forthcoming.title}</h3>
            <div className="dao-subtitle">{b.forthcoming.subtitle}</div>
            <p className="dao-body">{b.forthcoming.body}</p>
            <ul className="dao-lines">
              {b.forthcoming.lines.map((l, i) =>
              <li key={i}>
                  <span className="ln-num">— {String(i + 1).padStart(2, '0')}</span>
                  <div className="ln-en">{l.en}</div>
                  <div className="ln-zh">{l.zh}</div>
                </li>
              )}
            </ul>
          </div>
          <div className="dao-right">
            <div className="dao-cover">
              <div className="dao-cover-inner">
                <span className="dao-cover-eyebrow">{lang === 'en' ? 'Dao De Jing · Forthcoming' : '道德经 · 即将面世'}</span>
                <div className="dao-cover-art" role="img" aria-label="Dao calligraphy">
                  <svg className="dao-art-svg" viewBox="0 0 750 700" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                    <defs>
                      <mask id="dao-stroke-mask">
                        <rect width="750" height="700" fill="black" />
                        <rect className="dao-mask-wipe" x="0" y="0" width="750" height="0" fill="white" />
                      </mask>
                    </defs>
                    <image href="assets/dao-calligraphy.webp" x="0" y="0" width="750" height="700"
                    preserveAspectRatio="xMidYMid meet" mask="url(#dao-stroke-mask)" />
                  </svg>
                </div>
                <div className="dao-cover-foot">
                  <span className="dao-cover-en">DAO</span>
                  <span className="dao-cover-zh">道</span>
                  <span className="dao-cover-by">{lang === 'en' ? 'Translated & annotated by Jeffrey Sun' : '孙建华 译注'}</span>
                </div>
              </div>
            </div>
            <span className="dao-caption">— Cover study · Forthcoming</span>
          </div>
        </div>

        <div className="books-flow reveal">
          <div className="books-track" ref={trackRef}>
            {b.items.map((it, i) =>
            <button type="button" className="book-card" data-idx={i} key={i} onClick={() => openIdx(i)} aria-label={`Open ${it.t}`}>
                <div className="book-shelf">
                  <div className="book-cover">
                    <img src={it.src} alt={it.t} draggable="false"  loading="lazy" />
                  </div>
                  <div className="book-shadow" />
                </div>
                <div className="book-info">
                  <span className="book-num">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="book-title">{it.t}</h4>
                  <div className="book-sub">{it.sub}</div>
                  <div className="book-meta">
                    <span>{it.meta}</span>
                    <span className="dot">·</span>
                    <span>{it.year}</span>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
      {item &&
      <div className="photo-overlay" role="dialog" aria-modal="true" aria-label={item.t}>
          <div className="po-scroll">
            <div className="po-topbar">
              <button className="po-back" type="button" onClick={() => setActive(null)}>
                <span aria-hidden="true">←</span>
                <span>{b.backLabel}</span>
              </button>
              <span className="po-eyebrow">{b.seriesLabel} · {String(active + 1).padStart(2, '0')} / {String(b.items.length).padStart(2, '0')}</span>
              <button className="po-close" type="button" onClick={() => setActive(null)} aria-label="Close">×</button>
            </div>
            <div className="po-hero">
              <div className="po-hero-meta"><span className="po-eb">{b.seriesLabel}</span></div>
              <h2 className="po-title">{item.t}</h2>
              <div className="po-sub">{item.sub}</div>
              <div className="po-tagline">{item.tagline}</div>
            </div>
            <div className="po-cover po-cover--book"><img src={item.src} alt={item.t}  loading="lazy" /></div>
            <div className="po-body">
              <div className="po-meta-col">
                <div className="po-meta-row"><span className="po-meta-k">{lang === 'en' ? 'Year' : '年份'}</span><span className="po-meta-v">{item.year}</span></div>
                <div className="po-meta-row"><span className="po-meta-k">{lang === 'en' ? 'Author' : '作者'}</span><span className="po-meta-v">{item.meta}</span></div>
                <div className="po-meta-row"><span className="po-meta-k">{lang === 'en' ? 'Publisher' : '出版'}</span><span className="po-meta-v">{item.publisher}</span></div>
                <div className="po-meta-row"><span className="po-meta-k">{lang === 'en' ? 'Pages' : '页数'}</span><span className="po-meta-v">{item.pages}</span></div>
                <div className="po-meta-row"><span className="po-meta-k">{lang === 'en' ? 'Format' : '装帧'}</span><span className="po-meta-v">{item.format}</span></div>
              </div>
              <p className="po-essay">{item.body}</p>
            </div>
            <div className="po-frames">
              <div className="po-frames-head">
                <span className="po-eb">{b.chaptersLabel}</span>
                <span className="po-count">{String(item.chapters.length).padStart(2, '0')}</span>
              </div>
              <ul className="po-chapters">
                {item.chapters.map((ch, j) =>
              <li key={j} className="po-chapter">
                    <span className="po-ch-num">{ch.n}</span>
                    <div className="po-ch-body">
                      <span className="po-ch-t">{ch.t}</span>
                      <span className="po-ch-sub">{ch.sub}</span>
                    </div>
                  </li>
              )}
              </ul>
            </div>
            <div className="po-footer">
              <button className="po-back" type="button" onClick={() => setActive(null)}>
                <span aria-hidden="true">←</span>
                <span>{b.backLabel}</span>
              </button>
            </div>
          </div>
        </div>
      }
    </section>);

}

function Photography({ lang }) {
  const p = CONTENT.photography[lang];
  const [active, setActive] = React.useState(null);
  const stripRef = React.useRef(null);

  // Drag-to-scroll on the strip
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    let down = false,startX = 0,startLeft = 0,moved = false;
    const onDown = (e) => {
      const x = e.touches ? e.touches[0].pageX : e.pageX;
      down = true;moved = false;startX = x;startLeft = el.scrollLeft;
      el.classList.add('dragging');
    };
    const onMove = (e) => {
      if (!down) return;
      const x = e.touches ? e.touches[0].pageX : e.pageX;
      const dx = x - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startLeft - dx;
    };
    const onUp = () => {down = false;el.classList.remove('dragging');setTimeout(() => {el.dataset.justDragged = moved ? '1' : '';}, 0);};
    el.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    el.addEventListener('touchstart', onDown, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: true });
    el.addEventListener('touchend', onUp);
    return () => {
      el.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      el.removeEventListener('touchstart', onDown);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onUp);
    };
  }, [lang]);

  // Lock body scroll when overlay open + ESC to close
  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {if (e.key === 'Escape') setActive(null);};
    window.addEventListener('keydown', onKey);
    return () => {document.body.style.overflow = prev;window.removeEventListener('keydown', onKey);};
  }, [active]);

  const openIdx = (i) => {
    const el = stripRef.current;
    if (el && el.dataset.justDragged === '1') return; // suppress click after drag
    setActive(i);
  };

  const item = active !== null ? p.items[active] : null;

  return (
    <section id="photography" className="photography" data-screen-label="Photography">
      <div className="container photo-head">
        <SectionHead number={p.number} eyebrow={p.eyebrow} headingHtml={p.heading} />
        <div className="works-intro reveal">
          <p className="legend">{p.legend}</p>
          <span className="label-num">— Photographed by Jeffrey Sun</span>
        </div>
      </div>
      <div className="photo-strip-wrap reveal">
        <div className="photo-strip" ref={stripRef}>
          {p.items.map((it, i) =>
          <button
            type="button"
            className="photo-card"
            style={{ '--i': i }}
            key={i}
            onClick={() => openIdx(i)}
            aria-label={`Open ${it.t}`}>
            
              <div className="photo-frame">
                <img src={it.src} alt={it.t} draggable="false"  loading="lazy" />
                <span className="photo-grain" />
                <span className="photo-open">
                  <span className="po-arrow" aria-hidden="true">↗</span>
                  <span className="po-label">{p.caseLabel}</span>
                </span>
              </div>
              <figcaption>
                <span className="photo-num">— 0{i + 1}</span>
                <span className="photo-t">{it.t}</span>
                <span className="photo-sub">{it.sub}</span>
              </figcaption>
            </button>
          )}
        </div>
      </div>

      {item &&
      <div className="photo-overlay" role="dialog" aria-modal="true" aria-label={item.t}>
          <div className="po-scroll">
            <div className="po-topbar">
              <button className="po-back" type="button" onClick={() => setActive(null)}>
                <span aria-hidden="true">←</span>
                <span>{p.backLabel}</span>
              </button>
              <span className="po-eyebrow">{p.caseLabel} · {String(active + 1).padStart(2, '0')} / {String(p.items.length).padStart(2, '0')}</span>
              <button className="po-close" type="button" onClick={() => setActive(null)} aria-label="Close">×</button>
            </div>
            <div className="po-hero">
              <div className="po-hero-meta">
                <span className="po-eb">{p.seriesLabel}</span>
              </div>
              <h2 className="po-title">{item.t}</h2>
              <div className="po-sub">{item.sub}</div>
              <div className="po-tagline">{item.tagline}</div>
            </div>
            <div className="po-cover">
              <img src={item.src} alt={item.t}  loading="lazy" />
            </div>
            <div className="po-body">
              <div className="po-meta-col">
                <div className="po-meta-row"><span className="po-meta-k">{lang === 'en' ? 'Year' : '年份'}</span><span className="po-meta-v">{item.year}</span></div>
                <div className="po-meta-row"><span className="po-meta-k">{lang === 'en' ? 'Location' : '地点'}</span><span className="po-meta-v">{item.place}</span></div>
                <div className="po-meta-row"><span className="po-meta-k">{lang === 'en' ? 'Frames' : '影像'}</span><span className="po-meta-v">{item.frames.length}</span></div>
              </div>
              <p className="po-essay">{item.body}</p>
            </div>
            <div className="po-frames">
              <div className="po-frames-head">
                <span className="po-eb">{p.framesLabel}</span>
                <span className="po-count">{String(item.frames.length).padStart(2, '0')}</span>
              </div>
              <div className="po-frames-grid">
                {item.frames.map((src, j) =>
              <figure className="po-frame" key={j}>
                    <img src={src} alt={`${item.t} — frame ${j + 1}`}  loading="lazy" />
                    <figcaption>— {String(j + 1).padStart(2, '0')}</figcaption>
                  </figure>
              )}
              </div>
            </div>
            <div className="po-footer">
              <button className="po-back" type="button" onClick={() => setActive(null)}>
                <span aria-hidden="true">←</span>
                <span>{p.backLabel}</span>
              </button>
            </div>
          </div>
        </div>
      }
    </section>);

}

function Contact({ lang }) {
  const c = CONTENT.contact[lang];
  return (
    <section id="contact" className="contact" data-screen-label="Contact">
      <div className="container">
        <SectionHead number={c.number} eyebrow={c.eyebrow} headingHtml={'<em>Get in touch</em>'} />
        <HTML tag="h3" className="contact-headline" html={c.heading} />
        <div className="contact-grid">
          {c.cols.map((col, i) =>
          <div className="contact-col" key={i}>
              <div className="head">{col.head}</div>
              <HTML tag="div" className="body" html={col.body} />
            </div>
          )}
        </div>
        <div className="footer-bot">
          <span>{c.footL}</span>
          <span>{c.footR}</span>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Nav, Hero, About, Feature, Works, Philosophy, Books, Photography, Industry, Contact });