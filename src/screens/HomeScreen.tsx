import React from 'react';
import { ASSETS, DIFFERENTIALS_DATA, OBRAS_DATA } from '../data/mockData';
import { DifferentialItem, ObraItem, TabType } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HomeScreenProps {
  onNavigateTab: (tab: TabType) => void;
  onOpenWhatsApp: (context?: string) => void;
  onOpenCarlosProfile: () => void;
  onSelectDifferential: (diff: DifferentialItem) => void;
  onSelectObra: (obra: ObraItem) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateTab,
  onOpenWhatsApp,
  onOpenCarlosProfile,
  onSelectDifferential,
  onSelectObra
}) => {
  const alphavilleObra = OBRAS_DATA.find((o) => o.id === 'casa-alphaville') || OBRAS_DATA[0];
  const jardinsObra = OBRAS_DATA.find((o) => o.id === 'reforma-jardins') || OBRAS_DATA[1];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section com Casa Contemporânea de Alto Padrão */}
      <section className="relative w-full overflow-hidden bg-[#0a2540] px-4 pt-6 pb-10">
        {/* Subtle blueprint grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="32" id="blueprint-grid" patternUnits="userSpaceOnUse" width="32">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#ffffff" strokeWidth="0.8"></path>
              </pattern>
            </defs>
            <rect fill="url(#blueprint-grid)" height="100%" width="100%"></rect>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col gap-4">
          {/* Chip: Sua Obra sem Dor de Cabeça */}
          <div className="flex items-center gap-2 p-1.5 pr-4 rounded-full bg-white/15 backdrop-blur-md w-max border border-white/20 text-left">
            <span className="w-6 h-6 rounded-full bg-[#ee5b10] flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined text-[15px]">verified</span>
            </span>
            <span className="text-[12px] text-white font-bold tracking-wide">
              Sua Obra sem Dor de Cabeça
            </span>
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
          </div>

          {/* Título & Subtítulo Direto */}
          <div className="flex flex-col gap-1">
            <h2 className="text-[28px] leading-[36px] tracking-[-0.015em] text-white font-extrabold">
              Construção de Casas do Zero & Reformas
            </h2>
            <p className="text-[16px] leading-[24px] text-[#dde9ff]/90">
              Sem surpresas no orçamento, sem dor de cabeça com pedreiros e com entrega rigorosamente no prazo.
            </p>
          </div>

          {/* Foto Hero: Casa em Planta Baixa */}
          <div 
            onClick={() => onSelectObra(alphavilleObra)}
            className="relative w-full h-56 rounded-xl overflow-hidden shadow-xl mt-1 border border-white/15 cursor-pointer group bg-slate-900"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Planta baixa arquitetônica 3D de casa residencial moderna"
              src={ASSETS.heroFloorPlan}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 via-[#0a2540]/30 to-transparent flex items-end justify-between p-4">
              <div className="flex items-center gap-1.5 text-white">
                <span className="material-symbols-outlined text-[18px] text-[#ffb599]">architecture</span>
                <span className="text-[11px] tracking-wide font-semibold">
                  Planta Baixa Residencial • Projeto Executivo
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#ee5b10] text-[10px] font-bold text-white uppercase tracking-wider">
                Chave na Mão
              </span>
            </div>
          </div>

          {/* Dois Botões de Ação em Destaque */}
          <div className="flex flex-col gap-2 mt-1">
            <a
              href={getWhatsAppUrl('Olá, gostaria de falar com um especialista da Construtora Bragantina agora!')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] h-12 bg-[#ee5b10] hover:bg-[#d94e09] text-white text-[14px] font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Falar com Especialista Agora</span>
            </a>
            <button
              onClick={() => onNavigateTab('simulador')}
              className="w-full min-h-[48px] h-12 bg-transparent border-2 border-[#dde9ff]/40 text-white hover:bg-white/10 text-[14px] font-bold rounded-xl flex items-center justify-center gap-1.5 active:bg-white/15 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">calculate</span>
              <span>Simular Orçamento da Obra</span>
            </button>
          </div>
        </div>
      </section>

      {/* Métricas Rápidas */}
      <section className="px-4 -mt-4 z-20">
        <div className="bg-white rounded-xl p-4 shadow-md flex items-center justify-between divide-x divide-[#e6eeff] border border-[#dde9ff]/50">
          <div className="flex-1 flex flex-col items-center text-center px-1">
            <div className="flex items-center gap-0.5 text-[#3755c3]">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span className="text-[20px] font-bold text-[#000f22]">+85</span>
            </div>
            <span className="text-[11px] text-[#43474d] mt-0.5 font-medium">Casas entregues</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-1">
            <div className="flex items-center gap-0.5 text-[#ee5b10]">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="text-[20px] font-bold text-[#000f22]">100%</span>
            </div>
            <span className="text-[11px] text-[#43474d] mt-0.5 font-medium">Preço fixo</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-center px-1">
            <div className="flex items-center gap-0.5 text-[#3755c3]">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span className="text-[20px] font-bold text-[#000f22]">5 Anos</span>
            </div>
            <span className="text-[11px] text-[#43474d] mt-0.5 font-medium">Garantia total</span>
          </div>
        </div>
      </section>

      {/* Eixos de Atuação: Cards Interativos */}
      <section className="px-4 mt-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-[#3755c3] font-bold">
              Nossas Frentes
            </span>
            <h3 className="text-[24px] leading-tight text-[#0d1c2f] font-bold">
              O Que Você Precisa Construir?
            </h3>
          </div>
          <span className="material-symbols-outlined text-[#3755c3] text-[26px]">roofing</span>
        </div>

        {/* Card 1: Construção de Casa do Zero */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#dde9ff]/60 flex flex-col gap-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-11 h-11 rounded-xl bg-[#0a2540] text-white flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[24px]">foundation</span>
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-[18px] text-[#0d1c2f] font-bold leading-snug">
                  Construção de Casa do Zero
                </h4>
                <span className="text-[11px] text-[#3755c3] font-semibold">
                  Do Terreno à Chave na Mão
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#e6eeff] text-[#43474d] text-[11px] font-bold">
              Turnkey
            </span>
          </div>
          <p className="text-[14px] text-[#43474d] leading-relaxed">
            Gerenciamos cada etapa: projetos arquitetônicos e complementares, alvarás na prefeitura, fundação robusta com laudo de sondagem, alvenaria de alta performance e acabamentos premium.
          </p>
          <div className="grid grid-cols-2 gap-2 text-[#0d1c2f] text-[13px] pt-1">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600">check_circle</span>
              <span className="text-[11px] font-medium">Fundação Robusta & Laudos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600">check_circle</span>
              <span className="text-[11px] font-medium">Alvarás & Habite-se</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600">check_circle</span>
              <span className="text-[11px] font-medium">Relatório Semanal no App</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600">check_circle</span>
              <span className="text-[11px] font-medium">Entrega das Chaves 100%</span>
            </div>
          </div>
          <button
            onClick={() => onNavigateTab('servicos')}
            className="text-[11px] font-bold text-[#3755c3] hover:underline flex items-center justify-center gap-1 py-1 bg-[#eff4ff] rounded-lg border border-[#dde9ff] cursor-pointer"
          >
            <span>Ver todos os 28 itens construtivos inclusos</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
          <a
            href={getWhatsAppUrl('Olá Eng. Carlos, quero construir minha casa do zero com a Construtora Bragantina! Gostaria de falar no WhatsApp.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[44px] h-11 mt-1 bg-[#0a2540] hover:bg-[#000f22] text-white text-[13px] font-bold rounded-xl flex items-center justify-center gap-2 active:opacity-90 transition-opacity cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Quero Construir Minha Casa</span>
          </a>
        </div>

        {/* Card 2: Reformas & Retrofit Completo */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#dde9ff]/60 flex flex-col gap-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-11 h-11 rounded-xl bg-[#ffdbce] text-[#7f2b00] flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[24px]">architecture</span>
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-[18px] text-[#0d1c2f] font-bold leading-snug">
                  Reformas & Retrofit Completo
                </h4>
                <span className="text-[11px] text-[#ee5b10] font-semibold">
                  Casas e Apartamentos
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#e6eeff] text-[#43474d] text-[11px] font-bold">
              Obra Limpa
            </span>
          </div>
          <p className="text-[14px] text-[#43474d] leading-relaxed">
            Serviços especializados com execução ágil, equipe qualificada, materiais de qualidade e obra limpa sem dor de cabeça.
          </p>
          <div className="grid grid-cols-2 gap-2 text-[#0d1c2f] text-[13px] pt-1">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600 shrink-0">check_circle</span>
              <span className="text-[11px] font-medium">Troca de Revestimentos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600 shrink-0">check_circle</span>
              <span className="text-[11px] font-medium">Pisos e Porcelanatos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600 shrink-0">check_circle</span>
              <span className="text-[11px] font-medium">Pintura Geral</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600 shrink-0">check_circle</span>
              <span className="text-[11px] font-medium">Elétrica & Iluminação</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600 shrink-0">check_circle</span>
              <span className="text-[11px] font-medium">Forro de Gesso & Drywall</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600 shrink-0">check_circle</span>
              <span className="text-[11px] font-medium">Jardinagem & Paisagismo</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600 shrink-0">check_circle</span>
              <span className="text-[11px] font-medium">Contra Piso</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-green-600 shrink-0">check_circle</span>
              <span className="text-[11px] font-medium">Correção de Vazamentos</span>
            </div>
          </div>
          <a
            href={getWhatsAppUrl('Olá Eng. Carlos, quero reformar meu imóvel com a Construtora Bragantina! Gostaria de falar no WhatsApp.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[44px] h-11 mt-1 bg-[#e6eeff] hover:bg-[#dde9ff] text-[#0d1c2f] text-[13px] font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Quero Reformar Meu Imóvel</span>
          </a>
        </div>
      </section>

      {/* Diferenciais Blindados */}
      <section className="px-4 mt-8 flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-wider text-[#3755c3] font-bold">
            Segurança Contratual
          </span>
          <h3 className="text-[24px] leading-tight text-[#0d1c2f] font-bold">
            Diferenciais Blindados
          </h3>
          <p className="text-[14px] text-[#43474d] mt-0.5">
            Tranquilidade do primeiro aperto de mão até a entrega das chaves.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {DIFFERENTIALS_DATA.map((diff) => (
            <button
              key={diff.id}
              onClick={() => onSelectDifferential(diff)}
              className="bg-white p-3 rounded-xl border border-[#dde9ff]/60 flex flex-col gap-1.5 shadow-sm text-left hover:border-[#3755c3]/50 transition-all cursor-pointer group active:scale-[0.99]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#e6eeff] flex items-center justify-center text-[#0a2540] group-hover:bg-[#0a2540] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">{diff.icon}</span>
              </div>
              <h5 className="text-[14px] font-bold text-[#0d1c2f] leading-snug">
                {diff.title}
              </h5>
              <p className="text-[11px] text-[#43474d] leading-relaxed">
                {diff.shortDesc}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Acompanhamento em Tempo Real (Obras ao Vivo) */}
      <section className="px-4 mt-8 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-[#3755c3] font-bold">
              Transparência Total
            </span>
            <h3 className="text-[24px] leading-tight text-[#0d1c2f] font-bold">
              Acompanhamento em Tempo Real
            </h3>
          </div>
          <span className="flex items-center gap-1 text-[12px] text-[#ee5b10] font-bold bg-[#ffdbce]/40 px-2 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#ee5b10] animate-ping"></span>
            Ao vivo
          </span>
        </div>

        {/* Card Obra 1: Casa Residencial Alphaville */}
        <div 
          onClick={() => onSelectObra(alphavilleObra)}
          className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#dde9ff]/60 flex flex-col cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="relative w-full h-44">
            <img
              className="w-full h-full object-cover"
              alt="Casa Residencial Alphaville"
              src={ASSETS.obraAlphaville}
            />
            <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-[#000f22]/85 backdrop-blur-sm text-white text-[11px] flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-[16px]">villa</span>
              Casa Residencial Alphaville
            </div>
            <div className="absolute top-2 right-2 px-2.5 py-1 rounded-md bg-[#3755c3] text-white text-[11px] font-bold shadow-sm">
              85% Concluído
            </div>
          </div>
          <div className="p-4 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-[#0d1c2f] font-bold">
                Fase: Pintura & Esquadrias
              </span>
              <span className="text-[11px] text-[#43474d] font-medium">
                Previsão: Out/2025
              </span>
            </div>
            <div className="w-full h-2.5 bg-[#e6eeff] rounded-full overflow-hidden mt-1">
              <div className="h-full bg-[#3755c3] rounded-full transition-all duration-700" style={{ width: '85%' }}></div>
            </div>
            <div className="flex items-center justify-between pt-1 text-[12px] text-[#43474d]">
              <span>Estrutura 100%</span>
              <span>Instalações 95%</span>
              <span className="text-[#3755c3] font-semibold">Acabamento 60%</span>
            </div>
          </div>
        </div>

        {/* Card Obra 2: Reforma Living Jardins */}
        <div 
          onClick={() => onSelectObra(jardinsObra)}
          className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#dde9ff]/60 flex flex-col cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="relative w-full h-44">
            <img
              className="w-full h-full object-cover"
              alt="Reforma Living Jardins"
              src={ASSETS.obraJardins}
            />
            <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-[#000f22]/85 backdrop-blur-sm text-white text-[11px] flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-[16px]">chair</span>
              Reforma Living Jardins
            </div>
            <div className="absolute top-2 right-2 px-2.5 py-1 rounded-md bg-[#ee5b10] text-white text-[11px] font-bold shadow-sm">
              60% Concluído
            </div>
          </div>
          <div className="p-4 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-[#0d1c2f] font-bold">
                Fase: Iluminação & Marcenaria
              </span>
              <span className="text-[11px] text-[#43474d] font-medium">
                Previsão: Dez/2025
              </span>
            </div>
            <div className="w-full h-2.5 bg-[#e6eeff] rounded-full overflow-hidden mt-1">
              <div className="h-full bg-[#ee5b10] rounded-full transition-all duration-700" style={{ width: '60%' }}></div>
            </div>
            <div className="flex items-center justify-between pt-1 text-[12px] text-[#43474d]">
              <span>Demolição 100%</span>
              <span>Hidro/Elétrica 100%</span>
              <span className="text-[#ee5b10] font-semibold">Marcenaria 40%</span>
            </div>
          </div>
        </div>

        <div className="text-center pt-1">
          <button
            onClick={() => onNavigateTab('obras')}
            className="text-xs font-bold text-[#3755c3] hover:underline flex items-center justify-center gap-1 mx-auto cursor-pointer"
          >
            <span>Ver todas as obras e comparativo Antes & Depois</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Prova Social Real */}
      <section className="px-4 mt-8">
        <div className="bg-[#dde9ff] rounded-xl p-4 shadow-sm border border-[#d5e3fd] flex flex-col gap-2 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5 text-[#ee5b10]">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <span className="text-[11px] text-[#3755c3] font-bold uppercase tracking-wider">
              AVALIAÇÃO 5.0
            </span>
          </div>
          <p className="text-[16px] text-[#0d1c2f] italic leading-relaxed">
            “Construir nossa casa sempre pareceu um pesadelo pelos relatos de amigos. Com o Carlos e a equipe da Construtora Bragantina, recebemos relatórios em vídeo toda sexta-feira e a casa foi entregue 10 dias antes do prazo acordado, sem um centavo a mais no orçamento.”
          </p>
          <div className="flex items-center gap-3 pt-2 border-t border-[#e6eeff]">
            <img
              alt="Dr. Ricardo Mendes"
              className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-white shadow-sm"
              src={ASSETS.testimonialAvatar}
            />
            <div className="flex flex-col min-w-0">
              <span className="text-[14px] text-[#0d1c2f] font-bold truncate">
                Dr. Ricardo Mendes
              </span>
              <span className="text-[11px] text-[#43474d] truncate font-medium">
                Proprietário de Casa em Tamboré • 420m²
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Card CTA Final: Convite para Café & Avaliação de Projeto */}
      <section className="px-4 mt-8 mb-4">
        <div className="relative bg-[#0a2540] text-white rounded-xl p-4 shadow-xl flex flex-col gap-2 overflow-hidden border border-[#dde9ff]/20">
          <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#ee5b10]/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center gap-2.5 z-10">
            <div className="w-11 h-11 rounded-xl bg-[#ee5b10] text-white flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[24px]">coffee</span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[20px] text-white font-bold leading-tight">
                Vamos tomar um café?
              </h4>
              <span className="text-[11px] text-[#dde9ff]">
                Avaliamos seu terreno ou projeto sem custo
              </span>
            </div>
          </div>
          
          <p className="text-[14px] text-[#dde9ff] z-10 leading-relaxed">
            Traga sua ideia ou planta. Sentamos com o engenheiro responsável para analisar a viabilidade técnica, custos reais por m² e o cronograma ideal para a sua obra.
          </p>
          
          {/* Botão Vibrante / Pulsante para WhatsApp */}
          <div className="relative mt-2 z-10">
            <span className="absolute -inset-1 rounded-xl bg-[#ee5b10] opacity-40 blur-sm animate-pulse"></span>
            <a
              href={getWhatsAppUrl('Olá Eng. Carlos, vi o convite para um café no app da Construtora Bragantina e gostaria de agendar uma conversa no WhatsApp para avaliar meu terreno/projeto!')}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full min-h-[50px] h-[50px] bg-[#ee5b10] hover:bg-[#d94e09] text-white text-[14px] font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.99] transition-transform cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">chat</span>
              <span>Agendar Conversa no WhatsApp</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#dde9ff]/80 z-10 pt-1">
            <span className="material-symbols-outlined text-[16px] text-green-400">schedule</span>
            <span>Atendimento de seg. a sáb. em Bragança Paulista, SP e Região</span>
          </div>
        </div>
      </section>
    </div>
  );
};
