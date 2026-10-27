import React, { useState } from 'react';
import { Home, Search, Bookmark, Menu, X, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/newsData';
import { CategoryId } from '../types';

interface NavigationBarProps {
  selectedCategory: CategoryId | 'all';
  onSelectCategory: (category: CategoryId | 'all') => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  savedCount: number;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenSearch,
  onOpenBookmarks,
  savedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoryClick = (cat: CategoryId | 'all') => {
    onSelectCategory(cat);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-[#008e9b] text-white shadow-md sticky top-0 z-40">
      <div className="max-w-[1240px] mx-auto px-4 flex items-center justify-between h-[48px]">
        {/* Left: Home icon button */}
        <div className="flex items-center h-full">
          <button
            onClick={() => handleCategoryClick('all')}
            className={`h-full px-3.5 flex items-center justify-center transition-colors border-r border-[#007b86] ${
              selectedCategory === 'all'
                ? 'bg-[#00737d] text-white font-bold'
                : 'hover:bg-[#007b86] text-white/90'
            }`}
            title="Página de Inicio"
            aria-label="Inicio"
          >
            <Home className="w-4 h-4" />
          </button>

          {/* Desktop Categories List */}
          <div className="hidden lg:flex items-center h-full font-bold text-xs uppercase tracking-wide">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`h-full px-3.5 flex items-center transition-colors border-r border-[#007b86]/50 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#006f79] text-white shadow-inner font-extrabold'
                      : 'hover:bg-[#007b86] text-white/95'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Action Icons: Search + Bookmarks + Mobile Menu */}
        <div className="flex items-center h-full gap-1">
          {/* Saved Articles Button */}
          <button
            onClick={onOpenBookmarks}
            className="h-full px-3 flex items-center gap-1.5 hover:bg-[#007b86] transition-colors relative text-xs font-semibold cursor-pointer"
            title="Noticias Guardadas"
          >
            <Bookmark className="w-4 h-4" />
            <span className="hidden sm:inline">Guardadas</span>
            {savedCount > 0 && (
              <span className="ml-0.5 bg-amber-400 text-slate-900 font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="h-full px-3.5 flex items-center justify-center hover:bg-[#007b86] transition-colors cursor-pointer border-l border-[#007b86]/50"
            title="Buscar noticias"
            aria-label="Buscar"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden h-full px-3 flex items-center justify-center hover:bg-[#007b86] transition-colors"
            aria-label="Menú de Navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#00737d] border-t border-[#00656e] py-2 px-4 shadow-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-1.5 py-2">
            <button
              onClick={() => handleCategoryClick('all')}
              className={`p-2 rounded text-left text-xs font-bold uppercase tracking-wider flex items-center justify-between ${
                selectedCategory === 'all' ? 'bg-[#005a62] text-white' : 'text-cyan-50 hover:bg-[#00656e]'
              }`}
            >
              <span>Inicio / Todas</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`p-2 rounded text-left text-xs font-bold uppercase tracking-wider flex items-center justify-between ${
                  selectedCategory === cat.id ? 'bg-[#005a62] text-white' : 'text-cyan-50 hover:bg-[#00656e]'
                }`}
              >
                <span>{cat.label}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
