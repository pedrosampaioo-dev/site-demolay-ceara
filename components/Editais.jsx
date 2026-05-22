function Editais() {
  return (
    <section id="editais" className="editais">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="left">
              <span className="kicker"><span className="dot"></span>03 — Editais &amp; Projetos</span>
              <h2>Editais <em>em vigor</em></h2>
            </div>
            <div className="right">
              Concursos, editais de projetos e premiações da gestão estadual.
              Acompanhe prazos e baixe os documentos oficiais antes do encerramento das inscrições.
            </div>
          </div>
        </Reveal>

        <div className="editais-grid">
          {EDITAIS.map((e, i) => (
            <Reveal key={e.ref} delay={i * 80}>
              <article className="edital-card">

                {/* Full-bleed background image */}
                {e.img
                  ? <img src={e.img} alt={e.title} className="edital-bg" loading="lazy" />
                  : <div className="edital-ph-bg" />
                }

                {/* Gradient overlay */}
                <div className="edital-overlay" />

                {/* Status badge — top left */}
                <span className={"status edital-badge " + e.status}>
                  <span className="pip"></span>
                  {e.status === "aberto"    && "Aberto"}
                  {e.status === "encerrado" && "Encerrado"}
                  {e.status === "breve"     && "Em Breve"}
                </span>

                {/* Reference — top right */}
                <span className="edital-ref-top">№ {e.ref}</span>

                {/* Content overlaid at bottom */}
                <div className="edital-body">
                  <div className="edital-for">Para: {e.inscricoes}</div>
                  <h3>{e.title}</h3>
                  <p className="edital-desc">{e.desc}</p>
                  <div className="edital-meta">
                    Prazo: <b>{e.prazo}</b>
                  </div>
                  <a
                    href={e.link || "#"}
                    download={e.link && e.link.startsWith("assets/") ? true : undefined}
                    target={e.link && !e.link.startsWith("assets/") ? "_blank" : undefined}
                    rel={e.link && !e.link.startsWith("assets/") ? "noreferrer noopener" : undefined}
                    className={"edital-action" + (e.status === "breve" ? " disabled" : "")}
                    onClick={(ev) => {
                      if (!e.link || e.status === "breve") ev.preventDefault();
                    }}
                  >
                    {e.action}
                    <Icon name={e.status === "encerrado" ? "arrow-right" : "download"} size={13} />
                  </a>
                </div>

              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Editais = Editais;
