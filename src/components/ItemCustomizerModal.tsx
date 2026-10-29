import React, { useState, useEffect } from 'react';
import { AddonOption, Currency, Language, MenuItem, MenuItemSize } from '../types/menu';
import { translations } from '../data/translations';
import { addonsList, currencyConfigs } from '../data/menuData';
import { X, Check, Plus, Minus, Sparkles, ShieldAlert } from 'lucide-react';

interface ItemCustomizerModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
  currentCurrency: Currency;
  preselectedSize?: MenuItemSize;
  onAddToCart: (
    item: MenuItem,
    size: MenuItemSize | undefined,
    selectedAddons: AddonOption[],
    condensedMilkChoice: 'yes' | 'no' | 'none',
    customNotes: string,
    quantity: number,
    itemTotalBRL: number
  ) => void;
}

export const ItemCustomizerModal: React.FC<ItemCustomizerModalProps> = ({
  item,
  isOpen,
  onClose,
  currentLanguage,
  currentCurrency,
  preselectedSize,
  onAddToCart,
}) => {
  const t = translations[currentLanguage];
  const currency = currencyConfigs[currentCurrency] || currencyConfigs.BRL;

  const [selectedSize, setSelectedSize] = useState<MenuItemSize | undefined>(preselectedSize);
  const [selectedAddons, setSelectedAddons] = useState<AddonOption[]>([]);
  const [condensedMilk, setCondensedMilk] = useState<'yes' | 'no' | 'none'>('none');
  const [customNotes, setCustomNotes] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  // Sync when item opens
  useEffect(() => {
    if (item) {
      if (preselectedSize) {
        setSelectedSize(preselectedSize);
      } else if (item.sizes && item.sizes.length > 0) {
        setSelectedSize(item.sizes.find((s) => s.isDefault) || item.sizes[0]);
      } else {
        setSelectedSize(undefined);
      }
      setSelectedAddons([]);
      // Default condensed milk logic for Antestresse
      if (item.id === 'antestresse') {
        setCondensedMilk('yes');
      } else {
        setCondensedMilk('none');
      }
      setCustomNotes('');
      setQuantity(1);
    }
  }, [item, preselectedSize]);

  if (!isOpen || !item) return null;

  const toggleAddon = (addon: AddonOption) => {
    if (selectedAddons.some((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const basePrice = item.basePrice;
  const sizeDelta = selectedSize ? selectedSize.priceDelta : 0;
  const addonsTotal = selectedAddons.reduce((acc, curr) => acc + curr.price, 0);
  const unitTotalBRL = basePrice + sizeDelta + addonsTotal;
  const grandTotalBRL = unitTotalBRL * quantity;

  const handleConfirm = () => {
    onAddToCart(
      item,
      selectedSize,
      selectedAddons,
      condensedMilk,
      customNotes.trim(),
      quantity,
      grandTotalBRL
    );
    onClose();
  };

  const localizedName = item.name[currentLanguage] || item.name.pt;
  const localizedDesc = item.description[currentLanguage] || item.description.pt;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-emerald-100 flex flex-col max-h-[92vh]">
        {/* Modal Header with vibrant gradient or photo backdrop */}
        <div className={`p-5 sm:p-6 bg-gradient-to-r ${item.imageGradient} text-white relative overflow-hidden`}>
          {item.photoUrl && (
            <div className="absolute inset-0 z-0 opacity-30">
              <img src={item.photoUrl} alt={localizedName} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative z-10">
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-xs text-[11px] font-bold uppercase tracking-wider mb-2">
              Vitta Mix
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-heading leading-tight mb-1">
              {localizedName}
            </h2>
            {item.slogan && (
              <p className="text-xs font-semibold text-amber-200 mb-1">
                "{item.slogan[currentLanguage] || item.slogan.pt}"
              </p>
            )}
            <p className="text-xs sm:text-sm text-white/90 line-clamp-2">
              {localizedDesc}
            </p>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-stone-800 text-sm flex-1">
          {/* Sizes Selection */}
          {item.sizes && item.sizes.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-stone-900 uppercase tracking-wide mb-2">
                {t.customizer.chooseSize}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {item.sizes.map((s, idx) => {
                  const isSelected = selectedSize?.volumeOrLabel === s.volumeOrLabel;
                  const sizePriceBRL = item.basePrice + s.priceDelta;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500/20'
                          : 'border-stone-200 hover:border-emerald-200 bg-white'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-stone-900">
                          {s.name[currentLanguage] || s.name.pt}
                        </div>
                        <div className="text-xs text-stone-500">{s.volumeOrLabel}</div>
                        <div className="text-xs font-semibold text-emerald-800 mt-1">
                          {currency.format(sizePriceBRL, currency.rateFromBRL)}
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-600 text-white'
                            : 'border-stone-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Condensed Milk Option (especially for Antestresse or juices) */}
          {(item.id === 'antestresse' || item.categoryId === 'acai_mix') && (
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
              <label className="block text-xs font-bold text-amber-950 uppercase tracking-wide mb-2">
                {t.customizer.condensedMilkPrompt}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCondensedMilk('yes')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left ${
                    condensedMilk === 'yes'
                      ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-xs'
                      : 'bg-white text-stone-700 border-stone-200'
                  }`}
                >
                  🥛 {t.customizer.condensedMilkYes}
                </button>
                <button
                  type="button"
                  onClick={() => setCondensedMilk('no')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left ${
                    condensedMilk === 'no'
                      ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-xs'
                      : 'bg-white text-stone-700 border-stone-200'
                  }`}
                >
                  🍃 {t.customizer.condensedMilkNo}
                </button>
              </div>
            </div>
          )}

          {/* Add-ons List (Whey, Colágeno, Granola, Leite em pó) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-stone-900 uppercase tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{t.customizer.chooseAddons}</span>
              </label>
              <span className="text-[11px] text-stone-400">Opcional</span>
            </div>
            <div className="space-y-2">
              {addonsList.map((addon) => {
                const isSelected = selectedAddons.some((a) => a.id === addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon)}
                    className={`w-full p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80'
                        : 'border-stone-200 hover:border-emerald-200 bg-stone-50/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-600 text-white'
                            : 'border-stone-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="font-bold text-stone-900 text-xs sm:text-sm">
                          {addon.name[currentLanguage] || addon.name.pt}
                        </div>
                        {addon.highlight && (
                          <div className="text-[11px] text-emerald-700">
                            {addon.highlight[currentLanguage] || addon.highlight.pt}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-xs font-black text-stone-900">
                      +{currency.format(addon.price, currency.rateFromBRL)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preparation Notes */}
          <div>
            <label className="block text-xs font-bold text-stone-900 uppercase tracking-wide mb-1.5">
              {t.customizer.specialNotesPrompt}
            </label>
            <input
              type="text"
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder={t.customizer.specialNotesPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-2xl border border-stone-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs sm:text-sm outline-none"
            />
          </div>

          {/* Quantity Stepper */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-bold text-stone-900 uppercase tracking-wide">
              {t.customizer.quantity}
            </span>
            <div className="flex items-center gap-3 bg-stone-100 p-1 rounded-2xl border border-stone-200">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-xl bg-white text-stone-700 hover:bg-stone-200 flex items-center justify-center font-bold text-base transition-colors shadow-xs"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-black text-sm w-6 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 flex items-center justify-center font-bold text-base transition-colors shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer with live total and Add button */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] text-stone-500 uppercase font-semibold">Total do Item</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-950 font-heading">
              {currency.format(grandTotalBRL, currency.rateFromBRL)}
            </div>
            {currentCurrency !== 'BRL' && (
              <div className="text-[11px] text-stone-400">
                (R$ {grandTotalBRL.toFixed(2)})
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 max-w-xs py-3 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>{t.customizer.addToOrder}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
