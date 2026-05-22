const WEB3FORMS_KEY = "6235dea0-92ec-48ac-936f-b46e62d22d91";

function Contato() {
  const [form, setForm] = React.useState({ nome: "", capitulo: "", email: "", mensagem: "" });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle"); // idle | loading | success | error

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const er = {};
    if (!form.nome.trim()) er.nome = "Informe seu nome";
    if (!form.capitulo.trim()) er.capitulo = "Informe capítulo/cidade";
    if (!form.email.trim()) er.email = "Informe seu e-mail";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "E-mail inválido";
    if (!form.mensagem.trim()) er.mensagem = "Escreva sua mensagem";
    else if (form.mensagem.trim().length < 10) er.mensagem = "Mensagem muito curta";
    return er;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Contato via Site — ${form.nome} (${form.capitulo})`,
          from_name: form.nome,
          email: form.email,
          "Capítulo / Cidade": form.capitulo,
          message: form.mensagem,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch (_) {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm({ nome: "", capitulo: "", email: "", mensagem: "" });
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contato" className="contato">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="left">
              <span className="kicker"><span className="dot"></span>07 — Contato</span>
              <h2>Fale com os <em>Mestres Conselheiros Estaduais</em></h2>
            </div>
            <div className="right">
              Canal oficial de contato com a equipe do Gabinete Estadual.
              Capítulos, membros e familiares são bem-vindos.
            </div>
          </div>
        </Reveal>

        <div className="contato-grid">
          <Reveal from="left">
            <aside className="contato-side">
              <span className="kicker" style={{ color: "rgba(255,255,255,0.6)" }}>
                <span className="dot"></span>Mensagem Direta
              </span>
              <h3>Estamos<br />à disposição.</h3>
              <p>
                Nossa equipe responde em até 72h úteis. Para assuntos urgentes,
                utilize o canal telefônico abaixo.
              </p>

              <div className="contato-info-list">
                <div className="contato-info-item">
                  <span className="ic"><Icon name="mail" size={15} /></span>
                  <div>
                    <div className="lab">E-mail Institucional</div>
                    <div className="val">liderarporprincipios.ge@gmail.com</div>
                  </div>
                </div>
                <div className="contato-info-item">
                  <span className="ic"><Icon name="phone" size={15} /></span>
                  <div>
                    <div className="lab">Telefone / WhatsApp</div>
                    <div className="val">(88) 9 9691 9579</div>
                  </div>
                </div>
                <div className="contato-info-item">
                  <span className="ic"><Icon name="pin" size={15} /></span>
                  <div>
                    <div className="lab">Sede Administrativa</div>
                    <div className="val">Fortaleza, Ceará — Brasil</div>
                  </div>
                </div>
              </div>

              <div className="mestres">
                {MESTRES.map((m) =>
                  <div className="mestre-card" key={m.name}>
                    <div className="role">{m.role}</div>
                    <div className="name">{m.name}</div>
                    <div className="cap">{m.cap}</div>
                  </div>
                )}
              </div>
            </aside>
          </Reveal>

          <Reveal from="right" delay={100}>
            <div>
              {status === "success" ?
                <div className="form-success">
                  <span className="ic"><Icon name="check" size={20} /></span>
                  <div style={{ flex: 1 }}>
                    <h4>Mensagem Enviada</h4>
                    <p>
                      Obrigado, <b>{form.nome.split(" ")[0]}</b>. Recebemos seu contato
                      e responderemos em até 72h úteis no e-mail <b>{form.email}</b>.
                    </p>
                    <button onClick={reset} className="btn btn-outline" style={{ marginTop: 18 }}>
                      Enviar Nova Mensagem
                    </button>
                  </div>
                </div> :

                <form className="form" onSubmit={onSubmit} noValidate>
                  <div className="form-row">
                    <div className={"field" + (errors.nome ? " error" : "")}>
                      <label>Nome Completo <span className="req">*</span></label>
                      <input type="text" placeholder="Frater João Silva"
                        value={form.nome} onChange={onChange("nome")} />
                      {errors.nome && <span className="err">{errors.nome}</span>}
                    </div>
                    <div className={"field" + (errors.capitulo ? " error" : "")}>
                      <label>Capítulo / Cidade <span className="req">*</span></label>
                      <input type="text" placeholder="Capítulo Aurora — Fortaleza"
                        value={form.capitulo} onChange={onChange("capitulo")} />
                      {errors.capitulo && <span className="err">{errors.capitulo}</span>}
                    </div>
                  </div>

                  <div className={"field" + (errors.email ? " error" : "")}>
                    <label>E-mail <span className="req">*</span></label>
                    <input type="email" placeholder="seu@email.com"
                      value={form.email} onChange={onChange("email")} />
                    {errors.email && <span className="err">{errors.email}</span>}
                  </div>

                  <div className={"field" + (errors.mensagem ? " error" : "")}>
                    <label>Mensagem <span className="req">*</span></label>
                    <textarea rows={6} placeholder="Escreva sua mensagem aos Mestres Conselheiros Estaduais..."
                      value={form.mensagem} onChange={onChange("mensagem")}></textarea>
                    {errors.mensagem && <span className="err">{errors.mensagem}</span>}
                  </div>

                  {status === "error" &&
                    <div className="form-error-banner">
                      Falha no envio. Verifique sua conexão e tente novamente.
                    </div>
                  }

                  <div className="form-submit">
                    <p className="note">
                      Ao enviar, você concorda em ser contatado pelo Gabinete Estadual
                      no e-mail informado.
                    </p>
                    <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
                      {status === "loading" ? "Enviando…" : "Enviar Mensagem"}
                      {status !== "loading" && <span className="arrow"><Icon name="arrow-right" size={14} /></span>}
                    </button>
                  </div>
                </form>
              }
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

window.Contato = Contato;
