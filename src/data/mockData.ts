import { ObraItem, ServicoItem, DifferentialItem } from '../types';
import heroFloorPlanImg from '../assets/images/realistic_floor_plan_1791891738744.jpg';
import obraAlphavilleImg from '../assets/images/casa_residencial_obra_1791895076144.jpg';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1VFUGBx_zaMUWEdHJV4U9YuTvXuONS-qN0x8N7fpc5bSruQECwdMDJc8UNC8nWEVRCzQ4OpXiB9vhezo_XWQi627D3CPu1Qig8H8kTPTl7NWqDAcsNoJa4hXQSTSHgZ25VyQdziof8aSf2BmM1xu6T27MTSGGlP3Ksykt-PJEJFPO9Y2Uo72AmvQ4zNmio3HQoJ-Q7xEHSL70J-QZAl4ioQvb0loGFkWJtqVzDXZJbyC8vQ9QyuDYljpv2X',
  carlosAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBewQKJvgQOJ1SvuJHZscQb9iBiXJwOXw8EzKrIqBOjUX3mVf9f-OGDJiIaeqakt84hmtIfc6oAJ9xS_INWIBzkeKo5Wp5fj0TShB1-vYypcoGnohhrbpO4Lb2AUDVKdx879_8lzcDaltP8LGWzLhfV9KydSiYa82JGIgza1wwY5rbyO8if2HjANzSk1ooYRPB-A8LTOACQR7kb54tN2SRXICbwFJ6mwERAIKCFxAFK-RkZIlvutNCYKQ',
  heroHouse: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzmKx00ceWVKnZyacNdfzv5NQz6Kq_Bp28FkMfh6B8LOPUfPBcr-s1tLvq6rrXcCynrhd6KgFgvX_UBF1O1wTsgaI-xGYy0Ae9xaFi_tUu7aqwl6v6MVRs8e4c-K81gZV9qnpe7ht7m5R0j3otB46R3hCSMZtM8avutY7owvSHY6rx_DBprhUVwf4v6t8ZqIvm1toxRIzwwFYtcVOb_2fo842Il35pm-AOY83LVgPP9y4ij-oPu2weYw',
  heroFloorPlan: heroFloorPlanImg,
  obraAlphaville: obraAlphavilleImg,
  obraJardins: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKhvM7X6K6rhs5qSDWcTmopKF37GMAPV75HDD_1ohyNn_MUUPnh7KrdbWz1pu-Nql9vZFkWRxXNK8I23xylp0-0aBtYpDMwxOZwXkKnuhwnF15VkOg9Ea8di3ZPFEX9Z1bvMWDv11-F4D3-cWuGigy3hi2e7rw67O9vaB0lHckJk2sJfdMkPnJBkB8gsw0YDdCau6BnE_YGthnFvmXI8Dh8qo_dGX3EXkHPNTDLunjvJl4Edm6IogsUg',
  testimonialAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClEtiBVTrm5KafjVDW-Gt9ACzlCQZh3TGRpLV_eUQca2hbfqCZEFaX-8zKnZjadLTVApgsYJ3GTZmsF_1-AGbf-PJ9Dx8qPiDl6AOP33Qpokn7r9hlYrRyVnLTxv7fQ931SfsIAJJ8pOz_SrJ8ssx0xvUCadvAZD4ck41cdjYPpHIGho2lNeA15u6b1Tdk6i__sciPu20wG7xphCejJk88090WhtDrJ2M5TEvC2ACSgq9EiPdjeAIB0w',
};

export const OBRAS_DATA: ObraItem[] = [
  {
    id: 'casa-alphaville',
    title: 'Casa Residencial Alphaville',
    location: 'Alphaville SP (Condomínio Residencial)',
    type: 'construcao',
    status: 'em_andamento',
    progressPercentage: 85,
    currentPhase: 'Fase: Pintura & Esquadrias',
    expectedCompletion: 'Previsão: Out/2025',
    areaM2: 520,
    imageUrl: ASSETS.obraAlphaville,
    breakdown: [
      { label: 'Estrutura', percentage: 100 },
      { label: 'Instalações', percentage: 95 },
      { label: 'Acabamento', percentage: 60, color: '#3755c3' }
    ],
    description: 'Casa residencial térrea com mezanino em condomínio fechado, alvenaria de alto rendimento, cobertura com madeiramento nobre aparente e esquadrias sob medida.',
    features: ['520m² de área construída', 'Estrutura de concreto e alvenaria estrutural', 'Piso e contrapiso regularizados', 'Instalações elétricas e hidráulicas 100% testadas']
  },
  {
    id: 'reforma-jardins',
    title: 'Reforma Living Jardins',
    location: 'Jardins, São Paulo - SP',
    type: 'reforma',
    status: 'em_andamento',
    progressPercentage: 60,
    currentPhase: 'Fase: Iluminação & Marcenaria',
    expectedCompletion: 'Previsão: Dez/2025',
    areaM2: 290,
    imageUrl: ASSETS.obraJardins,
    beforeImageUrl: ASSETS.obraJardins,
    afterImageUrl: ASSETS.heroHouse,
    breakdown: [
      { label: 'Demolição', percentage: 100 },
      { label: 'Hidro/Elétrica', percentage: 100 },
      { label: 'Marcenaria', percentage: 40, color: '#ee5b10' }
    ],
    description: 'Retrofit e integração total entre living, cozinha gourmet e varanda. Reforço metálico para eliminação de pilares centrais e instalação de sistema acústico em piso e teto.',
    features: ['290m² de retrofit e reforma completa', 'Isolamento acústico de piso e forro', 'Porcelanatos e revestimentos sob medida', 'Infraestrutura de climatização e elétrica oculta']
  }
];

