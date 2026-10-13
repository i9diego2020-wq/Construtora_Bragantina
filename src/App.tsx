import { useState } from 'react';
import { TabType, DifferentialItem, ObraItem } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './screens/HomeScreen';
import { ServicosScreen } from './screens/ServicosScreen';
import { ObrasScreen } from './screens/ObrasScreen';
import { SimuladorScreen } from './screens/SimuladorScreen';
import { WhatsAppModal } from './components/WhatsAppModal';
import { CarlosProfileModal } from './components/CarlosProfileModal';
import { DifferentialModal } from './components/DifferentialModal';
import { ObraDetailModal } from './components/ObraDetailModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppContext, setWhatsAppContext] = useState<string>('');
  const [isCarlosProfileOpen, setIsCarlosProfileOpen] = useState(false);
  const [selectedDifferential, setSelectedDifferential] = useState<DifferentialItem | null>(null);
  const [selectedObra, setSelectedObra] = useState<ObraItem | null>(null);
  const [isMobileFrameMode, setIsMobileFrameMode] = useState(false);

  const handleOpenWhatsApp = (context?: string) => {
    setWhatsAppContext(context || '');
    setIsWhatsAppOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center">
      {/* Optional Top Device View Toggle Bar for desktop testing */}
      <div className="hidden lg:flex items-center justify-between w-full max-w-4xl px-4 py-2 bg-white/80 backdrop-blur-md border-b border-slate-200 text-xs text-[#43474d] z-40">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="font-semibold text-[#0d1c2f]">Construtora Bragantina</span>
          <span className="text-slate-400">|</span>
          <span>Construção de Casas do Zero e Reformas</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMobileFrameMode(!isMobileFrameMode)}
            className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">
              {isMobileFrameMode ? 'fullscreen' : 'smartphone'}
            </span>
            <span>{isMobileFrameMode ? 'Modo Responsivo' : 'Visualização Celular'}</span>
          </button>
        </div>
      </div>

      {/* Main Container Shell */}
      <div
        className={`w-full min-h-screen bg-[#f8f9ff] text-[#0d1c2f] flex flex-col relative transition-all duration-300 ${
          isMobileFrameMode
            ? 'max-w-[440px] my-4 rounded-3xl shadow-2xl border-8 border-slate-900 overflow-hidden min-h-[900px]'
            : 'max-w-2xl shadow-sm'
        }`}
      >
        {/* Fixed Header */}
        <Header
          activeTab={activeTab}
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenCarlosProfile={() => setIsCarlosProfileOpen(true)}
        />

        {/* Scrollable Main Content */}
        <main className="flex-1 pt-16 pb-24 w-full">
          {activeTab === 'inicio' && (
            <HomeScreen
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenWhatsApp={handleOpenWhatsApp}
              onOpenCarlosProfile={() => setIsCarlosProfileOpen(true)}
              onSelectDifferential={(diff) => setSelectedDifferential(diff)}
              onSelectObra={(obra) => setSelectedObra(obra)}
            />
          )}

          {activeTab === 'servicos' && (
            <ServicosScreen
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenWhatsApp={handleOpenWhatsApp}
            />
          )}

          {activeTab === 'obras' && (
            <ObrasScreen
              onSelectObra={(obra) => setSelectedObra(obra)}
              onOpenWhatsApp={handleOpenWhatsApp}
            />
          )}

          {activeTab === 'simulador' && (
            <SimuladorScreen
              onOpenWhatsApp={handleOpenWhatsApp}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
        </main>

        {/* Fixed Bottom Navigation */}
        <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />

        {/* Interactive Modals */}
        <WhatsAppModal
          isOpen={isWhatsAppOpen}
          onClose={() => setIsWhatsAppOpen(false)}
          initialSubject={whatsAppContext}
        />

        <CarlosProfileModal
          isOpen={isCarlosProfileOpen}
          onClose={() => setIsCarlosProfileOpen(false)}
          onOpenWhatsApp={() => {
            setIsCarlosProfileOpen(false);
            handleOpenWhatsApp('Contato direto com Eng. Carlos Vieira');
          }}
        />

        <DifferentialModal
          item={selectedDifferential}
          onClose={() => setSelectedDifferential(null)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        <ObraDetailModal
          obra={selectedObra}
          onClose={() => setSelectedObra(null)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </div>
    </div>
  );
}
