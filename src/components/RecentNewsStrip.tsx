import React from 'react';
import { Calendar } from 'lucide-react';
import { Article } from '../types';
import { NewsImage } from './NewsImage';

interface RecentNewsStripProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const RecentNewsStrip: React.FC<RecentNewsStripProps> = ({
  articles,
  onSelectArticle,
}) => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 pb-6">
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {articles.slice(0, 4).map((art) => (
            <article
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-3 first:pt-0 first:px-0 cursor-pointer group"
            >
              {/* Thumbnail with robust fallback */}
              <div className="w-[85px] h-[65px] rounded overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                <NewsImage
                  src={art.imageUrl}
                  alt={art.title}
                  categoryLabel={art.categoryLabel}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#008e9b] line-clamp-2 leading-snug transition-colors font-headline">
                  {art.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {art.formattedTime || art.date.slice(0, 6)}
                  </span>
                  <span>·</span>
                  <span className="truncate text-slate-500">
                    {art.author.name.split(' ')[0]}
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
