import React from 'react';
import { ObraItem } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ObraDetailModalProps {
  obra: ObraItem | null;
  onClose: () => void;
  onOpenWhatsApp: (context: string) => void;
}

export const ObraDetailModal: React.FC<ObraDetailModalProps> = ({
  obra,
  onClose,
  onOpenWhatsApp
}) => {
  if (!obra) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#dde9ff] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image & Header */}
        <div className="relative w-full h-52 shrink-0 bg-slate-900">
          <img
            src={obra.imageUrl}
            alt={obra.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('aida-public')) {
                target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzmKx00ceWVKnZyacNdfzv5NQz6Kq_Bp28FkMfh6B8LOPUfPBcr-s1tLvq6rrXcCynrhd6KgFgvX_UBF1O1wTsgaI-xGYy0Ae9xaFi_tUu7aqwl6v6MVRs8e4c-K81gZV9qnpe7ht7m5R0j3otB46R3hCSMZtM8avutY7owvSHY6rx_DBprhUVwf4v6t8ZqIvm1toxRIzwwFYtcVOb_2fo842Il35pm-AOY83LVgPP9y4ij-oPu2weYw';
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-4">
            <div className="flex justify-between items-start">
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold text-white shadow-sm ${
                obra.status === 'concluida' ? 'bg-green-600' : 'bg-[#3755c3]'
              }`}>
                {obra.status === 'concluida' ? '100% Concluída' : `${obra.progressPercentage}% Concluído`}
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div>
              <span className="text-[11px] text-[#ffb599] font-bold uppercase tracking-wider block">
                {obra.location}
              </span>
              <h3 className="font-bold text-lg text-white leading-tight">
                {obra.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          {/* Progress bar if ongoing */}
          {obra.status === 'em_andamento' && (
            <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-[#dde9ff]">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-[#0d1c2f]">{obra.currentPhase}</span>
                <span className="font-medium text-[#43474d]">{obra.expectedCompletion}</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#3755c3] rounded-full transition-all duration-500"
                  style={{ width: `${obra.progressPercentage}%` }}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-[#dde9ff]/60 text-center">
                {obra.breakdown.map((b, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] text-[#43474d]">{b.label}</span>
                    <span className="text-xs font-bold text-[#0d1c2f]">{b.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-[#0d1c2f] mb-1">Sobre este Projeto</h4>
            <p className="text-xs text-[#43474d] leading-relaxed">
              {obra.description}
            </p>
          </div>

          {/* Key Specs */}
          <div>
            <h4 className="text-xs font-bold text-[#0d1c2f] mb-1.5">Destaques Construtivos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {obra.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-[#0d1c2f] bg-[#f8f9ff] p-2 rounded-lg border border-[#e6eeff]">
                  <span className="material-symbols-outlined text-[16px] text-green-600 shrink-0">check_circle</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f8f9ff] border-t border-[#e6eeff] flex flex-col gap-2">
          <a
            href={getWhatsAppUrl(`Olá Eng. Carlos, gostaria de solicitar uma estimativa similar à obra "${obra.title}" da Construtora Bragantina!`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full h-11 bg-[#ee5b10] hover:bg-[#d94e09] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Solicitar Estimativa Similar no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
