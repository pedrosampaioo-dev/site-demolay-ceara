function Header({ active, setActive, onNav }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [transparent, setTransparent] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      /* Transparent while within the hero section (~88vh), dark after */
      const heroEnd = window.innerHeight * 0.88;
      setTransparent(y < heroEnd);
      setScrolled(y >= heroEnd);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    onNav(id);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <header className={
        "header" +
        (transparent ? " header-transparent" : "") +
        (scrolled    ? " header-scrolled"    : "")
      }>
        <div className="container header-inner">
          <a href="#inicio" onClick={go("inicio")} className="brand" aria-label="Página inicial">
            <span className="brand-mark">
              <img src="assets/emblema-ge-ce.png" alt="Emblema GE-CE" />
            </span>
            <span className="brand-text">
              <span className="title">Gabinete Estadual</span>
              <span className="sub">Ordem DeMolay · Ceará · 25/26</span>
            </span>
          </a>

          <nav className="nav" aria-label="Menu principal">
            {NAV.map(n => (
              <a key={n.id} href={"#" + n.id}
                 className={active === n.id ? "active" : ""}
                 onClick={go(n.id)}>{n.label}</a>
            ))}
          </nav>

          <a href="#contato" onClick={go("contato")} className="header-cta">
            Fale com o GE
          </a>

          <button className="nav-mobile-btn" onClick={() => setOpen(o => !o)} aria-label="Abrir menu">
            <span></span>
          </button>
        </div>

        <div className={"nav-mobile" + (open ? " open" : "")}>
          {NAV.map(n => (
            <a key={n.id} href={"#" + n.id} onClick={go(n.id)}>{n.label}</a>
          ))}
        </div>
      </header>
    </React.Fragment>
  );
}

window.Header = Header;
