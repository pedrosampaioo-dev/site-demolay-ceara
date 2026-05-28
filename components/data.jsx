/* Data + helpers shared across components */

const NAV = [
  { id: "inicio",     label: "Início" },
  { id: "editais",    label: "Editais" },
  { id: "viagens",    label: "Viagens" },
  { id: "documentos", label: "Documentos" },
  { id: "eventos",    label: "Eventos" },
  { id: "contato",    label: "Contato" },
];

const EDITAIS = [
  {
    ref: "EDT-005/2025",
    title: "Certificado de Referência Estadual para Capítulos",
    desc: "Reconhecimento institucional dos capítulos com excelência em gestão, ritualística e impacto comunitário durante a gestão 2025/2026.",
    status: "aberto",
    prazo: "15 Nov 2026",
    inscricoes: "Capítulos",
    action: "Baixar Edital",
    link: "assets/editais/edital05-cre.pdf",
    img: "assets/capas_editais/cre.png"
  },
  {
    ref: "EDT-002/2025",
    title: "Conselheiro de Ouro",
    desc: "Projeto voltado ao desenvolvimento do Primeiro Conselho durante sua gestão",
    status: "aberto",
    prazo: "20 Jun 2026",
    inscricoes: "Primeiros Conselheiros",
    action: "Baixar Edital",
    link: "assets/editais/edital07-conselheiro-de-ouro.pdf",
    img: "assets/capas_editais/conselheiro.png"
  },
  {
    ref: "EDT-008/2025-2026",
    title: "Campanha Cearense de Incentivo à Ritualística",
    desc: "Projeto voltado para incentivar a ritualística dentro dos Capítulos através de dinâmicas que sejam realizadas pelo Segundo Conselheiro",
    status: "aberto",
    prazo: "20 Jun 2026",
    inscricoes: "Segundos Conselheiros",
    action: "Baixar Edital",
    link: "assets/editais/edital08-ccir.pdf",
    img: "assets/capas_editais/ccir.png"
  },
  {
    ref: "EDT-006/2025-2026",
    title: "ADM de Ouro",
    desc: "Projeto voltado à administração capitular, mais especificamente os Tesoureiros e Hospitaleiros.",
    status: "aberto",
    prazo: "20 Jun 2026",
    inscricoes: "Tesoureiros e Hospitaleiros",
    action: "Baixar Edital",
    link: "assets/editais/edital06-adm-de-ouro.pdf",
    img: "assets/capas_editais/adm-de-ouro.png"
  },
  {
    ref: "EDT-012/2025-2026",
    title: "Certificado de Referência Estadual para Castelos",
    desc: "Projeto que busca incentivar os Castelos do nosso Estado a realizarem atividades dinâmicas, criativas e de impacto para a comunidade.",
    status: "aberto",
    prazo: "15 Nov 2026",
    inscricoes: "Castelos",
    action: "Baixar Edital",
    link: "assets/editais/edital12-crec.pdf",
    img: "assets/capas_editais/crec.png"
  },
  {
    ref: "EDT-002/2025-2026",
    title: "Certificado de Referência Estadual para Regiões",
    desc: "Projeto voltado para que as regiões do nosso Estado possam ser reconhecidas por sua excelência em organização de eventos, articulação regional e desenvolvimento de projetos.",
    status: "aberto",
    prazo: "15 Nov 2026",
    inscricoes: "Mestres Conselheiros Regionais",
    action: "Baixar Edital",
    link: "assets/editais/edital02-crer.pdf",
    img: "assets/capas_editais/crer.png",
  },
  {
    ref: "EDT-007/2025",
    title: "Desafio Filantrópico Estadual",
    desc: "Projeto voltado aos Capítulo desenvolverem atividades sociais e filantropias durante o ano de 2026.",
    status: "aberto",
    prazo: "15 Nov 2026",
    inscricoes: "Capítulos",
    action: "Baixar Edital",
    link: "assets/editais/edital11-dfe.pdf",
    img: "assets/capas_editais/dfe.png",
  },
  {
    ref: "EDT-008/2025",
    title: "Meu Lugar",
    desc: "Projeto voltado para que Castelos realizem atividades que remetam à sua cidade e estado.",
    status: "aberto",
    prazo: "15 Jun 2026",
    inscricoes: "Castelos",
    action: "Baixar Edital",
    link: "assets/editais/edital13-meulugar.pdf",
    img: "assets/capas_editais/meulugar.png",
  },
  {
    ref: "EDT-009/2025",
    title: "Em Busca do Hexa",
    desc: "Projeto voltado incentivar capítulos e castelos a desenvolverem sua virtude do Patriotismo, acompanhando a seleção durante a Copa do Mundo FIFA 2026.",
    status: "breve",
    prazo: "Contínuo",
    inscricoes: "Capítulos",
    action: "Indisponível!",
    link: null,
    
    img: "assets/capas_editais/embuscadohexa.png",
  },
];

