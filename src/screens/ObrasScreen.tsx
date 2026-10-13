import React, { useState } from 'react';
import { ASSETS, OBRAS_DATA } from '../data/mockData';
import { ObraItem } from '../types';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ObrasScreenProps {
  onSelectObra: (obra: ObraItem) => void;
  onOpenWhatsApp: (context?: string) => void;
}

export const ObrasScreen: React.FC<ObrasScreenProps> = ({
  onSelectObra,
  onOpenWhatsApp
}) => {
  const [filter, setFilter] = useState<'todas' | 'construcao' | 'reforma'>('todas');

  const filteredObras = OBRAS_DATA.filter((item) => {
    if (filter === 'todas') return true;
    return item.type === filter;
  });

  const construcaoCount = OBRAS_DATA.filter(o => o.type === 'construcao').length;
  const reformaCount = OBRAS_DATA.filter(o => o.type === 'reforma').length;

  return (
    <div className="flex flex-col w-full px-4 py-6 gap-6">
      {/* Title Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-[#3755c3] font-bold">
            Canteiro de Obras & Portfólio
          </span>
          <span className="flex items-center gap-1 text-[11px] text-[#ee5b10] font-bold bg-[#ffdbce]/50 px-2 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#ee5b10] animate-ping"></span>
            Transmissão de Status
          </span>
        </div>
        <h2 className="text-[26px] leading-tight text-[#0d1c2f] font-extrabold">
          Acompanhamento Transparente
        </h2>
        <p className="text-[14px] text-[#43474d] leading-relaxed">
          Nossas obras abertas para você inspecionar. Veja o status das casas em execução em Alphaville e as reformas nos Jardins.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setFilter('todas')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
            filter === 'todas'
              ? 'bg-[#0a2540] text-white shadow-sm'
              : 'bg-white text-[#43474d] border border-[#dde9ff] hover:bg-slate-50'
          }`}
        >
          Todas ({OBRAS_DATA.length})
        </button>
        <button
          onClick={() => setFilter('construcao')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
            filter === 'construcao'
              ? 'bg-[#0a2540] text-white shadow-sm'
              : 'bg-white text-[#43474d] border border-[#dde9ff] hover:bg-slate-50'
          }`}
        >
          Casas do Zero ({construcaoCount})
        </button>
        <button
          onClick={() => setFilter('reforma')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
            filter === 'reforma'
              ? 'bg-[#0a2540] text-white shadow-sm'
              : 'bg-white text-[#43474d] border border-[#dde9ff] hover:bg-slate-50'
          }`}
        >
          Reformas ({reformaCount})
        </button>
      </div>

      {/* Before and After Interactive Showcase */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-[#dde9ff] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#ee5b10] font-bold">
              Comparativo Interativo
            </span>
            <h3 className="text-base font-bold text-[#0d1c2f]">
              Antes & Depois: Retrofit Living Jardins
            </h3>
          </div>
          <span className="text-[11px] bg-[#e6eeff] text-[#3755c3] px-2 py-0.5 rounded font-bold">
            290m²
          </span>
        </div>

        <BeforeAfterSlider
          beforeImage={ASSETS.obraJardins}
          afterImage={ASSETS.heroHouse}
          beforeLabel="Fase Estrutural / Alvenaria"
          afterLabel="Resultado Concluído"
        />

        <p className="text-xs text-[#43474d] leading-relaxed">
          Arraste a linha divisória acima para conferir a precisão construtiva desde as intervenções civis pesadas até o acabamento e iluminação de alto padrão.
        </p>
      </div>

      {/* Obras Grid */}
      <div className="flex flex-col gap-4">
        {filteredObras.map((obra) => (
          <div
            key={obra.id}
            onClick={() => onSelectObra(obra)}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#dde9ff] flex flex-col cursor-pointer group hover:shadow-md transition-all"
          >
            <div className="relative w-full h-48 bg-slate-900">
              <img
                src={obra.imageUrl}
                alt={obra.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#000f22]/85 backdrop-blur-sm text-white text-[11px] flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  {obra.type === 'construcao' ? 'villa' : 'chair'}
                </span>
                <span>{obra.title}</span>
              </div>
              <div className={`absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md text-white text-[11px] font-bold shadow-sm ${
                obra.status === 'concluida' ? 'bg-green-600' : obra.type === 'reforma' ? 'bg-[#ee5b10]' : 'bg-[#3755c3]'
              }`}>
                {obra.status === 'concluida' ? '100% Entregue' : `${obra.progressPercentage}% Concluído`}
              </div>
              <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-medium backdrop-blur-sm">
                {obra.areaM2} m²
              </div>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0d1c2f]">{obra.currentPhase}</span>
                <span className="font-medium text-[#43474d]">{obra.expectedCompletion}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 bg-[#e6eeff] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    obra.status === 'concluida' ? 'bg-green-600' : obra.type === 'reforma' ? 'bg-[#ee5b10]' : 'bg-[#3755c3]'
                  }`}
                  style={{ width: `${obra.progressPercentage}%` }}
                />
              </div>

              {/* Breakdown */}
              <div className="flex items-center justify-between text-[11px] text-[#43474d] pt-0.5">
                {obra.breakdown.map((item, idx) => (
                  <span key={idx} className={item.color ? 'font-bold text-[#0d1c2f]' : ''}>
                    {item.label} {item.percentage}%
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Agendar Visita ao Canteiro */}
      <div className="bg-[#0a2540] text-white rounded-xl p-4 flex flex-col gap-2 shadow-md">
        <h4 className="font-bold text-base flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#ee5b10]">visibility</span>
          Quer visitar uma obra nossa em andamento?
        </h4>
        <p className="text-xs text-[#dde9ff] leading-relaxed">
          Levamos você para conhecer um canteiro ativo em Alphaville ou Jardins para checar a organização, limpeza da equipe e o rigor técnico das armações e acabamentos.
        </p>
        <a
          href={getWhatsAppUrl('Olá Eng. Carlos, gostaria de agendar uma visita com o Engenheiro para conhecer uma obra em andamento da Construtora Bragantina!')}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-11 mt-1 bg-[#ee5b10] hover:bg-[#d94e09] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">event</span>
          <span>Agendar Visita com o Engenheiro</span>
        </a>
      </div>
    </div>
  );
};
