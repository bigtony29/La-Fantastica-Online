import React, { useState } from 'react';
import { Newspaper, Image as ImageIcon } from 'lucide-react';

interface NewsImageProps {
  src: string;
  alt: string;
  className?: string;
  categoryLabel?: string;
  categoryBg?: string;
}

export const NewsImage: React.FC<NewsImageProps> = ({
  src,
  alt,
  className = '',
  categoryLabel = 'Noticias',
  categoryBg = 'bg-[#008e9b]',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-3 text-white text-center relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 ${className}`}
      >
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#008e9b_1px,transparent_1px)] [background-size:10px_10px]" />
        <div className="z-10 flex flex-col items-center gap-1.5 max-w-[85%]">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Newspaper className="w-4 h-4 text-cyan-300" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-200">
            {categoryLabel}
          </span>
          <p className="text-[11px] font-medium text-slate-300 line-clamp-2 leading-tight">
            {alt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <ImageIcon className="w-5 h-5 text-slate-400 opacity-50" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
