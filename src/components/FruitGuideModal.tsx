import React, { useState } from 'react';
import { Language, PulpFruit } from '../types/menu';
import { translations } from '../data/translations';
import { brazilianPulpFruits } from '../data/fruitData';
import { X, Sparkles, MapPin, Citrus, Compass } from 'lucide-react';

interface FruitGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
  onSelectFruitJuice?: (fruitName: string) => void;
}

export const FruitGuideModal: React.FC<FruitGuideModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  onSelectFruitJuice,
}) => {
  const t = translations[currentLanguage];
  const [activeFruit, setActiveFruit] = useState<PulpFruit>(brazilianPulpFruits[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-emerald-100 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-950 via-teal-950 to-emerald-900 text-white relative border-b border-emerald-800">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 text-[11px] font-bold uppercase tracking-wider">
              {t.fruitGuide.badge}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black font-heading leading-tight mb-1">
            {t.fruitGuide.title}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-200/90 max-w-xl">
            {t.fruitGuide.subtitle}
          </p>
        </div>

        {/* Modal Content - Left fruit selector tabs + Right detail display */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Fruit selector list */}
          <div className="md:w-1/3 bg-stone-50 border-r border-stone-200 p-3 sm:p-4 overflow-y-auto space-y-1.5 max-h-52 md:max-h-none">
            <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider px-2 py-1">
              Frutas Nativas:
            </div>
            {brazilianPulpFruits.map((fruit) => {
              const isSelected = activeFruit.id === fruit.id;
              const name = fruit.name[currentLanguage] || fruit.name.pt;
              return (
                <button
                  key={fruit.id}
                  type="button"
                  onClick={() => setActiveFruit(fruit)}
                  className={`w-full text-left px-3 py-2.5 rounded-2xl transition-all flex items-center justify-between text-xs sm:text-sm font-semibold ${
                    isSelected
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'text-stone-700 hover:bg-stone-200/70'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: fruit.color }}
                    />
                    <span className="truncate">{name}</span>
                  </div>
                  {isSelected && <span className="text-amber-300 text-xs">●</span>}
                </button>
              );
            })}
          </div>

          {/* Fruit Detailed View */}
          <div className="md:w-2/3 p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
            <div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-3">
              <div>
                <h3 className="text-2xl font-black text-stone-900 font-heading">
                  {activeFruit.name[currentLanguage] || activeFruit.name.pt}
                </h3>
                {activeFruit.scientificName && (
                  <span className="text-xs text-stone-400 italic block">
                    {activeFruit.scientificName}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span className="truncate max-w-[160px]">{activeFruit.origin}</span>
              </div>
            </div>

            {/* Taste Bars */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                  <span>{t.fruitGuide.sweetness}</span>
                  <span className="text-emerald-700">{activeFruit.sweetness}/5</span>
                </div>
                <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-300"
                    style={{ width: `${(activeFruit.sweetness / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                  <span>{t.fruitGuide.tartness}</span>
                  <span className="text-emerald-700">{activeFruit.tartness}/5</span>
                </div>
                <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${(activeFruit.tartness / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Flavor notes */}
            <div>
              <div className="text-xs font-bold text-emerald-950 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                <Citrus className="w-3.5 h-3.5 text-amber-500" />
                <span>{t.fruitGuide.flavor}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-amber-50/50 p-3 rounded-2xl border border-amber-100">
                {activeFruit.flavorProfile[currentLanguage] || activeFruit.flavorProfile.pt}
              </p>
            </div>

            {/* Health Benefits */}
            <div>
              <div className="text-xs font-bold text-emerald-950 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.fruitGuide.benefits}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100">
                {activeFruit.benefits[currentLanguage] || activeFruit.benefits.pt}
              </p>
            </div>

            {/* Action button to order in menu */}
            {onSelectFruitJuice && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onSelectFruitJuice(activeFruit.name.pt);
                    onClose();
                  }}
                  className="w-full py-2.5 px-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2"
                >
                  <span>Pedir Suco de {activeFruit.name[currentLanguage] || activeFruit.name.pt} no Cardápio</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
