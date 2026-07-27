'use client';

import React from 'react';

/** Lotus (padma) — signature Odisha Patachitra bloom */
export const LotusMotif: React.FC<{
  className?: string;
  size?: number;
  tone?: 'gold' | 'vermillion' | 'cream';
}> = ({ className = '', size = 40, tone = 'gold' }) => {
  const fills = {
    gold: { petal: '#C5A059', center: '#E8A317', outline: '#8B1E1E' },
    vermillion: { petal: '#C0392B', center: '#E8A317', outline: '#1A1208' },
    cream: { petal: '#F3E2B8', center: '#C5A059', outline: '#8B1E1E' },
  }[tone];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Outer petals */}
      <ellipse cx="32" cy="18" rx="8" ry="14" fill={fills.petal} stroke={fills.outline} strokeWidth="1.2" />
      <ellipse cx="32" cy="46" rx="8" ry="14" fill={fills.petal} stroke={fills.outline} strokeWidth="1.2" />
      <ellipse cx="18" cy="32" rx="14" ry="8" fill={fills.petal} stroke={fills.outline} strokeWidth="1.2" />
      <ellipse cx="46" cy="32" rx="14" ry="8" fill={fills.petal} stroke={fills.outline} strokeWidth="1.2" />
      {/* Diagonal petals */}
      <ellipse cx="20" cy="20" rx="7" ry="12" fill={fills.petal} stroke={fills.outline} strokeWidth="1.1" transform="rotate(-40 20 20)" />
      <ellipse cx="44" cy="20" rx="7" ry="12" fill={fills.petal} stroke={fills.outline} strokeWidth="1.1" transform="rotate(40 44 20)" />
      <ellipse cx="20" cy="44" rx="7" ry="12" fill={fills.petal} stroke={fills.outline} strokeWidth="1.1" transform="rotate(40 20 44)" />
      <ellipse cx="44" cy="44" rx="7" ry="12" fill={fills.petal} stroke={fills.outline} strokeWidth="1.1" transform="rotate(-40 44 44)" />
      {/* Center */}
      <circle cx="32" cy="32" r="8" fill={fills.center} stroke={fills.outline} strokeWidth="1.2" />
      <circle cx="32" cy="32" r="3.5" fill={fills.outline} />
    </svg>
  );
};

/** Horizontal Patachitra vine divider for section headers — always centered */
export const PatachitraDivider: React.FC<{
  className?: string;
  light?: boolean;
}> = ({ className = '', light = false }) => {
  const line = light ? '#C5A059' : '#8B1E1E';
  const vine = light ? '#C5A059' : '#1B6B4A';
  const bloom = light ? '#E8A317' : '#C0392B';

  return (
    <div
      className={`w-full flex items-center justify-center gap-1.5 sm:gap-3 ${className}`}
      aria-hidden
    >
      <svg
        width="72"
        height="20"
        viewBox="0 0 120 20"
        fill="none"
        className="opacity-90 w-14 sm:w-[100px] md:w-[120px] shrink-0"
        preserveAspectRatio="xMidYMid meet"
      >
        <line x1="0" y1="10" x2="48" y2="10" stroke={line} strokeWidth="1.5" />
        <path d="M8 10 Q18 4 28 10 Q38 16 48 10" stroke={vine} strokeWidth="1.2" fill="none" />
        <circle cx="18" cy="7" r="2" fill={bloom} />
        <circle cx="38" cy="13" r="2" fill={bloom} />
      </svg>
      <LotusMotif
        size={28}
        tone={light ? 'gold' : 'vermillion'}
        className="shrink-0"
      />
      <svg
        width="72"
        height="20"
        viewBox="0 0 120 20"
        fill="none"
        className="opacity-90 w-14 sm:w-[100px] md:w-[120px] shrink-0 scale-x-[-1]"
        preserveAspectRatio="xMidYMid meet"
      >
        <line x1="0" y1="10" x2="48" y2="10" stroke={line} strokeWidth="1.5" />
        <path d="M8 10 Q18 4 28 10 Q38 16 48 10" stroke={vine} strokeWidth="1.2" fill="none" />
        <circle cx="18" cy="7" r="2" fill={bloom} />
        <circle cx="38" cy="13" r="2" fill={bloom} />
      </svg>
    </div>
  );
};

/** Ornate corner brackets for image frames */
export const PatachitraCorner: React.FC<{
  position: 'tl' | 'tr' | 'bl' | 'br';
  className?: string;
}> = ({ position, className = '' }) => {
  const rotate = { tl: '0deg', tr: '90deg', br: '180deg', bl: '270deg' }[position];
  const place = {
    tl: 'top-2 left-2',
    tr: 'top-2 right-2',
    br: 'bottom-2 right-2',
    bl: 'bottom-2 left-2',
  }[position];

  return (
    <div
      className={`absolute ${place} pointer-events-none z-10 ${className}`}
      aria-hidden
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        style={{ transform: `rotate(${rotate})` }}
      >
        <path
          d="M4 44 V12 Q4 4 12 4 H44"
          stroke="#C5A059"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M8 44 V14 Q8 8 14 8 H44"
          stroke="#8B1E1E"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="12" cy="12" r="3" fill="#C0392B" stroke="#1A1208" strokeWidth="0.8" />
        <circle cx="12" cy="12" r="1.2" fill="#E8A317" />
        <ellipse cx="22" cy="8" rx="5" ry="2" fill="#1B6B4A" transform="rotate(-10 22 8)" />
        <ellipse cx="8" cy="22" rx="2" ry="5" fill="#1B6B4A" transform="rotate(10 8 22)" />
      </svg>
    </div>
  );
};

/** Simple frame wrapper for images / cards (no corner ornaments) */
export const PatachitraFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-sm ${className}`}>
      {children}
    </div>
  );
};

/** Repeating top/bottom border strip */
export const PatachitraBorderStrip: React.FC<{
  className?: string;
  flip?: boolean;
}> = ({ className = '', flip = false }) => {
  return (
    <div
      className={`w-full h-8 overflow-hidden pointer-events-none ${flip ? 'rotate-180' : ''} ${className}`}
      style={{
        backgroundImage: "url('/patterns/patachitra-border.svg')",
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center',
      }}
      aria-hidden
    />
  );
};

/** Soft parchment wash for light sections */
export const PatachitraBackdrop: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#FAF8F5]" />
    </div>
  );
};
