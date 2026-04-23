export interface MetodologiaItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export  const CARD_MOCK: MetodologiaItem[] = [
  {
    id: 1,
    title: "Estratégia e Gestão",
    description: "Estruturação do plano estratégico, com foco em resultados de rendimento específicos.",
    icon: "/evermont/assets/icons_image/engrenagem.png", 
    alt: "Ícone de engrenagem"
  },
  {
    id: 2,
    title: "Dados e Inteligência de Negócios",
    description: "Gestão e monitoramento de dados, inteligência de negócios e ferramentas de acompanhamento de performance.",
    icon: "/evermont/assets/icons_image/grafico-de-crescimento.png",
    alt: "Ícone de Grafico de crescimento"
  },
  {
    id: 3,
    title: "Tecnologia e Sistemas Empresariais",
    description: "Modernização e integração inteligente de sistemas para eficiência do negócio.",
    icon: "/evermont/assets/icons_image/nuvem.png",
    alt: "Ícone de nuvem parat tecnologia" 
  }
];


export const METODOLOGIA_MOCK: MetodologiaItem[] = [
  {
    id: 1,
    title: "Diagnose",
    description: "Imersão profunda no cenário atual para identificação de gargalos e oportunidades reais de melhoria.",
    icon: "/evermont/assets/icons_image/lupa.png",
    alt: "Ícone de lupa para diagnóstico"
  },
  {
    id: 2,
    title: "Desenvolver",
    description: "Criação de estratégias personalizadas e planos de ação robustos, baseados em análise de dados e inteligência de negócio.",
    icon: "/evermont/assets/icons_image/informacao-financeira.png",
    alt: "Ícone de informação financeira para desenvolvimento"
  },
  {
    id: 3,
    title: "Implementar",
    description: "Execução monitorada das soluções, garantindo que os processos sejam integrados com eficiência e foco em resultados sustentáveis.",
    icon: "/evermont/assets/icons_image/implemento.png",
    alt: "Ícone de implementação de processos"
  }
];