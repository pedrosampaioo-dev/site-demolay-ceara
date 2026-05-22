/* Month name → 0-indexed JS month number */
const MONTH_PT = {
  Jan:0, Fev:1, Mar:2, Abr:3, Mai:4, Jun:5,
  Jul:6, Ago:7, Set:8, Out:9, Nov:10, Dez:11
};

/* Parse event date from "06 / 07" + "Jun" + "2026" → Date object (last day of range) */
function parseEvtDate(day, month, year) {
  const parts = String(day).split('/');
  const d = parseInt(parts[parts.length - 1].trim(), 10);
  const m = MONTH_PT[month] !== undefined ? MONTH_PT[month] : parseInt(month, 10) - 1;
  return new Date(parseInt(year, 10), m, d, 23, 59, 0);
}

/* Countdown widget — shows days/hours/min until the event; null if past */
function Countdown({ day, month, year }) {
  function getLeft() {
    const diff = parseEvtDate(day, month, year) - Date.now();
    if (diff <= 0) return null;
    return {
      days:  Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins:  Math.floor((diff % 3600000)  / 60000),
    };
  }

  const [left, setLeft] = React.useState(getLeft);

  React.useEffect(() => {
    const t = setInterval(() => setLeft(getLeft()), 30000);
    return () => clearInterval(t);
  }, [day, month, year]);

  if (!left) return null;

  return (
    <div className="evt-countdown" aria-label="Contagem regressiva">
      <div className="cdown-unit">
        <span className="cdown-n">{left.days}</span>
        <span className="cdown-l">dias</span>
      </div>
      <span className="cdown-sep" aria-hidden="true">:</span>
      <div className="cdown-unit">
        <span className="cdown-n">{String(left.hours).padStart(2,'0')}</span>
        <span className="cdown-l">horas</span>
      </div>
      <span className="cdown-sep" aria-hidden="true">:</span>
      <div className="cdown-unit">
        <span className="cdown-n">{String(left.mins).padStart(2,'0')}</span>
        <span className="cdown-l">min</span>
      </div>
    </div>
  );
}

function Eventos() {
  return (
    <section id="eventos" className="eventos">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="left">
              <span className="kicker"><span className="dot"></span>06 — Agenda Estadual</span>
              <h2>Próximos <em>eventos</em></h2>
            </div>
            <div className="right">
              Cronograma oficial de instalações, visitações, congressos e encontros conduzidos
              ou apoiados pelo Gabinete Estadual.
            </div>
          </div>
        </Reveal>

        <div className="evt-list">
          {EVENTOS.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="evt">
                <div className="evt-date">
                  <span className="day">{e.day}</span>
                  <span className="month">{e.month}</span>
                  <span className="year">{e.year} · {e.weekday}</span>
                </div>

                <div className="evt-body">
                  <span className="type">{e.type}</span>
                  <span className="name">{e.name}</span>
                  <span className="desc">{e.desc}</span>
                  <Countdown day={e.day} month={e.month} year={e.year} />
                </div>

                <div className="evt-meta">
                  <div className="row">
                    <Icon name="pin" size={15} />
                    <div>
                      <div className="label">Local</div>
                      <div>{e.local}</div>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: 6 }}>
                    <Icon name="clock" size={15} />
                    <div>
                      <div className="label">Horário</div>
                      <div>{e.horario}</div>
                    </div>
                  </div>
                </div>

                <div className={"evt-cap" + (e.status === "Confirmada" || e.status === "Inscrições" ? " full" : "")}>
                  {e.status}
                </div>

                {e.link
                  ? <a className="evt-arrow" href={e.link} target="_blank" rel="noopener noreferrer" aria-label="Inscrições">
                      <Icon name="arrow-right" size={16} />
                    </a>
                  : <button className="evt-arrow evt-arrow--disabled" disabled aria-label="Indisponível">
                      <Icon name="arrow-right" size={16} />
                    </button>
                }
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Eventos = Eventos;
