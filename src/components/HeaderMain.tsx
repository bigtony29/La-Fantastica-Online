import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeaderMainProps {
  onLogoClick: () => void;
  onOpenAdvertise: () => void;
}

export const HeaderMain: React.FC<HeaderMainProps> = ({
  onLogoClick,
  onOpenAdvertise,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 py-4 px-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Brand Logo inspired by NP NEWS PORTAL in reference */}
        <button
          onClick={onLogoClick}
          className="flex items-center gap-3.5 text-left group cursor-pointer"
        >
          {/* NP Hexagon / Emblem */}
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#008e9b] via-[#007b86] to-[#02626b] text-white flex items-center justify-center font-black text-2xl tracking-tighter shadow-md group-hover:scale-105 transition-transform duration-200">
            <span className="font-mono">NP</span>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white"></div>
          </div>

          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-headline uppercase">
                News <span className="text-[#008e9b]">Portal</span>
              </span>
            </div>
            <p className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase">
              Bolívar & Cartagena · Diario Digital Independiente
            </p>
          </div>
        </button>

        {/* Right: 728x90px Ad Banner faithfully styled from reference */}
        <div
          onClick={onOpenAdvertise}
          className="w-full md:w-[728px] max-w-full h-[90px] rounded bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#0f172a] text-white p-3 sm:px-6 flex items-center justify-between gap-4 cursor-pointer hover:border-cyan-400/50 border border-transparent transition-all shadow-inner relative overflow-hidden group"
          role="button"
          tabIndex={0}
          title="Haga clic para anunciar en nuestro portal"
        >
          {/* Subtle geometric lines */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#008e9b_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>

          <div className="flex flex-col justify-center z-10">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold text-white tracking-wide font-headline">
                NEWS <span className="text-[#00bcd4]">PORTAL</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider bg-white/10 text-cyan-200 px-1.5 py-0.5 rounded font-bold">
                Patrocinado
              </span>
            </div>
            <p className="text-xs text-slate-300 font-normal truncate max-w-[280px] sm:max-w-md">
              Inserte su publicidad aquí · Más de 450.000 lectores mensuales en Bolívar
            </p>
          </div>

          {/* Right badge: 728px X 90px cyan button matching reference */}
          <div className="z-10 flex items-center gap-2 shrink-0">
            <span className="px-3.5 py-2 rounded bg-[#00bcd4] hover:bg-[#00acc1] text-slate-950 font-bold text-xs uppercase tracking-wider shadow transition-colors flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>728px X 90px</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