const VIAGENS = [
  { city: "Juazeiro do Norte",  region: "Vale do Cariri",  num: "01", img: "assets/galeria/juazeiro.jpeg" },
  { city: "Crateús",     region: "Sertão de Crateús",        num: "02", img: "assets/galeria/crateus.jpeg" },
  { city: "Rio de Janeiro", region: "Rio",         num: "03", img: "assets/galeria/elod-rj.jpeg" },
  { city: "Cedro",      region: "Centro-Sul",                num: "04", img: "assets/galeria/cedro.jpeg" },
  { city: "Quixadá",     region: "Sertão Central",            num: "05", img: "assets/galeria/quixada.jpeg" },
  { city: "Cedro",    region: "Centro-Sul",        num: "06", img: "assets/galeria/conamesco.jpeg" },
  { city: "Canindé",    region: "Sertão de Canindé",         num: "07", img: "assets/galeria/caninde.jpeg" },
  { city: "fortaleza",    region: "Região Metropolitana",     num: "08", img: "assets/galeria/fortaleza.jpeg" },
  { city: "Mombaça",       region: "Sertão Central",   num: "09", img: "assets/galeria/mombaca.jpeg" },

];

const DOCUMENTOS = {
  "Atos Oficiais": [
    { ref: "ATO-001/25-26", title: "Instituição das Pastas do Gabinete e Nomeação de seus membros", sub: "Diretrizes oficiais da gestão Liderar por Princípios", date: "24.11.2025", size: "2.1 MB", link: "assets/atos/ato01-ge.pdf" },
    { ref: "ATO-002/25-26", title: "Nomeação para Secretaria", sub: "Nomeação do irmão, João Manoel, para compor a Secretaria de Comunicação do Gabinete", date: "27.01.2026", size: "780 KB", link: "assets/atos/ato02-ge.pdf" },
    { ref: "ATO-003/25-26", title: "Nomeação e Exoneração do GE", sub: "Nomeação dos irmãos, Davi Alves e Tiago Renan, para as pastas da Organizações Afiliadas e ADM de Ouro, respectivamente", date: "28.04.2026", size: "450 KB", link: "assets/atos/ato03-ge.pdf" },
  ],
  "Taxas e Emolumentos": [
    { ref: "DECRETO-01-GCE-25/27", title: "Tabela de Taxas Anuais — GCE/CE", sub: "Valores vigentes para o exercício 2025", date: "16.12.2025", size: "320 KB", link: "assets/documentos/decreto01-emolumentos.pdf" },
  ],
  "Modelos e Formulários": [
    { ref: "MN-001/25", title: "Modelo Geral", sub: "Documento editável de modelo geral de relatório para Mestres Conselheiros", date: "22.11.2025", size: "4.6 MB", link: "assets/modelos e formulários/modelo-projetos-mc.docx" },
  ],
};

