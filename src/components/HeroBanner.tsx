import React, { useState, useEffect } from 'react';
import { Language } from '../types/menu';
import { translations } from '../data/translations';
import {
  Search,
  Sparkles,
  Heart,
  Zap,
  Leaf,
  Citrus,
  ShieldCheck,
  Instagram,
  Star,
  BookOpen,
  MapPin,
  Video,
  Image as ImageIcon,
} from 'lucide-react';
import { VITTA_ASSETS } from '../data/assets';

interface HeroBannerProps {
  currentLanguage: Language;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onScrollToCategory: (categoryId: string) => void;
  onOpenFruitGuide: () => void;
  onScrollToIfood?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  currentLanguage,
  searchTerm,
  onSearchChange,
  activeFilter,
  onFilterChange,
  onScrollToCategory,
  onOpenFruitGuide,
  onScrollToIfood,
}) => {
  const t = translations[currentLanguage];

  // Alternating background state (Video vs Image)
  const [bgMode, setBgMode] = useState<'video' | 'image'>('video');

  // Automatic alternating cycle every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setBgMode((prev) => (prev === 'video' ? 'image' : 'video'));
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const filterTabs = [
    { id: 'all', label: t.filters.all, icon: Sparkles },
    { id: 'popular', label: t.filters.favorites, icon: Heart },
    { id: 'energy', label: t.filters.energy, icon: Zap },
    { id: 'detox', label: t.filters.detox, icon: Leaf },
    { id: 'citrus', label: t.filters.citrus, icon: Citrus },
    { id: 'vegan', label: t.filters.vegan, icon: ShieldCheck },
  ];

  return (
    <div className="relative overflow-hidden bg-black text-white pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 min-h-[480px] sm:min-h-[540px] flex items-center justify-center">
      {/* BACKGROUND LAYER 1: VIDEO (Clear, vibrant beach video) */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 pointer-events-none ${
          bgMode === 'video' ? 'opacity-90' : 'opacity-0'
        }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={VITTA_ASSETS.heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* BACKGROUND LAYER 2: PHOTO (Natural colors) */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 pointer-events-none bg-cover bg-center ${
          bgMode === 'image' ? 'opacity-90' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${VITTA_ASSETS.heroImageBg})` }}
      />

      {/* SUBTLE NEUTRAL CONTRAST VIGNETTE (NO GREEN FILM) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/50 pointer-events-none" />

      {/* Manual Background Alternator Switch in top corner */}
      <button
        type="button"
        onClick={() => setBgMode(bgMode === 'video' ? 'image' : 'video')}
        className="absolute top-3 right-4 sm:right-6 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 hover:bg-black/60 text-white/90 text-[11px] font-semibold border border-white/20 backdrop-blur-md transition-all shadow-xs"
        title="Alternar fundo do Hero (Vídeo / Imagem)"
      >
        {bgMode === 'video' ? (
          <>
            <Video className="w-3 h-3 text-emerald-400" />
            <span>Fundo: Vídeo da Praia</span>
          </>
        ) : (
          <>
            <ImageIcon className="w-3 h-3 text-amber-300" />
            <span>Fundo: Foto Vitta Mix</span>
          </>
        )}
      </button>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        {/* Location & Beach Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/40 text-xs font-bold mb-4 backdrop-blur-md shadow-xs animate-in fade-in">
          <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 animate-bounce" />
          <span>Praia do Francês • O último quiosque da orla</span>
        </div>

        {/* Top Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800/80 text-emerald-200 border border-emerald-700/60 shadow-xs backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            {t.badgeNatural}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-200 border border-amber-300/30 shadow-xs backdrop-blur-xs">
            <Citrus className="w-3.5 h-3.5 text-amber-300" />
            {t.badgeFresh}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-200 border border-purple-400/30 shadow-xs backdrop-blur-xs">
            <span>🇧🇷 🇬🇧 🇪🇸 🇫🇷 🇯🇵 5 Idiomas</span>
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading leading-tight sm:leading-none mb-3 drop-shadow-sm">
          Vitta Mix <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-lime-300 bg-clip-text text-transparent">— Cardápio Completo</span>
        </h1>
        <p className="text-sm sm:text-lg text-emerald-100/90 max-w-2xl mx-auto font-normal mb-6 drop-shadow-xs">
          {t.brandSubtitle}
        </p>

        {/* Quick Social & Delivery Shortcut Pill bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8 text-xs">
          {onScrollToIfood && (
            <button
              onClick={onScrollToIfood}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-600/90 hover:bg-rose-600 text-white font-bold transition-all backdrop-blur-xs border border-rose-400/40 shadow-sm"
            >
              <span>🛵 Peça pelo iFood</span>
            </button>
          )}

          <a
            href="https://www.instagram.com/vittamix.oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium transition-all backdrop-blur-xs border border-white/20"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>Instagram: <strong>@vittamix.oficial</strong></span>
          </a>

          <a
            href="https://www.google.com/maps/search/Vitta+Mix+Praia+do+Frances"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium transition-all backdrop-blur-xs border border-white/20"
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Avalie 5 Estrelas no Google</span>
          </a>

          <button
            onClick={onOpenFruitGuide}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600/70 hover:bg-emerald-600 text-emerald-100 font-medium transition-all backdrop-blur-xs border border-emerald-400/30"
          >
            <BookOpen className="w-3.5 h-3.5 text-lime-300" />
            <span>Frutas Nativas Raras</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative mb-6">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-emerald-300 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white/15 hover:bg-white/20 focus:bg-white text-stone-100 focus:text-stone-900 placeholder-emerald-100/70 focus:placeholder-stone-400 border border-emerald-400/40 focus:border-emerald-500 shadow-xl backdrop-blur-md outline-none transition-all text-sm sm:text-base font-medium"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3.5 text-stone-400 hover:text-stone-600 text-xs px-2 py-1 rounded-md bg-white/20"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Fast Category Jump Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <button
            onClick={() => onScrollToCategory('special_juices')}
            className="px-3 py-1.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 text-xs font-semibold border border-emerald-600/40 transition-colors backdrop-blur-xs"
          >
            🥤 {t.categories.special_juices}
          </button>
          <button
            onClick={() => onScrollToCategory('acai_mix')}
            className="px-3 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-purple-200 text-xs font-semibold border border-purple-700/50 transition-colors backdrop-blur-xs"
          >
            🫐 {t.categories.acai_mix}
          </button>
          <button
            onClick={() => onScrollToCategory('addons')}
            className="px-3 py-1.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 text-xs font-semibold border border-emerald-600/40 transition-colors backdrop-blur-xs"
          >
            💪 {t.categories.addons}
          </button>
          <button
            onClick={() => onScrollToCategory('pulp_juices')}
            className="px-3 py-1.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 text-xs font-semibold border border-emerald-600/40 transition-colors backdrop-blur-xs"
          >
            🥭 {t.categories.pulp_juices}
          </button>
          <button
            onClick={() => onScrollToCategory('drinks_snacks')}
            className="px-3 py-1.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 text-xs font-semibold border border-emerald-600/40 transition-colors backdrop-blur-xs"
          >
            🥖 {t.categories.drinks_snacks}
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onFilterChange(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-xs backdrop-blur-xs ${
                  isActive
                    ? 'bg-amber-400 text-emerald-950 font-bold scale-105 shadow-md shadow-amber-400/20'
                    : 'bg-emerald-950/70 text-emerald-200 hover:bg-emerald-900 hover:text-white border border-emerald-700/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-950' : 'text-emerald-300'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
