import React from 'react';
import { Calendar, ShieldCheck, Landmark } from 'lucide-react';
import { Article } from '../types';
import { NewsImage } from './NewsImage';

interface PoliticsSecuritySectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onSelectCategory: (cat: 'politica' | 'seguranca') => void;
}

export const PoliticsSecuritySection: React.FC<PoliticsSecuritySectionProps> = ({
  articles,
  onSelectArticle,
  onSelectCategory,
}) => {
  return (
    <section className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm mb-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2 mb-5">
        <h2 className="text-base sm:text-lg font-bold font-headline text-slate-900 uppercase tracking-wider relative">
          <span className="text-[#008e9b] mr-1.5">///</span> Política & Seguridad
          <span className="absolute -bottom-[10px] left-0 w-28 h-[3px] bg-[#008e9b]"></span>
        </h2>
        <div className="flex items-center gap-2 text-xs font-bold">
          <button
            onClick={() => onSelectCategory('politica')}
            className="flex items-center gap-1 text-slate-500 hover:text-rose-600 transition-colors"
          >
            <Landmark className="w-3 h-3 text-rose-500" />
            <span>Política</span>
          </button>
          <span className="text-slate-300">·</span>
          <button
            onClick={() => onSelectCategory('seguranca')}
            className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ShieldCheck className="w-3 h-3 text-slate-600" />
            <span>Seguridad</span>
          </button>
        </div>
      </div>

      {/* Grid of 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.slice(0, 3).map((art) => (
          <article
            key={art.id}
            onClick={() => onSelectArticle(art)}
            className="group cursor-pointer flex flex-col justify-between rounded-lg border border-slate-200 p-3 hover:border-slate-300 hover:shadow-xs transition-all bg-slate-50/50"
          >
            <div>
              <div className="h-[140px] rounded overflow-hidden bg-slate-200 mb-2.5 relative">
                <NewsImage
                  src={art.imageUrl}
                  alt={art.title}
                  categoryLabel={art.categoryLabel}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className={`absolute top-2 left-2 ${art.badgeBg} ${art.badgeText} text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded shadow font-headline`}>
                  {art.categoryLabel}
                </span>
              </div>

              <h3 className="text-xs sm:text-sm font-bold font-headline text-slate-900 group-hover:text-[#008e9b] transition-colors leading-snug line-clamp-2 mb-1.5">
                {art.title}
              </h3>

              <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed mb-2 font-normal">
                {art.summary}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100 font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {art.date.slice(0, 6)}
              </span>
              <span className="truncate max-w-[120px]">{art.author.name}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
