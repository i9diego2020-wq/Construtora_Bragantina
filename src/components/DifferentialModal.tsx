import React from 'react';
import { DifferentialItem } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface DifferentialModalProps {
  item: DifferentialItem | null;
  onClose: () => void;
  onOpenWhatsApp: (context: string) => void;
}

export const DifferentialModal: React.FC<DifferentialModalProps> = ({
  item,
  onClose,
  onOpenWhatsApp
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#dde9ff] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#0a2540] text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-3">
            <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
          </div>

          <span className="text-[11px] font-bold text-[#b0c8eb] uppercase tracking-wider block">
            Segurança Contratual Blindada
          </span>
          <h3 className="font-bold text-lg text-white mt-0.5">
            {item.title}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold text-[#0d1c2f] mb-1">
              Como funciona na prática?
            </h4>
            <p className="text-xs text-[#43474d] leading-relaxed">
              {item.fullDesc}
            </p>
          </div>

          <div className="bg-[#f8f9ff] p-3.5 rounded-xl border border-[#dde9ff]">
            <span className="text-[11px] font-bold text-[#3755c3] uppercase tracking-wider flex items-center gap-1 mb-1">
              <span className="material-symbols-outlined text-[14px]">gavel</span>
              Fundamentação Jurídica & Contratual
            </span>
            <p className="text-xs text-[#0d1c2f] font-medium">
              {item.legalBasis}
            </p>
          </div>

          <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-[#dde9ff]">
            <span className="text-[11px] font-bold text-[#ee5b10] uppercase tracking-wider flex items-center gap-1 mb-1">
              <span className="material-symbols-outlined text-[14px]">shield</span>
              Seu Benefício Real
            </span>
            <p className="text-xs text-[#0d1c2f]">
              {item.clientBenefit}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-4 bg-[#f8f9ff] border-t border-[#e6eeff] flex flex-col gap-2">
          <a
            href={getWhatsAppUrl(`Olá Eng. Carlos, gostaria de ver uma minuta de contrato com a cláusula de ${item.title} da Construtora Bragantina.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full h-11 bg-[#0a2540] hover:bg-[#000f22] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Solicitar Modelo de Contrato no WhatsApp</span>
          </a>
          <button
            onClick={onClose}
            className="w-full h-8 text-xs font-semibold text-[#43474d] hover:text-[#0d1c2f] cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