export const SERVICOS_DATA: ServicoItem[] = [
  {
    id: 'construcao-zero',
    title: 'Construção de Casa do Zero',
    subtitle: 'Do Terreno à Chave na Mão',
    tag: 'Turnkey',
    tagBg: 'bg-[#e6eeff]',
    tagColor: 'text-[#43474d]',
    iconName: 'foundation',
    iconBg: 'bg-[#0a2540]',
    iconColor: 'text-[#ffffff]',
    description: 'Gerenciamos cada etapa: projetos arquitetônicos e complementares, alvarás na prefeitura, fundação robusta com laudo de sondagem, alvenaria de alta performance e acabamentos de qualidade.',
    benefits: [
      'Fundação Robusta & Laudos',
      'Alvarás & Habite-se',
      'Relatório Semanal no App',
      'Entrega das Chaves 100%'
    ],
    ctaText: 'Quero Construir Minha Casa',
    deliverables: [
      'Preparação do terreno',
      'Escavações para fundação',
      'Concretagem das fundações e elementos estruturais',
      'Execução das estruturas de concreto previstas no projeto',
      'Execução de paredes de alvenaria',
      'Vergas e contravergas',
      'Execução de cintas e vigas',
      'Execução de pilares',
      'Execução de laje',
      'Escoramento e desescoramento de laje',
      'Execução de escada, conforme projeto',
      'Chapisco das paredes',
      'Reboco/emboço das áreas previstas',
      'Impermeabilização de área molhada e baldrame',
      'Contrapiso e regularizações',
      'Infraestrutura elétrica',
      'Infraestrutura hidráulica',
      'Infraestrutura sanitária',
      'Preparação para instalação de portas e janelas',
      'Assentamento de revestimentos de parede e pisos',
      'Assentamento de pisos e revestimentos cerâmicos/porcelanatos',
      'Execução de áreas molhadas',
      'Instalação de louças e metais, conforme projeto',
      'Preparação e execução dos acabamentos previstos na obra',
      'Instalação de batentes',
      'Instalação de contramarco',
      'Assentamento de pingadeiras e soleiras',
      'Instalação de todos os quadros de energia'
    ]
  },
  {
    id: 'reformas-retrofit',
    title: 'Reformas & Retrofit Completo',
    subtitle: 'Casas e Apartamentos',
    tag: 'Obra Limpa',
    tagBg: 'bg-[#e6eeff]',
    tagColor: 'text-[#43474d]',
    iconName: 'architecture',
    iconBg: 'bg-[#ffdbce]',
    iconColor: 'text-[#7f2b00]',
    description: 'Execução completa de reformas residenciais e comerciais com equipe própria especializada e proteção rigorosa do seu patrimônio.',
    benefits: [
      'Aplicação e Troca de Revestimentos',
      'Pisos e Porcelanatos',
      'Pintura Residencial e Comercial',
      'Elétrica e Instalações',
      'Forro de Gesso & Drywall',
      'Jardinagem & Paisagismo',
      'Contra Piso & Regularização',
      'Correção de Vazamentos'
    ],
    ctaText: 'Quero Reformar Meu Imóvel',
    deliverables: [
      'Aplicação e troca de revestimentos, pisos e porcelanatos com nivelamento a laser',
      'Pintura interna e externa completa com preparação de massa e lixamento',
      'Revisão e nova infraestrutura elétrica com quadros de disjuntores atualizados',
      'Forro de gesso acartonado (drywall) com sancas e nichos iluminados',
      'Jardinagem, revitalização de áreas verdes e gramados',
      'Execução e regularização de contra piso com caimento perfeito',
      'Caça e correção definitiva de vazamentos e infiltrações'
    ]
  },
  {
    id: 'projetos-executivos',
    title: 'Projetos Arquitetônicos & Compatibilização BIM',
    subtitle: 'Arquitetura & Engenharia Integrada',
    tag: 'BIM 3D',
    tagBg: 'bg-[#eff4ff]',
    tagColor: 'text-[#3755c3]',
    iconName: 'design_services',
    iconBg: 'bg-[#3755c3]',
    iconColor: 'text-[#ffffff]',
    description: 'Desenvolvimento do projeto dos sonhos em modelo tridimensional inteligente, antecipando 100% dos conflitos de tubulação, ar-condicionado e estruturas antes do primeiro tijolo.',
    benefits: [
      'Render 3D Fotorrealista',
      'Zero Conflitos de Tubulação',
      'Lista Precisa de Materiais',
      'Otimização Térmica & Lumínica'
    ],
    ctaText: 'Solicitar Projeto Arquitetônico',
    deliverables: [
      'Plantas baixas executivas detalhadas para a construtora',
      'Projetos estruturais, elétricos, hidrossanitários e de automação',
      'Imagens 3D fotorrealistas e passeio virtual interativo',
      'Memorial descritivo técnico com especificações de marcas'
    ]
  }
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    id: 'preco-fechado',
    title: 'Preço Fechado em Contrato',
    shortDesc: 'Zero aditivos inesperados ou reajustes ocultos de material.',
    icon: 'request_quote',
    iconColor: 'text-[#0a2540]',
    fullDesc: 'Trabalhamos com orçamento analítico detalhado em planilha aberta. O valor firmado na assinatura é o valor final da sua obra. A variação de custo de materiais durante a execução é de responsabilidade da Construtora Bragantina.',
    legalBasis: 'Contrato de Empreitada Global com Cláusula de Inalterabilidade de Preço',
    clientBenefit: 'Você sabe exatamente quanto vai gastar no dia 1, sem surpresas de custo na reta final.'
  },
  {
    id: 'relatorio-video',
    title: 'Relatório Semanal em Vídeo',
    shortDesc: 'Vídeos gravados e status direto no seu WhatsApp toda sexta.',
    icon: 'videocam',
    iconColor: 'text-[#ee5b10]',
    fullDesc: 'Toda sexta-feira até as 17h, o Eng. Carlos Vieira ou o engenheiro residente grava um vídeo detalhado percorrendo cada ambiente da obra, explicando o avanço físico e a meta da semana seguinte.',
    legalBasis: 'Relatório Técnico Periódico com Registro Fotográfico e Fotogrametria',
    clientBenefit: 'Você acompanha sua obra mesmo viajando ou com agenda cheia, sem precisar pisar no canteiro.'
  },
  {
    id: 'art-garantia',
    title: 'ART + 5 Anos Garantia',
    shortDesc: 'Anotação técnica CREA formalizada e assistência pós-obra.',
    icon: 'verified',
    iconColor: 'text-[#3755c3]',
    fullDesc: 'Toda obra possui Anotação de Responsabilidade Técnica (ART) emitida junto ao CREA-SP. Além disso, entregamos o Manual do Proprietário e termo de garantia de 5 anos para toda a estrutura, impermeabilização e instalações.',
    legalBasis: 'Código Civil Brasileiro Art. 618 e CREA-SP Resolução Confea nº 1.025',
    clientBenefit: 'Segurança jurídica, valorização patrimonial no registro do imóvel e tranquilidade contínua.'
  },
  {
    id: 'prazo-multa',
    title: 'Prazo com Multa Diária',
    shortDesc: 'Cronograma físico-financeiro com multa contratual por atraso.',
    icon: 'alarm_on',
    iconColor: 'text-[#000f22]',
    fullDesc: 'Definimos a data de entrega das chaves no contrato com cronograma de marcos físicos. Se houver atraso por responsabilidade da construtora, há incidência de multa diária contratual em benefício do contratante.',
    legalBasis: 'Cláusula Penal Compensatória e Cronograma Físico-Financeiro Auditável',
    clientBenefit: 'Garantia real de que sua mudança ou planejamento de locação acontecerá na data combinada.'
  }
];

export const WORK_ROADMAP = [
  {
    step: '01',
    title: 'Estudo Técnico & Sondagem',
    desc: 'Análise topográfica do terreno, laudo SPT de solo e verificação da legislação do condomínio e plano diretor.'
  },
  {
    step: '02',
    title: 'Projetos & Aprovação Legal',
    desc: 'Criação da arquitetura, compatibilização estrutural em BIM e obtenção do alvará de construção municipal.'
  },
  {
    step: '03',
    title: 'Orçamento Fechado & Contrato',
    desc: 'Planilha quantitativa precisa, especificações de materiais de alto padrão e emissão da ART CREA.'
  },
  {
    step: '04',
    title: 'Fundação & Superestrutura',
    desc: 'Escavações, sapatas/estacas calculadas, lajes maciças e impermeabilização química de alta durabilidade.'
  },
  {
    step: '05',
    title: 'Instalações & Acabamentos',
    desc: 'Tubulações acústicas, rede elétrica blindada, esquadrias minimalistas, mármores e marcenaria fina.'
  },
  {
    step: '06',
    title: 'Vistoria & Chave na Mão',
    desc: 'Checklist rigoroso com mais de 120 itens vistoriados, Habite-se liberado e entrega do Manual do Proprietário.'
  }
];
