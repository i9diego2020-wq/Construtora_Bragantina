import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onChangeTab }) => {
  const tabs = [
    { id: 'inicio' as TabType, label: 'Início', icon: 'home' },
    { id: 'servicos' as TabType, label: 'Serviços', icon: 'architecture' },
    { id: 'obras' as TabType, label: 'Obras', icon: 'villa', badge: 'Ao vivo' },
    { id: 'simulador' as TabType, label: 'Simulador', icon: 'calculate' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-[#f8f9ff]/95 backdrop-blur-xl shadow-[0_-1px_12px_rgba(0,0,0,0.06)] border-t border-[#e6eeff]">
      <div className="flex justify-around items-center h-16 max-w-2xl mx-auto px-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onChangeTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative flex flex-col items-center justify-center min-w-[44px] min-h-[44px] w-20 h-full transition-colors cursor-pointer ${
                isActive
                  ? 'text-[#ee5b10] font-bold'
                  : 'text-[#43474d] hover:text-[#0d1c2f]'
              }`}
            >
              <div className="relative">
                <span className="material-symbols-outlined text-[24px]">
                  {tab.icon}
                </span>
                {tab.badge && (
                  <span className="absolute -top-1 -right-3 w-2 h-2 bg-[#ee5b10] rounded-full ring-2 ring-white"></span>
                )}
              </div>
              <span className={`text-[11px] mt-0.5 ${isActive ? 'font-bold text-[#ee5b10]' : 'font-semibold'}`}>
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute top-0 w-8 h-0.5 bg-[#ee5b10] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
