import React, { useState } from 'react';
import { SERVICOS_DATA, WORK_ROADMAP } from '../data/mockData';
import { TabType } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ServicosScreenProps {
  onNavigateTab: (tab: TabType) => void;
  onOpenWhatsApp: (context?: string) => void;
}

export const ServicosScreen: React.FC<ServicosScreenProps> = ({
  onNavigateTab,
  onOpenWhatsApp
}) => {
  const [selectedService, setSelectedService] = useState<string>('todos');

  const filteredServices = selectedService === 'todos'
    ? SERVICOS_DATA
    : SERVICOS_DATA.filter(s => s.id === selectedService);

  return (
    <div className="flex flex-col w-full px-4 py-6 gap-6">
      {/* Title Header with SEO */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] uppercase tracking-wider text-[#3755c3] font-bold">
            Especialidades Técnicas
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[11px] font-bold text-[#ee5b10] bg-[#fff0e8] px-2 py-0.5 rounded-full">
            Bragança Paulista, SP e Região
          </span>
        </div>
        <h1 className="text-[26px] leading-tight text-[#0d1c2f] font-extrabold">
          Construção de Casas do Zero & Reformas
        </h1>
        <p className="text-[14px] text-[#43474d] leading-relaxed">
          Do preparo do terreno, fundações e alvenaria até pintura, porcelanatos e acabamentos finos. Obras residenciais e comerciais completas em Bragança Paulista e região com contrato a preço fechado.
        </p>
      </div>

      {/* Service Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        <button
          onClick={() => setSelectedService('todos')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
            selectedService === 'todos'
              ? 'bg-[#0a2540] text-white shadow-sm'
              : 'bg-white text-[#43474d] border border-[#dde9ff] hover:bg-slate-50'
          }`}
        >
          Todas as Áreas
        </button>
        <button
          onClick={() => setSelectedService('construcao-zero')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
            selectedService === 'construcao-zero'
              ? 'bg-[#0a2540] text-white shadow-sm'
              : 'bg-white text-[#43474d] border border-[#dde9ff] hover:bg-slate-50'
          }`}
        >
          Construção do Zero
        </button>
        <button
          onClick={() => setSelectedService('reformas-retrofit')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
            selectedService === 'reformas-retrofit'
              ? 'bg-[#0a2540] text-white shadow-sm'
              : 'bg-white text-[#43474d] border border-[#dde9ff] hover:bg-slate-50'
          }`}
        >
          Reformas & Retrofit
        </button>
        <button
          onClick={() => setSelectedService('projetos-executivos')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
            selectedService === 'projetos-executivos'
              ? 'bg-[#0a2540] text-white shadow-sm'
              : 'bg-white text-[#43474d] border border-[#dde9ff] hover:bg-slate-50'
          }`}
        >
          Projetos BIM
        </button>
      </div>

      {/* Services List Cards */}
      <div className="flex flex-col gap-4">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl p-4 shadow-sm border border-[#dde9ff] flex flex-col gap-3 relative"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-11 h-11 rounded-xl ${service.iconBg} ${service.iconColor} flex items-center justify-center shrink-0 shadow-sm`}>
                  <span className="material-symbols-outlined text-[24px]">
                    {service.iconName}
                  </span>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#0d1c2f] leading-snug">
                    {service.title}
                  </h3>
                  <span className="text-[12px] text-[#3755c3] font-semibold">
                    {service.subtitle}
                  </span>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded ${service.tagBg} ${service.tagColor} text-[11px] font-bold`}>
                {service.tag}
              </span>
            </div>

            <p className="text-[14px] text-[#43474d] leading-relaxed">
              {service.description}
            </p>

            {/* Deliverables Box */}
            <div className="bg-[#f8f9ff] p-3.5 rounded-xl border border-[#e6eeff] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#0a2540] uppercase tracking-wider block">
                  Itens Inclusos no Contrato:
                </span>
                <span className="text-[10px] font-bold bg-[#e6eeff] text-[#3755c3] px-2 py-0.5 rounded-full">
                  {service.deliverables.length} itens inclusos
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 pt-1">
                {service.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-[#0d1c2f]">
                    <span className="material-symbols-outlined text-[15px] text-green-600 shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="leading-snug">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => onNavigateTab('simulador')}
                className="h-10 bg-[#0a2540] hover:bg-[#000f22] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">calculate</span>
                <span>Simular Custo</span>
              </button>
              <a
                href={getWhatsAppUrl(`Olá Eng. Carlos, gostaria de tirar uma dúvida sobre o serviço de ${service.title} da Construtora Bragantina.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 bg-[#ee5b10] hover:bg-[#d94e09] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>Tirar Dúvida</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* A Jornada da Obra: 6 Etapas Claras */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-[#dde9ff] flex flex-col gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-[#3755c3] font-bold">
            Metodologia Construtiva
          </span>
          <h3 className="text-[20px] font-bold text-[#0d1c2f] leading-snug">
            A Jornada da Obra: Do Terreno à Chave na Mão
          </h3>
          <p className="text-xs text-[#43474d] mt-1">
            Cada fase possui checklist auditável assinado pelo responsável técnico.
          </p>
        </div>

        <div className="space-y-3">
          {WORK_ROADMAP.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f8f9ff] transition-colors border border-transparent hover:border-[#dde9ff]">
              <div className="w-8 h-8 rounded-lg bg-[#0a2540] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                {item.step}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[#0d1c2f]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#43474d] mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Garantias & Documentações Regulatórias */}
      <div className="bg-[#eff4ff] rounded-xl p-4 border border-[#dde9ff] flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[22px] text-[#3755c3]">
            policy
          </span>
          <h4 className="text-sm font-bold text-[#0d1c2f]">
            Segurança Jurídica & Documental Inclusa
          </h4>
        </div>
        <p className="text-xs text-[#43474d] leading-relaxed">
          Toda obra conta com emissão de ART CREA, apólice de Seguro de Riscos de Engenharia, CNO (Cadastro Nacional de Obras) junto à Receita Federal e assessoria completa para obtenção do Habite-se final e averbação no Cartório de Imóveis.
        </p>
      </div>

      {/* Área de Atuação Regional - SEO Local */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-[#dde9ff] flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[22px] text-[#ee5b10]">
            location_on
          </span>
          <div>
            <h3 className="text-sm font-bold text-[#0d1c2f]">
              Atuação em Bragança Paulista, SP e Região
            </h3>
            <span className="text-[11px] text-[#43474d]">
              Atendimento técnico em canteiros de obras e condomínios fechados
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {[
            'Bragança Paulista',
            'Cond. Euroville',
            'Cond. Quinta da Baroneza',
            'Portal das Águas',
            'Jardim das Palmeiras',
            'Atibaia',
            'Piracaia',
            'Itatiba',
            'Extrema (MG)',
            'Joanópolis',
            'Jarinu',
            'Pedra Bela'
          ].map((cidade, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold bg-[#f0f4ff] text-[#0a2540] border border-[#d6e4ff] px-2.5 py-1 rounded-lg"
            >
              {cidade}
            </span>
          ))}
        </div>
      </div>

      {/* FAQ / Dúvidas Frequentes - SEO On-Page */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-[#dde9ff] flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[22px] text-[#3755c3]">
            help
          </span>
          <h3 className="text-[16px] font-bold text-[#0d1c2f]">
            Dúvidas Frequentes sobre Construção e Reformas
          </h3>
        </div>

        <div className="space-y-3 pt-1 text-xs">
          <div className="p-3 rounded-xl bg-[#f8f9ff] border border-[#e6eeff]">
            <strong className="block text-[#0a2540] font-bold mb-1">
              Quais serviços estão inclusos na Construção de Casa do Zero?
            </strong>
            <p className="text-[#43474d] leading-relaxed">
              O contrato inclui todos os 28 serviços essenciais: preparação do terreno, escavações para fundação, concretagem estrutural, paredes de alvenaria, vergas e contravergas, cintas, vigas, pilares, laje com escoramento e desescoramento, escadas conforme projeto, chapisco, reboco/emboço, impermeabilização de área molhada e baldrame, contrapiso, infraestruturas elétrica, hidráulica e sanitária, assentamento de revestimentos cerâmicos e porcelanatos, áreas molhadas, louças, metais, batentes, contramarco, pingadeiras, soleiras e instalação de quadros de energia.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#f8f9ff] border border-[#e6eeff]">
            <strong className="block text-[#0a2540] font-bold mb-1">
              Quais são as especialidades atendidas em Reformas & Retrofit?
            </strong>
            <p className="text-[#43474d] leading-relaxed">
              Realizamos aplicação e troca de revestimentos, pisos e porcelanatos com nivelamento a laser, pintura completa residencial e comercial, revisão e adequação de rede elétrica, forro de gesso acartonado e drywall, jardinagem e paisagismo, regularização de contrapiso e eliminação definitiva de vazamentos e infiltrações.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#f8f9ff] border border-[#e6eeff]">
            <strong className="block text-[#0a2540] font-bold mb-1">
              Como funciona o modelo de Preço Fechado em Bragança Paulista?
            </strong>
            <p className="text-[#43474d] leading-relaxed">
              Baseamo-nos no CUB oficial do SindusCon-SP e na planilha orçamentária executiva. O valor global do contrato é fixado para toda a obra, garantindo que você não tenha surpresas nem aditivos financeiros imprevistos até a entrega das chaves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
