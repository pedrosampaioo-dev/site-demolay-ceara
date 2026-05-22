function Galeria() {
  const viewportRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const startScroll = React.useRef(0);

  const updateProgress = () => {
    const el = viewportRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    // Determine active card by closest to left edge
    const cards = el.querySelectorAll(".gcard");
    let bestIdx = 0, bestDist = Infinity;
    cards.forEach((c, i) => {
      const dist = Math.abs(c.getBoundingClientRect().left - el.getBoundingClientRect().left - 32);
      if (dist < bestDist) { bestDist = dist; bestIdx = i; }
    });
    setActive(bestIdx);
  };

  React.useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => el.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollBy = (dir) => {
    const el = viewportRef.current;
    if (!el) return;
    const card = el.querySelector(".gcard");
    const cardW = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * cardW, behavior: "smooth" });
  };

  // Drag-to-scroll
  const onPointerDown = (e) => {
    const el = viewportRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
    el.classList.add("dragging");
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    const el = viewportRef.current;
    el.scrollLeft = startScroll.current - (e.clientX - startX.current);
  };
  const onPointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const el = viewportRef.current;
    el.classList.remove("dragging");
    try { el.releasePointerCapture(e.pointerId); } catch (_) {}
  };

  return (
    <section id="viagens" className="galeria">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="left">
              <span className="kicker"><span className="dot"></span>04 — Galeria de Viagens</span>
              <h2>Pelas regiões <em>do Ceará</em></h2>
            </div>
          <div className="right" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, maxWidth: "none" }}>
            <p style={{ margin: 0, maxWidth: 360 }}>
              Registros das visitas oficiais do Gabinete às mais diversas regiões.
              Arraste para o lado para percorrer o trajeto.
            </p>
            <div className="galeria-controls">
              <button className="gctrl" onClick={() => scrollBy(-1)} aria-label="Anterior">
                <Icon name="arrow-left" size={18} />
              </button>
              <button className="gctrl" onClick={() => scrollBy(1)} aria-label="Próximo">
                <Icon name="arrow-right" size={18} />
              </button>
            </div>
          </div>
        </div>
        </Reveal>
      </div>

      <div
        className="galeria-viewport"
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="galeria-track">
          {VIAGENS.map((v, i) => (
            <div key={v.city} className={"gcard" + (i % 3 === 1 ? " tall" : "")}>
              <img 
                src={v.img} 
                alt={`Visita a ${v.city}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  const ph = e.target.parentElement.querySelector(".ph");
                  if (ph) ph.style.display = "flex";
                }}
              />
              <div className="ph" style={{ display: "none", alignItems: "center", justifyContent: "center" }}>
                [ FOTO · {v.city.toUpperCase()} ]
                <br/>
                placeholder institucional
              </div>
              <div className="overlay"></div>
              <span className="num">№ {v.num} / {VIAGENS.length.toString().padStart(2,"0")}</span>
              <div className="pin">
                <Icon name="pin" size={14} />
              </div>
              <div className="floating-cap">
                <span className="region">{v.region}</span>
                <span className="city">{v.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="galeria-progress" style={{ marginTop: 8 }}>
          <span>{String(active + 1).padStart(2, "0")}</span>
          <div className="bar"><div className="fill" style={{ width: `${Math.max(8, progress * 100)}%` }}></div></div>
          <span>{VIAGENS.length.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}

window.Galeria = Galeria;
