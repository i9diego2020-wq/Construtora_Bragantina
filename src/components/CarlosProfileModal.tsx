import React from 'react';
import { ASSETS } from '../data/mockData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface CarlosProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWhatsApp: () => void;
}

export const CarlosProfileModal: React.FC<CarlosProfileModalProps> = ({
  isOpen,
  onClose,
  onOpenWhatsApp
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#dde9ff] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Card */}
        <div className="bg-[#0a2540] text-white p-5 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="relative inline-block mx-auto mb-2">
            <img
              src={ASSETS.carlosAvatar}
              alt="Eng. Carlos Vieira"
              className="w-20 h-20 rounded-full object-cover ring-4 ring-white/30 mx-auto shadow-lg"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full ring-2 ring-[#0a2540]"></span>
          </div>

          <h3 className="font-bold text-lg text-white">Eng. Carlos Vieira</h3>
          <p className="text-xs text-[#dde9ff] font-medium mt-0.5">
            Responsável Técnico & Diretor de Engenharia
          </p>

          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="bg-[#3755c3] text-white text-[11px] px-2.5 py-0.5 rounded-full font-mono font-bold tracking-wide">
              CREA-SP 506982410-D
            </span>
            <span className="bg-green-500/20 text-green-300 text-[11px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              Ativo & Regular
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold text-[#3755c3] uppercase tracking-wider mb-1.5">
              Trajetória Profissional
            </h4>
            <p className="text-xs text-[#43474d] leading-relaxed">
              Graduado pela Escola Politécnica (POLI-USP) com mais de 18 anos de atuação na construção de casas do zero e reformas completas com rigor de engenharia e prazos cumpridos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="bg-[#f8f9ff] p-3 rounded-xl border border-[#dde9ff]">
              <span className="text-xl font-extrabold text-[#0a2540] block">+85</span>
              <span className="text-[11px] text-[#43474d] font-semibold">Casas Entregues</span>
            </div>
            <div className="bg-[#f8f9ff] p-3 rounded-xl border border-[#dde9ff]">
              <span className="text-xl font-extrabold text-[#ee5b10] block">0</span>
              <span className="text-[11px] text-[#43474d] font-semibold">Atrasos Não Previstos</span>
            </div>
            <div className="bg-[#f8f9ff] p-3 rounded-xl border border-[#dde9ff]">
              <span className="text-xl font-extrabold text-[#3755c3] block">100%</span>
              <span className="text-[11px] text-[#43474d] font-semibold">ART Emitida em Todas</span>
            </div>
            <div className="bg-[#f8f9ff] p-3 rounded-xl border border-[#dde9ff]">
              <span className="text-xl font-extrabold text-[#0a2540] block">5 Anos</span>
              <span className="text-[11px] text-[#43474d] font-semibold">Garantia Estrutural</span>
            </div>
          </div>

          <div className="bg-[#f8f9ff] p-3.5 rounded-xl border border-[#dde9ff]">
            <h4 className="text-xs font-bold text-[#0d1c2f] flex items-center gap-1.5 mb-1.5">
              <span className="material-symbols-outlined text-[18px] text-[#ee5b10]">handshake</span>
              Compromisso com o Cliente
            </h4>
            <p className="text-xs text-[#43474d] leading-relaxed">
              "Nossa missão na Construtora Bragantina é entregar a sua obra sem dor de cabeça. Orçamento fechado, visitas técnicas rigorosas, vídeo toda semana e respeito total ao seu investimento."
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-4 bg-[#f8f9ff] border-t border-[#e6eeff]">
          <a
            href={getWhatsAppUrl('Olá Eng. Carlos, gostaria de conversar diretamente sobre meu projeto de construção/reforma com a Construtora Bragantina!')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full h-11 bg-[#ee5b10] hover:bg-[#d94e09] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Conversar Diretamente com o Eng. Carlos no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
