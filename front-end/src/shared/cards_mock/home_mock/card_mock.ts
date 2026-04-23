
// types/service.ts (Opcional, para tipagem técnica)
export interface ServiceMock {
  id: number;
  title: string;
  description: string;
  icon: string;
  alt: string;
}

// O MOCK DOS SERVIÇOS
export const CARD_MOCK: ServiceMock[] = [
  {
    id: 1,
    title: "Estratégia e Gestão",
    description: "Modelagem de processos, melhoria contínua e suporte à tomada de decisões estratégicas de alto nível.",
    icon: "/evermont/assets/icons_image/engrenagem.png",
    alt: "Ícone representativo de engrenagens e gestão estratégica"
  },
  {
    id: 2,
    title: "Dados e Inteligência de Negócios",
    description: "Desenvolvimento de soluções de Business Intelligence e análise preditiva de indicadores de desempenho.",
    icon: "/evermont/assets/icons_image/grafico-de-crescimento.png",
    alt: "Ícone de gráfico de crescimento e análise de dados"
  },
  {
    id: 3,
    title: "Tecnologia e Sistemas Empresariais",
    description: "Modernização, integração e evolução de ecossistemas digitais e sistemas corporativos escaláveis.",
    icon: "/evermont/assets/icons_image/nuvem.png",
    alt: "Ícone de camadas representando arquitetura de sistemas"
  }
];


export const experienceStats = [
  { 
    id:1,
    title: "+40",
    description: "Projetos de Modernização",  
    highlight: false
  },
  {
    id:2,
    title: "+30",
    description: "Anos de Experiência",   
    highlight: false
  },
  {
    id:3,
    title: "+300",
    description: "Colaboradores Treinados",
    highlight: true 
  }
];
