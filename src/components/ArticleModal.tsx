import React, { useState } from 'react';
import { 
  X, Calendar, Eye, Bookmark, BookmarkCheck, Share2, 
  Printer, ArrowLeft, MessageSquare, ThumbsUp, Send, Check, 
  Quote, Clock, Sparkles 
} from 'lucide-react';
import { Article, CommentItem } from '../types';
import { NewsImage } from './NewsImage';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
  relatedArticles: Article[];
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
  onAddComment: (articleId: string, comment: Omit<CommentItem, 'id' | 'likes'>) => void;
  onLikeComment: (articleId: string, commentId: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSelectArticle,
  relatedArticles,
  isBookmarked,
  onToggleBookmark,
  onAddComment,
  onLikeComment,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [copiedLink, setCopiedLink] = useState(false);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentFeedback, setCommentFeedback] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleShareSocial = (platform: 'whatsapp' | 'twitter' | 'facebook') => {
    const text = encodeURIComponent(`${article.title} - Lea en Noticias Bolívar & Cartagena`);
    const url = encodeURIComponent(window.location.href);

    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    onAddComment(article.id, {
      authorName: newCommentName.trim(),
      date: 'Ahora mismo',
      content: newCommentText.trim(),
    });

    setNewCommentText('');
    setCommentFeedback(true);
    setTimeout(() => setCommentFeedback(false), 3000);
  };

  const fontSizeClasses = {
    normal: 'text-base leading-relaxed',
    large: 'text-lg leading-relaxed',
    xlarge: 'text-xl leading-loose',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden my-auto border border-slate-200 relative flex flex-col max-h-[95vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-title"
      >
        
        {/* Sticky Top Header / Actions Bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#008e9b] transition-colors p-1.5 rounded hover:bg-slate-100 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Volver al Portal</span>
            </button>
            <span className="text-slate-300">·</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${article.badgeBg} ${article.badgeText} font-headline`}>
              {article.categoryLabel}
            </span>
          </div>

          {/* Action Tools: Font Sizing, Bookmark, Print, Close */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Font Sizer */}
            <div className="hidden sm:flex items-center bg-slate-100 rounded p-0.5 text-xs font-bold text-slate-600">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'normal' ? 'bg-white shadow-xs text-slate-900' : 'hover:text-slate-900'}`}
                title="Tamaño de letra estándar"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'large' ? 'bg-white shadow-xs text-slate-900' : 'hover:text-slate-900'}`}
                title="Letra mediana"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'xlarge' ? 'bg-white shadow-xs text-slate-900' : 'hover:text-slate-900'}`}
                title="Letra grande"
              >
                A++
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article)}
              className={`p-2 rounded flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              title={isBookmarked ? 'Guardado en favoritos' : 'Guardar para leer después'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-amber-600 fill-amber-600" /> : <Bookmark className="w-4 h-4" />}
              <span className="hidden sm:inline">{isBookmarked ? 'Guardado' : 'Guardar'}</span>
            </button>

            {/* Print button */}
            <button
              onClick={() => window.print()}
              className="p-2 rounded bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors hidden sm:block"
              title="Imprimir noticia"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close modal */}
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-7 space-y-6">
          
          {/* Headline & Subtitle */}
          <div>
            <h1 
              id="article-title" 
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-headline leading-tight tracking-tight mb-3"
            >
              {article.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {article.subtitle}
            </p>
          </div>

          {/* Author Byline & Social Share Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-y border-slate-200">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 border border-slate-200">
                <NewsImage
                  src={article.author.avatar}
                  alt={article.author.name}
                  categoryLabel="Autor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{article.author.name}</p>
                <p className="text-[11px] text-slate-500">{article.author.role}</p>
              </div>
            </div>

            {/* Metadata info */}
            <div className="flex items-center flex-wrap gap-3 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {article.date} a las {article.formattedTime}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {article.readTime} de lectura
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-slate-400" />
                {article.views.toLocaleString()} lecturas
              </span>
            </div>
          </div>

          {/* Social Share Bar */}
          <div className="flex items-center flex-wrap gap-2 py-1 bg-slate-50 p-2.5 rounded-lg border border-slate-150">
            <span className="text-xs font-bold text-slate-700 mr-1 flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5 text-[#008e9b]" /> Compartir:
            </span>
            <button
              onClick={() => handleShareSocial('whatsapp')}
              className="px-2.5 py-1 rounded bg-[#25d366] text-white text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1"
            >
              WhatsApp
            </button>
            <button
              onClick={() => handleShareSocial('twitter')}
              className="px-2.5 py-1 rounded bg-black text-white text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1"
            >
              𝕏 / Twitter
            </button>
            <button
              onClick={() => handleShareSocial('facebook')}
              className="px-2.5 py-1 rounded bg-[#1877f2] text-white text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1"
            >
              Facebook
            </button>
            <button
              onClick={handleCopyLink}
              className="px-2.5 py-1 rounded bg-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-300 transition-colors flex items-center gap-1"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : null}
              <span>{copiedLink ? '¡Enlace copiado!' : 'Copiar Enlace'}</span>
            </button>
          </div>

          {/* Large Lead Image with robust fallback */}
          <figure className="space-y-1.5">
            <div className="w-full h-[280px] sm:h-[420px] rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <NewsImage
                src={article.imageUrl}
                alt={article.title}
                categoryLabel={article.categoryLabel}
                className="w-full h-full object-cover"
              />
            </div>
            {article.imageCaption && (
              <figcaption className="text-xs text-slate-500 italic text-center sm:text-left">
                Foto: {article.imageCaption}
              </figcaption>
            )}
          </figure>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="bg-[#f0f9fa] border-l-4 border-[#008e9b] p-4 rounded-r-lg space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008e9b] font-headline">
                <Sparkles className="w-4 h-4" />
                <span>Puntos Clave del Reportaje</span>
              </div>
              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1">
                {article.keyTakeaways.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Main Text Content with Drop Cap */}
          <div className={`space-y-4 text-slate-800 font-serif-body ${fontSizeClasses[fontSize]}`}>
            {article.content.map((paragraph, idx) => (
              <p
                key={idx}
                className={idx === 0 ? "first-letter:text-5xl first-letter:font-bold first-letter:font-headline first-letter:text-[#008e9b] first-letter:float-left first-letter:mr-3 first-letter:leading-none" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Editorial Pull Quote */}
          {article.quote && (
            <blockquote className="my-6 p-5 sm:p-6 bg-slate-50 border-y-2 border-[#008e9b] rounded text-center sm:text-left relative">
              <Quote className="w-8 h-8 text-[#008e9b]/20 absolute top-3 left-3 -z-0" />
              <p className="text-base sm:text-lg font-medium text-slate-800 italic relative z-10 leading-relaxed font-serif-body">
                "{article.quote.text}"
              </p>
              <footer className="mt-2 text-xs font-bold text-[#008e9b] uppercase tracking-wider font-headline">
                — {article.quote.author}
              </footer>
            </blockquote>
          )}

          {/* Tags */}
          <div className="flex items-center flex-wrap gap-2 pt-4 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-headline">Etiquetas:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* --- COMMENTS SECTION --- */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold font-headline uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#008e9b]" />
                <span>Comentarios ({article.comments.length})</span>
              </h3>
              <span className="text-xs text-slate-400">Espacio moderado para debate democrático y respetuoso</span>
            </div>

            {/* New Comment Form */}
            <form onSubmit={handleCommentSubmit} className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Su nombre completo..."
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  required
                  className="bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#008e9b]"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Escriba aquí su opinión sobre esta noticia..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                required
                className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#008e9b]"
              />
              <div className="flex items-center justify-between">
                {commentFeedback ? (
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> ¡Comentario publicado exitosamente!
                  </span>
                ) : <span />}

                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-[#008e9b] hover:bg-[#007b86] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs font-headline"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publicar Comentario</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-3">
              {article.comments.length === 0 ? (
                <p className="text-xs text-slate-500 italic py-3 text-center">
                  Sea el primero en compartir su opinión sobre este acontecimiento.
                </p>
              ) : (
                article.comments.map((c) => (
                  <div key={c.id} className="p-3.5 rounded-lg bg-white border border-slate-200 space-y-1.5 shadow-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#008e9b]/15 text-[#008e9b] font-bold text-xs flex items-center justify-center">
                          {c.authorName.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-xs font-bold text-slate-900">{c.authorName}</span>
                        <span className="text-[11px] text-slate-400">· {c.date}</span>
                      </div>
                      <button
                        onClick={() => onLikeComment(article.id, c.id)}
                        className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-[#008e9b] transition-colors font-medium"
                      >
                        <ThumbsUp className="w-3 h-3" />
                        <span>{c.likes}</span>
                      </button>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed pl-9">
                      {c.content}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-base font-bold font-headline uppercase tracking-wider text-slate-900 mb-4">
                Noticias Relacionadas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.slice(0, 3).map((rel) => (
                  <article
                    key={rel.id}
                    onClick={() => onSelectArticle(rel)}
                    className="group cursor-pointer bg-slate-50 border border-slate-200 rounded-lg p-3 hover:border-[#008e9b] transition-all"
                  >
                    <div className="h-[100px] rounded overflow-hidden bg-slate-200 mb-2">
                      <NewsImage
                        src={rel.imageUrl}
                        alt={rel.title}
                        categoryLabel={rel.categoryLabel}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-xs font-bold font-headline text-slate-900 group-hover:text-[#008e9b] line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 font-medium">{rel.date.slice(0, 6)}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
