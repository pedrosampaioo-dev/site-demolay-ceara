const PILLARS = [
  {
    num: "01",
    title: "Excelência Ritualística",
    desc: "Elevar o padrão cerimonial dos capítulos cearenses, valorizando a tradição e o simbolismo da Ordem.",
  },
  {
    num: "02",
    title: "Juventude que Inspira",
    desc: "Formar jovens líderes capazes de transformar suas comunidades com integridade e fraternidade.",
  },
  {
    num: "03",
    title: "Fraternidade Estadual",
    desc: "Fortalecer os laços entre os 26 capítulos ativos, promovendo integração e unidade no Ceará.",
  },
];

function GestaoStrip() {
  return (
    <section id="gestao" className="gestao">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="left">
              <span className="kicker"><span className="dot"></span>02 — Gestão 25/26</span>
              <h2>Quem conduz <em>a gestão</em></h2>
            </div>
            <div className="right">
              A gestão <b style={{ color: "#fff" }}>"Liderar por Princípios"</b> é conduzida pelos
              Mestres Conselheiros Estaduais eleitos pelos capítulos para representar o Ceará
              durante 2025 e 2026.
            </div>
          </div>
        </Reveal>

        <div className="gestao-team">
          {MESTRES.map((m, i) => (
            <Reveal key={m.name} delay={i * 140}>
              <div className="gestao-card">
                <img className="gestao-insignia" src={m.insignia} alt={`Insígnia ${m.name}`} />
                <div className="gestao-card-body">
                  <span className="role">{m.role}</span>
                  <span className="name">{m.name}</span>
                  <span className="cap">{m.cap}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="gestao-pillars">
          {PILLARS.map((p, i) => (
            <Reveal key={p.num} delay={i * 100}>
              <div className="gestao-pillar">
                <span className="pnum">Pilar {p.num}</span>
                <span className="ptitle">{p.title}</span>
                <span className="pdesc">{p.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.GestaoStrip = GestaoStrip;
