import React, { useState, useRef, useEffect, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes: Em Obras',
  afterLabel = 'Depois: Concluído'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden select-none cursor-ew-resize border border-[#dde9ff] shadow-sm bg-slate-900"
      onMouseDown={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After image (base) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[11px] font-bold text-white z-10 pointer-events-none">
        {afterLabel}
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
            maxWidth: 'none'
          }}
        />
        <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-[#ee5b10]/90 backdrop-blur-sm text-[11px] font-bold text-white z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Divider Bar */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg border border-slate-300 flex items-center justify-center text-[#0a2540]">
          <span className="material-symbols-outlined text-[16px]">swap_horiz</span>
        </div>
      </div>

      {/* Hint overlay */}
      <div className="absolute top-3 inset-x-0 flex justify-center pointer-events-none z-10">
        <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] text-white font-medium flex items-center gap-1">
          <span className="material-symbols-outlined text-[12px]">touch_app</span>
          Arraste para comparar Antes & Depois
        </span>
      </div>
    </div>
  );
};
