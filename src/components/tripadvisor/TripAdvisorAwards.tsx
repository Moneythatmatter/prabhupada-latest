'use client';

import React, { useEffect, useRef } from 'react';
import { Award, Star, ExternalLink } from 'lucide-react';

declare global {
  interface Window {
    taValidate?: () => void;
    loadtrk?: boolean;
  }
}

const TRIPADVISOR_URL =
  'https://www.tripadvisor.in/Hotel_Review-g503703-d1150060-Reviews-Hotel_Prabhupada-Puri_Puri_District_Odisha.html';

/**
 * Hook to safely load and execute TripAdvisor widgets in Next.js
 */
function useTripAdvisorScript() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Function to trigger TripAdvisor's validator
    const triggerValidation = () => {
      try {
        if (typeof window.taValidate === 'function') {
          window.taValidate();
        }
      } catch (err) {
        console.warn('TripAdvisor validation error:', err);
      }
    };

    // Load script helper
    const loadScript = (src: string, id: string) => {
      if (document.getElementById(id)) {
        triggerValidation();
        return;
      }
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.async = true;
      script.dataset.loadtrk = 'true';
      script.onload = () => {
        triggerValidation();
        // Give a slight tick for nested embed script to settle
        setTimeout(triggerValidation, 400);
        setTimeout(triggerValidation, 1200);
      };
      document.body.appendChild(script);
    };

    // Load both widget scripts
    loadScript(
      'https://www.jscache.com/wejs?wtype=certificateOfExcellence&uniq=585&locationId=1150060&lang=en_IN&year=2026&display_version=2',
      'ta-script-coe-585'
    );
    loadScript(
      'https://www.jscache.com/wejs?wtype=excellent&uniq=815&locationId=1150060&lang=en_IN&display_version=2',
      'ta-script-exc-815'
    );

    // Initial triggers for already-cached scripts or route changes
    triggerValidation();
    const t1 = setTimeout(triggerValidation, 300);
    const t2 = setTimeout(triggerValidation, 1000);
    const t3 = setTimeout(triggerValidation, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);
}

/**
 * TripAdvisor Travelers' Choice 2026 Widget
 */
export const TripAdvisorTravelersChoice: React.FC<{ className?: string }> = ({ className = '' }) => {
  useTripAdvisorScript();

  return (
    <div className={`tripadvisor-widget-box flex flex-col items-center justify-center ${className}`}>
      <div id="TA_certificateOfExcellence585" className="TA_certificateOfExcellence flex justify-center">
        <ul id="ZUIn1nUfo" className="TA_links MG9sj7tH list-none m-0 p-0">
          <li id="DPxoK2H" className="G4HWB5TPA list-none m-0 p-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={TRIPADVISOR_URL}
              className="inline-block transition-transform hover:scale-105"
              title="Hotel Prabhupada - TripAdvisor Travelers' Choice 2026 Award"
            >
              <img
                src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2026_LL.png"
                alt="Hotel Prabhupada Puri TripAdvisor Travelers' Choice 2026"
                className="widCOEImg max-h-[150px] w-auto object-contain drop-shadow-md"
                id="CDSWIDCOELOGO"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

/**
 * TripAdvisor Rated Excellent Widget
 */
export const TripAdvisorRatedExcellent: React.FC<{ className?: string }> = ({ className = '' }) => {
  useTripAdvisorScript();

  return (
    <div className={`tripadvisor-widget-box flex flex-col items-center justify-center ${className}`}>
      <div id="TA_excellent815" className="TA_excellent flex justify-center">
        <ul id="JX039U4" className="TA_links yVxaYbxw9j list-none m-0 p-0">
          <li id="z5khQPUzAEO5" className="ZKGUMR0V list-none m-0 p-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={TRIPADVISOR_URL}
              className="inline-block transition-transform hover:scale-105"
              title="Hotel Prabhupada Rated Excellent on TripAdvisor"
            >
              <img
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                alt="Hotel Prabhupada TripAdvisor Rated Excellent"
                className="widEXCIMG max-h-[46px] w-auto object-contain"
                id="CDSWIDEXCLOGO"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

/**
 * Complete Showcase Card containing both TripAdvisor Awards
 */
export const TripAdvisorAwards: React.FC<{
  className?: string;
  variant?: 'card' | 'compact' | 'strip';
}> = ({ className = '', variant = 'card' }) => {
  useTripAdvisorScript();

  if (variant === 'compact') {
    return (
      <div
        className={`bg-white/[0.04] hover:bg-white/[0.07] border border-[#C5A059]/30 hover:border-[#C5A059]/60 rounded-sm p-3 transition-all duration-300 flex flex-col items-center text-center ${className}`}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <Award className="w-4 h-4 text-[#E8A317]" />
          <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-white">
            TripAdvisor Award
          </span>
        </div>
        <TripAdvisorTravelersChoice />
        <a
          href={TRIPADVISOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-[10px] uppercase tracking-wider font-semibold text-[#E8A317] hover:underline flex items-center gap-1"
        >
          Travelers&apos; Choice 2026 <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    );
  }

  return (
    <div
      className={`bg-gradient-to-br from-[#0C1827] via-[#0E1F35] to-[#070F1A] border border-[#C5A059]/35 rounded-sm p-5 sm:p-6 shadow-2xl relative overflow-hidden ${className}`}
    >
      {/* Subtle gold accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8A317] to-transparent" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#00AA6C]/15 border border-[#00AA6C]/40 flex items-center justify-center text-[#00AA6C]">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <span className="block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A317]">
              Official Recognition
            </span>
            <h4 className="font-serif text-lg sm:text-xl font-normal text-white">
              TripAdvisor Travelers&apos; Choice Award
            </h4>
          </div>
        </div>

        <a
          href={TRIPADVISOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-white/80 hover:text-[#E8A317] transition-colors self-start sm:self-auto"
        >
          <span>View on TripAdvisor</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Widgets Display Grid - Equal height on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
        {/* Travelers Choice 2026 Badge */}
        <div className="h-full bg-white/[0.03] border border-white/10 hover:border-[#E8A317]/40 rounded-sm p-4 sm:p-5 flex flex-col justify-between items-center text-center transition-all">
          <div className="flex items-center justify-center gap-1 text-[#E8A317] mb-2 min-h-[20px]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#E8A317] text-[#E8A317]" />
            ))}
          </div>
          <div className="flex-1 flex items-center justify-center my-2 w-full">
            <TripAdvisorTravelersChoice />
          </div>
          <p className="font-sans text-[11px] text-white/70 mt-2">
            Recognized among the top 10% of hotels worldwide in 2026
          </p>
        </div>

        {/* Rated Excellent Badge */}
        <div className="h-full bg-white/[0.03] border border-white/10 hover:border-[#00AA6C]/40 rounded-sm p-4 sm:p-5 flex flex-col justify-between items-center text-center transition-all">
          <div className="flex items-center justify-center min-h-[20px] mb-2">
            <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-[#00AA6C]">
              Guest Satisfaction
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center my-2 w-full">
            <TripAdvisorRatedExcellent />
          </div>
          <p className="font-sans text-[11px] text-white/70 mt-2">
            Rated &ldquo;Excellent&rdquo; by 520+ verified travelers on TripAdvisor
          </p>
        </div>
      </div>
    </div>
  );
};
