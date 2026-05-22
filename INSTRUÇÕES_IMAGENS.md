# 📸 Como Adicionar Imagens à Galeria

## 🔐 Sistema Seguro
As imagens agora são gerenciadas **através do código**, garantindo que visitantes não possam fazer upload ou modificar nada.

---

## ✅ Passo a Passo

### 1️⃣ Prepare suas imagens
- Salve as imagens JPG em formato quadrado ou retangular
- Tamanho recomendado: 1000x1000px ou 1200x900px
- Nomes dos arquivos (conforme em `components/data.jsx`):
  - `fortaleza.jpg`
  - `sobral.jpg`
  - `juazeiro.jpg`
  - `crato.jpg`
  - `iguatu.jpg`
  - `quixada.jpg`
  - `aracati.jpg`
  - `tiguaa.jpg`
  - `taua.jpg`
  - `russas.jpg`

### 2️⃣ Coloque as imagens na pasta
Copie **todas as imagens** para:
```
assets/galeria/
```

### 3️⃣ Pronto!
A galeria vai exibir automaticamente as imagens.

---

## 🔧 Para Adicionar Novas Cidades

Se quiser adicionar mais viagens, edite `components/data.jsx`:

```javascript
const VIAGENS = [
  // ... existentes ...
  { city: "Maracanaú", region: "Região Metropolitana", num: "11", img: "assets/galeria/maracanaú.jpg" },
];
```

**Passos:**
1. Adicione a entrada em `data.jsx`
2. Coloque a imagem em `assets/galeria/`
3. Salve e recarregue o site

---

## ⚠️ Segurança
- ✅ Somente VOCÊ pode adicionar/editar imagens (através do código)
- ✅ Visitantes NÃO podem fazer upload
- ✅ Visitantes NÃO podem deletar imagens
- ✅ A pasta `uploads/` não é utilizada

---

## 🎨 Dicas
- Use imagens de boa qualidade
- Mantenha consistência visual entre as imagens
- Se uma imagem não carregar, o placeholder volta automaticamente
