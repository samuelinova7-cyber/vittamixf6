import React, { useState, useRef, useEffect } from 'react';
import { Currency } from '../types/menu';
import { Coins, ChevronDown } from 'lucide-react';
import { currencyConfigs } from '../data/menuData';

interface CurrencySelectorProps {
  currentCurrency: Currency;
  onSelectCurrency: (curr: Currency) => void;
}

const currencies: { code: Currency; symbol: string; label: string }[] = [
  { code: 'BRL', symbol: 'R$', label: 'Real Brasileiro' },
  { code: 'USD', symbol: '$', label: 'US Dollar' },
  { code: 'EUR', symbol: '€', label: 'Euro' },
  { code: 'JPY', symbol: '¥', label: 'Japanese Yen' },
];

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currentCurrency,
  onSelectCurrency,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const active = currencyConfigs[currentCurrency] || currencyConfigs.BRL;

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 hover:border-emerald-400 text-stone-800 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm font-semibold"
        title="Moeda / Currency"
      >
        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
          {active.symbol}
        </span>
        <span className="hidden sm:inline">{currentCurrency}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white shadow-xl ring-1 ring-black/10 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 border border-emerald-100">
          <div className="px-3 py-1.5 text-[11px] font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-50 flex items-center gap-1.5">
            <Coins className="w-3.5 h-3.5 text-emerald-600" />
            <span>Moeda / Currency</span>
          </div>
          {currencies.map((c) => {
            const isSelected = c.code === currentCurrency;
            return (
              <button
                key={c.code}
                onClick={() => {
                  onSelectCurrency(c.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2 flex items-center justify-between text-xs sm:text-sm transition-colors ${
                  isSelected
                    ? 'bg-emerald-50 text-emerald-900 font-bold'
                    : 'text-stone-700 hover:bg-emerald-50/60 font-medium'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center text-xs font-bold">
                    {c.symbol}
                  </span>
                  <div>
                    <div>{c.code}</div>
                    <div className="text-[10px] text-stone-400">{c.label}</div>
                  </div>
                </div>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
