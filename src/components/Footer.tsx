import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, ChevronRight, Shield } from 'lucide-react';
import { CATEGORIES } from '../data/newsData';
import { Article, CategoryId } from '../types';
import { NewsImage } from './NewsImage';

interface FooterProps {
  recentArticles: Article[];
  onSelectCategory: (category: CategoryId | 'all') => void;
  onSelectArticle: (article: Article) => void;
  onOpenInstitutional: (section: 'about' | 'contact' | 'staff') => void;
  onOpenAdvertise: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  recentArticles,
  onSelectCategory,
  onSelectArticle,
  onOpenInstitutional,
  onOpenAdvertise,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-slate-300 pt-12 pb-6 border-t-4 border-[#008e9b] mt-12">
      <div className="max-w-[1240px] mx-auto px-4">
        
        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#008e9b] to-[#006f79] text-white flex items-center justify-center font-black text-xl font-mono">
                NP
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-headline tracking-tight uppercase">
                  News <span className="text-[#008e9b]">Portal</span>
                </span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                  Bolívar & Cartagena
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              El diario digital de mayor cobertura e independencia en el Caribe colombiano. Información veraz, oportuna y comprometida con el desarrollo regional.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 pt-2 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#008e9b] shrink-0" />
                <span>Centro Histórico, Cartagena de Indias</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#008e9b] shrink-0" />
                <span>contacto@portalbolivar.com.co</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#008e9b] shrink-0" />
                <span>+57 (5) 664-9200</span>
              </div>
            </div>
          </div>

          {/* Column 2: Secciones / Categorías */}
          <div>
            <h4 className="text-xs font-bold font-headline uppercase tracking-wider text-white border-b-2 border-slate-800 pb-2 mb-4 relative">
              <span className="text-[#008e9b] mr-1.5">///</span> Secciones
              <span className="absolute -bottom-[2px] left-0 w-12 h-[2px] bg-[#008e9b]"></span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className="text-left text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors py-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-[#008e9b]" />
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Últimas Noticias */}
          <div>
            <h4 className="text-xs font-bold font-headline uppercase tracking-wider text-white border-b-2 border-slate-800 pb-2 mb-4 relative">
              <span className="text-[#008e9b] mr-1.5">///</span> Noticias Recientes
              <span className="absolute -bottom-[2px] left-0 w-14 h-[2px] bg-[#008e9b]"></span>
            </h4>
            <div className="space-y-3">
              {recentArticles.slice(0, 3).map((art) => (
                <article
                  key={art.id}
                  onClick={() => onSelectArticle(art)}
                  className="flex items-center gap-2.5 group cursor-pointer"
                >
                  <div className="w-[55px] h-[45px] rounded overflow-hidden bg-slate-800 shrink-0 border border-slate-700">
                    <NewsImage
                      src={art.imageUrl}
                      alt={art.title}
                      categoryLabel={art.categoryLabel}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-[11px] font-bold text-slate-300 group-hover:text-cyan-300 line-clamp-2 leading-tight transition-colors font-headline">
                      {art.title}
                    </h5>
                    <span className="text-[10px] text-slate-500 mt-0.5 block font-medium">{art.date.slice(0, 6)}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Column 4: Institucional & Anuncie */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-headline uppercase tracking-wider text-white border-b-2 border-slate-800 pb-2 mb-4 relative">
              <span className="text-[#008e9b] mr-1.5">///</span> Institucional
              <span className="absolute -bottom-[2px] left-0 w-12 h-[2px] bg-[#008e9b]"></span>
            </h4>
            <div className="space-y-2 text-xs font-medium">
              <button
                onClick={() => onOpenInstitutional('about')}
                className="w-full text-left text-slate-400 hover:text-white transition-colors block py-1 cursor-pointer"
              >
                Quiénes Somos & Misión Editorial
              </button>
              <button
                onClick={() => onOpenInstitutional('staff')}
                className="w-full text-left text-slate-400 hover:text-white transition-colors block py-1 cursor-pointer"
              >
                Expediente & Equipo Periodístico
              </button>
              <button
                onClick={() => onOpenInstitutional('contact')}
                className="w-full text-left text-slate-400 hover:text-white transition-colors block py-1 cursor-pointer"
              >
                Mesa de Redacción & Pautas
              </button>
              <button
                onClick={onOpenAdvertise}
                className="w-full text-left text-cyan-300 font-bold hover:text-cyan-200 transition-colors block py-1 cursor-pointer"
              >
                Kit de Medios & Publicidad
              </button>
            </div>

            <div className="pt-2">
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60 text-slate-300 text-[11px] leading-relaxed">
                <span className="font-bold text-white flex items-center gap-1 mb-1 font-headline">
                  <Shield className="w-3.5 h-3.5 text-[#008e9b]" /> Autorregulación Ética
                </span>
                Medio adscrito a principios de rigor periodístico y verificación independiente de hechos.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © 2026 <strong>Portal Noticias Bolívar & Cartagena</strong>. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenInstitutional('about')}
              className="hover:text-slate-400 transition-colors"
            >
              Términos de Uso
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenInstitutional('about')}
              className="hover:text-slate-400 transition-colors"
            >
              Privacidad
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-slate-800 hover:bg-[#008e9b] text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              title="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Arriba</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
