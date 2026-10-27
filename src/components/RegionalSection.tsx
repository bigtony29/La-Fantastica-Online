import React from 'react';
import { Calendar, User, ChevronRight, MapPin } from 'lucide-react';
import { Article } from '../types';
import { NewsImage } from './NewsImage';

interface RegionalSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onViewCategory: (category: 'cartagena' | 'bolivar') => void;
}

export const RegionalSection: React.FC<RegionalSectionProps> = ({
  articles,
  onSelectArticle,
  onViewCategory,
}) => {
  return (
    <section className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2 mb-5">
        <h2 className="text-base sm:text-lg font-bold font-headline text-slate-900 uppercase tracking-wider relative">
          <span className="text-[#008e9b] mr-1.5">///</span> Cartagena & Bolívar
          <span className="absolute -bottom-[10px] left-0 w-32 h-[3px] bg-[#008e9b]"></span>
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewCategory('cartagena')}
            className="text-xs font-bold text-slate-500 hover:text-[#008e9b] transition-colors"
          >
            Cartagena
          </button>
          <span className="text-slate-300">·</span>
          <button
            onClick={() => onViewCategory('bolivar')}
            className="text-xs font-bold text-slate-500 hover:text-[#008e9b] transition-colors"
          >
            Bolívar
          </button>
          <span className="text-slate-300">·</span>
          <button
            onClick={() => onViewCategory('cartagena')}
            className="text-xs font-bold text-[#008e9b] hover:text-[#00737d] flex items-center transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2 Side-by-Side Cards (Faithful to reference image layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.slice(0, 2).map((art) => (
          <article
            key={art.id}
            onClick={() => onSelectArticle(art)}
            className="group cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Image Container with Fallback */}
              <div className="h-[210px] sm:h-[220px] rounded-lg overflow-hidden bg-slate-100 mb-3 relative border border-slate-200">
                <NewsImage
                  src={art.imageUrl}
                  alt={art.title}
                  categoryLabel={art.categoryLabel}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-2.5 left-2.5 ${art.badgeBg} ${art.badgeText} text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded shadow font-headline`}>
                  {art.categoryLabel}
                </span>
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 font-medium">
                  <MapPin className="w-2.5 h-2.5 text-cyan-300" />
                  <span>{art.category === 'cartagena' ? 'Cartagena' : 'Bolívar'}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold font-headline text-slate-900 group-hover:text-[#008e9b] transition-colors leading-snug mb-2">
                {art.title}
              </h3>

              {/* Metadata */}
              <div className="flex items-center gap-2.5 text-xs text-slate-400 mb-2.5">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {art.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3 text-slate-400" />
                  {art.author.name}
                </span>
              </div>

              {/* Excerpt */}
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {art.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
