export interface SobreItem {
  id: number;
  title: string;
  description?: string;
  icon: string;
}

// Dados para a seção "Nossa Experiência"
export const EXPERIENCIA_SOBRE: SobreItem[] = [
  {
    id: 1,
    title: "+40",
    description: "Projetos de Modernização",
    icon: "/evermont/assets/icons_image/engrenagem.png"
  },
  {
    id: 2,
    title: "+30 Anos",
    description: "de Experiência",
    icon: "/evermont/assets/icons_image/a-infraestrutura.png"
  },
  {
    id: 3,
    title: "+300",
    description: "Colaboradores Treinados",
    icon: "/evermont/assets/icons_image/nuvem.png"
  }
];

// Dados para a seção "Visão, Missão e Valores"
export const VALORES_SOBRE: SobreItem[] = [
  {
    id: 1,
    title: "Excelência",
    description: "A busca pela excelência orienta todas as nossas ações. Comprometemo-nos com a entrega de resultados superiores e consistentes.",
    icon: "/evermont/assets/icons_image/triangular.png"
  },
  {
    id: 2,
    title: "Integridade",
    description: "Atuamos com transparência e ética em todas as relações, promovendo um ambiente de confiança no uso estratégico dos dados.",
    icon: "/evermont/assets/icons_image/estrela.png"
  },
  {
    id: 3,
    title: "Inovação",
    description: "Consultoria contemporânea exige agilidade e novas perspectivas. Desenvolvemos soluções criativas para um mercado em evolução.",
    icon: "/evermont/assets/icons_image/coracao.png"
  }
];