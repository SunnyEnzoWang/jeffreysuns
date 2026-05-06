// === App ===

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "en",
  "accent": "#00A68D",
  "displayFont": "Cormorant Garamond"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangState] = useState(tweaks.lang || 'en');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [lbItem, setLbItem] = useState(null);

  useEffect(() => { if (tweaks.lang && tweaks.lang !== lang) setLangState(tweaks.lang); }, [tweaks.lang]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent || '#1E2EE4');
    document.documentElement.style.setProperty('--serif', `'${tweaks.displayFont || 'Cormorant Garamond'}', 'Noto Serif SC', serif`);
  }, [tweaks.accent, tweaks.displayFont]);

  const setLang = (l) => {
    setLangState(l);
    setTweak('lang', l);
    document.documentElement.lang = l === 'zh' ? 'zh' : 'en';
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['about', 'art', 'works', 'philosophy', 'books', 'photography', 'industry', 'contact'];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActiveSection(e.target.id);
      });
    }, { threshold: 0.25, rootMargin: '-20% 0px -50% 0px' });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useReveal();

  return (
    <>
      <ScrollProgress />
      <Nav lang={lang} setLang={setLang} scrolled={scrolled} activeSection={activeSection} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Books lang={lang} />
      <Works lang={lang} onOpen={setLbItem} />
      <Philosophy lang={lang} />
      <Feature lang={lang} />
      <Photography lang={lang} />
      <Industry lang={lang} />
      <Contact lang={lang} />
      <Lightbox open={!!lbItem} item={lbItem} onClose={() => setLbItem(null)} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language" />
        <TweakRadio
          label="Site language"
          value={tweaks.lang}
          onChange={(v) => { setTweak('lang', v); setLangState(v); }}
          options={[{ value: 'en', label: 'EN' }, { value: 'zh', label: '中文' }]}
        />
        <TweakSection label="Accent color" />
        <TweakColor label="Accent" value={tweaks.accent} onChange={(v) => setTweak('accent', v)} />
        <div style={{ display: 'flex', gap: 8, padding: '4px 12px 8px' }}>
          {['#1E2EE4', '#0E0E10', '#B5121B', '#5C4A2E', '#2E5C3F'].map((c) => (
            <button key={c}
              onClick={() => setTweak('accent', c)}
              aria-label={c}
              style={{ width: 22, height: 22, borderRadius: 999, background: c, border: '1px solid rgba(0,0,0,0.15)', cursor: 'pointer', padding: 0 }} />
          ))}
        </div>
        <TweakSection label="Display font" />
        <TweakSelect
          label="Serif"
          value={tweaks.displayFont}
          onChange={(v) => setTweak('displayFont', v)}
          options={[
            { value: 'Cormorant Garamond', label: 'Cormorant Garamond' },
            { value: 'Noto Serif SC', label: 'Noto Serif SC' },
            { value: 'Inter', label: 'Inter (sans)' }
          ]}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
