# 🚗 LocalCar — Site Institucional

Site profissional da **LocalCar — Rastreamento Automotivo**, construído em **Next.js 14** (App Router + TypeScript), pronto para deploy na **Vercel** ou **Netlify**.

---

## ✅ O que já vem pronto

- **4 páginas**: Início, Serviços, Sobre, Contato
- **Design dark/tech** com radar animado, painel ao vivo e efeitos de luz
- **Formulário que abre direto no WhatsApp** (sem precisar de backend)
- **SEO otimizado**: metadados, Open Graph, sitemap, robots e dados estruturados (Schema.org `LocalBusiness`) — importante para o Google local
- **Responsivo** (celular, tablet e desktop)
- **Logo transparente** já incluído em `/public/logo-localcar.png`

---

## 🔧 Antes de publicar — EDITE OS DADOS

Abra o arquivo **`src/config.ts`** e troque:

| Campo | O que colocar |
|-------|---------------|
| `whatsapp` | Número real no formato `55` + DDD + número (só dígitos). Ex: `5512999998888` |
| `telefoneExibicao` | Telefone formatado, ex: `(12) 99999-8888` |
| `instagram` / `instagramUrl` | @ e link reais do Instagram |
| `endereco.mapsUrl` | Link do Google Maps (após criar o Google Meu Negócio) |
| `url` | Domínio final do site, ex: `https://www.localcar.com.br` |

> 💡 Tudo no site se atualiza sozinho a partir desse arquivo.

---

## 💻 Como rodar no seu computador

Você precisa do **Node.js 18+** instalado ([baixe aqui](https://nodejs.org)).

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev
```

Abra **http://localhost:3000** no navegador.

```bash
# Para gerar a versão de produção
npm run build
npm start
```

---

## 🚀 Como publicar na Vercel (recomendado)

1. Crie uma conta gratuita em [vercel.com](https://vercel.com)
2. Suba este projeto para um repositório no GitHub
3. Na Vercel, clique em **"Add New → Project"** e importe o repositório
4. A Vercel detecta o Next.js automaticamente — só clicar em **Deploy**
5. Pronto! O site fica no ar com HTTPS e domínio grátis (`.vercel.app`)

Para usar domínio próprio (ex: `localcar.com.br`), é só adicionar em **Settings → Domains**.

---

## 📁 Estrutura do projeto

```
localcar-site/
├── public/
│   └── logo-localcar.png      ← logo transparente
├── src/
│   ├── config.ts              ← ⭐ DADOS DA EMPRESA (edite aqui)
│   ├── app/
│   │   ├── layout.tsx         ← layout, fontes e SEO global
│   │   ├── page.tsx           ← página inicial
│   │   ├── globals.css        ← estilos globais
│   │   ├── sitemap.ts         ← sitemap (SEO)
│   │   ├── robots.ts          ← robots (SEO)
│   │   ├── servicos/page.tsx
│   │   ├── sobre/page.tsx
│   │   └── contato/page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Sections.tsx       ← recursos, como funciona, público
│       ├── ContactSection.tsx
│       ├── ContactForm.tsx
│       ├── WhatsAppFloat.tsx
│       └── Icon.tsx
└── package.json
```

---

## 🎨 Identidade visual

- **Azul marinho** `#0B2A4A` / `#2E9BFF`
- **Vermelho** `#FF2A20`
- **Amarelo** `#FFC824`
- Fontes: **Sora** (textos) + **Chakra Petch** (tech/destaques)

---

Desenvolvido por **FilarTech Design** para a LocalCar.
