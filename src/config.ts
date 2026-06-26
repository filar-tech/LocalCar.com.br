// ============================================================
//  CONFIGURAÇÃO CENTRAL DO SITE — LOCALCAR
//  >>> EDITE AQUI os dados da empresa. Tudo no site se atualiza. <<<
// ============================================================

export const site = {
  nome: "LocalCar",
  slogan: "Rastreamento Automotivo",
  tagline: "Você no controle do seu carro",

  // >>> TROQUE pelo número real: formato 55 + DDD + número (só dígitos)
  whatsapp: "5512991903255",
  // Telefone exibido (formato bonito)
  telefoneExibicao: "(12) 99190-3255",

  // >>> TROQUE pelo @ real do Instagram
  instagram: "localcarsjc",
  instagramUrl: "https://instagram.com/localcarsjc",

  // Endereço (do banner enviado pelo cliente)
  endereco: {
    rua: "Av. Bacabal, 2630",
    bairro: "Parque Industrial",
    cidade: "",
    cep: "",
    // link do Google Maps (cole aqui depois de criar o Google Meu Negócio)
    mapsUrl: "",
  },

  atendimento: "Segunda a sábado",

  // URL do site quando publicado (usado no SEO)
  url: "https://www.localcar.com.br",

  // Mensagem padrão ao abrir o WhatsApp
  whatsappMsgPadrao: "Olá! Vim pelo site e gostaria de saber mais sobre o rastreamento da LocalCar.",
};

// Gera o link do WhatsApp com mensagem opcional
export function linkWhatsApp(mensagem?: string): string {
  const texto = encodeURIComponent(mensagem || site.whatsappMsgPadrao);
  return `https://wa.me/${site.whatsapp}?text=${texto}`;
}

// Lista de recursos/funcionalidades do produto
export const recursos = [
  {
    id: "localizacao",
    titulo: "Localização em tempo real",
    desc: "Veja a posição exata do veículo a qualquer momento no mapa, com rastreamento contínuo e preciso.",
    icone: "pin",
  },
  {
    id: "bloqueio",
    titulo: "Bloqueio remoto",
    desc: "Bloqueie e desbloqueie o motor pelo celular ou computador. Em caso de roubo, aja na hora.",
    icone: "lock",
  },
  {
    id: "cerca",
    titulo: "Cerca virtual",
    desc: "Defina o limite de área que o carro pode percorrer. Se ultrapassar, você é avisado imediatamente.",
    icone: "globe",
  },
  {
    id: "estatisticas",
    titulo: "Estatísticas do veículo",
    desc: "Trajetos, velocidade, histórico de uso e relatórios completos sobre o comportamento do carro.",
    icone: "chart",
  },
  {
    id: "instalacao",
    titulo: "Instalação rápida",
    desc: "Equipe técnica especializada para instalação ágil, segura e discreta no seu veículo.",
    icone: "bolt",
  },
  {
    id: "app",
    titulo: "App iOS & Android",
    desc: "No iPhone, Android ou em qualquer navegador pela internet. Acesso de qualquer dispositivo.",
    icone: "phone",
  },
];

// Passos de "como funciona"
export const comoFunciona = [
  { n: 1, titulo: "Agende a instalação", desc: "Fale conosco pelo WhatsApp ou formulário e marque a instalação do rastreador." },
  { n: 2, titulo: "Instalação rápida e segura", desc: "Nossa equipe instala o equipamento com tecnologia de ponta, de forma ágil." },
  { n: 3, titulo: "Baixe o aplicativo", desc: "Instale o app (iOS/Android) ou acesse pela internet em qualquer dispositivo." },
  { n: 4, titulo: "Você no controle", desc: "Rastreie, bloqueie, defina limites e veja estatísticas de onde estiver." },
];

// Públicos-alvo
export const publicos = [
  {
    tipo: "own",
    titulo: "Donos de veículo",
    desc: "Para quem quer proteger o carro particular com total controle e tranquilidade no dia a dia.",
    itens: [
      "Localização em tempo real",
      "Bloqueio imediato em caso de roubo",
      "Alertas de movimentação",
      "Tranquilidade para a família",
    ],
  },
  {
    tipo: "fleet",
    titulo: "Empresas e frotas",
    desc: "Para empresas que precisam gerenciar e monitorar vários veículos com eficiência e segurança.",
    itens: [
      "Gestão centralizada da frota",
      "Relatórios de uso e produtividade",
      "Controle de rotas e cercas virtuais",
      "Redução de custos operacionais",
    ],
  },
];

// Serviços (página /servicos)
export const servicos = [
  {
    titulo: "Rastreamento Veicular",
    desc: "Monitoramento em tempo real do seu veículo via GPS, com precisão e atualização contínua direto no aplicativo.",
    itens: ["Localização ao vivo", "Histórico de trajetos", "Alertas de movimentação"],
  },
  {
    titulo: "Bloqueio e Desbloqueio Remoto",
    desc: "Controle total do motor do veículo à distância. Em situações de risco, bloqueie pelo celular ou computador.",
    itens: ["Bloqueio imediato", "Desbloqueio seguro", "Acesso pelo app ou web"],
  },
  {
    titulo: "Cerca Virtual (Geofence)",
    desc: "Defina áreas permitidas de circulação. O sistema avisa automaticamente caso o veículo ultrapasse o limite.",
    itens: ["Limites personalizados", "Alertas automáticos", "Ideal para frotas"],
  },
  {
    titulo: "Gestão de Frotas",
    desc: "Solução completa para empresas monitorarem múltiplos veículos, com relatórios e controle centralizado.",
    itens: ["Painel unificado", "Relatórios de produtividade", "Redução de custos"],
  },
  {
    titulo: "Instalação Profissional",
    desc: "Equipe técnica especializada para instalação rápida, segura e discreta, sem comprometer o veículo.",
    itens: ["Equipe qualificada", "Instalação discreta", "Suporte pós-instalação"],
  },
  {
    titulo: "Clube de Vantagens",
    desc: "Benefícios exclusivos para clientes LocalCar em parceria com a MR Car e demais parceiros.",
    itens: ["Descontos exclusivos", "Parceria MR Car", "Benefícios contínuos"],
  },
];
