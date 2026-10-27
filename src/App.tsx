/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { HeaderTopBar } from './components/HeaderTopBar';
import { HeaderMain } from './components/HeaderMain';
import { NavigationBar } from './components/NavigationBar';
import { BreakingNewsTicker } from './components/BreakingNewsTicker';
import { HeroMagazineGrid } from './components/HeroMagazineGrid';
import { RecentNewsStrip } from './components/RecentNewsStrip';
import { SportsSection } from './components/SportsSection';
import { RegionalSection } from './components/RegionalSection';
import { PoliticsSecuritySection } from './components/PoliticsSecuritySection';
import { Sidebar } from './components/Sidebar';
import { ArticleModal } from './components/ArticleModal';
import { SearchModal } from './components/SearchModal';
import { BookmarksModal } from './components/BookmarksModal';
import { AdvertiseModal } from './components/AdvertiseModal';
import { InstitutionalModal } from './components/InstitutionalModal';
import { CategoryPageHeader } from './components/CategoryPageHeader';
import { Footer } from './components/Footer';
import { NewsImage } from './components/NewsImage';

import { INITIAL_ARTICLES, CATEGORIES } from './data/newsData';
import { Article, CategoryId, CommentItem } from './types';
import { Calendar, User, Eye, Sparkles, Filter } from 'lucide-react';

