import React, { useState, useMemo } from 'react';
import { Search, X, Calendar, ArrowRight } from 'lucide-react';
import { Article, CategoryId } from '../types';
import { CATEGORIES } from '../data/newsData';
import { NewsImage } from './NewsImage';

interface SearchModalProps {
  articles: Article[];
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  articles,
  isOpen,
  onClose,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState<CategoryId | 'all'>('all');

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesCat = selectedCat === 'all' || art.category === selectedCat;
      const q = query.trim().toLowerCase();
      if (!q) return matchesCat;
      const matchesText = 
        art.title.toLowerCase().includes(q) ||
        art.subtitle.toLowerCase().includes(q) ||
        art.summary.toLowerCase().includes(q) ||
        art.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesText;
    });
  }, [articles, query, selectedCat]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden my-auto border border-slate-200 relative flex flex-col max-h-[85vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#008e9b] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por palabras clave, ciudades, temas..."
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="p-3 bg-white border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-slate-400 font-bold text-[11px] mr-1 uppercase font-headline">Filtrar:</span>
          <button
            onClick={() => setSelectedCat('all')}
            className={`px-2.5 py-1 rounded-full font-bold whitespace-nowrap transition-colors ${
              selectedCat === 'all'
                ? 'bg-[#008e9b] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todas
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-2.5 py-1 rounded-full font-bold whitespace-nowrap transition-colors ${
                selectedCat === cat.id
                  ? 'bg-[#008e9b] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="overflow-y-auto p-4 space-y-3 flex-1">
          <div className="flex items-center justify-between text-xs text-slate-500 pb-1 font-medium">
            <span>{filteredArticles.length} resultados encontrados</span>
            {query && <span>Buscando: "{query}"</span>}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-10 text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-semibold text-slate-600">No se encontraron noticias con estos términos.</p>
              <p className="text-xs mt-1 text-slate-400">Intente buscando "Cartagena", "Bolívar", "Puerto", "Real" o elija otra categoría.</p>
            </div>
          ) : (
            filteredArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className="flex items-center gap-3.5 p-2.5 rounded-lg border border-slate-200 hover:border-[#008e9b] hover:bg-slate-50/70 transition-all cursor-pointer group"
              >
                <div className="w-[85px] h-[65px] rounded overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                  <NewsImage
                    src={art.imageUrl}
                    alt={art.title}
                    categoryLabel={art.categoryLabel}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase tracking-wider ${art.badgeBg} ${art.badgeText} font-headline`}>
                      {art.categoryLabel}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" />
                      {art.date}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold font-headline text-slate-900 group-hover:text-[#008e9b] transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#008e9b] transition-colors shrink-0" />
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
