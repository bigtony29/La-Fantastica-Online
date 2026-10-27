import React from 'react';
import { ArrowLeft, Layers } from 'lucide-react';
import { CategoryInfo } from '../types';

interface CategoryPageHeaderProps {
  category: CategoryInfo;
  articleCount: number;
  onClearCategory: () => void;
}

export const CategoryPageHeader: React.FC<CategoryPageHeaderProps> = ({
  category,
  articleCount,
  onClearCategory,
}) => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 pt-4 pb-2">
      <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <button
              onClick={onClearCategory}
              className="text-xs font-bold text-slate-500 hover:text-[#008e9b] flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#008e9b] font-headline">
              Sección
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black font-headline uppercase tracking-tight text-slate-900 flex items-center gap-2">
            <span className={`w-3.5 h-7 rounded-sm ${category.bgBadge} inline-block`} />
            <span>{category.label}</span>
          </h1>
          <p className="text-xs text-slate-600 mt-1 max-w-xl font-normal">
            {category.description}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-100 px-3 py-1.5 rounded text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#008e9b]" />
            <span>{articleCount} noticias publicadas</span>
          </div>
          <button
            onClick={onClearCategory}
            className="px-3.5 py-2 rounded bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors font-headline uppercase tracking-wider"
          >
            Ver Portada Principal
          </button>
        </div>
      </div>
    </div>
  );
};
