import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types/menu';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
}

const languages: { code: Language; label: string; nativeName: string; flag: string }[] = [
  { code: 'pt', label: 'Português', nativeName: 'Português (BR)', flag: '🇧🇷' },
  { code: 'en', label: 'English', nativeName: 'English (US/UK)', flag: '🇬🇧' },
  { code: 'es', label: 'Español', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'ja', label: '日本語', nativeName: '日本語 (Japanese)', flag: '🇯🇵' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onSelectLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeLang = languages.find((l) => l.code === currentLanguage) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-stone-800/90 border border-emerald-200/80 hover:border-emerald-400 text-stone-800 dark:text-stone-100 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm font-medium"
        title="Alterar idioma / Switch language"
      >
        <span className="text-base sm:text-lg leading-none">{activeLang.flag}</span>
        <span className="font-semibold">{activeLang.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white shadow-xl ring-1 ring-black/10 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 border border-emerald-100">
          <div className="px-3 py-1.5 text-[11px] font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-50 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>Idiomas / Languages</span>
          </div>
          {languages.map((lang) => {
            const isSelected = lang.code === currentLanguage;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  onSelectLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2.5 flex items-center justify-between text-xs sm:text-sm transition-colors ${
                  isSelected
                    ? 'bg-emerald-50 text-emerald-900 font-bold'
                    : 'text-stone-700 hover:bg-emerald-50/60 hover:text-emerald-950 font-normal'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg leading-none">{lang.flag}</span>
                  <div>
                    <div className="leading-tight">{lang.label}</div>
                    <div className="text-[10px] text-stone-400">{lang.nativeName}</div>
                  </div>
                </div>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600 ring-2 ring-emerald-200" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
