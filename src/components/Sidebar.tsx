import React, { useState } from 'react';
import { Calendar, Eye, Send, Sparkles, Check, CloudSun, Wind, Droplets } from 'lucide-react';
import { Article } from '../types';
import { MOCK_WEATHER } from '../data/newsData';
import { NewsImage } from './NewsImage';

interface SidebarProps {
  latestArticles: Article[];
  popularArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onOpenAdvertise: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  latestArticles,
  popularArticles,
  onSelectArticle,
  onOpenAdvertise,
}) => {
  const [activeTab, setActiveTab] = useState<'latest' | 'popular' | 'comments'>('popular');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSuccess(false);
    }, 4000);
  };

  return (
    <aside className="space-y-6">
      
      {/* --- 1. SÍGUENOS / REDES SOCIALES (Fiel a la referencia) --- */}
      <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
        <h3 className="text-sm font-bold font-headline text-slate-900 uppercase tracking-wider relative border-b-2 border-slate-100 pb-2 mb-4">
          <span className="text-[#008e9b] mr-1.5">///</span> Síguenos
          <span className="absolute -bottom-[10px] left-0 w-16 h-[3px] bg-[#008e9b]"></span>
        </h3>

        {/* Social Grid with colorful branded buttons matching reference */}
        <div className="grid grid-cols-3 gap-2">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2.5 rounded bg-[#3b5998] text-white hover:opacity-90 transition-opacity text-center group"
          >
            <span className="font-extrabold text-base">f</span>
            <span className="text-[10px] font-bold mt-1">48.2k</span>
            <span className="text-[9px] text-white/80">Fans</span>
          </a>

          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2.5 rounded bg-[#1da1f2] text-white hover:opacity-90 transition-opacity text-center group"
          >
            <span className="font-extrabold text-base">𝕏</span>
            <span className="text-[10px] font-bold mt-1">32.6k</span>
            <span className="text-[9px] text-white/80">Seguidores</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2.5 rounded bg-[#0077b5] text-white hover:opacity-90 transition-opacity text-center group"
          >
            <span className="font-extrabold text-base">in</span>
            <span className="text-[10px] font-bold mt-1">19.4k</span>
            <span className="text-[9px] text-white/80">Contactos</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2.5 rounded bg-gradient-to-tr from-[#fd5949] to-[#d6249f] text-white hover:opacity-90 transition-opacity text-center group"
          >
            <span className="font-extrabold text-base">ig</span>
            <span className="text-[10px] font-bold mt-1">64.1k</span>
            <span className="text-[9px] text-white/80">Seguidores</span>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2.5 rounded bg-[#cd201f] text-white hover:opacity-90 transition-opacity text-center group"
          >
            <span className="font-extrabold text-base">yt</span>
            <span className="text-[10px] font-bold mt-1">27.8k</span>
            <span className="text-[9px] text-white/80">Suscriptores</span>
          </a>

          {/* WhatsApp / Canal */}
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2.5 rounded bg-[#25d366] text-white hover:opacity-90 transition-opacity text-center group"
          >
            <span className="font-extrabold text-base">wa</span>
            <span className="text-[10px] font-bold mt-1">Canal</span>
            <span className="text-[9px] text-white/80">Noticias</span>
          </a>
        </div>
      </div>

      {/* --- 2. PUBLICIDAD 300x250 (Fiel a la referencia) --- */}
      <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
        <h3 className="text-sm font-bold font-headline text-slate-900 uppercase tracking-wider relative border-b-2 border-slate-100 pb-2 mb-4">
          <span className="text-[#008e9b] mr-1.5">///</span> Publicidad
          <span className="absolute -bottom-[10px] left-0 w-20 h-[3px] bg-[#008e9b]"></span>
        </h3>

        {/* 300x250 Styled Ad Box */}
        <div
          onClick={onOpenAdvertise}
          className="w-full h-[250px] rounded-lg bg-gradient-to-b from-[#111827] via-[#1e293b] to-[#0f172a] text-white p-5 flex flex-col justify-between items-center text-center cursor-pointer hover:border-cyan-400 border border-slate-700 transition-all shadow-md relative overflow-hidden group"
          role="button"
          tabIndex={0}
          title="Haga clic para anunciar en este espacio"
        >
          {/* Subtle image/mesh overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#008e9b_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>

          <div className="z-10 mt-3">
            <span className="text-xs uppercase tracking-widest text-cyan-300 font-bold">
              Espacio Comercial Premium
            </span>
            <h4 className="text-xl font-extrabold font-headline text-white mt-1 group-hover:text-cyan-200 transition-colors">
              NEWS <span className="text-[#00bcd4]">PORTAL</span>
            </h4>
            <p className="text-xs text-slate-300 mt-2 max-w-[220px] font-normal leading-relaxed">
              Posicione su marca ante la audiencia más calificada del Caribe colombiano.
            </p>
          </div>

          {/* Cyan banner button at bottom: "ADVERTISE HERE: 300 X 250" */}
          <div className="z-10 w-full">
            <div className="w-full py-2.5 px-3 rounded bg-[#008e9b] hover:bg-[#007b86] text-white font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Anuncie Aquí: 300 x 250</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. PESTAÑAS: MÁS LEÍDAS / RECIENTES / OPINIÓN --- */}
      <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
        {/* Tab Header Buttons */}
        <div className="flex border-b border-slate-200 mb-4 bg-slate-100 rounded p-1">
          <button
            onClick={() => setActiveTab('popular')}
            className={`flex-1 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
              activeTab === 'popular'
                ? 'bg-[#008e9b] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Más Leídas
          </button>
          <button
            onClick={() => setActiveTab('latest')}
            className={`flex-1 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
              activeTab === 'latest'
                ? 'bg-[#008e9b] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Recientes
          </button>
          <button
            onClick={() => setActiveTab('comments')}
            className={`flex-1 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
              activeTab === 'comments'
                ? 'bg-[#008e9b] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Opinión
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-3.5">
          {(activeTab === 'popular'
            ? popularArticles
            : activeTab === 'latest'
            ? latestArticles
            : popularArticles.slice(0, 4)
          ).slice(0, 5).map((art, index) => (
            <article
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="flex items-center gap-3 group cursor-pointer pb-3 border-b border-slate-100 last:border-b-0 last:pb-0"
            >
              {/* Thumbnail with fallback */}
              <div className="relative w-[70px] h-[55px] rounded overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                <NewsImage
                  src={art.imageUrl}
                  alt={art.title}
                  categoryLabel={art.categoryLabel}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {activeTab === 'popular' && (
                  <span className="absolute top-0 left-0 bg-[#008e9b] text-white font-mono font-bold text-[10px] w-4 h-4 flex items-center justify-center rounded-br">
                    {index + 1}
                  </span>
                )}
              </div>

              {/* Title & Metadata */}
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold font-headline text-slate-900 group-hover:text-[#008e9b] line-clamp-2 leading-snug transition-colors">
                  {art.title}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {art.formattedTime || art.date.slice(0, 6)}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-slate-400" />
                    {art.views.toLocaleString()}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* --- 4. CLIMA EN CARTAGENA --- */}
      <div className="bg-gradient-to-br from-[#008e9b] to-[#02626b] text-white rounded-lg p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CloudSun className="w-5 h-5 text-amber-300" />
            <h4 className="font-extrabold text-sm uppercase tracking-wider font-headline">
              Clima en Cartagena
            </h4>
          </div>
          <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded uppercase font-bold">
            En Vivo
          </span>
        </div>

        <div className="flex items-baseline justify-between my-2">
          <div>
            <span className="text-4xl font-extrabold font-mono tracking-tight">
              {MOCK_WEATHER.temp}°C
            </span>
            <p className="text-xs text-cyan-100 font-medium">{MOCK_WEATHER.condition} · Sensación 33°C</p>
          </div>
          <div className="text-right text-xs space-y-1 text-cyan-100 font-medium">
            <div className="flex items-center justify-end gap-1">
              <Droplets className="w-3 h-3 text-cyan-200" />
              <span>Humedad: {MOCK_WEATHER.humidity}%</span>
            </div>
            <div className="flex items-center justify-end gap-1">
              <Wind className="w-3 h-3 text-cyan-200" />
              <span>Viento: {MOCK_WEATHER.windSpeed} km/h</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- 5. BOLETÍN INFORMATIVO DIARIO --- */}
      <div className="bg-slate-900 text-white rounded-lg p-5 shadow-sm border border-slate-800">
        <h4 className="text-sm font-extrabold font-headline uppercase tracking-wider text-white mb-1">
          Edición Matutina de Noticias
        </h4>
        <p className="text-xs text-slate-400 mb-3 leading-relaxed">
          Reciba a primera hora el resumen con las noticias más trascendentales de Bolívar, Cartagena y Colombia directamente en su correo.
        </p>

        {newsletterSuccess ? (
          <div className="bg-emerald-900/60 border border-emerald-500/50 text-emerald-200 text-xs p-3 rounded flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>¡Suscripción exitosa! Recibirá la edición informativa de mañana.</span>
          </div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="space-y-2">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Ingrese su correo electrónico..."
              required
              className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#008e9b]"
            />
            <button
              type="submit"
              className="w-full bg-[#008e9b] hover:bg-[#007b86] text-white font-bold text-xs uppercase tracking-wider py-2 px-3 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Suscribirme Gratis</span>
            </button>
          </form>
        )}
      </div>

    </aside>
  );
};
