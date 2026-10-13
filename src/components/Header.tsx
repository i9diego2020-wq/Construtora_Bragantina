import React from 'react';
import { TabType } from '../types';
import { BragantinaLogo } from './BragantinaLogo';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  activeTab: TabType;
  onOpenWhatsApp: (context?: string) => void;
  onOpenCarlosProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onOpenWhatsApp,
  onOpenCarlosProfile
}) => {
  const titles: Record<TabType, string> = {
    inicio: 'Início',
    servicos: 'Serviços & Metodologia',
    obras: 'Obras & Acompanhamento',
    simulador: 'Simulador de Orçamento'
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe border-b border-[#e6eeff]/60">
      <div className="h-16 px-4 max-w-2xl mx-auto flex items-center justify-between gap-2">
        {/* Brand & Active Screen Name */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <BragantinaLogo size="md" />
          <div className="hidden xs:flex flex-col min-w-0 pl-1 border-l border-[#dde9ff]">
            <h1 className="text-[13px] text-[#0d1c2f] font-bold truncate leading-tight">
              {titles[activeTab]}
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href={getWhatsAppUrl('Olá, gostaria de entrar em contato com a Construtora Bragantina!')}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[44px] min-h-[44px] h-11 px-3.5 bg-[#ee5b10] text-white flex items-center justify-center gap-1.5 rounded-xl hover:bg-[#d94e09] active:scale-95 transition-all shadow-sm cursor-pointer"
            title="Falar no WhatsApp (11) 96593-9300"
          >
            <span className="material-symbols-outlined text-[19px]">chat</span>
            <span className="text-[12px] font-bold">Contato</span>
          </a>
        </div>
      </div>
    </header>
  );
};
