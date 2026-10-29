import React, { useState } from 'react';
import { Currency, Language, MenuItem, MenuItemSize } from '../types/menu';
import { currencyConfigs } from '../data/menuData';
import { Plus, Sparkles, Heart, Check, Info } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  currentLanguage: Language;
  currentCurrency: Currency;
  onCustomize: (item: MenuItem, preselectedSize?: MenuItemSize) => void;
  isFavorite: boolean;
  onToggleFavorite: (itemId: string) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  currentLanguage,
  currentCurrency,
  onCustomize,
  isFavorite,
  onToggleFavorite,
}) => {
  const currency = currencyConfigs[currentCurrency] || currencyConfigs.BRL;

  // Selected size state
  const [selectedSize, setSelectedSize] = useState<MenuItemSize | undefined>(
    item.sizes ? item.sizes.find((s) => s.isDefault) || item.sizes[0] : undefined
  );

  const priceDelta = selectedSize ? selectedSize.priceDelta : 0;
  const currentPriceBRL = item.basePrice + priceDelta;

  // Bilingual helper
  const localizedName = item.name[currentLanguage] || item.name.pt;
  const localizedDesc = item.description[currentLanguage] || item.description.pt;
  const localizedIngr = item.ingredients[currentLanguage] || item.ingredients.pt;

  return (
    <div className="group relative bg-white rounded-3xl p-5 sm:p-6 border border-emerald-100/90 shadow-sm hover:shadow-xl hover:border-emerald-300/80 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top accent gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.imageGradient}`} />

      <div>
        {/* Header row: category badge + favorite button */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {item.popular && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>Destaque</span>
              </span>
            )}
            {item.tags.includes('detox') && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                🍃 Detox
              </span>
            )}
            {item.tags.includes('energy') && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                ⚡ Energia
              </span>
            )}
            {item.tags.includes('citrus') && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
                🍊 Vitamina C
              </span>
            )}
            {item.tags.includes('protein') && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                💪 Proteína
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => onToggleFavorite(item.id)}
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-300 hover:text-rose-500 transition-colors"
            title="Favoritar / Bookmark"
          >
            <Heart
              className={`w-4 h-4 transition-transform ${
                isFavorite ? 'fill-rose-500 text-rose-500 scale-110' : ''
              }`}
            />
          </button>
        </div>

        {/* Optional Photo Showcase */}
        {item.photoUrl && (
          <div className="relative mb-3 rounded-2xl overflow-hidden aspect-4/3 bg-stone-100 border border-emerald-100 shadow-inner group-hover:scale-[1.01] transition-transform">
            <img
              src={item.photoUrl}
              alt={localizedName}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {item.qualityBadge && (
              <span className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-xl bg-black/75 backdrop-blur-xs text-[10px] font-bold text-amber-300 border border-white/10 text-center">
                {item.qualityBadge[currentLanguage] || item.qualityBadge.pt}
              </span>
            )}
          </div>
        )}

        {/* Item Title */}
        <div className="mb-1.5">
          <h3 className="text-lg sm:text-xl font-black text-stone-900 group-hover:text-emerald-900 transition-colors font-heading leading-snug">
            {localizedName}
          </h3>
          {currentLanguage !== 'pt' && item.name.pt !== localizedName && (
            <span className="text-xs text-stone-400 italic block">
              Orig.: {item.name.pt}
            </span>
          )}
        </div>

        {/* Optional Slogan */}
        {item.slogan && (
          <p className="text-xs font-bold text-emerald-800 italic mb-2 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-100">
            "{item.slogan[currentLanguage] || item.slogan.pt}"
          </p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-stone-600 mb-3 leading-relaxed">
          {localizedDesc}
        </p>

        {/* Health Benefits List if available */}
        {item.benefitsList && item.benefitsList.length > 0 && (
          <div className="mb-3 p-2.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs">
            <div className="text-[11px] font-extrabold text-amber-950 uppercase tracking-wide mb-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>Benefícios para o Seu Corpo:</span>
            </div>
            <ul className="space-y-1 text-stone-700">
              {item.benefitsList.map((benefit, bIdx) => (
                <li key={bIdx} className="flex items-start gap-1.5 text-[11px] leading-tight">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{benefit[currentLanguage] || benefit.pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ingredients Pill Box */}
        <div className="mb-4 p-2.5 rounded-2xl bg-emerald-50/60 border border-emerald-100/60 text-xs">
          <div className="text-[11px] font-bold text-emerald-900 uppercase tracking-wide mb-1 flex items-center gap-1">
            <Info className="w-3 h-3 text-emerald-600" />
            <span>Ingredientes:</span>
          </div>
          <p className="text-stone-700 leading-normal">{localizedIngr}</p>
        </div>

        {/* Sizes switcher if item has multiple sizes */}
        {item.sizes && item.sizes.length > 1 && (
          <div className="mb-4">
            <div className="text-[11px] font-bold text-stone-500 mb-1.5 uppercase tracking-wide">
              Tamanho / Size:
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {item.sizes.map((s, idx) => {
                const isSelected = selectedSize?.volumeOrLabel === s.volumeOrLabel;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all text-left flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-300'
                    }`}
                  >
                    <div>
                      <div className="leading-tight font-bold">
                        {s.name[currentLanguage] || s.name.pt}
                      </div>
                      <div className={`text-[10px] ${isSelected ? 'text-emerald-200' : 'text-stone-400'}`}>
                        {s.volumeOrLabel}
                      </div>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Bottom price and action row */}
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3 mt-2">
        <div>
          <div className="text-[10px] text-stone-400 uppercase font-semibold">Valor</div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-black text-emerald-950 font-heading">
              {currency.format(currentPriceBRL, currency.rateFromBRL)}
            </span>
            {currentCurrency !== 'BRL' && (
              <span className="text-[11px] text-stone-400">
                (R$ {currentPriceBRL.toFixed(2)})
              </span>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCustomize(item, selectedSize)}
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/35 transition-all transform active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Personalizar</span>
        </button>
      </div>
    </div>
  );
};
