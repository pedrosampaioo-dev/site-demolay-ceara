/* Fixed particle positions — stable across renders */
const HERO_PARTICLES = [
  { x: 7,  y: 20, s: 2,   del: 0,    dur: 18, op: 0.38 },
  { x: 14, y: 67, s: 1.5, del: 2.3,  dur: 14, op: 0.28 },
  { x: 22, y: 42, s: 2.5, del: 4.7,  dur: 16, op: 0.42 },
  { x: 33, y: 82, s: 1,   del: 1.1,  dur: 20, op: 0.22 },
  { x: 46, y: 28, s: 3,   del: 3.5,  dur: 15, op: 0.35 },
  { x: 56, y: 72, s: 1.5, del: 6.1,  dur: 19, op: 0.30 },
  { x: 65, y: 15, s: 2,   del: 0.7,  dur: 17, op: 0.38 },
  { x: 73, y: 57, s: 1,   del: 3.9,  dur: 13, op: 0.24 },
  { x: 80, y: 36, s: 2.5, del: 6.9,  dur: 16, op: 0.42 },
  { x: 88, y: 76, s: 1.5, del: 2.7,  dur: 21, op: 0.30 },
  { x: 91, y: 49, s: 2,   del: 5.2,  dur: 14, op: 0.36 },
  { x: 18, y: 91, s: 1,   del: 3.0,  dur: 18, op: 0.22 },
];

/* Animated counter — counts from 0 to target on viewport enter */
function CountUp({ target, suffix }) {
  const [n, setN] = React.useState(0);
  const ref = React.useRef(null);
  const done = React.useRef(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || done.current) return;
      done.current = true;
      const dur = 1600, step = 16, total = Math.ceil(dur / step);
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const ease = 1 - Math.pow(1 - frame / total, 3);
        setN(Math.round(ease * target));
        if (frame >= total) { setN(target); clearInterval(timer); }
      }, step);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <span ref={ref} className="n">
      {n}{suffix && <span className="red">{suffix}</span>}
    </span>
  );
}

function Hero({ onNav }) {
  return (
    <section id="inicio" className="hero">
      {/* Film grain texture overlay */}
      <div className="hero-grain" aria-hidden="true"></div>

      {/* Floating particles */}
      <div className="hero-particles" aria-hidden="true">
        {HERO_PARTICLES.map((p, i) => (
          <span key={i} className="hero-particle" style={{
            left: p.x + '%', top: p.y + '%',
            width: p.s + 'px', height: p.s + 'px',
            '--p-dur': p.dur + 's',
            '--p-del': p.del + 's',
            '--p-op': p.op,
          }} />
        ))}
      </div>

      <div className="container hero-inner">
        <div>
          <Reveal>
            <div className="hero-tag">
              <span className="pulse"></span>
              <span>Gestão 2025 / 2026 · Em curso</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1>
              <span className="small">Gabinete Estadual</span>
              Ordem DeMolay
              <span className="accent">do Ceará</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <div className="motto">
              <span className="motto-rule"></span>
              <span className="motto-text">"Liderar por Princípios"</span>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <p className="lede">
              Representação oficial dos capítulos cearenses junto à Ordem DeMolay.
              Conduzimos a gestão estadual com integridade, fraternidade e foco
              na formação de jovens líderes em todas as regiões do Ceará.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="hero-actions">
              <a href="#editais" className="btn btn-primary"
              onClick={(e) => {e.preventDefault();onNav("editais");}}>
                Conheça Nossos Projetos
                <span className="arrow"><Icon name="arrow-right" size={14} /></span>
              </a>
              <a href="#documentos" className="btn btn-ghost"
              onClick={(e) => {e.preventDefault();onNav("documentos");}}>
                Central de Documentos
              </a>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-icon"><Icon name="users" size={18} /></span>
                <CountUp target={27} suffix="." />
                <div className="l">Capítulos Ativos</div>
              </div>
              <div className="hero-stat">
                <span className="stat-icon"><Icon name="pin" size={18} /></span>
                <CountUp target={8} suffix="." />
                <div className="l">Regiões Visitadas</div>
              </div>
              <div className="hero-stat">
                <span className="stat-icon"><Icon name="calendar" size={18} /></span>
                <CountUp target={8} suffix="." />
                <div className="l">Editais Abertos</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal from="right" delay={200}>
          <div className="hero-emblem">
            <div className="frame"></div>
            <div className="corner-tr"></div>
            <div className="corner-bl"></div>
            <span className="ring-label tl">GE · CE</span>
            <span className="ring-label tr">25 / 26</span>
            <span className="ring-label bl">EST · 1987</span>
            <span className="ring-label br">LIDERAR - PRINCÍPIOS</span>
            <div className="badge-img">
              <img src="assets/emblema-ge-ce.png" alt="Emblema do Gabinete Estadual" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hero-scroll">
        <span>Role</span>
        <span className="bar"></span>
      </div>
    </section>);

}

function GestaoStrip() {
  const items = [
  "Liderar por Princípios", "Gestão 25/26",
  "Virtudes", "Excelência Ritualística",
  "Juventude que Inspira", "Ordem DeMolay · Ceará"];

  const doubled = [...items, ...items];
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {doubled.map((t, i) =>
        <span key={i} className="strip-item">
            <span>{t}</span>
            <span className="sep">✦</span>
          </span>
        )}
      </div>
    </div>);

}

window.Hero = Hero;
window.GestaoStrip = GestaoStrip;
