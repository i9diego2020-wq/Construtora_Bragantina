import React, { useState } from 'react';
import { ASSETS } from '../data/mockData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  initialSubject
}) => {
  const [name, setName] = useState('');
  const [region, setRegion] = useState('São Paulo / Alphaville / Tamboré');
  const [projectType, setProjectType] = useState<'construcao' | 'reforma' | 'cafe'>(
    initialSubject?.toLowerCase().includes('reforma') ? 'reforma' : 'construcao'
  );
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const defaultMsg = `Olá, vim pelo app da Construtora Bragantina. Meu nome é ${name || '[Seu Nome]'} (${region}). Gostaria de conversar sobre: ${
    projectType === 'construcao'
      ? 'Construção de Casa do Zero (Turnkey)'
      : projectType === 'reforma'
      ? 'Reformas e Retrofit'
      : 'Tomar um café e avaliar terreno/projeto sem custo'
  }.${details ? ` Observações: ${details}` : ''}`;

  const whatsappUrl = getWhatsAppUrl(defaultMsg);

  const handleCopy = () => {
    navigator.clipboard.writeText(defaultMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-all animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-[#ffffff] rounded-t-2xl sm:rounded-2xl shadow-2xl border border-[#dde9ff] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0a2540] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={ASSETS.carlosAvatar}
                alt="Eng. Carlos Vieira"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white/50"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-[#0a2540]"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-[15px] leading-tight">Eng. Carlos Vieira</h3>
                <span className="text-[10px] bg-[#3755c3] text-white px-1.5 py-0.5 rounded font-mono font-bold">
                  CREA-SP
                </span>
              </div>
              <p className="text-[11px] text-[#dde9ff] leading-tight mt-0.5">
                Online agora • Resposta técnica em até 15 min
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          <div className="bg-[#eff4ff] p-3 rounded-xl border border-[#dde9ff] text-xs text-[#0d1c2f]">
            <p className="font-semibold text-[#3755c3] flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Atendimento Direto com Engenheiro
            </p>
            <p className="mt-1 text-[#43474d]">
              Você não fala com robô ou vendedor comum. Sua obra é avaliada tecnicamente desde o primeiro minuto.
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0d1c2f] mb-1">
              Seu Nome Completo
            </label>
            <input
              type="text"
              placeholder="Ex: Carlos Eduardo ou Dra. Juliana"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-11 px-3 text-sm bg-white rounded-xl border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-[#3755c3]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0d1c2f] mb-1">
              Local do Terreno ou Imóvel
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full h-11 px-3 text-sm bg-white rounded-xl border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-[#3755c3]"
            >
              <option value="Bragança Paulista / Atibaia / Região Bragantina">Bragança Paulista / Atibaia / Região</option>
              <option value="Alphaville / Barueri / Santana de Parnaíba">Alphaville / Tamboré</option>
              <option value="São Paulo - Jardins / Itaim / Pinheiros">São Paulo - Jardins / Itaim / Moema</option>
              <option value="Quinta da Baroneza / Fazenda Boa Vista / Interior">Condomínios Fechados / Interior SP</option>
              <option value="Granja Viana / Cotia">Granja Viana / Zona Oeste</option>
              <option value="Outra região de São Paulo">Outra localidade (SP)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0d1c2f] mb-1">
              Objetivo Principal
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setProjectType('construcao')}
                className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                  projectType === 'construcao'
                    ? 'bg-[#0a2540] text-white border-[#0a2540]'
                    : 'bg-white text-[#43474d] border-[#cbd5e1] hover:bg-slate-50'
                }`}
              >
                Construir do Zero
              </button>
              <button
                type="button"
                onClick={() => setProjectType('reforma')}
                className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                  projectType === 'reforma'
                    ? 'bg-[#0a2540] text-white border-[#0a2540]'
                    : 'bg-white text-[#43474d] border-[#cbd5e1] hover:bg-slate-50'
                }`}
              >
                Reforma / Retrofit
              </button>
              <button
                type="button"
                onClick={() => setProjectType('cafe')}
                className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                  projectType === 'cafe'
                    ? 'bg-[#0a2540] text-white border-[#0a2540]'
                    : 'bg-white text-[#43474d] border-[#cbd5e1] hover:bg-slate-50'
                }`}
              >
                Tomar um Café
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0d1c2f] mb-1">
              Detalhes adicionais (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Terreno com 450m² em condomínio fechado, pretendo iniciar em 60 dias..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full p-2.5 text-xs bg-white rounded-xl border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-[#3755c3]"
            />
          </div>

          {/* Message Preview */}
          <div className="bg-[#f8f9ff] p-3 rounded-xl border border-[#e6eeff]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-[#43474d] uppercase tracking-wider">
                Mensagem que será enviada
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-[11px] font-semibold text-[#3755c3] hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copied ? 'check' : 'content_copy'}
                </span>
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
            <p className="text-xs text-[#0d1c2f] italic bg-white p-2.5 rounded-lg border border-[#e2e8f0]">
              "{defaultMsg}"
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#e6eeff] bg-[#f8f9ff] flex flex-col gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full h-12 bg-[#ee5b10] hover:bg-[#d94e09] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.99] transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">chat</span>
            <span>Iniciar Conversa no WhatsApp</span>
          </a>
          <button
            onClick={onClose}
            className="w-full h-9 text-xs font-semibold text-[#43474d] hover:text-[#0d1c2f] transition-colors cursor-pointer"
          >
            Voltar ao Aplicativo
          </button>
        </div>
      </div>
    </div>
  );
};
