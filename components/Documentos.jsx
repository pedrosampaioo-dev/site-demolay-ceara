function Documentos() {
  const tabs = Object.keys(DOCUMENTOS);
  const [active, setActive] = React.useState(tabs[0]);
  const rows = DOCUMENTOS[active];

  return (
    <section id="documentos" className="documentos">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="left">
              <span className="kicker"><span className="dot"></span>05 — Central de Documentos</span>
              <h2>Atos, taxas <em>e manuais</em></h2>
            </div>
            <div className="right">
              Repositório oficial de documentos do Gabinete Estadual e do Grande Capítulo Estadual do Ceará,
              organizado por categoria.
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="tabs">
            {tabs.map(t => (
              <button key={t}
                className={"tab" + (t === active ? " active" : "")}
                onClick={() => setActive(t)}>
                {t}
                <span className="count">{DOCUMENTOS[t].length.toString().padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="doc-list">
          <div className="doc-row head">
            <span>Tipo</span>
            <span>Documento</span>
            <span>Referência</span>
            <span>Data</span>
            <span>Ação</span>
          </div>
          {rows.map((r, i) => (
            <Reveal key={r.ref} delay={i * 70} from="left">
              <div className="doc-row">
                <div className="doc-icon">PDF</div>
                <div className="doc-title">
                  {r.title}
                  <div className="sub">{r.sub} · {r.size}</div>
                </div>
                <div className="doc-ref">{r.ref}</div>
                <div className="doc-date">{r.date}</div>
                <a
                  href={r.link || "#"}
                  download={r.link && r.link.startsWith("assets/") ? true : undefined}
                  target={r.link && !r.link.startsWith("assets/") ? "_blank" : undefined}
                  rel={r.link && !r.link.startsWith("assets/") ? "noreferrer noopener" : undefined}
                  className={"doc-download" + (!r.link ? " disabled" : "")}
                  onClick={(e) => { if (!r.link) e.preventDefault(); }}
                >
                  <Icon name="download" size={13} /> Baixar
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Documentos = Documentos;
