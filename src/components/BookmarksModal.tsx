import React from 'react';
import { Bookmark, X, Trash2 } from 'lucide-react';
import { Article } from '../types';
import { NewsImage } from './NewsImage';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearAll: () => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-xl w-full overflow-hidden my-auto border border-slate-200 relative flex flex-col max-h-[85vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h3 className="font-bold font-headline uppercase text-slate-900 text-sm tracking-wider">
              Noticias Guardadas ({savedArticles.length})
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {savedArticles.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-rose-600 hover:text-rose-700 font-bold px-2 py-1 rounded hover:bg-rose-50 transition-colors"
              >
                Limpiar todas
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="overflow-y-auto p-4 space-y-3 flex-1">
          {savedArticles.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <Bookmark className="w-10 h-10 mx-auto mb-2 opacity-30 text-slate-400" />
              <p className="text-sm font-semibold text-slate-600">No tiene noticias guardadas aún.</p>
              <p className="text-xs mt-1 text-slate-400">
                Al leer una noticia, presione el botón "Guardar" para consultarla cuando desee.
              </p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.id}
                className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-[#008e9b] transition-all bg-white group"
              >
                <div
                  onClick={() => {
                    onSelectArticle(art);
                    onClose();
                  }}
                  className="w-[75px] h-[60px] rounded overflow-hidden bg-slate-100 shrink-0 cursor-pointer"
                >
                  <NewsImage
                    src={art.imageUrl}
                    alt={art.title}
                    categoryLabel={art.categoryLabel}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div
                  onClick={() => {
                    onSelectArticle(art);
                    onClose();
                  }}
                  className="flex-1 min-w-0 cursor-pointer"
                >
                  <span className={`px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase tracking-wider ${art.badgeBg} ${art.badgeText} font-headline`}>
                    {art.categoryLabel}
                  </span>
                  <h4 className="text-xs font-bold font-headline text-slate-900 group-hover:text-[#008e9b] transition-colors line-clamp-2 leading-snug mt-1">
                    {art.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">{art.date}</p>
                </div>
                <button
                  onClick={() => onRemoveBookmark(art.id)}
                  className="p-1.5 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  title="Eliminar de guardados"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
