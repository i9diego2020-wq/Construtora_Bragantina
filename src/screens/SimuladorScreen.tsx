import React, { useState, useMemo } from 'react';
import { TabType } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface SimuladorScreenProps {
  onOpenWhatsApp: (context?: string) => void;
  onNavigateTab: (tab: TabType) => void;
}

export const SimuladorScreen: React.FC<SimuladorScreenProps> = ({
  onOpenWhatsApp
}) => {
  const [tipo, setTipo] = useState<'construcao' | 'reforma'>('construcao');
  const [area, setArea] = useState<number>(380);
  const [padrao, setPadrao] = useState<'premium' | 'luxo' | 'ultra_luxo'>('luxo');
  const [topografia, setTopografia] = useState<'plano' | 'moderado' | 'acentuado'>('plano');
  const [copied, setCopied] = useState(false);

  // Valores Oficiais do CUB/m² SindusCon-SP para Bragança Paulista e Região (NBR 12.721)
  const CUB_OFICIAL = {
    R1_NORMAL: 2690.33, // R1-N Unifamiliar Normal
    R1_ALTO: 3255.86,   // R1-A Unifamiliar Alto
    R1_BAIXO: 2180.00   // R1-B Unifamiliar Básico
  };

  // Lógica de cálculo baseada estritamente no CUB Oficial de Bragança Paulista / SindusCon-SP
  const calculation = useMemo(() => {
    let baseM2 = 0;
    let baseMonths = 0;
    let referenciaCUB = '';

    if (tipo === 'construcao') {
      if (padrao === 'premium') {
        baseM2 = CUB_OFICIAL.R1_NORMAL; // R$ 2.690,33
        referenciaCUB = 'CUB SindusCon-SP R1-N (Padrão Normal)';
      } else if (padrao === 'luxo') {
        baseM2 = CUB_OFICIAL.R1_ALTO; // R$ 3.255,86
        referenciaCUB = 'CUB SindusCon-SP R1-A (Padrão Superior)';
      } else {
        baseM2 = CUB_OFICIAL.R1_ALTO * 1.16; // CUB R1-A com projetos executivos e infraestrutura completa
        referenciaCUB = 'CUB SindusCon-SP R1-A + Gestão Turnkey';
      }

      // Fator de topografia
      if (topografia === 'moderado') baseM2 *= 1.06;
      if (topografia === 'acentuado') baseM2 *= 1.12;

      // Prazo estimado em meses
      if (area <= 200) baseMonths = 9;
      else if (area <= 400) baseMonths = 12;
      else if (area <= 700) baseMonths = 15;
      else baseMonths = 18;
    } else {
      // Reforma & Retrofit proporcional ao CUB de Bragança Paulista
      if (padrao === 'premium') {
        baseM2 = 1250; // Acabamentos, pintura e forro de gesso
        referenciaCUB = 'Proporcional CUB (Pintura, Gesso e Revestimentos)';
      } else if (padrao === 'luxo') {
        baseM2 = 1690; // Elétrica, pisos, contrapiso, jardinagem
        referenciaCUB = 'Proporcional CUB (Elétrica, Porcelanatos, Contrapiso)';
      } else {
        baseM2 = 2150; // Reforma geral com quebra de alvenaria e vazamentos
        referenciaCUB = 'Proporcional CUB (Reforma Estrutural Completa)';
      }

      if (area <= 150) baseMonths = 4;
      else if (area <= 350) baseMonths = 6;
      else baseMonths = 8;
    }

    const valorM2 = Math.round(baseM2);
    const valorTotal = Math.round(valorM2 * area);

    // Distribuição percentual das etapas construtivas
    const etapas = tipo === 'construcao' ? [
      { nome: 'Fundação, Solo & Contenções', pct: 16, valor: Math.round(valorTotal * 0.16) },
      { nome: 'Estrutura, Pilares & Lajes', pct: 22, valor: Math.round(valorTotal * 0.22) },
      { nome: 'Infra Elétrica, Hidro & Sanitária', pct: 20, valor: Math.round(valorTotal * 0.20) },
      { nome: 'Esquadrias, Batentes & Contramarcos', pct: 15, valor: Math.round(valorTotal * 0.15) },
      { nome: 'Pisos, Porcelanatos & Revestimentos', pct: 22, valor: Math.round(valorTotal * 0.22) },
      { nome: 'Gestão Técnica, ART & Alvarás', pct: 5, valor: Math.round(valorTotal * 0.05) },
    ] : [
      { nome: 'Demolição Cuidadosa & Limpeza', pct: 12, valor: Math.round(valorTotal * 0.12) },
      { nome: 'Contra Piso & Regularizações', pct: 15, valor: Math.round(valorTotal * 0.15) },
      { nome: 'Elétrica, Iluminação & Quadros', pct: 22, valor: Math.round(valorTotal * 0.22) },
      { nome: 'Pisos, Porcelanatos & Revestimentos', pct: 26, valor: Math.round(valorTotal * 0.26) },
      { nome: 'Pintura, Forro de Gesso & Drywall', pct: 15, valor: Math.round(valorTotal * 0.15) },
      { nome: 'Jardinagem & Correção de Vazamentos', pct: 10, valor: Math.round(valorTotal * 0.10) },
    ];

    return {
      valorM2,
      valorTotal,
      meses: baseMonths,
      etapas,
      referenciaCUB
    };
  }, [tipo, area, padrao, topografia]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  const shareSummary = `Olá! Fiz uma simulação demonstrativa no app da Construtora Bragantina baseada no CUB Oficial de Bragança Paulista:
- Tipo: ${tipo === 'construcao' ? 'Construção de Casa do Zero (Turnkey)' : 'Reformas e Retrofit'}
- Área: ${area} m²
- Padrão: ${padrao === 'premium' ? 'Normal / CUB R1-N' : padrao === 'luxo' ? 'Superior / CUB R1-A' : 'Completo Turnkey'}
${tipo === 'construcao' ? `- Terreno: ${topografia === 'plano' ? 'Plano' : topografia === 'moderado' ? 'Aclive/Declive Moderado' : 'Desnível Acentuado'}\n` : ''}- Estimativa Total: ${formatCurrency(calculation.valorTotal)} (Média de ${formatCurrency(calculation.valorM2)}/m²)
- Referência: ${calculation.referenciaCUB}
- Prazo Estimado: ${calculation.meses} meses
*(Valores apenas para efeito de simulação demonstrativa)*

Gostaria de conversar com um especialista para analisar o meu projeto.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full px-4 py-6 gap-5">
      {/* Title Header */}
      <div className="flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-wider text-[#3755c3] font-bold">
          Engenharia de Custos • Bragança Paulista
        </span>
        <h2 className="text-[26px] leading-tight text-[#0d1c2f] font-extrabold">
          Simulador de Orçamento
        </h2>
        <p className="text-[14px] text-[#43474d] leading-relaxed">
          Cálculo fundamentado no <strong>CUB Oficial do SindusCon-SP</strong> (Custo Unitário Básico) para Bragança Paulista e região. <span className="text-amber-800 font-semibold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 text-xs inline-block mt-0.5">Valores apenas para efeito de simulação demonstrativa.</span>
        </p>
      </div>

      {/* Banner Informativo: Valores Apenas Demonstrativos */}
      <div className="bg-amber-50 border border-amber-200/90 rounded-xl p-3.5 flex items-start gap-3 text-amber-950 shadow-xs">
        <span className="material-symbols-outlined text-amber-600 text-[22px] shrink-0 mt-0.5">info</span>
        <div className="text-xs leading-relaxed space-y-0.5">
          <strong className="block text-amber-900 font-bold text-[13px]">
            Aviso: Valores Apenas para Simulação Demonstrativa
          </strong>
          <p className="text-amber-800">
            Os valores, prazos e percentuais apresentados neste simulador são <strong>meramente demonstrativos</strong> para planejamento inicial. A proposta final e oficial é consolidada após visita técnica ao terreno, sondagem de solo e aprovação dos projetos de arquitetura e engenharia.
          </p>
        </div>
      </div>

      {/* Box de Transparência do CUB Bragança Paulista */}
      <div className="bg-[#eff4ff] border border-[#dde9ff] rounded-xl p-3 flex flex-col gap-1.5 text-xs">
        <div className="flex items-center gap-1.5 text-[#3755c3] font-bold">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span>Índice CUB SindusCon-SP Vigente (Bragança Paulista):</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[#0d1c2f] pt-0.5">
          <div className="bg-white p-2 rounded-lg border border-[#dde9ff]">
            <span className="text-[10px] text-[#43474d] block font-medium">Padrão Normal (R1-N)</span>
            <span className="text-sm font-bold text-[#0a2540]">R$ 2.690,33 / m²</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-[#dde9ff]">
            <span className="text-[10px] text-[#43474d] block font-medium">Padrão Superior (R1-A)</span>
            <span className="text-sm font-bold text-[#ee5b10]">R$ 3.255,86 / m²</span>
          </div>
        </div>
        <span className="text-[10px] text-[#43474d] italic">
          * Fonte oficial SindusCon-SP / NBR 12.721 aplicável à Região Bragantina e Interior de SP.
        </span>
      </div>

      {/* Simulator Inputs Card */}
      <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-[#dde9ff] flex flex-col gap-4">
        {/* Step 1: Tipo de Obra */}
        <div>
          <label className="block text-xs font-bold text-[#0d1c2f] mb-2 uppercase tracking-wide">
            1. Tipo de Intervenção
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setTipo('construcao')}
              className={`p-3 rounded-xl border flex flex-col items-center text-center gap-1 transition-all cursor-pointer ${
                tipo === 'construcao'
                  ? 'bg-[#0a2540] text-white border-[#0a2540] shadow-sm'
                  : 'bg-[#f8f9ff] text-[#43474d] border-[#dde9ff] hover:bg-slate-50'
              }`}
            >
              <span className="material-symbols-outlined text-[24px]">foundation</span>
              <span className="text-xs font-bold">Construção do Zero</span>
              <span className="text-[10px] opacity-80">Do terreno à chave</span>
            </button>
            <button
              onClick={() => setTipo('reforma')}
              className={`p-3 rounded-xl border flex flex-col items-center text-center gap-1 transition-all cursor-pointer ${
                tipo === 'reforma'
                  ? 'bg-[#0a2540] text-white border-[#0a2540] shadow-sm'
                  : 'bg-[#f8f9ff] text-[#43474d] border-[#dde9ff] hover:bg-slate-50'
              }`}
            >
              <span className="material-symbols-outlined text-[24px]">architecture</span>
              <span className="text-xs font-bold">Reforma & Retrofit</span>
              <span className="text-[10px] opacity-80">Alto padrão / Obra limpa</span>
            </button>
          </div>
        </div>

        {/* Step 2: Metragem */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-[#0d1c2f] uppercase tracking-wide">
              2. Área Construída / Reformada
            </label>
            <span className="text-base font-extrabold text-[#3755c3]">
              {area} m²
            </span>
          </div>

          <input
            type="range"
            min="100"
            max="1200"
            step="10"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full h-2 bg-[#dde9ff] rounded-lg appearance-none cursor-pointer accent-[#ee5b10]"
          />

          {/* Quick presets */}
          <div className="flex justify-between gap-1 mt-2">
            {[180, 280, 380, 520, 800].map((preset) => (
              <button
                key={preset}
                onClick={() => setArea(preset)}
                className={`px-2 py-1 text-[11px] font-semibold rounded-md transition-colors cursor-pointer ${
                  area === preset
                    ? 'bg-[#3755c3] text-white'
                    : 'bg-[#f8f9ff] text-[#43474d] hover:bg-[#e6eeff]'
                }`}
              >
                {preset}m²
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Padrão Construtivo */}
        <div>
          <label className="block text-xs font-bold text-[#0d1c2f] mb-2 uppercase tracking-wide">
            3. Padrão Construtivo (Referência CUB SindusCon-SP)
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setPadrao('premium')}
              className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                padrao === 'premium'
                  ? 'bg-[#0a2540] text-white border-[#0a2540] shadow-sm'
                  : 'bg-[#f8f9ff] text-[#43474d] border-[#dde9ff] hover:bg-slate-50'
              }`}
            >
              <span className="text-xs font-bold block">
                {tipo === 'construcao' ? 'Normal (R1-N)' : 'Acabamentos'}
              </span>
              <span className="text-[10px] opacity-75">
                {tipo === 'construcao' ? 'R$ 2.690/m² CUB' : 'R$ 1.250/m²'}
              </span>
            </button>
            <button
              onClick={() => setPadrao('luxo')}
              className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                padrao === 'luxo'
                  ? 'bg-[#0a2540] text-white border-[#0a2540] shadow-sm'
                  : 'bg-[#f8f9ff] text-[#43474d] border-[#dde9ff] hover:bg-slate-50'
              }`}
            >
              <span className="text-xs font-bold block">
                {tipo === 'construcao' ? 'Superior (R1-A)' : 'Reforma Geral'}
              </span>
              <span className="text-[10px] opacity-75">
                {tipo === 'construcao' ? 'R$ 3.256/m² CUB' : 'R$ 1.690/m²'}
              </span>
            </button>
            <button
              onClick={() => setPadrao('ultra_luxo')}
              className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                padrao === 'ultra_luxo'
                  ? 'bg-[#0a2540] text-white border-[#0a2540] shadow-sm'
                  : 'bg-[#f8f9ff] text-[#43474d] border-[#dde9ff] hover:bg-slate-50'
              }`}
            >
              <span className="text-xs font-bold block">
                {tipo === 'construcao' ? 'Turnkey Completo' : 'Estrutural'}
              </span>
              <span className="text-[10px] opacity-75">
                {tipo === 'construcao' ? 'R$ 3.777/m² Gestão' : 'R$ 2.150/m²'}
              </span>
            </button>
          </div>
        </div>

        {/* Step 4: Topografia (para construção) */}
        {tipo === 'construcao' && (
          <div>
            <label className="block text-xs font-bold text-[#0d1c2f] mb-2 uppercase tracking-wide">
              4. Perfil Topográfico do Terreno
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setTopografia('plano')}
                className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                  topografia === 'plano'
                    ? 'bg-[#0a2540] text-white border-[#0a2540]'
                    : 'bg-[#f8f9ff] text-[#43474d] border-[#dde9ff]'
                }`}
              >
                <span className="text-xs font-bold block">Plano</span>
                <span className="text-[10px] opacity-75">Fator 1.0</span>
              </button>
              <button
                onClick={() => setTopografia('moderado')}
                className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                  topografia === 'moderado'
                    ? 'bg-[#0a2540] text-white border-[#0a2540]'
                    : 'bg-[#f8f9ff] text-[#43474d] border-[#dde9ff]'
                }`}
              >
                <span className="text-xs font-bold block">Aclive Leve</span>
                <span className="text-[10px] opacity-75">+6% contenção</span>
              </button>
              <button
                onClick={() => setTopografia('acentuado')}
                className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                  topografia === 'acentuado'
                    ? 'bg-[#0a2540] text-white border-[#0a2540]'
                    : 'bg-[#f8f9ff] text-[#43474d] border-[#dde9ff]'
                }`}
              >
                <span className="text-xs font-bold block">Desnível Alto</span>
                <span className="text-[10px] opacity-75">+12% arrimos</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Results Card */}
      <div className="bg-[#0a2540] text-white rounded-xl p-5 shadow-lg flex flex-col gap-4 border border-[#dde9ff]/20">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-[#b0c8eb] uppercase tracking-wider font-bold">
                Resultado da Estimativa (CUB Bragança Paulista)
              </span>
              <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[9px] font-bold uppercase tracking-wider">
                Simulação Demonstrativa
              </span>
            </div>
            <span className="text-xs text-[#dde9ff]">
              {calculation.referenciaCUB}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-300 text-[10px] font-bold">
            Preço Fechado
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white block tracking-tight">
              {formatCurrency(calculation.valorTotal)}
            </span>
            <span className="text-xs text-[#dde9ff] mt-0.5 block">
              Média de <strong className="text-white">{formatCurrency(calculation.valorM2)}</strong> por m²
            </span>
            <span className="text-[11px] text-[#ffd6c4] mt-1 block">
              * Valores meramente demonstrativos para simulação inicial
            </span>
          </div>

          <div className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/15 w-max">
            <span className="text-[11px] text-[#b0c8eb] block">Prazo Estimado</span>
            <span className="text-sm font-bold text-white">
              {calculation.meses} meses de obra
            </span>
          </div>
        </div>

        {/* Breakdown de Etapas */}
        <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#ffb599] font-bold uppercase tracking-wider block">
              Distribuição Físico-Financeira das Etapas:
            </span>
            <span className="text-[10px] text-[#b0c8eb] italic">
              Demonstrativo
            </span>
          </div>
          <div className="space-y-1.5">
            {calculation.etapas.map((etapa, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs text-[#dde9ff]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ee5b10]"></span>
                  <span>{etapa.nome}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-mono font-semibold">
                    {formatCurrency(etapa.valor)}
                  </span>
                  <span className="text-[10px] text-[#b0c8eb] w-8 text-right">
                    {etapa.pct}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-2">
          <a
            href={getWhatsAppUrl(shareSummary)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 bg-[#ee5b10] hover:bg-[#d94e09] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all active:scale-[0.99]"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Conversar com Especialista</span>
          </a>

          <button
            onClick={handleCopy}
            className="w-full h-10 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Resumo Copiado para a Área de Transferência!' : 'Copiar Resumo da Simulação'}</span>
          </button>
        </div>
      </div>

      {/* Nota de Engenharia Legal e CUB */}
      <div className="bg-[#f8f9ff] p-4 rounded-xl border border-[#dde9ff] text-xs text-[#43474d] leading-relaxed space-y-2">
        <strong className="text-[#0d1c2f] block text-[13px]">
          Sobre o CUB/m² de Bragança Paulista e o Modelo de Preço Fechado:
        </strong>
        <p>
          O <strong>CUB (Custo Unitário Básico)</strong> é o indicador oficial da construção civil regulamentado pela Lei Federal nº 4.591/64 e calculado mensalmente pelo <strong>SindusCon-SP</strong> para o Estado de São Paulo e Região Bragantina.
        </p>
        <p>
          Na Construtora Bragantina, utilizamos o CUB oficial como base de cálculo transparente e convertemos seu orçamento em <strong>Contrato de Empreitada Global a Preço Fixo</strong>: os custos de mão de obra, insumos e variações de mercado são de responsabilidade da construtora, garantindo que você não tenha surpresas financeiras até a entrega das chaves.
        </p>
        <p className="text-[11px] text-[#555a64] pt-1.5 border-t border-[#dde9ff]">
          <strong>Aviso de Simulação Demonstrativa:</strong> Os valores, índices e prazos calculados neste aplicativo têm caráter estritamente demonstrativo e orientativo para simulação inicial, não configurando proposta contratual ou garantia de preço sem laudo técnico. O orçamento executivo formal e vinculante é elaborado exclusivamente após visita técnica presencial ao terreno, sondagem geotécnica e projetos compatibilizados.
        </p>
      </div>
    </div>
  );
};
