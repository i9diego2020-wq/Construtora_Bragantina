import React from 'react';

interface BragantinaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BragantinaLogo: React.FC<BragantinaLogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Modern Architectural Icon */}
      <div
        className={`${iconSizes[size]} rounded-lg bg-gradient-to-br from-[#0a2540] to-[#000f22] p-1.5 flex items-center justify-center shadow-sm shrink-0 border border-white/10`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Architectural roof structure & stylized 'B' / blueprint beam */}
          <path
            d="M5 24V8L16 3L27 8V24"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3V27"
            stroke="#ee5b10"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M5 16H27"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
          <path
            d="M16 16L27 24"
            stroke="#ee5b10"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 16L5 24"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col min-w-0">
        <span className="text-[12px] font-extrabold text-[#0a2540] uppercase tracking-wider leading-none">
          Construtora
        </span>
        <span className="text-[12px] font-extrabold text-[#ee5b10] uppercase tracking-widest leading-tight">
          Bragantina
        </span>
      </div>
    </div>
  );
};
