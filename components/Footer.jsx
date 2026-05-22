function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      {/* Low-opacity watermark logo */}
      <div className="footer-watermark" aria-hidden="true">
        <img src="assets/emblema-ge-ce.png" alt="" />
      </div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-mark">
                <img src="assets/emblema-ge-ce.png" alt="Emblema GE-CE" />
              </span>
              <span className="brand-text">
                <span className="title" style={{ color: "#fff" }}>Gabinete Estadual</span>
                <span className="sub">Ordem DeMolay · Ceará · 25/26</span>
              </span>
            </div>
            <p>
              Representação oficial dos capítulos cearenses sob o lema
              <b style={{ color: "#fff" }}> “Liderar por Princípios”</b>. Liderar é a missão, Princípios são a base!
            </p>
            <div className="socials">
              <a href="#" aria-label="Instagram"><Icon name="instagram" size={16} /></a>
              <a href="#" aria-label="Facebook"><Icon name="facebook" size={16} /></a>
              <a href="#" aria-label="YouTube"><Icon name="youtube" size={16} /></a>
              <a href="#" aria-label="Site GCE-CE"><Icon name="globe" size={16} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Institucional</h5>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#editais">Editais</a></li>
              <li><a href="#viagens">Galeria de Viagens</a></li>
              <li><a href="#documentos">Documentos</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Recursos</h5>
            <ul>
              <li><a href="#eventos">Agenda de Eventos</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#">Atos Oficiais</a></li>
              <li><a href="#">Tabela de Taxas</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Parceiros</h5>
            <ul>
              <li><a href="#" className="ext">Grande Conselho Estadual</a></li>
              <li><a href="#" className="ext">SCDB · Nacional</a></li>
              <li><a href="#" className="ext">DeMolay International</a></li>
              <li><a href="#" className="ext">GCE-CE · Portal</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-motto" aria-label="Lema da gestão">
          <em>"Liderar por Princípios"</em> — Gestão 25/26
        </div>

        <div className="footer-bottom">
          <div className="left">
            <span>© {year} Gabinete Estadual — DeMolay/CE</span>
            <span>Todos os direitos reservados</span>
          </div>
          <div className="right">Liderar por Princípios ✦</div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
