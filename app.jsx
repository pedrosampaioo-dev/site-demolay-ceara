function App() {
  const [active, setActive] = React.useState("inicio");

  const onNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Track active section on scroll
  React.useEffect(() => {
    const ids = NAV.map(n => n.id);
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = ids[0];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <React.Fragment>
      <Header active={active} setActive={setActive} onNav={onNav} />
      <main>
        <Hero onNav={onNav} />
        <GestaoStrip />
        <Editais />
        <Galeria />
        <Documentos />
        <Eventos />
        <Contato />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