const EVENTOS = [
  {
    day: "06 e 07", month: "Jun", year: "2026", weekday: "Sexta-feira e Sábado",
    type: "SMOC",
    name: "Simpósio Medieval da Ordem da Cavalaria",
    desc: "Evento Estadual da Ordem da Cavalaria do Ceará",
    local: "Nova Russas, CE",
    horario: "19h00 — 23h00",
    status: "Inscrições",
    link: "https://demolayceara.org.br/loja/xiii-smoc/"
  },
  {
    day: "10 e 11", month: "Jul", year: "2026", weekday: "Sexta-feira e Sábado",
    type: "CONAMESCO",
    name: "Conselho e Aprimoramento para Mestres Conselheiros",
    desc: "Evento voltado para capacitação dos Mestres Conselheiros",
    local: "Acopiara, CE — IFCE Campus Acopiara",
    horario: "08h00 — 18h00",
    status: "Em breve",
  },
  {
    day: "21 e 22", month: "Nov", year: "2026", weekday: "Sexta-feira e Sábado",
    type: "CEOD 2026",
    name: "Congresso Estadual da Ordem DeMolay Cearense",
    desc: "Maior evento da Ordem DeMolay Cearense",
    local: "Mombaça, CE",
    horario: "08h00 — 23h00",
    status: "Inscrições",
    link: "https://demolayceara.org.br/loja/congresso-estadual-da-ordem-demolay-ceod-ce/"
  }
  
];

const MESTRES = [
  { role: "Mestre Conselheiro Estadual", name: "Pedro Sampaio", cap: "Capítulo Cidade de Acopiara — Acopiara", insignia: "assets/insignias/Ins%C3%ADgnia%20MCE.svg" },
  { role: "Mestre Conselheiro Estadual Adjunto", name: "Isac Mendes", cap: "Capítulo Patativa do Assaré — Fortaleza", insignia: "assets/insignias/Ins%C3%ADgnia%20MCEA.svg" },
];

window.NAV = NAV;
window.EDITAIS = EDITAIS;
window.VIAGENS = VIAGENS;
window.DOCUMENTOS = DOCUMENTOS;
window.EVENTOS = EVENTOS;
window.MESTRES = MESTRES;

/* Tiny inline SVG helper */
window.Icon = ({ name, size = 16 }) => {
  const stroke = "currentColor";
  const sw = 1.6;
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow-right":   return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "arrow-left":    return <svg {...common}><path d="M19 12H5M11 19l-7-7 7-7"/></svg>;
    case "arrow-down":    return <svg {...common}><path d="M12 5v14M5 13l7 7 7-7"/></svg>;
    case "download":      return <svg {...common}><path d="M12 4v12M6 12l6 6 6-6M4 20h16"/></svg>;
    case "pin":           return <svg {...common}><path d="M12 21s-7-7.5-7-12a7 7 0 0114 0c0 4.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case "clock":         return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "calendar":      return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>;
    case "mail":          return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/></svg>;
    case "phone":         return <svg {...common}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>;
    case "check":         return <svg {...common}><path d="M20 6L9 17l-5-5"/></svg>;
    case "menu":          return <svg {...common}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case "x":             return <svg {...common}><path d="M18 6L6 18M6 6l12 12"/></svg>;
    case "instagram":     return <svg {...common}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill={stroke}/></svg>;
    case "facebook":      return <svg {...common}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>;
    case "youtube":       return <svg {...common}><path d="M22 12s0-3-.4-4.4a2.5 2.5 0 00-1.8-1.8C18.4 5.5 12 5.5 12 5.5s-6.4 0-7.8.3a2.5 2.5 0 00-1.8 1.8C2 9 2 12 2 12s0 3 .4 4.4a2.5 2.5 0 001.8 1.8c1.4.3 7.8.3 7.8.3s6.4 0 7.8-.3a2.5 2.5 0 001.8-1.8C22 15 22 12 22 12z"/><path d="M10 9.5l5 2.5-5 2.5z" fill={stroke}/></svg>;
    case "globe":         return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>;
    case "shield":        return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case "users":         return <svg {...common}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;
    default: return null;
  }
};
