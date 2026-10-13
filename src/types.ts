export type TabType = 'inicio' | 'servicos' | 'obras' | 'simulador';

export interface ObraItem {
  id: string;
  title: string;
  location: string;
  type: 'construcao' | 'reforma';
  status: 'em_andamento' | 'concluida';
  progressPercentage: number;
  currentPhase: string;
  expectedCompletion: string;
  areaM2: number;
  imageUrl: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  breakdown: {
    label: string;
    percentage: number;
    color?: string;
  }[];
  description: string;
  weeklyUpdate?: {
    date: string;
    videoTitle: string;
    notes: string;
  };
  features: string[];
}

export interface ServicoItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
  description: string;
  benefits: string[];
  ctaText: string;
  deliverables: string[];
}

export interface DifferentialItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  iconColor: string;
  fullDesc: string;
  legalBasis: string;
  clientBenefit: string;
}

export interface SimulationResult {
  tipo: 'construcao' | 'reforma';
  area: number;
  padrao: 'premium' | 'luxo' | 'ultra_luxo';
  topografia: 'plano' | 'aclive_leve' | 'desnivel_forte';
  valorM2: number;
  valorTotal: number;
  prazoMeses: number;
  cronograma: {
    fase: string;
    percentual: number;
    valor: number;
  }[];
}
