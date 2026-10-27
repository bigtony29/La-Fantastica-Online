import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { BREAKING_NEWS_LIST } from '../data/newsData';

interface BreakingNewsTickerProps {
  onSelectHeadline: (articleId: string) => void;
}

export const BreakingNewsTicker: React.FC<BreakingNewsTickerProps> = ({
  onSelectHeadline,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BREAKING_NEWS_LIST.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? BREAKING_NEWS_LIST.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BREAKING_NEWS_LIST.length);
  };

  const currentItem = BREAKING_NEWS_LIST[currentIndex];

  return (
    <div className="bg-white border-b border-slate-200 py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-3 text-xs">
        {/* Left: Badge + Tag + Headline */}
        <div className="flex items-center gap-2.5 overflow-hidden flex-1">
          {/* Breaking News Dark Badge */}
          <div className="bg-[#1f2937] text-white font-extrabold uppercase tracking-wider text-[11px] px-2.5 py-1 rounded flex items-center gap-1 shrink-0 font-headline">
            <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>Últimas Noticias</span>
          </div>

          {/* Category Tag */}
          <span className="bg-amber-500 text-white font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wide shrink-0">
            {currentItem.category}
          </span>

          {/* Headline Text */}
          <button
            onClick={() => onSelectHeadline(currentItem.id)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="text-slate-800 hover:text-[#008e9b] font-medium truncate text-left transition-colors cursor-pointer"
            title={currentItem.title}
          >
            {currentItem.title}
          </button>
        </div>

        {/* Right: Prev & Next Arrow Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handlePrev}
            className="w-6 h-6 rounded border border-slate-200 hover:border-slate-400 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
            aria-label="Noticia anterior"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="w-6 h-6 rounded border border-slate-200 hover:border-slate-400 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
            aria-label="Siguiente noticia"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
