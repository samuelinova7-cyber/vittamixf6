import React from 'react';
import { Currency, Language } from '../types/menu';
import { LanguageSelector } from './LanguageSelector';
import { CurrencySelector } from './CurrencySelector';
import { ShoppingBag, Star, Sparkles, BookOpen, MapPin, UtensilsCrossed, Instagram } from 'lucide-react';
import { currencyConfigs } from '../data/menuData';
import { VITTA_ASSETS } from '../data/assets';

interface HeaderProps {
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  currentCurrency: Currency;
  onSelectCurrency: (curr: Currency) => void;
  cartItemCount: number;
  cartTotalBRL: number;
  onOpenCart: () => void;
  onOpenFruitGuide: () => void;
  onOpenReviews: () => void;
  onScrollToIfood?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onSelectLanguage,
  currentCurrency,
  onSelectCurrency,
  cartItemCount,
  cartTotalBRL,
  onOpenCart,
  onOpenFruitGuide,
  onOpenReviews,
  onScrollToIfood,
}) => {
  const currency = currencyConfigs[currentCurrency] || currencyConfigs.BRL;

  const tickerItems = [
    '📍 Praia do Francês: O último quiosque da orla!',
    '🛵 Peça no iFood com entrega rápida na orla e região!',
    '🌿 100% Natural • Feito na Hora • Frutas Frescas Selecionadas',
    '⭐ Avalie a Vitta Mix no Google com 5 Estrelas!',
    '📸 Siga no Instagram: @vittamix e @vittamix.oficial',
    '⚡ Suco Antigripal & Suco Detox Funcional: Bem geladinho!',
    '🫐 Mix de Açaí Especial: Energia e Superalimentos!',
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs transition-all">
      {/* Running Info Ticker (Faixa de Informações Correndo) */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-emerald-100 py-1.5 overflow-hidden border-b border-emerald-800/60 text-xs font-semibold select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {/* Repeating sequence for continuous seamless loop */}
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="text-amber-300">•</span>
              <span className="hover:text-white transition-colors cursor-pointer">{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand identity with official Logo */}
        <div
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-md shadow-emerald-700/20 bg-emerald-950 flex-shrink-0 group-hover:scale-105 transition-transform">
            <img
              src={VITTA_ASSETS.logo}
              alt="Vitta Mix Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Graceful fallback to leaf icon if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-emerald-950 font-heading">
                Vitta<span className="text-emerald-600">Mix</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 hidden sm:inline-block">
                Praia do Francês
              </span>
            </div>
            <span className="text-[11px] text-stone-500 hidden sm:flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-600 inline" />
              <span>O último quiosque da orla</span>
            </span>
          </div>
        </div>

        {/* Quick action triggers */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* iFood Quick Button */}
          {onScrollToIfood && (
            <button
              type="button"
              onClick={onScrollToIfood}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors shadow-xs"
              title="Peça no iFood"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-rose-600" />
              <span>Pedir no iFood</span>
            </button>
          )}

          {/* Fruit Guide button */}
          <button
            type="button"
            onClick={onOpenFruitGuide}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/80 transition-colors shadow-xs"
            title="Guia de Frutas Brasileiras"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Guia das Frutas</span>
          </button>

          {/* Review Quick Trigger */}
          <button
            type="button"
            onClick={onOpenReviews}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200 transition-colors shadow-xs"
            title="Avaliar no Google"
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span className="font-bold">5.0</span>
            <span className="hidden md:inline text-[11px] text-amber-800">Google</span>
          </button>

          {/* Currency Switcher */}
          <CurrencySelector
            currentCurrency={currentCurrency}
            onSelectCurrency={onSelectCurrency}
          />

          {/* Language Selector */}
          <LanguageSelector
            currentLanguage={currentLanguage}
            onSelectLanguage={onSelectLanguage}
          />

          {/* Cart Bag Button */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 pl-3 pr-3.5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-md shadow-emerald-700/25 transition-all transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            title="Abrir Sacola de Pedidos"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-bold text-xs sm:text-sm">
              {currency.format(cartTotalBRL, currency.rateFromBRL)}
            </span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-emerald-950 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-xs border-2 border-white animate-bounce">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
