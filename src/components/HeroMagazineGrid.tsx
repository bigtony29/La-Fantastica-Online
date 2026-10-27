import React from 'react';
import { Calendar, User, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Article } from '../types';
import { NewsImage } from './NewsImage';

interface HeroMagazineGridProps {
  mainArticle: Article;
  secondaryArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onNextMainHero?: () => void;
  onPrevMainHero?: () => void;
}

export const HeroMagazineGrid: React.FC<HeroMagazineGridProps> = ({
  mainArticle,
  secondaryArticles,
  onSelectArticle,
  onNextMainHero,
  onPrevMainHero,
}) => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-6">
      {/* 50/50 Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* --- LEFT: MAIN FEATURED HEADLINE (50% Width, Tall Aspect) --- */}
        <article
          onClick={() => onSelectArticle(mainArticle)}
          className="group relative h-[380px] sm:h-[460px] lg:h-[490px] rounded-lg overflow-hidden cursor-pointer shadow-md bg-slate-900 border border-slate-200"
        >
          {/* Main Background Image with fallback */}
          <div className="w-full h-full">
            <NewsImage
              src={mainArticle.imageUrl}
              alt={mainArticle.title}
              categoryLabel={mainArticle.categoryLabel}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Deep Dark Gradient Scrim ensuring high legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 pointer-events-none" />

          {/* Top Corner Carousel Buttons (faithful to reference image < > controls) */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-black/40 backdrop-blur-sm p-1 rounded border border-white/10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onPrevMainHero) onPrevMainHero();
              }}
              className="w-7 h-7 rounded flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Noticia anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onNextMainHero) onNextMainHero();
              }}
              className="w-7 h-7 rounded flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Siguiente noticia"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Content Area */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 z-10 flex flex-col justify-end">
            {/* Category Tag */}
            <div className="mb-2.5">
              <span className={`inline-block px-2.5 py-1 rounded text-[11px] font-extrabold uppercase tracking-wider ${mainArticle.badgeBg} ${mainArticle.badgeText} shadow-sm font-headline`}>
                {mainArticle.categoryLabel}
              </span>
            </div>

            {/* Headline Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-headline leading-tight tracking-tight mb-2.5 group-hover:text-cyan-200 transition-colors">
              {mainArticle.title}
            </h1>

            {/* Subtitle / Excerpt on larger screens */}
            <p className="hidden sm:block text-slate-200 text-xs line-clamp-2 mb-3.5 font-normal leading-relaxed">
              {mainArticle.subtitle}
            </p>

            {/* Metadata: Date & Author */}
            <div className="flex items-center flex-wrap gap-3 sm:gap-4 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-300" />
                {mainArticle.date}
              </span>
              <span className="text-white/40">·</span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-300" />
                {mainArticle.author.name}
              </span>
              <span className="text-white/40">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <Eye className="w-3.5 h-3.5" />
                {mainArticle.views.toLocaleString()} lecturas
              </span>
            </div>
          </div>
        </article>

        {/* --- RIGHT: 2x2 SECONDARY FEATURED GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {secondaryArticles.slice(0, 4).map((art) => (
            <article
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="group relative h-[210px] sm:h-[220px] lg:h-[237px] rounded-lg overflow-hidden cursor-pointer shadow-sm bg-slate-900 border border-slate-200"
            >
              {/* Background Image with fallback */}
              <div className="w-full h-full">
                <NewsImage
                  src={art.imageUrl}
                  alt={art.title}
                  categoryLabel={art.categoryLabel}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Content overlay */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 z-10 flex flex-col justify-end">
                {/* Category tag */}
                <div className="mb-1.5">
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${art.badgeBg} ${art.badgeText} font-headline`}>
                    {art.categoryLabel}
                  </span>
                </div>

                {/* Article Title */}
                <h2 className="text-sm sm:text-base font-bold text-white font-headline leading-snug line-clamp-2 mb-2 group-hover:text-cyan-200 transition-colors">
                  {art.title}
                </h2>

                {/* Metadata */}
                <div className="flex items-center gap-2.5 text-[11px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-300" />
                    {art.date}
                  </span>
                  <span className="text-white/30">·</span>
                  <span className="truncate max-w-[100px] text-slate-300 font-medium">
                    {art.author.name}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
