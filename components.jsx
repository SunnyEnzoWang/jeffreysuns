// === Reusable components ===

const { useEffect, useState, useRef } = React;

// Inject HTML safely
function HTML({ tag = 'span', html, className, ...rest }) {
  return React.createElement(tag, { className, dangerouslySetInnerHTML: { __html: html }, ...rest });
}

function Eyebrow({ children, dark }) {
  return <span className="eyebrow" style={dark ? { color: '#F4F0E8', opacity: 0.55 } : null}>{children}</span>;
}

function SectionHead({ number, eyebrow, headingHtml }) {
  return (
    <div className="section-head reveal">
      <div className="meta">
        <Eyebrow>{eyebrow}</Eyebrow>
        <span className="label-num">{number}</span>
      </div>
      <HTML tag="h2" html={headingHtml} />
    </div>
  );
}

// Scroll progress bar
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${p})` }} />;
}

// Reveal-on-scroll
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Lightbox
function Lightbox({ open, item, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  return (
    <div className={'lightbox' + (open ? ' open' : '')} onClick={onClose}>
      {item && (
        <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
          <button className="lightbox-close" onClick={onClose}>×</button>
          <img className="lightbox-img" src={item.src} alt={item.t}  loading="lazy" />
          <div className="lightbox-meta">
            <span>{item.n} · {item.t}</span>
            <span>{item.tag}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Marquee
function Marquee({ items }) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {repeated.map((it, i) => (
          <span className="marquee-item" key={i}>
            <span className="dot" />
            <span>{it}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { HTML, Eyebrow, SectionHead, ScrollProgress, useReveal, Lightbox, Marquee });
