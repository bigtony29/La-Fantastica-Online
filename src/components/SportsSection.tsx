import React from 'react';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Article } from '../types';
import { NewsImage } from './NewsImage';

interface SportsSectionProps {
  featuredArticle: Article;
  listArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onViewAllSports: () => void;
}

export const SportsSection: React.FC<SportsSectionProps> = ({
  featuredArticle,
  listArticles,
  onSelectArticle,
  onViewAllSports,
}) => {
  return (
    <section className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm mb-8">
      {/* Section Header with Teal underline */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2 mb-5">
        <h2 className="text-base sm:text-lg font-bold font-headline text-slate-900 uppercase tracking-wider relative">
          <span className="text-[#008e9b] mr-1.5">///</span> Deportes & Atletas
          <span className="absolute -bottom-[10px] left-0 w-24 h-[3px] bg-[#008e9b]"></span>
        </h2>
        <button
          onClick={onViewAllSports}
          className="text-xs font-bold text-[#008e9b] hover:text-[#00737d] flex items-center gap-0.5 transition-colors cursor-pointer"
        >
          <span>Ver más deportes</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2-Column Split: Big story on left + 4 stacked stories on right (Faithful to reference image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Big Featured Sports Card */}
        {featuredArticle && (
          <article
            onClick={() => onSelectArticle(featuredArticle)}
            className="group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="h-[210px] rounded-lg overflow-hidden bg-slate-100 mb-3 relative border border-slate-200">
                <NewsImage
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  categoryLabel={featuredArticle.categoryLabel}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded shadow font-headline">
                  {featuredArticle.categoryLabel}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold font-headline text-slate-900 group-hover:text-[#008e9b] transition-colors leading-snug mb-2">
                {featuredArticle.title}
              </h3>

              <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-2.5 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {featuredArticle.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3 text-slate-400" />
                  {featuredArticle.author.name}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {featuredArticle.summary}
              </p>
            </div>
          </article>
        )}

        {/* Right: 4 Stacked Compact News Items with Thumbnails */}
        <div className="flex flex-col divide-y divide-slate-100">
          {listArticles.slice(0, 4).map((art) => (
            <article
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="py-3 first:pt-0 last:pb-0 flex items-center gap-3.5 group cursor-pointer"
            >
              {/* Square thumbnail */}
              <div className="w-[85px] h-[65px] rounded overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                <NewsImage
                  src={art.imageUrl}
                  alt={art.title}
                  categoryLabel={art.categoryLabel}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Metadata */}
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#008e9b] line-clamp-2 leading-snug transition-colors font-headline">
                  {art.title}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {art.formattedTime || art.date.slice(0, 6)}
                  </span>
                  <span>·</span>
                  <span className="truncate">{art.author.name.split(' ')[0]}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
