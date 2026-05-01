# Factoria - Dashboard de Mídia Paga para Agências

Landing page moderna e otimizada para a plataforma Factoria, um dashboard centralizado para gerenciamento de campanhas de Google Ads e Meta Ads.

## 🚀 Sobre o Projeto

Factoria é uma solução completa que permite agências digitais centralizarem:
- **Google Ads** e **Meta Ads** em um único dashboard
- Métricas de desempenho em tempo real
- Budgets e campanhas de múltiplas contas
- Interface intuitiva e responsiva

## 📋 Tecnologias

- **Framework**: [Next.js](https://nextjs.org/) 16.2.4
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) 4.2.0
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/)
- **Gerenciador de Pacotes**: [pnpm](https://pnpm.io/)
- **Formulários**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Gráficos**: [Recharts](https://recharts.org/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📊 Rastreamento e Analytics

A landing page está configurada com:

### Google Tag Manager (GTM)
- **ID da Container**: GTM-P664PMQN
- Script principal com `afterInteractive` strategy
- Tracking noscript fallback

### Meta Pixel
- **ID do Pixel**: 1597949832333551
- PageView tracking automático
- Noscript fallback para compatibilidade

## 🛠️ Setup & Instalação

### Pré-requisitos
- Node.js 18+ ou superior
- pnpm (recomendado) ou npm/yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/otavio-cyber/factoria-dash-lp.git
cd factoria-dash-lp
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Execute o servidor de desenvolvimento**
```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento com hot-reload
pnpm dev

# Build para produção
pnpm build

# Executar build de produção localmente
pnpm start

# Lint do código
pnpm lint
```

## � Design & Identidade Visual

### Paleta de Cores
- **Cor Primária**: `#4F8EF7` (Azul) - CTAs e elementos principais
- **Cor Secundária**: `#A259FF` (Roxo) - Destaques e acentos
- **Background**: `#07080a` (Preto Deep) - Tema dark
- **Foreground**: `#f4f4f5` (Branco off) - Texto principal
- **Success**: `#22c55e` (Verde) - Mensagens de sucesso
- **Accent**: `#06b6d4` (Cyan) - Elementos especiais

### Logo
O logo Factoria é um componente React customizado que:
- Utiliza SVG com gradientes da paleta do projeto
- Suporta modo icon-only e full (com texto)
- Inclui animações via Framer Motion
- Está disponível em [components/logo.tsx](components/logo.tsx)

Uso:
```tsx
import { FactoriaLogo } from "@/components/logo"

// Versão completa com animação
<FactoriaLogo variant="full" animated={true} />

// Apenas ícone
<FactoriaLogo variant="icon" />
```

## 🏗️ Estrutura do Projeto

```
├── app/
│   ├── layout.tsx           # Root layout com Google Tag Manager
│   ├── page.tsx             # Homepage
│   └── globals.css          # Estilos globais
├── components/
│   ├── logo.tsx             # Componente Logo Factoria
│   ├── landing/             # Componentes da landing page
│   │   ├── navbar.tsx       # Navbar com logo integrado
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   ├── dashboard-mockup.tsx
│   │   ├── pain-points.tsx
│   │   ├── for-who.tsx
│   │   ├── social-proof.tsx
│   │   ├── final-cta.tsx
│   │   └── footer.tsx       # Footer com logo integrado
│   └── ui/                  # Componentes UI reutilizáveis
├── hooks/                   # React hooks customizados
├── lib/                     # Utilitários e funções auxiliares
├── public/                  # Arquivos estáticos
└── styles/                  # Folhas de estilo
```

## 🔧 Configuração do Build

O projeto usa Turbopack para compilação rápida. Configuração em `next.config.mjs`:

```javascript
// Otimizado para produção
// Output estático pré-renderizado
```

## 📱 Responsividade

Layout totalmente responsivo com suporte a:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🌍 SEO

Otimizado com:
- Meta tags dinâmicas
- Open Graph para compartilhamento social
- Twitter Card
- Linguagem configurada para pt-BR

## 📈 Analytics

### Google Analytics (via Vercel Analytics)
- Rastreamento automático de pageviews
- Performance monitoring
- Eventos customizados via GTM

### Meta Pixel
- Conversões de landing page
- Remarketing audience building
- Eventos de interesse

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Deploy automático com git push
git push origin main
```

### Outras opções
- Netlify
- AWS Amplify
- Self-hosted Node.js

## 📝 Variáveis de Ambiente

```env
# Production
NODE_ENV=production

# Analytics (automático com Vercel)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=<id>
```

## 🐛 Troubleshooting

### Build não completa
```bash
pnpm install
pnpm build
```

### Scripts de tracking não disparam
- Verificar Console do navegador (Network e Sources)
- Conferir GTM Container em: https://tagmanager.google.com/
- Verificar Pixel do Meta em: https://business.facebook.com/

## 📄 Licença

Todos os direitos reservados. Propriedade da Factoria.

## 👥 Contato

- Website: [factoria.dev](https://factoria.dev)
- Email: falecom@factoria.dev

---

**Desenvolvido com ❤️ para agências digitais**