export default function App() {
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Modals
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [bookmarksModalOpen, setBookmarksModalOpen] = useState(false);
  const [advertiseModalOpen, setAdvertiseModalOpen] = useState(false);
  const [institutionalModalOpen, setInstitutionalModalOpen] = useState(false);
  const [institutionalTab, setInstitutionalTab] = useState<'about' | 'contact' | 'staff'>('about');

  // Bookmarks persistence
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('news_portal_saved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('news_portal_saved', JSON.stringify(savedArticleIds));
    } catch {
      // storage error fallback
    }
  }, [savedArticleIds]);

  // Main Hero selection list (can cycle through primary articles)
  const heroMainCandidates = useMemo(() => {
    return articles.filter((a) => a.isHeroMain || a.views > 10000);
  }, [articles]);

  const [heroMainIndex, setHeroMainIndex] = useState(0);

  const mainHeroArticle = heroMainCandidates[heroMainIndex % heroMainCandidates.length] || articles[0];

  const secondaryHeroArticles = useMemo(() => {
    return articles.filter((a) => a.id !== mainHeroArticle.id && a.isHeroSecondary);
  }, [articles, mainHeroArticle]);

  const recentStripArticles = useMemo(() => {
    return articles.filter((a) => a.isRecentStrip || a.category === 'cartagena' || a.category === 'colombia');
  }, [articles]);

  // Sports articles
  const sportsFeatured = useMemo(() => {
    return articles.find((a) => a.category === 'esportes' && a.id.includes('real-cartagena')) || 
           articles.find((a) => a.category === 'esportes') || articles[0];
  }, [articles]);

  const sportsList = useMemo(() => {
    return articles.filter((a) => a.category === 'esportes' && a.id !== sportsFeatured.id);
  }, [articles, sportsFeatured]);

  // Regional (Cartagena & Bolívar)
  const regionalArticles = useMemo(() => {
    return articles.filter((a) => a.category === 'cartagena' || a.category === 'bolivar');
  }, [articles]);

  // Politics & Security
  const politicsSecurityArticles = useMemo(() => {
    return articles.filter((a) => a.category === 'politica' || a.category === 'seguranca');
  }, [articles]);

  // Popular / Latest for sidebar
  const popularArticles = useMemo(() => {
    return [...articles].sort((a, b) => b.views - a.views);
  }, [articles]);

  const latestArticles = useMemo(() => {
    return [...articles].sort((a, b) => b.formattedTime.localeCompare(a.formattedTime));
  }, [articles]);

  // Bookmark handlers
  const handleToggleBookmark = (article: Article) => {
    setSavedArticleIds((prev) => {
      if (prev.includes(article.id)) {
        return prev.filter((id) => id !== article.id);
      } else {
        return [...prev, article.id];
      }
    });
  };

  const savedArticles = useMemo(() => {
    return articles.filter((a) => savedArticleIds.includes(a.id));
  }, [articles, savedArticleIds]);

  // Comments handlers
  const handleAddComment = (articleId: string, commentData: Omit<CommentItem, 'id' | 'likes'>) => {
    const newComment: CommentItem = {
      id: `comm_${Date.now()}`,
      authorName: commentData.authorName,
      date: commentData.date,
      content: commentData.content,
      likes: 0,
    };

    setArticles((prev) =>
      prev.map((art) => {
        if (art.id === articleId) {
          const updated = {
            ...art,
            comments: [newComment, ...art.comments],
          };
          if (selectedArticle?.id === articleId) {
            setSelectedArticle(updated);
          }
          return updated;
        }
        return art;
      })
    );
  };

  const handleLikeComment = (articleId: string, commentId: string) => {
    setArticles((prev) =>
      prev.map((art) => {
        if (art.id === articleId) {
          const updatedComments = art.comments.map((c) =>
            c.id === commentId ? { ...c, likes: c.likes + 1 } : c
          );
          const updated = { ...art, comments: updatedComments };
          if (selectedArticle?.id === articleId) {
            setSelectedArticle(updated);
          }
          return updated;
        }
        return art;
      })
    );
  };

  // Article selection helper
  const handleSelectArticle = (art: Article) => {
    // increment views locally
    setArticles((prev) =>
      prev.map((a) => (a.id === art.id ? { ...a, views: a.views + 1 } : a))
    );
    setSelectedArticle({ ...art, views: art.views + 1 });
  };

  // Related articles for the modal
  const modalRelated = useMemo(() => {
    if (!selectedArticle) return [];
    return articles.filter(
      (a) => a.id !== selectedArticle.id && (a.category === selectedArticle.category || a.tags.some(t => selectedArticle.tags.includes(t)))
    );
  }, [articles, selectedArticle]);

  // Current category info object
  const currentCategoryInfo = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return CATEGORIES.find((c) => c.id === selectedCategory) || null;
  }, [selectedCategory]);

  const categoryFilteredArticles = useMemo(() => {
    if (selectedCategory === 'all') return [];
    return articles.filter((a) => a.category === selectedCategory);
  }, [articles, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5] text-[#222222]">
      {/* 1. Header Top Bar (Date, Weather, Socials) */}
      <HeaderTopBar
        onOpenInstitutional={(tab) => {
          setInstitutionalTab(tab);
          setInstitutionalModalOpen(true);
        }}
        onOpenAdvertise={() => setAdvertiseModalOpen(true)}
      />

      {/* 2. Main Header (NP News Portal Logo + 728x90px Ad Banner) */}
      <HeaderMain
        onLogoClick={() => {
          setSelectedCategory('all');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAdvertise={() => setAdvertiseModalOpen(true)}
      />

      {/* 3. Navigation Bar (Teal background, Home, Categories, Search, Bookmarks) */}
      <NavigationBar
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenBookmarks={() => setBookmarksModalOpen(true)}
        savedCount={savedArticleIds.length}
      />

      {/* 4. Breaking News Ticker (Right under navbar) */}
      <BreakingNewsTicker
        onSelectHeadline={(articleId) => {
          const found = articles.find((a) => a.id === articleId);
          if (found) handleSelectArticle(found);
        }}
      />

      {/* 5. Main Body Area */}
      <main className="flex-1">
        {selectedCategory === 'all' ? (
          <>
            {/* --- HERO MAGAZINE 5-STORY BLOCK (50% left, 2x2 right) --- */}
            <HeroMagazineGrid
              mainArticle={mainHeroArticle}
              secondaryArticles={secondaryHeroArticles}
              onSelectArticle={handleSelectArticle}
              onNextMainHero={() => setHeroMainIndex((prev) => prev + 1)}
              onPrevMainHero={() =>
                setHeroMainIndex((prev) => (prev === 0 ? heroMainCandidates.length - 1 : prev - 1))
              }
            />

            {/* --- RECENT NEWS 4-ITEM HORIZONTAL STRIP --- */}
            <RecentNewsStrip
              articles={recentStripArticles}
              onSelectArticle={handleSelectArticle}
            />

            {/* --- 2-COLUMN MAIN CONTENT & SIDEBAR --- */}
            <div className="max-w-[1240px] mx-auto px-4 pb-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* LEFT CONTENT COLUMN (8 of 12 cols = ~67%) */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* SPORTS SECTION (1 big card on left + 4 stacked right items) */}
                  <SportsSection
                    featuredArticle={sportsFeatured}
                    listArticles={sportsList}
                    onSelectArticle={handleSelectArticle}
                    onViewAllSports={() => setSelectedCategory('esportes')}
                  />

                  {/* SPONSOR MID-PAGE STRIP */}
                  <div 
                    onClick={() => setAdvertiseModalOpen(true)}
                    className="p-3 sm:px-6 rounded-lg bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 cursor-pointer border border-slate-700 shadow-xs hover:border-[#008e9b] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded bg-[#008e9b] text-white">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 font-headline">Espacio Publicitario</span>
                        <p className="text-xs text-slate-300 font-normal">¿Desea pautar ante más de 450.000 lectores en Bolívar y el Caribe? Contáctenos hoy.</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded shrink-0 transition-colors font-headline">
                      Tarifario 2026
                    </span>
                  </div>

                  {/* CARTAGENA & BOLÍVAR REGIONAL SECTION (2 side-by-side cards) */}
                  <RegionalSection
                    articles={regionalArticles}
                    onSelectArticle={handleSelectArticle}
                    onViewCategory={(cat) => setSelectedCategory(cat)}
                  />

                  {/* POLITICS & SECURITY SECTION */}
                  <PoliticsSecuritySection
                    articles={politicsSecurityArticles}
                    onSelectArticle={handleSelectArticle}
                    onSelectCategory={(cat) => setSelectedCategory(cat)}
                  />

                </div>

                {/* RIGHT SIDEBAR COLUMN (4 of 12 cols = ~33%) */}
                <div className="lg:col-span-4">
                  <Sidebar
                    latestArticles={latestArticles}
                    popularArticles={popularArticles}
                    onSelectArticle={handleSelectArticle}
                    onOpenAdvertise={() => setAdvertiseModalOpen(true)}
                  />
                </div>

              </div>
            </div>
          </>
        ) : (
          /* --- CATEGORY FILTERED VIEW --- */
          <div className="space-y-4">
            {currentCategoryInfo && (
              <CategoryPageHeader
                category={currentCategoryInfo}
                articleCount={categoryFilteredArticles.length}
                onClearCategory={() => setSelectedCategory('all')}
              />
            )}

            <div className="max-w-[1240px] mx-auto px-4 pb-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Category Articles List (Left column) */}
                <div className="lg:col-span-8 space-y-4">
                  {categoryFilteredArticles.length === 0 ? (
                    <div className="bg-white rounded-lg p-10 border border-slate-200 text-center text-slate-500">
                      <p className="text-sm font-semibold">No hay noticias en esta sección por el momento.</p>
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className="mt-3 px-4 py-2 bg-[#008e9b] text-white text-xs font-bold rounded"
                      >
                        Volver a Portada
                      </button>
                    </div>
                  ) : (
                    categoryFilteredArticles.map((art) => (
                      <article
                        key={art.id}
                        onClick={() => handleSelectArticle(art)}
                        className="bg-white rounded-lg p-4 border border-slate-200 hover:border-[#008e9b] transition-all cursor-pointer shadow-xs flex flex-col sm:flex-row gap-4 group"
                      >
                        <div className="w-full sm:w-[220px] h-[160px] rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                          <NewsImage
                            src={art.imageUrl}
                            alt={art.title}
                            categoryLabel={art.categoryLabel}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${art.badgeBg} ${art.badgeText} font-headline`}>
                                {art.categoryLabel}
                              </span>
                              <span className="text-xs text-slate-400 font-medium">{art.date}</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold font-headline text-slate-900 group-hover:text-[#008e9b] transition-colors leading-snug mb-2">
                              {art.title}
                            </h3>
                            <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                              {art.summary}
                            </p>
                          </div>
                          <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100 mt-2 font-medium">
                            <span className="flex items-center gap-1">
                              <User className="w-3.5 h-3.5" />
                              {art.author.name}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-3.5 h-3.5" />
                              {art.views.toLocaleString()} lecturas
                            </span>
                          </div>
                        </div>
                      </article>
                    ))
                  )}
                </div>

                {/* Right Column: Standard Sidebar */}
                <div className="lg:col-span-4">
                  <Sidebar
                    latestArticles={latestArticles}
                    popularArticles={popularArticles}
                    onSelectArticle={handleSelectArticle}
                    onOpenAdvertise={() => setAdvertiseModalOpen(true)}
                  />
                </div>

              </div>
            </div>
          </div>
        )}
      </main>

      {/* 6. Footer Institucional */}
      <Footer
        recentArticles={latestArticles}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectArticle={handleSelectArticle}
        onOpenInstitutional={(tab) => {
          setInstitutionalTab(tab);
          setInstitutionalModalOpen(true);
        }}
        onOpenAdvertise={() => setAdvertiseModalOpen(true)}
      />

      {/* --- MODALS & DRAWERS --- */}

      {/* Article Full Reader Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onSelectArticle={handleSelectArticle}
          relatedArticles={modalRelated}
          isBookmarked={savedArticleIds.includes(selectedArticle.id)}
          onToggleBookmark={handleToggleBookmark}
          onAddComment={handleAddComment}
          onLikeComment={handleLikeComment}
        />
      )}

      {/* Search Modal */}
      <SearchModal
        articles={articles}
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectArticle={handleSelectArticle}
      />

      {/* Bookmarks Modal */}
      <BookmarksModal
        isOpen={bookmarksModalOpen}
        onClose={() => setBookmarksModalOpen(false)}
        savedArticles={savedArticles}
        onSelectArticle={handleSelectArticle}
        onRemoveBookmark={(id) => setSavedArticleIds((prev) => prev.filter((i) => i !== id))}
        onClearAll={() => setSavedArticleIds([])}
      />

      {/* Advertise / Commercial Media Kit Modal */}
      <AdvertiseModal
        isOpen={advertiseModalOpen}
        onClose={() => setAdvertiseModalOpen(false)}
      />

      {/* Institutional (About, Staff, Contact) Modal */}
      <InstitutionalModal
        initialTab={institutionalTab}
        isOpen={institutionalModalOpen}
        onClose={() => setInstitutionalModalOpen(false)}
      />

    </div>
  );
}
