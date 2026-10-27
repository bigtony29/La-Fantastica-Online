import React from 'react';
import { Calendar, CloudSun } from 'lucide-react';
import { MOCK_WEATHER } from '../data/newsData';

interface HeaderTopBarProps {
  onOpenInstitutional: (section: 'about' | 'contact' | 'staff') => void;
  onOpenAdvertise: () => void;
}

export const HeaderTopBar: React.FC<HeaderTopBarProps> = ({
  onOpenInstitutional,
  onOpenAdvertise,
}) => {
  return (
    <div className="bg-[#007b86] text-white/95 text-xs py-2 px-4 border-b border-[#006f79]">
      <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Date, Weather & Institutional links */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 font-semibold text-white tracking-tight">
            <Calendar className="w-3.5 h-3.5 text-cyan-200" />
            <span>Lunes, 25 de Octubre de 2026</span>
          </div>

          <span className="hidden sm:inline text-white/40">|</span>

          {/* Quick weather pill */}
          <div className="hidden md:flex items-center gap-1.5 text-cyan-100 font-medium">
            <CloudSun className="w-3.5 h-3.5 text-amber-300" />
            <span>{MOCK_WEATHER.city}: <strong>{MOCK_WEATHER.temp}°C</strong> ({MOCK_WEATHER.condition})</span>
          </div>

          <span className="hidden sm:inline text-white/40">|</span>

          {/* Nav links */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenInstitutional('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Quiénes Somos
            </button>
            <span className="text-white/40">·</span>
            <button
              onClick={() => onOpenInstitutional('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contáctenos
            </button>
            <span className="text-white/40">·</span>
            <button
              onClick={onOpenAdvertise}
              className="hover:text-white text-cyan-200 font-bold transition-colors cursor-pointer"
            >
              Anuncie Aquí
            </button>
          </div>
        </div>

        {/* Right: Social Media Icons matching reference */}
        <div className="flex items-center gap-2">
          <span className="hidden lg:inline text-xs text-cyan-100 mr-1 font-medium">Síguenos:</span>
          <div className="flex items-center gap-1">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-6 h-6 flex items-center justify-center rounded bg-white/10 hover:bg-[#1877f2] hover:text-white transition-colors"
            >
              <span className="font-bold text-[11px]">f</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter X"
              className="w-6 h-6 flex items-center justify-center rounded bg-white/10 hover:bg-black hover:text-white transition-colors"
            >
              <span className="font-bold text-[11px]">𝕏</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-6 h-6 flex items-center justify-center rounded bg-white/10 hover:bg-[#0077b5] hover:text-white transition-colors"
            >
              <span className="font-bold text-[11px]">in</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-6 h-6 flex items-center justify-center rounded bg-white/10 hover:bg-[#e4405f] hover:text-white transition-colors"
            >
              <span className="font-bold text-[11px]">ig</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-6 h-6 flex items-center justify-center rounded bg-white/10 hover:bg-[#ff0000] hover:text-white transition-colors"
            >
              <span className="font-bold text-[11px]">yt</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
