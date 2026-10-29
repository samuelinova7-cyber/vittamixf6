import React from 'react';
import { Language } from '../types/menu';
import { translations } from '../data/translations';
import { Heart, Clock, MapPin, Instagram, Star, Globe, UtensilsCrossed } from 'lucide-react';
import { VITTA_ASSETS } from '../data/assets';

interface FooterProps {
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenReviews: () => void;
  onOpenFruitGuide: () => void;
  onScrollToIfood?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLanguage,
  onSelectLanguage,
  onOpenReviews,
  onOpenFruitGuide,
  onScrollToIfood,
}) => {
  const t = translations[currentLanguage];

  const langs: { code: Language; name: string; flag: string }[] = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  return (
    <footer className="relative bg-black text-stone-200 pt-16 pb-16 border-t border-stone-800 overflow-hidden">
      {/* BACKGROUND VIDEO FOR FOOTER (Clear & Vivid) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-80">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={VITTA_ASSETS.footerVideo} type="video/mp4" />
        </video>
      </div>

      {/* NEUTRAL OVERLAY (NO GREEN FILM) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/75 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand info & Official Logo */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-lg shadow-emerald-900/50 bg-emerald-950 flex-shrink-0">
                <img
                  src={VITTA_ASSETS.logo}
                  alt="Vitta Mix Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white font-heading tracking-tight block">
                  Vitta<span className="text-emerald-400">Mix</span>
                </span>
                <span className="text-xs text-emerald-300/90 font-medium">
                  O sabor que te faz bem!
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-300 max-w-md leading-relaxed">
              {t.footer.motto}
            </p>

            {/* Location highlight */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start gap-2.5 max-w-md">
              <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-white text-xs sm:text-sm">
                  {VITTA_ASSETS.location.spot}
                </h5>
                <p className="text-[11px] text-stone-400">
                  {VITTA_ASSETS.location.city}
                </p>
              </div>
            </div>

            {/* Social and Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={VITTA_ASSETS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-900/60 hover:bg-pink-800 text-pink-200 text-xs font-bold transition-colors border border-pink-700/50"
                title="Instagram @vittamix.oficial"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@vittamix.oficial</span>
              </a>

              <button
                type="button"
                onClick={onOpenReviews}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-900/60 hover:bg-amber-800 text-amber-200 text-xs font-bold transition-colors border border-amber-700/50"
                title="Avaliar no Google"
              >
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Avaliar 5★</span>
              </button>

              {onScrollToIfood && (
                <button
                  type="button"
                  onClick={onScrollToIfood}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-900/60 hover:bg-rose-800 text-rose-200 text-xs font-bold transition-colors border border-rose-700/50"
                  title="iFood"
                >
                  <UtensilsCrossed className="w-4 h-4 text-rose-400" />
                  <span>iFood</span>
                </button>
              )}
            </div>
          </div>

          {/* Operating hours & Location */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider font-heading">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>{t.footer.openingHours}</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {t.footer.hoursDetails}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenFruitGuide}
                className="text-xs text-emerald-400 hover:text-emerald-300 underline font-semibold block mb-2"
              >
                📖 Guia de Frutas Brasileiras & Regionais
              </button>
              <a
                href={VITTA_ASSETS.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:text-amber-300 underline font-semibold flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Ver no Google Maps (Praia do Francês)</span>
              </a>
            </div>
          </div>

          {/* Languages quick switch */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider font-heading">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>Idiomas / Languages</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {langs.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => onSelectLanguage(l.code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                    currentLanguage === l.code
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'bg-emerald-900/60 text-stone-300 hover:bg-emerald-800 hover:text-white'
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-emerald-900/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <div>
            © {new Date().getFullYear()} Vitta Mix — Praia do Francês. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>O sabor que te faz bem • 100% Natural</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
